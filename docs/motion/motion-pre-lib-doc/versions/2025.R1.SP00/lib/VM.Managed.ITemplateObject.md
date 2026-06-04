#  Interface ITemplateObject

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the template object.

```csharp
public interface ITemplateObject
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_ITemplateObject_AfterReadTemplate"></a> AfterReadTemplate\(\)

Called after reading template .

```csharp
void AfterReadTemplate()
```

### <a id="VM_Managed_ITemplateObject_BeforeReadTemplate"></a> BeforeReadTemplate\(\)

Called before reading template .

```csharp
void BeforeReadTemplate()
```

### <a id="VM_Managed_ITemplateObject_IsReadAndWrite"></a> IsReadAndWrite\(\)

whether this template object is [read and write].

```csharp
bool IsReadAndWrite()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ITemplateObject_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Generates a template object from its XML representation.

```csharp
void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the template object is deserialized.

### <a id="VM_Managed_ITemplateObject_SkipToUpdateSymmetric"></a> SkipToUpdateSymmetric\(\)

whether this template object skip [Update Symmetric].

```csharp
bool SkipToUpdateSymmetric()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ITemplateObject_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Converts a template object into its XML representation.

```csharp
void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the template object is serialized.

