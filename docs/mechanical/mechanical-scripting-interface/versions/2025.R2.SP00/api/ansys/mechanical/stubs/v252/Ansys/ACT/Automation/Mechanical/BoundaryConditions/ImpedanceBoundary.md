# `ImpedanceBoundary`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImpedanceBoundary"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImpedanceBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImpedanceBoundary.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImpedanceBoundary.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImpedanceBoundary.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImpedanceBoundary.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImpedanceBoundary.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImpedanceBoundary.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImpedanceBoundary.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImpedanceBoundary.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImpedanceBoundary.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImpedanceBoundary.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImpedanceBoundary.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImpedanceBoundary.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImpedanceBoundary.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ImpedanceBoundary.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ImpedanceBoundary.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImpedanceBoundary.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImpedanceBoundary.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImpedanceBoundary.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImpedanceBoundary.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImpedanceBoundary.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImpedanceBoundary.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImpedanceBoundary.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImpedanceBoundary.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ImpedanceBoundary.Location)                               | Gets or sets the Location.                                    |
| [`MaterialImpedance`](#ImpedanceBoundary.MaterialImpedance)             | Gets or sets the MaterialImpedance.                           |
| [`Properties`](#ImpedanceBoundary.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImpedanceBoundary.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ReferencePressure`](#ImpedanceBoundary.ReferencePressure)             | Gets or sets the ReferencePressure.                           |
| [`ReferenceVelocity`](#ImpedanceBoundary.ReferenceVelocity)             | Gets or sets the ReferenceVelocity.                           |
| [`SharedRefBody`](#ImpedanceBoundary.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#ImpedanceBoundary.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImpedanceBoundary.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImpedanceBoundary.Children"></a>

### *property* ImpedanceBoundary.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Comments"></a>

### *property* ImpedanceBoundary.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.DataModelObjectCategory"></a>

### *property* ImpedanceBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Figures"></a>

### *property* ImpedanceBoundary.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Images"></a>

### *property* ImpedanceBoundary.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.InternalObject"></a>

### *property* ImpedanceBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Location"></a>

### *property* ImpedanceBoundary.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.MaterialImpedance"></a>

### *property* ImpedanceBoundary.MaterialImpedance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialImpedance.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Properties"></a>

### *property* ImpedanceBoundary.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ReadOnly"></a>

### *property* ImpedanceBoundary.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ReferencePressure"></a>

### *property* ImpedanceBoundary.ReferencePressure *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePressure.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ReferenceVelocity"></a>

### *property* ImpedanceBoundary.ReferenceVelocity *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceVelocity.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.SharedRefBody"></a>

### *property* ImpedanceBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Suppressed"></a>

### *property* ImpedanceBoundary.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.VisibleProperties"></a>

### *property* ImpedanceBoundary.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImpedanceBoundary.Activate"></a>

### ImpedanceBoundary.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.AddComment"></a>

### ImpedanceBoundary.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.AddFigure"></a>

### ImpedanceBoundary.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.AddImage"></a>

### ImpedanceBoundary.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.CopyTo"></a>

### ImpedanceBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.CreateParameter"></a>

### ImpedanceBoundary.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Delete"></a>

### ImpedanceBoundary.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Duplicate"></a>

### ImpedanceBoundary.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetChildren"></a>

### ImpedanceBoundary.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetParameter"></a>

### ImpedanceBoundary.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GroupAllSimilarChildren"></a>

### ImpedanceBoundary.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GroupSimilarObjects"></a>

### ImpedanceBoundary.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.PromoteToNamedSelection"></a>

### ImpedanceBoundary.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.PropertyByAPIName"></a>

### ImpedanceBoundary.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.PropertyByName"></a>

### ImpedanceBoundary.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.RemoveParameter"></a>

### ImpedanceBoundary.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

