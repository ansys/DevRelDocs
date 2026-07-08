# Class RemoveFromDocEventArgs
<a id="VM_Managed_RemoveFromDocEventArgs"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the event information that removed to document from linked object.

```csharp
public sealed class RemoveFromDocEventArgs : EventArgs
```

#### Inheritance

object ← 
EventArgs ← 
[RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_RemoveFromDocEventArgs__ctor_VM_Managed_Document_System_Boolean_"></a> RemoveFromDocEventArgs\(Document, bool\)

Initializes a new instance of the <xref href="VM.Managed.RemoveFromDocEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RemoveFromDocEventArgs(Document doc, bool bBackup)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The document

`bBackup` bool

The backup flag.

### <a id="VM_Managed_RemoveFromDocEventArgs__ctor_VM_Managed_Document_"></a> RemoveFromDocEventArgs\(Document\)

Initializes a new instance of the <xref href="VM.Managed.RemoveFromDocEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RemoveFromDocEventArgs(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The document

## Properties

### <a id="VM_Managed_RemoveFromDocEventArgs_Document"></a> Document

Gets the backup flag.

```csharp
public Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### <a id="VM_Managed_RemoveFromDocEventArgs_IsBackup"></a> IsBackup

Gets the backup flag.

```csharp
public bool IsBackup { get; }
```

#### Property Value

 bool

