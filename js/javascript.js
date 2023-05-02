for(let i=1; i<6; i++){


    let pSize =  i+'3px';

    let pColor = 100+ i*20;
    

const myPar = document.createElement('p');
document.body.append(myPar);
myPar.innerText =`Rad ${i}`;
myPar.style.textAlign = 'center';
myPar.style.backgroundColor = `hsl(${pColor}, 90%, 80%)`;
myPar.style.color = 'blue';
myPar.style.fontSize = pSize ;


}



let myDiv = document.createElement("div");

document.body.appendChild(myDiv);
myDiv.style.justifyContent = "space-around";
myDiv.style.border = '1px solid black';
myDiv.style.display = "flex";








//Div1
let divOne = document.createElement("div1");

myDiv.appendChild(divOne);
divOne.style.border = '7px solid hsl(238, 50%, 80%)';
divOne.style.display = 'block'; 
divOne.style.marginTop = 'auto';
divOne.style.marginBottom = 'auto';





for(let i=0; i<10; i++){
    const p = document.createElement('p');
    divOne.appendChild(p);
    p.innerText = `${i}`;
    p.style.color = 'black';
    p.style.width = '40px';
    p.style.margin = '0px';
 
    
    
    
    
    if(i%2 === 0){
    p.style.background = 'black';
    p.style.color = 'white';
    }
    
    if(i === 4 ){
        p.style.background = ' hsl(238, 50%, 80%)';
    }
    }
    


//Div2
let Divtwo = document.createElement("div2");

myDiv.appendChild(Divtwo);
Divtwo.style.border = '7px solid hsl(238, 50%, 80%)';
Divtwo.style.display = 'block'; 
Divtwo.style.marginTop = 'auto';
Divtwo.style.marginBottom = 'auto';

for(let i=9; i>=0; i--){
const p = document.createElement('p');
Divtwo.appendChild(p);
p.innerText = `${i}`;
p.style.width = '40px';
p.style.padding = '0px';
p.style.margin = '0px';
p.style.textAlign = "center";

if(i%2 === 0){
p.style.background = 'black';
p.style.color = 'white';
}

if(i === 8 ){
    p.style.background = `hsl(238, 50%, 80%)`;
}
}

//Div3

let Divthree = document.createElement("div3");

myDiv.appendChild(Divthree);
Divthree.style.border = '7px solid hsl(238, 50%, 80%)';
Divthree.style.display = 'block'; 
Divthree.style.marginTop = '50px';
Divthree.style.marginBottom = '50px';

const numbers = ['ett', 'två', 'tree', 'fyra', 'fem', 'sex', 'sju', 'åtta','nio', 'tio'];

const ul = document.createElement('ul');
Divthree.appendChild(ul);
ul.style.listStyle = 'none';


Divthree.appendChild(ul);

ul.style.width = '40px';
ul.style.padding = '0px';
ul.style.margin = '0px';
ul.style.textAlign = "right";


for(let i=0; i<numbers.length; i++){
const li = document.createElement('li');
ul.append(li);
li.innerText = numbers[i];

if(i%2 === 0){
li.style.background = 'black';
li.style.color = 'white';
}


if(li.innerText ==='sex' ){
  li.style.background = `hsl(238, 50%, 80%)`;

}

}
