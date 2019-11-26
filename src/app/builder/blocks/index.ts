import Button from './basic/button';
import Image from './basic/image';
import Paragraph from './basic/paragraph';
import Title from './basic/title';
import Header from './advanced/header';
import Section from './advanced/section';

const blocks = [Button, Image, Paragraph, Title, Header, Section];

export default (editor) => {
  const blockManager = editor.BlockManager;
  blocks.forEach(({ name, definition }) => {
    blockManager.add(name, definition);
  });
};
