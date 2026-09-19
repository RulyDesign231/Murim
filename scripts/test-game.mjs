import {build} from 'esbuild';
await build({entryPoints:['tests/engine.test.ts'],bundle:true,platform:'node',format:'esm',outfile:'work/engine-tests.mjs'});
await import('../work/engine-tests.mjs');
