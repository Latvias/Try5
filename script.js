// script.js

let messageCount = 0;

document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value.trim();
    if (messageText) {
        addMessage('user', messageText);
        input.value = '';

        setTimeout(() => {
            handleResponse(messageText);
        }, 1000);
    }
}

function addMessage(sender, text, imageSrc = null) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${sender}`;

    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';

    if (imageSrc) {
        const img = document.createElement('img');
        img.src = imageSrc;
        messageContent.appendChild(img);
    }

    if (text) {
        const messageText = document.createElement('span');
        messageText.innerText = text;
        messageContent.appendChild(messageText);
    }

    messageContainer.appendChild(messageContent);
    document.getElementById('messagesContainer').appendChild(messageContainer);
    messageContainer.scrollIntoView();
}

function handleResponse(userMessage) {
    const responses = [
        "Сообщение А", "Сообщение Б", "Сообщение В",
        "Сообщение Д", "Сообщение Е", "Сообщение Ж", "Сообщение З"
    ];
    let botResponse = '';

    if (userMessage === 'ошибка1') {
        botResponse = 'Td.ЛРCJыбSLМ/Vд:p]cВ';
    } else if (userMessage === 'ошибка2') {
        showErrorMessage();
        return;
    } else if (messageCount < responses.length) {
        botResponse = responses[messageCount];
    }

    if (botResponse) {
        setTimeout(() => {
            addMessage('bot', botResponse);
        }, botResponse.length * 100);
    }

    messageCount++;
}

function showErrorMessage() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';

    const errorText = document.createElement('span');
    errorText.innerText = 'шо#qv|~VYpcф^,фмDЯд}';
    errorMessage.appendChild(errorText);

    const loadingGif = document.createElement('img');
    loadingGif.src = 'images/load.gif';
    errorMessage.appendChild(loadingGif);

    overlay.appendChild(errorMessage);
    document.body.appendChild(overlay);

    setTimeout(() => {
        document.body.removeChild(overlay);
    }, 5000);
}

document.getElementById('micButton').addEventListener('mousedown', startRecording);
document.getElementById('micButton').addEventListener('mouseup', stopRecording);

let recordStartTime;

function startRecording() {
    recordStartTime = new Date().getTime();
}

function stopRecording() {
    const recordDuration = new Date().getTime() - recordStartTime;
    let responseImage = '';
    let responseText = '';

    if (recordDuration < 10000) {
        responseText = 'Ответ на аудио 1';
    } else if (recordDuration < 20000) {
        responseText = 'Ответ на аудио 2';
    } else if (recordDuration < 30000) {
        responseText = 'Ответ на аудио 3';
    } else {
        responseText = 'Ответ на аудио 4';
    }

    addMessage('user', '', responseImage);

    setTimeout(() => {
        addMessage('bot', responseText, responseImage);
    }, 1000);
}

document.getElementById('attachButton').addEventListener('click', () => {
    addMessage('user', '', 'images/doc.png');
    setTimeout(() => {
        addMessage('bot', 'Вот ваш документ', 'images/returndoc.png');
    }, 10000);
});
