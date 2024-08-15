# `IMechanicalDataModel`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Interfaces.Mechanical.IMechanicalDataModel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the data model of the Mechanical application.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------|---------------------------------------------------|
| `CurrentUnitFromQuantityName`   | Returns the current unit from a quantity name.    |
| `GetUserObjectById`             | Gets the user object based on the application id. |

### Properties

| Name | Description |
|--------------|-------------------------------------------------------------------------------------------------------------------------|
| `Project`    | Gets the project object. Main object of the tree of Mechanical.                                                         |
| `Tree`       | Gets the tree of Mechanical.                                                                                            |
| `ObjectTags` | Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface. |

<a id="property-detail"></a>

## Property detail

### *property* IMechanicalDataModel.Project *: [Ansys.ACT.Automation.Mechanical.Project](../../../../../v241/Ansys/ACT/Automation/Mechanical/Project.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Project) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the project object. Main object of the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

### *property* IMechanicalDataModel.Tree *: [Ansys.ACT.Automation.Mechanical.Tree](../../../../../v241/Ansys/ACT/Automation/Mechanical/Tree.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Tree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

### *property* IMechanicalDataModel.ObjectTags *: [Ansys.Mechanical.Application.ObjectTags](../../../../../v241/Ansys/Mechanical/Application/ObjectTags.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTags) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### IMechanicalDataModel.CurrentUnitFromQuantityName(quantityName: System.String)

Returns the current unit from a quantity name.

<!-- !! processed by numpydoc !! -->

### IMechanicalDataModel.GetUserObjectById(id: System.Int32)

Gets the user object based on the application id.

<!-- !! processed by numpydoc !! -->

