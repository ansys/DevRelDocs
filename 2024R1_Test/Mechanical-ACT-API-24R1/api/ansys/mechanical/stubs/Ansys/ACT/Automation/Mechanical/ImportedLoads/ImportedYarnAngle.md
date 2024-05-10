# ImportedYarnAngle

<a id="ImportedYarnAngle"></a>

### *class* ImportedYarnAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedYarnAngle.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToTextFile`](#ImportedYarnAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedYarnAngle.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedYarnAngle.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedYarnAngle.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedYarnAngle.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#ImportedYarnAngle.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedYarnAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedYarnAngle.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedYarnAngle.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedYarnAngle.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedYarnAngle.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedYarnAngle.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedYarnAngle.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedYarnAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedYarnAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedYarnAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedYarnAngle.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedYarnAngle.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedYarnAngle.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedYarnAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedYarnAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedYarnAngle.Weighting)                                                                                        | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedYarnAngle.MappingControl)                                                                              | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedYarnAngle.DisplaySourcePoints)                                                                    | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedYarnAngle.DisplaySourcePointIds)                                                                | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedYarnAngle.DisplayInteriorPoints)                                                                | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedYarnAngle.DisplayProjectionPlane)                                                              | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedYarnAngle.Algorithm)                                                                                        | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedYarnAngle.BoundingBoxTolerance)                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedYarnAngle.CreateNameSelectionForMappedNodes)                                        | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedYarnAngle.CreateNameSelectionForOutsideNodes)                                      | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedYarnAngle.CreateNameSelectionForUnmappedNodes)                                    | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedYarnAngle.Mapping)                                                                                            | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedYarnAngle.LegendMaximum)                                                                                | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedYarnAngle.LegendMinimum)                                                                                | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedYarnAngle.LegendRange)                                                                                    | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedYarnAngle.MaxOutsideDistance)                                                                      | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedYarnAngle.Method)                                                                                              | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedYarnAngle.OutsideDistanceCheck)                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedYarnAngle.OutsideOption)                                                                                | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedYarnAngle.Projection)                                                                                      | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](./../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedYarnAngle.RigidTransformSourceCoordinateSystem)                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedYarnAngle.RigidTransformTargetCoordinateSystem)                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedYarnAngle.ShellThicknessFactor)                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedYarnAngle.SourceMaximum)                                                                                | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedYarnAngle.SourceMinimum)                                                                                | SourceMinimum property.                                                                                 |
| [`VariableType`](./../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedYarnAngle.Interpolation)                                                                                | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedYarnAngle.UnmappedNodesName)                                                                        | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedYarnAngle.MappedNodesName)                                                                            | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedYarnAngle.OutsideNodesName)                                                                          | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedYarnAngle.Pinball)                                                                                            | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedYarnAngle.NumberOfPoints)                                                                              | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedYarnAngle.OrientationRealignment)                                                              | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedYarnAngle.Limit)                                                                                                | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedYarnAngle.KrigingCorrelationFunction)                                                      | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedYarnAngle.KrigingPolynom)                                                                              | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedYarnAngle.ExtrapolationTolerancePercent)                                                | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedYarnAngle.ApplyAs)                                                                                            | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedYarnAngle.Suppressed)                                                                                      | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedYarnAngle.SharedRefBody)                                                                                | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedYarnAngle.Location)                                                                                          | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedYarnAngle.Children)                                                                                          | Gets the list of children.                                                                              |
| [`Comments`](#ImportedYarnAngle.Comments)                                                                                          | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedYarnAngle.Figures)                                                                                            | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedYarnAngle.Images)                                                                                              | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedYarnAngle.Properties)                                                                                      | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedYarnAngle.VisibleProperties)                                                                        | Gets the list of properties that are visible for this object.                                           |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedYarnAngle
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedYarnAngle.InternalObject"></a>

### *property* ImportedYarnAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DataModelObjectCategory"></a>

### *property* ImportedYarnAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Weighting"></a>

### *property* ImportedYarnAngle.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](./../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.MappingControl"></a>

### *property* ImportedYarnAngle.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](./../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DisplaySourcePoints"></a>

### *property* ImportedYarnAngle.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DisplaySourcePointIds"></a>

### *property* ImportedYarnAngle.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DisplayInteriorPoints"></a>

### *property* ImportedYarnAngle.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DisplayProjectionPlane"></a>

### *property* ImportedYarnAngle.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Algorithm"></a>

### *property* ImportedYarnAngle.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](./../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.BoundingBoxTolerance"></a>

### *property* ImportedYarnAngle.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedYarnAngle.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedYarnAngle.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedYarnAngle.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Mapping"></a>

### *property* ImportedYarnAngle.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](./../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.LegendMaximum"></a>

### *property* ImportedYarnAngle.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.LegendMinimum"></a>

### *property* ImportedYarnAngle.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.LegendRange"></a>

### *property* ImportedYarnAngle.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](./../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.MaxOutsideDistance"></a>

### *property* ImportedYarnAngle.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Method"></a>

### *property* ImportedYarnAngle.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](./../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.OutsideDistanceCheck"></a>

### *property* ImportedYarnAngle.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.OutsideOption"></a>

### *property* ImportedYarnAngle.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](./../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Projection"></a>

### *property* ImportedYarnAngle.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.RigidBodyTransformationType"></a>

### *property* ImportedYarnAngle.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](./../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedYarnAngle.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedYarnAngle.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ShellThicknessFactor"></a>

### *property* ImportedYarnAngle.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.SourceMaximum"></a>

### *property* ImportedYarnAngle.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.SourceMinimum"></a>

### *property* ImportedYarnAngle.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.VariableType"></a>

### *property* ImportedYarnAngle.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](./../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Interpolation"></a>

### *property* ImportedYarnAngle.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](./../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.UnmappedNodesName"></a>

### *property* ImportedYarnAngle.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.MappedNodesName"></a>

### *property* ImportedYarnAngle.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.OutsideNodesName"></a>

### *property* ImportedYarnAngle.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Pinball"></a>

### *property* ImportedYarnAngle.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.NumberOfPoints"></a>

### *property* ImportedYarnAngle.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.OrientationRealignment"></a>

### *property* ImportedYarnAngle.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Limit"></a>

### *property* ImportedYarnAngle.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.KrigingCorrelationFunction"></a>

### *property* ImportedYarnAngle.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](./../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.KrigingPolynom"></a>

### *property* ImportedYarnAngle.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](./../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ExtrapolationTolerancePercent"></a>

### *property* ImportedYarnAngle.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ApplyAs"></a>

### *property* ImportedYarnAngle.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](./../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Suppressed"></a>

### *property* ImportedYarnAngle.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.SharedRefBody"></a>

### *property* ImportedYarnAngle.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](./../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Location"></a>

### *property* ImportedYarnAngle.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Children"></a>

### *property* ImportedYarnAngle.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Comments"></a>

### *property* ImportedYarnAngle.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Figures"></a>

### *property* ImportedYarnAngle.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Images"></a>

### *property* ImportedYarnAngle.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedYarnAngle.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Properties"></a>

### *property* ImportedYarnAngle.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.VisibleProperties"></a>

### *property* ImportedYarnAngle.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedYarnAngle.ExportToTextFile"></a>

### ImportedYarnAngle.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Import"></a>

### ImportedYarnAngle.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ImportLoad"></a>

### ImportedYarnAngle.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GetActivateAtLoadStep"></a>

### ImportedYarnAngle.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.SetActivateAtLoadStep"></a>

### ImportedYarnAngle.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.AddMappingValidation"></a>

### ImportedYarnAngle.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ClearGeneratedData"></a>

### ImportedYarnAngle.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Delete"></a>

### ImportedYarnAngle.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GetChildren"></a>

### ImportedYarnAngle.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedYarnAngle.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.AddComment"></a>

### ImportedYarnAngle.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.AddFigure"></a>

### ImportedYarnAngle.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.AddImage"></a>

### ImportedYarnAngle.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Activate"></a>

### ImportedYarnAngle.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CopyTo"></a>

### ImportedYarnAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Duplicate"></a>

### ImportedYarnAngle.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GroupAllSimilarChildren"></a>

### ImportedYarnAngle.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GroupSimilarObjects"></a>

### ImportedYarnAngle.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.PropertyByName"></a>

### ImportedYarnAngle.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.PropertyByAPIName"></a>

### ImportedYarnAngle.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CreateParameter"></a>

### ImportedYarnAngle.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GetParameter"></a>

### ImportedYarnAngle.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.RemoveParameter"></a>

### ImportedYarnAngle.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
