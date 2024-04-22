<a id="precontacttool"></a>

# PreContactTool

<a id="PreContactTool"></a>

### *class* PreContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PreContactTool.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddInitialInformation`](#PreContactTool.AddInitialInformation)                 | Creates a new ContactDataTable                                                    |
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

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PreContactTool
```

<a id="property-detail"></a>

## Property detail

<a id="PreContactTool.InternalObject"></a>

### *property* PreContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.DataModelObjectCategory"></a>

### *property* PreContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ScopingMethod"></a>

### *property* PreContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Location"></a>

### *property* PreContactTool.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Children"></a>

### *property* PreContactTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Comments"></a>

### *property* PreContactTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Figures"></a>

### *property* PreContactTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Images"></a>

### *property* PreContactTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PreContactTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Properties"></a>

### *property* PreContactTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.VisibleProperties"></a>

### *property* PreContactTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PreContactTool.AddInitialInformation"></a>

### PreContactTool.AddInitialInformation()

Creates a new ContactDataTable

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddGap"></a>

### PreContactTool.AddGap()

Creates a new ContactGap

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddPenetration"></a>

### PreContactTool.AddPenetration()

Creates a new ContactPenetration

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddStatus"></a>

### PreContactTool.AddStatus()

Creates a new ContactStatus

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ClearGeneratedData"></a>

### PreContactTool.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.EvaluateAllResults"></a>

### PreContactTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GenerateInitialContactResults"></a>

### PreContactTool.GenerateInitialContactResults()

Run the GenerateInitialContactResults action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Delete"></a>

### PreContactTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetChildren"></a>

### PreContactTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PreContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddComment"></a>

### PreContactTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddFigure"></a>

### PreContactTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddImage"></a>

### PreContactTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Activate"></a>

### PreContactTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.CopyTo"></a>

### PreContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Duplicate"></a>

### PreContactTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GroupAllSimilarChildren"></a>

### PreContactTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GroupSimilarObjects"></a>

### PreContactTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.PropertyByName"></a>

### PreContactTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.PropertyByAPIName"></a>

### PreContactTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.CreateParameter"></a>

### PreContactTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetParameter"></a>

### PreContactTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.RemoveParameter"></a>

### PreContactTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
