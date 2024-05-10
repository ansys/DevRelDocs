<a id="importedelementorientation"></a>

# ImportedElementOrientation

<a id="ImportedElementOrientation"></a>

### *class* ImportedElementOrientation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedElementOrientation.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportToTextFile`](#ImportedElementOrientation.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#ImportedElementOrientation.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedElementOrientation.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedElementOrientation.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedElementOrientation.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#ImportedElementOrientation.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedElementOrientation.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedElementOrientation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedElementOrientation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedElementOrientation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedElementOrientation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedElementOrientation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedElementOrientation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedElementOrientation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedElementOrientation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedElementOrientation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedElementOrientation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedElementOrientation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedElementOrientation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedElementOrientation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedElementOrientation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedElementOrientation.Weighting)                                                                               | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedElementOrientation.MappingControl)                                                                     | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedElementOrientation.DisplaySourcePoints)                                                           | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedElementOrientation.DisplaySourcePointIds)                                                       | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedElementOrientation.DisplayInteriorPoints)                                                       | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedElementOrientation.DisplayProjectionPlane)                                                     | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedElementOrientation.Algorithm)                                                                               | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedElementOrientation.BoundingBoxTolerance)                                                         | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedElementOrientation.CreateNameSelectionForMappedNodes)                               | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedElementOrientation.CreateNameSelectionForOutsideNodes)                             | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedElementOrientation.CreateNameSelectionForUnmappedNodes)                           | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedElementOrientation.Mapping)                                                                                   | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedElementOrientation.LegendMaximum)                                                                       | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedElementOrientation.LegendMinimum)                                                                       | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedElementOrientation.LegendRange)                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedElementOrientation.MaxOutsideDistance)                                                             | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedElementOrientation.Method)                                                                                     | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedElementOrientation.OutsideDistanceCheck)                                                         | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedElementOrientation.OutsideOption)                                                                       | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedElementOrientation.Projection)                                                                             | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedElementOrientation.RigidTransformSourceCoordinateSystem)                         | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedElementOrientation.RigidTransformTargetCoordinateSystem)                         | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedElementOrientation.ShellThicknessFactor)                                                         | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedElementOrientation.SourceMaximum)                                                                       | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedElementOrientation.SourceMinimum)                                                                       | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedElementOrientation.Interpolation)                                                                       | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedElementOrientation.UnmappedNodesName)                                                               | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedElementOrientation.MappedNodesName)                                                                   | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedElementOrientation.OutsideNodesName)                                                                 | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedElementOrientation.Pinball)                                                                                   | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedElementOrientation.NumberOfPoints)                                                                     | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedElementOrientation.OrientationRealignment)                                                     | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedElementOrientation.Limit)                                                                                       | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedElementOrientation.KrigingCorrelationFunction)                                             | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedElementOrientation.KrigingPolynom)                                                                     | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedElementOrientation.ExtrapolationTolerancePercent)                                       | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedElementOrientation.ApplyAs)                                                                                   | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedElementOrientation.Suppressed)                                                                             | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedElementOrientation.SharedRefBody)                                                                       | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedElementOrientation.Location)                                                                                 | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedElementOrientation.Children)                                                                                 | Gets the list of children.                                                                              |
| [`Comments`](#ImportedElementOrientation.Comments)                                                                                 | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedElementOrientation.Figures)                                                                                   | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedElementOrientation.Images)                                                                                     | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedElementOrientation.Properties)                                                                             | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedElementOrientation.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.                                           |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedElementOrientation
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedElementOrientation.InternalObject"></a>

### *property* ImportedElementOrientation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.DataModelObjectCategory"></a>

### *property* ImportedElementOrientation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Weighting"></a>

### *property* ImportedElementOrientation.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.MappingControl"></a>

### *property* ImportedElementOrientation.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.DisplaySourcePoints"></a>

### *property* ImportedElementOrientation.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.DisplaySourcePointIds"></a>

### *property* ImportedElementOrientation.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.DisplayInteriorPoints"></a>

### *property* ImportedElementOrientation.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.DisplayProjectionPlane"></a>

### *property* ImportedElementOrientation.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Algorithm"></a>

### *property* ImportedElementOrientation.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.BoundingBoxTolerance"></a>

### *property* ImportedElementOrientation.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedElementOrientation.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedElementOrientation.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedElementOrientation.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Mapping"></a>

### *property* ImportedElementOrientation.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.LegendMaximum"></a>

### *property* ImportedElementOrientation.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.LegendMinimum"></a>

### *property* ImportedElementOrientation.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.LegendRange"></a>

### *property* ImportedElementOrientation.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.MaxOutsideDistance"></a>

### *property* ImportedElementOrientation.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Method"></a>

### *property* ImportedElementOrientation.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.OutsideDistanceCheck"></a>

### *property* ImportedElementOrientation.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.OutsideOption"></a>

### *property* ImportedElementOrientation.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Projection"></a>

### *property* ImportedElementOrientation.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.RigidBodyTransformationType"></a>

### *property* ImportedElementOrientation.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedElementOrientation.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedElementOrientation.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.ShellThicknessFactor"></a>

### *property* ImportedElementOrientation.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.SourceMaximum"></a>

### *property* ImportedElementOrientation.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.SourceMinimum"></a>

### *property* ImportedElementOrientation.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.VariableType"></a>

### *property* ImportedElementOrientation.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Interpolation"></a>

### *property* ImportedElementOrientation.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.UnmappedNodesName"></a>

### *property* ImportedElementOrientation.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.MappedNodesName"></a>

### *property* ImportedElementOrientation.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.OutsideNodesName"></a>

### *property* ImportedElementOrientation.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Pinball"></a>

### *property* ImportedElementOrientation.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.NumberOfPoints"></a>

### *property* ImportedElementOrientation.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.OrientationRealignment"></a>

### *property* ImportedElementOrientation.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Limit"></a>

### *property* ImportedElementOrientation.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.KrigingCorrelationFunction"></a>

### *property* ImportedElementOrientation.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.KrigingPolynom"></a>

### *property* ImportedElementOrientation.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.ExtrapolationTolerancePercent"></a>

### *property* ImportedElementOrientation.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.ApplyAs"></a>

### *property* ImportedElementOrientation.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Suppressed"></a>

### *property* ImportedElementOrientation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.SharedRefBody"></a>

### *property* ImportedElementOrientation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Location"></a>

### *property* ImportedElementOrientation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Children"></a>

### *property* ImportedElementOrientation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Comments"></a>

### *property* ImportedElementOrientation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Figures"></a>

### *property* ImportedElementOrientation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Images"></a>

### *property* ImportedElementOrientation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedElementOrientation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Properties"></a>

### *property* ImportedElementOrientation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.VisibleProperties"></a>

### *property* ImportedElementOrientation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedElementOrientation.ExportToTextFile"></a>

### ImportedElementOrientation.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Import"></a>

### ImportedElementOrientation.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.ImportLoad"></a>

### ImportedElementOrientation.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.GetActivateAtLoadStep"></a>

### ImportedElementOrientation.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.SetActivateAtLoadStep"></a>

### ImportedElementOrientation.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.AddMappingValidation"></a>

### ImportedElementOrientation.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.ClearGeneratedData"></a>

### ImportedElementOrientation.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Delete"></a>

### ImportedElementOrientation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.GetChildren"></a>

### ImportedElementOrientation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedElementOrientation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.AddComment"></a>

### ImportedElementOrientation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.AddFigure"></a>

### ImportedElementOrientation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.AddImage"></a>

### ImportedElementOrientation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Activate"></a>

### ImportedElementOrientation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.CopyTo"></a>

### ImportedElementOrientation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.Duplicate"></a>

### ImportedElementOrientation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.GroupAllSimilarChildren"></a>

### ImportedElementOrientation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.GroupSimilarObjects"></a>

### ImportedElementOrientation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.PropertyByName"></a>

### ImportedElementOrientation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.PropertyByAPIName"></a>

### ImportedElementOrientation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.CreateParameter"></a>

### ImportedElementOrientation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.GetParameter"></a>

### ImportedElementOrientation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientation.RemoveParameter"></a>

### ImportedElementOrientation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
