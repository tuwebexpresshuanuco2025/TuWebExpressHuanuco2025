const form = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
const alertBox = document.getElementById('alert');
let comments = JSON.parse(localStorage.getItem('comments')) || [];

function showAlert(message, duration=3000){
    alertBox.innerText = message;
    alertBox.style.display = 'block';
    setTimeout(()=>{alertBox.style.display='none';}, duration);
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function createDeleteButton(index){
    const btn = document.createElement('button');
    btn.classList.add('delete-btn');
    btn.innerText = 'Eliminar';
    btn.addEventListener('click', ()=>{
        comments.splice(index, 1);
        saveComments();
        renderComments();
        showAlert('Comentario eliminado');
    });
    return btn;
}

function addCommentToDOM(name, message, index){
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
    commentDiv.appendChild(contentDiv);
    commentDiv.appendChild(createDeleteButton(index));
    commentsList.appendChild(commentDiv);
}

function renderComments(){
    commentsList.innerHTML = '';
    comments.forEach((c, i) => addCommentToDOM(c.name, c.message, i));
}

renderComments();

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !message){
        showAlert('Por favor completa todos los campos');
        return;
    }
    comments.unshift({name, message});
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