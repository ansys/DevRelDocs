# <a id="VM_Models_Post_Materials_SubLowDensityFoam"></a> Class SubLowDensityFoam

Namespace: [VM.Models.Post.Materials](VM.Models.Post.Materials.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class SubLowDensityFoam : SubMaterialBase, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[SubMaterialBase](VM.Models.Post.Materials.SubMaterialBase.md) ← 
[SubLowDensityFoam](VM.Models.Post.Materials.SubLowDensityFoam.md)

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

### <a id="VM_Models_Post_Materials_SubLowDensityFoam__ctor"></a> SubLowDensityFoam\(\)

```csharp
public SubLowDensityFoam()
```

## Properties

### <a id="VM_Models_Post_Materials_SubLowDensityFoam_ReferenceSplineIndex"></a> ReferenceSplineIndex

```csharp
public int ReferenceSplineIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Materials_SubLowDensityFoam_YoungsModulus"></a> YoungsModulus

```csharp
public double YoungsModulus { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

