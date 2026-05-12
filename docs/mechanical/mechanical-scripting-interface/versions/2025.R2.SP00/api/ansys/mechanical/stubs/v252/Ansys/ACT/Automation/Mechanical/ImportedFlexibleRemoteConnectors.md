# `ImportedFlexibleRemoteConnectors`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedFlexibleRemoteConnectors"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedFlexibleRemoteConnectors

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedFlexibleRemoteConnectors.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedFlexibleRemoteConnectors.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedFlexibleRemoteConnectors.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedFlexibleRemoteConnectors.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedFlexibleRemoteConnectors.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedFlexibleRemoteConnectors.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedFlexibleRemoteConnectors.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedFlexibleRemoteConnectors.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedFlexibleRemoteConnectors.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedFlexibleRemoteConnectors.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedFlexibleRemoteConnectors.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedFlexibleRemoteConnectors.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedFlexibleRemoteConnectors.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedFlexibleRemoteConnectors.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedFlexibleRemoteConnectors.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedFlexibleRemoteConnectors.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedFlexibleRemoteConnectors.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedFlexibleRemoteConnectors.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedFlexibleRemoteConnectors.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedFlexibleRemoteConnectors.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedFlexibleRemoteConnectors.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedFlexibleRemoteConnectors.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedFlexibleRemoteConnectors.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedFlexibleRemoteConnectors.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedFlexibleRemoteConnectors.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedFlexibleRemoteConnectors.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedFlexibleRemoteConnectors.Children"></a>

### *property* ImportedFlexibleRemoteConnectors.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Comments"></a>

### *property* ImportedFlexibleRemoteConnectors.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Count"></a>

### *property* ImportedFlexibleRemoteConnectors.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.DataModelObjectCategory"></a>

### *property* ImportedFlexibleRemoteConnectors.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Figures"></a>

### *property* ImportedFlexibleRemoteConnectors.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Images"></a>

### *property* ImportedFlexibleRemoteConnectors.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.InternalObject"></a>

### *property* ImportedFlexibleRemoteConnectors.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Properties"></a>

### *property* ImportedFlexibleRemoteConnectors.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.ReadOnly"></a>

### *property* ImportedFlexibleRemoteConnectors.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Suppressed"></a>

### *property* ImportedFlexibleRemoteConnectors.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.VisibleProperties"></a>

### *property* ImportedFlexibleRemoteConnectors.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedFlexibleRemoteConnectors.Activate"></a>

### ImportedFlexibleRemoteConnectors.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddComment"></a>

### ImportedFlexibleRemoteConnectors.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddFigure"></a>

### ImportedFlexibleRemoteConnectors.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddImage"></a>

### ImportedFlexibleRemoteConnectors.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.CopyTo"></a>

### ImportedFlexibleRemoteConnectors.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.CreateParameter"></a>

### ImportedFlexibleRemoteConnectors.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Delete"></a>

### ImportedFlexibleRemoteConnectors.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Duplicate"></a>

### ImportedFlexibleRemoteConnectors.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetChildren"></a>

### ImportedFlexibleRemoteConnectors.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetParameter"></a>

### ImportedFlexibleRemoteConnectors.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren"></a>

### ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GroupSimilarObjects"></a>

### ImportedFlexibleRemoteConnectors.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PropertyByAPIName"></a>

### ImportedFlexibleRemoteConnectors.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PropertyByName"></a>

### ImportedFlexibleRemoteConnectors.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveParameter"></a>

### ImportedFlexibleRemoteConnectors.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

