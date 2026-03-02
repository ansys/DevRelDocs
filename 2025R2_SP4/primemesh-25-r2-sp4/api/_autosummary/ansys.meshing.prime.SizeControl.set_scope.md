# set_scope

<a id="ansys.meshing.prime.SizeControl.set_scope"></a>

#### SizeControl.set_scope(scope)

Set the scope for size control to evaluate.

Size control uses scope to evaluate entities for which size field needs to be computed.

* **Parameters:**

  **scope**
  : ScopeDefinition to scope entities for size field computation.

* **Returns:**

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
