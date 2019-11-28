import Container from './container';
import IconsContainer from './iconsContainer';
import Title from './title';

const types = [Container, IconsContainer, Title];

export default (editor) => {
  types.forEach(({ name, definition }) => {
    editor.DomComponents.addType(name, definition);
  });
};
