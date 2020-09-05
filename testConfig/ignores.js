/*
  Disable webpack-specific 'loaders' for tests
  extensions: [".styl",".css",".png",".jpg",".gif",".svg",".ico"]
*/
require.extensions['.less'] = noop;
require.extensions['.css'] = noop;
require.extensions['.png'] = noop;

function noop() {
    return null;
}