var colors= generateColors(6);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var pickedColor=pickColor();
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");


	resetButton.addEventListener("click",function(){
		colors=generateColors(6);
		pickedColor=pickColor();
		colorDisplay.textContent=pickedColor;

		for(var i=0;i<squares.length;i++){
		//adding colors
		squares[i].style.backgroundColor = colors[i];
		}
		h1.style.backgroundColor="#232323";
		
	});


	for(var i=0;i<squares.length;i++){
		//adding colors
		squares[i].style.backgroundColor = colors[i];

		//adding listeners
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;;

			if(clickedColor===pickedColor){
				console.log(clickedColor+"==="+pickedColor);	
				messageDisplay.textContent="Correct";
				changeColor(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent="Play again?";
			}
				
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";

			}
		});
	}

	colorDisplay.textContent=pickedColor;

	function changeColor(color){
		for(var i=0;i<colors.length;i++){
			squares[i].style.backgroundColor=color;
		}
	}

	function pickColor(){
		var random=Math.floor(Math.random() *colors.length);
		return colors[random];
	}
	function generateColors(num){
		var arr	= [];

		for(var i=0;i<num;i++){
			arr.push(randomColor());
		}


		return arr;
	}

	function randomColor(){
		var red=Math.floor(Math.random() * 256);
		var blue=Math.floor(Math.random() * 256);
		var green=Math.floor(Math.random() * 256);
		return "rgb("+red+", "+green+", "+blue+")";
	}