# `CompressionOnlySupport`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.CompressionOnlySupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.CompressionOnlySupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompressionOnlySupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CompressionOnlySupport.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CompressionOnlySupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CompressionOnlySupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CompressionOnlySupport.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CompressionOnlySupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CompressionOnlySupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CompressionOnlySupport.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CompressionOnlySupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CompressionOnlySupport.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CompressionOnlySupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CompressionOnlySupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CompressionOnlySupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#CompressionOnlySupport.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#CompressionOnlySupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CompressionOnlySupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CompressionOnlySupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AutomaticNormalStiffness`](#CompressionOnlySupport.AutomaticNormalStiffness)   | Gets or sets the AutomaticNormalStiffness.                    |
| [`Children`](#CompressionOnlySupport.Children)                                   | Gets the list of children.                                    |
| [`Comments`](#CompressionOnlySupport.Comments)                                   | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CompressionOnlySupport.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CompressionOnlySupport.Figures)                                     | Gets the list of associated figures.                          |
| [`Images`](#CompressionOnlySupport.Images)                                       | Gets the list of associated images.                           |
| [`InternalObject`](#CompressionOnlySupport.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`Location`](#CompressionOnlySupport.Location)                                   | Gets or sets the Location.                                    |
| [`NormalStiffnessFactor`](#CompressionOnlySupport.NormalStiffnessFactor)         | Gets or sets the NormalStiffnessFactor.                       |
| [`Properties`](#CompressionOnlySupport.Properties)                               | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CompressionOnlySupport.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#CompressionOnlySupport.SharedRefBody)                         | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#CompressionOnlySupport.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`UpdateStiffness`](#CompressionOnlySupport.UpdateStiffness)                     | Gets or sets the UpdateStiffness.                             |
| [`VisibleProperties`](#CompressionOnlySupport.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompressionOnlySupport.AutomaticNormalStiffness"></a>

### *property* CompressionOnlySupport.AutomaticNormalStiffness *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNormalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Children"></a>

### *property* CompressionOnlySupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Comments"></a>

### *property* CompressionOnlySupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.DataModelObjectCategory"></a>

### *property* CompressionOnlySupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Figures"></a>

### *property* CompressionOnlySupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Images"></a>

### *property* CompressionOnlySupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.InternalObject"></a>

### *property* CompressionOnlySupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Location"></a>

### *property* CompressionOnlySupport.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.NormalStiffnessFactor"></a>

### *property* CompressionOnlySupport.NormalStiffnessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Properties"></a>

### *property* CompressionOnlySupport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.ReadOnly"></a>

### *property* CompressionOnlySupport.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.SharedRefBody"></a>

### *property* CompressionOnlySupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Suppressed"></a>

### *property* CompressionOnlySupport.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.UpdateStiffness"></a>

### *property* CompressionOnlySupport.UpdateStiffness *: [Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness](../../../../Mechanical/DataModel/Enums/UpdateContactStiffness.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateStiffness.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.VisibleProperties"></a>

### *property* CompressionOnlySupport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompressionOnlySupport.Activate"></a>

### CompressionOnlySupport.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AddComment"></a>

### CompressionOnlySupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AddFigure"></a>

### CompressionOnlySupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AddImage"></a>

### CompressionOnlySupport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.CopyTo"></a>

### CompressionOnlySupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.CreateParameter"></a>

### CompressionOnlySupport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Delete"></a>

### CompressionOnlySupport.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Duplicate"></a>

### CompressionOnlySupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetChildren"></a>

### CompressionOnlySupport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetParameter"></a>

### CompressionOnlySupport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GroupAllSimilarChildren"></a>

### CompressionOnlySupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GroupSimilarObjects"></a>

### CompressionOnlySupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.PromoteToNamedSelection"></a>

### CompressionOnlySupport.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.PropertyByAPIName"></a>

### CompressionOnlySupport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.PropertyByName"></a>

### CompressionOnlySupport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.RemoveParameter"></a>

### CompressionOnlySupport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

