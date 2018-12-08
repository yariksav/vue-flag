import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify-es';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/entry.js',
  output: {
    name: 'VueFlag',
    exports: 'named',
  },
  plugins: [
    scss({
      output: 'dist/vue-flag.css',
      outputStyle: 'compressed'
    }),
    vue({
      css: true,
      compileTemplate: true,
    }),
    buble(),
    copy({
      "src/flags.png": "dist/flags.png"
    })
  ],
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(uglify());
}

export default config;
