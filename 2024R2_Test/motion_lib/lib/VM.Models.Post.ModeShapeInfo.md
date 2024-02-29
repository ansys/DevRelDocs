# <a id="VM_Models_Post_ModeShapeInfo"></a> Class ModeShapeInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class ModeShapeInfo : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

#### Implements

IObservableObject, 
IDisposableObject

#### Inherited Members

ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ModeShapeInfo__ctor_VM_Models_Post_MetaInfo_System_Int32_"></a> ModeShapeInfo\(MetaInfo, int\)

```csharp
public ModeShapeInfo(MetaInfo metainfo, int majorVersion)
```

#### Parameters

`metainfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="VM_Models_Post_ModeShapeInfo_BetaScale"></a> BetaScale

```csharp
public double BetaScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ModeShapeInfo_DFMFInfo"></a> DFMFInfo

```csharp
public IDFMFReader DFMFInfo { get; }
```

#### Property Value

 [IDFMFReader](VM.Models.Post.IDFMFReader.md)

### <a id="VM_Models_Post_ModeShapeInfo_ModeShapeFilesInfo"></a> ModeShapeFilesInfo

```csharp
public List<ModeShapeFileInfo> ModeShapeFilesInfo { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ModeShapeFileInfo](VM.Models.Post.ModeShapeFileInfo.md)\>

## Methods

### <a id="VM_Models_Post_ModeShapeInfo_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

