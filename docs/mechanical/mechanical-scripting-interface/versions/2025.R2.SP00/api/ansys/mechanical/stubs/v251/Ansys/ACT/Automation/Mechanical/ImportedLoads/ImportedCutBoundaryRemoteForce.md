# `ImportedCutBoundaryRemoteForce`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteForce"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCutBoundaryRemoteForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedCutBoundaryRemoteForce.Activate)                               | Activate the current object.                                                              |
| [`AddComment`](#ImportedCutBoundaryRemoteForce.AddComment)                           | Creates a new child Comment.                                                              |
| [`AddFigure`](#ImportedCutBoundaryRemoteForce.AddFigure)                             | Creates a new child Figure.                                                               |
| [`AddImage`](#ImportedCutBoundaryRemoteForce.AddImage)                               | Creates a new child Image.                                                                |
| [`AddMappingValidation`](#ImportedCutBoundaryRemoteForce.AddMappingValidation)       | Creates a new MappingValidation                                                           |
| [`ClearGeneratedData`](#ImportedCutBoundaryRemoteForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                        |
| [`CopyTo`](#ImportedCutBoundaryRemoteForce.CopyTo)                                   | Copies all visible properties from this object to another.                                |
| [`CreateParameter`](#ImportedCutBoundaryRemoteForce.CreateParameter)                 | Creates a new parameter for a Property.                                                   |
| [`Delete`](#ImportedCutBoundaryRemoteForce.Delete)                                   | Run the Delete action.                                                                    |
| [`Duplicate`](#ImportedCutBoundaryRemoteForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                            |
| [`ExportToTextFile`](#ImportedCutBoundaryRemoteForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                          |
| [`GetActivateAtLoadStep`](#ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep)     | Gets whether the imported cut boundary remote force is active at the specified load step. |
| [`GetChildren`](#ImportedCutBoundaryRemoteForce.GetChildren)                         | Gets the list of children, filtered by type.                                              |
| [`GetParameter`](#ImportedCutBoundaryRemoteForce.GetParameter)                       | Gets the parameter corresponding to the given property.                                   |
| [`GroupAllSimilarChildren`](#ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                   |
| [`GroupSimilarObjects`](#ImportedCutBoundaryRemoteForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                       |
| [`Import`](#ImportedCutBoundaryRemoteForce.Import)                                   | Import.                                                                                   |
| [`ImportLoad`](#ImportedCutBoundaryRemoteForce.ImportLoad)                           | Run the ImportLoad action.                                                                |
| [`PropertyByAPIName`](#ImportedCutBoundaryRemoteForce.PropertyByAPIName)             | Get a property by its API name.                                                           |
| [`PropertyByName`](#ImportedCutBoundaryRemoteForce.PropertyByName)                   | Get a property by its unique name.                                                        |
| [`ReloadConfiguration`](#ImportedCutBoundaryRemoteForce.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available).   |
| [`RemoveParameter`](#ImportedCutBoundaryRemoteForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.         |
| [`SetActivateAtLoadStep`](#ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep)     | Sets whether the imported cut boundary remote force is active at the specified load step. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedCutBoundaryRemoteForce.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedCutBoundaryRemoteForce.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedCutBoundaryRemoteForce.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedCutBoundaryRemoteForce.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedCutBoundaryRemoteForce.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedCutBoundaryRemoteForce.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedCutBoundaryRemoteForce.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedCutBoundaryRemoteForce.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedCutBoundaryRemoteForce.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedCutBoundaryRemoteForce.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedCutBoundaryRemoteForce.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedCutBoundaryRemoteForce.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedCutBoundaryRemoteForce.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedCutBoundaryRemoteForce.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedCutBoundaryRemoteForce.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`Limit`](#ImportedCutBoundaryRemoteForce.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedCutBoundaryRemoteForce.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedCutBoundaryRemoteForce.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedCutBoundaryRemoteForce.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedCutBoundaryRemoteForce.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedCutBoundaryRemoteForce.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedCutBoundaryRemoteForce.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedCutBoundaryRemoteForce.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedCutBoundaryRemoteForce.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedCutBoundaryRemoteForce.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedCutBoundaryRemoteForce.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedCutBoundaryRemoteForce.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedCutBoundaryRemoteForce.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedCutBoundaryRemoteForce.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedCutBoundaryRemoteForce.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedCutBoundaryRemoteForce.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedCutBoundaryRemoteForce.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedCutBoundaryRemoteForce.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedCutBoundaryRemoteForce.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedCutBoundaryRemoteForce.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedCutBoundaryRemoteForce.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedCutBoundaryRemoteForce.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedCutBoundaryRemoteForce.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedCutBoundaryRemoteForce.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedCutBoundaryRemoteForce.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCutBoundaryRemoteForce.Algorithm"></a>

### *property* ImportedCutBoundaryRemoteForce.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ApplyAs"></a>

### *property* ImportedCutBoundaryRemoteForce.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.BoundingBoxTolerance"></a>

### *property* ImportedCutBoundaryRemoteForce.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Children"></a>

### *property* ImportedCutBoundaryRemoteForce.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Comments"></a>

### *property* ImportedCutBoundaryRemoteForce.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DataModelObjectCategory"></a>

### *property* ImportedCutBoundaryRemoteForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplayInteriorPoints"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplayInteriorPoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplayProjectionPlane"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplayProjectionPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplaySourcePointIds"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplaySourcePointIds *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.DisplaySourcePoints"></a>

### *property* ImportedCutBoundaryRemoteForce.DisplaySourcePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent"></a>

### *property* ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Figures"></a>

### *property* ImportedCutBoundaryRemoteForce.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Images"></a>

### *property* ImportedCutBoundaryRemoteForce.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.InternalObject"></a>

### *property* ImportedCutBoundaryRemoteForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Interpolation"></a>

### *property* ImportedCutBoundaryRemoteForce.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction"></a>

### *property* ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.KrigingPolynom"></a>

### *property* ImportedCutBoundaryRemoteForce.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Limit"></a>

### *property* ImportedCutBoundaryRemoteForce.Limit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Location"></a>

### *property* ImportedCutBoundaryRemoteForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.MappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteForce.MappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Mapping"></a>

### *property* ImportedCutBoundaryRemoteForce.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.MappingControl"></a>

### *property* ImportedCutBoundaryRemoteForce.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.MaxOutsideDistance"></a>

### *property* ImportedCutBoundaryRemoteForce.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Method"></a>

### *property* ImportedCutBoundaryRemoteForce.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.NumberOfPoints"></a>

### *property* ImportedCutBoundaryRemoteForce.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OrientationRealignment"></a>

### *property* ImportedCutBoundaryRemoteForce.OrientationRealignment *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OutsideDistanceCheck"></a>

### *property* ImportedCutBoundaryRemoteForce.OutsideDistanceCheck *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OutsideNodesName"></a>

### *property* ImportedCutBoundaryRemoteForce.OutsideNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.OutsideOption"></a>

### *property* ImportedCutBoundaryRemoteForce.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Pinball"></a>

### *property* ImportedCutBoundaryRemoteForce.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Projection"></a>

### *property* ImportedCutBoundaryRemoteForce.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Properties"></a>

### *property* ImportedCutBoundaryRemoteForce.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RigidBodyTransformationType"></a>

### *property* ImportedCutBoundaryRemoteForce.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SharedRefBody"></a>

### *property* ImportedCutBoundaryRemoteForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ShellThicknessFactor"></a>

### *property* ImportedCutBoundaryRemoteForce.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="ImportedCutBoundaryRemoteForce.Suppressed"></a>

### *property* ImportedCutBoundaryRemoteForce.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.UnmappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteForce.UnmappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.VariableType"></a>

### *property* ImportedCutBoundaryRemoteForce.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.VisibleProperties"></a>

### *property* ImportedCutBoundaryRemoteForce.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Weighting"></a>

### *property* ImportedCutBoundaryRemoteForce.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCutBoundaryRemoteForce.Activate"></a>

### ImportedCutBoundaryRemoteForce.Activate()

Activate the current object.

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

### ImportedCutBoundaryRemoteForce.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.AddMappingValidation"></a>

### ImportedCutBoundaryRemoteForce.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ClearGeneratedData"></a>

### ImportedCutBoundaryRemoteForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CopyTo"></a>

### ImportedCutBoundaryRemoteForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.CreateParameter"></a>

### ImportedCutBoundaryRemoteForce.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Delete"></a>

### ImportedCutBoundaryRemoteForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Duplicate"></a>

### ImportedCutBoundaryRemoteForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ExportToTextFile"></a>

### ImportedCutBoundaryRemoteForce.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the imported cut boundary remote force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetChildren"></a>

### ImportedCutBoundaryRemoteForce.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GetParameter"></a>

### ImportedCutBoundaryRemoteForce.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren"></a>

### ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.GroupSimilarObjects"></a>

### ImportedCutBoundaryRemoteForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.Import"></a>

### ImportedCutBoundaryRemoteForce.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ImportLoad"></a>

### ImportedCutBoundaryRemoteForce.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.PropertyByAPIName"></a>

### ImportedCutBoundaryRemoteForce.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.PropertyByName"></a>

### ImportedCutBoundaryRemoteForce.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.ReloadConfiguration"></a>

### ImportedCutBoundaryRemoteForce.ReloadConfiguration()

Reload the Imported Load’s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.RemoveParameter"></a>

### ImportedCutBoundaryRemoteForce.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the imported cut boundary remote force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

