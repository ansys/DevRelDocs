#  Interface IXMLFormatable

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the document saved/loaded as xml format.

```csharp
public interface IXMLFormatable
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_IXMLFormatable_Load_System_IO_TextReader_"></a> Load\(TextReader\)

Load document.

```csharp
void Load(TextReader reader)
```

#### Parameters

`reader` [TextReader](https://learn.microsoft.com/dotnet/api/system.io.textreader)

The container.

### <a id="VM_Managed_IXMLFormatable_Save_System_IO_TextWriter_"></a> Save\(TextWriter\)

Save document.

```csharp
void Save(TextWriter writer)
```

#### Parameters

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

The container.

