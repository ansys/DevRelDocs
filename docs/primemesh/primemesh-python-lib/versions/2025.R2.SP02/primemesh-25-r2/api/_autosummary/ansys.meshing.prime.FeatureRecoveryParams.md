# FeatureRecoveryParams

<a id="ansys.meshing.prime.FeatureRecoveryParams"></a>

### *class* ansys.meshing.prime.FeatureRecoveryParams(model=None, scope=None, enable_feature_octree_refinement=None, size_at_features=None, json_data=None, \*\*kwargs)

FeatureRecoveryParams defines feature recovery control parameters for wrapper.

* **Parameters:**

  **model: Model**
  : Model to create a `FeatureRecoveryParams` object with default parameters.

  **scope: ScopeDefinition, optional**
  : Scope used for feature recovery control.

  **enable_feature_octree_refinement: bool, optional**
  : Checks whether to perform octree refinement at feature edges.

  **size_at_features: float, optional**
  : Refinement size at features.

  **json_data: dict, optional**
  : JSON dictionary to create a `FeatureRecoveryParams` object with provided parameters.

### Examples

```pycon
>>> feature_recovery_params = prime.FeatureRecoveryParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`FeatureRecoveryParams.print_default`](ansys.meshing.prime.FeatureRecoveryParams.print_default.md#ansys.meshing.prime.FeatureRecoveryParams.print_default)()       | Print the default values of `FeatureRecoveryParams` object.   |
| [`FeatureRecoveryParams.set_default`](ansys.meshing.prime.FeatureRecoveryParams.set_default.md#ansys.meshing.prime.FeatureRecoveryParams.set_default)([scope, ...]) | Set the default values of the `FeatureRecoveryParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`FeatureRecoveryParams.enable_feature_octree_refinement`](ansys.meshing.prime.FeatureRecoveryParams.enable_feature_octree_refinement.md#ansys.meshing.prime.FeatureRecoveryParams.enable_feature_octree_refinement)   | Checks whether to perform octree refinement at feature edges.   |
| [`FeatureRecoveryParams.scope`](ansys.meshing.prime.FeatureRecoveryParams.scope.md#ansys.meshing.prime.FeatureRecoveryParams.scope)                                                                                    | Scope used for feature recovery control.                        |
| [`FeatureRecoveryParams.size_at_features`](ansys.meshing.prime.FeatureRecoveryParams.size_at_features.md#ansys.meshing.prime.FeatureRecoveryParams.size_at_features)                                                   | Refinement size at features.                                    |
<!-- vale on -->