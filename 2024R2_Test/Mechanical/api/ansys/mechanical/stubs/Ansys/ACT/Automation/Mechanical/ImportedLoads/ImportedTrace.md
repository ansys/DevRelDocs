# ImportedTrace

### *class* ImportedTrace

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedTrace.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#ImportedTrace.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#ImportedTrace.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#ImportedTrace.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedTrace.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedTrace.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#ImportedTrace.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedTrace.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedTrace.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedTrace.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedTrace.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedTrace.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedTrace.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedTrace.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedTrace.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedTrace.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedTrace.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedTrace.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedTrace.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedTrace.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedTrace.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedTrace.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Vias`](#ImportedTrace.Vias)                                                                                                      | Vias property.                                                                                          |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Layers`](#ImportedTrace.Layers)                                                                                                  | Layers property.                                                                                        |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedTrace.Weighting)                                                                                            | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedTrace.MappingControl)                                                                                  | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedTrace.DisplaySourcePoints)                                                                        | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedTrace.DisplaySourcePointIds)                                                                    | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedTrace.DisplayInteriorPoints)                                                                    | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedTrace.DisplayProjectionPlane)                                                                  | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedTrace.Algorithm)                                                                                            | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedTrace.BoundingBoxTolerance)                                                                      | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedTrace.CreateNameSelectionForMappedNodes)                                            | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedTrace.CreateNameSelectionForOutsideNodes)                                          | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedTrace.CreateNameSelectionForUnmappedNodes)                                        | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedTrace.Mapping)                                                                                                | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedTrace.LegendMaximum)                                                                                    | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedTrace.LegendMinimum)                                                                                    | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedTrace.LegendRange)                                                                                        | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedTrace.MaxOutsideDistance)                                                                          | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedTrace.Method)                                                                                                  | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedTrace.OutsideDistanceCheck)                                                                      | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedTrace.OutsideOption)                                                                                    | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedTrace.Projection)                                                                                          | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedTrace.RigidTransformSourceCoordinateSystem)                                      | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedTrace.RigidTransformTargetCoordinateSystem)                                      | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedTrace.ShellThicknessFactor)                                                                      | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedTrace.SourceMaximum)                                                                                    | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedTrace.SourceMinimum)                                                                                    | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedTrace.Interpolation)                                                                                    | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedTrace.UnmappedNodesName)                                                                            | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedTrace.MappedNodesName)                                                                                | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedTrace.OutsideNodesName)                                                                              | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedTrace.Pinball)                                                                                                | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedTrace.NumberOfPoints)                                                                                  | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedTrace.OrientationRealignment)                                                                  | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedTrace.Limit)                                                                                                    | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedTrace.KrigingCorrelationFunction)                                                          | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedTrace.KrigingPolynom)                                                                                  | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedTrace.ExtrapolationTolerancePercent)                                                    | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedTrace.ApplyAs)                                                                                                | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedTrace.Suppressed)                                                                                          | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedTrace.SharedRefBody)                                                                                    | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedTrace.Location)                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedTrace.Children)                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#ImportedTrace.Comments)                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedTrace.Figures)                                                                                                | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedTrace.Images)                                                                                                  | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedTrace.Properties)                                                                                          | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedTrace.VisibleProperties)                                                                            | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedTrace
```

## Property detail

### *property* ImportedTrace.Vias *: System.Collections.Generic.IEnumerable[Ansys.ACT.Automation.Mechanical.WorksheetRow] | [None](https://docs.python.org/3/library/constants.html#None)*

Vias property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Layers *: System.Collections.Generic.IEnumerable[Ansys.ACT.Automation.Mechanical.WorksheetRow] | [None](https://docs.python.org/3/library/constants.html#None)*

Layers property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedTrace.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedTrace.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedTrace.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedTrace.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
