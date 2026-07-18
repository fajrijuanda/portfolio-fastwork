const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROUTES = [
  { url: 'http://127.0.0.1:3001/', name: '01.png' },
  { url: 'http://127.0.0.1:3001/application/hris', name: '02.png' },
  { url: 'http://127.0.0.1:3001/industries', name: '03.png' },
  { url: 'http://127.0.0.1:3001/pricing', name: '04.png' },
  { url: 'http://127.0.0.1:3002/login', name: '05.png' },
  { url: 'http://127.0.0.1:3002/register', name: '06.png' }
];

const OUTPUT_DIR = path.join(__dirname, 'public', 'images', 'projects', 'omnia');

async function takeScreenshots() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();

  for (const route of ROUTES) {
    console.log(`Navigating to ${route.url}...`);
    try {
      await page.goto(route.url, { waitUntil: 'networkidle0', timeout: 30000 });
      // wait for animations to finish
      await new Promise(r => setTimeout(r, 2000));
      const outputPath = path.join(OUTPUT_DIR, route.name);
      await page.screenshot({ path: outputPath, fullPage: false });
      console.log(`Saved screenshot to ${outputPath}`);
    } catch (e) {
      console.error(`Failed to snapshot ${route.url}:`, e.message);
    }
  }

  await browser.close();
  console.log('All screenshots taken!');
}

takeScreenshots();
