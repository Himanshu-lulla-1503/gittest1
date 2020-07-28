function show(){
	var a=document.getElementById('left-menu');
	if(a.style.display=="none"){
		a.style.display="inline-block";
	}
	else{
		a.style.display="none";
	}
	var b=document.getElementById('main-heading');
	b.style.display="none";
	
}
function hide(){
	var a=document.getElementById('left-menu');
	a.style.display="none";
	var b=document.getElementById('main-heading');
	b.style.display="block";
}