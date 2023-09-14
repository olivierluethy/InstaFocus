function toggleExtension() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: function () {
        // Get all elements with the specific class name
        var elementsToToggle = document.querySelectorAll(".xw7yly9");

        // Toggle the visibility of each element
        elementsToToggle.forEach(function (element) {
          if (element.style.display === "none") {
            element.style.display = "block"; // Show the element
          } else {
            element.style.display = "none"; // Hide the element
          }
        });
      },
    });
  });
}
