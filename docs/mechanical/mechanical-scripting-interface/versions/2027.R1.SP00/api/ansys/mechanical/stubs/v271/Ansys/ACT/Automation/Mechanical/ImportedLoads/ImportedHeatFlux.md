# `ImportedHeatFlux`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatFlux"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatFlux(internalObject: Any)

<a id="ImportedHeatFlux"></a>

### *class* ImportedHeatFlux(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedHeatFlux.Activate)                                         | Activate the current object.                                                                  |
| [`AddComment`](#ImportedHeatFlux.AddComment)                                     | Creates a new child Comment.                                                                  |
| [`AddFigure`](#ImportedHeatFlux.AddFigure)                                       | Creates a new child Figure.                                                                   |
| [`AddImage`](#ImportedHeatFlux.AddImage)                                         | Creates a new child Image.                                                                    |
| [`AddMappingValidation`](#ImportedHeatFlux.AddMappingValidation)                 | Creates a new MappingValidation                                                               |
| [`ClearGeneratedData`](#ImportedHeatFlux.ClearGeneratedData)                     | Run the ClearGeneratedData action.                                                            |
| [`Copy`](#ImportedHeatFlux.Copy)                                                 | Copies the current DataModelObject.                                                           |
| [`CopyTo`](#ImportedHeatFlux.CopyTo)                                             | Copies all visible properties from this object to another.                                    |
| [`CreateObjRef`](#ImportedHeatFlux.CreateObjRef)                                 | CreateObjRef method.                                                                          |
| [`CreateParameter`](#ImportedHeatFlux.CreateParameter)                           | Creates a new parameter for a Property.                                                       |
| [`CreateTabbedFile`](#ImportedHeatFlux.CreateTabbedFile)                         | Gets mapped values.                                                                           |
| [`Cut`](#ImportedHeatFlux.Cut)                                                   | Cuts the current DataModelObject.                                                             |
| [`Delete`](#ImportedHeatFlux.Delete)                                             | Run the Delete action.                                                                        |
| [`Duplicate`](#ImportedHeatFlux.Duplicate)                                       | Creates a copy of the current DataModelObject.                                                |
| [`Equals`](#ImportedHeatFlux.Equals)                                             | Equals method.                                                                                |
| [`ExportToTextFile`](#ImportedHeatFlux.ExportToTextFile)                         | ExportToTextFile method.                                                                      |
| [`GetAPIName`](#ImportedHeatFlux.GetAPIName)                                     | Property name bound to dispId.                                                                |
| [`GetActivateAtLoadStep`](#ImportedHeatFlux.GetActivateAtLoadStep)               | GetActivateAtLoadStep method.                                                                 |
| [`GetAllProperties`](#ImportedHeatFlux.GetAllProperties)                         | GetAllProperties method.                                                                      |
| [`GetChildren`](#ImportedHeatFlux.GetChildren)                                   | Gets the list of children, filtered by type.                                                  |
| [`GetDetailsView`](#ImportedHeatFlux.GetDetailsView)                             | GetDetailsView method.                                                                        |
| [`GetElementsCoordinateSystems`](#ImportedHeatFlux.GetElementsCoordinateSystems) | Get  the elements coordinate systems dictionary.                                              |
| [`GetElementsOrientations`](#ImportedHeatFlux.GetElementsOrientations)           | Get  the elements orientations dictionary.                                                    |
| [`GetEnumName`](#ImportedHeatFlux.GetEnumName)                                   | Enum name bound to value                                                                      |
| [`GetHashCode`](#ImportedHeatFlux.GetHashCode)                                   | GetHashCode method.                                                                           |
| [`GetIconFile`](#ImportedHeatFlux.GetIconFile)                                   | GetIconFile method.                                                                           |
| [`GetLifetimeService`](#ImportedHeatFlux.GetLifetimeService)                     | GetLifetimeService method.                                                                    |
| [`GetObjectData`](#ImportedHeatFlux.GetObjectData)                               | GetObjectData method.                                                                         |
| [`GetParameter`](#ImportedHeatFlux.GetParameter)                                 | Gets the parameter corresponding to the given property.                                       |
| [`GetPath`](#ImportedHeatFlux.GetPath)                                           | GetPath method.                                                                               |
| [`GetPropertyName`](#ImportedHeatFlux.GetPropertyName)                           | GetPropertyName method.                                                                       |
| [`GetPropertyValue`](#ImportedHeatFlux.GetPropertyValue)                         | GetPropertyValue method.                                                                      |
| [`GetTableByName`](#ImportedHeatFlux.GetTableByName)                             | GetTableByName method.                                                                        |
| [`GetVisibleProperties`](#ImportedHeatFlux.GetVisibleProperties)                 | GetVisibleProperties method.                                                                  |
| [`GetVisiblePropertyNames`](#ImportedHeatFlux.GetVisiblePropertyNames)           | GetVisiblePropertyNames method.                                                               |
| [`GroupAllSimilarChildren`](#ImportedHeatFlux.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                                       |
| [`GroupSimilarObjects`](#ImportedHeatFlux.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                                           |
| [`Import`](#ImportedHeatFlux.Import)                                             | Import.                                                                                       |
| [`ImportLoad`](#ImportedHeatFlux.ImportLoad)                                     | Run the ImportLoad action.                                                                    |
| [`InitializeLifetimeService`](#ImportedHeatFlux.InitializeLifetimeService)       | InitializeLifetimeService method.                                                             |
| [`IsPropertyEditable`](#ImportedHeatFlux.IsPropertyEditable)                     | IsPropertyEditable method.                                                                    |
| [`IsPropertyVisible`](#ImportedHeatFlux.IsPropertyVisible)                       | IsPropertyVisible method.                                                                     |
| [`Paste`](#ImportedHeatFlux.Paste)                                               | Pastes to the current DataModelObject context.                                                |
| [`PropertyByAPIName`](#ImportedHeatFlux.PropertyByAPIName)                       | Get a property by its API name.                                                               |
| [`PropertyById`](#ImportedHeatFlux.PropertyById)                                 | PropertyById method.                                                                          |
| [`PropertyByName`](#ImportedHeatFlux.PropertyByName)                             | Get a property by its unique name.                                                            |
| [`ReloadConfiguration`](#ImportedHeatFlux.ReloadConfiguration)                   | Reload the Imported Load's setup from its associated configuration file (if available).       |
| [`RemoveFromGroup`](#ImportedHeatFlux.RemoveFromGroup)                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.   |
| [`RemoveParameter`](#ImportedHeatFlux.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property.             |
| [`SetActivateAtLoadStep`](#ImportedHeatFlux.SetActivateAtLoadStep)               | SetActivateAtLoadStep method.                                                                 |
| [`SyncAnalysisFrequencies`](#ImportedHeatFlux.SyncAnalysisFrequencies)           | Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load. |
| [`getFieldInterpolationProxy`](#ImportedHeatFlux.getFieldInterpolationProxy)     | getFieldInterpolationProxy method.                                                            |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveRow`](#ImportedHeatFlux.ActiveRow)                                                       | Gets or sets the ActiveRow.                                                                                                                                                                   |
| [`ActiveRowValue`](#ImportedHeatFlux.ActiveRowValue)                                             | Gets or sets the ActiveRowValue.                                                                                                                                                              |
| [`Algorithm`](#ImportedHeatFlux.Algorithm)                                                       | Algorithm property.                                                                                                                                                                           |
| [`AnalysisOrderNumbers`](#ImportedHeatFlux.AnalysisOrderNumbers)                                 | AnalysisOrderNumbers property.                                                                                                                                                                |
| [`AnalysisRpmSelection`](#ImportedHeatFlux.AnalysisRpmSelection)                                 | AnalysisRpmSelection property.                                                                                                                                                                |
| [`AnalysisRpmSetIndex`](#ImportedHeatFlux.AnalysisRpmSetIndex)                                   | AnalysisRpmSetIndex property.                                                                                                                                                                 |
| [`AnalysisRpmSetRanges`](#ImportedHeatFlux.AnalysisRpmSetRanges)                                 | AnalysisRpmSetRanges property.                                                                                                                                                                |
| [`AnalysisSpecifyRpm`](#ImportedHeatFlux.AnalysisSpecifyRpm)                                     | AnalysisSpecifyRpm property.                                                                                                                                                                  |
| [`AnalysisTimeOrFrequencysDefinition`](#ImportedHeatFlux.AnalysisTimeOrFrequencysDefinition)     | AnalysisTimeOrFrequencysDefinition property.                                                                                                                                                  |
| [`AnalysisTimeRangeMax`](#ImportedHeatFlux.AnalysisTimeRangeMax)                                 | AnalysisTimeRangeMax property.                                                                                                                                                                |
| [`AnalysisTimeRangeMin`](#ImportedHeatFlux.AnalysisTimeRangeMin)                                 | AnalysisTimeRangeMin property.                                                                                                                                                                |
| [`AppliedByType`](#ImportedHeatFlux.AppliedByType)                                               | AppliedByType property.                                                                                                                                                                       |
| [`ApplyAs`](#ImportedHeatFlux.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition.                                                                                       |
| [`AttachedRefs`](#ImportedHeatFlux.AttachedRefs)                                                 | AttachedRefs property.                                                                                                                                                                        |
| [`AverageAmbientTemperature`](#ImportedHeatFlux.AverageAmbientTemperature)                       | AverageAmbientTemperature property.                                                                                                                                                           |
| [`BoundingBoxTolerance`](#ImportedHeatFlux.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                                                                                                                |
| [`BucketToleranceCheck`](#ImportedHeatFlux.BucketToleranceCheck)                                 | BucketToleranceCheck property.                                                                                                                                                                |
| [`BucketToleranceKey`](#ImportedHeatFlux.BucketToleranceKey)                                     | BucketToleranceKey property.                                                                                                                                                                  |
| [`BucketToleranceValue`](#ImportedHeatFlux.BucketToleranceValue)                                 | BucketToleranceValue property.                                                                                                                                                                |
| [`CFDSurface`](#ImportedHeatFlux.CFDSurface)                                                     | CFDSurface property.                                                                                                                                                                          |
| [`Children`](#ImportedHeatFlux.Children)                                                         | Gets the list of children.                                                                                                                                                                    |
| [`ClsId`](#ImportedHeatFlux.ClsId)                                                               | ClsId property.                                                                                                                                                                               |
| [`Comments`](#ImportedHeatFlux.Comments)                                                         | Gets the list of associated comments.                                                                                                                                                         |
| [`ComplexComponent`](#ImportedHeatFlux.ComplexComponent)                                         | Gets or sets the DisplayMappedData.                                                                                                                                                           |
| [`CreateNameSelectionForMappedNodes`](#ImportedHeatFlux.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                                                                                                                   |
| [`CreateNameSelectionForOutsideNodes`](#ImportedHeatFlux.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                                                                                                                  |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedHeatFlux.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                                                                                                                 |
| [`DataModelObjectCategory`](#ImportedHeatFlux.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                                                                                                                  |
| [`DefineActiveSequenceBy`](#ImportedHeatFlux.DefineActiveSequenceBy)                             | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`DefineByType`](#ImportedHeatFlux.DefineByType)                                                 | DefineByType property.                                                                                                                                                                        |
| [`DiscretizationX`](#ImportedHeatFlux.DiscretizationX)                                           | DiscretizationX property.                                                                                                                                                                     |
| [`DiscretizationY`](#ImportedHeatFlux.DiscretizationY)                                           | DiscretizationY property.                                                                                                                                                                     |
| [`DisplayInteriorPoints`](#ImportedHeatFlux.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                                                                                                               |
| [`DisplayProjectionPlane`](#ImportedHeatFlux.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                                                                                                              |
| [`DisplaySourcePointIds`](#ImportedHeatFlux.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                                                                                                               |
| [`DisplaySourcePoints`](#ImportedHeatFlux.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                                                                                                                 |
| [`ExternalDataIdentifier`](#ImportedHeatFlux.ExternalDataIdentifier)                             | ExternalDataIdentifier property.                                                                                                                                                              |
| [`ExternalLoadScopingType`](#ImportedHeatFlux.ExternalLoadScopingType)                           | ExternalLoadScopingType property.                                                                                                                                                             |
| [`ExtrapolationTolerancePercent`](#ImportedHeatFlux.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                                                                                                       |
| [`Figures`](#ImportedHeatFlux.Figures)                                                           | Gets the list of associated figures.                                                                                                                                                          |
| [`Geometry`](#Geometry)                                                            | Geometry property.                                                                                                                                                                            |
| [`GroupingFolder`](#ImportedHeatFlux.GroupingFolder)                                             | GroupingFolder property.                                                                                                                                                                      |
| [`HarmonicIndex`](#ImportedHeatFlux.HarmonicIndex)                                               | Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.                                                                                                 |
| [`IconName`](#ImportedHeatFlux.IconName)                                                         | IconName property.                                                                                                                                                                            |
| [`Images`](#ImportedHeatFlux.Images)                                                             | Gets the list of associated images.                                                                                                                                                           |
| [`InternalObject`](#ImportedHeatFlux.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                                                                                                            |
| [`Interpolation`](#ImportedHeatFlux.Interpolation)                                               | Interpolation property.                                                                                                                                                                       |
| [`KrigingCorrelationFunction`](#ImportedHeatFlux.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                                                                                                          |
| [`KrigingPolynom`](#ImportedHeatFlux.KrigingPolynom)                                             | KrigingPolynom property.                                                                                                                                                                      |
| [`LegendMaximum`](#ImportedHeatFlux.LegendMaximum)                                               | LegendMaximum property.                                                                                                                                                                       |
| [`LegendMinimum`](#ImportedHeatFlux.LegendMinimum)                                               | LegendMinimum property.                                                                                                                                                                       |
| [`LegendRange`](#ImportedHeatFlux.LegendRange)                                                   | LegendRange property.                                                                                                                                                                         |
| [`Limit`](#ImportedHeatFlux.Limit)                                                               | Limit property.                                                                                                                                                                               |
| [`LoadDisplayComponentType`](#ImportedHeatFlux.LoadDisplayComponentType)                         | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`LoadedAreaType`](#ImportedHeatFlux.LoadedAreaType)                                             | LoadedAreaType property.                                                                                                                                                                      |
| [`Location`](#ImportedHeatFlux.Location)                                                         | Gets or sets the Location.                                                                                                                                                                    |
| [`MappedNodesName`](#ImportedHeatFlux.MappedNodesName)                                           | MappedNodesName property.                                                                                                                                                                     |
| [`Mapping`](#ImportedHeatFlux.Mapping)                                                           | Mapping property.                                                                                                                                                                             |
| [`MappingControl`](#ImportedHeatFlux.MappingControl)                                             | MappingControl property.                                                                                                                                                                      |
| [`MaxOutsideDistance`](#ImportedHeatFlux.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                                                                                                                  |
| [`Method`](#ImportedHeatFlux.Method)                                                             | Method property.                                                                                                                                                                              |
| [`Name`](#ImportedHeatFlux.Name)                                                                 | Name property.                                                                                                                                                                                |
| [`NonCyclicLoadingType`](#ImportedHeatFlux.NonCyclicLoadingType)                                 | Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries. |
| [`NumberOfPoints`](#ImportedHeatFlux.NumberOfPoints)                                             | NumberOfPoints property.                                                                                                                                                                      |
| [`ObjectId`](#ImportedHeatFlux.ObjectId)                                                         | ObjectId property.                                                                                                                                                                            |
| [`ObjectState`](#ImportedHeatFlux.ObjectState)                                                   | ObjectState property.                                                                                                                                                                         |
| [`ObjectTags`](#ImportedHeatFlux.ObjectTags)                                                     | ObjectTags property.                                                                                                                                                                          |
| [`OrientationRealignment`](#ImportedHeatFlux.OrientationRealignment)                             | OrientationRealignment property.                                                                                                                                                              |
| [`OriginX`](#ImportedHeatFlux.OriginX)                                                           | OriginX property.                                                                                                                                                                             |
| [`OriginY`](#ImportedHeatFlux.OriginY)                                                           | OriginY property.                                                                                                                                                                             |
| [`OriginZ`](#ImportedHeatFlux.OriginZ)                                                           | OriginZ property.                                                                                                                                                                             |
| [`OutsideDistanceCheck`](#ImportedHeatFlux.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                                                                                                                |
| [`OutsideNodesName`](#ImportedHeatFlux.OutsideNodesName)                                         | OutsideNodesName property.                                                                                                                                                                    |
| [`OutsideOption`](#ImportedHeatFlux.OutsideOption)                                               | OutsideOption property.                                                                                                                                                                       |
| [`Parent`](#ImportedHeatFlux.Parent)                                                             | Parent property.                                                                                                                                                                              |
| [`Pinball`](#ImportedHeatFlux.Pinball)                                                           | Pinball property.                                                                                                                                                                             |
| [`Projection`](#ImportedHeatFlux.Projection)                                                     | Projection property.                                                                                                                                                                          |
| [`Properties`](#ImportedHeatFlux.Properties)                                                     | Gets the list of properties for this object.                                                                                                                                                  |
| [`RigidBodyTransformationType`](#ImportedHeatFlux.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                                                                                                         |
| [`RigidTransformSourceCoordinateSystem`](#ImportedHeatFlux.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                                                                                                                |
| [`RigidTransformTargetCoordinateSystem`](#ImportedHeatFlux.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                                                                                                                |
| [`SharedRefBody`](#ImportedHeatFlux.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                                                                                                               |
| [`ShellFace`](#ImportedHeatFlux.ShellFace)                                                       | ShellFace property.                                                                                                                                                                           |
| [`ShellOffsetType`](#ImportedHeatFlux.ShellOffsetType)                                           | Gets or sets the Offset Type for aligning the thickness of the surface body.                                                                                                                  |
| [`ShellThicknessFactor`](#ImportedHeatFlux.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                                                                                                                |
| [`ShowWireframeData`](#ImportedHeatFlux.ShowWireframeData)                                       | Gets or sets the ShowWireframeData.                                                                                                                                                           |
| [`SourceBodies`](#ImportedHeatFlux.SourceBodies)                                                 | SourceBodies property.                                                                                                                                                                        |
| [`SourceComponent`](#ImportedHeatFlux.SourceComponent)                                           | SourceComponent property.                                                                                                                                                                     |
| [`SourceMaximum`](#ImportedHeatFlux.SourceMaximum)                                               | SourceMaximum property.                                                                                                                                                                       |
| [`SourceMinimum`](#ImportedHeatFlux.SourceMinimum)                                               | SourceMinimum property.                                                                                                                                                                       |
| [`SourceZone`](#ImportedHeatFlux.SourceZone)                                                     | SourceZone property.                                                                                                                                                                          |
| [`State`](#ImportedHeatFlux.State)                                                               | State property.                                                                                                                                                                               |
| [`SupplementalFilmCoefficient`](#ImportedHeatFlux.SupplementalFilmCoefficient)                   | SupplementalFilmCoefficient property.                                                                                                                                                         |
| [`Suppressed`](#ImportedHeatFlux.Suppressed)                                                     | Gets or sets the Suppressed.                                                                                                                                                                  |
| [`TabularLoading`](#ImportedHeatFlux.TabularLoading)                                             | TabularLoading property.                                                                                                                                                                      |
| [`TargetCoordinateSystem`](#ImportedHeatFlux.TargetCoordinateSystem)                             | TargetCoordinateSystem property.                                                                                                                                                              |
| [`TemperatureType`](#ImportedHeatFlux.TemperatureType)                                           | TemperatureType property.                                                                                                                                                                     |
| [`ThetaXY`](#ImportedHeatFlux.ThetaXY)                                                           | ThetaXY property.                                                                                                                                                                             |
| [`ThetaYZ`](#ImportedHeatFlux.ThetaYZ)                                                           | ThetaYZ property.                                                                                                                                                                             |
| [`ThetaZX`](#ImportedHeatFlux.ThetaZX)                                                           | ThetaZX property.                                                                                                                                                                             |
| [`UnmappedNodesName`](#ImportedHeatFlux.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                                                                                                                   |
| [`VariableType`](#ImportedHeatFlux.VariableType)                                                 | VariableType property.                                                                                                                                                                        |
| [`VisibleProperties`](#ImportedHeatFlux.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                                                                                                                 |
| [`Weighting`](#ImportedHeatFlux.Weighting)                                                       | Weighting property.                                                                                                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedHeatFlux.ActiveRow"></a>

### *property* ImportedHeatFlux.ActiveRow *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRow.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ActiveRowValue"></a>

### *property* ImportedHeatFlux.ActiveRowValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRowValue.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Algorithm"></a>

### *property* ImportedHeatFlux.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AnalysisOrderNumbers"></a>

### *property* ImportedHeatFlux.AnalysisOrderNumbers *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisOrderNumbers property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AnalysisRpmSelection"></a>

### *property* ImportedHeatFlux.AnalysisRpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSelection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AnalysisRpmSetIndex"></a>

### *property* ImportedHeatFlux.AnalysisRpmSetIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetIndex property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AnalysisRpmSetRanges"></a>

### *property* ImportedHeatFlux.AnalysisRpmSetRanges *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetRanges property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AnalysisSpecifyRpm"></a>

### *property* ImportedHeatFlux.AnalysisSpecifyRpm *: Ansys.Mechanical.DataModel.Enums.ExternalLoadImportRPMType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisSpecifyRpm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AnalysisTimeOrFrequencysDefinition"></a>

### *property* ImportedHeatFlux.AnalysisTimeOrFrequencysDefinition *: Ansys.Mechanical.DataModel.Enums.AnalysisTimeDefinitionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeOrFrequencysDefinition property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AnalysisTimeRangeMax"></a>

### *property* ImportedHeatFlux.AnalysisTimeRangeMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMax property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AnalysisTimeRangeMin"></a>

### *property* ImportedHeatFlux.AnalysisTimeRangeMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMin property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AppliedByType"></a>

### *property* ImportedHeatFlux.AppliedByType *: Ansys.Mechanical.DataModel.Enums.LoadAppliedByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AppliedByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ApplyAs"></a>

### *property* ImportedHeatFlux.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AttachedRefs"></a>

### *property* ImportedHeatFlux.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AverageAmbientTemperature"></a>

### *property* ImportedHeatFlux.AverageAmbientTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AverageAmbientTemperature property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.BoundingBoxTolerance"></a>

### *property* ImportedHeatFlux.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.BucketToleranceCheck"></a>

### *property* ImportedHeatFlux.BucketToleranceCheck *: Ansys.Mechanical.DataModel.Enums.OnOffType | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.BucketToleranceKey"></a>

### *property* ImportedHeatFlux.BucketToleranceKey *: Ansys.Mechanical.DataModel.Enums.MappingToleranceKey | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceKey property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.BucketToleranceValue"></a>

### *property* ImportedHeatFlux.BucketToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceValue property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CFDSurface"></a>

### *property* ImportedHeatFlux.CFDSurface *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CFDSurface property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Children"></a>

### *property* ImportedHeatFlux.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ClsId"></a>

### *property* ImportedHeatFlux.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Comments"></a>

### *property* ImportedHeatFlux.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ComplexComponent"></a>

### *property* ImportedHeatFlux.ComplexComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayMappedData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedHeatFlux.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedHeatFlux.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedHeatFlux.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DataModelObjectCategory"></a>

### *property* ImportedHeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DefineActiveSequenceBy"></a>

### *property* ImportedHeatFlux.DefineActiveSequenceBy *: Ansys.Mechanical.DataModel.Enums.ExtLoadDefineActiveSequenceBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DefineByType"></a>

### *property* ImportedHeatFlux.DefineByType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

DefineByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DiscretizationX"></a>

### *property* ImportedHeatFlux.DiscretizationX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DiscretizationY"></a>

### *property* ImportedHeatFlux.DiscretizationY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplayInteriorPoints"></a>

### *property* ImportedHeatFlux.DisplayInteriorPoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplayProjectionPlane"></a>

### *property* ImportedHeatFlux.DisplayProjectionPlane *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplaySourcePointIds"></a>

### *property* ImportedHeatFlux.DisplaySourcePointIds *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplaySourcePoints"></a>

### *property* ImportedHeatFlux.DisplaySourcePoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ExternalDataIdentifier"></a>

### *property* ImportedHeatFlux.ExternalDataIdentifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalDataIdentifier property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ExternalLoadScopingType"></a>

### *property* ImportedHeatFlux.ExternalLoadScopingType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadScopingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalLoadScopingType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ExtrapolationTolerancePercent"></a>

### *property* ImportedHeatFlux.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Figures"></a>

### *property* ImportedHeatFlux.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Geometry"></a>

### *property* ImportedHeatFlux.Geometry *: Ansys.Mechanical.DataModel.Enums.MappingGeometryType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Geometry property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GroupingFolder"></a>

### *property* ImportedHeatFlux.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.HarmonicIndex"></a>

### *property* ImportedHeatFlux.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.IconName"></a>

### *property* ImportedHeatFlux.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Images"></a>

### *property* ImportedHeatFlux.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.InternalObject"></a>

### *property* ImportedHeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Interpolation"></a>

### *property* ImportedHeatFlux.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.KrigingCorrelationFunction"></a>

### *property* ImportedHeatFlux.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.KrigingPolynom"></a>

### *property* ImportedHeatFlux.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.LegendMaximum"></a>

### *property* ImportedHeatFlux.LegendMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.LegendMinimum"></a>

### *property* ImportedHeatFlux.LegendMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.LegendRange"></a>

### *property* ImportedHeatFlux.LegendRange *: Ansys.Mechanical.DataModel.Enums.LegendRangeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Limit"></a>

### *property* ImportedHeatFlux.Limit *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.LoadDisplayComponentType"></a>

### *property* ImportedHeatFlux.LoadDisplayComponentType *: Ansys.Mechanical.DataModel.Enums.ExtLoadDisplayComponentType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.LoadedAreaType"></a>

### *property* ImportedHeatFlux.LoadedAreaType *: Ansys.Mechanical.DataModel.Enums.LoadedAreaType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LoadedAreaType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Location"></a>

### *property* ImportedHeatFlux.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.MappedNodesName"></a>

### *property* ImportedHeatFlux.MappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Mapping"></a>

### *property* ImportedHeatFlux.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.MappingControl"></a>

### *property* ImportedHeatFlux.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.MaxOutsideDistance"></a>

### *property* ImportedHeatFlux.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Method"></a>

### *property* ImportedHeatFlux.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Name"></a>

### *property* ImportedHeatFlux.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.NonCyclicLoadingType"></a>

### *property* ImportedHeatFlux.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.NumberOfPoints"></a>

### *property* ImportedHeatFlux.NumberOfPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ObjectId"></a>

### *property* ImportedHeatFlux.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ObjectState"></a>

### *property* ImportedHeatFlux.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ObjectTags"></a>

### *property* ImportedHeatFlux.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OrientationRealignment"></a>

### *property* ImportedHeatFlux.OrientationRealignment *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OriginX"></a>

### *property* ImportedHeatFlux.OriginX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OriginY"></a>

### *property* ImportedHeatFlux.OriginY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OriginZ"></a>

### *property* ImportedHeatFlux.OriginZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OutsideDistanceCheck"></a>

### *property* ImportedHeatFlux.OutsideDistanceCheck *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OutsideNodesName"></a>

### *property* ImportedHeatFlux.OutsideNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OutsideOption"></a>

### *property* ImportedHeatFlux.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Parent"></a>

### *property* ImportedHeatFlux.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Pinball"></a>

### *property* ImportedHeatFlux.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Projection"></a>

### *property* ImportedHeatFlux.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Properties"></a>

### *property* ImportedHeatFlux.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RigidBodyTransformationType"></a>

### *property* ImportedHeatFlux.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedHeatFlux.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedHeatFlux.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SharedRefBody"></a>

### *property* ImportedHeatFlux.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ShellFace"></a>

### *property* ImportedHeatFlux.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellFace property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ShellOffsetType"></a>

### *property* ImportedHeatFlux.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Offset Type for aligning the thickness of the surface body.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ShellThicknessFactor"></a>

### *property* ImportedHeatFlux.ShellThicknessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ShowWireframeData"></a>

### *property* ImportedHeatFlux.ShowWireframeData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowWireframeData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SourceBodies"></a>

### *property* ImportedHeatFlux.SourceBodies *: Ansys.Mechanical.DataModel.Enums.ImportSourceBodies | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceBodies property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SourceComponent"></a>

### *property* ImportedHeatFlux.SourceComponent *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceComponent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SourceMaximum"></a>

### *property* ImportedHeatFlux.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SourceMinimum"></a>

### *property* ImportedHeatFlux.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SourceZone"></a>

### *property* ImportedHeatFlux.SourceZone *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceZone property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.State"></a>

### *property* ImportedHeatFlux.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SupplementalFilmCoefficient"></a>

### *property* ImportedHeatFlux.SupplementalFilmCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupplementalFilmCoefficient property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Suppressed"></a>

### *property* ImportedHeatFlux.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.TabularLoading"></a>

### *property* ImportedHeatFlux.TabularLoading *: Ansys.Mechanical.DataModel.Enums.ExternalLoadSteppingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TabularLoading property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.TargetCoordinateSystem"></a>

### *property* ImportedHeatFlux.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.TemperatureType"></a>

### *property* ImportedHeatFlux.TemperatureType *: Ansys.Mechanical.DataModel.Enums.AmbientTemperatureType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TemperatureType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ThetaXY"></a>

### *property* ImportedHeatFlux.ThetaXY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaXY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ThetaYZ"></a>

### *property* ImportedHeatFlux.ThetaYZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaYZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ThetaZX"></a>

### *property* ImportedHeatFlux.ThetaZX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaZX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.UnmappedNodesName"></a>

### *property* ImportedHeatFlux.UnmappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.VariableType"></a>

### *property* ImportedHeatFlux.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.VisibleProperties"></a>

### *property* ImportedHeatFlux.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Weighting"></a>

### *property* ImportedHeatFlux.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedHeatFlux.Activate"></a>

### ImportedHeatFlux.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AddComment"></a>

### ImportedHeatFlux.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AddFigure"></a>

### ImportedHeatFlux.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AddImage"></a>

### ImportedHeatFlux.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AddMappingValidation"></a>

### ImportedHeatFlux.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ClearGeneratedData"></a>

### ImportedHeatFlux.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Copy"></a>

### ImportedHeatFlux.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CopyTo"></a>

### ImportedHeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateObjRef"></a>

### ImportedHeatFlux.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateParameter"></a>

### ImportedHeatFlux.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateTabbedFile"></a>

### ImportedHeatFlux.CreateTabbedFile() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets mapped values.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Cut"></a>

### ImportedHeatFlux.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Delete"></a>

### ImportedHeatFlux.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Duplicate"></a>

### ImportedHeatFlux.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Equals"></a>

### ImportedHeatFlux.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ExportToTextFile"></a>

### ImportedHeatFlux.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ImportedHeatFlux.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetAPIName"></a>

### ImportedHeatFlux.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetActivateAtLoadStep"></a>

### ImportedHeatFlux.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetAllProperties"></a>

### ImportedHeatFlux.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetChildren"></a>

### ImportedHeatFlux.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedHeatFlux.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetDetailsView"></a>

### ImportedHeatFlux.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetElementsCoordinateSystems"></a>

### ImportedHeatFlux.GetElementsCoordinateSystems() → System.Collections.Generic.Dictionary[System.Int64, [Ansys.ACT.Common.CoordinateSystem](../../../Common/CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.CoordinateSystem)]

Get  the elements coordinate systems dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetElementsOrientations"></a>

### ImportedHeatFlux.GetElementsOrientations() → System.Collections.Generic.Dictionary[System.Int64, Ansys.ACT.Automation.Mechanical.ElementOrientationInfo]

Get  the elements orientations dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetEnumName"></a>

### ImportedHeatFlux.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetHashCode"></a>

### ImportedHeatFlux.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetIconFile"></a>

### ImportedHeatFlux.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetLifetimeService"></a>

### ImportedHeatFlux.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetObjectData"></a>

### ImportedHeatFlux.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetParameter"></a>

### ImportedHeatFlux.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetPath"></a>

### ImportedHeatFlux.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetPropertyName"></a>

### ImportedHeatFlux.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetPropertyValue"></a>

### ImportedHeatFlux.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetTableByName"></a>

### ImportedHeatFlux.GetTableByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), bUseWorksheetItfToGetTable: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow]

GetTableByName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetVisibleProperties"></a>

### ImportedHeatFlux.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetVisiblePropertyNames"></a>

### ImportedHeatFlux.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GroupAllSimilarChildren"></a>

### ImportedHeatFlux.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GroupSimilarObjects"></a>

### ImportedHeatFlux.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Import"></a>

### ImportedHeatFlux.Import() → [None](https://docs.python.org/3/builtins/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ImportLoad"></a>

### ImportedHeatFlux.ImportLoad() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.InitializeLifetimeService"></a>

### ImportedHeatFlux.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.IsPropertyEditable"></a>

### ImportedHeatFlux.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedHeatFlux.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.IsPropertyVisible"></a>

### ImportedHeatFlux.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedHeatFlux.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Paste"></a>

### ImportedHeatFlux.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.PropertyByAPIName"></a>

### ImportedHeatFlux.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.PropertyById"></a>

### ImportedHeatFlux.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.PropertyByName"></a>

### ImportedHeatFlux.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ReloadConfiguration"></a>

### ImportedHeatFlux.ReloadConfiguration() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RemoveFromGroup"></a>

### ImportedHeatFlux.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RemoveParameter"></a>

### ImportedHeatFlux.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SetActivateAtLoadStep"></a>

### ImportedHeatFlux.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SyncAnalysisFrequencies"></a>

### ImportedHeatFlux.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.getFieldInterpolationProxy"></a>

### ImportedHeatFlux.getFieldInterpolationProxy() → Ansys.ACT.Automation.Mechanical.ImportedLoads.CImportProxyWrapper

getFieldInterpolationProxy method.

<!-- !! processed by numpydoc !! -->

