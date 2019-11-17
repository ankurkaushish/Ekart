var loginandregister = document.getElementById('loginandregister');
var login = document.getElementById('login');
var register = document.getElementById('register');
var loginshow = document.getElementById('loginshow');
var registershow = document.getElementById('registershow');
var registerr=[];

try{
var regid = JSON.parse(localStorage.regid);
}
catch(e) {
	var regid = 1;
}
window.addEventListener("load",function(event){
    login1();

});


registerr=getStoredProducts();
function login1()
{
	hideElement(loginshow);
	hideElement(registershow);
	var log = document.createElement('BUTTON');
	log.innerHTML="LOGIN";

	loginandregister.appendChild(log);
  blankSpace(loginandregister);
  blankSpace(loginandregister);
	var reg = document.createElement('BUTTON');
	reg.innerHTML="REGISTER";
	loginandregister.appendChild(reg);
	blankSpace(loginandregister);
	blankSpace(loginandregister);



	log.addEventListener("click",function(event){
   

unHideElement(loginshow);
hideElement(loginandregister);

var l4= document.createElement("label");
      l4.innerHTML="ENTER EMAIL : ";
login.appendChild(l4);

    var emailid = document.createElement("input");
    emailid.setAttribute("type","email");
    emailid.setAttribute("id","emailid");
    emailid.setAttribute("placeholder","Enter Email id");
    login.appendChild(emailid);
    
blankSpace(login);
blankSpace(login);

   var l5= document.createElement("label");
      l5.innerHTML="ENTER PASSWORD : ";
      login.appendChild(l5);

     var pass = document.createElement("input");
    pass.setAttribute("type","password");
    pass.setAttribute("id","password11");
    pass.setAttribute("placeholder","Enter Password");
    login.appendChild(pass);
    blankSpace(login);
    blankSpace(login);

 var submit = document.createElement("BUTTON");
 submit.innerHTML="SUBMIT";
    submit.setAttribute("type","submit");
    submit.setAttribute("id","submit11");
    
    login.appendChild(submit);

    submit11.addEventListener("click",function(event){

   for(var i=0;i<registerr.length ;i++)
   {
   	     if(document.getElementById("emailid").value==registerr[i].email)
   	     {
   	     	if(document.getElementById("password11").value==registerr[i].pass)
   	     	{
                 sessionStorage.setItem ("index",i);
   	     		window.location.href = "cart.html";
   	     	}
   	     	else
   	     	{
   	     	   window.alert("PASSWORD WRONG");	
   	     	}
   	     }
   	     

   }
      

    });
    blankSpace(login);
    blankSpace(login);
	});


	reg.addEventListener("click",function(event){

		hideElement(loginandregister);
     //unHideElement(registershow);
     unHideElement(register);
     var l= document.createElement("label");
      l.innerHTML="NAME : ";
register.appendChild(l);


   var name = document.createElement("input");
     name.setAttribute("type","text");
     name.setAttribute("id","name1");
      name.setAttribute("required","true");
     name.setAttribute("placeholder","Enter Name");
    register.appendChild(name);
    blankSpace(register);
    blankSpace(register);

 var l1= document.createElement("label");
      l1.innerHTML="EMAIL : ";
register.appendChild(l1);

var email1 = document.createElement("input");
     email1.setAttribute("type","email");
     email1.setAttribute("id","email1");
      email1.setAttribute("required","true");
     email1.setAttribute("placeholder","Enter Email");
    register.appendChild(email1);
    blankSpace(register);
    blankSpace(register);


     var l3= document.createElement("label");
      l3.innerHTML="PASSWORD : ";
register.appendChild(l3);

    var password1 = document.createElement("input");
     password1.setAttribute("type","password");
     password1.setAttribute("id","password1");
     password1.setAttribute("required","true");
     password1.setAttribute("placeholder","Enter Password");
    register.appendChild(password1);
    blankSpace(register);
    blankSpace(register);

var submit1 = document.createElement("BUTTON");
     submit1.innerHTML="SUBMIT";
     submit1.setAttribute("id","submit1");
    register.appendChild(submit1);
    blankSpace(register);
    blankSpace(register);
     
  submit1.addEventListener("click",function(event){


   if(document.getElementById("name1").value=="")
   {
   	window.alert("PLEASE ENTER NAME");
   }
   else if(document.getElementById("email1").value=="")
   {

   	window.alert("PLEASE ENTER EMAIL");
   }
    else if(document.getElementById("password1").value=="")
    {
    	window.alert("PLEASE ENTER PASSWORD");
    }
else
{
   var newreg = new Object();

     newreg.id=regid;
    newreg.name=document.getElementById('name1').value;
    newreg.email=document.getElementById('email1').value;
    newreg.pass=document.getElementById('password1').value;
     registerr.push(newreg);
    
     regid++;
      storeProducts(registerr);
     localStorage.regid = regid;
     // hideElement(registershow);
     // hideElement(register);
     // hideElement(login);
     // hideElement(loginshow);
     deleteAll(register);
     unHideElement(loginandregister);
 }
  });

	});
}
function blankSpace(element){
  var space = document.createElement('br');
  element.appendChild(space);
}

function hideElement(element){
  element.setAttribute("style","visibility:hidden");
}


//unhides the already hidden element.
function unHideElement(element){
  element.setAttribute("style","visibility:visible");
}

function storeProducts(registerr){
  localStorage.registerr = JSON.stringify(registerr);
}

function getStoredProducts(){
   if(localStorage.registerr){
    return JSON.parse(localStorage.registerr);}
    else {
           storeProducts(registerr);
      return registerr;
    }
  }

deleteAll = (target)=> {
	while(target.hasChildNodes()) {
		target.removeChild(target.childNodes[0]);
	}
}