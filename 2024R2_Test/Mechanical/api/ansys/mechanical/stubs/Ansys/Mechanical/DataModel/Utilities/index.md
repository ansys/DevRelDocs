<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Utilities"></a>

<a id="the-utilities-package"></a>

# The `Utilities` package

<a id="summary"></a>

## Summary

### Subpackages

| [`TabularData`](TabularData/index.md#module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Utilities.TabularData)   | TabularData subpackage.   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------|

### Classes

| [`RigidBodyTransformationMatrix`](RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix)       | A 4x4 transformation matrix, to be used explicitly for rigid body transformations. The   |
|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`BeamCoordinateSystem`](BeamCoordinateSystem.md#BeamCoordinateSystem)                                  | BeamCoordinateSystem class.                                                              |
| [`CenterOfGravityCoordinateSystem`](CenterOfGravityCoordinateSystem.md#CenterOfGravityCoordinateSystem) | CenterOfGravityCoordinateSystem class.                                                   |

<a id="description"></a>

## Description

Utilities subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Utilities.RigidBodyTransformationMatrix"></a>

### *class* Utilities.RigidBodyTransformationMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A 4x4 transformation matrix, to be used explicitly for rigid body transformations. The
> transformation matrix is in column-major format. Elements 0-3 represent, respectively,
> the x-components of the X axis, Y axis, Z axis, and translation with respect to global.
> Identically, elements 4-7 represent the y components and elements 8-11 the z components.
> Elements 2-15, per rigid-body requirements, are expected to be [0.0, 0.0, 0.0, 1.0].

> The ability to piecewise set rotation and translation components precludes the option of
> validating the matrix data at every operation. Thus, these values **\*must\*** be checked
> before the data is used.

> The class Ansys.ACT.Common.SimpleTransform provides a simplified mechanism for working
> with rigid body transformations and getting a RigidBodyTransformationMatrix object.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Data`](#Utilities.Data)   | A 16-value list representing a linearized 4x4 transformation matrix.         |
|-----------------------------|------------------------------------------------------------------------------|
| [`X_x`](#Utilities.X_x)     | Element 0: the x component of the X axis rotation.                           |
| [`X_y`](#Utilities.X_y)     | Element 4: the y component of the X axis rotation.                           |
| [`X_z`](#Utilities.X_z)     | Element 8: the z component of the X axis rotation.                           |
| [`Y_x`](#Utilities.Y_x)     | Element 1: the x component of the Y axis rotation.                           |
| [`Y_y`](#Utilities.Y_y)     | Element 5: the y component of the Y axis rotation.                           |
| [`Y_z`](#Utilities.Y_z)     | Element 9: the z component of the Y axis rotation.                           |
| [`Z_x`](#Utilities.Z_x)     | Element 2: the x component of the Z axis rotation.                           |
| [`Z_y`](#Utilities.Z_y)     | Element 6: the y component of the Z axis rotation.                           |
| [`Z_z`](#Utilities.Z_z)     | Element 10: the z component of the Z axis rotation.                          |
| [`T_x`](#Utilities.T_x)     | Element 3: the x component of the translation.                               |
| [`T_y`](#Utilities.T_y)     | Element 7: the y component of the translation.                               |
| [`T_z`](#Utilities.T_z)     | Element 11: the z component of the translation.                              |
| [`tau_x`](#Utilities.tau_x) | Element 12: the x component of the shear, which must be ‘0.0’ for rigid body |
| [`tau_y`](#Utilities.tau_y) | Element 13: the y component of the shear, which must be ‘0.0’ for rigid body |
| [`tau_z`](#Utilities.tau_z) | Element 14: the z component of the shear, which must be ‘0.0’ for rigid body |
| [`S`](#Utilities.S)         | Element 15: the transformation scale, which must be ‘1.0’ for rigid body     |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Utilities import RigidBodyTransformationMatrix
```

<a id="property-detail"></a>

## Property detail

<a id="Utilities.Data"></a>

### *property* Utilities.Data *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

A 16-value list representing a linearized 4x4 transformation matrix.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.X_x"></a>

### *property* Utilities.X_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 0: the x component of the X axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.X_y"></a>

### *property* Utilities.X_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 4: the y component of the X axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.X_z"></a>

### *property* Utilities.X_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 8: the z component of the X axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.Y_x"></a>

### *property* Utilities.Y_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 1: the x component of the Y axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.Y_y"></a>

### *property* Utilities.Y_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 5: the y component of the Y axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.Y_z"></a>

### *property* Utilities.Y_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 9: the z component of the Y axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.Z_x"></a>

### *property* Utilities.Z_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 2: the x component of the Z axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.Z_y"></a>

### *property* Utilities.Z_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 6: the y component of the Z axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.Z_z"></a>

### *property* Utilities.Z_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 10: the z component of the Z axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.T_x"></a>

### *property* Utilities.T_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 3: the x component of the translation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.T_y"></a>

### *property* Utilities.T_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 7: the y component of the translation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.T_z"></a>

### *property* Utilities.T_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 11: the z component of the translation.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.tau_x"></a>

### *property* Utilities.tau_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 12: the x component of the shear, which must be ‘0.0’ for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.tau_y"></a>

### *property* Utilities.tau_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 13: the y component of the shear, which must be ‘0.0’ for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.tau_z"></a>

### *property* Utilities.tau_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 14: the z component of the shear, which must be ‘0.0’ for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.S"></a>

### *property* Utilities.S *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 15: the transformation scale, which must be ‘1.0’ for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.BeamCoordinateSystem"></a>

### *class* Utilities.BeamCoordinateSystem

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> BeamCoordinateSystem class.

> <!-- !! processed by numpydoc !! -->

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Utilities import BeamCoordinateSystem
```

<a id="Utilities.CenterOfGravityCoordinateSystem"></a>

### *class* Utilities.CenterOfGravityCoordinateSystem

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> CenterOfGravityCoordinateSystem class.

> <!-- !! processed by numpydoc !! -->

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Utilities import CenterOfGravityCoordinateSystem
```
