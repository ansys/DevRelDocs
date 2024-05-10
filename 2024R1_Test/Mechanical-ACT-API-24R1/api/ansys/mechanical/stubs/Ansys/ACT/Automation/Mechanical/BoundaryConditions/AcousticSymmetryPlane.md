# AcousticSymmetryPlane

<a id="AcousticSymmetryPlane"></a>

### *class* AcousticSymmetryPlane

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticSymmetryPlane.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#AcousticSymmetryPlane.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AcousticSymmetryPlane.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticSymmetryPlane.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticSymmetryPlane.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticSymmetryPlane.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticSymmetryPlane.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticSymmetryPlane.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticSymmetryPlane.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticSymmetryPlane.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticSymmetryPlane.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticSymmetryPlane.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticSymmetryPlane.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticSymmetryPlane.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticSymmetryPlane.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticSymmetryPlane.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`CoordinateSystem`](./../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#AcousticSymmetryPlane.Location)                                                                          | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticSymmetryPlane.Suppressed)                                                                      | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticSymmetryPlane.SharedRefBody)                                                                | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticSymmetryPlane.Children)                                                                          | Gets the list of children.                                    |
| [`Comments`](#AcousticSymmetryPlane.Comments)                                                                          | Gets the list of associated comments.                         |
| [`Figures`](#AcousticSymmetryPlane.Figures)                                                                            | Gets the list of associated figures.                          |
| [`Images`](#AcousticSymmetryPlane.Images)                                                                              | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticSymmetryPlane.ReadOnly)                                                                          | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticSymmetryPlane.Properties)                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticSymmetryPlane.VisibleProperties)                                                        | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticSymmetryPlane
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticSymmetryPlane.InternalObject"></a>

### *property* AcousticSymmetryPlane.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CoordinateSystem"></a>

### *property* AcousticSymmetryPlane.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Location"></a>

### *property* AcousticSymmetryPlane.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.DataModelObjectCategory"></a>

### *property* AcousticSymmetryPlane.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Suppressed"></a>

### *property* AcousticSymmetryPlane.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.SharedRefBody"></a>

### *property* AcousticSymmetryPlane.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](./../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Children"></a>

### *property* AcousticSymmetryPlane.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Comments"></a>

### *property* AcousticSymmetryPlane.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Figures"></a>

### *property* AcousticSymmetryPlane.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Images"></a>

### *property* AcousticSymmetryPlane.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.ReadOnly"></a>

### *property* AcousticSymmetryPlane.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticSymmetryPlane.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Properties"></a>

### *property* AcousticSymmetryPlane.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.VisibleProperties"></a>

### *property* AcousticSymmetryPlane.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticSymmetryPlane.PromoteToNamedSelection"></a>

### AcousticSymmetryPlane.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Delete"></a>

### AcousticSymmetryPlane.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetChildren"></a>

### AcousticSymmetryPlane.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticSymmetryPlane.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.AddComment"></a>

### AcousticSymmetryPlane.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.AddFigure"></a>

### AcousticSymmetryPlane.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.AddImage"></a>

### AcousticSymmetryPlane.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Activate"></a>

### AcousticSymmetryPlane.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CopyTo"></a>

### AcousticSymmetryPlane.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Duplicate"></a>

### AcousticSymmetryPlane.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GroupAllSimilarChildren"></a>

### AcousticSymmetryPlane.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GroupSimilarObjects"></a>

### AcousticSymmetryPlane.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.PropertyByName"></a>

### AcousticSymmetryPlane.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.PropertyByAPIName"></a>

### AcousticSymmetryPlane.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CreateParameter"></a>

### AcousticSymmetryPlane.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetParameter"></a>

### AcousticSymmetryPlane.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.RemoveParameter"></a>

### AcousticSymmetryPlane.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
