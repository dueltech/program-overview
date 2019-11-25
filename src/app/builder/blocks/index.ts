import Section from './advanced/section';
import Paragraph from './basic/paragraph';
import Title from './basic/title';

const blocks = [Title, Paragraph, Section];

export default (editor) => {
  const blockManager = editor.BlockManager;
  blocks.forEach(({ name, definition }) => {
    blockManager.add(name, definition);
  });
};
