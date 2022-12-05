var NameInput=document.getElementById("NameInput");
var PhoneInput=document.getElementById("Phone_NumberInput");
var LocationInput=document.getElementById("LocationInput");
var CategoryInput=document.getElementById("CategoryInput");

 var Alsany3i=[];
getData();




function getData(){
fetch('http://localhost:3000/allUsers')
.then(response => response.json())
.then(json => {
  Alsany3i=json.data;  
  display(Alsany3i);  
  console.log(json)
})
}
function display(array){
    let str=``;
    for(let i=0;i<array.length;i++){
        str+=` <tr>
        <td>${i+1}</td>
        <td>${array[i].Name}</td>
        <td>${array[i].Phone_Number}</td>
        <td>${array[i].Location}</td>
        <td>${array[i].Category}</td>
        <td><button onclick="updateAlsany3i(${i},${array[i].id});" class="btn btn-sm btn-outline-primary">Update</button> </td>
        <td><button onclick="deleteAlsany3i(${array[i].id});" class="btn btn-sm btn-outline-danger">Delete</button> </td>    
      </tr>`
    }

document.getElementById('tableData').innerHTML=str;
}






function add(){
  var Alsany3i={  
    
     Name:NameInput.value ,
     Phone_Number:PhoneInput.value ,
     Location:LocationInput.value ,
     Category:CategoryInput.value
     }
   crudData('addUser','POST',Alsany3i);
   
     clearData();
     
     
 }


function crudData(endpoint,method,data){
    // main.js

// POST request using fetch()
fetch(`http://localhost:3000/${endpoint}`, {
	
	// Adding method type
	method: method,
	
	// Adding body or contents to send
	body: JSON.stringify(data),
	
	// Adding headers to the request
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json =>{
    if(json.message=='success'){
        getData();
    }
});


}


function clearData(){
NameInput.value='';
PhoneInput.value='';
LocationInput.value='';
CategoryInput.value='';    
}


function deleteAlsany3i(id){
    crudData('deleteUser','DELETE',{id});
    
}

 let Alsany3i_id;

 function updateAlsany3i(i,id){

Alsany3i_id=id;    

NameInput.value=Alsany3i[i].Name;
PhoneInput.value=Alsany3i[i].Phone_Number;
LocationInput.value=Alsany3i[i].Location;
CategoryInput.value=Alsany3i[i].Category;

document.getElementById("add").style.display="none";
document.getElementById("update").style.display="block";

}




function updateData(){
  var Alsany3i={ 
        Name:NameInput.value ,
        Phone_Number:PhoneInput.value ,
        Location:LocationInput.value ,
        Category:CategoryInput.value,
        id:Alsany3i_id   
        }
        crudData("updateUser","PUT",Alsany3i);
        clearData();
        document.getElementById("add").style.display="block";
        document.getElementById("update").style.display="none";
        
        
}


function search(word){
    if(word.length>2){
        search=[];
    
        for(let i=0;i<Alsany3i.length;i++){
            if(Alsany3i[i].Name.toLowerCase().includes(word.toLowerCase())){
                search.push(Alsany3i[i]);
            }
        }
    display(search);
    }
    else{
        display(Alsany3i);
        
    }
    
    }



























































// var NameInput=document.getElementById("NameInputInput");
// var PhoneInput=document.getElementById("PhoneInputInput");
// var LocationInput=document.getElementById("LocationInputInput");
// var category=document.getElementById("categoryInput");
// var tableData=document.getElementById("tableData");
// var ProductsContainer;


// if(localStorage.getItem("myProducts") !=null){
//     ProductsContainer=JSON.parse(localStorage.getItem("myProducts"));
//     displayProduct(ProductsContainer);
// }
// else{
//     ProductsContainer=[];
// }

// function addproduct() {
//    var product={
//     name:NameInput.value,
//     price:PhoneInput.value,
//     category:LocationInput.value,
//     description:ProductDescription.value
//     }

//     ProductsContainer.push(product);
//     localStorage.setItem("myProducts",JSON.stringify(ProductsContainer));
//     clearForm();
//     displayProduct(ProductsContainer);
// }

// function clearForm(){
//     NameInput.value="";
//     PhoneInput.value="";
//     LocationInput.value="";
//     ProductDescription.value="";
// }

// function displayProduct(array){
// cartoona=``;
// for(var i=0;i<array.length;i++){
// cartoona+=` <tr>
// <td>${i+1}</td>
// <td>${array[i].name}</td>
// <td>${array[i].price}</td>
// <td>${array[i].category}</td>
// <td>${array[i].description}</td>
// <td><button class="btn btn-sm btn-outline-danger">update</button></td>
// <td><button class="btn btn-sm btn-outline-primary">delete</button></td>
// </tr>`

// }
// tableData.innerHTML=cartoona;
// }


// function searchProduct(word){
// if(word.length>2){
//     searchProduts=[];

//     for(var i=0;i<ProductsContainer.length;i++){
//         if(ProductsContainer[i].name.toLowerCase().includes(word.toLowerCase())){
//             searchProduts.push(ProductsContainer[i]);
//         }
//     }
// displayProduct(searchProduts);
// }
// else{
//     displayProduct(ProductsContainer);
// }

// }

