# Class Topology
<a id="VM_CAD_Kernel_Topology"></a>

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public abstract class Topology : Entity, ITopology, IHasID, ISelected
```

#### Inheritance

object ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[Entity](VM.CAD.Kernel.Entity.md) ← 
[Topology](VM.CAD.Kernel.Topology.md)

#### Derived

[Edge](VM.CAD.Kernel.Edge.md), 
[Face](VM.CAD.Kernel.Face.md), 
[Vertex](VM.CAD.Kernel.Vertex.md)

#### Implements

[ITopology](VM.CAD.Kernel.ITopology.md), 
IHasID, 
ISelected

#### Inherited Members

[Entity.PID](VM.CAD.Kernel.Entity.md\#VM\_CAD\_Kernel\_Entity\_PID), 
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

### <a id="VM_CAD_Kernel_Topology__ctor_System_UIntPtr_System_Boolean_"></a> Topology\(UIntPtr, bool\)

```csharp
protected Topology(UIntPtr key, bool isLock = true)
```

#### Parameters

`key` UIntPtr

`isLock` bool

## Properties

### <a id="VM_CAD_Kernel_Topology_IsSelected"></a> IsSelected

```csharp
public bool IsSelected { get; set; }
```

#### Property Value

 bool

### <a id="VM_CAD_Kernel_Topology_ParentBodyKey"></a> ParentBodyKey

```csharp
public UIntPtr ParentBodyKey { get; }
```

#### Property Value

 UIntPtr

## Methods

### <a id="VM_CAD_Kernel_Topology_DisposeManagedResource"></a> DisposeManagedResource\(\)

```csharp
protected override void DisposeManagedResource()
```

### <a id="VM_CAD_Kernel_Topology_GetDefaultPoint"></a> GetDefaultPoint\(\)

```csharp
public abstract Vector GetDefaultPoint()
```

#### Returns

 Vector

### <a id="VM_CAD_Kernel_Topology_GetTopologyType_System_UIntPtr_"></a> GetTopologyType\(UIntPtr\)

```csharp
public static TopologyType GetTopologyType(UIntPtr key)
```

#### Parameters

`key` UIntPtr

#### Returns

 [TopologyType](VM.CAD.Kernel.TopologyType.md)

