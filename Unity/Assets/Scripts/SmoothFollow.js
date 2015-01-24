var target : Transform;
var distance = 8.5;
var height = 3.0;
var damping = 5.0;
var xOffset = 5.0;

function Update () {
	wantedPosition = target.TransformPoint(0, height, -distance);
	transform.position = wantedPosition;
	transform.position.x += xOffset;

	transform.LookAt (target, target.up);
	
	transform.localRotation = Quaternion.Euler(0, 0, 0);
	
}

function LateUpdate()
{
   transform.position.y = 1.81;  
	print(transform.position.x);
}