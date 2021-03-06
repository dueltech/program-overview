import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import grapesjs from 'grapesjs';
import exportPlugin from './builder/exportPlugin';
import componentTypes from './builder/components';
import panels from './builder/panels';
import commands from './builder/commands';
import styleManager from './builder/styleManager';
import addBlocks from './builder/blocks';
import styles from './builder/styles';
import canvasCss from './builder/canvasCss';
import { loadFonts } from './builder/fontManager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'ng-portal-builder';

  ngOnInit() {
    const editor = grapesjs.init({
      container: '#gjs',
      components: '<div data-gjs-type="container"></div>',
      height: '100%',
      width: 'auto',
      canvasCss,
      panels: {
        defaults: panels,
      },
      commands: {
        defaults: commands,
      },
      blockManager: {
        appendTo: '#blocks',
      },
      layerManager: {
        appendTo: '.layers-container',
      },
      deviceManager: {
        devices: [{
            name: 'Desktop',
            width: '',
          }, {
            name: 'Mobile',
            width: '375px', // this value will be used on canvas width
            widthMedia: '450px', // this value will be used in CSS @media
        }]
      },
      selectorManager: {
        appendTo: '.traits-container'
      },
      assetManager: {
        upload: false,
        embedAsBase64: 0,
      },
      styleManager,
      traitManager: {
        appendTo: '.traits-container',
      },
      plugins: [componentTypes, exportPlugin],
    });
    editor.on('load', () => {
      editor.DomComponents.getWrapper().set({ badgable: false, selectable: false, hoverable: false });
      editor.Canvas.getBody().insertAdjacentHTML('afterbegin', `<style>${styles}</style>`);
      editor.Canvas.getBody().insertAdjacentHTML('beforeend', `
      <style id="custom-styles">${editor.runCommand('get-custom-css')}</style>
      `);
      editor.RichTextEditor.add('unorderedList', {
        icon: 'ul',
        attributes: { title: 'List', type: 'ul' },
        result: rte => rte.exec('insertUnorderedList'),
      });
      addBlocks(editor);
      loadFonts(editor);
    });
  }
}
