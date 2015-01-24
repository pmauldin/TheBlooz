#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(coll: Collision2D) {
	
	if(coll.contacts[0].normal.x == 0 && (coll.gameObject.tag == "Floor" || coll.gameObject.tag == "Block")) {
		SendMessageUpwards("setGrounded", coll);
	}
}