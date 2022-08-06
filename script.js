//get total
price = document.getElementById('price')
ads = document.getElementById('ads')
discount = document.getElementById('discount')
taxes = document.getElementById('taxes')
total = document.getElementById('total')
let mood = 'create'
let tmp;
function getTotal(){
    

if(price.value!=''){let result = (+price.value + +ads.value + +taxes.value)- +discount.value;
    total.innerHTML = result ;total.style.background='green'

}else{
    total.innerHTML='total';
    total.style.background='red'

}
};

// create product

title = document.getElementById('titl')
count = document.getElementById('count')
categorie = document.getElementById('category')
create = document.getElementById('create')

let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)

}else{dataPro=[];}



create.onclick =function(){
   
        newPro=
        { 
        title :  title.value.toLowerCase() ,
        price :  price.value ,
        taxes :  taxes.value ,
        ads :  ads.value ,
        discount :  discount.value ,
        total :  total.innerHTML ,
        count :  count.value ,
        categorie :  categorie.value.toLowerCase()

    };
    if(mood === 'create'){
    if(newPro.count>1){
        for(let i=0 ; i<newPro.count ; i++ ){
            dataPro.push(newPro)
        }
    }else{
    dataPro.push(newPro);}}else{
        dataPro[tmp] = newPro;
        mood='create';
        create.innerHTML = 'Create';
    }
    
    
    localStorage.setItem('product' , JSON.stringify(dataPro));
        

    clearinput()
    showData()
    
    

}
 // clear input
 function clearinput(){
    
      title.value =''
      price.value =''
      taxes.value =''
      ads.value =''

      discount.value =''
      count.value =''
      categorie.value =''

 }

 // read
  

 function showData(){
    getTotal();
    let table ='';
    
   for(let i=0 ; i<dataPro.length ; i++){
    table+=
     `
     <tr>
    <td>${i}</td>
    <td>${dataPro[i].title }</td>
    <td>${dataPro[i].price }</td>
    <td>${dataPro[i].taxes }</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td> 
    <td>${dataPro[i].total }</td>
    <td>${dataPro[i].count }</td>

    <td>${dataPro[i].categorie }</td>
    <td><button onclick='updateData(${i})' id='update'>UPDATE </button></td>
    <td><button onclick='deleteData(${i})' id='delete'>DELETE </button></td>
    </tr>
     `;
    
     document.getElementById('tbody').innerHTML = table

     deletall = document.getElementById('delete-all');
if(dataPro.length>0){
    deletall.innerHTML = `<button class='delete' onclick='deleteAllData()'>DELETE ALL</button>`
}else{
    deletall.innerHTML = ''
}
       


 } }showData();

    
    
 // delete
function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product=JSON.stringify(dataPro);
    
    showData(); }

// delete all

function deleteAllData(){
    localStorage.clear();
    dataPro.splice(0);
    showData();

} 

//update 
function updateData(i){

    title.value=dataPro[i].title ;
    price.value=dataPro[i].price ;
    taxes.value=dataPro[i].taxes ;
    ads.value=dataPro[i].ads;
    discount.value=dataPro[i].discount;
    getTotal();
    count.style.dispaly ='none';
    categorie.value = dataPro[i].categorie ;
    create.innerHTML = 'Update';
    mood='update';
    tmp = i ;
    showData()


}
//search
let searchMood = 'title'
function getSearchMood(id){
    search = document.getElementById('search');
    if(id=='searchTitle'){
        searchMood = 'title'
        search.placeholder = 'search by title'
    }else{
        searchMood ='categorie'
        search.placeholder = 'search by categorie';
    }
    search.focus()
}
 function searchData(value){ 
    let table='';
    if(searchMood == 'title'){
        for(let i=0 ; i<dataPro.length ; i++){
            if( dataPro[i].title.includes(value.toLowerCase())){
                table+=
     `
     <tr>
    <td>${i}</td>
    <td>${dataPro[i].title }</td>
    <td>${dataPro[i].price }</td>
    <td>${dataPro[i].taxes }</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td> 
    <td>${dataPro[i].total }</td>
    <td>${dataPro[i].count }</td>

    <td>${dataPro[i].categorie }</td>
    <td><button onclick='updateData(${i})' id='update'>UPDATE </button></td>
    <td><button onclick='deleteData(${i})' id='delete'>DELETE </button></td>
    </tr>
     `;
    

            }

        }
    }else{
        for(let i=0 ; i<dataPro.length ; i++){
            if( dataPro[i].categorie.includes(value.toLowerCase())){
                table+=
     `
     <tr>
    <td>${i}</td>
    <td>${dataPro[i].title }</td>
    <td>${dataPro[i].price }</td>
    <td>${dataPro[i].taxes }</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td> 
    <td>${dataPro[i].total }</td>
    <td>${dataPro[i].count }</td>

    <td>${dataPro[i].categorie }</td>
    <td><button onclick='updateData(${i})' id='update'>UPDATE </button></td>
    <td><button onclick='deleteData(${i})' id='delete'>DELETE </button></td>
    </tr>
     `;




            }
    }
}
    document.getElementById('tbody').innerHTML = table


 }
