import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

const cssfiles = {
  style: './src/css_src/main.scss'
}

export default [{
  input: cssfiles,
  output: [
    {
      name: 'style',
      dir: `${__dirname}/assets`,
      entryFileNames: 'css/[name].css',
    }
  ],
  plugins: [
    resolve(),
    postcss({
      use: 'sass',
      extensions: ['.scss'],
      minimize: false,
      sourceMap: true,
      config: { path: 'postcss.config.js' },
      extract: 'css/style.css',
    })
  ],
}, {
  input: cssfiles,
  output: [
    {
      name: 'style',
      dir: `${__dirname}/assets`,
      entryFileNames: 'css/[name].min.css',
    }
  ],
  plugins: [
    resolve(),
    postcss({
      use: 'sass',
      extensions: ['.scss'],
      minimize: true,
      sourceMap: false,
      config: { path: 'postcss.config.js' },
      extract: 'css/style.min.css',
    })
  ],
}];
