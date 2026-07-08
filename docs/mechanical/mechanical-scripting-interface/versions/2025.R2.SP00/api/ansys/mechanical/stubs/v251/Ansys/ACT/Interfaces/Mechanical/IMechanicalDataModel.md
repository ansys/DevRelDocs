# `IMechanicalDataModel`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Interfaces.Mechanical.IMechanicalDataModel"></a>

#### *class* Ansys.ACT.Interfaces.Mechanical.IMechanicalDataModel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the data model of the Mechanical application.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------|
| [`CurrentUnitFromQuantityName`](#IMechanicalDataModel.CurrentUnitFromQuantityName)   | Returns the current unit from a quantity name.    |
| [`GetUserObjectById`](#IMechanicalDataModel.GetUserObjectById)                       | Gets the user object based on the application id. |

### Properties

| Name | Description |
|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [`ObjectTags`](#IMechanicalDataModel.ObjectTags)   | Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface.   |
| [`Project`](#IMechanicalDataModel.Project)         | Gets the project object. Main object of the tree of Mechanical.                                                           |
| [`Tree`](#IMechanicalDataModel.Tree)               | Gets the tree of Mechanical.                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="IMechanicalDataModel.ObjectTags"></a>

### *property* IMechanicalDataModel.ObjectTags *: [Ansys.Mechanical.Application.ObjectTags](../../../Mechanical/Application/ObjectTags.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Application.ObjectTags) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.Project"></a>

### *property* IMechanicalDataModel.Project *: [Ansys.ACT.Automation.Mechanical.Project](../../Automation/Mechanical/Project.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Project) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the project object. Main object of the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.Tree"></a>

### *property* IMechanicalDataModel.Tree *: [Ansys.ACT.Automation.Mechanical.Tree](../../Automation/Mechanical/Tree.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Tree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalDataModel.CurrentUnitFromQuantityName"></a>

### IMechanicalDataModel.CurrentUnitFromQuantityName(quantityName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Returns the current unit from a quantity name.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.GetUserObjectById"></a>

### IMechanicalDataModel.GetUserObjectById(id: [int](https://docs.python.org/3/library/functions.html#int))

Gets the user object based on the application id.

<!-- !! processed by numpydoc !! -->

