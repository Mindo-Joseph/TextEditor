const editorArea = document.createElement('blockquote');
const main = document.getElementById('main');
editorArea.className = 'Editor';
editorArea.contentEditable = 'true';
editorArea.textContent = 'You can try to edit this text here';
main.appendChild(editorArea)
