import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

export default {
  // source entry file
  input: 'lib/index.ts',
  output: [
    {
      file: 'dist/index.js',
      // output bundle format
      format: 'es'
    }
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    eslint(),
    typescript({
      typescript: require('typescript')
    }),
    // minification of the generated bundles
    terser()
  ]
};
