#  Class BushPropertyXmlSerializer

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFB.dll  

This class is to represent xmlSerializer for property.

```csharp
public class BushPropertyXmlSerializer : PropertyXmlSerializer<PropertyBush>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
AbstractXmlSerializer<PropertyBush\> ← 
PropertyXmlSerializer<PropertyBush\> ← 
[BushPropertyXmlSerializer](VM.Managed.DAFUL.Force.BushPropertyXmlSerializer.md)

#### Inherited Members

PropertyXmlSerializer<PropertyBush\>.ReadXml\(XmlReader\), 
PropertyXmlSerializer<PropertyBush\>.WriteXml\(XmlWriter\)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Force_BushPropertyXmlSerializer__ctor"></a> BushPropertyXmlSerializer\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.BushPropertyXmlSerializer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BushPropertyXmlSerializer()
```

### <a id="VM_Managed_DAFUL_Force_BushPropertyXmlSerializer__ctor_VM_Managed_DAFUL_Force_PropertyBush_"></a> BushPropertyXmlSerializer\(PropertyBush\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.BushPropertyXmlSerializer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BushPropertyXmlSerializer(PropertyBush prop)
```

#### Parameters

`prop` [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md)

The property.

## Methods

### <a id="VM_Managed_DAFUL_Force_BushPropertyXmlSerializer_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Reads the XML.

```csharp
public override sealed void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Force_BushPropertyXmlSerializer_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Writes the XML.

```csharp
public override sealed void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

## Operators

### <a id="VM_Managed_DAFUL_Force_BushPropertyXmlSerializer_op_Implicit_VM_Managed_DAFUL_Force_PropertyBush__VM_Managed_DAFUL_Force_BushPropertyXmlSerializer"></a> implicit operator BushPropertyXmlSerializer\(PropertyBush\)

Performs an implicit conversion from <xref href="VM.Managed.Property" data-throw-if-not-resolved="false"></xref> to <xref href="VM.Managed.DAFUL.Force.BushPropertyXmlSerializer" data-throw-if-not-resolved="false"></xref>.

```csharp
public static implicit operator BushPropertyXmlSerializer(PropertyBush prop)
```

#### Parameters

`prop` [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md)

The prop.

#### Returns

 [BushPropertyXmlSerializer](VM.Managed.DAFUL.Force.BushPropertyXmlSerializer.md)

The result of the conversion.

