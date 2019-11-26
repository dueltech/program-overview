import Box from './basic/box';
import Button from './basic/button';
import Image from './basic/image';
import Paragraph from './basic/paragraph';
import Title from './basic/title';
import Header from './advanced/header';
import IconsContainer from './advanced/iconsContainer';
import Section from './advanced/section';

const blocks = [Box, Button, Image, Paragraph, Title, Header, IconsContainer, Section];

export default (editor) => {
  const blockManager = editor.BlockManager;
  blocks.forEach(({ name, definition }) => {
    blockManager.add(name, definition);
  });
};
