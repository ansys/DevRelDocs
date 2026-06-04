# `HousingConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.HousingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.HousingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a HousingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#HousingConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#HousingConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#HousingConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#HousingConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#HousingConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#HousingConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#HousingConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#HousingConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HousingConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#HousingConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#HousingConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#HousingConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#HousingConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#HousingConstraint.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#HousingConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`HousingLocation`](#HousingConstraint.HousingLocation)                 | Gets or sets the HousingLocation.                             |
| [`HousingScopingMethod`](#HousingConstraint.HousingScopingMethod)       | Gets or sets the HousingScopingMethod.                        |
| [`InternalObject`](#HousingConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#HousingConstraint.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#HousingConstraint.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#HousingConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#HousingConstraint.Selection)                             | Gets or sets the Selection.                                   |
| [`Suppressed`](#HousingConstraint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#HousingConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="HousingConstraint.Children"></a>

### *property* HousingConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.DataModelObjectCategory"></a>

### *property* HousingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.HousingLocation"></a>

### *property* HousingConstraint.HousingLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HousingLocation.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.HousingScopingMethod"></a>

### *property* HousingConstraint.HousingScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HousingScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.InternalObject"></a>

### *property* HousingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.Location"></a>

### *property* HousingConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.Properties"></a>

### *property* HousingConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.ScopingMethod"></a>

### *property* HousingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.Selection"></a>

### *property* HousingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.Suppressed"></a>

### *property* HousingConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.VisibleProperties"></a>

### *property* HousingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HousingConstraint.Activate"></a>

### HousingConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.CopyTo"></a>

### HousingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.CreateParameter"></a>

### HousingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.Delete"></a>

### HousingConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.Duplicate"></a>

### HousingConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.GetChildren"></a>

### HousingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.GetParameter"></a>

### HousingConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.GroupAllSimilarChildren"></a>

### HousingConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.GroupSimilarObjects"></a>

### HousingConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.PropertyByAPIName"></a>

### HousingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.PropertyByName"></a>

### HousingConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.RemoveParameter"></a>

### HousingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HousingConstraint.RenameBasedOnDefinition"></a>

### HousingConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

