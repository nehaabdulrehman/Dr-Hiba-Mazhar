import sharp from 'sharp';

async function cropHeroVisuals() {
  try {
    const metadata = await sharp('Hero Image.png').metadata();
    const width = metadata.width;
    const height = metadata.height;

    // 1. Pure remedy photo (excluding bottom bar and baked text where possible)
    await sharp('Hero Image.png')
      .extract({
        left: Math.round(width * 0.40),
        top: Math.round(height * 0.14),
        width: Math.round(width * 0.58),
        height: Math.round(height * 0.65)
      })
      .toFile('public/remedy-pure.png');

    console.log('Successfully created public/remedy-pure.png');
  } catch (err) {
    console.error('Error cropping image:', err);
  }
}

cropHeroVisuals();
