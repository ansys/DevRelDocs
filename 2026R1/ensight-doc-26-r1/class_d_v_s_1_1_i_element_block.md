# Class DVS::IElementBlock

<a id="class_d_v_s_1_1_i_element_block"></a>

![][C++]
![][public]


Element Block Interface for DVS Reader API.

Element blocks contain the connectivity and variable data for elements. There is one element block per element type the mesh block has data available for.





Note: Structured data's connectivity is implicit and the element block only contains variable information for elements. Structured data is also different for ghost elements as the ghost elements are represented as an elemental variable instead of as an element block as unstructured data represents it. We might want to change this in future versions so structured data is better aligned with unstructured data in DVS but currently this is how the information is represented. See [DVS::IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash) and [DVS::IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash) for the hash object interface.

**Inherits from**:

* [DVS::IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash)
* [DVS::IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash)

## Members

* [get\_connectivity](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a78959ba4b322598b6bb31fc205c0d3b7)
* [get\_connectivity\_polygon](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a6b03d65937d395bbf9819e15b9c83288)
* [get\_connectivity\_polygon\_size](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a21ddc1624e91860b6dd37c25d7bd333f)
* [get\_connectivity\_polyhedral](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1ab47ae0f50ceab792a872a47a867134e5)
* [get\_connectivity\_polyhedral\_size](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1aa9bc1541ae8c5114f133122dbbb247cd)
* [get\_connectivity\_size](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a310ce04445517dd10942e7ba224ac75d)
* [get\_element\_type](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1aebec4b30e0b8dcb53b4b34305fa0d61e)
* [get\_hash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a51eaee86a6e2db4dda7f4326daa33874)
* [get\_hash\_size](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1ac0dedeb8d9dfd442d49d16cb4ddfb221)
* [get\_is\_ghost](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a01c36edfb491803556b3f30483339d26)
* [get\_nodes\_per\_element](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1ab95989900765aabb0eccefbe8c25fedd)
* [get\_num\_elements](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a74e15d2c0471232fca5dda950cd5dcbb)
* [get\_num\_variables](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)
* [get\_var\_hash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a17fff1548eb276edd326a0af08f6a7c4)
* [get\_var\_hash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a7348be86da47ac034252a68949b21007)
* [get\_var\_hash\_size](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a85c3ade756029207e15b1c8de8cd5c1b)
* [get\_var\_hash\_size](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a81cd99bbf69ccc0d50e8bcb7dd291046)
* [get\_variable](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a16ed2ca6ad45b9ffb78002f95cfbf0e5)
* [get\_variable\_data](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a3e7a946f3e97334f2a2ec72fd23e0e6e)
* [get\_variable\_data](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1ab60ef11cb6c4991c62fe59f71ad6bc78)
* [get\_variable\_data](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1ad5c88d1a1d172caedabe84a8f302b9f2)
* [get\_variable\_data](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1aef1f01f7fd80effeeb12af064c751f01)
* [get\_variable\_data](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a0bc52709b9440da6848d2b18751f51f4)
* [get\_variable\_data](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1aff20dc24794c5dfdfe009fce86f79659)
* [get\_variable\_size](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a452ed02842ece58d57c2abba34bd66ab)
* [get\_variable\_size](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a1c24a51dcdd6053e1b506aa5e61d79e5)
* [IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1af83862fd513c3392d18a6fcbb5a4ab0e)
* [IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a47b94abe3d1bf04c3e417a2722937408)
* [IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a5316f6ee2be9c742a05dff4ff78de760)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2f73d1292c0162a03bd29e9094567a77)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a41019f8e16b485b73c1a832df9c21665)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a17952af3cbc7170e37f882b17e800b3f)
* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a9b1a7d92f3c9c67d25be7b2cc4658b95)
* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1ae9c19f92692dee9f5d287ebc6e059dfb)
* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a056227972d92b22777ee19f60e1794f6)
* [operator=](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1ad49718a83f9b487b75e3245fa50b9864)
* [operator=](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1ad4ca6bfc8a74eb0f4e2bccfd95c13d67)
* [operator=](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1af8c71b16b66a50b92918028b8bbc0d66)
* [operator=](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1aeaed8c50d66653ffe2a16f2d39278734)
* [operator=](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a53d713fd8e14a28ad11fefb30c2fda03)
* [operator=](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a6aba4bc5fbf125a434cbb88f94a0dfb2)
* [~IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a6da0a1dc03a4bfa4c2bc0b29cf8a2608)
* [~IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2e08d37be2095880bcb7d77b365ebde3)
* [~IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a7b2a92106ec38f910d49a1c179419871)

## Public functions

<a id="class_d_v_s_1_1_i_element_block_1af83862fd513c3392d18a6fcbb5a4ab0e"></a>
### Function IElementBlock

![][public]


```cpp
DVS::IElementBlock::IElementBlock()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_element_block_1a6da0a1dc03a4bfa4c2bc0b29cf8a2608"></a>
### Function ~IElementBlock

![][public]


```cpp
virtual DVS::IElementBlock::~IElementBlock()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_element_block_1a47b94abe3d1bf04c3e417a2722937408"></a>
### Function IElementBlock

![][public]


```cpp
DVS::IElementBlock::IElementBlock(IElementBlock &&)=default
```


default





**Parameters**:

* IElementBlock &&

**Return type**: 

<a id="class_d_v_s_1_1_i_element_block_1ad49718a83f9b487b75e3245fa50b9864"></a>
### Function operator=

![][public]


```cpp
IElementBlock & DVS::IElementBlock::operator=(IElementBlock &&)=default
```


default





**Parameters**:

* [IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1af83862fd513c3392d18a6fcbb5a4ab0e) &&

**Return type**: [IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1af83862fd513c3392d18a6fcbb5a4ab0e) &

<a id="class_d_v_s_1_1_i_element_block_1a5316f6ee2be9c742a05dff4ff78de760"></a>
### Function IElementBlock

![][public]


```cpp
DVS::IElementBlock::IElementBlock(const IElementBlock &)=default
```


support copying





**Parameters**:

* const IElementBlock &

**Return type**: 

<a id="class_d_v_s_1_1_i_element_block_1ad4ca6bfc8a74eb0f4e2bccfd95c13d67"></a>
### Function operator=

![][public]


```cpp
IElementBlock & DVS::IElementBlock::operator=(const IElementBlock &)=default
```


default





**Parameters**:

* const [IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1af83862fd513c3392d18a6fcbb5a4ab0e) &

**Return type**: [IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1af83862fd513c3392d18a6fcbb5a4ab0e) &

<a id="class_d_v_s_1_1_i_element_block_1aebec4b30e0b8dcb53b4b34305fa0d61e"></a>
### Function get\_element\_type

![][public]
![][const]


```cpp
virtual dvs_element_type DVS::IElementBlock::get_element_type() const =0
```


Get the element type for this block.

**Returns**:

[dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) the element type for this block



**Return type**: [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895)

<a id="class_d_v_s_1_1_i_element_block_1a01c36edfb491803556b3f30483339d26"></a>
### Function get\_is\_ghost

![][public]
![][const]


```cpp
virtual bool DVS::IElementBlock::get_is_ghost() const =0
```


Get if this element block is composed of ghost elements.

This method returns if the element block is composed of ghost elements. Note: This is only for unstructured data, structured data ghost elements are stored within an elemental variable (DVS_STRUCTURED_GHOST_ELEMENTS)






**Returns**:

true if unstructured ghost elements



**Return type**: bool

<a id="class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3"></a>
### Function get\_num\_variables

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IElementBlock::get_num_variables(uint32_t &num_vars, VAR_TYPE type=VAR_TYPE::FLOAT) const =0
```


Get the number of elemental variables this element block has data for.

This method is intended to be used in conjunction with [get\_variable()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a16ed2ca6ad45b9ffb78002f95cfbf0e5) and [get\_variable\_data()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a3e7a946f3e97334f2a2ec72fd23e0e6e) to retrieve elemental variable data.





Errors:
* DVS_NONE: Success








**Parameters**:

* **num_vars**: if success, returns the number of variables on this element block
* **type**: the enum type. By default, VAR_TYPE::FLOAT


**Returns**:

DVS_NONE on success, else see method description



**Parameters**:

* uint32_t & **num_vars**
* [VAR\_TYPE](namespace_d_v_s.md#dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066) **type** = VAR_TYPE::FLOAT 

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1a16ed2ca6ad45b9ffb78002f95cfbf0e5"></a>
### Function get\_variable

![][public]
![][const]


```cpp
virtual const DVS::IVar * DVS::IElementBlock::get_variable(uint32_t index, VAR_TYPE type=VAR_TYPE::FLOAT) const =0
```


Get the variable definition associates with the elemental variable for this index.

This method retrieves the variable that is associated with the elemental variable of the mesh chunk at a specific index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]






**Parameters**:

* **index**: index of variable definition to get in range [0, [get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]
* **type**: the enum type. By default, VAR_TYPE::FLOAT


**Returns**:

[DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var)* nullptr if out of range, otherwise the variable associated with the index



**Parameters**:

* uint32_t **index**
* [VAR\_TYPE](namespace_d_v_s.md#dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066) **type** = VAR_TYPE::FLOAT 

**Return type**: const [DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) *

<a id="class_d_v_s_1_1_i_element_block_1a452ed02842ece58d57c2abba34bd66ab"></a>
### Function get\_variable\_size

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IElementBlock::get_variable_size(uint32_t index, uint32_t &num_values, VAR_TYPE type=VAR_TYPE::FLOAT) const =0
```


Get the variable size via the index and specified type.

This method retrieves the variable's size that is associated with the nodal variable of the mesh chunk at a specific index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1] and of the specified type





Errors:
* DVS_NONE: Success








**Parameters**:

* **index**: index of variable definition to get in range [0, [get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]
* **num_values**: a reference to a uint32_t, representing the number of values of the variable
* **type**: the enum type. By default, VAR_TYPE::FLOAT


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* uint32_t **index**
* uint32_t & **num_values**
* [VAR\_TYPE](namespace_d_v_s.md#dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066) **type** = VAR_TYPE::FLOAT 

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1a1c24a51dcdd6053e1b506aa5e61d79e5"></a>
### Function get\_variable\_size

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IElementBlock::get_variable_size(const IVar *var, uint32_t &num_values) const =0
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

<a id="class_d_v_s_1_1_i_element_block_1a3e7a946f3e97334f2a2ec72fd23e0e6e"></a>
### Function get\_variable\_data

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IElementBlock::get_variable_data(uint32_t index, float *array) const =0
```


Get the variable data by index.

This method retrieves nodal variable data based on an index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]. To retrieve the variable definition associated with the index call [get\_variable()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a16ed2ca6ad45b9ffb78002f95cfbf0e5).





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_PARAM_OUT_OF_BOUNDS: Index out of bounds of [0, [get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]

* DVS_PARAM_INVALID_VAR: Invalid variable found at index, should not happen

* DVS_PARAM_INVALID_VAR_ID: Invalid variable id found at index, should not happen

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **index**: index of the variable data in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]
* **array**: an array whose size should be returned from [get\_variable\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a452ed02842ece58d57c2abba34bd66ab). Overloaded for float and int64.


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* uint32_t **index**
* float * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1ab60ef11cb6c4991c62fe59f71ad6bc78"></a>
### Function get\_variable\_data

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IElementBlock::get_variable_data(uint32_t index, int64_t *array) const =0
```


Get the variable data by index.

This method retrieves nodal variable data based on an index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]. To retrieve the variable definition associated with the index call [get\_variable()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a16ed2ca6ad45b9ffb78002f95cfbf0e5).





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_PARAM_OUT_OF_BOUNDS: Index out of bounds of [0, [get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]

* DVS_PARAM_INVALID_VAR: Invalid variable found at index, should not happen

* DVS_PARAM_INVALID_VAR_ID: Invalid variable id found at index, should not happen

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **index**: index of the variable data in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]
* **array**: an array whose size should be returned from [get\_variable\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a452ed02842ece58d57c2abba34bd66ab). Overloaded for float and int64.


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* uint32_t **index**
* int64_t * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1ad5c88d1a1d172caedabe84a8f302b9f2"></a>
### Function get\_variable\_data

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IElementBlock::get_variable_data(const IVar *var, float *array) const =0
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
* **array**: an array whose size should be returned from [get\_variable\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a452ed02842ece58d57c2abba34bd66ab). Overloaded for float and int64.


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**
* float * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1aef1f01f7fd80effeeb12af064c751f01"></a>
### Function get\_variable\_data

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IElementBlock::get_variable_data(const IVar *var, int64_t *array) const =0
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
* **array**: an array whose size should be returned from [get\_variable\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a452ed02842ece58d57c2abba34bd66ab). Overloaded for float and int64.


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**
* int64_t * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1a0bc52709b9440da6848d2b18751f51f4"></a>
### Function get\_variable\_data

![][public]


```cpp
virtual dvs_ret DVS::IElementBlock::get_variable_data(uint32_t index, uint32_t *num_values, float *array)=0
```


Get the variable data on this mesh chunk by index.

This method retrieves elemental variable data based on an index in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]. To retrieve the variable definition associated with the index call [get\_variable()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a16ed2ca6ad45b9ffb78002f95cfbf0e5).





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_PARAM_OUT_OF_BOUNDS: Index out of bounds of [0, [get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]

* DVS_PARAM_INVALID_VAR: Invalid variable found at index, should not happen

* DVS_PARAM_INVALID_VAR_ID: Invalid variable id found at index, should not happen

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **index**: index of the variable data in range [0,[get\_num\_variables()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a8c8e7ec1c08a472a4dcfa56cd69568d3)-1]
* **num_values**: if not nullptr returns the number of values to allocate for array
* **array**: if not nullptr must be of size num_values


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* uint32_t **index**
* uint32_t * **num_values**
* float * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1aff20dc24794c5dfdfe009fce86f79659"></a>
### Function get\_variable\_data

![][public]


```cpp
virtual dvs_ret DVS::IElementBlock::get_variable_data(const IVar *var, uint32_t *num_values, float *array)=0
```


Get the variable data on this mesh chunk by by variable definition.

This method retrieves the elemental variable data based on a specific variable definitions.





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_INVALID_VAR: Bad (or null) variable object passed into method

* DVS_PARAM_INVALID_VAR_ID: Mesh chunk does not have data for var passed in.

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_INVALID_CACHE: Cache is unable to be read. Bad location or permissions

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data

* DVS_DATA_FAILED_LOAD: Data hash in metadata is missing from blockstore. Bad cache or permissions?








**Parameters**:

* **var**: the variable definition to retrieve elemental variable data for
* **num_values**: if not nullptr returns the number of values to allocate for array
* **array**: if not nullptr should be of size num_values


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**
* uint32_t * **num_values**
* float * **array**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1ab95989900765aabb0eccefbe8c25fedd"></a>
### Function get\_nodes\_per\_element

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IElementBlock::get_nodes_per_element(uint32_t &nodes_per_element) const =0
```


Get the number of nodes per basic unstructured element.

This method is invalid for polygonal and polyhedral elements





Error Codes:
* DVS_NONE: No error

* DVS_INVALID_ELEMENT_TYPE: Returned for polygonal/polyhedral data

* DVS_UNKNOWN: Unknown new type, should not happen








**Parameters**:

* **nodes_per_element**: the number of nodes per element


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method documentation



**Parameters**:

* uint32_t & **nodes_per_element**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1a74e15d2c0471232fca5dda950cd5dcbb"></a>
### Function get\_num\_elements

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IElementBlock::get_num_elements(uint32_t &num_elements) const =0
```


Get the number of elements for this block.

**Parameters**:

* **num_elements**: the number of elements for this block


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error



**Parameters**:

* uint32_t & **num_elements**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1a310ce04445517dd10942e7ba224ac75d"></a>
### Function get\_connectivity\_size

![][public]


```cpp
virtual dvs_ret DVS::IElementBlock::get_connectivity_size(uint32_t &indices_size)=0
```


Get the size of the connectivity array.

This method returns the size of the connectivity array in the param indices_size. This should be used to get the connectivity via [get\_connectivity()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a78959ba4b322598b6bb31fc205c0d3b7)





Error Codes:
* DVS_NONE: No error

* DVS_INVALID_ELEMENT_TYPE: This element block is not a basic unstructured type








**Parameters**:

* **indices_size**: the size of the connectivity array for this element block


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, see the method documentation for errors



**Parameters**:

* uint32_t & **indices_size**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1a78959ba4b322598b6bb31fc205c0d3b7"></a>
### Function get\_connectivity

![][public]


```cpp
virtual dvs_ret DVS::IElementBlock::get_connectivity(uint32_t *indices)=0
```


Get the connectivity for basic unstructured element types.

This method returns the connectivity array for a basic unstructured element. If retrieving the indices array it should be of size indices_size returned from [get\_connectivity\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a310ce04445517dd10942e7ba224ac75d).





Error Codes:
* DVS_NONE: No error

* DVS_INVALID_ELEMENT_TYPE: This element block is not a basic unstructured type

* DVS_INVALID_CACHE: Loading cache failed, possibly invalid cache or invalid permissions

* DVS_DATA_FAILED_LOAD: There was a failure loading data, data is either empty or missing








**Parameters**:

* **indices**: If not nullptr should be of size indices_size from [get\_connectivity\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a310ce04445517dd10942e7ba224ac75d)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, see the method documentation for errors



**Parameters**:

* uint32_t * **indices**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1a21ddc1624e91860b6dd37c25d7bd333f"></a>
### Function get\_connectivity\_polygon\_size

![][public]


```cpp
virtual dvs_ret DVS::IElementBlock::get_connectivity_polygon_size(uint32_t &nodes_per_polygon_size, uint32_t &indices_size)=0
```


Get the size of the connectivity arrays for polygon elements.

This method returns the size of the connectivity arrays for polygon elements. This should be used to allocate array sizes for use with [get\_connectivity\_polygon()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a6b03d65937d395bbf9819e15b9c83288).





nodes_per_polygon_size is the total number of elements for this element type indices_size is the size of the total connectivity array





Error Codes:
* DVS_NONE: No error

* DVS_INVALID_ELEMENT_TYPE: This element block is not a basic unstructured type








**Parameters**:

* **nodes_per_polygon_size**: the number of nodes per polygon, this is also the total number of elements
* **indices_size**: the total size of the connectivity array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, see the method documentation for errors



**Parameters**:

* uint32_t & **nodes_per_polygon_size**
* uint32_t & **indices_size**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1a6b03d65937d395bbf9819e15b9c83288"></a>
### Function get\_connectivity\_polygon

![][public]


```cpp
virtual dvs_ret DVS::IElementBlock::get_connectivity_polygon(uint32_t *nodes_per_polygon, uint32_t *indices)=0
```


Get the connectivity information for polygonal element blocks.

This method returns the different connectivity arrays for polygonal elements. The size of the arrays to allocate should be retrieved through the method [get\_connectivity\_polygon\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a21ddc1624e91860b6dd37c25d7bd333f).





Polygonal elements are described by 2 arrays. nodes_per_polygon is the number of nodes for each element. indices is the connectivity array for each element. So a square might look like: nodes_per_polygon: [4] (of size 1) indices: [0, 1, 2, 3] (of size 4)





Error Codes:
* DVS_NONE: No error

* DVS_INVALID_ELEMENT_TYPE: This element block is not a basic unstructured type

* DVS_INVALID_CACHE: Loading cache failed, possibly invalid cache or invalid permissions

* DVS_DATA_FAILED_LOAD: There was a failure loading data, data is either empty or missing








**Parameters**:

* **nodes_per_polygon**: an ouput array of size nodes_per_polygon_size from [get\_connectivity\_polygon\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a21ddc1624e91860b6dd37c25d7bd333f)
* **indices**: an output array of size indices_size from [get\_connectivity\_polygon\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a21ddc1624e91860b6dd37c25d7bd333f)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, see the method documentation for errors



**Parameters**:

* uint32_t * **nodes_per_polygon**
* uint32_t * **indices**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1aa9bc1541ae8c5114f133122dbbb247cd"></a>
### Function get\_connectivity\_polyhedral\_size

![][public]


```cpp
virtual dvs_ret DVS::IElementBlock::get_connectivity_polyhedral_size(uint32_t &faces_per_element_size, uint32_t &nodes_per_face_size, uint32_t &indices_size)=0
```


Get size of the connectivity arrays for polyhedral elements.

This method returns the size of the connectivity arrays for polyhedral elements. This should be used to allocate array sizes for use with [get\_connectivity\_polyhedral()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1ab47ae0f50ceab792a872a47a867134e5).





Error Codes:
* DVS_NONE: No error

* DVS_INVALID_ELEMENT_TYPE: This element block is not a basic unstructured type








**Parameters**:

* **faces_per_element_size**: the number of faces per element, this is also the total number of elements
* **nodes_per_face_size**: the number of nodes for each face in an element
* **indices_size**: the total number of indices in the connectivity array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, see the method documentation for errors



**Parameters**:

* uint32_t & **faces_per_element_size**
* uint32_t & **nodes_per_face_size**
* uint32_t & **indices_size**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_element_block_1ab47ae0f50ceab792a872a47a867134e5"></a>
### Function get\_connectivity\_polyhedral

![][public]


```cpp
virtual dvs_ret DVS::IElementBlock::get_connectivity_polyhedral(uint32_t *faces_per_element, uint32_t *nodes_per_face, uint32_t *indices)=0
```


Get the connectivity information for polyhedral element blocks.

This method returns the different connectivity arrays for polyhedral elements. The size of the arrays to allocate should be retrieved through the method [get\_connectivity\_polygon\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1a21ddc1624e91860b6dd37c25d7bd333f).





Polyhedral elements are described by 3 arrays. faces_per_element is the number of faces each individual element is made up of. Nodes per face is the number of nodes within each respective face. And the indices array of the connectivity of each face. So a cube might look like: faces_per_element: [6] (of size 1) nodes_per_face: [4,4,4,4,4,4] (of size 6) indices: [0,1,2,3 ..... ] (of size 24)





Error Codes:
* DVS_NONE: No error

* DVS_INVALID_ELEMENT_TYPE: This element block is not a basic unstructured type

* DVS_INVALID_CACHE: Loading cache failed, possibly invalid cache or invalid permissions

* DVS_DATA_FAILED_LOAD: There was a failure loading data, data is either empty or missing








**Parameters**:

* **faces_per_element**: and output array of size faces_per_element_size from [get\_connectivity\_polyhedral\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1aa9bc1541ae8c5114f133122dbbb247cd)
* **nodes_per_face**: an output array of size nodes_per_face_size from [get\_connectivity\_polyhedral\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1aa9bc1541ae8c5114f133122dbbb247cd)
* **indices**: an output array of size indices_size from [get\_connectivity\_polyhedral\_size()](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block_1aa9bc1541ae8c5114f133122dbbb247cd)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, see the method documentation for errors



**Parameters**:

* uint32_t * **faces_per_element**
* uint32_t * **nodes_per_face**
* uint32_t * **indices**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)