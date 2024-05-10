# CylindricalSupport

<a id="CylindricalSupport"></a>

### *class* CylindricalSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CylindricalSupport.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#CylindricalSupport.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#CylindricalSupport.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CylindricalSupport.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#CylindricalSupport.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#CylindricalSupport.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#CylindricalSupport.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#CylindricalSupport.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CylindricalSupport.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CylindricalSupport.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CylindricalSupport.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CylindricalSupport.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CylindricalSupport.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#CylindricalSupport.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CylindricalSupport.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CylindricalSupport.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Axial`](#CylindricalSupport.Axial)                                                                                   | Gets or sets the Axial.                                       |
| [`Radial`](#CylindricalSupport.Radial)                                                                                 | Gets or sets the Radial.                                      |
| [`Tangential`](#CylindricalSupport.Tangential)                                                                         | Gets or sets the Tangential.                                  |
| [`Location`](#CylindricalSupport.Location)                                                                             | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#CylindricalSupport.Suppressed)                                                                         | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#CylindricalSupport.SharedRefBody)                                                                   | Gets or sets the SharedRefBody.                               |
| [`Children`](#CylindricalSupport.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#CylindricalSupport.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#CylindricalSupport.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#CylindricalSupport.Images)                                                                                 | Gets the list of associated images.                           |
| [`ReadOnly`](#CylindricalSupport.ReadOnly)                                                                             | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CylindricalSupport.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CylindricalSupport.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import CylindricalSupport
```

<a id="property-detail"></a>

## Property detail

<a id="CylindricalSupport.InternalObject"></a>

### *property* CylindricalSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Axial"></a>

### *property* CylindricalSupport.Axial *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](./../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axial.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Radial"></a>

### *property* CylindricalSupport.Radial *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](./../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radial.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Tangential"></a>

### *property* CylindricalSupport.Tangential *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](./../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tangential.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Location"></a>

### *property* CylindricalSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.DataModelObjectCategory"></a>

### *property* CylindricalSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Suppressed"></a>

### *property* CylindricalSupport.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.SharedRefBody"></a>

### *property* CylindricalSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](./../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Children"></a>

### *property* CylindricalSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Comments"></a>

### *property* CylindricalSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Figures"></a>

### *property* CylindricalSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Images"></a>

### *property* CylindricalSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.ReadOnly"></a>

### *property* CylindricalSupport.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CylindricalSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Properties"></a>

### *property* CylindricalSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.VisibleProperties"></a>

### *property* CylindricalSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CylindricalSupport.PromoteToNamedSelection"></a>

### CylindricalSupport.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Delete"></a>

### CylindricalSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetChildren"></a>

### CylindricalSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CylindricalSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.AddComment"></a>

### CylindricalSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.AddFigure"></a>

### CylindricalSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.AddImage"></a>

### CylindricalSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Activate"></a>

### CylindricalSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.CopyTo"></a>

### CylindricalSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Duplicate"></a>

### CylindricalSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GroupAllSimilarChildren"></a>

### CylindricalSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GroupSimilarObjects"></a>

### CylindricalSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.PropertyByName"></a>

### CylindricalSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.PropertyByAPIName"></a>

### CylindricalSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.CreateParameter"></a>

### CylindricalSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetParameter"></a>

### CylindricalSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.RemoveParameter"></a>

### CylindricalSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
