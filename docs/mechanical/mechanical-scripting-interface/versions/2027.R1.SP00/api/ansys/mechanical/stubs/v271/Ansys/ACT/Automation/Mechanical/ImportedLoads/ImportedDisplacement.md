# `ImportedDisplacement`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedDisplacement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedDisplacement(internalObject: Any)

<a id="ImportedDisplacement"></a>

### *class* ImportedDisplacement(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedDisplacement.Activate)                                         | Activate the current object.                                                                  |
| [`AddComment`](#ImportedDisplacement.AddComment)                                     | Creates a new child Comment.                                                                  |
| [`AddFigure`](#ImportedDisplacement.AddFigure)                                       | Creates a new child Figure.                                                                   |
| [`AddImage`](#ImportedDisplacement.AddImage)                                         | Creates a new child Image.                                                                    |
| [`AddMappingValidation`](#ImportedDisplacement.AddMappingValidation)                 | Creates a new MappingValidation                                                               |
| [`ClearGeneratedData`](#ImportedDisplacement.ClearGeneratedData)                     | Run the ClearGeneratedData action.                                                            |
| [`Copy`](#ImportedDisplacement.Copy)                                                 | Copies the current DataModelObject.                                                           |
| [`CopyTo`](#ImportedDisplacement.CopyTo)                                             | Copies all visible properties from this object to another.                                    |
| [`CreateObjRef`](#ImportedDisplacement.CreateObjRef)                                 | CreateObjRef method.                                                                          |
| [`CreateParameter`](#ImportedDisplacement.CreateParameter)                           | Creates a new parameter for a Property.                                                       |
| [`CreateTabbedFile`](#ImportedDisplacement.CreateTabbedFile)                         | Gets mapped values.                                                                           |
| [`Cut`](#ImportedDisplacement.Cut)                                                   | Cuts the current DataModelObject.                                                             |
| [`Delete`](#ImportedDisplacement.Delete)                                             | Run the Delete action.                                                                        |
| [`Duplicate`](#ImportedDisplacement.Duplicate)                                       | Creates a copy of the current DataModelObject.                                                |
| [`Equals`](#ImportedDisplacement.Equals)                                             | Equals method.                                                                                |
| [`ExportToTextFile`](#ImportedDisplacement.ExportToTextFile)                         | ExportToTextFile method.                                                                      |
| [`GetAPIName`](#ImportedDisplacement.GetAPIName)                                     | Property name bound to dispId.                                                                |
| [`GetActivateAtLoadStep`](#ImportedDisplacement.GetActivateAtLoadStep)               | Gets whether the imported displacement is active at the specified load step.                  |
| [`GetAllProperties`](#ImportedDisplacement.GetAllProperties)                         | GetAllProperties method.                                                                      |
| [`GetChildren`](#ImportedDisplacement.GetChildren)                                   | Gets the list of children, filtered by type.                                                  |
| [`GetDetailsView`](#ImportedDisplacement.GetDetailsView)                             | GetDetailsView method.                                                                        |
| [`GetElementsCoordinateSystems`](#ImportedDisplacement.GetElementsCoordinateSystems) | Get  the elements coordinate systems dictionary.                                              |
| [`GetElementsOrientations`](#ImportedDisplacement.GetElementsOrientations)           | Get  the elements orientations dictionary.                                                    |
| [`GetEnumName`](#ImportedDisplacement.GetEnumName)                                   | Enum name bound to value                                                                      |
| [`GetHashCode`](#ImportedDisplacement.GetHashCode)                                   | GetHashCode method.                                                                           |
| [`GetIconFile`](#ImportedDisplacement.GetIconFile)                                   | GetIconFile method.                                                                           |
| [`GetLifetimeService`](#ImportedDisplacement.GetLifetimeService)                     | GetLifetimeService method.                                                                    |
| [`GetObjectData`](#ImportedDisplacement.GetObjectData)                               | GetObjectData method.                                                                         |
| [`GetParameter`](#ImportedDisplacement.GetParameter)                                 | Gets the parameter corresponding to the given property.                                       |
| [`GetPath`](#ImportedDisplacement.GetPath)                                           | GetPath method.                                                                               |
| [`GetPropertyName`](#ImportedDisplacement.GetPropertyName)                           | GetPropertyName method.                                                                       |
| [`GetPropertyValue`](#ImportedDisplacement.GetPropertyValue)                         | GetPropertyValue method.                                                                      |
| [`GetTableByName`](#ImportedDisplacement.GetTableByName)                             | GetTableByName method.                                                                        |
| [`GetVisibleProperties`](#ImportedDisplacement.GetVisibleProperties)                 | GetVisibleProperties method.                                                                  |
| [`GetVisiblePropertyNames`](#ImportedDisplacement.GetVisiblePropertyNames)           | GetVisiblePropertyNames method.                                                               |
| [`GroupAllSimilarChildren`](#ImportedDisplacement.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                                       |
| [`GroupSimilarObjects`](#ImportedDisplacement.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                                           |
| [`Import`](#ImportedDisplacement.Import)                                             | Import.                                                                                       |
| [`ImportLoad`](#ImportedDisplacement.ImportLoad)                                     | Run the ImportLoad action.                                                                    |
| [`InitializeLifetimeService`](#ImportedDisplacement.InitializeLifetimeService)       | InitializeLifetimeService method.                                                             |
| [`IsPropertyEditable`](#ImportedDisplacement.IsPropertyEditable)                     | IsPropertyEditable method.                                                                    |
| [`IsPropertyVisible`](#ImportedDisplacement.IsPropertyVisible)                       | IsPropertyVisible method.                                                                     |
| [`Paste`](#ImportedDisplacement.Paste)                                               | Pastes to the current DataModelObject context.                                                |
| [`PropertyByAPIName`](#ImportedDisplacement.PropertyByAPIName)                       | Get a property by its API name.                                                               |
| [`PropertyById`](#ImportedDisplacement.PropertyById)                                 | PropertyById method.                                                                          |
| [`PropertyByName`](#ImportedDisplacement.PropertyByName)                             | Get a property by its unique name.                                                            |
| [`ReloadConfiguration`](#ImportedDisplacement.ReloadConfiguration)                   | Reload the Imported Load's setup from its associated configuration file (if available).       |
| [`RemoveFromGroup`](#ImportedDisplacement.RemoveFromGroup)                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.   |
| [`RemoveParameter`](#ImportedDisplacement.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property.             |
| [`SetActivateAtLoadStep`](#ImportedDisplacement.SetActivateAtLoadStep)               | Sets whether the imported displacement is active at the specified load step.                  |
| [`SyncAnalysisFrequencies`](#ImportedDisplacement.SyncAnalysisFrequencies)           | Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load. |
| [`getFieldInterpolationProxy`](#ImportedDisplacement.getFieldInterpolationProxy)     | getFieldInterpolationProxy method.                                                            |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveRow`](#ImportedDisplacement.ActiveRow)                                                       | Gets or sets the ActiveRow.                                                                                                                                                                   |
| [`ActiveRowValue`](#ImportedDisplacement.ActiveRowValue)                                             | Gets or sets the ActiveRowValue.                                                                                                                                                              |
| [`Algorithm`](#ImportedDisplacement.Algorithm)                                                       | Algorithm property.                                                                                                                                                                           |
| [`AnalysisOrderNumbers`](#ImportedDisplacement.AnalysisOrderNumbers)                                 | AnalysisOrderNumbers property.                                                                                                                                                                |
| [`AnalysisRpmSelection`](#ImportedDisplacement.AnalysisRpmSelection)                                 | AnalysisRpmSelection property.                                                                                                                                                                |
| [`AnalysisRpmSetIndex`](#ImportedDisplacement.AnalysisRpmSetIndex)                                   | AnalysisRpmSetIndex property.                                                                                                                                                                 |
| [`AnalysisRpmSetRanges`](#ImportedDisplacement.AnalysisRpmSetRanges)                                 | AnalysisRpmSetRanges property.                                                                                                                                                                |
| [`AnalysisSpecifyRpm`](#ImportedDisplacement.AnalysisSpecifyRpm)                                     | AnalysisSpecifyRpm property.                                                                                                                                                                  |
| [`AnalysisTimeOrFrequencysDefinition`](#ImportedDisplacement.AnalysisTimeOrFrequencysDefinition)     | AnalysisTimeOrFrequencysDefinition property.                                                                                                                                                  |
| [`AnalysisTimeRangeMax`](#ImportedDisplacement.AnalysisTimeRangeMax)                                 | AnalysisTimeRangeMax property.                                                                                                                                                                |
| [`AnalysisTimeRangeMin`](#ImportedDisplacement.AnalysisTimeRangeMin)                                 | AnalysisTimeRangeMin property.                                                                                                                                                                |
| [`AppliedByType`](#ImportedDisplacement.AppliedByType)                                               | AppliedByType property.                                                                                                                                                                       |
| [`ApplyAs`](#ImportedDisplacement.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition.                                                                                       |
| [`ApplyToInitialMesh`](#ImportedDisplacement.ApplyToInitialMesh)                                     | Gets or sets the ApplyToInitialMesh.                                                                                                                                                          |
| [`AttachedRefs`](#ImportedDisplacement.AttachedRefs)                                                 | AttachedRefs property.                                                                                                                                                                        |
| [`AverageAmbientTemperature`](#ImportedDisplacement.AverageAmbientTemperature)                       | AverageAmbientTemperature property.                                                                                                                                                           |
| [`BoundingBoxTolerance`](#ImportedDisplacement.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                                                                                                                |
| [`BucketToleranceCheck`](#ImportedDisplacement.BucketToleranceCheck)                                 | BucketToleranceCheck property.                                                                                                                                                                |
| [`BucketToleranceKey`](#ImportedDisplacement.BucketToleranceKey)                                     | BucketToleranceKey property.                                                                                                                                                                  |
| [`BucketToleranceValue`](#ImportedDisplacement.BucketToleranceValue)                                 | BucketToleranceValue property.                                                                                                                                                                |
| [`CFDSurface`](#ImportedDisplacement.CFDSurface)                                                     | CFDSurface property.                                                                                                                                                                          |
| [`Children`](#ImportedDisplacement.Children)                                                         | Gets the list of children.                                                                                                                                                                    |
| [`ClsId`](#ImportedDisplacement.ClsId)                                                               | ClsId property.                                                                                                                                                                               |
| [`Comments`](#ImportedDisplacement.Comments)                                                         | Gets the list of associated comments.                                                                                                                                                         |
| [`ComplexComponent`](#ImportedDisplacement.ComplexComponent)                                         | Gets or sets the DisplayMappedData.                                                                                                                                                           |
| [`CreateNameSelectionForMappedNodes`](#ImportedDisplacement.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                                                                                                                   |
| [`CreateNameSelectionForOutsideNodes`](#ImportedDisplacement.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                                                                                                                  |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedDisplacement.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                                                                                                                 |
| [`DataModelObjectCategory`](#ImportedDisplacement.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                                                                                                                  |
| [`DefineActiveSequenceBy`](#ImportedDisplacement.DefineActiveSequenceBy)                             | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`DefineByType`](#ImportedDisplacement.DefineByType)                                                 | DefineByType property.                                                                                                                                                                        |
| [`DiscretizationX`](#ImportedDisplacement.DiscretizationX)                                           | DiscretizationX property.                                                                                                                                                                     |
| [`DiscretizationY`](#ImportedDisplacement.DiscretizationY)                                           | DiscretizationY property.                                                                                                                                                                     |
| [`DisplacementType`](#ImportedDisplacement.DisplacementType)                                         | Gets or sets the DisplacementType.                                                                                                                                                            |
| [`DisplayInteriorPoints`](#ImportedDisplacement.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                                                                                                               |
| [`DisplayProjectionPlane`](#ImportedDisplacement.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                                                                                                              |
| [`DisplaySourcePointIds`](#ImportedDisplacement.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                                                                                                               |
| [`DisplaySourcePoints`](#ImportedDisplacement.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                                                                                                                 |
| [`ExternalDataIdentifier`](#ImportedDisplacement.ExternalDataIdentifier)                             | ExternalDataIdentifier property.                                                                                                                                                              |
| [`ExternalLoadScopingType`](#ImportedDisplacement.ExternalLoadScopingType)                           | ExternalLoadScopingType property.                                                                                                                                                             |
| [`ExtrapolationTolerancePercent`](#ImportedDisplacement.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                                                                                                       |
| [`Figures`](#ImportedDisplacement.Figures)                                                           | Gets the list of associated figures.                                                                                                                                                          |
| [`Geometry`](#Geometry)                                                                | Geometry property.                                                                                                                                                                            |
| [`GroupingFolder`](#ImportedDisplacement.GroupingFolder)                                             | GroupingFolder property.                                                                                                                                                                      |
| [`HarmonicIndex`](#ImportedDisplacement.HarmonicIndex)                                               | Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.                                                                                                 |
| [`IconName`](#ImportedDisplacement.IconName)                                                         | IconName property.                                                                                                                                                                            |
| [`Images`](#ImportedDisplacement.Images)                                                             | Gets the list of associated images.                                                                                                                                                           |
| [`InternalObject`](#ImportedDisplacement.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                                                                                                            |
| [`Interpolation`](#ImportedDisplacement.Interpolation)                                               | Interpolation property.                                                                                                                                                                       |
| [`KrigingCorrelationFunction`](#ImportedDisplacement.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                                                                                                          |
| [`KrigingPolynom`](#ImportedDisplacement.KrigingPolynom)                                             | KrigingPolynom property.                                                                                                                                                                      |
| [`LegendMaximum`](#ImportedDisplacement.LegendMaximum)                                               | LegendMaximum property.                                                                                                                                                                       |
| [`LegendMinimum`](#ImportedDisplacement.LegendMinimum)                                               | LegendMinimum property.                                                                                                                                                                       |
| [`LegendRange`](#ImportedDisplacement.LegendRange)                                                   | LegendRange property.                                                                                                                                                                         |
| [`Limit`](#ImportedDisplacement.Limit)                                                               | Limit property.                                                                                                                                                                               |
| [`LoadDisplayComponentType`](#ImportedDisplacement.LoadDisplayComponentType)                         | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`LoadedAreaType`](#ImportedDisplacement.LoadedAreaType)                                             | LoadedAreaType property.                                                                                                                                                                      |
| [`Location`](#ImportedDisplacement.Location)                                                         | Gets or sets the Location.                                                                                                                                                                    |
| [`MappedNodesName`](#ImportedDisplacement.MappedNodesName)                                           | MappedNodesName property.                                                                                                                                                                     |
| [`Mapping`](#ImportedDisplacement.Mapping)                                                           | Mapping property.                                                                                                                                                                             |
| [`MappingControl`](#ImportedDisplacement.MappingControl)                                             | MappingControl property.                                                                                                                                                                      |
| [`MaxOutsideDistance`](#ImportedDisplacement.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                                                                                                                  |
| [`Method`](#ImportedDisplacement.Method)                                                             | Method property.                                                                                                                                                                              |
| [`Name`](#ImportedDisplacement.Name)                                                                 | Name property.                                                                                                                                                                                |
| [`NonCyclicLoadingType`](#ImportedDisplacement.NonCyclicLoadingType)                                 | Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries. |
| [`NumberOfPoints`](#ImportedDisplacement.NumberOfPoints)                                             | NumberOfPoints property.                                                                                                                                                                      |
| [`ObjectId`](#ImportedDisplacement.ObjectId)                                                         | ObjectId property.                                                                                                                                                                            |
| [`ObjectState`](#ImportedDisplacement.ObjectState)                                                   | ObjectState property.                                                                                                                                                                         |
| [`ObjectTags`](#ImportedDisplacement.ObjectTags)                                                     | ObjectTags property.                                                                                                                                                                          |
| [`OrientationRealignment`](#ImportedDisplacement.OrientationRealignment)                             | OrientationRealignment property.                                                                                                                                                              |
| [`OriginX`](#ImportedDisplacement.OriginX)                                                           | OriginX property.                                                                                                                                                                             |
| [`OriginY`](#ImportedDisplacement.OriginY)                                                           | OriginY property.                                                                                                                                                                             |
| [`OriginZ`](#ImportedDisplacement.OriginZ)                                                           | OriginZ property.                                                                                                                                                                             |
| [`OutsideDistanceCheck`](#ImportedDisplacement.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                                                                                                                |
| [`OutsideNodesName`](#ImportedDisplacement.OutsideNodesName)                                         | OutsideNodesName property.                                                                                                                                                                    |
| [`OutsideOption`](#ImportedDisplacement.OutsideOption)                                               | OutsideOption property.                                                                                                                                                                       |
| [`Parent`](#ImportedDisplacement.Parent)                                                             | Parent property.                                                                                                                                                                              |
| [`Pinball`](#ImportedDisplacement.Pinball)                                                           | Pinball property.                                                                                                                                                                             |
| [`Projection`](#ImportedDisplacement.Projection)                                                     | Projection property.                                                                                                                                                                          |
| [`Properties`](#ImportedDisplacement.Properties)                                                     | Gets the list of properties for this object.                                                                                                                                                  |
| [`RigidBodyTransformationType`](#ImportedDisplacement.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                                                                                                         |
| [`RigidTransformSourceCoordinateSystem`](#ImportedDisplacement.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                                                                                                                |
| [`RigidTransformTargetCoordinateSystem`](#ImportedDisplacement.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                                                                                                                |
| [`SharedRefBody`](#ImportedDisplacement.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                                                                                                               |
| [`ShellFace`](#ImportedDisplacement.ShellFace)                                                       | ShellFace property.                                                                                                                                                                           |
| [`ShellOffsetType`](#ImportedDisplacement.ShellOffsetType)                                           | Gets or sets the Offset Type for aligning the thickness of the surface body.                                                                                                                  |
| [`ShellThicknessFactor`](#ImportedDisplacement.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                                                                                                                |
| [`ShowWireframeData`](#ImportedDisplacement.ShowWireframeData)                                       | Gets or sets the ShowWireframeData.                                                                                                                                                           |
| [`SourceBodies`](#ImportedDisplacement.SourceBodies)                                                 | SourceBodies property.                                                                                                                                                                        |
| [`SourceComponent`](#ImportedDisplacement.SourceComponent)                                           | SourceComponent property.                                                                                                                                                                     |
| [`SourceMaximum`](#ImportedDisplacement.SourceMaximum)                                               | SourceMaximum property.                                                                                                                                                                       |
| [`SourceMinimum`](#ImportedDisplacement.SourceMinimum)                                               | SourceMinimum property.                                                                                                                                                                       |
| [`SourceZone`](#ImportedDisplacement.SourceZone)                                                     | SourceZone property.                                                                                                                                                                          |
| [`State`](#ImportedDisplacement.State)                                                               | State property.                                                                                                                                                                               |
| [`SupplementalFilmCoefficient`](#ImportedDisplacement.SupplementalFilmCoefficient)                   | SupplementalFilmCoefficient property.                                                                                                                                                         |
| [`Suppressed`](#ImportedDisplacement.Suppressed)                                                     | Gets or sets the Suppressed.                                                                                                                                                                  |
| [`TabularLoading`](#ImportedDisplacement.TabularLoading)                                             | TabularLoading property.                                                                                                                                                                      |
| [`TargetCoordinateSystem`](#ImportedDisplacement.TargetCoordinateSystem)                             | TargetCoordinateSystem property.                                                                                                                                                              |
| [`TemperatureType`](#ImportedDisplacement.TemperatureType)                                           | TemperatureType property.                                                                                                                                                                     |
| [`ThetaXY`](#ImportedDisplacement.ThetaXY)                                                           | ThetaXY property.                                                                                                                                                                             |
| [`ThetaYZ`](#ImportedDisplacement.ThetaYZ)                                                           | ThetaYZ property.                                                                                                                                                                             |
| [`ThetaZX`](#ImportedDisplacement.ThetaZX)                                                           | ThetaZX property.                                                                                                                                                                             |
| [`UnmappedNodesName`](#ImportedDisplacement.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                                                                                                                   |
| [`VariableType`](#ImportedDisplacement.VariableType)                                                 | VariableType property.                                                                                                                                                                        |
| [`VisibleProperties`](#ImportedDisplacement.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                                                                                                                 |
| [`Weighting`](#ImportedDisplacement.Weighting)                                                       | Weighting property.                                                                                                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedDisplacement.ActiveRow"></a>

### *property* ImportedDisplacement.ActiveRow *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRow.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ActiveRowValue"></a>

### *property* ImportedDisplacement.ActiveRowValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRowValue.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Algorithm"></a>

### *property* ImportedDisplacement.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AnalysisOrderNumbers"></a>

### *property* ImportedDisplacement.AnalysisOrderNumbers *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisOrderNumbers property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AnalysisRpmSelection"></a>

### *property* ImportedDisplacement.AnalysisRpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSelection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AnalysisRpmSetIndex"></a>

### *property* ImportedDisplacement.AnalysisRpmSetIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetIndex property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AnalysisRpmSetRanges"></a>

### *property* ImportedDisplacement.AnalysisRpmSetRanges *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetRanges property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AnalysisSpecifyRpm"></a>

### *property* ImportedDisplacement.AnalysisSpecifyRpm *: Ansys.Mechanical.DataModel.Enums.ExternalLoadImportRPMType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisSpecifyRpm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AnalysisTimeOrFrequencysDefinition"></a>

### *property* ImportedDisplacement.AnalysisTimeOrFrequencysDefinition *: Ansys.Mechanical.DataModel.Enums.AnalysisTimeDefinitionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeOrFrequencysDefinition property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AnalysisTimeRangeMax"></a>

### *property* ImportedDisplacement.AnalysisTimeRangeMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMax property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AnalysisTimeRangeMin"></a>

### *property* ImportedDisplacement.AnalysisTimeRangeMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMin property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AppliedByType"></a>

### *property* ImportedDisplacement.AppliedByType *: Ansys.Mechanical.DataModel.Enums.LoadAppliedByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AppliedByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ApplyAs"></a>

### *property* ImportedDisplacement.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ApplyToInitialMesh"></a>

### *property* ImportedDisplacement.ApplyToInitialMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ApplyToInitialMesh.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AttachedRefs"></a>

### *property* ImportedDisplacement.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AverageAmbientTemperature"></a>

### *property* ImportedDisplacement.AverageAmbientTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AverageAmbientTemperature property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.BoundingBoxTolerance"></a>

### *property* ImportedDisplacement.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.BucketToleranceCheck"></a>

### *property* ImportedDisplacement.BucketToleranceCheck *: Ansys.Mechanical.DataModel.Enums.OnOffType | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.BucketToleranceKey"></a>

### *property* ImportedDisplacement.BucketToleranceKey *: Ansys.Mechanical.DataModel.Enums.MappingToleranceKey | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceKey property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.BucketToleranceValue"></a>

### *property* ImportedDisplacement.BucketToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceValue property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CFDSurface"></a>

### *property* ImportedDisplacement.CFDSurface *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CFDSurface property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Children"></a>

### *property* ImportedDisplacement.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ClsId"></a>

### *property* ImportedDisplacement.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Comments"></a>

### *property* ImportedDisplacement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ComplexComponent"></a>

### *property* ImportedDisplacement.ComplexComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayMappedData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedDisplacement.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedDisplacement.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedDisplacement.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DataModelObjectCategory"></a>

### *property* ImportedDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DefineActiveSequenceBy"></a>

### *property* ImportedDisplacement.DefineActiveSequenceBy *: Ansys.Mechanical.DataModel.Enums.ExtLoadDefineActiveSequenceBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DefineByType"></a>

### *property* ImportedDisplacement.DefineByType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

DefineByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DiscretizationX"></a>

### *property* ImportedDisplacement.DiscretizationX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DiscretizationY"></a>

### *property* ImportedDisplacement.DiscretizationY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplacementType"></a>

### *property* ImportedDisplacement.DisplacementType *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplacementType](../../../../Mechanical/DataModel/Enums/ExternalLoadDisplacementType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplacementType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplacementType.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplayInteriorPoints"></a>

### *property* ImportedDisplacement.DisplayInteriorPoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplayProjectionPlane"></a>

### *property* ImportedDisplacement.DisplayProjectionPlane *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplaySourcePointIds"></a>

### *property* ImportedDisplacement.DisplaySourcePointIds *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplaySourcePoints"></a>

### *property* ImportedDisplacement.DisplaySourcePoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ExternalDataIdentifier"></a>

### *property* ImportedDisplacement.ExternalDataIdentifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalDataIdentifier property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ExternalLoadScopingType"></a>

### *property* ImportedDisplacement.ExternalLoadScopingType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadScopingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalLoadScopingType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ExtrapolationTolerancePercent"></a>

### *property* ImportedDisplacement.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Figures"></a>

### *property* ImportedDisplacement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Geometry"></a>

### *property* ImportedDisplacement.Geometry *: Ansys.Mechanical.DataModel.Enums.MappingGeometryType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Geometry property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GroupingFolder"></a>

### *property* ImportedDisplacement.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.HarmonicIndex"></a>

### *property* ImportedDisplacement.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.IconName"></a>

### *property* ImportedDisplacement.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Images"></a>

### *property* ImportedDisplacement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.InternalObject"></a>

### *property* ImportedDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Interpolation"></a>

### *property* ImportedDisplacement.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.KrigingCorrelationFunction"></a>

### *property* ImportedDisplacement.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.KrigingPolynom"></a>

### *property* ImportedDisplacement.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.LegendMaximum"></a>

### *property* ImportedDisplacement.LegendMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.LegendMinimum"></a>

### *property* ImportedDisplacement.LegendMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.LegendRange"></a>

### *property* ImportedDisplacement.LegendRange *: Ansys.Mechanical.DataModel.Enums.LegendRangeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Limit"></a>

### *property* ImportedDisplacement.Limit *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.LoadDisplayComponentType"></a>

### *property* ImportedDisplacement.LoadDisplayComponentType *: Ansys.Mechanical.DataModel.Enums.ExtLoadDisplayComponentType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.LoadedAreaType"></a>

### *property* ImportedDisplacement.LoadedAreaType *: Ansys.Mechanical.DataModel.Enums.LoadedAreaType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LoadedAreaType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Location"></a>

### *property* ImportedDisplacement.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.MappedNodesName"></a>

### *property* ImportedDisplacement.MappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Mapping"></a>

### *property* ImportedDisplacement.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.MappingControl"></a>

### *property* ImportedDisplacement.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.MaxOutsideDistance"></a>

### *property* ImportedDisplacement.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Method"></a>

### *property* ImportedDisplacement.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Name"></a>

### *property* ImportedDisplacement.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.NonCyclicLoadingType"></a>

### *property* ImportedDisplacement.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.NumberOfPoints"></a>

### *property* ImportedDisplacement.NumberOfPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ObjectId"></a>

### *property* ImportedDisplacement.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ObjectState"></a>

### *property* ImportedDisplacement.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ObjectTags"></a>

### *property* ImportedDisplacement.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OrientationRealignment"></a>

### *property* ImportedDisplacement.OrientationRealignment *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OriginX"></a>

### *property* ImportedDisplacement.OriginX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OriginY"></a>

### *property* ImportedDisplacement.OriginY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OriginZ"></a>

### *property* ImportedDisplacement.OriginZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OutsideDistanceCheck"></a>

### *property* ImportedDisplacement.OutsideDistanceCheck *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OutsideNodesName"></a>

### *property* ImportedDisplacement.OutsideNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OutsideOption"></a>

### *property* ImportedDisplacement.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Parent"></a>

### *property* ImportedDisplacement.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Pinball"></a>

### *property* ImportedDisplacement.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Projection"></a>

### *property* ImportedDisplacement.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Properties"></a>

### *property* ImportedDisplacement.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.RigidBodyTransformationType"></a>

### *property* ImportedDisplacement.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedDisplacement.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedDisplacement.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SharedRefBody"></a>

### *property* ImportedDisplacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ShellFace"></a>

### *property* ImportedDisplacement.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellFace property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ShellOffsetType"></a>

### *property* ImportedDisplacement.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Offset Type for aligning the thickness of the surface body.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ShellThicknessFactor"></a>

### *property* ImportedDisplacement.ShellThicknessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ShowWireframeData"></a>

### *property* ImportedDisplacement.ShowWireframeData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowWireframeData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SourceBodies"></a>

### *property* ImportedDisplacement.SourceBodies *: Ansys.Mechanical.DataModel.Enums.ImportSourceBodies | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceBodies property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SourceComponent"></a>

### *property* ImportedDisplacement.SourceComponent *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceComponent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SourceMaximum"></a>

### *property* ImportedDisplacement.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SourceMinimum"></a>

### *property* ImportedDisplacement.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SourceZone"></a>

### *property* ImportedDisplacement.SourceZone *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceZone property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.State"></a>

### *property* ImportedDisplacement.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SupplementalFilmCoefficient"></a>

### *property* ImportedDisplacement.SupplementalFilmCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupplementalFilmCoefficient property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Suppressed"></a>

### *property* ImportedDisplacement.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.TabularLoading"></a>

### *property* ImportedDisplacement.TabularLoading *: Ansys.Mechanical.DataModel.Enums.ExternalLoadSteppingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TabularLoading property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.TargetCoordinateSystem"></a>

### *property* ImportedDisplacement.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.TemperatureType"></a>

### *property* ImportedDisplacement.TemperatureType *: Ansys.Mechanical.DataModel.Enums.AmbientTemperatureType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TemperatureType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ThetaXY"></a>

### *property* ImportedDisplacement.ThetaXY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaXY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ThetaYZ"></a>

### *property* ImportedDisplacement.ThetaYZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaYZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ThetaZX"></a>

### *property* ImportedDisplacement.ThetaZX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaZX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.UnmappedNodesName"></a>

### *property* ImportedDisplacement.UnmappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.VariableType"></a>

### *property* ImportedDisplacement.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.VisibleProperties"></a>

### *property* ImportedDisplacement.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Weighting"></a>

### *property* ImportedDisplacement.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedDisplacement.Activate"></a>

### ImportedDisplacement.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AddComment"></a>

### ImportedDisplacement.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AddFigure"></a>

### ImportedDisplacement.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AddImage"></a>

### ImportedDisplacement.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AddMappingValidation"></a>

### ImportedDisplacement.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ClearGeneratedData"></a>

### ImportedDisplacement.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Copy"></a>

### ImportedDisplacement.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CopyTo"></a>

### ImportedDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateObjRef"></a>

### ImportedDisplacement.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateParameter"></a>

### ImportedDisplacement.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateTabbedFile"></a>

### ImportedDisplacement.CreateTabbedFile() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets mapped values.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Cut"></a>

### ImportedDisplacement.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Delete"></a>

### ImportedDisplacement.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Duplicate"></a>

### ImportedDisplacement.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Equals"></a>

### ImportedDisplacement.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ExportToTextFile"></a>

### ImportedDisplacement.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ImportedDisplacement.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetAPIName"></a>

### ImportedDisplacement.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetActivateAtLoadStep"></a>

### ImportedDisplacement.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the imported displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetAllProperties"></a>

### ImportedDisplacement.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetChildren"></a>

### ImportedDisplacement.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetDetailsView"></a>

### ImportedDisplacement.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetElementsCoordinateSystems"></a>

### ImportedDisplacement.GetElementsCoordinateSystems() → System.Collections.Generic.Dictionary[System.Int64, [Ansys.ACT.Common.CoordinateSystem](../../../Common/CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.CoordinateSystem)]

Get  the elements coordinate systems dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetElementsOrientations"></a>

### ImportedDisplacement.GetElementsOrientations() → System.Collections.Generic.Dictionary[System.Int64, Ansys.ACT.Automation.Mechanical.ElementOrientationInfo]

Get  the elements orientations dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetEnumName"></a>

### ImportedDisplacement.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetHashCode"></a>

### ImportedDisplacement.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetIconFile"></a>

### ImportedDisplacement.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetLifetimeService"></a>

### ImportedDisplacement.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetObjectData"></a>

### ImportedDisplacement.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetParameter"></a>

### ImportedDisplacement.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetPath"></a>

### ImportedDisplacement.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetPropertyName"></a>

### ImportedDisplacement.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetPropertyValue"></a>

### ImportedDisplacement.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetTableByName"></a>

### ImportedDisplacement.GetTableByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), bUseWorksheetItfToGetTable: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow]

GetTableByName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetVisibleProperties"></a>

### ImportedDisplacement.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetVisiblePropertyNames"></a>

### ImportedDisplacement.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GroupAllSimilarChildren"></a>

### ImportedDisplacement.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GroupSimilarObjects"></a>

### ImportedDisplacement.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Import"></a>

### ImportedDisplacement.Import() → [None](https://docs.python.org/3/builtins/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ImportLoad"></a>

### ImportedDisplacement.ImportLoad() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.InitializeLifetimeService"></a>

### ImportedDisplacement.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.IsPropertyEditable"></a>

### ImportedDisplacement.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedDisplacement.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.IsPropertyVisible"></a>

### ImportedDisplacement.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedDisplacement.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Paste"></a>

### ImportedDisplacement.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.PropertyByAPIName"></a>

### ImportedDisplacement.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.PropertyById"></a>

### ImportedDisplacement.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.PropertyByName"></a>

### ImportedDisplacement.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ReloadConfiguration"></a>

### ImportedDisplacement.ReloadConfiguration() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.RemoveFromGroup"></a>

### ImportedDisplacement.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.RemoveParameter"></a>

### ImportedDisplacement.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SetActivateAtLoadStep"></a>

### ImportedDisplacement.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the imported displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SyncAnalysisFrequencies"></a>

### ImportedDisplacement.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.getFieldInterpolationProxy"></a>

### ImportedDisplacement.getFieldInterpolationProxy() → Ansys.ACT.Automation.Mechanical.ImportedLoads.CImportProxyWrapper

getFieldInterpolationProxy method.

<!-- !! processed by numpydoc !! -->

