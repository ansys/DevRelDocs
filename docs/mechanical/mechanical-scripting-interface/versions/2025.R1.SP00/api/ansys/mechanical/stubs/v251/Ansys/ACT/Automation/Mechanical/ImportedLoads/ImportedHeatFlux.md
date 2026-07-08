# `ImportedHeatFlux`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatFlux"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`Activate`](#ImportedHeatFlux.Activate)                               | Activate the current object.                                                            |
| [`AddComment`](#ImportedHeatFlux.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ImportedHeatFlux.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ImportedHeatFlux.AddImage)                               | Creates a new child Image.                                                              |
| [`AddMappingValidation`](#ImportedHeatFlux.AddMappingValidation)       | Creates a new MappingValidation                                                         |
| [`ClearGeneratedData`](#ImportedHeatFlux.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                      |
| [`CopyTo`](#ImportedHeatFlux.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`CreateParameter`](#ImportedHeatFlux.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`Delete`](#ImportedHeatFlux.Delete)                                   | Run the Delete action.                                                                  |
| [`Duplicate`](#ImportedHeatFlux.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`ExportToTextFile`](#ImportedHeatFlux.ExportToTextFile)               | Run the ExportToTextFile action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedHeatFlux.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                           |
| [`GetChildren`](#ImportedHeatFlux.GetChildren)                         | Gets the list of children, filtered by type.                                            |
| [`GetParameter`](#ImportedHeatFlux.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`GroupAllSimilarChildren`](#ImportedHeatFlux.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ImportedHeatFlux.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`Import`](#ImportedHeatFlux.Import)                                   | Import.                                                                                 |
| [`ImportLoad`](#ImportedHeatFlux.ImportLoad)                           | Run the ImportLoad action.                                                              |
| [`PropertyByAPIName`](#ImportedHeatFlux.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`PropertyByName`](#ImportedHeatFlux.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`ReloadConfiguration`](#ImportedHeatFlux.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available). |
| [`RemoveParameter`](#ImportedHeatFlux.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |
| [`SetActivateAtLoadStep`](#ImportedHeatFlux.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedHeatFlux.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedHeatFlux.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedHeatFlux.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedHeatFlux.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedHeatFlux.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedHeatFlux.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedHeatFlux.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedHeatFlux.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedHeatFlux.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedHeatFlux.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedHeatFlux.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedHeatFlux.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedHeatFlux.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedHeatFlux.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedHeatFlux.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedHeatFlux.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedHeatFlux.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedHeatFlux.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedHeatFlux.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedHeatFlux.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`Limit`](#ImportedHeatFlux.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedHeatFlux.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedHeatFlux.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedHeatFlux.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedHeatFlux.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedHeatFlux.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedHeatFlux.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedHeatFlux.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedHeatFlux.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedHeatFlux.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedHeatFlux.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedHeatFlux.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedHeatFlux.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedHeatFlux.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedHeatFlux.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedHeatFlux.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedHeatFlux.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedHeatFlux.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedHeatFlux.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedHeatFlux.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedHeatFlux.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedHeatFlux.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedHeatFlux.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedHeatFlux.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedHeatFlux.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedHeatFlux.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedHeatFlux.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedHeatFlux.Algorithm"></a>

### *property* ImportedHeatFlux.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ApplyAs"></a>

### *property* ImportedHeatFlux.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.BoundingBoxTolerance"></a>

### *property* ImportedHeatFlux.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Children"></a>

### *property* ImportedHeatFlux.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Comments"></a>

### *property* ImportedHeatFlux.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedHeatFlux.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedHeatFlux.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedHeatFlux.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DataModelObjectCategory"></a>

### *property* ImportedHeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplayInteriorPoints"></a>

### *property* ImportedHeatFlux.DisplayInteriorPoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplayProjectionPlane"></a>

### *property* ImportedHeatFlux.DisplayProjectionPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplaySourcePointIds"></a>

### *property* ImportedHeatFlux.DisplaySourcePointIds *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplaySourcePoints"></a>

### *property* ImportedHeatFlux.DisplaySourcePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ExtrapolationTolerancePercent"></a>

### *property* ImportedHeatFlux.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Figures"></a>

### *property* ImportedHeatFlux.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Images"></a>

### *property* ImportedHeatFlux.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.InternalObject"></a>

### *property* ImportedHeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Interpolation"></a>

### *property* ImportedHeatFlux.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.KrigingCorrelationFunction"></a>

### *property* ImportedHeatFlux.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.KrigingPolynom"></a>

### *property* ImportedHeatFlux.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Limit"></a>

### *property* ImportedHeatFlux.Limit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Location"></a>

### *property* ImportedHeatFlux.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.MappedNodesName"></a>

### *property* ImportedHeatFlux.MappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Mapping"></a>

### *property* ImportedHeatFlux.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.MappingControl"></a>

### *property* ImportedHeatFlux.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.MaxOutsideDistance"></a>

### *property* ImportedHeatFlux.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Method"></a>

### *property* ImportedHeatFlux.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.NumberOfPoints"></a>

### *property* ImportedHeatFlux.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OrientationRealignment"></a>

### *property* ImportedHeatFlux.OrientationRealignment *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OutsideDistanceCheck"></a>

### *property* ImportedHeatFlux.OutsideDistanceCheck *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OutsideNodesName"></a>

### *property* ImportedHeatFlux.OutsideNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OutsideOption"></a>

### *property* ImportedHeatFlux.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Pinball"></a>

### *property* ImportedHeatFlux.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Projection"></a>

### *property* ImportedHeatFlux.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Properties"></a>

### *property* ImportedHeatFlux.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RigidBodyTransformationType"></a>

### *property* ImportedHeatFlux.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedHeatFlux.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedHeatFlux.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SharedRefBody"></a>

### *property* ImportedHeatFlux.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ShellThicknessFactor"></a>

### *property* ImportedHeatFlux.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SourceMaximum"></a>

### *property* ImportedHeatFlux.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SourceMinimum"></a>

### *property* ImportedHeatFlux.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Suppressed"></a>

### *property* ImportedHeatFlux.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.UnmappedNodesName"></a>

### *property* ImportedHeatFlux.UnmappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.VariableType"></a>

### *property* ImportedHeatFlux.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.VisibleProperties"></a>

### *property* ImportedHeatFlux.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Weighting"></a>

### *property* ImportedHeatFlux.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedHeatFlux.Activate"></a>

### ImportedHeatFlux.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AddComment"></a>

### ImportedHeatFlux.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AddFigure"></a>

### ImportedHeatFlux.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AddImage"></a>

### ImportedHeatFlux.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AddMappingValidation"></a>

### ImportedHeatFlux.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ClearGeneratedData"></a>

### ImportedHeatFlux.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CopyTo"></a>

### ImportedHeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateParameter"></a>

### ImportedHeatFlux.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Delete"></a>

### ImportedHeatFlux.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Duplicate"></a>

### ImportedHeatFlux.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ExportToTextFile"></a>

### ImportedHeatFlux.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetActivateAtLoadStep"></a>

### ImportedHeatFlux.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetChildren"></a>

### ImportedHeatFlux.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetParameter"></a>

### ImportedHeatFlux.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GroupAllSimilarChildren"></a>

### ImportedHeatFlux.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GroupSimilarObjects"></a>

### ImportedHeatFlux.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Import"></a>

### ImportedHeatFlux.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ImportLoad"></a>

### ImportedHeatFlux.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.PropertyByAPIName"></a>

### ImportedHeatFlux.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.PropertyByName"></a>

### ImportedHeatFlux.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ReloadConfiguration"></a>

### ImportedHeatFlux.ReloadConfiguration()

Reload the Imported Load’s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RemoveParameter"></a>

### ImportedHeatFlux.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SetActivateAtLoadStep"></a>

### ImportedHeatFlux.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

