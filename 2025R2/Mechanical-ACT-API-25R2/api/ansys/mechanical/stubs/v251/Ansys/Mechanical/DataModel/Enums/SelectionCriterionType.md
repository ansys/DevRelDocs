# `SelectionCriterionType`

<a id="ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SelectionCriterionType"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.SelectionCriterionType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

Specifies the selection criterion type.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| -------------------------------------------------------------------------------- |
| [`AllEdges`](#SelectionCriterionType.AllEdges) |
| [`AllNodes`](#SelectionCriterionType.AllNodes) |
| [`AllVertices`](#SelectionCriterionType.AllVertices) |
| [`AnalysisPly`](#SelectionCriterionType.AnalysisPly) |
| [`AnyEdge`](#SelectionCriterionType.AnyEdge) |
| [`AnyNode`](#SelectionCriterionType.AnyNode) |
| [`AnyVertex`](#SelectionCriterionType.AnyVertex) |
| [`Area`](#SelectionCriterionType.Area) |
| [`AspectRatio`](#SelectionCriterionType.AspectRatio) |
| [`AspectRatioExplicit`](#SelectionCriterionType.AspectRatioExplicit) |
| [`BodyInterferenceMesh`](#SelectionCriterionType.BodyInterferenceMesh) |
| [`CADAttribute`](#SelectionCriterionType.CADAttribute) |
| [`CrossSection`](#SelectionCriterionType.CrossSection) |
| [`Distance`](#SelectionCriterionType.Distance) |
| [`EdgeConnections`](#SelectionCriterionType.EdgeConnections) |
| [`ElementConnections`](#SelectionCriterionType.ElementConnections) |
| [`ElementNumber`](#SelectionCriterionType.ElementNumber) |
| [`ElementQuality`](#SelectionCriterionType.ElementQuality) |
| [`ExcludeSharedFaces`](#SelectionCriterionType.ExcludeSharedFaces) |
| [`ExtEdgeFaceLoop`](#SelectionCriterionType.ExtEdgeFaceLoop) |
| [`ExtEdgeNodeLoop`](#SelectionCriterionType.ExtEdgeNodeLoop) |
| [`FaceConnections`](#SelectionCriterionType.FaceConnections) |
| [`FullyDefeaturedEdges`](#SelectionCriterionType.FullyDefeaturedEdges) |
| [`FullyDefeaturedFaces`](#SelectionCriterionType.FullyDefeaturedFaces) |
| [`FullyDefeaturedVertices`](#SelectionCriterionType.FullyDefeaturedVertices) |
| [`ImportedTrace`](#SelectionCriterionType.ImportedTrace) |
| [`IncludeSharedFaces`](#SelectionCriterionType.IncludeSharedFaces) |
| [`JacobianRatio`](#SelectionCriterionType.JacobianRatio) |
| [`JacobianRatioCornerNodes`](#SelectionCriterionType.JacobianRatioCornerNodes) |
| [`JacobianRatioGaussPoints`](#SelectionCriterionType.JacobianRatioGaussPoints) |
| [`LocationX`](#SelectionCriterionType.LocationX) |
| [`LocationY`](#SelectionCriterionType.LocationY) |
| [`LocationZ`](#SelectionCriterionType.LocationZ) |
| [`Material`](#SelectionCriterionType.Material) |
| [`MaximumCornerAngle`](#SelectionCriterionType.MaximumCornerAngle) |
| [`MaximumMeshEdgeLength`](#SelectionCriterionType.MaximumMeshEdgeLength) |
| [`MaximumQuadAngle`](#SelectionCriterionType.MaximumQuadAngle) |
| [`MaximumTriAngle`](#SelectionCriterionType.MaximumTriAngle) |
| [`MinimumLength`](#SelectionCriterionType.MinimumLength) |
| [`MinimumLengthLSDyna`](#SelectionCriterionType.MinimumLengthLSDyna) |
| [`MinimumMeshEdgeLength`](#SelectionCriterionType.MinimumMeshEdgeLength) |
| [`MinimumQuadAngle`](#SelectionCriterionType.MinimumQuadAngle) |
| [`MinimumTriAngle`](#SelectionCriterionType.MinimumTriAngle) |
| [`Name`](#SelectionCriterionType.Name) |
| [`NamedSelection`](#SelectionCriterionType.NamedSelection) |
| [`NodeNumber`](#SelectionCriterionType.NodeNumber) |
| [`NormalTo`](#SelectionCriterionType.NormalTo) |
| [`OffsetMode`](#SelectionCriterionType.OffsetMode) |
| [`OrthogonalQuality`](#SelectionCriterionType.OrthogonalQuality) |
| [`ParallelDeviation`](#SelectionCriterionType.ParallelDeviation) |
| [`PartiallyDefeaturedEdges`](#SelectionCriterionType.PartiallyDefeaturedEdges) |
| [`Radius`](#SelectionCriterionType.Radius) |
| [`SeamWeld`](#SelectionCriterionType.SeamWeld) |
| [`SeamWeldAngle`](#SelectionCriterionType.SeamWeldAngle) |
| [`SeamWeldHAZ1`](#SelectionCriterionType.SeamWeldHAZ1) |
| [`SeamWeldHAZ2`](#SelectionCriterionType.SeamWeldHAZ2) |
| [`SeamWeldHAZ3`](#SelectionCriterionType.SeamWeldHAZ3) |
| [`SeamWeldHAZAll`](#SelectionCriterionType.SeamWeldHAZAll) |
| [`SeamWeldNormal`](#SelectionCriterionType.SeamWeldNormal) |
| [`SelfIntersectingMesh`](#SelectionCriterionType.SelfIntersectingMesh) |
| [`SharedAcrossBodies`](#SelectionCriterionType.SharedAcrossBodies) |
| [`SharedAcrossParts`](#SelectionCriterionType.SharedAcrossParts) |
| [`SharpAngleMesh`](#SelectionCriterionType.SharpAngleMesh) |
| [`Size`](#SelectionCriterionType.Size) |
| [`Skewness`](#SelectionCriterionType.Skewness) |
| [`TetCollapse`](#SelectionCriterionType.TetCollapse) |
| [`Thickness`](#SelectionCriterionType.Thickness) |
| [`Type`](#SelectionCriterionType.Type) |
| [`Volume`](#SelectionCriterionType.Volume) |
| [`WarpingAngle`](#SelectionCriterionType.WarpingAngle) |
| [`WarpingFactor`](#SelectionCriterionType.WarpingFactor) |
| [`WeldFeatures`](#SelectionCriterionType.WeldFeatures) |
| [`WithinBody`](#SelectionCriterionType.WithinBody) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="SelectionCriterionType.AllEdges"></a>

### SelectionCriterionType.AllEdges *= 35*

<a id="SelectionCriterionType.AllNodes"></a>

### SelectionCriterionType.AllNodes *= 18*

<a id="SelectionCriterionType.AllVertices"></a>

### SelectionCriterionType.AllVertices *= 33*

<a id="SelectionCriterionType.AnalysisPly"></a>

### SelectionCriterionType.AnalysisPly *= 27*

<a id="SelectionCriterionType.AnyEdge"></a>

### SelectionCriterionType.AnyEdge *= 34*

<a id="SelectionCriterionType.AnyNode"></a>

### SelectionCriterionType.AnyNode *= 17*

<a id="SelectionCriterionType.AnyVertex"></a>

### SelectionCriterionType.AnyVertex *= 32*

<a id="SelectionCriterionType.Area"></a>

### SelectionCriterionType.Area *= 26*

<a id="SelectionCriterionType.AspectRatio"></a>

### SelectionCriterionType.AspectRatio *= 19*

<a id="SelectionCriterionType.AspectRatioExplicit"></a>

### SelectionCriterionType.AspectRatioExplicit *= 64*

<a id="SelectionCriterionType.BodyInterferenceMesh"></a>

### SelectionCriterionType.BodyInterferenceMesh *= 54*

<a id="SelectionCriterionType.CADAttribute"></a>

### SelectionCriterionType.CADAttribute *= 7*

<a id="SelectionCriterionType.CrossSection"></a>

### SelectionCriterionType.CrossSection *= 42*

<a id="SelectionCriterionType.Distance"></a>

### SelectionCriterionType.Distance *= 14*

<a id="SelectionCriterionType.EdgeConnections"></a>

### SelectionCriterionType.EdgeConnections *= 31*

<a id="SelectionCriterionType.ElementConnections"></a>

### SelectionCriterionType.ElementConnections *= 30*

<a id="SelectionCriterionType.ElementNumber"></a>

### SelectionCriterionType.ElementNumber *= 15*

<a id="SelectionCriterionType.ElementQuality"></a>

### SelectionCriterionType.ElementQuality *= 16*

<a id="SelectionCriterionType.ExcludeSharedFaces"></a>

### SelectionCriterionType.ExcludeSharedFaces *= 44*

<a id="SelectionCriterionType.ExtEdgeFaceLoop"></a>

### SelectionCriterionType.ExtEdgeFaceLoop *= 55*

<a id="SelectionCriterionType.ExtEdgeNodeLoop"></a>

### SelectionCriterionType.ExtEdgeNodeLoop *= 56*

<a id="SelectionCriterionType.FaceConnections"></a>

### SelectionCriterionType.FaceConnections *= 6*

<a id="SelectionCriterionType.FullyDefeaturedEdges"></a>

### SelectionCriterionType.FullyDefeaturedEdges *= 70*

<a id="SelectionCriterionType.FullyDefeaturedFaces"></a>

### SelectionCriterionType.FullyDefeaturedFaces *= 71*

<a id="SelectionCriterionType.FullyDefeaturedVertices"></a>

### SelectionCriterionType.FullyDefeaturedVertices *= 69*

<a id="SelectionCriterionType.ImportedTrace"></a>

### SelectionCriterionType.ImportedTrace *= 36*

<a id="SelectionCriterionType.IncludeSharedFaces"></a>

### SelectionCriterionType.IncludeSharedFaces *= 45*

<a id="SelectionCriterionType.JacobianRatio"></a>

### SelectionCriterionType.JacobianRatio *= 20*

<a id="SelectionCriterionType.JacobianRatioCornerNodes"></a>

### SelectionCriterionType.JacobianRatioCornerNodes *= 40*

<a id="SelectionCriterionType.JacobianRatioGaussPoints"></a>

### SelectionCriterionType.JacobianRatioGaussPoints *= 41*

<a id="SelectionCriterionType.LocationX"></a>

### SelectionCriterionType.LocationX *= 3*

<a id="SelectionCriterionType.LocationY"></a>

### SelectionCriterionType.LocationY *= 4*

<a id="SelectionCriterionType.LocationZ"></a>

### SelectionCriterionType.LocationZ *= 5*

<a id="SelectionCriterionType.Material"></a>

### SelectionCriterionType.Material *= 11*

<a id="SelectionCriterionType.MaximumCornerAngle"></a>

### SelectionCriterionType.MaximumCornerAngle *= 38*

<a id="SelectionCriterionType.MaximumMeshEdgeLength"></a>

### SelectionCriterionType.MaximumMeshEdgeLength *= 66*

<a id="SelectionCriterionType.MaximumQuadAngle"></a>

### SelectionCriterionType.MaximumQuadAngle *= 61*

<a id="SelectionCriterionType.MaximumTriAngle"></a>

### SelectionCriterionType.MaximumTriAngle *= 59*

<a id="SelectionCriterionType.MinimumLength"></a>

### SelectionCriterionType.MinimumLength *= 39*

<a id="SelectionCriterionType.MinimumLengthLSDyna"></a>

### SelectionCriterionType.MinimumLengthLSDyna *= 67*

<a id="SelectionCriterionType.MinimumMeshEdgeLength"></a>

### SelectionCriterionType.MinimumMeshEdgeLength *= 65*

<a id="SelectionCriterionType.MinimumQuadAngle"></a>

### SelectionCriterionType.MinimumQuadAngle *= 60*

<a id="SelectionCriterionType.MinimumTriAngle"></a>

### SelectionCriterionType.MinimumTriAngle *= 58*

<a id="SelectionCriterionType.Name"></a>

### SelectionCriterionType.Name *= 29*

<a id="SelectionCriterionType.NamedSelection"></a>

### SelectionCriterionType.NamedSelection *= 9*

<a id="SelectionCriterionType.NodeNumber"></a>

### SelectionCriterionType.NodeNumber *= 10*

<a id="SelectionCriterionType.NormalTo"></a>

### SelectionCriterionType.NormalTo *= 43*

<a id="SelectionCriterionType.OffsetMode"></a>

### SelectionCriterionType.OffsetMode *= 13*

<a id="SelectionCriterionType.OrthogonalQuality"></a>

### SelectionCriterionType.OrthogonalQuality *= 24*

<a id="SelectionCriterionType.ParallelDeviation"></a>

### SelectionCriterionType.ParallelDeviation *= 22*

<a id="SelectionCriterionType.PartiallyDefeaturedEdges"></a>

### SelectionCriterionType.PartiallyDefeaturedEdges *= 68*

<a id="SelectionCriterionType.Radius"></a>

### SelectionCriterionType.Radius *= 8*

<a id="SelectionCriterionType.SeamWeld"></a>

### SelectionCriterionType.SeamWeld *= 48*

<a id="SelectionCriterionType.SeamWeldAngle"></a>

### SelectionCriterionType.SeamWeldAngle *= 73*

<a id="SelectionCriterionType.SeamWeldHAZ1"></a>

### SelectionCriterionType.SeamWeldHAZ1 *= 49*

<a id="SelectionCriterionType.SeamWeldHAZ2"></a>

### SelectionCriterionType.SeamWeldHAZ2 *= 50*

<a id="SelectionCriterionType.SeamWeldHAZ3"></a>

### SelectionCriterionType.SeamWeldHAZ3 *= 51*

<a id="SelectionCriterionType.SeamWeldHAZAll"></a>

### SelectionCriterionType.SeamWeldHAZAll *= 52*

<a id="SelectionCriterionType.SeamWeldNormal"></a>

### SelectionCriterionType.SeamWeldNormal *= 72*

<a id="SelectionCriterionType.SelfIntersectingMesh"></a>

### SelectionCriterionType.SelfIntersectingMesh *= 53*

<a id="SelectionCriterionType.SharedAcrossBodies"></a>

### SelectionCriterionType.SharedAcrossBodies *= 37*

<a id="SelectionCriterionType.SharedAcrossParts"></a>

### SelectionCriterionType.SharedAcrossParts *= 28*

<a id="SelectionCriterionType.SharpAngleMesh"></a>

### SelectionCriterionType.SharpAngleMesh *= 57*

<a id="SelectionCriterionType.Size"></a>

### SelectionCriterionType.Size *= 1*

<a id="SelectionCriterionType.Skewness"></a>

### SelectionCriterionType.Skewness *= 23*

<a id="SelectionCriterionType.TetCollapse"></a>

### SelectionCriterionType.TetCollapse *= 63*

<a id="SelectionCriterionType.Thickness"></a>

### SelectionCriterionType.Thickness *= 12*

<a id="SelectionCriterionType.Type"></a>

### SelectionCriterionType.Type *= 2*

<a id="SelectionCriterionType.Volume"></a>

### SelectionCriterionType.Volume *= 25*

<a id="SelectionCriterionType.WarpingAngle"></a>

### SelectionCriterionType.WarpingAngle *= 62*

<a id="SelectionCriterionType.WarpingFactor"></a>

### SelectionCriterionType.WarpingFactor *= 21*

<a id="SelectionCriterionType.WeldFeatures"></a>

### SelectionCriterionType.WeldFeatures *= 46*

<a id="SelectionCriterionType.WithinBody"></a>

### SelectionCriterionType.WithinBody *= 47*


