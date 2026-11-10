# `ImportedCutBoundaryRemoteForce`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteForce"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteForce(internalObject: Any)

<a id="ImportedCutBoundaryRemoteForce"></a>

### *class* ImportedCutBoundaryRemoteForce(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedCutBoundaryRemoteForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedCutBoundaryRemoteForce.Activate)                                         | Activate the current object.                                                                  |
| [`AddComment`](#ImportedCutBoundaryRemoteForce.AddComment)                                     | Creates a new child Comment.                                                                  |
| [`AddFigure`](#ImportedCutBoundaryRemoteForce.AddFigure)                                       | Creates a new child Figure.                                                                   |
| [`AddImage`](#ImportedCutBoundaryRemoteForce.AddImage)                                         | Creates a new child Image.                                                                    |
| [`AddMappingValidation`](#ImportedCutBoundaryRemoteForce.AddMappingValidation)                 | Creates a new MappingValidation                                                               |
| [`ClearGeneratedData`](#ImportedCutBoundaryRemoteForce.ClearGeneratedData)                     | Run the ClearGeneratedData action.                                                            |
| [`Copy`](#ImportedCutBoundaryRemoteForce.Copy)                                                 | Copies the current DataModelObject.                                                           |
| [`CopyTo`](#ImportedCutBoundaryRemoteForce.CopyTo)                                             | Copies all visible properties from this object to another.                                    |
| [`CreateObjRef`](#ImportedCutBoundaryRemoteForce.CreateObjRef)                                 | CreateObjRef method.                                                                          |
| [`CreateParameter`](#ImportedCutBoundaryRemoteForce.CreateParameter)                           | Creates a new parameter for a Property.                                                       |
| [`CreateTabbedFile`](#ImportedCutBoundaryRemoteForce.CreateTabbedFile)                         | Gets mapped values.                                                                           |
| [`Cut`](#ImportedCutBoundaryRemoteForce.Cut)                                                   | Cuts the current DataModelObject.                                                             |
| [`Delete`](#ImportedCutBoundaryRemoteForce.Delete)                                             | Run the Delete action.                                                                        |
| [`Duplicate`](#ImportedCutBoundaryRemoteForce.Duplicate)                                       | Creates a copy of the current DataModelObject.                                                |
| [`Equals`](#ImportedCutBoundaryRemoteForce.Equals)                                             | Equals method.                                                                                |
| [`ExportToTextFile`](#ImportedCutBoundaryRemoteForce.ExportToTextFile)                         | ExportToTextFile method.                                                                      |
| [`GetAPIName`](#ImportedCutBoundaryRemoteForce.GetAPIName)                                     | Property name bound to dispId.                                                                |
| [`GetActivateAtLoadStep`](#ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep)               | Gets whether the imported cut boundary remote force is active at the specified load step.     |
| [`GetAllProperties`](#ImportedCutBoundaryRemoteForce.GetAllProperties)                         | GetAllProperties method.                                                                      |
| [`GetChildren`](#ImportedCutBoundaryRemoteForce.GetChildren)                                   | Gets the list of children, filtered by type.                                                  |
| [`GetDetailsView`](#ImportedCutBoundaryRemoteForce.GetDetailsView)                             | GetDetailsView method.                                                                        |
| [`GetElementsCoordinateSystems`](#ImportedCutBoundaryRemoteForce.GetElementsCoordinateSystems) | Get  the elements coordinate systems dictionary.                                              |
| [`GetElementsOrientations`](#ImportedCutBoundaryRemoteForce.GetElementsOrientations)           | Get  the elements orientations dictionary.                                                    |
| [`GetEnumName`](#ImportedCutBoundaryRemoteForce.GetEnumName)                                   | Enum name bound to value                                                                      |
| [`GetHashCode`](#ImportedCutBoundaryRemoteForce.GetHashCode)                                   | GetHashCode method.                                                                           |
| [`GetIconFile`](#ImportedCutBoundaryRemoteForce.GetIconFile)                                   | GetIconFile method.                                                                           |
| [`GetLifetimeService`](#ImportedCutBoundaryRemoteForce.GetLifetimeService)                     | GetLifetimeService method.                                                                    |
| [`GetObjectData`](#ImportedCutBoundaryRemoteForce.GetObjectData)                               | GetObjectData method.                                                                         |
| [`GetParameter`](#ImportedCutBoundaryRemoteForce.GetParameter)                                 | Gets the parameter corresponding to the given property.                                       |
| [`GetPath`](#ImportedCutBoundaryRemoteForce.GetPath)                                           | GetPath method.                                                                               |
| [`GetPropertyName`](#ImportedCutBoundaryRemoteForce.GetPropertyName)                           | GetPropertyName method.                                                                       |
| [`GetPropertyValue`](#ImportedCutBoundaryRemoteForce.GetPropertyValue)                         | GetPropertyValue method.                                                                      |
| [`GetTableByName`](#ImportedCutBoundaryRemoteForce.GetTableByName)                             | GetTableByName method.                                                                        |
| [`GetVisibleProperties`](#ImportedCutBoundaryRemoteForce.GetVisibleProperties)                 | GetVisibleProperties method.                                                                  |
| [`GetVisiblePropertyNames`](#ImportedCutBoundaryRemoteForce.GetVisiblePropertyNames)           | GetVisiblePropertyNames method.                                                               |
| [`GroupAllSimilarChildren`](#ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                                       |
| [`GroupSimilarObjects`](#ImportedCutBoundaryRemoteForce.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                                           |
| [`Import`](#ImportedCutBoundaryRemoteForce.Import)                                             | Import.                                                                                       |
| [`ImportLoad`](#ImportedCutBoundaryRemoteForce.ImportLoad)                                     | Run the ImportLoad action.                                                                    |
| [`InitializeLifetimeService`](#ImportedCutBoundaryRemoteForce.InitializeLifetimeService)       | InitializeLifetimeService method.                                                             |
| [`IsPropertyEditable`](#ImportedCutBoundaryRemoteForce.IsPropertyEditable)                     | IsPropertyEditable method.                                                                    |
| [`IsPropertyVisible`](#ImportedCutBoundaryRemoteForce.IsPropertyVisible)                       | IsPropertyVisible method.                                                                     |
| [`Paste`](#ImportedCutBoundaryRemoteForce.Paste)                                               | Pastes to the current DataModelObject context.                                                |
| [`PropertyByAPIName`](#ImportedCutBoundaryRemoteForce.PropertyByAPIName)                       | Get a property by its API name.                                                               |
| [`PropertyById`](#ImportedCutBoundaryRemoteForce.PropertyById)                                 | PropertyById method.                                                                          |
| [`PropertyByName`](#ImportedCutBoundaryRemoteForce.PropertyByName)                             | Get a property by its unique name.                                                            |
| [`ReloadConfiguration`](#ImportedCutBoundaryRemoteForce.ReloadConfiguration)                   | Reload the Imported Load's setup from its associated configuration file (if available).       |
| [`RemoveFromGroup`](#ImportedCutBoundaryRemoteForce.RemoveFromGroup)                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.   |
| [`RemoveParameter`](#ImportedCutBoundaryRemoteForce.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property.             |
| [`SetActivateAtLoadStep`](#ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep)               | Sets whether the imported cut boundary remote force is active at the specified load step.     |
| [`SyncAnalysisFrequencies`](#ImportedCutBoundaryRemoteForce.SyncAnalysisFrequencies)           | Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load. |
| [`getFieldInterpolationProxy`](#ImportedCutBoundaryRemoteForce.getFieldInterpolationProxy)     | getFieldInterpolationProxy method.                                                            |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveRow`](#ImportedCutBoundaryRemoteForce.ActiveRow)                                                       | Gets or sets the ActiveRow.                                                                                                                                                                   |
| [`ActiveRowValue`](#ImportedCutBoundaryRemoteForce.ActiveRowValue)                                             | Gets or sets the ActiveRowValue.                                                                                                                                                              |
| [`Algorithm`](#ImportedCutBoundaryRemoteForce.Algorithm)                                                       | Algorithm property.                                                                                                                                                                           |
| [`AnalysisOrderNumbers`](#ImportedCutBoundaryRemoteForce.AnalysisOrderNumbers)                                 | AnalysisOrderNumbers property.                                                                                                                                                                |
| [`AnalysisRpmSelection`](#ImportedCutBoundaryRemoteForce.AnalysisRpmSelection)                                 | AnalysisRpmSelection property.                                                                                                                                                                |
| [`AnalysisRpmSetIndex`](#ImportedCutBoundaryRemoteForce.AnalysisRpmSetIndex)                                   | AnalysisRpmSetIndex property.                                                                                                                                                                 |
| [`AnalysisRpmSetRanges`](#ImportedCutBoundaryRemoteForce.AnalysisRpmSetRanges)                                 | AnalysisRpmSetRanges property.                                                                                                                                                                |
| [`AnalysisSpecifyRpm`](#ImportedCutBoundaryRemoteForce.AnalysisSpecifyRpm)                                     | AnalysisSpecifyRpm property.                                                                                                                                                                  |
| [`AnalysisTimeOrFrequencysDefinition`](#ImportedCutBoundaryRemoteForce.AnalysisTimeOrFrequencysDefinition)     | AnalysisTimeOrFrequencysDefinition property.                                                                                                                                                  |
| [`AnalysisTimeRangeMax`](#ImportedCutBoundaryRemoteForce.AnalysisTimeRangeMax)                                 | AnalysisTimeRangeMax property.                                                                                                                                                                |
| [`AnalysisTimeRangeMin`](#ImportedCutBoundaryRemoteForce.AnalysisTimeRangeMin)                                 | AnalysisTimeRangeMin property.                                                                                                                                                                |
| [`AppliedByType`](#ImportedCutBoundaryRemoteForce.AppliedByType)                                               | AppliedByType property.                                                                                                                                                                       |
| [`ApplyAs`](#ImportedCutBoundaryRemoteForce.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition.                                                                                       |
| [`AttachedRefs`](#ImportedCutBoundaryRemoteForce.AttachedRefs)                                                 | AttachedRefs property.                                                                                                                                                                        |
| [`AverageAmbientTemperature`](#ImportedCutBoundaryRemoteForce.AverageAmbientTemperature)                       | AverageAmbientTemperature property.                                                                                                                                                           |
| [`BoundingBoxTolerance`](#ImportedCutBoundaryRemoteForce.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                                                                                                                |
| [`BucketToleranceCheck`](#ImportedCutBoundaryRemoteForce.BucketToleranceCheck)                                 | BucketToleranceCheck property.                                                                                                                                                                |
| [`BucketToleranceKey`](#ImportedCutBoundaryRemoteForce.BucketToleranceKey)                                     | BucketToleranceKey property.                                                                                                                                                                  |
| [`BucketToleranceValue`](#ImportedCutBoundaryRemoteForce.BucketToleranceValue)                                 | BucketToleranceValue property.                                                                                                                                                                |
| [`CFDSurface`](#ImportedCutBoundaryRemoteForce.CFDSurface)                                                     | CFDSurface property.                                                                                                                                                                          |
| [`Children`](#ImportedCutBoundaryRemoteForce.Children)                                                         | Gets the list of children.                                                                                                                                                                    |
| [`ClsId`](#ImportedCutBoundaryRemoteForce.ClsId)                                                               | ClsId property.                                                                                                                                                                               |
| [`Comments`](#ImportedCutBoundaryRemoteForce.Comments)                                                         | Gets the list of associated comments.                                                                                                                                                         |
| [`ComplexComponent`](#ImportedCutBoundaryRemoteForce.ComplexComponent)                                         | Gets or sets the DisplayMappedData.                                                                                                                                                           |
| [`CreateNameSelectionForMappedNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                                                                                                                   |
| [`CreateNameSelectionForOutsideNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                                                                                                                  |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                                                                                                                 |
| [`DataModelObjectCategory`](#ImportedCutBoundaryRemoteForce.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                                                                                                                  |
| [`DefineActiveSequenceBy`](#ImportedCutBoundaryRemoteForce.DefineActiveSequenceBy)                             | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`DefineByType`](#ImportedCutBoundaryRemoteForce.DefineByType)                                                 | DefineByType property.                                                                                                                                                                        |
| [`DiscretizationX`](#ImportedCutBoundaryRemoteForce.DiscretizationX)                                           | DiscretizationX property.                                                                                                                                                                     |
| [`DiscretizationY`](#ImportedCutBoundaryRemoteForce.DiscretizationY)                                           | DiscretizationY property.                                                                                                                                                                     |
| [`DisplayInteriorPoints`](#ImportedCutBoundaryRemoteForce.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                                                                                                               |
| [`DisplayProjectionPlane`](#ImportedCutBoundaryRemoteForce.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                                                                                                              |
| [`DisplaySourcePointIds`](#ImportedCutBoundaryRemoteForce.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                                                                                                               |
| [`DisplaySourcePoints`](#ImportedCutBoundaryRemoteForce.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                                                                                                                 |
| [`ExternalDataIdentifier`](#ImportedCutBoundaryRemoteForce.ExternalDataIdentifier)                             | ExternalDataIdentifier property.                                                                                                                                                              |
| [`ExternalLoadScopingType`](#ImportedCutBoundaryRemoteForce.ExternalLoadScopingType)                           | ExternalLoadScopingType property.                                                                                                                                                             |
| [`ExtrapolationTolerancePercent`](#ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                                                                                                       |
| [`Figures`](#ImportedCutBoundaryRemoteForce.Figures)                                                           | Gets the list of associated figures.                                                                                                                                                          |
| [`Geometry`](#Geometry)                                                                          | Geometry property.                                                                                                                                                                            |
| [`GroupingFolder`](#ImportedCutBoundaryRemoteForce.GroupingFolder)                                             | GroupingFolder property.                                                                                                                                                                      |
| [`HarmonicIndex`](#ImportedCutBoundaryRemoteForce.HarmonicIndex)                                               | Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.                                                                                                 |
| [`IconName`](#ImportedCutBoundaryRemoteForce.IconName)                                                         | IconName property.                                                                                                                                                                            |
| [`Images`](#ImportedCutBoundaryRemoteForce.Images)                                                             | Gets the list of associated images.                                                                                                                                                           |
| [`InternalObject`](#ImportedCutBoundaryRemoteForce.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                                                                                                            |
| [`Interpolation`](#ImportedCutBoundaryRemoteForce.Interpolation)                                               | Interpolation property.                                                                                                                                                                       |
| [`KrigingCorrelationFunction`](#ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                                                                                                          |
| [`KrigingPolynom`](#ImportedCutBoundaryRemoteForce.KrigingPolynom)                                             | KrigingPolynom property.                                                                                                                                                                      |
| [`LegendMaximum`](#ImportedCutBoundaryRemoteForce.LegendMaximum)                                               | LegendMaximum property.                                                                                                                                                                       |
| [`LegendMinimum`](#ImportedCutBoundaryRemoteForce.LegendMinimum)                                               | LegendMinimum property.                                                                                                                                                                       |
| [`LegendRange`](#ImportedCutBoundaryRemoteForce.LegendRange)                                                   | LegendRange property.                                                                                                                                                                         |
| [`Limit`](#ImportedCutBoundaryRemoteForce.Limit)                                                               | Limit property.                                                                                                                                                                               |
| [`LoadDisplayComponentType`](#ImportedCutBoundaryRemoteForce.LoadDisplayComponentType)                         | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`LoadedAreaType`](#ImportedCutBoundaryRemoteForce.LoadedAreaType)                                             | LoadedAreaType property.                                                                                                                                                                      |
| [`Location`](#ImportedCutBoundaryRemoteForce.Location)                                                         | Gets or sets the Location.                                                                                                                                                                    |
| [`MappedNodesName`](#ImportedCutBoundaryRemoteForce.MappedNodesName)                                           | MappedNodesName property.                                                                                                                                                                     |
| [`Mapping`](#ImportedCutBoundaryRemoteForce.Mapping)                                                           | Mapping property.                                                                                                                                                                             |
| [`MappingControl`](#ImportedCutBoundaryRemoteForce.MappingControl)                                             | MappingControl property.                                                                                                                                                                      |
| [`MaxOutsideDistance`](#ImportedCutBoundaryRemoteForce.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                                                                                                                  |
| [`Method`](#ImportedCutBoundaryRemoteForce.Method)                                                             | Method property.                                                                                                                                                                              |
| [`Name`](#ImportedCutBoundaryRemoteForce.Name)                                                                 | Name property.                                                                                                                                                                                |
| [`NonCyclicLoadingType`](#ImportedCutBoundaryRemoteForce.NonCyclicLoadingType)                                 | Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries. |
| [`NumberOfPoints`](#ImportedCutBoundaryRemoteForce.NumberOfPoints)                                             | NumberOfPoints property.                                                                                                                                                                      |
| [`ObjectId`](#ImportedCutBoundaryRemoteForce.ObjectId)                                                         | ObjectId property.                                                                                                                                                                            |
| [`ObjectState`](#ImportedCutBoundaryRemoteForce.ObjectState)                                                   | ObjectState property.                                                                                                                                                                         |
| [`ObjectTags`](#ImportedCutBoundaryRemoteForce.ObjectTags)                                                     | ObjectTags property.                                                                                                                                                                          |
| [`OrientationRealignment`](#ImportedCutBoundaryRemoteForce.OrientationRealignment)                             | OrientationRealignment property.                                                                                                                                                              |
| [`OriginX`](#ImportedCutBoundaryRemoteForce.OriginX)                                                           | OriginX property.                                                                                                                                                                             |
| [`OriginY`](#ImportedCutBoundaryRemoteForce.OriginY)                                                           | OriginY property.                                                                                                                                                                             |
| [`OriginZ`](#ImportedCutBoundaryRemoteForce.OriginZ)                                                           | OriginZ property.                                                                                                                                                                             |
| [`OutsideDistanceCheck`](#ImportedCutBoundaryRemoteForce.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                                                                                                                |
| [`OutsideNodesName`](#ImportedCutBoundaryRemoteForce.OutsideNodesName)                                         | OutsideNodesName property.                                                                                                                                                                    |
| [`OutsideOption`](#ImportedCutBoundaryRemoteForce.OutsideOption)                                               | OutsideOption property.                                                                                                                                                                       |
| [`Parent`](#ImportedCutBoundaryRemoteForce.Parent)                                                             | Parent property.                                                                                                                                                                              |
| [`Pinball`](#ImportedCutBoundaryRemoteForce.Pinball)                                                           | Pinball property.                                                                                                                                                                             |
| [`Projection`](#ImportedCutBoundaryRemoteForce.Projection)                                                     | Projection property.                                                                                                                                                                          |
| [`Properties`](#ImportedCutBoundaryRemoteForce.Properties)                                                     | Gets the list of properties for this object.                                                                                                                                                  |
| [`RigidBodyTransformationType`](#ImportedCutBoundaryRemoteForce.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                                                                                                         |
| [`RigidTransformSourceCoordinateSystem`](#ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                                                                                                                |
| [`RigidTransformTargetCoordinateSystem`](#ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                                                                                                                |
| [`SharedRefBody`](#ImportedCutBoundaryRemoteForce.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                                                                                                               |
| [`ShellFace`](#ImportedCutBoundaryRemoteForce.ShellFace)                                                       | ShellFace property.                                                                                                                                                                           |
| [`ShellOffsetType`](#ImportedCutBoundaryRemoteForce.ShellOffsetType)                                           | Gets or sets the Offset Type for aligning the thickness of the surface body.                                                                                                                  |
| [`ShellThicknessFactor`](#ImportedCutBoundaryRemoteForce.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                                                                                                                |
| [`ShowWireframeData`](#ImportedCutBoundaryRemoteForce.ShowWireframeData)                                       | Gets or sets the ShowWireframeData.                                                                                                                                                           |
| [`SourceBodies`](#ImportedCutBoundaryRemoteForce.SourceBodies)                                                 | SourceBodies property.                                                                                                                                                                        |
| [`SourceComponent`](#ImportedCutBoundaryRemoteForce.SourceComponent)                                           | SourceComponent property.                                                                                                                                                                     |
| [`SourceMaximum`](#ImportedCutBoundaryRemoteForce.SourceMaximum)                                               | SourceMaximum property.                                                                                                                                                                       |
| [`SourceMinimum`](#ImportedCutBoundaryRemoteForce.SourceMinimum)                                               | SourceMinimum property.                                                                                                                                                                       |
| [`SourceZone`](#ImportedCutBoundaryRemoteForce.SourceZone)                                                     | SourceZone property.                                                                                                                                                                          |
| [`State`](#ImportedCutBoundaryRemoteForce.State)                                                               | State property.                                                                                                                                                                               |
| [`SupplementalFilmCoefficient`](#ImportedCutBoundaryRemoteForce.SupplementalFilmCoefficient)                   | SupplementalFilmCoefficient property.                                                                                                                                                         |
| [`Suppressed`](#ImportedCutBoundaryRemoteForce.Suppressed)                                                     | Gets or sets the Suppressed.                                                                                                                                                                  |
| [`TabularLoading`](#ImportedCutBoundaryRemoteForce.TabularLoading)                                             | TabularLoading property.                                                                                                                                                                      |
| [`TargetCoordinateSystem`](#ImportedCutBoundaryRemoteForce.TargetCoordinateSystem)                             | TargetCoordinateSystem property.                                                                                                                                                              |
| [`TemperatureType`](#ImportedCutBoundaryRemoteForce.TemperatureType)                                           | TemperatureType property.                                                                                                                                                                     |
| [`ThetaXY`](#ImportedCutBoundaryRemoteForce.ThetaXY)                                                           | ThetaXY property.                                                                                                                                                                             |
| [`ThetaYZ`](#ImportedCutBoundaryRemoteForce.ThetaYZ)                                                           | ThetaYZ property.                                                                                                                                                                             |
| [`ThetaZX`](#ImportedCutBoundaryRemoteForce.ThetaZX)                                                           | ThetaZX property.                                                                                                                                                                             |
| [`UnmappedNodesName`](#ImportedCutBoundaryRemoteForce.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                                                                                                                   |
| [`VariableType`](#ImportedCutBoundaryRemoteForce.VariableType)                                                 | VariableType property.                                                                                                                                                                        |
| [`VisibleProperties`](#ImportedCutBoundaryRemoteForce.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                                                                                                                 |
| [`Weighting`](#ImportedCutBoundaryRemoteForce.Weighting)                                                       | Weighting property.                                                                                                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCutBoundaryRemoteForce.ActiveRow"></a>

### *property* ImportedCutBoundaryRemoteForce.ActiveRow *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRow.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ActiveRowValue"></a>

### *property* ImportedCutBoundaryRemoteForce.ActiveRowValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRowValue.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Algorithm"></a>

### *property* ImportedCutBoundaryRemoteForce.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AnalysisOrderNumbers"></a>

### *property* ImportedCutBoundaryRemoteForce.AnalysisOrderNumbers *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisOrderNumbers property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AnalysisRpmSelection"></a>

### *property* ImportedCutBoundaryRemoteForce.AnalysisRpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSelection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AnalysisRpmSetIndex"></a>

### *property* ImportedCutBoundaryRemoteForce.AnalysisRpmSetIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetIndex property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AnalysisRpmSetRanges"></a>

### *property* ImportedCutBoundaryRemoteForce.AnalysisRpmSetRanges *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetRanges property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AnalysisSpecifyRpm"></a>

### *property* ImportedCutBoundaryRemoteForce.AnalysisSpecifyRpm *: Ansys.Mechanical.DataModel.Enums.ExternalLoadImportRPMType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisSpecifyRpm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AnalysisTimeOrFrequencysDefinition"></a>

### *property* ImportedCutBoundaryRemoteForce.AnalysisTimeOrFrequencysDefinition *: Ansys.Mechanical.DataModel.Enums.AnalysisTimeDefinitionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeOrFrequencysDefinition property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AnalysisTimeRangeMax"></a>

### *property* ImportedCutBoundaryRemoteForce.AnalysisTimeRangeMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMax property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AnalysisTimeRangeMin"></a>

### *property* ImportedCutBoundaryRemoteForce.AnalysisTimeRangeMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMin property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AppliedByType"></a>

### *property* ImportedCutBoundaryRemoteForce.AppliedByType *: Ansys.Mechanical.DataModel.Enums.LoadAppliedByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AppliedByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ApplyAs"></a>

### *property* ImportedCutBoundaryRemoteForce.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AttachedRefs"></a>

### *property* ImportedCutBoundaryRemoteForce.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AverageAmbientTemperature"></a>

### *property* ImportedCutBoundaryRemoteForce.AverageAmbientTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AverageAmbientTemperature property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.BoundingBoxTolerance"></a>

### *property* ImportedCutBoundaryRemoteForce.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.BucketToleranceCheck"></a>

### *property* ImportedCutBoundaryRemoteForce.BucketToleranceCheck *: Ansys.Mechanical.DataModel.Enums.OnOffType | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.BucketToleranceKey"></a>

### *property* ImportedCutBoundaryRemoteForce.BucketToleranceKey *: Ansys.Mechanical.DataModel.Enums.MappingToleranceKey | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceKey property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.BucketToleranceValue"></a>

### *property* ImportedCutBoundaryRemoteForce.BucketToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceValue property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CFDSurface"></a>

### *property* ImportedCutBoundaryRemoteForce.CFDSurface *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CFDSurface property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Children"></a>

### *property* ImportedCutBoundaryRemoteForce.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ClsId"></a>

### *property* ImportedCutBoundaryRemoteForce.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Comments"></a>

### *property* ImportedCutBoundaryRemoteForce.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ComplexComponent"></a>

### *property* ImportedCutBoundaryRemoteForce.ComplexComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayMappedData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DataModelObjectCategory"></a>

### *property* ImportedCutBoundaryRemoteForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DefineActiveSequenceBy"></a>

### *property* ImportedCutBoundaryRemoteForce.DefineActiveSequenceBy *: Ansys.Mechanical.DataModel.Enums.ExtLoadDefineActiveSequenceBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DefineByType"></a>

### *property* ImportedCutBoundaryRemoteForce.DefineByType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

DefineByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DiscretizationX"></a>

### *property* ImportedCutBoundaryRemoteForce.DiscretizationX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DiscretizationY"></a>

### *property* ImportedCutBoundaryRemoteForce.DiscretizationY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplayInteriorPoints"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplayInteriorPoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplayProjectionPlane"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplayProjectionPlane *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplaySourcePointIds"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplaySourcePointIds *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplaySourcePoints"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplaySourcePoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ExternalDataIdentifier"></a>

### *property* ImportedCutBoundaryRemoteForce.ExternalDataIdentifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalDataIdentifier property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ExternalLoadScopingType"></a>

### *property* ImportedCutBoundaryRemoteForce.ExternalLoadScopingType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadScopingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalLoadScopingType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent"></a>

### *property* ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Figures"></a>

### *property* ImportedCutBoundaryRemoteForce.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Geometry"></a>

### *property* ImportedCutBoundaryRemoteForce.Geometry *: Ansys.Mechanical.DataModel.Enums.MappingGeometryType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Geometry property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GroupingFolder"></a>

### *property* ImportedCutBoundaryRemoteForce.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.HarmonicIndex"></a>

### *property* ImportedCutBoundaryRemoteForce.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.IconName"></a>

### *property* ImportedCutBoundaryRemoteForce.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Images"></a>

### *property* ImportedCutBoundaryRemoteForce.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.InternalObject"></a>

### *property* ImportedCutBoundaryRemoteForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Interpolation"></a>

### *property* ImportedCutBoundaryRemoteForce.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction"></a>

### *property* ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.KrigingPolynom"></a>

### *property* ImportedCutBoundaryRemoteForce.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.LegendMaximum"></a>

### *property* ImportedCutBoundaryRemoteForce.LegendMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.LegendMinimum"></a>

### *property* ImportedCutBoundaryRemoteForce.LegendMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.LegendRange"></a>

### *property* ImportedCutBoundaryRemoteForce.LegendRange *: Ansys.Mechanical.DataModel.Enums.LegendRangeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Limit"></a>

### *property* ImportedCutBoundaryRemoteForce.Limit *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.LoadDisplayComponentType"></a>

### *property* ImportedCutBoundaryRemoteForce.LoadDisplayComponentType *: Ansys.Mechanical.DataModel.Enums.ExtLoadDisplayComponentType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.LoadedAreaType"></a>

### *property* ImportedCutBoundaryRemoteForce.LoadedAreaType *: Ansys.Mechanical.DataModel.Enums.LoadedAreaType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LoadedAreaType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Location"></a>

### *property* ImportedCutBoundaryRemoteForce.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.MappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteForce.MappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Mapping"></a>

### *property* ImportedCutBoundaryRemoteForce.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.MappingControl"></a>

### *property* ImportedCutBoundaryRemoteForce.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.MaxOutsideDistance"></a>

### *property* ImportedCutBoundaryRemoteForce.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Method"></a>

### *property* ImportedCutBoundaryRemoteForce.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Name"></a>

### *property* ImportedCutBoundaryRemoteForce.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.NonCyclicLoadingType"></a>

### *property* ImportedCutBoundaryRemoteForce.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.NumberOfPoints"></a>

### *property* ImportedCutBoundaryRemoteForce.NumberOfPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ObjectId"></a>

### *property* ImportedCutBoundaryRemoteForce.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ObjectState"></a>

### *property* ImportedCutBoundaryRemoteForce.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ObjectTags"></a>

### *property* ImportedCutBoundaryRemoteForce.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OrientationRealignment"></a>

### *property* ImportedCutBoundaryRemoteForce.OrientationRealignment *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OriginX"></a>

### *property* ImportedCutBoundaryRemoteForce.OriginX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OriginY"></a>

### *property* ImportedCutBoundaryRemoteForce.OriginY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OriginZ"></a>

### *property* ImportedCutBoundaryRemoteForce.OriginZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OutsideDistanceCheck"></a>

### *property* ImportedCutBoundaryRemoteForce.OutsideDistanceCheck *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OutsideNodesName"></a>

### *property* ImportedCutBoundaryRemoteForce.OutsideNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OutsideOption"></a>

### *property* ImportedCutBoundaryRemoteForce.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Parent"></a>

### *property* ImportedCutBoundaryRemoteForce.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Pinball"></a>

### *property* ImportedCutBoundaryRemoteForce.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Projection"></a>

### *property* ImportedCutBoundaryRemoteForce.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Properties"></a>

### *property* ImportedCutBoundaryRemoteForce.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RigidBodyTransformationType"></a>

### *property* ImportedCutBoundaryRemoteForce.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SharedRefBody"></a>

### *property* ImportedCutBoundaryRemoteForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ShellFace"></a>

### *property* ImportedCutBoundaryRemoteForce.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellFace property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ShellOffsetType"></a>

### *property* ImportedCutBoundaryRemoteForce.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Offset Type for aligning the thickness of the surface body.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ShellThicknessFactor"></a>

### *property* ImportedCutBoundaryRemoteForce.ShellThicknessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ShowWireframeData"></a>

### *property* ImportedCutBoundaryRemoteForce.ShowWireframeData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowWireframeData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SourceBodies"></a>

### *property* ImportedCutBoundaryRemoteForce.SourceBodies *: Ansys.Mechanical.DataModel.Enums.ImportSourceBodies | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceBodies property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SourceComponent"></a>

### *property* ImportedCutBoundaryRemoteForce.SourceComponent *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceComponent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SourceMaximum"></a>

### *property* ImportedCutBoundaryRemoteForce.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SourceMinimum"></a>

### *property* ImportedCutBoundaryRemoteForce.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SourceZone"></a>

### *property* ImportedCutBoundaryRemoteForce.SourceZone *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceZone property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.State"></a>

### *property* ImportedCutBoundaryRemoteForce.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SupplementalFilmCoefficient"></a>

### *property* ImportedCutBoundaryRemoteForce.SupplementalFilmCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupplementalFilmCoefficient property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Suppressed"></a>

### *property* ImportedCutBoundaryRemoteForce.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.TabularLoading"></a>

### *property* ImportedCutBoundaryRemoteForce.TabularLoading *: Ansys.Mechanical.DataModel.Enums.ExternalLoadSteppingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TabularLoading property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.TargetCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteForce.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.TemperatureType"></a>

### *property* ImportedCutBoundaryRemoteForce.TemperatureType *: Ansys.Mechanical.DataModel.Enums.AmbientTemperatureType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TemperatureType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ThetaXY"></a>

### *property* ImportedCutBoundaryRemoteForce.ThetaXY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaXY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ThetaYZ"></a>

### *property* ImportedCutBoundaryRemoteForce.ThetaYZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaYZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ThetaZX"></a>

### *property* ImportedCutBoundaryRemoteForce.ThetaZX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaZX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.UnmappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteForce.UnmappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.VariableType"></a>

### *property* ImportedCutBoundaryRemoteForce.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.VisibleProperties"></a>

### *property* ImportedCutBoundaryRemoteForce.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Weighting"></a>

### *property* ImportedCutBoundaryRemoteForce.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCutBoundaryRemoteForce.Activate"></a>

### ImportedCutBoundaryRemoteForce.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AddComment"></a>

### ImportedCutBoundaryRemoteForce.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AddFigure"></a>

### ImportedCutBoundaryRemoteForce.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AddImage"></a>

### ImportedCutBoundaryRemoteForce.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AddMappingValidation"></a>

### ImportedCutBoundaryRemoteForce.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ClearGeneratedData"></a>

### ImportedCutBoundaryRemoteForce.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Copy"></a>

### ImportedCutBoundaryRemoteForce.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CopyTo"></a>

### ImportedCutBoundaryRemoteForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateObjRef"></a>

### ImportedCutBoundaryRemoteForce.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateParameter"></a>

### ImportedCutBoundaryRemoteForce.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateTabbedFile"></a>

### ImportedCutBoundaryRemoteForce.CreateTabbedFile() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets mapped values.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Cut"></a>

### ImportedCutBoundaryRemoteForce.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Delete"></a>

### ImportedCutBoundaryRemoteForce.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Duplicate"></a>

### ImportedCutBoundaryRemoteForce.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Equals"></a>

### ImportedCutBoundaryRemoteForce.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ExportToTextFile"></a>

### ImportedCutBoundaryRemoteForce.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ImportedCutBoundaryRemoteForce.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetAPIName"></a>

### ImportedCutBoundaryRemoteForce.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the imported cut boundary remote force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetAllProperties"></a>

### ImportedCutBoundaryRemoteForce.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetChildren"></a>

### ImportedCutBoundaryRemoteForce.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedCutBoundaryRemoteForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetDetailsView"></a>

### ImportedCutBoundaryRemoteForce.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetElementsCoordinateSystems"></a>

### ImportedCutBoundaryRemoteForce.GetElementsCoordinateSystems() → System.Collections.Generic.Dictionary[System.Int64, [Ansys.ACT.Common.CoordinateSystem](../../../Common/CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.CoordinateSystem)]

Get  the elements coordinate systems dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetElementsOrientations"></a>

### ImportedCutBoundaryRemoteForce.GetElementsOrientations() → System.Collections.Generic.Dictionary[System.Int64, Ansys.ACT.Automation.Mechanical.ElementOrientationInfo]

Get  the elements orientations dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetEnumName"></a>

### ImportedCutBoundaryRemoteForce.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetHashCode"></a>

### ImportedCutBoundaryRemoteForce.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetIconFile"></a>

### ImportedCutBoundaryRemoteForce.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetLifetimeService"></a>

### ImportedCutBoundaryRemoteForce.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetObjectData"></a>

### ImportedCutBoundaryRemoteForce.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetParameter"></a>

### ImportedCutBoundaryRemoteForce.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetPath"></a>

### ImportedCutBoundaryRemoteForce.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetPropertyName"></a>

### ImportedCutBoundaryRemoteForce.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetPropertyValue"></a>

### ImportedCutBoundaryRemoteForce.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetTableByName"></a>

### ImportedCutBoundaryRemoteForce.GetTableByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), bUseWorksheetItfToGetTable: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow]

GetTableByName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetVisibleProperties"></a>

### ImportedCutBoundaryRemoteForce.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetVisiblePropertyNames"></a>

### ImportedCutBoundaryRemoteForce.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren"></a>

### ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GroupSimilarObjects"></a>

### ImportedCutBoundaryRemoteForce.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Import"></a>

### ImportedCutBoundaryRemoteForce.Import() → [None](https://docs.python.org/3/builtins/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ImportLoad"></a>

### ImportedCutBoundaryRemoteForce.ImportLoad() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.InitializeLifetimeService"></a>

### ImportedCutBoundaryRemoteForce.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.IsPropertyEditable"></a>

### ImportedCutBoundaryRemoteForce.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedCutBoundaryRemoteForce.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.IsPropertyVisible"></a>

### ImportedCutBoundaryRemoteForce.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedCutBoundaryRemoteForce.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Paste"></a>

### ImportedCutBoundaryRemoteForce.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.PropertyByAPIName"></a>

### ImportedCutBoundaryRemoteForce.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.PropertyById"></a>

### ImportedCutBoundaryRemoteForce.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.PropertyByName"></a>

### ImportedCutBoundaryRemoteForce.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ReloadConfiguration"></a>

### ImportedCutBoundaryRemoteForce.ReloadConfiguration() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RemoveFromGroup"></a>

### ImportedCutBoundaryRemoteForce.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RemoveParameter"></a>

### ImportedCutBoundaryRemoteForce.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the imported cut boundary remote force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SyncAnalysisFrequencies"></a>

### ImportedCutBoundaryRemoteForce.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.getFieldInterpolationProxy"></a>

### ImportedCutBoundaryRemoteForce.getFieldInterpolationProxy() → Ansys.ACT.Automation.Mechanical.ImportedLoads.CImportProxyWrapper

getFieldInterpolationProxy method.

<!-- !! processed by numpydoc !! -->

