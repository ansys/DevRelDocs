<a id="module-ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical"></a>

<a id="the-mechanical-package"></a>

# The `Mechanical` package

<a id="summary"></a>

## Summary

### Interfaces

| [`IMechanicalGraphics`](IMechanicalGraphics.md#IMechanicalGraphics)                | Interface for MechanicalGraphics.                     |
|------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`IMechanicalSelectionInfo`](IMechanicalSelectionInfo.md#IMechanicalSelectionInfo) | Defines the mechanical selection information.         |
| [`IMechanicalDataModel`](IMechanicalDataModel.md#IMechanicalDataModel)             | Defines the data model of the Mechanical application. |
| [`IMechanicalExtAPI`](IMechanicalExtAPI.md#IMechanicalExtAPI)                      | Exposes the main entry point of all ATC APIs.         |
| [`IMechanicalUserLoad`](IMechanicalUserLoad.md#IMechanicalUserLoad)                | Defines a Mechanical user load.                       |
| [`IMechanicalUserObject`](IMechanicalUserObject.md#IMechanicalUserObject)          | Defines a Mechanical user object.                     |
| [`IMechanicalUserResult`](IMechanicalUserResult.md#IMechanicalUserResult)          | Defines a Mechanical user result.                     |
| [`IMechanicalUserSolver`](IMechanicalUserSolver.md#IMechanicalUserSolver)          | Defines a Mechanical user solver.                     |

### Enums

| [`MechanicalPanelEnum`](MechanicalPanelEnum.md#MechanicalPanelEnum)   | Specifies the panel type.   |
|-----------------------------------------------------------------------|-----------------------------|

<a id="description"></a>

## Description

Mechanical subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Mechanical.IMechanicalGraphics"></a>

### *class* Mechanical.IMechanicalGraphics

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Interface for MechanicalGraphics.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ModelViewManager`](../../Common/Graphics/ModelViewManager.md#ModelViewManager)   | An instance of the ModelViewManager.   |
|------------------------------------------------------------------------------------|----------------------------------------|
| [`SectionPlanes`](../../../Mechanical/Graphics/SectionPlanes.md#SectionPlanes)     | An instance of the SectionPlanes.      |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalGraphics
```

<a id="property-detail"></a>

## Property detail

<a id="Mechanical.ModelViewManager"></a>

### *property* Mechanical.ModelViewManager *: [Ansys.ACT.Interfaces.Graphics.IModelViewManager](../Graphics/IModelViewManager.md#IModelViewManager) | [None](https://docs.python.org/3/library/constants.html#None)*

An instance of the ModelViewManager.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.SectionPlanes"></a>

### *property* Mechanical.SectionPlanes *: [Ansys.Mechanical.Graphics.SectionPlanes](../../../Mechanical/Graphics/SectionPlanes.md#SectionPlanes) | [None](https://docs.python.org/3/library/constants.html#None)*

An instance of the SectionPlanes.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.IMechanicalSelectionInfo"></a>

### *class* Mechanical.IMechanicalSelectionInfo

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the mechanical selection information.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Entities`](#Mechanical.Entities)                     | Gets the list of selected geometry entities.                   |
|--------------------------------------------------------|----------------------------------------------------------------|
| [`ElementFaceIndices`](#Mechanical.ElementFaceIndices) | Gets the list indices needed to define the face of an element. |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalSelectionInfo
```

<a id="id2"></a>

## Property detail

<a id="Mechanical.Entities"></a>

### *property* Mechanical.Entities *: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IGeoEntity] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of selected geometry entities.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.ElementFaceIndices"></a>

### *property* Mechanical.ElementFaceIndices *: System.Collections.Generic.IList[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list indices needed to define the face of an element.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.IMechanicalDataModel"></a>

### *class* Mechanical.IMechanicalDataModel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the data model of the Mechanical application.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`CurrentUnitFromQuantityName`](#Mechanical.CurrentUnitFromQuantityName)   | Returns the current unit from a quantity name.    |
|----------------------------------------------------------------------------|---------------------------------------------------|
| [`GetUserObjectById`](#Mechanical.GetUserObjectById)                       | Gets the user object based on the application id. |

### Properties

| [`Project`](../../Automation/Mechanical/Project.md#Project)              | Gets the project object. Main object of the tree of Mechanical.                                                         |
|--------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`Tree`](../../Automation/Mechanical/Tree.md#Tree)                       | Gets the tree of Mechanical.                                                                                            |
| [`ObjectTags`](../../../Mechanical/Application/ObjectTags.md#ObjectTags) | Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface. |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalDataModel
```

<a id="id4"></a>

## Property detail

<a id="Mechanical.Project"></a>

### *property* Mechanical.Project *: [Ansys.ACT.Automation.Mechanical.Project](../../Automation/Mechanical/Project.md#Project) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the project object. Main object of the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.Tree"></a>

### *property* Mechanical.Tree *: [Ansys.ACT.Automation.Mechanical.Tree](../../Automation/Mechanical/Tree.md#Tree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.ObjectTags"></a>

### *property* Mechanical.ObjectTags *: [Ansys.Mechanical.Application.ObjectTags](../../../Mechanical/Application/ObjectTags.md#ObjectTags) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Mechanical.CurrentUnitFromQuantityName"></a>

### Mechanical.CurrentUnitFromQuantityName(quantityName: System.String)

Returns the current unit from a quantity name.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.GetUserObjectById"></a>

### Mechanical.GetUserObjectById(id: System.Int32)

Gets the user object based on the application id.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.IMechanicalExtAPI"></a>

### *class* Mechanical.IMechanicalExtAPI

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Exposes the main entry point of all ATC APIs.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`UnlockPrePostLicense`](#Mechanical.UnlockPrePostLicense)   | R                                                   |
|--------------------------------------------------------------|-----------------------------------------------------|
| [`LockPrePostLicense`](#Mechanical.LockPrePostLicense)       | Locks the license used by the PRE/POST application. |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalExtAPI
```

<a id="id6"></a>

## Method detail

<a id="Mechanical.UnlockPrePostLicense"></a>

### Mechanical.UnlockPrePostLicense()

R
: Unlocks the license used by the PRE/POST application. This is required if you want to manually launch the Ansys solver.
  You must relock the license after its use. If you don’t relock the license, the PRE/POST application will be in read-only mode.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.LockPrePostLicense"></a>

### Mechanical.LockPrePostLicense()

Locks the license used by the PRE/POST application.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.IMechanicalUserLoad"></a>

### *class* Mechanical.IMechanicalUserLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Mechanical user load.

> <!-- !! processed by numpydoc !! -->

<a id="id7"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalUserLoad
```

<a id="Mechanical.IMechanicalUserObject"></a>

### *class* Mechanical.IMechanicalUserObject

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Mechanical user object.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Analysis`](../../Automation/Mechanical/Analysis.md#Analysis)   | Gets the associated analysis.   |
|------------------------------------------------------------------|---------------------------------|

<a id="id8"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalUserObject
```

<a id="id9"></a>

## Property detail

<a id="Mechanical.Analysis"></a>

### *property* Mechanical.Analysis *: Ansys.ACT.Interfaces.Analysis.IAnalysis | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the associated analysis.

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.IMechanicalUserResult"></a>

### *class* Mechanical.IMechanicalUserResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Mechanical user result.

> <!-- !! processed by numpydoc !! -->

<a id="id10"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalUserResult
```

<a id="Mechanical.IMechanicalUserSolver"></a>

### *class* Mechanical.IMechanicalUserSolver

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Mechanical user solver.

> <!-- !! processed by numpydoc !! -->

<a id="id11"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalUserSolver
```

<a id="Mechanical.MechanicalPanelEnum"></a>

### *class* Mechanical.MechanicalPanelEnum

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the panel type.

> <!-- !! processed by numpydoc !! -->

### Attributes

| [`DataView`](#Mechanical.DataView)                                |    |
|-------------------------------------------------------------------|----|
| [`Worksheet`](../../Automation/Mechanical/Worksheet.md#Worksheet) |    |
| [`TabularData`](#Mechanical.TabularData)                          |    |
| [`Graph`](#Mechanical.Graph)                                      |    |
| [`Outline`](#Mechanical.Outline)                                  |    |
| [`Graphics`](#Mechanical.Graphics)                                |    |
| [`Wizard`](#Mechanical.Wizard)                                    |    |

<a id="id12"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import MechanicalPanelEnum
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="Mechanical.DataView"></a>

### Mechanical.DataView *= 0*

<a id="Mechanical.Worksheet"></a>

### Mechanical.Worksheet *= 1*

<a id="Mechanical.TabularData"></a>

### Mechanical.TabularData *= 2*

<a id="Mechanical.Graph"></a>

### Mechanical.Graph *= 3*

<a id="Mechanical.Outline"></a>

### Mechanical.Outline *= 4*

<a id="Mechanical.Graphics"></a>

### Mechanical.Graphics *= 5*

<a id="Mechanical.Wizard"></a>

### Mechanical.Wizard *= 6*
