# `AcousticTransferAdmittanceMatrix`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticTransferAdmittanceMatrix"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticTransferAdmittanceMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticTransferAdmittanceMatrix.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticTransferAdmittanceMatrix.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticTransferAdmittanceMatrix.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticTransferAdmittanceMatrix.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticTransferAdmittanceMatrix.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticTransferAdmittanceMatrix.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticTransferAdmittanceMatrix.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticTransferAdmittanceMatrix.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticTransferAdmittanceMatrix.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticTransferAdmittanceMatrix.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticTransferAdmittanceMatrix.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticTransferAdmittanceMatrix.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticTransferAdmittanceMatrix.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticTransferAdmittanceMatrix.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticTransferAdmittanceMatrix.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticTransferAdmittanceMatrix.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticTransferAdmittanceMatrix.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Alpha1Imag`](#AcousticTransferAdmittanceMatrix.Alpha1Imag)                                 | Gets or sets the Alpha1Imag.                                  |
| [`Alpha1Real`](#AcousticTransferAdmittanceMatrix.Alpha1Real)                                 | Gets or sets the Alpha1Real.                                  |
| [`Alpha2Imag`](#AcousticTransferAdmittanceMatrix.Alpha2Imag)                                 | Gets or sets the Alpha2Imag.                                  |
| [`Alpha2Real`](#AcousticTransferAdmittanceMatrix.Alpha2Real)                                 | Gets or sets the Alpha2Real.                                  |
| [`Children`](#AcousticTransferAdmittanceMatrix.Children)                                     | Gets the list of children.                                    |
| [`Comments`](#AcousticTransferAdmittanceMatrix.Comments)                                     | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticTransferAdmittanceMatrix.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                  |
| [`DynamicViscosity`](#AcousticTransferAdmittanceMatrix.DynamicViscosity)                     | Gets or sets the DynamicViscosity.                            |
| [`Figures`](#AcousticTransferAdmittanceMatrix.Figures)                                       | Gets the list of associated figures.                          |
| [`GridPeriod`](#AcousticTransferAdmittanceMatrix.GridPeriod)                                 | Gets or sets the GridPeriod.                                  |
| [`HoleRadius`](#AcousticTransferAdmittanceMatrix.HoleRadius)                                 | Gets or sets the HoleRadius.                                  |
| [`Images`](#AcousticTransferAdmittanceMatrix.Images)                                         | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticTransferAdmittanceMatrix.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`MassDensity`](#AcousticTransferAdmittanceMatrix.MassDensity)                               | Gets or sets the MassDensity.                                 |
| [`Port1`](#AcousticTransferAdmittanceMatrix.Port1)                                           | Gets or sets the Port1.                                       |
| [`Port2`](#AcousticTransferAdmittanceMatrix.Port2)                                           | Gets or sets the Port2.                                       |
| [`Properties`](#AcousticTransferAdmittanceMatrix.Properties)                                 | Gets the list of properties for this object.                  |
| [`RatioOfInnerAndOuterRadius`](#AcousticTransferAdmittanceMatrix.RatioOfInnerAndOuterRadius) | Gets or sets the RatioOfInnerAndOuterRadius.                  |
| [`ReadOnly`](#AcousticTransferAdmittanceMatrix.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticTransferAdmittanceMatrix.SharedRefBody)                           | Gets or sets the SharedRefBody.                               |
| [`StructureThickness`](#AcousticTransferAdmittanceMatrix.StructureThickness)                 | Gets or sets the StructureThickness.                          |
| [`Suppressed`](#AcousticTransferAdmittanceMatrix.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`TransferAdmittanceModel`](#AcousticTransferAdmittanceMatrix.TransferAdmittanceModel)       | Gets or sets the TransferAdmittanceModel.                     |
| [`VisibleProperties`](#AcousticTransferAdmittanceMatrix.VisibleProperties)                   | Gets the list of properties that are visible for this object. |
| [`Y11Imag`](#AcousticTransferAdmittanceMatrix.Y11Imag)                                       | Gets or sets the Y11Imag.                                     |
| [`Y11Real`](#AcousticTransferAdmittanceMatrix.Y11Real)                                       | Gets or sets the Y11Real.                                     |
| [`Y12Imag`](#AcousticTransferAdmittanceMatrix.Y12Imag)                                       | Gets or sets the Y12Imag.                                     |
| [`Y12Real`](#AcousticTransferAdmittanceMatrix.Y12Real)                                       | Gets or sets the Y12Real.                                     |
| [`Y21Imag`](#AcousticTransferAdmittanceMatrix.Y21Imag)                                       | Gets or sets the Y21Imag.                                     |
| [`Y21Real`](#AcousticTransferAdmittanceMatrix.Y21Real)                                       | Gets or sets the Y21Real.                                     |
| [`Y22Imag`](#AcousticTransferAdmittanceMatrix.Y22Imag)                                       | Gets or sets the Y22Imag.                                     |
| [`Y22Real`](#AcousticTransferAdmittanceMatrix.Y22Real)                                       | Gets or sets the Y22Real.                                     |

<a id="property-detail"></a>

## Property detail

<a id="AcousticTransferAdmittanceMatrix.Alpha1Imag"></a>

### *property* AcousticTransferAdmittanceMatrix.Alpha1Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Alpha1Imag.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Alpha1Real"></a>

### *property* AcousticTransferAdmittanceMatrix.Alpha1Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Alpha1Real.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Alpha2Imag"></a>

### *property* AcousticTransferAdmittanceMatrix.Alpha2Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Alpha2Imag.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Alpha2Real"></a>

### *property* AcousticTransferAdmittanceMatrix.Alpha2Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Alpha2Real.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Children"></a>

### *property* AcousticTransferAdmittanceMatrix.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Comments"></a>

### *property* AcousticTransferAdmittanceMatrix.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.DataModelObjectCategory"></a>

### *property* AcousticTransferAdmittanceMatrix.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.DynamicViscosity"></a>

### *property* AcousticTransferAdmittanceMatrix.DynamicViscosity *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicViscosity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Figures"></a>

### *property* AcousticTransferAdmittanceMatrix.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.GridPeriod"></a>

### *property* AcousticTransferAdmittanceMatrix.GridPeriod *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GridPeriod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.HoleRadius"></a>

### *property* AcousticTransferAdmittanceMatrix.HoleRadius *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HoleRadius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Images"></a>

### *property* AcousticTransferAdmittanceMatrix.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.InternalObject"></a>

### *property* AcousticTransferAdmittanceMatrix.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.MassDensity"></a>

### *property* AcousticTransferAdmittanceMatrix.MassDensity *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassDensity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Port1"></a>

### *property* AcousticTransferAdmittanceMatrix.Port1 *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Port1.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Port2"></a>

### *property* AcousticTransferAdmittanceMatrix.Port2 *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Port2.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Properties"></a>

### *property* AcousticTransferAdmittanceMatrix.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.RatioOfInnerAndOuterRadius"></a>

### *property* AcousticTransferAdmittanceMatrix.RatioOfInnerAndOuterRadius *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RatioOfInnerAndOuterRadius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.ReadOnly"></a>

### *property* AcousticTransferAdmittanceMatrix.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.SharedRefBody"></a>

### *property* AcousticTransferAdmittanceMatrix.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.StructureThickness"></a>

### *property* AcousticTransferAdmittanceMatrix.StructureThickness *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructureThickness.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Suppressed"></a>

### *property* AcousticTransferAdmittanceMatrix.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.TransferAdmittanceModel"></a>

### *property* AcousticTransferAdmittanceMatrix.TransferAdmittanceModel *: [Ansys.Mechanical.DataModel.Enums.TransferAdmittanceModelType](../../../../Mechanical/DataModel/Enums/TransferAdmittanceModelType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TransferAdmittanceModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransferAdmittanceModel.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.VisibleProperties"></a>

### *property* AcousticTransferAdmittanceMatrix.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Y11Imag"></a>

### *property* AcousticTransferAdmittanceMatrix.Y11Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y11Imag.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Y11Real"></a>

### *property* AcousticTransferAdmittanceMatrix.Y11Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y11Real.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Y12Imag"></a>

### *property* AcousticTransferAdmittanceMatrix.Y12Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y12Imag.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Y12Real"></a>

### *property* AcousticTransferAdmittanceMatrix.Y12Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y12Real.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Y21Imag"></a>

### *property* AcousticTransferAdmittanceMatrix.Y21Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y21Imag.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Y21Real"></a>

### *property* AcousticTransferAdmittanceMatrix.Y21Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y21Real.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Y22Imag"></a>

### *property* AcousticTransferAdmittanceMatrix.Y22Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y22Imag.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Y22Real"></a>

### *property* AcousticTransferAdmittanceMatrix.Y22Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y22Real.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticTransferAdmittanceMatrix.Activate"></a>

### AcousticTransferAdmittanceMatrix.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.AddComment"></a>

### AcousticTransferAdmittanceMatrix.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.AddFigure"></a>

### AcousticTransferAdmittanceMatrix.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.AddImage"></a>

### AcousticTransferAdmittanceMatrix.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.CopyTo"></a>

### AcousticTransferAdmittanceMatrix.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.CreateParameter"></a>

### AcousticTransferAdmittanceMatrix.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Delete"></a>

### AcousticTransferAdmittanceMatrix.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.Duplicate"></a>

### AcousticTransferAdmittanceMatrix.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.GetChildren"></a>

### AcousticTransferAdmittanceMatrix.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.GetParameter"></a>

### AcousticTransferAdmittanceMatrix.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.GroupAllSimilarChildren"></a>

### AcousticTransferAdmittanceMatrix.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.GroupSimilarObjects"></a>

### AcousticTransferAdmittanceMatrix.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.PromoteToNamedSelection"></a>

### AcousticTransferAdmittanceMatrix.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.PropertyByAPIName"></a>

### AcousticTransferAdmittanceMatrix.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.PropertyByName"></a>

### AcousticTransferAdmittanceMatrix.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransferAdmittanceMatrix.RemoveParameter"></a>

### AcousticTransferAdmittanceMatrix.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

