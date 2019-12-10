import plugin from 'grapesjs-plugin-export';
import styles from './styles';
import { getFontImports } from './fontManager';

const html = (body: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
  ${body}
  <script>
    /* DUEL embed snippet */
    function emitHeight() {
      parent.postMessage(document.documentElement.offsetHeight, '*');
    }
    addEventListener('DOMContentLoaded', emitHeight);
    addEventListener('load', emitHeight);
    addEventListener('resize', emitHeight);
  </script>
</body>
`;

const options = {
  filename: () => 'program-overview.zip',
  root: {
    css: {
      'style.css': ed => getFontImports() + styles + ed.getCss(),
    },
    'index.html': ed => html(ed.getHtml()),
  }
};

export default (editor) => plugin(editor, options);
