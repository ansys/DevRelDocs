# `AnalysisPly`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AnalysisPly.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`IDInSource`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.IDInSource)                           | Gets the IDInSource.                                          |
| [`Material`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Material)                               | Gets the Material.                                            |
| [`NameInSource`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.NameInSource)                       | Gets the NameInSource.                                        |
| [`NumberOfElements`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.NumberOfElements)               | Gets the NumberOfElements.                                    |
| [`Angle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Angle)                                     | Gets or sets the Angle.                                       |
| [`Thickness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Thickness)                             | Gets the Thickness.                                           |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#AnalysisPly.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AnalysisPly.InternalObject"></a>

### *property* AnalysisPly.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisPlyAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.IDInSource"></a>

### *property* AnalysisPly.IDInSource *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IDInSource.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Material"></a>

### *property* AnalysisPly.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.NameInSource"></a>

### *property* AnalysisPly.NameInSource *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NameInSource.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.NumberOfElements"></a>

### *property* AnalysisPly.NumberOfElements *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfElements.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Angle"></a>

### *property* AnalysisPly.Angle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Angle.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Thickness"></a>

### *property* AnalysisPly.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Thickness.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.DataModelObjectCategory"></a>

### *property* AnalysisPly.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Children"></a>

### *property* AnalysisPly.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Comments"></a>

### *property* AnalysisPly.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Figures"></a>

### *property* AnalysisPly.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Images"></a>

### *property* AnalysisPly.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.ReadOnly"></a>

### *property* AnalysisPly.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AnalysisPly.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Properties"></a>

### *property* AnalysisPly.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.VisibleProperties"></a>

### *property* AnalysisPly.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AnalysisPly.GetChildren"></a>

### AnalysisPly.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AnalysisPly.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AddComment"></a>

### AnalysisPly.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AddFigure"></a>

### AnalysisPly.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AddImage"></a>

### AnalysisPly.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Activate"></a>

### AnalysisPly.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.CopyTo"></a>

### AnalysisPly.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Duplicate"></a>

### AnalysisPly.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GroupAllSimilarChildren"></a>

### AnalysisPly.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GroupSimilarObjects"></a>

### AnalysisPly.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.PropertyByName"></a>

### AnalysisPly.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.PropertyByAPIName"></a>

### AnalysisPly.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.CreateParameter"></a>

### AnalysisPly.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetParameter"></a>

### AnalysisPly.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.RemoveParameter"></a>

### AnalysisPly.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

