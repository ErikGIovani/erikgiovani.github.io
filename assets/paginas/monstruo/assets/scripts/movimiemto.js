var monster=document.getElementById("monster");var email=document.getElementById("email");var follow=true;var w=window.innerWidth/2;var h=window.innerHeight/2;document.onmousemove=function(mouse){if(follow){if(mouse.clientX<w&&mouse.clientY<h){monster.src="assets/images/idle/2.png"}else if(mouse.clientX<w&&mouse.clientY>h){monster.src="assets/images/idle/3.png"}else if(mouse.clientX>w&&mouse.clientY<h){monster.src="assets/images/idle/5.png"}else if(mouse.clientX>w&&mouse.clientY>h){monster.src="assets/images/idle/4.png"}}}
email.oninput=function(){num=email.value.length;switch(true){case num>=1&&num<4:monster.src="assets/images/read/1.png"
break;case num>=4&&num<14:monster.src="assets/images/read/2.png"
break;case num>=14:monster.src="assets/images/read/3.png"
break;}}
function cover(){follow=false;var cont=1;const convering=setInterval(function(){monster.src="assets/images/cover/"+cont+".png"
cont<8?cont++:clearInterval(convering);},60);}
function uncover(){var cont=7;const unconvering=setInterval(function(){monster.src="assets/images/cover/"+cont+".png"
cont>1?cont--:clearInterval(uncovering),follow=true;},60);}