# `Material`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Material

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Material.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`CreateMaterialAssignment`](#Material.CreateMaterialAssignment)   | Run the CreateMaterialAssignment action.                                          |
| [`AddMaterialAssignment`](#Material.AddMaterialAssignment)         | Run the AddMaterialAssignment action.                                             |
| [`GetAsDictionary`](#Material.GetAsDictionary)                     | Returns material as a python dictionary                                           |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Material.AddComment)                               | Creates a new child Comment.                                                      |
| [`AddFigure`](#Material.AddFigure)                                 | Creates a new child Figure.                                                       |
| [`AddImage`](#Material.AddImage)                                   | Creates a new child Image.                                                        |
| [`Activate`](#Material.Activate)                                   | Activate the current object.                                                      |
| [`CopyTo`](#Material.CopyTo)                                       | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Material.Duplicate)                                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Material.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Material.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Material.PropertyByName)                       | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Material.PropertyByAPIName)                 | Get a property by its API name.                                                   |
| [`CreateParameter`](#Material.CreateParameter)                     | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Material.GetParameter)                           | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Material.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`AssignedBodies`](#Material.AssignedBodies)                   | Gets the AssignedBodies.                                      |
| [`DataModelObjectCategory`](#Material.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Material.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Material.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#Material.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Material.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Material.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Material.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Material.InternalObject"></a>

### *property* Material.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Material.AssignedBodies"></a>

### *property* Material.AssignedBodies *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AssignedBodies.

<!-- !! processed by numpydoc !! -->

<a id="Material.DataModelObjectCategory"></a>

### *property* Material.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Material.Children"></a>

### *property* Material.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Material.Comments"></a>

### *property* Material.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Material.Figures"></a>

### *property* Material.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Material.Images"></a>

### *property* Material.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Material.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Material.Properties"></a>

### *property* Material.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Material.VisibleProperties"></a>

### *property* Material.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Material.CreateMaterialAssignment"></a>

### Material.CreateMaterialAssignment()

Run the CreateMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddMaterialAssignment"></a>

### Material.AddMaterialAssignment()

Run the AddMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetAsDictionary"></a>

### Material.GetAsDictionary()

Returns material as a python dictionary

<!-- !! processed by numpydoc !! -->

<a id="Material.GetChildren"></a>

### Material.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Material.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddComment"></a>

### Material.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddFigure"></a>

### Material.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddImage"></a>

### Material.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Material.Activate"></a>

### Material.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Material.CopyTo"></a>

### Material.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Material.Duplicate"></a>

### Material.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Material.GroupAllSimilarChildren"></a>

### Material.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Material.GroupSimilarObjects"></a>

### Material.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Material.PropertyByName"></a>

### Material.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Material.PropertyByAPIName"></a>

### Material.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Material.CreateParameter"></a>

### Material.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetParameter"></a>

### Material.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Material.RemoveParameter"></a>

### Material.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

