document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramValue = urlParams.get('p');
  const productsData = {
    'demo1': {
      name: 'Lorem Ipsum Bangla Typography Combo Pack',
      code: 'FHS9362',
      price: '800',
      details: 'Description demo typo',
      link: '/search/Label/Resources',
      image: 'https://lh3.googleusercontent.com/B8Ry0wwh_7z_MqH4TwdJOnU2InT8AiX0G3tBf0H2WbgqvQygQvCjTyCrOmHmi213B66H4PdU4R1ZcrUFtLViPJ0gQsMm7-_lL9Sz8pGqC20bXkc9PgtOv_7AOuIenr4-uw=w260',
      form: 'https://docs.google.com/forms/d/e/1FAIpQLScWNZ2hGcTXJs7eF0Ysu5WuZOb904W6zN8Gvnqx6YIcgkazSg/viewform?embedded=true&usp=pp_url&entry.358930372=FHS3749&entry.723714736=DEMO+PRODUCT+NAME&entry.1724040677=500&entry.472063648=https://fuadhasanshihab.blogspot.com/2024/01/demo.html',
      formBank: 'https://docs.google.com/forms/d/e/1FAIpQLSf7NzwO8tSYj9k-lO7iKs3CKy4-m5nEudf5DVlEggk9d15HnQ/viewform?usp=pp_url&entry.358930372=FHS3749&entry.723714736=DEMO+PRODUCT+NAME&entry.1724040677=500&entry.472063648=https://fuadhasanshihab.blogspot.com/2024/01/demo.html'
    },
    'demo2': {
      name: 'Dolor Sit Amet Bangla Font',
      code: 'FHS9274',
      price: '50',
      details: 'detail aka',
      link: '/product2.html',
      image: 'https://lh3.googleusercontent.com/B8Ry0wwh_7z_MqH4TwdJOnU2InT8AiX0G3tBf0H2WbgqvQygQvCjTyCrOmHmi213B66H4PdU4R1ZcrUFtLViPJ0gQsMm7-_lL9Sz8pGqC20bXkc9PgtOv_7AOuIenr4-uw=w260',
      form: 'https://docs.google.com/forms/d/e/1FAIpQLScWNZ2hGcTXJs7eF0Ysu5WuZOb904W6zN8Gvnqx6YIcgkazSg/viewform?embedded=true&usp=pp_url&entry.358930372=FHS3749&entry.723714736=DEMO+PRODUCT+NAME&entry.1724040677=500+BDT&entry.472063648=https://fuadhasanshihab.blogspot.com/2024/01/demo.html',
      formBank: 'https://docs.google.com/forms/d/e/1FAIpQLSf7NzwO8tSYj9k-lO7iKs3CKy4-m5nEudf5DVlEggk9d15HnQ/viewform?usp=pp_url&entry.358930372=FHS3749&entry.723714736=DEMO+PRODUCT+NAME&entry.1724040677=500&entry.472063648=https://fuadhasanshihab.blogspot.com/2024/01/demo.html'
    },
  };

  if (!paramValue) {
    document.getElementById('NoProductFound').style.display = 'block';
  } else if (productsData[paramValue]) {
    const product = productsData[paramValue];
    
    document.getElementById('productImage').src = product.image;
    document.getElementById('productName').innerText = product.name;
    document.getElementById('productCode').innerText = product.code;
    document.getElementById('productPrice').innerText = product.price;
    document.getElementById('payBDT').innerText = product.price;
    document.getElementById('productDetails').innerText = product.details;
    document.getElementById('productLink').href = product.link;
    document.getElementById('bkashAmount').innerText = product.price;
    document.getElementById('nagadAmount').innerText = product.price;
    document.getElementById('rocketAmount').innerText = product.price;
    document.getElementById('upayAmount').innerText = product.price;
    document.getElementById('islamiBankAmount').innerText = product.price;
    document.getElementById('bkashForm').src = product.form;
    document.getElementById('nagadForm').src = product.form;
    document.getElementById('rocketForm').src = product.form;
    document.getElementById('upayForm').src = product.form;
    document.getElementById('islamiBankForm').href = product.formBank;
    
    document.getElementById('productCard').style.display = 'block';
  } else {
    document.getElementById('InvalidProduct').style.display = 'block';
  }
});
