# IMechanicalDataModel

### *class* IMechanicalDataModel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the data model of the Mechanical application.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`CurrentUnitFromQuantityName`](#IMechanicalDataModel.CurrentUnitFromQuantityName)   | Returns the current unit from a quantity name.    |
|--------------------------------------------------------------------------------------|---------------------------------------------------|
| [`GetUserObjectById`](#IMechanicalDataModel.GetUserObjectById)                       | Gets the user object based on the application id. |

### Properties

| [`Project`](../../Automation/Mechanical/Project.md#Project)              | Gets the project object. Main object of the tree of Mechanical.                                                         |
|--------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`Tree`](../../Automation/Mechanical/Tree.md#Tree)                       | Gets the tree of Mechanical.                                                                                            |
| [`ObjectTags`](../../../Mechanical/Application/ObjectTags.md#ObjectTags) | Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalDataModel
```

## Property detail

### *property* IMechanicalDataModel.Project *: [Ansys.ACT.Automation.Mechanical.Project](../../Automation/Mechanical/Project.md#Project) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the project object. Main object of the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

### *property* IMechanicalDataModel.Tree *: [Ansys.ACT.Automation.Mechanical.Tree](../../Automation/Mechanical/Tree.md#Tree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

### *property* IMechanicalDataModel.ObjectTags *: [Ansys.Mechanical.Application.ObjectTags](../../../Mechanical/Application/ObjectTags.md#ObjectTags) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface.

<!-- !! processed by numpydoc !! -->

## Method detail

### IMechanicalDataModel.CurrentUnitFromQuantityName(quantityName: System.String)

Returns the current unit from a quantity name.

<!-- !! processed by numpydoc !! -->

### IMechanicalDataModel.GetUserObjectById(id: System.Int32)

Gets the user object based on the application id.

<!-- !! processed by numpydoc !! -->
