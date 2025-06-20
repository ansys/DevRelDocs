# `ImportedTrace`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTrace"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTrace

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedTrace.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedTrace.Activate)                               | Activate the current object.                                                                  |
| [`AddComment`](#ImportedTrace.AddComment)                           | Creates a new child Comment.                                                                  |
| [`AddFigure`](#ImportedTrace.AddFigure)                             | Creates a new child Figure.                                                                   |
| [`AddImage`](#ImportedTrace.AddImage)                               | Creates a new child Image.                                                                    |
| [`AddMappingValidation`](#ImportedTrace.AddMappingValidation)       | Creates a new MappingValidation                                                               |
| [`ClearGeneratedData`](#ImportedTrace.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                            |
| [`CopyTo`](#ImportedTrace.CopyTo)                                   | Copies all visible properties from this object to another.                                    |
| [`CreateParameter`](#ImportedTrace.CreateParameter)                 | Creates a new parameter for a Property.                                                       |
| [`Delete`](#ImportedTrace.Delete)                                   | Run the Delete action.                                                                        |
| [`Duplicate`](#ImportedTrace.Duplicate)                             | Creates a copy of the current DataModelObject.                                                |
| [`ExportToTextFile`](#ImportedTrace.ExportToTextFile)               | Run the ExportToTextFile action.                                                              |
| [`GetActivateAtLoadStep`](#ImportedTrace.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                                 |
| [`GetChildren`](#ImportedTrace.GetChildren)                         | Gets the list of children, filtered by type.                                                  |
| [`GetParameter`](#ImportedTrace.GetParameter)                       | Gets the parameter corresponding to the given property.                                       |
| [`GroupAllSimilarChildren`](#ImportedTrace.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                       |
| [`GroupSimilarObjects`](#ImportedTrace.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                           |
| [`Import`](#ImportedTrace.Import)                                   | Import.                                                                                       |
| [`ImportLoad`](#ImportedTrace.ImportLoad)                           | Run the ImportLoad action.                                                                    |
| [`PropertyByAPIName`](#ImportedTrace.PropertyByAPIName)             | Get a property by its API name.                                                               |
| [`PropertyByName`](#ImportedTrace.PropertyByName)                   | Get a property by its unique name.                                                            |
| [`ReloadConfiguration`](#ImportedTrace.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available).       |
| [`RemoveParameter`](#ImportedTrace.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.             |
| [`SetActivateAtLoadStep`](#ImportedTrace.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                                 |
| [`SyncAnalysisFrequencies`](#ImportedTrace.SyncAnalysisFrequencies) | Synchronizes the analysis settings’ RPMs and frequencies based on the selected imported load. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedTrace.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedTrace.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedTrace.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedTrace.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedTrace.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedTrace.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedTrace.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedTrace.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedTrace.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedTrace.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedTrace.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedTrace.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedTrace.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedTrace.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedTrace.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedTrace.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedTrace.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedTrace.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedTrace.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedTrace.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`Layers`](#ImportedTrace.Layers)                                                             | Layers property.                                                                                        |
| [`Limit`](#ImportedTrace.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedTrace.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedTrace.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedTrace.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedTrace.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedTrace.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedTrace.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedTrace.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedTrace.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedTrace.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedTrace.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedTrace.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedTrace.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedTrace.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedTrace.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedTrace.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedTrace.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedTrace.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedTrace.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedTrace.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedTrace.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedTrace.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedTrace.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedTrace.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedTrace.VariableType)                                                 | VariableType property.                                                                                  |
| [`Vias`](#ImportedTrace.Vias)                                                                 | Vias property.                                                                                          |
| [`VisibleProperties`](#ImportedTrace.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedTrace.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedTrace.Algorithm"></a>

### *property* ImportedTrace.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ApplyAs"></a>

### *property* ImportedTrace.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.BoundingBoxTolerance"></a>

### *property* ImportedTrace.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Children"></a>

### *property* ImportedTrace.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Comments"></a>

### *property* ImportedTrace.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedTrace.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedTrace.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedTrace.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DataModelObjectCategory"></a>

### *property* ImportedTrace.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DisplayInteriorPoints"></a>

### *property* ImportedTrace.DisplayInteriorPoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DisplayProjectionPlane"></a>

### *property* ImportedTrace.DisplayProjectionPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DisplaySourcePointIds"></a>

### *property* ImportedTrace.DisplaySourcePointIds *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.DisplaySourcePoints"></a>

### *property* ImportedTrace.DisplaySourcePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ExtrapolationTolerancePercent"></a>

### *property* ImportedTrace.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Figures"></a>

### *property* ImportedTrace.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Images"></a>

### *property* ImportedTrace.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.InternalObject"></a>

### *property* ImportedTrace.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Interpolation"></a>

### *property* ImportedTrace.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.KrigingCorrelationFunction"></a>

### *property* ImportedTrace.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.KrigingPolynom"></a>

### *property* ImportedTrace.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Layers"></a>

### *property* ImportedTrace.Layers *: Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow] | [None](https://docs.python.org/3/library/constants.html#None)*

Layers property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Limit"></a>

### *property* ImportedTrace.Limit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Location"></a>

### *property* ImportedTrace.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.MappedNodesName"></a>

### *property* ImportedTrace.MappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Mapping"></a>

### *property* ImportedTrace.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.MappingControl"></a>

### *property* ImportedTrace.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.MaxOutsideDistance"></a>

### *property* ImportedTrace.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Method"></a>

### *property* ImportedTrace.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.NumberOfPoints"></a>

### *property* ImportedTrace.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OrientationRealignment"></a>

### *property* ImportedTrace.OrientationRealignment *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OutsideDistanceCheck"></a>

### *property* ImportedTrace.OutsideDistanceCheck *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OutsideNodesName"></a>

### *property* ImportedTrace.OutsideNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.OutsideOption"></a>

### *property* ImportedTrace.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Pinball"></a>

### *property* ImportedTrace.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Projection"></a>

### *property* ImportedTrace.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Properties"></a>

### *property* ImportedTrace.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.RigidBodyTransformationType"></a>

### *property* ImportedTrace.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedTrace.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedTrace.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SharedRefBody"></a>

### *property* ImportedTrace.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ShellThicknessFactor"></a>

### *property* ImportedTrace.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SourceMaximum"></a>

### *property* ImportedTrace.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SourceMinimum"></a>

### *property* ImportedTrace.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Suppressed"></a>

### *property* ImportedTrace.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.UnmappedNodesName"></a>

### *property* ImportedTrace.UnmappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.VariableType"></a>

### *property* ImportedTrace.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Vias"></a>

### *property* ImportedTrace.Vias *: Iterable[Ansys.ACT.Automation.Mechanical.WorksheetRow] | [None](https://docs.python.org/3/library/constants.html#None)*

Vias property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.VisibleProperties"></a>

### *property* ImportedTrace.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Weighting"></a>

### *property* ImportedTrace.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedTrace.Activate"></a>

### ImportedTrace.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AddComment"></a>

### ImportedTrace.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AddFigure"></a>

### ImportedTrace.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AddImage"></a>

### ImportedTrace.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.AddMappingValidation"></a>

### ImportedTrace.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ClearGeneratedData"></a>

### ImportedTrace.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CopyTo"></a>

### ImportedTrace.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.CreateParameter"></a>

### ImportedTrace.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Delete"></a>

### ImportedTrace.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Duplicate"></a>

### ImportedTrace.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ExportToTextFile"></a>

### ImportedTrace.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetActivateAtLoadStep"></a>

### ImportedTrace.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetChildren"></a>

### ImportedTrace.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GetParameter"></a>

### ImportedTrace.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GroupAllSimilarChildren"></a>

### ImportedTrace.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.GroupSimilarObjects"></a>

### ImportedTrace.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.Import"></a>

### ImportedTrace.Import() → [None](https://docs.python.org/3/library/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ImportLoad"></a>

### ImportedTrace.ImportLoad() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.PropertyByAPIName"></a>

### ImportedTrace.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.PropertyByName"></a>

### ImportedTrace.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.ReloadConfiguration"></a>

### ImportedTrace.ReloadConfiguration() → [None](https://docs.python.org/3/library/constants.html#None)

Reload the Imported Load’s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.RemoveParameter"></a>

### ImportedTrace.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SetActivateAtLoadStep"></a>

### ImportedTrace.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedTrace.SyncAnalysisFrequencies"></a>

### ImportedTrace.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/library/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

