# SelectionCriterionType

### *class* SelectionCriterionType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the selection criterion type.

> <!-- !! processed by numpydoc !! -->

## Overview

### Attributes

| [`Size`](#SelectionCriterionType.Size)                                                             |    |
|----------------------------------------------------------------------------------------------------|----|
| [`Type`](#SelectionCriterionType.Type)                                                             |    |
| [`LocationX`](#SelectionCriterionType.LocationX)                                                   |    |
| [`LocationY`](#SelectionCriterionType.LocationY)                                                   |    |
| [`LocationZ`](#SelectionCriterionType.LocationZ)                                                   |    |
| [`FaceConnections`](#SelectionCriterionType.FaceConnections)                                       |    |
| [`CADAttribute`](#SelectionCriterionType.CADAttribute)                                             |    |
| [`Radius`](#SelectionCriterionType.Radius)                                                         |    |
| [`NamedSelection`](../../../ACT/Automation/Mechanical/NamedSelection.md#NamedSelection)            |    |
| [`NodeNumber`](#SelectionCriterionType.NodeNumber)                                                 |    |
| [`Material`](../../../ACT/Automation/Mechanical/Material.md#Material)                              |    |
| [`Thickness`](../../../ACT/Automation/Mechanical/Thickness.md#Thickness)                           |    |
| [`OffsetMode`](#SelectionCriterionType.OffsetMode)                                                 |    |
| [`Distance`](#SelectionCriterionType.Distance)                                                     |    |
| [`ElementNumber`](#SelectionCriterionType.ElementNumber)                                           |    |
| [`ElementQuality`](#SelectionCriterionType.ElementQuality)                                         |    |
| [`AnyNode`](#SelectionCriterionType.AnyNode)                                                       |    |
| [`AllNodes`](#SelectionCriterionType.AllNodes)                                                     |    |
| [`AspectRatio`](#SelectionCriterionType.AspectRatio)                                               |    |
| [`JacobianRatio`](#SelectionCriterionType.JacobianRatio)                                           |    |
| [`WarpingFactor`](#SelectionCriterionType.WarpingFactor)                                           |    |
| [`ParallelDeviation`](#SelectionCriterionType.ParallelDeviation)                                   |    |
| [`Skewness`](#SelectionCriterionType.Skewness)                                                     |    |
| [`OrthogonalQuality`](#SelectionCriterionType.OrthogonalQuality)                                   |    |
| [`Volume`](../../../ACT/Automation/Mechanical/Results/Volume.md#Volume)                            |    |
| [`Area`](#SelectionCriterionType.Area)                                                             |    |
| [`AnalysisPly`](../../../ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly)                     |    |
| [`SharedAcrossParts`](#SelectionCriterionType.SharedAcrossParts)                                   |    |
| [`Name`](#SelectionCriterionType.Name)                                                             |    |
| [`ElementConnections`](#SelectionCriterionType.ElementConnections)                                 |    |
| [`EdgeConnections`](#SelectionCriterionType.EdgeConnections)                                       |    |
| [`AnyVertex`](#SelectionCriterionType.AnyVertex)                                                   |    |
| [`AllVertices`](#SelectionCriterionType.AllVertices)                                               |    |
| [`AnyEdge`](#SelectionCriterionType.AnyEdge)                                                       |    |
| [`AllEdges`](#SelectionCriterionType.AllEdges)                                                     |    |
| [`ImportedTrace`](../../../ACT/Automation/Mechanical/ImportedLoads/ImportedTrace.md#ImportedTrace) |    |
| [`SharedAcrossBodies`](#SelectionCriterionType.SharedAcrossBodies)                                 |    |
| [`MaximumCornerAngle`](#SelectionCriterionType.MaximumCornerAngle)                                 |    |
| [`MinimumLength`](#SelectionCriterionType.MinimumLength)                                           |    |
| [`JacobianRatioCornerNodes`](#SelectionCriterionType.JacobianRatioCornerNodes)                     |    |
| [`JacobianRatioGaussPoints`](#SelectionCriterionType.JacobianRatioGaussPoints)                     |    |
| [`CrossSection`](../../../ACT/Automation/Mechanical/CrossSection.md#CrossSection)                  |    |
| [`NormalTo`](#SelectionCriterionType.NormalTo)                                                     |    |
| [`ExcludeSharedFaces`](#SelectionCriterionType.ExcludeSharedFaces)                                 |    |
| [`IncludeSharedFaces`](#SelectionCriterionType.IncludeSharedFaces)                                 |    |
| [`WeldFeatures`](#SelectionCriterionType.WeldFeatures)                                             |    |
| [`WithinBody`](#SelectionCriterionType.WithinBody)                                                 |    |
| [`SeamWeld`](#SelectionCriterionType.SeamWeld)                                                     |    |
| [`SeamWeldHAZ1`](#SelectionCriterionType.SeamWeldHAZ1)                                             |    |
| [`SeamWeldHAZ2`](#SelectionCriterionType.SeamWeldHAZ2)                                             |    |
| [`SeamWeldHAZ3`](#SelectionCriterionType.SeamWeldHAZ3)                                             |    |
| [`SeamWeldHAZAll`](#SelectionCriterionType.SeamWeldHAZAll)                                         |    |
| [`SelfIntersectingMesh`](#SelectionCriterionType.SelfIntersectingMesh)                             |    |
| [`BodyInterferenceMesh`](#SelectionCriterionType.BodyInterferenceMesh)                             |    |
| [`ExtEdgeFaceLoop`](#SelectionCriterionType.ExtEdgeFaceLoop)                                       |    |
| [`ExtEdgeNodeLoop`](#SelectionCriterionType.ExtEdgeNodeLoop)                                       |    |
| [`SharpAngleMesh`](#SelectionCriterionType.SharpAngleMesh)                                         |    |
| [`MinimumTriAngle`](#SelectionCriterionType.MinimumTriAngle)                                       |    |
| [`MaximumTriAngle`](#SelectionCriterionType.MaximumTriAngle)                                       |    |
| [`MinimumQuadAngle`](#SelectionCriterionType.MinimumQuadAngle)                                     |    |
| [`MaximumQuadAngle`](#SelectionCriterionType.MaximumQuadAngle)                                     |    |
| [`WarpingAngle`](#SelectionCriterionType.WarpingAngle)                                             |    |
| [`TetCollapse`](#SelectionCriterionType.TetCollapse)                                               |    |
| [`AspectRatioExplicit`](#SelectionCriterionType.AspectRatioExplicit)                               |    |
| [`MinimumMeshEdgeLength`](#SelectionCriterionType.MinimumMeshEdgeLength)                           |    |
| [`MaximumMeshEdgeLength`](#SelectionCriterionType.MaximumMeshEdgeLength)                           |    |
| [`MinimumLengthLSDyna`](#SelectionCriterionType.MinimumLengthLSDyna)                               |    |
| [`PartiallyDefeaturedEdges`](#SelectionCriterionType.PartiallyDefeaturedEdges)                     |    |
| [`FullyDefeaturedVertices`](#SelectionCriterionType.FullyDefeaturedVertices)                       |    |
| [`FullyDefeaturedEdges`](#SelectionCriterionType.FullyDefeaturedEdges)                             |    |
| [`FullyDefeaturedFaces`](#SelectionCriterionType.FullyDefeaturedFaces)                             |    |
| [`SeamWeldNormal`](#SelectionCriterionType.SeamWeldNormal)                                         |    |
| [`SeamWeldAngle`](#SelectionCriterionType.SeamWeldAngle)                                           |    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums import SelectionCriterionType
```

## Attribute detail

### SelectionCriterionType.Size *= 1*

### SelectionCriterionType.Type *= 2*

### SelectionCriterionType.LocationX *= 3*

### SelectionCriterionType.LocationY *= 4*

### SelectionCriterionType.LocationZ *= 5*

### SelectionCriterionType.FaceConnections *= 6*

### SelectionCriterionType.CADAttribute *= 7*

### SelectionCriterionType.Radius *= 8*

### SelectionCriterionType.NamedSelection *= 9*

### SelectionCriterionType.NodeNumber *= 10*

### SelectionCriterionType.Material *= 11*

### SelectionCriterionType.Thickness *= 12*

### SelectionCriterionType.OffsetMode *= 13*

### SelectionCriterionType.Distance *= 14*

### SelectionCriterionType.ElementNumber *= 15*

### SelectionCriterionType.ElementQuality *= 16*

### SelectionCriterionType.AnyNode *= 17*

### SelectionCriterionType.AllNodes *= 18*

### SelectionCriterionType.AspectRatio *= 19*

### SelectionCriterionType.JacobianRatio *= 20*

### SelectionCriterionType.WarpingFactor *= 21*

### SelectionCriterionType.ParallelDeviation *= 22*

### SelectionCriterionType.Skewness *= 23*

### SelectionCriterionType.OrthogonalQuality *= 24*

### SelectionCriterionType.Volume *= 25*

### SelectionCriterionType.Area *= 26*

### SelectionCriterionType.AnalysisPly *= 27*

### SelectionCriterionType.SharedAcrossParts *= 28*

### SelectionCriterionType.Name *= 29*

### SelectionCriterionType.ElementConnections *= 30*

### SelectionCriterionType.EdgeConnections *= 31*

### SelectionCriterionType.AnyVertex *= 32*

### SelectionCriterionType.AllVertices *= 33*

### SelectionCriterionType.AnyEdge *= 34*

### SelectionCriterionType.AllEdges *= 35*

### SelectionCriterionType.ImportedTrace *= 36*

### SelectionCriterionType.SharedAcrossBodies *= 37*

### SelectionCriterionType.MaximumCornerAngle *= 38*

### SelectionCriterionType.MinimumLength *= 39*

### SelectionCriterionType.JacobianRatioCornerNodes *= 40*

### SelectionCriterionType.JacobianRatioGaussPoints *= 41*

### SelectionCriterionType.CrossSection *= 42*

### SelectionCriterionType.NormalTo *= 43*

### SelectionCriterionType.ExcludeSharedFaces *= 44*

### SelectionCriterionType.IncludeSharedFaces *= 45*

### SelectionCriterionType.WeldFeatures *= 46*

### SelectionCriterionType.WithinBody *= 47*

### SelectionCriterionType.SeamWeld *= 48*

### SelectionCriterionType.SeamWeldHAZ1 *= 49*

### SelectionCriterionType.SeamWeldHAZ2 *= 50*

### SelectionCriterionType.SeamWeldHAZ3 *= 51*

### SelectionCriterionType.SeamWeldHAZAll *= 52*

### SelectionCriterionType.SelfIntersectingMesh *= 53*

### SelectionCriterionType.BodyInterferenceMesh *= 54*

### SelectionCriterionType.ExtEdgeFaceLoop *= 55*

### SelectionCriterionType.ExtEdgeNodeLoop *= 56*

### SelectionCriterionType.SharpAngleMesh *= 57*

### SelectionCriterionType.MinimumTriAngle *= 58*

### SelectionCriterionType.MaximumTriAngle *= 59*

### SelectionCriterionType.MinimumQuadAngle *= 60*

### SelectionCriterionType.MaximumQuadAngle *= 61*

### SelectionCriterionType.WarpingAngle *= 62*

### SelectionCriterionType.TetCollapse *= 63*

### SelectionCriterionType.AspectRatioExplicit *= 64*

### SelectionCriterionType.MinimumMeshEdgeLength *= 65*

### SelectionCriterionType.MaximumMeshEdgeLength *= 66*

### SelectionCriterionType.MinimumLengthLSDyna *= 67*

### SelectionCriterionType.PartiallyDefeaturedEdges *= 68*

### SelectionCriterionType.FullyDefeaturedVertices *= 69*

### SelectionCriterionType.FullyDefeaturedEdges *= 70*

### SelectionCriterionType.FullyDefeaturedFaces *= 71*

### SelectionCriterionType.SeamWeldNormal *= 72*

### SelectionCriterionType.SeamWeldAngle *= 73*
