# `RigidBodyTransformationMatrix`



#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix

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
|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| [`Data`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.Data)   | A 16-value list representing a linearized 4x4 transformation matrix.         |
| [`X_x`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.X_x)     | Element 0: the x component of the X axis rotation.                           |
| [`X_y`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.X_y)     | Element 4: the y component of the X axis rotation.                           |
| [`X_z`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.X_z)     | Element 8: the z component of the X axis rotation.                           |
| [`Y_x`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.Y_x)     | Element 1: the x component of the Y axis rotation.                           |
| [`Y_y`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.Y_y)     | Element 5: the y component of the Y axis rotation.                           |
| [`Y_z`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.Y_z)     | Element 9: the z component of the Y axis rotation.                           |
| [`Z_x`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.Z_x)     | Element 2: the x component of the Z axis rotation.                           |
| [`Z_y`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.Z_y)     | Element 6: the y component of the Z axis rotation.                           |
| [`Z_z`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.Z_z)     | Element 10: the z component of the Z axis rotation.                          |
| [`T_x`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.T_x)     | Element 3: the x component of the translation.                               |
| [`T_y`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.T_y)     | Element 7: the y component of the translation.                               |
| [`T_z`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.T_z)     | Element 11: the z component of the translation.                              |
| [`tau_x`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.tau_x) | Element 12: the x component of the shear, which must be â€˜0.0' for rigid body |
| [`tau_y`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.tau_y) | Element 13: the y component of the shear, which must be â€˜0.0' for rigid body |
| [`tau_z`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.tau_z) | Element 14: the z component of the shear, which must be â€˜0.0' for rigid body |
| [`S`](../../../../../v242/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix.S)         | Element 15: the transformation scale, which must be â€˜1.0' for rigid body     |

<a id="property-detail"></a>

## Property detail

<a id="RigidBodyTransformationMatrix.Data"></a>

### *property* RigidBodyTransformationMatrix.Data *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

A 16-value list representing a linearized 4x4 transformation matrix.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.X_x"></a>

### *property* RigidBodyTransformationMatrix.X_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 0: the x component of the X axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.X_y"></a>

### *property* RigidBodyTransformationMatrix.X_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 4: the y component of the X axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.X_z"></a>

### *property* RigidBodyTransformationMatrix.X_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 8: the z component of the X axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Y_x"></a>

### *property* RigidBodyTransformationMatrix.Y_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 1: the x component of the Y axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Y_y"></a>

### *property* RigidBodyTransformationMatrix.Y_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 5: the y component of the Y axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Y_z"></a>

### *property* RigidBodyTransformationMatrix.Y_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 9: the z component of the Y axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Z_x"></a>

### *property* RigidBodyTransformationMatrix.Z_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 2: the x component of the Z axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Z_y"></a>

### *property* RigidBodyTransformationMatrix.Z_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 6: the y component of the Z axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.Z_z"></a>

### *property* RigidBodyTransformationMatrix.Z_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 10: the z component of the Z axis rotation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.T_x"></a>

### *property* RigidBodyTransformationMatrix.T_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 3: the x component of the translation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.T_y"></a>

### *property* RigidBodyTransformationMatrix.T_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 7: the y component of the translation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.T_z"></a>

### *property* RigidBodyTransformationMatrix.T_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 11: the z component of the translation.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.tau_x"></a>

### *property* RigidBodyTransformationMatrix.tau_x *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 12: the x component of the shear, which must be â€˜0.0' for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.tau_y"></a>

### *property* RigidBodyTransformationMatrix.tau_y *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 13: the y component of the shear, which must be â€˜0.0' for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.tau_z"></a>

### *property* RigidBodyTransformationMatrix.tau_z *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 14: the z component of the shear, which must be â€˜0.0' for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

<a id="RigidBodyTransformationMatrix.S"></a>

### *property* RigidBodyTransformationMatrix.S *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Element 15: the transformation scale, which must be â€˜1.0' for rigid body
transformations.

<!-- !! processed by numpydoc !! -->

