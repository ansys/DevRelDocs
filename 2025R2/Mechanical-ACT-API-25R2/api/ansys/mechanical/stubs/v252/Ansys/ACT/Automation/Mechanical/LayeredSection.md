# `LayeredSection`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.LayeredSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.LayeredSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LayeredSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LayeredSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#LayeredSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LayeredSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LayeredSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#LayeredSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LayeredSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#LayeredSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#LayeredSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#LayeredSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#LayeredSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LayeredSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LayeredSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#LayeredSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LayeredSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LayeredSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#LayeredSection.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#LayeredSection.Comments)                                         | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#LayeredSection.CoordinateSystem)                         | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#LayeredSection.DataModelObjectCategory)           | Gets the current DataModelObject’s category.                  |
| [`Figures`](#LayeredSection.Figures)                                           | Gets the list of associated figures.                          |
| [`Images`](#LayeredSection.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#LayeredSection.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](#LayeredSection.LayerToDisplay)                             | Gets or sets the LayerToDisplay.                              |
| [`LayeredSectionMembraneOffset`](#LayeredSection.LayeredSectionMembraneOffset) | Gets or sets the LayeredSectionMembraneOffset.                |
| [`Layers`](#LayeredSection.Layers)                                             | Returns the Layers worksheet associated with LayeredSection   |
| [`Location`](#LayeredSection.Location)                                         | Gets or sets the Location.                                    |
| [`NonlinearEffects`](#LayeredSection.NonlinearEffects)                         | Gets or sets the NonlinearEffects.                            |
| [`OffsetType`](#LayeredSection.OffsetType)                                     | Gets or sets the OffsetType.                                  |
| [`Properties`](#LayeredSection.Properties)                                     | Gets the list of properties for this object.                  |
| [`Suppressed`](#LayeredSection.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#LayeredSection.ThermalStrainEffects)                 | Gets or sets the ThermalStrainEffects.                        |
| [`TotalMass`](#LayeredSection.TotalMass)                                       | Gets the TotalMass.                                           |
| [`TotalThickness`](#LayeredSection.TotalThickness)                             | Gets the TotalThickness.                                      |
| [`VisibleProperties`](#LayeredSection.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LayeredSection.Children"></a>

### *property* LayeredSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Comments"></a>

### *property* LayeredSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.CoordinateSystem"></a>

### *property* LayeredSection.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.
Accepts/Returns None for Body Coordinate System

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.DataModelObjectCategory"></a>

### *property* LayeredSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Figures"></a>

### *property* LayeredSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Images"></a>

### *property* LayeredSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.InternalObject"></a>

### *property* LayeredSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSThicknessAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.LayerToDisplay"></a>

### *property* LayeredSection.LayerToDisplay *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.LayeredSectionMembraneOffset"></a>

### *property* LayeredSection.LayeredSectionMembraneOffset *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayeredSectionMembraneOffset.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Layers"></a>

### *property* LayeredSection.Layers *: [Ansys.ACT.Interfaces.Common.IWorksheet](../../Interfaces/Common/IWorksheet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.IWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Layers worksheet associated with LayeredSection

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Location"></a>

### *property* LayeredSection.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.NonlinearEffects"></a>

### *property* LayeredSection.NonlinearEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.OffsetType"></a>

### *property* LayeredSection.OffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetType.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Properties"></a>

### *property* LayeredSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Suppressed"></a>

### *property* LayeredSection.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.ThermalStrainEffects"></a>

### *property* LayeredSection.ThermalStrainEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.TotalMass"></a>

### *property* LayeredSection.TotalMass *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalMass.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.TotalThickness"></a>

### *property* LayeredSection.TotalThickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalThickness.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.VisibleProperties"></a>

### *property* LayeredSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LayeredSection.Activate"></a>

### LayeredSection.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.AddComment"></a>

### LayeredSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.AddFigure"></a>

### LayeredSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.AddImage"></a>

### LayeredSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.CopyTo"></a>

### LayeredSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.CreateParameter"></a>

### LayeredSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Delete"></a>

### LayeredSection.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Duplicate"></a>

### LayeredSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.GetChildren"></a>

### LayeredSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.GetParameter"></a>

### LayeredSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.GroupAllSimilarChildren"></a>

### LayeredSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.GroupSimilarObjects"></a>

### LayeredSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.PropertyByAPIName"></a>

### LayeredSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.PropertyByName"></a>

### LayeredSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.RemoveParameter"></a>

### LayeredSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

