import { RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

export default (): RollupOptions[] => [
  {
    input: 'src/index.ts',
    plugins: [esbuild()],
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    input: 'src/index.ts',
    plugins: [esbuild()],
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
    },
  },
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      dir: 'dist',
      format: 'es',
    },
  },
];
