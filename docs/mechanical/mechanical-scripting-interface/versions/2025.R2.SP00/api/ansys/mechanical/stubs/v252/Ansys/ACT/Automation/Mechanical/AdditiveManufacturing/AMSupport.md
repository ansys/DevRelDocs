# `AMSupport`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AMSupport.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#AMSupport.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#AMSupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AMSupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AMSupport.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AMSupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AMSupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AMSupport.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AMSupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AMSupport.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AMSupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AMSupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMSupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#AMSupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AMSupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AMSupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AMSupport.Children)                                             | Gets the list of children.                                    |
| [`Comments`](#AMSupport.Comments)                                             | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AMSupport.DataModelObjectCategory)               | Gets the current DataModelObject’s category.                  |
| [`DensityMultiple`](#AMSupport.DensityMultiple)                               | Gets or sets the DensityMultiple.                             |
| [`ElasticModulusMultipleInX`](#AMSupport.ElasticModulusMultipleInX)           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#AMSupport.ElasticModulusMultipleInY)           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#AMSupport.ElasticModulusMultipleInZ)           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`Figures`](#AMSupport.Figures)                                               | Gets the list of associated figures.                          |
| [`Images`](#AMSupport.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#AMSupport.InternalObject)                                 | Gets the internal object. For advanced usage only.            |
| [`MaterialMultiplier`](#AMSupport.MaterialMultiplier)                         | Gets or sets the MaterialMultiplier.                          |
| [`MultiplierEntry`](#AMSupport.MultiplierEntry)                               | Gets or sets the MultiplierEntry.                             |
| [`Properties`](#AMSupport.Properties)                                         | Gets the list of properties for this object.                  |
| [`ShearModulusMultipleInXY`](#AMSupport.ShearModulusMultipleInXY)             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#AMSupport.ShearModulusMultipleInXZ)             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#AMSupport.ShearModulusMultipleInYZ)             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`SupportType`](#AMSupport.SupportType)                                       | Gets or sets the SupportType.                                 |
| [`ThermalConductivityMultipleInX`](#AMSupport.ThermalConductivityMultipleInX) | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#AMSupport.ThermalConductivityMultipleInY) | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#AMSupport.ThermalConductivityMultipleInZ) | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`VisibleProperties`](#AMSupport.VisibleProperties)                           | Gets the list of properties that are visible for this object. |
| [`Volume`](#AMSupport.Volume)                                                 | Gets or sets the Volume.                                      |
| [`WallSpacing`](#AMSupport.WallSpacing)                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#AMSupport.WallThickness)                                   | Gets or sets the WallThickness.                               |

<a id="property-detail"></a>

## Property detail

<a id="AMSupport.Children"></a>

### *property* AMSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Comments"></a>

### *property* AMSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.DataModelObjectCategory"></a>

### *property* AMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.DensityMultiple"></a>

### *property* AMSupport.DensityMultiple *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ElasticModulusMultipleInX"></a>

### *property* AMSupport.ElasticModulusMultipleInX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ElasticModulusMultipleInY"></a>

### *property* AMSupport.ElasticModulusMultipleInY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ElasticModulusMultipleInZ"></a>

### *property* AMSupport.ElasticModulusMultipleInZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Figures"></a>

### *property* AMSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Images"></a>

### *property* AMSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.InternalObject"></a>

### *property* AMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.MaterialMultiplier"></a>

### *property* AMSupport.MaterialMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.MultiplierEntry"></a>

### *property* AMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Properties"></a>

### *property* AMSupport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ShearModulusMultipleInXY"></a>

### *property* AMSupport.ShearModulusMultipleInXY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ShearModulusMultipleInXZ"></a>

### *property* AMSupport.ShearModulusMultipleInXZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ShearModulusMultipleInYZ"></a>

### *property* AMSupport.ShearModulusMultipleInYZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.SupportType"></a>

### *property* AMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ThermalConductivityMultipleInX"></a>

### *property* AMSupport.ThermalConductivityMultipleInX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ThermalConductivityMultipleInY"></a>

### *property* AMSupport.ThermalConductivityMultipleInY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ThermalConductivityMultipleInZ"></a>

### *property* AMSupport.ThermalConductivityMultipleInZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.VisibleProperties"></a>

### *property* AMSupport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Volume"></a>

### *property* AMSupport.Volume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.WallSpacing"></a>

### *property* AMSupport.WallSpacing *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.WallThickness"></a>

### *property* AMSupport.WallThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMSupport.Activate"></a>

### AMSupport.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddCommandSnippet"></a>

### AMSupport.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddComment"></a>

### AMSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddFigure"></a>

### AMSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddImage"></a>

### AMSupport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.CopyTo"></a>

### AMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.CreateParameter"></a>

### AMSupport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Delete"></a>

### AMSupport.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Duplicate"></a>

### AMSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetChildren"></a>

### AMSupport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetParameter"></a>

### AMSupport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GroupAllSimilarChildren"></a>

### AMSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GroupSimilarObjects"></a>

### AMSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.PropertyByAPIName"></a>

### AMSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.PropertyByName"></a>

### AMSupport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.RemoveParameter"></a>

### AMSupport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

