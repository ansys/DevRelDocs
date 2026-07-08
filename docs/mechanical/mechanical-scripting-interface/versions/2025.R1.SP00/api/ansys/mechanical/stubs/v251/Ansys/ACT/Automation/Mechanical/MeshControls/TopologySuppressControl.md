# `TopologySuppressControl`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.TopologySuppressControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.TopologySuppressControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TopologySuppressControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TopologySuppressControl.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#TopologySuppressControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TopologySuppressControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TopologySuppressControl.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#TopologySuppressControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TopologySuppressControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#TopologySuppressControl.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TopologySuppressControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#TopologySuppressControl.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#TopologySuppressControl.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TopologySuppressControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TopologySuppressControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TopologySuppressControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#TopologySuppressControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TopologySuppressControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TopologySuppressControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TopologySuppressControl.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#TopologySuppressControl.Children)                               | Gets the list of children.                                    |
| [`Comments`](#TopologySuppressControl.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TopologySuppressControl.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#TopologySuppressControl.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#TopologySuppressControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TopologySuppressControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#TopologySuppressControl.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#TopologySuppressControl.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#TopologySuppressControl.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#TopologySuppressControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#TopologySuppressControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopologySuppressControl.Children"></a>

### *property* TopologySuppressControl.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Comments"></a>

### *property* TopologySuppressControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.DataModelObjectCategory"></a>

### *property* TopologySuppressControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Figures"></a>

### *property* TopologySuppressControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Images"></a>

### *property* TopologySuppressControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.InternalObject"></a>

### *property* TopologySuppressControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Location"></a>

### *property* TopologySuppressControl.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Properties"></a>

### *property* TopologySuppressControl.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.ScopingMethod"></a>

### *property* TopologySuppressControl.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Suppressed"></a>

### *property* TopologySuppressControl.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.VisibleProperties"></a>

### *property* TopologySuppressControl.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopologySuppressControl.Activate"></a>

### TopologySuppressControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.AddComment"></a>

### TopologySuppressControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.AddFigure"></a>

### TopologySuppressControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.AddImage"></a>

### TopologySuppressControl.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.CopyTo"></a>

### TopologySuppressControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.CreateParameter"></a>

### TopologySuppressControl.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Delete"></a>

### TopologySuppressControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Duplicate"></a>

### TopologySuppressControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GenerateMesh"></a>

### TopologySuppressControl.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetChildren"></a>

### TopologySuppressControl.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetParameter"></a>

### TopologySuppressControl.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GroupAllSimilarChildren"></a>

### TopologySuppressControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GroupSimilarObjects"></a>

### TopologySuppressControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.PropertyByAPIName"></a>

### TopologySuppressControl.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.PropertyByName"></a>

### TopologySuppressControl.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.RemoveParameter"></a>

### TopologySuppressControl.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.RenameBasedOnDefinition"></a>

### TopologySuppressControl.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

