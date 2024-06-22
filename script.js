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
        "Привет. Я твой	новый	помощник. Меня зовут Синапс. А	как	тебя?", "Очень	приятно,	Макс.	Расскажи, какая	у	тебя	проблема	и	я	смогу	её решить.", "О,	мне	тебя	очень	жаль.	Я	сделаю всё	чтобы	тебя	не	уволили.	Подгрузи исходные	данные	и	я	всё	сделаю.",
        "Благодарю.	Мне	потребуется несколько	минут,	чтобы	обработать информацию	и	заполнить	все	нужные поля.", "Присылайте.", 
        "Не	стоит	благодарностей.	Я	для этого	и	создана,	чтобы	помогать людям", "О,	список	задач	с	которыми	я	могу справиться	бесконечен.	Например,	я отлично	справляюсь	с	анализом информации.	Для	меня	не	составит труда	проанализировать	большие объёмы	данных	и	составить	отчёт. Также	я	умею	отлично	находить информацию. Во	мне	столько	информации,	что	ни одно	живое	существо	не	способно столько	держать	у	себя	в	голове… Ещё	я	неплохо	справляюсь	с психологической	поддержкой	и консультацией,	вплоть	до	того	что могу	стать	вашим	личным	психологом."
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
        addMessage('bot', 'Спасибо	за	ожидание!	Всё	готово', 'images/returndoc.png');
    }, 10000);
});
