# Class KernelOperationGetSlicePoints
<a id="VM_Managed_DAFUL_KernelOperationGetSlicePoints"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDBallPlacing.dll  

The class for KernelOperationGetSlicePoints.

```csharp
public class KernelOperationGetSlicePoints
```

#### Inheritance

object ← 
[KernelOperationGetSlicePoints](VM.Managed.DAFUL.KernelOperationGetSlicePoints.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_KernelOperationGetSlicePoints__ctor"></a> KernelOperationGetSlicePoints\(\)

```csharp
public KernelOperationGetSlicePoints()
```

## Properties

### <a id="VM_Managed_DAFUL_KernelOperationGetSlicePoints_CuttingPlaneRadius"></a> CuttingPlaneRadius

Gets and sets the cutting plane radius.

```csharp
public double CuttingPlaneRadius { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_KernelOperationGetSlicePoints_Points"></a> Points

Gets and sets the points.

```csharp
public List<Vector> Points { get; set; }
```

#### Property Value

 List<Vector\>

### <a id="VM_Managed_DAFUL_KernelOperationGetSlicePoints_SliceInfos"></a> SliceInfos

Gets and sets the slice infos.

```csharp
public List<XmlSliceInfo> SliceInfos { get; set; }
```

#### Property Value

 List<[XmlSliceInfo](VM.Managed.DAFUL.XmlSliceInfo.md)\>

### <a id="VM_Managed_DAFUL_KernelOperationGetSlicePoints_TargetBody"></a> TargetBody

Gets and sets the target body.

```csharp
public BodyInfo TargetBody { get; set; }
```

#### Property Value

 [BodyInfo](VM.Managed.DAFUL.BodyInfo.md)

