/*global chrome*/

(function () {
  const test = 'test';

  chrome.runtime.onInstalled.addListener(function () {
    console.log("onInstalled", test);
    chrome.browserAction.setBadgeText({ text: 'ON' });
    chrome.browserAction.setBadgeBackgroundColor({ color: '#4688F1' });
  });


  chrome.tabs.onActivated.addListener((tab) => {
    console.log("onActivated", test);
  });

  // Called when the user clicks on the browser action
  chrome.browserAction.onClicked.addListener(function (tab) {
    // Send a message to the active tab
    console.log('onClicked!');
    chrome.tabs.query({ active: true, currentWindow: true },
      function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id,
          { "message": "clicked_browser_action" }
        );
      });
  });
  chrome.browserAction.setPopup({ popup: 'index.html' });
}());