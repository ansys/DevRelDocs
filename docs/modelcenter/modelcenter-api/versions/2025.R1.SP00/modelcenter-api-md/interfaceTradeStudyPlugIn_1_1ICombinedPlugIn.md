# Interface TradeStudyPlugIn::ICombinedPlugIn

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 586)



This interface is used for cases where a plug-in must be both an IComponentPlugIn and an [ITradeStudyPlugIn](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn). In most cases using this interface is not necessary, but in specific circumstances where COM types are directly instantiated and used between processes such as via Activator.CreateInstance and MarshalForExternalProcess.ComObjectToMarshalInfo.

**Inherits from**:

* [IComponentPlugIn](undefined.md#undefined)
* [TradeStudyPlugIn::ITradeStudyPlugIn](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn)

## Members

* [construct](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a2b883bd3725cefb35daf8b629124a57f)
* [fromString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a8c4352f776b3919a9a56aa61ff78c5d0)
* [show](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a7238385b054e9afddbe65c65644826e4)
* [toString](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn_1a58cdb46e4e8dca27761d7bd976c8fcf2)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)