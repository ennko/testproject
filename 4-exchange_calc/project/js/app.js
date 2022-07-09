let input = document.getElementById("input");
let from = document.getElementById("from");
let to = document.getElementById("to");
let result = document.getElementById("result")
let hl = document.getElementById("history-list");

function creatOption(x,y,z){
    let o = document.createElement("option");
    let t = document.createTextNode(y);
    o.setAttribute("value",toNum(z));
    o.appendChild(t);
    x.appendChild(o);
}

function toNum(x){
    return (Number(x.replace(",","")));
}
for (x in data.rates){
    creatOption(from,x,data.rates[x]);
    creatOption(to,x,data.rates[x]);
    // console.log(x,data.rates[x]);
}
function creatTr(x){
    let rowSpace = document.getElementById("rowSpace");
    if(rowSpace){
        rowSpace.remove();
    }

    let tr = document.createElement("tr");
    x.map(function (el){
        let td = document.createElement("td");
        let text = document.createTextNode(el);
        tr.appendChild(td);
        td.appendChild(text);
    })
    hl.appendChild(tr);
}

function store(){
    localStorage.setItem("record",hl.innerHTML);
}
document.getElementById("calc").addEventListener("submit",function (e){
    e.preventDefault();
    //get state
    let x = input.value;
    let y = from.value;
    let z = to.value;

    //process
    let fromText = x+""+from.options[from.selectedIndex].innerHTML;
    let toText = to.options[to.selectedIndex].innerHTML;

    let first = x * y;
    let second = first/z;
    let answer = second.toFixed(2)+toText;
    let date = new Date().toLocaleString();
    let arr = [date,fromText,toText,answer];
    creatTr(arr);
    store();
    console.log(second.toFixed(2));

    //set state
    result.innerHTML = answer;
    input.value = "";
    input.focus();
    from.value = "";
    to.value = "1";
});
(function (){
    if(localStorage.getItem("record")){
        hl.innerHTML = localStorage.getItem("record");
    }else {
        hl.innerHTML =`<tr id="rowSpace"><td colspan="4">There is no record</td></tr>`
    }
    
})()

function changeMode(){
    document.body.classList.toggle("night-mode");
    document.getElementById("mode-icon").classList.toggle("fa-sun")
}