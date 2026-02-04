# Class libuserd::Part

<a id="classlibuserd_1_1_part"></a>

![][C++]
![][public]




This class represents a part (block of mesh).

**Inherits from**:

* IPart

## Members

* [element\_conn](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1aff4c1a7de4618b75a9d27ad612193b7a)
* [element\_conn\_nfaced](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1a499d69983d495e7a684c7cacbc6fbbd6)
* [element\_conn\_nfaced\_size](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1abdb57a83b718a4f13d0a25903961cf37)
* [element\_conn\_nsided](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1a3bb838bb71b6278f0a0ecb4b97a34728)
* [element\_conn\_nsided\_size](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1af47a502c2ad26e5ed6949235b6c8508b)
* [nodes](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1ae337fe703c9c443d86a40d9e5a65a6ce)
* [num\_elements](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1a791ecf9a4af64a24bf94c306e2df75ab)
* [num\_nodes](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1a48324a72d09fac731b637ce90aa5b5d0)
* [Part](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1ad182d67123cd4c1eae40e94e758e7c1f)
* [Reader](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1a35cb182752752c74a30050705acc3c06)
* [rigid\_body\_transform](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1a475e1943462f64fe17929591ebc998a0)
* [variable\_values](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1a60c19dcbef1d2441acd37b4152f702b6)

## Friends

<a id="classlibuserd_1_1_part_1a35cb182752752c74a30050705acc3c06"></a>
### Friend Reader

![][C++]
![][private]








## Public functions

<a id="classlibuserd_1_1_part_1a48324a72d09fac731b637ce90aa5b5d0"></a>
### Function num\_nodes

![][public]


```cpp
ErrorCode libuserd::Part::num_nodes(std::size_t &num_coords, int32_t rank=0) override
```


num_nodes

The number of nodes in this part in the current timestep






**Parameters**:

* **std::size_t**: & num_coords The number of nodes
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* std::size_t & **num_coords**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_part_1ae337fe703c9c443d86a40d9e5a65a6ce"></a>
### Function nodes

![][public]


```cpp
ErrorCode libuserd::Part::nodes(float *xyz, int32_t rank=0) override
```


nodes

Get the coordinates of the nodes.





Note: the xyz array needs to be allocated to num_coords()*3 floats.






**Parameters**:

* **float**: * xyz [x1,y1,z1,x2,y2,z2,...]
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* float * **xyz**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_part_1a791ecf9a4af64a24bf94c306e2df75ab"></a>
### Function num\_elements

![][public]


```cpp
ErrorCode libuserd::Part::num_elements(std::map< ElementType, std::size_t > &elements, int32_t rank=0) override
```


num_elements

Generate a map of the count of the number of elements of each supported type.






**Parameters**:

* **std::map<ElementType std::size_t>**: & elements For a given element type, how many elements are there
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* std::map< ElementType, std::size_t > & **elements**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_part_1aff4c1a7de4618b75a9d27ad612193b7a"></a>
### Function element\_conn

![][public]


```cpp
ErrorCode libuserd::Part::element_conn(ElementType elem_type, uint32_t *connectivity, int32_t rank=0) override
```


element_conn

For all element types other than NFACED and NSIDED, return the connectivity (0-based node indices).





Note: connectivity must be allocated to at least: 
```
num_elements[elem_type]*nodes_per_element(elem_type)

```






integers.






**Parameters**:

* **ElementType**: elem_type The element type to get the connectivity for
* **uint32_t**: * connectivity The output connectivity values
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* ElementType **elem_type**
* uint32_t * **connectivity**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_part_1af47a502c2ad26e5ed6949235b6c8508b"></a>
### Function element\_conn\_nsided\_size

![][public]


```cpp
ErrorCode libuserd::Part::element_conn_nsided_size(ElementType elem_type, size_t &nodes_per_polygon_size, size_t &nodes_size, int32_t rank=0) override
```


element_conn_nsided_size

Before an NSIDED mesh can be read, the size of the nodes_per_polygon array and nodes array need to be determined. This methods computes the required size of these arrays so that [element\_conn\_nsided()](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1a3bb838bb71b6278f0a0ecb4b97a34728) can be called with the proper I/O buffers.






**Parameters**:

* **ElementType**: elem_type The element type: NSIDED or NSIDED_GHOST
* **size_t**: & nodes_per_polygon_size The number of uint32_t values in the nodes_per_polygon buffer
* **size_t**: & nodes_size The number of uint32_t values in the nodes buffer
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* ElementType **elem_type**
* size_t & **nodes_per_polygon_size**
* size_t & **nodes_size**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_part_1a3bb838bb71b6278f0a0ecb4b97a34728"></a>
### Function element\_conn\_nsided

![][public]


```cpp
ErrorCode libuserd::Part::element_conn_nsided(ElementType elem_type, uint32_t *nodes_per_polygon, uint32_t *nodes, int32_t rank=0) override
```


element_conn_nsided

Retrieve the nodal indices for a collection of NSIDED elements.






**Parameters**:

* **ElementType**: elem_type The element type: NSIDED or NSIDED_GHOST
* **uint32_t**: & nodes_per_polygon Count of the number of nodes to consume for each polygon
* **uint32_t**: & nodes The list of nodes.
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* ElementType **elem_type**
* uint32_t * **nodes_per_polygon**
* uint32_t * **nodes**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_part_1abdb57a83b718a4f13d0a25903961cf37"></a>
### Function element\_conn\_nfaced\_size

![][public]


```cpp
ErrorCode libuserd::Part::element_conn_nfaced_size(ElementType elem_type, size_t &faces_per_element_size, size_t &nodes_per_face_size, size_t &indices_size, int32_t rank=0) override
```


element_conn_nfaced_size

Before an NFACED mesh can be read, the size of the faces_per_element, nodes_per_face and nodes arrays need to be determined. This methods computes the required size of these arrays so that [element\_conn\_nfaced()](classlibuserd_1_1_part.md#classlibuserd_1_1_part_1a499d69983d495e7a684c7cacbc6fbbd6) can be called with the proper I/O buffers.






**Parameters**:

* **ElementType**: elem_type The element type: NFACED or NFACED_GHOST
* **size_t**: & faces_per_element_size The number of uint32_t values in the faces_per_element buffer
* **size_t**: & nodes_per_face_size The number of uint32_t values in the nodes_per_face buffer
* **size_t**: & indices_size The number of uint32_t values in the nodes buffer
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* ElementType **elem_type**
* size_t & **faces_per_element_size**
* size_t & **nodes_per_face_size**
* size_t & **indices_size**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_part_1a499d69983d495e7a684c7cacbc6fbbd6"></a>
### Function element\_conn\_nfaced

![][public]


```cpp
ErrorCode libuserd::Part::element_conn_nfaced(ElementType elem_type, uint32_t *faces_per_element, uint32_t *nodes_per_face, uint32_t *nodes, int32_t rank=0) override
```


element_conn_nfaced

Retrieve the nodal indices for a collection of NFACED elements.






**Parameters**:

* **ElementType**: elem_type The element type: NFACED or NFACED_GHOST
* **uint32_t**: * faces_per_element For each element, the number of faces to be consumed
* **uint32_t**: * nodes_per_face For each face, the number of nodes to be consumed
* **uint32_t**: * nodes The list of nodes.
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* ElementType **elem_type**
* uint32_t * **faces_per_element**
* uint32_t * **nodes_per_face**
* uint32_t * **nodes**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_part_1a60c19dcbef1d2441acd37b4152f702b6"></a>
### Function variable\_values

![][public]


```cpp
ErrorCode libuserd::Part::variable_values(IVariable *var, ElementType elem_type, bool complex, uint32_t component, float *array, int32_t rank=0) override
```


variable_values

Get the variable values for the current node, element or constant.





Note: array needs to be at least the number of nodes or elements (for the specified variable and elem_type). For part constants, only a single value is returned.






**Parameters**:

* **const**: [Variable](classlibuserd_1_1_variable.md#classlibuserd_1_1_variable) * var The variable to get the values for
* **ElementType**: elem_type The element type
* **bool**: complex If the variable supports complex, pick the real or complex portion
* **uint32_t**: component For vector and tensor variables, the component to return
* **float**: * array the returned values
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* IVariable * **var**
* ElementType **elem_type**
* bool **complex**
* uint32_t **component**
* float * **array**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_part_1a475e1943462f64fe17929591ebc998a0"></a>
### Function rigid\_body\_transform

![][public]


```cpp
ErrorCode libuserd::Part::rigid_body_transform(struct RigidBodyTransform &transform) override
```


rigid_body_transform

The rotation, translation, scale to be applied to this part at this timestep.






**Parameters**:

* **struct**: RigidBodyTransform & transform The current transformation


**Returns**:

ErrorCode will return UNAVAILABLE if it does not exist (and a "unity" transform is returned)



**Parameters**:

* struct RigidBodyTransform & **transform**

**Return type**: ErrorCode

## Private functions

<a id="classlibuserd_1_1_part_1ad182d67123cd4c1eae40e94e758e7c1f"></a>
### Function Part

![][private]


```cpp
libuserd::Part::Part(const uint32_t index, const uint32_t id, const uint32_t reader_id, const std::string &name, const std::map< const std::string, std::string > &metadata, const PartHints hints)
```








**Parameters**:

* const uint32_t **index**
* const uint32_t **id**
* const uint32_t **reader_id**
* const std::string & **name**
* const std::map< const std::string, std::string > & **metadata**
* const PartHints **hints**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)