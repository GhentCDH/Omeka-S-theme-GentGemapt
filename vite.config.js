import path from 'path'

// vite.config.js
export default {
  root: 'src/',
  base: '',
  server: {
    // to enable hmr in omeka template, 
    // set origin absolute path to server i/o relative path
    origin: 'http://127.0.0.1:5173',
  },
  build: {
    manifest: true,
    outDir: '../asset',
    cssCodeSplit: true,
    lib: {
      entry: [path.resolve(__dirname, 'src/js/main.js'), path.resolve(__dirname, 'src/js/ckeditor.js')],
      name: 'LibraryName',
      fileName: '[name]',
    },
    // disable output hashes
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        // assetFileNames: `[name].[ext]`
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/woff|woff2|otf/.test(extType)) {
            extType = "css";
          }
          return `${extType}/[name][extname]`;
        },
      }
    }
  },
  resolve: {
    alias: [
      {
        find:/^~(.*)/,
        replacement: path.resolve(__dirname, './node_modules') + "/$1"
      },
    ]
  },
}