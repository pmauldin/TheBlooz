#pragma strict

var X : float;
var speed = 5.0;
var jumpSpeed = 10.0;
var grounded = false;
var smashing = false;
var target : GameObject;
var direction : float;

function Start () {
	X = transform.localScale.x;
	direction = 1.0;
}

function Update () {
//	print(Input.GetAxis("Horizontal"));
	if(Mathf.Abs(Input.GetAxis("Horizontal")) >  0.05) {
		transform.position.x += Input.GetAxis("Horizontal") / speed;
		if(target != null) {
			target.transform.position.x += Input.GetAxis("Horizontal") / speed;
		}
	}
			
	if((Input.GetKeyDown("up") || Input.GetKeyDown("w")) && grounded) {
		rigidbody2D.velocity.y = 0.0;
		grounded = false;
		rigidbody2D.AddForce(new Vector2(0, jumpSpeed), ForceMode2D.Impulse);
	}
	
	if((Input.GetKeyDown("down") || Input.GetKeyDown("s")) && !smashing) {
		smashing = true;
		rigidbody2D.velocity.y = 0.0;
		rigidbody2D.AddForce(new Vector2(0, -jumpSpeed), ForceMode2D.Impulse);
	}
	textureFlip();
}

function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.tag == "Block" && coll.contacts[0].normal.x != 0) {
		if(Mathf.Abs(transform.position.y - coll.gameObject.transform.position.y) < 1) {
			target = coll.gameObject;
		}
	}
}

function OnCollisionExit2D(coll: Collision2D) {
	if(coll.gameObject.tag == "Block" && target != null) {
		target = null;
	}
}

function setGrounded(coll: Collision2D) {
	grounded = true;
	smashing = false;
}

function springJump() {
	if(!grounded) {
		rigidbody2D.AddForce(new Vector2(0, jumpSpeed*1.5), ForceMode2D.Impulse);
		grounded = false;
	}
}

function textureFlip() {
	if(Input.GetAxis("Horizontal") >= 0.05){
		// Going Right
		transform.localScale.x = -X;
		if(target != null && direction < 1.0) {
			target = null;
		}
		direction = 1.0;
	} else if(Input.GetAxis("Horizontal") <= -0.05) {
		// Going Left
		transform.localScale.x = X;
		if(target != null && direction > -1.0) {
			target = null;
		}
		direction = -1.0;
	}
}