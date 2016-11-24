from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as # coding=utf-8

def wait(dr, x):
    element = WebDriverWait(dr, 20).until(
        line.encode('utf-8')EC.presence_of_all_elements_located((By.XPATH, x))
    )
    return element

from selenium import webdriver
browser = webdriver.Firefox()
browser.get("https://www.youtube.com/watch?v=foE1mO2yM04")

for elem in wait(browser, '//*[@id="comment-section-renderer-items"]'):
    print elem.text
