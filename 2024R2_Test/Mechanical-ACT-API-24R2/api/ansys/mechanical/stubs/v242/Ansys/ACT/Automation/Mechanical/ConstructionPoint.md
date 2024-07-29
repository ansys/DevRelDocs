# `ConstructionPoint`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ConstructionPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ConstructionPoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetLocation`](#id1)                                                   | Sets the point location.                                                          |
| [`Delete`](#ConstructionPoint.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id2)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id2)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ConstructionPoint.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ConstructionPoint.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ConstructionPoint.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ConstructionPoint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ConstructionPoint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ConstructionPoint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ConstructionPoint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ConstructionPoint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ConstructionPoint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ConstructionPoint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ConstructionPoint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ConstructionPoint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ConstructionPoint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`LocationX`](#ConstructionPoint.LocationX)                             | Gets or sets the LocationX.                                   |
| [`LocationY`](#ConstructionPoint.LocationY)                             | Gets or sets the LocationY.                                   |
| [`LocationZ`](#ConstructionPoint.LocationZ)                             | Gets or sets the LocationZ.                                   |
| [`DataModelObjectCategory`](#ConstructionPoint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ConstructionPoint.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ConstructionPoint.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ConstructionPoint.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ConstructionPoint.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ConstructionPoint.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ConstructionPoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

### Attributes

| Name |
| ------------------------- |
| [`SetLocation`](#id1) |

<a id="property-detail"></a>

## Property detail

<a id="ConstructionPoint.InternalObject"></a>

### *property* ConstructionPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstructionPointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationX"></a>

### *property* ConstructionPoint.LocationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationX.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationY"></a>

### *property* ConstructionPoint.LocationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationY.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationZ"></a>

### *property* ConstructionPoint.LocationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationZ.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.DataModelObjectCategory"></a>

### *property* ConstructionPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Children"></a>

### *property* ConstructionPoint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Comments"></a>

### *property* ConstructionPoint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Figures"></a>

### *property* ConstructionPoint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Images"></a>

### *property* ConstructionPoint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ConstructionPoint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Properties"></a>

### *property* ConstructionPoint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.VisibleProperties"></a>

### *property* ConstructionPoint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="attribute-detail"></a>

## Attribute detail

<a id="ConstructionPoint.SetLocation"></a>

### ConstructionPoint.SetLocation

<a id="method-detail"></a>

## Method detail

<a id="id1"></a>

### ConstructionPoint.SetLocation(newvalue: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None))

Sets the point location.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Delete"></a>

### ConstructionPoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetChildren"></a>

### ConstructionPoint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### ConstructionPoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddComment"></a>

### ConstructionPoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddFigure"></a>

### ConstructionPoint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddImage"></a>

### ConstructionPoint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Activate"></a>

### ConstructionPoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.CopyTo"></a>

### ConstructionPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Duplicate"></a>

### ConstructionPoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GroupAllSimilarChildren"></a>

### ConstructionPoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GroupSimilarObjects"></a>

### ConstructionPoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.PropertyByName"></a>

### ConstructionPoint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.PropertyByAPIName"></a>

### ConstructionPoint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.CreateParameter"></a>

### ConstructionPoint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetParameter"></a>

### ConstructionPoint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.RemoveParameter"></a>

### ConstructionPoint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

