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
    const savedStyle = JSON.parse(localStorage.getItem('gjs-styles'));
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
      styleManager,
      traitManager: {
        appendTo: '.traits-container',
      },
      plugins: [componentTypes, exportPlugin],
    });
    this.editor.DomComponents.getWrapper().set({ badgable: false, selectable: false, hoverable: false });
    if (!savedStyle) {
      this.editor.setStyle(styles);
    }
    addBlocks(this.editor);
    loadFonts(this.editor);
  }
}
