# FluidSolidInterface

### *class* FluidSolidInterface

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluidSolidInterface.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#FluidSolidInterface.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import FluidSolidInterface
```

## Property detail

### *property* FluidSolidInterface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.InterfaceNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceNumber.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.ExportResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportResults.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FluidSolidInterface.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FluidSolidInterface.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FluidSolidInterface.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
