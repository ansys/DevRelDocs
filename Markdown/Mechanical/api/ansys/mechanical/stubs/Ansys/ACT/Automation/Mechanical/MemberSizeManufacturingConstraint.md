# MemberSizeManufacturingConstraint

### *class* MemberSizeManufacturingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MemberSizeManufacturingConstraint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`RenameBasedOnDefinition`](#MemberSizeManufacturingConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`GapSize`](#MemberSizeManufacturingConstraint.GapSize)                                                             | Gets or sets the GapSize.                                     |
| [`MaxSize`](#MemberSizeManufacturingConstraint.MaxSize)                                                             | Gets or sets the MaxSize.                                     |
| [`MinSize`](#MemberSizeManufacturingConstraint.MinSize)                                                             | Gets or sets the MinSize.                                     |
| [`GapSizeControlledType`](#MemberSizeManufacturingConstraint.GapSizeControlledType)                                 | Gets or sets the GapSizeControlledType.                       |
| [`ScopingMethod`](#MemberSizeManufacturingConstraint.ScopingMethod)                                                 | Gets or sets the ScopingMethod.                               |
| [`Maximum`](#MemberSizeManufacturingConstraint.Maximum)                                                             | Gets or sets the Maximum.                                     |
| [`Minimum`](#MemberSizeManufacturingConstraint.Minimum)                                                             | Gets or sets the Minimum.                                     |
| [`Location`](#MemberSizeManufacturingConstraint.Location)                                                           | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#MemberSizeManufacturingConstraint.Suppressed)                                                       | Gets or sets the Suppressed.                                  |
| [`Selection`](#MemberSizeManufacturingConstraint.Selection)                                                         | Gets or sets the Selection.                                   |
| [`Children`](#MemberSizeManufacturingConstraint.Children)                                                           | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MemberSizeManufacturingConstraint.Properties)                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MemberSizeManufacturingConstraint.VisibleProperties)                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MemberSizeManufacturingConstraint
```

## Property detail

### *property* MemberSizeManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.GapSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GapSize.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.MaxSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxSize.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.MinSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinSize.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.GapSizeControlledType *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ManuMemberSizeControlledType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GapSizeControlledType.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.Maximum *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ManuMemberSizeControlledType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.Minimum *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ManuMemberSizeControlledType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MemberSizeManufacturingConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MemberSizeManufacturingConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MemberSizeManufacturingConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
