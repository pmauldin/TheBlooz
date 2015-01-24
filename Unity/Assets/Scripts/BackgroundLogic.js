#pragma strict

var target : Transform;

function Update () {
	print(target.position.x);
	if(target.position.x >= 18) {
		Application.LoadLevel("Level2");
	}
}