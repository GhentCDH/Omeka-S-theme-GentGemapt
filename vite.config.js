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
    outDir: '../asset/build',
    // disable output hashes
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
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