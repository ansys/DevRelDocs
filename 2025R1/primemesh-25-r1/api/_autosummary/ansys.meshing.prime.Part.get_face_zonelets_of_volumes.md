# get_face_zonelets_of_volumes

<a id="ansys.meshing.prime.Part.get_face_zonelets_of_volumes"></a>

#### Part.get_face_zonelets_of_volumes(volumes)

Get the face zonelets of given volumes.

* **Parameters:**
  **volumes**
  : Ids of volumes.
* **Returns:**
  :

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the ids of face zonelets.
* **Return type:**
  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> face_zonelets = part.get_face_zonelets_of_volumes(volumes)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-part-get-face-zonelets-of-volumes"></a>

## Examples using Part.get_face_zonelets_of_volumes

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<!-- thumbnail-parent-div-close --></div>
