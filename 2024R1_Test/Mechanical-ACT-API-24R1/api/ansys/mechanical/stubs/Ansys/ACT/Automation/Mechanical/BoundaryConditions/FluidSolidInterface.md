# FluidSolidInterface

<a id="FluidSolidInterface"></a>

### *class* FluidSolidInterface

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluidSolidInterface.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#FluidSolidInterface.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#FluidSolidInterface.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FluidSolidInterface.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#FluidSolidInterface.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidSolidInterface.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#FluidSolidInterface.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#FluidSolidInterface.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FluidSolidInterface.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FluidSolidInterface.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidSolidInterface.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FluidSolidInterface.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FluidSolidInterface.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#FluidSolidInterface.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FluidSolidInterface.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FluidSolidInterface.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`InterfaceNumber`](#FluidSolidInterface.InterfaceNumber)                                                              | Gets or sets the InterfaceNumber.                             |
| [`ExportResults`](#FluidSolidInterface.ExportResults)                                                                  | Gets or sets the ExportResults.                               |
| [`Location`](#FluidSolidInterface.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#FluidSolidInterface.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#FluidSolidInterface.SharedRefBody)                                                                  | Gets or sets the SharedRefBody.                               |
| [`Children`](#FluidSolidInterface.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#FluidSolidInterface.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#FluidSolidInterface.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#FluidSolidInterface.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#FluidSolidInterface.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FluidSolidInterface.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FluidSolidInterface.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import FluidSolidInterface
```

<a id="property-detail"></a>

## Property detail

<a id="FluidSolidInterface.InternalObject"></a>

### *property* FluidSolidInterface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.InterfaceNumber"></a>

### *property* FluidSolidInterface.InterfaceNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ExportResults"></a>

### *property* FluidSolidInterface.ExportResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportResults.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Location"></a>

### *property* FluidSolidInterface.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.DataModelObjectCategory"></a>

### *property* FluidSolidInterface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Suppressed"></a>

### *property* FluidSolidInterface.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.SharedRefBody"></a>

### *property* FluidSolidInterface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Children"></a>

### *property* FluidSolidInterface.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Comments"></a>

### *property* FluidSolidInterface.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Figures"></a>

### *property* FluidSolidInterface.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Images"></a>

### *property* FluidSolidInterface.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ReadOnly"></a>

### *property* FluidSolidInterface.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FluidSolidInterface.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Properties"></a>

### *property* FluidSolidInterface.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.VisibleProperties"></a>

### *property* FluidSolidInterface.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidSolidInterface.PromoteToNamedSelection"></a>

### FluidSolidInterface.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Delete"></a>

### FluidSolidInterface.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetChildren"></a>

### FluidSolidInterface.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FluidSolidInterface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.AddComment"></a>

### FluidSolidInterface.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.AddFigure"></a>

### FluidSolidInterface.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.AddImage"></a>

### FluidSolidInterface.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Activate"></a>

### FluidSolidInterface.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.CopyTo"></a>

### FluidSolidInterface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Duplicate"></a>

### FluidSolidInterface.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GroupAllSimilarChildren"></a>

### FluidSolidInterface.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GroupSimilarObjects"></a>

### FluidSolidInterface.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.PropertyByName"></a>

### FluidSolidInterface.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.PropertyByAPIName"></a>

### FluidSolidInterface.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.CreateParameter"></a>

### FluidSolidInterface.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetParameter"></a>

### FluidSolidInterface.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.RemoveParameter"></a>

### FluidSolidInterface.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
