# Class Spline
<a id="VM_Managed_CAD_Spline"></a>

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the spline.

```csharp
public class Spline
```

#### Inheritance

object ← 
[Spline](VM.Managed.CAD.Spline.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_Spline__ctor"></a> Spline\(\)

```csharp
public Spline()
```

## Methods

### <a id="VM_Managed_CAD_Spline_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` bool

### <a id="VM_Managed_CAD_Spline_Dispose"></a> Dispose\(\)

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_CAD_Spline_Finalize"></a> \~Spline\(\)

```csharp
protected ~Spline()
```

### <a id="VM_Managed_CAD_Spline_MakeSplineAndGetPoint_VM_Managed_Document3D_System_UInt32_VM_Managed_Vector___"></a> MakeSplineAndGetPoint\(Document3D, uint, Vector\[\]\)

```csharp
public Vector[] MakeSplineAndGetPoint(Document3D doc, uint nCount, Vector[] vecInputPt)
```

#### Parameters

`doc` [Document3D](VM.Managed.Document3D.md)

`nCount` uint

`vecInputPt` [Vector](VM.Managed.Vector.md)\[\]

#### Returns

 [Vector](VM.Managed.Vector.md)\[\]

