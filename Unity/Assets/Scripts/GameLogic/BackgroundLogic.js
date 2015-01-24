#pragma strict

var target : Transform;

function Update () {
	if(target.position.x >= 18) {
		Application.LoadLevel("Level2");
	}
}