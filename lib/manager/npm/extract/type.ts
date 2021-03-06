import type { NpmPackage } from './types';

export function mightBeABrowserLibrary(packageJson: NpmPackage): boolean {
  // return true unless we're sure it's not a browser library
  if (packageJson.private === true) {
    // it's not published
    return false;
  }
  if (packageJson.main === undefined && packageJson.exports === undefined) {
    // it can't be required
    return false;
  }
  // TODO: how can we know if it's a node.js library only, and not browser?
  // Otherwise play it safe and return true (#9616)
  return true;
}
