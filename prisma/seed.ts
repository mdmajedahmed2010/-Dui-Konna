import { ProductStatus } from '@prisma/client';
import { prisma } from '../lib/db';
import { DEMO_CATEGORIES, DEMO_PRODUCTS } from '../lib/demo-data';

async function main() {
  console.log("Start seeding for Tazeen's...");

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
        description: `${pData.description} Curated by Tazeen's — Smart & Elegant Heritage Sarees & Boutique Couture in Bangladesh. Showrooms at Pink City (Gulshan-2) & Sector 11 (Uttara), Dhaka. Nationwide cash on delivery with open parcel inspection.`,
        basePrice: pData.price,
        categoryId: categoryId,
        status: ProductStatus.ACTIVE,
        isFeatured: pData.isFeatured ?? true,
        seoTitle: `${pData.name} | Tazeen's`,
        seoDesc: `Buy ${pData.name} online from Tazeen's. Smart & elegant heritage sarees with nationwide COD & open parcel inspection.`,
        ogImage: pData.images[0] || '/tazeens-assets/hero-banner.jpg',
        variants: {
          create: (pData.variants || []).map((v: any, idx: number) => ({
            sku: `TZ-${String(i + 1).padStart(3, '0')}-${idx + 1}`,
            size: v.size || 'Free Size Saree (6.5 Yards)',
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

  console.log("✅ Tazeen's Database Seeding Completed Successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
