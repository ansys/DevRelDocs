# NonlinearAdaptiveRegion

### *class* NonlinearAdaptiveRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NonlinearAdaptiveRegion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#NonlinearAdaptiveRegion.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`TimeRange`](#NonlinearAdaptiveRegion.TimeRange)                                                                      | Gets or sets the TimeRange.                                   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CheckAtValue`](#NonlinearAdaptiveRegion.CheckAtValue)                                                                | Gets or sets the CheckAtValue.                                |
| [`HexDomTimeRange`](#NonlinearAdaptiveRegion.HexDomTimeRange)                                                          | Gets or sets the HexDomTimeRange.                             |
| [`HexDomCheckAtValue`](#NonlinearAdaptiveRegion.HexDomCheckAtValue)                                                    | Gets or sets the HexDomCheckAtValue.                          |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`BufferElements`](#NonlinearAdaptiveRegion.BufferElements)                                                            | Gets or sets the BufferElements.                              |
| [`BufferLayers`](#NonlinearAdaptiveRegion.BufferLayers)                                                                | Gets or sets the BufferLayers.                                |
| [`RemeshLayerEnd`](#NonlinearAdaptiveRegion.RemeshLayerEnd)                                                            | Gets or sets the RemeshLayerEnd.                              |
| [`RemeshLayerFrequency`](#NonlinearAdaptiveRegion.RemeshLayerFrequency)                                                | Gets or sets the RemeshLayerFrequency.                        |
| [`RemeshLayerStart`](#NonlinearAdaptiveRegion.RemeshLayerStart)                                                        | Gets or sets the RemeshLayerStart.                            |
| [`EnergyCoefficient`](#NonlinearAdaptiveRegion.EnergyCoefficient)                                                      | Gets or sets the EnergyCoefficient.                           |
| [`JacobianRatioValue`](#NonlinearAdaptiveRegion.JacobianRatioValue)                                                    | Gets or sets the JacobianRatioValue.                          |
| [`SkewnessValue`](#NonlinearAdaptiveRegion.SkewnessValue)                                                              | Gets or sets the SkewnessValue.                               |
| [`LengthX`](#NonlinearAdaptiveRegion.LengthX)                                                                          | Gets or sets the LengthX.                                     |
| [`LengthY`](#NonlinearAdaptiveRegion.LengthY)                                                                          | Gets or sets the LengthY.                                     |
| [`LengthZ`](#NonlinearAdaptiveRegion.LengthZ)                                                                          | Gets or sets the LengthZ.                                     |
| [`HexDomEndTime`](#NonlinearAdaptiveRegion.HexDomEndTime)                                                              | Gets or sets the HexDomEndTime.                               |
| [`HexDomStartTime`](#NonlinearAdaptiveRegion.HexDomStartTime)                                                          | Gets or sets the HexDomStartTime.                             |
| [`MaximumCornerAngle`](#NonlinearAdaptiveRegion.MaximumCornerAngle)                                                    | Gets or sets the MaximumCornerAngle.                          |
| [`EndTime`](#NonlinearAdaptiveRegion.EndTime)                                                                          | Gets or sets the EndTime.                                     |
| [`StartTime`](#NonlinearAdaptiveRegion.StartTime)                                                                      | Gets or sets the StartTime.                                   |
| [`Criterion`](../Criterion.md#Criterion)                                                                               | Gets or sets the Criterion.                                   |
| [`HexDomCheckAt`](#NonlinearAdaptiveRegion.HexDomCheckAt)                                                              | Gets or sets the HexDomCheckAt.                               |
| [`Option`](#NonlinearAdaptiveRegion.Option)                                                                            | Gets or sets the Option.                                      |
| [`CheckAt`](#NonlinearAdaptiveRegion.CheckAt)                                                                          | Gets or sets the CheckAt.                                     |
| [`Suppressed`](#NonlinearAdaptiveRegion.Suppressed)                                                                    | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#NonlinearAdaptiveRegion.Location)                                                                        | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#NonlinearAdaptiveRegion.Children)                                                                        | Gets the list of children.                                    |
| [`Comments`](#NonlinearAdaptiveRegion.Comments)                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#NonlinearAdaptiveRegion.Figures)                                                                          | Gets the list of associated figures.                          |
| [`Images`](#NonlinearAdaptiveRegion.Images)                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NonlinearAdaptiveRegion.Properties)                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NonlinearAdaptiveRegion.VisibleProperties)                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import NonlinearAdaptiveRegion
```

## Property detail

### *property* NonlinearAdaptiveRegion.TimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeRange.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.CheckAtValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAtValue.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomTimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomTimeRange.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomCheckAtValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAtValue.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNonlinearAdaptivityAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.BufferElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferElements.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.BufferLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferLayers.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.RemeshLayerEnd *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerEnd.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.RemeshLayerFrequency *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerFrequency.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.RemeshLayerStart *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerStart.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.EnergyCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.JacobianRatioValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JacobianRatioValue.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.SkewnessValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SkewnessValue.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthX.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthY.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthZ.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomEndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomEndTime.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomStartTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomStartTime.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.MaximumCornerAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumCornerAngle.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.EndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndTime.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.StartTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartTime.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Criterion *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityCriterionType.md#NonlinearAdaptivityCriterionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomCheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAt.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Option *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityOptionType.md#NonlinearAdaptivityOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Option.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.CheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAt.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NonlinearAdaptiveRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
