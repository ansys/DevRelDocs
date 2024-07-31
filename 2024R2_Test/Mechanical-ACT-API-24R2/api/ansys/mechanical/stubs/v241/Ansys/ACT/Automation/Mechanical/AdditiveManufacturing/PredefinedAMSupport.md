# `PredefinedAMSupport`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PredefinedAMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#id0)                                                                | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Suppressed)                                         | Gets or sets the Suppressed.                                  |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Location)                                             | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.DataModelObjectCategory)               | Gets the current DataModelObject’s category.                  |
| [`ThermalConductivityMultipleInX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.ThermalConductivityMultipleInX) | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.ThermalConductivityMultipleInY) | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.ThermalConductivityMultipleInZ) | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.DensityMultiple)                               | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.MaterialMultiplier)                         | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.ElasticModulusMultipleInX)           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.ElasticModulusMultipleInY)           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.ElasticModulusMultipleInZ)           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.ShearModulusMultipleInXY)             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.ShearModulusMultipleInXZ)             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.ShearModulusMultipleInYZ)             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.WallSpacing)                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.WallThickness)                                   | Gets or sets the WallThickness.                               |
| [`Volume`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Volume)                                                 | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.MultiplierEntry)                               | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.SupportType)                                       | Gets or sets the SupportType.                                 |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Children)                                             | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Comments)                                             | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Figures)                                               | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#id0)                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.Properties)                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/PredefinedAMSupport.md#PredefinedAMSupport.VisibleProperties)                           | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PredefinedAMSupport.InternalObject"></a>

### *property* PredefinedAMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Suppressed"></a>

### *property* PredefinedAMSupport.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Location"></a>

### *property* PredefinedAMSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.DataModelObjectCategory"></a>

### *property* PredefinedAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ThermalConductivityMultipleInX"></a>

### *property* PredefinedAMSupport.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ThermalConductivityMultipleInY"></a>

### *property* PredefinedAMSupport.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ThermalConductivityMultipleInZ"></a>

### *property* PredefinedAMSupport.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.DensityMultiple"></a>

### *property* PredefinedAMSupport.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.MaterialMultiplier"></a>

### *property* PredefinedAMSupport.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ElasticModulusMultipleInX"></a>

### *property* PredefinedAMSupport.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ElasticModulusMultipleInY"></a>

### *property* PredefinedAMSupport.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ElasticModulusMultipleInZ"></a>

### *property* PredefinedAMSupport.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ShearModulusMultipleInXY"></a>

### *property* PredefinedAMSupport.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ShearModulusMultipleInXZ"></a>

### *property* PredefinedAMSupport.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ShearModulusMultipleInYZ"></a>

### *property* PredefinedAMSupport.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.WallSpacing"></a>

### *property* PredefinedAMSupport.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.WallThickness"></a>

### *property* PredefinedAMSupport.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Volume"></a>

### *property* PredefinedAMSupport.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.MultiplierEntry"></a>

### *property* PredefinedAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.SupportType"></a>

### *property* PredefinedAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Children"></a>

### *property* PredefinedAMSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Comments"></a>

### *property* PredefinedAMSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Figures"></a>

### *property* PredefinedAMSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Images"></a>

### *property* PredefinedAMSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PredefinedAMSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Properties"></a>

### *property* PredefinedAMSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.VisibleProperties"></a>

### *property* PredefinedAMSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PredefinedAMSupport.AddCommandSnippet"></a>

### PredefinedAMSupport.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Delete"></a>

### PredefinedAMSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetChildren"></a>

### PredefinedAMSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PredefinedAMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### PredefinedAMSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Activate"></a>

### PredefinedAMSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.CopyTo"></a>

### PredefinedAMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Duplicate"></a>

### PredefinedAMSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GroupAllSimilarChildren"></a>

### PredefinedAMSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GroupSimilarObjects"></a>

### PredefinedAMSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.PropertyByName"></a>

### PredefinedAMSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.PropertyByAPIName"></a>

### PredefinedAMSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.CreateParameter"></a>

### PredefinedAMSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetParameter"></a>

### PredefinedAMSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.RemoveParameter"></a>

### PredefinedAMSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

