# Class PropertyXmlSerializer<TProperty\>
<a id="VM_Managed_PropertyXmlSerializer_1"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent xmlSerializer for property.

```csharp
public class PropertyXmlSerializer<TProperty> : AbstractXmlSerializer<TProperty> where TProperty : Property
```

#### Type Parameters

`TProperty` 

#### Inheritance

object ← 
AbstractXmlSerializer<TProperty\> ← 
[PropertyXmlSerializer<TProperty\>](VM.Managed.PropertyXmlSerializer\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_PropertyXmlSerializer_1__ctor"></a> PropertyXmlSerializer\(\)

Initializes a new instance of the <xref href="VM.Managed.PropertyXmlSerializer%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected PropertyXmlSerializer()
```

### <a id="VM_Managed_PropertyXmlSerializer_1__ctor__0_"></a> PropertyXmlSerializer\(TProperty\)

Initializes a new instance of the <xref href="VM.Managed.PropertyXmlSerializer%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected PropertyXmlSerializer(TProperty prop)
```

#### Parameters

`prop` TProperty

The property.

## Methods

### <a id="VM_Managed_PropertyXmlSerializer_1_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Reads the XML.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The reader.

### <a id="VM_Managed_PropertyXmlSerializer_1_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Writes the XML.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

## Operators

### <a id="VM_Managed_PropertyXmlSerializer_1_op_Implicit__0__VM_Managed_PropertyXmlSerializer__0_"></a> implicit operator PropertyXmlSerializer<TProperty\>\(TProperty\)

Performs an implicit conversion from <xref href="VM.Managed.Property" data-throw-if-not-resolved="false"></xref> to <xref href="VM.Managed.PropertyXmlSerializer%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public static implicit operator PropertyXmlSerializer<TProperty>(TProperty prop)
```

#### Parameters

`prop` TProperty

The prop.

#### Returns

 [PropertyXmlSerializer](VM.Managed.PropertyXmlSerializer\-1.md)<TProperty\>

The result of the conversion.

