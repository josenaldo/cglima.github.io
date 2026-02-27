/**
 * Syncs site/images/ and site/icons/ into public/images/ and public/icons/.
 * Called automatically via predev and prebuild scripts.
 * Can also be run manually: node scripts/sync-site-assets.mjs
 */

import { cpSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const pairs = [
    { src: join(root, 'site', 'images'), dest: join(root, 'public', 'images') },
    { src: join(root, 'site', 'icons'), dest: join(root, 'public', 'icons') },
]

for (const { src, dest } of pairs) {
    if (!existsSync(src)) continue
    mkdirSync(dest, { recursive: true })
    cpSync(src, dest, { recursive: true, force: true })
    console.log(`✔ Synced ${src.replace(root, '')} → ${dest.replace(root, '')}`)
}
