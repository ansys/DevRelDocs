# `ImportedBodyTemperature`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedBodyTemperature"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedBodyTemperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedBodyTemperature.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedBodyTemperature.Activate)                               | Activate the current object.                                                                  |
| [`AddComment`](#ImportedBodyTemperature.AddComment)                           | Creates a new child Comment.                                                                  |
| [`AddFigure`](#ImportedBodyTemperature.AddFigure)                             | Creates a new child Figure.                                                                   |
| [`AddImage`](#ImportedBodyTemperature.AddImage)                               | Creates a new child Image.                                                                    |
| [`AddMappingValidation`](#ImportedBodyTemperature.AddMappingValidation)       | Creates a new MappingValidation                                                               |
| [`ClearGeneratedData`](#ImportedBodyTemperature.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                            |
| [`CopyTo`](#ImportedBodyTemperature.CopyTo)                                   | Copies all visible properties from this object to another.                                    |
| [`CreateParameter`](#ImportedBodyTemperature.CreateParameter)                 | Creates a new parameter for a Property.                                                       |
| [`Delete`](#ImportedBodyTemperature.Delete)                                   | Run the Delete action.                                                                        |
| [`Duplicate`](#ImportedBodyTemperature.Duplicate)                             | Creates a copy of the current DataModelObject.                                                |
| [`ExportToTextFile`](#ImportedBodyTemperature.ExportToTextFile)               | Run the ExportToTextFile action.                                                              |
| [`GetActivateAtLoadStep`](#ImportedBodyTemperature.GetActivateAtLoadStep)     | Gets whether the imported body temperature is active at the specified load step.              |
| [`GetChildren`](#ImportedBodyTemperature.GetChildren)                         | Gets the list of children, filtered by type.                                                  |
| [`GetParameter`](#ImportedBodyTemperature.GetParameter)                       | Gets the parameter corresponding to the given property.                                       |
| [`GroupAllSimilarChildren`](#ImportedBodyTemperature.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                       |
| [`GroupSimilarObjects`](#ImportedBodyTemperature.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                           |
| [`Import`](#ImportedBodyTemperature.Import)                                   | Import.                                                                                       |
| [`ImportLoad`](#ImportedBodyTemperature.ImportLoad)                           | Run the ImportLoad action.                                                                    |
| [`PropertyByAPIName`](#ImportedBodyTemperature.PropertyByAPIName)             | Get a property by its API name.                                                               |
| [`PropertyByName`](#ImportedBodyTemperature.PropertyByName)                   | Get a property by its unique name.                                                            |
| [`ReloadConfiguration`](#ImportedBodyTemperature.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available).       |
| [`RemoveParameter`](#ImportedBodyTemperature.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.             |
| [`SetActivateAtLoadStep`](#ImportedBodyTemperature.SetActivateAtLoadStep)     | Sets whether the imported body temperature is active at the specified load step.              |
| [`SyncAnalysisFrequencies`](#ImportedBodyTemperature.SyncAnalysisFrequencies) | Synchronizes the analysis settings’ RPMs and frequencies based on the selected imported load. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedBodyTemperature.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedBodyTemperature.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`ApplyToInitialMesh`](#ImportedBodyTemperature.ApplyToInitialMesh)                                     | Gets or sets the ApplyToInitialMesh.                                                                    |
| [`BoundingBoxTolerance`](#ImportedBodyTemperature.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedBodyTemperature.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedBodyTemperature.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedBodyTemperature.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedBodyTemperature.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedBodyTemperature.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedBodyTemperature.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedBodyTemperature.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedBodyTemperature.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedBodyTemperature.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedBodyTemperature.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedBodyTemperature.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedBodyTemperature.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedBodyTemperature.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedBodyTemperature.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedBodyTemperature.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedBodyTemperature.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedBodyTemperature.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`Limit`](#ImportedBodyTemperature.Limit)                                                               | Limit property.                                                                                         |
| [`LoadVectorAssignment`](#ImportedBodyTemperature.LoadVectorAssignment)                                 | Gets or sets the LoadVectorAssignment.                                                                  |
| [`LoadVectorNumber`](#ImportedBodyTemperature.LoadVectorNumber)                                         | Gets or sets the LoadVectorNumber.                                                                      |
| [`Location`](#ImportedBodyTemperature.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedData`](#ImportedBodyTemperature.MappedData)                                                     | Gets or sets the MappedData.                                                                            |
| [`MappedNodesName`](#ImportedBodyTemperature.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedBodyTemperature.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedBodyTemperature.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedBodyTemperature.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedBodyTemperature.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedBodyTemperature.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedBodyTemperature.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedBodyTemperature.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedBodyTemperature.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedBodyTemperature.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedBodyTemperature.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedBodyTemperature.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedBodyTemperature.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedBodyTemperature.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedBodyTemperature.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedBodyTemperature.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedBodyTemperature.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedBodyTemperature.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedBodyTemperature.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedBodyTemperature.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedBodyTemperature.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedBodyTemperature.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedBodyTemperature.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedBodyTemperature.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedBodyTemperature.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedBodyTemperature.Algorithm"></a>

### *property* ImportedBodyTemperature.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ApplyAs"></a>

### *property* ImportedBodyTemperature.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ApplyToInitialMesh"></a>

### *property* ImportedBodyTemperature.ApplyToInitialMesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyToInitialMesh.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.BoundingBoxTolerance"></a>

### *property* ImportedBodyTemperature.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Children"></a>

### *property* ImportedBodyTemperature.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Comments"></a>

### *property* ImportedBodyTemperature.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedBodyTemperature.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedBodyTemperature.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedBodyTemperature.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DataModelObjectCategory"></a>

### *property* ImportedBodyTemperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DisplayInteriorPoints"></a>

### *property* ImportedBodyTemperature.DisplayInteriorPoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DisplayProjectionPlane"></a>

### *property* ImportedBodyTemperature.DisplayProjectionPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DisplaySourcePointIds"></a>

### *property* ImportedBodyTemperature.DisplaySourcePointIds *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.DisplaySourcePoints"></a>

### *property* ImportedBodyTemperature.DisplaySourcePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ExtrapolationTolerancePercent"></a>

### *property* ImportedBodyTemperature.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Figures"></a>

### *property* ImportedBodyTemperature.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Images"></a>

### *property* ImportedBodyTemperature.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.InternalObject"></a>

### *property* ImportedBodyTemperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Interpolation"></a>

### *property* ImportedBodyTemperature.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.KrigingCorrelationFunction"></a>

### *property* ImportedBodyTemperature.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.KrigingPolynom"></a>

### *property* ImportedBodyTemperature.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Limit"></a>

### *property* ImportedBodyTemperature.Limit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.LoadVectorAssignment"></a>

### *property* ImportedBodyTemperature.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.LoadVectorNumber"></a>

### *property* ImportedBodyTemperature.LoadVectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Location"></a>

### *property* ImportedBodyTemperature.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.MappedData"></a>

### *property* ImportedBodyTemperature.MappedData *: Ansys.Mechanical.DataModel.Enums.MappedData | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedData.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.MappedNodesName"></a>

### *property* ImportedBodyTemperature.MappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Mapping"></a>

### *property* ImportedBodyTemperature.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.MappingControl"></a>

### *property* ImportedBodyTemperature.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.MaxOutsideDistance"></a>

### *property* ImportedBodyTemperature.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Method"></a>

### *property* ImportedBodyTemperature.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.NumberOfPoints"></a>

### *property* ImportedBodyTemperature.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.OrientationRealignment"></a>

### *property* ImportedBodyTemperature.OrientationRealignment *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.OutsideDistanceCheck"></a>

### *property* ImportedBodyTemperature.OutsideDistanceCheck *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.OutsideNodesName"></a>

### *property* ImportedBodyTemperature.OutsideNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.OutsideOption"></a>

### *property* ImportedBodyTemperature.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Pinball"></a>

### *property* ImportedBodyTemperature.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Projection"></a>

### *property* ImportedBodyTemperature.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Properties"></a>

### *property* ImportedBodyTemperature.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.RigidBodyTransformationType"></a>

### *property* ImportedBodyTemperature.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedBodyTemperature.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedBodyTemperature.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.SharedRefBody"></a>

### *property* ImportedBodyTemperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ShellThicknessFactor"></a>

### *property* ImportedBodyTemperature.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.SourceMaximum"></a>

### *property* ImportedBodyTemperature.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.SourceMinimum"></a>

### *property* ImportedBodyTemperature.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Suppressed"></a>

### *property* ImportedBodyTemperature.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.UnmappedNodesName"></a>

### *property* ImportedBodyTemperature.UnmappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.VariableType"></a>

### *property* ImportedBodyTemperature.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.VisibleProperties"></a>

### *property* ImportedBodyTemperature.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Weighting"></a>

### *property* ImportedBodyTemperature.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedBodyTemperature.Activate"></a>

### ImportedBodyTemperature.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.AddComment"></a>

### ImportedBodyTemperature.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.AddFigure"></a>

### ImportedBodyTemperature.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.AddImage"></a>

### ImportedBodyTemperature.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.AddMappingValidation"></a>

### ImportedBodyTemperature.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ClearGeneratedData"></a>

### ImportedBodyTemperature.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CopyTo"></a>

### ImportedBodyTemperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.CreateParameter"></a>

### ImportedBodyTemperature.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Delete"></a>

### ImportedBodyTemperature.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Duplicate"></a>

### ImportedBodyTemperature.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ExportToTextFile"></a>

### ImportedBodyTemperature.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.GetActivateAtLoadStep"></a>

### ImportedBodyTemperature.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the imported body temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.GetChildren"></a>

### ImportedBodyTemperature.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.GetParameter"></a>

### ImportedBodyTemperature.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.GroupAllSimilarChildren"></a>

### ImportedBodyTemperature.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.GroupSimilarObjects"></a>

### ImportedBodyTemperature.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.Import"></a>

### ImportedBodyTemperature.Import() → [None](https://docs.python.org/3/library/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ImportLoad"></a>

### ImportedBodyTemperature.ImportLoad() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.PropertyByAPIName"></a>

### ImportedBodyTemperature.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.PropertyByName"></a>

### ImportedBodyTemperature.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.ReloadConfiguration"></a>

### ImportedBodyTemperature.ReloadConfiguration() → [None](https://docs.python.org/3/library/constants.html#None)

Reload the Imported Load’s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.RemoveParameter"></a>

### ImportedBodyTemperature.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.SetActivateAtLoadStep"></a>

### ImportedBodyTemperature.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the imported body temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyTemperature.SyncAnalysisFrequencies"></a>

### ImportedBodyTemperature.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/library/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

