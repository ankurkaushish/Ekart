
var product = [];
var products=[];
var id = 1;
var divListProduct=document.getElementById('divListProduct');
var checkout = document.getElementById('checkout');
var checkoutpage = document.getElementById('checkout');
//var divAddProduct=document.getElementById('divAddProduct');
var wlcm = document.getElementById('wlcm');

function storeProducts(product){
  localStorage.cart = JSON.stringify(products);
}

function getStoredProducts(){
  if(!localStorage.product){
    localStorage.product = JSON.stringify([]);
    return [];
  }
  return JSON.parse(localStorage.product);
}

function cartpage()
{
	product=getStoredProducts();
for(var i=0;i<product.length;i++){
    addProductToDOM(product[i]);
  }
}

product=getStoredProducts();



function addProductToDOM(newProduct){



  var divProduct = document.createElement('div');
  divProduct.setAttribute("id",newProduct.pdtId);
blankSpace(divProduct);	

  var name = document.createElement('label');
  name.innerHTML = "Name : "+newProduct.pdtName ;
  divProduct.appendChild(name);
blankSpace(divProduct);

  var desc = document.createElement('label');
  desc.innerHTML = "Description : "+newProduct.pdtDescription ;
  divProduct.appendChild(desc);
blankSpace(divProduct);

  var price = document.createElement('label');
  price.innerHTML = "Price : "+newProduct.pdtPrice ;
  divProduct.appendChild(price);

  

  blankSpace(divProduct);

 var addquantity=document.createElement('input');
 divProduct.appendChild(addquantity);
 addquantity.setAttribute("type","number");
addquantity.setAttribute("id","addquantity");

 var addtocart=document.createElement('button');
 addtocart.innerHTML="Add to Cart";

var quan = newProduct.pdtQuantity;


 divProduct.appendChild(addtocart);

  divListProduct.appendChild(divProduct);

  

addtocart.addEventListener("click",function (argument) 
{

  var ab =minus(newProduct.pdtId);
  if(ab==1)
  {
 //     var targetParent = event.target.parentNode;
 //  var obj = new Object();
 //  obj.id=newProduct.pdtId;
 //  obj.name=newProduct.pdtName;
 //  obj.price=newProduct.pdtPrice;
 //  obj.quantity=0;
 // // obj.quantity=newProduct.pdtPrice;
 //  obj.Name=document.getElementById('newProduct.pdtName').value;
 //  obj.Desc=document.getElementById('newProduct.pdtDescription').value;
 //  obj.Price=document.getElementById('newProduct.pdtPrice').value;
 //  products.push(obj);
 //  storeProducts(products);
 //  id++;


    window.alert("OUT OF STOCK");
  }
    
    else
    {
  var targetParent = event.target.parentNode;
  var obj = new Object();
  obj.id=newProduct.pdtId;
  obj.name=newProduct.pdtName;
  obj.price=newProduct.pdtPrice;
  obj.quantity=targetParent.childNodes[7].value;
 // obj.quantity=newProduct.pdtPrice;
  /*obj.Name=document.getElementById('newProduct.pdtName').value;
  obj.Desc=document.getElementById('newProduct.pdtDescription').value;
  obj.Price=document.getElementById('newProduct.pdtPrice').value;*/
  products.push(obj);
  storeProducts(products);
  id++;
console.log(obj);
 }
});


}


checkout.addEventListener("click",function(event){






   
   var table = document.createElement('TABLE');
   table.setAttribute("id","table");
   table.setAttribute("border","1");
   table.setAttribute("Width","500");
   table.setAttribute("bgcolor","yellow");
   table.setAttribute("style","border-collapse:collapse");
   checkoutpage.appendChild(table);
 
 var tablerow= document.createElement('TR');
 tablerow.setAttribute("id","row1");
document.getElementById("table").appendChild(tablerow);


var z = document.createElement("TH");
  var t = document.createTextNode("NAME");
  z.appendChild(t);
  document.getElementById("row1").appendChild(z);

var z1 = document.createElement("TH");
  var t1 = document.createTextNode("PRICE");
  z1.appendChild(t1);
  document.getElementById("row1").appendChild(z1);


var z2 = document.createElement("TH");
  var t2 = document.createTextNode("QUANTITY");
  z2.appendChild(t2);
  document.getElementById("row1").appendChild(z2);

var costofproducts=0;
var cost =0;
   	  //var j = products.length-1;
   	  for(var j=0 ;j<products.length ;j++)
   	  {
      var x=document.createElement("TR");
      x.setAttribute("id",j);
      
      var z4 = document.createElement("TD");
    var t4 = document.createTextNode(products[j].name);
    z4.appendChild(t4);
    x.appendChild(z4);

     var z5 = document.createElement("TD");
    var t5 = document.createTextNode(products[j].price);
    z5.appendChild(t5);
    x.appendChild(z5);

    costofproducts=costofproducts+products[j].price*products[j].quantity;

   //cost =products[j].price*products[j].quantity;

     var z6 = document.createElement("TD");
    var t6 = document.createTextNode(products[j].quantity);
    z6.appendChild(t6);
    x.appendChild(z6);
    document.getElementById("table").appendChild(x);
      
      
      var z7 = document.createElement("button");
      z7.setAttribute("id",j);
    var t7 = document.createTextNode("Delete");
    z7.appendChild(t7);
    x.appendChild(z7);
    document.getElementById("table").appendChild(x);
      
z7.addEventListener("click", function(event){
 var index = event.target.id;
window.alert("You just deleted something from cart");
deleteChild(index); 

//costofproducts = eval(costofproducts-products[index].quantity);
  


});

      } 

    var q=document.createElement("TR");
      q.setAttribute("id","total");

     var q1 = document.createElement("TD");
    var q2 = document.createTextNode("TOTAL");
    q1.appendChild(q2);
    q.appendChild(q1);
    
    // for(var l=0 ;l<products.length;l++)
    // {
    	 
    // }

     var q3 = document.createElement("TD");
    var q4 = document.createTextNode(costofproducts);
    q3.appendChild(q4);
    q.appendChild(q3);

   
   document.getElementById("table").appendChild(q);


storeProd(product);

});


function storeProd(product){
  localStorage.product = JSON.stringify(product);
}

function getProductIndex(id){
  for(var i=0;i<product.length;i++){
    if(product[i].pdtId == id)
      return i;
  }
}


function deleteChild(j) { 
      products.splice(j,1);
        //document.getElementById(j).remove();
      localStorage.setItem("cart",JSON.stringify(products));
      const myNode = document.getElementById("table");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
    } 


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







function getStoredProduc(){
   if(localStorage.registerr){
    return JSON.parse(localStorage.registerr);}
    else {
           storeProducts(registerr);
      return registerr;
    }
  }
  
  regist=[];
  regist=getStoredProduc();
// var abc=[];
// abc=getStoredProducts()
console.log(regist);

var x= sessionStorage.getItem("index");
console.log(x);
  document.getElementById("username").innerHTML = regist[x].name;


  
function logoutpage()
{
	sessionStorage.clear();
	window.location.href="login.html";
	window.alert("YOU HAVE TO LOGIN");
}


function buynow()
{

for(var i=0;i<product.length;i++)
{
  for (var j = 0; j <products.length; j++) {
    if(product[i].pdtId == products[j].id)
  product[i].pdtQuantity=""+eval(product[i].pdtQuantity-products[j].quantity);  
  }
    
}
localStorage.removeItem("product");
localStorage.setItem("product",JSON.stringify(product));

	window.prompt("Enter Your Address");
	window.alert("Your Order Is On its Way");
   localStorage.removeItem("cart");
  window.location.reload();
}

function minus(id)
{
      for(var i=0;i<product.length;i++){
    if(product[i].pdtId == id)
    {
      if(product[i].pdtQuantity<=0)
      {
        return 1;
        break;

      }
      
    }
  }
  return 0;

}