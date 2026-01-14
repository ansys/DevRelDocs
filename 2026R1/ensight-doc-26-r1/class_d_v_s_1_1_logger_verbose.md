# Class DVS::LoggerVerbose

<a id="class_d_v_s_1_1_logger_verbose"></a>

![][C++]
![][public]


Logger class based on verbosity.



**Inherits from**:

* [DVS::ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger)

## Members

* [\_func](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1accaf61e42b5fc93b7e467fd541c4426c)
* [\_level](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a57a60a84b561532eab3954793cf43912)
* [\_user\_data](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a2a0f47fb3bf0722220f9258321ae8632)
* [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1ae3ad4b03475688be53c56aa703840227)
* [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a146660f2ca9ca6857400b94e772ee28c)
* [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a7ac1dddc6570bdccbde4c842b0426778)
* [log](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1acf148c138e5b4c3a2bd00492966e2f00)
* [LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a88a3288c8d7f87bb5a3574fcc8909188)
* [LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a2cf7775542558791b4d8b8654d9175ea)
* [LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1af873ff781cc7ef4e0bcbfa30e05a088d)
* [operator=](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a7d88468fa718986074d711c64bce2d3d)
* [operator=](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a1ad9aaafe7978b362d42babeb58cef0b)
* [operator=](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a58a20fa66d0f564f0be1b67acf042b8d)
* [operator=](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a419289170b2754a62a16eccb070e01ed)
* [release](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a37d5bb525097d06ebc878a673da7029e)
* [~ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a1999933d81b7e0970d699f310dbe5fb3)
* [~LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1aa6d1b38cbd0f33a3238aae16a6db151e)

## Private attributes

<a id="class_d_v_s_1_1_logger_verbose_1a2a0f47fb3bf0722220f9258321ae8632"></a>
### Variable \_user\_data

![][private]



```cpp
void* DVS::LoggerVerbose::_user_data
```








**Type**: void *

<a id="class_d_v_s_1_1_logger_verbose_1a57a60a84b561532eab3954793cf43912"></a>
### Variable \_level

![][private]



```cpp
dvs_verbosity DVS::LoggerVerbose::_level
```








**Type**: [dvs\_verbosity](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1aafcfd80cd55c92c53106bb56fdaf026d)

<a id="class_d_v_s_1_1_logger_verbose_1accaf61e42b5fc93b7e467fd541c4426c"></a>
### Variable \_func

![][private]



```cpp
dvs_log_func DVS::LoggerVerbose::_func
```








**Type**: [dvs\_log\_func](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a80c7c60e9cd61fcc0a0aacac09d66947)

## Public functions

<a id="class_d_v_s_1_1_logger_verbose_1a88a3288c8d7f87bb5a3574fcc8909188"></a>
### Function LoggerVerbose

![][public]


```cpp
DVS::LoggerVerbose::LoggerVerbose(void *user_data, dvs_verbosity level, dvs_log_func func)
```


Constructor.

**Parameters**:

* **user_data**: user data to pass with logging
* **level**: verbosity level of the logger to use
* **func**: function pointer to method to use to log messages



**Parameters**:

* void * **user_data**
* [dvs\_verbosity](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1aafcfd80cd55c92c53106bb56fdaf026d) **level**
* [dvs\_log\_func](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a80c7c60e9cd61fcc0a0aacac09d66947) **func**

**Return type**: 

<a id="class_d_v_s_1_1_logger_verbose_1aa6d1b38cbd0f33a3238aae16a6db151e"></a>
### Function ~LoggerVerbose

![][public]


```cpp
virtual DVS::LoggerVerbose::~LoggerVerbose()=default
```


Virtual DTOR.





**Return type**: 

<a id="class_d_v_s_1_1_logger_verbose_1a2cf7775542558791b4d8b8654d9175ea"></a>
### Function LoggerVerbose

![][public]


```cpp
DVS::LoggerVerbose::LoggerVerbose(LoggerVerbose &&)=default
```


Support moving.





**Parameters**:

* LoggerVerbose &&

**Return type**: 

<a id="class_d_v_s_1_1_logger_verbose_1a7d88468fa718986074d711c64bce2d3d"></a>
### Function operator=

![][public]


```cpp
LoggerVerbose & DVS::LoggerVerbose::operator=(LoggerVerbose &&)=default
```




**Returns**:

[LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose)&



**Parameters**:

* [LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a88a3288c8d7f87bb5a3574fcc8909188) &&

**Return type**: [LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a88a3288c8d7f87bb5a3574fcc8909188) &

<a id="class_d_v_s_1_1_logger_verbose_1af873ff781cc7ef4e0bcbfa30e05a088d"></a>
### Function LoggerVerbose

![][public]


```cpp
DVS::LoggerVerbose::LoggerVerbose(const LoggerVerbose &)=default
```


Support copying.





**Parameters**:

* const LoggerVerbose &

**Return type**: 

<a id="class_d_v_s_1_1_logger_verbose_1a1ad9aaafe7978b362d42babeb58cef0b"></a>
### Function operator=

![][public]


```cpp
LoggerVerbose & DVS::LoggerVerbose::operator=(const LoggerVerbose &)=default
```




**Returns**:

[LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose)&



**Parameters**:

* const [LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a88a3288c8d7f87bb5a3574fcc8909188) &

**Return type**: [LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a88a3288c8d7f87bb5a3574fcc8909188) &

<a id="class_d_v_s_1_1_logger_verbose_1acf148c138e5b4c3a2bd00492966e2f00"></a>
### Function log

![][public]


```cpp
void DVS::LoggerVerbose::log(int level, const char *msg,...) override
```


Log a message to the logger.

This logs a message based on the verbosity of the logger when it was instantiated. If the level is <= the verbosity level it will be logged. Otherwise is will be filtered.






**Parameters**:

* **level**: message level of type [dvs\_log\_level](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1a430545460675139bdb1c6f190c26c33c)
* **msg**: msg to log
* **...**: variadic params



**Parameters**:

* int **level**
* const char * **msg**
* ...

**Return type**: void

**Reimplements**: [log](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a8f562c0a88964401a6bd50fc7b387ef5)

<a id="class_d_v_s_1_1_logger_verbose_1a37d5bb525097d06ebc878a673da7029e"></a>
### Function release

![][public]


```cpp
void DVS::LoggerVerbose::release() override
```


Release this logger.





**Return type**: void

**Reimplements**: [release](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a753d496b0ca488a74e6209f330b13458)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)