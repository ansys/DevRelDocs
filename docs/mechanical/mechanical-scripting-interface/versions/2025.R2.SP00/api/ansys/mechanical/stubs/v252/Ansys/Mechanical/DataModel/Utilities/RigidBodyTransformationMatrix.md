# `RigidBodyTransformationMatrix`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A 4x4 transformation matrix, to be used explicitly for rigid body transformations. The
transformation matrix is in column-major format. Elements 0-3 represent, respectively,
the x-components of the X axis, Y axis, Z axis, and translation with respect to global.
Identically, elements 4-7 represent the y components and elements 8-11 the z components.
Elements 2-15, per rigid-body requirements, are expected to be [0.0, 0.0, 0.0, 1.0].

The ability to piecewise set rotation and translation components precludes the option of
validating the matrix data at every operation. Thus, these values **\*must\*** be checked
before the data is used.

The class Ansys.ACT.Common.SimpleTransform provides a simplified mechanism for working
with rigid body transformations and getting a RigidBodyTransformationMatrix object.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------|------------------------------------------------------------------------------|
| [`Data`](#RigidBodyTransformationMatrix.Data)   | A 16-value list representing a linearized 4x4 transformation matrix.         |
| [`S`](#RigidBodyTransformationMatrix.S)         | Element 15: the transformation scale, which must be ‘1.0’ for rigid body     |
| [`T_x`](#RigidBodyTransformationMatrix.T_x)     | Element 3: the x component of the translation.                               |
| [`T_y`](#RigidBodyTransformationMatrix.T_y)     | Element 7: the y component of the translation.                               |
| [`T_z`](#RigidBodyTransformationMatrix.T_z)     | Element 11: the z component of the translation.                              |
| [`X_x`](#RigidBodyTransformationMatrix.X_x)     | Element 0: the x component of the X axis rotation.                           |
| [`X_y`](#RigidBodyTransformationMatrix.X_y)     | Element 4: the y component of the X axis rotation.                           |
| [`X_z`](#RigidBodyTransformationMatrix.X_z)     | Element 8: the z component of the X axis rotation.                           |
| [`Y_x`](#RigidBodyTransformationMatrix.Y_x)     | Element 1: the x component of the Y axis rotation.                           |
| [`Y_y`](#RigidBodyTransformationMatrix.Y_y)     | Element 5: the y component of the Y axis rotation.                           |
| [`Y_z`](#RigidBodyTransformationMatrix.Y_z)     | Element 9: the z component of the Y axis rotation.                           |
| [`Z_x`](#RigidBodyTransformationMatrix.Z_x)     | Element 2: the x component of the Z axis rotation.                           |
| [`Z_y`](#RigidBodyTransformationMatrix.Z_y)     | Element 6: the y component of the Z axis rotation.                           |
| [`Z_z`](#RigidBodyTransformationMatrix.Z_z)     | Element 10: the z component of the Z axis rotation.                          |
| [`tau_x`](#RigidBodyTransformationMatrix.tau_x) | Element 12: the x component of the shear, which must be ‘0.0’ for rigid body |
| [`tau_y`](#RigidBodyTransformationMatrix.tau_y) | Element 13: the y component of the shear, which must be ‘0.0’ for rigid body |
| [`tau_z`](#RigidBodyTransformationMatrix.tau_z) | Element 14: the z component of the shear, which must be ‘0.0’ for rigid body |

<a id="property-detail"></a>

## Property detail

<a id="RigidBodyTransformationMatrix.Data"></a>

### *property* RigidBodyTransformationMatrix.Data *: List[Any] | [None](https://docs.python.org/3/library/constants.html#None)*

A 16-value list representing a linearized 4x4 transformation matrix.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.S"></a>

### *property* RigidBodyTransformationMatrix.S *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 15: the transformation scale, which must be ‘1.0’ for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.T_x"></a>

### *property* RigidBodyTransformationMatrix.T_x *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 3: the x component of the translation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.T_y"></a>

### *property* RigidBodyTransformationMatrix.T_y *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 7: the y component of the translation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.T_z"></a>

### *property* RigidBodyTransformationMatrix.T_z *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 11: the z component of the translation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.X_x"></a>

### *property* RigidBodyTransformationMatrix.X_x *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 0: the x component of the X axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.X_y"></a>

### *property* RigidBodyTransformationMatrix.X_y *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 4: the y component of the X axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.X_z"></a>

### *property* RigidBodyTransformationMatrix.X_z *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 8: the z component of the X axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Y_x"></a>

### *property* RigidBodyTransformationMatrix.Y_x *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 1: the x component of the Y axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Y_y"></a>

### *property* RigidBodyTransformationMatrix.Y_y *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 5: the y component of the Y axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Y_z"></a>

### *property* RigidBodyTransformationMatrix.Y_z *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 9: the z component of the Y axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Z_x"></a>

### *property* RigidBodyTransformationMatrix.Z_x *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 2: the x component of the Z axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Z_y"></a>

### *property* RigidBodyTransformationMatrix.Z_y *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 6: the y component of the Z axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Z_z"></a>

### *property* RigidBodyTransformationMatrix.Z_z *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 10: the z component of the Z axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.tau_x"></a>

### *property* RigidBodyTransformationMatrix.tau_x *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 12: the x component of the shear, which must be ‘0.0’ for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.tau_y"></a>

### *property* RigidBodyTransformationMatrix.tau_y *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 13: the y component of the shear, which must be ‘0.0’ for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.tau_z"></a>

### *property* RigidBodyTransformationMatrix.tau_z *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Element 14: the z component of the shear, which must be ‘0.0’ for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

