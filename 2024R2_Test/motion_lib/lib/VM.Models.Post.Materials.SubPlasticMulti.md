# <a id="VM_Models_Post_Materials_SubPlasticMulti"></a> Class SubPlasticMulti

Namespace: [VM.Models.Post.Materials](VM.Models.Post.Materials.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class SubPlasticMulti : SubMaterialBase, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[SubMaterialBase](VM.Models.Post.Materials.SubMaterialBase.md) ← 
[SubPlasticMulti](VM.Models.Post.Materials.SubPlasticMulti.md)

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

### <a id="VM_Models_Post_Materials_SubPlasticMulti__ctor"></a> SubPlasticMulti\(\)

```csharp
public SubPlasticMulti()
```

## Properties

### <a id="VM_Models_Post_Materials_SubPlasticMulti_InitYieldStress"></a> InitYieldStress

```csharp
public double InitYieldStress { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Materials_SubPlasticMulti_Strain"></a> Strain

```csharp
public double[] Strain { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_Materials_SubPlasticMulti_Stress"></a> Stress

```csharp
public double[] Stress { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_Materials_SubPlasticMulti_Type"></a> Type

```csharp
public int Type { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Materials_SubPlasticMulti_Value"></a> Value

```csharp
public double Value { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

