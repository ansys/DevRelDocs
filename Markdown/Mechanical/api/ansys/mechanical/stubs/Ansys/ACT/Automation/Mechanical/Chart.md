# Chart

### *class* Chart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Chart.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#Chart.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Chart.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Chart.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Chart.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Chart.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Chart.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Chart.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Chart.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Chart.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Chart.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Chart.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Chart.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Chart.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`OutlineSelection`](#Chart.OutlineSelection)                                                                       | Gets or sets the OutlineSelection.                            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`XAxis`](#Chart.XAxis)                                                                                             | Use to control the X Axis property of the chart.              |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Caption`](#Chart.Caption)                                                                                         | Gets or sets the Caption.                                     |
| [`XAxisLabel`](#Chart.XAxisLabel)                                                                                   | Gets or sets the XAxisLabel.                                  |
| [`YAxisLabel`](#Chart.YAxisLabel)                                                                                   | Gets or sets the YAxisLabel.                                  |
| [`Gridlines`](#Chart.Gridlines)                                                                                     | Gets or sets the Gridlines.                                   |
| [`ModalDisplayType`](#Chart.ModalDisplayType)                                                                       | Gets or sets the ModalDisplayType.                            |
| [`PlotStyle`](#Chart.PlotStyle)                                                                                     | Gets or sets the PlotStyle.                                   |
| [`Content`](#Chart.Content)                                                                                         | Gets or sets the Content.                                     |
| [`Scale`](#Chart.Scale)                                                                                             | Gets or sets the Scale.                                       |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Chart.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#Chart.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Images`](#Chart.Images)                                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Chart.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Chart.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Chart
```

## Property detail

### *property* Chart.OutlineSelection *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

### *property* Chart.XAxis *: [Ansys.ACT.Automation.Mechanical.ChartXAxis](ChartXAxis.md#ChartXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Use to control the X Axis property of the chart.

<!-- !! processed by numpydoc !! -->

### *property* Chart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Caption *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Caption.

<!-- !! processed by numpydoc !! -->

### *property* Chart.XAxisLabel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisLabel.

<!-- !! processed by numpydoc !! -->

### *property* Chart.YAxisLabel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisLabel.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Gridlines *: [Ansys.Mechanical.DataModel.Enums.ChartGridlines](../../../Mechanical/DataModel/Enums/ChartGridlines.md#ChartGridlines) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Gridlines.

<!-- !! processed by numpydoc !! -->

### *property* Chart.ModalDisplayType *: [Ansys.Mechanical.DataModel.Enums.ChartModalType](../../../Mechanical/DataModel/Enums/ChartModalType.md#ChartModalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalDisplayType.

<!-- !! processed by numpydoc !! -->

### *property* Chart.PlotStyle *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PlotStyle.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Content *: [Ansys.Mechanical.DataModel.Enums.ChartReportType](../../../Mechanical/DataModel/Enums/ChartReportType.md#ChartReportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Content.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Scale *: [Ansys.Mechanical.DataModel.Enums.ChartScale](../../../Mechanical/DataModel/Enums/ChartScale.md#ChartScale) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scale.

<!-- !! processed by numpydoc !! -->

### *property* Chart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Chart.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Chart.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Chart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Chart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Chart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Chart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Chart.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Chart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Chart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Chart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Chart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Chart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Chart.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Chart.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Chart.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Chart.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Chart.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
