# `ImportedLoad`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToTextFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Import)                                   | Import.                                                                           |
| [`ImportLoad`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Weighting`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#id0)                                                                     | Gets the internal object. For advanced usage only.                                                      |
| [`ApplyAs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Location)                                                         | Gets or sets the Location.                                                                              |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                            |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#id0)                                                                     | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedLoad.md#ImportedLoad.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedLoad.Weighting"></a>

### *property* ImportedLoad.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.MappingControl"></a>

### *property* ImportedLoad.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.DisplaySourcePoints"></a>

### *property* ImportedLoad.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.DisplaySourcePointIds"></a>

### *property* ImportedLoad.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.DisplayInteriorPoints"></a>

### *property* ImportedLoad.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.DisplayProjectionPlane"></a>

### *property* ImportedLoad.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Algorithm"></a>

### *property* ImportedLoad.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.BoundingBoxTolerance"></a>

### *property* ImportedLoad.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedLoad.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedLoad.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedLoad.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Mapping"></a>

### *property* ImportedLoad.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.LegendMaximum"></a>

### *property* ImportedLoad.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.LegendMinimum"></a>

### *property* ImportedLoad.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.LegendRange"></a>

### *property* ImportedLoad.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.MaxOutsideDistance"></a>

### *property* ImportedLoad.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Method"></a>

### *property* ImportedLoad.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.OutsideDistanceCheck"></a>

### *property* ImportedLoad.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.OutsideOption"></a>

### *property* ImportedLoad.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Projection"></a>

### *property* ImportedLoad.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.RigidBodyTransformationType"></a>

### *property* ImportedLoad.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedLoad.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedLoad.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.ShellThicknessFactor"></a>

### *property* ImportedLoad.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.SourceMaximum"></a>

### *property* ImportedLoad.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.SourceMinimum"></a>

### *property* ImportedLoad.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.VariableType"></a>

### *property* ImportedLoad.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Interpolation"></a>

### *property* ImportedLoad.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.UnmappedNodesName"></a>

### *property* ImportedLoad.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.MappedNodesName"></a>

### *property* ImportedLoad.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.OutsideNodesName"></a>

### *property* ImportedLoad.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Pinball"></a>

### *property* ImportedLoad.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.NumberOfPoints"></a>

### *property* ImportedLoad.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.OrientationRealignment"></a>

### *property* ImportedLoad.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Limit"></a>

### *property* ImportedLoad.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.KrigingCorrelationFunction"></a>

### *property* ImportedLoad.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.KrigingPolynom"></a>

### *property* ImportedLoad.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.ExtrapolationTolerancePercent"></a>

### *property* ImportedLoad.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.InternalObject"></a>

### *property* ImportedLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.ApplyAs"></a>

### *property* ImportedLoad.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Suppressed"></a>

### *property* ImportedLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.SharedRefBody"></a>

### *property* ImportedLoad.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Location"></a>

### *property* ImportedLoad.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.DataModelObjectCategory"></a>

### *property* ImportedLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Children"></a>

### *property* ImportedLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Comments"></a>

### *property* ImportedLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Figures"></a>

### *property* ImportedLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Images"></a>

### *property* ImportedLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedLoad.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Properties"></a>

### *property* ImportedLoad.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.VisibleProperties"></a>

### *property* ImportedLoad.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedLoad.ExportToTextFile"></a>

### ImportedLoad.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Import"></a>

### ImportedLoad.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.ImportLoad"></a>

### ImportedLoad.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.GetActivateAtLoadStep"></a>

### ImportedLoad.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.SetActivateAtLoadStep"></a>

### ImportedLoad.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.AddMappingValidation"></a>

### ImportedLoad.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.ClearGeneratedData"></a>

### ImportedLoad.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Delete"></a>

### ImportedLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.GetChildren"></a>

### ImportedLoad.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.AddComment"></a>

### ImportedLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.AddFigure"></a>

### ImportedLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.AddImage"></a>

### ImportedLoad.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Activate"></a>

### ImportedLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.CopyTo"></a>

### ImportedLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Duplicate"></a>

### ImportedLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.GroupAllSimilarChildren"></a>

### ImportedLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.GroupSimilarObjects"></a>

### ImportedLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.PropertyByName"></a>

### ImportedLoad.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.PropertyByAPIName"></a>

### ImportedLoad.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.CreateParameter"></a>

### ImportedLoad.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.GetParameter"></a>

### ImportedLoad.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.RemoveParameter"></a>

### ImportedLoad.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

