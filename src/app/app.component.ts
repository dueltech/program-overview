import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import grapesjs from 'grapesjs';
import exportPlugin from './builder/exportPlugin';
import componentTypes from './builder/components';
import panels from './builder/panels';
import commands from './builder/commands';
import styleManager from './builder/styleManager';
import addBlocks from './builder/blocks';
import styles from './builder/styles';
import { loadFonts } from './builder/fontManager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'ng-portal-builder';
  editor;

  ngOnInit() {
    this.editor = grapesjs.init({
      container: '#gjs',
      components: '<div data-gjs-type="container"></div>',
      height: '100%',
      width: 'auto',
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
            widthMedia: '480px', // this value will be used in CSS @media
        }]
      },
      styleManager,
      traitManager: {
        appendTo: '.traits-container',
      },
      plugins: [componentTypes, exportPlugin],
    });
    this.editor.DomComponents.getWrapper().set({ badgable: false, selectable: false, hoverable: false });
    this.editor.Canvas.getBody().insertAdjacentHTML('afterbegin', `<style>${styles}</style>`);
    addBlocks(this.editor);
    loadFonts(this.editor);
  }
}
