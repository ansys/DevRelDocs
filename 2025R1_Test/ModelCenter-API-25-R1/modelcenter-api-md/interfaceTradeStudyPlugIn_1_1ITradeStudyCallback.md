# Interface TradeStudyPlugIn::ITradeStudyCallback

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 131)



The Trade Study Callback connector is the piece that connects a Trade Study Plug-In (v2) back to the hosting Analyzer Tool, for the purpose of signaling when runs are about to begin and end, when a new Data Collector has been created, and when the Trade Study is closing.

## Members

* [dataCollectorCreated](interfaceTradeStudyPlugIn_1_1ITradeStudyCallback.md#interfaceTradeStudyPlugIn_1_1ITradeStudyCallback_1a21e1253a708b1e6177c5998ad7583c59)
* [runEnded](interfaceTradeStudyPlugIn_1_1ITradeStudyCallback.md#interfaceTradeStudyPlugIn_1_1ITradeStudyCallback_1af1ec5576a28a72b94eca35294a49dff1)
* [runStarting](interfaceTradeStudyPlugIn_1_1ITradeStudyCallback.md#interfaceTradeStudyPlugIn_1_1ITradeStudyCallback_1a05d371f3256cbd0515c1786d4ca42b46)
* [tradeStudyClosed](interfaceTradeStudyPlugIn_1_1ITradeStudyCallback.md#interfaceTradeStudyPlugIn_1_1ITradeStudyCallback_1a9434138abbfd489946e6657ce904dcac)

## Public functions

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyCallback_1a21e1253a708b1e6177c5998ad7583c59"></a>
### Function dataCollectorCreated

![][public]

```
void TradeStudyPlugIn::ITradeStudyCallback::dataCollectorCreated(LPDISPATCH tradeStudy, LPDISPATCH dataCollector)
```



Called when the trade study creates a new data collector for it to use.





The data collector should not be shown before being passed.






**Parameters**:

* **tradeStudy**: the trade study associated with the data collector.
* **dataCollector**: the new data collector.



**Parameters**:

* LPDISPATCH **tradeStudy**
* LPDISPATCH **dataCollector**

**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyCallback_1a05d371f3256cbd0515c1786d4ca42b46"></a>
### Function runStarting

![][public]

```
BOOL TradeStudyPlugIn::ITradeStudyCallback::runStarting(LPDISPATCH tradeStudy)
```



Called when the trade study is about to start running.





If runStarting is called, then runEnded must also be called. Not doing so can result in a deadlock situation. If the trade study is closed before the run has completed, the run must be canceled and runEnded must be called.






**Parameters**:

* **tradeStudy**: the trade study asking to run.


**Returns**:

returns true if trade study is allowed to continue running; otherwise false.



**Parameters**:

* LPDISPATCH **tradeStudy**

**Return type**: BOOL

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyCallback_1af1ec5576a28a72b94eca35294a49dff1"></a>
### Function runEnded

![][public]

```
void TradeStudyPlugIn::ITradeStudyCallback::runEnded(LPDISPATCH tradeStudy)
```



Called when the trade study has completed it's run.






**Parameters**:

* **tradeStudy**: the trade study that has finished running.



**Parameters**:

* LPDISPATCH **tradeStudy**

**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudyCallback_1a9434138abbfd489946e6657ce904dcac"></a>
### Function tradeStudyClosed

![][public]

```
void TradeStudyPlugIn::ITradeStudyCallback::tradeStudyClosed(LPDISPATCH tradeStudy)
```



Called to signal that the trade study has closed.






**Parameters**:

* **tradeStudy**: the trade study that is closing.



**Parameters**:

* LPDISPATCH **tradeStudy**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)