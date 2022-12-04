const people = [
   {name: 'Vlad', birthday: "01.01.2000"},
	{name: 'Elena', birthday: "08.01.2005"},
   {name: 'Victoria', birthday: "01.01.2000"},
    {name: 'Tom', birthday: "01.01.2007"},
	{name: 'Tom', birthday: "2022-11-29"},
	{name: 'Alex', birthday: "2022-11-29"}	 	
 ]	
	
elem.onclick = () =>{
	// let num1 = document.getElementById('date').value;		
	let date=new Date()

let day=date.getDate()
let month=date.getMonth()+1
let year=date.getFullYear()

if (month<10){
	month="0"+month
}

if (day<10){
	day="0"+day
}

let num1=year + "-" + month + "-" + day

document.getElementById('date').value=num1;	
		
	for (const person of people) {
  if (person.birthday == num1) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name;
  }
  // else {     
	// document.getElementById('out').innerHTML = "Дней рождений на эту дату нет";
	 // }	
  }
}

elem2.onclick = () =>{
let delLi = document.getElementById('list');
while(list.firstChild){
list.removeChild(delLi.lastChild);
}

}

function clearContent(element){
	element.value=''
}


		
// function dateNow(element){
	// element.value="Date.now()"
// }

// for (const person of people) {
	
  // if (person.birthday === num1) {
    // let findedPerson = person.name
	// console.log(findedPerson) 
	// document.getElementById('out').innerHTML=findedPerson		
   // } 
   // else{	   
	// document.getElementById('out').innerHTML = "Дней рождений на эту дату нет";
	// }	
// }





	// for (var key in n){

	// if(num1=n[key]){
	// document.getElementById('out').innerHTML = key
	// }
	// else{
	// document.getElementById('out').innerHTML = "Дней рождений на эту дату нет";}
	// }


// //////////////////////////////////////////////
// // const obj = {
  // // name: 'Elena',
  // // demo: 'DEMO' 
// }

// for (let key in obj) {
	  // console.log(obj[key])  
// }

// ////////////////////////////

// const people = [
   // {name: 'Vladilen', budget: 4200},
	// {name: 'Elena', budget: 3500},
   // {name: 'Victoria', budget: 4200}
 // ]

// let findedPerson
// for (const person of people) {
  // if (person.budget === 4200) {
    // findedPerson = person
   // }
// }
// console.log(findedPerson) 

// /* document.getElementById('out').innerHTML=findedPerson*/


