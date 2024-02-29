# <a id="VM_Models_Post_SystemModeShapes"></a> Class SystemModeShapes

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class SystemModeShapes : ISystemModeShapes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SystemModeShapes](VM.Models.Post.SystemModeShapes.md)

#### Implements

[ISystemModeShapes](VM.Models.Post.ISystemModeShapes.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_SystemModeShapes__ctor_VM_Models_Post_MetaInfo_VM_Models_Post_IBodyBase_"></a> SystemModeShapes\(MetaInfo, IBodyBase\)

```csharp
public SystemModeShapes(MetaInfo metaInfo, IBodyBase target = null)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`target` [IBodyBase](VM.Models.Post.IBodyBase.md)

## Properties

### <a id="VM_Models_Post_SystemModeShapes_FBody"></a> FBody

```csharp
public IList<double[]> FBody { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_SystemModeShapes_Modal"></a> Modal

```csharp
public IList<double[]> Modal { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_SystemModeShapes_Nodal"></a> Nodal

```csharp
public IList<double[]> Nodal { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_SystemModeShapes_Rigid"></a> Rigid

```csharp
public IList<double[]> Rigid { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

