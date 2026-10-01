import { ProductStatus } from '@prisma/client';
import { prisma } from '../lib/db';
import { DEMO_CATEGORIES, DEMO_PRODUCTS } from '../lib/demo-data';

async function main() {
  console.log("Start seeding for Shopping Queen by Orni...");

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
        description: `${pData.description} — শপিং কুইন বাই অর্নি (Shopping Queen by Orni), ঢাকা, বাংলাদেশ। সারাদেশে ক্যাশ অন হোম ডেলিভারি ও পার্সেল খুলে চেক করে পেমেন্ট করার নিশ্চিন্ত সুবিধা।`,
        basePrice: pData.price,
        categoryId: categoryId,
        status: ProductStatus.ACTIVE,
        isFeatured: pData.isFeatured ?? true,
        seoTitle: `${pData.name} | Shopping Queen by Orni`,
        seoDesc: `Buy ${pData.name} online from Shopping Queen by Orni. 100% authentic Pakistani suits, festive partywear & natural glow skincare with nationwide COD.`,
        ogImage: pData.images[0] || '/shoppingqueen-assets/banner.avif',
        variants: {
          create: (pData.variants || []).map((v: any, idx: number) => ({
            sku: `SQO-${String(i + 1).padStart(3, '0')}-${idx + 1}`,
            size: v.size || 'Standard Size',
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

  console.log("✅ Shopping Queen by Orni Database Seeding Completed Successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
