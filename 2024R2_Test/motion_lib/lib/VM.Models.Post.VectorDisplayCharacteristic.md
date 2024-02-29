# <a id="VM_Models_Post_VectorDisplayCharacteristic"></a> Class VectorDisplayCharacteristic

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class VectorDisplayCharacteristic : Selectable, IObservableObject, IDisposableObject, ISelected, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[Selectable](VM.Models.Post.Selectable.md) ← 
[VectorDisplayCharacteristic](VM.Models.Post.VectorDisplayCharacteristic.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ISelected, 
IHasName

#### Inherited Members

[Selectable.ToString\(\)](VM.Models.Post.Selectable.md\#VM\_Models\_Post\_Selectable\_ToString), 
[Selectable.DisplayName](VM.Models.Post.Selectable.md\#VM\_Models\_Post\_Selectable\_DisplayName), 
[Selectable.FullName](VM.Models.Post.Selectable.md\#VM\_Models\_Post\_Selectable\_FullName), 
[Selectable.IsSelected](VM.Models.Post.Selectable.md\#VM\_Models\_Post\_Selectable\_IsSelected), 
[Selectable.Name](VM.Models.Post.Selectable.md\#VM\_Models\_Post\_Selectable\_Name), 
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

### <a id="VM_Models_Post_VectorDisplayCharacteristic__ctor_System_String_VM_Models_Post_VectorDisplayType_"></a> VectorDisplayCharacteristic\(string, VectorDisplayType\)

```csharp
public VectorDisplayCharacteristic(string fullName, VectorDisplayType vectorDisplayType)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`vectorDisplayType` [VectorDisplayType](VM.Models.Post.VectorDisplayType.md)

## Properties

### <a id="VM_Models_Post_VectorDisplayCharacteristic_CategoryName"></a> CategoryName

```csharp
public string CategoryName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VectorDisplayCharacteristic_VectorDisplayType"></a> VectorDisplayType

```csharp
public VectorDisplayType VectorDisplayType { get; }
```

#### Property Value

 [VectorDisplayType](VM.Models.Post.VectorDisplayType.md)

