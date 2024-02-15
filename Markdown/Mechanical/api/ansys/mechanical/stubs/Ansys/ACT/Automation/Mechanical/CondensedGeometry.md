# CondensedGeometry

### *class* CondensedGeometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CondensedGeometry.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`CreateAutomaticCondensedParts`](#CondensedGeometry.CreateAutomaticCondensedParts)   | Run the CreateAutomaticCondensedParts action.                                     |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCondensedPart`](#CondensedGeometry.AddCondensedPart)                             | Creates a new CondensedPart                                                       |
| [`AddCondensedPartInfoTool`](#CondensedGeometry.AddCondensedPartInfoTool)             | Creates a new CondensedPartInfoTool                                               |
| [`AddImportedCondensedPart`](#CondensedGeometry.AddImportedCondensedPart)             | Creates a new ImportedCondensedPart                                               |
| [`ClearGeneratedData`](#CondensedGeometry.ClearGeneratedData)                         | Run the ClearGeneratedData action.                                                |
| [`GenerateCondensedParts`](#CondensedGeometry.GenerateCondensedParts)                 | Run the GenerateCondensedParts action.                                            |
| [`Delete`](#CondensedGeometry.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CondensedGeometry.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#CondensedGeometry.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#CondensedGeometry.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#CondensedGeometry.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#CondensedGeometry.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CondensedGeometry.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CondensedGeometry.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CondensedGeometry.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CondensedGeometry.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CondensedGeometry.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#CondensedGeometry.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CondensedGeometry.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CondensedGeometry.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SolverFilesDirectory`](#CondensedGeometry.SolverFilesDirectory)                                                   | Gets the SolverFilesDirectory.                                |
| [`TransparencyEnabled`](#CondensedGeometry.TransparencyEnabled)                                                     | Gets or sets the TransparencyEnabled.                         |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CondensedGeometry.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#CondensedGeometry.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#CondensedGeometry.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#CondensedGeometry.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CondensedGeometry.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CondensedGeometry.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CondensedGeometry
```

## Property detail

### *property* CondensedGeometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedGeometryAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.TransparencyEnabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### CondensedGeometry.CreateAutomaticCondensedParts()

Run the CreateAutomaticCondensedParts action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddCondensedPart()

Creates a new CondensedPart

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddCondensedPartInfoTool()

Creates a new CondensedPartInfoTool

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddImportedCondensedPart()

Creates a new ImportedCondensedPart

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GenerateCondensedParts()

Run the GenerateCondensedParts action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
