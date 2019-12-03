import Container from './container';
import IconsContainer from './iconsContainer';
import TableCell, { onSelect, onDeselect } from './tableCell';
import Title from './title';

const types = [Container, IconsContainer, TableCell, Title];

export default (editor) => {
  types.forEach(({ name, definition }) => {
    editor.DomComponents.addType(name, definition);
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
