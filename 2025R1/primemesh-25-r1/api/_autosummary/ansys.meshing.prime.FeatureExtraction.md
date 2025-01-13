# FeatureExtraction

<a id="ansys.meshing.prime.FeatureExtraction"></a>

### *class* ansys.meshing.prime.FeatureExtraction(model)

Provide functions for all feature extraction operations like extracting edges zonlelets, tracing node paths.

* **Parameters:**
  **model**
  : Server model to create FeatureExtraction object.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`FeatureExtraction.create_intersection_edge_loops`](ansys.meshing.prime.FeatureExtraction.create_intersection_edge_loops.md#ansys.meshing.prime.FeatureExtraction.create_intersection_edge_loops)(...)          | Finds the edge zonelets formed by intersection of two face zonelets.                     |
| [`FeatureExtraction.extract_features_on_face_zonelets`](ansys.meshing.prime.FeatureExtraction.extract_features_on_face_zonelets.md#ansys.meshing.prime.FeatureExtraction.extract_features_on_face_zonelets)(...) | Extract edges by angle and face zonelet boundary using given extract feature parameters. |

<a id="examples-using-featureextraction"></a>

## Examples using FeatureExtraction

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
