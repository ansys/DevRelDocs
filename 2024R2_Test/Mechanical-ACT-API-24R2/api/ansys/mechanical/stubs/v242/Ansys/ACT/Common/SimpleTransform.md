# `SimpleTransform`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Common.SimpleTransform

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Exposes simple getters and setters for rigid body transformations.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|--------------------------|-----------------------------------------------------------------------------------|
| `TransformationMatrix`   | TransformationMatrix property.                                                    |
| `IsOrthonormal`          | Returns true if the provided axis vectors are all normalized and orthogonal.      |
| `Translation`            | The translation of the transformation with respect to the global/world coordinate |
| `XAxis`                  | The X-axis orientation of the transformation with respect to the global/world     |
| `YAxis`                  | The Y-axis orientation of the transformation with respect to the global/world     |
| `ZAxis`                  | The X-axis orientation of the transformation with respect to the global/world     |

<a id="property-detail"></a>

## Property detail

### *property* SimpleTransform.TransformationMatrix *: [Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix](../../../../v241/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix) | [None](https://docs.python.org/3/library/constants.html#None)*

TransformationMatrix property.

<!-- !! processed by numpydoc !! -->

### *property* SimpleTransform.IsOrthonormal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Returns true if the provided axis vectors are all normalized and orthogonal.

<!-- !! processed by numpydoc !! -->

### *property* SimpleTransform.Translation *: Ansys.ACT.Core.Math.Point3D | [None](https://docs.python.org/3/library/constants.html#None)*

The translation of the transformation with respect to the global/world coordinate
system.

<!-- !! processed by numpydoc !! -->

### *property* SimpleTransform.XAxis *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The X-axis orientation of the transformation with respect to the global/world
coordinate system.

<!-- !! processed by numpydoc !! -->

### *property* SimpleTransform.YAxis *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The Y-axis orientation of the transformation with respect to the global/world
coordinate system.

<!-- !! processed by numpydoc !! -->

### *property* SimpleTransform.ZAxis *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The X-axis orientation of the transformation with respect to the global/world
coordinate system.

<!-- !! processed by numpydoc !! -->

