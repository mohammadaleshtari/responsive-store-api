let fetchData = async (url, elementId, template) => {
  let res = await axios(url);
  let data = res.data.map(template);
  document.getElementById(elementId).innerHTML = data.join("");
};

fetchData("data/mainMenu.json", "mainMenu", (elem) => {
  return `<li><a class="active" href="#">${elem.name}</a></li>`;
});

fetchData("data/featuredProducts.json", "featuredProducts", (elem) => {
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
});

fetchData("data/productCategories.json", "productCategories", (elem) => {
  return `
    <div> 
      <a href="#"><img src=${elem.image} /></a>
      <p>${elem.name}</p>
    </div>`;
});

fetchData("data/recommendedProducts.json", "recommendedProducts", (elem) => {
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
});

fetchData("data/bestsellerProducts.json", "bestsellerProducts", (elem) => {
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
});

fetchData("data/advertisements.json", "advertisements", (elem) => {
  return `
    <div>
      <img src=${elem.image} />
      <p>${elem.text}</p>
      <p><a href="#">${elem.link}</a></p>
    </div>`;
});

fetchData("data/ShoppingMenu.json", "ShoppingMenu", (elem) => {
  return `<li><a href="#">${elem.name}</a></li>`;
});

fetchData("data/footerAccountMenu.json", "footerAccountMenu", (elem) => {
  return `<li><a href="#">${elem.name}</a></li>`;
});
