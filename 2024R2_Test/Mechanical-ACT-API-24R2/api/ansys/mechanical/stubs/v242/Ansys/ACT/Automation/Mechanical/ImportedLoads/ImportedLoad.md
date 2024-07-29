# `ImportedLoad`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`ExportToTextFile`](#ImportedLoad.ExportToTextFile)               | Run the ExportToTextFile action.                                                        |
| [`Import`](#ImportedLoad.Import)                                   | Import.                                                                                 |
| [`ImportLoad`](#ImportedLoad.ImportLoad)                           | Run the ImportLoad action.                                                              |
| [`ReloadConfiguration`](#ImportedLoad.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available). |
| [`GetActivateAtLoadStep`](#ImportedLoad.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                           |
| [`SetActivateAtLoadStep`](#ImportedLoad.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                           |
| [`AddMappingValidation`](#ImportedLoad.AddMappingValidation)       | Creates a new MappingValidation                                                         |
| [`ClearGeneratedData`](#ImportedLoad.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                      |
| [`Delete`](#ImportedLoad.Delete)                                   | Run the Delete action.                                                                  |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                            |
| [`AddComment`](#ImportedLoad.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ImportedLoad.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ImportedLoad.AddImage)                               | Creates a new child Image.                                                              |
| [`Activate`](#ImportedLoad.Activate)                               | Activate the current object.                                                            |
| [`CopyTo`](#ImportedLoad.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`Duplicate`](#ImportedLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`GroupAllSimilarChildren`](#ImportedLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ImportedLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`PropertyByName`](#ImportedLoad.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`PropertyByAPIName`](#ImportedLoad.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`CreateParameter`](#ImportedLoad.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`GetParameter`](#ImportedLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`RemoveParameter`](#ImportedLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Weighting`](#ImportedLoad.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedLoad.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedLoad.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedLoad.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedLoad.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedLoad.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedLoad.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedLoad.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedLoad.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedLoad.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedLoad.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedLoad.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedLoad.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedLoad.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedLoad.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedLoad.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedLoad.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedLoad.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedLoad.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedLoad.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](#ImportedLoad.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedLoad.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedLoad.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedLoad.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedLoad.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedLoad.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](#ImportedLoad.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedLoad.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedLoad.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedLoad.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedLoad.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedLoad.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedLoad.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedLoad.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedLoad.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedLoad.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedLoad.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedLoad.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`InternalObject`](#id0)                                                                     | Gets the internal object. For advanced usage only.                                                      |
| [`ApplyAs`](#ImportedLoad.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedLoad.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedLoad.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedLoad.Location)                                                         | Gets or sets the Location.                                                                              |
| [`DataModelObjectCategory`](#ImportedLoad.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`Children`](#ImportedLoad.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedLoad.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedLoad.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedLoad.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                     | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedLoad.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedLoad.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedLoad.Weighting"></a>

### *property* ImportedLoad.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.MappingControl"></a>

### *property* ImportedLoad.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedLoad.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedLoad.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedLoad.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.MaxOutsideDistance"></a>

### *property* ImportedLoad.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Method"></a>

### *property* ImportedLoad.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.OutsideDistanceCheck"></a>

### *property* ImportedLoad.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.OutsideOption"></a>

### *property* ImportedLoad.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Projection"></a>

### *property* ImportedLoad.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.RigidBodyTransformationType"></a>

### *property* ImportedLoad.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedLoad.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedLoad.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedLoad.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Interpolation"></a>

### *property* ImportedLoad.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedLoad.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.KrigingPolynom"></a>

### *property* ImportedLoad.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedLoad.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Suppressed"></a>

### *property* ImportedLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.SharedRefBody"></a>

### *property* ImportedLoad.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Location"></a>

### *property* ImportedLoad.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.DataModelObjectCategory"></a>

### *property* ImportedLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Children"></a>

### *property* ImportedLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Comments"></a>

### *property* ImportedLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Figures"></a>

### *property* ImportedLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoad.Images"></a>

### *property* ImportedLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="ImportedLoad.ReloadConfiguration"></a>

### ImportedLoad.ReloadConfiguration()

Reload the Imported Load’s setup from its associated configuration file (if available).

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

### ImportedLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

