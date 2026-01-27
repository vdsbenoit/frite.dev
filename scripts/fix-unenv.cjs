const fs = require('fs')
const path = require('path')

try {
  const runtimeDir = path.join(process.cwd(), 'node_modules', 'unenv', 'dist', 'runtime')
  const runtimeLink = path.join(runtimeDir, 'runtime')
  if (!fs.existsSync(runtimeDir)) {
    console.warn('[fix-unenv] unenv runtime directory not found, skipping')
    process.exit(0)
  }
  if (fs.existsSync(runtimeLink)) {
    console.log('[fix-unenv] runtime link already exists')
    process.exit(0)
  }
  // create a directory symlink pointing to the runtime dir itself
  fs.symlinkSync(runtimeDir, runtimeLink, 'dir')
  console.log('[fix-unenv] created symlink:', runtimeLink)
} catch (err) {
  console.error('[fix-unenv] failed to create symlink', err)
  process.exit(1)
}
