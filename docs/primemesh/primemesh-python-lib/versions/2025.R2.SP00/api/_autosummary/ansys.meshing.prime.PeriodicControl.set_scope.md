# set_scope

<a id="ansys.meshing.prime.PeriodicControl.set_scope"></a>

#### PeriodicControl.set_scope(scope)

Sets the scope for periodic control to evaluate.

Periodic Control uses scope to evaluate entities for which periodic surface recovery must be carried out.

* **Parameters:**

  **scope**
  : ScopeDefinition to scope entities for periodic surface recovery.

* **Returns:**

  [`SetScopeResults`](ansys.meshing.prime.SetScopeResults.md#ansys.meshing.prime.SetScopeResults)
  : Returns the SetScopeResults.
  
* **Return type:**
  [`SetScopeResults`](ansys.meshing.prime.SetScopeResults.md#ansys.meshing.prime.SetScopeResults)

### Examples

```pycon
>>> surface_scope = prime.ScopeDefinition(model=model,
>>>                     entity_type=prime.ScopeEntity.FACEZONELETS,
>>>                     evaluation_type=prime.ScopeEvaluationType.LABELS,
>>>                     label_expression="periodic-1")
>>> periodic_control.set_scope(surface_scope)
```

<!-- !! processed by numpydoc !! -->
