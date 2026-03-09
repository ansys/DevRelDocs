# ScopeDefinition

<a id="ansys.meshing.prime.ScopeDefinition"></a>

### *class* ansys.meshing.prime.ScopeDefinition(model=None, entity_type=None, evaluation_type=None, part_expression=None, label_expression=None, zone_expression=None, json_data=None, \*\*kwargs)

ScopeDefinition to scope entities based on entity and evaluation type.

* **Parameters:**

  **model: Model**
  : Model to create a `ScopeDefinition` object with default parameters.

  **entity_type: ScopeEntity, optional**
  : Entity type for which scope needs to be evaluated. The default is set to face zonelets.

  **evaluation_type: ScopeEvaluationType, optional**
  : Evaluation type to scope entities. The default is set to labels.

  **part_expression: str, optional**
  : Part expression to scope parts while evaluating scope.

  **label_expression: str, optional**
  : Label expression to scope entities when evaluation type is set to labels.

  **zone_expression: str, optional**
  : Zone expression to scope entities when evaluation type is set to zones.

  **json_data: dict, optional**
  : JSON dictionary to create a `ScopeDefinition` object with provided parameters.

### Examples

```pycon
>>> scope_definition = prime.ScopeDefinition(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`ScopeDefinition.print_default`](ansys.meshing.prime.ScopeDefinition.print_default.md#ansys.meshing.prime.ScopeDefinition.print_default)()             | Print the default values of `ScopeDefinition` object.   |
| [`ScopeDefinition.set_default`](ansys.meshing.prime.ScopeDefinition.set_default.md#ansys.meshing.prime.ScopeDefinition.set_default)([entity_type, ...]) | Set the default values of the `ScopeDefinition` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`ScopeDefinition.entity_type`](ansys.meshing.prime.ScopeDefinition.entity_type.md#ansys.meshing.prime.ScopeDefinition.entity_type)                | Entity type for which scope needs to be evaluated.                        |
| [`ScopeDefinition.evaluation_type`](ansys.meshing.prime.ScopeDefinition.evaluation_type.md#ansys.meshing.prime.ScopeDefinition.evaluation_type)    | Evaluation type to scope entities.                                        |
| [`ScopeDefinition.label_expression`](ansys.meshing.prime.ScopeDefinition.label_expression.md#ansys.meshing.prime.ScopeDefinition.label_expression) | Label expression to scope entities when evaluation type is set to labels. |
| [`ScopeDefinition.part_expression`](ansys.meshing.prime.ScopeDefinition.part_expression.md#ansys.meshing.prime.ScopeDefinition.part_expression)    | Part expression to scope parts while evaluating scope.                    |
| [`ScopeDefinition.zone_expression`](ansys.meshing.prime.ScopeDefinition.zone_expression.md#ansys.meshing.prime.ScopeDefinition.zone_expression)    | Zone expression to scope entities when evaluation type is set to zones.   |
<!-- vale on -->