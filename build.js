import fs from 'fs';
import * as IconsLibraries from './src/index.js';

Object.keys(IconsLibraries).forEach(libName => {
  if (libName === 'default') return;
  fs.writeFileSync(`./build/${libName}.js`, `import createIcon from '../src/lib/create-icon-set';

    export const ${libName} = createIcon(require('./glyphmaps/${libName}.json'), '${libName}');
  `)
})
