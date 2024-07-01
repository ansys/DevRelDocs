<!-- vale off -->

<a id="plasticheating"></a>

# `PlasticHeating`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PlasticHeating"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PlasticHeating

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PlasticHeating.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#PlasticHeating.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PlasticHeating.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#PlasticHeating.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PlasticHeating.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PlasticHeating.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PlasticHeating.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PlasticHeating.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PlasticHeating.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PlasticHeating.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PlasticHeating.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PlasticHeating.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PlasticHeating.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PlasticHeating.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`PlasticWorkFraction`](#PlasticHeating.PlasticWorkFraction)         | Gets or sets the PlasticWorkFraction.                         |
| [`DataModelObjectCategory`](#PlasticHeating.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#PlasticHeating.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Location`](#PlasticHeating.Location)                               | Gets or sets the Location.                                    |
| [`Children`](#PlasticHeating.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PlasticHeating.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](#PlasticHeating.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PlasticHeating.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PlasticHeating.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PlasticHeating.InternalObject"></a>

### *property* PlasticHeating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PlasticWorkFraction"></a>

### *property* PlasticHeating.PlasticWorkFraction *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PlasticWorkFraction.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.DataModelObjectCategory"></a>

### *property* PlasticHeating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Suppressed"></a>

### *property* PlasticHeating.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Location"></a>

### *property* PlasticHeating.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Children"></a>

### *property* PlasticHeating.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Comments"></a>

### *property* PlasticHeating.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Images"></a>

### *property* PlasticHeating.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PlasticHeating.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Properties"></a>

### *property* PlasticHeating.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.VisibleProperties"></a>

### *property* PlasticHeating.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PlasticHeating.Delete"></a>

### PlasticHeating.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetChildren"></a>

### PlasticHeating.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PlasticHeating.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.AddComment"></a>

### PlasticHeating.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.AddImage"></a>

### PlasticHeating.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Activate"></a>

### PlasticHeating.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.CopyTo"></a>

### PlasticHeating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Duplicate"></a>

### PlasticHeating.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GroupAllSimilarChildren"></a>

### PlasticHeating.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GroupSimilarObjects"></a>

### PlasticHeating.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PropertyByName"></a>

### PlasticHeating.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PropertyByAPIName"></a>

### PlasticHeating.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.CreateParameter"></a>

### PlasticHeating.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetParameter"></a>

### PlasticHeating.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.RemoveParameter"></a>

### PlasticHeating.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
