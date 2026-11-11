# `OutcomeType`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType"></a>

#### *class* Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

This enum is referenced in the “Outcome” tree node and reflects the type of outcome being configured. Based on the type of an outcome different rules are applied which define the applicable list of outcome data to be used.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| ----------------------------------------------------------------------------------------------------------- |
| [`AdvancedTessellationDiagnostics`](#OutcomeType.AdvancedTessellationDiagnostics) |
| [`AdvancedTopologyDiagnostics`](#OutcomeType.AdvancedTopologyDiagnostics) |
| [`CSVProcessingInfo`](#OutcomeType.CSVProcessingInfo) |
| [`Checkpoint`](#OutcomeType.Checkpoint) |
| [`Custom`](#OutcomeType.Custom) |
| [`CyclicRegionDiagnostics`](#OutcomeType.CyclicRegionDiagnostics) |
| [`DomainStatistics`](#OutcomeType.DomainStatistics) |
| [`EdgeZoneScope`](#OutcomeType.EdgeZoneScope) |
| [`EnclosureExternalScope`](#OutcomeType.EnclosureExternalScope) |
| [`EnclosureInternalScope`](#OutcomeType.EnclosureInternalScope) |
| [`EnclosureScope`](#OutcomeType.EnclosureScope) |
| [`EvaluatedInputScope`](#OutcomeType.EvaluatedInputScope) |
| [`ExtrusionEndScope`](#OutcomeType.ExtrusionEndScope) |
| [`ExtrusionStartScope`](#OutcomeType.ExtrusionStartScope) |
| [`FaceZoneScope`](#OutcomeType.FaceZoneScope) |
| [`FailedTopology`](#OutcomeType.FailedTopology) |
| [`FailureInfo`](#OutcomeType.FailureInfo) |
| [`InternalVolumeZoneScope`](#OutcomeType.InternalVolumeZoneScope) |
| [`MergeNodes`](#OutcomeType.MergeNodes) |
| [`MeshStatistics`](#OutcomeType.MeshStatistics) |
| [`MultiZoneSurfaceMesherDiagnostics`](#OutcomeType.MultiZoneSurfaceMesherDiagnostics) |
| [`MultiZoneVolumeMesherDiagnostics`](#OutcomeType.MultiZoneVolumeMesherDiagnostics) |
| [`NewTopology`](#OutcomeType.NewTopology) |
| [`NonStackableBodies`](#OutcomeType.NonStackableBodies) |
| [`NonStackableEdges`](#OutcomeType.NonStackableEdges) |
| [`NonStackableFaces`](#OutcomeType.NonStackableFaces) |
| [`Performance`](#OutcomeType.Performance) |
| [`PreviewCyclicRegion`](#OutcomeType.PreviewCyclicRegion) |
| [`PreviewMorph`](#OutcomeType.PreviewMorph) |
| [`PreviewResolveSurfaceOverlaps`](#OutcomeType.PreviewResolveSurfaceOverlaps) |
| [`PreviewSplitVolumes`](#OutcomeType.PreviewSplitVolumes) |
| [`PreviewSurfaceMesher`](#OutcomeType.PreviewSurfaceMesher) |
| [`PythonTraceback`](#OutcomeType.PythonTraceback) |
| [`QualityMetrics`](#OutcomeType.QualityMetrics) |
| [`Recording`](#OutcomeType.Recording) |
| [`Scope`](#OutcomeType.Scope) |
| [`SizeFieldName`](#OutcomeType.SizeFieldName) |
| [`SolderBallBottomPad`](#OutcomeType.SolderBallBottomPad) |
| [`SolderBallTopPad`](#OutcomeType.SolderBallTopPad) |
| [`StackerBaseEdge`](#OutcomeType.StackerBaseEdge) |
| [`StackerBaseFace`](#OutcomeType.StackerBaseFace) |
| [`StackerDiagnostics`](#OutcomeType.StackerDiagnostics) |
| [`StackerSeedFace`](#OutcomeType.StackerSeedFace) |
| [`SurfaceDiagnostics`](#OutcomeType.SurfaceDiagnostics) |
| [`TopologyCountChange`](#OutcomeType.TopologyCountChange) |
| [`TopologyDiagnostics`](#OutcomeType.TopologyDiagnostics) |
| [`TubeSplittingCaps`](#OutcomeType.TubeSplittingCaps) |
| [`TubeSplittingFaces`](#OutcomeType.TubeSplittingFaces) |
| [`TubeSplittingVolumes`](#OutcomeType.TubeSplittingVolumes) |
| [`Undefined`](#OutcomeType.Undefined) |
| [`ValidateMeshAspectRatioWarning`](#OutcomeType.ValidateMeshAspectRatioWarning) |
| [`ValidateMeshElementQualityWarning`](#OutcomeType.ValidateMeshElementQualityWarning) |
| [`ValidateMeshError`](#OutcomeType.ValidateMeshError) |
| [`ValidateMeshJacobianRatioCornerNodesWarning`](#OutcomeType.ValidateMeshJacobianRatioCornerNodesWarning) |
| [`ValidateMeshJacobianRatioGaussPointsWarning`](#OutcomeType.ValidateMeshJacobianRatioGaussPointsWarning) |
| [`ValidateMeshJacobianRatioMAPDLWarning`](#OutcomeType.ValidateMeshJacobianRatioMAPDLWarning) |
| [`ValidateMeshSkewnessWarning`](#OutcomeType.ValidateMeshSkewnessWarning) |
| [`ValidateMeshTetCollapseWarning`](#OutcomeType.ValidateMeshTetCollapseWarning) |
| [`ValidateMeshWarning`](#OutcomeType.ValidateMeshWarning) |
| [`ValidateMeshWarpingAngleWarning`](#OutcomeType.ValidateMeshWarpingAngleWarning) |
| [`VolumeZoneScope`](#OutcomeType.VolumeZoneScope) |
| [`WarningInfo`](#OutcomeType.WarningInfo) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="OutcomeType.AdvancedTessellationDiagnostics"></a>

### OutcomeType.AdvancedTessellationDiagnostics *= 10*

<a id="OutcomeType.AdvancedTopologyDiagnostics"></a>

### OutcomeType.AdvancedTopologyDiagnostics *= 37*

<a id="OutcomeType.CSVProcessingInfo"></a>

### OutcomeType.CSVProcessingInfo *= 30*

<a id="OutcomeType.Checkpoint"></a>

### OutcomeType.Checkpoint *= 3*

<a id="OutcomeType.Custom"></a>

### OutcomeType.Custom *= 1*

<a id="OutcomeType.CyclicRegionDiagnostics"></a>

### OutcomeType.CyclicRegionDiagnostics *= 11*

<a id="OutcomeType.DomainStatistics"></a>

### OutcomeType.DomainStatistics *= 61*

<a id="OutcomeType.EdgeZoneScope"></a>

### OutcomeType.EdgeZoneScope *= 19*

<a id="OutcomeType.EnclosureExternalScope"></a>

### OutcomeType.EnclosureExternalScope *= 15*

<a id="OutcomeType.EnclosureInternalScope"></a>

### OutcomeType.EnclosureInternalScope *= 14*

<a id="OutcomeType.EnclosureScope"></a>

### OutcomeType.EnclosureScope *= 13*

<a id="OutcomeType.EvaluatedInputScope"></a>

### OutcomeType.EvaluatedInputScope *= 62*

<a id="OutcomeType.ExtrusionEndScope"></a>

### OutcomeType.ExtrusionEndScope *= 17*

<a id="OutcomeType.ExtrusionStartScope"></a>

### OutcomeType.ExtrusionStartScope *= 16*

<a id="OutcomeType.FaceZoneScope"></a>

### OutcomeType.FaceZoneScope *= 20*

<a id="OutcomeType.FailedTopology"></a>

### OutcomeType.FailedTopology *= 39*

<a id="OutcomeType.FailureInfo"></a>

### OutcomeType.FailureInfo *= 12*

<a id="OutcomeType.InternalVolumeZoneScope"></a>

### OutcomeType.InternalVolumeZoneScope *= 22*

<a id="OutcomeType.MergeNodes"></a>

### OutcomeType.MergeNodes *= 31*

<a id="OutcomeType.MeshStatistics"></a>

### OutcomeType.MeshStatistics *= 60*

<a id="OutcomeType.MultiZoneSurfaceMesherDiagnostics"></a>

### OutcomeType.MultiZoneSurfaceMesherDiagnostics *= 48*

<a id="OutcomeType.MultiZoneVolumeMesherDiagnostics"></a>

### OutcomeType.MultiZoneVolumeMesherDiagnostics *= 47*

<a id="OutcomeType.NewTopology"></a>

### OutcomeType.NewTopology *= 38*

<a id="OutcomeType.NonStackableBodies"></a>

### OutcomeType.NonStackableBodies *= 26*

<a id="OutcomeType.NonStackableEdges"></a>

### OutcomeType.NonStackableEdges *= 28*

<a id="OutcomeType.NonStackableFaces"></a>

### OutcomeType.NonStackableFaces *= 27*

<a id="OutcomeType.Performance"></a>

### OutcomeType.Performance *= 2*

<a id="OutcomeType.PreviewCyclicRegion"></a>

### OutcomeType.PreviewCyclicRegion *= 44*

<a id="OutcomeType.PreviewMorph"></a>

### OutcomeType.PreviewMorph *= 40*

<a id="OutcomeType.PreviewResolveSurfaceOverlaps"></a>

### OutcomeType.PreviewResolveSurfaceOverlaps *= 42*

<a id="OutcomeType.PreviewSplitVolumes"></a>

### OutcomeType.PreviewSplitVolumes *= 43*

<a id="OutcomeType.PreviewSurfaceMesher"></a>

### OutcomeType.PreviewSurfaceMesher *= 41*

<a id="OutcomeType.PythonTraceback"></a>

### OutcomeType.PythonTraceback *= 18*

<a id="OutcomeType.QualityMetrics"></a>

### OutcomeType.QualityMetrics *= 7*

<a id="OutcomeType.Recording"></a>

### OutcomeType.Recording *= 6*

<a id="OutcomeType.Scope"></a>

### OutcomeType.Scope *= 4*

<a id="OutcomeType.SizeFieldName"></a>

### OutcomeType.SizeFieldName *= 5*

<a id="OutcomeType.SolderBallBottomPad"></a>

### OutcomeType.SolderBallBottomPad *= 46*

<a id="OutcomeType.SolderBallTopPad"></a>

### OutcomeType.SolderBallTopPad *= 45*

<a id="OutcomeType.StackerBaseEdge"></a>

### OutcomeType.StackerBaseEdge *= 24*

<a id="OutcomeType.StackerBaseFace"></a>

### OutcomeType.StackerBaseFace *= 23*

<a id="OutcomeType.StackerDiagnostics"></a>

### OutcomeType.StackerDiagnostics *= 32*

<a id="OutcomeType.StackerSeedFace"></a>

### OutcomeType.StackerSeedFace *= 25*

<a id="OutcomeType.SurfaceDiagnostics"></a>

### OutcomeType.SurfaceDiagnostics *= 8*

<a id="OutcomeType.TopologyCountChange"></a>

### OutcomeType.TopologyCountChange *= 36*

<a id="OutcomeType.TopologyDiagnostics"></a>

### OutcomeType.TopologyDiagnostics *= 9*

<a id="OutcomeType.TubeSplittingCaps"></a>

### OutcomeType.TubeSplittingCaps *= 35*

<a id="OutcomeType.TubeSplittingFaces"></a>

### OutcomeType.TubeSplittingFaces *= 33*

<a id="OutcomeType.TubeSplittingVolumes"></a>

### OutcomeType.TubeSplittingVolumes *= 34*

<a id="OutcomeType.Undefined"></a>

### OutcomeType.Undefined *= 0*

<a id="OutcomeType.ValidateMeshAspectRatioWarning"></a>

### OutcomeType.ValidateMeshAspectRatioWarning *= 53*

<a id="OutcomeType.ValidateMeshElementQualityWarning"></a>

### OutcomeType.ValidateMeshElementQualityWarning *= 52*

<a id="OutcomeType.ValidateMeshError"></a>

### OutcomeType.ValidateMeshError *= 49*

<a id="OutcomeType.ValidateMeshJacobianRatioCornerNodesWarning"></a>

### OutcomeType.ValidateMeshJacobianRatioCornerNodesWarning *= 55*

<a id="OutcomeType.ValidateMeshJacobianRatioGaussPointsWarning"></a>

### OutcomeType.ValidateMeshJacobianRatioGaussPointsWarning *= 56*

<a id="OutcomeType.ValidateMeshJacobianRatioMAPDLWarning"></a>

### OutcomeType.ValidateMeshJacobianRatioMAPDLWarning *= 54*

<a id="OutcomeType.ValidateMeshSkewnessWarning"></a>

### OutcomeType.ValidateMeshSkewnessWarning *= 51*

<a id="OutcomeType.ValidateMeshTetCollapseWarning"></a>

### OutcomeType.ValidateMeshTetCollapseWarning *= 57*

<a id="OutcomeType.ValidateMeshWarning"></a>

### OutcomeType.ValidateMeshWarning *= 50*

<a id="OutcomeType.ValidateMeshWarpingAngleWarning"></a>

### OutcomeType.ValidateMeshWarpingAngleWarning *= 58*

<a id="OutcomeType.VolumeZoneScope"></a>

### OutcomeType.VolumeZoneScope *= 21*

<a id="OutcomeType.WarningInfo"></a>

### OutcomeType.WarningInfo *= 29*


