import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const pkg = require('./package.json');


export default {
    input: `src/index.js`,
    output: [
      { file: pkg.main, name: 'watermark-svg-config', format: 'umd', sourcemap: true },
    ],
    watch: {
      include: 'src/**'
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
    ],
};