# `ContactDataTable`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ContactDataTable"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ContactDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactDataTable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactDataTable.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactDataTable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactDataTable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`CopyTo`](#ContactDataTable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactDataTable.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactDataTable.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactDataTable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`ExportTextFile`](#ContactDataTable.ExportTextFile)                   | Run the ExportTextFile action.                                                    |
| [`GetChildren`](#ContactDataTable.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactDataTable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactDataTable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactDataTable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactDataTable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactDataTable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactDataTable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ContactDataTable.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ContactDataTable.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ContactDataTable.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ContactDataTable.Figures)                                 | Gets the list of associated figures.                          |
| [`InternalObject`](#ContactDataTable.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactDataTable.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactDataTable.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactDataTable.Children"></a>

### *property* ContactDataTable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Comments"></a>

### *property* ContactDataTable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.DataModelObjectCategory"></a>

### *property* ContactDataTable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Figures"></a>

### *property* ContactDataTable.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.InternalObject"></a>

### *property* ContactDataTable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactDataTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Properties"></a>

### *property* ContactDataTable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.VisibleProperties"></a>

### *property* ContactDataTable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDataTable.Activate"></a>

### ContactDataTable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.AddComment"></a>

### ContactDataTable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.AddFigure"></a>

### ContactDataTable.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.CopyTo"></a>

### ContactDataTable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.CreateParameter"></a>

### ContactDataTable.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Delete"></a>

### ContactDataTable.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Duplicate"></a>

### ContactDataTable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.ExportTextFile"></a>

### ContactDataTable.ExportTextFile(fileName: System.String)

Run the ExportTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetChildren"></a>

### ContactDataTable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetParameter"></a>

### ContactDataTable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GroupAllSimilarChildren"></a>

### ContactDataTable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GroupSimilarObjects"></a>

### ContactDataTable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.PropertyByAPIName"></a>

### ContactDataTable.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.PropertyByName"></a>

### ContactDataTable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.RemoveParameter"></a>

### ContactDataTable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

