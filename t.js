let color=prompt("Enter the color");
let fontSize=Number(prompt("Enter a font size in PX"));
function AllBlue(c,fS){
let elements=document.getElementsByTagName('p');
for(let i=0;i<elements.length;i++){
elements[i].style.color=c;
elements[i].style.fontSize=fS+"px";

}
}

