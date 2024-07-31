# `Mesh`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshControls.Mesh

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Mesh.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PreviewWelds`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PreviewWelds)                                                                                 | Preview Welds.                                                                    |
| [`PreviewMeshOnWelds`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PreviewMeshOnWelds)                                                                     | PreviewMeshOnWelds method.                                                        |
| [`PreviewMeshOnWeld`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PreviewMeshOnWeld)                                                                       | Preview model mesh on one weld control provided.                                  |
| [`PreviewMeshOnAllWelds`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PreviewMeshOnAllWelds)                                                               | Preview model mesh on all weld controls of the Mesh.                              |
| [`ShowOverlappingFaces`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ShowOverlappingFaces)                                                                 | Run the ShowOverlappingFaces action.                                              |
| [`ShowUnconnectedFacesNearEdges`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ShowUnconnectedFacesNearEdges)                                               | Run the  ShowUnconnectedFreeEdges action.                                         |
| [`PreviewMeshOnWeldWorksheet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PreviewMeshOnWeldWorksheet)                                                     | PreviewMeshOnWeldWorksheet method.                                                |
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ClearGeneratedData)                                                                     | Run the ClearGeneratedData action.                                                |
| [`CleanPartOrBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CleanPartOrBody)                                                                           | Clear generated data for parts and/or bodies provided.                            |
| [`AddNodeMergeGroup`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddNodeMergeGroup)                                                                       | Add a new NodeMergeGroup.                                                         |
| [`AddNodeMerge`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddNodeMerge)                                                                                 | Add a new NodeMerge.                                                              |
| [`AddAutomaticMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddAutomaticMethod)                                                                     | Creates a new AutomaticMethod                                                     |
| [`AddMeshConnectionGroup`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddMeshConnectionGroup)                                                             | Add a new MeshConnectionGroup.                                                    |
| [`AddContactMatchGroup`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddContactMatchGroup)                                                                 | Add a new AddContactMatchGroup.                                                   |
| [`AddManualMeshConnection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddManualMeshConnection)                                                           | Add a new ManualMeshConnection                                                    |
| [`AddPullExtrude`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddPullExtrude)                                                                             | Add a new Pull (Extrude).                                                         |
| [`AddPullRevolve`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddPullRevolve)                                                                             | Add a new Pull (Revolve).                                                         |
| [`AddPullSurfaceCoating`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddPullSurfaceCoating)                                                               | Add a new Pull (Surface Coating)).                                                |
| [`AddDirectMorph`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddDirectMorph)                                                                             | Add a new DirectMorph.                                                            |
| [`AddDeviation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddDeviation)                                                                                 | Creates a new SagControl                                                          |
| [`AddWasher`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddWasher)                                                                                       | Creates a new SagControl                                                          |
| [`AddWeld`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddWeld)                                                                                           | Creates a new WeldControl                                                         |
| [`AddRepairTopology`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddRepairTopology)                                                                       | Creates a new RepairTopology                                                      |
| [`AddConnect`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddConnect)                                                                                     | Creates a new Connect Control                                                     |
| [`AddFeatureSuppress`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddFeatureSuppress)                                                                     | Creates a new FeatureSuppress                                                     |
| [`AddGeometryFidelity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddGeometryFidelity)                                                                   | Creates a new GeometryFidelity                                                    |
| [`AddMeshCopy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddMeshCopy)                                                                                   | Creates a new MeshCopy                                                            |
| [`PinchControlGeomtry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PinchControlGeomtry)                                                                   | Set the geometry type for the Pinch Control.                                      |
| [`IsMeshMetricVisible`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.IsMeshMetricVisible)                                                                   | IsMeshMetricVisible method.                                                       |
| [`GetIsShellTargetMetric`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetIsShellTargetMetric)                                                             | Get Shell Target Metric                                                           |
| [`GetActiveSurfaceMeshQuality`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetActiveSurfaceMeshQuality)                                                   | Get Active User Mesh Quality                                                      |
| [`GetSurfaceMeshQualityName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSurfaceMeshQualityName)                                                       | Get Mesh Quality Name                                                             |
| [`GetSurfaceMeshQualityWarningLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSurfaceMeshQualityWarningLimit)                                       | Get User Mesh Quality Warning Limit                                               |
| [`GetSurfaceMeshQualityErrorLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSurfaceMeshQualityErrorLimit)                                           | Get User Mesh Quality Error Limit                                                 |
| [`GetSurfaceMeshQualityPercentageFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSurfaceMeshQualityPercentageFailed)                               | Get Mesh Quality Percentage Failed                                                |
| [`GetSurfaceMeshQualityCountFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSurfaceMeshQualityCountFailed)                                         | Get Mesh Quality Count Failed                                                     |
| [`GetSurfaceMeshQualityWarningPercentageFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSurfaceMeshQualityWarningPercentageFailed)                 | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetSurfaceMeshQualityWarningCountFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSurfaceMeshQualityWarningCountFailed)                           | Get Mesh Quality Warning Count Failed                                             |
| [`GetSurfaceMeshQualityWorstMetricValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSurfaceMeshQualityWorstMetricValue)                               | Get Mesh Quality Worst Metric Value                                               |
| [`GetSurfaceMeshQualityAverageMetricValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSurfaceMeshQualityAverageMetricValue)                           | Get Mesh Quality Average Metric Value                                             |
| [`SetActiveSurfaceMeshQuality`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SetActiveSurfaceMeshQuality)                                                   | Set Active Mesh Quality                                                           |
| [`SetSurfaceMeshQualityWarningLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id1)                                                                          | Set Mesh Quality Warning Limit                                                    |
| [`SetSurfaceMeshQualityWarningLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id1)                                                                          | Set Mesh Quality Warning Limit                                                    |
| [`SetSurfaceMeshQualityErrorLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id2)                                                                            | Set Mesh Quality Error Level                                                      |
| [`SetSurfaceMeshQualityErrorLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id2)                                                                            | Set Mesh Quality Error Level                                                      |
| [`CreateMQSurfaceElementsNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CreateMQSurfaceElementsNamedSelection)                               | Create Mesh Quality Surface Element Named Selection                               |
| [`GetIsSolidTargetMetric`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetIsSolidTargetMetric)                                                             | Get Solid Target Metric                                                           |
| [`GetVolumeMeshQualityName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityName)                                                         | Get Mesh Quality Name                                                             |
| [`GetVolumeMeshQualityWarningLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityWarningLimit)                                         | Get Mesh Quality Warning Limit                                                    |
| [`GetVolumeMeshQualityErrorLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityErrorLimit)                                             | Get Mesh Quality Error Limit                                                      |
| [`GetVolumeMeshQualityPercentageFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityPercentageFailed)                                 | Get Mesh Quality Percentage Failed                                                |
| [`GetVolumeMeshQualityCountFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityCountFailed)                                           | Get Mesh Quality Count Failed                                                     |
| [`GetVolumeMeshQualityWarningPercentageFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityWarningPercentageFailed)                   | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetVolumeMeshQualityWarningCountFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityWarningCountFailed)                             | Get Mesh Quality Warning Count Failed                                             |
| [`GetVolumeMeshQualityWorstMetricValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityWorstMetricValue)                                 | Get Mesh Quality Worst Metric Value                                               |
| [`GetVolumeMeshQualityAverageMetricValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityAverageMetricValue)                             | Get Mesh Quality Average Metric Value                                             |
| [`GetVolumeMeshQualityWorstMetricBackgroundColor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshQualityWorstMetricBackgroundColor)             | Get Mesh Quality Worst Metric BackgroundColor                                     |
| [`SetActiveVolumeMeshQuality`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SetActiveVolumeMeshQuality)                                                     | Set Active Mesh Quality                                                           |
| [`SetVolumeMeshQualityWarningLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id3)                                                                           | Set Mesh Quality Warning Limit                                                    |
| [`SetVolumeMeshQualityWarningLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id3)                                                                           | Set Mesh Quality Warning Limit                                                    |
| [`SetVolumeMeshQualityErrorLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id4)                                                                             | Set Mesh Quality Error Limit                                                      |
| [`SetVolumeMeshQualityErrorLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id4)                                                                             | Set Mesh Quality Error Limit                                                      |
| [`CreateMQVolumeElementsNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CreateMQVolumeElementsNamedSelection)                                 | Create Mesh Quality Volume Element Name Selection                                 |
| [`GetIsSolidSurfaceTargetMetric`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetIsSolidSurfaceTargetMetric)                                               | Get SolidSurface Target Metric                                                    |
| [`GetSolidSurfaceMeshQualityName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityName)                                             | Get Mesh Quality Name                                                             |
| [`GetSolidSurfaceMeshQualityWarningLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityWarningLimit)                             | Get Mesh Quality Warning Limit                                                    |
| [`GetSolidSurfaceMeshQualityErrorLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityErrorLimit)                                 | Get Mesh Quality Error Limit                                                      |
| [`GetSolidSurfaceMeshQualityPercentageFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityPercentageFailed)                     | Get Mesh Quality Percentage Failed                                                |
| [`GetSolidSurfaceMeshQualityCountFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityCountFailed)                               | Get Mesh Quality Count Failed                                                     |
| [`GetSolidSurfaceMeshQualityWarningPercentageFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityWarningPercentageFailed)       | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetSolidSurfaceMeshQualityWarningCountFailed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityWarningCountFailed)                 | Get Mesh Quality Warning Count Failed                                             |
| [`GetSolidSurfaceMeshQualityWorstMetricValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityWorstMetricValue)                     | Get Mesh Quality Worst Metric Value                                               |
| [`GetSolidSurfaceMeshQualityAverageMetricValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityAverageMetricValue)                 | Get Mesh Quality Average Metric Value                                             |
| [`GetSolidSurfaceMeshQualityWorstMetricBackgroundColor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor) | Get Mesh Quality Worst Metric BackgroundColor                                     |
| [`SetActiveSolidSurfaceMeshQuality`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SetActiveSolidSurfaceMeshQuality)                                         | Set Active Mesh Quality                                                           |
| [`SetSolidSurfaceMeshQualityWarningLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id5)                                                                     | Set Mesh Quality Warning Limit                                                    |
| [`SetSolidSurfaceMeshQualityWarningLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id5)                                                                     | Set Mesh Quality Warning Limit                                                    |
| [`SetSolidSurfaceMeshQualityErrorLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id6)                                                                       | Set Mesh Quality Error Limit                                                      |
| [`SetSolidSurfaceMeshQualityErrorLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id6)                                                                       | Set Mesh Quality Error Limit                                                      |
| [`CreateMQSolidSurfaceElementsNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CreateMQSolidSurfaceElementsNamedSelection)                     | Create Mesh Quality SolidSurface Element Name Selection                           |
| [`LoadMQWorksheetFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.LoadMQWorksheetFile)                                                                   | LoadMQWorksheetFile method.                                                       |
| [`SaveMQWorksheetFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SaveMQWorksheetFile)                                                                   | SaveMQWorksheetFile method.                                                       |
| [`GetVolumeMeshMetrics`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetVolumeMeshMetrics)                                                                 | GetVolumeMeshMetrics method.                                                      |
| [`GetSolidSurfaceMeshMetrics`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetSolidSurfaceMeshMetrics)                                                     | GetSolidSurfaceMeshMetrics method.                                                |
| [`SetSurfaceMeshMetricLimits`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SetSurfaceMeshMetricLimits)                                                     | SetSurfaceMeshMetricLimits method.                                                |
| [`SetSolidMeshMetricLimits`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SetSolidMeshMetricLimits)                                                         | SetSolidMeshMetricLimits method.                                                  |
| [`SetSolidSurfaceMeshMetricLimits`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SetSolidSurfaceMeshMetricLimits)                                           | SetSolidSurfaceMeshMetricLimits method.                                           |
| [`ActivateAllSurfaceWorksheetRows`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ActivateAllSurfaceWorksheetRows)                                           | ActivateAllSurfaceWorksheetRows method.                                           |
| [`ActivateAllVolumeWorksheetRows`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ActivateAllVolumeWorksheetRows)                                             | ActivateAllVolumeWorksheetRows method.                                            |
| [`ActivateAllSolidSurfaceWorksheetRows`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ActivateAllSolidSurfaceWorksheetRows)                                 | ActivateAllSolidSurfaceWorksheetRows method.                                      |
| [`DeactivateAllSurfaceWorksheetRows`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.DeactivateAllSurfaceWorksheetRows)                                       | DeactivateAllSurfaceWorksheetRows method.                                         |
| [`DeactivateAllVolumeWorksheetRows`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.DeactivateAllVolumeWorksheetRows)                                         | DeactivateAllVolumeWorksheetRows method.                                          |
| [`DeactivateAllSolidSurfaceWorksheetRows`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.DeactivateAllSolidSurfaceWorksheetRows)                             | DeactivateAllSolidSurfaceWorksheetRows method.                                    |
| [`SetMeshMetricOptions`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SetMeshMetricOptions)                                                                 | SetMeshMetricOptions method.                                                      |
| [`GetMeshMetricOptions`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetMeshMetricOptions)                                                                 | GetMeshMetricOptions method.                                                      |
| [`AddContactSizing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddContactSizing)                                                                         | Creates a new ContactSizing                                                       |
| [`AddFaceMeshing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddFaceMeshing)                                                                             | Creates a new FaceMeshing                                                         |
| [`AddInflation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddInflation)                                                                                 | Creates a new Inflation                                                           |
| [`AddMatchControl`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddMatchControl)                                                                           | Creates a new MatchControl                                                        |
| [`AddPinch`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddPinch)                                                                                         | Creates a new Pinch                                                               |
| [`AddRefinement`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddRefinement)                                                                               | Creates a new Refinement                                                          |
| [`AddSizing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddSizing)                                                                                       | Creates a new Sizing                                                              |
| [`CreatePinchControls`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CreatePinchControls)                                                                   | Run the CreatePinchControls action.                                               |
| [`GenerateMesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GenerateMesh)                                                                                 | Run the GenerateMesh action.                                                      |
| [`PreviewInflation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PreviewInflation)                                                                         | Run the PreviewInflation action.                                                  |
| [`PreviewSurfaceMesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PreviewSurfaceMesh)                                                                     | Run the PreviewSurfaceMesh action.                                                |
| [`ShowFeatureSuppressibleFaces`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ShowFeatureSuppressibleFaces)                                                 | Run the ShowFeatureSuppressibleFaces action.                                      |
| [`ShowMappableBodies`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ShowMappableBodies)                                                                     | Run the ShowMappableBodies action.                                                |
| [`ShowSweepableBodies`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ShowSweepableBodies)                                                                   | Run the ShowSweepableBodies action.                                               |
| [`Update`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Update)                                                                                             | Run the Update action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id7)                                                                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id7)                                                                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddComment)                                                                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddFigure)                                                                                       | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AddImage)                                                                                         | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Activate)                                                                                         | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CopyTo)                                                                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Duplicate)                                                                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GroupAllSimilarChildren)                                                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GroupSimilarObjects)                                                                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PropertyByName)                                                                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PropertyByAPIName)                                                                       | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CreateParameter)                                                                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GetParameter)                                                                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.RemoveParameter)                                                                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`Worksheet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Worksheet)                                                   | Get the MeshControlWorksheet action.                             |
| [`ElementSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ElementSize)                                               | Gets or sets the ElementSize.                                    |
| [`RigidBodyFaceMeshType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.RigidBodyFaceMeshType)                           | Gets or sets the RigidBodyFaceMeshType.                          |
| [`RigidBodyBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.RigidBodyBehavior)                                   | Gets or sets the BoundaryCondition.                              |
| [`CurrentConfiguration`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CurrentConfiguration)                             | Gets the Assembly Mesh’s current configuration Id.               |
| [`MinimizeNumTriangles`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MinimizeNumTriangles)                             | Gets or sets the TriangleReduction option for Batch Connections. |
| [`NumberOfShellMeshQualityMetrics`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.NumberOfShellMeshQualityMetrics)       | Gets the number of Mesh Quality Metrics                          |
| [`GlobalUseCustomTargetLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GlobalUseCustomTargetLimit)                 | Gets or sets the GlobalUseCustomTargetLimit.                     |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id0)                                                         | Gets the internal object. For advanced usage only.               |
| [`ConnectionTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ConnectionTolerance)                               | Gets or sets the ConnectionTolerance.                            |
| [`ConnectionToleranceList`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ConnectionToleranceList)                       | Gets or sets the ConnectionToleranceList.                        |
| [`UseAdvancedSizeFunction`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.UseAdvancedSizeFunction)                       | Gets or sets the UseAdvancedSizeFunction.                        |
| [`Method`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Method)                                                         | Gets or sets the Method.                                         |
| [`UseAutomaticInflation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.UseAutomaticInflation)                           | Gets or sets the UseAutomaticInflation.                          |
| [`AutomaticMeshBasedDefeaturing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AutomaticMeshBasedDefeaturing)           | Gets or sets the AutomaticMeshBasedDefeaturing.                  |
| [`Beam3`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Beam3)                                                           | Gets the Beam3.                                                  |
| [`Beam4`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Beam4)                                                           | Gets the Beam4.                                                  |
| [`BeamElements`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.BeamElements)                                             | Gets the BeamElements.                                           |
| [`CheckMeshQuality`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CheckMeshQuality)                                     | Gets or sets the CheckMeshQuality.                               |
| [`CollisionAvoidance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CollisionAvoidance)                                 | Gets or sets the CollisionAvoidance.                             |
| [`ConnectionSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ConnectionSize)                                         | Gets or sets the ConnectionSize.                                 |
| [`CornerNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CornerNodes)                                               | Gets the CornerNodes.                                            |
| [`Elements`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Elements)                                                     | Gets the Elements.                                               |
| [`GrowthRate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GrowthRate)                                                 | Gets or sets the GrowthRate.                                     |
| [`GrowthRateType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GrowthRateType)                                         | Gets or sets the GrowthRateType.                                 |
| [`GasketElements`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GasketElements)                                         | Gets the GasketElements.                                         |
| [`Hex20`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Hex20)                                                           | Gets the Hex20.                                                  |
| [`Hex8`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Hex8)                                                             | Gets the Hex8.                                                   |
| [`HoleRemovalTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.HoleRemovalTolerance)                             | Gets or sets the HoleRemovalTolerance.                           |
| [`InflationAlgorithm`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.InflationAlgorithm)                                 | Gets or sets the InflationAlgorithm.                             |
| [`MaximumHeightOverBase`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MaximumHeightOverBase)                           | Gets or sets the MaximumHeightOverBase.                          |
| [`FilletRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.FilletRatio)                                               | Gets or sets the FilletRatio.                                    |
| [`InflationOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.InflationOption)                                       | Gets or sets the InflationOption.                                |
| [`InitialSizeSeed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.InitialSizeSeed)                                       | Gets or sets the InitialSizeSeed.                                |
| [`AspectRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.AspectRatio)                                               | Gets or sets the AspectRatio.                                    |
| [`Line2`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Line2)                                                           | Gets the Line2.                                                  |
| [`Line3`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Line3)                                                           | Gets the Line3.                                                  |
| [`MaximumLayers`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MaximumLayers)                                           | Gets or sets the MaximumLayers.                                  |
| [`MidNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MidNodes)                                                     | Gets the MidNodes.                                               |
| [`Nodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Nodes)                                                           | Gets the Nodes.                                                  |
| [`NumberOfRetries`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.NumberOfRetries)                                       | Gets or sets the NumberOfRetries.                                |
| [`ProximityGapFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ProximityGapFactor)                                 | Gets or sets the ProximityGapFactor.                             |
| [`NumberOfCPUsForParallelPartMeshing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.NumberOfCPUsForParallelPartMeshing) | Gets or sets the NumberOfCPUsForParallelPartMeshing.             |
| [`OrientationNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.OrientationNodes)                                     | Gets the OrientationNodes.                                       |
| [`GeneratePinchOnRefresh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GeneratePinchOnRefresh)                         | Gets or sets the GeneratePinchOnRefresh.                         |
| [`Pyramid13`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Pyramid13)                                                   | Gets the Pyramid13.                                              |
| [`Pyramid5`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Pyramid5)                                                     | Gets the Pyramid5.                                               |
| [`Quad4`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Quad4)                                                           | Gets the Quad4.                                                  |
| [`Quad8`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Quad8)                                                           | Gets the Quad8.                                                  |
| [`Relevance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Relevance)                                                   | Gets or sets the Relevance.                                      |
| [`RelevanceCenter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.RelevanceCenter)                                       | Gets or sets the RelevanceCenter.                                |
| [`Resolution`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Resolution)                                                 | Gets or sets the Resolution.                                     |
| [`ShapeChecking`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ShapeChecking)                                           | Gets or sets the ShapeChecking.                                  |
| [`SharedNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SharedNodes)                                               | Gets the SharedNodes.                                            |
| [`ShellElements`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ShellElements)                                           | Gets the ShellElements.                                          |
| [`SmoothingIterations`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SmoothingIterations)                               | Gets or sets the SmoothingIterations.                            |
| [`Smoothing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Smoothing)                                                   | Gets or sets the Smoothing.                                      |
| [`SolidElements`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SolidElements)                                           | Gets the SolidElements.                                          |
| [`SolidShellElements`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SolidShellElements)                                 | Gets the SolidShellElements.                                     |
| [`SpanAngleCenter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SpanAngleCenter)                                       | Gets or sets the SpanAngleCenter.                                |
| [`TargetExplicitAspectRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.TargetExplicitAspectRatio)                   | Gets or sets the TargetExplicitAspectRatio.                      |
| [`TargetQuality`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.TargetQuality)                                           | Gets or sets the TargetQuality.                                  |
| [`Tet10`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Tet10)                                                           | Gets the Tet10.                                                  |
| [`Tet4`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Tet4)                                                             | Gets the Tet4.                                                   |
| [`TransitionOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.TransitionOption)                                     | Gets or sets the TransitionOption.                               |
| [`TransitionRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.TransitionRatio)                                       | Gets or sets the TransitionRatio.                                |
| [`GrowthRateSF`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.GrowthRateSF)                                             | Gets or sets the GrowthRateSF.                                   |
| [`Tri3`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Tri3)                                                             | Gets the Tri3.                                                   |
| [`Tri6`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Tri6)                                                             | Gets the Tri6.                                                   |
| [`TriangleSurfaceMesher`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.TriangleSurfaceMesher)                           | Gets or sets the TriangleSurfaceMesher.                          |
| [`UsePostSmoothing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.UsePostSmoothing)                                     | Gets or sets the UsePostSmoothing.                               |
| [`Wedge15`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Wedge15)                                                       | Gets the Wedge15.                                                |
| [`Wedge6`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Wedge6)                                                         | Gets the Wedge6.                                                 |
| [`CoplanarAngleTol`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CoplanarAngleTol)                                     | Gets or sets the CoplanarAngleTol.                               |
| [`FirstLayerHeight`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.FirstLayerHeight)                                     | Gets or sets the FirstLayerHeight.                               |
| [`MaximumAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MaximumAngle)                                             | Gets or sets the MaximumAngle.                                   |
| [`MaximumThickness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MaximumThickness)                                     | Gets or sets the MaximumThickness.                               |
| [`MaximumSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MaximumSize)                                               | Gets or sets the MaximumSize.                                    |
| [`DefeatureTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.DefeatureTolerance)                                 | Gets or sets the DefeatureTolerance.                             |
| [`Average`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Average)                                                       | Gets the Average.                                                |
| [`Maximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Maximum)                                                       | Gets the Maximum.                                                |
| [`Minimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Minimum)                                                       | Gets the Minimum.                                                |
| [`StandardDeviation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.StandardDeviation)                                   | Gets the StandardDeviation.                                      |
| [`MinimumEdgeLength`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MinimumEdgeLength)                                   | Gets the MinimumEdgeLength.                                      |
| [`MinimumSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MinimumSize)                                               | Gets or sets the MinimumSize.                                    |
| [`PinchTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PinchTolerance)                                         | Gets or sets the PinchTolerance.                                 |
| [`ProximityMinimumSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ProximityMinimumSize)                             | Gets or sets the ProximityMinimumSize.                           |
| [`CurvatureNormalAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CurvatureNormalAngle)                             | Gets or sets the CurvatureNormalAngle.                           |
| [`TargetCharacteristicLength`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.TargetCharacteristicLength)                 | Gets or sets the TargetCharacteristicLength.                     |
| [`TargetSkewness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.TargetSkewness)                                         | Gets or sets the TargetSkewness.                                 |
| [`DisplayStyle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.DisplayStyle)                                             | Gets or sets the DisplayStyle.                                   |
| [`ElementOrder`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ElementOrder)                                             | Gets or sets the ElementOrder.                                   |
| [`ExportFormat`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ExportFormat)                                             | Gets or sets the ExportFormat.                                   |
| [`InflationElementType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.InflationElementType)                             | Gets or Sets the InflationElementType                            |
| [`MeshMetric`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MeshMetric)                                                 | Gets or sets the MeshMetric.                                     |
| [`PhysicsPreference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.PhysicsPreference)                                   | Gets or sets the PhysicsPreference.                              |
| [`ExportUnit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ExportUnit)                                                 | Gets or sets the ExportUnit.                                     |
| [`ProximitySizeSources`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ProximitySizeSources)                             | Gets or sets the ProximitySizeSources.                           |
| [`SolverPreference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SolverPreference)                                     | Gets or sets the SolverPreference.                               |
| [`ViewAdvancedOptions`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ViewAdvancedOptions)                               | Gets or sets the ViewAdvancedOptions.                            |
| [`CaptureCurvature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CaptureCurvature)                                     | Gets or sets the CaptureCurvature.                               |
| [`CaptureProximity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.CaptureProximity)                                     | Gets or sets the CaptureProximity.                               |
| [`ExtraRetriesForAssembly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ExtraRetriesForAssembly)                       | Gets or sets the ExtraRetriesForAssembly.                        |
| [`MeshMorphing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MeshMorphing)                                             | Gets or sets the MeshMorphing.                                   |
| [`MultiConnectionSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MultiConnectionSteps)                             | Gets or sets the MultiConnectionSteps.                           |
| [`UseSheetThicknessForPinch`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.UseSheetThicknessForPinch)                   | Gets or sets the UseSheetThicknessForPinch.                      |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ReadOnly)                                                     | Gets the ReadOnly.                                               |
| [`SheetLoopRemoval`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.SheetLoopRemoval)                                     | Gets or sets the SheetLoopRemoval.                               |
| [`ShowDetailedStatistics`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.ShowDetailedStatistics)                         | Gets or sets the ShowDetailedStatistics.                         |
| [`StraightSidedElements`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.StraightSidedElements)                           | Gets or sets the StraightSidedElements.                          |
| [`TopologyChecking`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.TopologyChecking)                                     | Gets or sets the TopologyChecking.                               |
| [`UseAdaptiveSizing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.UseAdaptiveSizing)                                   | Gets or sets the UseAdaptiveSizing.                              |
| [`UseFixedSizeFunctionForSheets`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.UseFixedSizeFunctionForSheets)           | Gets or sets the UseFixedSizeFunctionForSheets.                  |
| [`QuadMesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.QuadMesh)                                                     | Gets or sets the QuadMesh.                                       |
| [`MeshBasedConnection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.MeshBasedConnection)                               | Gets or sets the MeshBasedConnection.                            |
| [`NamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.NamedSelection)                                         | Gets or sets the NamedSelection.                                 |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.DataModelObjectCategory)                       | Gets the current DataModelObject’s category.                     |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Children)                                                     | Gets the list of children.                                       |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Comments)                                                     | Gets the list of associated comments.                            |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Figures)                                                       | Gets the list of associated figures.                             |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Images)                                                         | Gets the list of associated images.                              |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#id0)                                                         | Gets the internal object. For advanced usage only.               |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.Properties)                                                 | Gets the list of properties for this object.                     |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#Mesh.VisibleProperties)                                   | Gets the list of properties that are visible for this object.    |

<a id="property-detail"></a>

## Property detail

<a id="Mesh.Worksheet"></a>

### *property* Mesh.Worksheet *: Ansys.ACT.Interfaces.Common.IWorksheet | [None](https://docs.python.org/3/library/constants.html#None)*

Get the MeshControlWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ElementSize"></a>

### *property* Mesh.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.RigidBodyFaceMeshType"></a>

### *property* Mesh.RigidBodyFaceMeshType *: [Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyFaceMeshType](../../../../Mechanical/DataModel/Enums/MeshControlGroupRigidBodyFaceMeshType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyFaceMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidBodyFaceMeshType.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.RigidBodyBehavior"></a>

### *property* Mesh.RigidBodyBehavior *: [Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyBehaviorType](../../../../Mechanical/DataModel/Enums/MeshControlGroupRigidBodyBehaviorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CurrentConfiguration"></a>

### *property* Mesh.CurrentConfiguration *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Assembly Mesh’s current configuration Id.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MinimizeNumTriangles"></a>

### *property* Mesh.MinimizeNumTriangles *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleReduction option for Batch Connections.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.NumberOfShellMeshQualityMetrics"></a>

### *property* Mesh.NumberOfShellMeshQualityMetrics *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of Mesh Quality Metrics

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GlobalUseCustomTargetLimit"></a>

### *property* Mesh.GlobalUseCustomTargetLimit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalUseCustomTargetLimit.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InternalObject"></a>

### *property* Mesh.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ConnectionTolerance"></a>

### *property* Mesh.ConnectionTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ConnectionToleranceList"></a>

### *property* Mesh.ConnectionToleranceList *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionToleranceList.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseAdvancedSizeFunction"></a>

### *property* Mesh.UseAdvancedSizeFunction *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAdvancedSizeFunction.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Method"></a>

### *property* Mesh.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseAutomaticInflation"></a>

### *property* Mesh.UseAutomaticInflation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAutomaticInflation.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AutomaticMeshBasedDefeaturing"></a>

### *property* Mesh.AutomaticMeshBasedDefeaturing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticMeshBasedDefeaturing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Beam3"></a>

### *property* Mesh.Beam3 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Beam3.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Beam4"></a>

### *property* Mesh.Beam4 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Beam4.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.BeamElements"></a>

### *property* Mesh.BeamElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BeamElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CheckMeshQuality"></a>

### *property* Mesh.CheckMeshQuality *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckMeshQuality.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CollisionAvoidance"></a>

### *property* Mesh.CollisionAvoidance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CollisionAvoidance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ConnectionSize"></a>

### *property* Mesh.ConnectionSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CornerNodes"></a>

### *property* Mesh.CornerNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CornerNodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Elements"></a>

### *property* Mesh.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GrowthRate"></a>

### *property* Mesh.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GrowthRateType"></a>

### *property* Mesh.GrowthRateType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRateType.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GasketElements"></a>

### *property* Mesh.GasketElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GasketElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Hex20"></a>

### *property* Mesh.Hex20 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Hex20.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Hex8"></a>

### *property* Mesh.Hex8 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Hex8.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.HoleRemovalTolerance"></a>

### *property* Mesh.HoleRemovalTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HoleRemovalTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InflationAlgorithm"></a>

### *property* Mesh.InflationAlgorithm *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumHeightOverBase"></a>

### *property* Mesh.MaximumHeightOverBase *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumHeightOverBase.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.FilletRatio"></a>

### *property* Mesh.FilletRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilletRatio.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InflationOption"></a>

### *property* Mesh.InflationOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationOption.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InitialSizeSeed"></a>

### *property* Mesh.InitialSizeSeed *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialSizeSeed.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AspectRatio"></a>

### *property* Mesh.AspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Line2"></a>

### *property* Mesh.Line2 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Line2.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Line3"></a>

### *property* Mesh.Line3 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Line3.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumLayers"></a>

### *property* Mesh.MaximumLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumLayers.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MidNodes"></a>

### *property* Mesh.MidNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MidNodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Nodes"></a>

### *property* Mesh.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.NumberOfRetries"></a>

### *property* Mesh.NumberOfRetries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRetries.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ProximityGapFactor"></a>

### *property* Mesh.ProximityGapFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityGapFactor.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.NumberOfCPUsForParallelPartMeshing"></a>

### *property* Mesh.NumberOfCPUsForParallelPartMeshing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCPUsForParallelPartMeshing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.OrientationNodes"></a>

### *property* Mesh.OrientationNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OrientationNodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GeneratePinchOnRefresh"></a>

### *property* Mesh.GeneratePinchOnRefresh *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratePinchOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Pyramid13"></a>

### *property* Mesh.Pyramid13 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pyramid13.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Pyramid5"></a>

### *property* Mesh.Pyramid5 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pyramid5.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Quad4"></a>

### *property* Mesh.Quad4 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Quad4.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Quad8"></a>

### *property* Mesh.Quad8 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Quad8.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Relevance"></a>

### *property* Mesh.Relevance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Relevance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.RelevanceCenter"></a>

### *property* Mesh.RelevanceCenter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelevanceCenter.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Resolution"></a>

### *property* Mesh.Resolution *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Resolution.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShapeChecking"></a>

### *property* Mesh.ShapeChecking *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShapeChecking.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SharedNodes"></a>

### *property* Mesh.SharedNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SharedNodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShellElements"></a>

### *property* Mesh.ShellElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShellElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SmoothingIterations"></a>

### *property* Mesh.SmoothingIterations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothingIterations.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Smoothing"></a>

### *property* Mesh.Smoothing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Smoothing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SolidElements"></a>

### *property* Mesh.SolidElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SolidShellElements"></a>

### *property* Mesh.SolidShellElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidShellElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SpanAngleCenter"></a>

### *property* Mesh.SpanAngleCenter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpanAngleCenter.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TargetExplicitAspectRatio"></a>

### *property* Mesh.TargetExplicitAspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetExplicitAspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TargetQuality"></a>

### *property* Mesh.TargetQuality *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetQuality.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Tet10"></a>

### *property* Mesh.Tet10 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tet10.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Tet4"></a>

### *property* Mesh.Tet4 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tet4.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TransitionOption"></a>

### *property* Mesh.TransitionOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionOption.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TransitionRatio"></a>

### *property* Mesh.TransitionRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionRatio.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GrowthRateSF"></a>

### *property* Mesh.GrowthRateSF *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRateSF.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Tri3"></a>

### *property* Mesh.Tri3 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tri3.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Tri6"></a>

### *property* Mesh.Tri6 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tri6.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TriangleSurfaceMesher"></a>

### *property* Mesh.TriangleSurfaceMesher *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleSurfaceMesher.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UsePostSmoothing"></a>

### *property* Mesh.UsePostSmoothing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UsePostSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Wedge15"></a>

### *property* Mesh.Wedge15 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Wedge15.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Wedge6"></a>

### *property* Mesh.Wedge6 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Wedge6.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CoplanarAngleTol"></a>

### *property* Mesh.CoplanarAngleTol *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoplanarAngleTol.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.FirstLayerHeight"></a>

### *property* Mesh.FirstLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FirstLayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumAngle"></a>

### *property* Mesh.MaximumAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumAngle.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumThickness"></a>

### *property* Mesh.MaximumThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumThickness.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumSize"></a>

### *property* Mesh.MaximumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DefeatureTolerance"></a>

### *property* Mesh.DefeatureTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Average"></a>

### *property* Mesh.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Maximum"></a>

### *property* Mesh.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Minimum"></a>

### *property* Mesh.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.StandardDeviation"></a>

### *property* Mesh.StandardDeviation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MinimumEdgeLength"></a>

### *property* Mesh.MinimumEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MinimumSize"></a>

### *property* Mesh.MinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PinchTolerance"></a>

### *property* Mesh.PinchTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ProximityMinimumSize"></a>

### *property* Mesh.ProximityMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CurvatureNormalAngle"></a>

### *property* Mesh.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TargetCharacteristicLength"></a>

### *property* Mesh.TargetCharacteristicLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCharacteristicLength.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TargetSkewness"></a>

### *property* Mesh.TargetSkewness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetSkewness.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DisplayStyle"></a>

### *property* Mesh.DisplayStyle *: [Ansys.Mechanical.DataModel.Enums.MeshDisplayStyle](../../../../Mechanical/DataModel/Enums/MeshDisplayStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshDisplayStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayStyle.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ElementOrder"></a>

### *property* Mesh.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOrder.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ExportFormat"></a>

### *property* Mesh.ExportFormat *: [Ansys.Mechanical.DataModel.Enums.FluentExportMeshType](../../../../Mechanical/DataModel/Enums/FluentExportMeshType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FluentExportMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportFormat.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InflationElementType"></a>

### *property* Mesh.InflationElementType *: [Ansys.Mechanical.DataModel.Enums.MeshInflationElementType](../../../../Mechanical/DataModel/Enums/MeshInflationElementType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshInflationElementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the InflationElementType

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MeshMetric"></a>

### *property* Mesh.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PhysicsPreference"></a>

### *property* Mesh.PhysicsPreference *: [Ansys.Mechanical.DataModel.Enums.MeshPhysicsPreferenceType](../../../../Mechanical/DataModel/Enums/MeshPhysicsPreferenceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshPhysicsPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhysicsPreference.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ExportUnit"></a>

### *property* Mesh.ExportUnit *: [Ansys.Mechanical.DataModel.Enums.PolyflowExportUnit](../../../../Mechanical/DataModel/Enums/PolyflowExportUnit.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PolyflowExportUnit) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportUnit.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ProximitySizeSources"></a>

### *property* Mesh.ProximitySizeSources *: [Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType](../../../../Mechanical/DataModel/Enums/ProximitySFSourcesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximitySizeSources.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SolverPreference"></a>

### *property* Mesh.SolverPreference *: [Ansys.Mechanical.DataModel.Enums.MeshSolverPreferenceType](../../../../Mechanical/DataModel/Enums/MeshSolverPreferenceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshSolverPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPreference.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ViewAdvancedOptions"></a>

### *property* Mesh.ViewAdvancedOptions *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewAdvancedOptions.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CaptureCurvature"></a>

### *property* Mesh.CaptureCurvature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureCurvature.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CaptureProximity"></a>

### *property* Mesh.CaptureProximity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureProximity.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ExtraRetriesForAssembly"></a>

### *property* Mesh.ExtraRetriesForAssembly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExtraRetriesForAssembly.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MeshMorphing"></a>

### *property* Mesh.MeshMorphing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshMorphing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MultiConnectionSteps"></a>

### *property* Mesh.MultiConnectionSteps *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiConnectionSteps.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseSheetThicknessForPinch"></a>

### *property* Mesh.UseSheetThicknessForPinch *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseSheetThicknessForPinch.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ReadOnly"></a>

### *property* Mesh.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SheetLoopRemoval"></a>

### *property* Mesh.SheetLoopRemoval *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SheetLoopRemoval.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowDetailedStatistics"></a>

### *property* Mesh.ShowDetailedStatistics *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowDetailedStatistics.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.StraightSidedElements"></a>

### *property* Mesh.StraightSidedElements *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StraightSidedElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TopologyChecking"></a>

### *property* Mesh.TopologyChecking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopologyChecking.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseAdaptiveSizing"></a>

### *property* Mesh.UseAdaptiveSizing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAdaptiveSizing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseFixedSizeFunctionForSheets"></a>

### *property* Mesh.UseFixedSizeFunctionForSheets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseFixedSizeFunctionForSheets.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.QuadMesh"></a>

### *property* Mesh.QuadMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuadMesh.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MeshBasedConnection"></a>

### *property* Mesh.MeshBasedConnection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshBasedConnection.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.NamedSelection"></a>

### *property* Mesh.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DataModelObjectCategory"></a>

### *property* Mesh.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Children"></a>

### *property* Mesh.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Comments"></a>

### *property* Mesh.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Figures"></a>

### *property* Mesh.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Images"></a>

### *property* Mesh.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Mesh.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Properties"></a>

### *property* Mesh.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.VisibleProperties"></a>

### *property* Mesh.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Mesh.PreviewWelds"></a>

### Mesh.PreviewWelds()

Preview Welds.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewMeshOnWelds"></a>

### Mesh.PreviewMeshOnWelds(dataModelObjects: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

PreviewMeshOnWelds method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewMeshOnWeld"></a>

### Mesh.PreviewMeshOnWeld(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Preview model mesh on one weld control provided.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewMeshOnAllWelds"></a>

### Mesh.PreviewMeshOnAllWelds()

Preview model mesh on all weld controls of the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowOverlappingFaces"></a>

### Mesh.ShowOverlappingFaces()

Run the ShowOverlappingFaces action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowUnconnectedFacesNearEdges"></a>

### Mesh.ShowUnconnectedFacesNearEdges()

Run the  ShowUnconnectedFreeEdges action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewMeshOnWeldWorksheet"></a>

### Mesh.PreviewMeshOnWeldWorksheet(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject, indices: System.Collections.Generic.IEnumerable[System.Int32])

PreviewMeshOnWeldWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ClearGeneratedData"></a>

### Mesh.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CleanPartOrBody"></a>

### Mesh.CleanPartOrBody(dataModelObjects: System.Collections.IEnumerable)

Clear generated data for parts and/or bodies provided.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddNodeMergeGroup"></a>

### Mesh.AddNodeMergeGroup()

Add a new NodeMergeGroup.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddNodeMerge"></a>

### Mesh.AddNodeMerge()

Add a new NodeMerge.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddAutomaticMethod"></a>

### Mesh.AddAutomaticMethod()

Creates a new AutomaticMethod

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddMeshConnectionGroup"></a>

### Mesh.AddMeshConnectionGroup()

Add a new MeshConnectionGroup.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddContactMatchGroup"></a>

### Mesh.AddContactMatchGroup()

Add a new AddContactMatchGroup.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddManualMeshConnection"></a>

### Mesh.AddManualMeshConnection()

Add a new ManualMeshConnection

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddPullExtrude"></a>

### Mesh.AddPullExtrude()

Add a new Pull (Extrude).

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddPullRevolve"></a>

### Mesh.AddPullRevolve()

Add a new Pull (Revolve).

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddPullSurfaceCoating"></a>

### Mesh.AddPullSurfaceCoating()

Add a new Pull (Surface Coating)).

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddDirectMorph"></a>

### Mesh.AddDirectMorph()

Add a new DirectMorph.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddDeviation"></a>

### Mesh.AddDeviation()

Creates a new SagControl

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddWasher"></a>

### Mesh.AddWasher()

Creates a new SagControl

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddWeld"></a>

### Mesh.AddWeld()

Creates a new WeldControl

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddRepairTopology"></a>

### Mesh.AddRepairTopology()

Creates a new RepairTopology

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddConnect"></a>

### Mesh.AddConnect()

Creates a new Connect Control

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddFeatureSuppress"></a>

### Mesh.AddFeatureSuppress()

Creates a new FeatureSuppress

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddGeometryFidelity"></a>

### Mesh.AddGeometryFidelity()

Creates a new GeometryFidelity

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddMeshCopy"></a>

### Mesh.AddMeshCopy()

Creates a new MeshCopy

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PinchControlGeomtry"></a>

### Mesh.PinchControlGeomtry(geomType: [Ansys.Mechanical.DataModel.Enums.MeshControlPinchGeomtryType](../../../../Mechanical/DataModel/Enums/MeshControlPinchGeomtryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshControlPinchGeomtryType))

Set the geometry type for the Pinch Control.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.IsMeshMetricVisible"></a>

### Mesh.IsMeshMetricVisible(index: System.UInt32)

IsMeshMetricVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetIsShellTargetMetric"></a>

### Mesh.GetIsShellTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Shell Target Metric

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetActiveSurfaceMeshQuality"></a>

### Mesh.GetActiveSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Active User Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityName"></a>

### Mesh.GetSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityWarningLimit"></a>

### Mesh.GetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get User Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityErrorLimit"></a>

### Mesh.GetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get User Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityPercentageFailed"></a>

### Mesh.GetSurfaceMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityCountFailed"></a>

### Mesh.GetSurfaceMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityWarningPercentageFailed"></a>

### Mesh.GetSurfaceMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityWarningCountFailed"></a>

### Mesh.GetSurfaceMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityWorstMetricValue"></a>

### Mesh.GetSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityAverageMetricValue"></a>

### Mesh.GetSurfaceMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetActiveSurfaceMeshQuality"></a>

### Mesh.SetActiveSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), activeMetric: System.Double)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSurfaceMeshQualityWarningLimit"></a>

### Mesh.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: System.Double)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Mesh.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSurfaceMeshQualityErrorLimit"></a>

### Mesh.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: System.Double)

Set Mesh Quality Error Level

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### Mesh.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Error Level

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreateMQSurfaceElementsNamedSelection"></a>

### Mesh.CreateMQSurfaceElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), failCode: System.UInt32)

Create Mesh Quality Surface Element Named Selection

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetIsSolidTargetMetric"></a>

### Mesh.GetIsSolidTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Solid Target Metric

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityName"></a>

### Mesh.GetVolumeMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWarningLimit"></a>

### Mesh.GetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityErrorLimit"></a>

### Mesh.GetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityPercentageFailed"></a>

### Mesh.GetVolumeMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityCountFailed"></a>

### Mesh.GetVolumeMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWarningPercentageFailed"></a>

### Mesh.GetVolumeMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWarningCountFailed"></a>

### Mesh.GetVolumeMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWorstMetricValue"></a>

### Mesh.GetVolumeMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityAverageMetricValue"></a>

### Mesh.GetVolumeMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWorstMetricBackgroundColor"></a>

### Mesh.GetVolumeMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetActiveVolumeMeshQuality"></a>

### Mesh.SetActiveVolumeMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), activeMetric: System.Double)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetVolumeMeshQualityWarningLimit"></a>

### Mesh.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: System.Double)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### Mesh.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetVolumeMeshQualityErrorLimit"></a>

### Mesh.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: System.Double)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### Mesh.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreateMQVolumeElementsNamedSelection"></a>

### Mesh.CreateMQVolumeElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), failCode: System.UInt32)

Create Mesh Quality Volume Element Name Selection

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetIsSolidSurfaceTargetMetric"></a>

### Mesh.GetIsSolidSurfaceTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get SolidSurface Target Metric

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityName"></a>

### Mesh.GetSolidSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWarningLimit"></a>

### Mesh.GetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityErrorLimit"></a>

### Mesh.GetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityPercentageFailed"></a>

### Mesh.GetSolidSurfaceMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityCountFailed"></a>

### Mesh.GetSolidSurfaceMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWarningPercentageFailed"></a>

### Mesh.GetSolidSurfaceMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWarningCountFailed"></a>

### Mesh.GetSolidSurfaceMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWorstMetricValue"></a>

### Mesh.GetSolidSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityAverageMetricValue"></a>

### Mesh.GetSolidSurfaceMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor"></a>

### Mesh.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetActiveSolidSurfaceMeshQuality"></a>

### Mesh.SetActiveSolidSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), activeMetric: System.Double)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSolidSurfaceMeshQualityWarningLimit"></a>

### Mesh.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: System.Double)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### Mesh.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSolidSurfaceMeshQualityErrorLimit"></a>

### Mesh.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: System.Double)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### Mesh.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreateMQSolidSurfaceElementsNamedSelection"></a>

### Mesh.CreateMQSolidSurfaceElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), failCode: System.UInt32)

Create Mesh Quality SolidSurface Element Name Selection

<!-- !! processed by numpydoc !! -->

<a id="Mesh.LoadMQWorksheetFile"></a>

### Mesh.LoadMQWorksheetFile(filePath: System.String)

LoadMQWorksheetFile method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SaveMQWorksheetFile"></a>

### Mesh.SaveMQWorksheetFile(filePath: System.String)

SaveMQWorksheetFile method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshMetrics"></a>

### Mesh.GetVolumeMeshMetrics()

GetVolumeMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshMetrics"></a>

### Mesh.GetSolidSurfaceMeshMetrics()

GetSolidSurfaceMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSurfaceMeshMetricLimits"></a>

### Mesh.SetSurfaceMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLimit: Ansys.Core.Units.Quantity, ErrorLimit: Ansys.Core.Units.Quantity)

SetSurfaceMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSolidMeshMetricLimits"></a>

### Mesh.SetSolidMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLimit: Ansys.Core.Units.Quantity, ErrorLimit: Ansys.Core.Units.Quantity)

SetSolidMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSolidSurfaceMeshMetricLimits"></a>

### Mesh.SetSolidSurfaceMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLimit: Ansys.Core.Units.Quantity, ErrorLimit: Ansys.Core.Units.Quantity)

SetSolidSurfaceMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ActivateAllSurfaceWorksheetRows"></a>

### Mesh.ActivateAllSurfaceWorksheetRows()

ActivateAllSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ActivateAllVolumeWorksheetRows"></a>

### Mesh.ActivateAllVolumeWorksheetRows()

ActivateAllVolumeWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ActivateAllSolidSurfaceWorksheetRows"></a>

### Mesh.ActivateAllSolidSurfaceWorksheetRows()

ActivateAllSolidSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DeactivateAllSurfaceWorksheetRows"></a>

### Mesh.DeactivateAllSurfaceWorksheetRows()

DeactivateAllSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DeactivateAllVolumeWorksheetRows"></a>

### Mesh.DeactivateAllVolumeWorksheetRows()

DeactivateAllVolumeWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DeactivateAllSolidSurfaceWorksheetRows"></a>

### Mesh.DeactivateAllSolidSurfaceWorksheetRows()

DeactivateAllSolidSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetMeshMetricOptions"></a>

### Mesh.SetMeshMetricOptions(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType), prefValue: Ansys.Mechanical.DataModel.Enums.MetricPreference)

SetMeshMetricOptions method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetMeshMetricOptions"></a>

### Mesh.GetMeshMetricOptions(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

GetMeshMetricOptions method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddContactSizing"></a>

### Mesh.AddContactSizing()

Creates a new ContactSizing

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddFaceMeshing"></a>

### Mesh.AddFaceMeshing()

Creates a new FaceMeshing

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddInflation"></a>

### Mesh.AddInflation()

Creates a new Inflation

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddMatchControl"></a>

### Mesh.AddMatchControl()

Creates a new MatchControl

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddPinch"></a>

### Mesh.AddPinch()

Creates a new Pinch

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddRefinement"></a>

### Mesh.AddRefinement()

Creates a new Refinement

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddSizing"></a>

### Mesh.AddSizing()

Creates a new Sizing

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreatePinchControls"></a>

### Mesh.CreatePinchControls()

Run the CreatePinchControls action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GenerateMesh"></a>

### Mesh.GenerateMesh()

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewInflation"></a>

### Mesh.PreviewInflation()

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewSurfaceMesh"></a>

### Mesh.PreviewSurfaceMesh()

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowFeatureSuppressibleFaces"></a>

### Mesh.ShowFeatureSuppressibleFaces()

Run the ShowFeatureSuppressibleFaces action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowMappableBodies"></a>

### Mesh.ShowMappableBodies()

Run the ShowMappableBodies action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowSweepableBodies"></a>

### Mesh.ShowSweepableBodies()

Run the ShowSweepableBodies action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Update"></a>

### Mesh.Update()

Run the Update action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetChildren"></a>

### Mesh.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### Mesh.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddComment"></a>

### Mesh.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddFigure"></a>

### Mesh.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddImage"></a>

### Mesh.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Activate"></a>

### Mesh.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CopyTo"></a>

### Mesh.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Duplicate"></a>

### Mesh.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GroupAllSimilarChildren"></a>

### Mesh.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GroupSimilarObjects"></a>

### Mesh.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PropertyByName"></a>

### Mesh.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PropertyByAPIName"></a>

### Mesh.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreateParameter"></a>

### Mesh.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetParameter"></a>

### Mesh.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.RemoveParameter"></a>

### Mesh.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

