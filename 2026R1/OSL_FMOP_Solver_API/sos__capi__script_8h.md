# File sos_capi_script.h

![][C++]

**Location**: `sos_capi_script.h`

C-API to run oSP3D scripts and exchange basic data.

**copyright**\
Ansys Austria GmbH








* This API follows the _Basic_ exception safety _rule_. If any of the operations fail, the original data, e.g. the fmop_handle*_t, might have been overwritten, but there should be no resource leak.

* Return values are typically of type [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec). To get a human readalbe interpretation forward this value to [FMOP_getErrnoString()](sos__capi__common_8h.md#sos__capi__common_8h_1a4dcdde79d3a37a80540e3a7f5b486110) or call [FMOP_getLastErrorString()](sos__capi__common_8h.md#sos__capi__common_8h_1aa79c50f0e38654fc5bf42e052b229748). More information can be found in the Error Handling section

* Log messages from the oSP3D kernel are all bufferd in an internal variable. Unless otherwise stated in a function description, this internal variable gets reset(!) right at the beginning of each function call. Therefore, the user is forced into fetching all log messages of interest before proceeding.








!> **Warning** \
Concurrent library calls are NOT supported


!> **Warning** \
Unless stated otherwise, function calls overwrite log messages of any previous function call

## Includes

* [sos_capi_common.h](sos__capi__common_8h.md#sos__capi__common_8h)


```mermaid
graph LR
2["sos_capi_common.h"]
click 2 "sos__capi__common_8h.md#sos__capi__common_8h"

1["sos_capi_script.h"]
click 1 "sos__capi__script_8h.md#sos__capi__script_8h"
1 --> 2

```


## Included by

* [FMOPSolver.h](_f_m_o_p_solver_8h.md#_f_m_o_p_solver_8h)


```mermaid
graph RL
2["FMOPSolver.h"]
click 2 "_f_m_o_p_solver_8h_source.md#_f_m_o_p_solver_8h_source"

1["sos_capi_script.h"]
click 1 "sos__capi__script_8h.md#sos__capi__script_8h"
2 --> 1

```


## Create / Initialize Data Objects

API handling data object life time

<a id="sos__capi__script_8h_1ace6f8c522f626dddbf5fc12d4d1d7a11"></a>
### Function FMOP_globalScriptEngine

![][public]


```cpp
DYNARDO_FMOP_API fmop_script_handle_t FMOP_globalScriptEngine()
```


Get the handle to the global script engine from the initialized library. The routine checks if the Lua interpreter is available. If no, it returns 0. If yes, it returns the handle to the Lua interpreter. There is only a single instance available. Repeated calls of this functions always return the same handle.

**Returns**:


* [fmop_handle_t](mop_solver.md#fmop__solver_8h_1aed65d1ae14f8c298a702ad5b828a70ef) if the FMOP library was previously initialized with [FMOP_initializeLibrary()](sos__capi__common_8h.md#sos__capi__common_8h_1a9c8f0f808d3f27c57a3a57d5f9cf4834)

* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf) if the global script engine is unavailable



**Return type**: DYNARDO_FMOP_API [fmop_script_handle_t](sos__capi__script_8h.md#sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb)

<a id="sos__capi__script_8h_1a86518674fc7aa5571d44f5d8544879f0"></a>
### Function FMOP_script_createMatrix

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_script_createMatrix(fmop_script_handle_t context, const char *const ident, int rows, int cols, const double *const data)
```


Creates a tmath.Matrix in Lua script context. This version may be more efficient than creating a matrix through a text based script - at least for large matrices.

**Parameters**:

* **context**: handle to a script engine
* **ident**: the ident in Lua script of the matrix to be created
* **rows**: the number of rows of the matrix to be created
* **cols**: the number of columns of the matrix to be created
* **data**: the data array of the matrix to be created. The dimension of the data array must be rows*cols. The matrix data is stored in a column-major format.


**Returns**:


* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) on successful matrix creation

* [fmop_script_no_object](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca749f1c6edf13b1303018d7a3632dc316) ident could not be accessed

* [fmop_script_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becab6e0160bb71d6930176d907409618f4d) if an error occurred during LUA script execution

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurred, e.g. no license has been acquired



**Parameters**:

* [fmop_script_handle_t](sos__capi__script_8h.md#sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb) **context**
* const char *const **ident**
* int **rows**
* int **cols**
* const double *const **data**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="sos__capi__script_8h_1acd830885fbde66f6d3133d7f1e943796"></a>
### Function FMOP_script_createNumber

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_script_createNumber(fmop_script_handle_t context, const char *const ident, double data)
```


Creates a double precision floating point number variable in the Lua script context.

**Parameters**:

* **context**: handle to a script engine
* **ident**: the number's variable name
* **data**: the number's value


**Returns**:


* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) on successful number creation

* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf)

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurred, e.g. no license has been acquired



**Parameters**:

* [fmop_script_handle_t](sos__capi__script_8h.md#sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb) **context**
* const char *const **ident**
* double **data**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="sos__capi__script_8h_1a31383b3c0eb3e408c74430b1cd610183"></a>
### Function FMOP_script_createString

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_script_createString(fmop_script_handle_t context, const char *const ident, const char *const data)
```


Create a string variable in the Lua script context.

**Parameters**:

* **context**: handle to a script engine
* **ident**: the string's variable name
* **data**: the string's text


**Returns**:


* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) on successful string creation

* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf)

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurred, e.g. no license has been acquired



**Parameters**:

* [fmop_script_handle_t](sos__capi__script_8h.md#sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb) **context**
* const char *const **ident**
* const char *const **data**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="sos__capi__script_8h_1a585497e6891f11a032944d26f3b0d9c0"></a>
### Function FMOP_script_execute

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_script_execute(fmop_script_handle_t context, const char *const script)
```


Execute Lua script code. The script engine has the ability to parse and execute:

* any oSP3D script code (check the command log in the oSP3D GUI and the scripting examples provided with your oSP3D installation, in the public documents folder on Windows)

* any Lua code 
**Parameters**:

* **context**: handle to a script engine
* **script**: the Lua script code to be executed


**Returns**:


* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) on successful script execution

* [fmop_script_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becab6e0160bb71d6930176d907409618f4d) if an error occurred during LUA script execution

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurred, e.g. no license has beend acquired



**See also**: [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)



**Parameters**:

* [fmop_script_handle_t](sos__capi__script_8h.md#sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb) **context**
* const char *const **script**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="sos__capi__script_8h_1afe7c32369056cdee19411d3924538d5d"></a>
### Function FMOP_script_getMatrix

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_script_getMatrix(fmop_script_handle_t context, const char *const ident, int *rows, int *cols, const double **data)
```


Retrieves the binary data of a tmath.Matrix existing in the Lua script context The matrix must be saved in a Lua variable. The data can be retrieved in an efficient way by accessing only the data buffers in memory. Do not change the data from outside. Memory management remains with the Lua interpreter. Thus, the garbage collector may free the memory to which the output of this method refers to.

**Parameters**:

* **context**: handle to a script engine
* **ident**: the ident of the tmath.Matrix variable in Lua.
* **rows**: the number of rows
* **cols**: the number of columns
* **data**: *data will point to the matrix data array on output. The dimension of the data array must be rows*cols. The matrix data is stored in a column-major format.


**Returns**:


* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) on successful matrix access

* [fmop_script_no_object](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca749f1c6edf13b1303018d7a3632dc316) ident could not be accessed

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurred, e.g. no license has been acquired



**Parameters**:

* [fmop_script_handle_t](sos__capi__script_8h.md#sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb) **context**
* const char *const **ident**
* int * **rows**
* int * **cols**
* const double ** **data**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="sos__capi__script_8h_1a6b01058d679a651d52882f928caa14e7"></a>
### Function FMOP_script_getNumber

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_script_getNumber(fmop_script_handle_t context, const char *const ident, double *const data)
```


Retrieve the pointer to a number variable in the Lua script context. The number is is stored in double precision floating point format.

**Parameters**:

* **context**: handle to a script engine
* **ident**: the number's variable name
* **data**: contains the number's memory address on [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55). The caller retains ownership of the pointer.


**Returns**:


* [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55) on successful number access

* [fmop_script_wrong_type](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca32eddc7d860101cdbb8e1571c726ee91)

* [fmop_invalid_handle](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacef5c059b0dd649f97d5404db95c3ccf)

* [fmop_license_error](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8becacf8dfe2eaba2eada73a26e487a04f8fe) if a license error occurred, e.g. no license has been acquired



**Parameters**:

* [fmop_script_handle_t](sos__capi__script_8h.md#sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb) **context**
* const char *const **ident**
* double *const **data**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="sos__capi__script_8h_1ac1304b306d77e15fcfd1e99603bbff62"></a>
### Function FMOP_script_getString

![][public]


```cpp
DYNARDO_FMOP_API fmop_error_t FMOP_script_getString(fmop_script_handle_t context, const char *const ident, const char **data)
```


Retrieve the char array pointer to a string variable in the Lua script context. The data can be retrieved in an efficient way by accessing only the data buffers in memory. Do not change the data from outside. Memory management remains with the Lua interpreter. Thus, the garbage collector may free the memory to which the output of this method refers to.

**Parameters**:

* **context**: handle to a script engine
* **ident**: the string's variable name
* **data**: contain's the string's text on [fmop_success](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8beca41a0a2e83b0ac20d414f4b015522ce55)


**Returns**:



**Parameters**:

* [fmop_script_handle_t](sos__capi__script_8h.md#sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb) **context**
* const char *const **ident**
* const char ** **data**

**Return type**: DYNARDO_FMOP_API [fmop_error_t](sos__capi__common_8h.md#sos__capi__common_8h_1a4847f3fa2943ffd694eb6cbe169a8bec)

<a id="sos__capi__script_8h_1adaf34349f4a16e537f5fe8a5ceb52856"></a>
### Function FMOP_script_identExists

![][public]


```cpp
DYNARDO_FMOP_API bool FMOP_script_identExists(fmop_script_handle_t context, const char *const ident)
```


Check whether a variable exists in the Lua script context.

**Parameters**:

* **context**: handle to a script engine
* **ident**: the variable's name


**Returns**:


* true: the ident exists

* false: the ident does not exist



**Parameters**:

* [fmop_script_handle_t](sos__capi__script_8h.md#sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb) **context**
* const char *const **ident**

**Return type**: DYNARDO_FMOP_API bool

## Typedefs

<a id="sos__capi__script_8h_1aab8ff16aaa9cf05fccc70920f4b62bfb"></a>
### Typedef fmop_script_handle_t

![][public]

**Definition**: `sos_capi_script.h` (line 44)


```cpp
typedef void* fmop_script_handle_t
```


Contains the data required to post-process any Field-MOP.





**Return type**: void *

## Source


```cpp

#ifndef DYNARDO_SOS_SCRIPT_H
    #define DYNARDO_SOS_SCRIPT_H

#include "sos_capi_common.h"


#ifdef __cplusplus
extern "C" {
#endif

/*********************************************/

#ifdef DYNARDO_FMOP_DLL_EXPORTS
    typedef class FMOP_ScriptInterpreter* fmop_script_handle_t;
#else
    typedef void* fmop_script_handle_t;
#endif


/*********************************************/


/*
 *
#ifndef DOXYGEN_IGNORE
DYNARDO_FMOP_API fmop_error_t FMOP_loadDbBuf
    ( fmop_db_handle_t * database, const char* buffer, const size_t * length );

// FMOP_saveDbBuf

#endif


*/



DYNARDO_FMOP_API fmop_script_handle_t FMOP_globalScriptEngine();

DYNARDO_FMOP_API fmop_error_t FMOP_script_execute(fmop_script_handle_t context,
                                                  const char * const script);

DYNARDO_FMOP_API fmop_error_t FMOP_script_createMatrix(fmop_script_handle_t context,
                                                       const char * const ident,
                                                       int rows, int cols, const double * const data);

DYNARDO_FMOP_API fmop_error_t FMOP_script_getMatrix(fmop_script_handle_t context,
                                                    const char * const ident,
                                                    int * rows, int *cols, const double **data);

DYNARDO_FMOP_API fmop_error_t FMOP_script_createNumber(fmop_script_handle_t context,
                                                       const char * const ident,
                                                       double data);


DYNARDO_FMOP_API fmop_error_t FMOP_script_getNumber(fmop_script_handle_t context,
                                                    const char * const ident,
                                                    double * const data);

DYNARDO_FMOP_API fmop_error_t FMOP_script_createString(fmop_script_handle_t context,
                                                       const char * const ident,
                                                       const char * const data);

DYNARDO_FMOP_API fmop_error_t FMOP_script_getString(fmop_script_handle_t context,
                                                    const char * const ident,
                                                    const char **data);

DYNARDO_FMOP_API bool FMOP_script_identExists(fmop_script_handle_t context, const char * const ident);


#ifdef __cplusplus
}
#endif

#endif // DYNARDO_SOS_SCRIPT_H

// (c) 2018, Ansys Austria GmbH (proprietary license)
```


[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)