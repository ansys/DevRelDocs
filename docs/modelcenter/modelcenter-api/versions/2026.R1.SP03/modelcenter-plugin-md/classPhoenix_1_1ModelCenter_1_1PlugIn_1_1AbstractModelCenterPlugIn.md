<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn"></a>
# Class Phoenix::ModelCenter::PlugIn::AbstractModelCenterPlugIn

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 67)

Base class for plug-in. Removes the need to implement all the custom loading/saving, etc. of a [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) plug-in.

`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"FormClass"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The type of form to display, which must be derived from "},{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm"},"children":[{"type":"text","text":"ModelCenterPlugInForm"}]},{"type":"text","text":". "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`







How to create a plug-in: 
```csharp
// Be sure to create a unique GUID and ProgId for your class
[Guid("00000000-0000-0000-0000-000000000000")]
[ProgIdAttribute("MyPlugin.MyPluginClass")]
[ComVisible(true)]
[ClassInterface(ClassInterfaceType.None)]
[ComDefaultInterface(typeof(ComponentPlugIn.IComponentPlugIn))]
public class MyPluginClass : AbstractModelCenterPlugIn<MyPluginFormClass>
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

* AbstractDisposable
* [Phoenix.ModelCenter.PlugIn.IDotNetPlugIn](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn)
* IComponentPlugIn

**Inherited by**:

* [Phoenix.ModelCenter.PlugIn.AbstractTradeStudyPlugIn\< FormClass \>](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn)

## Members

* [\_checkoutLicense](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a307c72286704fd397b1acfab6538facc)
* [AbstractModelCenterPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5d15cba4a7daccc4dad38f76518860a0)
* [Author](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a7412b103edc860860c2fe8497544f27d)
* [closing](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5ac9c17c138c867862cb4ca076b7d033)
* [ComObject](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a2ddfdec2ce1b6af466b65f3f46ad7078)
* [Configuration](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac8aff11c024d348dea12d02d229c8f12)
* [construct](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad5e0aa01c3c141b0131232bf99a580b0)
* [createAndShowMainForm](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a56071eaa61629bc1e404be466579351a)
* [Description](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a65bee7c54aa5ef4ad579a6273ad7a1c1)
* [Dispose](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a808fd5f817ebec683420cf04b94d04fb)
* [dtHandle](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a947560347ddac41d8f0cba67754c3f84)
* [FeatureReleaseDate](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a04e98bd8d7fda4eb6312c123c793a6e4)
* [fromString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a70b061af62ef914249ed9d18a2d4be84)
* [HelpPath](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a223b35d92c81880dca57d945abcfe78b)
* [HelpUrl](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4714371ab73f50211b20dfc13f49a6e9)
* [Host](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4fc8aa3bf9de4994b8cf921b781863c2)
* [Host\_DataCollectorCreated](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a6e3499c4967672e8f725d3717abf1248)
* [icon](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a173fda50b4d31f354b7fb1a8891341d9)
* [Icon](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a78dfabd5053ee986d01d27272f51c41d)
* [IconImage](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a88eff9fd1e92c37c89afdbd478aa75d4)
* [image](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a36fd55c76263b67f6af8aea7e724d5a7)
* [IsClosing](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1afb6df8ce9e11eabff1db114e5019f843)
* [Keywords](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ab4bba76df8e39357451801893b36958d)
* [lastRunError](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a1695ddc8eba1f64dbbe4067364c07a9d)
* [licenseFeature](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1abf90975229a7715a6b6d83fd2f951299)
* [LicenseFeatureName](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4ac28cb6ded346c134da9f2e7d346956)
* [MainForm](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4422053694db0db8eac8b07fd8db0305)
* [MainForm\_Disposed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad8db054f50daad0de4e0bd3247ba55dd)
* [mainFormLock](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1af8df8c8be5dbe0224676010867a3a248)
* [metadata](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ab405e6130c414e38e20f329bc9762012)
* [Metadata](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a667d9734afc8b81ed7d5c0de82c1bc8e)
* [Name](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ab1dcedd12423a51bb01a0cac0418e0c9)
* [OnConfigurationLoaded](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a69aaf448a2c7997f260d3e2805cd2260)
* [OnConfigurationLoading](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a8b5b396399b3775d80b81bded4848efc)
* [OnConfigurationSaving](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5b31054602cc1676bb59a27daef429c7)
* [OnConfigurationSerializing](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4ac6004487785e2732f9b2cc5eda1fac)
* [OnDataCollectorCretaed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad504f2531616ee016f80116b9651eebf)
* [onEnd](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad6f69708039543dd505edf6b2ba94c8d)
* [OnInitialized](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1af7a658d61aab6d6c57987250a4f1d8b1)
* [OnMainFormClosed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a05b897699fff78fcad4ce12e8af48f0a)
* [OnMainFormCreated](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a3f5184da514dff64193ce4921b6774a3)
* [run](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac4d511f9606feccea510e9cf40b3dc2c)
* [Run](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4e33bbbf5d1d7d1f9c4cbc33825c84ce)
* [run\_DoWork](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac66d9cf2510a1bf362cb558701238fa1)
* [RunInBackground](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac7cc87f2c8c6ca7b6b660e87929fb300)
* [running](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5e1028da2baae4ef6270e0bed5983c6b)
* [show](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a09a9cb8ffa154d86f867f0e153b4f2d0)
* [ToolName](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1acdbd36a0d93e872c1759d6f68effdd84)
* [ToolProvider](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a73d0321e622841239ad976bbde3ef447)
* [toString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a21d18002eef2f44038b35f2f310aee51)
* [Version](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad7fc58ab9a66fea0107ad54855ad6739)

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a173fda50b4d31f354b7fb1a8891341d9"></a>
### Variable icon

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 73)


```csharp
Icon Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.icon = null
```








**Type**: [Icon](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a78dfabd5053ee986d01d27272f51c41d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.icon"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a36fd55c76263b67f6af8aea7e724d5a7"></a>
### Variable image

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 74)


```csharp
Image Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.image = null
```








**Type**: Image

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.image"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ab405e6130c414e38e20f329bc9762012"></a>
### Variable metadata

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 75)


```csharp
IPlugInMetaData Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.metadata
```








**Type**: IPlugInMetaData

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.metadata"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1abf90975229a7715a6b6d83fd2f951299"></a>
### Variable licenseFeature

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 76)


```csharp
IFeature Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.licenseFeature
```








**Type**: IFeature

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.licenseFeature"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5e1028da2baae4ef6270e0bed5983c6b"></a>
### Variable running

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 77)


```csharp
bool Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.running = false
```








**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.running"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a1695ddc8eba1f64dbbe4067364c07a9d"></a>
### Variable lastRunError

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 78)


```csharp
Exception Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.lastRunError = null
```








**Type**: Exception

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.lastRunError"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5ac9c17c138c867862cb4ca076b7d033"></a>
### Variable closing

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 79)


```csharp
bool Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.closing = false
```








**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.closing"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a947560347ddac41d8f0cba67754c3f84"></a>
### Variable dtHandle

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 80)


```csharp
DispatchThreadHandle Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.dtHandle = null
```








**Type**: DispatchThreadHandle

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.dtHandle"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1af8df8c8be5dbe0224676010867a3a248"></a>
### Variable mainFormLock

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 81)


```csharp
readonly object Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.mainFormLock = new object()
```








**Type**: readonly object

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.mainFormLock"}]}`
-->

## Properties

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4422053694db0db8eac8b07fd8db0305"></a>
### Property MainForm

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 90)


```csharp
FormClass Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.MainForm
```


Gets the main form associated with this plug-in, if there is one.





**Return type**: FormClass

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.MainForm"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4fc8aa3bf9de4994b8cf921b781863c2"></a>
### Property Host

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 95)


```csharp
virtual SModelCenterHost Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Host
```


Gets the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) host object.





**Return type**: [SModelCenterHost](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Host"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1aa4a472f32fc8e5f9ca0bc4d65a5409a4"},"children":[{"type":"text","text":"Host"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a667d9734afc8b81ed7d5c0de82c1bc8e"></a>
### Property Metadata

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 100)


```csharp
IPlugInMetaData Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Metadata
```


Gets an instance of the metadata class associated with this plug-in.





**Return type**: IPlugInMetaData

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Metadata"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a2ddfdec2ce1b6af466b65f3f46ad7078"></a>
### Property ComObject

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 111)


```csharp
IComponentPlugIn Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.ComObject
```


Gets this object as a [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) plug-in instance.





**Return type**: IComponentPlugIn

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.ComObject"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a264dde09662707e1e97dbf3d90feadeb"},"children":[{"type":"text","text":"ComObject"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4ac28cb6ded346c134da9f2e7d346956"></a>
### Property LicenseFeatureName

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 125)


```csharp
virtual string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.LicenseFeatureName
```


Gets the name of the license features associated with the plug-in.

Override if your form needs a license feature checked out.



**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.LicenseFeatureName"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a04e98bd8d7fda4eb6312c123c793a6e4"></a>
### Property FeatureReleaseDate

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 139)


```csharp
virtual string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.FeatureReleaseDate
```


Gets the date when the plug-in was released.

Override if your form needs a license feature checked out.



**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.FeatureReleaseDate"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac7cc87f2c8c6ca7b6b660e87929fb300"></a>
### Property RunInBackground

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 588)


```csharp
virtual bool Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.RunInBackground
```


Gets a value indicating whether the plug-in should be run on a background thread.

Do we call [Run](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4e33bbbf5d1d7d1f9c4cbc33825c84ce) in a background worker thread? If your derived class returns <code>false</code>, you can still use worker threads in your implementation of <code>[Run()](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4e33bbbf5d1d7d1f9c4cbc33825c84ce)</code>.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.RunInBackground"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac8aff11c024d348dea12d02d229c8f12"></a>
### Property Configuration

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 601)


```csharp
abstract object Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Configuration
```


Gets a configuration object that has public fields and properties which can be written during setup and read during save. Or <code>null</code> if there are no settings.





**Return type**: abstract object

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Configuration"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1ae48d41fe227dcd47f8bd493e4861cd67"},"children":[{"type":"text","text":"Configuration"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1afb6df8ce9e11eabff1db114e5019f843"></a>
### Property IsClosing

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 724)


```csharp
bool Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.IsClosing
```


Get whether the plug-in is currently being closed.





**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.IsClosing"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a73d0da83cdcf21bb8e7acd5bdfd3a5da"},"children":[{"type":"text","text":"IsClosing"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ab1dcedd12423a51bb01a0cac0418e0c9"></a>
### Property Name

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 729)


```csharp
abstract string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Name
```


Gets the plug-in name.





**Return type**: abstract string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Name"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a4ff24e55b29b64c175a57d7aed289b1b"},"children":[{"type":"text","text":"Name"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a7412b103edc860860c2fe8497544f27d"></a>
### Property Author

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 734)


```csharp
string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Author
```


Gets the author; null or empty for none.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Author"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1af5dacc9841ae19ecefc606f474724c7c"},"children":[{"type":"text","text":"Author"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a65bee7c54aa5ef4ad579a6273ad7a1c1"></a>
### Property Description

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 745)


```csharp
string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Description
```


Gets a description of the plug-in, if any.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Description"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a15f2d71c15eb4a6d4c8388cbd5cf4a53"},"children":[{"type":"text","text":"Description"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4714371ab73f50211b20dfc13f49a6e9"></a>
### Property HelpUrl

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 756)


```csharp
string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.HelpUrl
```


Gets a help URL for the plug-in, if any.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.HelpUrl"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a64af094f60fd9382b7d671fd114ad5c8"},"children":[{"type":"text","text":"HelpUrl"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a223b35d92c81880dca57d945abcfe78b"></a>
### Property HelpPath

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 767)


```csharp
virtual string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.HelpPath
```


Get a file path to local documentation, if any.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.HelpPath"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a58e523633e3d2470b58c26a08c4680a1"},"children":[{"type":"text","text":"HelpPath"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ab4bba76df8e39357451801893b36958d"></a>
### Property Keywords

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 778)


```csharp
string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Keywords
```


Gets the keywords associated with the plug-in, if any.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Keywords"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a1fb0d94cd8161e059b5cc48b5c387689"},"children":[{"type":"text","text":"Keywords"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad7fc58ab9a66fea0107ad54855ad6739"></a>
### Property Version

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 789)


```csharp
string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Version
```


Gets the plug-in version.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Version"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1aca0bdec930f016555ad7dd080f97f34c"},"children":[{"type":"text","text":"Version"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1acdbd36a0d93e872c1759d6f68effdd84"></a>
### Property ToolName

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 800)


```csharp
virtual string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.ToolName
```


Gets the third-party tool name, or null/empty for none.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.ToolName"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a9267aea869bdeb7feec8649b598ee39a"},"children":[{"type":"text","text":"ToolName"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a73d0321e622841239ad976bbde3ef447"></a>
### Property ToolProvider

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 811)


```csharp
virtual string Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.ToolProvider
```


Gets the third-party tool provider, or null/empty for none.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.ToolProvider"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a752b6e01b51e696bcfb88f4fef53ac21"},"children":[{"type":"text","text":"ToolProvider"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a78dfabd5053ee986d01d27272f51c41d"></a>
### Property Icon

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 822)


```csharp
virtual Icon Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Icon
```


Gets the icon associated with the plug-in. May be null.





**Return type**: Icon

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Icon"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a6d4acb91826ffeea2e0c7a3a88095ae2"},"children":[{"type":"text","text":"Icon"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a88eff9fd1e92c37c89afdbd478aa75d4"></a>
### Property IconImage

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 858)


```csharp
Image Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.IconImage
```


Gets a 48x48 image version of the icon, or another image which will substitute. May be null.





**Return type**: Image

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.IconImage"}]}`
* `reimplements {"type":"element","name":"reimplements","attributes":{"refid":"interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1a14cd8704f41880e193a9d2f4bbad7e80"},"children":[{"type":"text","text":"IconImage"}]}`
-->

## Protected functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5d15cba4a7daccc4dad38f76518860a0"></a>
### Function AbstractModelCenterPlugIn

![][protected]


```csharp
Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.AbstractModelCenterPlugIn()
```


Constructor. Tries to find and instantiate the metadata type.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.AbstractModelCenterPlugIn"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a808fd5f817ebec683420cf04b94d04fb"></a>
### Function Dispose

![][protected]


```csharp
override void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Dispose(bool disposing)
```


Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

**Parameters**:

* **disposing**: Indicates whether the method was called by [Dispose](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a808fd5f817ebec683420cf04b94d04fb) or by the destructor.



**Parameters**:

* bool **disposing**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Dispose"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1af7a658d61aab6d6c57987250a4f1d8b1"></a>
### Function OnInitialized

![][protected]


```csharp
virtual void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.OnInitialized()
```


Additional initialization after the plug-in is configured.





**Return type**: void

**Reimplemented by**:

* [OnInitialized](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a22e99e5e61cbff625aaa696a5cbc17bc)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.OnInitialized"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a8b5b396399b3775d80b81bded4848efc"></a>
### Function OnConfigurationLoading

![][protected]


```csharp
virtual bool Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.OnConfigurationLoading(string pluginName, string version, XmlReader reader)
```


Additional setup before the configuration object has been loaded. Lets you verify the plug-in type and version or do custom deserialization. See remarks for instructions.

If you want to do custom deserialization have this method return <code>true</code>. If you do not want to use custom deserialization, either do not access the reader or make sure not to move it past the first element and return <code>false</code>. 





If you do custom work, be sure not to read past the end of the initial node. 






**Parameters**:

* **pluginName**: The name encoded in the serialized data; null if not present.
* **version**: The version of the plug-in that had been saved; null if not present.
* **reader**: The XML reader; can be used to do custom deserialization. It is placed at the beginning of the root node of the serialized data.


**Returns**:

False if default deserialization should continue, true if we have handled it and it should be skipped.



**Parameters**:

* string **pluginName**
* string **version**
* XmlReader **reader**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.OnConfigurationLoading"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a69aaf448a2c7997f260d3e2805cd2260"></a>
### Function OnConfigurationLoaded

![][protected]


```csharp
virtual void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.OnConfigurationLoaded()
```


Additional setup after the configuration object has been loaded.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.OnConfigurationLoaded"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a5b31054602cc1676bb59a27daef429c7"></a>
### Function OnConfigurationSaving

![][protected]


```csharp
virtual void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.OnConfigurationSaving()
```


Preparatory work before the configuration object is saved.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.OnConfigurationSaving"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a3f5184da514dff64193ce4921b6774a3"></a>
### Function OnMainFormCreated

![][protected]


```csharp
virtual void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.OnMainFormCreated()
```


Event generated whenever the main form is created. Override to add additional handling.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.OnMainFormCreated"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a05b897699fff78fcad4ce12e8af48f0a"></a>
### Function OnMainFormClosed

![][protected]


```csharp
virtual void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.OnMainFormClosed()
```


Event generated whenever the main form is closed. Override to add additional handling, but make sure to call the base version first





**Return type**: void

**Reimplemented by**:

* [OnMainFormClosed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn_1a7b453647b9f96ceaa9fa29a02f04d79e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.OnMainFormClosed"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad504f2531616ee016f80116b9651eebf"></a>
### Function OnDataCollectorCretaed

![][protected]


```csharp
virtual void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.OnDataCollectorCretaed(IDataCollector dataCollector)
```


Event generated whenever a new data collector is created.

**Parameters**:

* **dataCollector**: The data collector.



**Parameters**:

* IDataCollector **dataCollector**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.OnDataCollectorCretaed"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4ac6004487785e2732f9b2cc5eda1fac"></a>
### Function OnConfigurationSerializing

![][protected]


```csharp
virtual bool Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.OnConfigurationSerializing(XmlWriter writer)
```


Additional configuration saving for custom serialization. See remarks for instructions.

If you want to do custom serialization have this method return <code>true</code>. If you do not want to use custom serialization, either do not access the writer or make sure not to close the root element and return <code>false</code>. 





If you do custom work, be sure not to write an open ended element. 






**Parameters**:

* **writer**: The XML writer; can be used to do custom serialization.


**Returns**:

False if default serialization should continue, true if we have handled it and it should be skipped.



**Parameters**:

* XmlWriter **writer**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.OnConfigurationSerializing"}]}`
-->

## Private functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a6e3499c4967672e8f725d3717abf1248"></a>
### Function Host\_DataCollectorCreated

![][private]


```csharp
void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Host_DataCollectorCreated(object sender, DataCollectorCreatedEventArgs e)
```


Connector method which hooks up the "data collector created" event.

**Parameters**:

* **sender**: The sending object.
* **e**: The event args.



**Parameters**:

* object **sender**
* [DataCollectorCreatedEventArgs](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DataCollectorCreatedEventArgs.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DataCollectorCreatedEventArgs) **e**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Host_DataCollectorCreated"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad5e0aa01c3c141b0131232bf99a580b0"></a>
### Function construct

![][private]


```csharp
void IComponentPlugIn. Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.construct(object modelCenter, object addToModel, object dataCollector)
```








**Parameters**:

* object **modelCenter**
* object **addToModel**
* object **dataCollector**

**Return type**: void IComponentPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.construct"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a70b061af62ef914249ed9d18a2d4be84"></a>
### Function fromString

![][private]


```csharp
void IComponentPlugIn. Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.fromString(string setupString)
```








**Parameters**:

* string **setupString**

**Return type**: void IComponentPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.fromString"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad6f69708039543dd505edf6b2ba94c8d"></a>
### Function onEnd

![][private]


```csharp
void IComponentPlugIn. Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.onEnd()
```








**Return type**: void IComponentPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.onEnd"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac66d9cf2510a1bf362cb558701238fa1"></a>
### Function run\_DoWork

![][private]


```csharp
void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.run_DoWork(object sender, DoWorkEventArgs e)
```








**Parameters**:

* object **sender**
* DoWorkEventArgs **e**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.run_DoWork"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a307c72286704fd397b1acfab6538facc"></a>
### Function \_checkoutLicense

![][private]


```csharp
void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >._checkoutLicense()
```


if this plug-in requires a license, make sure it gets checked out





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn._checkoutLicense"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ac4d511f9606feccea510e9cf40b3dc2c"></a>
### Function run

![][private]


```csharp
void IComponentPlugIn. Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.run()
```








**Return type**: void IComponentPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.run"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a56071eaa61629bc1e404be466579351a"></a>
### Function createAndShowMainForm

![][private]


```csharp
void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.createAndShowMainForm()
```








**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.createAndShowMainForm"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1ad8db054f50daad0de4e0bd3247ba55dd"></a>
### Function MainForm\_Disposed

![][private]


```csharp
void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.MainForm_Disposed(object sender, EventArgs e)
```


Simple method which redirects form closing events to the proper method.





**Parameters**:

* object **sender**
* EventArgs **e**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.MainForm_Disposed"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a09a9cb8ffa154d86f867f0e153b4f2d0"></a>
### Function show

![][private]


```csharp
bool IComponentPlugIn. Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.show()
```








**Return type**: bool IComponentPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.show"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a21d18002eef2f44038b35f2f310aee51"></a>
### Function toString

![][private]


```csharp
string IComponentPlugIn. Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.toString()
```








**Return type**: string IComponentPlugIn.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.toString"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn_1a4e33bbbf5d1d7d1f9c4cbc33825c84ce"></a>
### Function Run

![][public]


```csharp
abstract void Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn< FormClass >.Run()
```


Implement to run the plug-in.





**Return type**: abstract void

**Reimplements**: [Run](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn_1aa1f04dc1a9a411124df4707925407898)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AbstractModelCenterPlugIn.Run"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)