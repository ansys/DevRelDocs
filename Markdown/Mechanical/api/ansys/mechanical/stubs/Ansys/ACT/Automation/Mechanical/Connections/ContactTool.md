# ContactTool

### *class* ContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactTool.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#ContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#ContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                |
| [`GenerateInitialContactResults`](#ContactTool.GenerateInitialContactResults) | Run the GenerateInitialContactResults action.                                     |
| [`Delete`](#ContactTool.Delete)                                               | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactTool.AddComment)                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactTool.AddFigure)                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactTool.AddImage)                                           | Creates a new child Image.                                                        |
| [`Activate`](#ContactTool.Activate)                                           | Activate the current object.                                                      |
| [`CopyTo`](#ContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactTool.PropertyByName)                               | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ScopingMethod`](#ContactTool.ScopingMethod)                                                                          | Gets or sets the ScopingMethod.                               |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#ContactTool.Location)                                                                                    | Gets or sets the Location.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ContactTool.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#ContactTool.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#ContactTool.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#ContactTool.Images)                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactTool.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactTool.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import ContactTool
```

## Property detail

### *property* ContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactTool.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ContactTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ContactTool.GenerateInitialContactResults()

Run the GenerateInitialContactResults action.

<!-- !! processed by numpydoc !! -->

### ContactTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
