# Interface ModelCenter::ILoginCallback

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 4918)



The Login Callback allows non-ModelCenter processes to hook into [ModelCenter](namespaceModelCenter.md#namespaceModelCenter)'s authentication. Primarily used when running [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) in server mode.

## Members

* [loginSucceeded](interfaceModelCenter_1_1ILoginCallback.md#interfaceModelCenter_1_1ILoginCallback_1a4b7dc5df7be75023f025f8d83fff7579)
* [requestAuthCredentials](interfaceModelCenter_1_1ILoginCallback.md#interfaceModelCenter_1_1ILoginCallback_1a9a1b24d936f4ee5dd2979ad38538929b)
* [verifySslWarning](interfaceModelCenter_1_1ILoginCallback.md#interfaceModelCenter_1_1ILoginCallback_1a9c27b392b3c109f6abe689251e1e27c7)

## Public functions

<a id="interfaceModelCenter_1_1ILoginCallback_1a9a1b24d936f4ee5dd2979ad38538929b"></a>
### Function requestAuthCredentials

![][public]

```
boolean ModelCenter::ILoginCallback::requestAuthCredentials(BSTR uri, boolean isFailedAttempt, VARIANT *username, VARIANT *password, VARIANT *savePassword)
```



Called when [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) needs to request a username and password. 
**Parameters**:

* **uri**: URI authenticating to
* **isFailedAttempt**: true if request is due to previous failed attempt, false otherwise
* **username**: Username to use. Cannot be null.
* **password**: Password to use. Cannot be null.
* **savePassword**: True if password should be saved, false otherwise. Cannot be null.


**Returns**:

true if username/password is submitted, false otherwise


**Exceptions**:

* **COM**: exception if username, password, or savePassword is null



**Parameters**:

* BSTR **uri**
* boolean **isFailedAttempt**
* VARIANT * **username**
* VARIANT * **password**
* VARIANT * **savePassword**

**Return type**: boolean

<a id="interfaceModelCenter_1_1ILoginCallback_1a4b7dc5df7be75023f025f8d83fff7579"></a>
### Function loginSucceeded

![][public]

```
void ModelCenter::ILoginCallback::loginSucceeded(BSTR uri, BSTR username, BSTR password, boolean savePassword)
```



Called when [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) succeeds in authentication. 
**Parameters**:

* **uri**: URI successfully authenticated to
* **username**: username that successfully authenticated
* **password**: password that successfully authenticated
* **savePassword**: true if password should be saved, false otherwise



**Parameters**:

* BSTR **uri**
* BSTR **username**
* BSTR **password**
* boolean **savePassword**

**Return type**: void

<a id="interfaceModelCenter_1_1ILoginCallback_1a9c27b392b3c109f6abe689251e1e27c7"></a>
### Function verifySslWarning

![][public]

```
boolean ModelCenter::ILoginCallback::verifySslWarning(BSTR msg)
```



Called when [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) needs an SSL warning to be verified/accepted. 
**Parameters**:

* **msg**: message to display to user


**Returns**:

true if [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) should proceed, false otherwse



**Parameters**:

* BSTR **msg**

**Return type**: boolean

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)