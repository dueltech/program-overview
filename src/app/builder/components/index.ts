import Container from './container';
import DuelGalleryContainer from './duelGalleryContainer';
import IconsContainer from './iconsContainer';
import TableCell, { onSelect, onDeselect } from './tableCell';
import Title from './title';

const types = [Container, DuelGalleryContainer, IconsContainer, TableCell, Title];

export default (editor) => {
  types.forEach(({ name, definition }) => {
    if (definition instanceof Function) {
      editor.DomComponents.addType(name, definition(editor));
    } else {
      editor.DomComponents.addType(name, definition);
    }
  });
  editor.on('component:selected', (model) => {
    if (model.attributes && model.attributes.type === 'cell') {
      onSelect(model);
    }
  });
  editor.on('component:deselected', (model) => {
    if (model.attributes && model.attributes.type === 'cell') {
      onDeselect(model);
    }
  });
};
