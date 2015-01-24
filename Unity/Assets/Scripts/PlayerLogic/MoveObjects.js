// this script pushes all rigidbodies that the character touches
 var pushPower = 2.0;
 var weight = 6.0;
 
 function OnControllerColliderHit (hit : ControllerColliderHit)
 {
     var body : Rigidbody = hit.collider.attachedRigidbody;
     var force : Vector3;
 
     // no rigidbody
     if (body == null || body.isKinematic) { return; }
 
     // We use gravity and weight to push things down, we use
     // our velocity and push power to push things other directions
     if (hit.moveDirection.y < -0.3) {
         force = Vector3 (0, -0.5, 0) * 10 * weight;
     } else {
         force = hit.controller.velocity * pushPower;
     }
 
     // Apply the push
     body.AddForceAtPosition(force, hit.point);
 }