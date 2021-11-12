
var chathistelemnt = $(".chat-history-container")[0];
chathistelemnt.scrollTo(0,chathistelemnt.scrollHeight);

function togglechatbox(){
    $(".chat-container").eq(0).toggleClass("visible");
    chathistelemnt.scrollTo(0,chathistelemnt.scrollHeight);
}

function showtab(id,tab){
    var chat_tabs = $(".chat-tab");
    for (let chat_tab_tab = 0; chat_tab_tab < chat_tabs.length; chat_tab_tab++) {
        $(chat_tabs[chat_tab_tab]).removeClass("visible");
    }
    $(`#${id}`).addClass("visible");
    
    var chat_tabs = $(".chat-tab-btn");
    for (let chat_tab_tab = 0; chat_tab_tab < chat_tabs.length; chat_tab_tab++) {
        $(chat_tabs[chat_tab_tab]).removeClass("current-tab");
    }
    $(tab).addClass("current-tab");
}

function togglecontactlist(){
    $(".chat-contacts-list").eq(0).toggleClass("visible");
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
    var chatmsg = urlify($("#chat-input").val().trim());
    $("#chat-input").val("");
    if(chatmsg == ""){
        return;
    }
    var chat_datetime = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});

    $(chathistelemnt).append(`
    <div class="chat-message-wrap">
                        <div class="chat-message sent">
                            <div class="chat-message-body">
                                ${chatmsg}
                            </div>
                            <span class="chat-message-time">
                                ${chat_datetime}
                            </span>
                        </div>
                    </div>`
                    );
    
    chathistelemnt.scrollTo(0,chathistelemnt.scrollHeight);
    $("#chat-input").focus();
}

$("#chat-input").keyup(function(event) {
    if (event.keyCode === 13) {
            event.preventDefault();
            sendthismsg();
    }
});

// Polling Page -----------------------------------------------

var poll_tags = [];
poll_tags_span = $(".poll-tag");

filter_poll_questions = ()=>{
    if(poll_tags.length == 0){
        document.querySelectorAll(".poll-question-container").forEach(q => $(q).addClass("visible"));
        $(poll_tags_span[0]).addClass("selected");
        return;
    }
    document.querySelectorAll(".poll-question-container").forEach(q => $(q).removeClass("visible"));
    poll_tags.forEach(tag =>  document.querySelectorAll(`.${tag}`).forEach(q => $(q).addClass("visible")));
}
filter_poll_questions();
for (let tag_index = 0; tag_index < poll_tags_span.length; tag_index++) {
    $(poll_tags_span[tag_index]).click(()=>{
        let clicked_tag = poll_tags_span[tag_index];
        $(clicked_tag).toggleClass("selected");
        
        if(clicked_tag.innerText == "All" || poll_tags == []){
            document.querySelectorAll(".poll-tag").forEach(el => $(el).removeClass("selected"));
            poll_tags = [];
            $(clicked_tag).addClass("selected");
            filter_poll_questions();
            return;
        }

        $(poll_tags_span[0]).removeClass("selected");
        // Remove if exist
        if(poll_tags.includes(clicked_tag.innerText)){
            var index = poll_tags.indexOf(clicked_tag.innerText);
            if (index > -1) {
                poll_tags.splice(index, 1);
            }
        }
        // If not Exist
        else{
            poll_tags.push(clicked_tag.innerText);
        }
        filter_poll_questions();
    });
}

// Polling Page Toggle ANswers Pnel on focus
// ranking, max value, low value, timer

document.querySelectorAll(".poll-question").forEach(el => $(el).click(()=>{
        $(el).next().toggleClass("visible");
    })
);

