# `MatchControl`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MatchControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MatchControl.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MatchControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MatchControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MatchControl.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MatchControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MatchControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MatchControl.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MatchControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#MatchControl.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#MatchControl.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MatchControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MatchControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MatchControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MatchControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MatchControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MatchControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MatchControl.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MatchControl.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MatchControl.Comments)                               | Gets the list of associated comments.                         |
| [`ControlMessages`](#MatchControl.ControlMessages)                 | Gets the ControlMessages.                                     |
| [`DataModelObjectCategory`](#MatchControl.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MatchControl.Figures)                                 | Gets the list of associated figures.                          |
| [`HighCoordinateSystem`](#MatchControl.HighCoordinateSystem)       | Gets or sets the HighCoordinateSystem.                        |
| [`HighGeometrySelection`](#MatchControl.HighGeometrySelection)     | Gets or sets the HighGeometrySelection.                       |
| [`HighNamedSelection`](#MatchControl.HighNamedSelection)           | Gets or sets the HighNamedSelection.                          |
| [`Images`](#MatchControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MatchControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LowCoordinateSystem`](#MatchControl.LowCoordinateSystem)         | Gets or sets the LowCoordinateSystem.                         |
| [`LowGeometrySelection`](#MatchControl.LowGeometrySelection)       | Gets or sets the LowGeometrySelection.                        |
| [`LowNamedSelection`](#MatchControl.LowNamedSelection)             | Gets or sets the LowNamedSelection.                           |
| [`Properties`](#MatchControl.Properties)                           | Gets the list of properties for this object.                  |
| [`RotationAxis`](#MatchControl.RotationAxis)                       | Gets or sets the RotationAxis.                                |
| [`ScopingMethod`](#MatchControl.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#MatchControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Transformation`](#MatchControl.Transformation)                   | Gets or sets the Transformation.                              |
| [`VisibleProperties`](#MatchControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MatchControl.Children"></a>

### *property* MatchControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Comments"></a>

### *property* MatchControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ControlMessages"></a>

### *property* MatchControl.ControlMessages *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ControlMessages.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.DataModelObjectCategory"></a>

### *property* MatchControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Figures"></a>

### *property* MatchControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.HighCoordinateSystem"></a>

### *property* MatchControl.HighCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.HighGeometrySelection"></a>

### *property* MatchControl.HighGeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.HighNamedSelection"></a>

### *property* MatchControl.HighNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Images"></a>

### *property* MatchControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.InternalObject"></a>

### *property* MatchControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.LowCoordinateSystem"></a>

### *property* MatchControl.LowCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.LowGeometrySelection"></a>

### *property* MatchControl.LowGeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.LowNamedSelection"></a>

### *property* MatchControl.LowNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Properties"></a>

### *property* MatchControl.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RotationAxis"></a>

### *property* MatchControl.RotationAxis *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationAxis.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ScopingMethod"></a>

### *property* MatchControl.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Suppressed"></a>

### *property* MatchControl.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Transformation"></a>

### *property* MatchControl.Transformation *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Transformation.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.VisibleProperties"></a>

### *property* MatchControl.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MatchControl.Activate"></a>

### MatchControl.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.AddComment"></a>

### MatchControl.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.AddFigure"></a>

### MatchControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.AddImage"></a>

### MatchControl.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.CopyTo"></a>

### MatchControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.CreateParameter"></a>

### MatchControl.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Delete"></a>

### MatchControl.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Duplicate"></a>

### MatchControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GenerateMesh"></a>

### MatchControl.GenerateMesh() → [None](https://docs.python.org/3/library/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetChildren"></a>

### MatchControl.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetParameter"></a>

### MatchControl.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GroupAllSimilarChildren"></a>

### MatchControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GroupSimilarObjects"></a>

### MatchControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.PropertyByAPIName"></a>

### MatchControl.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.PropertyByName"></a>

### MatchControl.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RemoveParameter"></a>

### MatchControl.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RenameBasedOnDefinition"></a>

### MatchControl.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

