

console.log(document);
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

document.body.style.backgroundColor="#9784ad";
document.body.style.fontSize="30px";
console.log(document.body.childElementCount);
console.log(document.body.parentElement);
console.log(document.body.children);
console.log(document.body.parentElement.children);

console.log(document.body.innerHTML);
console.log(document.body.innerText);
// document.body.innerHTML="<div>console.log JS</div>";

let element = document.getElementById('test_id');
console.log(element)

element.style.background="red";

let elements = document.getElementsByClassName('block');

console.log(element)
console.log(elements)


for (item of elements){
    item.style.backgroundColor ="pink"
};

for (item of elements){
    item.style.color="green",
    item.style.fontSize='60px',
    item.style.fontWeight ="bold"
};

let myElement = document.getElementById('test_id5');

let colors = ['red', 'green', 'yellow'];
let selectedColorIndex = 0;
let changeColor = ()=>{
    myElement.style.backgroundColor= colors;
    if(selectedColorIndex<colors.length-1){
    selectedColorIndex++
    }else {
        selectedColorIndex = 0;
    }
    myElement.style.backgroundColor = colors[selectedColorIndex];
};



setInterval(changeColor,2000)