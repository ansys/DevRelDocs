# `CoSimulationPin`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.CoSimulationPin"></a>

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

### *property* CoSimulationPin.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.DOF"></a>

### *property* CoSimulationPin.DOF *: [Ansys.Mechanical.DataModel.Enums.KinematicDOF](../../../Mechanical/DataModel/Enums/KinematicDOF.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.KinematicDOF) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOF.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.DataModelObjectCategory"></a>

### *property* CoSimulationPin.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.InternalObject"></a>

### *property* CoSimulationPin.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSimplorerPinAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.JointType"></a>

### *property* CoSimulationPin.JointType *: [Ansys.Mechanical.DataModel.Enums.JointType](../../../Mechanical/DataModel/Enums/JointType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.JointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint Type.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PinBehavior"></a>

### *property* CoSimulationPin.PinBehavior *: [Ansys.Mechanical.DataModel.Enums.PinBehavior](../../../Mechanical/DataModel/Enums/PinBehavior.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.PinBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Pin Behavior.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PinNature"></a>

### *property* CoSimulationPin.PinNature *: [Ansys.Mechanical.DataModel.Enums.PinNature](../../../Mechanical/DataModel/Enums/PinNature.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.PinNature) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Pin Nature.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Properties"></a>

### *property* CoSimulationPin.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Scope"></a>

### *property* CoSimulationPin.Scope *: [Ansys.ACT.Automation.Mechanical.Connections.Joint](../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Joint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint through Scope.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Suppressed"></a>

### *property* CoSimulationPin.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.VisibleProperties"></a>

### *property* CoSimulationPin.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoSimulationPin.Activate"></a>

### CoSimulationPin.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.CopyTo"></a>

### CoSimulationPin.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.CreateParameter"></a>

### CoSimulationPin.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Delete"></a>

### CoSimulationPin.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Duplicate"></a>

### CoSimulationPin.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetChildren"></a>

### CoSimulationPin.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetParameter"></a>

### CoSimulationPin.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GroupAllSimilarChildren"></a>

### CoSimulationPin.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GroupSimilarObjects"></a>

### CoSimulationPin.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PropertyByAPIName"></a>

### CoSimulationPin.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PropertyByName"></a>

### CoSimulationPin.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.RemoveParameter"></a>

### CoSimulationPin.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

