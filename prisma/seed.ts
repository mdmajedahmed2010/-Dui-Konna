import { ProductStatus } from '@prisma/client';
import { prisma } from '../lib/db';

const categoriesData = [
  {
    name: 'Pakistani Lawn Collection',
    slug: 'pakistani-lawn',
    image: '/enayas-assets/709865523_1278333164282920_1859523836051406463_n.jpg',
  },
  {
    name: 'Designer Luxury & Pre-Orders',
    slug: 'designer-luxury',
    image: '/enayas-assets/715711023_1284853183630918_5862540271831156994_n.jpg',
  },
  {
    name: 'Party Wear & Festive Organza',
    slug: 'party-wear',
    image: '/enayas-assets/719135606_1286458063470430_8962135561909446686_n.jpg',
  },
  {
    name: 'Casual & Farsi Sets',
    slug: 'farsi-sets',
    image: '/enayas-assets/719352002_1286458136803756_4691248053674653785_n.jpg',
  },
  {
    name: 'Velvet & Winter Luxury',
    slug: 'velvet-luxury',
    image: '/enayas-assets/709737585_1279951017454468_6214352059036910036_n.jpg',
  },
  {
    name: 'Boutique Jewelry & Beauty',
    slug: 'boutique-jewelry',
    image: '/enayas-assets/707826824_1279140170868886_3190213517486885594_n.jpg',
  },
];

const productsData = [
  {
    name: "Enaya's Mint Green Embroidered Pakistani Lawn 3-Piece",
    price: 3850,
    categoryIndex: 0,
    image: '/enayas-assets/709865523_1278333164282920_1859523836051406463_n.jpg',
    secondaryImage: '/enayas-assets/675125574_1249000667216170_7745782444532547030_n.jpg',
    desc: 'Authentic Pakistani pure lawn 3-piece suit featuring exquisite threadwork embroidery on neckline, printed lawn dupatta, and matching trousers. Unmatched summer comfort.',
    size: 'Stitched (36, 38, 40, 42, 44)',
  },
  {
    name: 'Powder Blue Pastel Embroidered Floral Lawn Set',
    price: 3950,
    categoryIndex: 0,
    image: '/enayas-assets/675125574_1249000667216170_7745782444532547030_n.jpg',
    secondaryImage: '/enayas-assets/709865523_1278333164282920_1859523836051406463_n.jpg',
    desc: 'Breathtaking pastel powder blue pure lawn set adorned with delicate rose floral embroidery and sheer lightweight dupatta. Perfect for festive celebrations.',
    size: 'Stitched (38, 40, 42)',
  },
  {
    name: 'Sadabahar Original Luxury Embroidered Couture 3-Piece',
    price: 13500,
    categoryIndex: 1,
    image: '/enayas-assets/715711023_1284853183630918_5862540271831156994_n.jpg',
    secondaryImage: '/enayas-assets/709737585_1279951017454468_6214352059036910036_n.jpg',
    desc: '100% Original Pakistani Sadabahar couture ensemble featuring intricate zardozi, hand-cutwork embroidery, pure silk dupatta, and tailored trousers.',
    size: 'Pre-Order / Ready Stock (36-44)',
  },
  {
    name: 'Russian Silk Champagne Handcrafted Adda Work Ensemble',
    price: 12800,
    categoryIndex: 1,
    image: '/enayas-assets/709737585_1279951017454468_6214352059036910036_n.jpg',
    secondaryImage: '/enayas-assets/715711023_1284853183630918_5862540271831156994_n.jpg',
    desc: 'Luminous champagne Russian silk suit with handmade adda needlework on neckline and cuffs, paired with bell bottom trousers and a pure silk dupatta.',
    size: 'Stitched (38, 40, 42, 44)',
  },
  {
    name: 'Midnight Black Royal Zardozi Hand-Embellished Formal Suit',
    price: 6850,
    categoryIndex: 2,
    image: '/enayas-assets/719135606_1286458063470430_8962135561909446686_n.jpg',
    secondaryImage: '/enayas-assets/707826824_1279140170868886_3190213517486885594_n.jpg',
    desc: 'Regal black formal ensemble featuring intricate silver and crystal zardozi handwork across the neckline and sleeve cuffs. Timeless evening elegance.',
    size: 'Stitched (38, 40, 42, 44)',
  },
  {
    name: 'Crimson Magenta Embroidered Suit with Lime Silk Dupatta',
    price: 6250,
    categoryIndex: 2,
    image: '/enayas-assets/707826824_1279140170868886_3190213517486885594_n.jpg',
    secondaryImage: '/enayas-assets/719135606_1286458063470430_8962135561909446686_n.jpg',
    desc: 'Vibrant festive crimson magenta tunic embellished with fine floral embroidery and paired with a contrasting lime green pure silk dupatta.',
    size: 'Stitched (38, 40, 42)',
  },
  {
    name: 'Sage Green Embroidered Organza Luxury Festive 3-Piece',
    price: 7450,
    categoryIndex: 2,
    image: '/enayas-assets/707774863_1279140164202220_9001242221184187792_n.jpg',
    secondaryImage: '/enayas-assets/719135606_1286458063470430_8962135561909446686_n.jpg',
    desc: 'Premium imported organza festive suit with delicate pastel threadwork, scalloped borders, and soft inner lining. Customer favorite design.',
    size: 'Stitched (38, 40, 42, 44)',
  },
  {
    name: 'Ivory Cream Embroidered Kurti with Navy Dupatta & Palazzo',
    price: 2650,
    categoryIndex: 3,
    image: '/enayas-assets/719352002_1286458136803756_4691248053674653785_n.jpg',
    secondaryImage: '/enayas-assets/668325784_1238512208265016_877673681815563832_n.jpg',
    desc: "Enaya's iconic ivory cotton kurti with navy blue neckline and border embroidery, matching wide-leg palazzo, and contrasting navy dupatta.",
    size: 'Free Size (38-44)',
  },
  {
    name: 'Pure Cotton Flared Farsi Salwar Daily Boutique 2-Piece',
    price: 2250,
    categoryIndex: 3,
    image: '/enayas-assets/668325784_1238512208265016_877673681815563832_n.jpg',
    secondaryImage: '/enayas-assets/719352002_1286458136803756_4691248053674653785_n.jpg',
    desc: 'Ultra-breathable premium white cotton kurti with traditional flared farsi salwar. Designed for daily grace and comfort.',
    size: 'Free Size (38-42)',
  },
  {
    name: 'Rose Pink Striped Embroidered Kurti with Floral Trouser',
    price: 2450,
    categoryIndex: 3,
    image: '/enayas-assets/710651719_1279138907535679_2355904992786898129_n.jpg',
    secondaryImage: '/enayas-assets/710651720_1279138910869012_4457400297116198386_n.jpg',
    desc: 'Textured pink striped kurti with delicate border embroidery, paired with a matching floral printed straight trouser.',
    size: 'Free Size (38-42)',
  },
  {
    name: 'Royal Micro-Velvet Embroidered Kaftan & Shawl Set',
    price: 6500,
    categoryIndex: 4,
    image: '/enayas-assets/709737585_1279951017454468_6214352059036910036_n.jpg',
    secondaryImage: '/enayas-assets/719135606_1286458063470430_8962135561909446686_n.jpg',
    desc: 'Rich micro-velvet ensemble featuring metallic gold and copper threadwork, paired with an embroidered shawl for winter weddings.',
    size: 'Stitched (38, 40, 42, 44)',
  },
  {
    name: 'Handcrafted Traditional Jhumka & Festive Earring Set',
    price: 1450,
    categoryIndex: 5,
    image: '/enayas-assets/707826824_1279140170868886_3190213517486885594_n.jpg',
    secondaryImage: '/enayas-assets/707774863_1279140164202220_9001242221184187792_n.jpg',
    desc: 'Antique gold-plated festive jhumkas with pearl drop accents. Handcrafted to complement luxury Pakistani suits and festive wear.',
    size: 'One Size',
  },
];

async function main() {
  console.log("Start seeding for Enaya's | Sylhet...");

  // Clean up existing data
  await prisma.productVariant.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // 1. Create Categories
  console.log('Creating Categories...');
  const createdCategories = [];
  for (const cat of categoriesData) {
    const category = await prisma.category.create({
      data: {
        name: cat.name,
        slug: cat.slug,
        image: cat.image,
      },
    });
    createdCategories.push(category);
    console.log(`Created category: ${category?.name || cat.name}`);
  }

  // 2. Create Products and Variants
  console.log('Creating Products...');
  for (let i = 0; i < productsData.length; i++) {
    const pData = productsData[i]!;
    const categoryId = createdCategories[pData.categoryIndex]?.id || '';
    const slug = pData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    const product = await prisma.product.create({
      data: {
        name: pData.name,
        slug,
        description: `${pData.desc} Authentically curated by Enaya's | Sylhet — Elevate Your Style. Visit our outlet at Nayasarak Point, Sylhet or order online with Open Parcel Policy.`,
        basePrice: pData.price,
        categoryId: categoryId,
        status: ProductStatus.ACTIVE,
        isFeatured: true,
        seoTitle: `${pData.name} | Enaya's Sylhet`,
        seoDesc: `Buy ${pData.name} online from Enaya's Sylhet. 100% authentic Pakistani luxury designer wear with nationwide cash on delivery & open parcel check.`,
        ogImage: pData.image,
        variants: {
          create: [
            {
              sku: `ENY-2026-${String(i + 1).padStart(3, '0')}`,
              size: pData.size,
              color: 'As Pictured',
              price: pData.price,
              stock: 20,
              images: [pData.image, pData.secondaryImage],
            },
          ],
        },
      },
    });
    console.log(`Created product: ${product?.name || pData.name}`);
  }

  console.log("✅ Enaya's | Sylhet Database Seeding Completed Successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
