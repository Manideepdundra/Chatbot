let chatbotMsgList = ["Hi", "Hey", "Good Morning",
    "Good Evening", "How can I help you?", "Thank You"
];
let len = chatbotMsgList.length;

let chatContainer = document.getElementById("chatContainer");
chatContainer.classList.add("chat-container")
let userInput = document.getElementById("userInput");
userInput.classList.add("user-input");

function onClickingSendBtn() {
    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgToChatbotContainer);

    let msgToChatbot = document.createElement("span");
    msgToChatbot.classList.add("msg-to-chatbot");
    msgToChatbot.textContent = userInput.value;
    msgToChatbotContainer.appendChild(msgToChatbot);
    userInput.value = "";

    let msgFromChatbotConatiner = document.createElement("div");
    msgFromChatbotConatiner.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgFromChatbotConatiner);

    let msgFromChatbot = document.createElement("span");
    msgFromChatbot.classList.add("msg-from-chatbot");
    msgFromChatbot.textContent = chatbotMsgList[Math.ceil(Math.random() * len) - 1]
    msgFromChatbotConatiner.appendChild(msgFromChatbot);
}