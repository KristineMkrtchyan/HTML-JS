

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



//տնային աշխատանք 2 կալկուլյատորի ստեղծում

document.write ( "<br>");
document.write ( "<br>");
let input1 = document.createElement('input');
document.body.append(input1);
input1.id = "input1"
input1.value = "enter a number like - 1234"
document.write ( "<br>");
document.write ( "<br>");
let input2 = document.createElement('input');
document.body.append(input2);
input2.id = "input2"
input2.value = "enter only operators + - * /"
document.write ( "<br>");
document.write ( "<br>");
let input3 = document.createElement('input');
document.body.append(input3);
input3.id = "input3"
input3.value = "enter a number like - 1234"
document.write ( "<br>");
document.write ( "<br>");
let button = document.createElement('button');
document.body.append(button);
button.id = "submit";
button.innerHTML = "=";
document.write ( "<br>");
let p = document.createElement('p')
document.body.append(p);
p.id = "p";

document.getElementById('submit').onclick = func = () =>{
   
	let operator = input2.value;
	let num1 = input1.value;
	let num2 = input3.value;
 

		let result;
	if(!(Number(num1)) || !(Number(num2))){
		alert('please enter a number')
	}else if(operator === '+'){
        button.textContent = 'Processing…'
		result = (Number(num1) + Number(num2))
	}else if(operator === '-'){
        button.textContent = 'Processing…'
	    result = (Number(num1) - Number(num2))
	}else if(operator === '*'){
        button.textContent = 'Processing…'
	    result = (Number(num1) * Number(num2))
	}else if(operator === '/'){
        button.textContent = 'Processing…'
	    result = (Number(num1) / Number(num2))
	}else{
		alert('not the same operator');
	}
	
	p.innerHTML = `the result of calculaiting is ${result}`;
};



//dvd tnain ashxatank 

let elem = document.getElementById('animation_div');
let positionYMax = (window.innerHeight - elem.clientHeight) + 'px';
let positionXMax = (window.innerWidth - elem.clientWidth) + 'px';
let positionXMin = '0px';
let positionYMin = '0px';
let reverse_y = true;
let reverse_x = true;

let myFunc = () => {
    if(reverse_x) {
        elem.style.left =`${elem.offsetLeft + 100}px`;
    } else {
        elem.style.left =`${elem.offsetLeft - 100}px`;
    }
    if(reverse_y) {
        elem.style.top =`${elem.offsetTop + 100}px`;
    } else {
        elem.style.top =`${elem.offsetTop - 100}px`;
    }

    if(elem.style.top > positionYMax || elem.style.top === positionYMin) {
        reverse_y = !reverse_y;
    }
    if(elem.style.left > positionXMax || elem.style.left === positionXMin) {
        reverse_x = !reverse_x;
    }

}

setInterval(myFunc,500);