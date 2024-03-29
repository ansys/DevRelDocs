# PreContactTool

### *class* PreContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PreContactTool.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddInitialInformation`](#PreContactTool.AddInitialInformation)                 | Creates a new ContactDataTable                                                    |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddGap`](#PreContactTool.AddGap)                                               | Creates a new ContactGap                                                          |
| [`AddPenetration`](#PreContactTool.AddPenetration)                               | Creates a new ContactPenetration                                                  |
| [`AddStatus`](#PreContactTool.AddStatus)                                         | Creates a new ContactStatus                                                       |
| [`ClearGeneratedData`](#PreContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#PreContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                |
| [`GenerateInitialContactResults`](#PreContactTool.GenerateInitialContactResults) | Run the GenerateInitialContactResults action.                                     |
| [`Delete`](#PreContactTool.Delete)                                               | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PreContactTool.AddComment)                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#PreContactTool.AddFigure)                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#PreContactTool.AddImage)                                           | Creates a new child Image.                                                        |
| [`Activate`](#PreContactTool.Activate)                                           | Activate the current object.                                                      |
| [`CopyTo`](#PreContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PreContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PreContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PreContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PreContactTool.PropertyByName)                               | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PreContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                   |
| [`CreateParameter`](#PreContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PreContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PreContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#PreContactTool.ScopingMethod)                                                                    | Gets or sets the ScopingMethod.                               |
| [`Location`](#PreContactTool.Location)                                                                              | Gets or sets the Location.                                    |
| [`Children`](#PreContactTool.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#PreContactTool.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#PreContactTool.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#PreContactTool.Images)                                                                                  | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PreContactTool.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PreContactTool.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PreContactTool
```

## Property detail

### *property* PreContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PreContactTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PreContactTool.AddInitialInformation()

Creates a new ContactDataTable

<!-- !! processed by numpydoc !! -->

### PreContactTool.AddGap()

Creates a new ContactGap

<!-- !! processed by numpydoc !! -->

### PreContactTool.AddPenetration()

Creates a new ContactPenetration

<!-- !! processed by numpydoc !! -->

### PreContactTool.AddStatus()

Creates a new ContactStatus

<!-- !! processed by numpydoc !! -->

### PreContactTool.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### PreContactTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### PreContactTool.GenerateInitialContactResults()

Run the GenerateInitialContactResults action.

<!-- !! processed by numpydoc !! -->

### PreContactTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PreContactTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PreContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PreContactTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PreContactTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PreContactTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PreContactTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PreContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PreContactTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PreContactTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PreContactTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PreContactTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PreContactTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PreContactTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PreContactTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PreContactTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
