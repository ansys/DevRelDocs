# ImportedTemperature

<a id="ImportedTemperature"></a>

### *class* ImportedTemperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedTemperature.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#ImportedTemperature.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedTemperature.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#ImportedTemperature.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedTemperature.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedTemperature.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#ImportedTemperature.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedTemperature.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedTemperature.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedTemperature.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedTemperature.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedTemperature.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedTemperature.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedTemperature.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedTemperature.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedTemperature.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedTemperature.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedTemperature.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedTemperature.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedTemperature.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedTemperature.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedTemperature.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedTemperature.Weighting)                                                                                      | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedTemperature.MappingControl)                                                                            | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedTemperature.DisplaySourcePoints)                                                                  | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedTemperature.DisplaySourcePointIds)                                                              | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedTemperature.DisplayInteriorPoints)                                                              | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedTemperature.DisplayProjectionPlane)                                                            | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedTemperature.Algorithm)                                                                                      | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedTemperature.BoundingBoxTolerance)                                                                | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedTemperature.CreateNameSelectionForMappedNodes)                                      | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedTemperature.CreateNameSelectionForOutsideNodes)                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedTemperature.CreateNameSelectionForUnmappedNodes)                                  | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedTemperature.Mapping)                                                                                          | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedTemperature.LegendMaximum)                                                                              | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedTemperature.LegendMinimum)                                                                              | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedTemperature.LegendRange)                                                                                  | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedTemperature.MaxOutsideDistance)                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedTemperature.Method)                                                                                            | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedTemperature.OutsideDistanceCheck)                                                                | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedTemperature.OutsideOption)                                                                              | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedTemperature.Projection)                                                                                    | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](./../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedTemperature.RigidTransformSourceCoordinateSystem)                                | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedTemperature.RigidTransformTargetCoordinateSystem)                                | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedTemperature.ShellThicknessFactor)                                                                | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedTemperature.SourceMaximum)                                                                              | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedTemperature.SourceMinimum)                                                                              | SourceMinimum property.                                                                                 |
| [`VariableType`](./../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedTemperature.Interpolation)                                                                              | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedTemperature.UnmappedNodesName)                                                                      | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedTemperature.MappedNodesName)                                                                          | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedTemperature.OutsideNodesName)                                                                        | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedTemperature.Pinball)                                                                                          | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedTemperature.NumberOfPoints)                                                                            | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedTemperature.OrientationRealignment)                                                            | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedTemperature.Limit)                                                                                              | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedTemperature.KrigingCorrelationFunction)                                                    | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedTemperature.KrigingPolynom)                                                                            | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedTemperature.ExtrapolationTolerancePercent)                                              | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedTemperature.ApplyAs)                                                                                          | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedTemperature.Suppressed)                                                                                    | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedTemperature.SharedRefBody)                                                                              | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedTemperature.Location)                                                                                        | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedTemperature.Children)                                                                                        | Gets the list of children.                                                                              |
| [`Comments`](#ImportedTemperature.Comments)                                                                                        | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedTemperature.Figures)                                                                                          | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedTemperature.Images)                                                                                            | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedTemperature.Properties)                                                                                    | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedTemperature.VisibleProperties)                                                                      | Gets the list of properties that are visible for this object.                                           |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedTemperature
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedTemperature.InternalObject"></a>

### *property* ImportedTemperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DataModelObjectCategory"></a>

### *property* ImportedTemperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Weighting"></a>

### *property* ImportedTemperature.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](./../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.MappingControl"></a>

### *property* ImportedTemperature.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](./../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DisplaySourcePoints"></a>

### *property* ImportedTemperature.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DisplaySourcePointIds"></a>

### *property* ImportedTemperature.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DisplayInteriorPoints"></a>

### *property* ImportedTemperature.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.DisplayProjectionPlane"></a>

### *property* ImportedTemperature.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Algorithm"></a>

### *property* ImportedTemperature.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](./../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.BoundingBoxTolerance"></a>

### *property* ImportedTemperature.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedTemperature.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedTemperature.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedTemperature.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Mapping"></a>

### *property* ImportedTemperature.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](./../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.LegendMaximum"></a>

### *property* ImportedTemperature.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.LegendMinimum"></a>

### *property* ImportedTemperature.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.LegendRange"></a>

### *property* ImportedTemperature.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](./../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.MaxOutsideDistance"></a>

### *property* ImportedTemperature.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Method"></a>

### *property* ImportedTemperature.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](./../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.OutsideDistanceCheck"></a>

### *property* ImportedTemperature.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.OutsideOption"></a>

### *property* ImportedTemperature.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](./../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Projection"></a>

### *property* ImportedTemperature.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.RigidBodyTransformationType"></a>

### *property* ImportedTemperature.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](./../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedTemperature.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedTemperature.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ShellThicknessFactor"></a>

### *property* ImportedTemperature.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="ImportedTemperature.VariableType"></a>

### *property* ImportedTemperature.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](./../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Interpolation"></a>

### *property* ImportedTemperature.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](./../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.UnmappedNodesName"></a>

### *property* ImportedTemperature.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.MappedNodesName"></a>

### *property* ImportedTemperature.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.OutsideNodesName"></a>

### *property* ImportedTemperature.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Pinball"></a>

### *property* ImportedTemperature.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.NumberOfPoints"></a>

### *property* ImportedTemperature.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.OrientationRealignment"></a>

### *property* ImportedTemperature.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Limit"></a>

### *property* ImportedTemperature.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.KrigingCorrelationFunction"></a>

### *property* ImportedTemperature.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](./../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.KrigingPolynom"></a>

### *property* ImportedTemperature.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](./../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ExtrapolationTolerancePercent"></a>

### *property* ImportedTemperature.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ApplyAs"></a>

### *property* ImportedTemperature.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](./../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Suppressed"></a>

### *property* ImportedTemperature.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.SharedRefBody"></a>

### *property* ImportedTemperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](./../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Location"></a>

### *property* ImportedTemperature.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Children"></a>

### *property* ImportedTemperature.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Comments"></a>

### *property* ImportedTemperature.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Figures"></a>

### *property* ImportedTemperature.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Images"></a>

### *property* ImportedTemperature.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedTemperature.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Properties"></a>

### *property* ImportedTemperature.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.VisibleProperties"></a>

### *property* ImportedTemperature.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedTemperature.GetActivateAtLoadStep"></a>

### ImportedTemperature.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.SetActivateAtLoadStep"></a>

### ImportedTemperature.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ExportToTextFile"></a>

### ImportedTemperature.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Import"></a>

### ImportedTemperature.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ImportLoad"></a>

### ImportedTemperature.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.AddMappingValidation"></a>

### ImportedTemperature.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.ClearGeneratedData"></a>

### ImportedTemperature.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Delete"></a>

### ImportedTemperature.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.GetChildren"></a>

### ImportedTemperature.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedTemperature.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### ImportedTemperature.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Activate"></a>

### ImportedTemperature.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CopyTo"></a>

### ImportedTemperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.Duplicate"></a>

### ImportedTemperature.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.GroupAllSimilarChildren"></a>

### ImportedTemperature.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.GroupSimilarObjects"></a>

### ImportedTemperature.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.PropertyByName"></a>

### ImportedTemperature.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.PropertyByAPIName"></a>

### ImportedTemperature.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.CreateParameter"></a>

### ImportedTemperature.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.GetParameter"></a>

### ImportedTemperature.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTemperature.RemoveParameter"></a>

### ImportedTemperature.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
