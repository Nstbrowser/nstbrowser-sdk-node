import json
from urllib.parse import quote
from urllib.parse import urlencode

import requests
from requests.exceptions import HTTPError
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService

agent_host = '127.0.0.1'
agent_port = '8848'
agent_base_url = f'http://{agent_host}:{agent_port}'


# get_debugger_port: get debugger port from devtool api
def get_debugger_port(url: str):
    try:
        resp = requests.get(url).json()
        if resp['data'] is None:
            raise Exception(resp['msg'])
        port = resp['data']['port']
        return port

    except HTTPError:
        raise Exception(HTTPError.response)


# launchAndConnectToBrowser: launch a browser and connect to it
# you need to create a profile first
# support custom config
def launch_and_connect_to_browser():
    query = urlencode({
        'x-api-key': api_key,  # required
        'config': quote(json.dumps(config))
    })

    url = f'{agent_base_url}/devtool/launch/{profile_id}?{query}'
    print('devtool url: ' + url)

    port = get_debugger_port(url)
    debugger_address = f'{agent_host}:{port}'
    options = webdriver.ChromeOptions()
    options.add_experimental_option("debuggerAddress", debugger_address)

    # Replace with the corresponding version of WebDriver path.
    chrome_driver_path = r'./webdriver/chromedriver_113.exe'
    service = ChromeService(executable_path=chrome_driver_path)

    driver = webdriver.Chrome(service=service, options=options)
    driver.get("https://nstbrowser.io")
    driver.save_screenshot('screenshot.png')
    driver.close()
    driver.quit()


api_key = 'your api key'
profile_id = 'your profile_id'
config = {
    'headless': False,
    'autoClose': False,
    'remoteDebuggingPort': 9222,
}

launch_and_connect_to_browser()
