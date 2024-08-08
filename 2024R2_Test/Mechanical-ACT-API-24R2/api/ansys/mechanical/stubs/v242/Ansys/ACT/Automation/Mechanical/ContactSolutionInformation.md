# `ContactSolutionInformation`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ContactSolutionInformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactSolutionInformation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ContactSolutionInformation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactSolutionInformation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactSolutionInformation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactSolutionInformation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactSolutionInformation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactSolutionInformation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactSolutionInformation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactSolutionInformation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactSolutionInformation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactSolutionInformation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactSolutionInformation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactSolutionInformation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactSolutionInformation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                         | Gets the internal object. For advanced usage only.            |
| [`UpdateInterval`](#ContactSolutionInformation.UpdateInterval)                   | Gets or sets the UpdateInterval.                              |
| [`DataModelObjectCategory`](#ContactSolutionInformation.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](#ContactSolutionInformation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ContactSolutionInformation.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](#ContactSolutionInformation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                         | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactSolutionInformation.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactSolutionInformation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactSolutionInformation.InternalObject"></a>

### *property* ContactSolutionInformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactInfoToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.UpdateInterval"></a>

### *property* ContactSolutionInformation.UpdateInterval *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateInterval.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.DataModelObjectCategory"></a>

### *property* ContactSolutionInformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Children"></a>

### *property* ContactSolutionInformation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Comments"></a>

### *property* ContactSolutionInformation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Images"></a>

### *property* ContactSolutionInformation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactSolutionInformation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Properties"></a>

### *property* ContactSolutionInformation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.VisibleProperties"></a>

### *property* ContactSolutionInformation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactSolutionInformation.Delete"></a>

### ContactSolutionInformation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetChildren"></a>

### ContactSolutionInformation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactSolutionInformation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.AddComment"></a>

### ContactSolutionInformation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.AddImage"></a>

### ContactSolutionInformation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Activate"></a>

### ContactSolutionInformation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.CopyTo"></a>

### ContactSolutionInformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Duplicate"></a>

### ContactSolutionInformation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GroupAllSimilarChildren"></a>

### ContactSolutionInformation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GroupSimilarObjects"></a>

### ContactSolutionInformation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.PropertyByName"></a>

### ContactSolutionInformation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.PropertyByAPIName"></a>

### ContactSolutionInformation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.CreateParameter"></a>

### ContactSolutionInformation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetParameter"></a>

### ContactSolutionInformation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.RemoveParameter"></a>

### ContactSolutionInformation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

