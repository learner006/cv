import say from '/cleana/utils.js';
import getVDOM from '/cleana/vdom/skeleton.js';
import {createDOMTree} from '/cleana/vdom/index.js';
import defaultList from '/cleana/components/list.js';
import canvasWrapper from '/cleana/components/canvas.js';
import storeFactory from '/cleana/store/store.js';
import linksListFactory from '/cleana/components/linksList.js';


const root = document.querySelector('body');
createDOMTree(root, getVDOM('pageDOM'));

const picNamesList = defaultList(
  document.querySelector('.pic-names-list-parent-div'),
  getVDOM('.pic-names-list')
);

const paletteToolsList = defaultList(
  document.querySelector('.tools-list-parent-div'),
  getVDOM('.palette-tools-list')
);

const colorsManipList = defaultList(
  document.querySelector('.colors-manip-list-parent-div'),
  getVDOM('.colors-manip-list')
);



picNamesList.fullRender();
paletteToolsList.fullRender();
colorsManipList.fullRender();

const canvasMainH = document.querySelector('.canvas-main');

// we need to do that! I do not know why at the moment! :-)
canvasMainH.width = 512;
canvasMainH.height = 512;

const canvasMain = canvasWrapper(canvasMainH,null);
canvasMain.paintImage();

const store = storeFactory();
say(store);

const imageProviders = linksListFactory(
  document.querySelector('.image-providers-parent-div'),
  'class=imageProviderLink'
);

imageProviders.fullRender();