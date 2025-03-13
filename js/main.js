let fetchData = async (url, elementId, template) => {
  let res = await axios(url);
  let data = res.data.map(template);
  document.getElementById(elementId).innerHTML = data.join("");
};

fetchData("http://localhost:3000/mainMenu ", "mainMenu", (elem) => {
  return `<li><a class="active" href="#">${elem.name}</a></li>`;
});

fetchData(
  "http://localhost:3000/featuredProducts",
  "featuredProducts",
  (elem) => {
    return `
    <div>
      <a href="#"> <img src=${elem.image} alt=""></a>
      <h2>${elem.name}</h2>
      <div class="mony2">
        <h4>${elem.Discount}</h4>
        <h6>${elem.price}</h6>
        <p>${elem.off}</p>
      </div>
    </div>`;
  }
);

fetchData(
  "http://localhost:3000/productCategories",
  "productCategories",
  (elem) => {
    return `
    <div> 
      <a href="#"><img src=${elem.image} /></a>
      <p>${elem.name}</p>
    </div>`;
  }
);

fetchData(
  "http://localhost:3000/recommendedProducts",
  "recommendedProducts",
  (elem) => {
    return `
    <div>
      <a href="#"><img src=${elem.image}></img></a>
      <p>${elem.name}</p>
      <div class="mony2">
        <h4>${elem.Discount}</h4>
        <h6>${elem.price}</h6>
        <p>${elem.off}</p>
      </div>
    </div>`;
  }
);

fetchData(
  "http://localhost:3000/bestsellerProducts",
  "bestsellerProducts",
  (elem) => {
    return `
    <div>
      <a href="#"><img src=${elem.image} /></a>
      <p>${elem.name}</p>
      <div class="mony2">
        <h4>${elem.Discount}</h4>
        <h6>${elem.price}</h6>
        <p>${elem.off}</p>
      </div>
    </div>`;
  }
);

fetchData("http://localhost:3000/advertisements", "advertisements", (elem) => {
  return `
    <div>
      <img src=${elem.image}>
      <p>${elem.text}</p>
      <p><a href="#">${elem.link}</a></p>
    </div>`;
});

fetchData("http://localhost:3000/ShoppingMenu", "ShoppingMenu", (elem) => {
  return `<li><a href="#">${elem.name}</a></li>`;
});

fetchData(
  "http://localhost:3000/footerAccountMenu",
  "footerAccountMenu",
  (elem) => {
    return `<li><a href="#">${elem.name}</a></li>`;
  }
);
