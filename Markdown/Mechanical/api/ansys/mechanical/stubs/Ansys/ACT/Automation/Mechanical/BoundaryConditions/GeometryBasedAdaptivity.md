# GeometryBasedAdaptivity

### *class* GeometryBasedAdaptivity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeometryBasedAdaptivity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#GeometryBasedAdaptivity.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GeometryBasedAdaptivity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeometryBasedAdaptivity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeometryBasedAdaptivity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GeometryBasedAdaptivity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GeometryBasedAdaptivity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GeometryBasedAdaptivity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GeometryBasedAdaptivity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeometryBasedAdaptivity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GeometryBasedAdaptivity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GeometryBasedAdaptivity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GeometryBasedAdaptivity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GeometryBasedAdaptivity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GeometryBasedAdaptivity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`TimeRange`](#GeometryBasedAdaptivity.TimeRange)                                                                      | Gets or sets the TimeRange.                                   |
| [`CheckAtValue`](#GeometryBasedAdaptivity.CheckAtValue)                                                                | Gets or sets the CheckAtValue.                                |
| [`HexDomTimeRange`](#GeometryBasedAdaptivity.HexDomTimeRange)                                                          | Gets or sets the HexDomTimeRange.                             |
| [`HexDomCheckAtValue`](#GeometryBasedAdaptivity.HexDomCheckAtValue)                                                    | Gets or sets the HexDomCheckAtValue.                          |
| [`BufferElements`](#GeometryBasedAdaptivity.BufferElements)                                                            | Gets or sets the BufferElements.                              |
| [`BufferLayers`](#GeometryBasedAdaptivity.BufferLayers)                                                                | Gets or sets the BufferLayers.                                |
| [`RemeshLayerEnd`](#GeometryBasedAdaptivity.RemeshLayerEnd)                                                            | Gets or sets the RemeshLayerEnd.                              |
| [`RemeshLayerFrequency`](#GeometryBasedAdaptivity.RemeshLayerFrequency)                                                | Gets or sets the RemeshLayerFrequency.                        |
| [`RemeshLayerStart`](#GeometryBasedAdaptivity.RemeshLayerStart)                                                        | Gets or sets the RemeshLayerStart.                            |
| [`EnergyCoefficient`](#GeometryBasedAdaptivity.EnergyCoefficient)                                                      | Gets or sets the EnergyCoefficient.                           |
| [`JacobianRatioValue`](#GeometryBasedAdaptivity.JacobianRatioValue)                                                    | Gets or sets the JacobianRatioValue.                          |
| [`SkewnessValue`](#GeometryBasedAdaptivity.SkewnessValue)                                                              | Gets or sets the SkewnessValue.                               |
| [`LengthX`](#GeometryBasedAdaptivity.LengthX)                                                                          | Gets or sets the LengthX.                                     |
| [`LengthY`](#GeometryBasedAdaptivity.LengthY)                                                                          | Gets or sets the LengthY.                                     |
| [`LengthZ`](#GeometryBasedAdaptivity.LengthZ)                                                                          | Gets or sets the LengthZ.                                     |
| [`HexDomEndTime`](#GeometryBasedAdaptivity.HexDomEndTime)                                                              | Gets or sets the HexDomEndTime.                               |
| [`HexDomStartTime`](#GeometryBasedAdaptivity.HexDomStartTime)                                                          | Gets or sets the HexDomStartTime.                             |
| [`MaximumCornerAngle`](#GeometryBasedAdaptivity.MaximumCornerAngle)                                                    | Gets or sets the MaximumCornerAngle.                          |
| [`EndTime`](#GeometryBasedAdaptivity.EndTime)                                                                          | Gets or sets the EndTime.                                     |
| [`StartTime`](#GeometryBasedAdaptivity.StartTime)                                                                      | Gets or sets the StartTime.                                   |
| [`Criterion`](../Criterion.md#Criterion)                                                                               | Gets or sets the Criterion.                                   |
| [`HexDomCheckAt`](#GeometryBasedAdaptivity.HexDomCheckAt)                                                              | Gets or sets the HexDomCheckAt.                               |
| [`Option`](#GeometryBasedAdaptivity.Option)                                                                            | Gets or sets the Option.                                      |
| [`CheckAt`](#GeometryBasedAdaptivity.CheckAt)                                                                          | Gets or sets the CheckAt.                                     |
| [`Suppressed`](#GeometryBasedAdaptivity.Suppressed)                                                                    | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#GeometryBasedAdaptivity.Location)                                                                        | Gets or sets the Location.                                    |
| [`Children`](#GeometryBasedAdaptivity.Children)                                                                        | Gets the list of children.                                    |
| [`Comments`](#GeometryBasedAdaptivity.Comments)                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#GeometryBasedAdaptivity.Figures)                                                                          | Gets the list of associated figures.                          |
| [`Images`](#GeometryBasedAdaptivity.Images)                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GeometryBasedAdaptivity.Properties)                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GeometryBasedAdaptivity.VisibleProperties)                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import GeometryBasedAdaptivity
```

## Property detail

### *property* GeometryBasedAdaptivity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNonlinearAdaptivityAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.TimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeRange.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.CheckAtValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAtValue.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.HexDomTimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomTimeRange.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.HexDomCheckAtValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAtValue.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.BufferElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferElements.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.BufferLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferLayers.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.RemeshLayerEnd *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerEnd.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.RemeshLayerFrequency *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerFrequency.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.RemeshLayerStart *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerStart.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.EnergyCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.JacobianRatioValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JacobianRatioValue.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.SkewnessValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SkewnessValue.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthX.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthY.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthZ.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.HexDomEndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomEndTime.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.HexDomStartTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomStartTime.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.MaximumCornerAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumCornerAngle.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.EndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndTime.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.StartTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartTime.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.Criterion *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityCriterionType.md#NonlinearAdaptivityCriterionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.HexDomCheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAt.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.Option *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityOptionType.md#NonlinearAdaptivityOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Option.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.CheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAt.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GeometryBasedAdaptivity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### GeometryBasedAdaptivity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GeometryBasedAdaptivity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
