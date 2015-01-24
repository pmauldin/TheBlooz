#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(coll: Collision2D) {
//	print(transform.position.y - coll.gameObject.transform.position.y);
//	print();
	if(coll.contacts[0].normal.x == 1 && (coll.gameObject.tag == "Floor" || coll.gameObject.tag == "Block")) {
		SendMessageUpwards("setGrounded", coll);
	}
}