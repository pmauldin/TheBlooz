var target : Transform;
var distance = 8.5;
var height = 3.0;
var damping = 5.0;
var xOffset = 5.0;

function Start() {
	wantedPosition = target.TransformPoint(0, height, -distance);
	transform.position = wantedPosition;
	transform.position.y = 1.81;
}

function Update () {
	
	transform.position.x = target.position.x + xOffset;
	
}