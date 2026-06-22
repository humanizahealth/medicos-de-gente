import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "landing_page/assets/images");
const unified = path.join(sourceDir, "gallery_unified_final");
const output = path.join(root, "public/assets/mdg");

await fs.mkdir(output, { recursive: true });
await fs.mkdir(path.join(root, "public"), { recursive: true });

const heroSource = path.join(unified, "unique_image_12.png");
const logoSource = path.join(sourceDir, "MdG-Logo.png");
const taipaCareSource = "/Users/danielsalespimentel/Downloads/Atendimento em casa de taipa.jpeg";
const remoteTerritorySource = "/Users/danielsalespimentel/Downloads/Atendimento remoto.jpeg";

async function sourceExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

const hero = sharp(heroSource).rotate();

await hero
  .clone()
  .resize({ width: 1800, withoutEnlargement: true })
  .blur(10)
  .modulate({ saturation: 0.78, brightness: 0.82 })
  .webp({ quality: 78 })
  .toFile(path.join(output, "hero-ambient-1800.webp"));

await hero
  .clone()
  .extract({ left: 820, top: 0, width: 900, height: 760 })
  .resize({ width: 960, height: 720, fit: "cover" })
  .modulate({ saturation: 0.72, brightness: 0.9 })
  .webp({ quality: 82 })
  .toFile(path.join(output, "door-memory.webp"));

await hero
  .clone()
  .extract({ left: 800, top: 0, width: 1000, height: 760 })
  .resize({ width: 1200, height: 630, fit: "cover" })
  .blur(8)
  .modulate({ saturation: 0.75, brightness: 0.82 })
  .webp({ quality: 82 })
  .toFile(path.join(output, "og-transition.webp"));

await sharp(path.join(unified, "unique_image_1.jpg"))
  .rotate()
  .extract({ left: 0, top: 0, width: 190, height: 572 })
  .resize({ width: 520, height: 720, fit: "cover" })
  .grayscale()
  .webp({ quality: 82 })
  .toFile(path.join(output, "stone-threshold.webp"));

await sharp(logoSource)
  .resize({ width: 256, height: 256, fit: "contain" })
  .png()
  .toFile(path.join(output, "mdg-logo-256.png"));

await sharp(logoSource)
  .resize({ width: 512, height: 512, fit: "contain" })
  .png()
  .toFile(path.join(output, "mdg-logo-512.png"));

await sharp(logoSource)
  .resize({ width: 256, height: 256, fit: "contain" })
  .png()
  .toFile(path.join(root, "public/favicon.png"));

if (await sourceExists(taipaCareSource)) {
  const taipaCare = sharp(taipaCareSource).rotate();

  await taipaCare
    .clone()
    .resize({ width: 760, height: 760, fit: "cover", position: "left" })
    .modulate({ saturation: 0.82, brightness: 0.9 })
    .webp({ quality: 84 })
    .toFile(path.join(output, "taipa-care-card.webp"));

  await taipaCare
    .clone()
    .resize({ width: 1800, withoutEnlargement: true })
    .blur(8)
    .modulate({ saturation: 0.72, brightness: 0.76 })
    .webp({ quality: 78 })
    .toFile(path.join(output, "taipa-care-ambient.webp"));
} else {
  console.warn(`Skipped supplemental asset: ${taipaCareSource}`);
}

if (await sourceExists(remoteTerritorySource)) {
  const remoteTerritory = sharp(remoteTerritorySource).rotate();

  await remoteTerritory
    .clone()
    .resize({ width: 1200, height: 760, fit: "cover", position: "bottom" })
    .modulate({ saturation: 0.86, brightness: 0.9 })
    .webp({ quality: 84 })
    .toFile(path.join(output, "remote-territory-card.webp"));

  await remoteTerritory
    .clone()
    .resize({ width: 1800, withoutEnlargement: true })
    .blur(7)
    .modulate({ saturation: 0.78, brightness: 0.78 })
    .webp({ quality: 78 })
    .toFile(path.join(output, "remote-territory-ambient.webp"));
} else {
  console.warn(`Skipped supplemental asset: ${remoteTerritorySource}`);
}

console.log(`Prepared assets in ${output}`);
