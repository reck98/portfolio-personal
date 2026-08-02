/* global process */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const projectsDir = path.join(publicDir, 'projects');

async function processImages() {
  console.log('Starting image optimization...');

  // 1. Process Og Image if copied
  const ogSource = path.join('C:', 'Users', 'aashi', '.gemini', 'antigravity-cli', 'brain', '8ebc90f1-8e79-42c7-8b05-03bf24e3071f', 'og_image_1785666117397.jpg');
  if (fs.existsSync(ogSource)) {
    await sharp(ogSource)
      .resize(1200, 630, { fit: 'cover' })
      .jpeg({ quality: 85 })
      .toFile(path.join(publicDir, 'og-image.jpg'));

    await sharp(ogSource)
      .resize(1200, 630, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(path.join(publicDir, 'og-image.webp'));

    console.log('✓ Generated og-image.jpg and og-image.webp (1200x630)');
  }

  // 2. Favicons & PWA Icons from icon.png
  const iconSource = path.join(publicDir, 'icon.png');
  if (fs.existsSync(iconSource)) {
    // Favicon PNG 32x32
    await sharp(iconSource)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));

    // Favicon PNG 16x16
    await sharp(iconSource)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));

    // Apple Touch Icon 180x180
    await sharp(iconSource)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    // PWA Icon 192x192
    await sharp(iconSource)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'icon-192.png'));

    // PWA Icon 512x512
    await sharp(iconSource)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'icon-512.png'));

    // Maskable Icon 512x512 (with padding)
    await sharp(iconSource)
      .resize(400, 400)
      .extend({
        top: 56,
        bottom: 56,
        left: 56,
        right: 56,
        background: { r: 15, g: 20, b: 24, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicDir, 'icon-maskable.png'));

    console.log('✓ Generated favicons and PWA icons');
  }

  // 3. Optimize Profile Photo
  const profileSource = path.join(publicDir, 'profile-photo.jpg');
  if (fs.existsSync(profileSource)) {
    await sharp(profileSource)
      .resize(800, 1000, { fit: 'cover' })
      .webp({ quality: 82 })
      .toFile(path.join(publicDir, 'profile-photo.webp'));

    await sharp(profileSource)
      .resize(800, 1000, { fit: 'cover' })
      .avif({ quality: 75 })
      .toFile(path.join(publicDir, 'profile-photo.avif'));

    // Replace original JPG with optimized JPG
    await sharp(profileSource)
      .resize(800, 1000, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toFile(path.join(publicDir, 'profile-photo-opt.jpg'));
    
    fs.renameSync(path.join(publicDir, 'profile-photo-opt.jpg'), profileSource);
    console.log('✓ Optimized profile-photo (AVIF, WebP, JPG)');
  }

  // 4. Optimize Hero Bg
  const heroSource = path.join(publicDir, 'hero-bg.jpg');
  if (fs.existsSync(heroSource)) {
    await sharp(heroSource)
      .resize(1920, 1080, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(path.join(publicDir, 'hero-bg.webp'));

    await sharp(heroSource)
      .resize(1920, 1080, { fit: 'cover' })
      .avif({ quality: 70 })
      .toFile(path.join(publicDir, 'hero-bg.avif'));

    console.log('✓ Optimized hero-bg (AVIF, WebP)');
  }

  // 5. Optimize Projects Images
  if (fs.existsSync(projectsDir)) {
    const files = fs.readdirSync(projectsDir);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const filePath = path.join(projectsDir, file);

        // Convert to WebP
        await sharp(filePath)
          .resize(800, 450, { fit: 'cover' })
          .webp({ quality: 80 })
          .toFile(path.join(projectsDir, `${name}.webp`));

        // Convert to AVIF
        await sharp(filePath)
          .resize(800, 450, { fit: 'cover' })
          .avif({ quality: 75 })
          .toFile(path.join(projectsDir, `${name}.avif`));

        console.log(`✓ Processed project image: ${name} (WebP & AVIF)`);
      }
    }
  }

  console.log('Image optimization complete!');
}

processImages().catch((err) => {
  console.error('Error processing images:', err);
  process.exit(1);
});
