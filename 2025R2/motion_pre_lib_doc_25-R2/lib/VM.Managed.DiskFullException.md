#  Class DiskFullException

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the exception about disk full.

```csharp
public class DiskFullException : Exception
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[DiskFullException](VM.Managed.DiskFullException.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DiskFullException__ctor_System_Exception_"></a> DiskFullException\(Exception\)

Initializes a new instance of the <xref href="VM.Managed.DiskFullException" data-throw-if-not-resolved="false"></xref> class

```csharp
public DiskFullException(Exception e)
```

#### Parameters

`e` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

## Properties

### <a id="VM_Managed_DiskFullException_Message"></a> Message

Gets the exception information.

```csharp
public override string Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DiskFullException_IsDiskFull_System_Exception_"></a> IsDiskFull\(Exception\)

```csharp
public static bool IsDiskFull(Exception e)
```

#### Parameters

`e` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

