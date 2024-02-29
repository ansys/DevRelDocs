# <a id="VM_Models_Post_IGearSet"></a> Interface IGearSet

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IGearSet : IDriveTrain, IDriveTrainVectorDisplayable, IVectorDisplayable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

[IDriveTrain](VM.Models.Post.IDriveTrain.md), 
[IDriveTrainVectorDisplayable](VM.Models.Post.IDriveTrainVectorDisplayable.md), 
[IVectorDisplayable](VM.Models.Post.IVectorDisplayable.md), 
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

### <a id="VM_Models_Post_IGearSet_GearPairs"></a> GearPairs

```csharp
IEnumerable<IGearPair> GearPairs { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IGearPair](VM.Models.Post.IGearPair.md)\>

### <a id="VM_Models_Post_IGearSet_GearSetFileType"></a> GearSetFileType

```csharp
DriveTrainFileType GearSetFileType { get; set; }
```

#### Property Value

 [DriveTrainFileType](VM.Models.Post.DriveTrainFileType.md)

### <a id="VM_Models_Post_IGearSet_GearSetResultFilePath"></a> GearSetResultFilePath

```csharp
string GearSetResultFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_IGearSet_AddSamplingTime_System_Double_"></a> AddSamplingTime\(double\)

```csharp
void AddSamplingTime(double time)
```

#### Parameters

`time` [double](https://learn.microsoft.com/dotnet/api/system.double)

