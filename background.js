var word = "hello";

chrome.runtime.onMessage.addListener(function Received(request, sender, SendResponse) {
    if (request.data == "getword") {
        word = request.text;
        console.log(word);
    }
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.data == "sendword") {
        //console.log(request.data);
        chrome.runtime.sendMessage(word, function (response) {
        });
    }
});