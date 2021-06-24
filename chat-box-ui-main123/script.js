$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow")
    })
})

function buttonSendText(sampleText) {
    let p = document.createElement("p");
    p.setAttribute("class", "userText");
    let span = document.createElement("span");
    p.append(span);
    let text = sampleText;
    span.append(text);
  
    document.getElementById("textInput").value = "";
    document.getElementById("chatbox").appendChild(p);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }
  
  function sendButton() {
    getResponse();
  }