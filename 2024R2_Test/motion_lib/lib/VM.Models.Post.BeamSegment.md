# <a id="VM_Models_Post_BeamSegment"></a> Class BeamSegment

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class BeamSegment : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[BeamSegment](VM.Models.Post.BeamSegment.md)

#### Implements

IObservableObject, 
IDisposableObject

#### Inherited Members

ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
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

### <a id="VM_Models_Post_BeamSegment__ctor"></a> BeamSegment\(\)

```csharp
public BeamSegment()
```

## Properties

### <a id="VM_Models_Post_BeamSegment_BeamSectionType"></a> BeamSectionType

```csharp
public BeamSectionType BeamSectionType { get; set; }
```

#### Property Value

 [BeamSectionType](VM.Models.Post.BeamSectionType.md)

### <a id="VM_Models_Post_BeamSegment_MarkerIndexes"></a> MarkerIndexes

```csharp
public IList<int> MarkerIndexes { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_BeamSegment_Parameters"></a> Parameters

```csharp
public double[] Parameters { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_BeamSegment_PartIndexes"></a> PartIndexes

```csharp
public IList<int> PartIndexes { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

