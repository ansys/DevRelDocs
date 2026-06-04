# `NodalOrientation`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalOrientation"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalOrientation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#NodalOrientation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalOrientation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#NodalOrientation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NodalOrientation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NodalOrientation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalOrientation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalOrientation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalOrientation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalOrientation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalOrientation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#NodalOrientation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NodalOrientation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalOrientation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#NodalOrientation.Location)                               | Gets the Location.                                            |
| [`InternalObject`](#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](#NodalOrientation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](#NodalOrientation.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#NodalOrientation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#NodalOrientation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#NodalOrientation.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](#NodalOrientation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodalOrientation.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodalOrientation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodalOrientation.Location"></a>

### *property* NodalOrientation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.InternalObject"></a>

### *property* NodalOrientation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNodalRotationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Suppressed"></a>

### *property* NodalOrientation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CoordinateSystem"></a>

### *property* NodalOrientation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.DataModelObjectCategory"></a>

### *property* NodalOrientation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Children"></a>

### *property* NodalOrientation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Comments"></a>

### *property* NodalOrientation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Images"></a>

### *property* NodalOrientation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodalOrientation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Properties"></a>

### *property* NodalOrientation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.VisibleProperties"></a>

### *property* NodalOrientation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalOrientation.Delete"></a>

### NodalOrientation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetChildren"></a>

### NodalOrientation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodalOrientation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.AddComment"></a>

### NodalOrientation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.AddImage"></a>

### NodalOrientation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Activate"></a>

### NodalOrientation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CopyTo"></a>

### NodalOrientation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Duplicate"></a>

### NodalOrientation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GroupAllSimilarChildren"></a>

### NodalOrientation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GroupSimilarObjects"></a>

### NodalOrientation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.PropertyByName"></a>

### NodalOrientation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.PropertyByAPIName"></a>

### NodalOrientation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CreateParameter"></a>

### NodalOrientation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetParameter"></a>

### NodalOrientation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.RemoveParameter"></a>

### NodalOrientation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

