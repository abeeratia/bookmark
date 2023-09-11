var inputname=document.getElementById("inputname");
var inputurl=document.getElementById("inputurl");

var bookmarks=[]; 
function addinput(){
var validationres=validatation()
if(validationres==true){

    products={
        namee : inputname.value ,
        uRl : inputurl.value ,

     
    }
    bookmarks.push(products);
console.log( products);
displayinput();

clearproduct()
}
else{
    alert(validationres)
}
}
function displayinput(){
var cartona="";
for(var i=0 ; i<bookmarks.length;i++){
    cartona+=`

<tr>
<td>${i}</td>
<td>${bookmarks[i].namee}</td>
<td><a class="btn btn-primary" href="${bookmarks[i].uRl}" target=_blank>visit</a></td>
<td><button onclick="deletbookmars(${i})" class="btn btn-outline-secondary">Delete</button></td>

</tr>

    `;
    
}
document.getElementById("tablebody").innerHTML=cartona;
}
function clearproduct(){
    inputname.value="";
    inputurl.value ="";
}


function deletbookmars(index){
    bookmarks.splice(index,1);
    displayinput()
 }
 
 function validatation(){
    
    var regexName = /^[A-Z][a-z]{1,20}$/;
    var regexUrl =/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})(.com)?/
 
    if(regexName.test(inputname.value)==false){
        return "Your name must be from 1 to 20 charachter and starts with capital letter"
    }

else if(regexUrl.test(inputurl.value)==false){

    return "Your url must start with http or (https://) and end with (.com)";


}
return true;
}



// function displayproduct(array){
//     var cartona =""
//     for(var i=0; i< array.length;i++){


//        cartona+= `
//        <tr>
//        <td>${array[i].namee}</td>
//        <td>${array[i].price}</td>
//        <td>${array[i].categoury}</td>
//        <td>${array[i].desc}</td>
//        <td><button onclick="setFormForupdate(${i})" class="btn btn-danger">update</button> </td>
//        <td> <button onclick="deletproduct(${i})" class="btn btn-info">delete</button> </td>  
//        </tr> 
//        `
//        document.getElementById("tablebody").innerHTML=cartona;
//     }

 
// }
