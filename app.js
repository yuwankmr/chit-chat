var chathistelemnt = document.getElementsByClassName("chat-history")[0];
chathistelemnt.scrollTo(0,chathistelemnt.scrollHeight);

function togglechatbox(){
    document.getElementsByClassName("chat-container")[0].classList.toggle("visible");
    chathistelemnt.scrollTo(0,chathistelemnt.scrollHeight);
}
function togglecontactlist(){
    document.getElementsByClassName("chat-contacts-list")[0].classList.toggle("visible");
}

// Find url bi=egin

function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a target="_blank" href="' + url + '">' + url + '</a>';
    })
}

// find url end

function sendthismsg(){
    var chatmsg = urlify(document.getElementById("chat-input").value.trim());
    document.getElementById("chat-input").value = "";
    if(chatmsg == ""){
        return;
    }
    var chat_datetime = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});

    chathistelemnt.innerHTML +=`
    <div class="chat-message-wrap">
                        <div class="chat-message sent">
                            <div class="chat-message-body">
                                ${chatmsg}
                            </div>
                            <span class="chat-message-time">
                                ${chat_datetime}
                            </span>
                        </div>
                    </div>`;
    
    chathistelemnt.scrollTo(0,chathistelemnt.scrollHeight);
}

document.getElementById("chat-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
            // event.preventDefault();
            sendthismsg();
    }
});
