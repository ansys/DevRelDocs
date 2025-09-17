# MockIAlgorithmCatalogEntry2 Class

**Namespace:** `Phoenix.Optimization.AlgorithmTests.MockObjects`

## Overview

Copy of `MockIAlgorithmCatalogEntry` with different metadata on the wrapped [[`IAlgorithm`](../../IAlgorithm.md)]()

## Inheritance

![MockIAlgorithmCatalogEntry2](../../../../../../graphics/class_phoenix_1_1_optimization_1_1_algorithm_tests_1_1_mock_objects_1_1_mock_i_algorithm_catalog_entry2.png)

## Declaration

```csharp
class MockIAlgorithmCatalogEntry2
```

## Description

Copy of `MockIAlgorithmCatalogEntry` with different metadata on the wrapped [[`IAlgorithm`](../../IAlgorithm.md)]().
 
## Additional Inherited Members

### Public Member Functions inherited from MockIAlgorithmCatalogEntry 
|Name|Description|
|-----|-----|
|`ISerializableAlgorithm` | `DeserializeAlgorithm (string xml)` <br>Given the XML tag for an `ISerializableAlgorithm`, deserialize the tag and return the result. |
|void|  `DeserializeAlgorithmToUserInteractionInstance (string xml)` <br>Given the XML tag for an `ISerializableAlgorithm`, deserialize the tag and save it in this instance's `UserInteractionInstance`. |
|void|  `DeserializeOptionsToUserInteractionInstance (string innerXML)` <br>Given the XML tag for an options object, deserialize the tag to the `IAlgorithm.Options` property of `UserInteractionInstance`. |
| void|  `Dispose ()` |
|object|  `GetCurrentOptionsForDialog ()` <br>Returns a clone of the `UserInteractionInstance` `IAlgorithm.Options` property for use in the default options dialog. The `UserInteractionInstance` should be prepared to accept this object being passed as the value to set the `IAlgorithm.Options` property, which indicates that the user clicked "OK" and wants to set the modified version of the object. |
|object|  `GetDefaultOptionsForDialog ()` <br>Returns a default version of the object this algorithm uses for options. The `UserInteractionInstance` should be prepared to accept this object being passed as the value to set the `IAlgorithm.Options` property, which indicates that the user clicked "OK" and wants to set the modified version of the object. |
|`ISerializableAlgorithm`|  GetOutOfProcessAlgorithm () <br>Create an out-of-process instance of the algorithm suitable for running the algorithm.Before running, the Optimization Tool will set the problem definition and options object currently in use on the `UserInteractionInstance`. The caller of this method owns the returned `IAlgorithm` and is responsible for disposing it. |
| | `MockIAlgorithmCatalogEntry (IAlgorithm algorithm)`<br>Constructor. |
|`ISerializableAlgorithm`|  `DeserializeAlgorithm (string xml)` <br>Given the XML tag for an `ISerializableAlgorithm`, deserialize the tag and return the result. |
|void|  `DeserializeAlgorithmToUserInteractionInstance (string xml)` <br>Given the XML tag for an `ISerializableAlgorithm`, deserialize the tag and save it in this instance's UserInteractionInstance. |
|void|  `DeserializeOptionsToUserInteractionInstance (string innerXML)` <br>Given the XML tag for an options object, deserialize the tag to the `IAlgorithm.Options` property of UserInteractionInstance. |
|object|  `GetCurrentOptionsForDialog ()` <br>Returns a clone of the `UserInteractionInstance` `IAlgorithm.Options` property for use in the default options dialog. |
|object|  `GetDefaultOptionsForDialog ()` <br>Returns a default version of the object this algorithm uses for options. |
|`ISerializableAlgorithm`|  `GetOutOfProcessAlgorithm ()` <br>Create an out-of-process instance of the algorithm suitable for running the algorithm. | 

### Protected Member Functions inherited from MockIAlgorithmCatalogEntry 
|Name|Description|
|-----|-----|
|virtual void| `Setup (IAlgorithm algorithm)` <br>Initialization method used by contructors to set up the wrapped `IAlgorithm`. |
 
  
### Protected Attributes inherited from MockIAlgorithmCatalogEntry 
|Name|Description|
|-----|-----|
|`IAlgorithm` | `_algorithm`<br>The mock `IAlgorithm` object. |
 
  
### Properties inherited from MockIAlgorithmCatalogEntry 
|Name|Description|
|-----|-----|
|string  |`Id [get]`<br>The ID for this algorithm entry. This is sometimes used to relocate an algorithm in the overall catalog. This property should be the same as the key associated with this entry in the dictionary returned by `IDynamicAlgorithmProvider.LoadAlgorithms`. |
|`IAlgorithm`|  `UserInteractionInstance [get]`<br>This instance is intended for the Opt Tool to present to the user when configuring the algorithm and optimization tool. The instance is owned by the catalog entry and should be disposed when it is disposed. |
 
  
### Properties inherited from IAlgorithmCatalogEntry 
|Name|Description|
|-----|-----|
|string  |`Id [get]`<br>The ID for this algorithm entry. |
|`IAlgorithm` | `UserInteractionInstance [get]` <br>This instance is intended for the Opt Tool to present to the user when configuring the algorithm and optimization tool. | 
