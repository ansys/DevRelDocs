# File mopsolver_api2_hash.h

![][C++]

**Location**: `mopsolver_api2_hash.h`





## Includes

* [mopsolver_api2_shared.h](mopsolver__api2__shared_8h.md#mopsolver__api2__shared_8h)


```mermaid
graph LR
1["mopsolver_api2_hash.h"]
click 1 "mopsolver__api2__hash_8h.md#mopsolver__api2__hash_8h"
1 --> 2

2["mopsolver_api2_shared.h"]
click 2 "mopsolver__api2__shared_8h.md#mopsolver__api2__shared_8h"
2 --> 3

3["mopsolver_api_shared.h"]
click 3 "mopsolver__api__shared_8h.md#source"

```


## Functions

<a id="mopsolver__api2__hash_8h_1ad4aa958ad7c8a1eb959286c4d9cdf397"></a>
### Function dmop2_hasSurrogate_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_hasSurrogate_hash(const char *_omdbfile, const char *_hash)
```




test binfile if it contains Surrogate Data 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang database file (*.omdb) containing MOP
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if Surrogate is found



 
**Parameters**:


* const char * **_omdbfile**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1a1326666114f1ecf8e6fb2ad07a72ddd7"></a>
### Function dmop2_getDimensions_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getDimensions_hash(const char *_omdbfile, unsigned int _flags, unsigned int *_dimensions, unsigned int _size_dimensions, const char *_hash)
```




retrieves problem dimensions based on the flags 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_flags**: uint value representing the specified flags (see enum DMOP_DIMENSION_FLAG in [mopsolver_api2.h](mopsolver__api2_8h.md#mopsolver__api2_8h))
* **_dimensions**: preallocated uint array for returning the dimensions. The length and order of the array depends on set flags: 1: DIM_INPUTS : 1 2: DIM_OUTPUTS : 1 3: DIM_CRITERIA : 1
* **_size_dimensions**: number of elements of the preallocated dimensions array
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the dimensions could be determined



 
**Parameters**:


* const char * **_omdbfile**
* unsigned int **_flags**
* unsigned int * **_dimensions**
* unsigned int **_size_dimensions**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1a4929ca5056b60359e28a0bb7c6cbe96e"></a>
### Function dmop2_solve_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_solve_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, unsigned int _size_inputs, unsigned int _flags, double *_responses, unsigned int _size_responses, const char *_hash)
```




approximates the active response values based on their best metamodel for any given design point 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which response values should be approximated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_size_inputs**: number of elements of _inputs
* **_flags**: integer value representing the set flags (see enum DMOP_SOLVE_FLAG in [mopsolver_api2.h](mopsolver__api2_8h.md#mopsolver__api2_8h))
* **_responses**: pointer to array of consecutive response values approximated per design point. The length of the array depends on set flags: 1: SOLVE_RESPONSES : Number of designs * number of responses 2: SOLVE_CRITERIA : Number of designs * number of criteria 3: SOLVE_DENSITIES : Number of designs 4: SOLVE_ERRORS : Number of designs * 4
* **_size_responses**: the size of the preallocated response array
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the approximation succeeded



 
**Parameters**:


* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* unsigned int **_size_inputs**
* unsigned int **_flags**
* double * **_responses**
* unsigned int **_size_responses**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1a2d3b875b1f0ec869db28fb5f999d392d"></a>
### Function dmop2_get_per_response_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_get_per_response_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, unsigned int _size_inputs, const char *_response_name, unsigned int _flags, double *_responses, unsigned int _size_responses, const char *_hash)
```




approximates the active response values based on their best metamodel for any given design point 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which response values should be approximated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_size_inputs**: number of elements of _inputs
* **_response_name**: zero terminated character string containing the name of the response
* **_flags**: integer value representing the set flags (see enum DMOP_PER_RESPONSE_FLAG in [mopsolver_api2.h](mopsolver__api2_8h.md#mopsolver__api2_8h))
* **_responses**: pointer to array of consecutive response values approximated per design point. The length and order of the array depends on set flags: 1: RESP_GRADIENTS : Number of designs * number of inputs 2: RESP_DENSITIES : Number of designs 3: RESP_ERRORS : Number of designs * 4
* **_size_responses**: the number of elements of the preallocated response array
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the approximation succeeded



 
**Parameters**:


* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* unsigned int **_size_inputs**
* const char * **_response_name**
* unsigned int **_flags**
* double * **_responses**
* unsigned int **_size_responses**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1ab468ae8a256caca552c8abf0d4d18e10"></a>
### Function dmop2_getNames_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getNames_hash(const char *_omdbfile, DMOP2_NAME_FLAG _flag, char **_names, const char *_hash)
```




retrieves the names of all criteria. The array sizes depend on the number of criteria determined in [dmop_getDimensions](mopsolver__api_8h.md#mopsolver__api_8h_1a05681e0a24f0aa4edde06acfc34830a5) 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_flag**: DMOP_NAME_FLAG value specifying which names to return (see enum DMOP_NAME_FLAG in [mopsolver_api2.h](mopsolver__api2_8h.md#mopsolver__api2_8h))
* **_names**: this must be null on the method call. It is created internally and will contain the names after the call. It is required to manually free the memory, e.g. by calling dmop_free2(void*)
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the name arrays were created and filled



 
**Parameters**:


* const char * **_omdbfile**
* [DMOP2_NAME_FLAG](mopsolver__api2__shared_8h.md#mopsolver__api2__shared_8h_1a919e4b2e211e2d3c06a2cd81f75a5993) **_flag**
* char ** **_names**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1a2a4b40a9adf35856f02489404101e058"></a>
### Function dmop2_getNamesWithDelimiter_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getNamesWithDelimiter_hash(const char *_omdbfile, DMOP2_NAME_FLAG _flag, char **_names, const char *_delimiter, const char *_hash)
```




retrieves the names of all criteria. The array sizes depend on the number of criteria determined in [dmop_getDimensions](mopsolver__api_8h.md#mopsolver__api_8h_1a05681e0a24f0aa4edde06acfc34830a5) 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_flag**: DMOP_NAME_FLAG value specifying which names to return (see enum DMOP_NAME_FLAG in [mopsolver_api2.h](mopsolver__api2_8h.md#mopsolver__api2_8h))
* **_names**: this must be null on the method call. It is created internally and will contain the names after the call. It is required to manually free the memory, e.g. by calling dmop_free2(void*)
* **_delimiter**: Character to use as a delimiter for the different variable names. Can be used to achieve connectivity to different programs which cannot handle '\0' properly. Passing an empty string will use '\0'.
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the name arrays were created and filled



 
**Parameters**:


* const char * **_omdbfile**
* [DMOP2_NAME_FLAG](mopsolver__api2__shared_8h.md#mopsolver__api2__shared_8h_1a919e4b2e211e2d3c06a2cd81f75a5993) **_flag**
* char ** **_names**
* const char * **_delimiter**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1ad7c0916a10092d27e34e38ec4acf9eba"></a>
### Function dmop2_getInputBounds_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getInputBounds_hash(const char *_omdbfile, double *_limits, const char *_hash)
```




retrieves the sampling bounds for all parameters. The array size depends on the number of inputs. 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_limits**: pointer to array of parameter limits, been given alternetly min1, max1, min2, max2 ... . The length of the array is to be expected as ( 2 * dmop_getDimensions._num_inputs ).
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the name arrays were created and filled



 
**Parameters**:


* const char * **_omdbfile**
* double * **_limits**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1aad9c265b0eac52300b93fb2a324ee8c8"></a>
### Function dmop2_getInputBoundsPerParameter_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getInputBoundsPerParameter_hash(const char *_omdbfile, const char *_param_name, double *_limits, const char *_hash)
```




retrieves the sampling bounds for given parameters. 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_param_name**: zero terminated character string containing the name of the parameter
* **_limits**: pointer to array of parameter limits, first element is min, second is max. The length of the array is 2.
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the name arrays were created and filled



 
**Parameters**:


* const char * **_omdbfile**
* const char * **_param_name**
* double * **_limits**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1ac985f8dfc5dde06b18e6869601b803f9"></a>
### Function dmop2_getReferenceValuePerParameter_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getReferenceValuePerParameter_hash(const char *_omdbfile, const char *_param_name, double *_ref_val, const char *_hash)
```




retrieves the Reference Value for given parameter. 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_param_name**: zero terminated character string containing the name of the parameter
* **_ref_val**: pointer to reference value.
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the name arrays were created and filled



 
**Parameters**:


* const char * **_omdbfile**
* const char * **_param_name**
* double * **_ref_val**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1a527765dfcea54d60aeef2708a1e28401"></a>
### Function dmop2_getCoPValuesPerResponse_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getCoPValuesPerResponse_hash(const char *_omdbfile, const char *_response_name, double *_cop_vals, const char *_hash)
```




retrieves the CoP values for given response. 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_response_name**: zero terminated character string containing the name of the response
* **_cop_vals**: pointer to array of CoP values, containing single CoP values for each parameter plus the total CoP. The length of the array is to be expected dmop_getDimensions._num_inputs+1.
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the name arrays were created and filled



 
**Parameters**:


* const char * **_omdbfile**
* const char * **_response_name**
* double * **_cop_vals**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="mopsolver__api2__hash_8h_1abe1b3dd723cda1b61a7e4d2c4d06c0dd"></a>
### Function dmop2_getFilteredStatesPerResponse_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getFilteredStatesPerResponse_hash(const char *_omdbfile, const char *_response_name, int *_filtered_states, const char *_hash)
```




retrieves the filtered states for given response. 
 
**Parameters**:


* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_response_name**: zero terminated character string containing the name of the response
* **_filtered_states**: pointer to array of filtered states, 0 is not filtered, 1 is filtered, if the last entry is 1 this means that there is no total CoP. The length of the array is to be expected dmop_getDimensions._num_inputs+1.
* **_hash**: zero terminated character string containing the hash value


**Returns**:

zero if the name arrays were created and filled



 
**Parameters**:


* const char * **_omdbfile**
* const char * **_response_name**
* int * **_filtered_states**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

## Source


```cpp
/* $Rev$ */

#ifndef DYNARDO_MOPSOLVERAPI2_HASH_H
#define DYNARDO_MOPSOLVERAPI2_HASH_H

#include "mopsolver_api2_shared.h"

DYNARDO_MOPSOLVER_API
int dmop2_hasSurrogate_hash(
    const char* _omdbfile,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_getDimensions_hash(
    const char* _omdbfile,
    unsigned int _flags,
    unsigned int *_dimensions,
    unsigned int _size_dimensions,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_solve_hash(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double *_inputs,
    unsigned int _size_inputs,
    unsigned int _flags,
    double *_responses,
    unsigned int _size_responses,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_get_per_response_hash(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    unsigned int _size_inputs,
    const char* _response_name,
    unsigned int _flags,
    double* _responses,
    unsigned int _size_responses,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_getNames_hash(const char* _omdbfile,
    DMOP2_NAME_FLAG _flag,
    char **_names,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_getNamesWithDelimiter_hash(const char* _omdbfile,
    DMOP2_NAME_FLAG _flag,
    char **_names,
    const char* _delimiter,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_getInputBounds_hash(const char* _omdbfile,
    double *_limits,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_getInputBoundsPerParameter_hash(const char* _omdbfile,
    const char* _param_name,
    double *_limits,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_getReferenceValuePerParameter_hash(const char* _omdbfile,
    const char* _param_name,
    double * _ref_val,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_getCoPValuesPerResponse_hash(const char* _omdbfile,
    const char* _response_name,
    double *_cop_vals,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop2_getFilteredStatesPerResponse_hash(const char* _omdbfile,
    const char* _response_name,
    int *_filtered_states,
    const char* _hash);

#endif
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)