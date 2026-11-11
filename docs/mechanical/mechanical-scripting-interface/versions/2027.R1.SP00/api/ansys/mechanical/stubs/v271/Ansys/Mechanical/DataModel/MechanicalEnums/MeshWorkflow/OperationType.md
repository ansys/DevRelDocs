# `OperationType`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType"></a>

#### *class* Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

This enum is referenced in the “Step” tree node and reflects the type of operation being configured. Based on the type of an operation different rules are applied which define the applicable list of controls and outcomes which can be added.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| --------------------------------------------------------------------------------------------------------- |
| [`AddLabels`](#OperationType.AddLabels) |
| [`AddPrescribedPoints`](#OperationType.AddPrescribedPoints) |
| [`AutoBlock`](#OperationType.AutoBlock) |
| [`AutoQuadConvertToAllQuad`](#OperationType.AutoQuadConvertToAllQuad) |
| [`AutoQuadDefeature`](#OperationType.AutoQuadDefeature) |
| [`AutoQuadMesher`](#OperationType.AutoQuadMesher) |
| [`AutoQuadRepair`](#OperationType.AutoQuadRepair) |
| [`AutoQuadTreatHolesAndFeatures`](#OperationType.AutoQuadTreatHolesAndFeatures) |
| [`AutoRepairTopology`](#OperationType.AutoRepairTopology) |
| [`Checkpoint`](#OperationType.Checkpoint) |
| [`Connect`](#Connect) |
| [`CreateEdgeMesh`](#OperationType.CreateEdgeMesh) |
| [`CreateEnclosure`](#OperationType.CreateEnclosure) |
| [`CreateSolderBall`](#OperationType.CreateSolderBall) |
| [`CreateSurfaceMesh`](#OperationType.CreateSurfaceMesh) |
| [`CreateTopology`](#OperationType.CreateTopology) |
| [`CreateVolumeMesh`](#OperationType.CreateVolumeMesh) |
| [`CreateVolumetricSizeField`](#OperationType.CreateVolumetricSizeField) |
| [`CreateWelds`](#OperationType.CreateWelds) |
| [`CreateZones`](#OperationType.CreateZones) |
| [`Custom`](#OperationType.Custom) |
| [`DecomposeTopology`](#OperationType.DecomposeTopology) |
| [`Delete`](#OperationType.Delete) |
| [`DeleteTopology`](#OperationType.DeleteTopology) |
| [`DetectContactPairs`](#OperationType.DetectContactPairs) |
| [`DetectFillets`](#OperationType.DetectFillets) |
| [`DetectHoles`](#OperationType.DetectHoles) |
| [`DetectModelComponents`](#OperationType.DetectModelComponents) |
| [`DetectStackableBodies`](#OperationType.DetectStackableBodies) |
| [`EditMesh`](#OperationType.EditMesh) |
| [`ExportMesh`](#OperationType.ExportMesh) |
| [`ExtractVolumes`](#OperationType.ExtractVolumes) |
| [`Extrude`](#OperationType.Extrude) |
| [`FillHoles`](#OperationType.FillHoles) |
| [`Fuse`](#OperationType.Fuse) |
| [`GenerateGrains`](#OperationType.GenerateGrains) |
| [`GenerateImages`](#OperationType.GenerateImages) |
| [`IGAConvertToSpline`](#OperationType.IGAConvertToSpline) |
| [`IGAExportSolverFile`](#OperationType.IGAExportSolverFile) |
| [`ImportCAD`](#OperationType.ImportCAD) |
| [`ImportMesh`](#OperationType.ImportMesh) |
| [`ImproveSurfaceMesh`](#OperationType.ImproveSurfaceMesh) |
| [`ImproveVolumeMesh`](#OperationType.ImproveVolumeMesh) |
| [`Interactive`](#OperationType.Interactive) |
| [`LoadRecording`](#OperationType.LoadRecording) |
| [`ManageZoneProperties`](#OperationType.ManageZoneProperties) |
| [`Match`](#OperationType.Match) |
| [`MergeEdges`](#OperationType.MergeEdges) |
| [`MergeFaces`](#OperationType.MergeFaces) |
| [`MergeNodes`](#OperationType.MergeNodes) |
| [`MergeOverlappingFaces`](#OperationType.MergeOverlappingFaces) |
| [`MergeParts`](#OperationType.MergeParts) |
| [`MergeVolumes`](#OperationType.MergeVolumes) |
| [`ModelDiagnostics`](#OperationType.ModelDiagnostics) |
| [`ModifySurfaceOrientations`](#OperationType.ModifySurfaceOrientations) |
| [`ModifyZones`](#OperationType.ModifyZones) |
| [`Morph`](#OperationType.Morph) |
| [`MorphPlayback`](#OperationType.MorphPlayback) |
| [`MultiZoneSurfaceMesher`](#OperationType.MultiZoneSurfaceMesher) |
| [`MultiZoneVolumeMesher`](#OperationType.MultiZoneVolumeMesher) |
| [`PatchHoles`](#OperationType.PatchHoles) |
| [`Python`](#OperationType.Python) |
| [`RemoveLabels`](#OperationType.RemoveLabels) |
| [`RepairTopology`](#RepairTopology) |
| [`ReplicateMesh`](#OperationType.ReplicateMesh) |
| [`Revolve`](#OperationType.Revolve) |
| [`SALEGenerateMesh`](#OperationType.SALEGenerateMesh) |
| [`SaveRecording`](#OperationType.SaveRecording) |
| [`SaveVolumetricSizeField`](#OperationType.SaveVolumetricSizeField) |
| [`SetupEnvironment`](#OperationType.SetupEnvironment) |
| [`SlicerCheckSlicedLayers`](#OperationType.SlicerCheckSlicedLayers) |
| [`SlicerCreateMeshLayers`](#OperationType.SlicerCreateMeshLayers) |
| [`SlicerDeleteTrappedSlices`](#OperationType.SlicerDeleteTrappedSlices) |
| [`SlicerImproveSlicedPart`](#OperationType.SlicerImproveSlicedPart) |
| [`SlicerPostSlicePart`](#OperationType.SlicerPostSlicePart) |
| [`SolidIGACreateSplines`](#OperationType.SolidIGACreateSplines) |
| [`SolidIGACreateTetMesh`](#OperationType.SolidIGACreateTetMesh) |
| [`SolidIGACreateTriMesh`](#OperationType.SolidIGACreateTriMesh) |
| [`SolidIGAImportGeometry`](#OperationType.SolidIGAImportGeometry) |
| [`SolidIGAImportSolverFile`](#OperationType.SolidIGAImportSolverFile) |
| [`SolidIGAMapToPhysicalSpace`](#OperationType.SolidIGAMapToPhysicalSpace) |
| [`SolidIGARefineTetMesh`](#OperationType.SolidIGARefineTetMesh) |
| [`SplitEdges`](#OperationType.SplitEdges) |
| [`SplitFaces`](#OperationType.SplitFaces) |
| [`SplitVolumes`](#OperationType.SplitVolumes) |
| [`StackerDiagnostics`](#OperationType.StackerDiagnostics) |
| [`StackerFlattenVolume`](#OperationType.StackerFlattenVolume) |
| [`StackerMeshVolume`](#OperationType.StackerMeshVolume) |
| [`TopologyMergeVolumes`](#OperationType.TopologyMergeVolumes) |
| [`Transform`](#OperationType.Transform) |
| [`Undefined`](#OperationType.Undefined) |
| [`ValidateMesh`](#OperationType.ValidateMesh) |
| [`Verticalize`](#OperationType.Verticalize) |
| [`VolumeMeshToolAutoNodeMove`](#OperationType.VolumeMeshToolAutoNodeMove) |
| [`VolumeMeshToolImproveTetrahedrons`](#OperationType.VolumeMeshToolImproveTetrahedrons) |
| [`Wrap`](#OperationType.Wrap) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="OperationType.AddLabels"></a>

### OperationType.AddLabels *= 58*

<a id="OperationType.AddPrescribedPoints"></a>

### OperationType.AddPrescribedPoints *= 37*

<a id="OperationType.AutoBlock"></a>

### OperationType.AutoBlock *= 77*

<a id="OperationType.AutoQuadConvertToAllQuad"></a>

### OperationType.AutoQuadConvertToAllQuad *= 65*

<a id="OperationType.AutoQuadDefeature"></a>

### OperationType.AutoQuadDefeature *= 63*

<a id="OperationType.AutoQuadMesher"></a>

### OperationType.AutoQuadMesher *= 64*

<a id="OperationType.AutoQuadRepair"></a>

### OperationType.AutoQuadRepair *= 62*

<a id="OperationType.AutoQuadTreatHolesAndFeatures"></a>

### OperationType.AutoQuadTreatHolesAndFeatures *= 61*

<a id="OperationType.AutoRepairTopology"></a>

### OperationType.AutoRepairTopology *= 53*

<a id="OperationType.Checkpoint"></a>

### OperationType.Checkpoint *= 2*

<a id="OperationType.Connect"></a>

### OperationType.Connect *= 46*

<a id="OperationType.CreateEdgeMesh"></a>

### OperationType.CreateEdgeMesh *= 28*

<a id="OperationType.CreateEnclosure"></a>

### OperationType.CreateEnclosure *= 7*

<a id="OperationType.CreateSolderBall"></a>

### OperationType.CreateSolderBall *= 75*

<a id="OperationType.CreateSurfaceMesh"></a>

### OperationType.CreateSurfaceMesh *= 29*

<a id="OperationType.CreateTopology"></a>

### OperationType.CreateTopology *= 9*

<a id="OperationType.CreateVolumeMesh"></a>

### OperationType.CreateVolumeMesh *= 31*

<a id="OperationType.CreateVolumetricSizeField"></a>

### OperationType.CreateVolumetricSizeField *= 11*

<a id="OperationType.CreateWelds"></a>

### OperationType.CreateWelds *= 87*

<a id="OperationType.CreateZones"></a>

### OperationType.CreateZones *= 18*

<a id="OperationType.Custom"></a>

### OperationType.Custom *= 1*

<a id="OperationType.DecomposeTopology"></a>

### OperationType.DecomposeTopology *= 60*

<a id="OperationType.Delete"></a>

### OperationType.Delete *= 6*

<a id="OperationType.DeleteTopology"></a>

### OperationType.DeleteTopology *= 10*

<a id="OperationType.DetectContactPairs"></a>

### OperationType.DetectContactPairs *= 47*

<a id="OperationType.DetectFillets"></a>

### OperationType.DetectFillets *= 85*

<a id="OperationType.DetectHoles"></a>

### OperationType.DetectHoles *= 54*

<a id="OperationType.DetectModelComponents"></a>

### OperationType.DetectModelComponents *= 86*

<a id="OperationType.DetectStackableBodies"></a>

### OperationType.DetectStackableBodies *= 42*

<a id="OperationType.EditMesh"></a>

### OperationType.EditMesh *= 76*

<a id="OperationType.ExportMesh"></a>

### OperationType.ExportMesh *= 5*

<a id="OperationType.ExtractVolumes"></a>

### OperationType.ExtractVolumes *= 30*

<a id="OperationType.Extrude"></a>

### OperationType.Extrude *= 13*

<a id="OperationType.FillHoles"></a>

### OperationType.FillHoles *= 15*

<a id="OperationType.Fuse"></a>

### OperationType.Fuse *= 48*

<a id="OperationType.GenerateGrains"></a>

### OperationType.GenerateGrains *= 21*

<a id="OperationType.GenerateImages"></a>

### OperationType.GenerateImages *= 88*

<a id="OperationType.IGAConvertToSpline"></a>

### OperationType.IGAConvertToSpline *= 66*

<a id="OperationType.IGAExportSolverFile"></a>

### OperationType.IGAExportSolverFile *= 67*

<a id="OperationType.ImportCAD"></a>

### OperationType.ImportCAD *= 45*

<a id="OperationType.ImportMesh"></a>

### OperationType.ImportMesh *= 4*

<a id="OperationType.ImproveSurfaceMesh"></a>

### OperationType.ImproveSurfaceMesh *= 34*

<a id="OperationType.ImproveVolumeMesh"></a>

### OperationType.ImproveVolumeMesh *= 35*

<a id="OperationType.Interactive"></a>

### OperationType.Interactive *= 50*

<a id="OperationType.LoadRecording"></a>

### OperationType.LoadRecording *= 25*

<a id="OperationType.ManageZoneProperties"></a>

### OperationType.ManageZoneProperties *= 8*

<a id="OperationType.Match"></a>

### OperationType.Match *= 24*

<a id="OperationType.MergeEdges"></a>

### OperationType.MergeEdges *= 91*

<a id="OperationType.MergeFaces"></a>

### OperationType.MergeFaces *= 94*

<a id="OperationType.MergeNodes"></a>

### OperationType.MergeNodes *= 55*

<a id="OperationType.MergeOverlappingFaces"></a>

### OperationType.MergeOverlappingFaces *= 49*

<a id="OperationType.MergeParts"></a>

### OperationType.MergeParts *= 51*

<a id="OperationType.MergeVolumes"></a>

### OperationType.MergeVolumes *= 17*

<a id="OperationType.ModelDiagnostics"></a>

### OperationType.ModelDiagnostics *= 57*

<a id="OperationType.ModifySurfaceOrientations"></a>

### OperationType.ModifySurfaceOrientations *= 20*

<a id="OperationType.ModifyZones"></a>

### OperationType.ModifyZones *= 19*

<a id="OperationType.Morph"></a>

### OperationType.Morph *= 22*

<a id="OperationType.MorphPlayback"></a>

### OperationType.MorphPlayback *= 27*

<a id="OperationType.MultiZoneSurfaceMesher"></a>

### OperationType.MultiZoneSurfaceMesher *= 32*

<a id="OperationType.MultiZoneVolumeMesher"></a>

### OperationType.MultiZoneVolumeMesher *= 33*

<a id="OperationType.PatchHoles"></a>

### OperationType.PatchHoles *= 16*

<a id="OperationType.Python"></a>

### OperationType.Python *= 39*

<a id="OperationType.RemoveLabels"></a>

### OperationType.RemoveLabels *= 59*

<a id="OperationType.RepairTopology"></a>

### OperationType.RepairTopology *= 52*

<a id="OperationType.ReplicateMesh"></a>

### OperationType.ReplicateMesh *= 36*

<a id="OperationType.Revolve"></a>

### OperationType.Revolve *= 14*

<a id="OperationType.SALEGenerateMesh"></a>

### OperationType.SALEGenerateMesh *= 56*

<a id="OperationType.SaveRecording"></a>

### OperationType.SaveRecording *= 26*

<a id="OperationType.SaveVolumetricSizeField"></a>

### OperationType.SaveVolumetricSizeField *= 12*

<a id="OperationType.SetupEnvironment"></a>

### OperationType.SetupEnvironment *= 3*

<a id="OperationType.SlicerCheckSlicedLayers"></a>

### OperationType.SlicerCheckSlicedLayers *= 81*

<a id="OperationType.SlicerCreateMeshLayers"></a>

### OperationType.SlicerCreateMeshLayers *= 74*

<a id="OperationType.SlicerDeleteTrappedSlices"></a>

### OperationType.SlicerDeleteTrappedSlices *= 80*

<a id="OperationType.SlicerImproveSlicedPart"></a>

### OperationType.SlicerImproveSlicedPart *= 78*

<a id="OperationType.SlicerPostSlicePart"></a>

### OperationType.SlicerPostSlicePart *= 79*

<a id="OperationType.SolidIGACreateSplines"></a>

### OperationType.SolidIGACreateSplines *= 69*

<a id="OperationType.SolidIGACreateTetMesh"></a>

### OperationType.SolidIGACreateTetMesh *= 71*

<a id="OperationType.SolidIGACreateTriMesh"></a>

### OperationType.SolidIGACreateTriMesh *= 95*

<a id="OperationType.SolidIGAImportGeometry"></a>

### OperationType.SolidIGAImportGeometry *= 68*

<a id="OperationType.SolidIGAImportSolverFile"></a>

### OperationType.SolidIGAImportSolverFile *= 70*

<a id="OperationType.SolidIGAMapToPhysicalSpace"></a>

### OperationType.SolidIGAMapToPhysicalSpace *= 73*

<a id="OperationType.SolidIGARefineTetMesh"></a>

### OperationType.SolidIGARefineTetMesh *= 72*

<a id="OperationType.SplitEdges"></a>

### OperationType.SplitEdges *= 90*

<a id="OperationType.SplitFaces"></a>

### OperationType.SplitFaces *= 93*

<a id="OperationType.SplitVolumes"></a>

### OperationType.SplitVolumes *= 89*

<a id="OperationType.StackerDiagnostics"></a>

### OperationType.StackerDiagnostics *= 43*

<a id="OperationType.StackerFlattenVolume"></a>

### OperationType.StackerFlattenVolume *= 40*

<a id="OperationType.StackerMeshVolume"></a>

### OperationType.StackerMeshVolume *= 41*

<a id="OperationType.TopologyMergeVolumes"></a>

### OperationType.TopologyMergeVolumes *= 92*

<a id="OperationType.Transform"></a>

### OperationType.Transform *= 23*

<a id="OperationType.Undefined"></a>

### OperationType.Undefined *= 0*

<a id="OperationType.ValidateMesh"></a>

### OperationType.ValidateMesh *= 84*

<a id="OperationType.Verticalize"></a>

### OperationType.Verticalize *= 44*

<a id="OperationType.VolumeMeshToolAutoNodeMove"></a>

### OperationType.VolumeMeshToolAutoNodeMove *= 83*

<a id="OperationType.VolumeMeshToolImproveTetrahedrons"></a>

### OperationType.VolumeMeshToolImproveTetrahedrons *= 82*

<a id="OperationType.Wrap"></a>

### OperationType.Wrap *= 38*


