# oSP3D FMOP Solver

# Contents pages

* [Global contents](global_contents.md)
* [Files](file_contents.md)

# Index pages

* [Global index](global_index.md)
* [Files](file_index.md)

**Location**: `fmop_solver.h`

C-API to evaluate a Field Meta model of Optimal Prognosis (FMOP)

**copyright**
Ansys Austria GmbH

* This API follows the _Basic_ exception safety _rule_. If any of the operations fail, the original data, e.g. the fmop_handle*_t, might have been overwritten, but there should be no resource leak.

* Return values are typically of type [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec). To get a human readalbe interpretation forward this value to [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) or call [FMOP_getLastErrorString()](sos__capi__common_8h.md#sos__capi__common_8h_1aa79c50f0e38654fc5bf42e052b229748). More information can be found in the Error Handling section

* Log messages from the oSP3D kernel are all bufferd in an internal variable. Unless otherwise stated in a function description, this internal variable gets reset(!) right at the beginning of each function call. Therefore, the user is forced into fetching all log messages of interest before proceeding.



!> **Warning** \
Concurrent library calls are NOT supported


!> **Warning** \
Unless otherwise stated, every function call overwrites any log message of any previous function call

## Includes

* [sos_capi_common.h](sos__capi__common_8h.md#sos__capi__common_8h)


```mermaid
graph LR
1["fmop_solver.h"]
click 1 "index.md#fmop__solver_8h"
1 --> 2

2["sos_capi_common.h"]
click 2 "sos__capi__common_8h.md#sos__capi__common_8h"

```


## Included by

* [FMOPSolver.h](_f_m_o_p_solver_8h.md#_f_m_o_p_solver_8h)


```mermaid
graph RL
2["FMOPSolver.h"]
click 2 "_f_m_o_p_solver_8h_source.md#_f_m_o_p_solver_8h_source"

1["fmop_solver.h"]
click 1 "index.md#fmop__solver_8h"
2 --> 1

```


## Create / Initialize Data Objects

API handling data object life time

<a id="fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc"></a>
### Function FMOP_getModel

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getModel(fmop_db_handle_t database, fmop_dataobject_types data_type, const char *const fmop_ident, fmop_handle_t *fmop)
```


Loads a [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object from the database given.

**Parameters**:

* **database**: The already initialized database handle
* **data_type**: The data type in question
* **fmop_ident**: The FMOP ident to be loaded from the database given
* **fmop**: On input _*fmop_ must point to NULL. Returns an initialized fmop handle to the requested _fmop_ident_ on output. Pointer ownership is up to the caller after return. Call FMOP_releaseModel ([fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) *) at the end of lifetime.


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database or fmop_ident argument is a NULL pointer

* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the _fmop_ argument does not hold a NULL pointer on input

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to load a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_model_missing](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becaedda7a6dbd4f5dd3eedecca9ec7dc1e9) if the handle initialization fails

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that FMOP_initialize() returned fmop_model_success


**Returns**:

A success indicator. Call FMOP_getErrnoString to get a human readable representation



**Parameters**:

* [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) **database**
* [fmop_dataobject_types](sos__capi__common_8h.md#sos__capi__common_8h_1a69eb42c1b3b49f22b9e73c6c9869cb75) **data_type**
* const char *const **fmop_ident**
* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) * **fmop**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a0ad6b75479bad22c19004ccf3078f235"></a>
### Function FMOP_loadDbBuf

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_loadDbBuf(fmop_db_handle_t *database, const char *buffer, size_t length)
```


Initializes a [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) object from a previously saved optiSLang Postprocessing 3D (oSP3D) database array.

!> **Warning** \
Draft only. CURRENTLY NOT IMPLEMENTED. Returns fmop_not_implemented


**Parameters**:

* **database**: On input _*database_ must point to NULL. Returns an initialized handle to the loaded database on ouptut. The database of the returned handle has been set to the buffer content given. Pointer ownership is up to the caller after return. Call FMOP_releaseDb ([fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) *) at the end of lifetime.
* **buffer**: A character array
* **length**: The length of the character array


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database argument does not hold a NULL pointer on input

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the buffer or length argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to load a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) if the database handle has been initialized successfully


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation.



**Parameters**:

* [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) * **database**
* const char * **buffer**
* size_t **length**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1ab77fe12cab675bb1d50232deacf23a34"></a>
### Function FMOP_loadDbBufWMesh

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_loadDbBufWMesh(fmop_db_handle_t *database, const char *buffer, size_t length)
```


Initializes a [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) object from a previously saved optiSLang Postprocessing 3D (oSP3D) database array This function also builds up all internal data structures needed to represent FEM meshes. Hence it may need more CPU time and RAM.

!> **Warning** \
Draft only. CURRENTLY NOT IMPLEMENTED. Returns fmop_not_implemented


**Parameters**:

* **database**: On input _*database_ must point to NULL. Returns an initialized handle to the loaded database on ouptut. The database of the returned handle has been set to the buffer content given. Pointer ownership is up to the caller after return. Call FMOP_releaseDb ([fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) *) at the end of lifetime.
* **buffer**: A character array
* **length**: The length of the character array


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database argument does not hold a NULL pointer on input

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the buffer or length argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to load a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) if the database handle has been initialized successfully


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation.



**Parameters**:

* [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) * **database**
* const char * **buffer**
* size_t **length**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1adf36057836bc12095f01665fa068ba4c"></a>
### Function FMOP_loadDbFile

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_loadDbFile(fmop_db_handle_t *database, const char *path)
```


Initializes a [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) object from a previously saved optiSLang Postprocessing 3D (oSP3D) database.

**Parameters**:

* **database**: On input _*database_ must point to NULL. Returns an initialized handle to the loaded database on ouptut. The database of the returned handle has been set to the content of the file path given. Pointer ownership is up to the caller after return. Call FMOP_releaseDb ([fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) *) at the end of lifetime.
* **path**: The path to the oSP3D database file as a NULL terminated character array


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database argument does not hold a NULL pointer on input

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the path argument doesn't point to an existing file

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to load a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) if the [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) has been initialized successfully


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation.



**Parameters**:

* [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) * **database**
* const char * **path**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1ab3f6b6b4a84878f3c774a12a2b4cf958"></a>
### Function FMOP_loadDbFileWMesh

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_loadDbFileWMesh(fmop_db_handle_t *database, const char *path)
```


Initializes a [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) object from a previously saved optiSLang Postprocessing 3D (oSP3D) database This function also builds up all internal data structures needed to represent FEM meshes. Hence it may need more CPU time and RAM.

**Parameters**:

* **database**: On input _*database_ must point to NULL. Returns an initialized handle to the loaded database on ouptut. The database of the returned handle has been set to the content of the file path given. Pointer ownership is up to the caller after return. Call FMOP_releaseDb ([fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) *) at the end of lifetime.
* **path**: The path to the oSP3D database file as a NULL terminated character array


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database argument does not hold a NULL pointer on input

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the path argument doesn't point to an existing file

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to load a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) if the [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) has been initialized successfully


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation.



**Parameters**:

* [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) * **database**
* const char * **path**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1af36d28d4c5c718284a0f4236f2740e06"></a>
### Function FMOP_releaseDb

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_releaseDb(fmop_db_handle_t *database)
```


Releases a [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) object and dedicated memory.

**Parameters**:

* **database**: The [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) to be released. Set to NULLptr on return.


**Returns**:


* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation



**Parameters**:

* [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) * **database**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a37bdee678571cd855ac0bb10675b1d8c"></a>
### Function FMOP_releaseIdents

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_releaseIdents(char ***const idents, const size_t *num_idents)
```


An auxiliary function to releases an array of char arrays and dedicated memory.

**Parameters**:

* **idents**: A pointer to an array of char arrays. Set to NULLptr on return.
* **num_idents**: An already initialized scalar data object. Contains the number of idents in the char** array [] given


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the array argument is a NULL pointer or if *array points to NULL

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the num_idents argument is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation



**Parameters**:

* char ***const **idents**
* const size_t * **num_idents**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a3ad01c460ed6e409b79e258a523d0bf9"></a>
### Function FMOP_releaseModel

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_releaseModel(fmop_handle_t *fmop)
```


Releases a [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) object and dedicated memory.

**Parameters**:

* **fmop**: The [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) to be released. Set to NULLptr on return.


**Returns**:


* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation



**Parameters**:

* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) * **fmop**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

## Query properties

API to query idents and properties of a "Field Meta Model of Optimal Prognosis" (FMOP)

<a id="fmop__solver_8h_1a878106f886ca5f1ce112e6c5e238d80e"></a>
### Function FMOP_getDataDim

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getDataDim(const fmop_db_handle_t database, fmop_dataobject_types data_type, size_t *num_mesh_items)
```


Returns the size of the FCoP vector, aka the number of mesh items.

**Parameters**:

* **database**: A successfully initialized [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) data object
* **data_type**: The data type to be queried (node, element, scalar)
* **num_mesh_items**: An already initialized scalar data object. Contains the size of the data vectors for the givvemn data type on return


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the num_mesh_items pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that FMOP_initialize() returned fmop_model_success



**Parameters**:

* const [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) **database**
* [fmop_dataobject_types](sos__capi__common_8h.md#sos__capi__common_8h_1a69eb42c1b3b49f22b9e73c6c9869cb75) **data_type**
* size_t * **num_mesh_items**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a535bee00c4d200d31fdf4118e49c1f05"></a>
### Function FMOP_getDataPointCoors

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getDataPointCoors(fmop_handle_t fmop, char axis, double *coors)
```


Returns the cartesian data point coordinates for each data point.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **axis**: Controls coordinate output. The following integers are accepted:
* 0... asks for x-coordinates only

* 1... asks for y-coordinates only

* 2... asks for z-coordinates only

* 3... asks for x-, y- and z-coordinates
* **coors**: An already initialized array of size `formula {"type":"element","name":"formula","attributes":{"id":"0"},"children":[{"type":"text","text":"$ ( 1 + \\lfloor \\frac{\\mathit{axis}}{3} \\rfloor ) * \\mathit{num_mesh_items} $"}]}`. Call [FMOP_getModelDim()](index.md#fmop__solver_8h_1a24e43563d67cc64bffb7bccddbaada65) to get _num_mesh_items_. On output contains the following coordinate values:
* finite element nodes for an FMOP of type [fmop_node_data](sos__capi__common_8h.md#sos__capi__common_8h_1a69eb42c1b3b49f22b9e73c6c9869cb75aaf0fb275c161febc56c4f10e62987049)

* finite elements using their center coordinate in space for an FMOP of type [fmop_element_data](sos__capi__common_8h.md#sos__capi__common_8h_1a69eb42c1b3b49f22b9e73c6c9869cb75a1ec31fe31f3b8a9fd9dd902b014499ef)

* an FMOP of type [fmop_scalar_data](sos__capi__common_8h.md#sos__capi__common_8h_1a69eb42c1b3b49f22b9e73c6c9869cb75a16a14aa0d55901638e165fb3a39b3870) invokes an [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) error Follows the scheme: `formula {"type":"element","name":"formula","attributes":{"id":"1"},"children":[{"type":"text","text":"$ \\mathit{coors} \\lbrack k+ \\mathit{axis} \\bmod 3 \\rbrack $"}]}` with <br/>
 k...internal mesh item ident, e.g. internal signal position, internal element number <br/>
 Call [FMOP_getDataPointIndices()](index.md#fmop__solver_8h_1add2527ad2ad1bf1df141e5fa5b4c2e31) to map internal to external numbering scheme


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the axis parameter is out-of-bounds, or the coors pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success


!> **Warning** \
Calling this function for FMOP models of type [fmop_element_data](sos__capi__common_8h.md#sos__capi__common_8h_1a69eb42c1b3b49f22b9e73c6c9869cb75a1ec31fe31f3b8a9fd9dd902b014499ef) multiplies resource consumption!



**Parameters**:

* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* char **axis**
* double * **coors**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1add2527ad2ad1bf1df141e5fa5b4c2e31"></a>
### Function FMOP_getDataPointIndices

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getDataPointIndices(fmop_handle_t fmop, unsigned int *part_ids, unsigned int *item_ids)
```


Maps internal node/element numbering to the external scheme consisting of part and item ID.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **part_ids**: Either an already initialized array of size num_mesh_items as returned by [FMOP_getModelDim()](index.md#fmop__solver_8h_1a24e43563d67cc64bffb7bccddbaada65), or a NULL pointer. Note, most of the meshes consists of a single part only, e.g. signals. If the argument is initialized, it contains the external part IDs on output. A NULL pointer otherwise<br/>
 
```cpp
external( internal[k] ) = PART_ID [k], item_id [k] 
```
 k...mesh item, e.g. signal position, element number
* **item_ids**: An already initialized array of size num_mesh_items as returned by [FMOP_getModelDim()](index.md#fmop__solver_8h_1a24e43563d67cc64bffb7bccddbaada65). On output contains the external node/element ID <br/>
 
```cpp
external( internal[k] ) = part_id [k], ITEM_ID [k] 
```
 k...mesh item, e.g. signal position, element number


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the item_id pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* unsigned int * **part_ids**
* unsigned int * **item_ids**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a8ca72d6a865df21ce5a5180475c71cda"></a>
### Function FMOP_getElementsAtNode

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getElementsAtNode(fmop_handle_t fmop, unsigned int node_idx, unsigned int *elements)
```


Identifies the elements connected to a given node.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **node_idx**: the node index (0.. numNodes). This node index refers to the index in the FMOP data vectors.
* **elements**: An already initialized array of size as returned by [FMOP_getNumElementsAtNode()](index.md#fmop__solver_8h_1a4413f3e2bc5f893b9030631aceb03c54). On output contains the internal element ID that are connected to the given node.


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the item_id pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* unsigned int **node_idx**
* unsigned int * **elements**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a3eea3398149b5f0f6177ccc4a649ab79"></a>
### Function FMOP_getElementTypeIdent

![][public]


```cpp
DYNARDO_FMOP_API const char * FMOP_getElementTypeIdent(fmop_handle_t fmop, unsigned int element_idx)
```


Identifies the element type ident of a given element.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **element_idx**: the element index (0.. numElements). This element index refers to the index in the FMOP data vectors.


**Returns**:

On success the element type identifier at array position num_ident from the database given, othewise an empty string.


?> Calling this function changes the error number to:
* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database or fmop_idents arguments is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the param_ident pointer does not hold a NULL pointer on input

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the value of num_param given is greater than, or equal to the size of the param_idents char* array []

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise. Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* unsigned int **element_idx**

**Return type**: DYNARDO_FMOP_API const char *

<a id="fmop__solver_8h_1a185c515c2fe8b0528ccb5f95f543a3be"></a>
### Function FMOP_getModelAvgFCoP

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getModelAvgFCoP(const fmop_handle_t fmop, double *fcops)
```


Returns the Field Coefficients of Prognosis per active scalar input parameter.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **fcops**: An already initialized array of size num_params as returned by FMOP_getModelNumParams() On output contains the average Field Coefficient of Prognosis per active scalar input parameter Follows the scheme: fcops[i] (i..i'th active scalar input parameter).


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the fcops pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* double * **fcops**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a24e43563d67cc64bffb7bccddbaada65"></a>
### Function FMOP_getModelDim

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getModelDim(const fmop_handle_t fmop, size_t *num_mesh_items)
```


Returns the size of the FCoP vector, aka the number of mesh items.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **num_mesh_items**: An already initialized scalar data object. Contains the size of the FCoP vector on return


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the num_mesh_items pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* size_t * **num_mesh_items**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a9b6e5c7baeb1353a17f5efde188d0d8f"></a>
### Function FMOP_getModelIdent

![][public]


```cpp
DYNARDO_FMOP_API const char * FMOP_getModelIdent(const fmop_db_handle_t database, fmop_dataobject_types data_type, size_t num_ident)
```


Returns the n-th known FMOP identifier from the [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) given.

**Parameters**:

* **database**: A successfully initialized [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) data object
* **data_type**: The data type in question
* **num_ident**: Defines the position in the fmop_idents char* array []. Notice that the first element has a position of 0


**Returns**:

On succes the FMOP identifier at array position num_ident from the database given, otherwise an empty string. The returned string will be overwritten by this function at the next call and will be destroyed on program termination


?> Calling this function changes the error number to:
* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database or fmop_idents arguments is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the fmop_idents pointer does not hold a NULL pointer on input

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the value of num_ident given is greater than, or equal to the size of the fmop_idents char* array []

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise. Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* const [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) **database**
* [fmop_dataobject_types](sos__capi__common_8h.md#sos__capi__common_8h_1a69eb42c1b3b49f22b9e73c6c9869cb75) **data_type**
* size_t **num_ident**

**Return type**: DYNARDO_FMOP_API const char *

<a id="fmop__solver_8h_1a22d6e807dc869fa28442d26e29ddbc27"></a>
### Function FMOP_getModelIdents

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getModelIdents(const fmop_db_handle_t database, fmop_dataobject_types data_type, char ***const fmop_idents, size_t *num_idents)
```


Returns all known FMOP identifier from the [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) given.

**Parameters**:

* **database**: A successfully initialized [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) data object
* **data_type**: The data type in question
* **fmop_idents**: On input _*fmop_idents_ must point to NULL. On return contains all known FMOP identifier from the database given. Pointer ownership is up to the caller after return. Call [FMOP_releaseIdents()](index.md#fmop__solver_8h_1a37bdee678571cd855ac0bb10675b1d8c) at the end of life
* **num_idents**: An already initialized scalar data object. Contains the number of FMOP idents, aka the size of the fmop_idents char* array []


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database or fmop_idents arguments is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the fmop_idents pointer does not hold a NULL pointer on input

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the num_idents pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success


?> Many languages offers the possiblity to call functions from an external C-library, e.g. Java, python and Matlab. If you are running in some limitations due to our tripple pointer requirement, please use the wrapper functions [FMOP_getModelIdentsDim()](index.md#fmop__solver_8h_1a600dca69efae1f2eafc63f9f6a0067fc) followed by [FMOP_getModelIdent()](index.md#fmop__solver_8h_1a9b6e5c7baeb1353a17f5efde188d0d8f) to query known idents one by one



**Parameters**:

* const [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) **database**
* [fmop_dataobject_types](sos__capi__common_8h.md#sos__capi__common_8h_1a69eb42c1b3b49f22b9e73c6c9869cb75) **data_type**
* char ***const **fmop_idents**
* size_t * **num_idents**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a600dca69efae1f2eafc63f9f6a0067fc"></a>
### Function FMOP_getModelIdentsDim

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getModelIdentsDim(const fmop_db_handle_t database, fmop_dataobject_types data_type, size_t *num_idents)
```


Returns the total number of known FMOP identifiers from the [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) given.

**Parameters**:

* **database**: A successfully initialized [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) data object
* **data_type**: The data type in question
* **num_idents**: An already initialized scalar data object. Contains the number of FMOP idents, aka the size of the fmop_idents char* array []


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database or fmop_idents arguments is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the num_idents pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* const [fmop_db_handle_t](index.md#fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572) **database**
* [fmop_dataobject_types](sos__capi__common_8h.md#sos__capi__common_8h_1a69eb42c1b3b49f22b9e73c6c9869cb75) **data_type**
* size_t * **num_idents**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1ae2ab3659b0419a9ab56ba3d7722708fb"></a>
### Function FMOP_getModelParamIdent

![][public]


```cpp
DYNARDO_FMOP_API const char * FMOP_getModelParamIdent(const fmop_handle_t fmop, size_t num_param)
```


Returns the n-th active parameter identifier from the fmop handle given.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **num_param**: Defines the position in the fmop_idents char* array []. Notice that the first element has a position of 0


**Returns**:

On success the parameter identifier at array position num_ident from the database given, othewise an empty string. The returned string will be overwritten by this function at the next call and will be destroyed on program termination


?> Calling this function changes the error number to:
* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the database or fmop_idents arguments is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the param_ident pointer does not hold a NULL pointer on input

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the value of num_param given is greater than, or equal to the size of the param_idents char* array []

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise. Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* size_t **num_param**

**Return type**: DYNARDO_FMOP_API const char *

<a id="fmop__solver_8h_1a485827623b3d01cf3157c0a16559908f"></a>
### Function FMOP_getModelParamIdents

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getModelParamIdents(const fmop_handle_t fmop, char ***const param_idents, size_t *num_params)
```


Returns all active scalar inputer parameters for the fmop handle given.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **param_idents**: Requires a NULL pointer on input. On return contains all active scalar input parameters used in the fmop handle given. Pointer ownership is up to the caller after return. Call [FMOP_releaseIdents()](index.md#fmop__solver_8h_1a37bdee678571cd855ac0bb10675b1d8c) at the end of life
* **num_params**: An already initialized scalar data object. Contains the number of active scalar input parameters used in the fmop handle given, aka the size of the param_idents char* array []


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop or param_idents arguments is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the param_idents pointer does not hold a NULL pointer on input

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the num_params pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success


?> Many languages offers the possiblity to call functions from an external C-library, e.g. Java, python and Matlab. If you are running in some limitations due to our tripple pointer requirement, please use the wrapper functions [FMOP_getModelParamIdentsDim()](index.md#fmop__solver_8h_1adabef430a391d15eb077fe30e134f368) followed by [FMOP_getModelParamIdent()](index.md#fmop__solver_8h_1ae2ab3659b0419a9ab56ba3d7722708fb) to query known idents one by one



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* char ***const **param_idents**
* size_t * **num_params**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1adabef430a391d15eb077fe30e134f368"></a>
### Function FMOP_getModelParamIdentsDim

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getModelParamIdentsDim(const fmop_handle_t fmop, size_t *num_params)
```


Returns the total number of active parameter identifiers from the fmop handle given.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **num_params**: An already initialized scalar data object. Contains the number of active scalar input parameters used in the fmop handle given, aka the size of the param_idents char* array []


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop or param_idents arguments is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the num_params pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* size_t * **num_params**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a1ff6f33cf199015b78c5837e40d90f42"></a>
### Function FMOP_getModelTotalAvgFCoP

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getModelTotalAvgFCoP(const fmop_handle_t fmop, double *fcop)
```


Returns the total average Field Coefficient of Prognosis for the fmop handle given.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **fcop**: An already initialized scalar data object on input. On output contains the total average Field Coefficient of Prognosis


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the fcop pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* double * **fcop**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a03080c2458b8c03eb85ce9eb97926711"></a>
### Function FMOP_getNodesAtElement

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getNodesAtElement(fmop_handle_t fmop, unsigned int element_idx, unsigned int *nodes)
```


Identifies the nodes connected to a given element.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **element_idx**: the element index (0.. numElements). This element index refers to the index in the FMOP data vectors.
* **nodes**: An already initialized array of size as returned by [FMOP_getNumNodesAtElement()](index.md#fmop__solver_8h_1a031be0f125c4fbeb450f03bb960e207d). On output contains the internal node ID that are connected to the given element.


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the item_id pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* unsigned int **element_idx**
* unsigned int * **nodes**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a4413f3e2bc5f893b9030631aceb03c54"></a>
### Function FMOP_getNumElementsAtNode

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getNumElementsAtNode(fmop_handle_t fmop, unsigned int node_idx, unsigned int *num_elements)
```


Identifies the elements connected to a given node.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **node_idx**: the node index (0.. numNodes). This node index refers to the index in the FMOP data vectors.
* **num_elements**: a pointer to an unsigned integer number. On output it will contain the number of connected elements.


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the item_id pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* unsigned int **node_idx**
* unsigned int * **num_elements**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a031be0f125c4fbeb450f03bb960e207d"></a>
### Function FMOP_getNumNodesAtElement

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getNumNodesAtElement(fmop_handle_t fmop, unsigned int element_idx, unsigned int *num_nodes)
```


Identifies the nodes connected to a given element.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **element_idx**: the element index (0.. numElements). This element index refers to the index in the FMOP data vectors.
* **num_nodes**: a pointer to an unsigned integer number. On output it will contain the number of connected nodes.


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the item_id pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* unsigned int **element_idx**
* unsigned int * **num_nodes**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1abaed2ac2af6a304f8356e51b9cb98442"></a>
### Function FMOP_getParamLowerBounds

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getParamLowerBounds(const fmop_handle_t fmop, double *lower_bounds)
```


Returns lower bound values of input parameters used to train the FMOP, aka the lower bound values of Design of Experiment input parameters.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **lower_bounds**: An already initialized array of size num_params as returned by [FMOP_getModelParamIdents()](index.md#fmop__solver_8h_1a485827623b3d01cf3157c0a16559908f) On output contains the vector of lower bound values of all active scalar input parameters used to train the FMOP, e.g. lower_bounds[j] (j..index of the active scalar input parameter).


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the lower_bounds pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* double * **lower_bounds**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a301cfcf26e28ec7ba4b2c730facb679c"></a>
### Function FMOP_getParamUpperBounds

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_getParamUpperBounds(const fmop_handle_t fmop, double *upper_bounds)
```


Returns upper bound values of input parameters used to train the FMOP, aka the upper bound values of Design of Experiment input parameters.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **upper_bounds**: An already initialized array of size num_params as returned by [FMOP_getModelParamIdents()](index.md#fmop__solver_8h_1a485827623b3d01cf3157c0a16559908f) On output contains the vector of upper bound values of all active scalar input parameters used to train the FMOP, e.g. upper_bounds[j] (j..index of the active scalar input parameter).


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the upper_bounds pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise.


**Returns**:

Call FMOP_getErrnoString to get a human readable representation


?> Assumes that [FMOP_getModel()](index.md#fmop__solver_8h_1aae65fdf242dba6c37b9de818be7c9dcc) returned fmop_success



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* double * **upper_bounds**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a1ff1451cc5f1c6cefa7a67c6a906d653"></a>
### Function FMOP_isNodePartOfBoundary

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_isNodePartOfBoundary(fmop_handle_t fmop, unsigned int node_idx, unsigned int *is_part_of_boundary)
```


Identifies if the given node is on the surface.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **node_idx**: the node index (0.. numNodes). This node index refers to the index in the FMOP data vectors.
* **is_part_of_boundary**: a pointer to an unsigned integer number. On output it will contain
* 1 if the node is on the boundary

* 0 if the node is not on the boundary


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop argument is a NULL pointer

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the item_id pointer is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation



**Parameters**:

* [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* unsigned int **node_idx**
* unsigned int * **is_part_of_boundary**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

## Operations

API used to evalute a Field Meta Model of Optimal Prognosis (FMOP)

<a id="fmop__solver_8h_1a1bd5d62d9c5ba6d327b0368a8b4e2e31"></a>
### Function FMOP_approxField

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_approxField(const fmop_handle_t fmop, const double *param_values, double *field)
```


Approximates a field response based on a vector of given active scalar input parameters.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **param_values**: Vector of a single sample of all active scalar input parameters. Size and parameter order are defined by the return values of [FMOP_getModelParamIdents()](index.md#fmop__solver_8h_1a485827623b3d01cf3157c0a16559908f)<br/>
 param_values [j]... the index j matches the parameter input name position returned in the param_idents argument of [FMOP_getModelParamIdents()](index.md#fmop__solver_8h_1a485827623b3d01cf3157c0a16559908f) <br/>
 sizeof ( param_values ) ... must match the num_params argument of [FMOP_getModelParamIdents()](index.md#fmop__solver_8h_1a485827623b3d01cf3157c0a16559908f) The values must not be located outside the initial sampling bounds.
* **field**: An already initialized array of size num_mesh_items as returned by [FMOP_getModelDim()](index.md#fmop__solver_8h_1a24e43563d67cc64bffb7bccddbaada65) On output contains the approximated field response. <br/>
 Follows the scheme: `formula {"type":"element","name":"formula","attributes":{"id":"2"},"children":[{"type":"text","text":"$ field[k] $"}]}` <br/>
 k...internal mesh item ident, e.g. internal signal position, internal element number <br/>
 Call [FMOP_getDataPointIndices()](index.md#fmop__solver_8h_1add2527ad2ad1bf1df141e5fa5b4c2e31) to map internal to external numbering scheme


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop handle is not allocated.

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the param_values or field array argument is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation. For detailed log messages call FMOP_getLastError() which outputs internal log messages.



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* const double * **param_values**
* double * **field**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="fmop__solver_8h_1a4380a704857be093fc6444aa5b8fdadc"></a>
### Function FMOP_approxFieldExtrapolate

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_approxFieldExtrapolate(const fmop_handle_t fmop, const double *param_values, double *field)
```


Approximates a field response based on a vector of given active scalar input parameters.

**Parameters**:

* **fmop**: A successfully initialized [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) data object
* **param_values**: Vector of a single sample of all active scalar input parameters. Size and parameter order are defined by the return values of [FMOP_getModelParamIdents()](index.md#fmop__solver_8h_1a485827623b3d01cf3157c0a16559908f)<br/>
 param_values [j]... the index j matches the parameter input name position returned in the param_idents argument of [FMOP_getModelParamIdents()](index.md#fmop__solver_8h_1a485827623b3d01cf3157c0a16559908f) <br/>
 sizeof ( param_values ) ... must match the num_params argument of [FMOP_getModelParamIdents()](index.md#fmop__solver_8h_1a485827623b3d01cf3157c0a16559908f) The values may be located outside the initial sampling bounds.
* **field**: An already initialized array of size num_mesh_items as returned by [FMOP_getModelDim()](index.md#fmop__solver_8h_1a24e43563d67cc64bffb7bccddbaada65) On output contains the approximated field response. <br/>
 Follows the scheme: `formula {"type":"element","name":"formula","attributes":{"id":"2"},"children":[{"type":"text","text":"$ field[k] $"}]}` <br/>
 k...internal mesh item ident, e.g. internal signal position, internal element number <br/>
 Call [FMOP_getDataPointIndices()](index.md#fmop__solver_8h_1add2527ad2ad1bf1df141e5fa5b4c2e31) to map internal to external numbering scheme


**Returns**:


* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the fmop handle is not allocated.

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurs, e.g. no license has been acquired so far or one tries to release a 3D mesh but acquired a oSP3D license for 1D meshes, e.g. signals, only

* [fmop_settings_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca4040927e4d05d13e93b9f2c7373ca0cd) if the param_values or field array argument is a NULL pointer

* [fmop_exception_occurred](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becadac3d9086cdab852d265dc924070c198) if any other failure get invoked

* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) elsewise


**Returns**:

Call [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) to get a human readable representation. For detailed log messages call FMOP_getLastError() which outputs internal log messages.



**Parameters**:

* const [fmop_handle_t](index.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) **fmop**
* const double * **param_values**
* double * **field**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

## Typedefs

<a id="fmop__solver_8h_1a4f3b1f4672b1b913e04f95def14d3572"></a>
### Typedef fmop_db_handle_t

![][public]

**Definition**: `fmop_solver.h` (line 42)


```cpp
typedef void* fmop_db_handle_t
```


Contains all the data being required to post-process any FMOP.

?> Since we had some unresolved troubles in Matlab using the forward declaration 
```cpp
typedef struct FMOP_Database* fmop_db_handle_t; 
```
 we now prefer to write for the public definition 'void*' only



**Return type**: void *

<a id="fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef"></a>
### Typedef fmop_handle_t

![][public]

**Definition**: `fmop_solver.h` (line 53)


```cpp
typedef void* fmop_handle_t
```


Contains one specific single or cross correlated FMOP.

?> Since we had some unresolved troubles in Matlab using the forward declaration 
```cpp
typedef struct FMOP* fmop_handle_t; 
```
 we now prefer to write for the public defintion 'void*' only



**Return type**: void *

## Source


```cpp

#ifndef DYNARDO_FMOP_H
    #define DYNARDO_FMOP_H

#include "sos_capi_common.h"



#ifdef __cplusplus
extern "C" {
#endif

#ifdef DYNARDO_FMOP_DLL_EXPORTS
    typedef struct FMOP_Database* fmop_db_handle_t;
#else
    typedef void* fmop_db_handle_t;
#endif
#ifdef DYNARDO_FMOP_DLL_EXPORTS
    typedef struct FMOP* fmop_handle_t;
#else
    typedef void* fmop_handle_t;
#endif



/*********************************************/

DYNARDO_FMOP_API fmop_error_t FMOP_loadDbFile ( fmop_db_handle_t * database, const char* path );

DYNARDO_FMOP_API fmop_error_t FMOP_loadDbFileWMesh ( fmop_db_handle_t * database, const char* path );

#ifndef DOXYGEN_IGNORE
DYNARDO_FMOP_API fmop_error_t FMOP_loadDbBuf
    ( fmop_db_handle_t * database, const char* buffer,  size_t length );
DYNARDO_FMOP_API fmop_error_t FMOP_loadDbBufWMesh
    ( fmop_db_handle_t * database, const char* buffer, size_t length );
#endif
DYNARDO_FMOP_API fmop_error_t FMOP_getModel ( fmop_db_handle_t database, fmop_dataobject_types data_type,
                                              const char * const fmop_ident, fmop_handle_t * fmop );
DYNARDO_FMOP_API fmop_error_t FMOP_releaseModel ( fmop_handle_t * fmop );
DYNARDO_FMOP_API fmop_error_t FMOP_releaseDb ( fmop_db_handle_t * database );
DYNARDO_FMOP_API fmop_error_t FMOP_releaseIdents ( char *** const idents, const size_t * num_idents );


/*********************************************/

DYNARDO_FMOP_API fmop_error_t FMOP_getModelIdents
    ( const fmop_db_handle_t database, fmop_dataobject_types data_type, char *** const fmop_idents, size_t * num_idents );
DYNARDO_FMOP_API fmop_error_t FMOP_getModelIdentsDim
    ( const fmop_db_handle_t database, fmop_dataobject_types data_type, size_t * num_idents );
DYNARDO_FMOP_API const char * FMOP_getModelIdent
    ( const fmop_db_handle_t database, fmop_dataobject_types data_type, size_t num_ident );
DYNARDO_FMOP_API fmop_error_t FMOP_getModelParamIdents
    ( const fmop_handle_t fmop, char *** const param_idents, size_t * num_params );
DYNARDO_FMOP_API fmop_error_t FMOP_getModelParamIdentsDim ( const fmop_handle_t fmop, size_t * num_params );
DYNARDO_FMOP_API const char * FMOP_getModelParamIdent ( const fmop_handle_t fmop, size_t num_param );
DYNARDO_FMOP_API fmop_error_t FMOP_getParamLowerBounds ( const fmop_handle_t fmop, double * lower_bounds );
DYNARDO_FMOP_API fmop_error_t FMOP_getParamUpperBounds ( const fmop_handle_t fmop, double * upper_bounds );
DYNARDO_FMOP_API fmop_error_t FMOP_getModelTotalAvgFCoP ( const fmop_handle_t fmop, double * fcop );
DYNARDO_FMOP_API fmop_error_t FMOP_getModelAvgFCoP ( const fmop_handle_t fmop, double * fcops );
DYNARDO_FMOP_API fmop_error_t FMOP_getModelDim ( const fmop_handle_t fmop, size_t * num_mesh_items );
DYNARDO_FMOP_API fmop_error_t FMOP_getDataDim ( const fmop_db_handle_t database, fmop_dataobject_types data_type, size_t * num_mesh_items );
DYNARDO_FMOP_API fmop_error_t FMOP_getDataPointIndices ( fmop_handle_t fmop, unsigned int * part_ids, unsigned int * item_ids );
DYNARDO_FMOP_API fmop_error_t FMOP_getDataPointCoors (fmop_handle_t fmop, char axis, double * coors );


DYNARDO_FMOP_API fmop_error_t FMOP_getNumElementsAtNode ( fmop_handle_t fmop, unsigned int node_idx, unsigned int * num_elements );
DYNARDO_FMOP_API fmop_error_t FMOP_getElementsAtNode ( fmop_handle_t fmop, unsigned int node_idx, unsigned int * elements );
DYNARDO_FMOP_API fmop_error_t FMOP_isNodePartOfBoundary (fmop_handle_t fmop, unsigned int node_idx, unsigned int * is_part_of_boundary);
DYNARDO_FMOP_API fmop_error_t FMOP_getNumNodesAtElement ( fmop_handle_t fmop, unsigned int element_idx, unsigned int * num_nodes );
DYNARDO_FMOP_API fmop_error_t FMOP_getNodesAtElement ( fmop_handle_t fmop, unsigned int element_idx, unsigned int * nodes );
DYNARDO_FMOP_API const char * FMOP_getElementTypeIdent ( fmop_handle_t fmop, unsigned int element_idx );

/*********************************************/

DYNARDO_FMOP_API fmop_error_t FMOP_approxField
    ( const fmop_handle_t fmop, const double * param_values, double * field );

DYNARDO_FMOP_API fmop_error_t FMOP_approxFieldExtrapolate
    ( const fmop_handle_t fmop, const double * param_values, double * field );



#ifdef __cplusplus
}
#endif

#endif // DYNARDO_FMOP_H

// (c) 2017, Ansys Austria GmbH (proprietary license)
```


[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)