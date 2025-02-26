import { NstBrowser } from 'nstbrowser-sdk-node';

const nst = new NstBrowser('your_api_key', {
  apiAddress: 'http://localhost:8848/api/agent',
});

const {
  forceStart,
  start,
  startSome,
  stop,
  stopSome,
  stopAll,
  getRunningBrowser,
} = nst.browserManager();

// force start browser
forceStart('d8b7aeb2-0dd2-4169-938a-80ab03566da1');

// open browser
start('d8b7aeb2-0dd2-4169-938a-80ab03566da1');

// batch open browsers
startSome(['fd08ec59-071f-4f48-b225-b5dad5f9fda8', 'd8b7aeb2-0dd2-4169-938a-80ab03566da1']);

// stop browser
stop('d8b7aeb2-0dd2-4169-938a-80ab03566da1');

// batch stop browsers
stopSome(['fd08ec59-071f-4f48-b225-b5dad5f9fda8', 'd8b7aeb2-0dd2-4169-938a-80ab03566da1']);

// stop all running browsers
stopAll();

// get all running browsers
getRunningBrowser().then(res => {
  console.log('all running browsers info: ', res.data);
});
