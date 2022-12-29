cl = console.log;
var Data = [
  { name: 'Apple iPhone 12', price: 999, color: 'Black', storage: 128, camera: 'Dual-lens' },
  { name: 'Samsung Galaxy S21', price: 849, color: 'White', storage: 128, camera: 'Triple-lens' },
  { name: 'Google Pixel 4a', price: 349, color: 'Black', storage: 64, camera: 'Single-lens' },
  { name: 'OnePlus 8T', price: 799, color: 'Aquamarine Green', storage: 128, camera: 'Quad-lens' },
  { name: 'Huawei P40 Pro', price: 799, color: 'Silver Frost', storage: 256, camera: 'Quad-lens' }

];
var elementsInfo = document.getElementById("elementsInfo");
var result = '';

Data.forEach(function (ele, i) {
  result += `<tr>
  <td> ${i + 1}</td>
  <td> ${ele.name}</td>
  <td> ${ele.price}</td>
  <td> ${ele.color}</td>
  <td> ${ele.storage}</td>
  <td> ${ele.camera}</td>`
});
elementsInfo.innerHTML = result;

var Cities = [
  {
    "name": "USA",
    "population": 331002651,
    "area": 9833520,
    "capital": "Washington, D.C.",
    "language": "English"
  },
  {
    "name": "Canada",
    "population": 37411047,
    "area": 9984670,
    "capital": "Ottawa",
    "language": "English and French"
  },
  {
    "name": "Mexico",
    "population": 127575529,
    "area": 1964375,
    "capital": "Mexico City",
    "language": "Spanish"
  },
  {
    "name": "France",
    "population": 66710000,
    "area": 640679,
    "capital": "Paris",
    "language": "French"
  },
  {
    "name": "Germany",
    "population": 82790000,
    "area": 357114,
    "capital": "Berlin",
    "language": "German"
  }
];
var citiesInfo = document.getElementById("citiesInfo");
var result1 = '';

Cities.forEach(function (ele, i) {
  result1 += `<tr>
  <td> ${i + 1}</td>
  <td> ${ele.name}</td>
  <td> ${ele.population}</td>
  <td> ${ele.area}</td>
  <td> ${ele.capital}</td>
  <td> ${ele.language}</td>`
});
citiesInfo.innerHTML = result1;

var data=[
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

var elementTable=document.getElementById("elementTable");
var result2='';

data.forEach(function(ele,i){
result2+=`<tr>
      <td>${i+1}</td>
      <td>${ele.name}</td>
      <td>${ele.weight}</td>
      <td>${ele.symbol}</td>
      </tr>`
})
tableInfo.innerHTML=result2