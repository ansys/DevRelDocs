# `ResultMesh`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ResultMesh"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ResultMesh

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ResultMesh.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ResultMesh.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#ResultMesh.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#ResultMesh.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#ResultMesh.AddImage)                                             | Creates a new child Image.                                                        |
| [`AddNamedSelection`](#ResultMesh.AddNamedSelection)                           | Creates a new NamedSelection                                                      |
| [`ClearGeneratedData`](#ResultMesh.ClearGeneratedData)                         | Clear the generated mesh data                                                     |
| [`CopyTo`](#ResultMesh.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ResultMesh.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ResultMesh.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`Generate`](#ResultMesh.Generate)                                             | Generate the mesh data                                                            |
| [`GetChildren`](#ResultMesh.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ResultMesh.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ResultMesh.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ResultMesh.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`ImportComponentsFromResultFile`](#ResultMesh.ImportComponentsFromResultFile) | Import solver components from result file                                         |
| [`PropertyByAPIName`](#ResultMesh.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#ResultMesh.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ResultMesh.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ResultMesh.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ResultMesh.Comments)                               | Gets the list of associated comments.                         |
| [`ConfigurationId`](#ResultMesh.ConfigurationId)                 | Gets the ConfigurationId.                                     |
| [`DataModelObjectCategory`](#ResultMesh.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Elements`](#ResultMesh.Elements)                               | Gets the Elements.                                            |
| [`FEBodies`](#ResultMesh.FEBodies)                               | Gets FE Bodies                                                |
| [`Figures`](#ResultMesh.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ResultMesh.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ResultMesh.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Nodes`](#ResultMesh.Nodes)                                     | Gets the Nodes.                                               |
| [`Properties`](#ResultMesh.Properties)                           | Gets the list of properties for this object.                  |
| [`SourceFile`](#ResultMesh.SourceFile)                           | Gets the SourceFile.                                          |
| [`Suppressed`](#ResultMesh.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ResultMesh.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ResultMesh.Children"></a>

### *property* ResultMesh.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Comments"></a>

### *property* ResultMesh.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ConfigurationId"></a>

### *property* ResultMesh.ConfigurationId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ConfigurationId.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.DataModelObjectCategory"></a>

### *property* ResultMesh.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Elements"></a>

### *property* ResultMesh.Elements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.FEBodies"></a>

### *property* ResultMesh.FEBodies *: [Ansys.ACT.Automation.Mechanical.Part](Part.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Part) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets FE Bodies

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Figures"></a>

### *property* ResultMesh.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Images"></a>

### *property* ResultMesh.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.InternalObject"></a>

### *property* ResultMesh.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExtraMeshAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Nodes"></a>

### *property* ResultMesh.Nodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Properties"></a>

### *property* ResultMesh.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.SourceFile"></a>

### *property* ResultMesh.SourceFile *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SourceFile.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Suppressed"></a>

### *property* ResultMesh.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.VisibleProperties"></a>

### *property* ResultMesh.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResultMesh.Activate"></a>

### ResultMesh.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddComment"></a>

### ResultMesh.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddFigure"></a>

### ResultMesh.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddImage"></a>

### ResultMesh.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddNamedSelection"></a>

### ResultMesh.AddNamedSelection()

Creates a new NamedSelection

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ClearGeneratedData"></a>

### ResultMesh.ClearGeneratedData()

Clear the generated mesh data

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.CopyTo"></a>

### ResultMesh.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.CreateParameter"></a>

### ResultMesh.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Duplicate"></a>

### ResultMesh.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Generate"></a>

### ResultMesh.Generate()

Generate the mesh data

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetChildren"></a>

### ResultMesh.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetParameter"></a>

### ResultMesh.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GroupAllSimilarChildren"></a>

### ResultMesh.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GroupSimilarObjects"></a>

### ResultMesh.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ImportComponentsFromResultFile"></a>

### ResultMesh.ImportComponentsFromResultFile()

Import solver components from result file

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.PropertyByAPIName"></a>

### ResultMesh.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.PropertyByName"></a>

### ResultMesh.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.RemoveParameter"></a>

### ResultMesh.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

