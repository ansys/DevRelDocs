# <a id="VM_Models_Post_BeamGroups_FEBeamSegment"></a> Class FEBeamSegment

Namespace: [VM.Models.Post.BeamGroups](VM.Models.Post.BeamGroups.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class FEBeamSegment : BeamSegment, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
BeamSegment ← 
[FEBeamSegment](VM.Models.Post.BeamGroups.FEBeamSegment.md)

#### Implements

IObservableObject, 
IDisposableObject

#### Inherited Members

BeamSegment.BeamSectionType, 
BeamSegment.MarkerIndexes, 
BeamSegment.Parameters, 
BeamSegment.PartIndexes, 
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

### <a id="VM_Models_Post_BeamGroups_FEBeamSegment__ctor"></a> FEBeamSegment\(\)

```csharp
public FEBeamSegment()
```

## Properties

### <a id="VM_Models_Post_BeamGroups_FEBeamSegment_EndOrientation"></a> EndOrientation

```csharp
public IList<double> EndOrientation { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_BeamGroups_FEBeamSegment_StartOrientation"></a> StartOrientation

```csharp
public IList<double> StartOrientation { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_BeamGroups_FEBeamSegment_YDirection"></a> YDirection

```csharp
public IList<double> YDirection { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

