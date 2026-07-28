<a id="classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer"></a>
# Class Phoenix::ModelCenter::Common::IArrayIndexer

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/IArrayIndexer.cs` (line 17)

Parses values and indices from IArray variables.



## Members

* [array](classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer.md#classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer_1af2cdbb2975a0bfd17f0f42a27cf385c7)
* [ElementCount](classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer.md#classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer_1a7efb16dbd27c540ed373cb41e21a71f9)
* [GetIndexStrings](classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer.md#classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer_1ad68ac7c2023b9c2299d50e27e5e9103a)
* [IArrayIndexer](classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer.md#classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer_1ade55067a86b63c217e6225211e657f91)

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer_1af2cdbb2975a0bfd17f0f42a27cf385c7"></a>
### Variable array

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/IArrayIndexer.cs` (line 20)


```csharp
IArray Phoenix.ModelCenter.Common.IArrayIndexer.array = null
```








**Type**: IArray

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.Common.IArrayIndexer.array"}]}`
-->

## Properties

<a id="classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer_1a7efb16dbd27c540ed373cb41e21a71f9"></a>
### Property ElementCount

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/IArrayIndexer.cs` (line 38)


```csharp
int Phoenix.ModelCenter.Common.IArrayIndexer.ElementCount
```


Gets the number of elements total in the array.





**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.Common.IArrayIndexer.ElementCount"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer_1ade55067a86b63c217e6225211e657f91"></a>
### Function IArrayIndexer

![][public]


```csharp
Phoenix.ModelCenter.Common.IArrayIndexer.IArrayIndexer(IArray array)
```


Constructor.

**Parameters**:

* **array**: The variable to index.



**Parameters**:

* IArray **array**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.Common.IArrayIndexer.IArrayIndexer"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer_1ad68ac7c2023b9c2299d50e27e5e9103a"></a>
### Function GetIndexStrings

![][public]


```csharp
List< string > Phoenix.ModelCenter.Common.IArrayIndexer.GetIndexStrings(string format)
```


Gets the string of the index of the current element. The form is [dimension_1(length), dimension_2(length), ..]





**Parameters**:

* string **format**

**Return type**: List< string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.Common.IArrayIndexer.GetIndexStrings"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)