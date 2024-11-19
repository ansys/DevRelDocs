<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn"></a>
# Interface TradeStudyPlugIn::ITradeStudyPlugIn

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 15)





**Inherited by**:

* [TradeStudyPlugIn::ICombinedPlugIn](interfaceTradeStudyPlugIn_1_1ICombinedPlugIn.md#interfaceTradeStudyPlugIn_1_1ICombinedPlugIn)
* [TradeStudyPlugIn::ITradeStudyPlugIn2](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2)

## Members

* [construct](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a2b883bd3725cefb35daf8b629124a57f)
* [fromString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a8c4352f776b3919a9a56aa61ff78c5d0)
* [show](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a7238385b054e9afddbe65c65644826e4)
* [toString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a58cdb46e4e8dca27761d7bd976c8fcf2)

## Public functions

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a2b883bd3725cefb35daf8b629124a57f"></a>
### Function construct

![][public]

```
void TradeStudyPlugIn::ITradeStudyPlugIn::construct(IDispatch *modelCenter, IDispatch *addToModel, [defaultvalue(NULL)]IDispatch *dataCollector)
```







**Parameters**:

* IDispatch * **modelCenter**
* IDispatch * **addToModel**
* _[defaultvalue(NULL)]_ IDispatch * **dataCollector**

**Return type**: void

**Reimplemented by**:

* [construct](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1ad233e5489d31c81b6b1fe09d9a3a886e)

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a7238385b054e9afddbe65c65644826e4"></a>
### Function show

![][public]

```
boolean TradeStudyPlugIn::ITradeStudyPlugIn::show()
```







**Return type**: boolean

**Reimplemented by**:

* [show](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a81aebef74679c6364f184219c22da93a)

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a58cdb46e4e8dca27761d7bd976c8fcf2"></a>
### Function toString

![][public]

```
BSTR TradeStudyPlugIn::ITradeStudyPlugIn::toString()
```







**Return type**: BSTR

**Reimplemented by**:

* [toString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1aaff0d58b0b3d2d90566fae1277ea4a45)

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a8c4352f776b3919a9a56aa61ff78c5d0"></a>
### Function fromString

![][public]

```
void TradeStudyPlugIn::ITradeStudyPlugIn::fromString(BSTR setupString)
```







**Parameters**:

* BSTR **setupString**

**Return type**: void

**Reimplemented by**:

* [fromString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2_1a3dd50d2ce70b8e0534dd9be60e9bec5c)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)