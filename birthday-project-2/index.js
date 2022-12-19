const people = [  
	{name: "Александр Юрьевич", date:"1981-01-02", month:1,  birthday: "2023-01-02"},
	{name: "Наталья Геннадьевна", date:"1979-01-06", month:1,  birthday: "2023-01-06"},
	{name: "Елена Григорьевна", date:"1962-01-13", month:1,  birthday: "2023-01-13"},
	{name: "Анатолий Валентинович", date:"1974-01-15", month:1,  birthday: "2023-01-15"},
	{name: "Марина Владимировна", date:"1981-01-21", month:1,  birthday: "2023-01-21"},
	{name: "Сергей Владимирович", date:"1978-01-26", month:1,  birthday: "2023-01-26"},
	{name: "Марина Анатольевна", date:"1973-01-28", month:1,  birthday: "2023-01-28"},
		
	{name: "Алексей Эдуардович", date:"1978-03-06", month:3,  birthday: "2023-03-06"},
	{name: "Екатерина Валерьевна ", date:"1988-03-07", month:3,  birthday: "2023-03-07"},
	{name: "Владимир Васильевич", date:"1966-03-22", month:3,  birthday: "2023-03-22"},
	{name: "Леонид Михайлович", date:"1966-03-26", month:3,  birthday: "2023-03-26"},
	
	{name: "Елена Викторовна", date:"1982-04-12", month:4,  birthday: "2023-04-12"},
	{name: "Алексей Вячеславович", date:"1975-04-21", month:4,  birthday: "2023-04-21"},
	
	{name: "Сергей Васильевич", date:"1958-05-06", month:5,  birthday: "2023-05-06"},
	{name: "Анастасия Юрьевна", date:"1985-05-22", month:5,  birthday: "2023-05-22"},
	{name: "Ольга Александровна", date:"1987-05-23", month:5,  birthday: "2023-05-23"},
	
	{name: "Евгений Валерьевич", date:"1991-06-08", month:6,  birthday: "2023-06-08"},
	{name: "Ольга Владимировна", date:"1979-06-13", month:6,  birthday: "2023-06-13"},
	{name: "Игорь Валерьевич", date:"1979-06-26", month:6,  birthday: "2023-06-26"},
	
	{name: "Ольга Александровна", date:"1991-07-01", month:7,  birthday: "2023-07-01"},
	{name: "Сергей Викторович", date:"1964-07-07", month:7,  birthday: "2023-07-07"},
	{name: "Светлана Сергеевна", date:"1977-07-08", month:7,  birthday: "2023-07-08"},
	{name: "Владимир Николаевич", date:"1962-07-13", month:7,  birthday: "2023-07-13"},
	{name: "Юрий Владимирович", date:"1958-07-21", month:7,  birthday: "2023-07-21"},
	{name: "Татьяна Владимировна", date:"1966-07-24", month:7,  birthday: "2023-07-24"},
	
	
	{name: "Дмитрий Николаевич", date:"1985-08-03", month:8,  birthday: "2023-08-03"},
	{name: "Леонид Леонидович", date:"1982-08-12", month:8,  birthday: "2023-08-12"},
	
	{name: "Виктор Валентинович", date:"1979-09-04", month:9,  birthday: "2023-09-04"},
	{name: "Татьяна Владимировна", date:"1978-09-08", month:9,  birthday: "2023-09-08"},
	{name: "Екатерина Александровна", date:"1979-09-19", month:9,  birthday: "2023-09-19"},
	
	{name: "Светлана Алексеевна", date:"1976-10-12", month:10,  birthday: "2023-10-12"},
	{name: "Ольга Владимировна", date:"1976-10-19", month:10,  birthday: "2023-10-19"},
	{name: "Ольга Вячеславовна", date:"1980-10-28", month:10,  birthday: "2023-10-28"},	
	
	{name: "Григорий Федорович", date:"1962-11-19", month:11,  birthday: "2023-11-19"},
	
	{name: "Наталья Эдуардовна", date:"1977-12-20", month:12,  birthday: "2023-12-20"},
		
 ]	
	
	
elem.onclick = () =>{
	let num1 = document.getElementById('date').value;		
	// let date=new Date()

// let day=date.getDate()
// let month=date.getMonth()+1
// let year=date.getFullYear()

// if (month<10){
	// month="0"+month
// }

// if (day<10){
	// day="0"+day
// }

// let num1=year + "-" + month + "-" + day

// document.getElementById('date').value=num1;	
		
	for (const person of people) {
  if (person.birthday == num1) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
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


month1.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 1) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
  }
  // else {     
	// document.getElementById('out').innerHTML = "Дней рождений на эту дату нет";
	 // }	
  }
}

month2.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 2) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

month3.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 3) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

month4.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 4) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

month5.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 5) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

month6.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 6) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

month7.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 7) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}


month8.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 8) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

month9.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 9) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

month10.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 10) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

month11.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 11) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

month12.onclick = () =>{	
		
	for (const person of people) {
  if (person.month == 12) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name+" "+findedPerson.date;
	} 
  }
}

// function dateresult(){
	
// let num1 = document.getElementById('date').value;
	
// const people = [
   // {name: 'Vlad', birthday: "01.01.2000"},
	// {name: 'Elena', birthday: "01.01.2005"},
   // {name: 'Victoria', birthday: "01.01.2000"},
    // {name: 'Tom', birthday: "01.01.2007"}
 // ]		
	
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

// }


