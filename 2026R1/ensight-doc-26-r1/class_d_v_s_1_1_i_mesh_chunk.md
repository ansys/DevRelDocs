# Class DVS::IMeshChunk

<a id="class_d_v_s_1_1_i_mesh_chunk"></a>

![][C++]
![][public]


Mesh Chunk Interface for DVS Reader API.

A mesh chunk in DVS contains the underlying mesh coordinates and nodal variable information for a specific timestep/rank/chunk. It also is the parent object for [IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block) objects which contain the element / connectivity information. Mesh chucks can be unstructured or structured (paralellepiped or curvilinear). See [DVS::IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash) and [DVS::IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash) for the hash object interface.

**Inherits from**:

* [DVS::IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash)
* [DVS::IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash)

## Members

* [Axis](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a37105a87f7c965d7519eb02f4f63c3d8)
* [CURVILINEAR](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aab7e091dc6959aa447a0b6a44be352013)
* [get\_chunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6b894c57bfd1e70168290ce69ecc5af4)
* [get\_coords](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a7738e954570e849462ff493ec875bc80)
* [get\_coords\_curv](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8da90ca355541bf876fa23ed267f94cb)
* [get\_coords\_curv\_interleaved](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a5c191e3ec6d65a527fc1f3224f84d503)
* [get\_coords\_curv\_size](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a70b1069fc8737730efa0fc01a0698fbd)
* [get\_coords\_interleaved](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a39c2d8cc95f14ecbe9789908881c92a0)
* [get\_coords\_parallele](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a959ecd945a3e46b25b4e816a35eb4123)
* [get\_coords\_parallele\_size](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1abda21734e2f506b982b65007d17c92fd)
* [get\_coords\_size](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0fe402e619754256a19e0087b76e2c53)
* [get\_element\_block](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1af45268cbc0f5284d4a7fe41afab5c42b)
* [get\_element\_block\_by\_type](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a7ca84ad8d766514684790bacd31803fc)
* [get\_element\_block\_types](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a44a916bcd71f4d6b33661b249d52c61b)
* [get\_hash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a51eaee86a6e2db4dda7f4326daa33874)
* [get\_hash\_size](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1ac0dedeb8d9dfd442d49d16cb4ddfb221)
* [get\_num\_element\_blocks](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a5f3772e845d3ffe73c4a6525d78ab2ad)
* [get\_num\_variables](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)
* [get\_object](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1abb13b29450a5ccfaa9027cfda3ceb108)
* [get\_rank](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6c520674083999e99bdf77b2b1eaacf8)
* [get\_time](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a32ad562394805327fbabffa322643701)
* [get\_type](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1ab025d1550b2b3cd77faefecec5199852)
* [get\_var\_hash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a17fff1548eb276edd326a0af08f6a7c4)
* [get\_var\_hash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a7348be86da47ac034252a68949b21007)
* [get\_var\_hash\_size](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a85c3ade756029207e15b1c8de8cd5c1b)
* [get\_var\_hash\_size](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a81cd99bbf69ccc0d50e8bcb7dd291046)
* [get\_variable](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a3fbe50455053f953a39707671d8b3ab3)
* [get\_variable\_data](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1ae7fe3d3b75e14f1cdd0d810e30a35fe0)
* [get\_variable\_data](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a5364c963d939e919c73623834c89c471)
* [get\_variable\_data](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a2fd35c1ebfad0967ff6a7bc3f62c81f5)
* [get\_variable\_data](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1aea8ffa951b66f338d13704a06648ac27)
* [get\_variable\_data](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1ab72dfdd09b4258da7de7308ef48cb1fc)
* [get\_variable\_data](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1ada793fcafd36d800dc3c4249b193318c)
* [get\_variable\_size](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6d0e7efa6c204cbb7730ef1bf4024fbc)
* [get\_variable\_size](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1aad7ddb41a24c6108c245ed1189595816)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2f73d1292c0162a03bd29e9094567a77)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a41019f8e16b485b73c1a832df9c21665)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a17952af3cbc7170e37f882b17e800b3f)
* [IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6cc89750bc8c47e7a70c6cbfe48b0b61)
* [IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a7797bab216c4358dfb3c834e95e35376)
* [IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a920089a626f93778aa3c1f0ab8e3f1d1)
* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a9b1a7d92f3c9c67d25be7b2cc4658b95)
* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1ae9c19f92692dee9f5d287ebc6e059dfb)
* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a056227972d92b22777ee19f60e1794f6)
* [MeshType](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144a)
* [operator=](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1abb80ee1e5b1fa35ec218a31a68416716)
* [operator=](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a411d4e4e9ccb75ea6beba16885b4fdb2)
* [operator=](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1af8c71b16b66a50b92918028b8bbc0d66)
* [operator=](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1aeaed8c50d66653ffe2a16f2d39278734)
* [operator=](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a53d713fd8e14a28ad11fefb30c2fda03)
* [operator=](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a6aba4bc5fbf125a434cbb88f94a0dfb2)
* [PARALLELEPIPED](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aa95416cf06dfb48f6331a1f7c5c2704d2)
* [UNKNOWN](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aaa98ab1208c4de624d1af2488ea342b15)
* [UNSTRUCTURED](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aabd8a1a2f952443e439d96cbea674208e)
* [X](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a37105a87f7c965d7519eb02f4f63c3d8a5f586336dff689b95a213ae63d5d971d)
* [Y](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a37105a87f7c965d7519eb02f4f63c3d8aa51d837ff28664b76eb076c405cad710)
* [Z](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a37105a87f7c965d7519eb02f4f63c3d8a91a3b034071a3ac6c0da72aaac13f1ed)
* [~IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2e08d37be2095880bcb7d77b365ebde3)
* [~IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a04a72e7afdfd35926aa815b2c9178e0c)
* [~IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a7b2a92106ec38f910d49a1c179419871)

## Public types

<a id="class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144a"></a>
### Enumeration type MeshType

![][public]



```cpp
enum MeshType {
  UNKNOWN = 0,
  UNSTRUCTURED = 1,
  PARALLELEPIPED = 2,
  CURVILINEAR = 3
}
```


The different mesh types allowed.





<a id="class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aaa98ab1208c4de624d1af2488ea342b15"></a>
#### Enumerator UNKNOWN

Unknown, a problem occurred.



<a id="class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aabd8a1a2f952443e439d96cbea674208e"></a>
#### Enumerator UNSTRUCTURED

Unstructured mesh data.



<a id="class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aa95416cf06dfb48f6331a1f7c5c2704d2"></a>
#### Enumerator PARALLELEPIPED

Parallelepiped structured mesh data.



<a id="class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aab7e091dc6959aa447a0b6a44be352013"></a>
#### Enumerator CURVILINEAR

Curvilinear structured mesh data.



<a id="class_d_v_s_1_1_i_mesh_chunk_1a37105a87f7c965d7519eb02f4f63c3d8"></a>
### Enumeration type Axis

![][public]



```cpp
enum Axis {
  X = 0,
  Y = 1,
  Z = 2
}
```


The AXIS or IJK component to request.





<a id="class_d_v_s_1_1_i_mesh_chunk_1a37105a87f7c965d7519eb02f4f63c3d8a5f586336dff689b95a213ae63d5d971d"></a>
#### Enumerator X

The X axis (or i component for structured parts).



<a id="class_d_v_s_1_1_i_mesh_chunk_1a37105a87f7c965d7519eb02f4f63c3d8aa51d837ff28664b76eb076c405cad710"></a>
#### Enumerator Y

The X axis (or j component for structured parts).



<a id="class_d_v_s_1_1_i_mesh_chunk_1a37105a87f7c965d7519eb02f4f63c3d8a91a3b034071a3ac6c0da72aaac13f1ed"></a>
#### Enumerator Z

The Z axis (or k component for structured parts).



## Public functions

<a id="class_d_v_s_1_1_i_mesh_chunk_1a6cc89750bc8c47e7a70c6cbfe48b0b61"></a>
### Function IMeshChunk

![][public]


```cpp
DVS::IMeshChunk::IMeshChunk()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_mesh_chunk_1a04a72e7afdfd35926aa815b2c9178e0c"></a>
### Function ~IMeshChunk

![][public]


```cpp
virtual DVS::IMeshChunk::~IMeshChunk()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_mesh_chunk_1a7797bab216c4358dfb3c834e95e35376"></a>
### Function IMeshChunk

![][public]


```cpp
DVS::IMeshChunk::IMeshChunk(IMeshChunk &&)=default
```


default





**Parameters**:

* IMeshChunk &&

**Return type**: 

<a id="class_d_v_s_1_1_i_mesh_chunk_1abb80ee1e5b1fa35ec218a31a68416716"></a>
### Function operator=

![][public]


```cpp
IMeshChunk & DVS::IMeshChunk::operator=(IMeshChunk &&)=default
```


default





**Parameters**:

* [IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6cc89750bc8c47e7a70c6cbfe48b0b61) &&

**Return type**: [IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6cc89750bc8c47e7a70c6cbfe48b0b61) &

<a id="class_d_v_s_1_1_i_mesh_chunk_1a920089a626f93778aa3c1f0ab8e3f1d1"></a>
### Function IMeshChunk

![][public]


```cpp
DVS::IMeshChunk::IMeshChunk(const IMeshChunk &)=default
```


support copying





**Parameters**:

* const IMeshChunk &

**Return type**: 

<a id="class_d_v_s_1_1_i_mesh_chunk_1a411d4e4e9ccb75ea6beba16885b4fdb2"></a>
### Function operator=

![][public]


```cpp
IMeshChunk & DVS::IMeshChunk::operator=(const IMeshChunk &)=default
```


default





**Parameters**:

* const [IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6cc89750bc8c47e7a70c6cbfe48b0b61) &

**Return type**: [IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6cc89750bc8c47e7a70c6cbfe48b0b61) &

<a id="class_d_v_s_1_1_i_mesh_chunk_1ab025d1550b2b3cd77faefecec5199852"></a>
### Function get\_type

![][public]
![][const]


```cpp
virtual MeshType DVS::IMeshChunk::get_type() const =0
```


Get the type of mesh chunk.

**Returns**:

[MeshType](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144a) the type of mesh



**Return type**: [MeshType](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144a)

<a id="class_d_v_s_1_1_i_mesh_chunk_1abb13b29450a5ccfaa9027cfda3ceb108"></a>
### Function get\_object

![][public]
![][const]


```cpp
virtual const DVS::IObject * DVS::IMeshChunk::get_object() const =0
```


Get the object definiton this mesh chunk is associated with.

**Returns**:

const [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object)* the object definition



**Return type**: const [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object) *

<a id="class_d_v_s_1_1_i_mesh_chunk_1a32ad562394805327fbabffa322643701"></a>
### Function get\_time

![][public]
![][const]


```cpp
virtual float DVS::IMeshChunk::get_time() const =0
```


Get the time for this mesh chunk.

**Returns**:

float the time this mesh chunk is associated with



**Return type**: float

<a id="class_d_v_s_1_1_i_mesh_chunk_1a6c520674083999e99bdf77b2b1eaacf8"></a>
### Function get\_rank

![][public]
![][const]


```cpp
virtual uint32_t DVS::IMeshChunk::get_rank() const =0
```


Get the rank for the mesh chunk.

**Returns**:

uint32_t the rank this mesh chunk is associated with (zero based)



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_mesh_chunk_1a6b894c57bfd1e70168290ce69ecc5af4"></a>
### Function get\_chunk

![][public]
![][const]


```cpp
virtual uint32_t DVS::IMeshChunk::get_chunk() const =0
```


Get the chunk for this mesh chunk.

**Returns**:

uint32_t the chunk this mesh chunk is associated with (zero based)



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_mesh_chunk_1a0fe402e619754256a19e0087b76e2c53"></a>
### Function get\_coords\_size

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_coords_size(uint32_t &component_size)=0
```


Get the size of each coordinate component for unstructured meshes.

Used for unstructured meshes. Returns the size of each x/y/z coordinate array to be used with [get\_coords()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a7738e954570e849462ff493ec875bc80) or component_size*3 for [get\_coords\_interleaved()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a39c2d8cc95f14ecbe9789908881c92a0).





Errors:
* DVS_NO_DATA: No data for this mesh, not an error

* DVS_INVALID_MESH_TYPE: Mesh type is not [DVS::IMeshChunk::MeshType::UNSTRUCTURED](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aabd8a1a2f952443e439d96cbea674208e)








**Parameters**:

* **component_size**: the size of each x/y/z coordinate components


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, see method documentation for errors



**Parameters**:

* uint32_t & **component_size**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a7738e954570e849462ff493ec875bc80"></a>
### Function get\_coords

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_coords(float *x_coords, float *y_coords, float *z_coords)=0
```


Get the coordinates for an unstructured mesh.

Retrieves the coordinates for an unstructured mesh. To get the coordinates interleaved in a single array call [get\_coords\_interleaved()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a39c2d8cc95f14ecbe9789908881c92a0).





Errors:
* DVS_NO_DATA: No data for this mesh, not an error

* DVS_PARAM_NULL: nullptr passed into method, method did nothing

* DVS_INVALID_MESH_TYPE: Mesh type is not [DVS::IMeshChunk::MeshType::UNSTRUCTURED](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aabd8a1a2f952443e439d96cbea674208e)

* DVS_INVALID_CACHE: Loading cache failed, possibly invalid cache or invalid permissions

* DVS_DATA_FAILED_LOAD: There was a failure loading data, data is either empty or missing

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data.








**Parameters**:

* **x_coords**: output array for x coordinates (must not be nullptr) size to allocate from [get\_coords\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0fe402e619754256a19e0087b76e2c53)
* **y_coords**: output array for y coordinates (must not be nullptr) size to allocate from [get\_coords\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0fe402e619754256a19e0087b76e2c53)
* **z_coords**: output array for z coordiantes (must not be nullptr) size to allocate from [get\_coords\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0fe402e619754256a19e0087b76e2c53)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, see method documentation for errors



**Parameters**:

* float * **x_coords**
* float * **y_coords**
* float * **z_coords**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a39c2d8cc95f14ecbe9789908881c92a0"></a>
### Function get\_coords\_interleaved

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_coords_interleaved(float *coords)=0
```


Get the coords for a unstructured meshes interleaved in a single array.

Retrieves the coordinates for an unstructured mesh interleaved ([X0 Y0 Z0 X1 Y1 Z1]) instead of as separate X Y Z arrays as the method [get\_coords()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a7738e954570e849462ff493ec875bc80) returns. The coords array should be of size component_size*3 returned from [get\_coords\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0fe402e619754256a19e0087b76e2c53).





Errors:
* DVS_NO_DATA: No data for this mesh, not an error

* DVS_PARAM_NULL: nullptr passed into method, method did nothing

* DVS_INVALID_MESH_TYPE: Mesh type is not [DVS::IMeshChunk::MeshType::UNSTRUCTURED](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aabd8a1a2f952443e439d96cbea674208e)

* DVS_INVALID_CACHE: Loading cache failed, possibly invalid cache or invalid permissions

* DVS_DATA_FAILED_LOAD: There was a failure loading data, data is either empty or missing

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data. 
**Parameters**:

* **coords**: output array of interleaved coords for form [X0 Y0 Z0 X1 Y0 Z0] size to allocate component_size*3 from [get\_coords\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0fe402e619754256a19e0087b76e2c53)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, see method documentation for errors



**Parameters**:

* float * **coords**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a70b1069fc8737730efa0fc01a0698fbd"></a>
### Function get\_coords\_curv\_size

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_coords_curv_size(uint32_t &component_size)=0
```


Get the size of each coordinate component for structured curvilinear meshes.

Returns the size of each component of a curvilinear mesh. This is used with the method [get\_coords\_curv()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8da90ca355541bf876fa23ed267f94cb). For [get\_coords\_curv\_interleaved()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a5c191e3ec6d65a527fc1f3224f84d503) use the size component_size*3 to allocate the array.





Errors:
* DVS_NO_DATA: No data for this mesh, not an error

* DVS_INVALID_MESH_TYPE: Mesh type is not [DVS::IMeshChunk::MeshType::CURVILINEAR](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aab7e091dc6959aa447a0b6a44be352013)

* DVS_INVALID_STRUCTURED_DATA: Structured data is invalid, should not happen








**Parameters**:

* **component_size**: the size of each x/y/z coordinate components


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, see method documentation for errors



**Parameters**:

* uint32_t & **component_size**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a8da90ca355541bf876fa23ed267f94cb"></a>
### Function get\_coords\_curv

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_coords_curv(float local_ijk_min[3], float local_ijk_max[3], float global_ijk_max[3], float *x_coords, float *y_coords, float *z_coords)=0
```


Get coordinate data for a structured curvilinear mesh.

Structured curvilinear meshes have the XYZ information for every node in the IJK array for flexibility in defining the nodes. The connectivity for the mesh is implied so there are no connectivity arrays in the DVS::IElemBlock. If you'd like the XYZ coordinates interleaved in a single array call [get\_coords\_curv\_interleaved()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a5c191e3ec6d65a527fc1f3224f84d503).





Errors:
* DVS_NO_DATA: No data for this mesh, not an error

* DVS_PARAM_NULL: nullptr passed into method, method did nothing

* DVS_INVALID_MESH_TYPE: Mesh type is not [DVS::IMeshChunk::MeshType::CURVILINEAR](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aab7e091dc6959aa447a0b6a44be352013)

* DVS_INVALID_CACHE: Loading cache failed, possibly invalid cache or invalid permissions

* DVS_DATA_FAILED_LOAD: There was a failure loading data, data is either empty or missing

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data.

* DVS_INVALID_STRUCTURED_DATA: Invalid structured data. There is a problem with the data.








**Parameters**:

* **local_ijk_min**: array of size 3, returns 0 based ijk min for this chunk
* **local_ijk_max**: array of size 3, returns 0 based ijk max for this chunk
* **global_ijk_max**: array of size 3, returns 1 based global ijk max, this is the total ijk dimension across all mesh chunks
* **x_coords**: output array for x coordinates (must not be nullptr) size to allocate from [get\_coords\_curv\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a70b1069fc8737730efa0fc01a0698fbd)
* **y_coords**: output array for y coordinates (must not be nullptr) size to allocate from [get\_coords\_curv\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a70b1069fc8737730efa0fc01a0698fbd)
* **z_coords**: output array for z coordinates (must not be nullptr) size to allocate from [get\_coords\_curv\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a70b1069fc8737730efa0fc01a0698fbd)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, see method documentation for errors



**Parameters**:

* float **local_ijk_min**
* float **local_ijk_max**
* float **global_ijk_max**
* float * **x_coords**
* float * **y_coords**
* float * **z_coords**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a5c191e3ec6d65a527fc1f3224f84d503"></a>
### Function get\_coords\_curv\_interleaved

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_coords_curv_interleaved(float local_ijk_min[3], float local_ijk_max[3], float global_ijk_max[3], float *coords)=0
```


Get the coords for structured curvilinear meshes interleaved in a single array.

Structured curvilinear meshes have the XYZ information for every node in the IJK array for flexibility in defining the nodes. The connectivity for the mesh is implied so there are no connectivity arrays in the DVS::IElemBlock. This method returns the XYZ coordinates interleaved in a single array of the format [X0 Y0 Z0 X1 Y1 Z1]. If you'd like the XYZ coordinates in separate x,y,z arrays call [get\_coords\_curv()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8da90ca355541bf876fa23ed267f94cb).





Errors:
* DVS_NO_DATA: No data for this mesh, not an error

* DVS_PARAM_NULL: nullptr passed into method, method did nothing

* DVS_INVALID_MESH_TYPE: Mesh type is not [DVS::IMeshChunk::MeshType::CURVILINEAR](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aab7e091dc6959aa447a0b6a44be352013)

* DVS_INVALID_CACHE: Loading cache failed, possibly invalid cache or invalid permissions

* DVS_DATA_FAILED_LOAD: There was a failure loading data, data is either empty or missing

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data.

* DVS_INVALID_STRUCTURED_DATA: Invalid structured data. There is a problem with the data.








**Parameters**:

* **local_ijk_min**: array of size 3, returns 0 based ijk min for this chunk
* **local_ijk_max**: array of size 3, returns 0 based ijk max for this chunk
* **global_ijk_max**: array of size 3, returns 1 based global ijk max, this is the total ijk dimension across all mesh chunks
* **coords**: output array of interleaved coords for form [X0 Y0 Z0 X1 Y0 Z0] size to allocate component_size*3 from [get\_coords\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0fe402e619754256a19e0087b76e2c53)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, see method documentation for errors



**Parameters**:

* float **local_ijk_min**
* float **local_ijk_max**
* float **global_ijk_max**
* float * **coords**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1abda21734e2f506b982b65007d17c92fd"></a>
### Function get\_coords\_parallele\_size

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_coords_parallele_size(uint32_t &i_vals_size, uint32_t &j_vals_size, uint32_t &k_vals_size)=0
```


Get the size of each ijk component for structured parallelpiped meshes.

Returns the size of each component of a parallelpiped mesh. This is used with the method [get\_coords\_parallele()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a959ecd945a3e46b25b4e816a35eb4123). Use the sizes returned to allocate the arrays for [get\_coords\_parallele()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a959ecd945a3e46b25b4e816a35eb4123).





Errors:
* DVS_NO_DATA: No data for this mesh, not an error

* DVS_INVALID_MESH_TYPE: Mesh type is not [DVS::IMeshChunk::MeshType::CURVILINEAR](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aab7e091dc6959aa447a0b6a44be352013)

* DVS_INVALID_STRUCTURED_DATA: Structured data is invalid, There is a problem with the data.








**Parameters**:

* **i_vals_size**: size of the i dimension array to allocate for [get\_coords\_parallele()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a959ecd945a3e46b25b4e816a35eb4123)
* **j_vals_size**: size of the j dimension array to allocate for [get\_coords\_parallele()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a959ecd945a3e46b25b4e816a35eb4123)
* **k_vals_size**: size of the k dimension array to allocate for [get\_coords\_parallele()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a959ecd945a3e46b25b4e816a35eb4123)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, see method documentation for errors



**Parameters**:

* uint32_t & **i_vals_size**
* uint32_t & **j_vals_size**
* uint32_t & **k_vals_size**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a959ecd945a3e46b25b4e816a35eb4123"></a>
### Function get\_coords\_parallele

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_coords_parallele(float origin[3], float dir_vec_i[3], float dir_vec_j[3], float dir_vec_k[3], float local_ijk_min[3], float local_ijk_max[3], float global_ijk_max[3], float *i_vals, float *j_vals, float *k_vals)=0
```


Get the ijk mesh information for structured parallelepiped mesh chunks.

Retrieves the mesh information for a structured parallelepiped mush chunk. Parallelepiped structured meshes are described by an origin, XYZ direction vectors for each dimension and the amount of distance between the origin at each I, K and K increment. To get the size to allocate for i_vals, j_vals, and k_vals call [get\_coords\_parallele\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1abda21734e2f506b982b65007d17c92fd).





Errors:
* DVS_NO_DATA: No data for this mesh, not an error

* DVS_PARAM_NULL: nullptr passed into method, method did nothing

* DVS_INVALID_MESH_TYPE: Mesh type is not [DVS::IMeshChunk::MeshType::CURVILINEAR](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a8b7de1a1e47e05ab63f6bb41ccf5144aab7e091dc6959aa447a0b6a44be352013)

* DVS_INVALID_CACHE: Loading cache failed, possibly invalid cache or invalid permissions

* DVS_DATA_FAILED_LOAD: There was a failure loading data, data is either empty or missing

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data.

* DVS_INVALID_STRUCTURED_DATA: Invalid structured data. There is a problem with the data.








**Parameters**:

* **origin**: The XYZ origin of the mesh
* **dir_vec_i**: array of size 3, returns the XYZ direction vector for I dimension
* **dir_vec_j**: array of size 3, returns the XYZ direction vector for J dimension
* **dir_vec_k**: array of size 3, returns the XYZ direction vector for K dimension
* **local_ijk_min**: array of size 3, returns 0 based ijk min for this chunk
* **local_ijk_max**: array of size 3, returns 0 based ijk max for this chunk
* **global_ijk_max**: array of size 3, returns 1 based global ijk max, this is the total ijk dimension across all mesh chunks
* **i_vals**: the distance at each I increment from the origin size to allocate from [get\_coords\_parallele\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1abda21734e2f506b982b65007d17c92fd)
* **j_vals**: the distance at each J increment from the origin size to allocate from [get\_coords\_parallele\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1abda21734e2f506b982b65007d17c92fd)
* **k_vals**: the distance at each K increment from the origin size to allocate from [get\_coords\_parallele\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1abda21734e2f506b982b65007d17c92fd)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, see method documentation for errors



**Parameters**:

* float **origin**
* float **dir_vec_i**
* float **dir_vec_j**
* float **dir_vec_k**
* float **local_ijk_min**
* float **local_ijk_max**
* float **global_ijk_max**
* float * **i_vals**
* float * **j_vals**
* float * **k_vals**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9"></a>
### Function get\_num\_variables

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_num_variables(uint32_t &num_vars, VAR_TYPE type=VAR_TYPE::FLOAT) const =0
```


Get the number of nodal variables this mesh chunk has data for, based on the specified type.

This method is intended to be used in conjunction with [get\_variable()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a3fbe50455053f953a39707671d8b3ab3) and [get\_variable\_data()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1ae7fe3d3b75e14f1cdd0d810e30a35fe0) to retrieve nodal variable data.





Errors:
* DVS_NONE: Success








**Parameters**:

* **num_vars**: if success, returns the number of nodal variables for this mesh chunk
* **type**: The enum type. By default, VAR_TYPE::FLOAT


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE if success, else see method description



**Parameters**:

* uint32_t & **num_vars**
* [VAR\_TYPE](namespace_d_v_s.md#dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066) **type** = VAR_TYPE::FLOAT 

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a3fbe50455053f953a39707671d8b3ab3"></a>
### Function get\_variable

![][public]
![][const]


```cpp
virtual const DVS::IVar * DVS::IMeshChunk::get_variable(uint32_t index, VAR_TYPE type=VAR_TYPE::FLOAT) const =0
```


Get the variable definition associates with the nodal variable for this index and the specified type.

This method retrieves the variable that is associated with the nodal variable of the mesh chunk at a specific index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1] and of the specified type






**Parameters**:

* **index**: index of variable definition to get in range [0, [get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]
* **type**: The enum type. By default, VAR_TYPE::FLOAT


**Returns**:

[DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var)* nullptr if out of range, otherwise the variable associated with the index



**Parameters**:

* uint32_t **index**
* [VAR\_TYPE](namespace_d_v_s.md#dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066) **type** = VAR_TYPE::FLOAT 

**Return type**: const [DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) *

<a id="class_d_v_s_1_1_i_mesh_chunk_1a6d0e7efa6c204cbb7730ef1bf4024fbc"></a>
### Function get\_variable\_size

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_variable_size(uint32_t index, uint32_t &num_values, VAR_TYPE type=VAR_TYPE::FLOAT) const =0
```


Get the variable size via the index and specified type.

This method retrieves the variable's size that is associated with the nodal variable of the mesh chunk at a specific index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1] and of the specified type





Errors:
* DVS_NONE: Success








**Parameters**:

* **index**: index of variable definition to get in range [0, [get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]
* **num_values**: a reference to a uint32_t, representing the number of values of the variable
* **type**: the enum type. By default, VAR_TYPE::FLOAT


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE if success, else see method description



**Parameters**:

* uint32_t **index**
* uint32_t & **num_values**
* [VAR\_TYPE](namespace_d_v_s.md#dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066) **type** = VAR_TYPE::FLOAT 

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1aad7ddb41a24c6108c245ed1189595816"></a>
### Function get\_variable\_size

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_variable_size(const IVar *var, uint32_t &num_values) const =0
```


Get the variable size by variable.

This method retrieves the nodal variable data size based on a specific variable definitions.





Error Codes:
* DVS_NONE: Success

* DVS_PARAM_INVALID_VAR: Bad (or null) variable object passed into method








**Parameters**:

* **var**: the variable definition to retrieve nodal variable data for
* **num_values**: a reference to a uint32_t, representing the number of values of the variable


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**
* uint32_t & **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1ae7fe3d3b75e14f1cdd0d810e30a35fe0"></a>
### Function get\_variable\_data

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_variable_data(uint32_t index, float *array) const =0
```


Get the variable data by index.

This method retrieves nodal variable data based on an index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]. To retrieve the variable definition associated with the index call [get\_variable()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a3fbe50455053f953a39707671d8b3ab3).





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_PARAM_OUT_OF_BOUNDS: Index out of bounds of [0, [get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]

* DVS_PARAM_INVALID_VAR: Invalid variable found at index, should not happen

* DVS_PARAM_INVALID_VAR_ID: Invalid variable id found at index, should not happen

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **index**: index of the variable data in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]
* **array**: an array whose size should be returned from [get\_variable\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6d0e7efa6c204cbb7730ef1bf4024fbc). Overloaded for float and int64.


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* uint32_t **index**
* float * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a5364c963d939e919c73623834c89c471"></a>
### Function get\_variable\_data

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_variable_data(uint32_t index, int64_t *array) const =0
```


Get the variable data by index.

This method retrieves nodal variable data based on an index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]. To retrieve the variable definition associated with the index call [get\_variable()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a3fbe50455053f953a39707671d8b3ab3).





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_PARAM_OUT_OF_BOUNDS: Index out of bounds of [0, [get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]

* DVS_PARAM_INVALID_VAR: Invalid variable found at index, should not happen

* DVS_PARAM_INVALID_VAR_ID: Invalid variable id found at index, should not happen

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **index**: index of the variable data in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]
* **array**: an array whose size should be returned from [get\_variable\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6d0e7efa6c204cbb7730ef1bf4024fbc). Overloaded for float and int64.


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* uint32_t **index**
* int64_t * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a2fd35c1ebfad0967ff6a7bc3f62c81f5"></a>
### Function get\_variable\_data

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_variable_data(const IVar *var, float *array) const =0
```


Get the variable data by variable.

This method retrieves the nodal variable data based on a specific variable definitions.





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_INVALID_VAR: Bad (or null) variable object passed into method

* DVS_PARAM_INVALID_VAR_ID: Mesh chunk does not have data for var passed in.

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **var**: the variable definition to retrieve nodal variable data for
* **array**: an array whose size should be returned from [get\_variable\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6d0e7efa6c204cbb7730ef1bf4024fbc). Overloaded for float and int64.


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**
* float * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1aea8ffa951b66f338d13704a06648ac27"></a>
### Function get\_variable\_data

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_variable_data(const IVar *var, int64_t *array) const =0
```


Get the variable data by variable.

This method retrieves the nodal variable data based on a specific variable definitions.





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_INVALID_VAR: Bad (or null) variable object passed into method

* DVS_PARAM_INVALID_VAR_ID: Mesh chunk does not have data for var passed in.

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **var**: the variable definition to retrieve nodal variable data for
* **array**: an array whose size should be returned from [get\_variable\_size()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a6d0e7efa6c204cbb7730ef1bf4024fbc). Overloaded for float and int64.


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**
* int64_t * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1ab72dfdd09b4258da7de7308ef48cb1fc"></a>
### Function get\_variable\_data

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_variable_data(uint32_t index, uint32_t *num_values, float *array)=0
```


Get the variable data by index.

This method retrieves nodal variable data based on an index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]. To retrieve the variable definition associated with the index call [get\_variable()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a3fbe50455053f953a39707671d8b3ab3).





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_PARAM_OUT_OF_BOUNDS: Index out of bounds of [0, [get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]

* DVS_PARAM_INVALID_VAR: Invalid variable found at index, should not happen

* DVS_PARAM_INVALID_VAR_ID: Invalid variable id found at index, should not happen

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **index**: index of the variable data in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a0b819acf4a968957e8ba90876dd880d9)-1]
* **num_values**: if not nullptr returns the number of values to allocate for array
* **array**: if not nullptr must be of size num_values


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* uint32_t **index**
* uint32_t * **num_values**
* float * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1ada793fcafd36d800dc3c4249b193318c"></a>
### Function get\_variable\_data

![][public]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_variable_data(const IVar *var, uint32_t *num_values, float *array)=0
```


Get the variable data by variable.

This method retrieves the nodal variable data based on a specific variable definitions.





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_INVALID_VAR: Bad (or null) variable object passed into method

* DVS_PARAM_INVALID_VAR_ID: Mesh chunk does not have data for var passed in.

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **var**: the variable definition to retrieve nodal variable data for
* **num_values**: if not nullptr returns the number of values to allocate for array
* **array**: if not nullptr should be of size num_values


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**
* uint32_t * **num_values**
* float * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a5f3772e845d3ffe73c4a6525d78ab2ad"></a>
### Function get\_num\_element\_blocks

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_num_element_blocks(uint32_t &num_elem_blocks) const =0
```


Get the number of element blocks for this mesh chunk.

Every mesh chunk has an element block for each element type it has data available for. These types are defined by the enum [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) in [dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h) with a macro FOREACH_ELEM_ENUM.





Errors:
* DVS_NONE: Success








**Parameters**:

* **num_elem_blocks**: if success, returns number of element blocks for this mesh chunk


**Returns**:

DVS_NONE on success, else see method description



**Parameters**:

* uint32_t & **num_elem_blocks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1a44a916bcd71f4d6b33661b249d52c61b"></a>
### Function get\_element\_block\_types

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IMeshChunk::get_element_block_types(dvs_element_type *element_types) const =0
```


Get an array of the element block types for this mesh chunk.

This returns an array of [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) for every block this mesh chunk contains. These types are defined by the enum [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) in [dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h) with a macro FOREACH_ELEM_ENUM.






**Parameters**:

* **element_types**: an array of size [get\_num\_element\_blocks()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a5f3772e845d3ffe73c4a6525d78ab2ad) to fill out


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no errors, DVS_PARAM_NULL if element types nullptr



**Parameters**:

* [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) * **element_types**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_mesh_chunk_1af45268cbc0f5284d4a7fe41afab5c42b"></a>
### Function get\_element\_block

![][public]


```cpp
virtual DVS::IElementBlock * DVS::IMeshChunk::get_element_block(uint32_t index)=0
```


Get the element block by index.

Get the element block according to it's index in the mesh chunk. This range is from [0, [get\_num\_element\_blocks()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a5f3772e845d3ffe73c4a6525d78ab2ad)-1]. Every mesh chunk has a number of element blocks for each element type it has data for.






**Parameters**:

* **index**: the zero based index of the element block range: [0, [get\_num\_element\_blocks()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a5f3772e845d3ffe73c4a6525d78ab2ad)-1]


**Returns**:

[DVS::IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block)* nullptr if index is out of bounds, otherwise the element block



**Parameters**:

* uint32_t **index**

**Return type**: [DVS::IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block) *

<a id="class_d_v_s_1_1_i_mesh_chunk_1a7ca84ad8d766514684790bacd31803fc"></a>
### Function get\_element\_block\_by\_type

![][public]


```cpp
virtual DVS::IElementBlock * DVS::IMeshChunk::get_element_block_by_type(dvs_element_type type)=0
```


Get the element block by element type.

Get the element block by [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) from this mesh chunk, the valid types for this mesh chunk may be obtained via the method [get\_element\_block\_types()](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk_1a44a916bcd71f4d6b33661b249d52c61b).





Every mesh chunk has an element block for each element type it has data available for. These types are defined by the enum [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) in [dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h) with a macro FOREACH_ELEM_ENUM.






**Parameters**:

* **type**: the type of element block to retrieve


**Returns**:

[DVS::IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block)* nullptr if invalid, otherwise the element block



**Parameters**:

* [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) **type**

**Return type**: [DVS::IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)