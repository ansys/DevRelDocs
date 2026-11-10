# `ImportedInitialStrain`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedInitialStrain"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedInitialStrain(internalObject: Any)

<a id="ImportedInitialStrain"></a>

### *class* ImportedInitialStrain(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedInitialStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedInitialStrain.Activate)                                         | Activate the current object.                                                                  |
| [`AddComment`](#ImportedInitialStrain.AddComment)                                     | Creates a new child Comment.                                                                  |
| [`AddFigure`](#ImportedInitialStrain.AddFigure)                                       | Creates a new child Figure.                                                                   |
| [`AddImage`](#ImportedInitialStrain.AddImage)                                         | Creates a new child Image.                                                                    |
| [`AddMappingValidation`](#ImportedInitialStrain.AddMappingValidation)                 | Creates a new MappingValidation                                                               |
| [`ClearGeneratedData`](#ImportedInitialStrain.ClearGeneratedData)                     | Run the ClearGeneratedData action.                                                            |
| [`Copy`](#ImportedInitialStrain.Copy)                                                 | Copies the current DataModelObject.                                                           |
| [`CopyTo`](#ImportedInitialStrain.CopyTo)                                             | Copies all visible properties from this object to another.                                    |
| [`CreateObjRef`](#ImportedInitialStrain.CreateObjRef)                                 | CreateObjRef method.                                                                          |
| [`CreateParameter`](#ImportedInitialStrain.CreateParameter)                           | Creates a new parameter for a Property.                                                       |
| [`CreateTabbedFile`](#ImportedInitialStrain.CreateTabbedFile)                         | Gets mapped values.                                                                           |
| [`Cut`](#ImportedInitialStrain.Cut)                                                   | Cuts the current DataModelObject.                                                             |
| [`Delete`](#ImportedInitialStrain.Delete)                                             | Run the Delete action.                                                                        |
| [`Duplicate`](#ImportedInitialStrain.Duplicate)                                       | Creates a copy of the current DataModelObject.                                                |
| [`Equals`](#ImportedInitialStrain.Equals)                                             | Equals method.                                                                                |
| [`ExportToTextFile`](#ImportedInitialStrain.ExportToTextFile)                         | ExportToTextFile method.                                                                      |
| [`GetAPIName`](#ImportedInitialStrain.GetAPIName)                                     | Property name bound to dispId.                                                                |
| [`GetActivateAtLoadStep`](#ImportedInitialStrain.GetActivateAtLoadStep)               | GetActivateAtLoadStep method.                                                                 |
| [`GetAllProperties`](#ImportedInitialStrain.GetAllProperties)                         | GetAllProperties method.                                                                      |
| [`GetChildren`](#ImportedInitialStrain.GetChildren)                                   | Gets the list of children, filtered by type.                                                  |
| [`GetDetailsView`](#ImportedInitialStrain.GetDetailsView)                             | GetDetailsView method.                                                                        |
| [`GetElementsCoordinateSystems`](#ImportedInitialStrain.GetElementsCoordinateSystems) | Get  the elements coordinate systems dictionary.                                              |
| [`GetElementsOrientations`](#ImportedInitialStrain.GetElementsOrientations)           | Get  the elements orientations dictionary.                                                    |
| [`GetEnumName`](#ImportedInitialStrain.GetEnumName)                                   | Enum name bound to value                                                                      |
| [`GetHashCode`](#ImportedInitialStrain.GetHashCode)                                   | GetHashCode method.                                                                           |
| [`GetIconFile`](#ImportedInitialStrain.GetIconFile)                                   | GetIconFile method.                                                                           |
| [`GetLifetimeService`](#ImportedInitialStrain.GetLifetimeService)                     | GetLifetimeService method.                                                                    |
| [`GetObjectData`](#ImportedInitialStrain.GetObjectData)                               | GetObjectData method.                                                                         |
| [`GetParameter`](#ImportedInitialStrain.GetParameter)                                 | Gets the parameter corresponding to the given property.                                       |
| [`GetPath`](#ImportedInitialStrain.GetPath)                                           | GetPath method.                                                                               |
| [`GetPropertyName`](#ImportedInitialStrain.GetPropertyName)                           | GetPropertyName method.                                                                       |
| [`GetPropertyValue`](#ImportedInitialStrain.GetPropertyValue)                         | GetPropertyValue method.                                                                      |
| [`GetTableByName`](#ImportedInitialStrain.GetTableByName)                             | GetTableByName method.                                                                        |
| [`GetVisibleProperties`](#ImportedInitialStrain.GetVisibleProperties)                 | GetVisibleProperties method.                                                                  |
| [`GetVisiblePropertyNames`](#ImportedInitialStrain.GetVisiblePropertyNames)           | GetVisiblePropertyNames method.                                                               |
| [`GroupAllSimilarChildren`](#ImportedInitialStrain.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                                       |
| [`GroupSimilarObjects`](#ImportedInitialStrain.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                                           |
| [`Import`](#ImportedInitialStrain.Import)                                             | Import.                                                                                       |
| [`ImportLoad`](#ImportedInitialStrain.ImportLoad)                                     | Run the ImportLoad action.                                                                    |
| [`InitializeLifetimeService`](#ImportedInitialStrain.InitializeLifetimeService)       | InitializeLifetimeService method.                                                             |
| [`IsPropertyEditable`](#ImportedInitialStrain.IsPropertyEditable)                     | IsPropertyEditable method.                                                                    |
| [`IsPropertyVisible`](#ImportedInitialStrain.IsPropertyVisible)                       | IsPropertyVisible method.                                                                     |
| [`Paste`](#ImportedInitialStrain.Paste)                                               | Pastes to the current DataModelObject context.                                                |
| [`PropertyByAPIName`](#ImportedInitialStrain.PropertyByAPIName)                       | Get a property by its API name.                                                               |
| [`PropertyById`](#ImportedInitialStrain.PropertyById)                                 | PropertyById method.                                                                          |
| [`PropertyByName`](#ImportedInitialStrain.PropertyByName)                             | Get a property by its unique name.                                                            |
| [`ReloadConfiguration`](#ImportedInitialStrain.ReloadConfiguration)                   | Reload the Imported Load's setup from its associated configuration file (if available).       |
| [`RemoveFromGroup`](#ImportedInitialStrain.RemoveFromGroup)                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.   |
| [`RemoveParameter`](#ImportedInitialStrain.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property.             |
| [`SetActivateAtLoadStep`](#ImportedInitialStrain.SetActivateAtLoadStep)               | SetActivateAtLoadStep method.                                                                 |
| [`SyncAnalysisFrequencies`](#ImportedInitialStrain.SyncAnalysisFrequencies)           | Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load. |
| [`getFieldInterpolationProxy`](#ImportedInitialStrain.getFieldInterpolationProxy)     | getFieldInterpolationProxy method.                                                            |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveRow`](#ImportedInitialStrain.ActiveRow)                                                       | Gets or sets the ActiveRow.                                                                                                                                                                   |
| [`ActiveRowValue`](#ImportedInitialStrain.ActiveRowValue)                                             | Gets or sets the ActiveRowValue.                                                                                                                                                              |
| [`Algorithm`](#ImportedInitialStrain.Algorithm)                                                       | Algorithm property.                                                                                                                                                                           |
| [`AnalysisOrderNumbers`](#ImportedInitialStrain.AnalysisOrderNumbers)                                 | AnalysisOrderNumbers property.                                                                                                                                                                |
| [`AnalysisRpmSelection`](#ImportedInitialStrain.AnalysisRpmSelection)                                 | AnalysisRpmSelection property.                                                                                                                                                                |
| [`AnalysisRpmSetIndex`](#ImportedInitialStrain.AnalysisRpmSetIndex)                                   | AnalysisRpmSetIndex property.                                                                                                                                                                 |
| [`AnalysisRpmSetRanges`](#ImportedInitialStrain.AnalysisRpmSetRanges)                                 | AnalysisRpmSetRanges property.                                                                                                                                                                |
| [`AnalysisSpecifyRpm`](#ImportedInitialStrain.AnalysisSpecifyRpm)                                     | AnalysisSpecifyRpm property.                                                                                                                                                                  |
| [`AnalysisTimeOrFrequencysDefinition`](#ImportedInitialStrain.AnalysisTimeOrFrequencysDefinition)     | AnalysisTimeOrFrequencysDefinition property.                                                                                                                                                  |
| [`AnalysisTimeRangeMax`](#ImportedInitialStrain.AnalysisTimeRangeMax)                                 | AnalysisTimeRangeMax property.                                                                                                                                                                |
| [`AnalysisTimeRangeMin`](#ImportedInitialStrain.AnalysisTimeRangeMin)                                 | AnalysisTimeRangeMin property.                                                                                                                                                                |
| [`AppliedByType`](#ImportedInitialStrain.AppliedByType)                                               | AppliedByType property.                                                                                                                                                                       |
| [`ApplyAs`](#ImportedInitialStrain.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition.                                                                                       |
| [`AttachedRefs`](#ImportedInitialStrain.AttachedRefs)                                                 | AttachedRefs property.                                                                                                                                                                        |
| [`AverageAmbientTemperature`](#ImportedInitialStrain.AverageAmbientTemperature)                       | AverageAmbientTemperature property.                                                                                                                                                           |
| [`BoundingBoxTolerance`](#ImportedInitialStrain.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                                                                                                                |
| [`BucketToleranceCheck`](#ImportedInitialStrain.BucketToleranceCheck)                                 | BucketToleranceCheck property.                                                                                                                                                                |
| [`BucketToleranceKey`](#ImportedInitialStrain.BucketToleranceKey)                                     | BucketToleranceKey property.                                                                                                                                                                  |
| [`BucketToleranceValue`](#ImportedInitialStrain.BucketToleranceValue)                                 | BucketToleranceValue property.                                                                                                                                                                |
| [`CFDSurface`](#ImportedInitialStrain.CFDSurface)                                                     | CFDSurface property.                                                                                                                                                                          |
| [`Children`](#ImportedInitialStrain.Children)                                                         | Gets the list of children.                                                                                                                                                                    |
| [`ClsId`](#ImportedInitialStrain.ClsId)                                                               | ClsId property.                                                                                                                                                                               |
| [`Comments`](#ImportedInitialStrain.Comments)                                                         | Gets the list of associated comments.                                                                                                                                                         |
| [`ComplexComponent`](#ImportedInitialStrain.ComplexComponent)                                         | Gets or sets the DisplayMappedData.                                                                                                                                                           |
| [`CreateNameSelectionForMappedNodes`](#ImportedInitialStrain.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                                                                                                                   |
| [`CreateNameSelectionForOutsideNodes`](#ImportedInitialStrain.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                                                                                                                  |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedInitialStrain.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                                                                                                                 |
| [`DataModelObjectCategory`](#ImportedInitialStrain.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                                                                                                                  |
| [`DefineActiveSequenceBy`](#ImportedInitialStrain.DefineActiveSequenceBy)                             | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`DefineByType`](#ImportedInitialStrain.DefineByType)                                                 | DefineByType property.                                                                                                                                                                        |
| [`DiscretizationX`](#ImportedInitialStrain.DiscretizationX)                                           | DiscretizationX property.                                                                                                                                                                     |
| [`DiscretizationY`](#ImportedInitialStrain.DiscretizationY)                                           | DiscretizationY property.                                                                                                                                                                     |
| [`DisplayInteriorPoints`](#ImportedInitialStrain.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                                                                                                               |
| [`DisplayProjectionPlane`](#ImportedInitialStrain.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                                                                                                              |
| [`DisplaySourcePointIds`](#ImportedInitialStrain.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                                                                                                               |
| [`DisplaySourcePoints`](#ImportedInitialStrain.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                                                                                                                 |
| [`ExternalDataIdentifier`](#ImportedInitialStrain.ExternalDataIdentifier)                             | ExternalDataIdentifier property.                                                                                                                                                              |
| [`ExternalLoadScopingType`](#ImportedInitialStrain.ExternalLoadScopingType)                           | ExternalLoadScopingType property.                                                                                                                                                             |
| [`ExtrapolationTolerancePercent`](#ImportedInitialStrain.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                                                                                                       |
| [`Figures`](#ImportedInitialStrain.Figures)                                                           | Gets the list of associated figures.                                                                                                                                                          |
| [`Geometry`](#Geometry)                                                                 | Geometry property.                                                                                                                                                                            |
| [`GroupingFolder`](#ImportedInitialStrain.GroupingFolder)                                             | GroupingFolder property.                                                                                                                                                                      |
| [`HarmonicIndex`](#ImportedInitialStrain.HarmonicIndex)                                               | Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.                                                                                                 |
| [`IconName`](#ImportedInitialStrain.IconName)                                                         | IconName property.                                                                                                                                                                            |
| [`Images`](#ImportedInitialStrain.Images)                                                             | Gets the list of associated images.                                                                                                                                                           |
| [`InternalObject`](#ImportedInitialStrain.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                                                                                                            |
| [`Interpolation`](#ImportedInitialStrain.Interpolation)                                               | Interpolation property.                                                                                                                                                                       |
| [`KrigingCorrelationFunction`](#ImportedInitialStrain.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                                                                                                          |
| [`KrigingPolynom`](#ImportedInitialStrain.KrigingPolynom)                                             | KrigingPolynom property.                                                                                                                                                                      |
| [`LegendMaximum`](#ImportedInitialStrain.LegendMaximum)                                               | LegendMaximum property.                                                                                                                                                                       |
| [`LegendMinimum`](#ImportedInitialStrain.LegendMinimum)                                               | LegendMinimum property.                                                                                                                                                                       |
| [`LegendRange`](#ImportedInitialStrain.LegendRange)                                                   | LegendRange property.                                                                                                                                                                         |
| [`Limit`](#ImportedInitialStrain.Limit)                                                               | Limit property.                                                                                                                                                                               |
| [`LoadDisplayComponentType`](#ImportedInitialStrain.LoadDisplayComponentType)                         | Gets or sets the DefineActiveSequenceBy.                                                                                                                                                      |
| [`LoadedAreaType`](#ImportedInitialStrain.LoadedAreaType)                                             | LoadedAreaType property.                                                                                                                                                                      |
| [`Location`](#ImportedInitialStrain.Location)                                                         | Gets or sets the Location.                                                                                                                                                                    |
| [`MappedNodesName`](#ImportedInitialStrain.MappedNodesName)                                           | MappedNodesName property.                                                                                                                                                                     |
| [`Mapping`](#ImportedInitialStrain.Mapping)                                                           | Mapping property.                                                                                                                                                                             |
| [`MappingControl`](#ImportedInitialStrain.MappingControl)                                             | MappingControl property.                                                                                                                                                                      |
| [`MaxOutsideDistance`](#ImportedInitialStrain.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                                                                                                                  |
| [`Method`](#ImportedInitialStrain.Method)                                                             | Method property.                                                                                                                                                                              |
| [`Name`](#ImportedInitialStrain.Name)                                                                 | Name property.                                                                                                                                                                                |
| [`NonCyclicLoadingType`](#ImportedInitialStrain.NonCyclicLoadingType)                                 | Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries. |
| [`NumberOfPoints`](#ImportedInitialStrain.NumberOfPoints)                                             | NumberOfPoints property.                                                                                                                                                                      |
| [`ObjectId`](#ImportedInitialStrain.ObjectId)                                                         | ObjectId property.                                                                                                                                                                            |
| [`ObjectState`](#ImportedInitialStrain.ObjectState)                                                   | ObjectState property.                                                                                                                                                                         |
| [`ObjectTags`](#ImportedInitialStrain.ObjectTags)                                                     | ObjectTags property.                                                                                                                                                                          |
| [`OrientationRealignment`](#ImportedInitialStrain.OrientationRealignment)                             | OrientationRealignment property.                                                                                                                                                              |
| [`OriginX`](#ImportedInitialStrain.OriginX)                                                           | OriginX property.                                                                                                                                                                             |
| [`OriginY`](#ImportedInitialStrain.OriginY)                                                           | OriginY property.                                                                                                                                                                             |
| [`OriginZ`](#ImportedInitialStrain.OriginZ)                                                           | OriginZ property.                                                                                                                                                                             |
| [`OutsideDistanceCheck`](#ImportedInitialStrain.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                                                                                                                |
| [`OutsideNodesName`](#ImportedInitialStrain.OutsideNodesName)                                         | OutsideNodesName property.                                                                                                                                                                    |
| [`OutsideOption`](#ImportedInitialStrain.OutsideOption)                                               | OutsideOption property.                                                                                                                                                                       |
| [`Parent`](#ImportedInitialStrain.Parent)                                                             | Parent property.                                                                                                                                                                              |
| [`Pinball`](#ImportedInitialStrain.Pinball)                                                           | Pinball property.                                                                                                                                                                             |
| [`Projection`](#ImportedInitialStrain.Projection)                                                     | Projection property.                                                                                                                                                                          |
| [`Properties`](#ImportedInitialStrain.Properties)                                                     | Gets the list of properties for this object.                                                                                                                                                  |
| [`RigidBodyTransformationType`](#ImportedInitialStrain.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                                                                                                         |
| [`RigidTransformSourceCoordinateSystem`](#ImportedInitialStrain.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                                                                                                                |
| [`RigidTransformTargetCoordinateSystem`](#ImportedInitialStrain.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                                                                                                                |
| [`SharedRefBody`](#ImportedInitialStrain.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                                                                                                               |
| [`ShellFace`](#ImportedInitialStrain.ShellFace)                                                       | ShellFace property.                                                                                                                                                                           |
| [`ShellOffsetType`](#ImportedInitialStrain.ShellOffsetType)                                           | Gets or sets the Offset Type for aligning the thickness of the surface body.                                                                                                                  |
| [`ShellThicknessFactor`](#ImportedInitialStrain.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                                                                                                                |
| [`ShowWireframeData`](#ImportedInitialStrain.ShowWireframeData)                                       | Gets or sets the ShowWireframeData.                                                                                                                                                           |
| [`SourceBodies`](#ImportedInitialStrain.SourceBodies)                                                 | SourceBodies property.                                                                                                                                                                        |
| [`SourceComponent`](#ImportedInitialStrain.SourceComponent)                                           | SourceComponent property.                                                                                                                                                                     |
| [`SourceMaximum`](#ImportedInitialStrain.SourceMaximum)                                               | SourceMaximum property.                                                                                                                                                                       |
| [`SourceMinimum`](#ImportedInitialStrain.SourceMinimum)                                               | SourceMinimum property.                                                                                                                                                                       |
| [`SourceZone`](#ImportedInitialStrain.SourceZone)                                                     | SourceZone property.                                                                                                                                                                          |
| [`State`](#ImportedInitialStrain.State)                                                               | State property.                                                                                                                                                                               |
| [`SupplementalFilmCoefficient`](#ImportedInitialStrain.SupplementalFilmCoefficient)                   | SupplementalFilmCoefficient property.                                                                                                                                                         |
| [`Suppressed`](#ImportedInitialStrain.Suppressed)                                                     | Gets or sets the Suppressed.                                                                                                                                                                  |
| [`TabularLoading`](#ImportedInitialStrain.TabularLoading)                                             | TabularLoading property.                                                                                                                                                                      |
| [`TargetCoordinateSystem`](#ImportedInitialStrain.TargetCoordinateSystem)                             | TargetCoordinateSystem property.                                                                                                                                                              |
| [`TemperatureType`](#ImportedInitialStrain.TemperatureType)                                           | TemperatureType property.                                                                                                                                                                     |
| [`ThetaXY`](#ImportedInitialStrain.ThetaXY)                                                           | ThetaXY property.                                                                                                                                                                             |
| [`ThetaYZ`](#ImportedInitialStrain.ThetaYZ)                                                           | ThetaYZ property.                                                                                                                                                                             |
| [`ThetaZX`](#ImportedInitialStrain.ThetaZX)                                                           | ThetaZX property.                                                                                                                                                                             |
| [`UnmappedNodesName`](#ImportedInitialStrain.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                                                                                                                   |
| [`VariableType`](#ImportedInitialStrain.VariableType)                                                 | VariableType property.                                                                                                                                                                        |
| [`VisibleProperties`](#ImportedInitialStrain.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                                                                                                                 |
| [`Weighting`](#ImportedInitialStrain.Weighting)                                                       | Weighting property.                                                                                                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedInitialStrain.ActiveRow"></a>

### *property* ImportedInitialStrain.ActiveRow *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRow.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ActiveRowValue"></a>

### *property* ImportedInitialStrain.ActiveRowValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveRowValue.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Algorithm"></a>

### *property* ImportedInitialStrain.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AnalysisOrderNumbers"></a>

### *property* ImportedInitialStrain.AnalysisOrderNumbers *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisOrderNumbers property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AnalysisRpmSelection"></a>

### *property* ImportedInitialStrain.AnalysisRpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSelection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AnalysisRpmSetIndex"></a>

### *property* ImportedInitialStrain.AnalysisRpmSetIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetIndex property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AnalysisRpmSetRanges"></a>

### *property* ImportedInitialStrain.AnalysisRpmSetRanges *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisRpmSetRanges property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AnalysisSpecifyRpm"></a>

### *property* ImportedInitialStrain.AnalysisSpecifyRpm *: Ansys.Mechanical.DataModel.Enums.ExternalLoadImportRPMType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisSpecifyRpm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AnalysisTimeOrFrequencysDefinition"></a>

### *property* ImportedInitialStrain.AnalysisTimeOrFrequencysDefinition *: Ansys.Mechanical.DataModel.Enums.AnalysisTimeDefinitionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeOrFrequencysDefinition property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AnalysisTimeRangeMax"></a>

### *property* ImportedInitialStrain.AnalysisTimeRangeMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMax property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AnalysisTimeRangeMin"></a>

### *property* ImportedInitialStrain.AnalysisTimeRangeMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisTimeRangeMin property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AppliedByType"></a>

### *property* ImportedInitialStrain.AppliedByType *: Ansys.Mechanical.DataModel.Enums.LoadAppliedByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

AppliedByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ApplyAs"></a>

### *property* ImportedInitialStrain.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AttachedRefs"></a>

### *property* ImportedInitialStrain.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AverageAmbientTemperature"></a>

### *property* ImportedInitialStrain.AverageAmbientTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AverageAmbientTemperature property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.BoundingBoxTolerance"></a>

### *property* ImportedInitialStrain.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.BucketToleranceCheck"></a>

### *property* ImportedInitialStrain.BucketToleranceCheck *: Ansys.Mechanical.DataModel.Enums.OnOffType | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.BucketToleranceKey"></a>

### *property* ImportedInitialStrain.BucketToleranceKey *: Ansys.Mechanical.DataModel.Enums.MappingToleranceKey | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceKey property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.BucketToleranceValue"></a>

### *property* ImportedInitialStrain.BucketToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

BucketToleranceValue property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.CFDSurface"></a>

### *property* ImportedInitialStrain.CFDSurface *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CFDSurface property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Children"></a>

### *property* ImportedInitialStrain.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ClsId"></a>

### *property* ImportedInitialStrain.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Comments"></a>

### *property* ImportedInitialStrain.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ComplexComponent"></a>

### *property* ImportedInitialStrain.ComplexComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayMappedData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedInitialStrain.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedInitialStrain.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedInitialStrain.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.DataModelObjectCategory"></a>

### *property* ImportedInitialStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.DefineActiveSequenceBy"></a>

### *property* ImportedInitialStrain.DefineActiveSequenceBy *: Ansys.Mechanical.DataModel.Enums.ExtLoadDefineActiveSequenceBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.DefineByType"></a>

### *property* ImportedInitialStrain.DefineByType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

DefineByType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.DiscretizationX"></a>

### *property* ImportedInitialStrain.DiscretizationX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.DiscretizationY"></a>

### *property* ImportedInitialStrain.DiscretizationY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DiscretizationY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.DisplayInteriorPoints"></a>

### *property* ImportedInitialStrain.DisplayInteriorPoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.DisplayProjectionPlane"></a>

### *property* ImportedInitialStrain.DisplayProjectionPlane *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.DisplaySourcePointIds"></a>

### *property* ImportedInitialStrain.DisplaySourcePointIds *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.DisplaySourcePoints"></a>

### *property* ImportedInitialStrain.DisplaySourcePoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ExternalDataIdentifier"></a>

### *property* ImportedInitialStrain.ExternalDataIdentifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalDataIdentifier property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ExternalLoadScopingType"></a>

### *property* ImportedInitialStrain.ExternalLoadScopingType *: Ansys.Mechanical.DataModel.Enums.ExternalLoadScopingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExternalLoadScopingType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ExtrapolationTolerancePercent"></a>

### *property* ImportedInitialStrain.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Figures"></a>

### *property* ImportedInitialStrain.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Geometry"></a>

### *property* ImportedInitialStrain.Geometry *: Ansys.Mechanical.DataModel.Enums.MappingGeometryType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Geometry property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GroupingFolder"></a>

### *property* ImportedInitialStrain.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.HarmonicIndex"></a>

### *property* ImportedInitialStrain.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the harmonic index in which to apply the imported load in a multistage analysis.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.IconName"></a>

### *property* ImportedInitialStrain.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Images"></a>

### *property* ImportedInitialStrain.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.InternalObject"></a>

### *property* ImportedInitialStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Interpolation"></a>

### *property* ImportedInitialStrain.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.KrigingCorrelationFunction"></a>

### *property* ImportedInitialStrain.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.KrigingPolynom"></a>

### *property* ImportedInitialStrain.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.LegendMaximum"></a>

### *property* ImportedInitialStrain.LegendMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.LegendMinimum"></a>

### *property* ImportedInitialStrain.LegendMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.LegendRange"></a>

### *property* ImportedInitialStrain.LegendRange *: Ansys.Mechanical.DataModel.Enums.LegendRangeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Limit"></a>

### *property* ImportedInitialStrain.Limit *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.LoadDisplayComponentType"></a>

### *property* ImportedInitialStrain.LoadDisplayComponentType *: Ansys.Mechanical.DataModel.Enums.ExtLoadDisplayComponentType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineActiveSequenceBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.LoadedAreaType"></a>

### *property* ImportedInitialStrain.LoadedAreaType *: Ansys.Mechanical.DataModel.Enums.LoadedAreaType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LoadedAreaType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Location"></a>

### *property* ImportedInitialStrain.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.MappedNodesName"></a>

### *property* ImportedInitialStrain.MappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Mapping"></a>

### *property* ImportedInitialStrain.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.MappingControl"></a>

### *property* ImportedInitialStrain.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.MaxOutsideDistance"></a>

### *property* ImportedInitialStrain.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Method"></a>

### *property* ImportedInitialStrain.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Name"></a>

### *property* ImportedInitialStrain.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.NonCyclicLoadingType"></a>

### *property* ImportedInitialStrain.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.NumberOfPoints"></a>

### *property* ImportedInitialStrain.NumberOfPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ObjectId"></a>

### *property* ImportedInitialStrain.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ObjectState"></a>

### *property* ImportedInitialStrain.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ObjectTags"></a>

### *property* ImportedInitialStrain.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.OrientationRealignment"></a>

### *property* ImportedInitialStrain.OrientationRealignment *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.OriginX"></a>

### *property* ImportedInitialStrain.OriginX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.OriginY"></a>

### *property* ImportedInitialStrain.OriginY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.OriginZ"></a>

### *property* ImportedInitialStrain.OriginZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OriginZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.OutsideDistanceCheck"></a>

### *property* ImportedInitialStrain.OutsideDistanceCheck *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.OutsideNodesName"></a>

### *property* ImportedInitialStrain.OutsideNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.OutsideOption"></a>

### *property* ImportedInitialStrain.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Parent"></a>

### *property* ImportedInitialStrain.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Pinball"></a>

### *property* ImportedInitialStrain.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Projection"></a>

### *property* ImportedInitialStrain.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Properties"></a>

### *property* ImportedInitialStrain.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.RigidBodyTransformationType"></a>

### *property* ImportedInitialStrain.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedInitialStrain.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedInitialStrain.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.SharedRefBody"></a>

### *property* ImportedInitialStrain.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ShellFace"></a>

### *property* ImportedInitialStrain.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellFace property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ShellOffsetType"></a>

### *property* ImportedInitialStrain.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Offset Type for aligning the thickness of the surface body.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ShellThicknessFactor"></a>

### *property* ImportedInitialStrain.ShellThicknessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ShowWireframeData"></a>

### *property* ImportedInitialStrain.ShowWireframeData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowWireframeData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.SourceBodies"></a>

### *property* ImportedInitialStrain.SourceBodies *: Ansys.Mechanical.DataModel.Enums.ImportSourceBodies | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceBodies property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.SourceComponent"></a>

### *property* ImportedInitialStrain.SourceComponent *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceComponent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.SourceMaximum"></a>

### *property* ImportedInitialStrain.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.SourceMinimum"></a>

### *property* ImportedInitialStrain.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.SourceZone"></a>

### *property* ImportedInitialStrain.SourceZone *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SourceZone property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.State"></a>

### *property* ImportedInitialStrain.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.SupplementalFilmCoefficient"></a>

### *property* ImportedInitialStrain.SupplementalFilmCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupplementalFilmCoefficient property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Suppressed"></a>

### *property* ImportedInitialStrain.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.TabularLoading"></a>

### *property* ImportedInitialStrain.TabularLoading *: Ansys.Mechanical.DataModel.Enums.ExternalLoadSteppingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TabularLoading property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.TargetCoordinateSystem"></a>

### *property* ImportedInitialStrain.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.TemperatureType"></a>

### *property* ImportedInitialStrain.TemperatureType *: Ansys.Mechanical.DataModel.Enums.AmbientTemperatureType | [None](https://docs.python.org/3/builtins/constants.html#None)*

TemperatureType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ThetaXY"></a>

### *property* ImportedInitialStrain.ThetaXY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaXY property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ThetaYZ"></a>

### *property* ImportedInitialStrain.ThetaYZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaYZ property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ThetaZX"></a>

### *property* ImportedInitialStrain.ThetaZX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThetaZX property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.UnmappedNodesName"></a>

### *property* ImportedInitialStrain.UnmappedNodesName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.VariableType"></a>

### *property* ImportedInitialStrain.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.VisibleProperties"></a>

### *property* ImportedInitialStrain.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Weighting"></a>

### *property* ImportedInitialStrain.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedInitialStrain.Activate"></a>

### ImportedInitialStrain.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AddComment"></a>

### ImportedInitialStrain.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AddFigure"></a>

### ImportedInitialStrain.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AddImage"></a>

### ImportedInitialStrain.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.AddMappingValidation"></a>

### ImportedInitialStrain.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ClearGeneratedData"></a>

### ImportedInitialStrain.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Copy"></a>

### ImportedInitialStrain.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.CopyTo"></a>

### ImportedInitialStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.CreateObjRef"></a>

### ImportedInitialStrain.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.CreateParameter"></a>

### ImportedInitialStrain.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.CreateTabbedFile"></a>

### ImportedInitialStrain.CreateTabbedFile() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets mapped values.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Cut"></a>

### ImportedInitialStrain.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Delete"></a>

### ImportedInitialStrain.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Duplicate"></a>

### ImportedInitialStrain.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Equals"></a>

### ImportedInitialStrain.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ExportToTextFile"></a>

### ImportedInitialStrain.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ImportedInitialStrain.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetAPIName"></a>

### ImportedInitialStrain.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetActivateAtLoadStep"></a>

### ImportedInitialStrain.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetAllProperties"></a>

### ImportedInitialStrain.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetChildren"></a>

### ImportedInitialStrain.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedInitialStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetDetailsView"></a>

### ImportedInitialStrain.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetElementsCoordinateSystems"></a>

### ImportedInitialStrain.GetElementsCoordinateSystems() → System.Collections.Generic.Dictionary[System.Int64, [Ansys.ACT.Common.CoordinateSystem](../../../Common/CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.CoordinateSystem)]

Get  the elements coordinate systems dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetElementsOrientations"></a>

### ImportedInitialStrain.GetElementsOrientations() → System.Collections.Generic.Dictionary[System.Int64, Ansys.ACT.Automation.Mechanical.ElementOrientationInfo]

Get  the elements orientations dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetEnumName"></a>

### ImportedInitialStrain.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetHashCode"></a>

### ImportedInitialStrain.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetIconFile"></a>

### ImportedInitialStrain.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetLifetimeService"></a>

### ImportedInitialStrain.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetObjectData"></a>

### ImportedInitialStrain.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetParameter"></a>

### ImportedInitialStrain.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetPath"></a>

### ImportedInitialStrain.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetPropertyName"></a>

### ImportedInitialStrain.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetPropertyValue"></a>

### ImportedInitialStrain.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetTableByName"></a>

### ImportedInitialStrain.GetTableByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), bUseWorksheetItfToGetTable: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow]

GetTableByName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetVisibleProperties"></a>

### ImportedInitialStrain.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GetVisiblePropertyNames"></a>

### ImportedInitialStrain.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GroupAllSimilarChildren"></a>

### ImportedInitialStrain.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.GroupSimilarObjects"></a>

### ImportedInitialStrain.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Import"></a>

### ImportedInitialStrain.Import() → [None](https://docs.python.org/3/builtins/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ImportLoad"></a>

### ImportedInitialStrain.ImportLoad() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.InitializeLifetimeService"></a>

### ImportedInitialStrain.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.IsPropertyEditable"></a>

### ImportedInitialStrain.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedInitialStrain.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.IsPropertyVisible"></a>

### ImportedInitialStrain.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedInitialStrain.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.Paste"></a>

### ImportedInitialStrain.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.PropertyByAPIName"></a>

### ImportedInitialStrain.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.PropertyById"></a>

### ImportedInitialStrain.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.PropertyByName"></a>

### ImportedInitialStrain.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.ReloadConfiguration"></a>

### ImportedInitialStrain.ReloadConfiguration() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.RemoveFromGroup"></a>

### ImportedInitialStrain.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.RemoveParameter"></a>

### ImportedInitialStrain.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.SetActivateAtLoadStep"></a>

### ImportedInitialStrain.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.SyncAnalysisFrequencies"></a>

### ImportedInitialStrain.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStrain.getFieldInterpolationProxy"></a>

### ImportedInitialStrain.getFieldInterpolationProxy() → Ansys.ACT.Automation.Mechanical.ImportedLoads.CImportProxyWrapper

getFieldInterpolationProxy method.

<!-- !! processed by numpydoc !! -->

