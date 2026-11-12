# Interface ZOSAPI::Editors::NCE::ISTAR_NSC_CoordinateTransform

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform"></a>

![][C#]
![][public]

**Definition**:

Provides access to the user-defined coordinate transform applied to convert between the deformation data coordinate system and the coordinate system selected via ISTAR_NSC_RBMsOnly.SetDataIsGlobal or ISTAR_NSC_RBMsOnly.SetDataIsLocal.


## Members

* [ConvertAnglesToRotationMatrix](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1ac3e0465f66083e81f973783c80c004bd)
* [Decenters](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a6bed9767df2b38a500a37cd50e5d3f84)
* [Disable](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a9de0242d7b7d1facd712917745be8854)
* [Enable](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a179eeb97030632e0794ccbca37d20965)
* [IsEnabled](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a378719faf37733cc3f201b650b0b5999)
* [ObjectNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1adca743d0b6576d249d04058b64ee2377)
* [Rotations](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1af1518d0198244803def7c63c5c1608c3)
* [SetTransformValues](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a4b4937803f9422e3495d2f793607754a)
* [SetTransformValuesWithAngles](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1ab146840538ed94aeb18853125cd63577)
* [Transform](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1ad039339662f3c0f40bca03ac9a70b575)

## Properties

### Property ObjectNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1adca743d0b6576d249d04058b64ee2377"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.ObjectNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.ObjectNumber"}]}`
-->

### Property IsEnabled

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a378719faf37733cc3f201b650b0b5999"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.IsEnabled
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.IsEnabled"}]}`
-->

### Property Transform

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1ad039339662f3c0f40bca03ac9a70b575"></a>

![][public]

**Definition**:


```csharp
ICoordinateTransform ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Transform
```


**Return type**: [ICoordinateTransform](interface_z_o_s_a_p_i_1_1_common_1_1_i_coordinate_transform.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_coordinate_transform)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Transform"}]}`
-->

### Property Decenters

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a6bed9767df2b38a500a37cd50e5d3f84"></a>

![][public]

**Definition**:


```csharp
ISTAR_NSC_Decenters ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Decenters
```


**Return type**: [ISTAR\_NSC\_Decenters](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___decenters.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___decenters)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Decenters"}]}`
-->

### Property Rotations

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1af1518d0198244803def7c63c5c1608c3"></a>

![][public]

**Definition**:


```csharp
ISTAR_NSC_Rotations ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Rotations
```


**Return type**: [ISTAR\_NSC\_Rotations](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___rotations.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___rotations)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Rotations"}]}`
-->

## Public functions

### Function Enable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a179eeb97030632e0794ccbca37d20965"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Enable()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Enable"}]}`
-->

### Function Disable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a9de0242d7b7d1facd712917745be8854"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Disable()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.Disable"}]}`
-->

### Function SetTransformValuesWithAngles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1ab146840538ed94aeb18853125cd63577"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.SetTransformValuesWithAngles(double ThetaX, double ThetaY, double ThetaZ, double DX, double DY, double DZ)
```


Sets the user-defined coordinate transform using Euler angles and translation offsets. The rotation convention is extrinsic, first about Z by _ThetaZ_ , then about Y by _ThetaY_ , then about X by _ThetaX_ . For details, see the  following article


.

**Parameters**:

* **ThetaX**: Rotation angle about the X-axis, in degrees.
* **ThetaY**: Rotation angle about the Y-axis, in degrees.
* **ThetaZ**: Rotation angle about the Z-axis, in degrees.
* **DX**: Translation offset along the X-axis.
* **DY**: Translation offset along the Y-axis.
* **DZ**: Translation offset along the Z-axis.


**Parameters**:

* double **ThetaX**
* double **ThetaY**
* double **ThetaZ**
* double **DX**
* double **DY**
* double **DZ**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.SetTransformValuesWithAngles"}]}`
-->

### Function SetTransformValues

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1a4b4937803f9422e3495d2f793607754a"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.SetTransformValues(double R11, double R12, double R13, double R21, double R22, double R23, double R31, double R32, double R33, double DX, double DY, double DZ)
```


Sets the user-defined coordinate transform using a rotation matrix and translation offsets.

**Parameters**:

* **R11**: Element (1,1) of the rotation matrix.
* **R12**: Element (1,2) of the rotation matrix.
* **R13**: Element (1,3) of the rotation matrix.
* **R21**: Element (2,1) of the rotation matrix.
* **R22**: Element (2,2) of the rotation matrix.
* **R23**: Element (2,3) of the rotation matrix.
* **R31**: Element (3,1) of the rotation matrix.
* **R32**: Element (3,2) of the rotation matrix.
* **R33**: Element (3,3) of the rotation matrix.
* **DX**: Translation offset along the X-axis.
* **DY**: Translation offset along the Y-axis.
* **DZ**: Translation offset along the Z-axis.


**Parameters**:

* double **R11**
* double **R12**
* double **R13**
* double **R21**
* double **R22**
* double **R23**
* double **R31**
* double **R32**
* double **R33**
* double **DX**
* double **DY**
* double **DZ**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.SetTransformValues"}]}`
-->

### Function ConvertAnglesToRotationMatrix

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform_1ac3e0465f66083e81f973783c80c004bd"></a>

![][public]


```csharp
double[,] ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.ConvertAnglesToRotationMatrix(double thetaX, double thetaY, double thetaZ)
```


Computes a 3×3 rotation matrix from the specified angles about the X-, Y-, and Z-axes. The rotation convention is extrinsic, first about Z by _thetaZ_ , then about Y by _thetaY_ , then about X by _thetaX_ . For details, see the  following article


.

**Parameters**:

* **thetaX**: Rotation angle about the X-axis, in degrees.
* **thetaY**: Rotation angle about the Y-axis, in degrees.
* **thetaZ**: Rotation angle about the Z-axis, in degrees.


**Returns**:

A 3×3 rotation matrix corresponding to the specified angles.


**Parameters**:

* double **thetaX**
* double **thetaY**
* double **thetaZ**

**Return type**: double[,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_CoordinateTransform.ConvertAnglesToRotationMatrix"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
