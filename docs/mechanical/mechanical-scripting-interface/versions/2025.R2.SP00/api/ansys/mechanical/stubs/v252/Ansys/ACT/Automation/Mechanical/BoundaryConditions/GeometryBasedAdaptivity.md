# `GeometryBasedAdaptivity`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeometryBasedAdaptivity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeometryBasedAdaptivity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeometryBasedAdaptivity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GeometryBasedAdaptivity.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#GeometryBasedAdaptivity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeometryBasedAdaptivity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeometryBasedAdaptivity.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#GeometryBasedAdaptivity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#GeometryBasedAdaptivity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#GeometryBasedAdaptivity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#GeometryBasedAdaptivity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#GeometryBasedAdaptivity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#GeometryBasedAdaptivity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GeometryBasedAdaptivity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeometryBasedAdaptivity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#GeometryBasedAdaptivity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GeometryBasedAdaptivity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GeometryBasedAdaptivity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BufferElements`](#GeometryBasedAdaptivity.BufferElements)                   | Gets or sets the BufferElements.                              |
| [`BufferLayers`](#GeometryBasedAdaptivity.BufferLayers)                       | Gets or sets the BufferLayers.                                |
| [`CheckAt`](#GeometryBasedAdaptivity.CheckAt)                                 | Gets or sets the CheckAt.                                     |
| [`CheckAtValue`](#GeometryBasedAdaptivity.CheckAtValue)                       | Gets or sets the CheckAtValue.                                |
| [`Children`](#GeometryBasedAdaptivity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GeometryBasedAdaptivity.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#GeometryBasedAdaptivity.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Criterion`](#GeometryBasedAdaptivity.Criterion)                             | Gets or sets the Criterion.                                   |
| [`DataModelObjectCategory`](#GeometryBasedAdaptivity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`EndTime`](#GeometryBasedAdaptivity.EndTime)                                 | Gets or sets the EndTime.                                     |
| [`EnergyCoefficient`](#GeometryBasedAdaptivity.EnergyCoefficient)             | Gets or sets the EnergyCoefficient.                           |
| [`Figures`](#GeometryBasedAdaptivity.Figures)                                 | Gets the list of associated figures.                          |
| [`HexDomCheckAt`](#GeometryBasedAdaptivity.HexDomCheckAt)                     | Gets or sets the HexDomCheckAt.                               |
| [`HexDomCheckAtValue`](#GeometryBasedAdaptivity.HexDomCheckAtValue)           | Gets or sets the HexDomCheckAtValue.                          |
| [`HexDomEndTime`](#GeometryBasedAdaptivity.HexDomEndTime)                     | Gets or sets the HexDomEndTime.                               |
| [`HexDomStartTime`](#GeometryBasedAdaptivity.HexDomStartTime)                 | Gets or sets the HexDomStartTime.                             |
| [`HexDomTimeRange`](#GeometryBasedAdaptivity.HexDomTimeRange)                 | Gets or sets the HexDomTimeRange.                             |
| [`Images`](#GeometryBasedAdaptivity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GeometryBasedAdaptivity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`JacobianRatioValue`](#GeometryBasedAdaptivity.JacobianRatioValue)           | Gets or sets the JacobianRatioValue.                          |
| [`LengthX`](#GeometryBasedAdaptivity.LengthX)                                 | Gets or sets the LengthX.                                     |
| [`LengthY`](#GeometryBasedAdaptivity.LengthY)                                 | Gets or sets the LengthY.                                     |
| [`LengthZ`](#GeometryBasedAdaptivity.LengthZ)                                 | Gets or sets the LengthZ.                                     |
| [`Location`](#GeometryBasedAdaptivity.Location)                               | Gets or sets the Location.                                    |
| [`MaximumCornerAngle`](#GeometryBasedAdaptivity.MaximumCornerAngle)           | Gets or sets the MaximumCornerAngle.                          |
| [`Option`](#GeometryBasedAdaptivity.Option)                                   | Gets or sets the Option.                                      |
| [`Properties`](#GeometryBasedAdaptivity.Properties)                           | Gets the list of properties for this object.                  |
| [`RemeshLayerEnd`](#GeometryBasedAdaptivity.RemeshLayerEnd)                   | Gets or sets the RemeshLayerEnd.                              |
| [`RemeshLayerFrequency`](#GeometryBasedAdaptivity.RemeshLayerFrequency)       | Gets or sets the RemeshLayerFrequency.                        |
| [`RemeshLayerStart`](#GeometryBasedAdaptivity.RemeshLayerStart)               | Gets or sets the RemeshLayerStart.                            |
| [`SkewnessValue`](#GeometryBasedAdaptivity.SkewnessValue)                     | Gets or sets the SkewnessValue.                               |
| [`StartTime`](#GeometryBasedAdaptivity.StartTime)                             | Gets or sets the StartTime.                                   |
| [`Suppressed`](#GeometryBasedAdaptivity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TimeRange`](#GeometryBasedAdaptivity.TimeRange)                             | Gets or sets the TimeRange.                                   |
| [`VisibleProperties`](#GeometryBasedAdaptivity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryBasedAdaptivity.BufferElements"></a>

### *property* GeometryBasedAdaptivity.BufferElements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferElements.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.BufferLayers"></a>

### *property* GeometryBasedAdaptivity.BufferLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferLayers.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CheckAt"></a>

### *property* GeometryBasedAdaptivity.CheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAt.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CheckAtValue"></a>

### *property* GeometryBasedAdaptivity.CheckAtValue *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAtValue.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Children"></a>

### *property* GeometryBasedAdaptivity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Comments"></a>

### *property* GeometryBasedAdaptivity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CoordinateSystem"></a>

### *property* GeometryBasedAdaptivity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Criterion"></a>

### *property* GeometryBasedAdaptivity.Criterion *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityCriterionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.DataModelObjectCategory"></a>

### *property* GeometryBasedAdaptivity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.EndTime"></a>

### *property* GeometryBasedAdaptivity.EndTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndTime.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.EnergyCoefficient"></a>

### *property* GeometryBasedAdaptivity.EnergyCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Figures"></a>

### *property* GeometryBasedAdaptivity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomCheckAt"></a>

### *property* GeometryBasedAdaptivity.HexDomCheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAt.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomCheckAtValue"></a>

### *property* GeometryBasedAdaptivity.HexDomCheckAtValue *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAtValue.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomEndTime"></a>

### *property* GeometryBasedAdaptivity.HexDomEndTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomEndTime.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomStartTime"></a>

### *property* GeometryBasedAdaptivity.HexDomStartTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomStartTime.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomTimeRange"></a>

### *property* GeometryBasedAdaptivity.HexDomTimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomTimeRange.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Images"></a>

### *property* GeometryBasedAdaptivity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.InternalObject"></a>

### *property* GeometryBasedAdaptivity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNonlinearAdaptivityAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.JacobianRatioValue"></a>

### *property* GeometryBasedAdaptivity.JacobianRatioValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JacobianRatioValue.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.LengthX"></a>

### *property* GeometryBasedAdaptivity.LengthX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.LengthY"></a>

### *property* GeometryBasedAdaptivity.LengthY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.LengthZ"></a>

### *property* GeometryBasedAdaptivity.LengthZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Location"></a>

### *property* GeometryBasedAdaptivity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.MaximumCornerAngle"></a>

### *property* GeometryBasedAdaptivity.MaximumCornerAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumCornerAngle.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Option"></a>

### *property* GeometryBasedAdaptivity.Option *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityOptionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Option.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Properties"></a>

### *property* GeometryBasedAdaptivity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.RemeshLayerEnd"></a>

### *property* GeometryBasedAdaptivity.RemeshLayerEnd *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerEnd.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.RemeshLayerFrequency"></a>

### *property* GeometryBasedAdaptivity.RemeshLayerFrequency *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerFrequency.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.RemeshLayerStart"></a>

### *property* GeometryBasedAdaptivity.RemeshLayerStart *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerStart.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.SkewnessValue"></a>

### *property* GeometryBasedAdaptivity.SkewnessValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SkewnessValue.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.StartTime"></a>

### *property* GeometryBasedAdaptivity.StartTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartTime.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Suppressed"></a>

### *property* GeometryBasedAdaptivity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.TimeRange"></a>

### *property* GeometryBasedAdaptivity.TimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeRange.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.VisibleProperties"></a>

### *property* GeometryBasedAdaptivity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryBasedAdaptivity.Activate"></a>

### GeometryBasedAdaptivity.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.AddComment"></a>

### GeometryBasedAdaptivity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.AddFigure"></a>

### GeometryBasedAdaptivity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.AddImage"></a>

### GeometryBasedAdaptivity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CopyTo"></a>

### GeometryBasedAdaptivity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CreateParameter"></a>

### GeometryBasedAdaptivity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Delete"></a>

### GeometryBasedAdaptivity.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Duplicate"></a>

### GeometryBasedAdaptivity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetChildren"></a>

### GeometryBasedAdaptivity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetParameter"></a>

### GeometryBasedAdaptivity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GroupAllSimilarChildren"></a>

### GeometryBasedAdaptivity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GroupSimilarObjects"></a>

### GeometryBasedAdaptivity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.PropertyByAPIName"></a>

### GeometryBasedAdaptivity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.PropertyByName"></a>

### GeometryBasedAdaptivity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.RemoveParameter"></a>

### GeometryBasedAdaptivity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

