# `Deviation`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.Deviation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Deviation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Deviation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Deviation.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Deviation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Deviation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Deviation.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Deviation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Deviation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Deviation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Deviation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Deviation.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#Deviation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Deviation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Deviation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Deviation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Deviation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Deviation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Deviation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Deviation.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Deviation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Deviation.Comments)                               | Gets the list of associated comments.                         |
| [`ControlType`](#Deviation.ControlType)                         | Gets or sets the SagControlType.                              |
| [`DataModelObjectCategory`](#Deviation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Deviation.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Deviation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Deviation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Deviation.Location)                               | Gets or sets the Location.                                    |
| [`MeshSize`](#Deviation.MeshSize)                               | MeshSize property.                                            |
| [`NamedSelection`](#Deviation.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`NumberOfDivisions`](#Deviation.NumberOfDivisions)             | NumberOfDivisions property.                                   |
| [`Properties`](#Deviation.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Deviation.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Deviation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Tolerance`](#Deviation.Tolerance)                             | Tolerance property.                                           |
| [`VisibleProperties`](#Deviation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Deviation.Children"></a>

### *property* Deviation.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Comments"></a>

### *property* Deviation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.ControlType"></a>

### *property* Deviation.ControlType *: Ansys.Mechanical.DataModel.Enums.DeviationControlType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SagControlType.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.DataModelObjectCategory"></a>

### *property* Deviation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Figures"></a>

### *property* Deviation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Images"></a>

### *property* Deviation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.InternalObject"></a>

### *property* Deviation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Location"></a>

### *property* Deviation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.MeshSize"></a>

### *property* Deviation.MeshSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MeshSize property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.NamedSelection"></a>

### *property* Deviation.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.NumberOfDivisions"></a>

### *property* Deviation.NumberOfDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Properties"></a>

### *property* Deviation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.ScopingMethod"></a>

### *property* Deviation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Suppressed"></a>

### *property* Deviation.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Tolerance"></a>

### *property* Deviation.Tolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Tolerance property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.VisibleProperties"></a>

### *property* Deviation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Deviation.Activate"></a>

### Deviation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.AddComment"></a>

### Deviation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.AddFigure"></a>

### Deviation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.AddImage"></a>

### Deviation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Deviation.CopyTo"></a>

### Deviation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.CreateParameter"></a>

### Deviation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Delete"></a>

### Deviation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Duplicate"></a>

### Deviation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GenerateMesh"></a>

### Deviation.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetChildren"></a>

### Deviation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetParameter"></a>

### Deviation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GroupAllSimilarChildren"></a>

### Deviation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GroupSimilarObjects"></a>

### Deviation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.PropertyByAPIName"></a>

### Deviation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Deviation.PropertyByName"></a>

### Deviation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.RemoveParameter"></a>

### Deviation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.RenameBasedOnDefinition"></a>

### Deviation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

