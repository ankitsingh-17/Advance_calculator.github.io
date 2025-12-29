let display = document.getElementById("display");
let memory = 0;
let history = [];

function append(val){
    display.value += val;
}

function op(val){
    display.value += val;
}

function clr(){
    display.value = "";
}

function del(){
    display.value = display.value.slice(0,-1);
}

function calc(){
    try{
        let result = eval(display.value);
        if(result === Infinity){
            alert("Cannot divide by zero");
            return;
        }
        saveHistory(display.value + " = " + result);
        display.value = result;
    }catch{
        alert("Invalid Input");
    }
}

function square(){
    display.value = Math.pow(display.value,2);
}

function sqrt(){
    display.value = Math.sqrt(display.value);
}

function percent(){
    display.value = display.value / 100;
}

function power(){
    let base = display.value;
    let exp = prompt("Enter power:");
    display.value = Math.pow(base, exp);
}

function memoryAdd(){
    memory += Number(display.value);
}

function showMemory(){
    display.value = memory;
}

function memoryClear(){
    memory = 0;
}

function saveHistory(data){
    history.unshift(data);
    if(history.length > 10) history.pop();
    let list = document.getElementById("history");
    list.innerHTML = "";
    history.forEach(h => {
        let li = document.createElement("li");
        li.innerText = h;
        list.appendChild(li);
    });
}

