<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3"></a>
# Interface TradeStudyPlugIn::ITradeStudyPlugIn3

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 479)



COM Instance.

**Inherits from**:

* [TradeStudyPlugIn::ITradeStudyPlugIn2](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2)

## Members

* [addAnalyzerVariable](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a9e044579568a49b3f42c8771ccf8bbc3)
* [addAnalyzerVariable](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a614a39c2d8dd38f47d840aa6d5bb34f2)
* [clearAnalyzerVariables](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a1a94e6d8431bf19dee3fcf446e781070)
* [construct](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1ad233e5489d31c81b6b1fe09d9a3a886e)
* [fromString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a541ccb54affa550f0ea2694b39e16c7c)
* [fromString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a3dd50d2ce70b8e0534dd9be60e9bec5c)
* [id](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a2c98e62414b0d01303d7a009449f0871)
* [onEnd](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1afa9a6faf24f730938ea94ba9e846a381)
* [saveAllAnalyzerVariables](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a98649448b98aa71aef4adc1e33c47570)
* [show](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1ac84a2866cfcedd306eeabd757d8c0877)
* [toString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a3f6d767abcf9b50ee14ac7be20ef964a)
* [TradeStudyCallback](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a781692e887426951e2913672d9f94a78)

## Properties

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a781692e887426951e2913672d9f94a78"></a>
### Property TradeStudyCallback

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 1)

```
LPDISPATCH TradeStudyPlugIn::ITradeStudyPlugIn3::TradeStudyCallback
```



Gets or sets the trade study callback object.



**Return type**: LPDISPATCH

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a98649448b98aa71aef4adc1e33c47570"></a>
### Property saveAllAnalyzerVariables

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 1)

```
boolean TradeStudyPlugIn::ITradeStudyPlugIn3::saveAllAnalyzerVariables
```



Gets or sets whether all analyzer variables are saved in the data history when the trade study is run. Only affects variables added using [addAnalyzerVariable()](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a9e044579568a49b3f42c8771ccf8bbc3), otherwise the global [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) setting is used (as per usual). The default is false.





NOTE: not fully supported in MC 10.2 - you can (and should) set this value as appropriate but setting to true may not have an effect until all of the requisite functionality is added.



**Return type**: boolean

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a2c98e62414b0d01303d7a009449f0871"></a>
### Property id

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 515)

```
IDispatch TradeStudyPlugIn::ITradeStudyPlugIn3::id( IDispatch modelCenter, IDispatch addToModel)(IDispatch modelCenter, IDispatch addToModel)
```



Gets or sets the job manager to use.



**Return type**: IDispatch

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1ac84a2866cfcedd306eeabd757d8c0877"></a>
### Property show

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 522)

```
boolean TradeStudyPlugIn::ITradeStudyPlugIn3::show
```



Called to display the trade study.






**Returns**:

false always



**Return type**: boolean

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a3f6d767abcf9b50ee14ac7be20ef964a"></a>
### Property toString

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 529)

```
BSTR TradeStudyPlugIn::ITradeStudyPlugIn3::toString
```



Called to save the state of the plug-in.






**Returns**:

a string containing state information



**Return type**: BSTR

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a541ccb54affa550f0ea2694b39e16c7c"></a>
### Property fromString

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 536)

```
BSTR TradeStudyPlugIn::ITradeStudyPlugIn3::fromString
```



Called to restore the state of a plug-in






**Parameters**:

* **setupString**: the state string



**Return type**: BSTR

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1afa9a6faf24f730938ea94ba9e846a381"></a>
### Property onEnd

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 542)

```
void TradeStudyPlugIn::ITradeStudyPlugIn3::onEnd
```



Called when the plug-in is about to be deleted. Informs the plug-in to do any necessary clean up.



**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a9e044579568a49b3f42c8771ccf8bbc3"></a>
### Property addAnalyzerVariable

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 555)

```
VARIANT TradeStudyPlugIn::ITradeStudyPlugIn3::addAnalyzerVariable( BSTR formula)(BSTR formula)
```



Call to add a variable from an analyzer product. If there are any analyzer variables, the plugin should only accept analyzer variables as trade study parameters.






**Parameters**:

* **formula**: the formula of the variable or expression in the [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) model
* **analyzerName**: the name of the variable used by the analyzer product; if not specified, the formula is used instead. The plugin should only display and accept aliases.



**Return type**: VARIANT

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3_1a1a94e6d8431bf19dee3fcf446e781070"></a>
### Property clearAnalyzerVariables

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 560)

```
void TradeStudyPlugIn::ITradeStudyPlugIn3::clearAnalyzerVariables
```



Remove all analyzer variables.



**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)