import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
const slugs = ['', 'cv', 'teaching', 'publications', 'projects', 'applied-projects', 'contacts', 'oral-history', 'border-anthropology', 'heritage-anxiety', 'museum-anthropology'];
let pages = 0, links = 0;
for (const lang of ['ru','en']) for (const slug of slugs) {
  const route = `${lang==='en'?'/en':''}/${slug?slug+'/':''}`;
  const file = join('out', route, 'index.html');
  assert(existsSync(file), `Missing page: ${route}`);
  const html=readFileSync(file,'utf8');
  assert(html.includes(`<html lang="${lang}"`), `Wrong language: ${route}`);
  assert(html.includes('rel="canonical"'), `Missing canonical: ${route}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const target=decodeURIComponent(match[1]);
    if(target.startsWith('//')) continue;
    const local=join('out',target);
    assert(existsSync(local), `Broken reference on ${route}: ${target}`);
    if(statSync(local).isDirectory()) assert(existsSync(join(local,'index.html')),`Missing index: ${target}`);
    links++;
  }
  pages++;
}
assert(existsSync('out/.nojekyll'));
assert(existsSync('out/404.html'));
assert(existsSync('out/robots.txt'));
const sitemap=readFileSync('out/sitemap.xml','utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length,22);
assert(!sitemap.includes('vercel.app'));
console.log(`Verified ${pages} pages, ${links} local references, language attributes, canonical URLs, sitemap, robots and 404.`);
