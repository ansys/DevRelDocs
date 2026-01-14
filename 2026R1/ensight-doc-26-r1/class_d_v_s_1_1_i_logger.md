# Class DVS::ILogger

<a id="class_d_v_s_1_1_i_logger"></a>

![][C++]
![][public]


Interface for a logger to be used by [DVS::IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client).



**Inherited by**:

* [DVS::LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose)

## Members

* [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1ae3ad4b03475688be53c56aa703840227)
* [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a146660f2ca9ca6857400b94e772ee28c)
* [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a7ac1dddc6570bdccbde4c842b0426778)
* [log](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a8f562c0a88964401a6bd50fc7b387ef5)
* [operator=](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a58a20fa66d0f564f0be1b67acf042b8d)
* [operator=](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a419289170b2754a62a16eccb070e01ed)
* [release](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a753d496b0ca488a74e6209f330b13458)
* [~ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a1999933d81b7e0970d699f310dbe5fb3)

## Public functions

<a id="class_d_v_s_1_1_i_logger_1ae3ad4b03475688be53c56aa703840227"></a>
### Function ILogger

![][public]


```cpp
DVS::ILogger::ILogger()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_logger_1a1999933d81b7e0970d699f310dbe5fb3"></a>
### Function ~ILogger

![][public]


```cpp
virtual DVS::ILogger::~ILogger()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_logger_1a146660f2ca9ca6857400b94e772ee28c"></a>
### Function ILogger

![][public]


```cpp
DVS::ILogger::ILogger(ILogger &&)=default
```


default





**Parameters**:

* ILogger &&

**Return type**: 

<a id="class_d_v_s_1_1_i_logger_1a58a20fa66d0f564f0be1b67acf042b8d"></a>
### Function operator=

![][public]


```cpp
ILogger & DVS::ILogger::operator=(ILogger &&)=default
```


default





**Parameters**:

* [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1ae3ad4b03475688be53c56aa703840227) &&

**Return type**: [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1ae3ad4b03475688be53c56aa703840227) &

<a id="class_d_v_s_1_1_i_logger_1a7ac1dddc6570bdccbde4c842b0426778"></a>
### Function ILogger

![][public]


```cpp
DVS::ILogger::ILogger(const ILogger &)=default
```


support copying





**Parameters**:

* const ILogger &

**Return type**: 

<a id="class_d_v_s_1_1_i_logger_1a419289170b2754a62a16eccb070e01ed"></a>
### Function operator=

![][public]


```cpp
ILogger & DVS::ILogger::operator=(const ILogger &)=default
```


default





**Parameters**:

* const [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1ae3ad4b03475688be53c56aa703840227) &

**Return type**: [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1ae3ad4b03475688be53c56aa703840227) &

<a id="class_d_v_s_1_1_i_logger_1a8f562c0a88964401a6bd50fc7b387ef5"></a>
### Function log

![][public]


```cpp
virtual void DVS::ILogger::log(int type, const char *msg,...)=0
```


Logging method to be overriden.

**Parameters**:

* **type**: Type of logging message (for filtering)
* **msg**: message to log
* **...**: extra params



**Parameters**:

* int **type**
* const char * **msg**
* ...

**Return type**: void

**Reimplemented by**:

* [log](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1acf148c138e5b4c3a2bd00492966e2f00)

<a id="class_d_v_s_1_1_i_logger_1a753d496b0ca488a74e6209f330b13458"></a>
### Function release

![][public]


```cpp
virtual void DVS::ILogger::release()
```


Release the memory of the object.

Implement to have object release this object for you.



**Return type**: void

**Reimplemented by**:

* [release](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose_1a37d5bb525097d06ebc878a673da7029e)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)