<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn"></a>
# Class Phoenix::ModelCenter::PlugIn::AbstractTradeStudyPlugIn

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractTradeStudyPlugIn.cs` (line 57)

Base class for plug-in. Removes the need to implement all the custom loading/saving, etc. of a [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) plug-in.

`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"FormClass"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The type of form to display, which must be derived from "},{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm"},"children":[{"type":"text","text":"ModelCenterPlugInForm"}]},{"type":"text","text":". "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`







How to create a plug-in: 
```csharp
// Be sure to create a unique GUID and ProgId for your class
[Guid("00000000-0000-0000-0000-000000000000")]
[ProgIdAttribute("MyPlugin.MyPluginClass")]
[ComVisible(true)]
[ClassInterface(ClassInterfaceType.None)]
[ComDefaultInterface(typeof(TradeStudyPlugIn.ITradeStudyPlugIn))]
public class MyPluginClass :
   AbstractModelCenterPlugIn<MyPluginFormClass>
{
  public override object Configuration
  {
     get
     {
        // return your custom configuration object here
     }
  }

  public override void Run()
  {
     // code to run your component here
  }

  // additional stuff required by your plug-in
}

// Need to define an info class as well:

// Needs a GUID and ProgId as well:
[Guid("11111111-1111-1111-1111-111111111111")]
[ProgIdAttribute("MyPlugin.MyPluginClassInfo")]
[ComVisible(true)]
[ClassInterface(ClassInterfaceType.None)]
[ComDefaultInterface(typeof(PlugInMetaData.IPlugInMetaData))]
public class MyPluginClassInfo : IPlugInMetaData
{
  // implement IPlugInMetaData here
}
```

**Template parameters**:

* FormClass

**Inherits from**:

* [Phoenix::ModelCenter::PlugIn::AbstractModelCenterPlugIn\< FormClass \>](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn)
* ITradeStudyPlugIn
* IWindowed

## Members

* [\_mainFormClosed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1ae6d20509d8e1a04d928deab09d033247)
* [AbstractModelCenterPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5d15cba4a7daccc4dad38f76518860a0)
* [Author](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a7412b103edc860860c2fe8497544f27d)
* [closeWindow](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a84ce0456319b391da2039fcebc991c0c)
* [ComObject](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a2ddfdec2ce1b6af466b65f3f46ad7078)
* [Configuration](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac8aff11c024d348dea12d02d229c8f12)
* [construct](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1af4e5bb941b9b0e72ca0de3a4709497bb)
* [Description](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a65bee7c54aa5ef4ad579a6273ad7a1c1)
* [Dispose](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a808fd5f817ebec683420cf04b94d04fb)
* [DisposeOnClose](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a39583e1b7c3b082c18082f297e0f8a5a)
* [FeatureReleaseDate](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a04e98bd8d7fda4eb6312c123c793a6e4)
* [fromString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1abc81507944ac88a74f8ff4276f160bda)
* [HelpPath](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a223b35d92c81880dca57d945abcfe78b)
* [HelpUrl](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4714371ab73f50211b20dfc13f49a6e9)
* [Host](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4fc8aa3bf9de4994b8cf921b781863c2)
* [Icon](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a78dfabd5053ee986d01d27272f51c41d)
* [IconImage](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a88eff9fd1e92c37c89afdbd478aa75d4)
* [IsClosing](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1afb6df8ce9e11eabff1db114e5019f843)
* [Keywords](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ab4bba76df8e39357451801893b36958d)
* [LicenseFeatureName](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4ac28cb6ded346c134da9f2e7d346956)
* [MainForm](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4422053694db0db8eac8b07fd8db0305)
* [Metadata](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a667d9734afc8b81ed7d5c0de82c1bc8e)
* [Name](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ab1dcedd12423a51bb01a0cac0418e0c9)
* [OnConfigurationLoaded](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a69aaf448a2c7997f260d3e2805cd2260)
* [OnConfigurationLoading](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a8b5b396399b3775d80b81bded4848efc)
* [OnConfigurationSaving](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5b31054602cc1676bb59a27daef429c7)
* [OnConfigurationSerializing](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4ac6004487785e2732f9b2cc5eda1fac)
* [OnDataCollectorCretaed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad504f2531616ee016f80116b9651eebf)
* [OnInitialized](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a22e99e5e61cbff625aaa696a5cbc17bc)
* [OnMainFormClosed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a7b453647b9f96ceaa9fa29a02f04d79e)
* [OnMainFormCreated](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a3f5184da514dff64193ce4921b6774a3)
* [Run](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4e33bbbf5d1d7d1f9c4cbc33825c84ce)
* [RunInBackground](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac7cc87f2c8c6ca7b6b660e87929fb300)
* [show](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1ab650b3f5025a87dc7a5337c158145c4f)
* [ToolName](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1acdbd36a0d93e872c1759d6f68effdd84)
* [ToolProvider](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a73d0321e622841239ad976bbde3ef447)
* [toString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a2075782736acc2c7e88bc56bd4bf009a)
* [TradeStudyObject](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a646fea0f25e4e58e11dc63b9a9407261)
* [Version](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad7fc58ab9a66fea0107ad54855ad6739)

## Properties

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a39583e1b7c3b082c18082f297e0f8a5a"></a>
### Property DisposeOnClose

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractTradeStudyPlugIn.cs` (line 68)


```csharp
bool Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >.DisposeOnClose
```


Whether or not the plug-in should be disposed when it is closed. Default is true; you may set this to false if you are automating the plug-in using COM and want to be able to re-show the window.





**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn.DisposeOnClose"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a646fea0f25e4e58e11dc63b9a9407261"></a>
### Property TradeStudyObject

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractTradeStudyPlugIn.cs` (line 73)


```csharp
ITradeStudyPlugIn Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >.TradeStudyObject
```


Gets the trade study plug-in object.





**Return type**: ITradeStudyPlugIn

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn.TradeStudyObject"}]}`
-->

## Protected attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1ae6d20509d8e1a04d928deab09d033247"></a>
### Variable \_mainFormClosed

![][protected]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractTradeStudyPlugIn.cs` (line 128)


```csharp
bool Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >._mainFormClosed = false
```


False until [OnMainFormClosed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a7b453647b9f96ceaa9fa29a02f04d79e) is called.





**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn._mainFormClosed"}]}`
-->

## Private functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1af4e5bb941b9b0e72ca0de3a4709497bb"></a>
### Function construct

![][private]


```csharp
void ITradeStudyPlugIn. Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >.construct(object modelCenter, object addToModel, object dataCollector)
```








**Parameters**:

* object **modelCenter**
* object **addToModel**
* object **dataCollector**

**Return type**: void ITradeStudyPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn.construct"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1abc81507944ac88a74f8ff4276f160bda"></a>
### Function fromString

![][private]


```csharp
void ITradeStudyPlugIn. Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >.fromString(string setupString)
```








**Parameters**:

* string **setupString**

**Return type**: void ITradeStudyPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn.fromString"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1ab650b3f5025a87dc7a5337c158145c4f"></a>
### Function show

![][private]


```csharp
bool ITradeStudyPlugIn. Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >.show()
```








**Return type**: bool ITradeStudyPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn.show"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a2075782736acc2c7e88bc56bd4bf009a"></a>
### Function toString

![][private]


```csharp
string ITradeStudyPlugIn. Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >.toString()
```








**Return type**: string ITradeStudyPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn.toString"}]}`
-->

## Protected functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a22e99e5e61cbff625aaa696a5cbc17bc"></a>
### Function OnInitialized

![][protected]


```csharp
override void Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >.OnInitialized()
```


&para





**Return type**: override void

**Reimplements**: [OnInitialized](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1af7a658d61aab6d6c57987250a4f1d8b1)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn.OnInitialized"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a7b453647b9f96ceaa9fa29a02f04d79e"></a>
### Function OnMainFormClosed

![][protected]


```csharp
override void Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >.OnMainFormClosed()
```


&para





**Return type**: override void

**Reimplements**: [OnMainFormClosed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a05b897699fff78fcad4ce12e8af48f0a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn.OnMainFormClosed"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a84ce0456319b391da2039fcebc991c0c"></a>
### Function closeWindow

![][public]


```csharp
bool Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn< FormClass >.closeWindow()
```


Close the main window.

**Returns**:

True if the user allowed the window to close. False if the close was canceled.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn.closeWindow"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)