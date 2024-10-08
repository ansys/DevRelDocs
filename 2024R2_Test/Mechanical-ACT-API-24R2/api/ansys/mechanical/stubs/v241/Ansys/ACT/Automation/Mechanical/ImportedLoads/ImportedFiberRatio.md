# `ImportedFiberRatio`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedFiberRatio"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedFiberRatio

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedFiberRatio.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedFiberRatio.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedFiberRatio.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedFiberRatio.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedFiberRatio.AddImage)                               | Creates a new child Image.                                                        |
| [`AddMappingValidation`](#ImportedFiberRatio.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedFiberRatio.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ImportedFiberRatio.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedFiberRatio.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedFiberRatio.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedFiberRatio.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`ExportToTextFile`](#ImportedFiberRatio.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`GetActivateAtLoadStep`](#ImportedFiberRatio.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`GetChildren`](#ImportedFiberRatio.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedFiberRatio.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedFiberRatio.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedFiberRatio.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`Import`](#ImportedFiberRatio.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedFiberRatio.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`PropertyByAPIName`](#ImportedFiberRatio.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedFiberRatio.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedFiberRatio.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#ImportedFiberRatio.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedFiberRatio.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedFiberRatio.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedFiberRatio.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedFiberRatio.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedFiberRatio.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedFiberRatio.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedFiberRatio.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedFiberRatio.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedFiberRatio.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedFiberRatio.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedFiberRatio.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedFiberRatio.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedFiberRatio.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedFiberRatio.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedFiberRatio.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedFiberRatio.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedFiberRatio.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedFiberRatio.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedFiberRatio.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedFiberRatio.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`LegendMaximum`](#ImportedFiberRatio.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedFiberRatio.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedFiberRatio.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`Limit`](#ImportedFiberRatio.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedFiberRatio.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedFiberRatio.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedFiberRatio.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedFiberRatio.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedFiberRatio.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedFiberRatio.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedFiberRatio.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedFiberRatio.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedFiberRatio.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedFiberRatio.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedFiberRatio.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedFiberRatio.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedFiberRatio.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedFiberRatio.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedFiberRatio.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedFiberRatio.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedFiberRatio.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedFiberRatio.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedFiberRatio.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedFiberRatio.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedFiberRatio.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedFiberRatio.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedFiberRatio.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedFiberRatio.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedFiberRatio.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedFiberRatio.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedFiberRatio.Algorithm"></a>

### *property* ImportedFiberRatio.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.ApplyAs"></a>

### *property* ImportedFiberRatio.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.BoundingBoxTolerance"></a>

### *property* ImportedFiberRatio.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Children"></a>

### *property* ImportedFiberRatio.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Comments"></a>

### *property* ImportedFiberRatio.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedFiberRatio.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedFiberRatio.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedFiberRatio.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.DataModelObjectCategory"></a>

### *property* ImportedFiberRatio.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.DisplayInteriorPoints"></a>

### *property* ImportedFiberRatio.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.DisplayProjectionPlane"></a>

### *property* ImportedFiberRatio.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.DisplaySourcePointIds"></a>

### *property* ImportedFiberRatio.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.DisplaySourcePoints"></a>

### *property* ImportedFiberRatio.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.ExtrapolationTolerancePercent"></a>

### *property* ImportedFiberRatio.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Figures"></a>

### *property* ImportedFiberRatio.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Images"></a>

### *property* ImportedFiberRatio.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.InternalObject"></a>

### *property* ImportedFiberRatio.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Interpolation"></a>

### *property* ImportedFiberRatio.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.KrigingCorrelationFunction"></a>

### *property* ImportedFiberRatio.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.KrigingPolynom"></a>

### *property* ImportedFiberRatio.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.LegendMaximum"></a>

### *property* ImportedFiberRatio.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.LegendMinimum"></a>

### *property* ImportedFiberRatio.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.LegendRange"></a>

### *property* ImportedFiberRatio.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Limit"></a>

### *property* ImportedFiberRatio.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Location"></a>

### *property* ImportedFiberRatio.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.MappedNodesName"></a>

### *property* ImportedFiberRatio.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Mapping"></a>

### *property* ImportedFiberRatio.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.MappingControl"></a>

### *property* ImportedFiberRatio.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.MaxOutsideDistance"></a>

### *property* ImportedFiberRatio.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Method"></a>

### *property* ImportedFiberRatio.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.NumberOfPoints"></a>

### *property* ImportedFiberRatio.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.OrientationRealignment"></a>

### *property* ImportedFiberRatio.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.OutsideDistanceCheck"></a>

### *property* ImportedFiberRatio.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.OutsideNodesName"></a>

### *property* ImportedFiberRatio.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.OutsideOption"></a>

### *property* ImportedFiberRatio.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Pinball"></a>

### *property* ImportedFiberRatio.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Projection"></a>

### *property* ImportedFiberRatio.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Properties"></a>

### *property* ImportedFiberRatio.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.RigidBodyTransformationType"></a>

### *property* ImportedFiberRatio.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedFiberRatio.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedFiberRatio.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.SharedRefBody"></a>

### *property* ImportedFiberRatio.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.ShellThicknessFactor"></a>

### *property* ImportedFiberRatio.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.SourceMaximum"></a>

### *property* ImportedFiberRatio.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.SourceMinimum"></a>

### *property* ImportedFiberRatio.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Suppressed"></a>

### *property* ImportedFiberRatio.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.UnmappedNodesName"></a>

### *property* ImportedFiberRatio.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.VariableType"></a>

### *property* ImportedFiberRatio.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.VisibleProperties"></a>

### *property* ImportedFiberRatio.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Weighting"></a>

### *property* ImportedFiberRatio.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedFiberRatio.Activate"></a>

### ImportedFiberRatio.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.AddComment"></a>

### ImportedFiberRatio.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.AddFigure"></a>

### ImportedFiberRatio.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.AddImage"></a>

### ImportedFiberRatio.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.AddMappingValidation"></a>

### ImportedFiberRatio.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.ClearGeneratedData"></a>

### ImportedFiberRatio.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.CopyTo"></a>

### ImportedFiberRatio.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.CreateParameter"></a>

### ImportedFiberRatio.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Delete"></a>

### ImportedFiberRatio.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Duplicate"></a>

### ImportedFiberRatio.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.ExportToTextFile"></a>

### ImportedFiberRatio.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.GetActivateAtLoadStep"></a>

### ImportedFiberRatio.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.GetChildren"></a>

### ImportedFiberRatio.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.GetParameter"></a>

### ImportedFiberRatio.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.GroupAllSimilarChildren"></a>

### ImportedFiberRatio.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.GroupSimilarObjects"></a>

### ImportedFiberRatio.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.Import"></a>

### ImportedFiberRatio.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.ImportLoad"></a>

### ImportedFiberRatio.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.PropertyByAPIName"></a>

### ImportedFiberRatio.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.PropertyByName"></a>

### ImportedFiberRatio.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.RemoveParameter"></a>

### ImportedFiberRatio.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFiberRatio.SetActivateAtLoadStep"></a>

### ImportedFiberRatio.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

