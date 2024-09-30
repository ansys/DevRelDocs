# `ImportedMaterialField`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedMaterialField"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedMaterialField

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedMaterialField.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedMaterialField.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedMaterialField.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedMaterialField.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedMaterialField.AddImage)                               | Creates a new child Image.                                                        |
| [`AddMappingValidation`](#ImportedMaterialField.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedMaterialField.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ImportedMaterialField.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedMaterialField.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedMaterialField.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedMaterialField.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`ExportToTextFile`](#ImportedMaterialField.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`GetActivateAtLoadStep`](#ImportedMaterialField.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`GetChildren`](#ImportedMaterialField.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedMaterialField.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedMaterialField.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedMaterialField.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`Import`](#ImportedMaterialField.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedMaterialField.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`PropertyByAPIName`](#ImportedMaterialField.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedMaterialField.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedMaterialField.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#ImportedMaterialField.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedMaterialField.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedMaterialField.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedMaterialField.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedMaterialField.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedMaterialField.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedMaterialField.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedMaterialField.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedMaterialField.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedMaterialField.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedMaterialField.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedMaterialField.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedMaterialField.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedMaterialField.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedMaterialField.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedMaterialField.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedMaterialField.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedMaterialField.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedMaterialField.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedMaterialField.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedMaterialField.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`LegendMaximum`](#ImportedMaterialField.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedMaterialField.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedMaterialField.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`Limit`](#ImportedMaterialField.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedMaterialField.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedMaterialField.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedMaterialField.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedMaterialField.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedMaterialField.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedMaterialField.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedMaterialField.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedMaterialField.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedMaterialField.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedMaterialField.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedMaterialField.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedMaterialField.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedMaterialField.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedMaterialField.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedMaterialField.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedMaterialField.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedMaterialField.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedMaterialField.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedMaterialField.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedMaterialField.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedMaterialField.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedMaterialField.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedMaterialField.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedMaterialField.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedMaterialField.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedMaterialField.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedMaterialField.Algorithm"></a>

### *property* ImportedMaterialField.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.ApplyAs"></a>

### *property* ImportedMaterialField.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.BoundingBoxTolerance"></a>

### *property* ImportedMaterialField.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Children"></a>

### *property* ImportedMaterialField.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Comments"></a>

### *property* ImportedMaterialField.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedMaterialField.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedMaterialField.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedMaterialField.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.DataModelObjectCategory"></a>

### *property* ImportedMaterialField.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.DisplayInteriorPoints"></a>

### *property* ImportedMaterialField.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.DisplayProjectionPlane"></a>

### *property* ImportedMaterialField.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.DisplaySourcePointIds"></a>

### *property* ImportedMaterialField.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.DisplaySourcePoints"></a>

### *property* ImportedMaterialField.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.ExtrapolationTolerancePercent"></a>

### *property* ImportedMaterialField.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Figures"></a>

### *property* ImportedMaterialField.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Images"></a>

### *property* ImportedMaterialField.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.InternalObject"></a>

### *property* ImportedMaterialField.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Interpolation"></a>

### *property* ImportedMaterialField.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.KrigingCorrelationFunction"></a>

### *property* ImportedMaterialField.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.KrigingPolynom"></a>

### *property* ImportedMaterialField.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.LegendMaximum"></a>

### *property* ImportedMaterialField.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.LegendMinimum"></a>

### *property* ImportedMaterialField.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.LegendRange"></a>

### *property* ImportedMaterialField.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Limit"></a>

### *property* ImportedMaterialField.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Location"></a>

### *property* ImportedMaterialField.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.MappedNodesName"></a>

### *property* ImportedMaterialField.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Mapping"></a>

### *property* ImportedMaterialField.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.MappingControl"></a>

### *property* ImportedMaterialField.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.MaxOutsideDistance"></a>

### *property* ImportedMaterialField.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Method"></a>

### *property* ImportedMaterialField.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.NumberOfPoints"></a>

### *property* ImportedMaterialField.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.OrientationRealignment"></a>

### *property* ImportedMaterialField.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.OutsideDistanceCheck"></a>

### *property* ImportedMaterialField.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.OutsideNodesName"></a>

### *property* ImportedMaterialField.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.OutsideOption"></a>

### *property* ImportedMaterialField.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Pinball"></a>

### *property* ImportedMaterialField.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Projection"></a>

### *property* ImportedMaterialField.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Properties"></a>

### *property* ImportedMaterialField.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.RigidBodyTransformationType"></a>

### *property* ImportedMaterialField.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedMaterialField.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedMaterialField.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.SharedRefBody"></a>

### *property* ImportedMaterialField.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.ShellThicknessFactor"></a>

### *property* ImportedMaterialField.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.SourceMaximum"></a>

### *property* ImportedMaterialField.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.SourceMinimum"></a>

### *property* ImportedMaterialField.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Suppressed"></a>

### *property* ImportedMaterialField.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.UnmappedNodesName"></a>

### *property* ImportedMaterialField.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.VariableType"></a>

### *property* ImportedMaterialField.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.VisibleProperties"></a>

### *property* ImportedMaterialField.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Weighting"></a>

### *property* ImportedMaterialField.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedMaterialField.Activate"></a>

### ImportedMaterialField.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.AddComment"></a>

### ImportedMaterialField.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.AddFigure"></a>

### ImportedMaterialField.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.AddImage"></a>

### ImportedMaterialField.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.AddMappingValidation"></a>

### ImportedMaterialField.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.ClearGeneratedData"></a>

### ImportedMaterialField.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.CopyTo"></a>

### ImportedMaterialField.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.CreateParameter"></a>

### ImportedMaterialField.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Delete"></a>

### ImportedMaterialField.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Duplicate"></a>

### ImportedMaterialField.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.ExportToTextFile"></a>

### ImportedMaterialField.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.GetActivateAtLoadStep"></a>

### ImportedMaterialField.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.GetChildren"></a>

### ImportedMaterialField.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.GetParameter"></a>

### ImportedMaterialField.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.GroupAllSimilarChildren"></a>

### ImportedMaterialField.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.GroupSimilarObjects"></a>

### ImportedMaterialField.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.Import"></a>

### ImportedMaterialField.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.ImportLoad"></a>

### ImportedMaterialField.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.PropertyByAPIName"></a>

### ImportedMaterialField.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.PropertyByName"></a>

### ImportedMaterialField.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.RemoveParameter"></a>

### ImportedMaterialField.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedMaterialField.SetActivateAtLoadStep"></a>

### ImportedMaterialField.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

