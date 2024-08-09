# `ImportedConvection`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedConvection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedConvection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#ImportedConvection.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                           |
| [`SetActivateAtLoadStep`](#ImportedConvection.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                           |
| [`ExportToTextFile`](#ImportedConvection.ExportToTextFile)               | Run the ExportToTextFile action.                                                        |
| [`Import`](#ImportedConvection.Import)                                   | Import.                                                                                 |
| [`ImportLoad`](#ImportedConvection.ImportLoad)                           | Run the ImportLoad action.                                                              |
| [`ReloadConfiguration`](#ImportedConvection.ReloadConfiguration)         | Reload the Imported Load's setup from its associated configuration file (if available). |
| [`AddMappingValidation`](#ImportedConvection.AddMappingValidation)       | Creates a new MappingValidation                                                         |
| [`ClearGeneratedData`](#ImportedConvection.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                      |
| [`Delete`](#ImportedConvection.Delete)                                   | Run the Delete action.                                                                  |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                            |
| [`AddComment`](#ImportedConvection.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ImportedConvection.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ImportedConvection.AddImage)                               | Creates a new child Image.                                                              |
| [`Activate`](#ImportedConvection.Activate)                               | Activate the current object.                                                            |
| [`CopyTo`](#ImportedConvection.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`Duplicate`](#ImportedConvection.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`GroupAllSimilarChildren`](#ImportedConvection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ImportedConvection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`PropertyByName`](#ImportedConvection.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`PropertyByAPIName`](#ImportedConvection.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`CreateParameter`](#ImportedConvection.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`GetParameter`](#ImportedConvection.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`RemoveParameter`](#ImportedConvection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`DisplayConnectionLines`](#ImportedConvection.DisplayConnectionLines)                             | Gets or sets the DisplayConnectionLines.                                                                |
| [`FluidFlow`](#ImportedConvection.FluidFlow)                                                       | Gets or sets the FluidFlow.                                                                             |
| [`FluidFlowLocation`](#ImportedConvection.FluidFlowLocation)                                       | Gets or sets the FluidFlowLocation.                                                                     |
| [`DataModelObjectCategory`](#ImportedConvection.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                            |
| [`Weighting`](#ImportedConvection.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedConvection.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedConvection.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedConvection.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedConvection.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedConvection.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedConvection.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedConvection.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedConvection.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedConvection.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedConvection.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedConvection.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedConvection.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedConvection.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedConvection.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedConvection.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedConvection.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedConvection.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedConvection.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedConvection.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](#ImportedConvection.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedConvection.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedConvection.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedConvection.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedConvection.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedConvection.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](#ImportedConvection.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedConvection.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedConvection.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedConvection.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedConvection.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedConvection.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedConvection.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedConvection.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedConvection.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedConvection.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedConvection.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedConvection.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedConvection.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedConvection.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedConvection.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedConvection.Location)                                                         | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedConvection.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedConvection.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedConvection.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedConvection.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedConvection.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedConvection.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedConvection.InternalObject"></a>

### *property* ImportedConvection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.DisplayConnectionLines"></a>

### *property* ImportedConvection.DisplayConnectionLines *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayConnectionLines.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.FluidFlow"></a>

### *property* ImportedConvection.FluidFlow *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidFlow.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.FluidFlowLocation"></a>

### *property* ImportedConvection.FluidFlowLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidFlowLocation.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.DataModelObjectCategory"></a>

### *property* ImportedConvection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Weighting"></a>

### *property* ImportedConvection.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.MappingControl"></a>

### *property* ImportedConvection.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.DisplaySourcePoints"></a>

### *property* ImportedConvection.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.DisplaySourcePointIds"></a>

### *property* ImportedConvection.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.DisplayInteriorPoints"></a>

### *property* ImportedConvection.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.DisplayProjectionPlane"></a>

### *property* ImportedConvection.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Algorithm"></a>

### *property* ImportedConvection.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.BoundingBoxTolerance"></a>

### *property* ImportedConvection.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedConvection.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedConvection.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedConvection.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Mapping"></a>

### *property* ImportedConvection.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.LegendMaximum"></a>

### *property* ImportedConvection.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.LegendMinimum"></a>

### *property* ImportedConvection.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.LegendRange"></a>

### *property* ImportedConvection.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.MaxOutsideDistance"></a>

### *property* ImportedConvection.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Method"></a>

### *property* ImportedConvection.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.OutsideDistanceCheck"></a>

### *property* ImportedConvection.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.OutsideOption"></a>

### *property* ImportedConvection.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Projection"></a>

### *property* ImportedConvection.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.RigidBodyTransformationType"></a>

### *property* ImportedConvection.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedConvection.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedConvection.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.ShellThicknessFactor"></a>

### *property* ImportedConvection.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.SourceMaximum"></a>

### *property* ImportedConvection.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.SourceMinimum"></a>

### *property* ImportedConvection.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.VariableType"></a>

### *property* ImportedConvection.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Interpolation"></a>

### *property* ImportedConvection.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.UnmappedNodesName"></a>

### *property* ImportedConvection.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.MappedNodesName"></a>

### *property* ImportedConvection.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.OutsideNodesName"></a>

### *property* ImportedConvection.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Pinball"></a>

### *property* ImportedConvection.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.NumberOfPoints"></a>

### *property* ImportedConvection.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.OrientationRealignment"></a>

### *property* ImportedConvection.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Limit"></a>

### *property* ImportedConvection.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.KrigingCorrelationFunction"></a>

### *property* ImportedConvection.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.KrigingPolynom"></a>

### *property* ImportedConvection.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.ExtrapolationTolerancePercent"></a>

### *property* ImportedConvection.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.ApplyAs"></a>

### *property* ImportedConvection.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Suppressed"></a>

### *property* ImportedConvection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.SharedRefBody"></a>

### *property* ImportedConvection.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Location"></a>

### *property* ImportedConvection.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Children"></a>

### *property* ImportedConvection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Comments"></a>

### *property* ImportedConvection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Figures"></a>

### *property* ImportedConvection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Images"></a>

### *property* ImportedConvection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedConvection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Properties"></a>

### *property* ImportedConvection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.VisibleProperties"></a>

### *property* ImportedConvection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedConvection.GetActivateAtLoadStep"></a>

### ImportedConvection.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.SetActivateAtLoadStep"></a>

### ImportedConvection.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.ExportToTextFile"></a>

### ImportedConvection.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Import"></a>

### ImportedConvection.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.ImportLoad"></a>

### ImportedConvection.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.ReloadConfiguration"></a>

### ImportedConvection.ReloadConfiguration()

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.AddMappingValidation"></a>

### ImportedConvection.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.ClearGeneratedData"></a>

### ImportedConvection.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Delete"></a>

### ImportedConvection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.GetChildren"></a>

### ImportedConvection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedConvection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.AddComment"></a>

### ImportedConvection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.AddFigure"></a>

### ImportedConvection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.AddImage"></a>

### ImportedConvection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Activate"></a>

### ImportedConvection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.CopyTo"></a>

### ImportedConvection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.Duplicate"></a>

### ImportedConvection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.GroupAllSimilarChildren"></a>

### ImportedConvection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.GroupSimilarObjects"></a>

### ImportedConvection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.PropertyByName"></a>

### ImportedConvection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.PropertyByAPIName"></a>

### ImportedConvection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.CreateParameter"></a>

### ImportedConvection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.GetParameter"></a>

### ImportedConvection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConvection.RemoveParameter"></a>

### ImportedConvection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

