# Class Vertex
<a id="VM_CAD_Kernel_Vertex"></a>

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public class Vertex : Topology, ITopology, IHasID, ISelected
```

#### Inheritance

object ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[Entity](VM.CAD.Kernel.Entity.md) ← 
[Topology](VM.CAD.Kernel.Topology.md) ← 
[Vertex](VM.CAD.Kernel.Vertex.md)

#### Implements

[ITopology](VM.CAD.Kernel.ITopology.md), 
IHasID, 
ISelected

#### Inherited Members

[Topology.GetTopologyType\(UIntPtr\)](VM.CAD.Kernel.Topology.md\#VM\_CAD\_Kernel\_Topology\_GetTopologyType\_System\_UIntPtr\_), 
[Topology.GetDefaultPoint\(\)](VM.CAD.Kernel.Topology.md\#VM\_CAD\_Kernel\_Topology\_GetDefaultPoint), 
[Topology.DisposeManagedResource\(\)](VM.CAD.Kernel.Topology.md\#VM\_CAD\_Kernel\_Topology\_DisposeManagedResource), 
[Topology.IsSelected](VM.CAD.Kernel.Topology.md\#VM\_CAD\_Kernel\_Topology\_IsSelected), 
[Topology.ParentBodyKey](VM.CAD.Kernel.Topology.md\#VM\_CAD\_Kernel\_Topology\_ParentBodyKey), 
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

### <a id="VM_CAD_Kernel_Vertex__ctor_System_UIntPtr_System_Boolean_"></a> Vertex\(UIntPtr, bool\)

```csharp
public Vertex(UIntPtr key, bool isLock = true)
```

#### Parameters

`key` UIntPtr

`isLock` bool

## Methods

### <a id="VM_CAD_Kernel_Vertex_GetDefaultPoint"></a> GetDefaultPoint\(\)

```csharp
public override Vector GetDefaultPoint()
```

#### Returns

 Vector

### <a id="VM_CAD_Kernel_Vertex_IsVertex_System_UIntPtr_"></a> IsVertex\(UIntPtr\)

```csharp
public static bool IsVertex(UIntPtr key)
```

#### Parameters

`key` UIntPtr

#### Returns

 bool

