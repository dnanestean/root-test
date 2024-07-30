import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve({
      moduleDirectories: ['node_modules'],
    }),
    commonjs(),
    html({
      fileName: 'index.html',
      title: 'Open Web Components App',
    }),
    terser(),
    copy({
      targets: [{ src: 'src/assets', dest: 'dist/assets' }],
    }),
  ],
};
