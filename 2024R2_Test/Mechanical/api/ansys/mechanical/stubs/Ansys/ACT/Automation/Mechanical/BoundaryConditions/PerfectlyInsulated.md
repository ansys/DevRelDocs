# PerfectlyInsulated

### *class* PerfectlyInsulated

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PerfectlyInsulated.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#PerfectlyInsulated.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#PerfectlyInsulated.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PerfectlyInsulated.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#PerfectlyInsulated.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#PerfectlyInsulated.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#PerfectlyInsulated.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#PerfectlyInsulated.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PerfectlyInsulated.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PerfectlyInsulated.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PerfectlyInsulated.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PerfectlyInsulated.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PerfectlyInsulated.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#PerfectlyInsulated.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PerfectlyInsulated.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PerfectlyInsulated.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Magnitude`](#PerfectlyInsulated.Magnitude)                                                                           | Gets the Magnitude.                                           |
| [`DefineAs`](#PerfectlyInsulated.DefineAs)                                                                             | Gets or sets the DefineAs.                                    |
| [`Location`](#PerfectlyInsulated.Location)                                                                             | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#PerfectlyInsulated.Suppressed)                                                                         | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#PerfectlyInsulated.SharedRefBody)                                                                   | Gets or sets the SharedRefBody.                               |
| [`Children`](#PerfectlyInsulated.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#PerfectlyInsulated.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#PerfectlyInsulated.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#PerfectlyInsulated.Images)                                                                                 | Gets the list of associated images.                           |
| [`ReadOnly`](#PerfectlyInsulated.ReadOnly)                                                                             | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PerfectlyInsulated.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PerfectlyInsulated.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import PerfectlyInsulated
```

## Property detail

### *property* PerfectlyInsulated.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.DefineAs *: [Ansys.Mechanical.DataModel.Enums.LoadVariationType](../../../../Mechanical/DataModel/Enums/LoadVariationType.md#LoadVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineAs.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PerfectlyInsulated.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PerfectlyInsulated.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PerfectlyInsulated.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
