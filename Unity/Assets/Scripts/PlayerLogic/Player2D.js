#pragma strict

var X : float;
var speed = 5.0;
var jumpSpeed = 10.0;
var grounded = false;

function Start () {
	X = transform.localScale.x;
}

function Update () {
//	print(Input.GetAxis("Horizontal"));
	if(Mathf.Abs(Input.GetAxis("Horizontal")) >  0.05) {
		transform.position.x += Input.GetAxis("Horizontal") / speed;
	}
	if(Input.GetAxis("Jump") > 0 && grounded) {
		grounded = false;
		rigidbody2D.AddForce(new Vector2(0, jumpSpeed), ForceMode2D.Impulse);
	}
	textureFlip();
}

function OnCollisionEnter2D(coll: Collision2D) {
//	print(coll.gameObject.tag);
}

function setGrounded(coll: Collision2D) {
	grounded = true;
}

function springJump() {
	if(!grounded) {
		rigidbody2D.AddForce(new Vector2(0, jumpSpeed*1.5), ForceMode2D.Impulse);
		grounded = false;
	}
}

function textureFlip() {
	if(Input.GetAxis("Horizontal") >= 0.1){
		transform.localScale.x = -X;
	} else if(Input.GetAxis("Horizontal") <= -0.1) {
		transform.localScale.x = X;
	}
}