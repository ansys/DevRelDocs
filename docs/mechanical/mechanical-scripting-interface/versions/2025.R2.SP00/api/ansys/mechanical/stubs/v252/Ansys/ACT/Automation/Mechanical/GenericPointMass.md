# `GenericPointMass`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.GenericPointMass"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GenericPointMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GenericPointMass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GenericPointMass.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#GenericPointMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#GenericPointMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericPointMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericPointMass.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#GenericPointMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#GenericPointMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#GenericPointMass.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#GenericPointMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#GenericPointMass.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#GenericPointMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GenericPointMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericPointMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#GenericPointMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GenericPointMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GenericPointMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#GenericPointMass.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GenericPointMass.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GenericPointMass.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#GenericPointMass.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GenericPointMass.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GenericPointMass.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IsDistributedMass`](#GenericPointMass.IsDistributedMass)             | Gets the IsDistributedMass.                                   |
| [`Location`](#GenericPointMass.Location)                               | Gets or sets the Geometry.                                    |
| [`Properties`](#GenericPointMass.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GenericPointMass.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`RemotePoint`](#GenericPointMass.RemotePoint)                         | Gets the remote point associated to the point mass.           |
| [`VisibleProperties`](#GenericPointMass.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericPointMass.Children"></a>

### *property* GenericPointMass.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Comments"></a>

### *property* GenericPointMass.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.DataModelObjectCategory"></a>

### *property* GenericPointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Figures"></a>

### *property* GenericPointMass.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Images"></a>

### *property* GenericPointMass.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.InternalObject"></a>

### *property* GenericPointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.IsDistributedMass"></a>

### *property* GenericPointMass.IsDistributedMass *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Location"></a>

### *property* GenericPointMass.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Properties"></a>

### *property* GenericPointMass.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.ReadOnly"></a>

### *property* GenericPointMass.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.RemotePoint"></a>

### *property* GenericPointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.VisibleProperties"></a>

### *property* GenericPointMass.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericPointMass.Activate"></a>

### GenericPointMass.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddCommandSnippet"></a>

### GenericPointMass.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddComment"></a>

### GenericPointMass.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddFigure"></a>

### GenericPointMass.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddImage"></a>

### GenericPointMass.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.CopyTo"></a>

### GenericPointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.CreateParameter"></a>

### GenericPointMass.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Delete"></a>

### GenericPointMass.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Duplicate"></a>

### GenericPointMass.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetChildren"></a>

### GenericPointMass.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetParameter"></a>

### GenericPointMass.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GroupAllSimilarChildren"></a>

### GenericPointMass.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GroupSimilarObjects"></a>

### GenericPointMass.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.PropertyByAPIName"></a>

### GenericPointMass.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.PropertyByName"></a>

### GenericPointMass.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.RemoveParameter"></a>

### GenericPointMass.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

