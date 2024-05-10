<a id="importedbodytemperature"></a>

# ImportedBodyTemperature

<a id="ImportedBodyTemperature"></a>

### *class* ImportedBodyTemperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedBodyTemperature.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`GetActivateAtLoadStep`](#ImportedBodyTemperature.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#ImportedBodyTemperature.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#ImportedBodyTemperature.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedBodyTemperature.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedBodyTemperature.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#ImportedBodyTemperature.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedBodyTemperature.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedBodyTemperature.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedBodyTemperature.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedBodyTemperature.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedBodyTemperature.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedBodyTemperature.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedBodyTemperature.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedBodyTemperature.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedBodyTemperature.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedBodyTemperature.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedBodyTemperature.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedBodyTemperature.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedBodyTemperature.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedBodyTemperature.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedBodyTemperature.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ApplyToInitialMesh`](#ImportedBodyTemperature.ApplyToInitialMesh)                                                                | Gets or sets the ApplyToInitialMesh.                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`LoadVectorNumber`](#ImportedBodyTemperature.LoadVectorNumber)                                                                    | Gets or sets the LoadVectorNumber.                                                                      |
| [`LoadVectorAssignment`](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment)                      | Gets or sets the LoadVectorAssignment.                                                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedBodyTemperature.Weighting)                                                                                  | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedBodyTemperature.MappingControl)                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedBodyTemperature.DisplaySourcePoints)                                                              | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedBodyTemperature.DisplaySourcePointIds)                                                          | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedBodyTemperature.DisplayInteriorPoints)                                                          | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedBodyTemperature.DisplayProjectionPlane)                                                        | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedBodyTemperature.Algorithm)                                                                                  | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedBodyTemperature.BoundingBoxTolerance)                                                            | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedBodyTemperature.CreateNameSelectionForMappedNodes)                                  | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedBodyTemperature.CreateNameSelectionForOutsideNodes)                                | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedBodyTemperature.CreateNameSelectionForUnmappedNodes)                              | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedBodyTemperature.Mapping)                                                                                      | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedBodyTemperature.LegendMaximum)                                                                          | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedBodyTemperature.LegendMinimum)                                                                          | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedBodyTemperature.LegendRange)                                                                              | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedBodyTemperature.MaxOutsideDistance)                                                                | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedBodyTemperature.Method)                                                                                        | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedBodyTemperature.OutsideDistanceCheck)                                                            | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedBodyTemperature.OutsideOption)                                                                          | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedBodyTemperature.Projection)                                                                                | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedBodyTemperature.RigidTransformSourceCoordinateSystem)                            | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedBodyTemperature.RigidTransformTargetCoordinateSystem)                            | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedBodyTemperature.ShellThicknessFactor)                                                            | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedBodyTemperature.SourceMaximum)                                                                          | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedBodyTemperature.SourceMinimum)                                                                          | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedBodyTemperature.Interpolation)                                                                          | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedBodyTemperature.UnmappedNodesName)                                                                  | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedBodyTemperature.MappedNodesName)                                                                      | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedBodyTemperature.OutsideNodesName)                                                                    | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedBodyTemperature.Pinball)                                                                                      | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedBodyTemperature.NumberOfPoints)                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedBodyTemperature.OrientationRealignment)                                                        | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedBodyTemperature.Limit)                                                                                          | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedBodyTemperature.KrigingCorrelationFunction)                                                | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedBodyTemperature.KrigingPolynom)                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedBodyTemperature.ExtrapolationTolerancePercent)                                          | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedBodyTemperature.ApplyAs)                                                                                      | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedBodyTemperature.Suppressed)                                                                                | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedBodyTemperature.SharedRefBody)                                                                          | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedBodyTemperature.Location)                                                                                    | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedBodyTemperature.Children)                                                                                    | Gets the list of children.                                                                              |
| [`Comments`](#ImportedBodyTemperature.Comments)                                                                                    | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedBodyTemperature.Figures)                                                                                      | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedBodyTemperature.Images)                                                                                        | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedBodyTemperature.Properties)                                                                                | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedBodyTemperature.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.                                           |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedBodyTemperature
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedBodyTemperature.ApplyToInitialMesh"></a>

### *property* ImportedBodyTemperature.ApplyToInitialMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyToInitialMesh.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.InternalObject"></a>

### *property* ImportedBodyTemperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.LoadVectorNumber"></a>

### *property* ImportedBodyTemperature.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.LoadVectorAssignment"></a>

### *property* ImportedBodyTemperature.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DataModelObjectCategory"></a>

### *property* ImportedBodyTemperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Weighting"></a>

### *property* ImportedBodyTemperature.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.MappingControl"></a>

### *property* ImportedBodyTemperature.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DisplaySourcePoints"></a>

### *property* ImportedBodyTemperature.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DisplaySourcePointIds"></a>

### *property* ImportedBodyTemperature.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DisplayInteriorPoints"></a>

### *property* ImportedBodyTemperature.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DisplayProjectionPlane"></a>

### *property* ImportedBodyTemperature.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Algorithm"></a>

### *property* ImportedBodyTemperature.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.BoundingBoxTolerance"></a>

### *property* ImportedBodyTemperature.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedBodyTemperature.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedBodyTemperature.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedBodyTemperature.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Mapping"></a>

### *property* ImportedBodyTemperature.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.LegendMaximum"></a>

### *property* ImportedBodyTemperature.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.LegendMinimum"></a>

### *property* ImportedBodyTemperature.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.LegendRange"></a>

### *property* ImportedBodyTemperature.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.MaxOutsideDistance"></a>

### *property* ImportedBodyTemperature.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Method"></a>

### *property* ImportedBodyTemperature.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.OutsideDistanceCheck"></a>

### *property* ImportedBodyTemperature.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.OutsideOption"></a>

### *property* ImportedBodyTemperature.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Projection"></a>

### *property* ImportedBodyTemperature.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.RigidBodyTransformationType"></a>

### *property* ImportedBodyTemperature.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedBodyTemperature.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedBodyTemperature.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ShellThicknessFactor"></a>

### *property* ImportedBodyTemperature.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.SourceMaximum"></a>

### *property* ImportedBodyTemperature.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.SourceMinimum"></a>

### *property* ImportedBodyTemperature.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.VariableType"></a>

### *property* ImportedBodyTemperature.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Interpolation"></a>

### *property* ImportedBodyTemperature.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.UnmappedNodesName"></a>

### *property* ImportedBodyTemperature.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.MappedNodesName"></a>

### *property* ImportedBodyTemperature.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.OutsideNodesName"></a>

### *property* ImportedBodyTemperature.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Pinball"></a>

### *property* ImportedBodyTemperature.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.NumberOfPoints"></a>

### *property* ImportedBodyTemperature.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.OrientationRealignment"></a>

### *property* ImportedBodyTemperature.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Limit"></a>

### *property* ImportedBodyTemperature.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.KrigingCorrelationFunction"></a>

### *property* ImportedBodyTemperature.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.KrigingPolynom"></a>

### *property* ImportedBodyTemperature.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ExtrapolationTolerancePercent"></a>

### *property* ImportedBodyTemperature.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ApplyAs"></a>

### *property* ImportedBodyTemperature.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Suppressed"></a>

### *property* ImportedBodyTemperature.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.SharedRefBody"></a>

### *property* ImportedBodyTemperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Location"></a>

### *property* ImportedBodyTemperature.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Children"></a>

### *property* ImportedBodyTemperature.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Comments"></a>

### *property* ImportedBodyTemperature.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Figures"></a>

### *property* ImportedBodyTemperature.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Images"></a>

### *property* ImportedBodyTemperature.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedBodyTemperature.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Properties"></a>

### *property* ImportedBodyTemperature.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.VisibleProperties"></a>

### *property* ImportedBodyTemperature.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedBodyTemperature.GetActivateAtLoadStep"></a>

### ImportedBodyTemperature.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.SetActivateAtLoadStep"></a>

### ImportedBodyTemperature.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ExportToTextFile"></a>

### ImportedBodyTemperature.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Import"></a>

### ImportedBodyTemperature.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ImportLoad"></a>

### ImportedBodyTemperature.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.AddMappingValidation"></a>

### ImportedBodyTemperature.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ClearGeneratedData"></a>

### ImportedBodyTemperature.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Delete"></a>

### ImportedBodyTemperature.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.GetChildren"></a>

### ImportedBodyTemperature.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedBodyTemperature.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.AddComment"></a>

### ImportedBodyTemperature.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.AddFigure"></a>

### ImportedBodyTemperature.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.AddImage"></a>

### ImportedBodyTemperature.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Activate"></a>

### ImportedBodyTemperature.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CopyTo"></a>

### ImportedBodyTemperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Duplicate"></a>

### ImportedBodyTemperature.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.GroupAllSimilarChildren"></a>

### ImportedBodyTemperature.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.GroupSimilarObjects"></a>

### ImportedBodyTemperature.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.PropertyByName"></a>

### ImportedBodyTemperature.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.PropertyByAPIName"></a>

### ImportedBodyTemperature.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CreateParameter"></a>

### ImportedBodyTemperature.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.GetParameter"></a>

### ImportedBodyTemperature.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.RemoveParameter"></a>

### ImportedBodyTemperature.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
