# `Pinch`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Pinch"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Pinch

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Pinch.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Pinch.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Pinch.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Pinch.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Pinch.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Pinch.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Pinch.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Pinch.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Pinch.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Pinch.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#Pinch.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Pinch.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Pinch.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Pinch.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Pinch.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Pinch.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Pinch.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Pinch.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`AutoManualMode`](#Pinch.AutoManualMode)                   | Gets the AutoManualMode.                                      |
| [`Children`](#Pinch.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Pinch.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Pinch.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Pinch.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Pinch.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Pinch.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MasterGeometry`](#Pinch.MasterGeometry)                   | Gets or sets the MasterGeometry.                              |
| [`Properties`](#Pinch.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Pinch.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`SlaveGeometry`](#Pinch.SlaveGeometry)                     | Gets or sets the SlaveGeometry.                               |
| [`Suppressed`](#Pinch.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Tolerance`](#Pinch.Tolerance)                             | Gets or sets the Tolerance.                                   |
| [`VisibleProperties`](#Pinch.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Pinch.AutoManualMode"></a>

### *property* Pinch.AutoManualMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AutoManualMode.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Children"></a>

### *property* Pinch.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Comments"></a>

### *property* Pinch.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.DataModelObjectCategory"></a>

### *property* Pinch.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Figures"></a>

### *property* Pinch.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Images"></a>

### *property* Pinch.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.InternalObject"></a>

### *property* Pinch.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.MasterGeometry"></a>

### *property* Pinch.MasterGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Properties"></a>

### *property* Pinch.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.ScopingMethod"></a>

### *property* Pinch.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.SlaveGeometry"></a>

### *property* Pinch.SlaveGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Suppressed"></a>

### *property* Pinch.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Tolerance"></a>

### *property* Pinch.Tolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.VisibleProperties"></a>

### *property* Pinch.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Pinch.Activate"></a>

### Pinch.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.AddComment"></a>

### Pinch.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.AddFigure"></a>

### Pinch.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.AddImage"></a>

### Pinch.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Pinch.CopyTo"></a>

### Pinch.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.CreateParameter"></a>

### Pinch.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Delete"></a>

### Pinch.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Duplicate"></a>

### Pinch.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GenerateMesh"></a>

### Pinch.GenerateMesh() → [None](https://docs.python.org/3/library/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetChildren"></a>

### Pinch.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetParameter"></a>

### Pinch.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GroupAllSimilarChildren"></a>

### Pinch.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GroupSimilarObjects"></a>

### Pinch.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.PropertyByAPIName"></a>

### Pinch.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Pinch.PropertyByName"></a>

### Pinch.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.RemoveParameter"></a>

### Pinch.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.RenameBasedOnDefinition"></a>

### Pinch.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

