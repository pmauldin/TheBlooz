#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D (coll: Collider2D) {
	var target = coll.attachedRigidbody.gameObject;
	if(target.tag == "Player") {
		target.SendMessage("springJump");
	}
}