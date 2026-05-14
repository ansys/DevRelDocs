# `ImportedTemperature`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTemperature"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTemperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedTemperature.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`Activate`](#ImportedTemperature.Activate)                               | Activate the current object.                                                            |
| [`AddComment`](#ImportedTemperature.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ImportedTemperature.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ImportedTemperature.AddImage)                               | Creates a new child Image.                                                              |
| [`AddMappingValidation`](#ImportedTemperature.AddMappingValidation)       | Creates a new MappingValidation                                                         |
| [`ClearGeneratedData`](#ImportedTemperature.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                      |
| [`CopyTo`](#ImportedTemperature.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`CreateParameter`](#ImportedTemperature.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`Delete`](#ImportedTemperature.Delete)                                   | Run the Delete action.                                                                  |
| [`Duplicate`](#ImportedTemperature.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`ExportToTextFile`](#ImportedTemperature.ExportToTextFile)               | Run the ExportToTextFile action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedTemperature.GetActivateAtLoadStep)     | Gets whether the imported temperature is active at the specified load step.             |
| [`GetChildren`](#ImportedTemperature.GetChildren)                         | Gets the list of children, filtered by type.                                            |
| [`GetParameter`](#ImportedTemperature.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`GroupAllSimilarChildren`](#ImportedTemperature.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ImportedTemperature.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`Import`](#ImportedTemperature.Import)                                   | Import.                                                                                 |
| [`ImportLoad`](#ImportedTemperature.ImportLoad)                           | Run the ImportLoad action.                                                              |
| [`PropertyByAPIName`](#ImportedTemperature.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`PropertyByName`](#ImportedTemperature.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`ReloadConfiguration`](#ImportedTemperature.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available). |
| [`RemoveParameter`](#ImportedTemperature.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |
| [`SetActivateAtLoadStep`](#ImportedTemperature.SetActivateAtLoadStep)     | Sets whether the imported temperature is active at the specified load step.             |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedTemperature.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedTemperature.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedTemperature.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedTemperature.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedTemperature.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedTemperature.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedTemperature.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedTemperature.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedTemperature.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedTemperature.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedTemperature.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedTemperature.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedTemperature.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedTemperature.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedTemperature.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedTemperature.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedTemperature.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedTemperature.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedTemperature.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedTemperature.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`Limit`](#ImportedTemperature.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedTemperature.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedTemperature.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedTemperature.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedTemperature.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedTemperature.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedTemperature.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedTemperature.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedTemperature.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedTemperature.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedTemperature.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedTemperature.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedTemperature.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedTemperature.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedTemperature.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedTemperature.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedTemperature.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedTemperature.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedTemperature.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedTemperature.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedTemperature.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedTemperature.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedTemperature.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedTemperature.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedTemperature.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedTemperature.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedTemperature.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedTemperature.Algorithm"></a>

### *property* ImportedTemperature.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ApplyAs"></a>

### *property* ImportedTemperature.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.BoundingBoxTolerance"></a>

### *property* ImportedTemperature.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Children"></a>

### *property* ImportedTemperature.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Comments"></a>

### *property* ImportedTemperature.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedTemperature.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedTemperature.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedTemperature.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DataModelObjectCategory"></a>

### *property* ImportedTemperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DisplayInteriorPoints"></a>

### *property* ImportedTemperature.DisplayInteriorPoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DisplayProjectionPlane"></a>

### *property* ImportedTemperature.DisplayProjectionPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DisplaySourcePointIds"></a>

### *property* ImportedTemperature.DisplaySourcePointIds *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DisplaySourcePoints"></a>

### *property* ImportedTemperature.DisplaySourcePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ExtrapolationTolerancePercent"></a>

### *property* ImportedTemperature.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Figures"></a>

### *property* ImportedTemperature.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Images"></a>

### *property* ImportedTemperature.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.InternalObject"></a>

### *property* ImportedTemperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Interpolation"></a>

### *property* ImportedTemperature.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.KrigingCorrelationFunction"></a>

### *property* ImportedTemperature.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.KrigingPolynom"></a>

### *property* ImportedTemperature.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Limit"></a>

### *property* ImportedTemperature.Limit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Location"></a>

### *property* ImportedTemperature.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.MappedNodesName"></a>

### *property* ImportedTemperature.MappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Mapping"></a>

### *property* ImportedTemperature.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.MappingControl"></a>

### *property* ImportedTemperature.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.MaxOutsideDistance"></a>

### *property* ImportedTemperature.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Method"></a>

### *property* ImportedTemperature.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.NumberOfPoints"></a>

### *property* ImportedTemperature.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.OrientationRealignment"></a>

### *property* ImportedTemperature.OrientationRealignment *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.OutsideDistanceCheck"></a>

### *property* ImportedTemperature.OutsideDistanceCheck *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.OutsideNodesName"></a>

### *property* ImportedTemperature.OutsideNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.OutsideOption"></a>

### *property* ImportedTemperature.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Pinball"></a>

### *property* ImportedTemperature.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Projection"></a>

### *property* ImportedTemperature.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Properties"></a>

### *property* ImportedTemperature.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.RigidBodyTransformationType"></a>

### *property* ImportedTemperature.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedTemperature.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedTemperature.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.SharedRefBody"></a>

### *property* ImportedTemperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ShellThicknessFactor"></a>

### *property* ImportedTemperature.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.SourceMaximum"></a>

### *property* ImportedTemperature.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.SourceMinimum"></a>

### *property* ImportedTemperature.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Suppressed"></a>

### *property* ImportedTemperature.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.UnmappedNodesName"></a>

### *property* ImportedTemperature.UnmappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.VariableType"></a>

### *property* ImportedTemperature.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.VisibleProperties"></a>

### *property* ImportedTemperature.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Weighting"></a>

### *property* ImportedTemperature.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedTemperature.Activate"></a>

### ImportedTemperature.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.AddComment"></a>

### ImportedTemperature.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.AddFigure"></a>

### ImportedTemperature.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.AddImage"></a>

### ImportedTemperature.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.AddMappingValidation"></a>

### ImportedTemperature.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ClearGeneratedData"></a>

### ImportedTemperature.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CopyTo"></a>

### ImportedTemperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CreateParameter"></a>

### ImportedTemperature.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Delete"></a>

### ImportedTemperature.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Duplicate"></a>

### ImportedTemperature.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ExportToTextFile"></a>

### ImportedTemperature.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.GetActivateAtLoadStep"></a>

### ImportedTemperature.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the imported temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.GetChildren"></a>

### ImportedTemperature.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.GetParameter"></a>

### ImportedTemperature.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.GroupAllSimilarChildren"></a>

### ImportedTemperature.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.GroupSimilarObjects"></a>

### ImportedTemperature.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Import"></a>

### ImportedTemperature.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ImportLoad"></a>

### ImportedTemperature.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.PropertyByAPIName"></a>

### ImportedTemperature.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.PropertyByName"></a>

### ImportedTemperature.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ReloadConfiguration"></a>

### ImportedTemperature.ReloadConfiguration()

Reload the Imported Load’s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.RemoveParameter"></a>

### ImportedTemperature.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.SetActivateAtLoadStep"></a>

### ImportedTemperature.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the imported temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

