# ExtractFeatureParams

<a id="ansys.meshing.prime.ExtractFeatureParams"></a>

### *class* ansys.meshing.prime.ExtractFeatureParams(model=None, replace=None, feature_angle=None, separate_features=None, separation_angle=None, disconnect_with_faces=None, label_name=None, number_of_threads=None, json_data=None, \*\*kwargs)

Parameter to control feature edge extraction.

* **Parameters:**

  **model: Model**
  : Model to create a `ExtractFeatureParams` object with default parameters.

  **replace: bool, optional**
  : Option to replace existing edge zonelets with new extracted edge zonelets.

  **feature_angle: float, optional**
  : Angle used to capture face features to be  extracted as edges.

  **separate_features: bool, optional**
  : Option to separate extracted features.

  **separation_angle: float, optional**
  : Angle used to separate extracted features.

  **disconnect_with_faces: bool, optional**
  : Option to disconnect edges from faces. If false, edges remain connected to faces by sharing nodes.

  **label_name: str, optional**
  : Label name to be assigned to extracted features.

  **number_of_threads: int, optional**
  : Number of threads used for multithreading.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExtractFeatureParams` object with provided parameters.

### Examples

```pycon
>>> extract_feature_params = prime.ExtractFeatureParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`ExtractFeatureParams.print_default`](ansys.meshing.prime.ExtractFeatureParams.print_default.md#ansys.meshing.prime.ExtractFeatureParams.print_default)()         | Print the default values of `ExtractFeatureParams` object.   |
| [`ExtractFeatureParams.set_default`](ansys.meshing.prime.ExtractFeatureParams.set_default.md#ansys.meshing.prime.ExtractFeatureParams.set_default)([replace, ...]) | Set the default values of the `ExtractFeatureParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`ExtractFeatureParams.disconnect_with_faces`](ansys.meshing.prime.ExtractFeatureParams.disconnect_with_faces.md#ansys.meshing.prime.ExtractFeatureParams.disconnect_with_faces)   | Option to disconnect edges from faces.                                     |
| [`ExtractFeatureParams.feature_angle`](ansys.meshing.prime.ExtractFeatureParams.feature_angle.md#ansys.meshing.prime.ExtractFeatureParams.feature_angle)                           | Angle used to capture face features to be  extracted as edges.             |
| [`ExtractFeatureParams.label_name`](ansys.meshing.prime.ExtractFeatureParams.label_name.md#ansys.meshing.prime.ExtractFeatureParams.label_name)                                    | Label name to be assigned to extracted features.                           |
| [`ExtractFeatureParams.number_of_threads`](ansys.meshing.prime.ExtractFeatureParams.number_of_threads.md#ansys.meshing.prime.ExtractFeatureParams.number_of_threads)               | Number of threads used for multithreading.                                 |
| [`ExtractFeatureParams.replace`](ansys.meshing.prime.ExtractFeatureParams.replace.md#ansys.meshing.prime.ExtractFeatureParams.replace)                                             | Option to replace existing edge zonelets with new extracted edge zonelets. |
| [`ExtractFeatureParams.separate_features`](ansys.meshing.prime.ExtractFeatureParams.separate_features.md#ansys.meshing.prime.ExtractFeatureParams.separate_features)               | Option to separate extracted features.                                     |
| [`ExtractFeatureParams.separation_angle`](ansys.meshing.prime.ExtractFeatureParams.separation_angle.md#ansys.meshing.prime.ExtractFeatureParams.separation_angle)                  | Angle used to separate extracted features.                                 |
<!-- vale on -->