#  Class AddToDocEventArgs

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the event information that add to document from linked object.

```csharp
public sealed class AddToDocEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_AddToDocEventArgs__ctor_VM_Managed_Document_System_Boolean_System_Boolean_"></a> AddToDocEventArgs\(Document, bool, bool\)

Initializes a new instance of the <xref href="VM.Managed.AddToDocEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddToDocEventArgs(Document doc, bool bBackup, bool bLoading)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The document.

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The backup flag.

`bLoading` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The loading flag.

## Properties

### <a id="VM_Managed_AddToDocEventArgs_Document"></a> Document

Gets the document.

```csharp
public Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### <a id="VM_Managed_AddToDocEventArgs_IsBackup"></a> IsBackup

Gets the backup flag.

```csharp
public bool IsBackup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AddToDocEventArgs_IsLoading"></a> IsLoading

Gets the loading flag.

```csharp
public bool IsLoading { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

