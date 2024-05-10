<a id="importedheatflux"></a>

# ImportedHeatFlux

<a id="ImportedHeatFlux"></a>

### *class* ImportedHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedHeatFlux.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportToTextFile`](#ImportedHeatFlux.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#ImportedHeatFlux.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedHeatFlux.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedHeatFlux.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedHeatFlux.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#ImportedHeatFlux.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedHeatFlux.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedHeatFlux.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedHeatFlux.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedHeatFlux.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedHeatFlux.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedHeatFlux.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedHeatFlux.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedHeatFlux.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedHeatFlux.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedHeatFlux.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedHeatFlux.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedHeatFlux.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedHeatFlux.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedHeatFlux.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedHeatFlux.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedHeatFlux.Weighting)                                                                                         | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedHeatFlux.MappingControl)                                                                               | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedHeatFlux.DisplaySourcePoints)                                                                     | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedHeatFlux.DisplaySourcePointIds)                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedHeatFlux.DisplayInteriorPoints)                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedHeatFlux.DisplayProjectionPlane)                                                               | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedHeatFlux.Algorithm)                                                                                         | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedHeatFlux.BoundingBoxTolerance)                                                                   | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedHeatFlux.CreateNameSelectionForMappedNodes)                                         | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedHeatFlux.CreateNameSelectionForOutsideNodes)                                       | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedHeatFlux.CreateNameSelectionForUnmappedNodes)                                     | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedHeatFlux.Mapping)                                                                                             | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedHeatFlux.LegendMaximum)                                                                                 | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedHeatFlux.LegendMinimum)                                                                                 | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedHeatFlux.LegendRange)                                                                                     | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedHeatFlux.MaxOutsideDistance)                                                                       | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedHeatFlux.Method)                                                                                               | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedHeatFlux.OutsideDistanceCheck)                                                                   | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedHeatFlux.OutsideOption)                                                                                 | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedHeatFlux.Projection)                                                                                       | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedHeatFlux.RigidTransformSourceCoordinateSystem)                                   | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedHeatFlux.RigidTransformTargetCoordinateSystem)                                   | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedHeatFlux.ShellThicknessFactor)                                                                   | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedHeatFlux.SourceMaximum)                                                                                 | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedHeatFlux.SourceMinimum)                                                                                 | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedHeatFlux.Interpolation)                                                                                 | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedHeatFlux.UnmappedNodesName)                                                                         | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedHeatFlux.MappedNodesName)                                                                             | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedHeatFlux.OutsideNodesName)                                                                           | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedHeatFlux.Pinball)                                                                                             | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedHeatFlux.NumberOfPoints)                                                                               | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedHeatFlux.OrientationRealignment)                                                               | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedHeatFlux.Limit)                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedHeatFlux.KrigingCorrelationFunction)                                                       | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedHeatFlux.KrigingPolynom)                                                                               | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedHeatFlux.ExtrapolationTolerancePercent)                                                 | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedHeatFlux.ApplyAs)                                                                                             | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedHeatFlux.Suppressed)                                                                                       | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedHeatFlux.SharedRefBody)                                                                                 | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedHeatFlux.Location)                                                                                           | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedHeatFlux.Children)                                                                                           | Gets the list of children.                                                                              |
| [`Comments`](#ImportedHeatFlux.Comments)                                                                                           | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedHeatFlux.Figures)                                                                                             | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedHeatFlux.Images)                                                                                               | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedHeatFlux.Properties)                                                                                       | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedHeatFlux.VisibleProperties)                                                                         | Gets the list of properties that are visible for this object.                                           |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedHeatFlux
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedHeatFlux.InternalObject"></a>

### *property* ImportedHeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DataModelObjectCategory"></a>

### *property* ImportedHeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Weighting"></a>

### *property* ImportedHeatFlux.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.MappingControl"></a>

### *property* ImportedHeatFlux.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplaySourcePoints"></a>

### *property* ImportedHeatFlux.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplaySourcePointIds"></a>

### *property* ImportedHeatFlux.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplayInteriorPoints"></a>

### *property* ImportedHeatFlux.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.DisplayProjectionPlane"></a>

### *property* ImportedHeatFlux.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Algorithm"></a>

### *property* ImportedHeatFlux.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.BoundingBoxTolerance"></a>

### *property* ImportedHeatFlux.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedHeatFlux.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedHeatFlux.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedHeatFlux.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Mapping"></a>

### *property* ImportedHeatFlux.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.LegendMaximum"></a>

### *property* ImportedHeatFlux.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.LegendMinimum"></a>

### *property* ImportedHeatFlux.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.LegendRange"></a>

### *property* ImportedHeatFlux.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.MaxOutsideDistance"></a>

### *property* ImportedHeatFlux.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Method"></a>

### *property* ImportedHeatFlux.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OutsideDistanceCheck"></a>

### *property* ImportedHeatFlux.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OutsideOption"></a>

### *property* ImportedHeatFlux.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Projection"></a>

### *property* ImportedHeatFlux.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RigidBodyTransformationType"></a>

### *property* ImportedHeatFlux.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedHeatFlux.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedHeatFlux.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ShellThicknessFactor"></a>

### *property* ImportedHeatFlux.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="ImportedHeatFlux.VariableType"></a>

### *property* ImportedHeatFlux.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Interpolation"></a>

### *property* ImportedHeatFlux.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.UnmappedNodesName"></a>

### *property* ImportedHeatFlux.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.MappedNodesName"></a>

### *property* ImportedHeatFlux.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OutsideNodesName"></a>

### *property* ImportedHeatFlux.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Pinball"></a>

### *property* ImportedHeatFlux.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.NumberOfPoints"></a>

### *property* ImportedHeatFlux.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.OrientationRealignment"></a>

### *property* ImportedHeatFlux.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Limit"></a>

### *property* ImportedHeatFlux.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.KrigingCorrelationFunction"></a>

### *property* ImportedHeatFlux.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.KrigingPolynom"></a>

### *property* ImportedHeatFlux.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ExtrapolationTolerancePercent"></a>

### *property* ImportedHeatFlux.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ApplyAs"></a>

### *property* ImportedHeatFlux.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Suppressed"></a>

### *property* ImportedHeatFlux.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SharedRefBody"></a>

### *property* ImportedHeatFlux.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Location"></a>

### *property* ImportedHeatFlux.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Children"></a>

### *property* ImportedHeatFlux.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Comments"></a>

### *property* ImportedHeatFlux.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Figures"></a>

### *property* ImportedHeatFlux.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Images"></a>

### *property* ImportedHeatFlux.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedHeatFlux.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Properties"></a>

### *property* ImportedHeatFlux.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.VisibleProperties"></a>

### *property* ImportedHeatFlux.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedHeatFlux.ExportToTextFile"></a>

### ImportedHeatFlux.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Import"></a>

### ImportedHeatFlux.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ImportLoad"></a>

### ImportedHeatFlux.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetActivateAtLoadStep"></a>

### ImportedHeatFlux.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.SetActivateAtLoadStep"></a>

### ImportedHeatFlux.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.AddMappingValidation"></a>

### ImportedHeatFlux.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.ClearGeneratedData"></a>

### ImportedHeatFlux.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Delete"></a>

### ImportedHeatFlux.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetChildren"></a>

### ImportedHeatFlux.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedHeatFlux.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### ImportedHeatFlux.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Activate"></a>

### ImportedHeatFlux.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CopyTo"></a>

### ImportedHeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.Duplicate"></a>

### ImportedHeatFlux.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GroupAllSimilarChildren"></a>

### ImportedHeatFlux.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GroupSimilarObjects"></a>

### ImportedHeatFlux.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.PropertyByName"></a>

### ImportedHeatFlux.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.PropertyByAPIName"></a>

### ImportedHeatFlux.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.CreateParameter"></a>

### ImportedHeatFlux.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.GetParameter"></a>

### ImportedHeatFlux.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatFlux.RemoveParameter"></a>

### ImportedHeatFlux.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
