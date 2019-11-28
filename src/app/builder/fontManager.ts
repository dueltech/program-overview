const LOCALSTORAGE_TAG = 'gjs-fonts';

export interface Font {
  name: string;
  href: string;
  declaration: string;
}

export function getFonts(): [Font] {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_TAG)) || [];
}

function removeFont(fontName: string) {
  const fonts = getFonts();
  const updatedFonts = fonts.filter(font => font.name !== fontName);
  localStorage.setItem(LOCALSTORAGE_TAG, JSON.stringify(updatedFonts));
}

export function resetFonts(editor) {
  const fonts = getFonts();
  editor.Canvas.getDocument().head.innerHTML = '';
  fonts.forEach(font => removeFont(font.name));
  localStorage.removeItem(LOCALSTORAGE_TAG);
}

function createFontEl(fontName: string) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<span>${fontName}</span>`;
  const removeButton = document.createElement('div');
  removeButton.className = 'fa fa-trash';
  removeButton.addEventListener('click', () => {
    removeFont(fontName);
    wrapper.remove();
  });
  wrapper.appendChild(removeButton);
  return wrapper;
}

function loadFont(editor, font: Font) {
  const canvasHead = editor.Canvas.getDocument().head;
  const fontProperty = editor.StyleManager.getProperty('basicText', 'font-family');
  // add font to head of canvas
  const link = `<link rel="stylesheet" href="${font.href}" />`;
  canvasHead.insertAdjacentHTML('beforeend', link);
  // add font to style manager
  fontProperty.addOption({ value: font.declaration, name: font.name });
  // add font to list of fonts in fonts container
  const fontsList = document.getElementById('added-fonts');
  fontsList.appendChild(createFontEl(font.name));
}

export function addFont(editor, font: Font) {
  const updatedFonts = getFonts().concat([font]);
  localStorage.setItem(LOCALSTORAGE_TAG, JSON.stringify(updatedFonts));
  loadFont(editor, font);
}

export function loadFonts(editor) {
  // add listener to add-font button
  document.getElementById('add-font').addEventListener('click', () => {
    editor.Commands.run('add-font');
  });
  const fonts = getFonts();
  fonts.forEach((font) => loadFont(editor, font));
}

export function setFonts(editor, fonts: [Font]) {
  resetFonts(editor);
  fonts.forEach(font => addFont(editor, font));
}

export function getFontImports(): string {
  const fonts = getFonts();
  return fonts.reduce((acc, font) => acc + `@import url('${font.href}');\n`, '').trim();
}
