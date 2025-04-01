# Class SerializableDictionary<TKey, TValue\>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

SerializableDictionary

```csharp
public class SerializableDictionary<TKey, TValue> : Dictionary<TKey, TValue>
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dictionary<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2) ← 
[SerializableDictionary<TKey, TValue\>](VM.Managed.SerializableDictionary\-2.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SerializableDictionary\(\)

SerializableDictionary Constructor

```csharp
public SerializableDictionary()
```

### SerializableDictionary\(Dictionary<TKey, TValue\>\)

SerializableDictionary Constructor

```csharp
public SerializableDictionary(Dictionary<TKey, TValue> dic)
```

#### Parameters

`dic` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<TKey, TValue\>

## Methods

### CopyTo\(ref Dictionary<TKey, TValue\>\)

CopyTo

```csharp
public void CopyTo(ref Dictionary<TKey, TValue> dic)
```

#### Parameters

`dic` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<TKey, TValue\>

### GetSchema\(\)

GetSchema

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### ReadXml\(XmlReader\)

ReadXml

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### WriteXml\(XmlWriter\)

WriteXml

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)


