#  Class DocumentEventArgs

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the event argument for document.

```csharp
public class DocumentEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DocumentEventArgs__ctor_System_String_"></a> DocumentEventArgs\(string\)

Initializes a new instance of the <xref href="VM.Managed.DocumentEventArgs" data-throw-if-not-resolved="false"></xref> class

```csharp
public DocumentEventArgs(string strUpdateInfoXml)
```

#### Parameters

`strUpdateInfoXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The document update information.

## Properties

### <a id="VM_Managed_DocumentEventArgs_InformationXml"></a> InformationXml

Gets the document update information.

```csharp
public string InformationXml { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

