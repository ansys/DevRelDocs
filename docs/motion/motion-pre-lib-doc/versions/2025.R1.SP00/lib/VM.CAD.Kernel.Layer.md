#  Class Layer

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public class Layer : KernelObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[Layer](VM.CAD.Kernel.Layer.md)

#### Inherited Members

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

### <a id="VM_CAD_Kernel_Layer__ctor_System_UIntPtr_System_Boolean_"></a> Layer\(UIntPtr, bool\)

```csharp
public Layer(UIntPtr key, bool isLock = true)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`isLock` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_CAD_Kernel_Layer_Add_System_UIntPtr_"></a> Add\(UIntPtr\)

```csharp
public void Add(UIntPtr keyObject)
```

#### Parameters

`keyObject` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_CAD_Kernel_Layer_Remove_System_UIntPtr_"></a> Remove\(UIntPtr\)

```csharp
public void Remove(UIntPtr keyObject)
```

#### Parameters

`keyObject` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_CAD_Kernel_Layer_SetVisibility_VM_CAD_Kernel_LayerVisibility_"></a> SetVisibility\(LayerVisibility\)

```csharp
public void SetVisibility(LayerVisibility visibility)
```

#### Parameters

`visibility` [LayerVisibility](VM.CAD.Kernel.LayerVisibility.md)

