# `ControlType`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType"></a>

#### *class* Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

To select the mesh workflow control type.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| --------------------------------------------------------------------------------------------------------------- |
| [`AddPrescribedPoints`](#ControlType.AddPrescribedPoints) |
| [`AddPrescribedPointsFromFile`](#ControlType.AddPrescribedPointsFromFile) |
| [`AdvancedScopeMorphing`](#ControlType.AdvancedScopeMorphing) |
| [`AdvancedSolverMorphing`](#ControlType.AdvancedSolverMorphing) |
| [`AdvancedTessellationDiagnostics`](#ControlType.AdvancedTessellationDiagnostics) |
| [`AdvancedTopologyDiagnostics`](#ControlType.AdvancedTopologyDiagnostics) |
| [`AnnularHoleFilling`](#ControlType.AnnularHoleFilling) |
| [`AspectRatioValidation`](#ControlType.AspectRatioValidation) |
| [`AutoBlock`](#ControlType.AutoBlock) |
| [`AutoBlockAutoPlanarCut`](#ControlType.AutoBlockAutoPlanarCut) |
| [`AutoBlockExistingLoopsCut`](#ControlType.AutoBlockExistingLoopsCut) |
| [`AutoBlockManualPlanarCut`](#ControlType.AutoBlockManualPlanarCut) |
| [`AutoBlockUserNames`](#ControlType.AutoBlockUserNames) |
| [`AutoNodeMove`](#ControlType.AutoNodeMove) |
| [`AutoQuadConversion`](#ControlType.AutoQuadConversion) |
| [`AutoQuadHoleAndFeatureTreatment`](#ControlType.AutoQuadHoleAndFeatureTreatment) |
| [`AutoQuadMeshing`](#ControlType.AutoQuadMeshing) |
| [`AutoQuadTopologyDefeature`](#ControlType.AutoQuadTopologyDefeature) |
| [`AutoQuadTopologyRepair`](#ControlType.AutoQuadTopologyRepair) |
| [`AutoRepair`](#ControlType.AutoRepair) |
| [`CADImport`](#ControlType.CADImport) |
| [`CADOptionsDiscovery`](#ControlType.CADOptionsDiscovery) |
| [`CADOptionsDomainCreation`](#ControlType.CADOptionsDomainCreation) |
| [`CADOptionsParasolid`](#ControlType.CADOptionsParasolid) |
| [`CADOptionsSTL`](#ControlType.CADOptionsSTL) |
| [`CADOptionsStride`](#ControlType.CADOptionsStride) |
| [`CADOptionsWorkbench`](#ControlType.CADOptionsWorkbench) |
| [`CheckSlicedLayers`](#ControlType.CheckSlicedLayers) |
| [`Checkpoint`](#ControlType.Checkpoint) |
| [`Connect`](#Connect) |
| [`ConnectFacePairs`](#ControlType.ConnectFacePairs) |
| [`ConnectMultiTolerances`](#ControlType.ConnectMultiTolerances) |
| [`ConstantFidelityWrapper`](#ControlType.ConstantFidelityWrapper) |
| [`ConstantSizeEdgeMesher`](#ControlType.ConstantSizeEdgeMesher) |
| [`ConstantSizeMultiZoneSurfaceMesher`](#ControlType.ConstantSizeMultiZoneSurfaceMesher) |
| [`ConstantSizeMultiZoneVolumeMesher`](#ControlType.ConstantSizeMultiZoneVolumeMesher) |
| [`ConstantSizeSurfaceMesh`](#ControlType.ConstantSizeSurfaceMesh) |
| [`ConstantSizeVolumeMesh`](#ControlType.ConstantSizeVolumeMesh) |
| [`ConstantSizeWrap`](#ControlType.ConstantSizeWrap) |
| [`CuboidalEnclosure`](#ControlType.CuboidalEnclosure) |
| [`Custom`](#ControlType.Custom) |
| [`CustomNamesEnclosure`](#ControlType.CustomNamesEnclosure) |
| [`CustomNamesExtrusion`](#ControlType.CustomNamesExtrusion) |
| [`CustomNamesWrap`](#ControlType.CustomNamesWrap) |
| [`CyclicRegionDiagnostics`](#ControlType.CyclicRegionDiagnostics) |
| [`CylindricalScalingMorphing`](#ControlType.CylindricalScalingMorphing) |
| [`Delete`](#ControlType.Delete) |
| [`DeleteTrappedSlices`](#ControlType.DeleteTrappedSlices) |
| [`DetectClusters`](#ControlType.DetectClusters) |
| [`DetectContactPairs`](#ControlType.DetectContactPairs) |
| [`DomainStatistics`](#ControlType.DomainStatistics) |
| [`EdgeBiasingEdgeMesher`](#ControlType.EdgeBiasingEdgeMesher) |
| [`EdgeBiasingMultiZoneMesher`](#ControlType.EdgeBiasingMultiZoneMesher) |
| [`EdgeMerging`](#ControlType.EdgeMerging) |
| [`EdgeSplittingLocation`](#ControlType.EdgeSplittingLocation) |
| [`EdgeSplittingNumberOfSegments`](#ControlType.EdgeSplittingNumberOfSegments) |
| [`EdgeSplittingUserNames`](#ControlType.EdgeSplittingUserNames) |
| [`EdgeSuppression`](#ControlType.EdgeSuppression) |
| [`EdgesOfFacesRepair`](#ControlType.EdgesOfFacesRepair) |
| [`EditMeshMergeFaces`](#ControlType.EditMeshMergeFaces) |
| [`EditMeshSeparateFaces`](#ControlType.EditMeshSeparateFaces) |
| [`ElementQualityValidation`](#ControlType.ElementQualityValidation) |
| [`Extrusion`](#ControlType.Extrusion) |
| [`FaceMerging`](#ControlType.FaceMerging) |
| [`FaceMergingControl`](#ControlType.FaceMergingControl) |
| [`FacePinching`](#ControlType.FacePinching) |
| [`FaceSplittingMidEdge`](#ControlType.FaceSplittingMidEdge) |
| [`FaceSplittingPlane`](#ControlType.FaceSplittingPlane) |
| [`FaceSplittingTwoVertices`](#ControlType.FaceSplittingTwoVertices) |
| [`FaceSplittingUserNames`](#ControlType.FaceSplittingUserNames) |
| [`FilletDetection`](#ControlType.FilletDetection) |
| [`FilletMorphing`](#ControlType.FilletMorphing) |
| [`FlexPCBMorphing`](#ControlType.FlexPCBMorphing) |
| [`FlexPCBMorphingBendDefinition`](#ControlType.FlexPCBMorphingBendDefinition) |
| [`FlexPCBMorphingBendDefinitionEdgeBased`](#ControlType.FlexPCBMorphingBendDefinitionEdgeBased) |
| [`FlexPCBMorphingBendDefinitionPointBased`](#ControlType.FlexPCBMorphingBendDefinitionPointBased) |
| [`Fuse`](#ControlType.Fuse) |
| [`FuseMultiTolerances`](#ControlType.FuseMultiTolerances) |
| [`GeometricVolumeMesher`](#ControlType.GeometricVolumeMesher) |
| [`GeometryFidelity`](#GeometryFidelity) |
| [`GrainsGeneration`](#ControlType.GrainsGeneration) |
| [`GrainsGenerationCylinder`](#ControlType.GrainsGenerationCylinder) |
| [`GrainsGenerationEllipsoid`](#ControlType.GrainsGenerationEllipsoid) |
| [`GrainsGenerationHex`](#ControlType.GrainsGenerationHex) |
| [`GrainsGenerationSphere`](#ControlType.GrainsGenerationSphere) |
| [`HemiCuboidalEnclosure`](#ControlType.HemiCuboidalEnclosure) |
| [`HemisphereEnclosure`](#ControlType.HemisphereEnclosure) |
| [`HexDominant`](#ControlType.HexDominant) |
| [`HintMorphing`](#ControlType.HintMorphing) |
| [`HoleClosing`](#ControlType.HoleClosing) |
| [`HoleDetection`](#ControlType.HoleDetection) |
| [`HoleFilling`](#ControlType.HoleFilling) |
| [`HolePatching`](#ControlType.HolePatching) |
| [`IGASolverFileExport`](#ControlType.IGASolverFileExport) |
| [`IGASplineConversion`](#ControlType.IGASplineConversion) |
| [`ImageGeneration`](#ControlType.ImageGeneration) |
| [`ImageGenerationOrbitCamera`](#ControlType.ImageGenerationOrbitCamera) |
| [`ImageGenerationPointCamera`](#ControlType.ImageGenerationPointCamera) |
| [`ImproveSlicedPart`](#ControlType.ImproveSlicedPart) |
| [`ImproveSurfaceMeshCleanUp`](#ControlType.ImproveSurfaceMeshCleanUp) |
| [`ImproveSurfaceMeshProjectionOnGeometry`](#ControlType.ImproveSurfaceMeshProjectionOnGeometry) |
| [`ImproveSurfaceMeshQuadsToTrianglesSplitting`](#ControlType.ImproveSurfaceMeshQuadsToTrianglesSplitting) |
| [`ImproveSurfaceMeshSecondOrderConversion`](#ControlType.ImproveSurfaceMeshSecondOrderConversion) |
| [`ImproveTetrahedrons`](#ControlType.ImproveTetrahedrons) |
| [`ImproveVolumeMeshAutoNodeMove`](#ControlType.ImproveVolumeMeshAutoNodeMove) |
| [`ImproveVolumeMeshSecondOrderConversion`](#ControlType.ImproveVolumeMeshSecondOrderConversion) |
| [`InflationMultiZoneMesher`](#ControlType.InflationMultiZoneMesher) |
| [`Interactive`](#ControlType.Interactive) |
| [`InteriorEdgeSuppression`](#ControlType.InteriorEdgeSuppression) |
| [`InteriorVertexDeletion`](#ControlType.InteriorVertexDeletion) |
| [`IrregularShapeConvexEnclosure`](#ControlType.IrregularShapeConvexEnclosure) |
| [`IrregularShapeHemiConvexEnclosure`](#ControlType.IrregularShapeHemiConvexEnclosure) |
| [`JacobianRatioCornerNodesValidation`](#ControlType.JacobianRatioCornerNodesValidation) |
| [`JacobianRatioGaussPointsValidation`](#ControlType.JacobianRatioGaussPointsValidation) |
| [`JacobianRatioMAPDLValidation`](#ControlType.JacobianRatioMAPDLValidation) |
| [`LabelAdditionByExpression`](#ControlType.LabelAdditionByExpression) |
| [`LabelAdditionByProximity`](#ControlType.LabelAdditionByProximity) |
| [`LabelAdditionByScope`](#ControlType.LabelAdditionByScope) |
| [`LabelRemovalByScope`](#ControlType.LabelRemovalByScope) |
| [`LeakPrevention`](#ControlType.LeakPrevention) |
| [`LoadRecording`](#ControlType.LoadRecording) |
| [`MappedMeshingMultiZoneMesher`](#ControlType.MappedMeshingMultiZoneMesher) |
| [`MatchControlMultiZoneMesher`](#ControlType.MatchControlMultiZoneMesher) |
| [`MaterialPoint`](#ControlType.MaterialPoint) |
| [`MergeNodes`](#ControlType.MergeNodes) |
| [`MergeOverlappingFaces`](#ControlType.MergeOverlappingFaces) |
| [`MeshCheckValidation`](#ControlType.MeshCheckValidation) |
| [`MeshExport`](#ControlType.MeshExport) |
| [`MeshImport`](#ControlType.MeshImport) |
| [`MeshLayerCreation`](#ControlType.MeshLayerCreation) |
| [`MeshReplication`](#ControlType.MeshReplication) |
| [`MeshStatistics`](#ControlType.MeshStatistics) |
| [`MeshValidation`](#ControlType.MeshValidation) |
| [`NumberOfDivisionsOnEdges`](#ControlType.NumberOfDivisionsOnEdges) |
| [`NumenSurfaceMesher`](#ControlType.NumenSurfaceMesher) |
| [`OffsetMorphing`](#ControlType.OffsetMorphing) |
| [`PartEnclosure`](#ControlType.PartEnclosure) |
| [`PartialDefeature`](#ControlType.PartialDefeature) |
| [`PartsMerging`](#ControlType.PartsMerging) |
| [`PlaneProjectionMorphing`](#ControlType.PlaneProjectionMorphing) |
| [`PlaybackMorphing`](#ControlType.PlaybackMorphing) |
| [`PostSlicePart`](#ControlType.PostSlicePart) |
| [`PrismsAdvanced`](#ControlType.PrismsAdvanced) |
| [`PrismsGeneration`](#ControlType.PrismsGeneration) |
| [`PyPrimeMeshScript`](#ControlType.PyPrimeMeshScript) |
| [`PythonScript`](#ControlType.PythonScript) |
| [`PythonVariable`](#ControlType.PythonVariable) |
| [`QuadBoundaryLayer`](#ControlType.QuadBoundaryLayer) |
| [`QuadMeshAdvancedOptions`](#ControlType.QuadMeshAdvancedOptions) |
| [`RecordingMorphing`](#ControlType.RecordingMorphing) |
| [`RenameZone`](#ControlType.RenameZone) |
| [`ResolveIntersections`](#ControlType.ResolveIntersections) |
| [`ResolveSurfaceOverlaps`](#ControlType.ResolveSurfaceOverlaps) |
| [`ResolveSurfaceOverlaps_MultiTolerances`](#ControlType.ResolveSurfaceOverlaps_MultiTolerances) |
| [`RevertSurfaceOrientation`](#ControlType.RevertSurfaceOrientation) |
| [`Revolve`](#ControlType.Revolve) |
| [`RotationMorphing`](#ControlType.RotationMorphing) |
| [`SALEControlPoints`](#ControlType.SALEControlPoints) |
| [`SALETrim`](#ControlType.SALETrim) |
| [`SaveMorphing`](#ControlType.SaveMorphing) |
| [`ScalingExtrusion`](#ControlType.ScalingExtrusion) |
| [`SetSOLSH190`](#ControlType.SetSOLSH190) |
| [`Setup`](#ControlType.Setup) |
| [`SharpAngleFaceRemoval`](#ControlType.SharpAngleFaceRemoval) |
| [`ShortEdgeCollapse`](#ControlType.ShortEdgeCollapse) |
| [`SingleZoneCreation`](#ControlType.SingleZoneCreation) |
| [`SizeFieldEdgeMesher`](#ControlType.SizeFieldEdgeMesher) |
| [`SizeFieldMultiZoneSurfaceMesher`](#ControlType.SizeFieldMultiZoneSurfaceMesher) |
| [`SizeFieldMultiZoneVolumeMesher`](#ControlType.SizeFieldMultiZoneVolumeMesher) |
| [`SizeFieldSurfaceMesher`](#ControlType.SizeFieldSurfaceMesher) |
| [`SizeFieldVolumeMesher`](#ControlType.SizeFieldVolumeMesher) |
| [`SizeFieldWrap`](#ControlType.SizeFieldWrap) |
| [`SkewnessValidation`](#ControlType.SkewnessValidation) |
| [`SlidingConstraintLine`](#ControlType.SlidingConstraintLine) |
| [`SlidingConstraintPlane`](#ControlType.SlidingConstraintPlane) |
| [`SlidingConstraintSurface`](#ControlType.SlidingConstraintSurface) |
| [`SolderBallCreation`](#ControlType.SolderBallCreation) |
| [`SolidIGAGeometryImport`](#ControlType.SolidIGAGeometryImport) |
| [`SolidIGAPhysicalSpaceMapping`](#ControlType.SolidIGAPhysicalSpaceMapping) |
| [`SolidIGASolverFileImport`](#ControlType.SolidIGASolverFileImport) |
| [`SolidIGASplineCreation`](#ControlType.SolidIGASplineCreation) |
| [`SolidIGATetMeshCreation`](#ControlType.SolidIGATetMeshCreation) |
| [`SolidIGATetMeshRefinement`](#ControlType.SolidIGATetMeshRefinement) |
| [`SolidIGATriMeshCreation`](#ControlType.SolidIGATriMeshCreation) |
| [`SourceTargetMorphing`](#ControlType.SourceTargetMorphing) |
| [`SphericalEnclosure`](#ControlType.SphericalEnclosure) |
| [`SphericalScalingMorphing`](#ControlType.SphericalScalingMorphing) |
| [`StackableBodiesDetection`](#ControlType.StackableBodiesDetection) |
| [`StackerDiagnostics`](#ControlType.StackerDiagnostics) |
| [`StackerVolumeFlattening`](#ControlType.StackerVolumeFlattening) |
| [`StackerVolumeMeshing`](#ControlType.StackerVolumeMeshing) |
| [`SurfaceDiagnostics`](#ControlType.SurfaceDiagnostics) |
| [`SymmetryCyclicRegion`](#ControlType.SymmetryCyclicRegion) |
| [`SymmetryCyclicRegionGenericBoundaries`](#ControlType.SymmetryCyclicRegionGenericBoundaries) |
| [`TetCollapseValidation`](#ControlType.TetCollapseValidation) |
| [`ThinFaceRemoval`](#ControlType.ThinFaceRemoval) |
| [`TopologyCreation`](#ControlType.TopologyCreation) |
| [`TopologyDeletion`](#ControlType.TopologyDeletion) |
| [`TopologyDiagnostics`](#ControlType.TopologyDiagnostics) |
| [`TopologyMergeVolumes`](#ControlType.TopologyMergeVolumes) |
| [`TopologyProtection`](#ControlType.TopologyProtection) |
| [`TopologyProtectionMultiZoneMesher`](#ControlType.TopologyProtectionMultiZoneMesher) |
| [`TopologyValidation`](#ControlType.TopologyValidation) |
| [`TransformAligning`](#ControlType.TransformAligning) |
| [`TransformRotation`](#ControlType.TransformRotation) |
| [`TransformSphericalScaling`](#ControlType.TransformSphericalScaling) |
| [`TransformTranslation`](#ControlType.TransformTranslation) |
| [`TranslationMorphing`](#ControlType.TranslationMorphing) |
| [`TubeSplitting`](#ControlType.TubeSplitting) |
| [`Undefined`](#ControlType.Undefined) |
| [`UserNamesAdvancedTopologyDiagnostics`](#ControlType.UserNamesAdvancedTopologyDiagnostics) |
| [`UserNamesFailedTopology`](#ControlType.UserNamesFailedTopology) |
| [`UserNamesNewTopology`](#ControlType.UserNamesNewTopology) |
| [`UserNamesSolderBall`](#ControlType.UserNamesSolderBall) |
| [`UserNamesStackableBodiesDetection`](#ControlType.UserNamesStackableBodiesDetection) |
| [`UserNamesStackerVolumeFlattening`](#ControlType.UserNamesStackerVolumeFlattening) |
| [`UserNamesSurfaceDiagnostics`](#ControlType.UserNamesSurfaceDiagnostics) |
| [`UserNamesTopologyDiagnostics`](#ControlType.UserNamesTopologyDiagnostics) |
| [`UserNamesVolumetricSizeField`](#ControlType.UserNamesVolumetricSizeField) |
| [`Verticalize`](#ControlType.Verticalize) |
| [`VerticalizeAdvanced`](#ControlType.VerticalizeAdvanced) |
| [`VolumeExtraction`](#ControlType.VolumeExtraction) |
| [`VolumeSplittingAdvanced`](#ControlType.VolumeSplittingAdvanced) |
| [`VolumeSplittingBlend`](#ControlType.VolumeSplittingBlend) |
| [`VolumeSplittingLoop`](#ControlType.VolumeSplittingLoop) |
| [`VolumeSplittingPlane`](#ControlType.VolumeSplittingPlane) |
| [`VolumeSplittingUserNames`](#ControlType.VolumeSplittingUserNames) |
| [`VolumesMerging`](#ControlType.VolumesMerging) |
| [`VolumetricSizeFieldBOI`](#ControlType.VolumetricSizeFieldBOI) |
| [`VolumetricSizeFieldCurvature`](#ControlType.VolumetricSizeFieldCurvature) |
| [`VolumetricSizeFieldLoad`](#ControlType.VolumetricSizeFieldLoad) |
| [`VolumetricSizeFieldMaxSize`](#ControlType.VolumetricSizeFieldMaxSize) |
| [`VolumetricSizeFieldProximity`](#ControlType.VolumetricSizeFieldProximity) |
| [`VolumetricSizeFieldSave`](#ControlType.VolumetricSizeFieldSave) |
| [`WarpingAngleValidation`](#ControlType.WarpingAngleValidation) |
| [`WeldCreation`](#ControlType.WeldCreation) |
| [`WrapSpecificSurfaceMesh`](#ControlType.WrapSpecificSurfaceMesh) |
| [`ZoneMaterialAssignment`](#ControlType.ZoneMaterialAssignment) |
| [`ZonePropertiesDeletion`](#ControlType.ZonePropertiesDeletion) |
| [`ZonePropertySetting`](#ControlType.ZonePropertySetting) |
| [`ZoneThicknessAssignment`](#ControlType.ZoneThicknessAssignment) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="ControlType.AddPrescribedPoints"></a>

### ControlType.AddPrescribedPoints *= 103*

<a id="ControlType.AddPrescribedPointsFromFile"></a>

### ControlType.AddPrescribedPointsFromFile *= 104*

<a id="ControlType.AdvancedScopeMorphing"></a>

### ControlType.AdvancedScopeMorphing *= 65*

<a id="ControlType.AdvancedSolverMorphing"></a>

### ControlType.AdvancedSolverMorphing *= 66*

<a id="ControlType.AdvancedTessellationDiagnostics"></a>

### ControlType.AdvancedTessellationDiagnostics *= 161*

<a id="ControlType.AdvancedTopologyDiagnostics"></a>

### ControlType.AdvancedTopologyDiagnostics *= 183*

<a id="ControlType.AnnularHoleFilling"></a>

### ControlType.AnnularHoleFilling *= 33*

<a id="ControlType.AspectRatioValidation"></a>

### ControlType.AspectRatioValidation *= 207*

<a id="ControlType.AutoBlock"></a>

### ControlType.AutoBlock *= 192*

<a id="ControlType.AutoBlockAutoPlanarCut"></a>

### ControlType.AutoBlockAutoPlanarCut *= 194*

<a id="ControlType.AutoBlockExistingLoopsCut"></a>

### ControlType.AutoBlockExistingLoopsCut *= 196*

<a id="ControlType.AutoBlockManualPlanarCut"></a>

### ControlType.AutoBlockManualPlanarCut *= 195*

<a id="ControlType.AutoBlockUserNames"></a>

### ControlType.AutoBlockUserNames *= 193*

<a id="ControlType.AutoNodeMove"></a>

### ControlType.AutoNodeMove *= 202*

<a id="ControlType.AutoQuadConversion"></a>

### ControlType.AutoQuadConversion *= 173*

<a id="ControlType.AutoQuadHoleAndFeatureTreatment"></a>

### ControlType.AutoQuadHoleAndFeatureTreatment *= 169*

<a id="ControlType.AutoQuadMeshing"></a>

### ControlType.AutoQuadMeshing *= 172*

<a id="ControlType.AutoQuadTopologyDefeature"></a>

### ControlType.AutoQuadTopologyDefeature *= 171*

<a id="ControlType.AutoQuadTopologyRepair"></a>

### ControlType.AutoQuadTopologyRepair *= 170*

<a id="ControlType.AutoRepair"></a>

### ControlType.AutoRepair *= 145*

<a id="ControlType.CADImport"></a>

### ControlType.CADImport *= 121*

<a id="ControlType.CADOptionsDiscovery"></a>

### ControlType.CADOptionsDiscovery *= 126*

<a id="ControlType.CADOptionsDomainCreation"></a>

### ControlType.CADOptionsDomainCreation *= 127*

<a id="ControlType.CADOptionsParasolid"></a>

### ControlType.CADOptionsParasolid *= 123*

<a id="ControlType.CADOptionsSTL"></a>

### ControlType.CADOptionsSTL *= 122*

<a id="ControlType.CADOptionsStride"></a>

### ControlType.CADOptionsStride *= 124*

<a id="ControlType.CADOptionsWorkbench"></a>

### ControlType.CADOptionsWorkbench *= 125*

<a id="ControlType.CheckSlicedLayers"></a>

### ControlType.CheckSlicedLayers *= 200*

<a id="ControlType.Checkpoint"></a>

### ControlType.Checkpoint *= 3*

<a id="ControlType.Connect"></a>

### ControlType.Connect *= 128*

<a id="ControlType.ConnectFacePairs"></a>

### ControlType.ConnectFacePairs *= 130*

<a id="ControlType.ConnectMultiTolerances"></a>

### ControlType.ConnectMultiTolerances *= 129*

<a id="ControlType.ConstantFidelityWrapper"></a>

### ControlType.ConstantFidelityWrapper *= 107*

<a id="ControlType.ConstantSizeEdgeMesher"></a>

### ControlType.ConstantSizeEdgeMesher *= 71*

<a id="ControlType.ConstantSizeMultiZoneSurfaceMesher"></a>

### ControlType.ConstantSizeMultiZoneSurfaceMesher *= 86*

<a id="ControlType.ConstantSizeMultiZoneVolumeMesher"></a>

### ControlType.ConstantSizeMultiZoneVolumeMesher *= 88*

<a id="ControlType.ConstantSizeSurfaceMesh"></a>

### ControlType.ConstantSizeSurfaceMesh *= 74*

<a id="ControlType.ConstantSizeVolumeMesh"></a>

### ControlType.ConstantSizeVolumeMesh *= 82*

<a id="ControlType.ConstantSizeWrap"></a>

### ControlType.ConstantSizeWrap *= 105*

<a id="ControlType.CuboidalEnclosure"></a>

### ControlType.CuboidalEnclosure *= 10*

<a id="ControlType.Custom"></a>

### ControlType.Custom *= 1*

<a id="ControlType.CustomNamesEnclosure"></a>

### ControlType.CustomNamesEnclosure *= 13*

<a id="ControlType.CustomNamesExtrusion"></a>

### ControlType.CustomNamesExtrusion *= 30*

<a id="ControlType.CustomNamesWrap"></a>

### ControlType.CustomNamesWrap *= 109*

<a id="ControlType.CyclicRegionDiagnostics"></a>

### ControlType.CyclicRegionDiagnostics *= 162*

<a id="ControlType.CylindricalScalingMorphing"></a>

### ControlType.CylindricalScalingMorphing *= 43*

<a id="ControlType.Delete"></a>

### ControlType.Delete *= 6*

<a id="ControlType.DeleteTrappedSlices"></a>

### ControlType.DeleteTrappedSlices *= 199*

<a id="ControlType.DetectClusters"></a>

### ControlType.DetectClusters *= 215*

<a id="ControlType.DetectContactPairs"></a>

### ControlType.DetectContactPairs *= 216*

<a id="ControlType.DomainStatistics"></a>

### ControlType.DomainStatistics *= 239*

<a id="ControlType.EdgeBiasingEdgeMesher"></a>

### ControlType.EdgeBiasingEdgeMesher *= 73*

<a id="ControlType.EdgeBiasingMultiZoneMesher"></a>

### ControlType.EdgeBiasingMultiZoneMesher *= 91*

<a id="ControlType.EdgeMerging"></a>

### ControlType.EdgeMerging *= 229*

<a id="ControlType.EdgeSplittingLocation"></a>

### ControlType.EdgeSplittingLocation *= 226*

<a id="ControlType.EdgeSplittingNumberOfSegments"></a>

### ControlType.EdgeSplittingNumberOfSegments *= 227*

<a id="ControlType.EdgeSplittingUserNames"></a>

### ControlType.EdgeSplittingUserNames *= 228*

<a id="ControlType.EdgeSuppression"></a>

### ControlType.EdgeSuppression *= 137*

<a id="ControlType.EdgesOfFacesRepair"></a>

### ControlType.EdgesOfFacesRepair *= 148*

<a id="ControlType.EditMeshMergeFaces"></a>

### ControlType.EditMeshMergeFaces *= 191*

<a id="ControlType.EditMeshSeparateFaces"></a>

### ControlType.EditMeshSeparateFaces *= 190*

<a id="ControlType.ElementQualityValidation"></a>

### ControlType.ElementQualityValidation *= 206*

<a id="ControlType.Extrusion"></a>

### ControlType.Extrusion *= 28*

<a id="ControlType.FaceMerging"></a>

### ControlType.FaceMerging *= 136*

<a id="ControlType.FaceMergingControl"></a>

### ControlType.FaceMergingControl *= 235*

<a id="ControlType.FacePinching"></a>

### ControlType.FacePinching *= 142*

<a id="ControlType.FaceSplittingMidEdge"></a>

### ControlType.FaceSplittingMidEdge *= 232*

<a id="ControlType.FaceSplittingPlane"></a>

### ControlType.FaceSplittingPlane *= 231*

<a id="ControlType.FaceSplittingTwoVertices"></a>

### ControlType.FaceSplittingTwoVertices *= 233*

<a id="ControlType.FaceSplittingUserNames"></a>

### ControlType.FaceSplittingUserNames *= 234*

<a id="ControlType.FilletDetection"></a>

### ControlType.FilletDetection *= 214*

<a id="ControlType.FilletMorphing"></a>

### ControlType.FilletMorphing *= 48*

<a id="ControlType.FlexPCBMorphing"></a>

### ControlType.FlexPCBMorphing *= 49*

<a id="ControlType.FlexPCBMorphingBendDefinition"></a>

### ControlType.FlexPCBMorphingBendDefinition *= 50*

<a id="ControlType.FlexPCBMorphingBendDefinitionEdgeBased"></a>

### ControlType.FlexPCBMorphingBendDefinitionEdgeBased *= 52*

<a id="ControlType.FlexPCBMorphingBendDefinitionPointBased"></a>

### ControlType.FlexPCBMorphingBendDefinitionPointBased *= 51*

<a id="ControlType.Fuse"></a>

### ControlType.Fuse *= 131*

<a id="ControlType.FuseMultiTolerances"></a>

### ControlType.FuseMultiTolerances *= 132*

<a id="ControlType.GeometricVolumeMesher"></a>

### ControlType.GeometricVolumeMesher *= 80*

<a id="ControlType.GeometryFidelity"></a>

### ControlType.GeometryFidelity *= 106*

<a id="ControlType.GrainsGeneration"></a>

### ControlType.GrainsGeneration *= 39*

<a id="ControlType.GrainsGenerationCylinder"></a>

### ControlType.GrainsGenerationCylinder *= 42*

<a id="ControlType.GrainsGenerationEllipsoid"></a>

### ControlType.GrainsGenerationEllipsoid *= 41*

<a id="ControlType.GrainsGenerationHex"></a>

### ControlType.GrainsGenerationHex *= 168*

<a id="ControlType.GrainsGenerationSphere"></a>

### ControlType.GrainsGenerationSphere *= 40*

<a id="ControlType.HemiCuboidalEnclosure"></a>

### ControlType.HemiCuboidalEnclosure *= 237*

<a id="ControlType.HemisphereEnclosure"></a>

### ControlType.HemisphereEnclosure *= 9*

<a id="ControlType.HexDominant"></a>

### ControlType.HexDominant *= 85*

<a id="ControlType.HintMorphing"></a>

### ControlType.HintMorphing *= 63*

<a id="ControlType.HoleClosing"></a>

### ControlType.HoleClosing *= 143*

<a id="ControlType.HoleDetection"></a>

### ControlType.HoleDetection *= 151*

<a id="ControlType.HoleFilling"></a>

### ControlType.HoleFilling *= 32*

<a id="ControlType.HolePatching"></a>

### ControlType.HolePatching *= 34*

<a id="ControlType.IGASolverFileExport"></a>

### ControlType.IGASolverFileExport *= 175*

<a id="ControlType.IGASplineConversion"></a>

### ControlType.IGASplineConversion *= 174*

<a id="ControlType.ImageGeneration"></a>

### ControlType.ImageGeneration *= 218*

<a id="ControlType.ImageGenerationOrbitCamera"></a>

### ControlType.ImageGenerationOrbitCamera *= 220*

<a id="ControlType.ImageGenerationPointCamera"></a>

### ControlType.ImageGenerationPointCamera *= 219*

<a id="ControlType.ImproveSlicedPart"></a>

### ControlType.ImproveSlicedPart *= 197*

<a id="ControlType.ImproveSurfaceMeshCleanUp"></a>

### ControlType.ImproveSurfaceMeshCleanUp *= 99*

<a id="ControlType.ImproveSurfaceMeshProjectionOnGeometry"></a>

### ControlType.ImproveSurfaceMeshProjectionOnGeometry *= 97*

<a id="ControlType.ImproveSurfaceMeshQuadsToTrianglesSplitting"></a>

### ControlType.ImproveSurfaceMeshQuadsToTrianglesSplitting *= 96*

<a id="ControlType.ImproveSurfaceMeshSecondOrderConversion"></a>

### ControlType.ImproveSurfaceMeshSecondOrderConversion *= 95*

<a id="ControlType.ImproveTetrahedrons"></a>

### ControlType.ImproveTetrahedrons *= 201*

<a id="ControlType.ImproveVolumeMeshAutoNodeMove"></a>

### ControlType.ImproveVolumeMeshAutoNodeMove *= 100*

<a id="ControlType.ImproveVolumeMeshSecondOrderConversion"></a>

### ControlType.ImproveVolumeMeshSecondOrderConversion *= 101*

<a id="ControlType.InflationMultiZoneMesher"></a>

### ControlType.InflationMultiZoneMesher *= 90*

<a id="ControlType.Interactive"></a>

### ControlType.Interactive *= 134*

<a id="ControlType.InteriorEdgeSuppression"></a>

### ControlType.InteriorEdgeSuppression *= 146*

<a id="ControlType.InteriorVertexDeletion"></a>

### ControlType.InteriorVertexDeletion *= 147*

<a id="ControlType.IrregularShapeConvexEnclosure"></a>

### ControlType.IrregularShapeConvexEnclosure *= 11*

<a id="ControlType.IrregularShapeHemiConvexEnclosure"></a>

### ControlType.IrregularShapeHemiConvexEnclosure *= 12*

<a id="ControlType.JacobianRatioCornerNodesValidation"></a>

### ControlType.JacobianRatioCornerNodesValidation *= 209*

<a id="ControlType.JacobianRatioGaussPointsValidation"></a>

### ControlType.JacobianRatioGaussPointsValidation *= 210*

<a id="ControlType.JacobianRatioMAPDLValidation"></a>

### ControlType.JacobianRatioMAPDLValidation *= 208*

<a id="ControlType.LabelAdditionByExpression"></a>

### ControlType.LabelAdditionByExpression *= 165*

<a id="ControlType.LabelAdditionByProximity"></a>

### ControlType.LabelAdditionByProximity *= 164*

<a id="ControlType.LabelAdditionByScope"></a>

### ControlType.LabelAdditionByScope *= 163*

<a id="ControlType.LabelRemovalByScope"></a>

### ControlType.LabelRemovalByScope *= 166*

<a id="ControlType.LeakPrevention"></a>

### ControlType.LeakPrevention *= 110*

<a id="ControlType.LoadRecording"></a>

### ControlType.LoadRecording *= 68*

<a id="ControlType.MappedMeshingMultiZoneMesher"></a>

### ControlType.MappedMeshingMultiZoneMesher *= 92*

<a id="ControlType.MatchControlMultiZoneMesher"></a>

### ControlType.MatchControlMultiZoneMesher *= 93*

<a id="ControlType.MaterialPoint"></a>

### ControlType.MaterialPoint *= 111*

<a id="ControlType.MergeNodes"></a>

### ControlType.MergeNodes *= 152*

<a id="ControlType.MergeOverlappingFaces"></a>

### ControlType.MergeOverlappingFaces *= 133*

<a id="ControlType.MeshCheckValidation"></a>

### ControlType.MeshCheckValidation *= 213*

<a id="ControlType.MeshExport"></a>

### ControlType.MeshExport *= 5*

<a id="ControlType.MeshImport"></a>

### ControlType.MeshImport *= 4*

<a id="ControlType.MeshLayerCreation"></a>

### ControlType.MeshLayerCreation *= 187*

<a id="ControlType.MeshReplication"></a>

### ControlType.MeshReplication *= 102*

<a id="ControlType.MeshStatistics"></a>

### ControlType.MeshStatistics *= 238*

<a id="ControlType.MeshValidation"></a>

### ControlType.MeshValidation *= 203*

<a id="ControlType.NumberOfDivisionsOnEdges"></a>

### ControlType.NumberOfDivisionsOnEdges *= 118*

<a id="ControlType.NumenSurfaceMesher"></a>

### ControlType.NumenSurfaceMesher *= 236*

<a id="ControlType.OffsetMorphing"></a>

### ControlType.OffsetMorphing *= 47*

<a id="ControlType.PartEnclosure"></a>

### ControlType.PartEnclosure *= 7*

<a id="ControlType.PartialDefeature"></a>

### ControlType.PartialDefeature *= 138*

<a id="ControlType.PartsMerging"></a>

### ControlType.PartsMerging *= 135*

<a id="ControlType.PlaneProjectionMorphing"></a>

### ControlType.PlaneProjectionMorphing *= 64*

<a id="ControlType.PlaybackMorphing"></a>

### ControlType.PlaybackMorphing *= 70*

<a id="ControlType.PostSlicePart"></a>

### ControlType.PostSlicePart *= 198*

<a id="ControlType.PrismsAdvanced"></a>

### ControlType.PrismsAdvanced *= 84*

<a id="ControlType.PrismsGeneration"></a>

### ControlType.PrismsGeneration *= 83*

<a id="ControlType.PyPrimeMeshScript"></a>

### ControlType.PyPrimeMeshScript *= 113*

<a id="ControlType.PythonScript"></a>

### ControlType.PythonScript *= 112*

<a id="ControlType.PythonVariable"></a>

### ControlType.PythonVariable *= 114*

<a id="ControlType.QuadBoundaryLayer"></a>

### ControlType.QuadBoundaryLayer *= 78*

<a id="ControlType.QuadMeshAdvancedOptions"></a>

### ControlType.QuadMeshAdvancedOptions *= 77*

<a id="ControlType.RecordingMorphing"></a>

### ControlType.RecordingMorphing *= 67*

<a id="ControlType.RenameZone"></a>

### ControlType.RenameZone *= 37*

<a id="ControlType.ResolveIntersections"></a>

### ControlType.ResolveIntersections *= 98*

<a id="ControlType.ResolveSurfaceOverlaps"></a>

### ControlType.ResolveSurfaceOverlaps *= 149*

<a id="ControlType.ResolveSurfaceOverlaps_MultiTolerances"></a>

### ControlType.ResolveSurfaceOverlaps_MultiTolerances *= 150*

<a id="ControlType.RevertSurfaceOrientation"></a>

### ControlType.RevertSurfaceOrientation *= 38*

<a id="ControlType.Revolve"></a>

### ControlType.Revolve *= 31*

<a id="ControlType.RotationMorphing"></a>

### ControlType.RotationMorphing *= 46*

<a id="ControlType.SALEControlPoints"></a>

### ControlType.SALEControlPoints *= 156*

<a id="ControlType.SALETrim"></a>

### ControlType.SALETrim *= 182*

<a id="ControlType.SaveMorphing"></a>

### ControlType.SaveMorphing *= 69*

<a id="ControlType.ScalingExtrusion"></a>

### ControlType.ScalingExtrusion *= 29*

<a id="ControlType.SetSOLSH190"></a>

### ControlType.SetSOLSH190 *= 18*

<a id="ControlType.Setup"></a>

### ControlType.Setup *= 2*

<a id="ControlType.SharpAngleFaceRemoval"></a>

### ControlType.SharpAngleFaceRemoval *= 141*

<a id="ControlType.ShortEdgeCollapse"></a>

### ControlType.ShortEdgeCollapse *= 140*

<a id="ControlType.SingleZoneCreation"></a>

### ControlType.SingleZoneCreation *= 36*

<a id="ControlType.SizeFieldEdgeMesher"></a>

### ControlType.SizeFieldEdgeMesher *= 72*

<a id="ControlType.SizeFieldMultiZoneSurfaceMesher"></a>

### ControlType.SizeFieldMultiZoneSurfaceMesher *= 87*

<a id="ControlType.SizeFieldMultiZoneVolumeMesher"></a>

### ControlType.SizeFieldMultiZoneVolumeMesher *= 89*

<a id="ControlType.SizeFieldSurfaceMesher"></a>

### ControlType.SizeFieldSurfaceMesher *= 75*

<a id="ControlType.SizeFieldVolumeMesher"></a>

### ControlType.SizeFieldVolumeMesher *= 81*

<a id="ControlType.SizeFieldWrap"></a>

### ControlType.SizeFieldWrap *= 108*

<a id="ControlType.SkewnessValidation"></a>

### ControlType.SkewnessValidation *= 205*

<a id="ControlType.SlidingConstraintLine"></a>

### ControlType.SlidingConstraintLine *= 55*

<a id="ControlType.SlidingConstraintPlane"></a>

### ControlType.SlidingConstraintPlane *= 53*

<a id="ControlType.SlidingConstraintSurface"></a>

### ControlType.SlidingConstraintSurface *= 54*

<a id="ControlType.SolderBallCreation"></a>

### ControlType.SolderBallCreation *= 188*

<a id="ControlType.SolidIGAGeometryImport"></a>

### ControlType.SolidIGAGeometryImport *= 176*

<a id="ControlType.SolidIGAPhysicalSpaceMapping"></a>

### ControlType.SolidIGAPhysicalSpaceMapping *= 181*

<a id="ControlType.SolidIGASolverFileImport"></a>

### ControlType.SolidIGASolverFileImport *= 178*

<a id="ControlType.SolidIGASplineCreation"></a>

### ControlType.SolidIGASplineCreation *= 177*

<a id="ControlType.SolidIGATetMeshCreation"></a>

### ControlType.SolidIGATetMeshCreation *= 179*

<a id="ControlType.SolidIGATetMeshRefinement"></a>

### ControlType.SolidIGATetMeshRefinement *= 180*

<a id="ControlType.SolidIGATriMeshCreation"></a>

### ControlType.SolidIGATriMeshCreation *= 240*

<a id="ControlType.SourceTargetMorphing"></a>

### ControlType.SourceTargetMorphing *= 62*

<a id="ControlType.SphericalEnclosure"></a>

### ControlType.SphericalEnclosure *= 8*

<a id="ControlType.SphericalScalingMorphing"></a>

### ControlType.SphericalScalingMorphing *= 44*

<a id="ControlType.StackableBodiesDetection"></a>

### ControlType.StackableBodiesDetection *= 153*

<a id="ControlType.StackerDiagnostics"></a>

### ControlType.StackerDiagnostics *= 155*

<a id="ControlType.StackerVolumeFlattening"></a>

### ControlType.StackerVolumeFlattening *= 115*

<a id="ControlType.StackerVolumeMeshing"></a>

### ControlType.StackerVolumeMeshing *= 117*

<a id="ControlType.SurfaceDiagnostics"></a>

### ControlType.SurfaceDiagnostics *= 157*

<a id="ControlType.SymmetryCyclicRegion"></a>

### ControlType.SymmetryCyclicRegion *= 56*

<a id="ControlType.SymmetryCyclicRegionGenericBoundaries"></a>

### ControlType.SymmetryCyclicRegionGenericBoundaries *= 57*

<a id="ControlType.TetCollapseValidation"></a>

### ControlType.TetCollapseValidation *= 211*

<a id="ControlType.ThinFaceRemoval"></a>

### ControlType.ThinFaceRemoval *= 139*

<a id="ControlType.TopologyCreation"></a>

### ControlType.TopologyCreation *= 19*

<a id="ControlType.TopologyDeletion"></a>

### ControlType.TopologyDeletion *= 20*

<a id="ControlType.TopologyDiagnostics"></a>

### ControlType.TopologyDiagnostics *= 159*

<a id="ControlType.TopologyMergeVolumes"></a>

### ControlType.TopologyMergeVolumes *= 230*

<a id="ControlType.TopologyProtection"></a>

### ControlType.TopologyProtection *= 144*

<a id="ControlType.TopologyProtectionMultiZoneMesher"></a>

### ControlType.TopologyProtectionMultiZoneMesher *= 94*

<a id="ControlType.TopologyValidation"></a>

### ControlType.TopologyValidation *= 204*

<a id="ControlType.TransformAligning"></a>

### ControlType.TransformAligning *= 61*

<a id="ControlType.TransformRotation"></a>

### ControlType.TransformRotation *= 59*

<a id="ControlType.TransformSphericalScaling"></a>

### ControlType.TransformSphericalScaling *= 60*

<a id="ControlType.TransformTranslation"></a>

### ControlType.TransformTranslation *= 58*

<a id="ControlType.TranslationMorphing"></a>

### ControlType.TranslationMorphing *= 45*

<a id="ControlType.TubeSplitting"></a>

### ControlType.TubeSplitting *= 167*

<a id="ControlType.Undefined"></a>

### ControlType.Undefined *= 0*

<a id="ControlType.UserNamesAdvancedTopologyDiagnostics"></a>

### ControlType.UserNamesAdvancedTopologyDiagnostics *= 184*

<a id="ControlType.UserNamesFailedTopology"></a>

### ControlType.UserNamesFailedTopology *= 186*

<a id="ControlType.UserNamesNewTopology"></a>

### ControlType.UserNamesNewTopology *= 185*

<a id="ControlType.UserNamesSolderBall"></a>

### ControlType.UserNamesSolderBall *= 189*

<a id="ControlType.UserNamesStackableBodiesDetection"></a>

### ControlType.UserNamesStackableBodiesDetection *= 154*

<a id="ControlType.UserNamesStackerVolumeFlattening"></a>

### ControlType.UserNamesStackerVolumeFlattening *= 116*

<a id="ControlType.UserNamesSurfaceDiagnostics"></a>

### ControlType.UserNamesSurfaceDiagnostics *= 158*

<a id="ControlType.UserNamesTopologyDiagnostics"></a>

### ControlType.UserNamesTopologyDiagnostics *= 160*

<a id="ControlType.UserNamesVolumetricSizeField"></a>

### ControlType.UserNamesVolumetricSizeField *= 21*

<a id="ControlType.Verticalize"></a>

### ControlType.Verticalize *= 119*

<a id="ControlType.VerticalizeAdvanced"></a>

### ControlType.VerticalizeAdvanced *= 120*

<a id="ControlType.VolumeExtraction"></a>

### ControlType.VolumeExtraction *= 79*

<a id="ControlType.VolumeSplittingAdvanced"></a>

### ControlType.VolumeSplittingAdvanced *= 222*

<a id="ControlType.VolumeSplittingBlend"></a>

### ControlType.VolumeSplittingBlend *= 225*

<a id="ControlType.VolumeSplittingLoop"></a>

### ControlType.VolumeSplittingLoop *= 224*

<a id="ControlType.VolumeSplittingPlane"></a>

### ControlType.VolumeSplittingPlane *= 223*

<a id="ControlType.VolumeSplittingUserNames"></a>

### ControlType.VolumeSplittingUserNames *= 221*

<a id="ControlType.VolumesMerging"></a>

### ControlType.VolumesMerging *= 35*

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

<a id="ControlType.VolumetricSizeFieldSave"></a>

### ControlType.VolumetricSizeFieldSave *= 27*

<a id="ControlType.WarpingAngleValidation"></a>

### ControlType.WarpingAngleValidation *= 212*

<a id="ControlType.WeldCreation"></a>

### ControlType.WeldCreation *= 217*

<a id="ControlType.WrapSpecificSurfaceMesh"></a>

### ControlType.WrapSpecificSurfaceMesh *= 76*

<a id="ControlType.ZoneMaterialAssignment"></a>

### ControlType.ZoneMaterialAssignment *= 14*

<a id="ControlType.ZonePropertiesDeletion"></a>

### ControlType.ZonePropertiesDeletion *= 17*

<a id="ControlType.ZonePropertySetting"></a>

### ControlType.ZonePropertySetting *= 16*

<a id="ControlType.ZoneThicknessAssignment"></a>

### ControlType.ZoneThicknessAssignment *= 15*


