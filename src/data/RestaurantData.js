export const Restaurant = [
  {
    id: 1,
    url: "zomoz",
    data: {
      Restaurant: "Zomoz - the Momo Comapny",
      title: ["Street Food", "Fast Food", "Asian", "Tibetan", "Chinese"],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jnbznyjiajkmb5rqkkne",
      rating: 4.1,
      d_time: 28,
      tag: 150,
      deal: "tryNew",
      urll: "/zomoz",
      address: "6th Phase Kukatpally",
      food: [
        {
          id: 100,
          type: "Recomended",
          food_item: [
            {
              id: 101,
              item: "Cheesy Combo - Veg",
              price: 359,
              item_info:
                "Cheese Mushroom Steamed Momos (1) + Veg Nuggets (1) + Regular Fries (1) + Coke (1 X 330ml Can)",
            },
            {
              id: 102,
              item: "Cheesy Combo - Chicken",
              price: 379,
              item_info:
                "Cheese Chicken Steamed Momos (1) + Chicken Nuggets (1) + Regular Fries (1) + Coke (1 X 330ml Can)",
            },
          ],
        },
        {
          id: 200,
          type: "Value Combos",
          food_item: [
            {
              id: 201,
              item: "Veg Steamed Momos + Any Drink + Fries",
              price: 230,
              item_info:
                "Convert your craving into a filling meal. Get 6 pcs of freshly steamed momos with hot crispy fries and a drink of your choice.",
            },
            {
              id: 202,
              item: "Chicken Steamed Momos + Any Drink + Fries",
              price: 250,
              item_info:
                "Indulge in 6 pieces of freshly steamed and succulent chicken momos, complemented with crispy fries and a drink of your choice!",
            },
          ],
        },
        {
          id: 300,
          type: "Experiment Box",
          food_item: [
            {
              id: 301,
              item: "Experiment Box - Steamed Veg Momos(6pcs)",
              price: 135,
              item_info:
                "Vegetable Momos (2 Pcs), Paneer Momos (2 Pcs), Cheese Mushroom Momos (2 Pcs)",
            },
            {
              id: 302,
              item: "Experiment Box - Chicken Steamed Momos(6pcs)",
              price: 150,
              item_info:
                "Chicken Momos (2 pcs), Zesty Chicken Momos (2 pcs), Cheese Chicken Momos (2 pcs)",
            },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    url: "bowl",
    data: {
      Restaurant: "The Bowl Company",
      title: [
        "Continental",
        "North Indian",
        "Pan-Asian",
        "Desserts",
        "American",
        "Asian",
        "Beverages",
        "Biryani",
      ],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/si8kn5wpifglo8ycdedm",
      rating: 4.0,
      d_time: 37,
      tag: 300,
      deal: "stealDeal",
      urll: "/bowl",
      food: [
        {
          id: 100,
          type: "Recomended",
          food_item: [
            {
              id: 101,
              item: "Peri Peri Chicken with Egg Corn Rice",
              price: 209,
              item_info:
                "An irresistible combination of Portuguese flavours. Tender peri peri grilled chicken on a bed of corn and egg rice, served with a portion of spicy peri peri sauce. Contains Egg, Milk, Wheat.",
            },
            {
              id: 102,
              item: "Paneer Makhani Biryani",
              price: 199,
              item_info:
                "We married the best of Dilli & Hyderabad in this explosion of flavours. Butter paneer meets its match with flavourful biryani rice, served with a tangy yogurt raita and sliced onions. Contains Milk, Nuts.",
            },
            {
              id: 103,
              item: "Classic Manchurian with Chilli Garlic Hakka Noodles",
              price: 169,
              item_info:
                "Mixed vegetable balls tossed in a thick manchurian gravy flavoured with Indo-Chinese ingredients. Served on a bed of wok tossed hakka noodles. Contains Wheat, Soy.",
            },
          ],
        },
        {
          id: 200,
          type: "Chef's Special",
          food_item: [
            {
              id: 201,
              item: "Peri Peri Chicken with Egg Corn Rice",
              price: 209,
              item_info:
                "An irresistible combination of Portuguese flavours. Tender peri peri grilled chicken on a bed of corn and egg rice, served with a portion of spicy peri peri sauce. Contains Egg, Milk, Wheat.",
            },
            {
              id: 202,
              item: "Paneer Makhani Biryani",
              price: 199,
              item_info:
                "We married the best of Dilli & Hyderabad in this explosion of flavours. Butter paneer meets its match with flavourful biryani rice, served with a tangy yogurt raita and sliced onions. Contains Milk, Nuts.",
            },
          ],
        },
        {
          id: 300,
          type: "Continental Bowls",
          food_item: [
            {
              id: 301,
              item: "Butter Chicken Mac & Cheese",
              price: 245,
              item_info:
                "A dish that marries the two classics - al dente macaroni and tender chicken chunks tossed in a creamy makhani sauce and finished off with parmesean shavings to seal the deal. Ultimate comfort food! Contains Milk, Nuts, Wheat.",
            },
            {
              id: 302,
              item: "Herbed Penne Al Coccio Pasta",
              price: 205,
              item_info:
                "Rustic bowl of pasta tossed in herbed tomato sauce, grated mushroom and topped with aged parmesan. Comfortness level just right! Contains Wheat, Milk.",
            },
          ],
        },
        {
          id: 400,
          type: "Parotta Bowls",
          food_item: [
            {
              id: 401,
              item: "Paneer Makhanwala Parotta Bowl",
              price: 205,
              item_info:
                "Food for every Punjabi soul! Tender paneer cubes cooked in a luscious tomato-onion gravy with lots of homemade makhan (butter) and classic Indian spices",
            },
            {
              id: 402,
              item: "Fiery Chicken Chettinad Parotta Bowl",
              price: 199,
              item_info:
                "A cracker combination from the Chettinad region, soft, flaky, conveniently bite-sized Parotta served with our scrumptious Chettinad Chicken.",
            },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    url: "ks-bakers",
    data: {
      Restaurant: "KS Bakers",
      title: ["Bakery", "Pizzas", "Desserts", "Snacks", "Fast Food"],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dfvixdi2gwfvc6qkyy70",
      rating: 4.1,
      d_time: 30,
      tag: 250,
      deal: "jumbo",
      urll: "/ks-bakers",
      food: [
        {
          id: 100,
          type: "Recomended",
          food_item: [
            {
              id: 101,
              item: "Cheesy Combo - Veg",
              price: 359,
              item_info:
                "Cheese Mushroom Steamed Momos (1) + Veg Nuggets (1) + Regular Fries (1) + Coke (1 X 330ml Can)",
            },
            {
              id: 102,
              item: "Cheesy Combo - Chicken",
              price: 379,
              item_info:
                "Cheese Chicken Steamed Momos (1) + Chicken Nuggets (1) + Regular Fries (1) + Coke (1 X 330ml Can)",
            },
          ],
        },
        {
          id: 200,
          type: "Value Combos",
          food_item: [
            {
              id: 201,
              item: "Veg Steamed Momos + Any Drink + Fries",
              price: 230,
              item_info:
                "Convert your craving into a filling meal. Get 6 pcs of freshly steamed momos with hot crispy fries and a drink of your choice.",
            },
            {
              id: 202,
              item: "Chicken Steamed Momos + Any Drink + Fries",
              price: 250,
              item_info:
                "Indulge in 6 pieces of freshly steamed and succulent chicken momos, complemented with crispy fries and a drink of your choice!",
            },
          ],
        },
        {
          id: 300,
          type: "Experiment Box",
          food_item: [
            {
              id: 301,
              item: "Experiment Box - Steamed Veg Momos(6pcs)",
              price: 135,
              item_info:
                "Vegetable Momos (2 Pcs), Paneer Momos (2 Pcs), Cheese Mushroom Momos (2 Pcs)",
            },
            {
              id: 302,
              item: "Experiment Box - Chicken Steamed Momos(6pcs)",
              price: 150,
              item_info:
                "Chicken Momos (2 pcs), Zesty Chicken Momos (2 pcs), Cheese Chicken Momos (2 pcs)",
            },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    url: "makers",
    data: {
      Restaurant: "Makers of Milkshakes",
      title: ["Desserts", "Beverages"],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a4sxybgzksg111w1ukyv",
      rating: 4.0,
      d_time: 31,
      tag: 250,
      deal: "tryNew",
      urll: "/makers",
      food: [
        {
          id: 100,
          type: "Recomended",
          food_item: [
            {
              id: 101,
              item: "Cheesy Combo - Veg",
              price: 359,
              item_info:
                "Cheese Mushroom Steamed Momos (1) + Veg Nuggets (1) + Regular Fries (1) + Coke (1 X 330ml Can)",
            },
            {
              id: 102,
              item: "Cheesy Combo - Chicken",
              price: 379,
              item_info:
                "Cheese Chicken Steamed Momos (1) + Chicken Nuggets (1) + Regular Fries (1) + Coke (1 X 330ml Can)",
            },
          ],
        },
        {
          id: 200,
          type: "Value Combos",
          food_item: [
            {
              id: 201,
              item: "Veg Steamed Momos + Any Drink + Fries",
              price: 230,
              item_info:
                "Convert your craving into a filling meal. Get 6 pcs of freshly steamed momos with hot crispy fries and a drink of your choice.",
            },
            {
              id: 202,
              item: "Chicken Steamed Momos + Any Drink + Fries",
              price: 250,
              item_info:
                "Indulge in 6 pieces of freshly steamed and succulent chicken momos, complemented with crispy fries and a drink of your choice!",
            },
          ],
        },
        {
          id: 300,
          type: "Experiment Box",
          food_item: [
            {
              id: 301,
              item: "Experiment Box - Steamed Veg Momos(6pcs)",
              price: 135,
              item_info:
                "Vegetable Momos (2 Pcs), Paneer Momos (2 Pcs), Cheese Mushroom Momos (2 Pcs)",
            },
            {
              id: 302,
              item: "Experiment Box - Chicken Steamed Momos(6pcs)",
              price: 150,
              item_info:
                "Chicken Momos (2 pcs), Zesty Chicken Momos (2 pcs), Cheese Chicken Momos (2 pcs)",
            },
          ],
        },
      ],
    },
  },
  {
    id: 5,
    url: "pista",
    data: {
      Restaurant: "Pista House Restaurant",
      title: [
        "Biryani",
        "North Indian",
        "Chinese",
        "Kebabs",
        "Mughlai",
        "Tandoor",
        "Desserts",
      ],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fdrd1cn6lnqyytdlvkpy",
      rating: 4.0,
      d_time: 34,
      tag: 500,
      deal: "tryNew",
      urll: "/pista",
      food: [
        {
          id: 100,
          type: "Recomended",
          food_item: [
            {
              id: 101,
              item: "Cheesy Combo - Veg",
              price: 359,
              item_info:
                "Cheese Mushroom Steamed Momos (1) + Veg Nuggets (1) + Regular Fries (1) + Coke (1 X 330ml Can)",
            },
            {
              id: 102,
              item: "Cheesy Combo - Chicken",
              price: 379,
              item_info:
                "Cheese Chicken Steamed Momos (1) + Chicken Nuggets (1) + Regular Fries (1) + Coke (1 X 330ml Can)",
            },
          ],
        },
        {
          id: 200,
          type: "Value Combos",
          food_item: [
            {
              id: 201,
              item: "Veg Steamed Momos + Any Drink + Fries",
              price: 230,
              item_info:
                "Convert your craving into a filling meal. Get 6 pcs of freshly steamed momos with hot crispy fries and a drink of your choice.",
            },
            {
              id: 202,
              item: "Chicken Steamed Momos + Any Drink + Fries",
              price: 250,
              item_info:
                "Indulge in 6 pieces of freshly steamed and succulent chicken momos, complemented with crispy fries and a drink of your choice!",
            },
          ],
        },
        {
          id: 300,
          type: "Experiment Box",
          food_item: [
            {
              id: 301,
              item: "Experiment Box - Steamed Veg Momos(6pcs)",
              price: 135,
              item_info:
                "Vegetable Momos (2 Pcs), Paneer Momos (2 Pcs), Cheese Mushroom Momos (2 Pcs)",
            },
            {
              id: 302,
              item: "Experiment Box - Chicken Steamed Momos(6pcs)",
              price: 150,
              item_info:
                "Chicken Momos (2 pcs), Zesty Chicken Momos (2 pcs), Cheese Chicken Momos (2 pcs)",
            },
          ],
        },
      ],
    },
  },
  
  
];
