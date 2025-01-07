# connect_faces

<a id="ansys.meshing.prime.lucid.Mesh.connect_faces"></a>

#### Mesh.connect_faces(part_expression='\*', face_labels='\*', target_face_labels='\*', tolerance=0.05)

Connect face zonelets with a label name pattern within a given tolerance.

This method connects face zonelets with a label name pattern to
face zonelets with target face labels within a given tolerance. The connection
happens within the part. Face zonelets of a part are connected with face zonelets
of the same part only.

* **Parameters:**
  **part_expression**
  : Name pattern of the parts to use for connecting the face zonelets. The
    default is `"*"`.

  **face_labels**
  : Name pattern of the face labels used for connecting the face zonelets.
    The default is `"*"`.

  **target_face_labels**
  : Name pattern of the face labels to connect. The default is `"*"`.

  **tolerance: float, optional**
  : Tolerance for the connection. The default is `0.05`.

<!-- !! processed by numpydoc !! -->

<a id="examples-using-mesh-connect-faces"></a>

## Examples using Mesh.connect_faces

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
