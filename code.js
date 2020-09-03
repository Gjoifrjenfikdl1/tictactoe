var playerTurn=0;

function mousedown(e) {
	playerTurn+=1;
	playerTurn=playerTurn%2;
	if (event.clientX>=350&&event.clientX<=749&&event.clientY>=150&&event.clientY<=549) {
		if (playerTurn) {
			createX(Math.floor((event.clientX-350)/133)*133+350, Math.floor((event.clientY-150)/133)*133+150);
			document.getElementById("turn-text").innerHTML="It is Player 2's Turn";
		}else{
			createCircle(Math.floor((event.clientX-350)/133)*133+350, Math.floor((event.clientY-150)/133)*133+150);
			document.getElementById("turn-text").innerHTML="It is Player 1's Turn";
		}
	}

}

function createX(x,y) {
	var elem = document.createElement("div");
	elem.setAttribute("class", "x-elements");
	elem.style.left=x+"px";
	elem.style.top=y+"px";
	elem.style.width=133+"px";
	elem.style.height=133+"px";
	document.body.appendChild(elem);   
	
	var lineone = document.createElement("div");
	lineone.setAttribute("class", "line-one");
	lineone.style.left=x+"px";
	lineone.style.top=y+"px";
	elem.appendChild(lineone);   
	
	var linetwo = document.createElement("div");
	linetwo.setAttribute("class", "line-two");
	linetwo.style.left=x+"px";
	linetwo.style.top=y+"px";
	elem.appendChild(linetwo);   
}

function createCircle(x,y) {
	var elem = document.createElement("div");
	elem.setAttribute("class", "circle-elements");
	elem.style.left=x+15+"px";
	elem.style.top=y+15+"px";
	elem.style.width=100+"px";
	elem.style.height=100+"px";
	document.body.appendChild(elem);   
}

document.addEventListener("mousedown",mousedown);
