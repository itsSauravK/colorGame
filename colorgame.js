var colors= generateColors(6);
var boxNumber=6;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var pickedColor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
	
init();
	function init(){
		//mode buttons
		modeButtonsL();
		squaresL();
	
		//colorDisplay.textContent=pickedColor;
		reset();
	}
	function squaresL(){
		for(var i=0;i<squares.length;i++){
		//adding colors
		//squares[i].style.backgroundColor = colors[i];

		//adding listeners
			squares[i].addEventListener("click",function(){
				var clickedColor=this.style.backgroundColor;;

				if(clickedColor===pickedColor){
					console.log(clickedColor+"==="+pickedColor);	
					messageDisplay.textContent="Correct!";
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

	}
	function modeButtonsL(){
		for(var i=0;i<modeButtons.length;i++){
			modeButtons[i].addEventListener("click",function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				if(this.textContent==="Easy")
					boxNumber=3;
				else
					boxNumber=6;
				reset();
				
				});
		}

	}
	
	function reset(){
		colors=generateColors(boxNumber);
		pickedColor=pickColor();
		colorDisplay.textContent=pickedColor;

		for(var i=0;i<squares.length;i++){
		//adding colors
			if(colors[i]){
				squares[i].style.display="block";
				squares[i].style.backgroundColor = colors[i];
			}else{
				squares[i].style.display="none";

			}

		}
		h1.style.backgroundColor="steelblue";
		messageDisplay.textContent="";
		resetButton.textContent="New colors";

		}

	


	resetButton.addEventListener("click",function(){
		reset();
		
	});


	

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