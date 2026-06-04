# set_default

<a id="ansys.meshing.prime.SurfaceQualitySummaryParams.set_default"></a>

#### *static* SurfaceQualitySummaryParams.set_default(face_quality_measures=None, scope=None, quality_limit=None)

Set the default values of the `SurfaceQualitySummaryParams` object.

* **Parameters:**

  **face_quality_measures: List[FaceQualityMeasure], optional**
  : List of face quality measures for surface quality diagnostics.

  **scope: ScopeDefinition, optional**
  : Scope the face zonelets for surface quality diagnostics.

  **quality_limit: Iterable[float], optional**
  : Quality limit per face quality measure. If the quality limit is not specified, the default quality limit is used.

<!-- !! processed by numpydoc !! -->
