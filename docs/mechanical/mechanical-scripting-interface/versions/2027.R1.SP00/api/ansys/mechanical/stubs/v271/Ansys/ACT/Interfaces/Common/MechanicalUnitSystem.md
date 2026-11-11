# `MechanicalUnitSystem`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.MechanicalUnitSystem"></a>

#### *class* Ansys.ACT.Interfaces.Common.MechanicalUnitSystem

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Contains all possible mechanical unit systems (standard and consistent).
The standard unit systems are used in the mechanical UI. (From the toolbar menu “Unit”). Be aware that the standard unit systems are NOT consistent.
The consistent unit systems are mostly used in the solver.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| [`Equals`](#MechanicalUnitSystem.Equals)                                           | Specifies whether this instance of MechanicalUnitSystem is equal to the given MechanicalUnitSystemEnum value.   |
| [`GetConsistentUnitSystem`](#MechanicalUnitSystem.GetConsistentUnitSystem)         | Gets the consistent unit system (i.e. solver unit system.)                                                      |
| [`GetMechanicalUnitSystemType`](#MechanicalUnitSystem.GetMechanicalUnitSystemType) | Get the MechanicalUnitSystemEnum for this MechanicalUnitSystem                                                  |
| [`ToString`](#MechanicalUnitSystem.ToString)                                       | ToString method.                                                                                                |

### Properties

| Name | Description |
|--------------------------------------------------------|--------------------------|
| [`IsConsistent`](#MechanicalUnitSystem.IsConsistent)   | IsConsistent property.   |

<a id="property-detail"></a>

## Property detail

<a id="MechanicalUnitSystem.IsConsistent"></a>

### *property* MechanicalUnitSystem.IsConsistent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsConsistent property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MechanicalUnitSystem.Equals"></a>

### MechanicalUnitSystem.Equals(mechanicalUnitSystemType: [Ansys.ACT.Interfaces.Common.MechanicalUnitSystemEnum](MechanicalUnitSystemEnum.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.MechanicalUnitSystemEnum)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Specifies whether this instance of MechanicalUnitSystem is equal to the given MechanicalUnitSystemEnum value.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalUnitSystem.GetConsistentUnitSystem"></a>

### MechanicalUnitSystem.GetConsistentUnitSystem() → [Ansys.ACT.Interfaces.Common.MechanicalUnitSystem](#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.MechanicalUnitSystem)

Gets the consistent unit system (i.e. solver unit system.)

<!-- !! processed by numpydoc !! -->

<a id="MechanicalUnitSystem.GetMechanicalUnitSystemType"></a>

### MechanicalUnitSystem.GetMechanicalUnitSystemType() → [Ansys.ACT.Interfaces.Common.MechanicalUnitSystemEnum](MechanicalUnitSystemEnum.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.MechanicalUnitSystemEnum)

Get the MechanicalUnitSystemEnum for this MechanicalUnitSystem

<!-- !! processed by numpydoc !! -->

<a id="MechanicalUnitSystem.ToString"></a>

### MechanicalUnitSystem.ToString() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

ToString method.

<!-- !! processed by numpydoc !! -->

