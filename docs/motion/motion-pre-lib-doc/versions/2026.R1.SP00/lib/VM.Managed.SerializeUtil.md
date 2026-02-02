# Class SerializeUtil
<a id="VM_Managed_SerializeUtil"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

SerializeUtil

```csharp
public class SerializeUtil
```

#### Inheritance

object ← 
[SerializeUtil](VM.Managed.SerializeUtil.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_SerializeUtil__ctor"></a> SerializeUtil\(\)

```csharp
public SerializeUtil()
```

## Methods

### <a id="VM_Managed_SerializeUtil_Deserial__1_System_String_System_Type_"></a> Deserial<T\>\(string, Type\)

Deserialize data

```csharp
public static T Deserial<T>(string xml, Type type)
```

#### Parameters

`xml` string

The object xml

`type` Type

The deserialized explicit type

#### Returns

 T

#### Type Parameters

`T` 

The object type

### <a id="VM_Managed_SerializeUtil_Deserial__1_System_String_"></a> Deserial<T\>\(string\)

```csharp
public static T Deserial<T>(string xml)
```

#### Parameters

`xml` string

The object xml

#### Returns

 T

#### Type Parameters

`T` 

The object type

### <a id="VM_Managed_SerializeUtil_Serial__1___0_"></a> Serial<T\>\(T\)

Serialize data

```csharp
public static string Serial<T>(T obj)
```

#### Parameters

`obj` T

The object

#### Returns

 string

The new <xref href="System.String" data-throw-if-not-resolved="false"></xref> object.

#### Type Parameters

`T` 

The object type

### <a id="VM_Managed_SerializeUtil_Serial_VM_Managed_ObjectBase_"></a> Serial\(ObjectBase\)

```csharp
public static string Serial(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

#### Returns

 string

### <a id="VM_Managed_SerializeUtil_SerialXmlDoc__1___0_"></a> SerialXmlDoc<T\>\(T\)

Serialize data

```csharp
public static XmlDocument SerialXmlDoc<T>(T obj)
```

#### Parameters

`obj` T

The object

#### Returns

 XmlDocument

The new <xref href="System.Xml.XmlDocument" data-throw-if-not-resolved="false"></xref> object.

#### Type Parameters

`T` 

The object type

