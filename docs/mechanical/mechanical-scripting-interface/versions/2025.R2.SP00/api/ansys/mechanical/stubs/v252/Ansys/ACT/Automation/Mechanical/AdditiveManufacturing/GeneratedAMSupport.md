# `GeneratedAMSupport`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeneratedAMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GeneratedAMSupport.Activate)                                                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#GeneratedAMSupport.AddCommandSnippet)                                             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#GeneratedAMSupport.AddComment)                                                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeneratedAMSupport.AddFigure)                                                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeneratedAMSupport.AddImage)                                                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#GeneratedAMSupport.ClearGeneratedData)                                           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#GeneratedAMSupport.CopyTo)                                                                   | Copies all visible properties from this object to another.                        |
| [`CreateNamedSelectionOfGeneratedElements`](#GeneratedAMSupport.CreateNamedSelectionOfGeneratedElements) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#GeneratedAMSupport.CreateParameter)                                                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#GeneratedAMSupport.Delete)                                                                   | Run the Delete action.                                                            |
| [`Duplicate`](#GeneratedAMSupport.Duplicate)                                                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateSupportBodies`](#GeneratedAMSupport.GenerateSupportBodies)                                     | Generate Support Bodies.                                                          |
| [`GetChildren`](#GeneratedAMSupport.GetChildren)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetGeneratedBody`](#GeneratedAMSupport.GetGeneratedBody)                                               | Returns the generated body object                                                 |
| [`GetParameter`](#GeneratedAMSupport.GetParameter)                                                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GeneratedAMSupport.GroupAllSimilarChildren)                                 | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeneratedAMSupport.GroupSimilarObjects)                                         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#GeneratedAMSupport.PropertyByAPIName)                                             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GeneratedAMSupport.PropertyByName)                                                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GeneratedAMSupport.RemoveParameter)                                                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#GeneratedAMSupport.Children)                                             | Gets the list of children.                                    |
| [`Comments`](#GeneratedAMSupport.Comments)                                             | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GeneratedAMSupport.DataModelObjectCategory)               | Gets the current DataModelObject’s category.                  |
| [`DensityMultiple`](#GeneratedAMSupport.DensityMultiple)                               | Gets or sets the DensityMultiple.                             |
| [`ElasticModulusMultipleInX`](#GeneratedAMSupport.ElasticModulusMultipleInX)           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#GeneratedAMSupport.ElasticModulusMultipleInY)           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#GeneratedAMSupport.ElasticModulusMultipleInZ)           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`Figures`](#GeneratedAMSupport.Figures)                                               | Gets the list of associated figures.                          |
| [`Images`](#GeneratedAMSupport.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#GeneratedAMSupport.InternalObject)                                 | Gets the internal object. For advanced usage only.            |
| [`Location`](#GeneratedAMSupport.Location)                                             | Gets or sets the Location.                                    |
| [`MaterialMultiplier`](#GeneratedAMSupport.MaterialMultiplier)                         | Gets or sets the MaterialMultiplier.                          |
| [`Mode`](#GeneratedAMSupport.Mode)                                                     | Gets or sets the Mode.                                        |
| [`MultiplierEntry`](#GeneratedAMSupport.MultiplierEntry)                               | Gets or sets the MultiplierEntry.                             |
| [`Properties`](#GeneratedAMSupport.Properties)                                         | Gets the list of properties for this object.                  |
| [`ShearModulusMultipleInXY`](#GeneratedAMSupport.ShearModulusMultipleInXY)             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#GeneratedAMSupport.ShearModulusMultipleInXZ)             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#GeneratedAMSupport.ShearModulusMultipleInYZ)             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`SupportType`](#GeneratedAMSupport.SupportType)                                       | Gets or sets the SupportType.                                 |
| [`Suppressed`](#GeneratedAMSupport.Suppressed)                                         | Gets or sets the Suppressed state.                            |
| [`ThermalConductivityMultipleInX`](#GeneratedAMSupport.ThermalConductivityMultipleInX) | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#GeneratedAMSupport.ThermalConductivityMultipleInY) | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#GeneratedAMSupport.ThermalConductivityMultipleInZ) | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`VisibleProperties`](#GeneratedAMSupport.VisibleProperties)                           | Gets the list of properties that are visible for this object. |
| [`Volume`](#GeneratedAMSupport.Volume)                                                 | Gets or sets the Volume.                                      |
| [`WallSpacing`](#GeneratedAMSupport.WallSpacing)                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#GeneratedAMSupport.WallThickness)                                   | Gets or sets the WallThickness.                               |

<a id="property-detail"></a>

## Property detail

<a id="GeneratedAMSupport.Children"></a>

### *property* GeneratedAMSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Comments"></a>

### *property* GeneratedAMSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.DataModelObjectCategory"></a>

### *property* GeneratedAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.DensityMultiple"></a>

### *property* GeneratedAMSupport.DensityMultiple *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ElasticModulusMultipleInX"></a>

### *property* GeneratedAMSupport.ElasticModulusMultipleInX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ElasticModulusMultipleInY"></a>

### *property* GeneratedAMSupport.ElasticModulusMultipleInY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ElasticModulusMultipleInZ"></a>

### *property* GeneratedAMSupport.ElasticModulusMultipleInZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Figures"></a>

### *property* GeneratedAMSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Images"></a>

### *property* GeneratedAMSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.InternalObject"></a>

### *property* GeneratedAMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Location"></a>

### *property* GeneratedAMSupport.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.MaterialMultiplier"></a>

### *property* GeneratedAMSupport.MaterialMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Mode"></a>

### *property* GeneratedAMSupport.Mode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.MultiplierEntry"></a>

### *property* GeneratedAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Properties"></a>

### *property* GeneratedAMSupport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ShearModulusMultipleInXY"></a>

### *property* GeneratedAMSupport.ShearModulusMultipleInXY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ShearModulusMultipleInXZ"></a>

### *property* GeneratedAMSupport.ShearModulusMultipleInXZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ShearModulusMultipleInYZ"></a>

### *property* GeneratedAMSupport.ShearModulusMultipleInYZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.SupportType"></a>

### *property* GeneratedAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Suppressed"></a>

### *property* GeneratedAMSupport.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed state.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ThermalConductivityMultipleInX"></a>

### *property* GeneratedAMSupport.ThermalConductivityMultipleInX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ThermalConductivityMultipleInY"></a>

### *property* GeneratedAMSupport.ThermalConductivityMultipleInY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ThermalConductivityMultipleInZ"></a>

### *property* GeneratedAMSupport.ThermalConductivityMultipleInZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.VisibleProperties"></a>

### *property* GeneratedAMSupport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Volume"></a>

### *property* GeneratedAMSupport.Volume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.WallSpacing"></a>

### *property* GeneratedAMSupport.WallSpacing *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.WallThickness"></a>

### *property* GeneratedAMSupport.WallThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeneratedAMSupport.Activate"></a>

### GeneratedAMSupport.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.AddCommandSnippet"></a>

### GeneratedAMSupport.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.AddComment"></a>

### GeneratedAMSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.AddFigure"></a>

### GeneratedAMSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.AddImage"></a>

### GeneratedAMSupport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.ClearGeneratedData"></a>

### GeneratedAMSupport.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.CopyTo"></a>

### GeneratedAMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.CreateNamedSelectionOfGeneratedElements"></a>

### GeneratedAMSupport.CreateNamedSelectionOfGeneratedElements() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.CreateParameter"></a>

### GeneratedAMSupport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Delete"></a>

### GeneratedAMSupport.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.Duplicate"></a>

### GeneratedAMSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.GenerateSupportBodies"></a>

### GeneratedAMSupport.GenerateSupportBodies(progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Application.Progress)) → [None](https://docs.python.org/3/library/constants.html#None)

Generate Support Bodies.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.GetChildren"></a>

### GeneratedAMSupport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.GetGeneratedBody"></a>

### GeneratedAMSupport.GetGeneratedBody() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Returns the generated body object

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.GetParameter"></a>

### GeneratedAMSupport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.GroupAllSimilarChildren"></a>

### GeneratedAMSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.GroupSimilarObjects"></a>

### GeneratedAMSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.PropertyByAPIName"></a>

### GeneratedAMSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.PropertyByName"></a>

### GeneratedAMSupport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMSupport.RemoveParameter"></a>

### GeneratedAMSupport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

