# Class KernelExtension

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public class KernelExtension : KernelObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[KernelExtension](VM.CAD.Kernel.KernelExtension.md)

#### Derived

[RoadFileCanvas](VM.CAD.Kernel.RoadFileCanvas.md)

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

### KernelExtension\(UIntPtr, bool\)

```csharp
public KernelExtension(UIntPtr key, bool isLock = true)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`isLock` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Create<T\>\(UIntPtr, bool\)

```csharp
public static T Create<T>(UIntPtr key, bool bLock = true) where T : KernelExtension
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`bLock` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 T

#### Type Parameters

`T` 


