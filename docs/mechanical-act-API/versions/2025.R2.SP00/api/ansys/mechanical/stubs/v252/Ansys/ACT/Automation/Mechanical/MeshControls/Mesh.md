# `Mesh`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Mesh"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Mesh

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Mesh.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Mesh.Activate)                                                                                         | Activate the current object.                                                      |
| [`ActivateAllSolidSurfaceWorksheetRows`](#Mesh.ActivateAllSolidSurfaceWorksheetRows)                                 | ActivateAllSolidSurfaceWorksheetRows method.                                      |
| [`ActivateAllSurfaceWorksheetRows`](#Mesh.ActivateAllSurfaceWorksheetRows)                                           | ActivateAllSurfaceWorksheetRows method.                                           |
| [`ActivateAllVolumeWorksheetRows`](#Mesh.ActivateAllVolumeWorksheetRows)                                             | ActivateAllVolumeWorksheetRows method.                                            |
| [`AddAutomaticMethod`](#Mesh.AddAutomaticMethod)                                                                     | Creates a new AutomaticMethod                                                     |
| [`AddComment`](#Mesh.AddComment)                                                                                     | Creates a new child Comment.                                                      |
| [`AddConnect`](#Mesh.AddConnect)                                                                                     | Creates a new Connect Control                                                     |
| [`AddContactMatchGroup`](#Mesh.AddContactMatchGroup)                                                                 | Add a new AddContactMatchGroup.                                                   |
| [`AddContactSizing`](#Mesh.AddContactSizing)                                                                         | Creates a new ContactSizing                                                       |
| [`AddDeviation`](#Mesh.AddDeviation)                                                                                 | Creates a new SagControl                                                          |
| [`AddDirectMorph`](#Mesh.AddDirectMorph)                                                                             | Add a new DirectMorph.                                                            |
| [`AddFaceMeshing`](#Mesh.AddFaceMeshing)                                                                             | Creates a new FaceMeshing                                                         |
| [`AddFeatureSuppress`](#Mesh.AddFeatureSuppress)                                                                     | Creates a new FeatureSuppress                                                     |
| [`AddFigure`](#Mesh.AddFigure)                                                                                       | Creates a new child Figure.                                                       |
| [`AddGasket`](#Mesh.AddGasket)                                                                                       | Adds a Gasket Object under Mesh                                                   |
| [`AddGeometryFidelity`](#Mesh.AddGeometryFidelity)                                                                   | Creates a new GeometryFidelity                                                    |
| [`AddImage`](#Mesh.AddImage)                                                                                         | Creates a new child Image.                                                        |
| [`AddInflation`](#Mesh.AddInflation)                                                                                 | Creates a new Inflation                                                           |
| [`AddManualMeshConnection`](#Mesh.AddManualMeshConnection)                                                           | Add a new ManualMeshConnection                                                    |
| [`AddMatchControl`](#Mesh.AddMatchControl)                                                                           | Creates a new MatchControl                                                        |
| [`AddMeshConnectionGroup`](#Mesh.AddMeshConnectionGroup)                                                             | Add a new MeshConnectionGroup.                                                    |
| [`AddMeshCopy`](#Mesh.AddMeshCopy)                                                                                   | Creates a new MeshCopy                                                            |
| [`AddMeshLayers`](#Mesh.AddMeshLayers)                                                                               | Adds Mesh Layers when contour enabled in Mesh Quality Workhseet mode.             |
| [`AddNodeMerge`](#Mesh.AddNodeMerge)                                                                                 | Add a new NodeMerge.                                                              |
| [`AddNodeMergeGroup`](#Mesh.AddNodeMergeGroup)                                                                       | Add a new NodeMergeGroup.                                                         |
| [`AddPinch`](#Mesh.AddPinch)                                                                                         | Creates a new Pinch                                                               |
| [`AddPullExtrude`](#Mesh.AddPullExtrude)                                                                             | Add a new Pull (Extrude).                                                         |
| [`AddPullRevolve`](#Mesh.AddPullRevolve)                                                                             | Add a new Pull (Revolve).                                                         |
| [`AddPullSurfaceCoating`](#Mesh.AddPullSurfaceCoating)                                                               | Add a new Pull (Surface Coating)).                                                |
| [`AddRefinement`](#Mesh.AddRefinement)                                                                               | Creates a new Refinement                                                          |
| [`AddRepairTopology`](#Mesh.AddRepairTopology)                                                                       | Creates a new RepairTopology                                                      |
| [`AddSizing`](#Mesh.AddSizing)                                                                                       | Creates a new Sizing                                                              |
| [`AddTopologySuppressControl`](#Mesh.AddTopologySuppressControl)                                                     | Creates a new TopologySuppressControl                                             |
| [`AddWasher`](#Mesh.AddWasher)                                                                                       | Creates a new SagControl                                                          |
| [`AddWeld`](#Mesh.AddWeld)                                                                                           | Creates a new WeldControl                                                         |
| [`CleanPartOrBody`](#Mesh.CleanPartOrBody)                                                                           | Clear generated data for parts and/or bodies provided.                            |
| [`ClearGeneratedData`](#Mesh.ClearGeneratedData)                                                                     | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#Mesh.CopyTo)                                                                                             | Copies all visible properties from this object to another.                        |
| [`CreateMQSolidSurfaceElementsNamedSelection`](#Mesh.CreateMQSolidSurfaceElementsNamedSelection)                     | Create Mesh Quality SolidSurface Element Name Selection                           |
| [`CreateMQSurfaceElementsNamedSelection`](#Mesh.CreateMQSurfaceElementsNamedSelection)                               | Create Mesh Quality Surface Element Named Selection                               |
| [`CreateMQVolumeElementsNamedSelection`](#Mesh.CreateMQVolumeElementsNamedSelection)                                 | Create Mesh Quality Volume Element Name Selection                                 |
| [`CreateParameter`](#Mesh.CreateParameter)                                                                           | Creates a new parameter for a Property.                                           |
| [`CreatePinchControls`](#Mesh.CreatePinchControls)                                                                   | Run the CreatePinchControls action.                                               |
| [`DeactivateAllSolidSurfaceWorksheetRows`](#Mesh.DeactivateAllSolidSurfaceWorksheetRows)                             | DeactivateAllSolidSurfaceWorksheetRows method.                                    |
| [`DeactivateAllSurfaceWorksheetRows`](#Mesh.DeactivateAllSurfaceWorksheetRows)                                       | DeactivateAllSurfaceWorksheetRows method.                                         |
| [`DeactivateAllVolumeWorksheetRows`](#Mesh.DeactivateAllVolumeWorksheetRows)                                         | DeactivateAllVolumeWorksheetRows method.                                          |
| [`Duplicate`](#Mesh.Duplicate)                                                                                       | Creates a copy of the current DataModelObject.                                    |
| [`ExportWeldDefinitionFile`](#Mesh.ExportWeldDefinitionFile)                                                         | Export the weld definition file to the specified location.                        |
| [`GenerateMesh`](#Mesh.GenerateMesh)                                                                                 | Run the GenerateMesh action.                                                      |
| [`GetActiveSurfaceMeshQuality`](#Mesh.GetActiveSurfaceMeshQuality)                                                   | Get Active User Mesh Quality                                                      |
| [`GetChildren`](#Mesh.GetChildren)                                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetIsShellTargetMetric`](#Mesh.GetIsShellTargetMetric)                                                             | Get Shell Target Metric                                                           |
| [`GetIsSolidSurfaceTargetMetric`](#Mesh.GetIsSolidSurfaceTargetMetric)                                               | Get SolidSurface Target Metric                                                    |
| [`GetIsSolidTargetMetric`](#Mesh.GetIsSolidTargetMetric)                                                             | Get Solid Target Metric                                                           |
| [`GetMeshMetricOptions`](#Mesh.GetMeshMetricOptions)                                                                 | GetMeshMetricOptions method.                                                      |
| [`GetParameter`](#Mesh.GetParameter)                                                                                 | Gets the parameter corresponding to the given property.                           |
| [`GetSolidSurfaceMeshMetrics`](#Mesh.GetSolidSurfaceMeshMetrics)                                                     | GetSolidSurfaceMeshMetrics method.                                                |
| [`GetSolidSurfaceMeshQualityAverageMetricValue`](#Mesh.GetSolidSurfaceMeshQualityAverageMetricValue)                 | Get Mesh Quality Average Metric Value                                             |
| [`GetSolidSurfaceMeshQualityCountFailed`](#Mesh.GetSolidSurfaceMeshQualityCountFailed)                               | Get Mesh Quality Count Failed                                                     |
| [`GetSolidSurfaceMeshQualityErrorLimit`](#Mesh.GetSolidSurfaceMeshQualityErrorLimit)                                 | Get Mesh Quality Error Limit                                                      |
| [`GetSolidSurfaceMeshQualityName`](#Mesh.GetSolidSurfaceMeshQualityName)                                             | Get Mesh Quality Name                                                             |
| [`GetSolidSurfaceMeshQualityPercentageFailed`](#Mesh.GetSolidSurfaceMeshQualityPercentageFailed)                     | Get Mesh Quality Percentage Failed                                                |
| [`GetSolidSurfaceMeshQualityWarningCountFailed`](#Mesh.GetSolidSurfaceMeshQualityWarningCountFailed)                 | Get Mesh Quality Warning Count Failed                                             |
| [`GetSolidSurfaceMeshQualityWarningLimit`](#Mesh.GetSolidSurfaceMeshQualityWarningLimit)                             | Get Mesh Quality Warning Limit                                                    |
| [`GetSolidSurfaceMeshQualityWarningPercentageFailed`](#Mesh.GetSolidSurfaceMeshQualityWarningPercentageFailed)       | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetSolidSurfaceMeshQualityWorstMetricBackgroundColor`](#Mesh.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor) | Get Mesh Quality Worst Metric BackgroundColor                                     |
| [`GetSolidSurfaceMeshQualityWorstMetricValue`](#Mesh.GetSolidSurfaceMeshQualityWorstMetricValue)                     | Get Mesh Quality Worst Metric Value                                               |
| [`GetSurfaceMeshQualityAverageMetricValue`](#Mesh.GetSurfaceMeshQualityAverageMetricValue)                           | Get Mesh Quality Average Metric Value                                             |
| [`GetSurfaceMeshQualityCountFailed`](#Mesh.GetSurfaceMeshQualityCountFailed)                                         | Get Mesh Quality Count Failed                                                     |
| [`GetSurfaceMeshQualityErrorLimit`](#Mesh.GetSurfaceMeshQualityErrorLimit)                                           | Get User Mesh Quality Error Limit                                                 |
| [`GetSurfaceMeshQualityName`](#Mesh.GetSurfaceMeshQualityName)                                                       | Get Mesh Quality Name                                                             |
| [`GetSurfaceMeshQualityPercentageFailed`](#Mesh.GetSurfaceMeshQualityPercentageFailed)                               | Get Mesh Quality Percentage Failed                                                |
| [`GetSurfaceMeshQualityWarningCountFailed`](#Mesh.GetSurfaceMeshQualityWarningCountFailed)                           | Get Mesh Quality Warning Count Failed                                             |
| [`GetSurfaceMeshQualityWarningLimit`](#Mesh.GetSurfaceMeshQualityWarningLimit)                                       | Get User Mesh Quality Warning Limit                                               |
| [`GetSurfaceMeshQualityWarningPercentageFailed`](#Mesh.GetSurfaceMeshQualityWarningPercentageFailed)                 | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetSurfaceMeshQualityWorstMetricValue`](#Mesh.GetSurfaceMeshQualityWorstMetricValue)                               | Get Mesh Quality Worst Metric Value                                               |
| [`GetVolumeMeshMetrics`](#Mesh.GetVolumeMeshMetrics)                                                                 | GetVolumeMeshMetrics method.                                                      |
| [`GetVolumeMeshQualityAverageMetricValue`](#Mesh.GetVolumeMeshQualityAverageMetricValue)                             | Get Mesh Quality Average Metric Value                                             |
| [`GetVolumeMeshQualityCountFailed`](#Mesh.GetVolumeMeshQualityCountFailed)                                           | Get Mesh Quality Count Failed                                                     |
| [`GetVolumeMeshQualityErrorLimit`](#Mesh.GetVolumeMeshQualityErrorLimit)                                             | Get Mesh Quality Error Limit                                                      |
| [`GetVolumeMeshQualityName`](#Mesh.GetVolumeMeshQualityName)                                                         | Get Mesh Quality Name                                                             |
| [`GetVolumeMeshQualityPercentageFailed`](#Mesh.GetVolumeMeshQualityPercentageFailed)                                 | Get Mesh Quality Percentage Failed                                                |
| [`GetVolumeMeshQualityWarningCountFailed`](#Mesh.GetVolumeMeshQualityWarningCountFailed)                             | Get Mesh Quality Warning Count Failed                                             |
| [`GetVolumeMeshQualityWarningLimit`](#Mesh.GetVolumeMeshQualityWarningLimit)                                         | Get Mesh Quality Warning Limit                                                    |
| [`GetVolumeMeshQualityWarningPercentageFailed`](#Mesh.GetVolumeMeshQualityWarningPercentageFailed)                   | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetVolumeMeshQualityWorstMetricBackgroundColor`](#Mesh.GetVolumeMeshQualityWorstMetricBackgroundColor)             | Get Mesh Quality Worst Metric BackgroundColor                                     |
| [`GetVolumeMeshQualityWorstMetricValue`](#Mesh.GetVolumeMeshQualityWorstMetricValue)                                 | Get Mesh Quality Worst Metric Value                                               |
| [`GroupAllSimilarChildren`](#Mesh.GroupAllSimilarChildren)                                                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Mesh.GroupSimilarObjects)                                                                   | Run the GroupSimilarObjects action.                                               |
| [`IsMeshMetricVisible`](#Mesh.IsMeshMetricVisible)                                                                   | IsMeshMetricVisible method.                                                       |
| [`LoadMQWorksheetFile`](#Mesh.LoadMQWorksheetFile)                                                                   | LoadMQWorksheetFile method.                                                       |
| [`PinchControlGeomtry`](#Mesh.PinchControlGeomtry)                                                                   | Set the geometry type for the Pinch Control.                                      |
| [`PreviewInflation`](#Mesh.PreviewInflation)                                                                         | Run the PreviewInflation action.                                                  |
| [`PreviewMeshOnAllWelds`](#Mesh.PreviewMeshOnAllWelds)                                                               | Preview model mesh on all weld controls of the Mesh.                              |
| [`PreviewMeshOnWeld`](#Mesh.PreviewMeshOnWeld)                                                                       | Preview model mesh on one weld control provided.                                  |
| [`PreviewMeshOnWeldWorksheet`](#Mesh.PreviewMeshOnWeldWorksheet)                                                     | PreviewMeshOnWeldWorksheet method.                                                |
| [`PreviewMeshOnWelds`](#Mesh.PreviewMeshOnWelds)                                                                     | PreviewMeshOnWelds method.                                                        |
| [`PreviewSurfaceMesh`](#Mesh.PreviewSurfaceMesh)                                                                     | Run the PreviewSurfaceMesh action.                                                |
| [`PreviewWelds`](#Mesh.PreviewWelds)                                                                                 | Preview Welds.                                                                    |
| [`PropertyByAPIName`](#Mesh.PropertyByAPIName)                                                                       | Get a property by its API name.                                                   |
| [`PropertyByName`](#Mesh.PropertyByName)                                                                             | Get a property by its unique name.                                                |
| [`RemoveMeshLayers`](#Mesh.RemoveMeshLayers)                                                                         | Removes Mesh Layers when contour enabled in Mesh Quality Workhseet mode.          |
| [`RemoveParameter`](#Mesh.RemoveParameter)                                                                           | Removes the parameter from the parameter set corresponding to the given property. |
| [`SaveMQWorksheetFile`](#Mesh.SaveMQWorksheetFile)                                                                   | SaveMQWorksheetFile method.                                                       |
| [`SetActiveSolidSurfaceMeshQuality`](#Mesh.SetActiveSolidSurfaceMeshQuality)                                         | Set Active Mesh Quality                                                           |
| [`SetActiveSurfaceMeshQuality`](#Mesh.SetActiveSurfaceMeshQuality)                                                   | Set Active Mesh Quality                                                           |
| [`SetActiveVolumeMeshQuality`](#Mesh.SetActiveVolumeMeshQuality)                                                     | Set Active Mesh Quality                                                           |
| [`SetMeshMetricOptions`](#Mesh.SetMeshMetricOptions)                                                                 | SetMeshMetricOptions method.                                                      |
| [`SetSolidMeshMetricLimits`](#Mesh.SetSolidMeshMetricLimits)                                                         | SetSolidMeshMetricLimits method.                                                  |
| [`SetSolidSurfaceMeshMetricLimits`](#Mesh.SetSolidSurfaceMeshMetricLimits)                                           | SetSolidSurfaceMeshMetricLimits method.                                           |
| [`SetSolidSurfaceMeshQualityErrorLimit`](#Mesh.SetSolidSurfaceMeshQualityErrorLimit)                                 | Set Mesh Quality Error Limit                                                      |
| [`SetSolidSurfaceMeshQualityWarningLimit`](#Mesh.SetSolidSurfaceMeshQualityWarningLimit)                             | Set Mesh Quality Warning Limit                                                    |
| [`SetSurfaceMeshMetricLimits`](#Mesh.SetSurfaceMeshMetricLimits)                                                     | SetSurfaceMeshMetricLimits method.                                                |
| [`SetSurfaceMeshQualityErrorLimit`](#Mesh.SetSurfaceMeshQualityErrorLimit)                                           | Set Mesh Quality Error Level                                                      |
| [`SetSurfaceMeshQualityWarningLimit`](#Mesh.SetSurfaceMeshQualityWarningLimit)                                       | Set Mesh Quality Warning Limit                                                    |
| [`SetVolumeMeshQualityErrorLimit`](#Mesh.SetVolumeMeshQualityErrorLimit)                                             | Set Mesh Quality Error Limit                                                      |
| [`SetVolumeMeshQualityWarningLimit`](#Mesh.SetVolumeMeshQualityWarningLimit)                                         | Set Mesh Quality Warning Limit                                                    |
| [`ShowAxisymmetricBodies`](#Mesh.ShowAxisymmetricBodies)                                                             | Show Axisymmetric bodies.                                                         |
| [`ShowFeatureSuppressibleFaces`](#Mesh.ShowFeatureSuppressibleFaces)                                                 | Run the ShowFeatureSuppressibleFaces action.                                      |
| [`ShowMappableBodies`](#Mesh.ShowMappableBodies)                                                                     | Run the ShowMappableBodies action.                                                |
| [`ShowOverlappingFaces`](#Mesh.ShowOverlappingFaces)                                                                 | Run the ShowOverlappingFaces action.                                              |
| [`ShowSweepableBodies`](#Mesh.ShowSweepableBodies)                                                                   | Run the ShowSweepableBodies action.                                               |
| [`ShowUnconnectedFacesNearEdges`](#Mesh.ShowUnconnectedFacesNearEdges)                                               | Run the  ShowUnconnectedFreeEdges action.                                         |
| [`Update`](#Mesh.Update)                                                                                             | Run the Update action.                                                            |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AspectRatio`](#Mesh.AspectRatio)                                               | Gets or sets the AspectRatio.                                                                                                                                                                                                |
| [`AutoMapFillets`](#Mesh.AutoMapFillets)                                         | Gets or sets the Auto-Map Fillets in Mesh. Auto-Map Fillets enables the mesh generator to detect and map fillets within the limits specified by AutoMapFilletsMinimumRadius and AutoMapFilletsMaximumRadius. Default: False. |
| [`AutoMapFilletsMaximumRadius`](#Mesh.AutoMapFilletsMaximumRadius)               | Gets or sets the Maximum Radius for Auto-Map Fillets. Default: 5 \* Element Size.                                                                                                                                            |
| [`AutoMapFilletsMinimumRadius`](#Mesh.AutoMapFilletsMinimumRadius)               | Gets or sets the Minimum Radius for Auto-Map Fillets. Default: 0.5 \* Element Size.                                                                                                                                          |
| [`AutomaticMeshBasedDefeaturing`](#Mesh.AutomaticMeshBasedDefeaturing)           | Gets or sets the AutomaticMeshBasedDefeaturing.                                                                                                                                                                              |
| [`Average`](#Mesh.Average)                                                       | Gets the Average.                                                                                                                                                                                                            |
| [`Beam3`](#Mesh.Beam3)                                                           | Gets the Beam3.                                                                                                                                                                                                              |
| [`Beam4`](#Mesh.Beam4)                                                           | Gets the Beam4.                                                                                                                                                                                                              |
| [`BeamElements`](#Mesh.BeamElements)                                             | Gets the BeamElements.                                                                                                                                                                                                       |
| [`CaptureCurvature`](#Mesh.CaptureCurvature)                                     | Gets or sets the CaptureCurvature.                                                                                                                                                                                           |
| [`CaptureProximity`](#Mesh.CaptureProximity)                                     | Gets or sets the CaptureProximity.                                                                                                                                                                                           |
| [`CheckMeshQuality`](#Mesh.CheckMeshQuality)                                     | Gets or sets the CheckMeshQuality.                                                                                                                                                                                           |
| [`Children`](#Mesh.Children)                                                     | Gets the list of children.                                                                                                                                                                                                   |
| [`CollisionAvoidance`](#Mesh.CollisionAvoidance)                                 | Gets or sets the CollisionAvoidance.                                                                                                                                                                                         |
| [`Comments`](#Mesh.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                                                        |
| [`ConnectionSize`](#Mesh.ConnectionSize)                                         | Gets or sets the ConnectionSize.                                                                                                                                                                                             |
| [`ConnectionTolerance`](#Mesh.ConnectionTolerance)                               | Gets or sets the ConnectionTolerance.                                                                                                                                                                                        |
| [`ConnectionToleranceList`](#Mesh.ConnectionToleranceList)                       | Gets or sets the ConnectionToleranceList.                                                                                                                                                                                    |
| [`CoplanarAngleTol`](#Mesh.CoplanarAngleTol)                                     | Gets or sets the CoplanarAngleTol.                                                                                                                                                                                           |
| [`CornerNodes`](#Mesh.CornerNodes)                                               | Gets the CornerNodes.                                                                                                                                                                                                        |
| [`CurrentConfiguration`](#Mesh.CurrentConfiguration)                             | Gets the Assembly Mesh’s current configuration Id.                                                                                                                                                                           |
| [`CurvatureNormalAngle`](#Mesh.CurvatureNormalAngle)                             | Gets or sets the CurvatureNormalAngle.                                                                                                                                                                                       |
| [`DataModelObjectCategory`](#Mesh.DataModelObjectCategory)                       | Gets the current DataModelObject’s category.                                                                                                                                                                                 |
| [`DefaultShellMesher`](#Mesh.DefaultShellMesher)                                 | Gets or sets the default meshing engine used to mesh sheet bodies. The default value is Quad Dominant.                                                                                                                       |
| [`DefeatureTolerance`](#Mesh.DefeatureTolerance)                                 | Gets or sets the DefeatureTolerance.                                                                                                                                                                                         |
| [`DisplayStyle`](#Mesh.DisplayStyle)                                             | Gets or sets the DisplayStyle.                                                                                                                                                                                               |
| [`ElementOrder`](#Mesh.ElementOrder)                                             | Gets or sets the ElementOrder.                                                                                                                                                                                               |
| [`ElementSize`](#Mesh.ElementSize)                                               | Gets or sets the ElementSize.                                                                                                                                                                                                |
| [`Elements`](#Mesh.Elements)                                                     | Gets the Elements.                                                                                                                                                                                                           |
| [`ExportFormat`](#Mesh.ExportFormat)                                             | Gets or sets the ExportFormat.                                                                                                                                                                                               |
| [`ExportUnit`](#Mesh.ExportUnit)                                                 | Gets or sets the ExportUnit.                                                                                                                                                                                                 |
| [`ExtraRetriesForAssembly`](#Mesh.ExtraRetriesForAssembly)                       | Gets or sets the ExtraRetriesForAssembly.                                                                                                                                                                                    |
| [`Figures`](#Mesh.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                                         |
| [`FilletRatio`](#Mesh.FilletRatio)                                               | Gets or sets the FilletRatio.                                                                                                                                                                                                |
| [`FirstLayerHeight`](#Mesh.FirstLayerHeight)                                     | Gets or sets the FirstLayerHeight.                                                                                                                                                                                           |
| [`GapFactor`](#Mesh.GapFactor)                                                   | Gets or Sets the Gap factor for Global Inflation                                                                                                                                                                             |
| [`GasketElements`](#Mesh.GasketElements)                                         | Gets the GasketElements.                                                                                                                                                                                                     |
| [`GeneratePinchOnRefresh`](#Mesh.GeneratePinchOnRefresh)                         | Gets or sets the GeneratePinchOnRefresh.                                                                                                                                                                                     |
| [`GlobalUseCustomTargetLimit`](#Mesh.GlobalUseCustomTargetLimit)                 | Gets or sets the GlobalUseCustomTargetLimit.                                                                                                                                                                                 |
| [`GrowthRate`](#Mesh.GrowthRate)                                                 | Gets or sets the GrowthRate.                                                                                                                                                                                                 |
| [`GrowthRateSF`](#Mesh.GrowthRateSF)                                             | Gets or sets the GrowthRateSF.                                                                                                                                                                                               |
| [`GrowthRateType`](#Mesh.GrowthRateType)                                         | Gets or sets the GrowthRateType.                                                                                                                                                                                             |
| [`Hex20`](#Mesh.Hex20)                                                           | Gets the Hex20.                                                                                                                                                                                                              |
| [`Hex8`](#Mesh.Hex8)                                                             | Gets the Hex8.                                                                                                                                                                                                               |
| [`HoleRemovalTolerance`](#Mesh.HoleRemovalTolerance)                             | Gets or sets the HoleRemovalTolerance.                                                                                                                                                                                       |
| [`Images`](#Mesh.Images)                                                         | Gets the list of associated images.                                                                                                                                                                                          |
| [`InflationAlgorithm`](#Mesh.InflationAlgorithm)                                 | Gets or sets the InflationAlgorithm.                                                                                                                                                                                         |
| [`InflationElementType`](#Mesh.InflationElementType)                             | Gets or Sets the InflationElementType                                                                                                                                                                                        |
| [`InflationOption`](#Mesh.InflationOption)                                       | Gets or sets the InflationOption.                                                                                                                                                                                            |
| [`InitialSizeSeed`](#Mesh.InitialSizeSeed)                                       | Gets or sets the InitialSizeSeed.                                                                                                                                                                                            |
| [`InternalObject`](#Mesh.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                                           |
| [`Line2`](#Mesh.Line2)                                                           | Gets the Line2.                                                                                                                                                                                                              |
| [`Line3`](#Mesh.Line3)                                                           | Gets the Line3.                                                                                                                                                                                                              |
| [`Maximum`](#Mesh.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                                            |
| [`MaximumAngle`](#Mesh.MaximumAngle)                                             | Gets or sets the MaximumAngle.                                                                                                                                                                                               |
| [`MaximumHeightOverBase`](#Mesh.MaximumHeightOverBase)                           | Gets or sets the MaximumHeightOverBase.                                                                                                                                                                                      |
| [`MaximumLayers`](#Mesh.MaximumLayers)                                           | Gets or sets the MaximumLayers.                                                                                                                                                                                              |
| [`MaximumSize`](#Mesh.MaximumSize)                                               | Gets or sets the MaximumSize.                                                                                                                                                                                                |
| [`MaximumThickness`](#Mesh.MaximumThickness)                                     | Gets or sets the MaximumThickness.                                                                                                                                                                                           |
| [`MeshBasedConnection`](#Mesh.MeshBasedConnection)                               | Gets or sets the MeshBasedConnection.                                                                                                                                                                                        |
| [`MeshMetric`](#Mesh.MeshMetric)                                                 | Gets or sets the MeshMetric.                                                                                                                                                                                                 |
| [`MeshMorphing`](#Mesh.MeshMorphing)                                             | Gets or sets the MeshMorphing.                                                                                                                                                                                               |
| [`Method`](#Mesh.Method)                                                         | Gets or sets the Method.                                                                                                                                                                                                     |
| [`MidNodes`](#Mesh.MidNodes)                                                     | Gets the MidNodes.                                                                                                                                                                                                           |
| [`MinimizeNumTriangles`](#Mesh.MinimizeNumTriangles)                             | Gets or sets the TriangleReduction option for Batch Connections.                                                                                                                                                             |
| [`Minimum`](#Mesh.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                                            |
| [`MinimumEdgeLength`](#Mesh.MinimumEdgeLength)                                   | Gets the MinimumEdgeLength.                                                                                                                                                                                                  |
| [`MinimumSize`](#Mesh.MinimumSize)                                               | Gets or sets the MinimumSize.                                                                                                                                                                                                |
| [`MultiConnectionSteps`](#Mesh.MultiConnectionSteps)                             | Gets or sets the MultiConnectionSteps.                                                                                                                                                                                       |
| [`NamedSelection`](#Mesh.NamedSelection)                                         | Gets or sets the NamedSelection.                                                                                                                                                                                             |
| [`Nodes`](#Mesh.Nodes)                                                           | Gets the Nodes.                                                                                                                                                                                                              |
| [`NumLayers`](#Mesh.NumLayers)                                                   | Gets or Sets the Number of Layers of Global Inflation                                                                                                                                                                        |
| [`NumberOfCPUsForParallelPartMeshing`](#Mesh.NumberOfCPUsForParallelPartMeshing) | Gets or sets the NumberOfCPUsForParallelPartMeshing.                                                                                                                                                                         |
| [`NumberOfRetries`](#Mesh.NumberOfRetries)                                       | Gets or sets the NumberOfRetries.                                                                                                                                                                                            |
| [`NumberOfShellMeshQualityMetrics`](#Mesh.NumberOfShellMeshQualityMetrics)       | Gets the number of Mesh Quality Metrics                                                                                                                                                                                      |
| [`OrientationNodes`](#Mesh.OrientationNodes)                                     | Gets the OrientationNodes.                                                                                                                                                                                                   |
| [`PhysicsPreference`](#Mesh.PhysicsPreference)                                   | Gets or sets the PhysicsPreference.                                                                                                                                                                                          |
| [`PinchTolerance`](#Mesh.PinchTolerance)                                         | Gets or sets the PinchTolerance.                                                                                                                                                                                             |
| [`Properties`](#Mesh.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                                                 |
| [`ProximityGapFactor`](#Mesh.ProximityGapFactor)                                 | Gets or sets the ProximityGapFactor.                                                                                                                                                                                         |
| [`ProximityMinimumSize`](#Mesh.ProximityMinimumSize)                             | Gets or sets the ProximityMinimumSize.                                                                                                                                                                                       |
| [`ProximitySizeSources`](#Mesh.ProximitySizeSources)                             | Gets or sets the ProximitySizeSources.                                                                                                                                                                                       |
| [`Pyramid13`](#Mesh.Pyramid13)                                                   | Gets the Pyramid13.                                                                                                                                                                                                          |
| [`Pyramid5`](#Mesh.Pyramid5)                                                     | Gets the Pyramid5.                                                                                                                                                                                                           |
| [`Quad4`](#Mesh.Quad4)                                                           | Gets the Quad4.                                                                                                                                                                                                              |
| [`Quad8`](#Mesh.Quad8)                                                           | Gets the Quad8.                                                                                                                                                                                                              |
| [`QuadMesh`](#Mesh.QuadMesh)                                                     | Gets or sets the QuadMesh.                                                                                                                                                                                                   |
| [`ReadOnly`](#Mesh.ReadOnly)                                                     | Gets the ReadOnly.                                                                                                                                                                                                           |
| [`Relevance`](#Mesh.Relevance)                                                   | Gets or sets the Relevance.                                                                                                                                                                                                  |
| [`RelevanceCenter`](#Mesh.RelevanceCenter)                                       | Gets or sets the RelevanceCenter.                                                                                                                                                                                            |
| [`Resolution`](#Mesh.Resolution)                                                 | Gets or sets the Resolution.                                                                                                                                                                                                 |
| [`RigidBodyBehavior`](#Mesh.RigidBodyBehavior)                                   | Gets or sets the BoundaryCondition.                                                                                                                                                                                          |
| [`RigidBodyFaceMeshType`](#Mesh.RigidBodyFaceMeshType)                           | Gets or sets the RigidBodyFaceMeshType.                                                                                                                                                                                      |
| [`ShapeChecking`](#Mesh.ShapeChecking)                                           | Gets or sets the ShapeChecking.                                                                                                                                                                                              |
| [`SharedNodes`](#Mesh.SharedNodes)                                               | Gets the SharedNodes.                                                                                                                                                                                                        |
| [`SheetLoopRemoval`](#Mesh.SheetLoopRemoval)                                     | Gets or sets the SheetLoopRemoval.                                                                                                                                                                                           |
| [`ShellElements`](#Mesh.ShellElements)                                           | Gets the ShellElements.                                                                                                                                                                                                      |
| [`ShowDetailedStatistics`](#Mesh.ShowDetailedStatistics)                         | Gets or sets the ShowDetailedStatistics.                                                                                                                                                                                     |
| [`Smoothing`](#Mesh.Smoothing)                                                   | Gets or sets the Smoothing.                                                                                                                                                                                                  |
| [`SmoothingIterations`](#Mesh.SmoothingIterations)                               | Gets or sets the SmoothingIterations.                                                                                                                                                                                        |
| [`SolidElements`](#Mesh.SolidElements)                                           | Gets the SolidElements.                                                                                                                                                                                                      |
| [`SolidShellElements`](#Mesh.SolidShellElements)                                 | Gets the SolidShellElements.                                                                                                                                                                                                 |
| [`SolverPreference`](#Mesh.SolverPreference)                                     | Gets or sets the SolverPreference.                                                                                                                                                                                           |
| [`SpanAngleCenter`](#Mesh.SpanAngleCenter)                                       | Gets or sets the SpanAngleCenter.                                                                                                                                                                                            |
| [`StandardDeviation`](#Mesh.StandardDeviation)                                   | Gets the StandardDeviation.                                                                                                                                                                                                  |
| [`StraightSidedElements`](#Mesh.StraightSidedElements)                           | Gets or sets the StraightSidedElements.                                                                                                                                                                                      |
| [`TargetCharacteristicLength`](#Mesh.TargetCharacteristicLength)                 | Gets or sets the TargetCharacteristicLength.                                                                                                                                                                                 |
| [`TargetExplicitAspectRatio`](#Mesh.TargetExplicitAspectRatio)                   | Gets or sets the TargetExplicitAspectRatio.                                                                                                                                                                                  |
| [`TargetQuality`](#Mesh.TargetQuality)                                           | Gets or sets the TargetQuality.                                                                                                                                                                                              |
| [`TargetSkewness`](#Mesh.TargetSkewness)                                         | Gets or sets the TargetSkewness.                                                                                                                                                                                             |
| [`Tet10`](#Mesh.Tet10)                                                           | Gets the Tet10.                                                                                                                                                                                                              |
| [`Tet4`](#Mesh.Tet4)                                                             | Gets the Tet4.                                                                                                                                                                                                               |
| [`TopologyChecking`](#Mesh.TopologyChecking)                                     | Gets or sets the TopologyChecking.                                                                                                                                                                                           |
| [`TransitionOption`](#Mesh.TransitionOption)                                     | Gets or sets the TransitionOption.                                                                                                                                                                                           |
| [`TransitionRatio`](#Mesh.TransitionRatio)                                       | Gets or sets the TransitionRatio.                                                                                                                                                                                            |
| [`Tri3`](#Mesh.Tri3)                                                             | Gets the Tri3.                                                                                                                                                                                                               |
| [`Tri6`](#Mesh.Tri6)                                                             | Gets the Tri6.                                                                                                                                                                                                               |
| [`TriangleSurfaceMesher`](#Mesh.TriangleSurfaceMesher)                           | Gets or sets the TriangleSurfaceMesher.                                                                                                                                                                                      |
| [`UseAdaptiveSizing`](#Mesh.UseAdaptiveSizing)                                   | Gets or sets the UseAdaptiveSizing.                                                                                                                                                                                          |
| [`UseAdvancedSizeFunction`](#Mesh.UseAdvancedSizeFunction)                       | Gets or sets the UseAdvancedSizeFunction.                                                                                                                                                                                    |
| [`UseAutomaticInflation`](#Mesh.UseAutomaticInflation)                           | Gets or sets the UseAutomaticInflation.                                                                                                                                                                                      |
| [`UseFixedSizeFunctionForSheets`](#Mesh.UseFixedSizeFunctionForSheets)           | Gets or sets the UseFixedSizeFunctionForSheets.                                                                                                                                                                              |
| [`UsePostSmoothing`](#Mesh.UsePostSmoothing)                                     | Gets or sets the UsePostSmoothing.                                                                                                                                                                                           |
| [`UseSheetThicknessForPinch`](#Mesh.UseSheetThicknessForPinch)                   | Gets or sets the UseSheetThicknessForPinch.                                                                                                                                                                                  |
| [`ViewAdvancedOptions`](#Mesh.ViewAdvancedOptions)                               | Gets or sets the ViewAdvancedOptions.                                                                                                                                                                                        |
| [`VisibleProperties`](#Mesh.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                                                |
| [`Wedge15`](#Mesh.Wedge15)                                                       | Gets the Wedge15.                                                                                                                                                                                                            |
| [`Wedge6`](#Mesh.Wedge6)                                                         | Gets the Wedge6.                                                                                                                                                                                                             |
| [`Worksheet`](#Mesh.Worksheet)                                                   | Get the MeshControlWorksheet action.                                                                                                                                                                                         |

<a id="property-detail"></a>

## Property detail

<a id="Mesh.AspectRatio"></a>

### *property* Mesh.AspectRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AutoMapFillets"></a>

### *property* Mesh.AutoMapFillets *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Auto-Map Fillets in Mesh. Auto-Map Fillets enables the mesh generator to detect and map fillets within the limits specified by AutoMapFilletsMinimumRadius and AutoMapFilletsMaximumRadius. Default: False.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AutoMapFilletsMaximumRadius"></a>

### *property* Mesh.AutoMapFilletsMaximumRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Maximum Radius for Auto-Map Fillets. Default: 5 \* Element Size.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AutoMapFilletsMinimumRadius"></a>

### *property* Mesh.AutoMapFilletsMinimumRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Minimum Radius for Auto-Map Fillets. Default: 0.5 \* Element Size.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AutomaticMeshBasedDefeaturing"></a>

### *property* Mesh.AutomaticMeshBasedDefeaturing *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticMeshBasedDefeaturing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Average"></a>

### *property* Mesh.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Beam3"></a>

### *property* Mesh.Beam3 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Beam3.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Beam4"></a>

### *property* Mesh.Beam4 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Beam4.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.BeamElements"></a>

### *property* Mesh.BeamElements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BeamElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CaptureCurvature"></a>

### *property* Mesh.CaptureCurvature *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureCurvature.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CaptureProximity"></a>

### *property* Mesh.CaptureProximity *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureProximity.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CheckMeshQuality"></a>

### *property* Mesh.CheckMeshQuality *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckMeshQuality.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Children"></a>

### *property* Mesh.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CollisionAvoidance"></a>

### *property* Mesh.CollisionAvoidance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CollisionAvoidance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Comments"></a>

### *property* Mesh.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ConnectionSize"></a>

### *property* Mesh.ConnectionSize *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ConnectionTolerance"></a>

### *property* Mesh.ConnectionTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ConnectionToleranceList"></a>

### *property* Mesh.ConnectionToleranceList *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionToleranceList.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CoplanarAngleTol"></a>

### *property* Mesh.CoplanarAngleTol *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoplanarAngleTol.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CornerNodes"></a>

### *property* Mesh.CornerNodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CornerNodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CurrentConfiguration"></a>

### *property* Mesh.CurrentConfiguration *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Assembly Mesh’s current configuration Id.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CurvatureNormalAngle"></a>

### *property* Mesh.CurvatureNormalAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DataModelObjectCategory"></a>

### *property* Mesh.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DefaultShellMesher"></a>

### *property* Mesh.DefaultShellMesher *: [Ansys.Mechanical.DataModel.Enums.DefaultShellMesherType](../../../../Mechanical/DataModel/Enums/DefaultShellMesherType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DefaultShellMesherType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the default meshing engine used to mesh sheet bodies. The default value is Quad Dominant.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DefeatureTolerance"></a>

### *property* Mesh.DefeatureTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DisplayStyle"></a>

### *property* Mesh.DisplayStyle *: [Ansys.Mechanical.DataModel.Enums.MeshDisplayStyle](../../../../Mechanical/DataModel/Enums/MeshDisplayStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshDisplayStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayStyle.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ElementOrder"></a>

### *property* Mesh.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOrder.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ElementSize"></a>

### *property* Mesh.ElementSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Elements"></a>

### *property* Mesh.Elements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ExportFormat"></a>

### *property* Mesh.ExportFormat *: [Ansys.Mechanical.DataModel.Enums.FluentExportMeshType](../../../../Mechanical/DataModel/Enums/FluentExportMeshType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FluentExportMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportFormat.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ExportUnit"></a>

### *property* Mesh.ExportUnit *: [Ansys.Mechanical.DataModel.Enums.PolyflowExportUnit](../../../../Mechanical/DataModel/Enums/PolyflowExportUnit.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PolyflowExportUnit) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportUnit.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ExtraRetriesForAssembly"></a>

### *property* Mesh.ExtraRetriesForAssembly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExtraRetriesForAssembly.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Figures"></a>

### *property* Mesh.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.FilletRatio"></a>

### *property* Mesh.FilletRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilletRatio.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.FirstLayerHeight"></a>

### *property* Mesh.FirstLayerHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FirstLayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GapFactor"></a>

### *property* Mesh.GapFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Gap factor for Global Inflation

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GasketElements"></a>

### *property* Mesh.GasketElements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GasketElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GeneratePinchOnRefresh"></a>

### *property* Mesh.GeneratePinchOnRefresh *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratePinchOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GlobalUseCustomTargetLimit"></a>

### *property* Mesh.GlobalUseCustomTargetLimit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalUseCustomTargetLimit.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GrowthRate"></a>

### *property* Mesh.GrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GrowthRateSF"></a>

### *property* Mesh.GrowthRateSF *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRateSF.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GrowthRateType"></a>

### *property* Mesh.GrowthRateType *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRateType.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Hex20"></a>

### *property* Mesh.Hex20 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Hex20.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Hex8"></a>

### *property* Mesh.Hex8 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Hex8.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.HoleRemovalTolerance"></a>

### *property* Mesh.HoleRemovalTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HoleRemovalTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Images"></a>

### *property* Mesh.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InflationAlgorithm"></a>

### *property* Mesh.InflationAlgorithm *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InflationElementType"></a>

### *property* Mesh.InflationElementType *: [Ansys.Mechanical.DataModel.Enums.MeshInflationElementType](../../../../Mechanical/DataModel/Enums/MeshInflationElementType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshInflationElementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the InflationElementType

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InflationOption"></a>

### *property* Mesh.InflationOption *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationOption.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InitialSizeSeed"></a>

### *property* Mesh.InitialSizeSeed *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialSizeSeed.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.InternalObject"></a>

### *property* Mesh.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Line2"></a>

### *property* Mesh.Line2 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Line2.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Line3"></a>

### *property* Mesh.Line3 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Line3.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Maximum"></a>

### *property* Mesh.Maximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumAngle"></a>

### *property* Mesh.MaximumAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumAngle.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumHeightOverBase"></a>

### *property* Mesh.MaximumHeightOverBase *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumHeightOverBase.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumLayers"></a>

### *property* Mesh.MaximumLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumLayers.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumSize"></a>

### *property* Mesh.MaximumSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MaximumThickness"></a>

### *property* Mesh.MaximumThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumThickness.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MeshBasedConnection"></a>

### *property* Mesh.MeshBasedConnection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshBasedConnection.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MeshMetric"></a>

### *property* Mesh.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MeshMorphing"></a>

### *property* Mesh.MeshMorphing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshMorphing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Method"></a>

### *property* Mesh.Method *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MidNodes"></a>

### *property* Mesh.MidNodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MidNodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MinimizeNumTriangles"></a>

### *property* Mesh.MinimizeNumTriangles *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleReduction option for Batch Connections.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Minimum"></a>

### *property* Mesh.Minimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MinimumEdgeLength"></a>

### *property* Mesh.MinimumEdgeLength *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MinimumSize"></a>

### *property* Mesh.MinimumSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.MultiConnectionSteps"></a>

### *property* Mesh.MultiConnectionSteps *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiConnectionSteps.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.NamedSelection"></a>

### *property* Mesh.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Nodes"></a>

### *property* Mesh.Nodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.NumLayers"></a>

### *property* Mesh.NumLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Number of Layers of Global Inflation

<!-- !! processed by numpydoc !! -->

<a id="Mesh.NumberOfCPUsForParallelPartMeshing"></a>

### *property* Mesh.NumberOfCPUsForParallelPartMeshing *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCPUsForParallelPartMeshing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.NumberOfRetries"></a>

### *property* Mesh.NumberOfRetries *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRetries.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.NumberOfShellMeshQualityMetrics"></a>

### *property* Mesh.NumberOfShellMeshQualityMetrics *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of Mesh Quality Metrics

<!-- !! processed by numpydoc !! -->

<a id="Mesh.OrientationNodes"></a>

### *property* Mesh.OrientationNodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OrientationNodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PhysicsPreference"></a>

### *property* Mesh.PhysicsPreference *: [Ansys.Mechanical.DataModel.Enums.MeshPhysicsPreferenceType](../../../../Mechanical/DataModel/Enums/MeshPhysicsPreferenceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshPhysicsPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhysicsPreference.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PinchTolerance"></a>

### *property* Mesh.PinchTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Properties"></a>

### *property* Mesh.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ProximityGapFactor"></a>

### *property* Mesh.ProximityGapFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityGapFactor.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ProximityMinimumSize"></a>

### *property* Mesh.ProximityMinimumSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ProximitySizeSources"></a>

### *property* Mesh.ProximitySizeSources *: [Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType](../../../../Mechanical/DataModel/Enums/ProximitySFSourcesType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximitySizeSources.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Pyramid13"></a>

### *property* Mesh.Pyramid13 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pyramid13.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Pyramid5"></a>

### *property* Mesh.Pyramid5 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pyramid5.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Quad4"></a>

### *property* Mesh.Quad4 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Quad4.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Quad8"></a>

### *property* Mesh.Quad8 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Quad8.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.QuadMesh"></a>

### *property* Mesh.QuadMesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuadMesh.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ReadOnly"></a>

### *property* Mesh.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Relevance"></a>

### *property* Mesh.Relevance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Relevance.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.RelevanceCenter"></a>

### *property* Mesh.RelevanceCenter *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelevanceCenter.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Resolution"></a>

### *property* Mesh.Resolution *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Resolution.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.RigidBodyBehavior"></a>

### *property* Mesh.RigidBodyBehavior *: [Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyBehaviorType](../../../../Mechanical/DataModel/Enums/MeshControlGroupRigidBodyBehaviorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.RigidBodyFaceMeshType"></a>

### *property* Mesh.RigidBodyFaceMeshType *: [Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyFaceMeshType](../../../../Mechanical/DataModel/Enums/MeshControlGroupRigidBodyFaceMeshType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyFaceMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidBodyFaceMeshType.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShapeChecking"></a>

### *property* Mesh.ShapeChecking *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShapeChecking.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SharedNodes"></a>

### *property* Mesh.SharedNodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SharedNodes.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SheetLoopRemoval"></a>

### *property* Mesh.SheetLoopRemoval *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SheetLoopRemoval.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShellElements"></a>

### *property* Mesh.ShellElements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShellElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowDetailedStatistics"></a>

### *property* Mesh.ShowDetailedStatistics *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowDetailedStatistics.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Smoothing"></a>

### *property* Mesh.Smoothing *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Smoothing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SmoothingIterations"></a>

### *property* Mesh.SmoothingIterations *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothingIterations.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SolidElements"></a>

### *property* Mesh.SolidElements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SolidShellElements"></a>

### *property* Mesh.SolidShellElements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidShellElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SolverPreference"></a>

### *property* Mesh.SolverPreference *: [Ansys.Mechanical.DataModel.Enums.MeshSolverPreferenceType](../../../../Mechanical/DataModel/Enums/MeshSolverPreferenceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshSolverPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPreference.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SpanAngleCenter"></a>

### *property* Mesh.SpanAngleCenter *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpanAngleCenter.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.StandardDeviation"></a>

### *property* Mesh.StandardDeviation *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.StraightSidedElements"></a>

### *property* Mesh.StraightSidedElements *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StraightSidedElements.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TargetCharacteristicLength"></a>

### *property* Mesh.TargetCharacteristicLength *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCharacteristicLength.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TargetExplicitAspectRatio"></a>

### *property* Mesh.TargetExplicitAspectRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetExplicitAspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TargetQuality"></a>

### *property* Mesh.TargetQuality *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetQuality.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TargetSkewness"></a>

### *property* Mesh.TargetSkewness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetSkewness.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Tet10"></a>

### *property* Mesh.Tet10 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tet10.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Tet4"></a>

### *property* Mesh.Tet4 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tet4.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TopologyChecking"></a>

### *property* Mesh.TopologyChecking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopologyChecking.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TransitionOption"></a>

### *property* Mesh.TransitionOption *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionOption.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TransitionRatio"></a>

### *property* Mesh.TransitionRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionRatio.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Tri3"></a>

### *property* Mesh.Tri3 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tri3.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Tri6"></a>

### *property* Mesh.Tri6 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tri6.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.TriangleSurfaceMesher"></a>

### *property* Mesh.TriangleSurfaceMesher *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleSurfaceMesher.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseAdaptiveSizing"></a>

### *property* Mesh.UseAdaptiveSizing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAdaptiveSizing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseAdvancedSizeFunction"></a>

### *property* Mesh.UseAdvancedSizeFunction *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAdvancedSizeFunction.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseAutomaticInflation"></a>

### *property* Mesh.UseAutomaticInflation *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAutomaticInflation.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseFixedSizeFunctionForSheets"></a>

### *property* Mesh.UseFixedSizeFunctionForSheets *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseFixedSizeFunctionForSheets.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UsePostSmoothing"></a>

### *property* Mesh.UsePostSmoothing *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UsePostSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.UseSheetThicknessForPinch"></a>

### *property* Mesh.UseSheetThicknessForPinch *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseSheetThicknessForPinch.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ViewAdvancedOptions"></a>

### *property* Mesh.ViewAdvancedOptions *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewAdvancedOptions.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.VisibleProperties"></a>

### *property* Mesh.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Wedge15"></a>

### *property* Mesh.Wedge15 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Wedge15.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Wedge6"></a>

### *property* Mesh.Wedge6 *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Wedge6.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Worksheet"></a>

### *property* Mesh.Worksheet *: [Ansys.ACT.Interfaces.Common.IWorksheet](../../../Interfaces/Common/IWorksheet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.IWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the MeshControlWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Mesh.Activate"></a>

### Mesh.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ActivateAllSolidSurfaceWorksheetRows"></a>

### Mesh.ActivateAllSolidSurfaceWorksheetRows() → [None](https://docs.python.org/3/library/constants.html#None)

ActivateAllSolidSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ActivateAllSurfaceWorksheetRows"></a>

### Mesh.ActivateAllSurfaceWorksheetRows() → [None](https://docs.python.org/3/library/constants.html#None)

ActivateAllSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ActivateAllVolumeWorksheetRows"></a>

### Mesh.ActivateAllVolumeWorksheetRows() → [None](https://docs.python.org/3/library/constants.html#None)

ActivateAllVolumeWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddAutomaticMethod"></a>

### Mesh.AddAutomaticMethod() → [Ansys.ACT.Automation.Mechanical.MeshControls.AutomaticMethod](AutomaticMethod.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.AutomaticMethod)

Creates a new AutomaticMethod

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddComment"></a>

### Mesh.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddConnect"></a>

### Mesh.AddConnect() → [Ansys.ACT.Automation.Mechanical.MeshControls.Connect](Connect.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Connect)

Creates a new Connect Control

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddContactMatchGroup"></a>

### Mesh.AddContactMatchGroup() → [Ansys.ACT.Automation.Mechanical.ContactMatchGroup](../ContactMatchGroup.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ContactMatchGroup)

Add a new AddContactMatchGroup.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddContactSizing"></a>

### Mesh.AddContactSizing() → [Ansys.ACT.Automation.Mechanical.MeshControls.ContactSizing](ContactSizing.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.ContactSizing)

Creates a new ContactSizing

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddDeviation"></a>

### Mesh.AddDeviation() → [Ansys.ACT.Automation.Mechanical.MeshControls.Deviation](Deviation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Deviation)

Creates a new SagControl

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddDirectMorph"></a>

### Mesh.AddDirectMorph() → [Ansys.ACT.Automation.Mechanical.DirectMorph](../DirectMorph.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.DirectMorph)

Add a new DirectMorph.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddFaceMeshing"></a>

### Mesh.AddFaceMeshing() → [Ansys.ACT.Automation.Mechanical.MeshControls.FaceMeshing](FaceMeshing.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.FaceMeshing)

Creates a new FaceMeshing

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddFeatureSuppress"></a>

### Mesh.AddFeatureSuppress() → [Ansys.ACT.Automation.Mechanical.MeshControls.FeatureSuppress](FeatureSuppress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.FeatureSuppress)

Creates a new FeatureSuppress

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddFigure"></a>

### Mesh.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddGasket"></a>

### Mesh.AddGasket() → [Ansys.ACT.Automation.Mechanical.MeshControls.Gasket](Gasket.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Gasket)

Adds a Gasket Object under Mesh

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddGeometryFidelity"></a>

### Mesh.AddGeometryFidelity() → [Ansys.ACT.Automation.Mechanical.MeshControls.GeometryFidelity](GeometryFidelity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.GeometryFidelity)

Creates a new GeometryFidelity

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddImage"></a>

### Mesh.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddInflation"></a>

### Mesh.AddInflation() → [Ansys.ACT.Automation.Mechanical.MeshControls.Inflation](Inflation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Inflation)

Creates a new Inflation

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddManualMeshConnection"></a>

### Mesh.AddManualMeshConnection() → [None](https://docs.python.org/3/library/constants.html#None)

Add a new ManualMeshConnection

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddMatchControl"></a>

### Mesh.AddMatchControl() → [Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl](MatchControl.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl)

Creates a new MatchControl

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddMeshConnectionGroup"></a>

### Mesh.AddMeshConnectionGroup() → [Ansys.ACT.Automation.Mechanical.MeshConnectionGroup](../MeshConnectionGroup.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnectionGroup)

Add a new MeshConnectionGroup.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddMeshCopy"></a>

### Mesh.AddMeshCopy() → [Ansys.ACT.Automation.Mechanical.MeshControls.MeshCopy](MeshCopy.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.MeshCopy)

Creates a new MeshCopy

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddMeshLayers"></a>

### Mesh.AddMeshLayers() → [None](https://docs.python.org/3/library/constants.html#None)

Adds Mesh Layers when contour enabled in Mesh Quality Workhseet mode.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddNodeMerge"></a>

### Mesh.AddNodeMerge() → [None](https://docs.python.org/3/library/constants.html#None)

Add a new NodeMerge.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddNodeMergeGroup"></a>

### Mesh.AddNodeMergeGroup() → [Ansys.ACT.Automation.Mechanical.NodeMergeGroup](../NodeMergeGroup.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NodeMergeGroup)

Add a new NodeMergeGroup.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddPinch"></a>

### Mesh.AddPinch() → [Ansys.ACT.Automation.Mechanical.MeshControls.Pinch](Pinch.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Pinch)

Creates a new Pinch

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddPullExtrude"></a>

### Mesh.AddPullExtrude() → [Ansys.ACT.Automation.Mechanical.MeshExtrude](../MeshExtrude.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshExtrude)

Add a new Pull (Extrude).

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddPullRevolve"></a>

### Mesh.AddPullRevolve() → [Ansys.ACT.Automation.Mechanical.MeshExtrude](../MeshExtrude.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshExtrude)

Add a new Pull (Revolve).

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddPullSurfaceCoating"></a>

### Mesh.AddPullSurfaceCoating() → [Ansys.ACT.Automation.Mechanical.MeshExtrude](../MeshExtrude.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshExtrude)

Add a new Pull (Surface Coating)).

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddRefinement"></a>

### Mesh.AddRefinement() → [Ansys.ACT.Automation.Mechanical.MeshControls.Refinement](Refinement.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Refinement)

Creates a new Refinement

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddRepairTopology"></a>

### Mesh.AddRepairTopology() → [Ansys.ACT.Automation.Mechanical.MeshControls.RepairTopology](RepairTopology.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.RepairTopology)

Creates a new RepairTopology

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddSizing"></a>

### Mesh.AddSizing() → [Ansys.ACT.Automation.Mechanical.MeshControls.Sizing](Sizing.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Sizing)

Creates a new Sizing

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddTopologySuppressControl"></a>

### Mesh.AddTopologySuppressControl() → [Ansys.ACT.Automation.Mechanical.MeshControls.TopologySuppressControl](TopologySuppressControl.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.TopologySuppressControl)

Creates a new TopologySuppressControl

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddWasher"></a>

### Mesh.AddWasher() → [Ansys.ACT.Automation.Mechanical.MeshControls.Washer](Washer.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Washer)

Creates a new SagControl

<!-- !! processed by numpydoc !! -->

<a id="Mesh.AddWeld"></a>

### Mesh.AddWeld() → [Ansys.ACT.Automation.Mechanical.MeshControls.Weld](Weld.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Weld)

Creates a new WeldControl

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CleanPartOrBody"></a>

### Mesh.CleanPartOrBody(dataModelObjects: Iterable) → [None](https://docs.python.org/3/library/constants.html#None)

Clear generated data for parts and/or bodies provided.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ClearGeneratedData"></a>

### Mesh.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CopyTo"></a>

### Mesh.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreateMQSolidSurfaceElementsNamedSelection"></a>

### Mesh.CreateMQSolidSurfaceElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), failCode: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Create Mesh Quality SolidSurface Element Name Selection

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreateMQSurfaceElementsNamedSelection"></a>

### Mesh.CreateMQSurfaceElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), failCode: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Create Mesh Quality Surface Element Named Selection

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreateMQVolumeElementsNamedSelection"></a>

### Mesh.CreateMQVolumeElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), failCode: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Create Mesh Quality Volume Element Name Selection

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreateParameter"></a>

### Mesh.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.CreatePinchControls"></a>

### Mesh.CreatePinchControls() → [None](https://docs.python.org/3/library/constants.html#None)

Run the CreatePinchControls action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DeactivateAllSolidSurfaceWorksheetRows"></a>

### Mesh.DeactivateAllSolidSurfaceWorksheetRows() → [None](https://docs.python.org/3/library/constants.html#None)

DeactivateAllSolidSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DeactivateAllSurfaceWorksheetRows"></a>

### Mesh.DeactivateAllSurfaceWorksheetRows() → [None](https://docs.python.org/3/library/constants.html#None)

DeactivateAllSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.DeactivateAllVolumeWorksheetRows"></a>

### Mesh.DeactivateAllVolumeWorksheetRows() → [None](https://docs.python.org/3/library/constants.html#None)

DeactivateAllVolumeWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Duplicate"></a>

### Mesh.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ExportWeldDefinitionFile"></a>

### Mesh.ExportWeldDefinitionFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Export the weld definition file to the specified location.
If the folder does not exist or file cannot be written to the location, an exception will be thrown.
Pre-existing files will be overwritten.
```

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GenerateMesh"></a>

### Mesh.GenerateMesh() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetActiveSurfaceMeshQuality"></a>

### Mesh.GetActiveSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Get Active User Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetChildren"></a>

### Mesh.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetIsShellTargetMetric"></a>

### Mesh.GetIsShellTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [int](https://docs.python.org/3/library/functions.html#int)

Get Shell Target Metric

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetIsSolidSurfaceTargetMetric"></a>

### Mesh.GetIsSolidSurfaceTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [int](https://docs.python.org/3/library/functions.html#int)

Get SolidSurface Target Metric

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetIsSolidTargetMetric"></a>

### Mesh.GetIsSolidTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [int](https://docs.python.org/3/library/functions.html#int)

Get Solid Target Metric

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetMeshMetricOptions"></a>

### Mesh.GetMeshMetricOptions(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → Ansys.Mechanical.DataModel.Enums.MetricPreference

GetMeshMetricOptions method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetParameter"></a>

### Mesh.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshMetrics"></a>

### Mesh.GetSolidSurfaceMeshMetrics() → [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)

GetSolidSurfaceMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityAverageMetricValue"></a>

### Mesh.GetSolidSurfaceMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityCountFailed"></a>

### Mesh.GetSolidSurfaceMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [int](https://docs.python.org/3/library/functions.html#int)

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityErrorLimit"></a>

### Mesh.GetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityName"></a>

### Mesh.GetSolidSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityPercentageFailed"></a>

### Mesh.GetSolidSurfaceMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [float](https://docs.python.org/3/library/functions.html#float)

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWarningCountFailed"></a>

### Mesh.GetSolidSurfaceMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [int](https://docs.python.org/3/library/functions.html#int)

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWarningLimit"></a>

### Mesh.GetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWarningPercentageFailed"></a>

### Mesh.GetSolidSurfaceMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [float](https://docs.python.org/3/library/functions.html#float)

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor"></a>

### Mesh.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSolidSurfaceMeshQualityWorstMetricValue"></a>

### Mesh.GetSolidSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityAverageMetricValue"></a>

### Mesh.GetSurfaceMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityCountFailed"></a>

### Mesh.GetSurfaceMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [int](https://docs.python.org/3/library/functions.html#int)

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityErrorLimit"></a>

### Mesh.GetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get User Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityName"></a>

### Mesh.GetSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityPercentageFailed"></a>

### Mesh.GetSurfaceMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [float](https://docs.python.org/3/library/functions.html#float)

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityWarningCountFailed"></a>

### Mesh.GetSurfaceMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [int](https://docs.python.org/3/library/functions.html#int)

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityWarningLimit"></a>

### Mesh.GetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get User Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityWarningPercentageFailed"></a>

### Mesh.GetSurfaceMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [float](https://docs.python.org/3/library/functions.html#float)

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetSurfaceMeshQualityWorstMetricValue"></a>

### Mesh.GetSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshMetrics"></a>

### Mesh.GetVolumeMeshMetrics() → [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)

GetVolumeMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityAverageMetricValue"></a>

### Mesh.GetVolumeMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityCountFailed"></a>

### Mesh.GetVolumeMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [int](https://docs.python.org/3/library/functions.html#int)

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityErrorLimit"></a>

### Mesh.GetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityName"></a>

### Mesh.GetVolumeMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityPercentageFailed"></a>

### Mesh.GetVolumeMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [float](https://docs.python.org/3/library/functions.html#float)

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWarningCountFailed"></a>

### Mesh.GetVolumeMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [int](https://docs.python.org/3/library/functions.html#int)

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWarningLimit"></a>

### Mesh.GetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWarningPercentageFailed"></a>

### Mesh.GetVolumeMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [float](https://docs.python.org/3/library/functions.html#float)

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWorstMetricBackgroundColor"></a>

### Mesh.GetVolumeMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GetVolumeMeshQualityWorstMetricValue"></a>

### Mesh.GetVolumeMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GroupAllSimilarChildren"></a>

### Mesh.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.GroupSimilarObjects"></a>

### Mesh.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.IsMeshMetricVisible"></a>

### Mesh.IsMeshMetricVisible(index: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

IsMeshMetricVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.LoadMQWorksheetFile"></a>

### Mesh.LoadMQWorksheetFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

LoadMQWorksheetFile method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PinchControlGeomtry"></a>

### Mesh.PinchControlGeomtry(geomType: [Ansys.Mechanical.DataModel.Enums.MeshControlPinchGeomtryType](../../../../Mechanical/DataModel/Enums/MeshControlPinchGeomtryType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshControlPinchGeomtryType)) → [None](https://docs.python.org/3/library/constants.html#None)

Set the geometry type for the Pinch Control.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewInflation"></a>

### Mesh.PreviewInflation() → [None](https://docs.python.org/3/library/constants.html#None)

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewMeshOnAllWelds"></a>

### Mesh.PreviewMeshOnAllWelds() → [None](https://docs.python.org/3/library/constants.html#None)

Preview model mesh on all weld controls of the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewMeshOnWeld"></a>

### Mesh.PreviewMeshOnWeld(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [None](https://docs.python.org/3/library/constants.html#None)

Preview model mesh on one weld control provided.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewMeshOnWeldWorksheet"></a>

### Mesh.PreviewMeshOnWeldWorksheet(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), indices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → [None](https://docs.python.org/3/library/constants.html#None)

PreviewMeshOnWeldWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewMeshOnWelds"></a>

### Mesh.PreviewMeshOnWelds(dataModelObjects: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/library/constants.html#None)

PreviewMeshOnWelds method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewSurfaceMesh"></a>

### Mesh.PreviewSurfaceMesh() → [None](https://docs.python.org/3/library/constants.html#None)

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PreviewWelds"></a>

### Mesh.PreviewWelds() → [None](https://docs.python.org/3/library/constants.html#None)

Preview Welds.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PropertyByAPIName"></a>

### Mesh.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Mesh.PropertyByName"></a>

### Mesh.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.RemoveMeshLayers"></a>

### Mesh.RemoveMeshLayers() → [None](https://docs.python.org/3/library/constants.html#None)

Removes Mesh Layers when contour enabled in Mesh Quality Workhseet mode.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.RemoveParameter"></a>

### Mesh.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SaveMQWorksheetFile"></a>

### Mesh.SaveMQWorksheetFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

SaveMQWorksheetFile method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetActiveSolidSurfaceMeshQuality"></a>

### Mesh.SetActiveSolidSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), activeMetric: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetActiveSurfaceMeshQuality"></a>

### Mesh.SetActiveSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), activeMetric: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetActiveVolumeMeshQuality"></a>

### Mesh.SetActiveVolumeMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), activeMetric: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetMeshMetricOptions"></a>

### Mesh.SetMeshMetricOptions(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), prefValue: Ansys.Mechanical.DataModel.Enums.MetricPreference) → [None](https://docs.python.org/3/library/constants.html#None)

SetMeshMetricOptions method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSolidMeshMetricLimits"></a>

### Mesh.SetSolidMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLimit: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), ErrorLimit: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

SetSolidMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSolidSurfaceMeshMetricLimits"></a>

### Mesh.SetSolidSurfaceMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLimit: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), ErrorLimit: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

SetSolidSurfaceMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSolidSurfaceMeshQualityErrorLimit"></a>

### Mesh.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSolidSurfaceMeshQualityWarningLimit"></a>

### Mesh.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSurfaceMeshMetricLimits"></a>

### Mesh.SetSurfaceMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLimit: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), ErrorLimit: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

SetSurfaceMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSurfaceMeshQualityErrorLimit"></a>

### Mesh.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Set Mesh Quality Error Level

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetSurfaceMeshQualityWarningLimit"></a>

### Mesh.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetVolumeMeshQualityErrorLimit"></a>

### Mesh.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.SetVolumeMeshQualityWarningLimit"></a>

### Mesh.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowAxisymmetricBodies"></a>

### Mesh.ShowAxisymmetricBodies() → [None](https://docs.python.org/3/library/constants.html#None)

Show Axisymmetric bodies.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowFeatureSuppressibleFaces"></a>

### Mesh.ShowFeatureSuppressibleFaces() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ShowFeatureSuppressibleFaces action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowMappableBodies"></a>

### Mesh.ShowMappableBodies() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ShowMappableBodies action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowOverlappingFaces"></a>

### Mesh.ShowOverlappingFaces() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ShowOverlappingFaces action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowSweepableBodies"></a>

### Mesh.ShowSweepableBodies() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ShowSweepableBodies action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.ShowUnconnectedFacesNearEdges"></a>

### Mesh.ShowUnconnectedFacesNearEdges() → [None](https://docs.python.org/3/library/constants.html#None)

Run the  ShowUnconnectedFreeEdges action.

<!-- !! processed by numpydoc !! -->

<a id="Mesh.Update"></a>

### Mesh.Update() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Update action.

<!-- !! processed by numpydoc !! -->

