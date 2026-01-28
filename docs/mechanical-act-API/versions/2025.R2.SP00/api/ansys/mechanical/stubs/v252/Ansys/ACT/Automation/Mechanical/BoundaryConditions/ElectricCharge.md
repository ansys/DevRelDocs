# `ElectricCharge`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElectricCharge"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElectricCharge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElectricCharge.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElectricCharge.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ElectricCharge.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElectricCharge.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElectricCharge.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ElectricCharge.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElectricCharge.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ElectricCharge.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElectricCharge.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ElectricCharge.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElectricCharge.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElectricCharge.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElectricCharge.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ElectricCharge.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ElectricCharge.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElectricCharge.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElectricCharge.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ElectricCharge.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ElectricCharge.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ElectricCharge.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ElectricCharge.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ElectricCharge.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ElectricCharge.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ElectricCharge.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#ElectricCharge.Magnitude)                             | Gets or sets the Magnitude.                                   |
| [`Properties`](#ElectricCharge.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ElectricCharge.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#ElectricCharge.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#ElectricCharge.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ElectricCharge.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`VoltageCoupling`](#ElectricCharge.VoltageCoupling)                 | Gets or sets the VoltageCoupling.                             |

<a id="property-detail"></a>

## Property detail

<a id="ElectricCharge.Children"></a>

### *property* ElectricCharge.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Comments"></a>

### *property* ElectricCharge.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.DataModelObjectCategory"></a>

### *property* ElectricCharge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Figures"></a>

### *property* ElectricCharge.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Images"></a>

### *property* ElectricCharge.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.InternalObject"></a>

### *property* ElectricCharge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Location"></a>

### *property* ElectricCharge.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Magnitude"></a>

### *property* ElectricCharge.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Properties"></a>

### *property* ElectricCharge.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.ReadOnly"></a>

### *property* ElectricCharge.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.SharedRefBody"></a>

### *property* ElectricCharge.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Suppressed"></a>

### *property* ElectricCharge.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.VisibleProperties"></a>

### *property* ElectricCharge.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.VoltageCoupling"></a>

### *property* ElectricCharge.VoltageCoupling *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](Coupling.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageCoupling.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectricCharge.Activate"></a>

### ElectricCharge.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.AddComment"></a>

### ElectricCharge.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.AddFigure"></a>

### ElectricCharge.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.AddImage"></a>

### ElectricCharge.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.CopyTo"></a>

### ElectricCharge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.CreateParameter"></a>

### ElectricCharge.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Delete"></a>

### ElectricCharge.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Duplicate"></a>

### ElectricCharge.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetChildren"></a>

### ElectricCharge.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetParameter"></a>

### ElectricCharge.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GroupAllSimilarChildren"></a>

### ElectricCharge.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GroupSimilarObjects"></a>

### ElectricCharge.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.PromoteToNamedSelection"></a>

### ElectricCharge.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.PropertyByAPIName"></a>

### ElectricCharge.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.PropertyByName"></a>

### ElectricCharge.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.RemoveParameter"></a>

### ElectricCharge.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

