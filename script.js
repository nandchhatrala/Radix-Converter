const DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const from = document.getElementById("fromBase");
const to = document.getElementById("toBase");
const input = document.getElementById("input");
const result = document.getElementById("result");
const status = document.getElementById("status");
const historyBox = document.getElementById("history");

let history = [];

for(let i=2;i<=62;i++){
  from.innerHTML += `<option value="${i}">${i}</option>`;
  to.innerHTML += `<option value="${i}">${i}</option>`;
}

from.value = 16;
to.value = 10;

function charValue(c){
  return DIGITS.indexOf(c);
}

function parseBase(str,base){
  let num = 0n;
  const b = BigInt(base);

  for(const ch of str){
    const v = charValue(ch);
    if(v<0 || v>=base)
      throw `Invalid digit '${ch}' for base ${base}`;

    num = num*b + BigInt(v);
  }
  return num;
}

function toBase(num,base){
  if(num===0n) return "0";

  const b = BigInt(base);
  let out="";

  while(num>0n){
    const rem = Number(num%b);
    out = DIGITS[rem] + out;
    num = num/b;
  }
  return out;
}

function drawHistory(){
  historyBox.innerHTML="";

  history.forEach(h=>{
    const div=document.createElement("div");
    div.className="item";
    div.innerHTML=`<small>Base ${h.f} → ${h.t}</small><br>${h.i} → <b>${h.o}</b>`;
    historyBox.appendChild(div);
  });
}

function convert(){

  const f = Number(from.value);
  const t = Number(to.value);
  const txt = input.value.trim();

  if(txt===""){
    status.innerText="Enter a number";
    result.innerText="—";
    return;
  }

  try{
    const dec = parseBase(txt,f);
    const ans = toBase(dec,t);

    result.innerText=ans;
    status.innerText=`Decimal value : ${dec}`;

    history.unshift({f,t,i:txt,o:ans});
    history=history.slice(0,5);
    drawHistory();

  }catch(err){
    result.innerText="Invalid";
    status.innerText=err;
  }
}

document.getElementById("convert").onclick=convert;

input.addEventListener("keydown",e=>{
  if(e.key==="Enter" && !e.shiftKey){
    e.preventDefault();
    convert();
  }
});

document.getElementById("swap").onclick=()=>{
  const temp=from.value;
  from.value=to.value;
  to.value=temp;
};

document.getElementById("copy").onclick=()=>{
  navigator.clipboard.writeText(result.innerText);
};