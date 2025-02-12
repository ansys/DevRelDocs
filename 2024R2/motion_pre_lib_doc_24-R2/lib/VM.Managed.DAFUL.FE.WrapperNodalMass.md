# Class WrapperNodalMass

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the wrapper nodal mass.

```csharp
public class WrapperNodalMass
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WrapperNodalMass](VM.Managed.DAFUL.FE.WrapperNodalMass.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### WrapperNodalMass\(\)

```csharp
public WrapperNodalMass()
```

## Methods

### GetGaussPoints\(ElementType\)

```csharp
public _VM_VECTOR* GetGaussPoints(ElementType type)
```

#### Parameters

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

#### Returns

 [\_VM\_VECTOR](\_VM\_VECTOR.md)\*

### GetJacobian\(ElementType, double, double, double, double\*, double\*\)

```csharp
public void GetJacobian(ElementType type, double dR, double dS, double dT, double* arJacobian, double* dDeterminent)
```

#### Parameters

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

`dR` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dS` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dT` [double](https://learn.microsoft.com/dotnet/api/system.double)

`arJacobian` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dDeterminent` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

### GetJacobian\(ElementType, double, double, double\*, double\*\)

```csharp
public void GetJacobian(ElementType type, double dR, double dS, double* arJacobian, double* dDeterminent)
```

#### Parameters

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

`dR` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dS` [double](https://learn.microsoft.com/dotnet/api/system.double)

`arJacobian` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dDeterminent` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

### GetNumberOfGaussPoints\(ElementType\)

```csharp
public int GetNumberOfGaussPoints(ElementType type)
```

#### Parameters

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetShapeFn\(ElementType, double, double, double, double\*\)

```csharp
public void GetShapeFn(ElementType type, double dR, double dS, double dT, double* arShape)
```

#### Parameters

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

`dR` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dS` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dT` [double](https://learn.microsoft.com/dotnet/api/system.double)

`arShape` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

### GetShapeFn\(ElementType, double, double, double\*\)

```csharp
public void GetShapeFn(ElementType type, double dR, double dS, double* arShape)
```

#### Parameters

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

`dR` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dS` [double](https://learn.microsoft.com/dotnet/api/system.double)

`arShape` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

### GetWeights\(ElementType\)

```csharp
public _VM_VECTOR* GetWeights(ElementType type)
```

#### Parameters

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

#### Returns

 [\_VM\_VECTOR](\_VM\_VECTOR.md)\*


