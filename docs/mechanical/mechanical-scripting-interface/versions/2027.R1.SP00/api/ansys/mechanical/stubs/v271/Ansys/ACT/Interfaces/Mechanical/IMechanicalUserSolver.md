# `IMechanicalUserSolver`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalUserSolver"></a>

#### *class* Ansys.ACT.Interfaces.Mechanical.IMechanicalUserSolver

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Mechanical user solver.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-------------------------------------------|
| [`NotifyChange`](#IMechanicalUserSolver.NotifyChange)               | NotifyChange method.                      |
| [`SetDefaultSelection`](#IMechanicalUserSolver.SetDefaultSelection) | Sets the default selection of the entity. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|-------------------------------|
| [`AllProperties`](#IMechanicalUserSolver.AllProperties)           | AllProperties property.       |
| [`Analysis`](#Analysis)    | Gets the associated analysis. |
| [`AnalysisType`](#IMechanicalUserSolver.AnalysisType)             | AnalysisType property.        |
| [`Attributes`](#IMechanicalUserSolver.Attributes)                 | Attributes property.          |
| [`Caption`](#IMechanicalUserSolver.Caption)                       | Caption property.             |
| [`Children`](#IMechanicalUserSolver.Children)                     | Children property.            |
| [`Controller`](#IMechanicalUserSolver.Controller)                 | Controller property.          |
| [`Extension`](#IMechanicalUserSolver.Extension)                   | Extension property.           |
| [`Icon`](#IMechanicalUserSolver.Icon)                             | Icon property.                |
| [`Id`](#IMechanicalUserSolver.Id)                                 | Id property.                  |
| [`InternalCaption`](#IMechanicalUserSolver.InternalCaption)       | InternalCaption property.     |
| [`Name`](#IMechanicalUserSolver.Name)                             | Name property.                |
| [`ObjectLocation`](#IMechanicalUserSolver.ObjectLocation)         | ObjectLocation property.      |
| [`ObjectType`](#IMechanicalUserSolver.ObjectType)                 | ObjectType property.          |
| [`Parent`](#IMechanicalUserSolver.Parent)                         | Parent property.              |
| [`PhysicsType`](#IMechanicalUserSolver.PhysicsType)               | PhysicsType property.         |
| [`Properties`](#IMechanicalUserSolver.Properties)                 | Properties property.          |
| [`State`](#IMechanicalUserSolver.State)                           | State property.               |
| [`SupportedLocations`](#IMechanicalUserSolver.SupportedLocations) | SupportedLocations property.  |
| [`Version`](#IMechanicalUserSolver.Version)                       | Version property.             |

<a id="property-detail"></a>

## Property detail

<a id="IMechanicalUserSolver.AllProperties"></a>

### *property* IMechanicalUserSolver.AllProperties *: Iterable[Ansys.ACT.Interfaces.UserObject.ISimProperty] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AllProperties property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Analysis"></a>

### *property* IMechanicalUserSolver.Analysis *: Ansys.ACT.Interfaces.Analysis.IAnalysis | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the associated analysis.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.AnalysisType"></a>

### *property* IMechanicalUserSolver.AnalysisType *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisType property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Attributes"></a>

### *property* IMechanicalUserSolver.Attributes *: [Ansys.ACT.Interfaces.Common.IAttributeCollection](../Common/IAttributeCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IAttributeCollection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Attributes property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Caption"></a>

### *property* IMechanicalUserSolver.Caption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Caption property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Children"></a>

### *property* IMechanicalUserSolver.Children *: Iterable[Ansys.ACT.Interfaces.UserObject.IUserObject] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Children property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Controller"></a>

### *property* IMechanicalUserSolver.Controller *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controller property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Extension"></a>

### *property* IMechanicalUserSolver.Extension *: [Ansys.ACT.Interfaces.Common.IExtension](../Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Extension property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Icon"></a>

### *property* IMechanicalUserSolver.Icon *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Icon property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Id"></a>

### *property* IMechanicalUserSolver.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.InternalCaption"></a>

### *property* IMechanicalUserSolver.InternalCaption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalCaption property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Name"></a>

### *property* IMechanicalUserSolver.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.ObjectLocation"></a>

### *property* IMechanicalUserSolver.ObjectLocation *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectLocation property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.ObjectType"></a>

### *property* IMechanicalUserSolver.ObjectType *: Ansys.ACT.Interfaces.UserObject.ObjectTypeEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectType property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Parent"></a>

### *property* IMechanicalUserSolver.Parent *: Ansys.ACT.Interfaces.DataModel.IDataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.PhysicsType"></a>

### *property* IMechanicalUserSolver.PhysicsType *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

PhysicsType property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Properties"></a>

### *property* IMechanicalUserSolver.Properties *: Ansys.ACT.Interfaces.UserObject.IPropertyCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Properties property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.State"></a>

### *property* IMechanicalUserSolver.State *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.SupportedLocations"></a>

### *property* IMechanicalUserSolver.SupportedLocations *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupportedLocations property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.Version"></a>

### *property* IMechanicalUserSolver.Version *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Version property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalUserSolver.NotifyChange"></a>

### IMechanicalUserSolver.NotifyChange() → [None](https://docs.python.org/3/builtins/constants.html#None)

NotifyChange method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserSolver.SetDefaultSelection"></a>

### IMechanicalUserSolver.SetDefaultSelection(selection: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo), notifyChange: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the default selection of the entity.

<!-- !! processed by numpydoc !! -->

