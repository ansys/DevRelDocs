# `CoSimulationPin`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoSimulationPin"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CoSimulationPin

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CoSimulationPin.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CoSimulationPin.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CoSimulationPin.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CoSimulationPin.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CoSimulationPin.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CoSimulationPin.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CoSimulationPin.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CoSimulationPin.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CoSimulationPin.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CoSimulationPin.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CoSimulationPin.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CoSimulationPin.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CoSimulationPin.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CoSimulationPin.Children)                               | Gets the list of children.                                    |
| [`DOF`](#CoSimulationPin.DOF)                                         | Gets or sets the DOF.                                         |
| [`DataModelObjectCategory`](#CoSimulationPin.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#CoSimulationPin.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`JointType`](#CoSimulationPin.JointType)                             | Gets or sets the Joint Type.                                  |
| [`PinBehavior`](#CoSimulationPin.PinBehavior)                         | Gets or sets the Pin Behavior.                                |
| [`PinNature`](#CoSimulationPin.PinNature)                             | Gets or sets the Pin Nature.                                  |
| [`Properties`](#CoSimulationPin.Properties)                           | Gets the list of properties for this object.                  |
| [`Scope`](#CoSimulationPin.Scope)                                     | Gets or sets the Joint through Scope.                         |
| [`Suppressed`](#CoSimulationPin.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#CoSimulationPin.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CoSimulationPin.Children"></a>

### *property* CoSimulationPin.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.DOF"></a>

### *property* CoSimulationPin.DOF *: [Ansys.Mechanical.DataModel.Enums.KinematicDOF](../../../Mechanical/DataModel/Enums/KinematicDOF.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KinematicDOF) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOF.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.DataModelObjectCategory"></a>

### *property* CoSimulationPin.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.InternalObject"></a>

### *property* CoSimulationPin.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSimplorerPinAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.JointType"></a>

### *property* CoSimulationPin.JointType *: [Ansys.Mechanical.DataModel.Enums.JointType](../../../Mechanical/DataModel/Enums/JointType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.JointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint Type.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PinBehavior"></a>

### *property* CoSimulationPin.PinBehavior *: [Ansys.Mechanical.DataModel.Enums.PinBehavior](../../../Mechanical/DataModel/Enums/PinBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PinBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Pin Behavior.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PinNature"></a>

### *property* CoSimulationPin.PinNature *: [Ansys.Mechanical.DataModel.Enums.PinNature](../../../Mechanical/DataModel/Enums/PinNature.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PinNature) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Pin Nature.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Properties"></a>

### *property* CoSimulationPin.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Scope"></a>

### *property* CoSimulationPin.Scope *: [Ansys.ACT.Automation.Mechanical.Connections.Joint](Connections/Joint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Joint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint through Scope.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Suppressed"></a>

### *property* CoSimulationPin.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.VisibleProperties"></a>

### *property* CoSimulationPin.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoSimulationPin.Activate"></a>

### CoSimulationPin.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.CopyTo"></a>

### CoSimulationPin.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.CreateParameter"></a>

### CoSimulationPin.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Delete"></a>

### CoSimulationPin.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Duplicate"></a>

### CoSimulationPin.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetChildren"></a>

### CoSimulationPin.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetParameter"></a>

### CoSimulationPin.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GroupAllSimilarChildren"></a>

### CoSimulationPin.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GroupSimilarObjects"></a>

### CoSimulationPin.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PropertyByAPIName"></a>

### CoSimulationPin.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PropertyByName"></a>

### CoSimulationPin.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.RemoveParameter"></a>

### CoSimulationPin.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

