# `Chart`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Chart"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Chart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Chart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Chart.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Chart.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Chart.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Chart.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Chart.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Chart.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Chart.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Chart.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Chart.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Chart.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Chart.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Chart.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Chart.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Chart.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`Caption`](#Chart.Caption)                                 | Gets or sets the Caption.                                     |
| [`Children`](#Chart.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Chart.Comments)                               | Gets the list of associated comments.                         |
| [`Content`](#Chart.Content)                                 | Gets or sets the Content.                                     |
| [`DataModelObjectCategory`](#Chart.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Gridlines`](#Chart.Gridlines)                             | Gets or sets the Gridlines.                                   |
| [`Images`](#Chart.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Chart.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`ModalDisplayType`](#Chart.ModalDisplayType)               | Gets or sets the ModalDisplayType.                            |
| [`OutlineSelection`](#Chart.OutlineSelection)               | Gets or sets the OutlineSelection.                            |
| [`PlotStyle`](#Chart.PlotStyle)                             | Gets or sets the PlotStyle.                                   |
| [`Properties`](#Chart.Properties)                           | Gets the list of properties for this object.                  |
| [`Scale`](#Chart.Scale)                                     | Gets or sets the Scale.                                       |
| [`VisibleProperties`](#Chart.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XAxis`](#Chart.XAxis)                                     | Use to control the X Axis property of the chart.              |
| [`XAxisLabel`](#Chart.XAxisLabel)                           | Gets or sets the XAxisLabel.                                  |
| [`YAxisLabel`](#Chart.YAxisLabel)                           | Gets or sets the YAxisLabel.                                  |

<a id="property-detail"></a>

## Property detail

<a id="Chart.Caption"></a>

### *property* Chart.Caption *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Caption.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Children"></a>

### *property* Chart.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Comments"></a>

### *property* Chart.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Content"></a>

### *property* Chart.Content *: [Ansys.Mechanical.DataModel.Enums.ChartReportType](../../../Mechanical/DataModel/Enums/ChartReportType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartReportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Content.

<!-- !! processed by numpydoc !! -->

<a id="Chart.DataModelObjectCategory"></a>

### *property* Chart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Gridlines"></a>

### *property* Chart.Gridlines *: [Ansys.Mechanical.DataModel.Enums.ChartGridlines](../../../Mechanical/DataModel/Enums/ChartGridlines.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartGridlines) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Gridlines.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Images"></a>

### *property* Chart.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Chart.InternalObject"></a>

### *property* Chart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Chart.ModalDisplayType"></a>

### *property* Chart.ModalDisplayType *: [Ansys.Mechanical.DataModel.Enums.ChartModalType](../../../Mechanical/DataModel/Enums/ChartModalType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartModalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalDisplayType.

<!-- !! processed by numpydoc !! -->

<a id="Chart.OutlineSelection"></a>

### *property* Chart.OutlineSelection *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

<a id="Chart.PlotStyle"></a>

### *property* Chart.PlotStyle *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PlotStyle.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Properties"></a>

### *property* Chart.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Scale"></a>

### *property* Chart.Scale *: [Ansys.Mechanical.DataModel.Enums.ChartScale](../../../Mechanical/DataModel/Enums/ChartScale.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartScale) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scale.

<!-- !! processed by numpydoc !! -->

<a id="Chart.VisibleProperties"></a>

### *property* Chart.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Chart.XAxis"></a>

### *property* Chart.XAxis *: [Ansys.ACT.Automation.Mechanical.ChartXAxis](ChartXAxis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ChartXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Use to control the X Axis property of the chart.

<!-- !! processed by numpydoc !! -->

<a id="Chart.XAxisLabel"></a>

### *property* Chart.XAxisLabel *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisLabel.

<!-- !! processed by numpydoc !! -->

<a id="Chart.YAxisLabel"></a>

### *property* Chart.YAxisLabel *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisLabel.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Chart.Activate"></a>

### Chart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Chart.AddComment"></a>

### Chart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Chart.AddImage"></a>

### Chart.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Chart.CopyTo"></a>

### Chart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Chart.CreateParameter"></a>

### Chart.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Delete"></a>

### Chart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Duplicate"></a>

### Chart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetChildren"></a>

### Chart.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetParameter"></a>

### Chart.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GroupAllSimilarChildren"></a>

### Chart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GroupSimilarObjects"></a>

### Chart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Chart.PropertyByAPIName"></a>

### Chart.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Chart.PropertyByName"></a>

### Chart.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Chart.RemoveParameter"></a>

### Chart.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

