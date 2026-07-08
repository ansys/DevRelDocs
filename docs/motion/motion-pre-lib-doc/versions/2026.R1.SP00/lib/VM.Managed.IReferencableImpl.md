# Class IReferencableImpl
<a id="VM_Managed_IReferencableImpl"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the reference implementation.

```csharp
public class IReferencableImpl
```

#### Inheritance

object ← 
[IReferencableImpl](VM.Managed.IReferencableImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_IReferencableImpl__ctor"></a> IReferencableImpl\(\)

```csharp
public IReferencableImpl()
```

## Methods

### <a id="VM_Managed_IReferencableImpl_Instantiate_VM_Managed_ObjectBase_VM_Managed_Reference_VM_CAD_Kernel_Render_Canvas_"></a> Instantiate\(ObjectBase, Reference, Canvas\)

Instantiates the specified reference.

```csharp
public static void Instantiate(ObjectBase referencable, Reference reference, Canvas canvas)
```

#### Parameters

`referencable` [ObjectBase](VM.Managed.ObjectBase.md)

`reference` [Reference](VM.Managed.Reference.md)

The reference.

`canvas` [Canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Kernel/Render/Canvas.cs)

The canvas.

