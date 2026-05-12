#  Class Session

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

This class represents the kernel session

```csharp
public sealed class Session : KernelObject, ISession
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[Session](VM.CAD.Kernel.Session.md)

#### Implements

[ISession](VM.CAD.Kernel.ISession.md)

#### Inherited Members

[KernelObject.Dispose\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Dispose), 
[KernelObject.Key](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Key)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_CAD_Kernel_Session_DisposeManagedResource"></a> DisposeManagedResource\(\)

```csharp
protected override void DisposeManagedResource()
```

### <a id="VM_CAD_Kernel_Session_SetFailed"></a> SetFailed\(\)

Mark session is failed

```csharp
public void SetFailed()
```

