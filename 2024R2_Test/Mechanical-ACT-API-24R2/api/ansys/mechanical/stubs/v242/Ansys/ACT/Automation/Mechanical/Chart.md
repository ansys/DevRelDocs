# `Chart`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Chart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Chart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `OutlineSelection`        | Gets or sets the OutlineSelection.                            |
| `XAxis`                   | Use to control the X Axis property of the chart.              |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Caption`                 | Gets or sets the Caption.                                     |
| `XAxisLabel`              | Gets or sets the XAxisLabel.                                  |
| `YAxisLabel`              | Gets or sets the YAxisLabel.                                  |
| `Gridlines`               | Gets or sets the Gridlines.                                   |
| `ModalDisplayType`        | Gets or sets the ModalDisplayType.                            |
| `PlotStyle`               | Gets or sets the PlotStyle.                                   |
| `Content`                 | Gets or sets the Content.                                     |
| `Scale`                   | Gets or sets the Scale.                                       |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Chart.OutlineSelection *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

### *property* Chart.XAxis *: [Ansys.ACT.Automation.Mechanical.ChartXAxis](../../../../../v241/Ansys/ACT/Automation/Mechanical/ChartXAxis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ChartXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Chart.Gridlines *: [Ansys.Mechanical.DataModel.Enums.ChartGridlines](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartGridlines.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartGridlines) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Gridlines.

<!-- !! processed by numpydoc !! -->

### *property* Chart.ModalDisplayType *: [Ansys.Mechanical.DataModel.Enums.ChartModalType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartModalType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartModalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalDisplayType.

<!-- !! processed by numpydoc !! -->

### *property* Chart.PlotStyle *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PlotStyle.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Content *: [Ansys.Mechanical.DataModel.Enums.ChartReportType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartReportType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartReportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Content.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Scale *: [Ansys.Mechanical.DataModel.Enums.ChartScale](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartScale.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartScale) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scale.

<!-- !! processed by numpydoc !! -->

### *property* Chart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Chart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### Chart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Chart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Chart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Chart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Chart.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

