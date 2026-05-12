# `Thickness`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Thickness"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Thickness

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Thickness.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Thickness.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Thickness.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Thickness.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Thickness.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Thickness.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Thickness.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Thickness.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Thickness.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Thickness.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Thickness.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Thickness.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Thickness.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Thickness.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Thickness.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Thickness.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Thickness.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#Thickness.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Thickness.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Thickness.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](#Thickness.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#Thickness.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#Thickness.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Location`](#Thickness.Location)                                       | Gets or sets the Location.                                    |
| [`MembraneOffset`](#Thickness.MembraneOffset)                           | Gets or sets the MembraneOffset.                              |
| [`NumberOfSegments`](#Thickness.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`OffsetType`](#Thickness.OffsetType)                                   | Gets or sets the OffsetType.                                  |
| [`Properties`](#Thickness.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#Thickness.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Thickness.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#Thickness.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#Thickness.ScopeMode)                                     | Gets the ScopeMode.                                           |
| [`Suppressed`](#Thickness.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`ThicknessField`](#Thickness.ThicknessField)                           | Gets or sets the ThicknessField.                              |
| [`VisibleProperties`](#Thickness.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#Thickness.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="Thickness.Children"></a>

### *property* Thickness.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Comments"></a>

### *property* Thickness.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.DataModelObjectCategory"></a>

### *property* Thickness.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Figures"></a>

### *property* Thickness.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Images"></a>

### *property* Thickness.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.IndependentVariable"></a>

### *property* Thickness.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.InternalObject"></a>

### *property* Thickness.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSThicknessAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Location"></a>

### *property* Thickness.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.MembraneOffset"></a>

### *property* Thickness.MembraneOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MembraneOffset.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.NumberOfSegments"></a>

### *property* Thickness.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.OffsetType"></a>

### *property* Thickness.OffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetType.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Properties"></a>

### *property* Thickness.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.RangeMaximum"></a>

### *property* Thickness.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.RangeMinimum"></a>

### *property* Thickness.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ReadOnly"></a>

### *property* Thickness.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ScopeMode"></a>

### *property* Thickness.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Suppressed"></a>

### *property* Thickness.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ThicknessField"></a>

### *property* Thickness.ThicknessField *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessField.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.VisibleProperties"></a>

### *property* Thickness.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.XYZFunctionCoordinateSystem"></a>

### *property* Thickness.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Thickness.Activate"></a>

### Thickness.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.AddComment"></a>

### Thickness.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.AddFigure"></a>

### Thickness.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.AddImage"></a>

### Thickness.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Thickness.CopyTo"></a>

### Thickness.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.CreateParameter"></a>

### Thickness.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Delete"></a>

### Thickness.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Duplicate"></a>

### Thickness.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetChildren"></a>

### Thickness.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetParameter"></a>

### Thickness.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GroupAllSimilarChildren"></a>

### Thickness.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GroupSimilarObjects"></a>

### Thickness.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.PropertyByAPIName"></a>

### Thickness.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Thickness.PropertyByName"></a>

### Thickness.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.RemoveParameter"></a>

### Thickness.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

