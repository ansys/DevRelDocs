# <a id="VM_Managed_CAD_Kernel"></a> Class Kernel

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This base class is to represent the kernel.

```csharp
public abstract class Kernel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Kernel](VM.Managed.CAD.Kernel.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_Kernel__ctor_VM_CAD_IKernel__"></a> Kernel\(IKernel\*\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Kernel" data-throw-if-not-resolved="false"></xref> class

```csharp
protected Kernel(IKernel* pKernel)
```

#### Parameters

`pKernel` [IKernel](VM.CAD.IKernel.md)\*

The kernal interface

## Properties

### <a id="VM_Managed_CAD_Kernel_IsLoading"></a> IsLoading

Gets or sets a value indicating whether this instance is loading.

```csharp
public bool IsLoading { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Kernel_Key"></a> Key

```csharp
public UIntPtr Key { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### <a id="VM_Managed_CAD_Kernel_ClearSession"></a> ClearSession\(\)

Clear session.

```csharp
public static void ClearSession()
```

### <a id="VM_Managed_CAD_Kernel_ClearTemporaryEntity"></a> ClearTemporaryEntity\(\)

Clear temporary entity.

```csharp
public static void ClearTemporaryEntity()
```

### <a id="VM_Managed_CAD_Kernel_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Kernel_Dispose"></a> Dispose\(\)

destroy a instance of the <xref href="VM.Managed.CAD.Kernel" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_CAD_Kernel_DoingSession"></a> DoingSession\(\)

Whether session is processing.

```csharp
public static bool DoingSession()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Kernel_ExecuteOperation_System_String_System_String_VM_Managed_Document3D_System_String__"></a> ExecuteOperation\(string, string, Document3D, ref string\)

```csharp
public bool ExecuteOperation(string strType, string strArgument, Document3D doc, ref string strResult)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strArgument` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` [Document3D](VM.Managed.Document3D.md)

`strResult` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Kernel_Finalize"></a> \~Kernel\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.CAD.Kernel" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~Kernel()
```

### <a id="VM_Managed_CAD_Kernel_Initialize"></a> Initialize\(\)

```csharp
public void Initialize()
```

### <a id="VM_Managed_CAD_Kernel_SetIgnoreThreadID_System_Boolean_"></a> SetIgnoreThreadID\(bool\)

```csharp
public void SetIgnoreThreadID(bool bIgnore)
```

#### Parameters

`bIgnore` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Kernel_Terminate"></a> Terminate\(\)

```csharp
public void Terminate()
```

### <a id="VM_Managed_CAD_Kernel_UpdateSession"></a> UpdateSession\(\)

Update session.

```csharp
public static void UpdateSession()
```

