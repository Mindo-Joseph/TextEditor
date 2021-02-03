const optionsArea = document.createElement('div');
optionsArea.className = 'options-area';
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
const icon = document.createElement('i');
fontChangeIcon.className = 'fas fa-font';
fontChangeIcon.appendChild(icon);
fontChangeIcon.addEventListener('click', function () {
    let select = document.createElement('select');
    select.id = 'font-selection';
    let option1 = document.createElement('option');
    option1.value = 'Arial';
    option1.text = 'Arial';
    let option2 = document.createElement('option');
    option2.value = 'Sans Serif';
    option2.text = 'Sans Serif';
    let option3 = document.createElement('option');
    option3.value = 'Verdana';
    option3.text = 'Verdana';
    select.add(option1);
    select.add(option2);    
    select.add(option2);
    optionsArea.appendChild(select);
    select.onchange = console.log(select.options[select.selectedIndex].text);
});
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
main.appendChild(optionsArea);
main.appendChild(editorArea)


let getSelectedText = () => {
    let text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
       

    } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;

    }
    return text;
}
let changeFont = (font) => {
    let selectedText = window.getSelection();
    if (selectedText.rangeCount) {
        let element = document.createElement('span');
        element.style = `font-family: ${font.value};`;
        element.innerHTML = selectedText.toString();

        let range = selectedText.getRangeAt(0);
        range.deleteContents();
        range.insertNode(element);
    }


}
document.addEventListener('mouseup',getSelectedText)
