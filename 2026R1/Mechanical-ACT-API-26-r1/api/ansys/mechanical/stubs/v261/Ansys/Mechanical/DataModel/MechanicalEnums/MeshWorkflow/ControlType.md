# `ControlType`

<a id="ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType"></a>

#### *class* Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

To select the mesh workflow control type.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| ----------------------------------------------------------------------------------------------------------- |
| [`AddPrescribedPoints`](#ControlType.AddPrescribedPoints) |
| [`AddPrescribedPointsFromFile`](#ControlType.AddPrescribedPointsFromFile) |
| [`AdvancedScopeMorphing`](#ControlType.AdvancedScopeMorphing) |
| [`AdvancedSolverMorphing`](#ControlType.AdvancedSolverMorphing) |
| [`AutoRepair`](#ControlType.AutoRepair) |
| [`Checkpoint`](#ControlType.Checkpoint) |
| [`ConstantSizeMultiZoneSurfaceMesher`](#ControlType.ConstantSizeMultiZoneSurfaceMesher) |
| [`ConstantSizeMultiZoneVolumeMesher`](#ControlType.ConstantSizeMultiZoneVolumeMesher) |
| [`ConstantSizeSurfaceMesh`](#ControlType.ConstantSizeSurfaceMesh) |
| [`ConstantSizeVolumeMesh`](#ControlType.ConstantSizeVolumeMesh) |
| [`ConstantSizeWrap`](#ControlType.ConstantSizeWrap) |
| [`CuboidalEnclosure`](#ControlType.CuboidalEnclosure) |
| [`CustomNamesEnclosure`](#ControlType.CustomNamesEnclosure) |
| [`CustomNamesExtrusion`](#ControlType.CustomNamesExtrusion) |
| [`CustomNamesWrap`](#ControlType.CustomNamesWrap) |
| [`CylindricalScalingMorphing`](#ControlType.CylindricalScalingMorphing) |
| [`Delete`](#ControlType.Delete) |
| [`EdgeBiasingMultiZoneMesher`](#ControlType.EdgeBiasingMultiZoneMesher) |
| [`EdgeSuppression`](#ControlType.EdgeSuppression) |
| [`EdgesOfFacesRepair`](#ControlType.EdgesOfFacesRepair) |
| [`Extrusion`](#ControlType.Extrusion) |
| [`FaceMerging`](#ControlType.FaceMerging) |
| [`FacePinching`](#ControlType.FacePinching) |
| [`HemisphereEnclosure`](#ControlType.HemisphereEnclosure) |
| [`HoleFilling`](#ControlType.HoleFilling) |
| [`HolePatching`](#ControlType.HolePatching) |
| [`ImproveSurfaceMeshProjectionOnGeometry`](#ControlType.ImproveSurfaceMeshProjectionOnGeometry) |
| [`ImproveSurfaceMeshQuadsToTrianglesSplitting`](#ControlType.ImproveSurfaceMeshQuadsToTrianglesSplitting) |
| [`ImproveSurfaceMeshSecondOrderConversion`](#ControlType.ImproveSurfaceMeshSecondOrderConversion) |
| [`ImproveVolumeMeshAutoNodeMove`](#ControlType.ImproveVolumeMeshAutoNodeMove) |
| [`ImproveVolumeMeshSecondOrderConversion`](#ControlType.ImproveVolumeMeshSecondOrderConversion) |
| [`InteriorEdgeSuppression`](#ControlType.InteriorEdgeSuppression) |
| [`InteriorVertexDeletion`](#ControlType.InteriorVertexDeletion) |
| [`IrregularShapeConvexEnclosure`](#ControlType.IrregularShapeConvexEnclosure) |
| [`IrregularShapeHemiConvexEnclosure`](#ControlType.IrregularShapeHemiConvexEnclosure) |
| [`LabelAdditionByProximity`](#ControlType.LabelAdditionByProximity) |
| [`LabelAdditionByScope`](#ControlType.LabelAdditionByScope) |
| [`MappedMeshingMultiZoneMesher`](#ControlType.MappedMeshingMultiZoneMesher) |
| [`MaterialPoint`](#ControlType.MaterialPoint) |
| [`MergeNodes`](#ControlType.MergeNodes) |
| [`MeshExport`](#ControlType.MeshExport) |
| [`MeshImport`](#ControlType.MeshImport) |
| [`MeshReplication`](#ControlType.MeshReplication) |
| [`NumberOfDivisionsOnEdges`](#ControlType.NumberOfDivisionsOnEdges) |
| [`OffsetMorphing`](#ControlType.OffsetMorphing) |
| [`PartEnclosure`](#ControlType.PartEnclosure) |
| [`PartialDefeature`](#ControlType.PartialDefeature) |
| [`PartsMerging`](#ControlType.PartsMerging) |
| [`QuadBoundaryLayer`](#ControlType.QuadBoundaryLayer) |
| [`QuadMeshAdvancedOptions`](#ControlType.QuadMeshAdvancedOptions) |
| [`RecordingMorphing`](#ControlType.RecordingMorphing) |
| [`RotationMorphing`](#ControlType.RotationMorphing) |
| [`ScalingExtrusion`](#ControlType.ScalingExtrusion) |
| [`SetSOLSH190`](#ControlType.SetSOLSH190) |
| [`SharpAngleFaceRemoval`](#ControlType.SharpAngleFaceRemoval) |
| [`ShortEdgeCollapse`](#ControlType.ShortEdgeCollapse) |
| [`SizeFieldMultiZoneSurfaceMesher`](#ControlType.SizeFieldMultiZoneSurfaceMesher) |
| [`SizeFieldMultiZoneVolumeMesher`](#ControlType.SizeFieldMultiZoneVolumeMesher) |
| [`SizeFieldWrap`](#ControlType.SizeFieldWrap) |
| [`SolderBallCreation`](#ControlType.SolderBallCreation) |
| [`SphericalEnclosure`](#ControlType.SphericalEnclosure) |
| [`SphericalScalingMorphing`](#ControlType.SphericalScalingMorphing) |
| [`StackableBodiesDetection`](#ControlType.StackableBodiesDetection) |
| [`StackerDiagnostics`](#ControlType.StackerDiagnostics) |
| [`StackerVolumeFlattening`](#ControlType.StackerVolumeFlattening) |
| [`StackerVolumeMeshing`](#ControlType.StackerVolumeMeshing) |
| [`SurfaceDiagnostics`](#ControlType.SurfaceDiagnostics) |
| [`ThinFaceRemoval`](#ControlType.ThinFaceRemoval) |
| [`TopologyCreation`](#ControlType.TopologyCreation) |
| [`TopologyDeletion`](#ControlType.TopologyDeletion) |
| [`TopologyDiagnostics`](#ControlType.TopologyDiagnostics) |
| [`TopologyProtection`](#ControlType.TopologyProtection) |
| [`TopologyProtectionMultiZoneMesher`](#ControlType.TopologyProtectionMultiZoneMesher) |
| [`TranslationMorphing`](#ControlType.TranslationMorphing) |
| [`UserNamesSolderBall`](#ControlType.UserNamesSolderBall) |
| [`UserNamesStackableBodiesDetection`](#ControlType.UserNamesStackableBodiesDetection) |
| [`UserNamesStackerVolumeFlattening`](#ControlType.UserNamesStackerVolumeFlattening) |
| [`UserNamesSurfaceDiagnostics`](#ControlType.UserNamesSurfaceDiagnostics) |
| [`UserNamesTopologyDiagnostics`](#ControlType.UserNamesTopologyDiagnostics) |
| [`UserNamesVolumetricSizeField`](#ControlType.UserNamesVolumetricSizeField) |
| [`VolumesMerging`](#ControlType.VolumesMerging) |
| [`VolumetricSizeFieldBOI`](#ControlType.VolumetricSizeFieldBOI) |
| [`VolumetricSizeFieldCurvature`](#ControlType.VolumetricSizeFieldCurvature) |
| [`VolumetricSizeFieldLoad`](#ControlType.VolumetricSizeFieldLoad) |
| [`VolumetricSizeFieldMaxSize`](#ControlType.VolumetricSizeFieldMaxSize) |
| [`VolumetricSizeFieldProximity`](#ControlType.VolumetricSizeFieldProximity) |
| [`WrapSpecificSurfaceMesh`](#ControlType.WrapSpecificSurfaceMesh) |
| [`ZoneMaterialAssignment`](#ControlType.ZoneMaterialAssignment) |
| [`ZoneThicknessAssignment`](#ControlType.ZoneThicknessAssignment) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="ControlType.AddPrescribedPoints"></a>

### ControlType.AddPrescribedPoints *= 96*

<a id="ControlType.AddPrescribedPointsFromFile"></a>

### ControlType.AddPrescribedPointsFromFile *= 97*

<a id="ControlType.AdvancedScopeMorphing"></a>

### ControlType.AdvancedScopeMorphing *= 59*

<a id="ControlType.AdvancedSolverMorphing"></a>

### ControlType.AdvancedSolverMorphing *= 60*

<a id="ControlType.AutoRepair"></a>

### ControlType.AutoRepair *= 137*

<a id="ControlType.Checkpoint"></a>

### ControlType.Checkpoint *= 3*

<a id="ControlType.ConstantSizeMultiZoneSurfaceMesher"></a>

### ControlType.ConstantSizeMultiZoneSurfaceMesher *= 80*

<a id="ControlType.ConstantSizeMultiZoneVolumeMesher"></a>

### ControlType.ConstantSizeMultiZoneVolumeMesher *= 82*

<a id="ControlType.ConstantSizeSurfaceMesh"></a>

### ControlType.ConstantSizeSurfaceMesh *= 68*

<a id="ControlType.ConstantSizeVolumeMesh"></a>

### ControlType.ConstantSizeVolumeMesh *= 76*

<a id="ControlType.ConstantSizeWrap"></a>

### ControlType.ConstantSizeWrap *= 98*

<a id="ControlType.CuboidalEnclosure"></a>

### ControlType.CuboidalEnclosure *= 10*

<a id="ControlType.CustomNamesEnclosure"></a>

### ControlType.CustomNamesEnclosure *= 13*

<a id="ControlType.CustomNamesExtrusion"></a>

### ControlType.CustomNamesExtrusion *= 29*

<a id="ControlType.CustomNamesWrap"></a>

### ControlType.CustomNamesWrap *= 102*

<a id="ControlType.CylindricalScalingMorphing"></a>

### ControlType.CylindricalScalingMorphing *= 42*

<a id="ControlType.Delete"></a>

### ControlType.Delete *= 6*

<a id="ControlType.EdgeBiasingMultiZoneMesher"></a>

### ControlType.EdgeBiasingMultiZoneMesher *= 85*

<a id="ControlType.EdgeSuppression"></a>

### ControlType.EdgeSuppression *= 129*

<a id="ControlType.EdgesOfFacesRepair"></a>

### ControlType.EdgesOfFacesRepair *= 140*

<a id="ControlType.Extrusion"></a>

### ControlType.Extrusion *= 27*

<a id="ControlType.FaceMerging"></a>

### ControlType.FaceMerging *= 128*

<a id="ControlType.FacePinching"></a>

### ControlType.FacePinching *= 134*

<a id="ControlType.HemisphereEnclosure"></a>

### ControlType.HemisphereEnclosure *= 9*

<a id="ControlType.HoleFilling"></a>

### ControlType.HoleFilling *= 31*

<a id="ControlType.HolePatching"></a>

### ControlType.HolePatching *= 33*

<a id="ControlType.ImproveSurfaceMeshProjectionOnGeometry"></a>

### ControlType.ImproveSurfaceMeshProjectionOnGeometry *= 91*

<a id="ControlType.ImproveSurfaceMeshQuadsToTrianglesSplitting"></a>

### ControlType.ImproveSurfaceMeshQuadsToTrianglesSplitting *= 90*

<a id="ControlType.ImproveSurfaceMeshSecondOrderConversion"></a>

### ControlType.ImproveSurfaceMeshSecondOrderConversion *= 89*

<a id="ControlType.ImproveVolumeMeshAutoNodeMove"></a>

### ControlType.ImproveVolumeMeshAutoNodeMove *= 93*

<a id="ControlType.ImproveVolumeMeshSecondOrderConversion"></a>

### ControlType.ImproveVolumeMeshSecondOrderConversion *= 94*

<a id="ControlType.InteriorEdgeSuppression"></a>

### ControlType.InteriorEdgeSuppression *= 138*

<a id="ControlType.InteriorVertexDeletion"></a>

### ControlType.InteriorVertexDeletion *= 139*

<a id="ControlType.IrregularShapeConvexEnclosure"></a>

### ControlType.IrregularShapeConvexEnclosure *= 11*

<a id="ControlType.IrregularShapeHemiConvexEnclosure"></a>

### ControlType.IrregularShapeHemiConvexEnclosure *= 12*

<a id="ControlType.LabelAdditionByProximity"></a>

### ControlType.LabelAdditionByProximity *= 155*

<a id="ControlType.LabelAdditionByScope"></a>

### ControlType.LabelAdditionByScope *= 154*

<a id="ControlType.MappedMeshingMultiZoneMesher"></a>

### ControlType.MappedMeshingMultiZoneMesher *= 86*

<a id="ControlType.MaterialPoint"></a>

### ControlType.MaterialPoint *= 104*

<a id="ControlType.MergeNodes"></a>

### ControlType.MergeNodes *= 144*

<a id="ControlType.MeshExport"></a>

### ControlType.MeshExport *= 5*

<a id="ControlType.MeshImport"></a>

### ControlType.MeshImport *= 4*

<a id="ControlType.MeshReplication"></a>

### ControlType.MeshReplication *= 95*

<a id="ControlType.NumberOfDivisionsOnEdges"></a>

### ControlType.NumberOfDivisionsOnEdges *= 111*

<a id="ControlType.OffsetMorphing"></a>

### ControlType.OffsetMorphing *= 46*

<a id="ControlType.PartEnclosure"></a>

### ControlType.PartEnclosure *= 7*

<a id="ControlType.PartialDefeature"></a>

### ControlType.PartialDefeature *= 130*

<a id="ControlType.PartsMerging"></a>

### ControlType.PartsMerging *= 127*

<a id="ControlType.QuadBoundaryLayer"></a>

### ControlType.QuadBoundaryLayer *= 72*

<a id="ControlType.QuadMeshAdvancedOptions"></a>

### ControlType.QuadMeshAdvancedOptions *= 71*

<a id="ControlType.RecordingMorphing"></a>

### ControlType.RecordingMorphing *= 61*

<a id="ControlType.RotationMorphing"></a>

### ControlType.RotationMorphing *= 45*

<a id="ControlType.ScalingExtrusion"></a>

### ControlType.ScalingExtrusion *= 28*

<a id="ControlType.SetSOLSH190"></a>

### ControlType.SetSOLSH190 *= 18*

<a id="ControlType.SharpAngleFaceRemoval"></a>

### ControlType.SharpAngleFaceRemoval *= 133*

<a id="ControlType.ShortEdgeCollapse"></a>

### ControlType.ShortEdgeCollapse *= 132*

<a id="ControlType.SizeFieldMultiZoneSurfaceMesher"></a>

### ControlType.SizeFieldMultiZoneSurfaceMesher *= 81*

<a id="ControlType.SizeFieldMultiZoneVolumeMesher"></a>

### ControlType.SizeFieldMultiZoneVolumeMesher *= 83*

<a id="ControlType.SizeFieldWrap"></a>

### ControlType.SizeFieldWrap *= 101*

<a id="ControlType.SolderBallCreation"></a>

### ControlType.SolderBallCreation *= 179*

<a id="ControlType.SphericalEnclosure"></a>

### ControlType.SphericalEnclosure *= 8*

<a id="ControlType.SphericalScalingMorphing"></a>

### ControlType.SphericalScalingMorphing *= 43*

<a id="ControlType.StackableBodiesDetection"></a>

### ControlType.StackableBodiesDetection *= 145*

<a id="ControlType.StackerDiagnostics"></a>

### ControlType.StackerDiagnostics *= 147*

<a id="ControlType.StackerVolumeFlattening"></a>

### ControlType.StackerVolumeFlattening *= 108*

<a id="ControlType.StackerVolumeMeshing"></a>

### ControlType.StackerVolumeMeshing *= 110*

<a id="ControlType.SurfaceDiagnostics"></a>

### ControlType.SurfaceDiagnostics *= 149*

<a id="ControlType.ThinFaceRemoval"></a>

### ControlType.ThinFaceRemoval *= 131*

<a id="ControlType.TopologyCreation"></a>

### ControlType.TopologyCreation *= 19*

<a id="ControlType.TopologyDeletion"></a>

### ControlType.TopologyDeletion *= 20*

<a id="ControlType.TopologyDiagnostics"></a>

### ControlType.TopologyDiagnostics *= 151*

<a id="ControlType.TopologyProtection"></a>

### ControlType.TopologyProtection *= 136*

<a id="ControlType.TopologyProtectionMultiZoneMesher"></a>

### ControlType.TopologyProtectionMultiZoneMesher *= 88*

<a id="ControlType.TranslationMorphing"></a>

### ControlType.TranslationMorphing *= 44*

<a id="ControlType.UserNamesSolderBall"></a>

### ControlType.UserNamesSolderBall *= 180*

<a id="ControlType.UserNamesStackableBodiesDetection"></a>

### ControlType.UserNamesStackableBodiesDetection *= 146*

<a id="ControlType.UserNamesStackerVolumeFlattening"></a>

### ControlType.UserNamesStackerVolumeFlattening *= 109*

<a id="ControlType.UserNamesSurfaceDiagnostics"></a>

### ControlType.UserNamesSurfaceDiagnostics *= 150*

<a id="ControlType.UserNamesTopologyDiagnostics"></a>

### ControlType.UserNamesTopologyDiagnostics *= 152*

<a id="ControlType.UserNamesVolumetricSizeField"></a>

### ControlType.UserNamesVolumetricSizeField *= 21*

<a id="ControlType.VolumesMerging"></a>

### ControlType.VolumesMerging *= 34*

<a id="ControlType.VolumetricSizeFieldBOI"></a>

### ControlType.VolumetricSizeFieldBOI *= 26*

<a id="ControlType.VolumetricSizeFieldCurvature"></a>

### ControlType.VolumetricSizeFieldCurvature *= 24*

<a id="ControlType.VolumetricSizeFieldLoad"></a>

### ControlType.VolumetricSizeFieldLoad *= 22*

<a id="ControlType.VolumetricSizeFieldMaxSize"></a>

### ControlType.VolumetricSizeFieldMaxSize *= 23*

<a id="ControlType.VolumetricSizeFieldProximity"></a>

### ControlType.VolumetricSizeFieldProximity *= 25*

<a id="ControlType.WrapSpecificSurfaceMesh"></a>

### ControlType.WrapSpecificSurfaceMesh *= 70*

<a id="ControlType.ZoneMaterialAssignment"></a>

### ControlType.ZoneMaterialAssignment *= 14*

<a id="ControlType.ZoneThicknessAssignment"></a>

### ControlType.ZoneThicknessAssignment *= 15*


