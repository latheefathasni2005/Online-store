// Example product data
const productData = {
    gaming: [
      {
        name: "HAVIT HV-G92 Gamepad",
        image: "./images/9.png",
        currentPrice: "$120",
        originalPrice: "$160",
        rating: 5,
        reviews: 88,
      },
      {
        name: "AK-900 Wired Keyboard",
        image: "./images/11.png",
        currentPrice: "$960",
        originalPrice: "$1160",
        rating: 4,
        reviews: 75,
      },
      {
        name: "IPS LCD Gaming Monitor",
        image: "./images/10.png",
        currentPrice: "$370",
        originalPrice: "$400",
        rating: 5,
        reviews: 99,
      },
      {
        name: "ASUS FHD Gaming Laptop",
        image: "./images/3.png",
        currentPrice: "$700",
        rating: 5,
        reviews: 325,
      },
      {
        name: "GP11 Shooter USB",
        image: "./images/7.png",
        currentPrice: "$660",
        originalPrice: "$400",
        rating: 5,
        reviews: 99,
      },
      {
        name: "RGB liquid CPU Cooler",
        image: "./images/12.png",
        currentPrice: "$160",
        originalPrice: "$170",
        rating: 5,
        reviews: 99,
      },
    ],
    phones: [
      {
        name: "iPhone 14 Pro Max",
        image: "./images/phone1.png",
        currentPrice: "$1200",
        originalPrice: "$1400",
        rating: 5,
        reviews: 200,
      },
    ],
    computers: [
        {

        }
    ],
    camera:[
        {

        }
    ],
    headphones:[
        {

        }
    ],
    Smartwathes:[
        {

        }
    ],
    // Add other categories...
  };
  
  // Get the category from the URL
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  
  // Fetch the products for the selected category
  const products = productData[category] || [];
  const productSection = document.querySelector(".featured-product-list");
  
  // Display the products
  if (products.length > 0) {
    products.forEach((product) => {
      productSection.innerHTML += `
        <div class="featured-product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>
            <span style="color: red;">${product.currentPrice}</span>
            <span style="color: #666; text-decoration: line-through;">${product.originalPrice}</span>
          </p>
          <div class="product-rating">
            ${'⭐'.repeat(product.rating)} (${product.reviews})
          </div>
          <button>Add To Cart</button>
        </div>
      `;
    });
  } else {
    productSection.innerHTML = "<p>No products found for this category.</p>";
  }
  