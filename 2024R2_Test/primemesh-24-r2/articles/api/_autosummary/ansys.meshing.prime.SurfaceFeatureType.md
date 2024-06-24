<!-- vale off -->

<a id="surfacefeaturetype"></a>

# SurfaceFeatureType

<a id="ansys.meshing.prime.SurfaceFeatureType"></a>

### *class* ansys.meshing.prime.SurfaceFeatureType(value)

Type of face edges considered as features.

<!-- !! processed by numpydoc !! -->

### Attributes

| [`SurfaceFeatureType.NONE`](ansys.meshing.prime.SurfaceFeatureType.NONE.md#ansys.meshing.prime.SurfaceFeatureType.NONE)                                                             | None of face edges are considered as feature.                                                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`SurfaceFeatureType.ZONEBOUNDARY`](ansys.meshing.prime.SurfaceFeatureType.ZONEBOUNDARY.md#ansys.meshing.prime.SurfaceFeatureType.ZONEBOUNDARY)                                     | Face edges at zone boundary are considered as feature.                                             |
| [`SurfaceFeatureType.FEATURE`](ansys.meshing.prime.SurfaceFeatureType.FEATURE.md#ansys.meshing.prime.SurfaceFeatureType.FEATURE)                                                    | Face edges with normal angle more than threshold are considered as feature.                        |
| [`SurfaceFeatureType.FEATUREORZONEBOUNDARY`](ansys.meshing.prime.SurfaceFeatureType.FEATUREORZONEBOUNDARY.md#ansys.meshing.prime.SurfaceFeatureType.FEATUREORZONEBOUNDARY)          | Face edges at zone boundary or with normal angle more than threshold are considered as feature.    |
| [`SurfaceFeatureType.ZONELETBOUNDARY`](ansys.meshing.prime.SurfaceFeatureType.ZONELETBOUNDARY.md#ansys.meshing.prime.SurfaceFeatureType.ZONELETBOUNDARY)                            | Face edges at zonelet boundary are considered as feature.                                          |
| [`SurfaceFeatureType.FEATUREORZONELETBOUNDARY`](ansys.meshing.prime.SurfaceFeatureType.FEATUREORZONELETBOUNDARY.md#ansys.meshing.prime.SurfaceFeatureType.FEATUREORZONELETBOUNDARY) | Face edges at zonelet boundary or with normal angle more than threshold are considered as feature. |
<!-- vale on -->
