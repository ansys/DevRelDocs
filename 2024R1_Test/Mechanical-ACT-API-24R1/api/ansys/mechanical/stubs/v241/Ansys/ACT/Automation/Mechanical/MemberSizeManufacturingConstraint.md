<!-- vale off -->

<a id="membersizemanufacturingconstraint"></a>

# `MemberSizeManufacturingConstraint`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MemberSizeManufacturingConstraint"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MemberSizeManufacturingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MemberSizeManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#MemberSizeManufacturingConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MemberSizeManufacturingConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`Activate`](#MemberSizeManufacturingConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#MemberSizeManufacturingConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MemberSizeManufacturingConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MemberSizeManufacturingConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MemberSizeManufacturingConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MemberSizeManufacturingConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MemberSizeManufacturingConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#MemberSizeManufacturingConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MemberSizeManufacturingConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MemberSizeManufacturingConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                | Gets the internal object. For advanced usage only.            |
| [`GapSize`](#MemberSizeManufacturingConstraint.GapSize)                                 | Gets or sets the GapSize.                                     |
| [`MaxSize`](#MemberSizeManufacturingConstraint.MaxSize)                                 | Gets or sets the MaxSize.                                     |
| [`MinSize`](#MemberSizeManufacturingConstraint.MinSize)                                 | Gets or sets the MinSize.                                     |
| [`GapSizeControlledType`](#MemberSizeManufacturingConstraint.GapSizeControlledType)     | Gets or sets the GapSizeControlledType.                       |
| [`ScopingMethod`](#MemberSizeManufacturingConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Maximum`](#MemberSizeManufacturingConstraint.Maximum)                                 | Gets or sets the Maximum.                                     |
| [`Minimum`](#MemberSizeManufacturingConstraint.Minimum)                                 | Gets or sets the Minimum.                                     |
| [`Location`](#MemberSizeManufacturingConstraint.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#MemberSizeManufacturingConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#MemberSizeManufacturingConstraint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Selection`](#MemberSizeManufacturingConstraint.Selection)                             | Gets or sets the Selection.                                   |
| [`Children`](#MemberSizeManufacturingConstraint.Children)                               | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MemberSizeManufacturingConstraint.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MemberSizeManufacturingConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MemberSizeManufacturingConstraint.InternalObject"></a>

### *property* MemberSizeManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GapSize"></a>

### *property* MemberSizeManufacturingConstraint.GapSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GapSize.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.MaxSize"></a>

### *property* MemberSizeManufacturingConstraint.MaxSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxSize.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.MinSize"></a>

### *property* MemberSizeManufacturingConstraint.MinSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinSize.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GapSizeControlledType"></a>

### *property* MemberSizeManufacturingConstraint.GapSizeControlledType *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GapSizeControlledType.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.ScopingMethod"></a>

### *property* MemberSizeManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Maximum"></a>

### *property* MemberSizeManufacturingConstraint.Maximum *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Minimum"></a>

### *property* MemberSizeManufacturingConstraint.Minimum *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Location"></a>

### *property* MemberSizeManufacturingConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.DataModelObjectCategory"></a>

### *property* MemberSizeManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Suppressed"></a>

### *property* MemberSizeManufacturingConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Selection"></a>

### *property* MemberSizeManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Children"></a>

### *property* MemberSizeManufacturingConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MemberSizeManufacturingConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Properties"></a>

### *property* MemberSizeManufacturingConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.VisibleProperties"></a>

### *property* MemberSizeManufacturingConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MemberSizeManufacturingConstraint.RenameBasedOnDefinition"></a>

### MemberSizeManufacturingConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Delete"></a>

### MemberSizeManufacturingConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetChildren"></a>

### MemberSizeManufacturingConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MemberSizeManufacturingConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Activate"></a>

### MemberSizeManufacturingConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.CopyTo"></a>

### MemberSizeManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Duplicate"></a>

### MemberSizeManufacturingConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GroupAllSimilarChildren"></a>

### MemberSizeManufacturingConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GroupSimilarObjects"></a>

### MemberSizeManufacturingConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.PropertyByName"></a>

### MemberSizeManufacturingConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.PropertyByAPIName"></a>

### MemberSizeManufacturingConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.CreateParameter"></a>

### MemberSizeManufacturingConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetParameter"></a>

### MemberSizeManufacturingConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.RemoveParameter"></a>

### MemberSizeManufacturingConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
