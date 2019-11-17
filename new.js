var product = [];
var id = 1;
var aAddNewProduct = document.getElementById('aAddNewProduct');
var divAddProduct = document.getElementById('divAddProduct');
var divListProduct = document.getElementById('divListProduct');

window.addEventListener("load",function(event){
  product = getStoredProducts();


 console.log(product);
  
  if(product[0]){
    for(var i=0;i<product.length;i++){
    addProductToDOM(product[i]);
  }
    id = product[product.length-1].pdtId + 1;
  }
  console.log(product);
});

//triggers the function to add a new product when you click.
aAddNewProduct.addEventListener("click",function(event){
  createNewProductPanel();
});


//add extra new spaces.
function blankSpace(element){
  var space = document.createElement('br');
  element.appendChild(space);
}


//hides an element that later on needs to be unhidden. (does not removes it).
function hideElement(element){
  element.setAttribute("style","visibility:hidden");
}


//unhides the already hidden element.
function unHideElement(element){
  element.setAttribute("style","visibility:visible");
}

function addProductToArray(){

  var newProduct = new Object();

  newProduct.pdtId = id;
  newProduct.pdtName = document.getElementById('pdtName').value;
  newProduct.pdtDescription = document.getElementById('pdtDescription').value;
  newProduct.pdtPrice = document.getElementById('pdtPrice').value;
  newProduct.pdtQuantity = document.getElementById('pdtQuantity').value;


  product.push(newProduct);
  addProductToDOM(newProduct);
  deleteProduct();
  storeProducts(product);
  id++;
}

function storeProducts(product){
  localStorage.product = JSON.stringify(product);
}

function getStoredProducts(){
   if(localStorage.product){
    return JSON.parse(localStorage.product);}
    else {
      storeProducts([]);
      return [];
    }
  }

getProducts=async() =>
{
  await axios
  .get("http://127.0.0.1.8000/product")
  .then(res=>{
    console.log(res.data);
    product=res.data;
    product=product == null ? [] : product;
    addProductToDOM();
  })
  .catch(err=>{
    console.log("Error fetching products "+ err);
  });

  // productId = localStorage.getStoredProducts("productId");
  // productId = productId == null ? 1 : productId;
}

getProducts();
  function getStoredcostumer(){
   if(localStorage.registerr){
    return JSON.parse(localStorage.register);}
    else {
      storeProducts([]);
      return [];
    }
  }


function updateProductPanel(newProduct){

  var pdtName = document.createElement('input');
  pdtName.setAttribute("type","text");
  pdtName.setAttribute("id","pdtName");
  pdtName.setAttribute("value",newProduct.pdtName);
  pdtName.setAttribute("placeholder","Enter the product Name.");
  divAddProduct.appendChild(pdtName);

  blankSpace(divAddProduct);
  blankSpace(divAddProduct);

  var pdtDescription = document.createElement('textarea');
  pdtDescription.setAttribute("rows","10");
  pdtDescription.setAttribute("cols","40");
  pdtDescription.setAttribute("id","pdtDescription");
  pdtDescription.innerHTML = newProduct.pdtDescription;
  pdtDescription.setAttribute("placeholder","Enter description.");
  divAddProduct.appendChild(pdtDescription);

  blankSpace(divAddProduct);
  blankSpace(divAddProduct);

  var pdtPrice = document.createElement('input');
  pdtPrice.setAttribute("type","number");
  pdtPrice.setAttribute("id","pdtPrice");
  pdtPrice.setAttribute("value",newProduct.pdtPrice);
  pdtPrice.setAttribute("placeholder","Enter price.")
  divAddProduct.appendChild(pdtPrice);

  blankSpace(divAddProduct);
  blankSpace(divAddProduct);

  var pdtQuantity = document.createElement('input');
  pdtQuantity.setAttribute("type","number");
  pdtQuantity.setAttribute("id","pdtQuantity");
  pdtQuantity.setAttribute("value",newProduct.pdtQuantity);
  pdtQuantity.setAttribute("placeholder","Enter number of items.");
  divAddProduct.appendChild(pdtQuantity);

  blankSpace(divAddProduct);
  blankSpace(divAddProduct);

  var update = document.createElement('button');
  update.setAttribute("type","button");
  update.setAttribute("id","update");
  update.innerHTML = "Update";
  divAddProduct.appendChild(update);

  update.addEventListener("click",function(event){
    newProduct.pdtName = document.getElementById('pdtName').value;
    newProduct.pdtDescription = document.getElementById('pdtDescription').value;
    newProduct.pdtPrice = document.getElementById('pdtPrice').value;
    newProduct.pdtQuantity = document.getElementById('pdtQuantity').value;

    deleteProduct();

    unHideElement(aAddNewProduct);

    updateProductInDOM(newProduct);

    console.log(product);
  });
}

function updateProductInDOM(newProduct){
  var divId = document.getElementById(newProduct.pdtId);
  var childNodes = divId.childNodes;
  var i = -1;
  for (var key in newProduct) {
    if (i>=0) {
      childNodes[i].innerHTML = newProduct[key] + " ";
    }
    i++;
  }
  storeProducts(product);
}

function addProductToDOM(newProduct){

  var divProduct = document.createElement('div');
  divProduct.setAttribute("id",newProduct.pdtId);

  var name = document.createElement('label');
  name.innerHTML = newProduct.pdtName + " ";
  divProduct.appendChild(name);

  var desc = document.createElement('label');
  desc.innerHTML = newProduct.pdtDescription + " ";
  divProduct.appendChild(desc);

  var price = document.createElement('label');
  price.innerHTML = newProduct.pdtPrice + " ";
  divProduct.appendChild(price);

  var quantity = document.createElement('label');
  quantity.innerHTML = newProduct.pdtQuantity  + " ";
  divProduct.appendChild(quantity);

  blankSpace(divProduct);

  var deleteLink = document.createElement('a');
  deleteLink.setAttribute("href","#");
  deleteLink.setAttribute("id","deleteLink");
  deleteLink.innerHTML = "delete";

  divProduct.appendChild(deleteLink);

  blankSpace(divProduct);

  var editLink = document.createElement('a');
  editLink.setAttribute("href","#");
  editLink.setAttribute("id","editLink");
  editLink.innerHTML = "edit";

  divProduct.appendChild(editLink);

  divListProduct.appendChild(divProduct);

  blankSpace(divProduct);
  blankSpace(divProduct);

  deleteLink.addEventListener("click",function(event){
    var index = getProductIndex(newProduct.pdtId);
    product.splice(index,1);
    storeProducts(product);
    console.log(product);
    divProduct.remove();
  })

  editLink.addEventListener("click",function(event){
    hideElement(aAddNewProduct);
    updateProductPanel(newProduct);
  })

}

function getProductIndex(id){
  for(var i=0;i<product.length;i++){
    if(product[i].pdtId == id)
      return i;
  }
}

//creates the form for adding new product.
function createNewProductPanel(){
  hideElement(aAddNewProduct);

  var pdtName = document.createElement('input');
  pdtName.setAttribute("type","text");
  pdtName.setAttribute("id","pdtName");
  pdtName.setAttribute("placeholder","Enter the product Name.");
  divAddProduct.appendChild(pdtName);

  blankSpace(divAddProduct);
  blankSpace(divAddProduct);

  var pdtDescription = document.createElement('textarea');
  pdtDescription.setAttribute("rows","10");
  pdtDescription.setAttribute("cols","40");
  pdtDescription.setAttribute("id","pdtDescription");
  pdtDescription.setAttribute("placeholder","Enter description.");
  divAddProduct.appendChild(pdtDescription);

  blankSpace(divAddProduct);
  blankSpace(divAddProduct);

  var pdtPrice = document.createElement('input');
  pdtPrice.setAttribute("type","number");
  pdtPrice.setAttribute("id","pdtPrice");
  pdtPrice.setAttribute("placeholder","Enter price.")
  divAddProduct.appendChild(pdtPrice);

  blankSpace(divAddProduct);
  blankSpace(divAddProduct);

  var pdtQuantity = document.createElement('input');
  pdtQuantity.setAttribute("type","number");
  pdtQuantity.setAttribute("id","pdtQuantity");
  pdtQuantity.setAttribute("placeholder","Enter number of items.");
  divAddProduct.appendChild(pdtQuantity);

  blankSpace(divAddProduct);
  blankSpace(divAddProduct);

  var submit = document.createElement('button');
  submit.setAttribute("type","button");
  submit.setAttribute("id","submit");
  submit.innerHTML = "Submit";
  divAddProduct.appendChild(submit);

  submit.addEventListener("click",function(event){
    unHideElement(aAddNewProduct);
    addProductToArray();
  });
}


//when you click on the submit button, the form gets removed.(all the childs of the form are getting removed).
function deleteProduct() {
  var childNodes = divAddProduct.childNodes;
  for(var i=0; childNodes.length > 0;){
    divAddProduct.removeChild(childNodes[i]);
  }
}
 