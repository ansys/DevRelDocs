<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback"></a>
# Class Phoenix::ModelCenter::PlugIn::TradeStudyCallback

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/TradeStudyCallback.cs` (line 22)

Implements the C++ callback as .NET events.



**Inherits from**:

* ITradeStudyCallback

## Members

* [DataCollectorCreated](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1ab2e95e458d707e77938ed28ee41b0bd8)
* [dataCollectorCreated](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1aea43314d86538b2662704af3960e9a48)
* [RunCompleted](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1a76948e775605e03fd6b0468be42c5579)
* [runEnded](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1a2d710972475ba3fc44692abbb392a522)
* [RunStarting](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1adef51d38e98893634cd7fd4ef0c76d2a)
* [runStarting](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1a3450d60b9f391f62688d0f311ca58f45)
* [TradeStudyClosed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1ab522da8d9868f7e3c38a10c10c3fd029)
* [tradeStudyClosed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1a6d4d616552d21eda7b052cb8391dc91d)

## Events

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1ab2e95e458d707e77938ed28ee41b0bd8"></a>
### Event DataCollectorCreated

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/TradeStudyCallback.cs` (line 27)


```csharp
TradeStudyDataCollectorEventHandler Phoenix.ModelCenter.PlugIn.TradeStudyCallback.DataCollectorCreated
```


Callback when the trade study created a data collector.





**Type**: [TradeStudyDataCollectorEventHandler](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1abb99d23309ffb1e90685feea6720d5f7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudyCallback.DataCollectorCreated"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1a76948e775605e03fd6b0468be42c5579"></a>
### Event RunCompleted

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/TradeStudyCallback.cs` (line 32)


```csharp
TradeStudyRunCompletedEventHandler Phoenix.ModelCenter.PlugIn.TradeStudyCallback.RunCompleted
```


Callback when a run in the trade study has completed.





**Type**: [TradeStudyRunCompletedEventHandler](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1a6ab3c2ea18fa2a321cbfd0fae2dd2dcc)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudyCallback.RunCompleted"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1adef51d38e98893634cd7fd4ef0c76d2a"></a>
### Event RunStarting

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/TradeStudyCallback.cs` (line 37)


```csharp
TradeStudyRunStartingEventHandler Phoenix.ModelCenter.PlugIn.TradeStudyCallback.RunStarting
```


Callback when a run in the trade study is about to start.





**Type**: [TradeStudyRunStartingEventHandler](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1ad7a066de5afe27ffa7d6582fa5a93b65)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudyCallback.RunStarting"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1ab522da8d9868f7e3c38a10c10c3fd029"></a>
### Event TradeStudyClosed

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/TradeStudyCallback.cs` (line 42)


```csharp
TradeStudyClosedEventHandler Phoenix.ModelCenter.PlugIn.TradeStudyCallback.TradeStudyClosed
```


Callback when the trade study has closed.





**Type**: [TradeStudyClosedEventHandler](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1a70aaf8abcc2357de4bbdb0116d98d4ca)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudyCallback.TradeStudyClosed"}]}`
-->

## Private functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1aea43314d86538b2662704af3960e9a48"></a>
### Function dataCollectorCreated

![][private]


```csharp
void ITradeStudyCallback. Phoenix.ModelCenter.PlugIn.TradeStudyCallback.dataCollectorCreated(object tradeStudy, object dataCollector)
```








**Parameters**:

* object **tradeStudy**
* object **dataCollector**

**Return type**: void ITradeStudyCallback.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudyCallback.dataCollectorCreated"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1a2d710972475ba3fc44692abbb392a522"></a>
### Function runEnded

![][private]


```csharp
void ITradeStudyCallback. Phoenix.ModelCenter.PlugIn.TradeStudyCallback.runEnded(object tradeStudy)
```








**Parameters**:

* object **tradeStudy**

**Return type**: void ITradeStudyCallback.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudyCallback.runEnded"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1a3450d60b9f391f62688d0f311ca58f45"></a>
### Function runStarting

![][private]


```csharp
int ITradeStudyCallback. Phoenix.ModelCenter.PlugIn.TradeStudyCallback.runStarting(object tradeStudy)
```








**Parameters**:

* object **tradeStudy**

**Return type**: int ITradeStudyCallback.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudyCallback.runStarting"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback_1a6d4d616552d21eda7b052cb8391dc91d"></a>
### Function tradeStudyClosed

![][private]


```csharp
void ITradeStudyCallback. Phoenix.ModelCenter.PlugIn.TradeStudyCallback.tradeStudyClosed(object tradeStudy)
```








**Parameters**:

* object **tradeStudy**

**Return type**: void ITradeStudyCallback.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudyCallback.tradeStudyClosed"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)