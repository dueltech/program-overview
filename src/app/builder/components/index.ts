import Container from './container';
import Title from './title';

const types = [Container, Title];

export default (editor) => {
  types.forEach(({ name, definition }) => {
    editor.DomComponents.addType(name, definition);
  });
};
