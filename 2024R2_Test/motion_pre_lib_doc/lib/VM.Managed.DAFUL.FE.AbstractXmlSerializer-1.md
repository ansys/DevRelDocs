# Class AbstractXmlSerializer<AbstractType\>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent abstract xml serializer for FE.

```csharp
public class AbstractXmlSerializer<AbstractType>
```

#### Type Parameters

`AbstractType` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AbstractXmlSerializer<AbstractType\>](VM.Managed.DAFUL.FE.AbstractXmlSerializer\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AbstractXmlSerializer\(\)

```csharp
public AbstractXmlSerializer()
```

### AbstractXmlSerializer\(AbstractType\)

```csharp
public AbstractXmlSerializer(AbstractType data)
```

#### Parameters

`data` AbstractType

## Properties

### Data

```csharp
public AbstractType Data { get; set; }
```

#### Property Value

 AbstractType

## Methods

### GetSchema\(\)

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### ReadXml\(XmlReader\)

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### WriteXml\(XmlWriter\)

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

## Operators

### implicit operator AbstractType\(AbstractXmlSerializer<AbstractType\>\)

```csharp
public static implicit operator AbstractType(AbstractXmlSerializer<AbstractType> o)
```

#### Parameters

`o` [AbstractXmlSerializer](VM.Managed.DAFUL.FE.AbstractXmlSerializer\-1.md)<AbstractType\>

#### Returns

 AbstractType

### implicit operator AbstractXmlSerializer<AbstractType\>\(AbstractType\)

```csharp
public static implicit operator AbstractXmlSerializer<AbstractType>(AbstractType o)
```

#### Parameters

`o` AbstractType

#### Returns

 [AbstractXmlSerializer](VM.Managed.DAFUL.FE.AbstractXmlSerializer\-1.md)<AbstractType\>


