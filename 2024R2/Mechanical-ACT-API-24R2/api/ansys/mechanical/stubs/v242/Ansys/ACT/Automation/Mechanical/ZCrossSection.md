# `ZCrossSection`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ZCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ZCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ZCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ZCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ZCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ZCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ZCrossSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ZCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ZCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ZCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ZCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ZCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ZCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ZCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ZCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ZCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`Area`](#ZCrossSection.Area)                                       | Gets the Area.                                                |
| [`IYY`](#ZCrossSection.IYY)                                         | Gets the IYY.                                                 |
| [`IZZ`](#ZCrossSection.IZZ)                                         | Gets the IZZ.                                                 |
| [`Thick1`](#ZCrossSection.Thick1)                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#ZCrossSection.Thick2)                                   | Gets or sets the Thick2.                                      |
| [`Thick3`](#ZCrossSection.Thick3)                                   | Gets or sets the Thick3.                                      |
| [`Width1`](#ZCrossSection.Width1)                                   | Gets or sets the Width1.                                      |
| [`Width2`](#ZCrossSection.Width2)                                   | Gets or sets the Width2.                                      |
| [`Width3`](#ZCrossSection.Width3)                                   | Gets or sets the Width3.                                      |
| [`DataModelObjectCategory`](#ZCrossSection.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](#ZCrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ZCrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ZCrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ZCrossSection.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ZCrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ZCrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ZCrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ZCrossSection.InternalObject"></a>

### *property* ZCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Area"></a>

### *property* ZCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.IYY"></a>

### *property* ZCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.IZZ"></a>

### *property* ZCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Thick1"></a>

### *property* ZCrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Thick2"></a>

### *property* ZCrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Thick3"></a>

### *property* ZCrossSection.Thick3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Width1"></a>

### *property* ZCrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Width2"></a>

### *property* ZCrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Width3"></a>

### *property* ZCrossSection.Width3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.DataModelObjectCategory"></a>

### *property* ZCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Children"></a>

### *property* ZCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Comments"></a>

### *property* ZCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Figures"></a>

### *property* ZCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Images"></a>

### *property* ZCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.ReadOnly"></a>

### *property* ZCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ZCrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Properties"></a>

### *property* ZCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.VisibleProperties"></a>

### *property* ZCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ZCrossSection.Delete"></a>

### ZCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.GetChildren"></a>

### ZCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ZCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.AddComment"></a>

### ZCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.AddFigure"></a>

### ZCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.AddImage"></a>

### ZCrossSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Activate"></a>

### ZCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.CopyTo"></a>

### ZCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.Duplicate"></a>

### ZCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.GroupAllSimilarChildren"></a>

### ZCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.GroupSimilarObjects"></a>

### ZCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.PropertyByName"></a>

### ZCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.PropertyByAPIName"></a>

### ZCrossSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.CreateParameter"></a>

### ZCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.GetParameter"></a>

### ZCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ZCrossSection.RemoveParameter"></a>

### ZCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

