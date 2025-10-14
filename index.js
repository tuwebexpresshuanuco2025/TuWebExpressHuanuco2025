// Manejo de comentarios con validación y alerta
const form = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
const alertBox = document.getElementById('alert');
let comments = JSON.parse(localStorage.getItem('comments')) || [];

function showAlert(message, duration = 3000){
    alertBox.innerText = message;
    alertBox.style.display = 'block';
    setTimeout(() => { alertBox.style.display = 'none'; }, duration);
}

function addCommentToDOM(name, message, prepend = false){
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
    if(prepend){
        commentsList.prepend(commentDiv);
    } else {
        commentsList.appendChild(commentDiv);
    }
}

// Cargar comentarios existentes
comments.forEach(c => addCommentToDOM(c.name, c.message));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !message){
        showAlert('Por favor completa todos los campos');
        return;
    }
    const comment = {name, message};
    comments.unshift(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    addCommentToDOM(name, message, true);
    form.reset();
    showAlert('Comentario enviado correctamente');
});