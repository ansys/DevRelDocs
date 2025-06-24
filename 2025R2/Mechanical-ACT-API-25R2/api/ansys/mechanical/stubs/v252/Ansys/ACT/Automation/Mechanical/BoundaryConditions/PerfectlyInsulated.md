# `PerfectlyInsulated`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PerfectlyInsulated"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PerfectlyInsulated

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PerfectlyInsulated.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PerfectlyInsulated.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PerfectlyInsulated.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PerfectlyInsulated.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PerfectlyInsulated.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PerfectlyInsulated.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PerfectlyInsulated.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PerfectlyInsulated.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PerfectlyInsulated.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PerfectlyInsulated.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PerfectlyInsulated.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PerfectlyInsulated.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PerfectlyInsulated.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#PerfectlyInsulated.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#PerfectlyInsulated.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PerfectlyInsulated.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PerfectlyInsulated.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PerfectlyInsulated.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PerfectlyInsulated.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PerfectlyInsulated.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineAs`](#PerfectlyInsulated.DefineAs)                               | Gets or sets the DefineAs.                                    |
| [`Figures`](#PerfectlyInsulated.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PerfectlyInsulated.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PerfectlyInsulated.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PerfectlyInsulated.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#PerfectlyInsulated.Magnitude)                             | Gets the Magnitude.                                           |
| [`Properties`](#PerfectlyInsulated.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PerfectlyInsulated.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#PerfectlyInsulated.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#PerfectlyInsulated.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PerfectlyInsulated.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PerfectlyInsulated.Children"></a>

### *property* PerfectlyInsulated.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Comments"></a>

### *property* PerfectlyInsulated.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.DataModelObjectCategory"></a>

### *property* PerfectlyInsulated.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.DefineAs"></a>

### *property* PerfectlyInsulated.DefineAs *: [Ansys.Mechanical.DataModel.Enums.LoadVariationType](../../../../Mechanical/DataModel/Enums/LoadVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineAs.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Figures"></a>

### *property* PerfectlyInsulated.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Images"></a>

### *property* PerfectlyInsulated.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.InternalObject"></a>

### *property* PerfectlyInsulated.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Location"></a>

### *property* PerfectlyInsulated.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Magnitude"></a>

### *property* PerfectlyInsulated.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Properties"></a>

### *property* PerfectlyInsulated.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.ReadOnly"></a>

### *property* PerfectlyInsulated.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.SharedRefBody"></a>

### *property* PerfectlyInsulated.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Suppressed"></a>

### *property* PerfectlyInsulated.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.VisibleProperties"></a>

### *property* PerfectlyInsulated.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PerfectlyInsulated.Activate"></a>

### PerfectlyInsulated.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.AddComment"></a>

### PerfectlyInsulated.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.AddFigure"></a>

### PerfectlyInsulated.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.AddImage"></a>

### PerfectlyInsulated.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.CopyTo"></a>

### PerfectlyInsulated.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.CreateParameter"></a>

### PerfectlyInsulated.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Delete"></a>

### PerfectlyInsulated.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Duplicate"></a>

### PerfectlyInsulated.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetChildren"></a>

### PerfectlyInsulated.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetParameter"></a>

### PerfectlyInsulated.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GroupAllSimilarChildren"></a>

### PerfectlyInsulated.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GroupSimilarObjects"></a>

### PerfectlyInsulated.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.PromoteToNamedSelection"></a>

### PerfectlyInsulated.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.PropertyByAPIName"></a>

### PerfectlyInsulated.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.PropertyByName"></a>

### PerfectlyInsulated.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.RemoveParameter"></a>

### PerfectlyInsulated.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

