# Interface TradeStudyPlugIn::ITradeStudyPlugIn2

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 41)



COM Instance.

**Inherits from**:

* [TradeStudyPlugIn::ITradeStudyPlugIn](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn)

**Inherited by**:

* [TradeStudyPlugIn::ITradeStudyPlugIn3](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3)

## Members

* [addAnalyzerVariable](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a614a39c2d8dd38f47d840aa6d5bb34f2)
* [clearAnalyzerVariables](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1ae184db6af8802c77918103c4bf0f0564)
* [construct](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1ad233e5489d31c81b6b1fe09d9a3a886e)
* [fromString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a3dd50d2ce70b8e0534dd9be60e9bec5c)
* [onEnd](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a955659c71fd798c3d2be2d98a277e28d)
* [saveAllAnalyzerVariables](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1afeb8dd96abface7ec4a37de262c88c85)
* [show](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a81aebef74679c6364f184219c22da93a)
* [toString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1aaff0d58b0b3d2d90566fae1277ea4a45)
* [TradeStudyCallback](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1ad9db0e1ec3dee4b67da4fd2bd197f497)

## Properties

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1ad9db0e1ec3dee4b67da4fd2bd197f497"></a>
### Property TradeStudyCallback

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 1)

```
LPDISPATCH TradeStudyPlugIn::ITradeStudyPlugIn2::TradeStudyCallback
```



Gets or sets the trade study callback object.



**Return type**: LPDISPATCH

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1afeb8dd96abface7ec4a37de262c88c85"></a>
### Property saveAllAnalyzerVariables

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 1)

```
boolean TradeStudyPlugIn::ITradeStudyPlugIn2::saveAllAnalyzerVariables
```



Gets or sets whether all analyzer variables are saved in the data history when the trade study is run. Only affects variables added using [addAnalyzerVariable()](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a614a39c2d8dd38f47d840aa6d5bb34f2), otherwise the global [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) setting is used (as per usual). The default is false.





NOTE: not fully supported in MC 10.2 - you can (and should) set this value as appropriate but setting to true may not have an effect until all of the requisite functionality is added.



**Return type**: boolean

## Public functions

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1ad233e5489d31c81b6b1fe09d9a3a886e"></a>
### Function construct

![][public]

```
void TradeStudyPlugIn::ITradeStudyPlugIn2::construct(IDispatch *modelCenter, IDispatch *addToModel, [defaultvalue(NULL)]IDispatch *dataCollector)
```



Called when the plug-in is launched from [ModelCenter](namespaceModelCenter.md#namespaceModelCenter)






**Parameters**:

* **modelCenter**: the [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) object
* **addToModel**: the AddToModel API object



**Parameters**:

* IDispatch * **modelCenter**
* IDispatch * **addToModel**
* _[defaultvalue(NULL)]_ IDispatch * **dataCollector**

**Return type**: void

**Reimplements**: [construct](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a2b883bd3725cefb35daf8b629124a57f)

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a81aebef74679c6364f184219c22da93a"></a>
### Function show

![][public]

```
boolean TradeStudyPlugIn::ITradeStudyPlugIn2::show()
```



Called to display the trade study.






**Returns**:

false always



**Return type**: boolean

**Reimplements**: [show](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a7238385b054e9afddbe65c65644826e4)

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1aaff0d58b0b3d2d90566fae1277ea4a45"></a>
### Function toString

![][public]

```
BSTR TradeStudyPlugIn::ITradeStudyPlugIn2::toString()
```



Called to save the state of the plug-in.






**Returns**:

a string containing state information



**Return type**: BSTR

**Reimplements**: [toString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a58cdb46e4e8dca27761d7bd976c8fcf2)

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a3dd50d2ce70b8e0534dd9be60e9bec5c"></a>
### Function fromString

![][public]

```
void TradeStudyPlugIn::ITradeStudyPlugIn2::fromString(BSTR setupString)
```



Called to restore the state of a plug-in






**Parameters**:

* **setupString**: the state string



**Parameters**:

* BSTR **setupString**

**Return type**: void

**Reimplements**: [fromString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a8c4352f776b3919a9a56aa61ff78c5d0)

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a955659c71fd798c3d2be2d98a277e28d"></a>
### Function onEnd

![][public]

```
void TradeStudyPlugIn::ITradeStudyPlugIn2::onEnd()
```



Called when the plug-in is about to be deleted. Informs the plug-in to do any necessary clean up.



**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a614a39c2d8dd38f47d840aa6d5bb34f2"></a>
### Function addAnalyzerVariable

![][public]

```
void TradeStudyPlugIn::ITradeStudyPlugIn2::addAnalyzerVariable(BSTR formula, [optional]VARIANT analyzerName)
```



Call to add a variable from an analyzer product. If there are any analyzer variables, the plugin should only accept analyzer variables as trade study parameters.






**Parameters**:

* **formula**: the formula of the variable or expression in the [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) model
* **analyzerName**: the name of the variable used by the analyzer product; if not specified, the formula is used instead. The plugin should only display and accept aliases.



**Parameters**:

* BSTR **formula**
* _[optional]_ VARIANT **analyzerName**

**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1ae184db6af8802c77918103c4bf0f0564"></a>
### Function clearAnalyzerVariables

![][public]

```
void TradeStudyPlugIn::ITradeStudyPlugIn2::clearAnalyzerVariables()
```



Remove all analyzer variables.



**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)