# DetectAndTreatFeaturesParams

<a id="ansys.meshing.prime.DetectAndTreatFeaturesParams"></a>

### *class* ansys.meshing.prime.DetectAndTreatFeaturesParams(model=None, detect_and_treat_holes=None, detect_and_treat_circular_faces=None, treat_holes_params=None, treat_circular_faces_params=None, json_data=None, \*\*kwargs)

Parameters for detect and treat features operations.

* **Parameters:**

  **model: Model**
  : Model to create a `DetectAndTreatFeaturesParams` object with default parameters.

  **detect_and_treat_holes: bool, optional**
  : Option to detect and treat holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **detect_and_treat_circular_faces: bool, optional**
  : Option to detect and treat circular faces.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **treat_holes_params: DetectAndTreatHolesParams, optional**
  : Parameters for detect and treat holes operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **treat_circular_faces_params: DetectAndTreatCircularFacesParams, optional**
  : Parameters for detect and treat circular faces operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DetectAndTreatFeaturesParams` object with provided parameters.

### Examples

```pycon
>>> detect_and_treat_features_params = prime.DetectAndTreatFeaturesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`DetectAndTreatFeaturesParams.print_default`](ansys.meshing.prime.DetectAndTreatFeaturesParams.print_default.md#ansys.meshing.prime.DetectAndTreatFeaturesParams.print_default)()   | Print the default values of `DetectAndTreatFeaturesParams` object.   |
| [`DetectAndTreatFeaturesParams.set_default`](ansys.meshing.prime.DetectAndTreatFeaturesParams.set_default.md#ansys.meshing.prime.DetectAndTreatFeaturesParams.set_default)([...])    | Set the default values of the `DetectAndTreatFeaturesParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`DetectAndTreatFeaturesParams.detect_and_treat_circular_faces`](ansys.meshing.prime.DetectAndTreatFeaturesParams.detect_and_treat_circular_faces.md#ansys.meshing.prime.DetectAndTreatFeaturesParams.detect_and_treat_circular_faces)   | Option to detect and treat circular faces.                |
| [`DetectAndTreatFeaturesParams.detect_and_treat_holes`](ansys.meshing.prime.DetectAndTreatFeaturesParams.detect_and_treat_holes.md#ansys.meshing.prime.DetectAndTreatFeaturesParams.detect_and_treat_holes)                              | Option to detect and treat holes.                         |
| [`DetectAndTreatFeaturesParams.treat_circular_faces_params`](ansys.meshing.prime.DetectAndTreatFeaturesParams.treat_circular_faces_params.md#ansys.meshing.prime.DetectAndTreatFeaturesParams.treat_circular_faces_params)               | Parameters for detect and treat circular faces operation. |
| [`DetectAndTreatFeaturesParams.treat_holes_params`](ansys.meshing.prime.DetectAndTreatFeaturesParams.treat_holes_params.md#ansys.meshing.prime.DetectAndTreatFeaturesParams.treat_holes_params)                                          | Parameters for detect and treat holes operation.          |
<!-- vale on -->