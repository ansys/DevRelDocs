# get_edge_zonelets

<a id="ansys.meshing.prime.Part.get_edge_zonelets"></a>

#### Part.get_edge_zonelets()

Get the edge zonelets of a part.

* **Returns:**
  :

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the ids of edge zonelets. Returns an empty list for a topology part.
* **Return type:**
  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> edge_zonelets = part.get_edge_zonelets()
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-part-get-edge-zonelets"></a>

## Examples using Part.get_edge_zonelets

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
