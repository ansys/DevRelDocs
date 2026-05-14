# `AcousticImpedanceSheet`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceSheet"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceSheet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticImpedanceSheet.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticImpedanceSheet.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticImpedanceSheet.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticImpedanceSheet.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticImpedanceSheet.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticImpedanceSheet.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticImpedanceSheet.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticImpedanceSheet.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticImpedanceSheet.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticImpedanceSheet.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticImpedanceSheet.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticImpedanceSheet.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticImpedanceSheet.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticImpedanceSheet.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticImpedanceSheet.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticImpedanceSheet.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticImpedanceSheet.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticImpedanceSheet.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticImpedanceSheet.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticImpedanceSheet.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticImpedanceSheet.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticImpedanceSheet.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticImpedanceSheet.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticImpedanceSheet.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#AcousticImpedanceSheet.Properties)                           | Gets the list of properties for this object.                  |
| [`Reactance`](#AcousticImpedanceSheet.Reactance)                             | Gets or sets the Reactance.                                   |
| [`ReadOnly`](#AcousticImpedanceSheet.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Resistance`](#AcousticImpedanceSheet.Resistance)                           | Gets or sets the Resistance.                                  |
| [`SharedRefBody`](#AcousticImpedanceSheet.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#AcousticImpedanceSheet.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticImpedanceSheet.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticImpedanceSheet.Children"></a>

### *property* AcousticImpedanceSheet.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Comments"></a>

### *property* AcousticImpedanceSheet.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.DataModelObjectCategory"></a>

### *property* AcousticImpedanceSheet.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Figures"></a>

### *property* AcousticImpedanceSheet.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Images"></a>

### *property* AcousticImpedanceSheet.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.InternalObject"></a>

### *property* AcousticImpedanceSheet.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Location"></a>

### *property* AcousticImpedanceSheet.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Properties"></a>

### *property* AcousticImpedanceSheet.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Reactance"></a>

### *property* AcousticImpedanceSheet.Reactance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Reactance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.ReadOnly"></a>

### *property* AcousticImpedanceSheet.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Resistance"></a>

### *property* AcousticImpedanceSheet.Resistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Resistance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.SharedRefBody"></a>

### *property* AcousticImpedanceSheet.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Suppressed"></a>

### *property* AcousticImpedanceSheet.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.VisibleProperties"></a>

### *property* AcousticImpedanceSheet.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticImpedanceSheet.Activate"></a>

### AcousticImpedanceSheet.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.AddComment"></a>

### AcousticImpedanceSheet.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.AddFigure"></a>

### AcousticImpedanceSheet.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.AddImage"></a>

### AcousticImpedanceSheet.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.CopyTo"></a>

### AcousticImpedanceSheet.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.CreateParameter"></a>

### AcousticImpedanceSheet.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Delete"></a>

### AcousticImpedanceSheet.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Duplicate"></a>

### AcousticImpedanceSheet.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetChildren"></a>

### AcousticImpedanceSheet.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetParameter"></a>

### AcousticImpedanceSheet.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GroupAllSimilarChildren"></a>

### AcousticImpedanceSheet.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GroupSimilarObjects"></a>

### AcousticImpedanceSheet.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.PromoteToNamedSelection"></a>

### AcousticImpedanceSheet.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.PropertyByAPIName"></a>

### AcousticImpedanceSheet.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.PropertyByName"></a>

### AcousticImpedanceSheet.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.RemoveParameter"></a>

### AcousticImpedanceSheet.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

