function YellowPage() {
  document.body.style.backgroundColor = 'yellow';
}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: YellowPage
    });
  }
});