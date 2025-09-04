# set_default

<a id="ansys.meshing.prime.ExtractFeatureParams.set_default"></a>

#### *static* ExtractFeatureParams.set_default(replace=None, feature_angle=None, separate_features=None, separation_angle=None, disconnect_with_faces=None, label_name=None, number_of_threads=None)

Set the default values of the `ExtractFeatureParams` object.

* **Parameters:**

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

<!-- !! processed by numpydoc !! -->
