# <a id="VM_Models_Post_Materials_LinearISO"></a> Class LinearISO

Namespace: [VM.Models.Post.Materials](VM.Models.Post.Materials.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class LinearISO : MaterialBase, IObservableObject, IDisposableObject, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[MaterialBase](VM.Models.Post.Materials.MaterialBase.md) ← 
[LinearISO](VM.Models.Post.Materials.LinearISO.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[MaterialBase.CategoryType](VM.Models.Post.Materials.MaterialBase.md\#VM\_Models\_Post\_Materials\_MaterialBase\_CategoryType), 
[MaterialBase.EntityType](VM.Models.Post.Materials.MaterialBase.md\#VM\_Models\_Post\_Materials\_MaterialBase\_EntityType), 
[MaterialBase.SubMaterial](VM.Models.Post.Materials.MaterialBase.md\#VM\_Models\_Post\_Materials\_MaterialBase\_SubMaterial), 
[EntityBase.IsSupported\(EntityFilterMode\)](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsSupported\_VM\_Models\_Post\_EntityFilterMode\_), 
[EntityBase.CategoryType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_CategoryType), 
[EntityBase.EntityType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_EntityType), 
[EntityBase.HasGeometry](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_HasGeometry), 
[EntityBase.ID](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_ID), 
[EntityBase.Index](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_Index), 
[EntityBase.InitialValues](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_InitialValues), 
[EntityBase.IsDummy](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsDummy), 
[EntityBase.IsPlottable](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsPlottable), 
[ObjectBase.GetUnstructGridModel\(\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_GetUnstructGridModel), 
[ObjectBase.SetName\(string\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_SetName\_System\_String\_), 
[ObjectBase.UpdateAnimation\(UpdateActionType\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_UpdateAnimation\_VM\_Models\_Post\_UpdateActionType\_), 
[ObjectBase.AnalysisResult](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResult), 
[ObjectBase.AnalysisResultID](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultID), 
[ObjectBase.AnalysisResultType](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultType), 
[ObjectBase.DisplayName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_DisplayName), 
[ObjectBase.FullName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_FullName), 
[ObjectBase.Name](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_Name), 
[ObjectBase.ParentDocument](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_ParentDocument), 
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

### <a id="VM_Models_Post_Materials_LinearISO__ctor"></a> LinearISO\(\)

```csharp
public LinearISO()
```

## Properties

### <a id="VM_Models_Post_Materials_LinearISO_Density"></a> Density

```csharp
public double Density { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Materials_LinearISO_PoissonRatio"></a> PoissonRatio

```csharp
public double PoissonRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Materials_LinearISO_ReferenceTemperature"></a> ReferenceTemperature

```csharp
public double ReferenceTemperature { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Materials_LinearISO_ShearModulus"></a> ShearModulus

```csharp
public double ShearModulus { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Materials_LinearISO_SpecificHeat"></a> SpecificHeat

```csharp
public double SpecificHeat { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Materials_LinearISO_ThermalConductivity"></a> ThermalConductivity

```csharp
public double[] ThermalConductivity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_Materials_LinearISO_ThermalExpansionCoefficient"></a> ThermalExpansionCoefficient

```csharp
public double[] ThermalExpansionCoefficient { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_Materials_LinearISO_YoungsModulus"></a> YoungsModulus

```csharp
public double YoungsModulus { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Materials_LinearISO_Zeta"></a> Zeta

```csharp
public double Zeta { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

