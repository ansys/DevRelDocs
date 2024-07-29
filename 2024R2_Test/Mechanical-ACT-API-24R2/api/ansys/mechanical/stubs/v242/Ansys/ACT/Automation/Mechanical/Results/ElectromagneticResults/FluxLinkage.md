# `FluxLinkage`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.FluxLinkage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FluxLinkage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#FluxLinkage.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FluxLinkage.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FluxLinkage.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FluxLinkage.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FluxLinkage.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FluxLinkage.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FluxLinkage.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluxLinkage.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FluxLinkage.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FluxLinkage.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FluxLinkage.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FluxLinkage.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FluxLinkage.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#FluxLinkage.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Multiplier`](#FluxLinkage.Multiplier)                           | Gets or sets the Multiplier.                                  |
| [`Children`](#FluxLinkage.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FluxLinkage.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](#FluxLinkage.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FluxLinkage.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FluxLinkage.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FluxLinkage.InternalObject"></a>

### *property* FluxLinkage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.DataModelObjectCategory"></a>

### *property* FluxLinkage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Multiplier"></a>

### *property* FluxLinkage.Multiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Children"></a>

### *property* FluxLinkage.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Comments"></a>

### *property* FluxLinkage.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Images"></a>

### *property* FluxLinkage.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FluxLinkage.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Properties"></a>

### *property* FluxLinkage.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.VisibleProperties"></a>

### *property* FluxLinkage.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluxLinkage.Delete"></a>

### FluxLinkage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetChildren"></a>

### FluxLinkage.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FluxLinkage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.AddComment"></a>

### FluxLinkage.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.AddImage"></a>

### FluxLinkage.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Activate"></a>

### FluxLinkage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.CopyTo"></a>

### FluxLinkage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Duplicate"></a>

### FluxLinkage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GroupAllSimilarChildren"></a>

### FluxLinkage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GroupSimilarObjects"></a>

### FluxLinkage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.PropertyByName"></a>

### FluxLinkage.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.PropertyByAPIName"></a>

### FluxLinkage.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.CreateParameter"></a>

### FluxLinkage.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetParameter"></a>

### FluxLinkage.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.RemoveParameter"></a>

### FluxLinkage.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

