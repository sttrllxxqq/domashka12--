const vegetables = {
  cabbage: 8,
  avocado: 30,
  tomato: 10
};

const fruits = {
  grapes: 20,
  raspberry: 25,
  coconut: 50
};

const cleanInput = input => input.toLowerCase().trim();

const isValidSeason = season => season === 'winter' || season === 'summer';

const isValidCategory = category => category === 'vegetables' || category === 'fruits';

const isValidProduct = (category, product) => {
  if (category === 'vegetables') {
    return product in vegetables;
  } else if (category === 'fruits') {
    return product in fruits;
  }
  return false;
};

const getProductPrice = (category, product) => {
  if (category === 'vegetables') {
    return vegetables[product];
  } else if (category === 'fruits') {
    return fruits[product];
  }
  return 0;
};

const calculateFinalPrice = (price, season) => {
  if (season === 'winter') {
    return price * 2;
  } else if (season === 'summer') {
    return price * 0.8;
  }
  return price;
};

const renderPurchase = (product, count, season, category, finalPrice) => {
  const div = '<div class="product" align="center">';
  const img = `<img src="images/${category}/${product}.svg" alt="${product}" width="100" height="100">`;
  const productName = `<p>Selected product: <b>${product}</b></p>`;
  const productCount = `<p>Count of ${product}s: <b>${count}</b></p>`;
  const selectedSeason = `<p>Selected period: <b>${season}</b></p>`;
  const selectedCategory = `<p>Selected category: <b>${category}</b></p>`;
  const finalSum = `<p>Final sum: <b>${finalPrice} UAH</b></p>`;
  const closingDiv = '</div>';

  const html = div + img + productName + productCount + selectedSeason + selectedCategory + finalSum + closingDiv;

  document.write(html);
};

const getUserInput = () => {
  let season = '';
  let category = '';
  let product = '';
  let count = 0;

  do {
    season = cleanInput(prompt('Enter the season (winter or summer):'));
  } while (!isValidSeason(season));

  do {
    category = cleanInput(prompt('Enter the category (vegetables or fruits):'));
  } while (!isValidCategory(category));

  do {
    product = cleanInput(prompt(`Enter the ${category} (comma separated):`));
    product = product.split(',')[0].trim(); 
  } while (!isValidProduct(category, product));

  do {
    count = parseInt(prompt('Enter the count of products (more than 1):'), 10);
  } while (isNaN(count) || count < 1);

  const price = getProductPrice(category, product);

  const finalPrice = calculateFinalPrice(price, season);

  renderPurchase(product, count, season, category, finalPrice);
};

getUserInput();