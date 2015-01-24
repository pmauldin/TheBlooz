#pragma strict

var yPos : float;

function Start () {
	yPos = transform.position.y;
}

function Update () {
	transform.position.y = yPos;
}