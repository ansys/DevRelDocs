# `ContactDataTable`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactDataTable"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ContactDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactDataTable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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
|------------------------------------------------------------------------|---------------------------------------------------------------|
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

### *property* ContactDataTable.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Comments"></a>

### *property* ContactDataTable.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.DataModelObjectCategory"></a>

### *property* ContactDataTable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Figures"></a>

### *property* ContactDataTable.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.InternalObject"></a>

### *property* ContactDataTable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactDataTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Properties"></a>

### *property* ContactDataTable.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.VisibleProperties"></a>

### *property* ContactDataTable.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDataTable.Activate"></a>

### ContactDataTable.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.AddComment"></a>

### ContactDataTable.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.AddFigure"></a>

### ContactDataTable.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.CopyTo"></a>

### ContactDataTable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.CreateParameter"></a>

### ContactDataTable.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Delete"></a>

### ContactDataTable.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Duplicate"></a>

### ContactDataTable.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.ExportTextFile"></a>

### ContactDataTable.ExportTextFile(fileName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetChildren"></a>

### ContactDataTable.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetParameter"></a>

### ContactDataTable.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GroupAllSimilarChildren"></a>

### ContactDataTable.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GroupSimilarObjects"></a>

### ContactDataTable.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.PropertyByAPIName"></a>

### ContactDataTable.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.PropertyByName"></a>

### ContactDataTable.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.RemoveParameter"></a>

### ContactDataTable.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

