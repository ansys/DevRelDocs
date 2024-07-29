# `Inductance`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.Inductance

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Inductance.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#Inductance.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Inductance.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Inductance.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Inductance.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Inductance.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Inductance.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Inductance.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Inductance.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Inductance.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Inductance.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Inductance.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Inductance.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Inductance.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                         | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#Inductance.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Multiplier`](#Inductance.Multiplier)                           | Gets or sets the Multiplier.                                  |
| [`Children`](#Inductance.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Inductance.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](#Inductance.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                         | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Inductance.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Inductance.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Inductance.InternalObject"></a>

### *property* Inductance.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.DataModelObjectCategory"></a>

### *property* Inductance.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Multiplier"></a>

### *property* Inductance.Multiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Children"></a>

### *property* Inductance.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Comments"></a>

### *property* Inductance.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Images"></a>

### *property* Inductance.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Inductance.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Properties"></a>

### *property* Inductance.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.VisibleProperties"></a>

### *property* Inductance.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Inductance.Delete"></a>

### Inductance.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetChildren"></a>

### Inductance.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Inductance.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.AddComment"></a>

### Inductance.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.AddImage"></a>

### Inductance.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Activate"></a>

### Inductance.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.CopyTo"></a>

### Inductance.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Duplicate"></a>

### Inductance.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GroupAllSimilarChildren"></a>

### Inductance.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GroupSimilarObjects"></a>

### Inductance.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.PropertyByName"></a>

### Inductance.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.PropertyByAPIName"></a>

### Inductance.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.CreateParameter"></a>

### Inductance.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetParameter"></a>

### Inductance.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.RemoveParameter"></a>

### Inductance.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

