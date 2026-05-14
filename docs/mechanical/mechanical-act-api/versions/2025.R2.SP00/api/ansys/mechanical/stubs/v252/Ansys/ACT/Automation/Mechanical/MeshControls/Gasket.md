# `Gasket`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Gasket"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Gasket

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Gasket.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Gasket.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Gasket.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Gasket.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Gasket.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Gasket.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Gasket.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Gasket.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Gasket.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Gasket.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#Gasket.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Gasket.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Gasket.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Gasket.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Gasket.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Gasket.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Gasket.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Gasket.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Children`](#Gasket.Children)                               | Gets the list of children.                                                                                                                                                                                                                                           |
| [`Comments`](#Gasket.Comments)                               | Gets the list of associated comments.                                                                                                                                                                                                                                |
| [`DataModelObjectCategory`](#Gasket.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                                                                                                                         |
| [`ElementOrder`](#Gasket.ElementOrder)                       | Gets and Sets Element Order Property. The default value is Use Global Setting.                                                                                                                                                                                       |
| [`Figures`](#Gasket.Figures)                                 | Gets the list of associated figures.                                                                                                                                                                                                                                 |
| [`FreeFaceMeshType`](#Gasket.FreeFaceMeshType)               | Gets and Sets Free Face Mesh Type Property. The default value is Quad/Tri.                                                                                                                                                                                           |
| [`Images`](#Gasket.Images)                                   | Gets the list of associated images.                                                                                                                                                                                                                                  |
| [`InternalObject`](#Gasket.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                   |
| [`Location`](#Gasket.Location)                               | Gets and Sets the Location.                                                                                                                                                                                                                                          |
| [`Properties`](#Gasket.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                         |
| [`ScopingMethod`](#Gasket.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                                                                                                                                                      |
| [`Source`](#Gasket.Source)                                   | Gets and Sets the Source.                                                                                                                                                                                                                                            |
| [`SourceScopingMethod`](#Gasket.SourceScopingMethod)         | Gets and Sets Source Scoping Method Property. Geometry Selection enables you to select sources or targets manually using the Source option. Named Selection enables you to choose one Named Selection as a source or target using the Source Named Selection option. |
| [`Suppressed`](#Gasket.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                                                                                                                                         |
| [`VisibleProperties`](#Gasket.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                        |

<a id="property-detail"></a>

## Property detail

<a id="Gasket.Children"></a>

### *property* Gasket.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.Comments"></a>

### *property* Gasket.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.DataModelObjectCategory"></a>

### *property* Gasket.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.ElementOrder"></a>

### *property* Gasket.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets and Sets Element Order Property. The default value is Use Global Setting.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.Figures"></a>

### *property* Gasket.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.FreeFaceMeshType"></a>

### *property* Gasket.FreeFaceMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MultizoneMappedMeshType](../../../../Mechanical/DataModel/MechanicalEnums/MultizoneMappedMeshType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MultizoneMappedMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets and Sets Free Face Mesh Type Property. The default value is Quad/Tri.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.Images"></a>

### *property* Gasket.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.InternalObject"></a>

### *property* Gasket.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.Location"></a>

### *property* Gasket.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets and Sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.Properties"></a>

### *property* Gasket.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.ScopingMethod"></a>

### *property* Gasket.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.Source"></a>

### *property* Gasket.Source *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets and Sets the Source.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.SourceScopingMethod"></a>

### *property* Gasket.SourceScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets and Sets Source Scoping Method Property. Geometry Selection enables you to select sources or targets manually using the Source option. Named Selection enables you to choose one Named Selection as a source or target using the Source Named Selection option.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.Suppressed"></a>

### *property* Gasket.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.VisibleProperties"></a>

### *property* Gasket.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Gasket.Activate"></a>

### Gasket.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.AddComment"></a>

### Gasket.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.AddFigure"></a>

### Gasket.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.AddImage"></a>

### Gasket.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Gasket.CopyTo"></a>

### Gasket.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.CreateParameter"></a>

### Gasket.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.Delete"></a>

### Gasket.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.Duplicate"></a>

### Gasket.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.GenerateMesh"></a>

### Gasket.GenerateMesh() → [None](https://docs.python.org/3/library/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.GetChildren"></a>

### Gasket.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.GetParameter"></a>

### Gasket.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.GroupAllSimilarChildren"></a>

### Gasket.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.GroupSimilarObjects"></a>

### Gasket.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.PropertyByAPIName"></a>

### Gasket.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Gasket.PropertyByName"></a>

### Gasket.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.RemoveParameter"></a>

### Gasket.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Gasket.RenameBasedOnDefinition"></a>

### Gasket.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

