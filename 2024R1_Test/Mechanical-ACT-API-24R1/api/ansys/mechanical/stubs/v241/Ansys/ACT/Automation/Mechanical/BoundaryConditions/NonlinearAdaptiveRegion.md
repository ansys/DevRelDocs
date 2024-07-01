<!-- vale off -->

<a id="nonlinearadaptiveregion"></a>

# `NonlinearAdaptiveRegion`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NonlinearAdaptiveRegion"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NonlinearAdaptiveRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NonlinearAdaptiveRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#NonlinearAdaptiveRegion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NonlinearAdaptiveRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NonlinearAdaptiveRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NonlinearAdaptiveRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NonlinearAdaptiveRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NonlinearAdaptiveRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NonlinearAdaptiveRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NonlinearAdaptiveRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NonlinearAdaptiveRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NonlinearAdaptiveRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NonlinearAdaptiveRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#NonlinearAdaptiveRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NonlinearAdaptiveRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NonlinearAdaptiveRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TimeRange`](#NonlinearAdaptiveRegion.TimeRange)                             | Gets or sets the TimeRange.                                   |
| [`CheckAtValue`](#NonlinearAdaptiveRegion.CheckAtValue)                       | Gets or sets the CheckAtValue.                                |
| [`HexDomTimeRange`](#NonlinearAdaptiveRegion.HexDomTimeRange)                 | Gets or sets the HexDomTimeRange.                             |
| [`HexDomCheckAtValue`](#NonlinearAdaptiveRegion.HexDomCheckAtValue)           | Gets or sets the HexDomCheckAtValue.                          |
| [`InternalObject`](#id0)                                                      | Gets the internal object. For advanced usage only.            |
| [`BufferElements`](#NonlinearAdaptiveRegion.BufferElements)                   | Gets or sets the BufferElements.                              |
| [`BufferLayers`](#NonlinearAdaptiveRegion.BufferLayers)                       | Gets or sets the BufferLayers.                                |
| [`RemeshLayerEnd`](#NonlinearAdaptiveRegion.RemeshLayerEnd)                   | Gets or sets the RemeshLayerEnd.                              |
| [`RemeshLayerFrequency`](#NonlinearAdaptiveRegion.RemeshLayerFrequency)       | Gets or sets the RemeshLayerFrequency.                        |
| [`RemeshLayerStart`](#NonlinearAdaptiveRegion.RemeshLayerStart)               | Gets or sets the RemeshLayerStart.                            |
| [`EnergyCoefficient`](#NonlinearAdaptiveRegion.EnergyCoefficient)             | Gets or sets the EnergyCoefficient.                           |
| [`JacobianRatioValue`](#NonlinearAdaptiveRegion.JacobianRatioValue)           | Gets or sets the JacobianRatioValue.                          |
| [`SkewnessValue`](#NonlinearAdaptiveRegion.SkewnessValue)                     | Gets or sets the SkewnessValue.                               |
| [`LengthX`](#NonlinearAdaptiveRegion.LengthX)                                 | Gets or sets the LengthX.                                     |
| [`LengthY`](#NonlinearAdaptiveRegion.LengthY)                                 | Gets or sets the LengthY.                                     |
| [`LengthZ`](#NonlinearAdaptiveRegion.LengthZ)                                 | Gets or sets the LengthZ.                                     |
| [`HexDomEndTime`](#NonlinearAdaptiveRegion.HexDomEndTime)                     | Gets or sets the HexDomEndTime.                               |
| [`HexDomStartTime`](#NonlinearAdaptiveRegion.HexDomStartTime)                 | Gets or sets the HexDomStartTime.                             |
| [`MaximumCornerAngle`](#NonlinearAdaptiveRegion.MaximumCornerAngle)           | Gets or sets the MaximumCornerAngle.                          |
| [`EndTime`](#NonlinearAdaptiveRegion.EndTime)                                 | Gets or sets the EndTime.                                     |
| [`StartTime`](#NonlinearAdaptiveRegion.StartTime)                             | Gets or sets the StartTime.                                   |
| [`Criterion`](#NonlinearAdaptiveRegion.Criterion)                             | Gets or sets the Criterion.                                   |
| [`HexDomCheckAt`](#NonlinearAdaptiveRegion.HexDomCheckAt)                     | Gets or sets the HexDomCheckAt.                               |
| [`Option`](#NonlinearAdaptiveRegion.Option)                                   | Gets or sets the Option.                                      |
| [`CheckAt`](#NonlinearAdaptiveRegion.CheckAt)                                 | Gets or sets the CheckAt.                                     |
| [`Suppressed`](#NonlinearAdaptiveRegion.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](#NonlinearAdaptiveRegion.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Location`](#NonlinearAdaptiveRegion.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#NonlinearAdaptiveRegion.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#NonlinearAdaptiveRegion.Children)                               | Gets the list of children.                                    |
| [`Comments`](#NonlinearAdaptiveRegion.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#NonlinearAdaptiveRegion.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#NonlinearAdaptiveRegion.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                      | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NonlinearAdaptiveRegion.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NonlinearAdaptiveRegion.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NonlinearAdaptiveRegion.TimeRange"></a>

### *property* NonlinearAdaptiveRegion.TimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeRange.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CheckAtValue"></a>

### *property* NonlinearAdaptiveRegion.CheckAtValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAtValue.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomTimeRange"></a>

### *property* NonlinearAdaptiveRegion.HexDomTimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomTimeRange.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomCheckAtValue"></a>

### *property* NonlinearAdaptiveRegion.HexDomCheckAtValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAtValue.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.InternalObject"></a>

### *property* NonlinearAdaptiveRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNonlinearAdaptivityAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.BufferElements"></a>

### *property* NonlinearAdaptiveRegion.BufferElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferElements.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.BufferLayers"></a>

### *property* NonlinearAdaptiveRegion.BufferLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferLayers.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.RemeshLayerEnd"></a>

### *property* NonlinearAdaptiveRegion.RemeshLayerEnd *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerEnd.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.RemeshLayerFrequency"></a>

### *property* NonlinearAdaptiveRegion.RemeshLayerFrequency *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.RemeshLayerStart"></a>

### *property* NonlinearAdaptiveRegion.RemeshLayerStart *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerStart.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.EnergyCoefficient"></a>

### *property* NonlinearAdaptiveRegion.EnergyCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.JacobianRatioValue"></a>

### *property* NonlinearAdaptiveRegion.JacobianRatioValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JacobianRatioValue.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.SkewnessValue"></a>

### *property* NonlinearAdaptiveRegion.SkewnessValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SkewnessValue.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.LengthX"></a>

### *property* NonlinearAdaptiveRegion.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.LengthY"></a>

### *property* NonlinearAdaptiveRegion.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.LengthZ"></a>

### *property* NonlinearAdaptiveRegion.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomEndTime"></a>

### *property* NonlinearAdaptiveRegion.HexDomEndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomEndTime.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomStartTime"></a>

### *property* NonlinearAdaptiveRegion.HexDomStartTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomStartTime.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.MaximumCornerAngle"></a>

### *property* NonlinearAdaptiveRegion.MaximumCornerAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumCornerAngle.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.EndTime"></a>

### *property* NonlinearAdaptiveRegion.EndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndTime.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.StartTime"></a>

### *property* NonlinearAdaptiveRegion.StartTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartTime.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Criterion"></a>

### *property* NonlinearAdaptiveRegion.Criterion *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityCriterionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomCheckAt"></a>

### *property* NonlinearAdaptiveRegion.HexDomCheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAt.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Option"></a>

### *property* NonlinearAdaptiveRegion.Option *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityOptionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Option.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CheckAt"></a>

### *property* NonlinearAdaptiveRegion.CheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAt.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Suppressed"></a>

### *property* NonlinearAdaptiveRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CoordinateSystem"></a>

### *property* NonlinearAdaptiveRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Location"></a>

### *property* NonlinearAdaptiveRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.DataModelObjectCategory"></a>

### *property* NonlinearAdaptiveRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Children"></a>

### *property* NonlinearAdaptiveRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Comments"></a>

### *property* NonlinearAdaptiveRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Figures"></a>

### *property* NonlinearAdaptiveRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Images"></a>

### *property* NonlinearAdaptiveRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NonlinearAdaptiveRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Properties"></a>

### *property* NonlinearAdaptiveRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.VisibleProperties"></a>

### *property* NonlinearAdaptiveRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NonlinearAdaptiveRegion.Delete"></a>

### NonlinearAdaptiveRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetChildren"></a>

### NonlinearAdaptiveRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NonlinearAdaptiveRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.AddComment"></a>

### NonlinearAdaptiveRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.AddFigure"></a>

### NonlinearAdaptiveRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.AddImage"></a>

### NonlinearAdaptiveRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Activate"></a>

### NonlinearAdaptiveRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CopyTo"></a>

### NonlinearAdaptiveRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Duplicate"></a>

### NonlinearAdaptiveRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GroupAllSimilarChildren"></a>

### NonlinearAdaptiveRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GroupSimilarObjects"></a>

### NonlinearAdaptiveRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.PropertyByName"></a>

### NonlinearAdaptiveRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.PropertyByAPIName"></a>

### NonlinearAdaptiveRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CreateParameter"></a>

### NonlinearAdaptiveRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetParameter"></a>

### NonlinearAdaptiveRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.RemoveParameter"></a>

### NonlinearAdaptiveRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
