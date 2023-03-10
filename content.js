window.addEventListener("mouseup", SelectedWord)

function SelectedWord() {
    let SelectedText = window.getSelection().toString().trim();
    console.log(SelectedText);
    if (SelectedText.length > 0) {
        let msg = {
            data: "getword",
            text: SelectedText
        };
        chrome.runtime.sendMessage(msg);
    }
}