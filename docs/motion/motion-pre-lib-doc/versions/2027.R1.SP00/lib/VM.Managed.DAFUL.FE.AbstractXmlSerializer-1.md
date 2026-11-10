# Class AbstractXmlSerializer<AbstractType\>
<a id="VM_Managed_DAFUL_FE_AbstractXmlSerializer_1"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent abstract xml serializer for FE.

```csharp
public class AbstractXmlSerializer<AbstractType>
```

#### Type Parameters

`AbstractType` 

#### Inheritance

object ← 
[AbstractXmlSerializer<AbstractType\>](VM.Managed.DAFUL.FE.AbstractXmlSerializer\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_FE_AbstractXmlSerializer_1__ctor"></a> AbstractXmlSerializer\(\)

```csharp
public AbstractXmlSerializer()
```

### <a id="VM_Managed_DAFUL_FE_AbstractXmlSerializer_1__ctor__0_"></a> AbstractXmlSerializer\(AbstractType\)

```csharp
public AbstractXmlSerializer(AbstractType data)
```

#### Parameters

`data` AbstractType

## Properties

### <a id="VM_Managed_DAFUL_FE_AbstractXmlSerializer_1_Data"></a> Data

```csharp
public AbstractType Data { get; set; }
```

#### Property Value

 AbstractType

## Methods

### <a id="VM_Managed_DAFUL_FE_AbstractXmlSerializer_1_GetSchema"></a> GetSchema\(\)

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 XmlSchema

### <a id="VM_Managed_DAFUL_FE_AbstractXmlSerializer_1_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

### <a id="VM_Managed_DAFUL_FE_AbstractXmlSerializer_1_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

## Operators

### <a id="VM_Managed_DAFUL_FE_AbstractXmlSerializer_1_op_Implicit_VM_Managed_DAFUL_FE_AbstractXmlSerializer__0____0"></a> implicit operator AbstractType\(AbstractXmlSerializer<AbstractType\>\)

```csharp
public static implicit operator AbstractType(AbstractXmlSerializer<AbstractType> o)
```

#### Parameters

`o` [AbstractXmlSerializer](VM.Managed.DAFUL.FE.AbstractXmlSerializer\-1.md)<AbstractType\>

#### Returns

 AbstractType

### <a id="VM_Managed_DAFUL_FE_AbstractXmlSerializer_1_op_Implicit__0__VM_Managed_DAFUL_FE_AbstractXmlSerializer__0_"></a> implicit operator AbstractXmlSerializer<AbstractType\>\(AbstractType\)

```csharp
public static implicit operator AbstractXmlSerializer<AbstractType>(AbstractType o)
```

#### Parameters

`o` AbstractType

#### Returns

 [AbstractXmlSerializer](VM.Managed.DAFUL.FE.AbstractXmlSerializer\-1.md)<AbstractType\>

