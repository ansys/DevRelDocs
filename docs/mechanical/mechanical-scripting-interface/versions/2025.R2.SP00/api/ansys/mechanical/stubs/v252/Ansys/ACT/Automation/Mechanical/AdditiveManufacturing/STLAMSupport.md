# `STLAMSupport`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a STLAMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#STLAMSupport.Activate)                                                                     | Activate the current object.                                                      |
| [`AddCommandSnippet`](#STLAMSupport.AddCommandSnippet)                                                   | Creates a new CommandSnippet                                                      |
| [`AddComment`](#STLAMSupport.AddComment)                                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#STLAMSupport.AddFigure)                                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#STLAMSupport.AddImage)                                                                     | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#STLAMSupport.ClearGeneratedData)                                                 | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#STLAMSupport.CopyTo)                                                                         | Copies all visible properties from this object to another.                        |
| [`CreateNamedSelectionOfExternalElementFaces`](#STLAMSupport.CreateNamedSelectionOfExternalElementFaces) | Create a named selection of the generated exterior element faces.                 |
| [`CreateNamedSelectionOfGeneratedElements`](#STLAMSupport.CreateNamedSelectionOfGeneratedElements)       | Create a named selection of the generated elements.                               |
| [`CreateParameter`](#STLAMSupport.CreateParameter)                                                       | Creates a new parameter for a Property.                                           |
| [`Delete`](#STLAMSupport.Delete)                                                                         | Run the Delete action.                                                            |
| [`Duplicate`](#STLAMSupport.Duplicate)                                                                   | Creates a copy of the current DataModelObject.                                    |
| [`ExportStl`](#STLAMSupport.ExportStl)                                                                   | Export STL data.                                                                  |
| [`GenerateSupportBodies`](#STLAMSupport.GenerateSupportBodies)                                           | Generate Support Bodies.                                                          |
| [`GetChildren`](#STLAMSupport.GetChildren)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetGeneratedBody`](#STLAMSupport.GetGeneratedBody)                                                     | Returns the generated body object                                                 |
| [`GetParameter`](#STLAMSupport.GetParameter)                                                             | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#STLAMSupport.GroupAllSimilarChildren)                                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#STLAMSupport.GroupSimilarObjects)                                               | Run the GroupSimilarObjects action.                                               |
| [`ImportSTL`](#STLAMSupport.ImportSTL)                                                                   | Run the ImportSTL action.                                                         |
| [`PropertyByAPIName`](#STLAMSupport.PropertyByAPIName)                                                   | Get a property by its API name.                                                   |
| [`PropertyByName`](#STLAMSupport.PropertyByName)                                                         | Get a property by its unique name.                                                |
| [`RemoveParameter`](#STLAMSupport.RemoveParameter)                                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#STLAMSupport.Children)                                             | Gets the list of children.                                    |
| [`Comments`](#STLAMSupport.Comments)                                             | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#STLAMSupport.DataModelObjectCategory)               | Gets the current DataModelObject’s category.                  |
| [`DensityMultiple`](#STLAMSupport.DensityMultiple)                               | Gets or sets the DensityMultiple.                             |
| [`ElasticModulusMultipleInX`](#STLAMSupport.ElasticModulusMultipleInX)           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#STLAMSupport.ElasticModulusMultipleInY)           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#STLAMSupport.ElasticModulusMultipleInZ)           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ElementSize`](#STLAMSupport.ElementSize)                                       | Gets the ElementSize.                                         |
| [`Figures`](#STLAMSupport.Figures)                                               | Gets the list of associated figures.                          |
| [`Filename`](#STLAMSupport.Filename)                                             | Gets or sets the Filename.                                    |
| [`GeometrySelection`](#STLAMSupport.GeometrySelection)                           | Gets or sets the GeometrySelection.                           |
| [`Images`](#STLAMSupport.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#STLAMSupport.InternalObject)                                 | Gets the internal object. For advanced usage only.            |
| [`LengthUnits`](#STLAMSupport.LengthUnits)                                       | Gets or sets the LengthUnits.                                 |
| [`MaterialMultiplier`](#STLAMSupport.MaterialMultiplier)                         | Gets or sets the MaterialMultiplier.                          |
| [`MultiplierEntry`](#STLAMSupport.MultiplierEntry)                               | Gets or sets the MultiplierEntry.                             |
| [`Properties`](#STLAMSupport.Properties)                                         | Gets the list of properties for this object.                  |
| [`STL`](#STLAMSupport.STL)                                                       | Gets or sets the STL.                                         |
| [`STLSupportType`](#STLAMSupport.STLSupportType)                                 | Gets or sets the STLSupportType.                              |
| [`STLSupportView`](#STLAMSupport.STLSupportView)                                 | Gets or sets the STLSupportView.                              |
| [`ShearModulusMultipleInXY`](#STLAMSupport.ShearModulusMultipleInXY)             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#STLAMSupport.ShearModulusMultipleInXZ)             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#STLAMSupport.ShearModulusMultipleInYZ)             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`Source`](#STLAMSupport.Source)                                                 | Gets or sets the Source.                                      |
| [`StlWallThickness`](#STLAMSupport.StlWallThickness)                             | Gets or sets the StlWallThickness.                            |
| [`SubsampleRate`](#STLAMSupport.SubsampleRate)                                   | Gets or sets the SubsampleRate.                               |
| [`SupportType`](#STLAMSupport.SupportType)                                       | Gets or sets the SupportType.                                 |
| [`Suppressed`](#STLAMSupport.Suppressed)                                         | Gets or sets the Suppressed state.                            |
| [`ThermalConductivityMultipleInX`](#STLAMSupport.ThermalConductivityMultipleInX) | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#STLAMSupport.ThermalConductivityMultipleInY) | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#STLAMSupport.ThermalConductivityMultipleInZ) | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`VisibleProperties`](#STLAMSupport.VisibleProperties)                           | Gets the list of properties that are visible for this object. |
| [`Volume`](#STLAMSupport.Volume)                                                 | Gets or sets the Volume.                                      |
| [`VoxelSize`](#STLAMSupport.VoxelSize)                                           | Gets the VoxelSize.                                           |
| [`WallSpacing`](#STLAMSupport.WallSpacing)                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#STLAMSupport.WallThickness)                                   | Gets or sets the WallThickness.                               |

<a id="property-detail"></a>

## Property detail

<a id="STLAMSupport.Children"></a>

### *property* STLAMSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Comments"></a>

### *property* STLAMSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.DataModelObjectCategory"></a>

### *property* STLAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.DensityMultiple"></a>

### *property* STLAMSupport.DensityMultiple *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ElasticModulusMultipleInX"></a>

### *property* STLAMSupport.ElasticModulusMultipleInX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ElasticModulusMultipleInY"></a>

### *property* STLAMSupport.ElasticModulusMultipleInY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ElasticModulusMultipleInZ"></a>

### *property* STLAMSupport.ElasticModulusMultipleInZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ElementSize"></a>

### *property* STLAMSupport.ElementSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Figures"></a>

### *property* STLAMSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Filename"></a>

### *property* STLAMSupport.Filename *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Filename.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GeometrySelection"></a>

### *property* STLAMSupport.GeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Images"></a>

### *property* STLAMSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.InternalObject"></a>

### *property* STLAMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.LengthUnits"></a>

### *property* STLAMSupport.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.MaterialMultiplier"></a>

### *property* STLAMSupport.MaterialMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.MultiplierEntry"></a>

### *property* STLAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Properties"></a>

### *property* STLAMSupport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.STL"></a>

### *property* STLAMSupport.STL *: [Ansys.ACT.Automation.Mechanical.STL](../STL.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.STL) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STL.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.STLSupportType"></a>

### *property* STLAMSupport.STLSupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportSTLType](../../../../Mechanical/DataModel/Enums/AMSupportSTLType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMSupportSTLType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportType.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.STLSupportView"></a>

### *property* STLAMSupport.STLSupportView *: [Ansys.Mechanical.DataModel.Enums.STLSupportViewType](../../../../Mechanical/DataModel/Enums/STLSupportViewType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.STLSupportViewType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportView.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ShearModulusMultipleInXY"></a>

### *property* STLAMSupport.ShearModulusMultipleInXY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ShearModulusMultipleInXZ"></a>

### *property* STLAMSupport.ShearModulusMultipleInXZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ShearModulusMultipleInYZ"></a>

### *property* STLAMSupport.ShearModulusMultipleInYZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Source"></a>

### *property* STLAMSupport.Source *: [Ansys.Mechanical.DataModel.Enums.AMStlSource](../../../../Mechanical/DataModel/Enums/AMStlSource.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMStlSource) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Source.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.StlWallThickness"></a>

### *property* STLAMSupport.StlWallThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StlWallThickness.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.SubsampleRate"></a>

### *property* STLAMSupport.SubsampleRate *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.SupportType"></a>

### *property* STLAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Suppressed"></a>

### *property* STLAMSupport.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed state.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ThermalConductivityMultipleInX"></a>

### *property* STLAMSupport.ThermalConductivityMultipleInX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ThermalConductivityMultipleInY"></a>

### *property* STLAMSupport.ThermalConductivityMultipleInY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ThermalConductivityMultipleInZ"></a>

### *property* STLAMSupport.ThermalConductivityMultipleInZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.VisibleProperties"></a>

### *property* STLAMSupport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Volume"></a>

### *property* STLAMSupport.Volume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.VoxelSize"></a>

### *property* STLAMSupport.VoxelSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VoxelSize.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.WallSpacing"></a>

### *property* STLAMSupport.WallSpacing *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.WallThickness"></a>

### *property* STLAMSupport.WallThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="STLAMSupport.Activate"></a>

### STLAMSupport.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.AddCommandSnippet"></a>

### STLAMSupport.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.AddComment"></a>

### STLAMSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.AddFigure"></a>

### STLAMSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.AddImage"></a>

### STLAMSupport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ClearGeneratedData"></a>

### STLAMSupport.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.CopyTo"></a>

### STLAMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.CreateNamedSelectionOfExternalElementFaces"></a>

### STLAMSupport.CreateNamedSelectionOfExternalElementFaces() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Create a named selection of the generated exterior element faces.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.CreateNamedSelectionOfGeneratedElements"></a>

### STLAMSupport.CreateNamedSelectionOfGeneratedElements() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Create a named selection of the generated elements.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.CreateParameter"></a>

### STLAMSupport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Delete"></a>

### STLAMSupport.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Duplicate"></a>

### STLAMSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ExportStl"></a>

### STLAMSupport.ExportStl(filename: [str](https://docs.python.org/3/library/stdtypes.html#str), progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Application.Progress)) → [None](https://docs.python.org/3/library/constants.html#None)

Export STL data.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GenerateSupportBodies"></a>

### STLAMSupport.GenerateSupportBodies(progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Application.Progress)) → [None](https://docs.python.org/3/library/constants.html#None)

Generate Support Bodies.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GetChildren"></a>

### STLAMSupport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GetGeneratedBody"></a>

### STLAMSupport.GetGeneratedBody() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Returns the generated body object

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GetParameter"></a>

### STLAMSupport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GroupAllSimilarChildren"></a>

### STLAMSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GroupSimilarObjects"></a>

### STLAMSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ImportSTL"></a>

### STLAMSupport.ImportSTL() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.PropertyByAPIName"></a>

### STLAMSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.PropertyByName"></a>

### STLAMSupport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.RemoveParameter"></a>

### STLAMSupport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

