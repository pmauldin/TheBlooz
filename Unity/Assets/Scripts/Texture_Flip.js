 #pragma strict

var X : float;

function Start () {
	X = transform.localScale.x;
}

function Update () {
	if(Input.GetAxis("Horizontal") >= 0.25){
		transform.localScale.x = -X;
	} else if(Input.GetAxis("Horizontal") <= -0.25) {
		transform.localScale.x = X;
	}
}