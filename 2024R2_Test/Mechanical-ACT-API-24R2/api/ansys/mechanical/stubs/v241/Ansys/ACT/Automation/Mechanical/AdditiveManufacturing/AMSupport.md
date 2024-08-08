# `AMSupport`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#id0)                                                      | Gets the internal object. For advanced usage only.            |
| [`ThermalConductivityMultipleInX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.ThermalConductivityMultipleInX) | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.ThermalConductivityMultipleInY) | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.ThermalConductivityMultipleInZ) | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.DensityMultiple)                               | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.MaterialMultiplier)                         | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.ElasticModulusMultipleInX)           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.ElasticModulusMultipleInY)           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.ElasticModulusMultipleInZ)           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.ShearModulusMultipleInXY)             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.ShearModulusMultipleInXZ)             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.ShearModulusMultipleInYZ)             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.WallSpacing)                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.WallThickness)                                   | Gets or sets the WallThickness.                               |
| [`Volume`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.Volume)                                                 | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.MultiplierEntry)                               | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.SupportType)                                       | Gets or sets the SupportType.                                 |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.DataModelObjectCategory)               | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.Children)                                             | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.Comments)                                             | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.Figures)                                               | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#id0)                                                      | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.Properties)                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupport.md#AMSupport.VisibleProperties)                           | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AMSupport.InternalObject"></a>

### *property* AMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ThermalConductivityMultipleInX"></a>

### *property* AMSupport.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ThermalConductivityMultipleInY"></a>

### *property* AMSupport.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ThermalConductivityMultipleInZ"></a>

### *property* AMSupport.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.DensityMultiple"></a>

### *property* AMSupport.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.MaterialMultiplier"></a>

### *property* AMSupport.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ElasticModulusMultipleInX"></a>

### *property* AMSupport.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ElasticModulusMultipleInY"></a>

### *property* AMSupport.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ElasticModulusMultipleInZ"></a>

### *property* AMSupport.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ShearModulusMultipleInXY"></a>

### *property* AMSupport.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ShearModulusMultipleInXZ"></a>

### *property* AMSupport.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ShearModulusMultipleInYZ"></a>

### *property* AMSupport.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.WallSpacing"></a>

### *property* AMSupport.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.WallThickness"></a>

### *property* AMSupport.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Volume"></a>

### *property* AMSupport.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.MultiplierEntry"></a>

### *property* AMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.SupportType"></a>

### *property* AMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.DataModelObjectCategory"></a>

### *property* AMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Children"></a>

### *property* AMSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Comments"></a>

### *property* AMSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Figures"></a>

### *property* AMSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Images"></a>

### *property* AMSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AMSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Properties"></a>

### *property* AMSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.VisibleProperties"></a>

### *property* AMSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMSupport.AddCommandSnippet"></a>

### AMSupport.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Delete"></a>

### AMSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetChildren"></a>

### AMSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddComment"></a>

### AMSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddFigure"></a>

### AMSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddImage"></a>

### AMSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Activate"></a>

### AMSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.CopyTo"></a>

### AMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Duplicate"></a>

### AMSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GroupAllSimilarChildren"></a>

### AMSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GroupSimilarObjects"></a>

### AMSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.PropertyByName"></a>

### AMSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.PropertyByAPIName"></a>

### AMSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.CreateParameter"></a>

### AMSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetParameter"></a>

### AMSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.RemoveParameter"></a>

### AMSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

