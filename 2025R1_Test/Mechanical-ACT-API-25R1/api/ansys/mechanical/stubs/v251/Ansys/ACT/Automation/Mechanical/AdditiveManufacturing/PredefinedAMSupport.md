# `PredefinedAMSupport`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PredefinedAMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PredefinedAMSupport.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#PredefinedAMSupport.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#PredefinedAMSupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PredefinedAMSupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PredefinedAMSupport.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PredefinedAMSupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PredefinedAMSupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PredefinedAMSupport.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PredefinedAMSupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PredefinedAMSupport.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PredefinedAMSupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PredefinedAMSupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PredefinedAMSupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PredefinedAMSupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PredefinedAMSupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PredefinedAMSupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PredefinedAMSupport.Children)                                             | Gets the list of children.                                    |
| [`Comments`](#PredefinedAMSupport.Comments)                                             | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PredefinedAMSupport.DataModelObjectCategory)               | Gets the current DataModelObject’s category.                  |
| [`DensityMultiple`](#PredefinedAMSupport.DensityMultiple)                               | Gets or sets the DensityMultiple.                             |
| [`ElasticModulusMultipleInX`](#PredefinedAMSupport.ElasticModulusMultipleInX)           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#PredefinedAMSupport.ElasticModulusMultipleInY)           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#PredefinedAMSupport.ElasticModulusMultipleInZ)           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`Figures`](#PredefinedAMSupport.Figures)                                               | Gets the list of associated figures.                          |
| [`Images`](#PredefinedAMSupport.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#PredefinedAMSupport.InternalObject)                                 | Gets the internal object. For advanced usage only.            |
| [`Location`](#PredefinedAMSupport.Location)                                             | Gets or sets the Location.                                    |
| [`MaterialMultiplier`](#PredefinedAMSupport.MaterialMultiplier)                         | Gets or sets the MaterialMultiplier.                          |
| [`MultiplierEntry`](#PredefinedAMSupport.MultiplierEntry)                               | Gets or sets the MultiplierEntry.                             |
| [`Properties`](#PredefinedAMSupport.Properties)                                         | Gets the list of properties for this object.                  |
| [`ShearModulusMultipleInXY`](#PredefinedAMSupport.ShearModulusMultipleInXY)             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#PredefinedAMSupport.ShearModulusMultipleInXZ)             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#PredefinedAMSupport.ShearModulusMultipleInYZ)             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`SupportType`](#PredefinedAMSupport.SupportType)                                       | Gets or sets the SupportType.                                 |
| [`Suppressed`](#PredefinedAMSupport.Suppressed)                                         | Gets or sets the Suppressed.                                  |
| [`ThermalConductivityMultipleInX`](#PredefinedAMSupport.ThermalConductivityMultipleInX) | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#PredefinedAMSupport.ThermalConductivityMultipleInY) | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#PredefinedAMSupport.ThermalConductivityMultipleInZ) | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`VisibleProperties`](#PredefinedAMSupport.VisibleProperties)                           | Gets the list of properties that are visible for this object. |
| [`Volume`](#PredefinedAMSupport.Volume)                                                 | Gets or sets the Volume.                                      |
| [`WallSpacing`](#PredefinedAMSupport.WallSpacing)                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#PredefinedAMSupport.WallThickness)                                   | Gets or sets the WallThickness.                               |

<a id="property-detail"></a>

## Property detail

<a id="PredefinedAMSupport.Children"></a>

### *property* PredefinedAMSupport.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Comments"></a>

### *property* PredefinedAMSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.DataModelObjectCategory"></a>

### *property* PredefinedAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.DensityMultiple"></a>

### *property* PredefinedAMSupport.DensityMultiple *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ElasticModulusMultipleInX"></a>

### *property* PredefinedAMSupport.ElasticModulusMultipleInX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ElasticModulusMultipleInY"></a>

### *property* PredefinedAMSupport.ElasticModulusMultipleInY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ElasticModulusMultipleInZ"></a>

### *property* PredefinedAMSupport.ElasticModulusMultipleInZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Figures"></a>

### *property* PredefinedAMSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Images"></a>

### *property* PredefinedAMSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.InternalObject"></a>

### *property* PredefinedAMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Location"></a>

### *property* PredefinedAMSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.MaterialMultiplier"></a>

### *property* PredefinedAMSupport.MaterialMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.MultiplierEntry"></a>

### *property* PredefinedAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Properties"></a>

### *property* PredefinedAMSupport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ShearModulusMultipleInXY"></a>

### *property* PredefinedAMSupport.ShearModulusMultipleInXY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ShearModulusMultipleInXZ"></a>

### *property* PredefinedAMSupport.ShearModulusMultipleInXZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ShearModulusMultipleInYZ"></a>

### *property* PredefinedAMSupport.ShearModulusMultipleInYZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.SupportType"></a>

### *property* PredefinedAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Suppressed"></a>

### *property* PredefinedAMSupport.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ThermalConductivityMultipleInX"></a>

### *property* PredefinedAMSupport.ThermalConductivityMultipleInX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ThermalConductivityMultipleInY"></a>

### *property* PredefinedAMSupport.ThermalConductivityMultipleInY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ThermalConductivityMultipleInZ"></a>

### *property* PredefinedAMSupport.ThermalConductivityMultipleInZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.VisibleProperties"></a>

### *property* PredefinedAMSupport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Volume"></a>

### *property* PredefinedAMSupport.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.WallSpacing"></a>

### *property* PredefinedAMSupport.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.WallThickness"></a>

### *property* PredefinedAMSupport.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PredefinedAMSupport.Activate"></a>

### PredefinedAMSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.AddCommandSnippet"></a>

### PredefinedAMSupport.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.AddComment"></a>

### PredefinedAMSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.AddFigure"></a>

### PredefinedAMSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.AddImage"></a>

### PredefinedAMSupport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.CopyTo"></a>

### PredefinedAMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.CreateParameter"></a>

### PredefinedAMSupport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Delete"></a>

### PredefinedAMSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Duplicate"></a>

### PredefinedAMSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetChildren"></a>

### PredefinedAMSupport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetParameter"></a>

### PredefinedAMSupport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GroupAllSimilarChildren"></a>

### PredefinedAMSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GroupSimilarObjects"></a>

### PredefinedAMSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.PropertyByAPIName"></a>

### PredefinedAMSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.PropertyByName"></a>

### PredefinedAMSupport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.RemoveParameter"></a>

### PredefinedAMSupport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

