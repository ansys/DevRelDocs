# get_topo_faces_of_label_name_pattern

<a id="ansys.meshing.prime.Part.get_topo_faces_of_label_name_pattern"></a>

#### Part.get_topo_faces_of_label_name_pattern(label_name_pattern, name_pattern_params)

Get topoface ids of labels with name matching the given name pattern.

* **Parameters:**
  **label_name_pattern**
  : Name pattern to be matched with label name.

  **name_pattern_params**
  : Name pattern parameters used to match label name pattern.
* **Returns:**
  :

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the ids of topofaces.
* **Return type:**
  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> topo_faces = part.get_topo_faces_of_label_name_pattern(
>>>                   label_name_pattern = "face_label",
>>>                   params = prime.NamePatternParams(model=model))
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-part-get-topo-faces-of-label-name-pattern"></a>

## Examples using Part.get_topo_faces_of_label_name_pattern

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<!-- thumbnail-parent-div-close --></div>
