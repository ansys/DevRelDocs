# Mesh

### *class* Mesh

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Mesh.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddContactSizing`](#Mesh.AddContactSizing)                                                                         | Creates a new ContactSizing                                                       |
|----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddFaceMeshing`](#Mesh.AddFaceMeshing)                                                                             | Creates a new FaceMeshing                                                         |
| [`AddInflation`](#Mesh.AddInflation)                                                                                 | Creates a new Inflation                                                           |
| [`AddMatchControl`](#Mesh.AddMatchControl)                                                                           | Creates a new MatchControl                                                        |
| [`AddPinch`](#Mesh.AddPinch)                                                                                         | Creates a new Pinch                                                               |
| [`AddRefinement`](#Mesh.AddRefinement)                                                                               | Creates a new Refinement                                                          |
| [`AddSizing`](#Mesh.AddSizing)                                                                                       | Creates a new Sizing                                                              |
| [`CreatePinchControls`](#Mesh.CreatePinchControls)                                                                   | Run the CreatePinchControls action.                                               |
| [`GenerateMesh`](#Mesh.GenerateMesh)                                                                                 | Run the GenerateMesh action.                                                      |
| [`PreviewInflation`](#Mesh.PreviewInflation)                                                                         | Run the PreviewInflation action.                                                  |
| [`PreviewSurfaceMesh`](#Mesh.PreviewSurfaceMesh)                                                                     | Run the PreviewSurfaceMesh action.                                                |
| [`ShowFeatureSuppressibleFaces`](#Mesh.ShowFeatureSuppressibleFaces)                                                 | Run the ShowFeatureSuppressibleFaces action.                                      |
| [`ShowMappableBodies`](#Mesh.ShowMappableBodies)                                                                     | Run the ShowMappableBodies action.                                                |
| [`ShowSweepableBodies`](#Mesh.ShowSweepableBodies)                                                                   | Run the ShowSweepableBodies action.                                               |
| [`Update`](#Mesh.Update)                                                                                             | Run the Update action.                                                            |
| [`GetChildren`](#id1)                                                                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Mesh.AddComment)                                                                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](#Mesh.AddFigure)                                                                                       | Creates a new child Figure.                                                       |
| [`AddImage`](#Mesh.AddImage)                                                                                         | Creates a new child Image.                                                        |
| [`PreviewWelds`](#Mesh.PreviewWelds)                                                                                 | Preview Welds.                                                                    |
| [`PreviewMeshOnWelds`](#Mesh.PreviewMeshOnWelds)                                                                     | PreviewMeshOnWelds method.                                                        |
| [`PreviewMeshOnWeld`](#Mesh.PreviewMeshOnWeld)                                                                       | Preview model mesh on one weld control provided.                                  |
| [`PreviewMeshOnAllWelds`](#Mesh.PreviewMeshOnAllWelds)                                                               | Preview model mesh on all weld controls of the Mesh.                              |
| [`ShowOverlappingFaces`](#Mesh.ShowOverlappingFaces)                                                                 | Run the ShowOverlappingFaces action.                                              |
| [`ShowUnconnectedFacesNearEdges`](#Mesh.ShowUnconnectedFacesNearEdges)                                               | Run the  ShowUnconnectedFreeEdges action.                                         |
| [`PreviewMeshOnWeldWorksheet`](#Mesh.PreviewMeshOnWeldWorksheet)                                                     | PreviewMeshOnWeldWorksheet method.                                                |
| [`ClearGeneratedData`](#Mesh.ClearGeneratedData)                                                                     | Run the ClearGeneratedData action.                                                |
| [`CleanPartOrBody`](#Mesh.CleanPartOrBody)                                                                           | Clear generated data for parts and/or bodies provided.                            |
| [`AddNodeMergeGroup`](#Mesh.AddNodeMergeGroup)                                                                       | Add a new NodeMergeGroup.                                                         |
| [`AddNodeMerge`](#Mesh.AddNodeMerge)                                                                                 | Add a new NodeMerge.                                                              |
| [`AddAutomaticMethod`](#Mesh.AddAutomaticMethod)                                                                     | Creates a new AutomaticMethod                                                     |
| [`AddMeshConnectionGroup`](#Mesh.AddMeshConnectionGroup)                                                             | Add a new MeshConnectionGroup.                                                    |
| [`AddContactMatchGroup`](#Mesh.AddContactMatchGroup)                                                                 | Add a new AddContactMatchGroup.                                                   |
| [`AddManualMeshConnection`](#Mesh.AddManualMeshConnection)                                                           | Add a new ManualMeshConnection                                                    |
| [`AddPullExtrude`](#Mesh.AddPullExtrude)                                                                             | Add a new Pull (Extrude).                                                         |
| [`AddPullRevolve`](#Mesh.AddPullRevolve)                                                                             | Add a new Pull (Revolve).                                                         |
| [`AddPullSurfaceCoating`](#Mesh.AddPullSurfaceCoating)                                                               | Add a new Pull (Surface Coating)).                                                |
| [`AddDirectMorph`](#Mesh.AddDirectMorph)                                                                             | Add a new DirectMorph.                                                            |
| [`AddDeviation`](#Mesh.AddDeviation)                                                                                 | Creates a new SagControl                                                          |
| [`AddWasher`](#Mesh.AddWasher)                                                                                       | Creates a new SagControl                                                          |
| [`AddWeld`](#Mesh.AddWeld)                                                                                           | Creates a new WeldControl                                                         |
| [`AddRepairTopology`](#Mesh.AddRepairTopology)                                                                       | Creates a new RepairTopology                                                      |
| [`AddConnect`](#Mesh.AddConnect)                                                                                     | Creates a new Connect Control                                                     |
| [`AddFeatureSuppress`](#Mesh.AddFeatureSuppress)                                                                     | Creates a new FeatureSuppress                                                     |
| [`AddGeometryFidelity`](#Mesh.AddGeometryFidelity)                                                                   | Creates a new GeometryFidelity                                                    |
| [`AddMeshCopy`](#Mesh.AddMeshCopy)                                                                                   | Creates a new MeshCopy                                                            |
| [`PinchControlGeomtry`](#Mesh.PinchControlGeomtry)                                                                   | Set the geometry type for the Pinch Control.                                      |
| [`IsMeshMetricVisible`](#Mesh.IsMeshMetricVisible)                                                                   | IsMeshMetricVisible method.                                                       |
| [`GetIsShellTargetMetric`](#Mesh.GetIsShellTargetMetric)                                                             | Get Shell Target Metric                                                           |
| [`GetActiveSurfaceMeshQuality`](#Mesh.GetActiveSurfaceMeshQuality)                                                   | Get Active User Mesh Quality                                                      |
| [`GetSurfaceMeshQualityName`](#Mesh.GetSurfaceMeshQualityName)                                                       | Get Mesh Quality Name                                                             |
| [`GetSurfaceMeshQualityWarningLimit`](#Mesh.GetSurfaceMeshQualityWarningLimit)                                       | Get User Mesh Quality Warning Limit                                               |
| [`GetSurfaceMeshQualityErrorLimit`](#Mesh.GetSurfaceMeshQualityErrorLimit)                                           | Get User Mesh Quality Error Limit                                                 |
| [`GetSurfaceMeshQualityPercentageFailed`](#Mesh.GetSurfaceMeshQualityPercentageFailed)                               | Get Mesh Quality Percentage Failed                                                |
| [`GetSurfaceMeshQualityCountFailed`](#Mesh.GetSurfaceMeshQualityCountFailed)                                         | Get Mesh Quality Count Failed                                                     |
| [`GetSurfaceMeshQualityWarningPercentageFailed`](#Mesh.GetSurfaceMeshQualityWarningPercentageFailed)                 | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetSurfaceMeshQualityWarningCountFailed`](#Mesh.GetSurfaceMeshQualityWarningCountFailed)                           | Get Mesh Quality Warning Count Failed                                             |
| [`GetSurfaceMeshQualityWorstMetricValue`](#Mesh.GetSurfaceMeshQualityWorstMetricValue)                               | Get Mesh Quality Worst Metric Value                                               |
| [`GetSurfaceMeshQualityAverageMetricValue`](#Mesh.GetSurfaceMeshQualityAverageMetricValue)                           | Get Mesh Quality Average Metric Value                                             |
| [`SetActiveSurfaceMeshQuality`](#Mesh.SetActiveSurfaceMeshQuality)                                                   | Set Active Mesh Quality                                                           |
| [`SetSurfaceMeshQualityWarningLimit`](#id2)                                                                          | Set Mesh Quality Warning Limit                                                    |
| [`SetSurfaceMeshQualityWarningLimit`](#id2)                                                                          | Set Mesh Quality Warning Limit                                                    |
| [`SetSurfaceMeshQualityErrorLimit`](#id3)                                                                            | Set Mesh Quality Error Level                                                      |
| [`SetSurfaceMeshQualityErrorLimit`](#id3)                                                                            | Set Mesh Quality Error Level                                                      |
| [`CreateMQSurfaceElementsNamedSelection`](#Mesh.CreateMQSurfaceElementsNamedSelection)                               | Create Mesh Quality Surface Element Named Selection                               |
| [`GetIsSolidTargetMetric`](#Mesh.GetIsSolidTargetMetric)                                                             | Get Solid Target Metric                                                           |
| [`GetVolumeMeshQualityName`](#Mesh.GetVolumeMeshQualityName)                                                         | Get Mesh Quality Name                                                             |
| [`GetVolumeMeshQualityWarningLimit`](#Mesh.GetVolumeMeshQualityWarningLimit)                                         | Get Mesh Quality Warning Limit                                                    |
| [`GetVolumeMeshQualityErrorLimit`](#Mesh.GetVolumeMeshQualityErrorLimit)                                             | Get Mesh Quality Error Limit                                                      |
| [`GetVolumeMeshQualityPercentageFailed`](#Mesh.GetVolumeMeshQualityPercentageFailed)                                 | Get Mesh Quality Percentage Failed                                                |
| [`GetVolumeMeshQualityCountFailed`](#Mesh.GetVolumeMeshQualityCountFailed)                                           | Get Mesh Quality Count Failed                                                     |
| [`GetVolumeMeshQualityWarningPercentageFailed`](#Mesh.GetVolumeMeshQualityWarningPercentageFailed)                   | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetVolumeMeshQualityWarningCountFailed`](#Mesh.GetVolumeMeshQualityWarningCountFailed)                             | Get Mesh Quality Warning Count Failed                                             |
| [`GetVolumeMeshQualityWorstMetricValue`](#Mesh.GetVolumeMeshQualityWorstMetricValue)                                 | Get Mesh Quality Worst Metric Value                                               |
| [`GetVolumeMeshQualityAverageMetricValue`](#Mesh.GetVolumeMeshQualityAverageMetricValue)                             | Get Mesh Quality Average Metric Value                                             |
| [`GetVolumeMeshQualityWorstMetricBackgroundColor`](#Mesh.GetVolumeMeshQualityWorstMetricBackgroundColor)             | Get Mesh Quality Worst Metric BackgroundColor                                     |
| [`SetActiveVolumeMeshQuality`](#Mesh.SetActiveVolumeMeshQuality)                                                     | Set Active Mesh Quality                                                           |
| [`SetVolumeMeshQualityWarningLimit`](#id4)                                                                           | Set Mesh Quality Warning Limit                                                    |
| [`SetVolumeMeshQualityWarningLimit`](#id4)                                                                           | Set Mesh Quality Warning Limit                                                    |
| [`SetVolumeMeshQualityErrorLimit`](#id5)                                                                             | Set Mesh Quality Error Limit                                                      |
| [`SetVolumeMeshQualityErrorLimit`](#id5)                                                                             | Set Mesh Quality Error Limit                                                      |
| [`CreateMQVolumeElementsNamedSelection`](#Mesh.CreateMQVolumeElementsNamedSelection)                                 | Create Mesh Quality Volume Element Name Selection                                 |
| [`GetIsSolidSurfaceTargetMetric`](#Mesh.GetIsSolidSurfaceTargetMetric)                                               | Get SolidSurface Target Metric                                                    |
| [`GetSolidSurfaceMeshQualityName`](#Mesh.GetSolidSurfaceMeshQualityName)                                             | Get Mesh Quality Name                                                             |
| [`GetSolidSurfaceMeshQualityWarningLimit`](#Mesh.GetSolidSurfaceMeshQualityWarningLimit)                             | Get Mesh Quality Warning Limit                                                    |
| [`GetSolidSurfaceMeshQualityErrorLimit`](#Mesh.GetSolidSurfaceMeshQualityErrorLimit)                                 | Get Mesh Quality Error Limit                                                      |
| [`GetSolidSurfaceMeshQualityPercentageFailed`](#Mesh.GetSolidSurfaceMeshQualityPercentageFailed)                     | Get Mesh Quality Percentage Failed                                                |
| [`GetSolidSurfaceMeshQualityCountFailed`](#Mesh.GetSolidSurfaceMeshQualityCountFailed)                               | Get Mesh Quality Count Failed                                                     |
| [`GetSolidSurfaceMeshQualityWarningPercentageFailed`](#Mesh.GetSolidSurfaceMeshQualityWarningPercentageFailed)       | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetSolidSurfaceMeshQualityWarningCountFailed`](#Mesh.GetSolidSurfaceMeshQualityWarningCountFailed)                 | Get Mesh Quality Warning Count Failed                                             |
| [`GetSolidSurfaceMeshQualityWorstMetricValue`](#Mesh.GetSolidSurfaceMeshQualityWorstMetricValue)                     | Get Mesh Quality Worst Metric Value                                               |
| [`GetSolidSurfaceMeshQualityAverageMetricValue`](#Mesh.GetSolidSurfaceMeshQualityAverageMetricValue)                 | Get Mesh Quality Average Metric Value                                             |
| [`GetSolidSurfaceMeshQualityWorstMetricBackgroundColor`](#Mesh.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor) | Get Mesh Quality Worst Metric BackgroundColor                                     |
| [`SetActiveSolidSurfaceMeshQuality`](#Mesh.SetActiveSolidSurfaceMeshQuality)                                         | Set Active Mesh Quality                                                           |
| [`SetSolidSurfaceMeshQualityWarningLimit`](#id6)                                                                     | Set Mesh Quality Warning Limit                                                    |
| [`SetSolidSurfaceMeshQualityWarningLimit`](#id6)                                                                     | Set Mesh Quality Warning Limit                                                    |
| [`SetSolidSurfaceMeshQualityErrorLimit`](#id7)                                                                       | Set Mesh Quality Error Limit                                                      |
| [`SetSolidSurfaceMeshQualityErrorLimit`](#id7)                                                                       | Set Mesh Quality Error Limit                                                      |
| [`CreateMQSolidSurfaceElementsNamedSelection`](#Mesh.CreateMQSolidSurfaceElementsNamedSelection)                     | Create Mesh Quality SolidSurface Element Name Selection                           |
| [`LoadMQWorksheetFile`](#Mesh.LoadMQWorksheetFile)                                                                   | LoadMQWorksheetFile method.                                                       |
| [`SaveMQWorksheetFile`](#Mesh.SaveMQWorksheetFile)                                                                   | SaveMQWorksheetFile method.                                                       |
| [`GetVolumeMeshMetrics`](#Mesh.GetVolumeMeshMetrics)                                                                 | GetVolumeMeshMetrics method.                                                      |
| [`GetSolidSurfaceMeshMetrics`](#Mesh.GetSolidSurfaceMeshMetrics)                                                     | GetSolidSurfaceMeshMetrics method.                                                |
| [`SetSurfaceMeshMetricLimits`](#Mesh.SetSurfaceMeshMetricLimits)                                                     | SetSurfaceMeshMetricLimits method.                                                |
| [`SetSolidMeshMetricLimits`](#Mesh.SetSolidMeshMetricLimits)                                                         | SetSolidMeshMetricLimits method.                                                  |
| [`SetSolidSurfaceMeshMetricLimits`](#Mesh.SetSolidSurfaceMeshMetricLimits)                                           | SetSolidSurfaceMeshMetricLimits method.                                           |
| [`ActivateAllSurfaceWorksheetRows`](#Mesh.ActivateAllSurfaceWorksheetRows)                                           | ActivateAllSurfaceWorksheetRows method.                                           |
| [`ActivateAllVolumeWorksheetRows`](#Mesh.ActivateAllVolumeWorksheetRows)                                             | ActivateAllVolumeWorksheetRows method.                                            |
| [`ActivateAllSolidSurfaceWorksheetRows`](#Mesh.ActivateAllSolidSurfaceWorksheetRows)                                 | ActivateAllSolidSurfaceWorksheetRows method.                                      |
| [`DeactivateAllSurfaceWorksheetRows`](#Mesh.DeactivateAllSurfaceWorksheetRows)                                       | DeactivateAllSurfaceWorksheetRows method.                                         |
| [`DeactivateAllVolumeWorksheetRows`](#Mesh.DeactivateAllVolumeWorksheetRows)                                         | DeactivateAllVolumeWorksheetRows method.                                          |
| [`DeactivateAllSolidSurfaceWorksheetRows`](#Mesh.DeactivateAllSolidSurfaceWorksheetRows)                             | DeactivateAllSolidSurfaceWorksheetRows method.                                    |
| [`SetMeshMetricOptions`](#Mesh.SetMeshMetricOptions)                                                                 | SetMeshMetricOptions method.                                                      |
| [`GetMeshMetricOptions`](#Mesh.GetMeshMetricOptions)                                                                 | GetMeshMetricOptions method.                                                      |
| [`Activate`](#Mesh.Activate)                                                                                         | Activate the current object.                                                      |
| [`CopyTo`](#Mesh.CopyTo)                                                                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Mesh.Duplicate)                                                                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Mesh.GroupAllSimilarChildren)                                                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Mesh.GroupSimilarObjects)                                                                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Mesh.PropertyByName)                                                                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Mesh.PropertyByAPIName)                                                                       | Get a property by its API name.                                                   |
| [`CreateParameter`](#Mesh.CreateParameter)                                                                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Mesh.GetParameter)                                                                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Mesh.RemoveParameter)                                                                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Worksheet`](../Worksheet.md#Worksheet)                                                                               | Get the MeshControlWorksheet action.                             |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`ElementSize`](#Mesh.ElementSize)                                                                                     | Gets or sets the ElementSize.                                    |
| [`RigidBodyFaceMeshType`](#Mesh.RigidBodyFaceMeshType)                                                                 | Gets or sets the RigidBodyFaceMeshType.                          |
| [`RigidBodyBehavior`](#Mesh.RigidBodyBehavior)                                                                         | Gets or sets the BoundaryCondition.                              |
| [`CurrentConfiguration`](#Mesh.CurrentConfiguration)                                                                   | Gets the Assembly Mesh’s current configuration Id.               |
| [`MinimizeNumTriangles`](#Mesh.MinimizeNumTriangles)                                                                   | Gets or sets the TriangleReduction option for Batch Connections. |
| [`NumberOfShellMeshQualityMetrics`](#Mesh.NumberOfShellMeshQualityMetrics)                                             | Gets the number of Mesh Quality Metrics                          |
| [`GlobalUseCustomTargetLimit`](#Mesh.GlobalUseCustomTargetLimit)                                                       | Gets or sets the GlobalUseCustomTargetLimit.                     |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.               |
| [`ConnectionTolerance`](#Mesh.ConnectionTolerance)                                                                     | Gets or sets the ConnectionTolerance.                            |
| [`ConnectionToleranceList`](#Mesh.ConnectionToleranceList)                                                             | Gets or sets the ConnectionToleranceList.                        |
| [`UseAdvancedSizeFunction`](#Mesh.UseAdvancedSizeFunction)                                                             | Gets or sets the UseAdvancedSizeFunction.                        |
| [`Method`](#Mesh.Method)                                                                                               | Gets or sets the Method.                                         |
| [`UseAutomaticInflation`](#Mesh.UseAutomaticInflation)                                                                 | Gets or sets the UseAutomaticInflation.                          |
| [`AutomaticMeshBasedDefeaturing`](#Mesh.AutomaticMeshBasedDefeaturing)                                                 | Gets or sets the AutomaticMeshBasedDefeaturing.                  |
| [`Beam3`](#Mesh.Beam3)                                                                                                 | Gets the Beam3.                                                  |
| [`Beam4`](#Mesh.Beam4)                                                                                                 | Gets the Beam4.                                                  |
| [`BeamElements`](#Mesh.BeamElements)                                                                                   | Gets the BeamElements.                                           |
| [`CheckMeshQuality`](#Mesh.CheckMeshQuality)                                                                           | Gets or sets the CheckMeshQuality.                               |
| [`CollisionAvoidance`](#Mesh.CollisionAvoidance)                                                                       | Gets or sets the CollisionAvoidance.                             |
| [`ConnectionSize`](#Mesh.ConnectionSize)                                                                               | Gets or sets the ConnectionSize.                                 |
| [`CornerNodes`](#Mesh.CornerNodes)                                                                                     | Gets the CornerNodes.                                            |
| [`Elements`](#Mesh.Elements)                                                                                           | Gets the Elements.                                               |
| [`GrowthRate`](#Mesh.GrowthRate)                                                                                       | Gets or sets the GrowthRate.                                     |
| [`GrowthRateType`](#Mesh.GrowthRateType)                                                                               | Gets or sets the GrowthRateType.                                 |
| [`GasketElements`](#Mesh.GasketElements)                                                                               | Gets the GasketElements.                                         |
| [`Hex20`](#Mesh.Hex20)                                                                                                 | Gets the Hex20.                                                  |
| [`Hex8`](#Mesh.Hex8)                                                                                                   | Gets the Hex8.                                                   |
| [`HoleRemovalTolerance`](#Mesh.HoleRemovalTolerance)                                                                   | Gets or sets the HoleRemovalTolerance.                           |
| [`InflationAlgorithm`](#Mesh.InflationAlgorithm)                                                                       | Gets or sets the InflationAlgorithm.                             |
| [`MaximumHeightOverBase`](#Mesh.MaximumHeightOverBase)                                                                 | Gets or sets the MaximumHeightOverBase.                          |
| [`FilletRatio`](#Mesh.FilletRatio)                                                                                     | Gets or sets the FilletRatio.                                    |
| [`InflationOption`](#Mesh.InflationOption)                                                                             | Gets or sets the InflationOption.                                |
| [`InitialSizeSeed`](#Mesh.InitialSizeSeed)                                                                             | Gets or sets the InitialSizeSeed.                                |
| [`AspectRatio`](#Mesh.AspectRatio)                                                                                     | Gets or sets the AspectRatio.                                    |
| [`Line2`](#Mesh.Line2)                                                                                                 | Gets the Line2.                                                  |
| [`Line3`](#Mesh.Line3)                                                                                                 | Gets the Line3.                                                  |
| [`MaximumLayers`](#Mesh.MaximumLayers)                                                                                 | Gets or sets the MaximumLayers.                                  |
| [`MidNodes`](#Mesh.MidNodes)                                                                                           | Gets the MidNodes.                                               |
| [`Nodes`](#Mesh.Nodes)                                                                                                 | Gets the Nodes.                                                  |
| [`NumberOfRetries`](#Mesh.NumberOfRetries)                                                                             | Gets or sets the NumberOfRetries.                                |
| [`ProximityGapFactor`](#Mesh.ProximityGapFactor)                                                                       | Gets or sets the ProximityGapFactor.                             |
| [`NumberOfCPUsForParallelPartMeshing`](#Mesh.NumberOfCPUsForParallelPartMeshing)                                       | Gets or sets the NumberOfCPUsForParallelPartMeshing.             |
| [`OrientationNodes`](#Mesh.OrientationNodes)                                                                           | Gets the OrientationNodes.                                       |
| [`GeneratePinchOnRefresh`](#Mesh.GeneratePinchOnRefresh)                                                               | Gets or sets the GeneratePinchOnRefresh.                         |
| [`Pyramid13`](#Mesh.Pyramid13)                                                                                         | Gets the Pyramid13.                                              |
| [`Pyramid5`](#Mesh.Pyramid5)                                                                                           | Gets the Pyramid5.                                               |
| [`Quad4`](#Mesh.Quad4)                                                                                                 | Gets the Quad4.                                                  |
| [`Quad8`](#Mesh.Quad8)                                                                                                 | Gets the Quad8.                                                  |
| [`Relevance`](Relevance.md#Relevance)                                                                                  | Gets or sets the Relevance.                                      |
| [`RelevanceCenter`](#Mesh.RelevanceCenter)                                                                             | Gets or sets the RelevanceCenter.                                |
| [`Resolution`](#Mesh.Resolution)                                                                                       | Gets or sets the Resolution.                                     |
| [`ShapeChecking`](#Mesh.ShapeChecking)                                                                                 | Gets or sets the ShapeChecking.                                  |
| [`SharedNodes`](#Mesh.SharedNodes)                                                                                     | Gets the SharedNodes.                                            |
| [`ShellElements`](#Mesh.ShellElements)                                                                                 | Gets the ShellElements.                                          |
| [`SmoothingIterations`](#Mesh.SmoothingIterations)                                                                     | Gets or sets the SmoothingIterations.                            |
| [`Smoothing`](../Results/Smoothing.md#Smoothing)                                                                       | Gets or sets the Smoothing.                                      |
| [`SolidElements`](#Mesh.SolidElements)                                                                                 | Gets the SolidElements.                                          |
| [`SolidShellElements`](#Mesh.SolidShellElements)                                                                       | Gets the SolidShellElements.                                     |
| [`SpanAngleCenter`](#Mesh.SpanAngleCenter)                                                                             | Gets or sets the SpanAngleCenter.                                |
| [`TargetExplicitAspectRatio`](#Mesh.TargetExplicitAspectRatio)                                                         | Gets or sets the TargetExplicitAspectRatio.                      |
| [`TargetQuality`](#Mesh.TargetQuality)                                                                                 | Gets or sets the TargetQuality.                                  |
| [`Tet10`](#Mesh.Tet10)                                                                                                 | Gets the Tet10.                                                  |
| [`Tet4`](#Mesh.Tet4)                                                                                                   | Gets the Tet4.                                                   |
| [`TransitionOption`](#Mesh.TransitionOption)                                                                           | Gets or sets the TransitionOption.                               |
| [`TransitionRatio`](#Mesh.TransitionRatio)                                                                             | Gets or sets the TransitionRatio.                                |
| [`GrowthRateSF`](#Mesh.GrowthRateSF)                                                                                   | Gets or sets the GrowthRateSF.                                   |
| [`Tri3`](#Mesh.Tri3)                                                                                                   | Gets the Tri3.                                                   |
| [`Tri6`](#Mesh.Tri6)                                                                                                   | Gets the Tri6.                                                   |
| [`TriangleSurfaceMesher`](#Mesh.TriangleSurfaceMesher)                                                                 | Gets or sets the TriangleSurfaceMesher.                          |
| [`UsePostSmoothing`](#Mesh.UsePostSmoothing)                                                                           | Gets or sets the UsePostSmoothing.                               |
| [`Wedge15`](#Mesh.Wedge15)                                                                                             | Gets the Wedge15.                                                |
| [`Wedge6`](#Mesh.Wedge6)                                                                                               | Gets the Wedge6.                                                 |
| [`CoplanarAngleTol`](#Mesh.CoplanarAngleTol)                                                                           | Gets or sets the CoplanarAngleTol.                               |
| [`FirstLayerHeight`](#Mesh.FirstLayerHeight)                                                                           | Gets or sets the FirstLayerHeight.                               |
| [`MaximumAngle`](#Mesh.MaximumAngle)                                                                                   | Gets or sets the MaximumAngle.                                   |
| [`MaximumThickness`](#Mesh.MaximumThickness)                                                                           | Gets or sets the MaximumThickness.                               |
| [`MaximumSize`](#Mesh.MaximumSize)                                                                                     | Gets or sets the MaximumSize.                                    |
| [`DefeatureTolerance`](#Mesh.DefeatureTolerance)                                                                       | Gets or sets the DefeatureTolerance.                             |
| [`Average`](#Mesh.Average)                                                                                             | Gets the Average.                                                |
| [`Maximum`](#Mesh.Maximum)                                                                                             | Gets the Maximum.                                                |
| [`Minimum`](#Mesh.Minimum)                                                                                             | Gets the Minimum.                                                |
| [`StandardDeviation`](#Mesh.StandardDeviation)                                                                         | Gets the StandardDeviation.                                      |
| [`MinimumEdgeLength`](#Mesh.MinimumEdgeLength)                                                                         | Gets the MinimumEdgeLength.                                      |
| [`MinimumSize`](#Mesh.MinimumSize)                                                                                     | Gets or sets the MinimumSize.                                    |
| [`PinchTolerance`](#Mesh.PinchTolerance)                                                                               | Gets or sets the PinchTolerance.                                 |
| [`ProximityMinimumSize`](#Mesh.ProximityMinimumSize)                                                                   | Gets or sets the ProximityMinimumSize.                           |
| [`CurvatureNormalAngle`](#Mesh.CurvatureNormalAngle)                                                                   | Gets or sets the CurvatureNormalAngle.                           |
| [`TargetCharacteristicLength`](#Mesh.TargetCharacteristicLength)                                                       | Gets or sets the TargetCharacteristicLength.                     |
| [`TargetSkewness`](#Mesh.TargetSkewness)                                                                               | Gets or sets the TargetSkewness.                                 |
| [`DisplayStyle`](#Mesh.DisplayStyle)                                                                                   | Gets or sets the DisplayStyle.                                   |
| [`ElementOrder`](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ElementOrder)                                  | Gets or sets the ElementOrder.                                   |
| [`ExportFormat`](#Mesh.ExportFormat)                                                                                   | Gets or sets the ExportFormat.                                   |
| [`InflationElementType`](#Mesh.InflationElementType)                                                                   | Gets or Sets the InflationElementType                            |
| [`MeshMetric`](#Mesh.MeshMetric)                                                                                       | Gets or sets the MeshMetric.                                     |
| [`PhysicsPreference`](#Mesh.PhysicsPreference)                                                                         | Gets or sets the PhysicsPreference.                              |
| [`ExportUnit`](#Mesh.ExportUnit)                                                                                       | Gets or sets the ExportUnit.                                     |
| [`ProximitySizeSources`](#Mesh.ProximitySizeSources)                                                                   | Gets or sets the ProximitySizeSources.                           |
| [`SolverPreference`](#Mesh.SolverPreference)                                                                           | Gets or sets the SolverPreference.                               |
| [`ViewAdvancedOptions`](#Mesh.ViewAdvancedOptions)                                                                     | Gets or sets the ViewAdvancedOptions.                            |
| [`CaptureCurvature`](#Mesh.CaptureCurvature)                                                                           | Gets or sets the CaptureCurvature.                               |
| [`CaptureProximity`](#Mesh.CaptureProximity)                                                                           | Gets or sets the CaptureProximity.                               |
| [`ExtraRetriesForAssembly`](#Mesh.ExtraRetriesForAssembly)                                                             | Gets or sets the ExtraRetriesForAssembly.                        |
| [`MeshMorphing`](#Mesh.MeshMorphing)                                                                                   | Gets or sets the MeshMorphing.                                   |
| [`MultiConnectionSteps`](#Mesh.MultiConnectionSteps)                                                                   | Gets or sets the MultiConnectionSteps.                           |
| [`UseSheetThicknessForPinch`](#Mesh.UseSheetThicknessForPinch)                                                         | Gets or sets the UseSheetThicknessForPinch.                      |
| [`ReadOnly`](#Mesh.ReadOnly)                                                                                           | Gets the ReadOnly.                                               |
| [`SheetLoopRemoval`](#Mesh.SheetLoopRemoval)                                                                           | Gets or sets the SheetLoopRemoval.                               |
| [`ShowDetailedStatistics`](#Mesh.ShowDetailedStatistics)                                                               | Gets or sets the ShowDetailedStatistics.                         |
| [`StraightSidedElements`](#Mesh.StraightSidedElements)                                                                 | Gets or sets the StraightSidedElements.                          |
| [`TopologyChecking`](#Mesh.TopologyChecking)                                                                           | Gets or sets the TopologyChecking.                               |
| [`UseAdaptiveSizing`](#Mesh.UseAdaptiveSizing)                                                                         | Gets or sets the UseAdaptiveSizing.                              |
| [`UseFixedSizeFunctionForSheets`](#Mesh.UseFixedSizeFunctionForSheets)                                                 | Gets or sets the UseFixedSizeFunctionForSheets.                  |
| [`QuadMesh`](#Mesh.QuadMesh)                                                                                           | Gets or sets the QuadMesh.                                       |
| [`MeshBasedConnection`](#Mesh.MeshBasedConnection)                                                                     | Gets or sets the MeshBasedConnection.                            |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                     |
| [`Children`](#Mesh.Children)                                                                                           | Gets the list of children.                                       |
| [`Comments`](#Mesh.Comments)                                                                                           | Gets the list of associated comments.                            |
| [`Figures`](#Mesh.Figures)                                                                                             | Gets the list of associated figures.                             |
| [`Images`](#Mesh.Images)                                                                                               | Gets the list of associated images.                              |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.               |
| [`Properties`](#Mesh.Properties)                                                                                       | Gets the list of properties for this object.                     |
| [`VisibleProperties`](#Mesh.VisibleProperties)                                                                         | Gets the list of properties that are visible for this object.    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Mesh
```

## Property detail

### *property* Mesh.Worksheet *: Ansys.ACT.Interfaces.Common.IWorksheet | [None](https://docs.python.org/3/library/constants.html#None)*

Get the MeshControlWorksheet action.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.RigidBodyFaceMeshType *: [Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyFaceMeshType](../../../../Mechanical/DataModel/Enums/MeshControlGroupRigidBodyFaceMeshType.md#MeshControlGroupRigidBodyFaceMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidBodyFaceMeshType.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.RigidBodyBehavior *: [Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyBehaviorType](../../../../Mechanical/DataModel/Enums/MeshControlGroupRigidBodyBehaviorType.md#MeshControlGroupRigidBodyBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.CurrentConfiguration *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Assembly Mesh’s current configuration Id.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MinimizeNumTriangles *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleReduction option for Batch Connections.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.NumberOfShellMeshQualityMetrics *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of Mesh Quality Metrics

<!-- !! processed by numpydoc !! -->

### *property* Mesh.GlobalUseCustomTargetLimit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalUseCustomTargetLimit.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ConnectionTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionTolerance.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ConnectionToleranceList *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionToleranceList.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.UseAdvancedSizeFunction *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAdvancedSizeFunction.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.UseAutomaticInflation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAutomaticInflation.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.AutomaticMeshBasedDefeaturing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticMeshBasedDefeaturing.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Beam3 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Beam3.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Beam4 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Beam4.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.BeamElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BeamElements.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.CheckMeshQuality *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckMeshQuality.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.CollisionAvoidance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CollisionAvoidance.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ConnectionSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionSize.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.CornerNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CornerNodes.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.GrowthRateType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRateType.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.GasketElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GasketElements.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Hex20 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Hex20.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Hex8 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Hex8.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.HoleRemovalTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HoleRemovalTolerance.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.InflationAlgorithm *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationAlgorithm.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MaximumHeightOverBase *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumHeightOverBase.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.FilletRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilletRatio.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.InflationOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationOption.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.InitialSizeSeed *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialSizeSeed.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.AspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Line2 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Line2.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Line3 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Line3.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MaximumLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumLayers.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MidNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MidNodes.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.NumberOfRetries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRetries.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ProximityGapFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityGapFactor.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.NumberOfCPUsForParallelPartMeshing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCPUsForParallelPartMeshing.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.OrientationNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OrientationNodes.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.GeneratePinchOnRefresh *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratePinchOnRefresh.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Pyramid13 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pyramid13.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Pyramid5 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pyramid5.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Quad4 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Quad4.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Quad8 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Quad8.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Relevance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Relevance.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.RelevanceCenter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelevanceCenter.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Resolution *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Resolution.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ShapeChecking *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShapeChecking.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.SharedNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SharedNodes.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ShellElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShellElements.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.SmoothingIterations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothingIterations.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Smoothing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Smoothing.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.SolidElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidElements.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.SolidShellElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidShellElements.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.SpanAngleCenter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpanAngleCenter.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.TargetExplicitAspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetExplicitAspectRatio.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.TargetQuality *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetQuality.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Tet10 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tet10.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Tet4 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tet4.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.TransitionOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionOption.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.TransitionRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionRatio.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.GrowthRateSF *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRateSF.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Tri3 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tri3.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Tri6 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tri6.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.TriangleSurfaceMesher *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleSurfaceMesher.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.UsePostSmoothing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UsePostSmoothing.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Wedge15 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Wedge15.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Wedge6 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Wedge6.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.CoplanarAngleTol *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoplanarAngleTol.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.FirstLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FirstLayerHeight.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MaximumAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumAngle.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MaximumThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumThickness.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MaximumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumSize.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.DefeatureTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureTolerance.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.StandardDeviation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MinimumEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEdgeLength.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSize.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.PinchTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchTolerance.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ProximityMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityMinimumSize.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.TargetCharacteristicLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCharacteristicLength.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.TargetSkewness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetSkewness.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.DisplayStyle *: [Ansys.Mechanical.DataModel.Enums.MeshDisplayStyle](../../../../Mechanical/DataModel/Enums/MeshDisplayStyle.md#MeshDisplayStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayStyle.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOrder.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ExportFormat *: [Ansys.Mechanical.DataModel.Enums.FluentExportMeshType](../../../../Mechanical/DataModel/Enums/FluentExportMeshType.md#FluentExportMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportFormat.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.InflationElementType *: [Ansys.Mechanical.DataModel.Enums.MeshInflationElementType](../../../../Mechanical/DataModel/Enums/MeshInflationElementType.md#MeshInflationElementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the InflationElementType

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshMetric.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.PhysicsPreference *: [Ansys.Mechanical.DataModel.Enums.MeshPhysicsPreferenceType](../../../../Mechanical/DataModel/Enums/MeshPhysicsPreferenceType.md#MeshPhysicsPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhysicsPreference.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ExportUnit *: [Ansys.Mechanical.DataModel.Enums.PolyflowExportUnit](../../../../Mechanical/DataModel/Enums/PolyflowExportUnit.md#PolyflowExportUnit) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportUnit.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ProximitySizeSources *: [Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType](../../../../Mechanical/DataModel/Enums/ProximitySFSourcesType.md#ProximitySFSourcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximitySizeSources.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.SolverPreference *: [Ansys.Mechanical.DataModel.Enums.MeshSolverPreferenceType](../../../../Mechanical/DataModel/Enums/MeshSolverPreferenceType.md#MeshSolverPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPreference.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ViewAdvancedOptions *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewAdvancedOptions.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.CaptureCurvature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureCurvature.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.CaptureProximity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureProximity.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ExtraRetriesForAssembly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExtraRetriesForAssembly.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MeshMorphing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshMorphing.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MultiConnectionSteps *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiConnectionSteps.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.UseSheetThicknessForPinch *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseSheetThicknessForPinch.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.SheetLoopRemoval *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SheetLoopRemoval.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.ShowDetailedStatistics *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowDetailedStatistics.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.StraightSidedElements *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StraightSidedElements.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.TopologyChecking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopologyChecking.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.UseAdaptiveSizing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAdaptiveSizing.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.UseFixedSizeFunctionForSheets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseFixedSizeFunctionForSheets.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.QuadMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuadMesh.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.MeshBasedConnection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshBasedConnection.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Mesh.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Mesh.AddContactSizing()

Creates a new ContactSizing

<!-- !! processed by numpydoc !! -->

### Mesh.AddFaceMeshing()

Creates a new FaceMeshing

<!-- !! processed by numpydoc !! -->

### Mesh.AddInflation()

Creates a new Inflation

<!-- !! processed by numpydoc !! -->

### Mesh.AddMatchControl()

Creates a new MatchControl

<!-- !! processed by numpydoc !! -->

### Mesh.AddPinch()

Creates a new Pinch

<!-- !! processed by numpydoc !! -->

### Mesh.AddRefinement()

Creates a new Refinement

<!-- !! processed by numpydoc !! -->

### Mesh.AddSizing()

Creates a new Sizing

<!-- !! processed by numpydoc !! -->

### Mesh.CreatePinchControls()

Run the CreatePinchControls action.

<!-- !! processed by numpydoc !! -->

### Mesh.GenerateMesh()

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

### Mesh.PreviewInflation()

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

### Mesh.PreviewSurfaceMesh()

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

### Mesh.ShowFeatureSuppressibleFaces()

Run the ShowFeatureSuppressibleFaces action.

<!-- !! processed by numpydoc !! -->

### Mesh.ShowMappableBodies()

Run the ShowMappableBodies action.

<!-- !! processed by numpydoc !! -->

### Mesh.ShowSweepableBodies()

Run the ShowSweepableBodies action.

<!-- !! processed by numpydoc !! -->

### Mesh.Update()

Run the Update action.

<!-- !! processed by numpydoc !! -->

### Mesh.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Mesh.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Mesh.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Mesh.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Mesh.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Mesh.PreviewWelds()

Preview Welds.

<!-- !! processed by numpydoc !! -->

### Mesh.PreviewMeshOnWelds(dataModelObjects: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

PreviewMeshOnWelds method.

<!-- !! processed by numpydoc !! -->

### Mesh.PreviewMeshOnWeld(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Preview model mesh on one weld control provided.

<!-- !! processed by numpydoc !! -->

### Mesh.PreviewMeshOnAllWelds()

Preview model mesh on all weld controls of the Mesh.

<!-- !! processed by numpydoc !! -->

### Mesh.ShowOverlappingFaces()

Run the ShowOverlappingFaces action.

<!-- !! processed by numpydoc !! -->

### Mesh.ShowUnconnectedFacesNearEdges()

Run the  ShowUnconnectedFreeEdges action.

<!-- !! processed by numpydoc !! -->

### Mesh.PreviewMeshOnWeldWorksheet(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject, indices: System.Collections.Generic.IEnumerable[System.Int32])

PreviewMeshOnWeldWorksheet method.

<!-- !! processed by numpydoc !! -->

### Mesh.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### Mesh.CleanPartOrBody(dataModelObjects: System.Collections.IEnumerable)

Clear generated data for parts and/or bodies provided.

<!-- !! processed by numpydoc !! -->

### Mesh.AddNodeMergeGroup()

Add a new NodeMergeGroup.

<!-- !! processed by numpydoc !! -->

### Mesh.AddNodeMerge()

Add a new NodeMerge.

<!-- !! processed by numpydoc !! -->

### Mesh.AddAutomaticMethod()

Creates a new AutomaticMethod

<!-- !! processed by numpydoc !! -->

### Mesh.AddMeshConnectionGroup()

Add a new MeshConnectionGroup.

<!-- !! processed by numpydoc !! -->

### Mesh.AddContactMatchGroup()

Add a new AddContactMatchGroup.

<!-- !! processed by numpydoc !! -->

### Mesh.AddManualMeshConnection()

Add a new ManualMeshConnection

<!-- !! processed by numpydoc !! -->

### Mesh.AddPullExtrude()

Add a new Pull (Extrude).

<!-- !! processed by numpydoc !! -->

### Mesh.AddPullRevolve()

Add a new Pull (Revolve).

<!-- !! processed by numpydoc !! -->

### Mesh.AddPullSurfaceCoating()

Add a new Pull (Surface Coating)).

<!-- !! processed by numpydoc !! -->

### Mesh.AddDirectMorph()

Add a new DirectMorph.

<!-- !! processed by numpydoc !! -->

### Mesh.AddDeviation()

Creates a new SagControl

<!-- !! processed by numpydoc !! -->

### Mesh.AddWasher()

Creates a new SagControl

<!-- !! processed by numpydoc !! -->

### Mesh.AddWeld()

Creates a new WeldControl

<!-- !! processed by numpydoc !! -->

### Mesh.AddRepairTopology()

Creates a new RepairTopology

<!-- !! processed by numpydoc !! -->

### Mesh.AddConnect()

Creates a new Connect Control

<!-- !! processed by numpydoc !! -->

### Mesh.AddFeatureSuppress()

Creates a new FeatureSuppress

<!-- !! processed by numpydoc !! -->

### Mesh.AddGeometryFidelity()

Creates a new GeometryFidelity

<!-- !! processed by numpydoc !! -->

### Mesh.AddMeshCopy()

Creates a new MeshCopy

<!-- !! processed by numpydoc !! -->

### Mesh.PinchControlGeomtry(geomType: [Ansys.Mechanical.DataModel.Enums.MeshControlPinchGeomtryType](../../../../Mechanical/DataModel/Enums/MeshControlPinchGeomtryType.md#MeshControlPinchGeomtryType))

Set the geometry type for the Pinch Control.

<!-- !! processed by numpydoc !! -->

### Mesh.IsMeshMetricVisible(index: System.UInt32)

IsMeshMetricVisible method.

<!-- !! processed by numpydoc !! -->

### Mesh.GetIsShellTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Shell Target Metric

<!-- !! processed by numpydoc !! -->

### Mesh.GetActiveSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Active User Mesh Quality

<!-- !! processed by numpydoc !! -->

### Mesh.GetSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

### Mesh.GetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get User Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

### Mesh.GetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get User Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

### Mesh.GetSurfaceMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetSurfaceMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetSurfaceMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetSurfaceMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

### Mesh.GetSurfaceMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

### Mesh.SetActiveSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), activeMetric: System.Double)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

### Mesh.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: System.Double)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

### Mesh.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

### Mesh.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: System.Double)

Set Mesh Quality Error Level

<!-- !! processed by numpydoc !! -->

### Mesh.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Error Level

<!-- !! processed by numpydoc !! -->

### Mesh.CreateMQSurfaceElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), failCode: System.UInt32)

Create Mesh Quality Surface Element Named Selection

<!-- !! processed by numpydoc !! -->

### Mesh.GetIsSolidTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Solid Target Metric

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

### Mesh.SetActiveVolumeMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), activeMetric: System.Double)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

### Mesh.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: System.Double)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

### Mesh.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

### Mesh.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: System.Double)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

### Mesh.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

### Mesh.CreateMQVolumeElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), failCode: System.UInt32)

Create Mesh Quality Volume Element Name Selection

<!-- !! processed by numpydoc !! -->

### Mesh.GetIsSolidSurfaceTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get SolidSurface Target Metric

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

### Mesh.SetActiveSolidSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), activeMetric: System.Double)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

### Mesh.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: System.Double)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

### Mesh.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

### Mesh.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: System.Double)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

### Mesh.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

### Mesh.CreateMQSolidSurfaceElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), failCode: System.UInt32)

Create Mesh Quality SolidSurface Element Name Selection

<!-- !! processed by numpydoc !! -->

### Mesh.LoadMQWorksheetFile(filePath: System.String)

LoadMQWorksheetFile method.

<!-- !! processed by numpydoc !! -->

### Mesh.SaveMQWorksheetFile(filePath: System.String)

SaveMQWorksheetFile method.

<!-- !! processed by numpydoc !! -->

### Mesh.GetVolumeMeshMetrics()

GetVolumeMeshMetrics method.

<!-- !! processed by numpydoc !! -->

### Mesh.GetSolidSurfaceMeshMetrics()

GetSolidSurfaceMeshMetrics method.

<!-- !! processed by numpydoc !! -->

### Mesh.SetSurfaceMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLimit: Ansys.Core.Units.Quantity, ErrorLimit: Ansys.Core.Units.Quantity)

SetSurfaceMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

### Mesh.SetSolidMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLimit: Ansys.Core.Units.Quantity, ErrorLimit: Ansys.Core.Units.Quantity)

SetSolidMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

### Mesh.SetSolidSurfaceMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLimit: Ansys.Core.Units.Quantity, ErrorLimit: Ansys.Core.Units.Quantity)

SetSolidSurfaceMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

### Mesh.ActivateAllSurfaceWorksheetRows()

ActivateAllSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

### Mesh.ActivateAllVolumeWorksheetRows()

ActivateAllVolumeWorksheetRows method.

<!-- !! processed by numpydoc !! -->

### Mesh.ActivateAllSolidSurfaceWorksheetRows()

ActivateAllSolidSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

### Mesh.DeactivateAllSurfaceWorksheetRows()

DeactivateAllSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

### Mesh.DeactivateAllVolumeWorksheetRows()

DeactivateAllVolumeWorksheetRows method.

<!-- !! processed by numpydoc !! -->

### Mesh.DeactivateAllSolidSurfaceWorksheetRows()

DeactivateAllSolidSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

### Mesh.SetMeshMetricOptions(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), prefValue: Ansys.Mechanical.DataModel.Enums.MetricPreference)

SetMeshMetricOptions method.

<!-- !! processed by numpydoc !! -->

### Mesh.GetMeshMetricOptions(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

GetMeshMetricOptions method.

<!-- !! processed by numpydoc !! -->

### Mesh.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Mesh.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Mesh.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Mesh.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Mesh.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Mesh.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Mesh.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Mesh.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Mesh.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Mesh.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
