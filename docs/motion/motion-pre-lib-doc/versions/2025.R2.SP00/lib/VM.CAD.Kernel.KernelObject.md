#  Class KernelObject

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public abstract class KernelObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md)

#### Derived

[Application](VM.CAD.Kernel.Application.md), 
[Canvas](VM.CAD.Kernel.Render.Canvas.md), 
[Document](VM.CAD.Kernel.Document.md), 
[Entity](VM.CAD.Kernel.Entity.md), 
[Kernel](VM.CAD.Kernel.Kernel.md), 
[KernelExtension](VM.CAD.Kernel.KernelExtension.md), 
[Layer](VM.CAD.Kernel.Layer.md), 
[LayerManager](VM.CAD.Kernel.LayerManager.md), 
[Session](VM.CAD.Kernel.Session.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Kernel_KernelObject__ctor_System_UIntPtr_System_Boolean_"></a> KernelObject\(UIntPtr, bool\)

```csharp
protected KernelObject(UIntPtr key, bool isLock = true)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`isLock` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Fields

### <a id="VM_CAD_Kernel_KernelObject_VMK_ARGUMENT_NULL"></a> VMK\_ARGUMENT\_NULL

```csharp
protected const int VMK_ARGUMENT_NULL = 1
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_CAD_Kernel_KernelObject_VMK_ARGUMENT_TYPE"></a> VMK\_ARGUMENT\_TYPE

```csharp
protected const int VMK_ARGUMENT_TYPE = 2
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_CAD_Kernel_KernelObject_VMK_OK"></a> VMK\_OK

```csharp
protected const int VMK_OK = 0
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="VM_CAD_Kernel_KernelObject_Key"></a> Key

```csharp
public UIntPtr Key { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### <a id="VM_CAD_Kernel_KernelObject_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_CAD_Kernel_KernelObject_DisposeManagedResource"></a> DisposeManagedResource\(\)

```csharp
protected virtual void DisposeManagedResource()
```

### <a id="VM_CAD_Kernel_KernelObject_DisposeUnmanagedResource"></a> DisposeUnmanagedResource\(\)

```csharp
protected virtual void DisposeUnmanagedResource()
```

### <a id="VM_CAD_Kernel_KernelObject_Execute_System_Func_System_Int32__"></a> Execute\(Func<int\>\)

```csharp
protected static void Execute(Func<int> function)
```

#### Parameters

`function` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_CAD_Kernel_KernelObject_GetFrom__1_VM_CAD_Kernel_KernelObject_delGetFrom___0__System_Boolean_"></a> GetFrom<TResult\>\(delGetFrom<TResult\>, bool\)

```csharp
protected static TResult GetFrom<TResult>(KernelObject.delGetFrom<TResult> getFrom, bool checkFunctionReturnValue = true)
```

#### Parameters

`getFrom` [KernelObject](VM.CAD.Kernel.KernelObject.md).[delGetFrom](VM.CAD.Kernel.KernelObject.delGetFrom\-1.md)<TResult\>

`checkFunctionReturnValue` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 TResult

#### Type Parameters

`TResult` 

