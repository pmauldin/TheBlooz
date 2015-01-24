#pragma strict

var target : Transform;

function Update () {
	if(target.position.x >= 40) {
		Application.LoadLevel("Level2");
	}
}