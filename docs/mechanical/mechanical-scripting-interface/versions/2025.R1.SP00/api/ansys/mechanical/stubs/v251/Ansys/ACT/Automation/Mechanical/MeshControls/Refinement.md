# `Refinement`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.Refinement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Refinement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Refinement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Refinement.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Refinement.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Refinement.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Refinement.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Refinement.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Refinement.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Refinement.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Refinement.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Refinement.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#Refinement.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Refinement.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Refinement.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Refinement.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Refinement.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Refinement.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Refinement.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Refinement.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Refinement.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Refinement.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Refinement.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Refinement.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Refinement.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Refinement.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Refinement.Location)                               | Gets or sets the Location.                                    |
| [`NamedSelection`](#Refinement.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`NumberOfRefinements`](#Refinement.NumberOfRefinements)         | Gets or sets the NumberOfRefinements.                         |
| [`Properties`](#Refinement.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Refinement.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Refinement.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Refinement.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Refinement.Children"></a>

### *property* Refinement.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Comments"></a>

### *property* Refinement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.DataModelObjectCategory"></a>

### *property* Refinement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Figures"></a>

### *property* Refinement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Images"></a>

### *property* Refinement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.InternalObject"></a>

### *property* Refinement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Location"></a>

### *property* Refinement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.NamedSelection"></a>

### *property* Refinement.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.NumberOfRefinements"></a>

### *property* Refinement.NumberOfRefinements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRefinements.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Properties"></a>

### *property* Refinement.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.ScopingMethod"></a>

### *property* Refinement.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Suppressed"></a>

### *property* Refinement.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.VisibleProperties"></a>

### *property* Refinement.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Refinement.Activate"></a>

### Refinement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.AddComment"></a>

### Refinement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.AddFigure"></a>

### Refinement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.AddImage"></a>

### Refinement.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Refinement.CopyTo"></a>

### Refinement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.CreateParameter"></a>

### Refinement.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Delete"></a>

### Refinement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Duplicate"></a>

### Refinement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.GenerateMesh"></a>

### Refinement.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.GetChildren"></a>

### Refinement.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.GetParameter"></a>

### Refinement.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.GroupAllSimilarChildren"></a>

### Refinement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.GroupSimilarObjects"></a>

### Refinement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.PropertyByAPIName"></a>

### Refinement.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Refinement.PropertyByName"></a>

### Refinement.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.RemoveParameter"></a>

### Refinement.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.RenameBasedOnDefinition"></a>

### Refinement.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

