// from: https://github.com/facebook/jest/blob/master/integration_tests/runJest.js
import { ChildProcess, SpawnOptions } from 'child_process';
import { fileExists } from './utils';
const path = require('path');
const spawn: (command: string, args?: string[], options?: SpawnOptions) => ChildProcess = require('cross-spawn-with-kill');

// assuming that jest is installed globally
// using `npm i -g jest-cli`
const JEST_PATH = 'jest';

// return the result of the spawned proccess:
//  [ 'status', 'signal', 'output', 'pid', 'stdout', 'stderr',
//    'envPairs', 'options', 'args', 'file' ]
export default function runJestInWatchMode(dir, args?: any[]) {
  const isRelative = dir[0] !== '/';

  if (isRelative) {
    dir = path.resolve(__dirname, dir);
  }

  const localPackageJson = path.resolve(dir, 'package.json');
  if (!fileExists(localPackageJson)) {
    throw new Error(`
      Make sure you have a local package.json file at
        "${localPackageJson}".
      Otherwise Jest will try to traverse the directory tree and find the
      the global package.json, which will send Jest into infinite loop.
    `);
  }
  args = (args !== undefined) ? args : [];
  args.push('--watchAll');

  const process = spawn(JEST_PATH, args, {
    cwd: dir,
  });
  let getStderrAsync = () => {
    return new Promise((resolve: (value: string) => void) => {
      let stderr = '';
      process.stderr.on('data', (data) => {
        stderr += data.toString();
        if (data.toString().includes('Ran all')) {
          resolve(stderr);
          process.stderr.removeAllListeners('data');
        }
      });
    });
  };

  return { process, getStderrAsync };
}