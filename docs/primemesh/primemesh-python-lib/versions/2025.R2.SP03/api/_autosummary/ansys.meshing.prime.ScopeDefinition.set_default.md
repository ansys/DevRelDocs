# set_default

<a id="ansys.meshing.prime.ScopeDefinition.set_default"></a>

#### *static* ScopeDefinition.set_default(entity_type=None, evaluation_type=None, part_expression=None, label_expression=None, zone_expression=None)

Set the default values of the `ScopeDefinition` object.

* **Parameters:**

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

<!-- !! processed by numpydoc !! -->
