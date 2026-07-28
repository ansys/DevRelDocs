<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost"></a>
# Class Phoenix::ModelCenter::PlugIn::SModelCenterHost

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 35)

This class acts as a host between a plug-in and the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) desktop API. It provides common utilities and helpers as well as a simplified API that is focused on what is needed to to write a plug-in.

The preferred way to use this is to make your plug-in extend [AbstractModelCenterPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn), which will manage the lifetime of this object.





To use it directly, create an instance in IComponentPlugIn.construct() and pass it the arguments from the function call. Do not keep around the original arguments to construct(). Lastly, be sure to call [Dispose()](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a7564fa193819e86ba559d5a8f894b6fe) on this object from IComponentPlugIn.onEnd() for component plug-ins and when your UI is closed for trade study plug-ins.






?> It is recommended that your plug-in extends [AbsractModelCenterPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn), which handles creation and destruction of this class.

**Inherits from**:

* AbstractDisposable

## Members

* [\_dataCollector](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a2c309c3538e76eb7067c562fcdd5394b)
* [AddIconToModelCenter](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a91aa3a5ad66c2f52cd0221d422c48efe)
* [AddToModel](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a8067d49ccbd09d30f129fa94870d3e2e)
* [AddVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a5b7b71f908f91249541c974e5d052bb6)
* [BringModelCenterToTop](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aae8f8ab7a70749080d010dee6d96eaf3)
* [BringWindowToTop](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aa5583d554b143fbd86edd987ab667f3d)
* [CheckOutLicenseFeature](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a624ed58e9711b0b5f8911a3994d2cbdb)
* [CheckOutLicenseFeature](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a3e29f5a299c98593e85f7a56f1cb4bb8)
* [CommitVariableChanges](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a1526e02c6b75364101cc8733fd57617f)
* [CreateNewDataCollector](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a92e72568d1abde927d01f0ad834a35b7)
* [createPlugInFrame](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a6110de0e6a651713edc5af370a6e2ec8)
* [CreatePlugInFrame](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ad89e3d926e547caa7451a675928f348c)
* [createPlugInFrame2](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ac9babe0ac6293881d9bf55caa9ca1109)
* [CurrentVariables](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aec66f97380cb29cf32e2c59b682c036b)
* [DataCollector](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ad80ccaa582e365307987eb2f2f877e53)
* [DataCollectorCreated](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aed2f62a62aa201ddbc2952c2e9f0e437)
* [DATE\_EPOCH\_SECONDS](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a4e962f4dcf727f7d15fc87f8dad45b08)
* [DATE\_UTCG](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a37c870ff0df0881020a2ae6715bb9a2d)
* [DATE\_YEAR\_MONTH\_DAY](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aa76ae6354702a36985a5f779ca60e088)
* [Dispose](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a7564fa193819e86ba559d5a8f894b6fe)
* [GetAssociatedFiles](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a02dfd52abc4d5499e7ce1b4fd655e603)
* [GetHasChanged](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a2fb185009e46554655a2f438b94c64d3)
* [GetRawValue](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a75428fd1516d9b5735055872c9a27a27)
* [GetValue](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aedb5a0ba415fe5000e58f4f358ef22e3)
* [getVariableInternal](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ac638dbf3bbda0e46547258ee8e3ae970)
* [init](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ac46030c1bd63758f4fa05edbf45d80eb)
* [IsAddedToModel](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a77baf72977453088024da4a496317017)
* [Log](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a7552b57c2f0f1291054620ce47dd17d4)
* [mcVars](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a30874e486efa72513252b2e1ecbe554d)
* [ModelCenter](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1af0c2d6699d3a8e6f8d669ce376a7c15d)
* [ModelCenterDirectory](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a756ccf8237a7ddb1c89b196eeb4f0078)
* [ModelCenterWindow](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a22225404f86adcb67055707978f6f4a9)
* [ModelCenterWindowHandle](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a5cdcd250d03fc8695ce7f762d65d30b9)
* [ModelDirectory](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ad452cf675c27bb5212b30ff9e9654eed)
* [MyComponent](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a526d1f2ae206197c73fbbfd5349e0b46)
* [NumCurrentVariables](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aa9ffa9ef6e550822297c340e87550939)
* [RefreshFromModelCenter](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a42f999a02c074715796e664956ba97c1)
* [releaseMCVars](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aeffaf0afef7debc4a89d792bb2b8a58a)
* [ReleasePlugInFrame](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a7674f6e4b3e81cfd83357136cb0f15b0)
* [ResetHasChanged](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a7315bf3f2bf98676a3c014f53f3fb73a)
* [RetrieveAllVariables](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1af35d275e054ae63ef1f6499318a2d81e)
* [RootName](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a2ca404ef051f842e94f97d16ccaa4d0f)
* [SetAssociatedFiles](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a1ae8dcc34e7f439afa7e55960eba8451)
* [SetAssociatedFiles](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a2c2a73eab3bb21760e39635818d69154)
* [SetGroupIcon](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a31a2f7269c6ab559afcd9ea237018c6b)
* [SetValue](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ae5bbc1b08d549bc5837e4c1d1138b1d6)
* [SetValue](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a3d265c88380d5b54f62353cc8935f118)
* [setValueInternal](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aff4f43347e8e8b432c10146207266afc)
* [ShowPlugInFrame](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aaff0cdd45a1f20c9eb99e13d64248f27)
* [SModelCenterHost](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a6bd6cba84abb82ecbbb5ba457535fafa)
* [SModelCenterHost](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a0fc130450bf5ee3fe5369910468fd118)
* [variables](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aeff66c6bfc0ffa1568682070c62b07b7)

## Private static attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a4e962f4dcf727f7d15fc87f8dad45b08"></a>
### Variable DATE\_EPOCH\_SECONDS

![][private]
![][static]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 39)


```csharp
const string Phoenix.ModelCenter.PlugIn.SModelCenterHost.DATE_EPOCH_SECONDS = "EpSec"
```








**Type**: const string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.DATE_EPOCH_SECONDS"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aa76ae6354702a36985a5f779ca60e088"></a>
### Variable DATE\_YEAR\_MONTH\_DAY

![][private]
![][static]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 40)


```csharp
const string Phoenix.ModelCenter.PlugIn.SModelCenterHost.DATE_YEAR_MONTH_DAY = "YYYY/MM/DD"
```








**Type**: const string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.DATE_YEAR_MONTH_DAY"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a37c870ff0df0881020a2ae6715bb9a2d"></a>
### Variable DATE\_UTCG

![][private]
![][static]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 41)


```csharp
const string Phoenix.ModelCenter.PlugIn.SModelCenterHost.DATE_UTCG = "UTCG"
```








**Type**: const string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.DATE_UTCG"}]}`
-->

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a30874e486efa72513252b2e1ecbe554d"></a>
### Variable mcVars

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 43)


```csharp
readonly Dictionary<string, IVariable> Phoenix.ModelCenter.PlugIn.SModelCenterHost.mcVars = new Dictionary<string, IVariable>()
```








**Type**: readonly Dictionary< string, IVariable >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.mcVars"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aeff66c6bfc0ffa1568682070c62b07b7"></a>
### Variable variables

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 44)


```csharp
readonly List<PHXVariable> Phoenix.ModelCenter.PlugIn.SModelCenterHost.variables = new List<PHXVariable>()
```








**Type**: readonly List< PHXVariable >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.variables"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a2c309c3538e76eb7067c562fcdd5394b"></a>
### Variable \_dataCollector

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 46)


```csharp
IDataCollector Phoenix.ModelCenter.PlugIn.SModelCenterHost._dataCollector = null
```








**Type**: IDataCollector

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost._dataCollector"}]}`
-->

## Properties

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1af0c2d6699d3a8e6f8d669ce376a7c15d"></a>
### Property ModelCenter

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 57)


```csharp
IModelCenter Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelCenter
```


Get the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) COM object. Using this allows your plug-in full access to the power of the IModelCenter API, but this should be used with caution as it may make your plug-in less distributable. When a functionality exists on this class and in the IModelCenter API, your plug-in should prefer the functions here.





**Return type**: IModelCenter

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelCenter"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ad80ccaa582e365307987eb2f2f877e53"></a>
### Property DataCollector

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 64)


```csharp
IDataCollector Phoenix.ModelCenter.PlugIn.SModelCenterHost.DataCollector
```


Get the DataCollector COM object.

This function should not be used from a distributable component plug-in.



**Return type**: IDataCollector

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.DataCollector"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a8067d49ccbd09d30f129fa94870d3e2e"></a>
### Property AddToModel

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 82)


```csharp
IAddToModel Phoenix.ModelCenter.PlugIn.SModelCenterHost.AddToModel
```


Get the AddToModel COM object. Using this allows your plug-in full access to the power of the IModelCenter API, but this should be used with caution as it may make your plug-in less distributable. When a functionality exists on this class and in the IModelCenter API, your plug-in should prefer the functions here.





**Return type**: IAddToModel

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.AddToModel"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a526d1f2ae206197c73fbbfd5349e0b46"></a>
### Property MyComponent

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 89)


```csharp
IComponent Phoenix.ModelCenter.PlugIn.SModelCenterHost.MyComponent
```


Get my component, if any. Using this allows your plug-in full access to the power of the IModelCenter API, but this should be used with caution as it may make your plug-in less distributable. When a functionality exists on this class and in the IModelCenter API, your plug-in should prefer the functions here.





**Return type**: IComponent

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.MyComponent"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a7552b57c2f0f1291054620ce47dd17d4"></a>
### Property Log

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 94)


```csharp
IPHXLogger Phoenix.ModelCenter.PlugIn.SModelCenterHost.Log
```


Get a logger that can be used to log information about what is happening in your plug-in.





**Return type**: IPHXLogger

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.Log"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a77baf72977453088024da4a496317017"></a>
### Property IsAddedToModel

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 248)


```csharp
bool Phoenix.ModelCenter.PlugIn.SModelCenterHost.IsAddedToModel
```


Gets a value indicating whether the component has already been added to the model.





**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.IsAddedToModel"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ad452cf675c27bb5212b30ff9e9654eed"></a>
### Property ModelDirectory

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 286)


```csharp
string Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelDirectory
```


Get the directory of the current model. If no model is open it will raise an error.If the model has not yet been saved, it will return an empty string.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelDirectory"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a2ca404ef051f842e94f97d16ccaa4d0f"></a>
### Property RootName

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 346)


```csharp
string Phoenix.ModelCenter.PlugIn.SModelCenterHost.RootName
```


Get the name of my component.





**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.RootName"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a756ccf8237a7ddb1c89b196eeb4f0078"></a>
### Property ModelCenterDirectory

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 354)


```csharp
string Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelCenterDirectory
```


Get the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) install directory. It is not recommended that plug-ins use this value as this directory is generally write protected and the contents can change from version to version.

**Returns**:

The full path to the directory where [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) is installed.



**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelCenterDirectory"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aa9ffa9ef6e550822297c340e87550939"></a>
### Property NumCurrentVariables

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 525)


```csharp
int Phoenix.ModelCenter.PlugIn.SModelCenterHost.NumCurrentVariables
```


Get the number of variables.





**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.NumCurrentVariables"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aec66f97380cb29cf32e2c59b682c036b"></a>
### Property CurrentVariables

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 538)


```csharp
IEnumerable<PHXVariable> Phoenix.ModelCenter.PlugIn.SModelCenterHost.CurrentVariables
```


Get or set a collection of the variables we've set/added (but perhaps not committed). On setting, the variables are cloned, and the changes are flushed through to [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter).

There are two ways to create variables - set them all at once by setting [CurrentVariables](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aec66f97380cb29cf32e2c59b682c036b), or set them individually with [AddVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a5b7b71f908f91249541c974e5d052bb6) then commit with [CommitVariableChanges](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a1526e02c6b75364101cc8733fd57617f). Do not mix and match



**Return type**: IEnumerable< PHXVariable >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.CurrentVariables"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a5cdcd250d03fc8695ce7f762d65d30b9"></a>
### Property ModelCenterWindowHandle

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 791)


```csharp
IntPtr Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelCenterWindowHandle
```


Get the handle of the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) window.





**Return type**: IntPtr

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelCenterWindowHandle"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a22225404f86adcb67055707978f6f4a9"></a>
### Property ModelCenterWindow

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 810)


```csharp
IWin32Window Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelCenterWindow
```


Get the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) window (actually just a handle wrapped in a utility class, but can be used as a window in many cases).





**Return type**: IWin32Window

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.ModelCenterWindow"}]}`
-->

## Events

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aed2f62a62aa201ddbc2952c2e9f0e437"></a>
### Event DataCollectorCreated

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs` (line 220)


```csharp
DataCollectorCreatedEventHandler Phoenix.ModelCenter.PlugIn.SModelCenterHost.DataCollectorCreated
```


Event generated when a new data collector is created.





**Type**: [DataCollectorCreatedEventHandler](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1a281e7794e7f8958b5898e7793c96d109)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.DataCollectorCreated"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a6bd6cba84abb82ecbbb5ba457535fafa"></a>
### Function SModelCenterHost

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.SModelCenterHost.SModelCenterHost(IModelCenter mc, IAddToModel atm)
```


Constructor. This object becomes responsible for the passed in objects. You should not store them or use them after passing them to this constructor. They can be retrieved by using the appropriate properties from this object. They will be disposed properly when this object is disposed.

**Parameters**:

* **mc**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) COM instance.
* **atm**: The AddToModel COM instance.



**Parameters**:

* IModelCenter **mc**
* IAddToModel **atm**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.SModelCenterHost"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a0fc130450bf5ee3fe5369910468fd118"></a>
### Function SModelCenterHost

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.SModelCenterHost.SModelCenterHost(IModelCenter mc, IAddToModel atm, IDataCollector dc)
```


Constructor. This object becomes responsible for the passed in objects. You should not store them or use them after passing them to this constructor. They can be retrieved by using the appropriate properties from this object. They will be disposed properly when this object is disposed.

**Parameters**:

* **mc**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) COM instance.
* **atm**: The AddToModel COM instance.
* **dc**: The DataCollector COM instance.



**Parameters**:

* IModelCenter **mc**
* IAddToModel **atm**
* IDataCollector **dc**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.SModelCenterHost"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a92e72568d1abde927d01f0ad834a35b7"></a>
### Function CreateNewDataCollector

![][public]


```csharp
IDataCollector Phoenix.ModelCenter.PlugIn.SModelCenterHost.CreateNewDataCollector(string analysisType, string configuration)
```


Create a new data collector and stores it in the DataCollector property.

**Parameters**:

* **analysisType**: The type of trade study or analysis.
* **configuration**: The configuration string.


**Returns**:

The new data collector, which is also stored in the DataCollector property.



**Parameters**:

* string **analysisType**
* string **configuration**

**Return type**: IDataCollector

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.CreateNewDataCollector"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a02dfd52abc4d5499e7ce1b4fd655e603"></a>
### Function GetAssociatedFiles

![][public]


```csharp
IEnumerable< string > Phoenix.ModelCenter.PlugIn.SModelCenterHost.GetAssociatedFiles()
```


Get the list of associated files, if any. This is used to inform the host of files that are necessary for the operation of the Plug-In. For example, Excel Plug-In would put the excel file being refrenced in this list. In some distributed cases these files will be delivered with the component for execution on a remote host. Note that file locations and names may be changed on remote systems, but the order in which the files are returned will always match the order given to SetAssociatedFiles.

**Returns**:

Returns an enumerable of strings of the associated files.



**Return type**: IEnumerable< string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.GetAssociatedFiles"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a1ae8dcc34e7f439afa7e55960eba8451"></a>
### Function SetAssociatedFiles

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetAssociatedFiles(params string[] files)
```


Set the associated files for the component. This is used to inform the host of files that are necessary for the operation of the Plug-In. For example, Excel Plug-In would put the excel file being refrenced in this list. In some distributed cases these files will be delivered with the component for execution on a remote host. Note that file locations and names may be changed on remote systems, but the order in which the files are returned from GetAssociatedFiles will always match the order given here.

**Parameters**:

* **files**: The list of files.



**Parameters**:

* params string[] **files**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetAssociatedFiles"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a2c2a73eab3bb21760e39635818d69154"></a>
### Function SetAssociatedFiles

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetAssociatedFiles(ICollection< string > files)
```


Se the associated files for the component. This is used to inform the host of files that are necessary for the operation of the Plug-In. For example, Excel Plug-In would put the excel file being refrenced in this list. In some distributed cases these files will be delivered with the component for execution on a remote host. Note that file locations and names may be changed on remote systems, but the order in which the files are returned from GetAssociatedFiles will always match the order

**Parameters**:

* **files**: The sequence of files.



**Parameters**:

* ICollection< string > **files**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetAssociatedFiles"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a624ed58e9711b0b5f8911a3994d2cbdb"></a>
### Function CheckOutLicenseFeature

![][public]


```csharp
IFeature Phoenix.ModelCenter.PlugIn.SModelCenterHost.CheckOutLicenseFeature(string featureName)
```


Check out the specified license feature. The release date will be the release date of the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) doing the checking out.

**Parameters**:

* **featureName**: The name of the feature.


**Returns**:

The feature.



**Parameters**:

* string **featureName**

**Return type**: IFeature

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.CheckOutLicenseFeature"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a3e29f5a299c98593e85f7a56f1cb4bb8"></a>
### Function CheckOutLicenseFeature

![][public]


```csharp
IFeature Phoenix.ModelCenter.PlugIn.SModelCenterHost.CheckOutLicenseFeature(string featureName, string releaseDate)
```


Check out the specified license feature.

**Parameters**:

* **featureName**: The name of the feature.
* **releaseDate**: The release date of the feature in yyyy.MMdd format.


**Returns**:

The feature.



**Parameters**:

* string **featureName**
* string **releaseDate**

**Return type**: IFeature

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.CheckOutLicenseFeature"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a42f999a02c074715796e664956ba97c1"></a>
### Function RefreshFromModelCenter

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.RefreshFromModelCenter()
```


Read the variables from [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) and cache locally.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.RefreshFromModelCenter"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a1526e02c6b75364101cc8733fd57617f"></a>
### Function CommitVariableChanges

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.CommitVariableChanges()
```


Commit any changes in the variable list to [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter). This is a more convenient alternative to using IAddToModel.addInput and .addOutput.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.CommitVariableChanges"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a5b7b71f908f91249541c974e5d052bb6"></a>
### Function AddVariable

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.AddVariable(PHXVariable v)
```


Add a new variable to the local list, which will not be committed.

There are two ways to create variables - set them all at once by setting [CurrentVariables](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aec66f97380cb29cf32e2c59b682c036b), or set them individually with [AddVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a5b7b71f908f91249541c974e5d052bb6) then commit with [CommitVariableChanges](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a1526e02c6b75364101cc8733fd57617f). Do not mix and match 






**Parameters**:

* **v**: The variable



**Parameters**:

* PHXVariable **v**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.AddVariable"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aedb5a0ba415fe5000e58f4f358ef22e3"></a>
### Function GetValue

![][public]


```csharp
string Phoenix.ModelCenter.PlugIn.SModelCenterHost.GetValue(string name)
```


Get the value of a variable in a formatted string format for display. Do not use this to pass the value to an external API as formatted strings often lose precision. If the variable was just created individually, you will need to commit changes, because the variable won't exist yet in the model.

**Parameters**:

* **name**: The name of the variable.


**Returns**:

The value of the variable.



**Parameters**:

* string **name**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.GetValue"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a75428fd1516d9b5735055872c9a27a27"></a>
### Function GetRawValue

![][public]


```csharp
string Phoenix.ModelCenter.PlugIn.SModelCenterHost.GetRawValue(string name)
```


Get the unmodified value of a variable. No formatting is done other than converting to a string. If the variable was just created individually, you will need to commit changes, because the variable won't exist yet in the model.

This function will return the contents of file variables, base64 encoded if the file variable is binary. 






**Parameters**:

* **name**: The name of the variable.


**Returns**:

The value.



**Parameters**:

* string **name**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.GetRawValue"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ae5bbc1b08d549bc5837e4c1d1138b1d6"></a>
### Function SetValue

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetValue(PHXVariable v, string value)
```


Set the value of a variable. If the variable was just created individually, you will need to commit changes, because the variable won't exist yet in the model.

This will read formatted strings if the variable is double or integer.





If the variable is a file variable, pass the filename as the value. 






**Parameters**:

* **v**: The variable to set the value for.
* **value**: The value to set.



**Parameters**:

* PHXVariable **v**
* string **value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetValue"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a3d265c88380d5b54f62353cc8935f118"></a>
### Function SetValue

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetValue(string name, string value)
```


Set a variable value. If the variable was just created individually, you will need to commit changes, because the variable won't exist yet in the model.

This will read formatted strings if the variable is double or integer.





If the variable is a file variable, pass the filename as the value. 






**Parameters**:

* **name**: The name of the variable.
* **value**: The value to set.



**Parameters**:

* string **name**
* string **value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetValue"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a2fb185009e46554655a2f438b94c64d3"></a>
### Function GetHasChanged

![][public]


```csharp
bool Phoenix.ModelCenter.PlugIn.SModelCenterHost.GetHasChanged(string name, bool reset=false)
```


Get whether the value of a variable has changed since the last time we reset the changed flag. If the variable was just created individually, you will need to commit changes, because the variable won't exist yet in the model.

**Parameters**:

* **name**: The name of the variable.
* **reset**: Whether the flag should be reset.


**Returns**:

True if yes, false if no.



**Parameters**:

* string **name**
* bool **reset** = false 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.GetHasChanged"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a7315bf3f2bf98676a3c014f53f3fb73a"></a>
### Function ResetHasChanged

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.ResetHasChanged(string name)
```


Reset the changed flag on a variable. If the variable was just created individually, you will need to commit changes, because the variable won't exist yet in the model.

**Parameters**:

* **name**: The name of the variable.



**Parameters**:

* string **name**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.ResetHasChanged"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aa5583d554b143fbd86edd987ab667f3d"></a>
### Function BringWindowToTop

![][public]


```csharp
static bool Phoenix.ModelCenter.PlugIn.SModelCenterHost.BringWindowToTop(IntPtr hWnd)
```


Bring a window to the top.

**Parameters**:

* **hWnd**: The window handle.


**Returns**:

True on success, false on failure.



**Parameters**:

* IntPtr **hWnd**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.BringWindowToTop"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aae8f8ab7a70749080d010dee6d96eaf3"></a>
### Function BringModelCenterToTop

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.BringModelCenterToTop()
```


Bring the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) window to the top and activate it.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.BringModelCenterToTop"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a91aa3a5ad66c2f52cd0221d422c48efe"></a>
### Function AddIconToModelCenter

![][public]


```csharp
short Phoenix.ModelCenter.PlugIn.SModelCenterHost.AddIconToModelCenter(Icon icon)
```


Load an icon in [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter). Uses a temporary file.

**Parameters**:

* **icon**: The icon to load.


**Returns**:

A unique index to the icon which can be used later.



**Parameters**:

* Icon **icon**

**Return type**: short

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.AddIconToModelCenter"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a31a2f7269c6ab559afcd9ea237018c6b"></a>
### Function SetGroupIcon

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetGroupIcon(string groupName, short iconID)
```


Set an icon for a group in [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter).

**Parameters**:

* **groupName**: The name of the group.
* **iconID**: The icon ID, returned from [AddIconToModelCenter](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a91aa3a5ad66c2f52cd0221d422c48efe).



**Parameters**:

* string **groupName**
* short **iconID**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.SetGroupIcon"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ad89e3d926e547caa7451a675928f348c"></a>
### Function CreatePlugInFrame

![][public]


```csharp
IntPtr Phoenix.ModelCenter.PlugIn.SModelCenterHost.CreatePlugInFrame(string name, string title, bool showFavorites, IComponentPlugIn plugin, Size initialSize, Size minSize)
```


Create a plugin frame to hold a plugin window.

**Parameters**:

* **name**: The name of the plugin.
* **title**: The window title.
* **showFavorites**: Whether to show favorites.
* **plugin**: The plugin object.
* **initialSize**: The initial size of the frame.
* **minSize**: The minimum size of the frame.


**Returns**:

The window handle of the frame.



**Parameters**:

* string **name**
* string **title**
* bool **showFavorites**
* IComponentPlugIn **plugin**
* Size **initialSize**
* Size **minSize**

**Return type**: IntPtr

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.CreatePlugInFrame"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aaff0cdd45a1f20c9eb99e13d64248f27"></a>
### Function ShowPlugInFrame

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.ShowPlugInFrame(IntPtr hwnd)
```


Use this after creating a frame to ensure that it is shown.

**Parameters**:

* **hwnd**: The frame to show.



**Parameters**:

* IntPtr **hwnd**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.ShowPlugInFrame"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a7674f6e4b3e81cfd83357136cb0f15b0"></a>
### Function ReleasePlugInFrame

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.ReleasePlugInFrame(IntPtr hWnd)
```


Release the plug-in frame created by [CreatePlugInFrame](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ad89e3d926e547caa7451a675928f348c).

**Parameters**:

* **hWnd**: The frame window handle.



**Parameters**:

* IntPtr **hWnd**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.ReleasePlugInFrame"}]}`
-->

## Private functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ac46030c1bd63758f4fa05edbf45d80eb"></a>
### Function init

![][private]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.init()
```








**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.init"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aeffaf0afef7debc4a89d792bb2b8a58a"></a>
### Function releaseMCVars

![][private]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.releaseMCVars()
```








**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.releaseMCVars"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1af35d275e054ae63ef1f6499318a2d81e"></a>
### Function RetrieveAllVariables

![][private]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.RetrieveAllVariables(string prefix, object mcObject)
```


Retrieve variables from nested groups, recursively.

**Parameters**:

* **prefix**: The name prefix (previously-seen groups).
* **mcObject**: The component or group to search.



**Parameters**:

* string **prefix**
* object **mcObject**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.RetrieveAllVariables"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ac638dbf3bbda0e46547258ee8e3ae970"></a>
### Function getVariableInternal

![][private]


```csharp
IVariable Phoenix.ModelCenter.PlugIn.SModelCenterHost.getVariableInternal(string name)
```








**Parameters**:

* string **name**

**Return type**: IVariable

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.getVariableInternal"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1aff4f43347e8e8b432c10146207266afc"></a>
### Function setValueInternal

![][private]


```csharp
void Phoenix.ModelCenter.PlugIn.SModelCenterHost.setValueInternal(IVariable var, PHXDataType type, string value)
```








**Parameters**:

* IVariable **var**
* PHXDataType **type**
* string **value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.setValueInternal"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1ac9babe0ac6293881d9bf55caa9ca1109"></a>
### Function createPlugInFrame2

![][private]


```csharp
IntPtr Phoenix.ModelCenter.PlugIn.SModelCenterHost.createPlugInFrame2(string name, string title, object plugin, bool showFavorites, Size initialSize, Size minSize)
```








**Parameters**:

* string **name**
* string **title**
* object **plugin**
* bool **showFavorites**
* Size **initialSize**
* Size **minSize**

**Return type**: IntPtr

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.createPlugInFrame2"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a6110de0e6a651713edc5af370a6e2ec8"></a>
### Function createPlugInFrame

![][private]


```csharp
IntPtr Phoenix.ModelCenter.PlugIn.SModelCenterHost.createPlugInFrame(string name, string title, object plugin, bool showFavorites, Size initialSize)
```








**Parameters**:

* string **name**
* string **title**
* object **plugin**
* bool **showFavorites**
* Size **initialSize**

**Return type**: IntPtr

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.createPlugInFrame"}]}`
-->

## Protected functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost_1a7564fa193819e86ba559d5a8f894b6fe"></a>
### Function Dispose

![][protected]


```csharp
override void Phoenix.ModelCenter.PlugIn.SModelCenterHost.Dispose(bool disposing)
```


Dispose of the COM objects immediately to avoid having to wait for garbage collection.

**Parameters**:

* **disposing**: Whether we are in the disposing phase.



**Parameters**:

* bool **disposing**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.SModelCenterHost.Dispose"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)