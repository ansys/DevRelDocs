# `ImportedCutBoundaryRemoteForce`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCutBoundaryRemoteForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                           |
| [`SetActivateAtLoadStep`](#ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                           |
| [`ExportToTextFile`](#ImportedCutBoundaryRemoteForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                        |
| [`Import`](#ImportedCutBoundaryRemoteForce.Import)                                   | Import.                                                                                 |
| [`ImportLoad`](#ImportedCutBoundaryRemoteForce.ImportLoad)                           | Run the ImportLoad action.                                                              |
| [`ReloadConfiguration`](#ImportedCutBoundaryRemoteForce.ReloadConfiguration)         | Reload the Imported Load's setup from its associated configuration file (if available). |
| [`AddMappingValidation`](#ImportedCutBoundaryRemoteForce.AddMappingValidation)       | Creates a new MappingValidation                                                         |
| [`ClearGeneratedData`](#ImportedCutBoundaryRemoteForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                      |
| [`Delete`](#ImportedCutBoundaryRemoteForce.Delete)                                   | Run the Delete action.                                                                  |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                            |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                            |
| [`AddComment`](#ImportedCutBoundaryRemoteForce.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ImportedCutBoundaryRemoteForce.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ImportedCutBoundaryRemoteForce.AddImage)                               | Creates a new child Image.                                                              |
| [`Activate`](#ImportedCutBoundaryRemoteForce.Activate)                               | Activate the current object.                                                            |
| [`CopyTo`](#ImportedCutBoundaryRemoteForce.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`Duplicate`](#ImportedCutBoundaryRemoteForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`GroupAllSimilarChildren`](#ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ImportedCutBoundaryRemoteForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`PropertyByName`](#ImportedCutBoundaryRemoteForce.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`PropertyByAPIName`](#ImportedCutBoundaryRemoteForce.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`CreateParameter`](#ImportedCutBoundaryRemoteForce.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`GetParameter`](#ImportedCutBoundaryRemoteForce.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`RemoveParameter`](#ImportedCutBoundaryRemoteForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                       | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](#ImportedCutBoundaryRemoteForce.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                            |
| [`Weighting`](#ImportedCutBoundaryRemoteForce.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedCutBoundaryRemoteForce.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedCutBoundaryRemoteForce.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedCutBoundaryRemoteForce.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedCutBoundaryRemoteForce.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedCutBoundaryRemoteForce.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedCutBoundaryRemoteForce.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedCutBoundaryRemoteForce.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedCutBoundaryRemoteForce.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedCutBoundaryRemoteForce.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedCutBoundaryRemoteForce.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedCutBoundaryRemoteForce.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedCutBoundaryRemoteForce.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedCutBoundaryRemoteForce.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedCutBoundaryRemoteForce.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedCutBoundaryRemoteForce.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedCutBoundaryRemoteForce.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](#ImportedCutBoundaryRemoteForce.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedCutBoundaryRemoteForce.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedCutBoundaryRemoteForce.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedCutBoundaryRemoteForce.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](#ImportedCutBoundaryRemoteForce.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedCutBoundaryRemoteForce.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedCutBoundaryRemoteForce.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedCutBoundaryRemoteForce.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedCutBoundaryRemoteForce.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedCutBoundaryRemoteForce.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedCutBoundaryRemoteForce.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedCutBoundaryRemoteForce.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedCutBoundaryRemoteForce.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedCutBoundaryRemoteForce.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedCutBoundaryRemoteForce.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedCutBoundaryRemoteForce.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedCutBoundaryRemoteForce.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedCutBoundaryRemoteForce.Location)                                                         | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedCutBoundaryRemoteForce.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedCutBoundaryRemoteForce.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedCutBoundaryRemoteForce.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedCutBoundaryRemoteForce.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                       | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedCutBoundaryRemoteForce.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedCutBoundaryRemoteForce.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCutBoundaryRemoteForce.InternalObject"></a>

### *property* ImportedCutBoundaryRemoteForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DataModelObjectCategory"></a>

### *property* ImportedCutBoundaryRemoteForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Weighting"></a>

### *property* ImportedCutBoundaryRemoteForce.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.MappingControl"></a>

### *property* ImportedCutBoundaryRemoteForce.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplaySourcePoints"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplaySourcePointIds"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplayInteriorPoints"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplayProjectionPlane"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Algorithm"></a>

### *property* ImportedCutBoundaryRemoteForce.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.BoundingBoxTolerance"></a>

### *property* ImportedCutBoundaryRemoteForce.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Mapping"></a>

### *property* ImportedCutBoundaryRemoteForce.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.LegendMaximum"></a>

### *property* ImportedCutBoundaryRemoteForce.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.LegendMinimum"></a>

### *property* ImportedCutBoundaryRemoteForce.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.LegendRange"></a>

### *property* ImportedCutBoundaryRemoteForce.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.MaxOutsideDistance"></a>

### *property* ImportedCutBoundaryRemoteForce.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Method"></a>

### *property* ImportedCutBoundaryRemoteForce.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OutsideDistanceCheck"></a>

### *property* ImportedCutBoundaryRemoteForce.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OutsideOption"></a>

### *property* ImportedCutBoundaryRemoteForce.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Projection"></a>

### *property* ImportedCutBoundaryRemoteForce.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RigidBodyTransformationType"></a>

### *property* ImportedCutBoundaryRemoteForce.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ShellThicknessFactor"></a>

### *property* ImportedCutBoundaryRemoteForce.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SourceMaximum"></a>

### *property* ImportedCutBoundaryRemoteForce.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SourceMinimum"></a>

### *property* ImportedCutBoundaryRemoteForce.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.VariableType"></a>

### *property* ImportedCutBoundaryRemoteForce.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Interpolation"></a>

### *property* ImportedCutBoundaryRemoteForce.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.UnmappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteForce.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.MappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteForce.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OutsideNodesName"></a>

### *property* ImportedCutBoundaryRemoteForce.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Pinball"></a>

### *property* ImportedCutBoundaryRemoteForce.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.NumberOfPoints"></a>

### *property* ImportedCutBoundaryRemoteForce.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OrientationRealignment"></a>

### *property* ImportedCutBoundaryRemoteForce.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Limit"></a>

### *property* ImportedCutBoundaryRemoteForce.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction"></a>

### *property* ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.KrigingPolynom"></a>

### *property* ImportedCutBoundaryRemoteForce.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent"></a>

### *property* ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ApplyAs"></a>

### *property* ImportedCutBoundaryRemoteForce.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Suppressed"></a>

### *property* ImportedCutBoundaryRemoteForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SharedRefBody"></a>

### *property* ImportedCutBoundaryRemoteForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Location"></a>

### *property* ImportedCutBoundaryRemoteForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Children"></a>

### *property* ImportedCutBoundaryRemoteForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Comments"></a>

### *property* ImportedCutBoundaryRemoteForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Figures"></a>

### *property* ImportedCutBoundaryRemoteForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Images"></a>

### *property* ImportedCutBoundaryRemoteForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedCutBoundaryRemoteForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Properties"></a>

### *property* ImportedCutBoundaryRemoteForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.VisibleProperties"></a>

### *property* ImportedCutBoundaryRemoteForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ExportToTextFile"></a>

### ImportedCutBoundaryRemoteForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Import"></a>

### ImportedCutBoundaryRemoteForce.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ImportLoad"></a>

### ImportedCutBoundaryRemoteForce.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ReloadConfiguration"></a>

### ImportedCutBoundaryRemoteForce.ReloadConfiguration()

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AddMappingValidation"></a>

### ImportedCutBoundaryRemoteForce.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ClearGeneratedData"></a>

### ImportedCutBoundaryRemoteForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Delete"></a>

### ImportedCutBoundaryRemoteForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetChildren"></a>

### ImportedCutBoundaryRemoteForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedCutBoundaryRemoteForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AddComment"></a>

### ImportedCutBoundaryRemoteForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AddFigure"></a>

### ImportedCutBoundaryRemoteForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AddImage"></a>

### ImportedCutBoundaryRemoteForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Activate"></a>

### ImportedCutBoundaryRemoteForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CopyTo"></a>

### ImportedCutBoundaryRemoteForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Duplicate"></a>

### ImportedCutBoundaryRemoteForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren"></a>

### ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GroupSimilarObjects"></a>

### ImportedCutBoundaryRemoteForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.PropertyByName"></a>

### ImportedCutBoundaryRemoteForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.PropertyByAPIName"></a>

### ImportedCutBoundaryRemoteForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateParameter"></a>

### ImportedCutBoundaryRemoteForce.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetParameter"></a>

### ImportedCutBoundaryRemoteForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RemoveParameter"></a>

### ImportedCutBoundaryRemoteForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

