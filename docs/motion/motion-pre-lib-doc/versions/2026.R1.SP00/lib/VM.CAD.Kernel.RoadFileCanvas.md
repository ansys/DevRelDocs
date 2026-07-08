# Class RoadFileCanvas
<a id="VM_CAD_Kernel_RoadFileCanvas"></a>

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public class RoadFileCanvas : KernelExtension
```

#### Inheritance

object ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[KernelExtension](VM.CAD.Kernel.KernelExtension.md) ← 
[RoadFileCanvas](VM.CAD.Kernel.RoadFileCanvas.md)

#### Inherited Members

[KernelExtension.Create<T\>\(UIntPtr, bool\)](VM.CAD.Kernel.KernelExtension.md\#VM\_CAD\_Kernel\_KernelExtension\_Create\_\_1\_System\_UIntPtr\_System\_Boolean\_), 
[KernelObject.VMK\_ARGUMENT\_NULL](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_VMK\_ARGUMENT\_NULL), 
[KernelObject.VMK\_ARGUMENT\_TYPE](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_VMK\_ARGUMENT\_TYPE), 
[KernelObject.VMK\_OK](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_VMK\_OK), 
[KernelObject.Dispose\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Dispose), 
[KernelObject.Execute\(Func<int\>\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Execute\_System\_Func\_System\_Int32\_\_), 
[KernelObject.GetFrom<TResult\>\(KernelObject.delGetFrom<TResult\>, bool\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_GetFrom\_\_1\_VM\_CAD\_Kernel\_KernelObject\_delGetFrom\_\_\_0\_\_System\_Boolean\_), 
[KernelObject.DisposeManagedResource\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_DisposeManagedResource), 
[KernelObject.DisposeUnmanagedResource\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_DisposeUnmanagedResource), 
[KernelObject.Key](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Key)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Kernel_RoadFileCanvas__ctor_System_UIntPtr_System_Boolean_"></a> RoadFileCanvas\(UIntPtr, bool\)

```csharp
public RoadFileCanvas(UIntPtr key, bool isLock = true)
```

#### Parameters

`key` UIntPtr

`isLock` bool

## Properties

### <a id="VM_CAD_Kernel_RoadFileCanvas_MessageCallback"></a> MessageCallback

```csharp
public RoadFileCanvas.MessageFn MessageCallback { get; set; }
```

#### Property Value

 [RoadFileCanvas](VM.CAD.Kernel.RoadFileCanvas.md).[MessageFn](VM.CAD.Kernel.RoadFileCanvas.MessageFn.md)

### <a id="VM_CAD_Kernel_RoadFileCanvas_Segments"></a> Segments

```csharp
public int Segments { get; }
```

#### Property Value

 int

## Methods

### <a id="VM_CAD_Kernel_RoadFileCanvas_Create_System_UIntPtr_System_Boolean_"></a> Create\(UIntPtr, bool\)

```csharp
public static RoadFileCanvas Create(UIntPtr key, bool bLock = true)
```

#### Parameters

`key` UIntPtr

`bLock` bool

#### Returns

 [RoadFileCanvas](VM.CAD.Kernel.RoadFileCanvas.md)

### <a id="VM_CAD_Kernel_RoadFileCanvas_Open_System_String_System_Double_"></a> Open\(string, double\)

```csharp
public void Open(string strRoadFile, double dFactorFromMeter)
```

#### Parameters

`strRoadFile` string

`dFactorFromMeter` double

### <a id="VM_CAD_Kernel_RoadFileCanvas_SetDetailedSegment_System_Int32_"></a> SetDetailedSegment\(int\)

```csharp
public void SetDetailedSegment(int nSeg)
```

#### Parameters

`nSeg` int

### <a id="VM_CAD_Kernel_RoadFileCanvas_SetTransformation_VM_Vector_System_Double_"></a> SetTransformation\(Vector, double\)

```csharp
public void SetTransformation(Vector offset, double rotateAngleDeg)
```

#### Parameters

`offset` Vector

`rotateAngleDeg` double

