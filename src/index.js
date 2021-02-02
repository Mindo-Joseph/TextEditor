const editorArea = document.createElement('blockquote');
const main = document.getElementById('main');
editorArea.className = 'Editor';
editorArea.contentEditable = 'true';
editorArea.textContent = 'You can try to edit this text here';
const textTools = document.createElement('div');
textTools.className = 'text-tools';
const alignTools = document.createElement('div');
alignTools.className = 'align-tools';
const toolbar = document.createElement('div');
toolbar.className = 'toolbar';
const saveIcon = document.createElement('i');
saveIcon.className = 'fas fa-save';
const boldIcon = document.createElement('i');
boldIcon.className = 'fas fa-bold';
const textColorIcon = document.createElement('i');
textColorIcon.className = 'fas fa-paint-roller';
const fontChangeIcon = document.createElement('i');
fontChangeIcon.className = 'fas fa-font';
const italicIcon = document.createElement('i');
italicIcon.className = 'fas fa-italic';
const underlineIcon = document.createElement('i');
underlineIcon.className = 'fas fa-underline';
const leftAlignIcon = document.createElement('i');
leftAlignIcon.className = 'fas fa-align-left';
const centerAlignIcon = document.createElement('i');
centerAlignIcon.className = 'fas fa-align-center';
const rightAlignIcon = document.createElement('i');
rightAlignIcon.className = 'fas fa-align-right';
const hyperlinkIcon = document.createElement('i');
hyperlinkIcon.className = 'fas fa-link';
const appName = document.createElement('h3');
appName.textContent = 'TextEditor';
toolbar.appendChild(appName);
toolbar.appendChild(saveIcon);
textTools.appendChild(boldIcon);
textTools.appendChild(textColorIcon);
textTools.appendChild(fontChangeIcon);
textTools.appendChild(italicIcon);
textTools.appendChild(underlineIcon);
textTools.appendChild(hyperlinkIcon);
toolbar.appendChild(textTools);
alignTools.appendChild(leftAlignIcon);
alignTools.appendChild(centerAlignIcon);
alignTools.appendChild(rightAlignIcon);
toolbar.appendChild(alignTools);

main.appendChild(toolbar);
main.appendChild(editorArea)
