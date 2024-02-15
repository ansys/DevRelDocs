# VoltageGround

### *class* VoltageGround

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VoltageGround.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#VoltageGround.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#VoltageGround.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VoltageGround.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#VoltageGround.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#VoltageGround.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#VoltageGround.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#VoltageGround.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VoltageGround.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VoltageGround.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VoltageGround.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VoltageGround.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VoltageGround.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#VoltageGround.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#VoltageGround.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VoltageGround.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Location`](#VoltageGround.Location)                                                                                  | Gets or sets the Location.                                    |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`VoltageCoupling`](#VoltageGround.VoltageCoupling)                                                                    | Gets or sets the VoltageCoupling.                             |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#VoltageGround.Suppressed)                                                                              | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#VoltageGround.SharedRefBody)                                                                        | Gets or sets the SharedRefBody.                               |
| [`Children`](#VoltageGround.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#VoltageGround.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Figures`](#VoltageGround.Figures)                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#VoltageGround.Images)                                                                                      | Gets the list of associated images.                           |
| [`ReadOnly`](#VoltageGround.ReadOnly)                                                                                  | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#VoltageGround.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#VoltageGround.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import VoltageGround
```

## Property detail

### *property* VoltageGround.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.VoltageCoupling *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](Coupling.md#Coupling) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageCoupling.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* VoltageGround.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### VoltageGround.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### VoltageGround.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### VoltageGround.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VoltageGround.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VoltageGround.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### VoltageGround.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### VoltageGround.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### VoltageGround.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### VoltageGround.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### VoltageGround.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### VoltageGround.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### VoltageGround.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### VoltageGround.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### VoltageGround.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### VoltageGround.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### VoltageGround.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### VoltageGround.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
