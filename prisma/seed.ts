import { ProductStatus } from '@prisma/client';
import { prisma } from '../lib/db';
import { DEMO_CATEGORIES, DEMO_PRODUCTS } from '../lib/demo-data';

async function main() {
  console.log("Start seeding for 3 sis xclusive...");

  // Clean up existing data
  await prisma.productVariant.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // 1. Create Categories
  console.log('Creating Categories...');
  const categoryMap: Record<string, string> = {};
  for (let i = 0; i < DEMO_CATEGORIES.length; i++) {
    const cat = DEMO_CATEGORIES[i]!;
    const category = await prisma.category.create({
      data: {
        name: cat.name,
        slug: cat.slug,
        image: cat.image,
        sortOrder: i + 1,
      },
    });
    categoryMap[cat.slug] = category.id;
    categoryMap[cat.name] = category.id;
    console.log(`Created category: ${category.name}`);
  }

  // 2. Create Products and Variants
  console.log('Creating Products...');
  for (let i = 0; i < DEMO_PRODUCTS.length; i++) {
    const pData = DEMO_PRODUCTS[i]!;
    const catSlug = typeof pData.category === 'object' ? pData.category.slug : pData.category;
    const catName = typeof pData.category === 'object' ? pData.category.name : pData.category;
    const categoryId = categoryMap[catSlug] || categoryMap[catName] || Object.values(categoryMap)[0] || '';

    const product = await prisma.product.create({
      data: {
        name: pData.name,
        slug: pData.slug,
        description: `${pData.description} 100% authentic Pakistani designer collection curated by 3 sis xclusive — JUST FOR WOMEN. 17 years of trust in fashion. Nationwide cash on delivery with open parcel inspection.`,
        basePrice: pData.price,
        categoryId: categoryId,
        status: ProductStatus.ACTIVE,
        isFeatured: pData.isFeatured ?? true,
        seoTitle: `${pData.name} | 3 sis xclusive`,
        seoDesc: `Buy ${pData.name} online from 3 sis xclusive. 17 years of trust in fashion. 100% authentic Pakistani luxury suits with nationwide COD & open parcel inspection.`,
        ogImage: pData.images[0] || '/banner.jpg',
        variants: {
          create: (pData.variants || []).map((v: any, idx: number) => ({
            sku: `3SIS-${String(i + 1).padStart(3, '0')}-${idx + 1}`,
            size: v.size || 'Unstitched (3-Piece)',
            color: v.color || 'As Pictured',
            price: v.price || pData.price,
            stock: v.stock || 25,
            images: v.images || pData.images,
          })),
        },
      },
    });
    console.log(`Created product: ${product.name}`);
  }

  console.log("✅ 3 sis xclusive Database Seeding Completed Successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
