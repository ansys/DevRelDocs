# `MemberSizeManufacturingConstraint`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MemberSizeManufacturingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MemberSizeManufacturingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MemberSizeManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MemberSizeManufacturingConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MemberSizeManufacturingConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MemberSizeManufacturingConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MemberSizeManufacturingConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MemberSizeManufacturingConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MemberSizeManufacturingConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MemberSizeManufacturingConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MemberSizeManufacturingConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MemberSizeManufacturingConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MemberSizeManufacturingConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MemberSizeManufacturingConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MemberSizeManufacturingConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MemberSizeManufacturingConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Children`](#MemberSizeManufacturingConstraint.Children)                                                       | Gets the list of children.                                                                                                                                                         |
| [`CoordinateSystemForThicknessMeasure`](#MemberSizeManufacturingConstraint.CoordinateSystemForThicknessMeasure) | Gets or sets the Coordinate system used as the basis for measurements (only used when ThicknessMeasureType is InPlane).                                                            |
| [`DataModelObjectCategory`](#MemberSizeManufacturingConstraint.DataModelObjectCategory)                         | Gets the current DataModelObject’s category.                                                                                                                                       |
| [`GapSize`](#MemberSizeManufacturingConstraint.GapSize)                                                         | Gets or sets the GapSize.                                                                                                                                                          |
| [`GapSizeControlledType`](#MemberSizeManufacturingConstraint.GapSizeControlledType)                             | Gets or sets the GapSizeControlledType.                                                                                                                                            |
| [`InternalObject`](#MemberSizeManufacturingConstraint.InternalObject)                                           | Gets the internal object. For advanced usage only.                                                                                                                                 |
| [`Location`](#MemberSizeManufacturingConstraint.Location)                                                       | Gets or sets the Location.                                                                                                                                                         |
| [`MaxSize`](#MemberSizeManufacturingConstraint.MaxSize)                                                         | Gets or sets the MaxSize.                                                                                                                                                          |
| [`Maximum`](#MemberSizeManufacturingConstraint.Maximum)                                                         | Gets or sets the Maximum.                                                                                                                                                          |
| [`MinSize`](#MemberSizeManufacturingConstraint.MinSize)                                                         | Gets or sets the MinSize.                                                                                                                                                          |
| [`Minimum`](#MemberSizeManufacturingConstraint.Minimum)                                                         | Gets or sets the Minimum.                                                                                                                                                          |
| [`NormalAxisForInPlaneMeasure`](#MemberSizeManufacturingConstraint.NormalAxisForInPlaneMeasure)                 | Gets or sets the normal axis to plane considered for InPlane measurement type. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”). |
| [`Properties`](#MemberSizeManufacturingConstraint.Properties)                                                   | Gets the list of properties for this object.                                                                                                                                       |
| [`ScopingMethod`](#MemberSizeManufacturingConstraint.ScopingMethod)                                             | Gets or sets the ScopingMethod.                                                                                                                                                    |
| [`Selection`](#MemberSizeManufacturingConstraint.Selection)                                                     | Gets or sets the Selection.                                                                                                                                                        |
| [`Suppressed`](#MemberSizeManufacturingConstraint.Suppressed)                                                   | Gets or sets the Suppressed.                                                                                                                                                       |
| [`ThicknessMeasureType`](#MemberSizeManufacturingConstraint.ThicknessMeasureType)                               | Gets or sets the thickness measurement type (applicable for the MaxSize and GapSize properties). The default type is Isotropic.                                                    |
| [`VisibleProperties`](#MemberSizeManufacturingConstraint.VisibleProperties)                                     | Gets the list of properties that are visible for this object.                                                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="MemberSizeManufacturingConstraint.Children"></a>

### *property* MemberSizeManufacturingConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.CoordinateSystemForThicknessMeasure"></a>

### *property* MemberSizeManufacturingConstraint.CoordinateSystemForThicknessMeasure *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate system used as the basis for measurements (only used when ThicknessMeasureType is InPlane).

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.DataModelObjectCategory"></a>

### *property* MemberSizeManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GapSize"></a>

### *property* MemberSizeManufacturingConstraint.GapSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GapSize.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GapSizeControlledType"></a>

### *property* MemberSizeManufacturingConstraint.GapSizeControlledType *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GapSizeControlledType.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.InternalObject"></a>

### *property* MemberSizeManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Location"></a>

### *property* MemberSizeManufacturingConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.MaxSize"></a>

### *property* MemberSizeManufacturingConstraint.MaxSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxSize.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Maximum"></a>

### *property* MemberSizeManufacturingConstraint.Maximum *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.MinSize"></a>

### *property* MemberSizeManufacturingConstraint.MinSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinSize.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Minimum"></a>

### *property* MemberSizeManufacturingConstraint.Minimum *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.NormalAxisForInPlaneMeasure"></a>

### *property* MemberSizeManufacturingConstraint.NormalAxisForInPlaneMeasure *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the normal axis to plane considered for InPlane measurement type. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Properties"></a>

### *property* MemberSizeManufacturingConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.ScopingMethod"></a>

### *property* MemberSizeManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Selection"></a>

### *property* MemberSizeManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Suppressed"></a>

### *property* MemberSizeManufacturingConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.ThicknessMeasureType"></a>

### *property* MemberSizeManufacturingConstraint.ThicknessMeasureType *: [Ansys.Mechanical.DataModel.Enums.MemberSizeMeasurementType](../../../Mechanical/DataModel/Enums/MemberSizeMeasurementType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MemberSizeMeasurementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the thickness measurement type (applicable for the MaxSize and GapSize properties). The default type is Isotropic.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.VisibleProperties"></a>

### *property* MemberSizeManufacturingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MemberSizeManufacturingConstraint.Activate"></a>

### MemberSizeManufacturingConstraint.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.CopyTo"></a>

### MemberSizeManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.CreateParameter"></a>

### MemberSizeManufacturingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Delete"></a>

### MemberSizeManufacturingConstraint.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Duplicate"></a>

### MemberSizeManufacturingConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetChildren"></a>

### MemberSizeManufacturingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetParameter"></a>

### MemberSizeManufacturingConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GroupAllSimilarChildren"></a>

### MemberSizeManufacturingConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GroupSimilarObjects"></a>

### MemberSizeManufacturingConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.PropertyByAPIName"></a>

### MemberSizeManufacturingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.PropertyByName"></a>

### MemberSizeManufacturingConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.RemoveParameter"></a>

### MemberSizeManufacturingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.RenameBasedOnDefinition"></a>

### MemberSizeManufacturingConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

