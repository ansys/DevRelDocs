# `ChannelCrossSection`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ChannelCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ChannelCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ChannelCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ChannelCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ChannelCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ChannelCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ChannelCrossSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ChannelCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ChannelCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ChannelCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ChannelCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ChannelCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ChannelCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ChannelCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ChannelCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ChannelCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Area`](#ChannelCrossSection.Area)                                       | Gets the Area.                                                |
| [`IYY`](#ChannelCrossSection.IYY)                                         | Gets the IYY.                                                 |
| [`IZZ`](#ChannelCrossSection.IZZ)                                         | Gets the IZZ.                                                 |
| [`Thick1`](#ChannelCrossSection.Thick1)                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#ChannelCrossSection.Thick2)                                   | Gets or sets the Thick2.                                      |
| [`Thick3`](#ChannelCrossSection.Thick3)                                   | Gets or sets the Thick3.                                      |
| [`Width1`](#ChannelCrossSection.Width1)                                   | Gets or sets the Width1.                                      |
| [`Width2`](#ChannelCrossSection.Width2)                                   | Gets or sets the Width2.                                      |
| [`Width3`](#ChannelCrossSection.Width3)                                   | Gets or sets the Width3.                                      |
| [`DataModelObjectCategory`](#ChannelCrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ChannelCrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ChannelCrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ChannelCrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ChannelCrossSection.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ChannelCrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ChannelCrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ChannelCrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ChannelCrossSection.InternalObject"></a>

### *property* ChannelCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Area"></a>

### *property* ChannelCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.IYY"></a>

### *property* ChannelCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.IZZ"></a>

### *property* ChannelCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Thick1"></a>

### *property* ChannelCrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Thick2"></a>

### *property* ChannelCrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Thick3"></a>

### *property* ChannelCrossSection.Thick3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Width1"></a>

### *property* ChannelCrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Width2"></a>

### *property* ChannelCrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Width3"></a>

### *property* ChannelCrossSection.Width3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.DataModelObjectCategory"></a>

### *property* ChannelCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Children"></a>

### *property* ChannelCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Comments"></a>

### *property* ChannelCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Figures"></a>

### *property* ChannelCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Images"></a>

### *property* ChannelCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.ReadOnly"></a>

### *property* ChannelCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ChannelCrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Properties"></a>

### *property* ChannelCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.VisibleProperties"></a>

### *property* ChannelCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ChannelCrossSection.Delete"></a>

### ChannelCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetChildren"></a>

### ChannelCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ChannelCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AddComment"></a>

### ChannelCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AddFigure"></a>

### ChannelCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AddImage"></a>

### ChannelCrossSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Activate"></a>

### ChannelCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.CopyTo"></a>

### ChannelCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Duplicate"></a>

### ChannelCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GroupAllSimilarChildren"></a>

### ChannelCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GroupSimilarObjects"></a>

### ChannelCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.PropertyByName"></a>

### ChannelCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.PropertyByAPIName"></a>

### ChannelCrossSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.CreateParameter"></a>

### ChannelCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetParameter"></a>

### ChannelCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.RemoveParameter"></a>

### ChannelCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

