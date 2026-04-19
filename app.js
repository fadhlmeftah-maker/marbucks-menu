let productsDatabase = [
 { id:1,name:'ماربكس سجنتشر',price:4500},
 { id:2,name:'إكسير سبأ',price:4000}
];

function render(){
 let box=document.getElementById("products");
 box.innerHTML="";
 productsDatabase.forEach(p=>{
  box.innerHTML+=`<div>${p.name} - ${p.price}</div>`;
 });
}

render();
