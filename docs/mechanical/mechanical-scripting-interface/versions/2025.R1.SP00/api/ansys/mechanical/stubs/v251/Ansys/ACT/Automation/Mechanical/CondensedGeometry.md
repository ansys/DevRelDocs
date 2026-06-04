# `CondensedGeometry`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CondensedGeometry"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CondensedGeometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CondensedGeometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CondensedGeometry.Activate)                                           | Activate the current object.                                                      |
| [`AddComment`](#CondensedGeometry.AddComment)                                       | Creates a new child Comment.                                                      |
| [`AddCondensedPart`](#CondensedGeometry.AddCondensedPart)                           | Creates a new CondensedPart                                                       |
| [`AddCondensedPartInfoTool`](#CondensedGeometry.AddCondensedPartInfoTool)           | Creates a new CondensedPartInfoTool                                               |
| [`AddFigure`](#CondensedGeometry.AddFigure)                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#CondensedGeometry.AddImage)                                           | Creates a new child Image.                                                        |
| [`AddImportedCondensedPart`](#CondensedGeometry.AddImportedCondensedPart)           | Creates a new ImportedCondensedPart                                               |
| [`ClearGeneratedData`](#CondensedGeometry.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#CondensedGeometry.CopyTo)                                               | Copies all visible properties from this object to another.                        |
| [`CreateAutomaticCondensedParts`](#CondensedGeometry.CreateAutomaticCondensedParts) | Run the CreateAutomaticCondensedParts action.                                     |
| [`CreateParameter`](#CondensedGeometry.CreateParameter)                             | Creates a new parameter for a Property.                                           |
| [`Delete`](#CondensedGeometry.Delete)                                               | Run the Delete action.                                                            |
| [`Duplicate`](#CondensedGeometry.Duplicate)                                         | Creates a copy of the current DataModelObject.                                    |
| [`GenerateCondensedParts`](#CondensedGeometry.GenerateCondensedParts)               | Run the GenerateCondensedParts action.                                            |
| [`GetChildren`](#CondensedGeometry.GetChildren)                                     | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CondensedGeometry.GetParameter)                                   | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CondensedGeometry.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CondensedGeometry.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CondensedGeometry.PropertyByAPIName)                         | Get a property by its API name.                                                   |
| [`PropertyByName`](#CondensedGeometry.PropertyByName)                               | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CondensedGeometry.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CondensedGeometry.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CondensedGeometry.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CondensedGeometry.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CondensedGeometry.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CondensedGeometry.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CondensedGeometry.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CondensedGeometry.Properties)                           | Gets the list of properties for this object.                  |
| [`SolverFilesDirectory`](#CondensedGeometry.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                |
| [`TransparencyEnabled`](#CondensedGeometry.TransparencyEnabled)         | Gets or sets the TransparencyEnabled.                         |
| [`VisibleProperties`](#CondensedGeometry.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CondensedGeometry.Children"></a>

### *property* CondensedGeometry.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Comments"></a>

### *property* CondensedGeometry.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.DataModelObjectCategory"></a>

### *property* CondensedGeometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Figures"></a>

### *property* CondensedGeometry.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Images"></a>

### *property* CondensedGeometry.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.InternalObject"></a>

### *property* CondensedGeometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedGeometryAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Properties"></a>

### *property* CondensedGeometry.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.SolverFilesDirectory"></a>

### *property* CondensedGeometry.SolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.TransparencyEnabled"></a>

### *property* CondensedGeometry.TransparencyEnabled *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.VisibleProperties"></a>

### *property* CondensedGeometry.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CondensedGeometry.Activate"></a>

### CondensedGeometry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddComment"></a>

### CondensedGeometry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddCondensedPart"></a>

### CondensedGeometry.AddCondensedPart()

Creates a new CondensedPart

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddCondensedPartInfoTool"></a>

### CondensedGeometry.AddCondensedPartInfoTool()

Creates a new CondensedPartInfoTool

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddFigure"></a>

### CondensedGeometry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddImage"></a>

### CondensedGeometry.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddImportedCondensedPart"></a>

### CondensedGeometry.AddImportedCondensedPart()

Creates a new ImportedCondensedPart

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.ClearGeneratedData"></a>

### CondensedGeometry.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.CopyTo"></a>

### CondensedGeometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.CreateAutomaticCondensedParts"></a>

### CondensedGeometry.CreateAutomaticCondensedParts()

Run the CreateAutomaticCondensedParts action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.CreateParameter"></a>

### CondensedGeometry.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Delete"></a>

### CondensedGeometry.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Duplicate"></a>

### CondensedGeometry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GenerateCondensedParts"></a>

### CondensedGeometry.GenerateCondensedParts()

Run the GenerateCondensedParts action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetChildren"></a>

### CondensedGeometry.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetParameter"></a>

### CondensedGeometry.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GroupAllSimilarChildren"></a>

### CondensedGeometry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GroupSimilarObjects"></a>

### CondensedGeometry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.PropertyByAPIName"></a>

### CondensedGeometry.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.PropertyByName"></a>

### CondensedGeometry.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.RemoveParameter"></a>

### CondensedGeometry.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

