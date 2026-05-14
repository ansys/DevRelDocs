# Interface ModelCenter::ILogger

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6487)



A set of methods for logging status and error messages. ILogger has 5 levels: TRACE, DEBUG, INFO, WARN, and ERROR.

## Members

* [debug](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1a1ff316d9091c838bcbdeaf5706e8216e)
* [error](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1a576c679c95d7e5c38917bcc0bab46296)
* [info](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1a0a400bf773ffc4fd5d9c4440fd2d79da)
* [isDebugEnabled](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1adc9ab6356bfc5c95aad04ee887c21588)
* [isErrorEnabled](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1aea7f6bb4163869086c07a72b5ec14666)
* [isInfoEnabled](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1a4472be2e0c0f6302d2e73ad582fe6b9c)
* [isTraceEnabled](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1acef00afc02324874e8ff47c61dfb4455)
* [isWarnEnabled](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1aeeb727ee61ec84c356257e23c8ac72da)
* [trace](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1a97945d07f653d3cb3e483b512f7c569d)
* [warn](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger_1acf5456282ad4295bfbb5dc3d6c41b8b2)

## Public functions

<a id="interfaceModelCenter_1_1ILogger_1acef00afc02324874e8ff47c61dfb4455"></a>
### Function isTraceEnabled

![][public]

```
boolean ModelCenter::ILogger::isTraceEnabled()
```



Returns whether the TRACE level is enabled for this logger.






**Returns**:

<code>true</code> or <code>false</code>



**Return type**: boolean

<a id="interfaceModelCenter_1_1ILogger_1adc9ab6356bfc5c95aad04ee887c21588"></a>
### Function isDebugEnabled

![][public]

```
boolean ModelCenter::ILogger::isDebugEnabled()
```



Returns whether the DEBUG level is enabled for this logger.






**Returns**:

<code>true</code> or <code>false</code>



**Return type**: boolean

<a id="interfaceModelCenter_1_1ILogger_1a4472be2e0c0f6302d2e73ad582fe6b9c"></a>
### Function isInfoEnabled

![][public]

```
boolean ModelCenter::ILogger::isInfoEnabled()
```



Returns whether the INFO level is enabled for this logger.






**Returns**:

<code>true</code> or <code>false</code>



**Return type**: boolean

<a id="interfaceModelCenter_1_1ILogger_1aeeb727ee61ec84c356257e23c8ac72da"></a>
### Function isWarnEnabled

![][public]

```
boolean ModelCenter::ILogger::isWarnEnabled()
```



Returns whether the WARN level is enabled for this logger.






**Returns**:

<code>true</code> or <code>false</code>



**Return type**: boolean

<a id="interfaceModelCenter_1_1ILogger_1aea7f6bb4163869086c07a72b5ec14666"></a>
### Function isErrorEnabled

![][public]

```
boolean ModelCenter::ILogger::isErrorEnabled()
```



Returns whether the ERROR level is enabled for this logger.






**Returns**:

<code>true</code> or <code>false</code>



**Return type**: boolean

<a id="interfaceModelCenter_1_1ILogger_1a97945d07f653d3cb3e483b512f7c569d"></a>
### Function trace

![][public]

```
void ModelCenter::ILogger::trace(BSTR message)
```



Logs a message at the TRACE level.






**Parameters**:

* **message**: The message to log.



**Parameters**:

* BSTR **message**

**Return type**: void

<a id="interfaceModelCenter_1_1ILogger_1a1ff316d9091c838bcbdeaf5706e8216e"></a>
### Function debug

![][public]

```
void ModelCenter::ILogger::debug(BSTR message)
```



Logs a message at the DEBUG level.






**Parameters**:

* **message**: The message to log.



**Parameters**:

* BSTR **message**

**Return type**: void

<a id="interfaceModelCenter_1_1ILogger_1a0a400bf773ffc4fd5d9c4440fd2d79da"></a>
### Function info

![][public]

```
void ModelCenter::ILogger::info(BSTR message)
```



Logs a message at the INFO level.






**Parameters**:

* **message**: The message to log.



**Parameters**:

* BSTR **message**

**Return type**: void

<a id="interfaceModelCenter_1_1ILogger_1acf5456282ad4295bfbb5dc3d6c41b8b2"></a>
### Function warn

![][public]

```
void ModelCenter::ILogger::warn(BSTR message)
```



Logs a message at the WARN level.






**Parameters**:

* **message**: The message to log.



**Parameters**:

* BSTR **message**

**Return type**: void

<a id="interfaceModelCenter_1_1ILogger_1a576c679c95d7e5c38917bcc0bab46296"></a>
### Function error

![][public]

```
void ModelCenter::ILogger::error(BSTR message)
```



Logs a message at the ERROR level.






**Parameters**:

* **message**: The message to log.



**Parameters**:

* BSTR **message**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)