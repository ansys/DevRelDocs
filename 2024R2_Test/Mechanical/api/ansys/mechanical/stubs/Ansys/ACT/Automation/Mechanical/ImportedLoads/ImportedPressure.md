<a id="importedpressure"></a>

# ImportedPressure

<a id="ImportedPressure"></a>

### *class* ImportedPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedPressure.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToTextFile`](#ImportedPressure.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedPressure.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedPressure.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedPressure.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedPressure.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#ImportedPressure.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedPressure.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedPressure.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedPressure.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedPressure.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedPressure.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedPressure.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedPressure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedPressure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedPressure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedPressure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedPressure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedPressure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedPressure.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedPressure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedPressure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`LoadVectorNumber`](#ImportedPressure.LoadVectorNumber)                                                                           | Gets or sets the LoadVectorNumber.                                                                      |
| [`LoadVectorNumberImaginary`](#ImportedPressure.LoadVectorNumberImaginary)                                                         | Gets or sets the LoadVectorNumberImaginary.                                                             |
| [`AppliedBy`](#ImportedPressure.AppliedBy)                                                                                         | Gets or sets the AppliedBy.                                                                             |
| [`LoadVectorAssignment`](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment)                      | Gets or sets the LoadVectorAssignment.                                                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedPressure.Weighting)                                                                                         | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedPressure.MappingControl)                                                                               | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedPressure.DisplaySourcePoints)                                                                     | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedPressure.DisplaySourcePointIds)                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedPressure.DisplayInteriorPoints)                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedPressure.DisplayProjectionPlane)                                                               | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedPressure.Algorithm)                                                                                         | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedPressure.BoundingBoxTolerance)                                                                   | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedPressure.CreateNameSelectionForMappedNodes)                                         | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedPressure.CreateNameSelectionForOutsideNodes)                                       | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedPressure.CreateNameSelectionForUnmappedNodes)                                     | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedPressure.Mapping)                                                                                             | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedPressure.LegendMaximum)                                                                                 | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedPressure.LegendMinimum)                                                                                 | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedPressure.LegendRange)                                                                                     | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedPressure.MaxOutsideDistance)                                                                       | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedPressure.Method)                                                                                               | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedPressure.OutsideDistanceCheck)                                                                   | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedPressure.OutsideOption)                                                                                 | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedPressure.Projection)                                                                                       | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedPressure.RigidTransformSourceCoordinateSystem)                                   | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedPressure.RigidTransformTargetCoordinateSystem)                                   | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedPressure.ShellThicknessFactor)                                                                   | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedPressure.SourceMaximum)                                                                                 | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedPressure.SourceMinimum)                                                                                 | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedPressure.Interpolation)                                                                                 | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedPressure.UnmappedNodesName)                                                                         | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedPressure.MappedNodesName)                                                                             | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedPressure.OutsideNodesName)                                                                           | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedPressure.Pinball)                                                                                             | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedPressure.NumberOfPoints)                                                                               | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedPressure.OrientationRealignment)                                                               | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedPressure.Limit)                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedPressure.KrigingCorrelationFunction)                                                       | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedPressure.KrigingPolynom)                                                                               | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedPressure.ExtrapolationTolerancePercent)                                                 | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedPressure.ApplyAs)                                                                                             | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedPressure.Suppressed)                                                                                       | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedPressure.SharedRefBody)                                                                                 | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedPressure.Location)                                                                                           | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedPressure.Children)                                                                                           | Gets the list of children.                                                                              |
| [`Comments`](#ImportedPressure.Comments)                                                                                           | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedPressure.Figures)                                                                                             | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedPressure.Images)                                                                                               | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedPressure.Properties)                                                                                       | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedPressure.VisibleProperties)                                                                         | Gets the list of properties that are visible for this object.                                           |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedPressure
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedPressure.InternalObject"></a>

### *property* ImportedPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.LoadVectorNumber"></a>

### *property* ImportedPressure.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.LoadVectorNumberImaginary"></a>

### *property* ImportedPressure.LoadVectorNumberImaginary *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumberImaginary.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.AppliedBy"></a>

### *property* ImportedPressure.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../Mechanical/DataModel/Enums/LoadAppliedBy.md#LoadAppliedBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.LoadVectorAssignment"></a>

### *property* ImportedPressure.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.DataModelObjectCategory"></a>

### *property* ImportedPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Weighting"></a>

### *property* ImportedPressure.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.MappingControl"></a>

### *property* ImportedPressure.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.DisplaySourcePoints"></a>

### *property* ImportedPressure.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.DisplaySourcePointIds"></a>

### *property* ImportedPressure.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.DisplayInteriorPoints"></a>

### *property* ImportedPressure.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.DisplayProjectionPlane"></a>

### *property* ImportedPressure.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Algorithm"></a>

### *property* ImportedPressure.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.BoundingBoxTolerance"></a>

### *property* ImportedPressure.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedPressure.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedPressure.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedPressure.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Mapping"></a>

### *property* ImportedPressure.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.LegendMaximum"></a>

### *property* ImportedPressure.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.LegendMinimum"></a>

### *property* ImportedPressure.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.LegendRange"></a>

### *property* ImportedPressure.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.MaxOutsideDistance"></a>

### *property* ImportedPressure.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Method"></a>

### *property* ImportedPressure.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.OutsideDistanceCheck"></a>

### *property* ImportedPressure.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.OutsideOption"></a>

### *property* ImportedPressure.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Projection"></a>

### *property* ImportedPressure.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.RigidBodyTransformationType"></a>

### *property* ImportedPressure.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedPressure.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedPressure.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.ShellThicknessFactor"></a>

### *property* ImportedPressure.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.SourceMaximum"></a>

### *property* ImportedPressure.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.SourceMinimum"></a>

### *property* ImportedPressure.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.VariableType"></a>

### *property* ImportedPressure.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Interpolation"></a>

### *property* ImportedPressure.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.UnmappedNodesName"></a>

### *property* ImportedPressure.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.MappedNodesName"></a>

### *property* ImportedPressure.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.OutsideNodesName"></a>

### *property* ImportedPressure.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Pinball"></a>

### *property* ImportedPressure.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.NumberOfPoints"></a>

### *property* ImportedPressure.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.OrientationRealignment"></a>

### *property* ImportedPressure.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Limit"></a>

### *property* ImportedPressure.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.KrigingCorrelationFunction"></a>

### *property* ImportedPressure.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.KrigingPolynom"></a>

### *property* ImportedPressure.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.ExtrapolationTolerancePercent"></a>

### *property* ImportedPressure.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.ApplyAs"></a>

### *property* ImportedPressure.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Suppressed"></a>

### *property* ImportedPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.SharedRefBody"></a>

### *property* ImportedPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Location"></a>

### *property* ImportedPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Children"></a>

### *property* ImportedPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Comments"></a>

### *property* ImportedPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Figures"></a>

### *property* ImportedPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Images"></a>

### *property* ImportedPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Properties"></a>

### *property* ImportedPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.VisibleProperties"></a>

### *property* ImportedPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedPressure.ExportToTextFile"></a>

### ImportedPressure.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Import"></a>

### ImportedPressure.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.ImportLoad"></a>

### ImportedPressure.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.GetActivateAtLoadStep"></a>

### ImportedPressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.SetActivateAtLoadStep"></a>

### ImportedPressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.AddMappingValidation"></a>

### ImportedPressure.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.ClearGeneratedData"></a>

### ImportedPressure.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Delete"></a>

### ImportedPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.GetChildren"></a>

### ImportedPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.AddComment"></a>

### ImportedPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.AddFigure"></a>

### ImportedPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.AddImage"></a>

### ImportedPressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Activate"></a>

### ImportedPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.CopyTo"></a>

### ImportedPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.Duplicate"></a>

### ImportedPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.GroupAllSimilarChildren"></a>

### ImportedPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.GroupSimilarObjects"></a>

### ImportedPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.PropertyByName"></a>

### ImportedPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.PropertyByAPIName"></a>

### ImportedPressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.CreateParameter"></a>

### ImportedPressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.GetParameter"></a>

### ImportedPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPressure.RemoveParameter"></a>

### ImportedPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
