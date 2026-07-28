<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger"></a>
# Class Phoenix::ModelCenter::PlugIn::ModelCenterLogger

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterLogger.cs` (line 18)

Class which wraps the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) logger.



**Inherits from**:

* AbstractPHXLogger

## Members

* [Debug](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a45da243add479820cc1d79ad09a33b4e)
* [Dispose](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1aa7886a492c532d413bbafe91c8e1bed8)
* [Error](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a31302484308962735c97aa10f0231ca0)
* [Info](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1aa8d984574c52ec391ac853ad21d990e6)
* [IsDebugEnabled](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a2d3729be2df16b747bc57b96adb09e3c)
* [IsErrorEnabled](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a188d6be24c3090facecc1ba72b074e0d)
* [IsInfoEnabled](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a83f12ca06e782096a6b4d6bc11176c0f)
* [IsTraceEnabled](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1ae2187c47093730c1a9b29fe5a65b4980)
* [IsWarnEnabled](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a3f9cf4edfc7f57408c655f4c5031d042)
* [logger](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a750a9b944bc2a62085e781cb76869573)
* [ModelCenterLogger](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1abdb02d7f57da79f925327a6db1c43feb)
* [Trace](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a18b914d4c4ca745f0462c84754f9c017)
* [Warn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a08e90c2e66ae5c277280ddde73bd443f)

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a750a9b944bc2a62085e781cb76869573"></a>
### Variable logger

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterLogger.cs` (line 20)


```csharp
ILogger Phoenix.ModelCenter.PlugIn.ModelCenterLogger.logger = null
```








**Type**: ILogger

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.logger"}]}`
-->

## Properties

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a2d3729be2df16b747bc57b96adb09e3c"></a>
### Property IsDebugEnabled

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterLogger.cs` (line 141)


```csharp
override bool Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsDebugEnabled
```


Is debug output enabled for the logger?





**Return type**: override bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsDebugEnabled"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a83f12ca06e782096a6b4d6bc11176c0f"></a>
### Property IsInfoEnabled

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterLogger.cs` (line 149)


```csharp
override bool Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsInfoEnabled
```


Is info output enabled for the logger?





**Return type**: override bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsInfoEnabled"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a188d6be24c3090facecc1ba72b074e0d"></a>
### Property IsErrorEnabled

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterLogger.cs` (line 157)


```csharp
override bool Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsErrorEnabled
```


Is error output enabled for the logger?





**Return type**: override bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsErrorEnabled"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1ae2187c47093730c1a9b29fe5a65b4980"></a>
### Property IsTraceEnabled

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterLogger.cs` (line 165)


```csharp
override bool Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsTraceEnabled
```


Is trace output enabled for the logger?





**Return type**: override bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsTraceEnabled"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a3f9cf4edfc7f57408c655f4c5031d042"></a>
### Property IsWarnEnabled

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterLogger.cs` (line 173)


```csharp
override bool Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsWarnEnabled
```


Is warning output enabled for the logger?





**Return type**: override bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.IsWarnEnabled"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1abdb02d7f57da79f925327a6db1c43feb"></a>
### Function ModelCenterLogger

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.ModelCenterLogger.ModelCenterLogger(IModelCenter mc)
```


Constructor. Tries to get a logger from [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter).

**Parameters**:

* **mc**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) COM object.



**Parameters**:

* IModelCenter **mc**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.ModelCenterLogger"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a45da243add479820cc1d79ad09a33b4e"></a>
### Function Debug

![][public]


```csharp
override void Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Debug(string message)
```


Send a debug message.

**Parameters**:

* **message**: The message to be logged



**Parameters**:

* string **message**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Debug"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1aa8d984574c52ec391ac853ad21d990e6"></a>
### Function Info

![][public]


```csharp
override void Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Info(string message)
```


Send an info message.

**Parameters**:

* **message**: The message to be logged



**Parameters**:

* string **message**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Info"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a18b914d4c4ca745f0462c84754f9c017"></a>
### Function Trace

![][public]


```csharp
override void Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Trace(string message)
```


Send a trace message.

**Parameters**:

* **message**: The message to be logged



**Parameters**:

* string **message**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Trace"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a08e90c2e66ae5c277280ddde73bd443f"></a>
### Function Warn

![][public]


```csharp
override void Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Warn(string message)
```


Send a warning message.

**Parameters**:

* **message**: The message to be logged



**Parameters**:

* string **message**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Warn"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1a31302484308962735c97aa10f0231ca0"></a>
### Function Error

![][public]


```csharp
override void Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Error(string message)
```


Send an error message.

**Parameters**:

* **message**: The message to be logged



**Parameters**:

* string **message**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Error"}]}`
-->

## Protected functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger_1aa7886a492c532d413bbafe91c8e1bed8"></a>
### Function Dispose

![][protected]


```csharp
override void Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Dispose(bool disposing)
```


Free the logger.

**Parameters**:

* **disposing**: Whether we are in the disposing phase



**Parameters**:

* bool **disposing**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterLogger.Dispose"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)