import fs from 'fs';
import path from 'path';
import { defineConfig } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';

function deleteDist() {
  return {
    buildStart() {
      if (!fs.existsSync('dist')) return;

      fs.readdir('dist', (err, files) => {
        if (err) {
          console.error(err);
          return;
        }

        files.forEach((file) => {
          const filePath = path.join('dist', file);
          fs.stat(filePath, (err, stats) => {
            if (err) {
              console.error(`Unable to retrieve file status: ${err}`);
              return;
            }
            if (!stats.isFile()) return;

            fs.unlink(filePath, err => {
              if (err) {
                console.error(`Unable to delete file: ${err}`);
                return;
              }
            });
          });
        })
      })
    },
  };
}

const plugins = [
  deleteDist(),
  typescript(),
  commonjs(),
  resolve(),
  json(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser());
}

export default defineConfig([
  {
    input: 'src/main.ts',
    output: [
      {
        format: 'cjs',
        dir: 'dist',
        name: 'index',
        globals: {
          axios: 'axios'
        }
      },
    ],
    plugins,
    external: ['axios']
  },
  {
    input: 'src/main.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/main.d.ts',
      },
    ],
    plugins: [dts()],
  }
]);
