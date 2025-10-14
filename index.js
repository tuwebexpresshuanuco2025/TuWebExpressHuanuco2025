const form = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
const alertBox = document.getElementById('alert');
let comments = JSON.parse(localStorage.getItem('comments')) || [];

function showAlert(message, duration=3000){
    alertBox.innerText = message;
    alertBox.style.display = 'block';
    setTimeout(()=>{alertBox.style.display='none';}, duration);
}

function addCommentToDOM(name, message, prepend=false){
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong><p>${message}</p><button class="delete-btn">Eliminar</button>`;
    const deleteBtn = commentDiv.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', ()=>{
        comments = comments.filter(c=>c.name!==name || c.message!==message);
        localStorage.setItem('comments', JSON.stringify(comments));
        commentDiv.remove();
        showAlert('Comentario eliminado');
    });
    if(prepend){
        commentsList.prepend(commentDiv);
    } else {
        commentsList.appendChild(commentDiv);
    }
}

comments.forEach(c => addCommentToDOM(c.name, c.message));

form.addEventListener('submit', (e)=>{
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
});ssage});
    saveComments();
    renderComments();
    form.reset();
    showAlert('Comentario enviado correctamente');
});    comments.unshift(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
    addCommentToDOM(name, message, true);
    form.reset();
    showAlert("Comentario enviado correctamente");
});

window.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "🌙 / ☀️";
    themeToggle.style.position = "fixed";
    themeToggle.style.bottom = "20px";
    themeToggle.style.right = "20px";
    themeToggle.style.padding = "10px 15px";
    themeToggle.style.border = "none";
    themeToggle.style.borderRadius = "8px";
    themeToggle.style.background = "#0000FF";
    themeToggle.style.color = "#fff";
    themeToggle.style.cursor = "pointer";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
            document.body.style.background = "#111";
            document.body.style.color = "#00FFFF";
        } else {
            document.body.style.background = "#000";
            document.body.style.color = "#fff";
        }
    });
});