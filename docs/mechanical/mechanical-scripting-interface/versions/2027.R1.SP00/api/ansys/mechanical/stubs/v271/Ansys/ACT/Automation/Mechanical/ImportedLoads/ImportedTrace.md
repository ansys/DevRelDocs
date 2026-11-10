# `ImportedTrace`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTrace"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTrace(internalObject: Any)

<a id="ImportedTrace"></a>

### *class* ImportedTrace(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedTrace.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedTrace.Activate)                                         | Activate the current object.                                                                  |
| [`AddComment`](#ImportedTrace.AddComment)                                     | Creates a new child Comment.                                                                  |
| [`AddFigure`](#ImportedTrace.AddFigure)                                       | Creates a new child Figure.                                                                   |
| [`AddImage`](#ImportedTrace.AddImage)                                         | Creates a new child Image.                                                                    |
| [`AddMappingValidation`](#ImportedTrace.AddMappingValidation)                 | Creates a new MappingValidation                                                               |
| [`ClearGeneratedData`](#ImportedTrace.ClearGeneratedData)                     | Run the ClearGeneratedData action.                                                            |
| [`Copy`](#ImportedTrace.Copy)                                                 | Copies the current DataModelObject.                                                           |
| [`CopyTo`](#ImportedTrace.CopyTo)                                             | Copies all visible properties from this object to another.                                    |
| [`CreateObjRef`](#ImportedTrace.CreateObjRef)                                 | CreateObjRef method.                                                                          |
| [`CreateParameter`](#ImportedTrace.CreateParameter)                           | Creates a new parameter for a Property.                                                       |
| [`CreateTabbedFile`](#ImportedTrace.CreateTabbedFile)                         | Gets mapped values.                                                                           |
| [`Cut`](#ImportedTrace.Cut)                                                   | Cuts the current DataModelObject.                                                             |
| [`Delete`](#ImportedTrace.Delete)                                             | Run the Delete action.                                                                        |
| [`Duplicate`](#ImportedTrace.Duplicate)                                       | Creates a copy of the current DataModelObject.                                                |
| [`Equals`](#ImportedTrace.Equals)                                             | Equals method.                                                                                |
| [`ExportToTextFile`](#ImportedTrace.ExportToTextFile)                         | ExportToTextFile method.                                                                      |
| [`GetAPIName`](#ImportedTrace.GetAPIName)                                     | Property name bound to dispId.                                                                |
| [`GetActivateAtLoadStep`](#ImportedTrace.GetActivateAtLoadStep)               | GetActivateAtLoadStep method.                                                                 |
| [`GetAllProperties`](#ImportedTrace.GetAllProperties)                         | GetAllProperties method.                                                                      |
| [`GetChildren`](#ImportedTrace.GetChildren)                                   | Gets the list of children, filtered by type.                                                  |
| [`GetDetailsView`](#ImportedTrace.GetDetailsView)                             | GetDetailsView method.                                                                        |
| [`GetElementsCoordinateSystems`](#ImportedTrace.GetElementsCoordinateSystems) | Get  the elements coordinate systems dictionary.                                              |
| [`GetElementsOrientations`](#ImportedTrace.GetElementsOrientations)           | Get  the elements orientations dictionary.                                                    |
| [`GetEnumName`](#ImportedTrace.GetEnumName)                                   | Enum name bound to value                                                                      |
| [`GetHashCode`](#ImportedTrace.GetHashCode)                                   | GetHashCode method.                                                                           |
| [`GetIconFile`](#ImportedTrace.GetIconFile)                                   | GetIconFile method.                                                                           |
| [`GetLifetimeService`](#ImportedTrace.GetLifetimeService)                     | GetLifetimeService method.                                                                    |
| [`GetObjectData`](#ImportedTrace.GetObjectData)                               | GetObjectData method.                                                                         |
| [`GetParameter`](#ImportedTrace.GetParameter)                                 | Gets the parameter corresponding to the given property.                                       |
| [`GetPath`](#ImportedTrace.GetPath)                                           | GetPath method.                                                                               |
| [`GetPropertyName`](#ImportedTrace.GetPropertyName)                           | GetPropertyName method.                                                                       |
| [`GetPropertyValue`](#ImportedTrace.GetPropertyValue)                         | GetPropertyValue method.                                                                      |
| [`GetTableByName`](#ImportedTrace.GetTableByName)                             | GetTableByName method.                                                                        |
| [`GetVisibleProperties`](#ImportedTrace.GetVisibleProperties)                 | GetVisibleProperties method.                                                                  |
| [`GetVisiblePropertyNames`](#ImportedTrace.GetVisiblePropertyNames)           | GetVisiblePropertyNames method.                                                               |
| [`GroupAllSimilarChildren`](#ImportedTrace.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                                       |
| [`GroupSimilarObjects`](#ImportedTrace.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                                           |
| [`Import`](#ImportedTrace.Import)                                             | Import.                                                                                       |
| [`ImportLoad`](#ImportedTrace.ImportLoad)                                     | Run the ImportLoad action.                                                                    |
| [`InitializeLifetimeService`](#ImportedTrace.InitializeLifetimeService)       | InitializeLifetimeService method.                                                             |
| [`IsPropertyEditable`](#ImportedTrace.IsPropertyEditable)                     | IsPropertyEditable method.                                                                    |
| [`IsPropertyVisible`](#ImportedTrace.IsPropertyVisible)                       | IsPropertyVisible method.                                                                     |
| [`Paste`](#ImportedTrace.Paste)                                               | Pastes to the current DataModelObject context.                                                |
| [`PropertyByAPIName`](#ImportedTrace.PropertyByAPIName)                       | Get a property by its API name.                                                               |
| [`PropertyById`](#ImportedTrace.PropertyById)                                 | PropertyById method.                                                                          |
| [`PropertyByName`](#ImportedTrace.PropertyByName)                             | Get a property by its unique name.                                                            |
| [`ReloadConfiguration`](#ImportedTrace.ReloadConfiguration)                   | Reload the Imported Load's setup from its associated configuration file (if available).       |
| [`RemoveFromGroup`](#ImportedTrace.RemoveFromGroup)                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.   |
| [`RemoveParameter`](#ImportedTrace.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property.             |
| [`SetActivateAtLoadStep`](#ImportedTrace.SetActivateAtLoadStep)               | SetActivateAtLoadStep method.                                                                 |
| [`SyncAnalysisFrequencies`](#ImportedTrace.SyncAnalysisFrequencies)           | Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load. |
| [`getFieldInterpolationProxy`](#ImportedTrace.getFieldInterpolationProxy)     | getFieldInterpolationProxy method.                                                            |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveRow`](#ImportedTrace.ActiveRow)                                                       | Gets or sets the ActiveRow.                                                                                                                                                                   |
| [`ActiveRowValue`](#ImportedTrace.ActiveRowValue)                                             | Gets or sets the ActiveRowValue.                                                                                                                                                              |
| [`Algorithm`](#ImportedTrace.Algorithm)                                                       | Algorithm property.                                                                                                                                                                           |
| [`AnalysisOrderNumbers`](#ImportedTrace.AnalysisOrderNumbers)                                 | AnalysisOrderNumbers property.                                                                                                                                                                |
| [`AnalysisRpmSelection`](#ImportedTrace.AnalysisRpmSelection)                                 | AnalysisRpmSelection property.                                                                                                                                                                |
| [`AnalysisRpmSetIndex`](#ImportedTrace.AnalysisRpmSetIndex)                                   | AnalysisRpmSetIndex property.                                                                                                                                                                 |
| [`AnalysisRpmSetRanges`](#ImportedTrace.AnalysisRpmSetRanges)                                 | AnalysisRpmSetRanges property.                                                                                                                                                                |
| [`AnalysisSpecifyRpm`](#ImportedTrace.AnalysisSpecifyRpm)                                     | AnalysisSpecifyRpm property.                                                                                                                                                                  |
| [`AnalysisTimeOrFrequencysDefinition`](#ImportedTrace.AnalysisTimeOrFrequencysDefinition)     | AnalysisTimeOrFrequencysDefinition property.                                                                                                                                                  |
| [`AnalysisTimeRangeMax`](#ImportedTrace.AnalysisTimeRangeMax)                                 | AnalysisTimeRangeMax property.                                                                                                                                                                |
| [`AnalysisTimeRangeMin`](#ImportedTrace.AnalysisTimeRangeMin)                                 | AnalysisTimeRangeMin property.                                                                                                                                                                |
| [`AppliedByType`](#ImportedTrace.AppliedByType)                                               | AppliedByType property.                                                                                                                                                                       |
| [`ApplyAs`](#ImportedTrace.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition.                                                                                       |
| [`AttachedRefs`](#ImportedTrace.AttachedRefs)                                                 | AttachedRefs property.                                                                                                                                                                        |
| [`AverageAmbientTemperature`](#ImportedTrace.AverageAmbientTemperature)                       | AverageAmbientTemperature property.                                                                                                                                                           |
| [`BoundingBoxTolerance`](#ImportedTrace.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                                                                                                                |
| [`BucketToleranceCheck`](#ImportedTrace.BucketToleranceCheck)                                 | BucketToleranceCheck property.                                                                                                                                                                |
| [`BucketToleranceKey`](#ImportedTrace.BucketToleranceKey)                                     | BucketToleranceKey property.                                                                                                                                                                  |
| [`BucketToleranceValue`](#ImportedTrace.BucketToleranceValue)                                 | BucketToleranceValue property.                                                                                                                                                                |
| [`CFDSurface`](#ImportedTrace.CFDSurface)                                                     | CFDSurface property.                                                                                                                                                                          |
| [`Children`](#ImportedTrace.Children)                                                         | Gets the list of children.                                                                                                                                                                    |
| [`ClsId`](#ImportedTrace.ClsId)                                                               | ClsId property.                                                                                                                                                                               |
| [`Comments`](#ImportedTrace.Comments)                                                         | Gets the list of associated comments.                                                                                                                                                         |
| [`ComplexComponent`](#ImportedTrace.ComplexComponent)                                         | Gets or sets the DisplayMappedData.                                                                                                                                                           |
| [`CreateNameSelectionForMappedNodes`](#ImportedTrace.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                                                                                                                   |
| [`CreateNameSelectionForOutsideNodes`](#ImportedTrace.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                                                                                                                  |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedTrace.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                                                                                                                 |
| [`DataModelObjectCategory`](#ImportedTrace.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                                                                                                                  |
| [`DefineActiveSequenceBy`](#ImportedTrace.DefineActiveSequenceBy)                             | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`DefineByType`](#ImportedTrace.DefineByType)                                                 | DefineByType property.                                                                                                                                                                        |
| [`DiscretizationX`](#ImportedTrace.DiscretizationX)                                           | DiscretizationX property.                                                                                                                                                                     |
| [`DiscretizationY`](#ImportedTrace.DiscretizationY)                                           | DiscretizationY property.                                                                                                                                                                     |
| [`DisplayInteriorPoints`](#ImportedTrace.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                                                                                                               |
| [`DisplayProjectionPlane`](#ImportedTrace.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                                                                                                              |
| [`DisplaySourcePointIds`](#ImportedTrace.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                                                                                                               |
| [`DisplaySourcePoints`](#ImportedTrace.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                                                                                                                 |
| [`ExternalDataIdentifier`](#ImportedTrace.ExternalDataIdentifier)                             | ExternalDataIdentifier property.                                                                                                                                                              |
| [`ExternalLoadScopingType`](#ImportedTrace.ExternalLoadScopingType)                           | ExternalLoadScopingType property.                                                                                                                                                             |
| [`ExtrapolationTolerancePercent`](#ImportedTrace.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                                                                                                       |
| [`Figures`](#ImportedTrace.Figures)                                                           | Gets the list of associated figures.                                                                                                                                                          |
| [`Geometry`](#Geometry)                                                         | Geometry property.                                                                                                                                                                            |
| [`GroupingFolder`](#ImportedTrace.GroupingFolder)                                             | GroupingFolder property.                                                                                                                                                                      |
| [`HarmonicIndex`](#ImportedTrace.HarmonicIndex)                                               | Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.                                                                                                 |
| [`IconName`](#ImportedTrace.IconName)                                                         | IconName property.                                                                                                                                                                            |
| [`Images`](#ImportedTrace.Images)                                                             | Gets the list of associated images.                                                                                                                                                           |
| [`InternalObject`](#ImportedTrace.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                                                                                                            |
| [`Interpolation`](#ImportedTrace.Interpolation)                                               | Interpolation property.                                                                                                                                                                       |
| [`KrigingCorrelationFunction`](#ImportedTrace.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                                                                                                          |
| [`KrigingPolynom`](#ImportedTrace.KrigingPolynom)                                             | KrigingPolynom property.                                                                                                                                                                      |
| [`Layers`](#ImportedTrace.Layers)                                                             | Layers property.                                                                                                                                                                              |
| [`LegendMaximum`](#ImportedTrace.LegendMaximum)                                               | LegendMaximum property.                                                                                                                                                                       |
| [`LegendMinimum`](#ImportedTrace.LegendMinimum)                                               | LegendMinimum property.                                                                                                                                                                       |
| [`LegendRange`](#ImportedTrace.LegendRange)                                                   | LegendRange property.                                                                                                                                                                         |
| [`Limit`](#ImportedTrace.Limit)                                                               | Limit property.                                                                                                                                                                               |
| [`LoadDisplayComponentType`](#ImportedTrace.LoadDisplayComponentType)                         | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`LoadedAreaType`](#ImportedTrace.LoadedAreaType)                                             | LoadedAreaType property.                                                                                                                                                                      |
| [`Location`](#ImportedTrace.Location)                                                         | Gets or sets the Location.                                                                                                                                                                    |
| [`MappedNodesName`](#ImportedTrace.MappedNodesName)                                           | MappedNodesName property.                                                                                                                                                                     |
| [`Mapping`](#ImportedTrace.Mapping)                                                           | Mapping property.                                                                                                                                                                             |
| [`MappingControl`](#ImportedTrace.MappingControl)                                             | MappingControl property.                                                                                                                                                                      |
| [`MaxOutsideDistance`](#ImportedTrace.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                                                                                                                  |
| [`Method`](#ImportedTrace.Method)                                                             | Method property.                                                                                                                                                                              |
| [`Name`](#ImportedTrace.Name)                                                                 | Name property.                                                                                                                                                                                |
| [`NonCyclicLoadingType`](#ImportedTrace.NonCyclicLoadingType)                                 | Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries. |
| [`NumberOfPoints`](#ImportedTrace.NumberOfPoints)                                             | NumberOfPoints property.                                                                                                                                                                      |
| [`ObjectId`](#ImportedTrace.ObjectId)                                                         | ObjectId property.                                                                                                                                                                            |
| [`ObjectState`](#ImportedTrace.ObjectState)                                                   | ObjectState property.                                                                                                                                                                         |
| [`ObjectTags`](#ImportedTrace.ObjectTags)                                                     | ObjectTags property.                                                                                                                                                                          |
| [`OrientationRealignment`](#ImportedTrace.OrientationRealignment)                             | OrientationRealignment property.                                                                                                                                                              |
| [`OriginX`](#ImportedTrace.OriginX)                                                           | OriginX property.                                                                                                                                                                             |
| [`OriginY`](#ImportedTrace.OriginY)                                                           | OriginY property.                                                                                                                                                                             |
| [`OriginZ`](#ImportedTrace.OriginZ)                                                           | OriginZ property.                                                                                                                                                                             |
| [`OutsideDistanceCheck`](#ImportedTrace.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                                                                                                                |
| [`OutsideNodesName`](#ImportedTrace.OutsideNodesName)                                         | OutsideNodesName property.                                                                                                                                                                    |
| [`OutsideOption`](#ImportedTrace.OutsideOption)                                               | OutsideOption property.                                                                                                                                                                       |
| [`Parent`](#ImportedTrace.Parent)                                                             | Parent property.                                                                                                                                                                              |
| [`Pinball`](#ImportedTrace.Pinball)                                                           | Pinball property.                                                                                                                                                                             |
| [`Projection`](#ImportedTrace.Projection)                                                     | Projection property.                                                                                                                                                                          |
| [`Properties`](#ImportedTrace.Properties)                                                     | Gets the list of properties for this object.                                                                                                                                                  |
| [`RigidBodyTransformationType`](#ImportedTrace.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                                                                                                         |
| [`RigidTransformSourceCoordinateSystem`](#ImportedTrace.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                                                                                                                |
| [`RigidTransformTargetCoordinateSystem`](#ImportedTrace.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                                                                                                                |
| [`SharedRefBody`](#ImportedTrace.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                                                                                                               |
| [`ShellFace`](#ImportedTrace.ShellFace)                                                       | ShellFace property.                                                                                                                                                                           |
| [`ShellOffsetType`](#ImportedTrace.ShellOffsetType)                                           | Gets or sets the Offset Type for aligning the thickness of the surface body.                                                                                                                  |
| [`ShellThicknessFactor`](#ImportedTrace.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                                                                                                                |
| [`ShowWireframeData`](#ImportedTrace.ShowWireframeData)                                       | Gets or sets the ShowWireframeData.                                                                                                                                                           |
| [`SourceBodies`](#ImportedTrace.SourceBodies)                                                 | SourceBodies property.                                                                                                                                                                        |
| [`SourceComponent`](#ImportedTrace.SourceComponent)                                           | SourceComponent property.                                                                                                                                                                     |
| [`SourceMaximum`](#ImportedTrace.SourceMaximum)                                               | SourceMaximum property.                                                                                                                                                                       |
| [`SourceMinimum`](#ImportedTrace.SourceMinimum)                                               | SourceMinimum property.                                                                                                                                                                       |
| [`SourceZone`](#ImportedTrace.SourceZone)                                                     | SourceZone property.                                                                                                                                                                          |
| [`State`](#ImportedTrace.State)                                                               | State property.                                                                                                                                                                               |
| [`SupplementalFilmCoefficient`](#ImportedTrace.SupplementalFilmCoefficient)                   | SupplementalFilmCoefficient property.                                                                                                                                                         |
| [`Suppressed`](#ImportedTrace.Suppressed)                                                     | Gets or sets the Suppressed.                                                                                                                                                                  |
| [`TabularLoading`](#ImportedTrace.TabularLoading)                                             | TabularLoading property.                                                                                                                                                                      |
| [`TargetCoordinateSystem`](#ImportedTrace.TargetCoordinateSystem)                             | TargetCoordinateSystem property.                                                                                                                                                              |
| [`TemperatureType`](#ImportedTrace.TemperatureType)                                           | TemperatureType property.                                                                                                                                                                     |
| [`ThetaXY`](#ImportedTrace.ThetaXY)                                                           | ThetaXY property.                                                                                                                                                                             |
| [`ThetaYZ`](#ImportedTrace.ThetaYZ)                                                           | ThetaYZ property.                                                                                                                                                                             |
| [`ThetaZX`](#ImportedTrace.ThetaZX)                                                           | ThetaZX property.                                                                                                                                                                             |
| [`UnmappedNodesName`](#ImportedTrace.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                                                                                                                   |
| [`VariableType`](#ImportedTrace.VariableType)                                                 | VariableType property.                                                                                                                                                                        |
| [`Vias`](#ImportedTrace.Vias)                                                                 | Vias property.                                                                                                                                                                                |
| [`VisibleProperties`](#ImportedTrace.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                                                                                                                 |
| [`Weighting`](#ImportedTrace.Weighting)                                                       | Weighting property.                                                                                                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedTrace.ActiveRow"></a>

### *property* ImportedTrace.ActiveRow *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRow.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ActiveRowValue"></a>

### *property* ImportedTrace.ActiveRowValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRowValue.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Algorithm"></a>

### *property* ImportedTrace.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AnalysisOrderNumbers"></a>

### *property* ImportedTrace.AnalysisOrderNumbers *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisOrderNumbers property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AnalysisRpmSelection"></a>

### *property* ImportedTrace.AnalysisRpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSelection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AnalysisRpmSetIndex"></a>

### *property* ImportedTrace.AnalysisRpmSetIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetIndex property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AnalysisRpmSetRanges"></a>

### *property* ImportedTrace.AnalysisRpmSetRanges *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetRanges property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AnalysisSpecifyRpm"></a>

### *property* ImportedTrace.AnalysisSpecifyRpm *: Ansys.Mechanical.DataModel.Enums.ExternalLoadImportRPMType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisSpecifyRpm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AnalysisTimeOrFrequencysDefinition"></a>

### *property* ImportedTrace.AnalysisTimeOrFrequencysDefinition *: Ansys.Mechanical.DataModel.Enums.AnalysisTimeDefinitionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeOrFrequencysDefinition property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AnalysisTimeRangeMax"></a>

### *property* ImportedTrace.AnalysisTimeRangeMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMax property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AnalysisTimeRangeMin"></a>

### *property* ImportedTrace.AnalysisTimeRangeMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMin property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AppliedByType"></a>

### *property* ImportedTrace.AppliedByType *: Ansys.Mechanical.DataModel.Enums.LoadAppliedByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AppliedByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ApplyAs"></a>

### *property* ImportedTrace.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AttachedRefs"></a>

### *property* ImportedTrace.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AverageAmbientTemperature"></a>

### *property* ImportedTrace.AverageAmbientTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AverageAmbientTemperature property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.BoundingBoxTolerance"></a>

### *property* ImportedTrace.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.BucketToleranceCheck"></a>

### *property* ImportedTrace.BucketToleranceCheck *: Ansys.Mechanical.DataModel.Enums.OnOffType | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.BucketToleranceKey"></a>

### *property* ImportedTrace.BucketToleranceKey *: Ansys.Mechanical.DataModel.Enums.MappingToleranceKey | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceKey property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.BucketToleranceValue"></a>

### *property* ImportedTrace.BucketToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceValue property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CFDSurface"></a>

### *property* ImportedTrace.CFDSurface *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CFDSurface property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Children"></a>

### *property* ImportedTrace.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ClsId"></a>

### *property* ImportedTrace.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Comments"></a>

### *property* ImportedTrace.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ComplexComponent"></a>

### *property* ImportedTrace.ComplexComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayMappedData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedTrace.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedTrace.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedTrace.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DataModelObjectCategory"></a>

### *property* ImportedTrace.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DefineActiveSequenceBy"></a>

### *property* ImportedTrace.DefineActiveSequenceBy *: Ansys.Mechanical.DataModel.Enums.ExtLoadDefineActiveSequenceBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DefineByType"></a>

### *property* ImportedTrace.DefineByType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

DefineByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DiscretizationX"></a>

### *property* ImportedTrace.DiscretizationX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DiscretizationY"></a>

### *property* ImportedTrace.DiscretizationY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DisplayInteriorPoints"></a>

### *property* ImportedTrace.DisplayInteriorPoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DisplayProjectionPlane"></a>

### *property* ImportedTrace.DisplayProjectionPlane *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DisplaySourcePointIds"></a>

### *property* ImportedTrace.DisplaySourcePointIds *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DisplaySourcePoints"></a>

### *property* ImportedTrace.DisplaySourcePoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ExternalDataIdentifier"></a>

### *property* ImportedTrace.ExternalDataIdentifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalDataIdentifier property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ExternalLoadScopingType"></a>

### *property* ImportedTrace.ExternalLoadScopingType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadScopingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalLoadScopingType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ExtrapolationTolerancePercent"></a>

### *property* ImportedTrace.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Figures"></a>

### *property* ImportedTrace.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Geometry"></a>

### *property* ImportedTrace.Geometry *: Ansys.Mechanical.DataModel.Enums.MappingGeometryType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Geometry property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GroupingFolder"></a>

### *property* ImportedTrace.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.HarmonicIndex"></a>

### *property* ImportedTrace.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.IconName"></a>

### *property* ImportedTrace.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Images"></a>

### *property* ImportedTrace.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.InternalObject"></a>

### *property* ImportedTrace.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Interpolation"></a>

### *property* ImportedTrace.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.KrigingCorrelationFunction"></a>

### *property* ImportedTrace.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.KrigingPolynom"></a>

### *property* ImportedTrace.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Layers"></a>

### *property* ImportedTrace.Layers *: Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Layers property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.LegendMaximum"></a>

### *property* ImportedTrace.LegendMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.LegendMinimum"></a>

### *property* ImportedTrace.LegendMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.LegendRange"></a>

### *property* ImportedTrace.LegendRange *: Ansys.Mechanical.DataModel.Enums.LegendRangeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Limit"></a>

### *property* ImportedTrace.Limit *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.LoadDisplayComponentType"></a>

### *property* ImportedTrace.LoadDisplayComponentType *: Ansys.Mechanical.DataModel.Enums.ExtLoadDisplayComponentType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.LoadedAreaType"></a>

### *property* ImportedTrace.LoadedAreaType *: Ansys.Mechanical.DataModel.Enums.LoadedAreaType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LoadedAreaType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Location"></a>

### *property* ImportedTrace.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.MappedNodesName"></a>

### *property* ImportedTrace.MappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Mapping"></a>

### *property* ImportedTrace.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.MappingControl"></a>

### *property* ImportedTrace.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.MaxOutsideDistance"></a>

### *property* ImportedTrace.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Method"></a>

### *property* ImportedTrace.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Name"></a>

### *property* ImportedTrace.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.NonCyclicLoadingType"></a>

### *property* ImportedTrace.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.NumberOfPoints"></a>

### *property* ImportedTrace.NumberOfPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ObjectId"></a>

### *property* ImportedTrace.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ObjectState"></a>

### *property* ImportedTrace.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ObjectTags"></a>

### *property* ImportedTrace.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OrientationRealignment"></a>

### *property* ImportedTrace.OrientationRealignment *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OriginX"></a>

### *property* ImportedTrace.OriginX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OriginY"></a>

### *property* ImportedTrace.OriginY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OriginZ"></a>

### *property* ImportedTrace.OriginZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OutsideDistanceCheck"></a>

### *property* ImportedTrace.OutsideDistanceCheck *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OutsideNodesName"></a>

### *property* ImportedTrace.OutsideNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OutsideOption"></a>

### *property* ImportedTrace.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Parent"></a>

### *property* ImportedTrace.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Pinball"></a>

### *property* ImportedTrace.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Projection"></a>

### *property* ImportedTrace.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Properties"></a>

### *property* ImportedTrace.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.RigidBodyTransformationType"></a>

### *property* ImportedTrace.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedTrace.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedTrace.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SharedRefBody"></a>

### *property* ImportedTrace.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ShellFace"></a>

### *property* ImportedTrace.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellFace property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ShellOffsetType"></a>

### *property* ImportedTrace.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Offset Type for aligning the thickness of the surface body.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ShellThicknessFactor"></a>

### *property* ImportedTrace.ShellThicknessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ShowWireframeData"></a>

### *property* ImportedTrace.ShowWireframeData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowWireframeData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SourceBodies"></a>

### *property* ImportedTrace.SourceBodies *: Ansys.Mechanical.DataModel.Enums.ImportSourceBodies | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceBodies property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SourceComponent"></a>

### *property* ImportedTrace.SourceComponent *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceComponent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SourceMaximum"></a>

### *property* ImportedTrace.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SourceMinimum"></a>

### *property* ImportedTrace.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SourceZone"></a>

### *property* ImportedTrace.SourceZone *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceZone property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.State"></a>

### *property* ImportedTrace.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SupplementalFilmCoefficient"></a>

### *property* ImportedTrace.SupplementalFilmCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupplementalFilmCoefficient property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Suppressed"></a>

### *property* ImportedTrace.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.TabularLoading"></a>

### *property* ImportedTrace.TabularLoading *: Ansys.Mechanical.DataModel.Enums.ExternalLoadSteppingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TabularLoading property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.TargetCoordinateSystem"></a>

### *property* ImportedTrace.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.TemperatureType"></a>

### *property* ImportedTrace.TemperatureType *: Ansys.Mechanical.DataModel.Enums.AmbientTemperatureType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TemperatureType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ThetaXY"></a>

### *property* ImportedTrace.ThetaXY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaXY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ThetaYZ"></a>

### *property* ImportedTrace.ThetaYZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaYZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ThetaZX"></a>

### *property* ImportedTrace.ThetaZX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaZX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.UnmappedNodesName"></a>

### *property* ImportedTrace.UnmappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.VariableType"></a>

### *property* ImportedTrace.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Vias"></a>

### *property* ImportedTrace.Vias *: Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Vias property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.VisibleProperties"></a>

### *property* ImportedTrace.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Weighting"></a>

### *property* ImportedTrace.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedTrace.Activate"></a>

### ImportedTrace.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AddComment"></a>

### ImportedTrace.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AddFigure"></a>

### ImportedTrace.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AddImage"></a>

### ImportedTrace.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AddMappingValidation"></a>

### ImportedTrace.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ClearGeneratedData"></a>

### ImportedTrace.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Copy"></a>

### ImportedTrace.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CopyTo"></a>

### ImportedTrace.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateObjRef"></a>

### ImportedTrace.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateParameter"></a>

### ImportedTrace.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateTabbedFile"></a>

### ImportedTrace.CreateTabbedFile() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets mapped values.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Cut"></a>

### ImportedTrace.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Delete"></a>

### ImportedTrace.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Duplicate"></a>

### ImportedTrace.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Equals"></a>

### ImportedTrace.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ExportToTextFile"></a>

### ImportedTrace.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ImportedTrace.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetAPIName"></a>

### ImportedTrace.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetActivateAtLoadStep"></a>

### ImportedTrace.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetAllProperties"></a>

### ImportedTrace.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetChildren"></a>

### ImportedTrace.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedTrace.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetDetailsView"></a>

### ImportedTrace.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetElementsCoordinateSystems"></a>

### ImportedTrace.GetElementsCoordinateSystems() → System.Collections.Generic.Dictionary[System.Int64, [Ansys.ACT.Common.CoordinateSystem](../../../Common/CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.CoordinateSystem)]

Get  the elements coordinate systems dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetElementsOrientations"></a>

### ImportedTrace.GetElementsOrientations() → System.Collections.Generic.Dictionary[System.Int64, Ansys.ACT.Automation.Mechanical.ElementOrientationInfo]

Get  the elements orientations dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetEnumName"></a>

### ImportedTrace.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetHashCode"></a>

### ImportedTrace.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetIconFile"></a>

### ImportedTrace.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetLifetimeService"></a>

### ImportedTrace.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetObjectData"></a>

### ImportedTrace.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetParameter"></a>

### ImportedTrace.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetPath"></a>

### ImportedTrace.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetPropertyName"></a>

### ImportedTrace.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetPropertyValue"></a>

### ImportedTrace.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetTableByName"></a>

### ImportedTrace.GetTableByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), bUseWorksheetItfToGetTable: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow]

GetTableByName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetVisibleProperties"></a>

### ImportedTrace.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetVisiblePropertyNames"></a>

### ImportedTrace.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GroupAllSimilarChildren"></a>

### ImportedTrace.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GroupSimilarObjects"></a>

### ImportedTrace.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Import"></a>

### ImportedTrace.Import() → [None](https://docs.python.org/3/builtins/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ImportLoad"></a>

### ImportedTrace.ImportLoad() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.InitializeLifetimeService"></a>

### ImportedTrace.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.IsPropertyEditable"></a>

### ImportedTrace.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedTrace.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.IsPropertyVisible"></a>

### ImportedTrace.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedTrace.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Paste"></a>

### ImportedTrace.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.PropertyByAPIName"></a>

### ImportedTrace.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.PropertyById"></a>

### ImportedTrace.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.PropertyByName"></a>

### ImportedTrace.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ReloadConfiguration"></a>

### ImportedTrace.ReloadConfiguration() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.RemoveFromGroup"></a>

### ImportedTrace.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.RemoveParameter"></a>

### ImportedTrace.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SetActivateAtLoadStep"></a>

### ImportedTrace.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SyncAnalysisFrequencies"></a>

### ImportedTrace.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.getFieldInterpolationProxy"></a>

### ImportedTrace.getFieldInterpolationProxy() → Ansys.ACT.Automation.Mechanical.ImportedLoads.CImportProxyWrapper

getFieldInterpolationProxy method.

<!-- !! processed by numpydoc !! -->

