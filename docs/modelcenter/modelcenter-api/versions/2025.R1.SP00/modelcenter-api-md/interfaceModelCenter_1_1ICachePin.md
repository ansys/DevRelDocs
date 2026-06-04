# Interface ModelCenter::ICachePin

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6566)



A set of methods for cache pin functions. A cache pin is a "smart" pointer that manages file upload and download of a file to/from a cache.

## Members

* [checkinOnFlush](interfaceModelCenter_1_1ICachePin.md#interfaceModelCenter_1_1ICachePin_1af839cced75ed11439b0027a55c6ab604)
* [IsValid](interfaceModelCenter_1_1ICachePin.md#interfaceModelCenter_1_1ICachePin_1a6dd8e8226f7d5b089ef7e4ae49ca8b87)
* [LocalPath](interfaceModelCenter_1_1ICachePin.md#interfaceModelCenter_1_1ICachePin_1abfc95b5a36c4544b8f58aaffc0d74751)
* [releasePin](interfaceModelCenter_1_1ICachePin.md#interfaceModelCenter_1_1ICachePin_1a4349fd2038cad3cc22e04eba3d9effe5)
* [Url](interfaceModelCenter_1_1ICachePin.md#interfaceModelCenter_1_1ICachePin_1a8dcb7034aa38f98bae308f4a9425ee43)

## Properties

<a id="interfaceModelCenter_1_1ICachePin_1a8dcb7034aa38f98bae308f4a9425ee43"></a>
### Property Url

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::ICachePin::Url
```



Get the original URI of the resource; an invalid URI if nothing is pinned.






**Returns**:

The original URI of the resource, or an invalid URI if nothing pinned.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1ICachePin_1abfc95b5a36c4544b8f58aaffc0d74751"></a>
### Property LocalPath

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::ICachePin::LocalPath
```



Get the local path of the file in the cache; empty if nothing is pinned.






**Returns**:

The local path of the file in the cache, or empty if nothing pinned.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1ICachePin_1a6dd8e8226f7d5b089ef7e4ae49ca8b87"></a>
### Property IsValid

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::ICachePin::IsValid
```



Is this object pinning a file?






**Returns**:

<code>true</code> or <code>false</code>



**Return type**: boolean

## Public functions

<a id="interfaceModelCenter_1_1ICachePin_1a4349fd2038cad3cc22e04eba3d9effe5"></a>
### Function releasePin

![][public]

```
boolean ModelCenter::ICachePin::releasePin()
```



Unpin the current file if a file is pinned. Does not guarantee that the file will be flushed unless this was the last active pin on the file.






**Returns**:

<code>true</code> if a file was previously pinned or <code>false</code> if not



**Return type**: boolean

<a id="interfaceModelCenter_1_1ICachePin_1af839cced75ed11439b0027a55c6ab604"></a>
### Function checkinOnFlush

![][public]

```
void ModelCenter::ICachePin::checkinOnFlush(BSTR message)
```



Checkin with the specified message when the file is unpinned. It must be open for write, and will be placed under version control if it isn't already. If the medium does not support version control, this is a no-op.






**Parameters**:

* **message**: the checkin message; may not be nullptr



**Parameters**:

* BSTR **message**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)