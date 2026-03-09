# Interface ZOSAPI::Editors::NCE::IFaceData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data"></a>

![][C#]
![][public]

**Definition**:

Contains face vertex, normal, intensity, and power data for all facets of detector objects.


## Members

* [AbsorbedFlux](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1abbaf71b1bf4d33bbe9cb2ab09edd4d0d)
* [AbsorbedIrradiance](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a388f7efef558eea33805f470616ff089)
* [ConvertToGlobal](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a7d4b000bfe8882d98b57ed2c265fbbbc)
* [CurrentFace](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1af350224c908ad1f5c80df7c82748b702)
* [FillData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1ac20fb905ad529c14d3417629237928d1)
* [Flux](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a45a292fa5293a3e1876071f9a65d268a)
* [GetVertex](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a19ea07a11bfc9783197f6d919be6cc40)
* [GetVertexNormal](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a4ac87928b250115fb748bc618d840aa1)
* [Irradiance](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1aba8d2b3ede55ebebf991dbf8ed82f4bb)
* [NumberOfFaces](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1acec4eb0a1d854d993babf37a12cbff12)
* [NumberOfVertices](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1af016bb7791bf34919c9ffae158982cb9)

## Properties

### Property NumberOfFaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1acec4eb0a1d854d993babf37a12cbff12"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IFaceData.NumberOfFaces
```


The number of faces on this object.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.NumberOfFaces"}]}`
-->

### Property CurrentFace

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1af350224c908ad1f5c80df7c82748b702"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IFaceData.CurrentFace
```


The currently selected face. All vertex, intensity, etc. data is for the current face.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.CurrentFace"}]}`
-->

### Property ConvertToGlobal

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a7d4b000bfe8882d98b57ed2c265fbbbc"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IFaceData.ConvertToGlobal
```


Determines whether vertex and normals are in local or global coordinates.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.ConvertToGlobal"}]}`
-->

### Property NumberOfVertices

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1af016bb7791bf34919c9ffae158982cb9"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IFaceData.NumberOfVertices
```


The number of vertices on the current face (see CurrentFace).


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.NumberOfVertices"}]}`
-->

### Property Flux

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a45a292fa5293a3e1876071f9a65d268a"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IFaceData.Flux
```


The flux on the current face (see CurrentFace). Note that the units use the source units settings (see [ZOSAPI.SystemData.ISDUnitsData.SourceUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1ac962522082b979c6b9361fb5b1ad2953) and [ZOSAPI.SystemData.ISDUnitsData.SourceUnitPrefix](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1aad84b33ecffe50698197a22800d66004)).


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.Flux"}]}`
-->

### Property Irradiance

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1aba8d2b3ede55ebebf991dbf8ed82f4bb"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IFaceData.Irradiance
```


The irradiance on the current face (see CurrentFace). Note that the units use the source units settings (see [ZOSAPI.SystemData.ISDUnitsData.AnalysisUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a358c2b7f3fd0ff9b8d76ecfe3987017b) and [ZOSAPI.SystemData.ISDUnitsData.AnalysisUnitPrefix](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a93649a3ec420b35037da1c4591ceea74)).


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.Irradiance"}]}`
-->

### Property AbsorbedFlux

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1abbaf71b1bf4d33bbe9cb2ab09edd4d0d"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IFaceData.AbsorbedFlux
```


The absorbed flux on the current face (see CurrentFace). Note that the units use the source units settings (see [ZOSAPI.SystemData.ISDUnitsData.SourceUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1ac962522082b979c6b9361fb5b1ad2953) and [ZOSAPI.SystemData.ISDUnitsData.SourceUnitPrefix](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1aad84b33ecffe50698197a22800d66004)).


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.AbsorbedFlux"}]}`
-->

### Property AbsorbedIrradiance

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a388f7efef558eea33805f470616ff089"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IFaceData.AbsorbedIrradiance
```


The absorbed irradiance on the current face (see CurrentFace). Note that the units use the source units settings (see [ZOSAPI.SystemData.ISDUnitsData.AnalysisUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a358c2b7f3fd0ff9b8d76ecfe3987017b) and [ZOSAPI.SystemData.ISDUnitsData.AnalysisUnitPrefix](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a93649a3ec420b35037da1c4591ceea74)).


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.AbsorbedIrradiance"}]}`
-->

## Public functions

### Function GetVertex

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a19ea07a11bfc9783197f6d919be6cc40"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.IFaceData.GetVertex(int vertexNumber, out double X, out double Y, out double Z)
```


Retrieve the X, Y, and Z position for the specified vertex. Note that ConvertToGlobal controls whether the vertex is retrieved in local or global coordinates.

**Parameters**:

* **vertexNumber**: The vertex index to retrieve (0 to NumberOfVertices-1).
* **X**: The X coordinate for the vertex.
* **Y**: The Y coordinate for the vertex.
* **Z**: The Z coordinate for the vertex.


**Returns**:

<code>true</code> if the vertexNumber was valid, <code>false</code> otherwise.


**Parameters**:

* int **vertexNumber**
* out double **X**
* out double **Y**
* out double **Z**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.GetVertex"}]}`
-->

### Function GetVertexNormal

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1a4ac87928b250115fb748bc618d840aa1"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.IFaceData.GetVertexNormal(int vertexNumber, out double X, out double Y, out double Z)
```


Retrieve the X, Y, and Z normal for the specified vertex. Note that ConvertToGlobal controls whether the vertex is retrieved in local or global coordinates.

**Parameters**:

* **vertexNumber**: The vertex index to retrieve (0 to NumberOfVertices-1).
* **X**: The X coordinate for the vertex.
* **Y**: The Y coordinate for the vertex.
* **Z**: The Z coordinate for the vertex.


**Returns**:

<code>true</code> if the vertexNumber was valid, <code>false</code> otherwise.


**Parameters**:

* int **vertexNumber**
* out double **X**
* out double **Y**
* out double **Z**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.GetVertexNormal"}]}`
-->

### Function FillData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data_1ac20fb905ad529c14d3417629237928d1"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.IFaceData.FillData(int size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]double[] X, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]double[] Y, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]double[] Z, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]double[] XNorm, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]double[] YNorm, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]double[] ZNorm)
```


Retrieves positions and normals for all vertices in the current face (see CurrentFace). Note that ConvertToGlobal controls whether the vertex is retrieved in local or global coordinates.

**Parameters**:

* **size**: The length of the input arrays (must be greater than or equal to NumberOfVertices).
* **X**: The X coordinates of the vertcies.
* **Y**: The Y coordinates of the vertcies.
* **Z**: The Z coordinates of the vertcies.
* **XNorm**: The X coordinates of the normals.
* **YNorm**: The Y coordinates of the normals.
* **ZNorm**: The Z coordinates of the normals.


**Returns**:


**Parameters**:

* int **size**
* _[MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]_ double[] **X**
* _[MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]_ double[] **Y**
* _[MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]_ double[] **Z**
* _[MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]_ double[] **XNorm**
* _[MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]_ double[] **YNorm**
* _[MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]_ double[] **ZNorm**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IFaceData.FillData"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)