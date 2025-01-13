# BCPair

<a id="ansys.meshing.prime.BCPair"></a>

### *class* ansys.meshing.prime.BCPair(model=None, source_zonelet=None, target_zonelet=None, type=None, json_data=None, \*\*kwargs)

Used to define boundary conditions for match morphing.

* **Parameters:**
  **model: Model**
  : Model to create a `BCPair` object with default parameters.

  **source_zonelet: int, optional**
  : Id of source zonelet.

  **target_zonelet: int, optional**
  : Id of target zonelet.

  **type: BCPairType, optional**
  : Option to specify boundary condition pair type.

  **json_data: dict, optional**
  : JSON dictionary to create a `BCPair` object with provided parameters.

### Examples

```pycon
>>> b_cpair = prime.BCPair(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| [`BCPair.print_default`](ansys.meshing.prime.BCPair.print_default.md#ansys.meshing.prime.BCPair.print_default)()                | Print the default values of `BCPair` object.   |
| [`BCPair.set_default`](ansys.meshing.prime.BCPair.set_default.md#ansys.meshing.prime.BCPair.set_default)([source_zonelet, ...]) | Set the default values of the `BCPair` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| [`BCPair.source_zonelet`](ansys.meshing.prime.BCPair.source_zonelet.md#ansys.meshing.prime.BCPair.source_zonelet)   | Id of source zonelet.                           |
| [`BCPair.target_zonelet`](ansys.meshing.prime.BCPair.target_zonelet.md#ansys.meshing.prime.BCPair.target_zonelet)   | Id of target zonelet.                           |
| [`BCPair.type`](ansys.meshing.prime.BCPair.type.md#ansys.meshing.prime.BCPair.type)                                 | Option to specify boundary condition pair type. |

<a id="examples-using-bcpair"></a>

## Examples using BCPair

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
