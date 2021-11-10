
var chathistelemnt = document.getElementsByClassName("chat-history-container")[0];
chathistelemnt.scrollTo(0,chathistelemnt.scrollHeight);

function togglechatbox(){
    document.getElementsByClassName("chat-container")[0].classList.toggle("visible");
    chathistelemnt.scrollTo(0,chathistelemnt.scrollHeight);
}

function showtab(id,tab){
    var chat_tabs = document.getElementsByClassName("chat-tab");
    for (let chat_tab_tab = 0; chat_tab_tab < chat_tabs.length; chat_tab_tab++) {
        chat_tabs[chat_tab_tab].classList.remove("visible");
    }
    document.getElementById(id).classList.add("visible");
    
    var chat_tabs = document.getElementsByClassName("chat-tab-btn");
    for (let chat_tab_tab = 0; chat_tab_tab < chat_tabs.length; chat_tab_tab++) {
        chat_tabs[chat_tab_tab].classList.remove("current-tab");
    }
    tab.classList.add("current-tab");
}

function togglecontactlist(){
    document.getElementsByClassName("chat-contacts-list")[0].classList.toggle("visible");
}
function viewcontact(){
    // View Chat History Of Slected Contact
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
    document.getElementById("chat-input").focus();
}

document.getElementById("chat-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
            // event.preventDefault();
            sendthismsg();
    }
});

// Polling Page
var poll_tags = [];
filter_poll_questions = ()=>{
    console.log(poll_tags);
}
filter_poll_tag = (elemnt)=>{
    elemnt.classList.toggle("selected");
    if(poll_tags.includes(elemnt.innerText)){
        
    }
    poll_tags.push(elemnt.innerText);
    filter_poll_questions();
}


