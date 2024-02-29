# <a id="VM_Models_Post_IDriveTrain"></a> Interface IDriveTrain

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDriveTrain : IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IDriveTrain_ChartCharacteristics"></a> ChartCharacteristics

```csharp
IList<string> ChartCharacteristics { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_IDriveTrain_DataCount"></a> DataCount

```csharp
int DataCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDriveTrain_Datas"></a> Datas

```csharp
IDictionary<string, IList<string>> Datas { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="VM_Models_Post_IDriveTrain_FilePath"></a> FilePath

```csharp
string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IDriveTrain_MainFileType"></a> MainFileType

```csharp
DriveTrainFileType MainFileType { get; set; }
```

#### Property Value

 [DriveTrainFileType](VM.Models.Post.DriveTrainFileType.md)

### <a id="VM_Models_Post_IDriveTrain_SubRequests"></a> SubRequests

```csharp
IEnumerable<ISubRequest> SubRequests { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ISubRequest](VM.Models.Post.ISubRequest.md)\>

### <a id="VM_Models_Post_IDriveTrain_Times"></a> Times

```csharp
IList<double> Times { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_IDriveTrain_TransientData"></a> TransientData

```csharp
IList<IList<double>> TransientData { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

## Methods

### <a id="VM_Models_Post_IDriveTrain_AddSubRequest_VM_Models_Post_ISubRequest_"></a> AddSubRequest\(ISubRequest\)

```csharp
void AddSubRequest(ISubRequest subRequest)
```

#### Parameters

`subRequest` [ISubRequest](VM.Models.Post.ISubRequest.md)

