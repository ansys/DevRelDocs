# `ImportedForce`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToTextFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Import)                                   | Import.                                                                           |
| [`ImportLoad`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#id0)                                                                      | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Location)                                                         | Gets or sets the Location.                                                                              |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#id0)                                                                      | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedForce.md#ImportedForce.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedForce.InternalObject"></a>

### *property* ImportedForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.DataModelObjectCategory"></a>

### *property* ImportedForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Weighting"></a>

### *property* ImportedForce.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.MappingControl"></a>

### *property* ImportedForce.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.DisplaySourcePoints"></a>

### *property* ImportedForce.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.DisplaySourcePointIds"></a>

### *property* ImportedForce.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.DisplayInteriorPoints"></a>

### *property* ImportedForce.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.DisplayProjectionPlane"></a>

### *property* ImportedForce.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Algorithm"></a>

### *property* ImportedForce.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.BoundingBoxTolerance"></a>

### *property* ImportedForce.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedForce.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedForce.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedForce.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Mapping"></a>

### *property* ImportedForce.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.LegendMaximum"></a>

### *property* ImportedForce.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.LegendMinimum"></a>

### *property* ImportedForce.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.LegendRange"></a>

### *property* ImportedForce.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.MaxOutsideDistance"></a>

### *property* ImportedForce.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Method"></a>

### *property* ImportedForce.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.OutsideDistanceCheck"></a>

### *property* ImportedForce.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.OutsideOption"></a>

### *property* ImportedForce.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Projection"></a>

### *property* ImportedForce.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.RigidBodyTransformationType"></a>

### *property* ImportedForce.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedForce.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedForce.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.ShellThicknessFactor"></a>

### *property* ImportedForce.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.SourceMaximum"></a>

### *property* ImportedForce.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.SourceMinimum"></a>

### *property* ImportedForce.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.VariableType"></a>

### *property* ImportedForce.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Interpolation"></a>

### *property* ImportedForce.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.UnmappedNodesName"></a>

### *property* ImportedForce.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.MappedNodesName"></a>

### *property* ImportedForce.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.OutsideNodesName"></a>

### *property* ImportedForce.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Pinball"></a>

### *property* ImportedForce.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.NumberOfPoints"></a>

### *property* ImportedForce.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.OrientationRealignment"></a>

### *property* ImportedForce.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Limit"></a>

### *property* ImportedForce.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.KrigingCorrelationFunction"></a>

### *property* ImportedForce.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.KrigingPolynom"></a>

### *property* ImportedForce.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.ExtrapolationTolerancePercent"></a>

### *property* ImportedForce.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.ApplyAs"></a>

### *property* ImportedForce.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Suppressed"></a>

### *property* ImportedForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.SharedRefBody"></a>

### *property* ImportedForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Location"></a>

### *property* ImportedForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Children"></a>

### *property* ImportedForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Comments"></a>

### *property* ImportedForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Figures"></a>

### *property* ImportedForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Images"></a>

### *property* ImportedForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Properties"></a>

### *property* ImportedForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.VisibleProperties"></a>

### *property* ImportedForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedForce.ExportToTextFile"></a>

### ImportedForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Import"></a>

### ImportedForce.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.ImportLoad"></a>

### ImportedForce.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.GetActivateAtLoadStep"></a>

### ImportedForce.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.SetActivateAtLoadStep"></a>

### ImportedForce.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.AddMappingValidation"></a>

### ImportedForce.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.ClearGeneratedData"></a>

### ImportedForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Delete"></a>

### ImportedForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.GetChildren"></a>

### ImportedForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.AddComment"></a>

### ImportedForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.AddFigure"></a>

### ImportedForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.AddImage"></a>

### ImportedForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Activate"></a>

### ImportedForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.CopyTo"></a>

### ImportedForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.Duplicate"></a>

### ImportedForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.GroupAllSimilarChildren"></a>

### ImportedForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.GroupSimilarObjects"></a>

### ImportedForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.PropertyByName"></a>

### ImportedForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.PropertyByAPIName"></a>

### ImportedForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.CreateParameter"></a>

### ImportedForce.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.GetParameter"></a>

### ImportedForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedForce.RemoveParameter"></a>

### ImportedForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

