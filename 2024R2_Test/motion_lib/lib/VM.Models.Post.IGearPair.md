# <a id="VM_Models_Post_IGearPair"></a> Interface IGearPair

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IGearPair : IDriveTrainVectorDisplayable, IVectorDisplayable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

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

## Methods

### <a id="VM_Models_Post_IGearPair_AddDeformation_System_Double___"></a> AddDeformation\(double\[\]\)

```csharp
void AddDeformation(double[] deformation)
```

#### Parameters

`deformation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGearPair_AddPressure_System_Double___"></a> AddPressure\(double\[\]\)

```csharp
void AddPressure(double[] pressure)
```

#### Parameters

`pressure` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGearPair_AddRange_System_Double___System_Double___"></a> AddRange\(double\[\], double\[\]\)

```csharp
void AddRange(double[] x, double[] y)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

