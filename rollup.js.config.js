import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const jsfiles = {
  script: './src/js_src/main.js'
}

export default [{
  input: jsfiles,
  output: [
    {
      name: 'script',
      dir: `${__dirname}/assets`,
      entryFileNames: 'js/[name].js',
      sourcemap: true,
      format: 'iife',
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelrc: false,
      configFile: './babel.config.json',
    })
  ],
}, {
  input: jsfiles,
  output: [
    {
      name: 'script',
      dir: `${__dirname}/assets`,
      entryFileNames: 'js/[name].min.js',
      sourcemap: false,
      format: 'iife',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelrc: false,
      configFile: './babel.config.json',
    })
  ],
}];
