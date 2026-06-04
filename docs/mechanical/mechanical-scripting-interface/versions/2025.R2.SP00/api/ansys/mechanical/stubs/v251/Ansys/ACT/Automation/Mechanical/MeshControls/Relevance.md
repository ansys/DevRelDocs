# `Relevance`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.Relevance"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Relevance

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Relevance.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Relevance.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Relevance.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Relevance.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Relevance.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Relevance.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Relevance.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Relevance.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Relevance.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Relevance.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#Relevance.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Relevance.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Relevance.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Relevance.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Relevance.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Relevance.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Relevance.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Relevance.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Relevance.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Relevance.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Relevance.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Relevance.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Relevance.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Relevance.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Relevance.Location)                               | Gets or sets the Location.                                    |
| [`NamedSelection`](#Relevance.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`PartRelavance`](#Relevance.PartRelavance)                     | Gets the PartRelavance.                                       |
| [`Properties`](#Relevance.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Relevance.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Relevance.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Relevance.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Relevance.Children"></a>

### *property* Relevance.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Comments"></a>

### *property* Relevance.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.DataModelObjectCategory"></a>

### *property* Relevance.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Figures"></a>

### *property* Relevance.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Images"></a>

### *property* Relevance.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.InternalObject"></a>

### *property* Relevance.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Location"></a>

### *property* Relevance.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.NamedSelection"></a>

### *property* Relevance.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.PartRelavance"></a>

### *property* Relevance.PartRelavance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PartRelavance.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Properties"></a>

### *property* Relevance.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.ScopingMethod"></a>

### *property* Relevance.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Suppressed"></a>

### *property* Relevance.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.VisibleProperties"></a>

### *property* Relevance.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Relevance.Activate"></a>

### Relevance.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.AddComment"></a>

### Relevance.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.AddFigure"></a>

### Relevance.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.AddImage"></a>

### Relevance.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Relevance.CopyTo"></a>

### Relevance.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.CreateParameter"></a>

### Relevance.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Delete"></a>

### Relevance.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Duplicate"></a>

### Relevance.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.GenerateMesh"></a>

### Relevance.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.GetChildren"></a>

### Relevance.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.GetParameter"></a>

### Relevance.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.GroupAllSimilarChildren"></a>

### Relevance.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.GroupSimilarObjects"></a>

### Relevance.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.PropertyByAPIName"></a>

### Relevance.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Relevance.PropertyByName"></a>

### Relevance.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.RemoveParameter"></a>

### Relevance.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.RenameBasedOnDefinition"></a>

### Relevance.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

