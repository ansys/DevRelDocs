# `FeatureSuppress`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.FeatureSuppress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.FeatureSuppress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FeatureSuppress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FeatureSuppress.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FeatureSuppress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FeatureSuppress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FeatureSuppress.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FeatureSuppress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FeatureSuppress.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FeatureSuppress.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FeatureSuppress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#FeatureSuppress.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#FeatureSuppress.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FeatureSuppress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FeatureSuppress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FeatureSuppress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FeatureSuppress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FeatureSuppress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FeatureSuppress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FeatureSuppress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`Children`](#FeatureSuppress.Children)                               | Gets the list of children.                                                      |
| [`Comments`](#FeatureSuppress.Comments)                               | Gets the list of associated comments.                                           |
| [`DataModelObjectCategory`](#FeatureSuppress.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                    |
| [`FeatureHeight`](#FeatureSuppress.FeatureHeight)                     | To specify the Feature Height.                                                  |
| [`Figures`](#FeatureSuppress.Figures)                                 | Gets the list of associated figures.                                            |
| [`Images`](#FeatureSuppress.Images)                                   | Gets the list of associated images.                                             |
| [`InternalObject`](#FeatureSuppress.InternalObject)                   | Gets the internal object. For advanced usage only.                              |
| [`Location`](#FeatureSuppress.Location)                               | Gets or sets the Location.                                                      |
| [`NamedSelection`](#FeatureSuppress.NamedSelection)                   | Gets or sets the NamedSelection.                                                |
| [`Properties`](#FeatureSuppress.Properties)                           | Gets the list of properties for this object.                                    |
| [`ScopingMethod`](#FeatureSuppress.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                 |
| [`SourceLocation`](#FeatureSuppress.SourceLocation)                   | To specify the face selections for the method: Defeature Faces or Parent Faces. |
| [`SourceNamedSelection`](#FeatureSuppress.SourceNamedSelection)       | Gets or sets the SourceNamedSelection.                                          |
| [`SourceSelection`](#FeatureSuppress.SourceSelection)                 | To select the FeatureSuppress method.                                           |
| [`Suppressed`](#FeatureSuppress.Suppressed)                           | Gets or sets the Suppressed.                                                    |
| [`VisibleProperties`](#FeatureSuppress.VisibleProperties)             | Gets the list of properties that are visible for this object.                   |

<a id="property-detail"></a>

## Property detail

<a id="FeatureSuppress.Children"></a>

### *property* FeatureSuppress.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Comments"></a>

### *property* FeatureSuppress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.DataModelObjectCategory"></a>

### *property* FeatureSuppress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.FeatureHeight"></a>

### *property* FeatureSuppress.FeatureHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the Feature Height.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Figures"></a>

### *property* FeatureSuppress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Images"></a>

### *property* FeatureSuppress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.InternalObject"></a>

### *property* FeatureSuppress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Location"></a>

### *property* FeatureSuppress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.NamedSelection"></a>

### *property* FeatureSuppress.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Properties"></a>

### *property* FeatureSuppress.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.ScopingMethod"></a>

### *property* FeatureSuppress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.SourceLocation"></a>

### *property* FeatureSuppress.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the face selections for the method: Defeature Faces or Parent Faces.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.SourceNamedSelection"></a>

### *property* FeatureSuppress.SourceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.SourceSelection"></a>

### *property* FeatureSuppress.SourceSelection *: [Ansys.Mechanical.DataModel.Enums.FeatureSuppressMethod](../../../../Mechanical/DataModel/Enums/FeatureSuppressMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FeatureSuppressMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the FeatureSuppress method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Suppressed"></a>

### *property* FeatureSuppress.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.VisibleProperties"></a>

### *property* FeatureSuppress.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FeatureSuppress.Activate"></a>

### FeatureSuppress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.AddComment"></a>

### FeatureSuppress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.AddFigure"></a>

### FeatureSuppress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.AddImage"></a>

### FeatureSuppress.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.CopyTo"></a>

### FeatureSuppress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.CreateParameter"></a>

### FeatureSuppress.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Delete"></a>

### FeatureSuppress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Duplicate"></a>

### FeatureSuppress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GenerateMesh"></a>

### FeatureSuppress.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetChildren"></a>

### FeatureSuppress.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetParameter"></a>

### FeatureSuppress.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GroupAllSimilarChildren"></a>

### FeatureSuppress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GroupSimilarObjects"></a>

### FeatureSuppress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.PropertyByAPIName"></a>

### FeatureSuppress.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.PropertyByName"></a>

### FeatureSuppress.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.RemoveParameter"></a>

### FeatureSuppress.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.RenameBasedOnDefinition"></a>

### FeatureSuppress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

