# `Chart`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Chart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Chart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`OutlineSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.OutlineSelection)               | Gets or sets the OutlineSelection.                            |
| [`XAxis`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.XAxis)                                     | Use to control the X Axis property of the chart.              |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#id0)                                    | Gets the internal object. For advanced usage only.            |
| [`Caption`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Caption)                                 | Gets or sets the Caption.                                     |
| [`XAxisLabel`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.XAxisLabel)                           | Gets or sets the XAxisLabel.                                  |
| [`YAxisLabel`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.YAxisLabel)                           | Gets or sets the YAxisLabel.                                  |
| [`Gridlines`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Gridlines)                             | Gets or sets the Gridlines.                                   |
| [`ModalDisplayType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.ModalDisplayType)               | Gets or sets the ModalDisplayType.                            |
| [`PlotStyle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.PlotStyle)                             | Gets or sets the PlotStyle.                                   |
| [`Content`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Content)                                 | Gets or sets the Content.                                     |
| [`Scale`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Scale)                                     | Gets or sets the Scale.                                       |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#id0)                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Chart.md#Chart.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Chart.OutlineSelection"></a>

### *property* Chart.OutlineSelection *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

<a id="Chart.XAxis"></a>

### *property* Chart.XAxis *: [Ansys.ACT.Automation.Mechanical.ChartXAxis](ChartXAxis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ChartXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Use to control the X Axis property of the chart.

<!-- !! processed by numpydoc !! -->

<a id="Chart.InternalObject"></a>

### *property* Chart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Caption"></a>

### *property* Chart.Caption *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Caption.

<!-- !! processed by numpydoc !! -->

<a id="Chart.XAxisLabel"></a>

### *property* Chart.XAxisLabel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisLabel.

<!-- !! processed by numpydoc !! -->

<a id="Chart.YAxisLabel"></a>

### *property* Chart.YAxisLabel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisLabel.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Gridlines"></a>

### *property* Chart.Gridlines *: [Ansys.Mechanical.DataModel.Enums.ChartGridlines](../../../Mechanical/DataModel/Enums/ChartGridlines.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartGridlines) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Gridlines.

<!-- !! processed by numpydoc !! -->

<a id="Chart.ModalDisplayType"></a>

### *property* Chart.ModalDisplayType *: [Ansys.Mechanical.DataModel.Enums.ChartModalType](../../../Mechanical/DataModel/Enums/ChartModalType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartModalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalDisplayType.

<!-- !! processed by numpydoc !! -->

<a id="Chart.PlotStyle"></a>

### *property* Chart.PlotStyle *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PlotStyle.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Content"></a>

### *property* Chart.Content *: [Ansys.Mechanical.DataModel.Enums.ChartReportType](../../../Mechanical/DataModel/Enums/ChartReportType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartReportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Content.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Scale"></a>

### *property* Chart.Scale *: [Ansys.Mechanical.DataModel.Enums.ChartScale](../../../Mechanical/DataModel/Enums/ChartScale.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartScale) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scale.

<!-- !! processed by numpydoc !! -->

<a id="Chart.DataModelObjectCategory"></a>

### *property* Chart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Children"></a>

### *property* Chart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Comments"></a>

### *property* Chart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Images"></a>

### *property* Chart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Chart.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Properties"></a>

### *property* Chart.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Chart.VisibleProperties"></a>

### *property* Chart.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Chart.Delete"></a>

### Chart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetChildren"></a>

### Chart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Chart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Chart.AddComment"></a>

### Chart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Chart.AddImage"></a>

### Chart.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Activate"></a>

### Chart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Chart.CopyTo"></a>

### Chart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Duplicate"></a>

### Chart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GroupAllSimilarChildren"></a>

### Chart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GroupSimilarObjects"></a>

### Chart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Chart.PropertyByName"></a>

### Chart.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Chart.PropertyByAPIName"></a>

### Chart.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Chart.CreateParameter"></a>

### Chart.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetParameter"></a>

### Chart.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.RemoveParameter"></a>

### Chart.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

