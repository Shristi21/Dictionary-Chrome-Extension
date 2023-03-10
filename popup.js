
var text = 'welcome';
var list = document.getElementById('list');
chrome.runtime.sendMessage({ data: "sendword" }, function (res) {

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        //console.log(request);
        text = request;
        //console.log("this is popup.js data " + text);
        getdata(text);
    });
});


function getdata(word) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(url).then((response) => {
        return response.json();

    }).then((data) => {
        //console.log(data[0].meanings[0].definitions[0].definition);
        var item1 = document.createElement("li");
        if (data[0].meanings[0].definitions[0].definition != undefined) {
            var definitionNode = document.createTextNode("Definition - " + data[0].meanings[0].definitions[0].definition)
        }
        else {
            var definitionNode = document.createTextNode("Definition - " + "N/A")
        }
        item1.appendChild(definitionNode);
        list.appendChild(item1);
        var item2 = document.createElement("li");
        //console.log(data[0].meanings[0].synonyms);
        if (data[0].meanings[0].synonyms.length != 0) {
            var synonymNode = document.createTextNode("Synonyms - " + data[0].meanings[0].synonyms.toString());
        }
        else {
            var synonymNode = document.createTextNode("Synonym- " + "N/A")
        }
        item2.appendChild(synonymNode);
        list.appendChild(item2);

    })
}

// definition and synonym depends upon the part of speech there we will get responses according to that. 
