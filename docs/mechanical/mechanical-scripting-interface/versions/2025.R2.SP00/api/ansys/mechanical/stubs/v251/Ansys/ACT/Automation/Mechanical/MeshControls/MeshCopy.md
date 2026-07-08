# `MeshCopy`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.MeshCopy"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.MeshCopy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshCopy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshCopy.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MeshCopy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshCopy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshCopy.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MeshCopy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshCopy.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshCopy.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshCopy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#MeshCopy.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#MeshCopy.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshCopy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshCopy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshCopy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshCopy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshCopy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshCopy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MeshCopy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MeshCopy.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#MeshCopy.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MeshCopy.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MeshCopy.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](#MeshCopy.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#MeshCopy.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`NodeMergeTolerance`](#MeshCopy.NodeMergeTolerance)                   | Gets or sets the NodeMergeTolerance.                          |
| [`NodeMergeToleranceOption`](#MeshCopy.NodeMergeToleranceOption)       | Gets or sets the NodeMergeToleranceOption.                    |
| [`PercentageOfElementSize`](#MeshCopy.PercentageOfElementSize)         | Gets or sets the PercentageOfElementSize.                     |
| [`Properties`](#MeshCopy.Properties)                                   | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#MeshCopy.ScopingMethod)                             | Gets or sets the ScopingMethod.                               |
| [`SourceAnchors`](#MeshCopy.SourceAnchors)                             | Gets or sets the SourceAnchors.                               |
| [`SourceAnchorsNamedSelection`](#MeshCopy.SourceAnchorsNamedSelection) | Gets or sets the SourceAnchorsNamedSelection.                 |
| [`Suppressed`](#MeshCopy.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TargetAnchors`](#MeshCopy.TargetAnchors)                             | Gets or sets the TargetAnchors.                               |
| [`TargetAnchorsNamedSelection`](#MeshCopy.TargetAnchorsNamedSelection) | Gets or sets the TargetAnchorsNamedSelection.                 |
| [`TargetScoping`](#MeshCopy.TargetScoping)                             | Gets or sets the TargetScoping.                               |
| [`VisibleProperties`](#MeshCopy.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshCopy.Children"></a>

### *property* MeshCopy.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Comments"></a>

### *property* MeshCopy.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.DataModelObjectCategory"></a>

### *property* MeshCopy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Figures"></a>

### *property* MeshCopy.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Images"></a>

### *property* MeshCopy.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.InternalObject"></a>

### *property* MeshCopy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.NodeMergeTolerance"></a>

### *property* MeshCopy.NodeMergeTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeMergeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.NodeMergeToleranceOption"></a>

### *property* MeshCopy.NodeMergeToleranceOption *: [Ansys.Mechanical.DataModel.Enums.NodeMergeToleranceMethod](../../../../Mechanical/DataModel/Enums/NodeMergeToleranceMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NodeMergeToleranceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeMergeToleranceOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PercentageOfElementSize"></a>

### *property* MeshCopy.PercentageOfElementSize *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageOfElementSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Properties"></a>

### *property* MeshCopy.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.ScopingMethod"></a>

### *property* MeshCopy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.SourceAnchors"></a>

### *property* MeshCopy.SourceAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchors.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.SourceAnchorsNamedSelection"></a>

### *property* MeshCopy.SourceAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Suppressed"></a>

### *property* MeshCopy.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.TargetAnchors"></a>

### *property* MeshCopy.TargetAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchors.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.TargetAnchorsNamedSelection"></a>

### *property* MeshCopy.TargetAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.TargetScoping"></a>

### *property* MeshCopy.TargetScoping *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetScoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.VisibleProperties"></a>

### *property* MeshCopy.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshCopy.Activate"></a>

### MeshCopy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.AddComment"></a>

### MeshCopy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.AddFigure"></a>

### MeshCopy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.AddImage"></a>

### MeshCopy.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.CopyTo"></a>

### MeshCopy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.CreateParameter"></a>

### MeshCopy.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Delete"></a>

### MeshCopy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Duplicate"></a>

### MeshCopy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GenerateMesh"></a>

### MeshCopy.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetChildren"></a>

### MeshCopy.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetParameter"></a>

### MeshCopy.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GroupAllSimilarChildren"></a>

### MeshCopy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GroupSimilarObjects"></a>

### MeshCopy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PropertyByAPIName"></a>

### MeshCopy.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PropertyByName"></a>

### MeshCopy.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.RemoveParameter"></a>

### MeshCopy.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.RenameBasedOnDefinition"></a>

### MeshCopy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

