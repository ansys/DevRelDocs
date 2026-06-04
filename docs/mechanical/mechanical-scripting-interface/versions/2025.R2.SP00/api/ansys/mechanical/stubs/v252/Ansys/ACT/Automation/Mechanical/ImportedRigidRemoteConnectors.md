# `ImportedRigidRemoteConnectors`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedRigidRemoteConnectors"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedRigidRemoteConnectors

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedRigidRemoteConnectors.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedRigidRemoteConnectors.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedRigidRemoteConnectors.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedRigidRemoteConnectors.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedRigidRemoteConnectors.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedRigidRemoteConnectors.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedRigidRemoteConnectors.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedRigidRemoteConnectors.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedRigidRemoteConnectors.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedRigidRemoteConnectors.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedRigidRemoteConnectors.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedRigidRemoteConnectors.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedRigidRemoteConnectors.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedRigidRemoteConnectors.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedRigidRemoteConnectors.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedRigidRemoteConnectors.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedRigidRemoteConnectors.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedRigidRemoteConnectors.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedRigidRemoteConnectors.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedRigidRemoteConnectors.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedRigidRemoteConnectors.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedRigidRemoteConnectors.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedRigidRemoteConnectors.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedRigidRemoteConnectors.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedRigidRemoteConnectors.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedRigidRemoteConnectors.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedRigidRemoteConnectors.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedRigidRemoteConnectors.Children"></a>

### *property* ImportedRigidRemoteConnectors.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Comments"></a>

### *property* ImportedRigidRemoteConnectors.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Count"></a>

### *property* ImportedRigidRemoteConnectors.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.DataModelObjectCategory"></a>

### *property* ImportedRigidRemoteConnectors.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Figures"></a>

### *property* ImportedRigidRemoteConnectors.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Images"></a>

### *property* ImportedRigidRemoteConnectors.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.InternalObject"></a>

### *property* ImportedRigidRemoteConnectors.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Properties"></a>

### *property* ImportedRigidRemoteConnectors.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.ReadOnly"></a>

### *property* ImportedRigidRemoteConnectors.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Suppressed"></a>

### *property* ImportedRigidRemoteConnectors.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.VisibleProperties"></a>

### *property* ImportedRigidRemoteConnectors.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedRigidRemoteConnectors.Activate"></a>

### ImportedRigidRemoteConnectors.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddComment"></a>

### ImportedRigidRemoteConnectors.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddFigure"></a>

### ImportedRigidRemoteConnectors.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddImage"></a>

### ImportedRigidRemoteConnectors.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.CopyTo"></a>

### ImportedRigidRemoteConnectors.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.CreateParameter"></a>

### ImportedRigidRemoteConnectors.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Delete"></a>

### ImportedRigidRemoteConnectors.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Duplicate"></a>

### ImportedRigidRemoteConnectors.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetChildren"></a>

### ImportedRigidRemoteConnectors.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetParameter"></a>

### ImportedRigidRemoteConnectors.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GroupAllSimilarChildren"></a>

### ImportedRigidRemoteConnectors.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GroupSimilarObjects"></a>

### ImportedRigidRemoteConnectors.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.PropertyByAPIName"></a>

### ImportedRigidRemoteConnectors.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.PropertyByName"></a>

### ImportedRigidRemoteConnectors.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveParameter"></a>

### ImportedRigidRemoteConnectors.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

