from app.models import db, Item

def seed_items():
  item_one = Item(
    owner_id=1,
    item_name="Paint Brush",
    item_price="20.00",
    item_description="These brushes are made to last and I assure you that you will be glad you purchased them.",
    item_img="https://www.artnews.com/wp-content/uploads/2020/09/AdobeStock_61145816.jpeg",
    shop_id=1
  )
  item_two = Item(
    owner_id=2,
    item_name="Seven quality Canvases",
    item_price="11.00",
    item_description="These canvases are homemade and are crafted with care and attention detail.",
    item_img="https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/016DB9C981334D10AF77E13648EC167E/10131569_25.jpg",
    shop_id=2
  )
  item_three = Item(
    owner_id=3,
    item_name="Palette Knife",
    item_price="25.00",
    item_description="This palette knife is preferred by senators due to their longevity and chrome coating.",
    item_img="https://www.brushesandmore.com/wp-content/uploads/2017/06/500820.jpg",
    shop_id=3
  )
  item_four = Item(
    owner_id=1,
    item_name="Children's Paint Brushes",
    item_price="16.45",
    item_description="These paint brushes are made for children ages 7 to 12.",
    item_img="https://www.ikea.com/us/en/images/products/mala-paintbrush-set-of-6__0710242_pe727421_s5.jpg",
    shop_id=4
  )
  item_five = Item(
    owner_id=2,
    item_name="Nice Canvases, 10-pack",
    item_price="18.00",
    item_description="You can't go wrong with these canvases. They're are of great quality and at a great price.",
    item_img="https://m.media-amazon.com/images/I/51bcp7LZ2HL.jpg",
    shop_id=5
  )
  item_six = Item(
    owner_id=3,
    item_name="Five Assorted Palette Knives",
    item_price="17.99",
    item_description="5 quality palette knives in assorted sizes to meet all of your painting needs.",
    item_img="https://imgprd19.hobbylobby.com/1/67/9b/1679b77c76207b3677a1913f17745a9a9177bef2/1400Wx1400H-903310-0220-px.jpg",
    shop_id=6
  )
  item_seven = Item(
    owner_id=1,
    item_name="Cruelty Free Paint Brushes",
    item_price="19.99",
    item_description="These paint brushes are crafted with artificial horse hair. We back our products with a full refund if you are not satisfied.",
    item_img="https://imgprd19.hobbylobby.com/3/cb/c7/3cbc7fcf1a9019af1923979aa3c2191824fba3b6/1400Wx1400H-1621341-a-0318.jpg",
    shop_id=1
  )
  item_eight = Item(
    owner_id=2,
    item_name="Great Canvases, 12-pack",
    item_price="39.99",
    item_description="The name says it all. Arteza is a well respected brand and here for $39.99 you receive 12.",
    item_img="https://cdn.shopify.com/s/files/1/1903/8473/products/8x10-stretched-canvas-pack-of-12_erTtheZ6_695x700.jpg",
    shop_id=2
  )
  item_nine = Item(
    owner_id=3,
    item_name="Four Assorted Palette Knives",
    item_price="15.00",
    item_description="These palette knives are made by yours truly, each crafted with stainless steel, stained oak, and a bronze ring.",
    item_img="https://assets.leevalley.com/Size4/10032/35K0901-palette-knives-set-of-4-f-01.jpg",
    shop_id=3
  )
  item_ten = Item(
    owner_id=1,
    item_name="Quality Paint Brushes",
    item_price="40.00",
    item_description="Nine high-quality brushes made at home by yours truly. crafted with care and attention to detail.",
    item_img="https://m.media-amazon.com/images/I/61l2v1dAltL.jpg",
    shop_id=4
  )
  item_eleven = Item(
    owner_id=2,
    item_name="Two Quality Canvases",
    item_price="9.99",
    item_description="These are quality canvases for anyone just starting out in their art journey.",
    item_img="https://m.media-amazon.com/images/I/31UjH1rUPxL.jpg",
    shop_id=5
  )
  item_twelve = Item(
    owner_id=3,
    item_name="Five Chrome-Plated Palette Knives ",
    item_price="16.00",
    item_description="I make these palette knives myself and they are each coated in chrome.",
    item_img="https://i5.walmartimages.com/asr/e99b86f1-6966-481a-b83f-853691b2daac_1.8bed3f0ca036b12eba1303d845db424e.jpeg",
    shop_id=6
  )
  item_thirteen = Item(
    owner_id=1,
    item_name="Assorted Paint Brushes",
    item_price="72.55",
    item_description="These are great quality paint brushes that are made by yours truly with skill and care.",
    item_img="https://images.ctfassets.net/f1fikihmjtrp/5bHw6o0L2ElZxhrcQ5oSiN/bee5d32db0dca76defa338bc0c8a18c3/05908-group-3ww-l.jpg",
    shop_id=1
  )
  item_fourteen = Item(
    owner_id=2,
    item_name="Canvases, 12 x 12",
    item_price="18.99",
    item_description="Canvases that are the traditional size of 12 x 12",
    item_img="https://cdn.shopify.com/s/files/1/0238/2354/8519/products/ML2001_011_1024x1024@2x.jpg",
    shop_id=2
  )
  item_fifteen = Item(
    owner_id=3,
    item_name="Six Palette Knives of Assorted Sizes",
    item_price="14.50",
    item_description="These palette knives come in assorted sizes and are homemade by yours truly.",
    item_img="https://images.ctfassets.net/f1fikihmjtrp/47E3I1eCRFGyMFJ6YSIrWl/2c1095e1f3d5aedcd4b78c662db82b0b/02825-1006-1-4ww.jpg",
    shop_id=3
  )
  item_sixteen = Item(
    owner_id=1,
    item_name="Refined Paint Brushes",
    item_price="88.00",
    item_description="These paint brushes not only offer a fine tip but also an obsidian glossed handle for a refined look.",
    item_img="https://mymodernmet.com/wp/wp-content/uploads/2020/09/best-artist-paint-brushes-2.jpg",
    shop_id=4
  )
  item_seventeen = Item(
    owner_id=2,
    item_name="Assorted Canvases",
    item_price="30.00",
    item_description="I have these canvases for sale in assorted sizes. Priced low to sell quick.",
    item_img="https://m.media-amazon.com/images/I/71noEI5gJHL._AC_SR263,263_QL70_.jpg",
    shop_id=5
  )
  item_eighteen = Item(
    owner_id=3,
    item_name="Quality Palette Knives",
    item_price="18.66",
    item_description="Palette knives made for painting and craftring the most beautiful art. These purchase comes with two palette knives.",
    item_img="https://cdn.shopify.com/s/files/1/1903/8473/products/palette-knives-7-and-15-set-of-2_eZrSuFLl_512x.png",
    shop_id=6
  )
  item_nineteen = Item(
    owner_id=1,
    item_name="Twelve-Pack of Paint Brushes",
    item_price="55.88",
    item_description="This is a 12 pack of only the highest quality of paint brushes.",
    item_img="https://www.dontwasteyourmoney.com/wp-content/uploads/2019/10/craft-4-all-professional-paint-brush-set-12-pcs-paint-brushes.jpg",
    shop_id=1
  )
  item_twenty = Item(
    owner_id=2,
    item_name="Assorted Black Canvases, 25-pack",
    item_price="34.99",
    item_description="You'll have everything you need here with 25 assorted black canvases, sure to inspire you and make your art experience one with ease.",
    item_img="https://cdn.shopify.com/s/files/1/0836/2349/products/01-Main-Image_25-Black-Canvas-Panels-Multi-Pack_2000x.jpg",
    shop_id=2
  )
  item_twentyone = Item(
    owner_id=3,
    item_name="Assorted Palette Knives",
    item_price="75.00",
    item_description="An assortment of palette knives, each made with stainless steel, oak, and a bronze ring.",
    item_img="https://theoilpaintstore.com/c/1013-category_default/phoenix-new-age-palette-knife.jpg",
    shop_id=3
  )
  item_twentytwo = Item(
    owner_id=1,
    item_name="Paint Brushes: Full Set",
    item_price="99.99",
    item_description="This is a full set of paint brushes crafter for the artist looking to have all the brushes they need for any style of painting.",
    item_img="https://imgprd19.hobbylobby.com/6/4f/4d/64f4d66b813d4c9933dd1cfb7be41ff736e4756f/700Wx700H-1593623-012920.jpg",
    shop_id=4
  )
  item_twentythree = Item(
    owner_id=2,
    item_name="Artsmith Canvases",
    item_price="59.99",
    item_description="These Artsmith canvases are made from only the best quality materials. Satisfactory guaranteed or your money back.",
    item_img="https://www.joann.com/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9bfb1788/images/hi-res/alt/15518913ALT1.jpg",
    shop_id=5
  )
  item_twentyfour = Item(
    owner_id=3,
    item_name="A Couple of High Qualkity Palette Knives",
    item_price="12.39",
    item_description="Here I am selling two palette knives composed of stainless steel, each with a handle made of oak stained in black.",
    item_img="https://cdn.shopify.com/s/files/1/1903/8473/products/palette-knives-7-and-17-set-of-2_s4X7Ele9_512x.jpg",
    shop_id=6
  )
  item_twentyfive = Item(
    owner_id=1,
    item_name="Colored Brushes for Young Painters",
    item_price="8.99",
    item_description="These brushes are made for youngsters looking to get started in the world of painting.",
    item_img="https://m.media-amazon.com/images/I/41ot9qP+VUL._AC_.jpg",
    shop_id=1
  )
  item_twentysix = Item(
    owner_id=2,
    item_name="Black Canvas",
    item_price="67.00",
    item_description="Here's a black canvas I am selling. The dimenstions are 10 x 10.",
    item_img="https://www.artnews.com/wp-content/uploads/2020/05/AdobeStock_237470877.jpeg",
    shop_id=2
  )
  item_twentyseven = Item(
    owner_id=3,
    item_name="Five Assorted Palette Knives",
    item_price="10.99",
    item_description="I make these myself with extreme care and attention to detail. The best part: the come at a low price.",
    item_img="https://artfulhaven.com/wp-content/uploads/2020/03/PALETTE-KNIFE-PAINTING11.jpg",
    shop_id=3
  )
  item_twentyeight = Item(
    owner_id=1,
    item_name="Full Set of Beginner Brushes",
    item_price="52.99",
    item_description="This kit comes fully stocked with paint brushes in all beginner sizes to equip you on your art journey.",
    item_img="https://imgprd19.hobbylobby.com/3/c2/5c/3c25cffa6e0765368882131e5eca05c465f7bdaa/700Wx700H-1457985-012920.jpg",
    shop_id=4
  )
  item_twentynine = Item(
    owner_id=2,
    item_name="8 x 10 Black Canvases",
    item_price="48.99",
    item_description="These black canvases come in different sizes and are sure to make your art pop!",
    item_img="https://i5.walmartimages.com/asr/19f59ad3-a26f-40e3-9e15-112bf855704a.2cd9c99bb7f6b151e0c45b79bf6964e1.jpeg",
    shop_id=5
  )
  item_thirty = Item(
    owner_id=3,
    item_name="Palette Knives with Rubber Grip handles",
    item_price="17.65",
    item_description="These palette knives come with rubber grip handles and are crafter for efficient and safe use.",
    item_img="https://images.ctfassets.net/f1fikihmjtrp/5h0IWk0l3tZ4JDxo9UCFNl/18b3073d8f8cd19f2adc9bb88d96db9c/03103-0069-1-3ww-l.jpg",
    shop_id=6
  )

  db.session.add(item_one)
  db.session.add(item_two)
  db.session.add(item_three)
  db.session.add(item_four)
  db.session.add(item_five)
  db.session.add(item_six)
  db.session.add(item_seven)
  db.session.add(item_eight)
  db.session.add(item_nine)
  db.session.add(item_ten)
  db.session.add(item_eleven)
  db.session.add(item_twelve)
  db.session.add(item_thirteen)
  db.session.add(item_fourteen)
  db.session.add(item_fifteen)
  db.session.add(item_sixteen)
  db.session.add(item_seventeen)
  db.session.add(item_eighteen)
  db.session.add(item_nineteen)
  db.session.add(item_twenty)
  db.session.add(item_twentyone)
  db.session.add(item_twentytwo)
  db.session.add(item_twentythree)
  db.session.add(item_twentyfour)
  db.session.add(item_twentyfive)
  db.session.add(item_twentysix)
  db.session.add(item_twentyseven)
  db.session.add(item_twentyeight)
  db.session.add(item_twentynine)
  db.session.add(item_thirty)
  db.session.commit()


def undo_items():
  db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
  db.session.commit()
