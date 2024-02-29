# <a id="VM_Models_Post_IUserSubroutine"></a> Interface IUserSubroutine

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IUserSubroutine : IReportableVectorDisplayable, IVectorDisplayable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

[IReportableVectorDisplayable](VM.Models.Post.IReportableVectorDisplayable.md), 
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

### <a id="VM_Models_Post_IUserSubroutine_IsReportableContourDisplayData"></a> IsReportableContourDisplayData

```csharp
bool IsReportableContourDisplayData { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IUserSubroutine_Parameters"></a> Parameters

```csharp
IList<string> Parameters { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_IUserSubroutine_ReportableUSubDisplayInfos"></a> ReportableUSubDisplayInfos

```csharp
IEnumerable<ReportableUSubDisplayInfo> ReportableUSubDisplayInfos { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ReportableUSubDisplayInfo](VM.Models.Post.ReportableUSubDisplayInfo.md)\>

