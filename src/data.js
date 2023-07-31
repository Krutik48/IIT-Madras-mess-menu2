const data = {
    north_menu_odd: 
      {Sunday:{
        bf:["Mango / Orange jam", "Boiled Peanut", "Boiled Egg/ Oats", "Chole Bhature"],
        lunch:["Veg Hyderabadi Biryani", "Roti", "Dal (Toor Dal)", "aingan Bharta", "Paneer Butter Masala", "Ice Cream"],
        dinner:["Rice", "Roti", "Rajma Masala", "Bhindi fry", "Banana fruit", "Lemon Juice"],
      },
      Monday:{
        bf:["Strawberry jam", "Boiled Chole", "Boiled Egg/Oats", "Dalia", "Jalebi"],
        lunch:["Rice", "Roti", "Dal Makhani", "Gobi Capsicum Masala", "Chole Curry"],
        dinner:["Rice", "Roti", "Chana dal", "Malai Kofta", "Moong Dal Halwa", "Orange fruit/ Papaya fruit"],
      },
      Tuesday:{
        bf:["Mixed Fruit Jam", "Boiled Green Gram", "Omelette/Chocos", "Wheat Upma", "Kachori", "Coconut chutney"],
        lunch:["Rice", "Roti", "Dal (Masoor)", "Bhindi Masala", "Sev Tomato"],
        dinner:["Fried Rice", "Roti", "Toor dal", "Gobi Manchurian", "Water Melon fruit", "Buttermilk"],     
      },
      Wednesday:{
        bf:["Pineapple Jam", "Boiled Black Chana", "Fried Egg/Cornflakes", "Luchi", "Aloo Dum"],
        lunch:["Rice", "Roti", "Dal (Rajma)", "Carrot Peas Foogath", "Soya Beans Curry", "Detox water"],
        dinner:["Ghee Rice", "Roti", "Masoor Dal", "Kadai Paneer", "Mango fruit (for summer)", "Guava fruit", "Lemon Juice"],  
      },
      Thursday:{
        bf:["Strawberry jam", "Green gram Sprouts", "Omelette/ Oats", "Pav Bhaji"],
        lunch:["Wheat Khichdi", "Roti", "Dal (Toor)", "Karela fry", "Lauki Chana Dal (Semi-fry)"],
        dinner:["Rice", "Roti", "Fried Dal", "Soya chunk curry", "Musk melon fruit", "Buttermilk"],     
      },
      Friday:{
        bf:["Mixed Fruit Jam", "Mixed boiled peanut,", "chole, greengram", "Boiled Egg/ Chocos", "Aloo Paratha", "Curd", "Green chutney"],
        lunch:["Rice", "Roti", "Dal (Chana dal)", "Cabbage onion", "pakoda", "Mix Veg Curry"],
        dinner:["Peas Pulao", "Methi Puri", "Dalma", "Sabudhana Kheer"],
      },
      Saturday:{
        bf:["Pineapple Jam", "Millet sprouts", "Fried Egg/ Cornflakes", "Sabudana Khichdi", "Curd"],
        lunch:["Rice", "Green Methi Paratha", "Dal (Urad)", "Aloo 65", "Vegetable Kurma", "Tomato ketchup"],
        dinner:["Sambar Rice", "Rice Khichdi", "Curd Rice", "Potato chips", "Mixed fruit Salad", "Boost + Milk"],
      }
    },
    north_menu_even :
      {Sunday:{
        bf:["Mango / Orange jam", "Boiled Peanut", "Boiled Egg/ Oats", "Semiya Upma", "Groundnut chutney", "Cutlet", "Sauce"],
        lunch:["Mixed Veg Biryani", "Roti", "Dal (Toor Dal)", "Vegetable Pakora fry", "Kadai Paneer", "Gulab Jamun"],
        dinner:["Rice", "Roti", "Dal Fry", "Rajma Masala", "Banana fruit", "Lemon Juice"],
      },
      Monday:{
        bf:["Strawberry Jam", "Boiled Chole", "Boiled Egg/ Oats", "Kal Dosa", "Sambhar", "Groundnut Chutney"],
        lunch:["Rice", "Roti", "Dal (Moong)", "Tendli Aloo Fry", "Kadi Pakoda"],
        dinner:["Rice", "Roti", "Chana dal", "Aloo brinjal Curry", "Pineapple fruit", "Rice Kheer"],
      },
      Tuesday:{
        bf:["Mixed Fruit Jam", "Boiled Green Gram", "Omelette/ Chocos", "Maggi", "Kachori", "Sauce"],
        lunch:["Rice", "Roti", "Dal (Masoor)", "Millet Vegetable", "Khichdi", "Aloo Bharta"],
        dinner:["Fried Rice", "Roti", "Toor dal", "Vegetable Kofta", "Papaya fruit", "Buttermilk"],     
      },
      Wednesday:{
        bf:["Pineapple Jam", "Boiled Black Chana", "Fried Egg/Cornflakes", "Idli", "Sambar", "Coconut chutney"],
        lunch:["Rice", "Roti", "Dal (Rajma)", "Cabbage Onion", "pakoda", "Aloo Parwal", "(seasonal) curry", "Detox water"],
        dinner:["Rice", "Roti", "Masoor Dal", "Shahi Paneer", "Mixed Fruit Salad", "Lemon Juice"],  
      },
      Thursday:{
        bf:["Strawberry jam", "Green gram Sprouts", "Omelette/ Oats", "Millet Chilla (with shredded", "vegetables mixed)", "Red chutney"],
        lunch:["Moong Dal vegetable Khichdi", "Roti", "Dal (Toor)", "Green leaf sabji", "Aloo Gobhi curry"],
        dinner:["Rice", "Roti", "Palak Dal", "Kala chana masala curry", "Water Melon fruit", "Buttermilk"],     
      },
      Friday:{
        bf:["Mixed Fruit Jam", "Mixed boiled peanut,", "chole, green gram", "Boiled Egg/ Chocos", "Onion Uthappam", "Groundnut chutney", "Sambar"],
        lunch:["Rice", "Roti", "Chana dal", "Paneer Bhurji", "Kadai Mix Veg Curry"],
        dinner:["Jeera Rice", "Roti", "Urad Dal", "Chole curry", "Custard"],
      },
      Saturday:{
        bf:["Pineapple Jam", "Millet sprouts", "Fried Egg/ Cornflakes", "Poha", "Jalebi", "Sauce"],
        lunch:["Rice", "Roti", "Dal (Urad)", "Mushroom Peas Masala", "Aloo Beans (dry)"],
        dinner:["Imli Rice", "Rice Khichdi", "Curd Rice", "Potato chips", "Mixed fruit salad", "Horlicks+ Milk"],
      }
    },
    south_menu_odd:
      {Sunday:{
        bf:['Boiled Egg/ Oats', 'White Chana Sprouts', 'Mixed Fruit Jam', 'Millet Dosa [1]', 'Groundnut Chutney [1]', 'Puttu [3]', 'Kadala Curry [3]'],
        lunch:['Plain Chapathi', 'Veg Biryani (Basmati rice)', 'Kadai Paneer', 'Gulab Jamun (1) / Ice Cream (3)'],
        dinner:['Plain Rice', 'Gobi (1)/Aloo (3)', 'Parotta', 'Green Chutney', 'Curd', 'Lemon Rasam', 'Watermelon Fruit', 'Mix Veg Pickle'],
      },
      Monday:{
        bf:["Boiled Egg/Oats", "Boiled Chole", "Mango/Orange Jam", "Rava Dosa", "Pudina Chutney", "Sambar"],
        lunch:["Methi Chapati", "Banana Bajji", "Beetroot Fry", "Tomato Rasam", "Mix Veg Kootu", "Avakai Pachadi", "Gongura Thoviyal"],
        dinner:["Plain rice", "Plain Chapati", "Brinjal Milmaker", "curry", "Lemon Rasam", "Banana Fruit", "Mix Veg Pickle"],
      },
      Tuesday:{
        bf:["Omelette/ Chocos", "Green Gram Sprouts", "Strawberry Jam", "Mysore bonda", "Khichdi (Wheat)(1)", "Khichdi (Rava)(3)", "Groundnut Chutney"],
        lunch:['Phulka', 'Tomato Rice', 'Bhindi Fry', 'Cauliflower Peas Curry', 'Mix Veg Sambar', 'Bele Saaru', 'Mixed Veg Pickle', 'Mint Thoviyal'],
        dinner:['Plain rice', 'Kerala Paratha', 'Veg Kurma', 'Drumstick Sambar', 'Seasonal Fruit', 'Lemon Pickle'],     
      },
      Wednesday:{
        bf:['Fried Egg/ Cornflakes', 'Boiled Black Chana', 'Mix Fruit Jam', 'Idly (1)/ Ragi Idli (3)', 'Vada', 'Coconut Chutney', 'Sambar'],
        lunch:['Pudina Chapati', 'Aloo 65', 'Cabbage curry', 'Pepper Rasam', 'Cucumber Pappu', 'Lemon Pickle', 'Ridge Gourd Thoviyal', 'Detox Water'],
        dinner:['Plain rice', 'Phulka', 'Jeera Rice', 'Palak Paneer', 'Paruppu Kadaiyal', 'Garlic Rasam', 'Carrot Halwa', 'Mango Pickle'],     
      },
      Thursday:{
        bf:['Omelette/ Oats', 'Boiled Peanut', 'Pineapple Jam', 'Onion Uthappam', 'Pongal', 'Groundnut chutney', 'Sambar'],
        lunch:['Phulka', 'Tindly Fry', 'Clustered Beans', 'Moong Dal', 'Brinjal Sambar', 'Mixed Veg Pickle', 'Curry Leaf Thoviyal'],
        dinner:['Plain Rice', 'Plain Chapati', 'Tomato Drumstick Curry', 'Mix Veg Sambar', 'Pineapple Fruit', 'Lemon Pickle'],  
      },
      Friday:{
        bf: ['Boiled Egg/ Chocos', 'White Chana Sprouts', 'Strawberry Jam', 'Masala Dosa', 'Coconut Chutney', 'Sambar'],
        lunch:['Plain Chapati', 'Bitter Gourd Fry', 'Gutti Vankaya Curry', 'Jeera Rasam', 'Spinach Pappu', 'Lemon Pickle', 'Gongura Thoviyal'],
        dinner:['Plain Rice', 'Idli', 'Coconut Chutney', 'Sambar', 'Mix Veg Curry', 'Papaya Fruit', 'Mango Pickle'],
      },
      Saturday:{
        bf:['Fried Egg/ Cornflakes', 'Boiled Moong', 'Pineapple Jam', 'Poori', 'Aloo Masala'],
        lunch: ['Phulka', 'Masala Vada', 'Spinach Fry', 'Drumstick Sambar', 'Parippu Curry', 'Avakai Pachadi', 'Mint Thoviyal'],
        dinner:['Lemon Rice', 'Vegetable Khichdi', 'Dal Fry', 'Banana Fruit', 'Tomato Chutney'],
      }
    },
    south_menu_even:
      {Sunday:{
        bf:['Boiled Egg/ Oats', 'Mixed Fruit Jam', 'White Chana Sprouts', 'Millet Dosa', 'Groundnut Chutney'],
        lunch:['Plain Chapathi', 'Veg Biryani (Basmati)', 'Paneer Butter Masala', 'Custard', 'Bread (2)/ Mysore Pak (4)'],
        dinner:['Plain Rice', 'Godi Dosa', 'Aloo Jeera Curry', 'Tomato Rasam', 'Mixed Fruit Salad', 'Mix Veg Pickle'],
      },
      Monday:{
        bf:['Boiled Egg/ Oats', 'Mango/ Orange Jam', 'Boiled Chole', 'Semiya Upma', 'Masala Vada', 'Coconut Chutney'],
        lunch:['Methi Chapati', 'Chilli Bajji', 'Carrot Beans Poriyal', 'Bhindi Sambar', 'Tomato Dal', 'Avakai Pachadi', 'Gongura Thoviyal']  ,
        dinner:['Plain Rice', 'Phulka', 'Potato Green Peas Masala', 'Mix Veg Sambar', 'Banana Fruit', 'Thoviyal'],
      },
      Tuesday:{
        bf:['Omelette/ Chocos', 'Strawberry Jam', 'Green Gram Sprouts', 'Punugulu', 'Khichdi (Wheat) (2)/ Rava Khichdi (4)', 'Groundnut Chutney'],
        lunch:['Phulka', 'Tomato Rice', 'Bhindi Fry', 'Tomato Peas Curry', 'Lemon Rasam', 'Bottle Gourd Dal', 'Mixed Veg Pickle', 'Mint Thoviyal'],
        dinner:['Plain Rice', 'Chole Bhature', 'Tomato Rasam', 'Seasonal Fruit', 'Lemon Pickle'],     
      },
      Wednesday:{
        bf:['Fried Egg/ Cornflakes', 'Mix Fruit Jam', 'Boiled Black Chana', 'Idly (2) /Ragi Idli (4)', 'Vada', 'Coconut Chutney', 'Sambar'],
        lunch:['Pudina Chapati', 'Gobi 65', 'Bottle Gourd Curry', 'Tomato Rasam', 'Palak Pappu', 'Lemon Pickle', 'Ridge Gourd Thoviyal', 'Detox Water'],
        dinner:['Plain Rice', 'Phulka', 'Jeera Rice', 'Masala Paneer', 'Tomato Dal', 'Bhindi Sambar', 'Payasam', 'Mix Veg Pickle'],  
      },
      Thursday:{
        bf:['Omelette/ Oats', 'Pineapple Jam', 'Boiled Peanut', 'Upma-Pesarattu', 'Ginger Chutney', 'Sambar'],
        lunch:['Phulka', 'Brinjal Fry', 'Clustered Beans', 'Moong Dal', 'Mix Veg Sambar', 'Mix Veg Pickle', 'Curry Leaf Thoviyal'],
        dinner:['Plain Rice', 'Plain Chapati', 'Carrot Poriyal', 'Lemon Rasam', 'Pineapple Fruit', 'Lemon Pickle'],     
      },
      Friday:{
        bf:['Boiled Egg/ Chocos', 'Strawberry Jam', 'Millet Sprouts', 'Maggi', 'Tomato Sauce', 'Idiyappam[2]', 'Veg Kurma[2]', 'Pulihora[4]'],
        lunch:['Plain Chapati', 'Mutter Paneer', 'Raw Banana Fry', 'Tomato Rasam', 'Parippu (Dal) Curry', 'Lemon Pickle', 'Gongura Thoviyal'],
        dinner:['Plain Rice', 'Kal (2)/ Ragi Dosa (4)', 'Coconut Chutney', 'Mix Veg Curry', 'Drumstick Sambar', 'Papaya Fruit', 'Mix Veg Pickle'],
      },
      Saturday:{
        bf:['Fried Egg/ Cornflakes', 'Pineapple Jam', 'Boiled Moong', 'Poori', 'Aloo Masala'],
        lunch:['Phulka', 'Mix Cabbage Fry', 'Keerai Vada', 'Drumstick Sambar', 'Gongura Pappu', 'Avakai Pachadi', 'Mint Thoviyal'],
        dinner:['Vangi Bath', 'Sambar Rice', 'Curd Rice', 'Potato Chips', 'Watermelon Fruit', 'Mango Pickle'],
      }
    },
};

export default data;
  