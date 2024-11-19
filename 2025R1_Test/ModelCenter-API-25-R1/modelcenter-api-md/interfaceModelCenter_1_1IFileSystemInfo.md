<a id="interfaceModelCenter_1_1IFileSystemInfo"></a>
# Interface ModelCenter::IFileSystemInfo

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6626)



Represents an object in a structured file system. Can represent a local file, a network file, or anything else.

## Members

* [baseName](interfaceModelCenter_1_1IFileSystemInfo.md#interfaceModelCenter_1_1IFileSystemInfo_1a0f840f7244ed0a52fa4d7c2a19a08264)
* [exists](interfaceModelCenter_1_1IFileSystemInfo.md#interfaceModelCenter_1_1IFileSystemInfo_1a5f79e2722103398d5f02e9fbb3c08c8b)
* [isValid](interfaceModelCenter_1_1IFileSystemInfo.md#interfaceModelCenter_1_1IFileSystemInfo_1a7df18a18470a00422781d711e56a20be)
* [isWritable](interfaceModelCenter_1_1IFileSystemInfo.md#interfaceModelCenter_1_1IFileSystemInfo_1a349473cf74146c2b8c824e0c47c899e5)
* [pin](interfaceModelCenter_1_1IFileSystemInfo.md#interfaceModelCenter_1_1IFileSystemInfo_1afc052eba4f15b6f7a62b0b0cee7b8e4e)
* [url](interfaceModelCenter_1_1IFileSystemInfo.md#interfaceModelCenter_1_1IFileSystemInfo_1addbccbd60da206c6fb480eb4fe05e967)

## Properties

<a id="interfaceModelCenter_1_1IFileSystemInfo_1a7df18a18470a00422781d711e56a20be"></a>
### Property isValid

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IFileSystemInfo::isValid
```



Indicates whether the object is valid.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IFileSystemInfo_1a5f79e2722103398d5f02e9fbb3c08c8b"></a>
### Property exists

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IFileSystemInfo::exists
```



Indicates whether the object exists.





NOTE: other operations may fail or return default values if the object does not exist, so be sure to check this first if you have any doubt!



**Return type**: boolean

<a id="interfaceModelCenter_1_1IFileSystemInfo_1a349473cf74146c2b8c824e0c47c899e5"></a>
### Property isWritable

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IFileSystemInfo::isWritable
```



Indicates whether the object is writable (true) or read-only (false).



**Return type**: boolean

<a id="interfaceModelCenter_1_1IFileSystemInfo_1a0f840f7244ed0a52fa4d7c2a19a08264"></a>
### Property baseName

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IFileSystemInfo::baseName
```



Get the base filename, regardless of whether this is a version, file, or otherwise. This is the name of the file as it would appear on a local disk.





For example, if this is readme.txt, version 2, this function will return "readme.txt".



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IFileSystemInfo_1addbccbd60da206c6fb480eb4fe05e967"></a>
### Property url

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IFileSystemInfo::url
```



Get the full URL of the object as a string.



**Return type**: BSTR

## Public functions

<a id="interfaceModelCenter_1_1IFileSystemInfo_1afc052eba4f15b6f7a62b0b0cee7b8e4e"></a>
### Function pin

![][public]

```
LPDISPATCH ModelCenter::IFileSystemInfo::pin(boolean forWrite, [optional] VARIANT forceCopy)
```



Pin this file in the cache.





NOTE: There is no guarantee that the resource will actually be cached if it is accessible through a local or (on Windows) UNC path unless you set the optional 'forceCopy' parameter to 'true'. There is a large performance advantage to not having to copy the file into the cache, especially for large files or slow network drives. However, certain functions will not work on an uncached local file, such as revertChanges() (see below). If you know you want to be able to flush and/or revert changes as you work, you should specify 'forceCopy' = 'true'.





NOTE: Pinning a file with 'forceCopy' = 'true' after calling [pin()](interfaceModelCenter_1_1IFileSystemInfo.md#interfaceModelCenter_1_1IFileSystemInfo_1afc052eba4f15b6f7a62b0b0cee7b8e4e) on the same file with 'forceCopy' = 'false' _may_ result in an error.






**Parameters**:

* **forWrite**: Indicates whether this file should be pinned for write; if it doesn't exist, it may be created
* **Indicates**: whether to force creating a copy of the file in the cache, even if the file would otherwise be directly accessed through a local path. <br/>


**Returns**:

IDispatch* to an [ICachePin](interfaceModelCenter_1_1ICachePin.md#interfaceModelCenter_1_1ICachePin) object



**Parameters**:

* boolean **forWrite**
* _[optional]_ VARIANT **forceCopy**

**Return type**: LPDISPATCH

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)