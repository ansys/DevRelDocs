# `ReactionForceConstraint`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ReactionForceConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ReactionForceConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ReactionForceConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ReactionForceConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ReactionForceConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ReactionForceConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ReactionForceConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ReactionForceConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ReactionForceConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ReactionForceConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ReactionForceConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ReactionForceConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ReactionForceConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ReactionForceConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ReactionForceConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ReactionForceConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`AxisSelection`](#ReactionForceConstraint.AxisSelection)                     | Gets or sets the AxisSelection.                                                          |
| [`BoundType`](#ReactionForceConstraint.BoundType)                             | Gets or sets the BoundType.                                                              |
| [`Children`](#ReactionForceConstraint.Children)                               | Gets the list of children.                                                               |
| [`DataModelObjectCategory`](#ReactionForceConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#ReactionForceConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InternalObject`](#ReactionForceConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`Location`](#ReactionForceConstraint.Location)                               | Gets or sets the Location.                                                               |
| [`Properties`](#ReactionForceConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`ReactionForceCriteria`](#ReactionForceConstraint.ReactionForceCriteria)     | Gets or sets the ReactionForceCriteria.                                                  |
| [`ScopingMethod`](#ReactionForceConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                          |
| [`Suppressed`](#ReactionForceConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`VisibleProperties`](#ReactionForceConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |
| [`XComponentMax`](#ReactionForceConstraint.XComponentMax)                     | Gets or sets the XComponentMax.                                                          |
| [`YComponentMax`](#ReactionForceConstraint.YComponentMax)                     | Gets or sets the YComponentMax.                                                          |
| [`ZComponentMax`](#ReactionForceConstraint.ZComponentMax)                     | Gets or sets the ZComponentMax.                                                          |

<a id="property-detail"></a>

## Property detail

<a id="ReactionForceConstraint.AxisSelection"></a>

### *property* ReactionForceConstraint.AxisSelection *: [Ansys.Mechanical.DataModel.Enums.AxisSelectionType](../../../Mechanical/DataModel/Enums/AxisSelectionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AxisSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisSelection.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.BoundType"></a>

### *property* ReactionForceConstraint.BoundType *: [Ansys.Mechanical.DataModel.Enums.TopoBoundType](../../../Mechanical/DataModel/Enums/TopoBoundType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TopoBoundType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundType.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.Children"></a>

### *property* ReactionForceConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.DataModelObjectCategory"></a>

### *property* ReactionForceConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.EnvironmentSelection"></a>

### *property* ReactionForceConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.InternalObject"></a>

### *property* ReactionForceConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.Location"></a>

### *property* ReactionForceConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.Properties"></a>

### *property* ReactionForceConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.ReactionForceCriteria"></a>

### *property* ReactionForceConstraint.ReactionForceCriteria *: [Ansys.Mechanical.DataModel.Enums.ReactionForceCriteriaType](../../../Mechanical/DataModel/Enums/ReactionForceCriteriaType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ReactionForceCriteriaType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReactionForceCriteria.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.ScopingMethod"></a>

### *property* ReactionForceConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.Suppressed"></a>

### *property* ReactionForceConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.VisibleProperties"></a>

### *property* ReactionForceConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.XComponentMax"></a>

### *property* ReactionForceConstraint.XComponentMax *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponentMax.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.YComponentMax"></a>

### *property* ReactionForceConstraint.YComponentMax *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponentMax.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.ZComponentMax"></a>

### *property* ReactionForceConstraint.ZComponentMax *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponentMax.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ReactionForceConstraint.Activate"></a>

### ReactionForceConstraint.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.CopyTo"></a>

### ReactionForceConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.CreateParameter"></a>

### ReactionForceConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.Delete"></a>

### ReactionForceConstraint.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.Duplicate"></a>

### ReactionForceConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.GetChildren"></a>

### ReactionForceConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.GetParameter"></a>

### ReactionForceConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.GroupAllSimilarChildren"></a>

### ReactionForceConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.GroupSimilarObjects"></a>

### ReactionForceConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.PropertyByAPIName"></a>

### ReactionForceConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.PropertyByName"></a>

### ReactionForceConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.RemoveParameter"></a>

### ReactionForceConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionForceConstraint.RenameBasedOnDefinition"></a>

### ReactionForceConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

