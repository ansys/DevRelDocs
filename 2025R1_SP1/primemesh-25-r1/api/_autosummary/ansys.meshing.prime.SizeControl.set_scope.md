# set_scope

<a id="ansys.meshing.prime.SizeControl.set_scope"></a>

#### SizeControl.set_scope(scope)

Set the scope for size control to evaluate.

Size control uses scope to evaluate entities for which size field needs to be computed.

* **Parameters:**
  **scope**
  : ScopeDefinition to scope entities for size field computation.
* **Returns:**
  :

  [`SetScopeResults`](ansys.meshing.prime.SetScopeResults.md#ansys.meshing.prime.SetScopeResults)
  : Return a SetScopeResults.
* **Return type:**
  [`SetScopeResults`](ansys.meshing.prime.SetScopeResults.md#ansys.meshing.prime.SetScopeResults)

### Examples

```pycon
>>> size_control.set_scope(prime.ScopeDefinition(model=model,
>>>                        entity_type = ScopeEntity.FACEZONELETS,
>>>                        evaluation_type = ScopeEvaluationType.LABELS,
>>>                        label_expression = "inlet"))
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-sizecontrol-set-scope"></a>

## Examples using SizeControl.set_scope

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
