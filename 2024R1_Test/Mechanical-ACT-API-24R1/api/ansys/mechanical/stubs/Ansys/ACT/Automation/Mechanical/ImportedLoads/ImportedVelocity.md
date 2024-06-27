# ImportedVelocity

<a id="ImportedVelocity"></a>

### *class* ImportedVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedVelocity.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#ImportedVelocity.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedVelocity.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#ImportedVelocity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedVelocity.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedVelocity.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#ImportedVelocity.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedVelocity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedVelocity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedVelocity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedVelocity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedVelocity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedVelocity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedVelocity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedVelocity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedVelocity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedVelocity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedVelocity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedVelocity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedVelocity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedVelocity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedVelocity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`MappedData`](#ImportedVelocity.MappedData)                                                                                       | Gets or sets the MappedData.                                                                            |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`CutoffFrequency`](#ImportedVelocity.CutoffFrequency)                                                                             | Gets or sets the CutoffFrequency.                                                                       |
| [`MaximumTimeRange`](#ImportedVelocity.MaximumTimeRange)                                                                           | Gets or sets the MaximumTimeRange.                                                                      |
| [`MinimumTimeRange`](#ImportedVelocity.MinimumTimeRange)                                                                           | Gets or sets the MinimumTimeRange.                                                                      |
| [`SourceTimeDefinitionType`](../../../../Mechanical/DataModel/Enums/SourceTimeDefinitionType.md#SourceTimeDefinitionType)          | Gets or sets the SourceTimeDefinitionType.                                                              |
| [`WindowType`](../../../../Mechanical/DataModel/Enums/WindowType.md#WindowType)                                                    | Gets or sets the WindowType.                                                                            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedVelocity.Weighting)                                                                                         | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedVelocity.MappingControl)                                                                               | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedVelocity.DisplaySourcePoints)                                                                     | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedVelocity.DisplaySourcePointIds)                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedVelocity.DisplayInteriorPoints)                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedVelocity.DisplayProjectionPlane)                                                               | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedVelocity.Algorithm)                                                                                         | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedVelocity.BoundingBoxTolerance)                                                                   | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedVelocity.CreateNameSelectionForMappedNodes)                                         | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedVelocity.CreateNameSelectionForOutsideNodes)                                       | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedVelocity.CreateNameSelectionForUnmappedNodes)                                     | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedVelocity.Mapping)                                                                                             | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedVelocity.LegendMaximum)                                                                                 | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedVelocity.LegendMinimum)                                                                                 | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedVelocity.LegendRange)                                                                                     | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedVelocity.MaxOutsideDistance)                                                                       | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedVelocity.Method)                                                                                               | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedVelocity.OutsideDistanceCheck)                                                                   | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedVelocity.OutsideOption)                                                                                 | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedVelocity.Projection)                                                                                       | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedVelocity.RigidTransformSourceCoordinateSystem)                                   | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedVelocity.RigidTransformTargetCoordinateSystem)                                   | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedVelocity.ShellThicknessFactor)                                                                   | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedVelocity.SourceMaximum)                                                                                 | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedVelocity.SourceMinimum)                                                                                 | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedVelocity.Interpolation)                                                                                 | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedVelocity.UnmappedNodesName)                                                                         | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedVelocity.MappedNodesName)                                                                             | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedVelocity.OutsideNodesName)                                                                           | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedVelocity.Pinball)                                                                                             | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedVelocity.NumberOfPoints)                                                                               | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedVelocity.OrientationRealignment)                                                               | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedVelocity.Limit)                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedVelocity.KrigingCorrelationFunction)                                                       | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedVelocity.KrigingPolynom)                                                                               | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedVelocity.ExtrapolationTolerancePercent)                                                 | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedVelocity.ApplyAs)                                                                                             | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedVelocity.Suppressed)                                                                                       | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedVelocity.SharedRefBody)                                                                                 | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedVelocity.Location)                                                                                           | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedVelocity.Children)                                                                                           | Gets the list of children.                                                                              |
| [`Comments`](#ImportedVelocity.Comments)                                                                                           | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedVelocity.Figures)                                                                                             | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedVelocity.Images)                                                                                               | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedVelocity.Properties)                                                                                       | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedVelocity.VisibleProperties)                                                                         | Gets the list of properties that are visible for this object.                                           |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedVelocity
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedVelocity.MappedData"></a>

### *property* ImportedVelocity.MappedData *: Ansys.Mechanical.DataModel.Enums.MappedData | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.InternalObject"></a>

### *property* ImportedVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.CutoffFrequency"></a>

### *property* ImportedVelocity.CutoffFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutoffFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.MaximumTimeRange"></a>

### *property* ImportedVelocity.MaximumTimeRange *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeRange.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.MinimumTimeRange"></a>

### *property* ImportedVelocity.MinimumTimeRange *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeRange.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.SourceTimeDefinitionType"></a>

### *property* ImportedVelocity.SourceTimeDefinitionType *: [Ansys.Mechanical.DataModel.Enums.SourceTimeDefinitionType](../../../../Mechanical/DataModel/Enums/SourceTimeDefinitionType.md#SourceTimeDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceTimeDefinitionType.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.WindowType"></a>

### *property* ImportedVelocity.WindowType *: [Ansys.Mechanical.DataModel.Enums.WindowType](../../../../Mechanical/DataModel/Enums/WindowType.md#WindowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WindowType.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.DataModelObjectCategory"></a>

### *property* ImportedVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Weighting"></a>

### *property* ImportedVelocity.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.MappingControl"></a>

### *property* ImportedVelocity.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.DisplaySourcePoints"></a>

### *property* ImportedVelocity.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.DisplaySourcePointIds"></a>

### *property* ImportedVelocity.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.DisplayInteriorPoints"></a>

### *property* ImportedVelocity.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.DisplayProjectionPlane"></a>

### *property* ImportedVelocity.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Algorithm"></a>

### *property* ImportedVelocity.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.BoundingBoxTolerance"></a>

### *property* ImportedVelocity.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedVelocity.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedVelocity.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedVelocity.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Mapping"></a>

### *property* ImportedVelocity.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.LegendMaximum"></a>

### *property* ImportedVelocity.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.LegendMinimum"></a>

### *property* ImportedVelocity.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.LegendRange"></a>

### *property* ImportedVelocity.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.MaxOutsideDistance"></a>

### *property* ImportedVelocity.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Method"></a>

### *property* ImportedVelocity.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.OutsideDistanceCheck"></a>

### *property* ImportedVelocity.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.OutsideOption"></a>

### *property* ImportedVelocity.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Projection"></a>

### *property* ImportedVelocity.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.RigidBodyTransformationType"></a>

### *property* ImportedVelocity.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedVelocity.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedVelocity.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.ShellThicknessFactor"></a>

### *property* ImportedVelocity.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.SourceMaximum"></a>

### *property* ImportedVelocity.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.SourceMinimum"></a>

### *property* ImportedVelocity.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.VariableType"></a>

### *property* ImportedVelocity.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Interpolation"></a>

### *property* ImportedVelocity.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.UnmappedNodesName"></a>

### *property* ImportedVelocity.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.MappedNodesName"></a>

### *property* ImportedVelocity.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.OutsideNodesName"></a>

### *property* ImportedVelocity.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Pinball"></a>

### *property* ImportedVelocity.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.NumberOfPoints"></a>

### *property* ImportedVelocity.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.OrientationRealignment"></a>

### *property* ImportedVelocity.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Limit"></a>

### *property* ImportedVelocity.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.KrigingCorrelationFunction"></a>

### *property* ImportedVelocity.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.KrigingPolynom"></a>

### *property* ImportedVelocity.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.ExtrapolationTolerancePercent"></a>

### *property* ImportedVelocity.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.ApplyAs"></a>

### *property* ImportedVelocity.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Suppressed"></a>

### *property* ImportedVelocity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.SharedRefBody"></a>

### *property* ImportedVelocity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Location"></a>

### *property* ImportedVelocity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Children"></a>

### *property* ImportedVelocity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Comments"></a>

### *property* ImportedVelocity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Figures"></a>

### *property* ImportedVelocity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Images"></a>

### *property* ImportedVelocity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedVelocity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Properties"></a>

### *property* ImportedVelocity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.VisibleProperties"></a>

### *property* ImportedVelocity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedVelocity.GetActivateAtLoadStep"></a>

### ImportedVelocity.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.SetActivateAtLoadStep"></a>

### ImportedVelocity.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.ExportToTextFile"></a>

### ImportedVelocity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Import"></a>

### ImportedVelocity.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.ImportLoad"></a>

### ImportedVelocity.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.AddMappingValidation"></a>

### ImportedVelocity.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.ClearGeneratedData"></a>

### ImportedVelocity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Delete"></a>

### ImportedVelocity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.GetChildren"></a>

### ImportedVelocity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedVelocity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.AddComment"></a>

### ImportedVelocity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.AddFigure"></a>

### ImportedVelocity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.AddImage"></a>

### ImportedVelocity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Activate"></a>

### ImportedVelocity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.CopyTo"></a>

### ImportedVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.Duplicate"></a>

### ImportedVelocity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.GroupAllSimilarChildren"></a>

### ImportedVelocity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.GroupSimilarObjects"></a>

### ImportedVelocity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.PropertyByName"></a>

### ImportedVelocity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.PropertyByAPIName"></a>

### ImportedVelocity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.CreateParameter"></a>

### ImportedVelocity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.GetParameter"></a>

### ImportedVelocity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedVelocity.RemoveParameter"></a>

### ImportedVelocity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
