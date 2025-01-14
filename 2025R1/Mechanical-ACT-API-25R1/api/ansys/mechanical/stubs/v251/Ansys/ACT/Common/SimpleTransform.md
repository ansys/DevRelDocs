# `SimpleTransform`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Common.SimpleTransform"></a>

#### *class* Ansys.ACT.Common.SimpleTransform

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Exposes simple getters and setters for rigid body transformations.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`IsOrthonormal`](#SimpleTransform.IsOrthonormal)               | Returns true if the provided axis vectors are all normalized and orthogonal.      |
| [`TransformationMatrix`](#SimpleTransform.TransformationMatrix) | TransformationMatrix property.                                                    |
| [`Translation`](#SimpleTransform.Translation)                   | The translation of the transformation with respect to the global/world coordinate |
| [`XAxis`](#SimpleTransform.XAxis)                               | The X-axis orientation of the transformation with respect to the global/world     |
| [`YAxis`](#SimpleTransform.YAxis)                               | The Y-axis orientation of the transformation with respect to the global/world     |
| [`ZAxis`](#SimpleTransform.ZAxis)                               | The X-axis orientation of the transformation with respect to the global/world     |

<a id="property-detail"></a>

## Property detail

<a id="SimpleTransform.IsOrthonormal"></a>

### *property* SimpleTransform.IsOrthonormal *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns true if the provided axis vectors are all normalized and orthogonal.

<!-- !! processed by numpydoc !! -->

<a id="SimpleTransform.TransformationMatrix"></a>

### *property* SimpleTransform.TransformationMatrix *: [Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix](../../Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix) | [None](https://docs.python.org/3/library/constants.html#None)*

TransformationMatrix property.

<!-- !! processed by numpydoc !! -->

<a id="SimpleTransform.Translation"></a>

### *property* SimpleTransform.Translation *: Ansys.ACT.Core.Math.Point3D | [None](https://docs.python.org/3/library/constants.html#None)*

The translation of the transformation with respect to the global/world coordinate
system.

<!-- !! processed by numpydoc !! -->

<a id="SimpleTransform.XAxis"></a>

### *property* SimpleTransform.XAxis *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The X-axis orientation of the transformation with respect to the global/world
coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="SimpleTransform.YAxis"></a>

### *property* SimpleTransform.YAxis *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The Y-axis orientation of the transformation with respect to the global/world
coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="SimpleTransform.ZAxis"></a>

### *property* SimpleTransform.ZAxis *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The X-axis orientation of the transformation with respect to the global/world
coordinate system.

<!-- !! processed by numpydoc !! -->

