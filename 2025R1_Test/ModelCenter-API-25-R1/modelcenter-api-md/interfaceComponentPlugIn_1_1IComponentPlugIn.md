<a id="interfaceComponentPlugIn_1_1IComponentPlugIn"></a>
# Interface ComponentPlugIn::IComponentPlugIn

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_ComponentPlugIn/ComponentPlugIn.odl` (line 18)





## Members

* [construct](interfaceComponentPlugIn_1_1IComponentPlugIn.md#interfaceComponentPlugIn_1_1IComponentPlugIn_1ace85f5a1c843051fe7513c591c373164)
* [fromString](interfaceComponentPlugIn_1_1IComponentPlugIn.md#interfaceComponentPlugIn_1_1IComponentPlugIn_1a3e35deaee9587905584aa8926b2076de)
* [onEnd](interfaceComponentPlugIn_1_1IComponentPlugIn.md#interfaceComponentPlugIn_1_1IComponentPlugIn_1aa280f5643ed0afe304a3ea2556b41159)
* [run](interfaceComponentPlugIn_1_1IComponentPlugIn.md#interfaceComponentPlugIn_1_1IComponentPlugIn_1a8745a0b6d995a55b708876bcf0b6d7ab)
* [show](interfaceComponentPlugIn_1_1IComponentPlugIn.md#interfaceComponentPlugIn_1_1IComponentPlugIn_1adeb4964522dc6e485c3de4bef39a9019)
* [toString](interfaceComponentPlugIn_1_1IComponentPlugIn.md#interfaceComponentPlugIn_1_1IComponentPlugIn_1a14fe2c260d7d43a7f6d1cf661a34189d)

## Public functions

<a id="interfaceComponentPlugIn_1_1IComponentPlugIn_1ace85f5a1c843051fe7513c591c373164"></a>

### Function construct

![][public]

```
void ComponentPlugIn::IComponentPlugIn::construct(IDispatch *modelCenter, IDispatch *addToModel, [defaultvalue(NULL)]IDispatch *dataCollector)
```







**Parameters**:

* IDispatch * **modelCenter**
* IDispatch * **addToModel**
* _[defaultvalue(NULL)]_ IDispatch * **dataCollector**

**Return type**: void

<a id="interfaceComponentPlugIn_1_1IComponentPlugIn_1adeb4964522dc6e485c3de4bef39a9019"></a>

### Function show

![][public]

```
boolean ComponentPlugIn::IComponentPlugIn::show()
```







**Return type**: boolean

<a id="interfaceComponentPlugIn_1_1IComponentPlugIn_1a14fe2c260d7d43a7f6d1cf661a34189d"></a>

### Function toString

![][public]

```
BSTR ComponentPlugIn::IComponentPlugIn::toString()
```







**Return type**: BSTR

<a id="interfaceComponentPlugIn_1_1IComponentPlugIn_1a3e35deaee9587905584aa8926b2076de"></a>

### Function fromString

![][public]

```
void ComponentPlugIn::IComponentPlugIn::fromString(BSTR setupString)
```







**Parameters**:

* BSTR **setupString**

**Return type**: void

<a id="interfaceComponentPlugIn_1_1IComponentPlugIn_1a8745a0b6d995a55b708876bcf0b6d7ab"></a>

### Function run

![][public]

```
void ComponentPlugIn::IComponentPlugIn::run()
```







**Return type**: void

<a id="interfaceComponentPlugIn_1_1IComponentPlugIn_1aa280f5643ed0afe304a3ea2556b41159"></a>

### Function onEnd

![][public]

```
void ComponentPlugIn::IComponentPlugIn::onEnd()
```







**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)