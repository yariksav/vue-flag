// rollup.config.js
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify-es';
import scss from 'rollup-plugin-scss';
// import scss from 'rollup-plugin-image';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/entry.js',
  output: {
    name: 'VueFlag',
    exports: 'named',
  },
  plugins: [
    // image(),
    scss({
      output: 'dist/vue-flag.css',
      outputStyle: 'compressed'
    }),
    vue({
      css: true,
      compileTemplate: true,
    }),
    buble(),
  ],
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(uglify());
}

export default config;
