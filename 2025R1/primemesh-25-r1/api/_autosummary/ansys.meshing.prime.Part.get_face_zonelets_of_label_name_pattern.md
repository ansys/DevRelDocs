# get_face_zonelets_of_label_name_pattern

<a id="ansys.meshing.prime.Part.get_face_zonelets_of_label_name_pattern"></a>

#### Part.get_face_zonelets_of_label_name_pattern(label_name_pattern, name_pattern_params)

Get face zonelet ids of labels with name matching the given name pattern.

* **Parameters:**
  **label_name_pattern**
  : Name pattern to be matched with label name.

  **name_pattern_params**
  : Name pattern parameters used to match label name pattern.
* **Returns:**
  :

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return face zonelet ids of labels with name matching the name pattern. Returns an empty list for a topology part.
* **Return type:**
  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> name_pattern_params = prime.NamePatternParams(model = model)
>>> face_zonelets = part.get_face_zonelets_of_label_name_pattern("wall*", name_pattern_params)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-part-get-face-zonelets-of-label-name-pattern"></a>

## Examples using Part.get_face_zonelets_of_label_name_pattern

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
