const LOCALSTORAGE_TAG = 'gjs-fonts';

export interface Font {
  name: string;
  href: string;
  declaration: string;
}

export function getFonts(): [Font] {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_TAG)) || [];
}

// returns the declaration of the default font
function getDefaultFont(editor): string {
  const bodyRule = editor.CssComposer.getRule('body');
  if (bodyRule && bodyRule.config && bodyRule.config.style) {
    return bodyRule.config.style['font-family'];
  }
  return null;
}

function removeFont(editor, font: Font) {
  const fonts = getFonts();
  const updatedFonts = fonts.filter(f => f.name !== font.name);
  localStorage.setItem(LOCALSTORAGE_TAG, JSON.stringify(updatedFonts));
  const defaultFont = getDefaultFont(editor);
  if (defaultFont === font.declaration) {
    editor.CssComposer.setRule('body', {});
  }
}

function setDefaultFont(editor, fontDeclaration: string) {
  const style = fontDeclaration ? { 'font-family': fontDeclaration } : {};
  editor.CssComposer.setRule('body', style);
}

export function resetFonts(editor) {
  const fonts = getFonts();
  editor.Canvas.getDocument().head.innerHTML = '';
  fonts.forEach(font => removeFont(editor, font));
  localStorage.removeItem(LOCALSTORAGE_TAG);
}

// font html element to be added to the #added-fonts div in editor
function createFontEl(editor, font: Font) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<span>${font.name}</span>`;
  const removeButton = document.createElement('div');
  removeButton.className = 'fa fa-trash';
  removeButton.addEventListener('click', () => {
    removeFont(editor, font);
    wrapper.remove();
  });
  wrapper.appendChild(removeButton);
  return wrapper;
}

function updateDefaultFontSelect(editor) {
  const selectEl = document.getElementById('default-font') as HTMLSelectElement;
  const fontProperty = editor.StyleManager.getProperty('basicText', 'font-family');
  const availableFonts = fontProperty.attributes.list;
  const defaultFont = getDefaultFont(editor);
  const options = availableFonts.map((font) => `
    <option value="${font.value}"${font.value === defaultFont ? ' selected' : ''}>${font.name}</option>
  `).join('\n');
  selectEl.innerHTML = `<option value="">None</option>\n${options}`;
  selectEl.addEventListener('input', () => {
    setDefaultFont(editor, selectEl.value);
  });
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
  fontsList.appendChild(createFontEl(editor, font));
}

export function addFont(editor, font: Font) {
  const updatedFonts = getFonts().concat([font]);
  localStorage.setItem(LOCALSTORAGE_TAG, JSON.stringify(updatedFonts));
  loadFont(editor, font);
  updateDefaultFontSelect(editor);
}

export function loadFonts(editor) {
  // add listener to add-font button
  document.getElementById('add-font').addEventListener('click', () => {
    editor.Commands.run('add-font');
  });
  const fonts = getFonts();
  fonts.forEach((font) => loadFont(editor, font));
  updateDefaultFontSelect(editor);
}

export function setFonts(editor, fonts: [Font]) {
  resetFonts(editor);
  fonts.forEach(font => addFont(editor, font));
}

export function getFontImports(): string {
  const fonts = getFonts();
  return fonts.reduce((acc, font) => acc + `@import url('${font.href}');\n`, '').trim();
}
