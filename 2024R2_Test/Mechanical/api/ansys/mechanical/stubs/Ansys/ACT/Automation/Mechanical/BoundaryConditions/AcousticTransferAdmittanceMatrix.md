# AcousticTransferAdmittanceMatrix

### *class* AcousticTransferAdmittanceMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticTransferAdmittanceMatrix.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#AcousticTransferAdmittanceMatrix.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#AcousticTransferAdmittanceMatrix.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticTransferAdmittanceMatrix.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticTransferAdmittanceMatrix.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticTransferAdmittanceMatrix.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticTransferAdmittanceMatrix.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticTransferAdmittanceMatrix.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticTransferAdmittanceMatrix.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticTransferAdmittanceMatrix.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticTransferAdmittanceMatrix.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticTransferAdmittanceMatrix.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticTransferAdmittanceMatrix.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticTransferAdmittanceMatrix.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticTransferAdmittanceMatrix.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticTransferAdmittanceMatrix.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DynamicViscosity`](#AcousticTransferAdmittanceMatrix.DynamicViscosity)                                               | Gets or sets the DynamicViscosity.                            |
| [`GridPeriod`](#AcousticTransferAdmittanceMatrix.GridPeriod)                                                           | Gets or sets the GridPeriod.                                  |
| [`HoleRadius`](#AcousticTransferAdmittanceMatrix.HoleRadius)                                                           | Gets or sets the HoleRadius.                                  |
| [`MassDensity`](#AcousticTransferAdmittanceMatrix.MassDensity)                                                         | Gets or sets the MassDensity.                                 |
| [`RatioOfInnerAndOuterRadius`](#AcousticTransferAdmittanceMatrix.RatioOfInnerAndOuterRadius)                           | Gets or sets the RatioOfInnerAndOuterRadius.                  |
| [`StructureThickness`](#AcousticTransferAdmittanceMatrix.StructureThickness)                                           | Gets or sets the StructureThickness.                          |
| [`Alpha1Imag`](#AcousticTransferAdmittanceMatrix.Alpha1Imag)                                                           | Gets or sets the Alpha1Imag.                                  |
| [`Alpha1Real`](#AcousticTransferAdmittanceMatrix.Alpha1Real)                                                           | Gets or sets the Alpha1Real.                                  |
| [`Alpha2Imag`](#AcousticTransferAdmittanceMatrix.Alpha2Imag)                                                           | Gets or sets the Alpha2Imag.                                  |
| [`Alpha2Real`](#AcousticTransferAdmittanceMatrix.Alpha2Real)                                                           | Gets or sets the Alpha2Real.                                  |
| [`Y11Imag`](#AcousticTransferAdmittanceMatrix.Y11Imag)                                                                 | Gets or sets the Y11Imag.                                     |
| [`Y11Real`](#AcousticTransferAdmittanceMatrix.Y11Real)                                                                 | Gets or sets the Y11Real.                                     |
| [`Y12Imag`](#AcousticTransferAdmittanceMatrix.Y12Imag)                                                                 | Gets or sets the Y12Imag.                                     |
| [`Y12Real`](#AcousticTransferAdmittanceMatrix.Y12Real)                                                                 | Gets or sets the Y12Real.                                     |
| [`Y21Imag`](#AcousticTransferAdmittanceMatrix.Y21Imag)                                                                 | Gets or sets the Y21Imag.                                     |
| [`Y21Real`](#AcousticTransferAdmittanceMatrix.Y21Real)                                                                 | Gets or sets the Y21Real.                                     |
| [`Y22Imag`](#AcousticTransferAdmittanceMatrix.Y22Imag)                                                                 | Gets or sets the Y22Imag.                                     |
| [`Y22Real`](#AcousticTransferAdmittanceMatrix.Y22Real)                                                                 | Gets or sets the Y22Real.                                     |
| [`TransferAdmittanceModel`](#AcousticTransferAdmittanceMatrix.TransferAdmittanceModel)                                 | Gets or sets the TransferAdmittanceModel.                     |
| [`Port1`](#AcousticTransferAdmittanceMatrix.Port1)                                                                     | Gets or sets the Port1.                                       |
| [`Port2`](#AcousticTransferAdmittanceMatrix.Port2)                                                                     | Gets or sets the Port2.                                       |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticTransferAdmittanceMatrix.Suppressed)                                                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticTransferAdmittanceMatrix.SharedRefBody)                                                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticTransferAdmittanceMatrix.Children)                                                               | Gets the list of children.                                    |
| [`Comments`](#AcousticTransferAdmittanceMatrix.Comments)                                                               | Gets the list of associated comments.                         |
| [`Figures`](#AcousticTransferAdmittanceMatrix.Figures)                                                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticTransferAdmittanceMatrix.Images)                                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticTransferAdmittanceMatrix.ReadOnly)                                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticTransferAdmittanceMatrix.Properties)                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticTransferAdmittanceMatrix.VisibleProperties)                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticTransferAdmittanceMatrix
```

## Property detail

### *property* AcousticTransferAdmittanceMatrix.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.DynamicViscosity *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicViscosity.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.GridPeriod *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GridPeriod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.HoleRadius *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HoleRadius.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.MassDensity *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassDensity.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.RatioOfInnerAndOuterRadius *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RatioOfInnerAndOuterRadius.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.StructureThickness *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructureThickness.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Alpha1Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Alpha1Imag.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Alpha1Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Alpha1Real.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Alpha2Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Alpha2Imag.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Alpha2Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Alpha2Real.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Y11Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y11Imag.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Y11Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y11Real.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Y12Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y12Imag.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Y12Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y12Real.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Y21Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y21Imag.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Y21Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y21Real.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Y22Imag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y22Imag.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Y22Real *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y22Real.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.TransferAdmittanceModel *: [Ansys.Mechanical.DataModel.Enums.TransferAdmittanceModelType](../../../../Mechanical/DataModel/Enums/TransferAdmittanceModelType.md#TransferAdmittanceModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransferAdmittanceModel.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Port1 *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Port1.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Port2 *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Port2.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransferAdmittanceMatrix.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticTransferAdmittanceMatrix.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticTransferAdmittanceMatrix.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
