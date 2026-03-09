# Interface ZOSAPI::IZOSAPI_Connection

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection"></a>

![][C#]
![][public]

**Definition**:

This is the initial interface to Optic Studio. All applications that wish to use the ZOS-API must first establish a connection, using the T:ZOSAPI.ZOSAPI_Connection class.


**Inherited by**:

* [ZOSAPI.ZOSAPI\_Connection](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection)

## Members

* [ConnectAsExtension](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a1eaa04709326b1c5555804d032457eb9)
* [ConnectionTimeoutSeconds](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a19fc1112ee2fcccb8d2184355540ed42)
* [ConnectToApplication](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a1fb4aeea3a2d1e610defd84ca777dcaa)
* [CreateNewApplication](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ab42ea0de15a6b7381834fd672e2bb33f)
* [CreateZemaxServer](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a917c158004b79ecbd4b24a087f0fd0d2)
* [CreateZemaxServerEx](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ab494c6c51238d678c24ba8781d91c1e7)
* [FormattingCulture](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a4ca7c7878ecdbb14590c3023f02a52bb)
* [GetConfigSetting](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ababe55569988d0242ff316f1fe9a30e9)
* [InitializationSettings](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a210cb0ba7563dd6a894732f612e8d7ac)
* [IntializationProgress](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1aedc370317cd0a29648bc66b5360f230b)
* [IsAlive](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ad933c3f3f404c152346715e6ea2c8228)
* [PreferencesFile](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a2a1ed3c4f41d193e11035be2e5da1ca4)
* [RunCommand](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ad6f282504d9ca5055a9d67a2f74f0cd0)
* [SetConfigSetting](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a0be3dec0fbdec3177b651fa8aa8137bb)
* [SetCreoInstallPath](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a47751cabe4c462f6e8a174204c89e085)

## Properties

### Property IsAlive

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ad933c3f3f404c152346715e6ea2c8228"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.IZOSAPI_Connection.IsAlive
```


Gets a value indicating whether ZOS-API connection is still active.

<code>true</code> if this instance is active; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.IsAlive"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1ae1039e03d33469f50075ccdcd53384c1"},"children":[{"type":"text","text":"IsAlive"}]}`
-->

### Property InitializationSettings

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a210cb0ba7563dd6a894732f612e8d7ac"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Connection.InitializationSettings
```


For internal use only.

The initialization settings string.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.InitializationSettings"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1a88c533ef108da80512b694850358dd57"},"children":[{"type":"text","text":"InitializationSettings"}]}`
-->

### Property IntializationProgress

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1aedc370317cd0a29648bc66b5360f230b"></a>

![][public]

**Definition**:


```csharp
int [] ZOSAPI.IZOSAPI_Connection.IntializationProgress
```


The initialization progress can be used to help debug any initial connection problems; only applicable when using CreateNewApplication.

The intialization progress.


**Return type**: int[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.IntializationProgress"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1a2fac04f5e9c7cb72085e1c95fd948416"},"children":[{"type":"text","text":"IntializationProgress"}]}`
-->

### Property ConnectionTimeoutSeconds

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a19fc1112ee2fcccb8d2184355540ed42"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.IZOSAPI_Connection.ConnectionTimeoutSeconds
```


Gets or sets the connection timeout (seconds). This is only used when launching a new OpticStudio instance, with CreateNewApplication.

The connection timeout (seconds).


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.ConnectionTimeoutSeconds"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1a78bccc848680a14183d566abef3db95c"},"children":[{"type":"text","text":"ConnectionTimeoutSeconds"}]}`
-->

### Property FormattingCulture

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a4ca7c7878ecdbb14590c3023f02a52bb"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Connection.FormattingCulture
```


Gets or sets the culture used when converting numeric values to/from strings. Note that this must be set before calling CreateNewApplication, and has no effect when connecting to an existing instance of OpticStudio.

The standard culture name to use. Examples: "en-US" for English (United States), or "de-DE" for German (Germany)


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.FormattingCulture"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1af7b5adda339e520acc906448caafdf8d"},"children":[{"type":"text","text":"FormattingCulture"}]}`
-->

### Property PreferencesFile

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a2a1ed3c4f41d193e11035be2e5da1ca4"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Connection.PreferencesFile
```


For standalone ZOS-API applications, this controls the file that will be used to specify all OpticStudio Preferences settings. If no file is specified, all settings will be loaded from the OpticStudio.CFG preferences file, however any changes will not be persisted between sessions.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.PreferencesFile"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1a18dc1b1ef3fac28798acc2ecdedd3e08"},"children":[{"type":"text","text":"PreferencesFile"}]}`
-->

## Public functions

### Function ConnectToApplication

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a1fb4aeea3a2d1e610defd84ca777dcaa"></a>

![][public]


```csharp
IZOSAPI_Application ZOSAPI.IZOSAPI_Connection.ConnectToApplication()
```


Attempts to connect to Optic Studio. This will only succeed when the client application was launched by Optic Studio.

Standalone applications should use CreateNewApplication.


**Returns**:


**Exceptions**:

* **System.ArgumentException**: This application was not launched by Optic Studio


**Return type**: [IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application)

**Reimplemented by**:

* [ConnectToApplication](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1aeb9010dade0f9685d455425d7eb7d8f5)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.ConnectToApplication"}]}`
-->

### Function CreateNewApplication

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ab42ea0de15a6b7381834fd672e2bb33f"></a>

![][public]


```csharp
IZOSAPI_Application ZOSAPI.IZOSAPI_Connection.CreateNewApplication()
```


Attempts to launch a new instance of Optic Studio in 'headless' mode. Note that although the Optic Studio window will not be visible, it still requires an active license.

Plugins, user analyses, and user operands should instead use ConnectToApplication.


**Returns**:


**Return type**: [IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application)

**Reimplemented by**:

* [CreateNewApplication](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1aadc54af7d7415a765592acf23d3a08ef)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.CreateNewApplication"}]}`
-->

### Function CreateZemaxServer

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a917c158004b79ecbd4b24a087f0fd0d2"></a>

![][public]


```csharp
IZOSAPI_Application ZOSAPI.IZOSAPI_Connection.CreateZemaxServer(string applicationName)
```


For internal use only.

**Parameters**:

* **applicationName**:


**Returns**:


**Parameters**:

* string **applicationName**

**Return type**: [IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application)

**Reimplemented by**:

* [CreateZemaxServer](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1ac5a1a6e0cd4471e311063a93a7364478)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.CreateZemaxServer"}]}`
-->

### Function CreateZemaxServerEx

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ab494c6c51238d678c24ba8781d91c1e7"></a>

![][public]


```csharp
IZOSAPI_Application ZOSAPI.IZOSAPI_Connection.CreateZemaxServerEx(string applicationName, string libraryPath)
```


**Parameters**:

* string **applicationName**
* string **libraryPath**

**Return type**: [IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application)

**Reimplemented by**:

* [CreateZemaxServerEx](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1a6e2f7726aad2dfb4dff4ce6b4e37905a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.CreateZemaxServerEx"}]}`
-->

### Function ConnectAsExtension

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a1eaa04709326b1c5555804d032457eb9"></a>

![][public]


```csharp
IZOSAPI_Application ZOSAPI.IZOSAPI_Connection.ConnectAsExtension(int zemaxInstance)
```


Connects to an existing instance of OpticStudio in extension mode.

**Parameters**:

* **zemaxInstance**: The OpticStudio instance number to connect to (0 to connect to any available instance).


**Returns**:


**Parameters**:

* int **zemaxInstance**

**Return type**: [IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application)

**Reimplemented by**:

* [ConnectAsExtension](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1acc229ae487281fc0aae93e470d9012e3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.ConnectAsExtension"}]}`
-->

### Function RunCommand

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ad6f282504d9ca5055a9d67a2f74f0cd0"></a>

![][public]


```csharp
string ZOSAPI.IZOSAPI_Connection.RunCommand(string command)
```


For internal debugging purposes only.

**Parameters**:

* **command**:


**Returns**:


**Parameters**:

* string **command**

**Return type**: string

**Reimplemented by**:

* [RunCommand](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1a25ac733120b770870ae8b29ae5dedd3c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.RunCommand"}]}`
-->

### Function GetConfigSetting

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1ababe55569988d0242ff316f1fe9a30e9"></a>

![][public]


```csharp
string ZOSAPI.IZOSAPI_Connection.GetConfigSetting(string setting)
```


**Parameters**:

* string **setting**

**Return type**: string

**Reimplemented by**:

* [GetConfigSetting](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1adbd4b91b67032fdf22ec234c1504d034)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.GetConfigSetting"}]}`
-->

### Function SetConfigSetting

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a0be3dec0fbdec3177b651fa8aa8137bb"></a>

![][public]


```csharp
void ZOSAPI.IZOSAPI_Connection.SetConfigSetting(string setting, string Value)
```


**Parameters**:

* string **setting**
* string **Value**

**Return type**: void

**Reimplemented by**:

* [SetConfigSetting](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1abf86fb8f2afa7d151aac3edffba1112e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.SetConfigSetting"}]}`
-->

### Function SetCreoInstallPath

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a47751cabe4c462f6e8a174204c89e085"></a>

![][public]


```csharp
void ZOSAPI.IZOSAPI_Connection.SetCreoInstallPath(string path)
```


**Parameters**:

* string **path**

**Return type**: void

**Reimplemented by**:

* [SetCreoInstallPath](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1a7fb82eee18d1effa877e14e91bcb7d67)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Connection.SetCreoInstallPath"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)