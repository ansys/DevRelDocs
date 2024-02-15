# FrictionlessSupport

### *class* FrictionlessSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FrictionlessSupport.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#FrictionlessSupport.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#FrictionlessSupport.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FrictionlessSupport.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#FrictionlessSupport.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#FrictionlessSupport.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#FrictionlessSupport.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#FrictionlessSupport.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FrictionlessSupport.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FrictionlessSupport.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FrictionlessSupport.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FrictionlessSupport.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FrictionlessSupport.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#FrictionlessSupport.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FrictionlessSupport.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FrictionlessSupport.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#FrictionlessSupport.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#FrictionlessSupport.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#FrictionlessSupport.SharedRefBody)                                                                  | Gets or sets the SharedRefBody.                               |
| [`Children`](#FrictionlessSupport.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#FrictionlessSupport.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#FrictionlessSupport.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#FrictionlessSupport.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#FrictionlessSupport.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FrictionlessSupport.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FrictionlessSupport.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import FrictionlessSupport
```

## Property detail

### *property* FrictionlessSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FrictionlessSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FrictionlessSupport.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FrictionlessSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
