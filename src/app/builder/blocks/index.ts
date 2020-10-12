import Box from './basic/box';
import Button from './basic/button';
import Image from './basic/image';
import Link from './basic/link';
import Paragraph from './basic/paragraph';
import Table from './basic/table';
import Title from './basic/title';
import DuelGallery from './advanced/duelGallery';
import Header from './advanced/header';
import IconsContainer from './advanced/iconsContainer';
import Section from './advanced/section';

const blocks = [
  Box, Button, Image, Link, Paragraph, Table, Title,
  DuelGallery, Header, IconsContainer, Section,
];

export default (editor) => {
  const blockManager = editor.BlockManager;
  blocks.forEach(({ name, definition }) => {
    blockManager.add(name, definition);
  });
};
