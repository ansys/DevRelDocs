# `ImportedCutBoundaryRemoteConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteConstraint(internalObject: Any)

<a id="ImportedCutBoundaryRemoteConstraint"></a>

### *class* ImportedCutBoundaryRemoteConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedCutBoundaryRemoteConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedCutBoundaryRemoteConstraint.Activate)                                         | Activate the current object.                                                                   |
| [`AddComment`](#ImportedCutBoundaryRemoteConstraint.AddComment)                                     | Creates a new child Comment.                                                                   |
| [`AddFigure`](#ImportedCutBoundaryRemoteConstraint.AddFigure)                                       | Creates a new child Figure.                                                                    |
| [`AddImage`](#ImportedCutBoundaryRemoteConstraint.AddImage)                                         | Creates a new child Image.                                                                     |
| [`AddMappingValidation`](#ImportedCutBoundaryRemoteConstraint.AddMappingValidation)                 | Creates a new MappingValidation                                                                |
| [`ClearGeneratedData`](#ImportedCutBoundaryRemoteConstraint.ClearGeneratedData)                     | Run the ClearGeneratedData action.                                                             |
| [`Copy`](#ImportedCutBoundaryRemoteConstraint.Copy)                                                 | Copies the current DataModelObject.                                                            |
| [`CopyTo`](#ImportedCutBoundaryRemoteConstraint.CopyTo)                                             | Copies all visible properties from this object to another.                                     |
| [`CreateObjRef`](#ImportedCutBoundaryRemoteConstraint.CreateObjRef)                                 | CreateObjRef method.                                                                           |
| [`CreateParameter`](#ImportedCutBoundaryRemoteConstraint.CreateParameter)                           | Creates a new parameter for a Property.                                                        |
| [`CreateTabbedFile`](#ImportedCutBoundaryRemoteConstraint.CreateTabbedFile)                         | Gets mapped values.                                                                            |
| [`Cut`](#ImportedCutBoundaryRemoteConstraint.Cut)                                                   | Cuts the current DataModelObject.                                                              |
| [`Delete`](#ImportedCutBoundaryRemoteConstraint.Delete)                                             | Run the Delete action.                                                                         |
| [`Duplicate`](#ImportedCutBoundaryRemoteConstraint.Duplicate)                                       | Creates a copy of the current DataModelObject.                                                 |
| [`Equals`](#ImportedCutBoundaryRemoteConstraint.Equals)                                             | Equals method.                                                                                 |
| [`ExportToTextFile`](#ImportedCutBoundaryRemoteConstraint.ExportToTextFile)                         | ExportToTextFile method.                                                                       |
| [`GetAPIName`](#ImportedCutBoundaryRemoteConstraint.GetAPIName)                                     | Property name bound to dispId.                                                                 |
| [`GetActivateAtLoadStep`](#ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep)               | Gets whether the imported cut boundary remote constraint is active at the specified load step. |
| [`GetAllProperties`](#ImportedCutBoundaryRemoteConstraint.GetAllProperties)                         | GetAllProperties method.                                                                       |
| [`GetChildren`](#ImportedCutBoundaryRemoteConstraint.GetChildren)                                   | Gets the list of children, filtered by type.                                                   |
| [`GetDetailsView`](#ImportedCutBoundaryRemoteConstraint.GetDetailsView)                             | GetDetailsView method.                                                                         |
| [`GetElementsCoordinateSystems`](#ImportedCutBoundaryRemoteConstraint.GetElementsCoordinateSystems) | Get  the elements coordinate systems dictionary.                                               |
| [`GetElementsOrientations`](#ImportedCutBoundaryRemoteConstraint.GetElementsOrientations)           | Get  the elements orientations dictionary.                                                     |
| [`GetEnumName`](#ImportedCutBoundaryRemoteConstraint.GetEnumName)                                   | Enum name bound to value                                                                       |
| [`GetHashCode`](#ImportedCutBoundaryRemoteConstraint.GetHashCode)                                   | GetHashCode method.                                                                            |
| [`GetIconFile`](#ImportedCutBoundaryRemoteConstraint.GetIconFile)                                   | GetIconFile method.                                                                            |
| [`GetLifetimeService`](#ImportedCutBoundaryRemoteConstraint.GetLifetimeService)                     | GetLifetimeService method.                                                                     |
| [`GetObjectData`](#ImportedCutBoundaryRemoteConstraint.GetObjectData)                               | GetObjectData method.                                                                          |
| [`GetParameter`](#ImportedCutBoundaryRemoteConstraint.GetParameter)                                 | Gets the parameter corresponding to the given property.                                        |
| [`GetPath`](#ImportedCutBoundaryRemoteConstraint.GetPath)                                           | GetPath method.                                                                                |
| [`GetPropertyName`](#ImportedCutBoundaryRemoteConstraint.GetPropertyName)                           | GetPropertyName method.                                                                        |
| [`GetPropertyValue`](#ImportedCutBoundaryRemoteConstraint.GetPropertyValue)                         | GetPropertyValue method.                                                                       |
| [`GetTableByName`](#ImportedCutBoundaryRemoteConstraint.GetTableByName)                             | GetTableByName method.                                                                         |
| [`GetVisibleProperties`](#ImportedCutBoundaryRemoteConstraint.GetVisibleProperties)                 | GetVisibleProperties method.                                                                   |
| [`GetVisiblePropertyNames`](#ImportedCutBoundaryRemoteConstraint.GetVisiblePropertyNames)           | GetVisiblePropertyNames method.                                                                |
| [`GroupAllSimilarChildren`](#ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                                            |
| [`Import`](#ImportedCutBoundaryRemoteConstraint.Import)                                             | Import.                                                                                        |
| [`ImportLoad`](#ImportedCutBoundaryRemoteConstraint.ImportLoad)                                     | Run the ImportLoad action.                                                                     |
| [`InitializeLifetimeService`](#ImportedCutBoundaryRemoteConstraint.InitializeLifetimeService)       | InitializeLifetimeService method.                                                              |
| [`IsPropertyEditable`](#ImportedCutBoundaryRemoteConstraint.IsPropertyEditable)                     | IsPropertyEditable method.                                                                     |
| [`IsPropertyVisible`](#ImportedCutBoundaryRemoteConstraint.IsPropertyVisible)                       | IsPropertyVisible method.                                                                      |
| [`Paste`](#ImportedCutBoundaryRemoteConstraint.Paste)                                               | Pastes to the current DataModelObject context.                                                 |
| [`PropertyByAPIName`](#ImportedCutBoundaryRemoteConstraint.PropertyByAPIName)                       | Get a property by its API name.                                                                |
| [`PropertyById`](#ImportedCutBoundaryRemoteConstraint.PropertyById)                                 | PropertyById method.                                                                           |
| [`PropertyByName`](#ImportedCutBoundaryRemoteConstraint.PropertyByName)                             | Get a property by its unique name.                                                             |
| [`ReloadConfiguration`](#ImportedCutBoundaryRemoteConstraint.ReloadConfiguration)                   | Reload the Imported Load's setup from its associated configuration file (if available).        |
| [`RemoveFromGroup`](#ImportedCutBoundaryRemoteConstraint.RemoveFromGroup)                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.    |
| [`RemoveParameter`](#ImportedCutBoundaryRemoteConstraint.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property.              |
| [`SetActivateAtLoadStep`](#ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep)               | Sets whether the imported cut boundary remote constraint is active at the specified load step. |
| [`SyncAnalysisFrequencies`](#ImportedCutBoundaryRemoteConstraint.SyncAnalysisFrequencies)           | Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.  |
| [`getFieldInterpolationProxy`](#ImportedCutBoundaryRemoteConstraint.getFieldInterpolationProxy)     | getFieldInterpolationProxy method.                                                             |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveRow`](#ImportedCutBoundaryRemoteConstraint.ActiveRow)                                                       | Gets or sets the ActiveRow.                                                                                                                                                                   |
| [`ActiveRowValue`](#ImportedCutBoundaryRemoteConstraint.ActiveRowValue)                                             | Gets or sets the ActiveRowValue.                                                                                                                                                              |
| [`Algorithm`](#ImportedCutBoundaryRemoteConstraint.Algorithm)                                                       | Algorithm property.                                                                                                                                                                           |
| [`AnalysisOrderNumbers`](#ImportedCutBoundaryRemoteConstraint.AnalysisOrderNumbers)                                 | AnalysisOrderNumbers property.                                                                                                                                                                |
| [`AnalysisRpmSelection`](#ImportedCutBoundaryRemoteConstraint.AnalysisRpmSelection)                                 | AnalysisRpmSelection property.                                                                                                                                                                |
| [`AnalysisRpmSetIndex`](#ImportedCutBoundaryRemoteConstraint.AnalysisRpmSetIndex)                                   | AnalysisRpmSetIndex property.                                                                                                                                                                 |
| [`AnalysisRpmSetRanges`](#ImportedCutBoundaryRemoteConstraint.AnalysisRpmSetRanges)                                 | AnalysisRpmSetRanges property.                                                                                                                                                                |
| [`AnalysisSpecifyRpm`](#ImportedCutBoundaryRemoteConstraint.AnalysisSpecifyRpm)                                     | AnalysisSpecifyRpm property.                                                                                                                                                                  |
| [`AnalysisTimeOrFrequencysDefinition`](#ImportedCutBoundaryRemoteConstraint.AnalysisTimeOrFrequencysDefinition)     | AnalysisTimeOrFrequencysDefinition property.                                                                                                                                                  |
| [`AnalysisTimeRangeMax`](#ImportedCutBoundaryRemoteConstraint.AnalysisTimeRangeMax)                                 | AnalysisTimeRangeMax property.                                                                                                                                                                |
| [`AnalysisTimeRangeMin`](#ImportedCutBoundaryRemoteConstraint.AnalysisTimeRangeMin)                                 | AnalysisTimeRangeMin property.                                                                                                                                                                |
| [`AppliedByType`](#ImportedCutBoundaryRemoteConstraint.AppliedByType)                                               | AppliedByType property.                                                                                                                                                                       |
| [`ApplyAs`](#ImportedCutBoundaryRemoteConstraint.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition.                                                                                       |
| [`AttachedRefs`](#ImportedCutBoundaryRemoteConstraint.AttachedRefs)                                                 | AttachedRefs property.                                                                                                                                                                        |
| [`AverageAmbientTemperature`](#ImportedCutBoundaryRemoteConstraint.AverageAmbientTemperature)                       | AverageAmbientTemperature property.                                                                                                                                                           |
| [`BoundingBoxTolerance`](#ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                                                                                                                |
| [`BucketToleranceCheck`](#ImportedCutBoundaryRemoteConstraint.BucketToleranceCheck)                                 | BucketToleranceCheck property.                                                                                                                                                                |
| [`BucketToleranceKey`](#ImportedCutBoundaryRemoteConstraint.BucketToleranceKey)                                     | BucketToleranceKey property.                                                                                                                                                                  |
| [`BucketToleranceValue`](#ImportedCutBoundaryRemoteConstraint.BucketToleranceValue)                                 | BucketToleranceValue property.                                                                                                                                                                |
| [`CFDSurface`](#ImportedCutBoundaryRemoteConstraint.CFDSurface)                                                     | CFDSurface property.                                                                                                                                                                          |
| [`Children`](#ImportedCutBoundaryRemoteConstraint.Children)                                                         | Gets the list of children.                                                                                                                                                                    |
| [`ClsId`](#ImportedCutBoundaryRemoteConstraint.ClsId)                                                               | ClsId property.                                                                                                                                                                               |
| [`Comments`](#ImportedCutBoundaryRemoteConstraint.Comments)                                                         | Gets the list of associated comments.                                                                                                                                                         |
| [`ComplexComponent`](#ImportedCutBoundaryRemoteConstraint.ComplexComponent)                                         | Gets or sets the DisplayMappedData.                                                                                                                                                           |
| [`CreateNameSelectionForMappedNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                                                                                                                   |
| [`CreateNameSelectionForOutsideNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                                                                                                                  |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                                                                                                                 |
| [`DataModelObjectCategory`](#ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                                                                                                                  |
| [`DefineActiveSequenceBy`](#ImportedCutBoundaryRemoteConstraint.DefineActiveSequenceBy)                             | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`DefineByType`](#ImportedCutBoundaryRemoteConstraint.DefineByType)                                                 | DefineByType property.                                                                                                                                                                        |
| [`DiscretizationX`](#ImportedCutBoundaryRemoteConstraint.DiscretizationX)                                           | DiscretizationX property.                                                                                                                                                                     |
| [`DiscretizationY`](#ImportedCutBoundaryRemoteConstraint.DiscretizationY)                                           | DiscretizationY property.                                                                                                                                                                     |
| [`DisplayInteriorPoints`](#ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                                                                                                               |
| [`DisplayProjectionPlane`](#ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                                                                                                              |
| [`DisplaySourcePointIds`](#ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                                                                                                               |
| [`DisplaySourcePoints`](#ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                                                                                                                 |
| [`ExternalDataIdentifier`](#ImportedCutBoundaryRemoteConstraint.ExternalDataIdentifier)                             | ExternalDataIdentifier property.                                                                                                                                                              |
| [`ExternalLoadScopingType`](#ImportedCutBoundaryRemoteConstraint.ExternalLoadScopingType)                           | ExternalLoadScopingType property.                                                                                                                                                             |
| [`ExtrapolationTolerancePercent`](#ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                                                                                                       |
| [`Figures`](#ImportedCutBoundaryRemoteConstraint.Figures)                                                           | Gets the list of associated figures.                                                                                                                                                          |
| [`Geometry`](#Geometry)                                                                               | Geometry property.                                                                                                                                                                            |
| [`GroupingFolder`](#ImportedCutBoundaryRemoteConstraint.GroupingFolder)                                             | GroupingFolder property.                                                                                                                                                                      |
| [`HarmonicIndex`](#ImportedCutBoundaryRemoteConstraint.HarmonicIndex)                                               | Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.                                                                                                 |
| [`IconName`](#ImportedCutBoundaryRemoteConstraint.IconName)                                                         | IconName property.                                                                                                                                                                            |
| [`Images`](#ImportedCutBoundaryRemoteConstraint.Images)                                                             | Gets the list of associated images.                                                                                                                                                           |
| [`InternalObject`](#ImportedCutBoundaryRemoteConstraint.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                                                                                                            |
| [`Interpolation`](#ImportedCutBoundaryRemoteConstraint.Interpolation)                                               | Interpolation property.                                                                                                                                                                       |
| [`KrigingCorrelationFunction`](#ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                                                                                                          |
| [`KrigingPolynom`](#ImportedCutBoundaryRemoteConstraint.KrigingPolynom)                                             | KrigingPolynom property.                                                                                                                                                                      |
| [`LegendMaximum`](#ImportedCutBoundaryRemoteConstraint.LegendMaximum)                                               | LegendMaximum property.                                                                                                                                                                       |
| [`LegendMinimum`](#ImportedCutBoundaryRemoteConstraint.LegendMinimum)                                               | LegendMinimum property.                                                                                                                                                                       |
| [`LegendRange`](#ImportedCutBoundaryRemoteConstraint.LegendRange)                                                   | LegendRange property.                                                                                                                                                                         |
| [`Limit`](#ImportedCutBoundaryRemoteConstraint.Limit)                                                               | Limit property.                                                                                                                                                                               |
| [`LoadDisplayComponentType`](#ImportedCutBoundaryRemoteConstraint.LoadDisplayComponentType)                         | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`LoadedAreaType`](#ImportedCutBoundaryRemoteConstraint.LoadedAreaType)                                             | LoadedAreaType property.                                                                                                                                                                      |
| [`Location`](#ImportedCutBoundaryRemoteConstraint.Location)                                                         | Gets or sets the Location.                                                                                                                                                                    |
| [`MappedNodesName`](#ImportedCutBoundaryRemoteConstraint.MappedNodesName)                                           | MappedNodesName property.                                                                                                                                                                     |
| [`Mapping`](#ImportedCutBoundaryRemoteConstraint.Mapping)                                                           | Mapping property.                                                                                                                                                                             |
| [`MappingControl`](#ImportedCutBoundaryRemoteConstraint.MappingControl)                                             | MappingControl property.                                                                                                                                                                      |
| [`MaxOutsideDistance`](#ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                                                                                                                  |
| [`Method`](#ImportedCutBoundaryRemoteConstraint.Method)                                                             | Method property.                                                                                                                                                                              |
| [`Name`](#ImportedCutBoundaryRemoteConstraint.Name)                                                                 | Name property.                                                                                                                                                                                |
| [`NonCyclicLoadingType`](#ImportedCutBoundaryRemoteConstraint.NonCyclicLoadingType)                                 | Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries. |
| [`NumberOfPoints`](#ImportedCutBoundaryRemoteConstraint.NumberOfPoints)                                             | NumberOfPoints property.                                                                                                                                                                      |
| [`ObjectId`](#ImportedCutBoundaryRemoteConstraint.ObjectId)                                                         | ObjectId property.                                                                                                                                                                            |
| [`ObjectState`](#ImportedCutBoundaryRemoteConstraint.ObjectState)                                                   | ObjectState property.                                                                                                                                                                         |
| [`ObjectTags`](#ImportedCutBoundaryRemoteConstraint.ObjectTags)                                                     | ObjectTags property.                                                                                                                                                                          |
| [`OrientationRealignment`](#ImportedCutBoundaryRemoteConstraint.OrientationRealignment)                             | OrientationRealignment property.                                                                                                                                                              |
| [`OriginX`](#ImportedCutBoundaryRemoteConstraint.OriginX)                                                           | OriginX property.                                                                                                                                                                             |
| [`OriginY`](#ImportedCutBoundaryRemoteConstraint.OriginY)                                                           | OriginY property.                                                                                                                                                                             |
| [`OriginZ`](#ImportedCutBoundaryRemoteConstraint.OriginZ)                                                           | OriginZ property.                                                                                                                                                                             |
| [`OutsideDistanceCheck`](#ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                                                                                                                |
| [`OutsideNodesName`](#ImportedCutBoundaryRemoteConstraint.OutsideNodesName)                                         | OutsideNodesName property.                                                                                                                                                                    |
| [`OutsideOption`](#ImportedCutBoundaryRemoteConstraint.OutsideOption)                                               | OutsideOption property.                                                                                                                                                                       |
| [`Parent`](#ImportedCutBoundaryRemoteConstraint.Parent)                                                             | Parent property.                                                                                                                                                                              |
| [`Pinball`](#ImportedCutBoundaryRemoteConstraint.Pinball)                                                           | Pinball property.                                                                                                                                                                             |
| [`Projection`](#ImportedCutBoundaryRemoteConstraint.Projection)                                                     | Projection property.                                                                                                                                                                          |
| [`Properties`](#ImportedCutBoundaryRemoteConstraint.Properties)                                                     | Gets the list of properties for this object.                                                                                                                                                  |
| [`RigidBodyTransformationType`](#ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                                                                                                         |
| [`RigidTransformSourceCoordinateSystem`](#ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                                                                                                                |
| [`RigidTransformTargetCoordinateSystem`](#ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                                                                                                                |
| [`SharedRefBody`](#ImportedCutBoundaryRemoteConstraint.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                                                                                                               |
| [`ShellFace`](#ImportedCutBoundaryRemoteConstraint.ShellFace)                                                       | ShellFace property.                                                                                                                                                                           |
| [`ShellOffsetType`](#ImportedCutBoundaryRemoteConstraint.ShellOffsetType)                                           | Gets or sets the Offset Type for aligning the thickness of the surface body.                                                                                                                  |
| [`ShellThicknessFactor`](#ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                                                                                                                |
| [`ShowWireframeData`](#ImportedCutBoundaryRemoteConstraint.ShowWireframeData)                                       | Gets or sets the ShowWireframeData.                                                                                                                                                           |
| [`SourceBodies`](#ImportedCutBoundaryRemoteConstraint.SourceBodies)                                                 | SourceBodies property.                                                                                                                                                                        |
| [`SourceComponent`](#ImportedCutBoundaryRemoteConstraint.SourceComponent)                                           | SourceComponent property.                                                                                                                                                                     |
| [`SourceMaximum`](#ImportedCutBoundaryRemoteConstraint.SourceMaximum)                                               | SourceMaximum property.                                                                                                                                                                       |
| [`SourceMinimum`](#ImportedCutBoundaryRemoteConstraint.SourceMinimum)                                               | SourceMinimum property.                                                                                                                                                                       |
| [`SourceZone`](#ImportedCutBoundaryRemoteConstraint.SourceZone)                                                     | SourceZone property.                                                                                                                                                                          |
| [`State`](#ImportedCutBoundaryRemoteConstraint.State)                                                               | State property.                                                                                                                                                                               |
| [`SupplementalFilmCoefficient`](#ImportedCutBoundaryRemoteConstraint.SupplementalFilmCoefficient)                   | SupplementalFilmCoefficient property.                                                                                                                                                         |
| [`Suppressed`](#ImportedCutBoundaryRemoteConstraint.Suppressed)                                                     | Gets or sets the Suppressed.                                                                                                                                                                  |
| [`TabularLoading`](#ImportedCutBoundaryRemoteConstraint.TabularLoading)                                             | TabularLoading property.                                                                                                                                                                      |
| [`TargetCoordinateSystem`](#ImportedCutBoundaryRemoteConstraint.TargetCoordinateSystem)                             | TargetCoordinateSystem property.                                                                                                                                                              |
| [`TemperatureType`](#ImportedCutBoundaryRemoteConstraint.TemperatureType)                                           | TemperatureType property.                                                                                                                                                                     |
| [`ThetaXY`](#ImportedCutBoundaryRemoteConstraint.ThetaXY)                                                           | ThetaXY property.                                                                                                                                                                             |
| [`ThetaYZ`](#ImportedCutBoundaryRemoteConstraint.ThetaYZ)                                                           | ThetaYZ property.                                                                                                                                                                             |
| [`ThetaZX`](#ImportedCutBoundaryRemoteConstraint.ThetaZX)                                                           | ThetaZX property.                                                                                                                                                                             |
| [`UnmappedNodesName`](#ImportedCutBoundaryRemoteConstraint.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                                                                                                                   |
| [`VariableType`](#ImportedCutBoundaryRemoteConstraint.VariableType)                                                 | VariableType property.                                                                                                                                                                        |
| [`VisibleProperties`](#ImportedCutBoundaryRemoteConstraint.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                                                                                                                 |
| [`Weighting`](#ImportedCutBoundaryRemoteConstraint.Weighting)                                                       | Weighting property.                                                                                                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCutBoundaryRemoteConstraint.ActiveRow"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ActiveRow *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRow.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ActiveRowValue"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ActiveRowValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRowValue.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Algorithm"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AnalysisOrderNumbers"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AnalysisOrderNumbers *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisOrderNumbers property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AnalysisRpmSelection"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AnalysisRpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSelection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AnalysisRpmSetIndex"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AnalysisRpmSetIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetIndex property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AnalysisRpmSetRanges"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AnalysisRpmSetRanges *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetRanges property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AnalysisSpecifyRpm"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AnalysisSpecifyRpm *: Ansys.Mechanical.DataModel.Enums.ExternalLoadImportRPMType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisSpecifyRpm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AnalysisTimeOrFrequencysDefinition"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AnalysisTimeOrFrequencysDefinition *: Ansys.Mechanical.DataModel.Enums.AnalysisTimeDefinitionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeOrFrequencysDefinition property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AnalysisTimeRangeMax"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AnalysisTimeRangeMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMax property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AnalysisTimeRangeMin"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AnalysisTimeRangeMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMin property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AppliedByType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AppliedByType *: Ansys.Mechanical.DataModel.Enums.LoadAppliedByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AppliedByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ApplyAs"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AttachedRefs"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AverageAmbientTemperature"></a>

### *property* ImportedCutBoundaryRemoteConstraint.AverageAmbientTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AverageAmbientTemperature property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance"></a>

### *property* ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.BucketToleranceCheck"></a>

### *property* ImportedCutBoundaryRemoteConstraint.BucketToleranceCheck *: Ansys.Mechanical.DataModel.Enums.OnOffType | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.BucketToleranceKey"></a>

### *property* ImportedCutBoundaryRemoteConstraint.BucketToleranceKey *: Ansys.Mechanical.DataModel.Enums.MappingToleranceKey | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceKey property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.BucketToleranceValue"></a>

### *property* ImportedCutBoundaryRemoteConstraint.BucketToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceValue property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CFDSurface"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CFDSurface *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CFDSurface property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Children"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ClsId"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Comments"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ComplexComponent"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ComplexComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayMappedData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DefineActiveSequenceBy"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DefineActiveSequenceBy *: Ansys.Mechanical.DataModel.Enums.ExtLoadDefineActiveSequenceBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DefineByType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DefineByType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

DefineByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DiscretizationX"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DiscretizationX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DiscretizationY"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DiscretizationY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ExternalDataIdentifier"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ExternalDataIdentifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalDataIdentifier property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ExternalLoadScopingType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ExternalLoadScopingType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadScopingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalLoadScopingType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Figures"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Geometry"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Geometry *: Ansys.Mechanical.DataModel.Enums.MappingGeometryType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Geometry property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GroupingFolder"></a>

### *property* ImportedCutBoundaryRemoteConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.HarmonicIndex"></a>

### *property* ImportedCutBoundaryRemoteConstraint.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.IconName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Images"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.InternalObject"></a>

### *property* ImportedCutBoundaryRemoteConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Interpolation"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction"></a>

### *property* ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.KrigingPolynom"></a>

### *property* ImportedCutBoundaryRemoteConstraint.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.LegendMaximum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.LegendMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.LegendMinimum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.LegendMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.LegendRange"></a>

### *property* ImportedCutBoundaryRemoteConstraint.LegendRange *: Ansys.Mechanical.DataModel.Enums.LegendRangeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Limit"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Limit *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.LoadDisplayComponentType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.LoadDisplayComponentType *: Ansys.Mechanical.DataModel.Enums.ExtLoadDisplayComponentType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.LoadedAreaType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.LoadedAreaType *: Ansys.Mechanical.DataModel.Enums.LoadedAreaType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LoadedAreaType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Location"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.MappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.MappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Mapping"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.MappingControl"></a>

### *property* ImportedCutBoundaryRemoteConstraint.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance"></a>

### *property* ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Method"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Name"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.NonCyclicLoadingType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.NumberOfPoints"></a>

### *property* ImportedCutBoundaryRemoteConstraint.NumberOfPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ObjectId"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ObjectState"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ObjectTags"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OrientationRealignment"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OrientationRealignment *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OriginX"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OriginX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OriginY"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OriginY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OriginZ"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OriginZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OutsideNodesName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OutsideNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OutsideOption"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Parent"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Pinball"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Projection"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Properties"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SharedRefBody"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ShellFace"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellFace property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ShellOffsetType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Offset Type for aligning the thickness of the surface body.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ShowWireframeData"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ShowWireframeData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowWireframeData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SourceBodies"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SourceBodies *: Ansys.Mechanical.DataModel.Enums.ImportSourceBodies | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceBodies property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SourceComponent"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SourceComponent *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceComponent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SourceMaximum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SourceMinimum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SourceZone"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SourceZone *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceZone property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.State"></a>

### *property* ImportedCutBoundaryRemoteConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SupplementalFilmCoefficient"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SupplementalFilmCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupplementalFilmCoefficient property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Suppressed"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.TabularLoading"></a>

### *property* ImportedCutBoundaryRemoteConstraint.TabularLoading *: Ansys.Mechanical.DataModel.Enums.ExternalLoadSteppingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TabularLoading property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.TargetCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteConstraint.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.TemperatureType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.TemperatureType *: Ansys.Mechanical.DataModel.Enums.AmbientTemperatureType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TemperatureType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ThetaXY"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ThetaXY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaXY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ThetaYZ"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ThetaYZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaYZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ThetaZX"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ThetaZX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaZX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.UnmappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.UnmappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.VariableType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.VisibleProperties"></a>

### *property* ImportedCutBoundaryRemoteConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Weighting"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCutBoundaryRemoteConstraint.Activate"></a>

### ImportedCutBoundaryRemoteConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddComment"></a>

### ImportedCutBoundaryRemoteConstraint.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddFigure"></a>

### ImportedCutBoundaryRemoteConstraint.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddImage"></a>

### ImportedCutBoundaryRemoteConstraint.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddMappingValidation"></a>

### ImportedCutBoundaryRemoteConstraint.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ClearGeneratedData"></a>

### ImportedCutBoundaryRemoteConstraint.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Copy"></a>

### ImportedCutBoundaryRemoteConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CopyTo"></a>

### ImportedCutBoundaryRemoteConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateObjRef"></a>

### ImportedCutBoundaryRemoteConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateParameter"></a>

### ImportedCutBoundaryRemoteConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateTabbedFile"></a>

### ImportedCutBoundaryRemoteConstraint.CreateTabbedFile() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets mapped values.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Cut"></a>

### ImportedCutBoundaryRemoteConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Delete"></a>

### ImportedCutBoundaryRemoteConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Duplicate"></a>

### ImportedCutBoundaryRemoteConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Equals"></a>

### ImportedCutBoundaryRemoteConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ExportToTextFile"></a>

### ImportedCutBoundaryRemoteConstraint.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ImportedCutBoundaryRemoteConstraint.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetAPIName"></a>

### ImportedCutBoundaryRemoteConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the imported cut boundary remote constraint is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetAllProperties"></a>

### ImportedCutBoundaryRemoteConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetChildren"></a>

### ImportedCutBoundaryRemoteConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedCutBoundaryRemoteConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetDetailsView"></a>

### ImportedCutBoundaryRemoteConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetElementsCoordinateSystems"></a>

### ImportedCutBoundaryRemoteConstraint.GetElementsCoordinateSystems() → System.Collections.Generic.Dictionary[System.Int64, [Ansys.ACT.Common.CoordinateSystem](../../../Common/CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.CoordinateSystem)]

Get  the elements coordinate systems dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetElementsOrientations"></a>

### ImportedCutBoundaryRemoteConstraint.GetElementsOrientations() → System.Collections.Generic.Dictionary[System.Int64, Ansys.ACT.Automation.Mechanical.ElementOrientationInfo]

Get  the elements orientations dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetEnumName"></a>

### ImportedCutBoundaryRemoteConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetHashCode"></a>

### ImportedCutBoundaryRemoteConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetIconFile"></a>

### ImportedCutBoundaryRemoteConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetLifetimeService"></a>

### ImportedCutBoundaryRemoteConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetObjectData"></a>

### ImportedCutBoundaryRemoteConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetParameter"></a>

### ImportedCutBoundaryRemoteConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetPath"></a>

### ImportedCutBoundaryRemoteConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetPropertyName"></a>

### ImportedCutBoundaryRemoteConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetPropertyValue"></a>

### ImportedCutBoundaryRemoteConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetTableByName"></a>

### ImportedCutBoundaryRemoteConstraint.GetTableByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), bUseWorksheetItfToGetTable: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow]

GetTableByName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetVisibleProperties"></a>

### ImportedCutBoundaryRemoteConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetVisiblePropertyNames"></a>

### ImportedCutBoundaryRemoteConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren"></a>

### ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects"></a>

### ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Import"></a>

### ImportedCutBoundaryRemoteConstraint.Import() → [None](https://docs.python.org/3/builtins/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ImportLoad"></a>

### ImportedCutBoundaryRemoteConstraint.ImportLoad() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.InitializeLifetimeService"></a>

### ImportedCutBoundaryRemoteConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.IsPropertyEditable"></a>

### ImportedCutBoundaryRemoteConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedCutBoundaryRemoteConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.IsPropertyVisible"></a>

### ImportedCutBoundaryRemoteConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedCutBoundaryRemoteConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Paste"></a>

### ImportedCutBoundaryRemoteConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.PropertyByAPIName"></a>

### ImportedCutBoundaryRemoteConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.PropertyById"></a>

### ImportedCutBoundaryRemoteConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.PropertyByName"></a>

### ImportedCutBoundaryRemoteConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ReloadConfiguration"></a>

### ImportedCutBoundaryRemoteConstraint.ReloadConfiguration() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RemoveFromGroup"></a>

### ImportedCutBoundaryRemoteConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RemoveParameter"></a>

### ImportedCutBoundaryRemoteConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the imported cut boundary remote constraint is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SyncAnalysisFrequencies"></a>

### ImportedCutBoundaryRemoteConstraint.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.getFieldInterpolationProxy"></a>

### ImportedCutBoundaryRemoteConstraint.getFieldInterpolationProxy() → Ansys.ACT.Automation.Mechanical.ImportedLoads.CImportProxyWrapper

getFieldInterpolationProxy method.

<!-- !! processed by numpydoc !! -->

