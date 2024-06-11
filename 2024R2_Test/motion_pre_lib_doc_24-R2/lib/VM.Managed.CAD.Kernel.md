# Class Kernel

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

### Kernel\(IKernel\*\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Kernel" data-throw-if-not-resolved="false"></xref> class

```csharp
protected Kernel(IKernel* pKernel)
```

#### Parameters

`pKernel` [IKernel](VM.CAD.IKernel.md)\*

The kernal interface

## Properties

### IsLoading

Gets or sets a value indicating whether this instance is loading.

```csharp
public bool IsLoading { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Key

```csharp
public UIntPtr Key { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### ClearSession\(\)

Clear session.

```csharp
public static void ClearSession()
```

### ClearTemporaryEntity\(\)

Clear temporary entity.

```csharp
public static void ClearTemporaryEntity()
```

### Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dispose\(\)

destroy a instance of the <xref href="VM.Managed.CAD.Kernel" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override sealed void Dispose()
```

### DoingSession\(\)

Whether session is processing.

```csharp
public static bool DoingSession()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExecuteOperation\(string, string, Document3D, ref string\)

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

### \~Kernel\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.CAD.Kernel" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~Kernel()
```

### Initialize\(\)

```csharp
public void Initialize()
```

### SetIgnoreThreadID\(bool\)

```csharp
public void SetIgnoreThreadID(bool bIgnore)
```

#### Parameters

`bIgnore` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Terminate\(\)

```csharp
public void Terminate()
```

### UpdateSession\(\)

Update session.

```csharp
public static void UpdateSession()
```


