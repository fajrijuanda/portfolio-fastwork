const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROUTES = [
  { url: 'http://127.0.0.1:3001/', namePrefix: 'landing' },
  { url: 'http://127.0.0.1:3001/application/hris', namePrefix: 'hris' },
  { url: 'http://127.0.0.1:3001/industries', namePrefix: 'industries' },
  { url: 'http://127.0.0.1:3001/pricing', namePrefix: 'pricing' },
  { url: 'http://127.0.0.1:3002/login', namePrefix: 'login' },
  { url: 'http://127.0.0.1:3002/register', namePrefix: 'register' }
];

const OUTPUT_DIR = path.join(__dirname, 'public', 'images', 'projects', 'omnia');

async function takeScreenshots() {
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();
  let imageCounter = 1;

  for (const route of ROUTES) {
    console.log(`Navigating to ${route.url}...`);
    try {
      await page.goto(route.url, { waitUntil: 'networkidle0', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));
      
      const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      const viewportHeight = 900;
      const numScreenshots = Math.ceil(pageHeight / viewportHeight);
      
      for (let i = 0; i < numScreenshots; i++) {
        await page.evaluate((y) => {
          window.scrollTo(0, y);
        }, i * viewportHeight);
        
        await new Promise(r => setTimeout(r, 1000)); // Wait for scroll / lazy load
        
        const fileName = `${String(imageCounter).padStart(2, '0')}.png`;
        const outputPath = path.join(OUTPUT_DIR, fileName);
        
        await page.screenshot({ path: outputPath, fullPage: false });
        console.log(`Saved screenshot ${i + 1}/${numScreenshots} to ${outputPath}`);
        imageCounter++;
      }
    } catch (e) {
      console.error(`Failed to snapshot ${route.url}:`, e.message);
    }
  }

  await browser.close();
  console.log('All screenshots taken! Total images:', imageCounter - 1);
}

takeScreenshots();
