const foodData = [
    // Salad
    { name: "Caesar Salad", description: "Fresh romaine lettuce, croutons, and Caesar dressing.", price: 150, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Salad" },
    { name: "Greek Salad", description: "Cucumber, tomato, feta cheese, and olives.", price: 200, image: "https://plus.unsplash.com/premium_photo-1690561082636-06237f98bfab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Salad" },
    { name: "Fruit Salad", description: "A mix of fresh seasonal fruits.", price: 180, image: "https://plus.unsplash.com/premium_photo-1690272335076-01cfb86f8ac2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Salad" },
    { name: "Chicken Salad", description: "Grilled chicken with mixed greens.", price: 250, image: "https://plus.unsplash.com/premium_photo-1705557699909-8350f454b616?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Salad" },
    { name: "Avocado Salad", description: "Healthy avocado with mixed greens and lime.", price: 220, image: "https://plus.unsplash.com/premium_photo-1664648005432-035f0c45fc6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Salad" },
    
    // Rolls
    { name: "Veggie Roll", description: "Fresh vegetables rolled with sauces.", price: 120, image: "https://plus.unsplash.com/premium_photo-1664206964134-fa12b507f282?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Rolls" },
    { name: "Paneer Roll", description: "Soft paneer pieces in a crispy roll.", price: 180, image: "https://img.freepik.com/premium-photo/cottage-cheese-paneer-kathi-roll-wrap-also-known-as-kolkata-style-spring-rolls-vegetarians-indian-food_466689-52302.jpg?w=996", category: "Rolls" },
    { name: "Chicken Roll", description: "Grilled chicken wrapped in a roll.", price: 200, image: "https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?t=st=1736793810~exp=1736797410~hmac=cee23c6dec8317a7e2b4d433b6a8711c14e5ee5d3229c397ffa280bf2b8cd7f1&w=996", category: "Rolls" },
    { name: "Egg Roll", description: "Classic egg-stuffed roll.", price: 150, image: "https://img.freepik.com/free-photo/fritters-with-meal-vegetables_144627-18108.jpg?t=st=1736793888~exp=1736797488~hmac=cd6363cc906064e1018b986f91de1249cd0b6b2fee980172f06b383c503292f7&w=996", category: "Rolls" },
    { name: "Cheese Roll", description: "Crispy roll stuffed with melting cheese.", price: 170, image: "https://img.freepik.com/free-photo/set-rolls-plate_181624-33046.jpg?t=st=1736793950~exp=1736797550~hmac=f316aa57d85691cbdd6ac8d6e1d2e8b1c0a84db1508ac542c54d50bbb036d663&w=900", category: "Rolls" },
    
    // Desserts
    { name: "Gulab Jamun", description: "Juicy dessert soaked in sugar syrup.", price: 100, image: "https://img.freepik.com/free-photo/high-angle-delicious-indian-dessert_23-2149312428.jpg?t=st=1736794010~exp=1736797610~hmac=9d09238226061b3d9a45b06370360de3ebf7983387ceba86c5aed3a8436b495e&w=996", category: "Deserts" },
    { name: "Rasmalai", description: "Rasgullas soaked in creamy milk.", price: 120, image: "https://img.freepik.com/premium-photo/angoori-rasmalai-is-indian-dessert-sweet-with-dry-fruits-saffron-toppings-served-bowl-moody-background-selective-focus_466689-58843.jpg?w=996", category: "Deserts" },
    { name: "Brownie", description: "Chocolate brownie with nuts.", price: 140, image: "https://img.freepik.com/free-photo/cookie-cocoa-unhealthy-homemade-square_1339-103.jpg?t=st=1736794191~exp=1736797791~hmac=d80ac5922b7d7980de1de374c8e4d3f0ccf3166c8783c246d6a9956652c4556e&w=900", category: "Deserts" },
    { name: "Ice Cream", description: "Assorted flavors of ice cream.", price: 80, image: "https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735424.jpg?t=st=1736794228~exp=1736797828~hmac=38ec602bc120dc1c552760c4e6d44209fad059d274a2488a3a7d30a6cdaf0b97&w=1060", category: "Deserts" },
    { name: "Mousse", description: "Light chocolate mousse.", price: 160, image: "https://img.freepik.com/free-photo/cake-glass-arrangement-with-copy-space_23-2149030766.jpg?t=st=1736794293~exp=1736797893~hmac=0228c025bc55a2d1a87a0c7ba7e2255815f36a00366f22b80196b7dfe50014cb&w=1060", category: "Deserts" },
    
    // Sandwich
    { name: "Veggie Sandwich", description: "A sandwich loaded with fresh vegetables.", price: 140, image: "https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?t=st=1736794338~exp=1736797938~hmac=64c54d5abbb48f2f7a24a9eb3c7e8640d0f13971fbc7cfb5fd70a488b6a65056&w=996", category: "Sandwich" },
    { name: "Grilled Cheese Sandwich", description: "Melted cheese grilled to perfection.", price: 160, image: "https://img.freepik.com/free-photo/ham-cheese-toast_1147-511.jpg?t=st=1736794531~exp=1736798131~hmac=4ea5d81fc57e18ae2d424cb6537fedc81e823b2c4a14de6e473a0ae69e38fcb7&w=996", category: "Sandwich" },
    { name: "Club Sandwich", description: "Triple-layered sandwich with veggies and chicken.", price: 200, image: "https://img.freepik.com/free-photo/club-sandwich-with-vegetable-sauce_74190-6831.jpg?t=st=1736794587~exp=1736798187~hmac=92b44e3ddf6f722cc4a028eebca39070736980a70650840652039f0d1f1fe3dd&w=996", category: "Sandwich" },
    { name: "Chicken Sandwich", description: "Grilled chicken with lettuce in bread.", price: 190, image: "https://img.freepik.com/free-photo/club-sandwich-chicken-breast-lettuce-cheese-toast-bread-tomato-cucumber-french-fries-side-view_141793-3533.jpg?t=st=1736794627~exp=1736798227~hmac=9728e4004a39a6e60815db52036d8172b7f2646502c9318abdfab545919a12c3&w=996", category: "Sandwich" },
    { name: "Paneer Sandwich", description: "Paneer stuffed sandwich.", price: 170, image: "https://img.freepik.com/free-photo/top-view-delicious-ham-sandwiches-wooden-board-dark-surface_179666-35070.jpg?t=st=1736794665~exp=1736798265~hmac=bf24dd0207bc7b7725bb38f45e2e72d464ccecec68fa1d2f9fe87ac8760e60d3&w=996", category: "Sandwich" },
    
    // Cake
    { name: "Chocolate Cake", description: "Rich chocolate sponge.", price: 350, image: "https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Cake" },
    { name: "Vanilla Cake", description: "Soft vanilla sponge.", price: 300, image: "https://img.freepik.com/free-photo/coconut-cake-plate_1339-7096.jpg?t=st=1736794829~exp=1736798429~hmac=8bebdfafe0381b836a5ac1db81df112443751999511beb52fec5c390ca0b43f2&w=996", category: "Cake" },
    { name: "Red Velvet Cake", description: "Decadent red velvet cake.", price: 400, image: "https://plus.unsplash.com/premium_photo-1713920189849-61a19937fbda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Cake" },
    { name: "Pineapple Cake", description: "Pineapple flavored delight.", price: 320, image: "https://images.unsplash.com/photo-1643910509764-1add565de3e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Cake" },
    { name: "Strawberry Cake", description: "Strawberry cake topped with cream.", price: 330, image: "https://plus.unsplash.com/premium_photo-1672192166851-71d218e64544?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Cake" },
    
    // Pure Veg
    { name: "Paneer Butter Masala", description: "Creamy paneer curry.", price: 300, image: "https://img.freepik.com/premium-photo/paneer-korma-kurma-quorma-is-popular-indian-main-course-recipe-made-using-cottage-cheese-with-curry-made-curd-coconut-cashew-nuts_466689-23361.jpg?w=996", category: "Pure Veg" },
    { name: "Mix Veg Curry", description: "Seasonal vegetables cooked in gravy.", price: 280, image: "https://img.freepik.com/free-photo/side-view-vegetable-ragout-with-potato-carrot-cauliflower-basil_141793-5151.jpg?t=st=1736795167~exp=1736798767~hmac=a3512697991173d80ee98a2c30e849bfe998e2688e0f77f5ab0206457394eeb2&w=996", category: "Pure Veg" },
    { name: "Aloo Gobhi", description: "Potatoes and cauliflower cooked with spices.", price: 260, image: "https://img.freepik.com/premium-photo/plate-aloo-gobi-vegetarian-dish-made-with-potatoes-cauliflower-indian-spices_170984-24136.jpg?w=996", category: "Pure Veg" },
    { name: "Matar Paneer", description: "Paneer and peas cooked in gravy.", price: 300, image: "https://img.freepik.com/premium-photo/matar-paneer-curry-recipe-made-using-cottage-cheese-with-green-peas-served-bowl-selective-focus_466689-33035.jpg?w=996", category: "Pure Veg" },
    { name: "Dal Makhani", description: "Rich and creamy black lentils.", price: 240, image: "https://img.freepik.com/free-photo/woman-holding-bowl-soup-food-photography-recipe-idea_53876-48919.jpg?t=st=1736795303~exp=1736798903~hmac=87d4da4886609e41752b05a2b4d58e7b59cd05ecbf620118dbf9cd12238c3d22&w=1060", category: "Pure Veg" }
  ];
  
  export default foodData;
  