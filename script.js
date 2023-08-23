console.clear();


var inputBox = document.getElementById('input');
var addBtn  = document.getElementById('add');
var list = document.getElementById('ul');
var todo = document.getElementById('il');


var currentValue = '';


inputBox.addEventListener('input', function(e) {
currentValue = e.target.value;
})

addBtn.addEventListener('click' , addListItem)

function addListItem() {

if(currentValue !== '' && currentValue !== null && currentValue !== undefined) {

  var newElement = document.createElement('li');
  var textNode = document.createTextNode(currentValue);
  newElement.appendChild(textNode); 
  
  list.appendChild(newElement)
  
 newElement

  

} else {
  alert('please input todo');
}


inputBox.value = ''
currentValue = '';

}



