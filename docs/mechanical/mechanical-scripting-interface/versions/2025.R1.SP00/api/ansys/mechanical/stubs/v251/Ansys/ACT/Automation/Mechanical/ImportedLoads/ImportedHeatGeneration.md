# `ImportedHeatGeneration`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatGeneration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatGeneration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedHeatGeneration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`Activate`](#ImportedHeatGeneration.Activate)                               | Activate the current object.                                                            |
| [`AddComment`](#ImportedHeatGeneration.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ImportedHeatGeneration.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ImportedHeatGeneration.AddImage)                               | Creates a new child Image.                                                              |
| [`AddMappingValidation`](#ImportedHeatGeneration.AddMappingValidation)       | Creates a new MappingValidation                                                         |
| [`ClearGeneratedData`](#ImportedHeatGeneration.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                      |
| [`CopyTo`](#ImportedHeatGeneration.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`CreateParameter`](#ImportedHeatGeneration.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`Delete`](#ImportedHeatGeneration.Delete)                                   | Run the Delete action.                                                                  |
| [`Duplicate`](#ImportedHeatGeneration.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`ExportToTextFile`](#ImportedHeatGeneration.ExportToTextFile)               | Run the ExportToTextFile action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedHeatGeneration.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                           |
| [`GetChildren`](#ImportedHeatGeneration.GetChildren)                         | Gets the list of children, filtered by type.                                            |
| [`GetParameter`](#ImportedHeatGeneration.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`GroupAllSimilarChildren`](#ImportedHeatGeneration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ImportedHeatGeneration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`Import`](#ImportedHeatGeneration.Import)                                   | Import.                                                                                 |
| [`ImportLoad`](#ImportedHeatGeneration.ImportLoad)                           | Run the ImportLoad action.                                                              |
| [`PropertyByAPIName`](#ImportedHeatGeneration.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`PropertyByName`](#ImportedHeatGeneration.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`ReloadConfiguration`](#ImportedHeatGeneration.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available). |
| [`RemoveParameter`](#ImportedHeatGeneration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |
| [`SetActivateAtLoadStep`](#ImportedHeatGeneration.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedHeatGeneration.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedHeatGeneration.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedHeatGeneration.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedHeatGeneration.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedHeatGeneration.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedHeatGeneration.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedHeatGeneration.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedHeatGeneration.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedHeatGeneration.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedHeatGeneration.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedHeatGeneration.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedHeatGeneration.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedHeatGeneration.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedHeatGeneration.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedHeatGeneration.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedHeatGeneration.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedHeatGeneration.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedHeatGeneration.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedHeatGeneration.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedHeatGeneration.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`Limit`](#ImportedHeatGeneration.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedHeatGeneration.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedHeatGeneration.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedHeatGeneration.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedHeatGeneration.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedHeatGeneration.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedHeatGeneration.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedHeatGeneration.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedHeatGeneration.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedHeatGeneration.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedHeatGeneration.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedHeatGeneration.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedHeatGeneration.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedHeatGeneration.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedHeatGeneration.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedHeatGeneration.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedHeatGeneration.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedHeatGeneration.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedHeatGeneration.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedHeatGeneration.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedHeatGeneration.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedHeatGeneration.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedHeatGeneration.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedHeatGeneration.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedHeatGeneration.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedHeatGeneration.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedHeatGeneration.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedHeatGeneration.Algorithm"></a>

### *property* ImportedHeatGeneration.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ApplyAs"></a>

### *property* ImportedHeatGeneration.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.BoundingBoxTolerance"></a>

### *property* ImportedHeatGeneration.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Children"></a>

### *property* ImportedHeatGeneration.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Comments"></a>

### *property* ImportedHeatGeneration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedHeatGeneration.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedHeatGeneration.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedHeatGeneration.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DataModelObjectCategory"></a>

### *property* ImportedHeatGeneration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DisplayInteriorPoints"></a>

### *property* ImportedHeatGeneration.DisplayInteriorPoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DisplayProjectionPlane"></a>

### *property* ImportedHeatGeneration.DisplayProjectionPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DisplaySourcePointIds"></a>

### *property* ImportedHeatGeneration.DisplaySourcePointIds *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DisplaySourcePoints"></a>

### *property* ImportedHeatGeneration.DisplaySourcePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ExtrapolationTolerancePercent"></a>

### *property* ImportedHeatGeneration.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Figures"></a>

### *property* ImportedHeatGeneration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Images"></a>

### *property* ImportedHeatGeneration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.InternalObject"></a>

### *property* ImportedHeatGeneration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Interpolation"></a>

### *property* ImportedHeatGeneration.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.KrigingCorrelationFunction"></a>

### *property* ImportedHeatGeneration.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.KrigingPolynom"></a>

### *property* ImportedHeatGeneration.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Limit"></a>

### *property* ImportedHeatGeneration.Limit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Location"></a>

### *property* ImportedHeatGeneration.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.MappedNodesName"></a>

### *property* ImportedHeatGeneration.MappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Mapping"></a>

### *property* ImportedHeatGeneration.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.MappingControl"></a>

### *property* ImportedHeatGeneration.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.MaxOutsideDistance"></a>

### *property* ImportedHeatGeneration.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Method"></a>

### *property* ImportedHeatGeneration.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.NumberOfPoints"></a>

### *property* ImportedHeatGeneration.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.OrientationRealignment"></a>

### *property* ImportedHeatGeneration.OrientationRealignment *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.OutsideDistanceCheck"></a>

### *property* ImportedHeatGeneration.OutsideDistanceCheck *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.OutsideNodesName"></a>

### *property* ImportedHeatGeneration.OutsideNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.OutsideOption"></a>

### *property* ImportedHeatGeneration.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Pinball"></a>

### *property* ImportedHeatGeneration.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Projection"></a>

### *property* ImportedHeatGeneration.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Properties"></a>

### *property* ImportedHeatGeneration.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.RigidBodyTransformationType"></a>

### *property* ImportedHeatGeneration.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedHeatGeneration.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedHeatGeneration.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.SharedRefBody"></a>

### *property* ImportedHeatGeneration.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ShellThicknessFactor"></a>

### *property* ImportedHeatGeneration.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.SourceMaximum"></a>

### *property* ImportedHeatGeneration.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.SourceMinimum"></a>

### *property* ImportedHeatGeneration.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Suppressed"></a>

### *property* ImportedHeatGeneration.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.UnmappedNodesName"></a>

### *property* ImportedHeatGeneration.UnmappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.VariableType"></a>

### *property* ImportedHeatGeneration.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.VisibleProperties"></a>

### *property* ImportedHeatGeneration.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Weighting"></a>

### *property* ImportedHeatGeneration.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedHeatGeneration.Activate"></a>

### ImportedHeatGeneration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.AddComment"></a>

### ImportedHeatGeneration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.AddFigure"></a>

### ImportedHeatGeneration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.AddImage"></a>

### ImportedHeatGeneration.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.AddMappingValidation"></a>

### ImportedHeatGeneration.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ClearGeneratedData"></a>

### ImportedHeatGeneration.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CopyTo"></a>

### ImportedHeatGeneration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CreateParameter"></a>

### ImportedHeatGeneration.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Delete"></a>

### ImportedHeatGeneration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Duplicate"></a>

### ImportedHeatGeneration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ExportToTextFile"></a>

### ImportedHeatGeneration.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GetActivateAtLoadStep"></a>

### ImportedHeatGeneration.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GetChildren"></a>

### ImportedHeatGeneration.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GetParameter"></a>

### ImportedHeatGeneration.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GroupAllSimilarChildren"></a>

### ImportedHeatGeneration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GroupSimilarObjects"></a>

### ImportedHeatGeneration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Import"></a>

### ImportedHeatGeneration.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ImportLoad"></a>

### ImportedHeatGeneration.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.PropertyByAPIName"></a>

### ImportedHeatGeneration.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.PropertyByName"></a>

### ImportedHeatGeneration.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ReloadConfiguration"></a>

### ImportedHeatGeneration.ReloadConfiguration()

Reload the Imported Load’s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.RemoveParameter"></a>

### ImportedHeatGeneration.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.SetActivateAtLoadStep"></a>

### ImportedHeatGeneration.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

