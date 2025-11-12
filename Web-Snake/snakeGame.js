(function(){
	var boxCount = 1;
	const movement = 20;

	var Box = function(movement, x, y, up, right, down, left, pause, pauseState){
		this.ObjName = "box" + boxCount;
		this.X = x;
		this.Y = y;
		this.Up = up;
		this.Down = down;
		this.Left = left;
		this.Right = right;
		this.Pause = pause;
		this.PauseState = pauseState;
		
		this.add = function(){ //Adding HTML DIV Element to the DOM
			$('main').append('<div class = "' + this.ObjName + '"></div>');
			$('.'+this.ObjName).css('transform', 'translate(' + this.X + 'px, ' + this.Y + 'px)');
			boxCount++;
		}
		
		this.motion = function(){ //Moving the Element
			if(this.Right){
				this.X = this.X + movement;
				$('.'+this.ObjName).css('transform', 'translate(' + this.X + 'px, ' + this.Y + 'px)');
			}
			else if(this.Left){
				this.X = this.X - movement;
				$('.'+this.ObjName).css('transform', 'translate(' + this.X + 'px, ' + this.Y + 'px)');
			}
			else if(this.Down){
				this.Y = this.Y + movement;
				$('.'+this.ObjName).css('transform', 'translate(' + this.X + 'px, ' + this.Y + 'px)');
			}
			else if(this.Up){
				this.Y = this.Y - movement;
				$('.'+this.ObjName).css('transform', 'translate(' + this.X + 'px, ' + this.Y + 'px)');
			}
		}
		
		this.pressedKey = function(keycode){ //Direction of Motion
			if(keycode == '115'){
				if(!this.Up){
					this.Down = true;
					this.Right = false;
					this.Left = false;
				}
			}
			else if(keycode == '119'){
				if(!this.Down){
					this.Up = true;
					this.Right = false;
					this.Left = false;
				}
			}
			else if(keycode == '100'){
				if(!this.Left){
					this.Right = true;
					this.Down = false;
					this.Up = false;
				}
			}
			else if(keycode == '97'){
				if(!this.Right){
					this.Left = true;
					this.Down = false;
					this.Up = false;
				}
			}
			else if(keycode == '112'){
				if(!this.Pause){
					this.Pause = true;
					
					if(this.Right == true){this.PauseState='right';}
					if(this.Left == true){this.PauseState='left';}
					if(this.Down == true){this.PauseState='down';}
					if(this.Up == true){this.PauseState='up';}
					
					this.Right = false;
					this.Left = false;
					this.Down = false;
					this.Up = false;
					
				}
				else {
					this.Pause = false;
					if(this.PauseState == 'right'){this.Right=true;}
					else if(this.PauseState == 'left'){this.Left=true;}
					else if(this.PauseState == 'down'){this.Down=true;}
					else {this.Up=true;}
				}
			}
		}
	}

	var box1 = new Box(movement, 80, 0, false, true, false, false, false, 'right');
	box1.add();
	var box2 = new Box(movement, 60, 0, false, true, false, false, false, 'right');
	box2.add();
	var box3 = new Box(movement, 40, 0, false, true, false, false, false, 'right');
	box3.add();
	var box4 = new Box(movement, 20, 0, false, true, false, false, false, 'right');
	box4.add();
	var box5 = new Box(movement, 0, 0, false, true, false, false, false, 'right');
	box5.add();


	$(document).ready(function(){
		setInterval(function(){
			box1.motion();
			box2.motion();
			box3.motion();
			box4.motion();
			box5.motion();
		}, 1000);
	});

	$(document).keypress(function(){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '112'){
			box1.pressedKey(keycode);
			box2.pressedKey(keycode);
			box3.pressedKey(keycode);
			box4.pressedKey(keycode);
			box5.pressedKey(keycode);
		}
		else {
			box1.pressedKey(keycode);
			setTimeout(function(){
				box2.pressedKey(keycode);
			}, 1000);
			setTimeout(function(){
				box3.pressedKey(keycode);
			}, 2000);
			setTimeout(function(){
				box4.pressedKey(keycode);
			}, 3000);
			setTimeout(function(){
				box5.pressedKey(keycode);
			}, 4000);
		}
	});
})();