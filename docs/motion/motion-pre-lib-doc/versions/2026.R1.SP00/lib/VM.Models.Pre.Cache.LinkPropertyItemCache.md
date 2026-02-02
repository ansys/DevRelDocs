# Class LinkPropertyItemCache
<a id="VM_Models_Pre_Cache_LinkPropertyItemCache"></a>

Namespace: [VM.Models.Pre.Cache](VM.Models.Pre.Cache.md)  
Assembly: VM.Models.Pre.dll  

This class serve cache for Link/Child type properties of given object or type

```csharp
public static class LinkPropertyItemCache
```

#### Inheritance

object ← 
[LinkPropertyItemCache](VM.Models.Pre.Cache.LinkPropertyItemCache.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Pre_Cache_LinkPropertyItemCache_GetLinkProperties_System_Type_VM_Models_Pre_LinkPropertyType_"></a> GetLinkProperties\(Type, LinkPropertyType\)

Get all properties which have LinkAttribute custome attribute for given Type.

```csharp
public static IEnumerable<PropertyInfo> GetLinkProperties(this Type type, LinkPropertyType propertyType = LinkPropertyType.All)
```

#### Parameters

`type` Type

The <xref href="System.Type" data-throw-if-not-resolved="false"></xref> whiche want to find properties.

`propertyType` [LinkPropertyType](VM.Models.Pre.LinkPropertyType.md)

The <xref href="VM.Models.Pre.LinkPropertyType" data-throw-if-not-resolved="false"></xref> to search.

#### Returns

 IEnumerable<PropertyInfo\>

Found <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> of <xref href="System.Reflection.PropertyInfo" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_Models_Pre_Cache_LinkPropertyItemCache_GetLinkProperties_System_Object_VM_Models_Pre_LinkPropertyType_"></a> GetLinkProperties\(object, LinkPropertyType\)

Get all properties which have LinkAttribute custome attribute for given object.

```csharp
public static IEnumerable<PropertyInfo> GetLinkProperties(this object obj, LinkPropertyType propertyType = LinkPropertyType.All)
```

#### Parameters

`obj` object

The object whiche want to find properties.

`propertyType` [LinkPropertyType](VM.Models.Pre.LinkPropertyType.md)

The <xref href="VM.Models.Pre.LinkPropertyType" data-throw-if-not-resolved="false"></xref> to search.

#### Returns

 IEnumerable<PropertyInfo\>

Found <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> of <xref href="System.Reflection.PropertyInfo" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_Models_Pre_Cache_LinkPropertyItemCache_GetLinkPropertiesAndValues_System_Object_VM_Models_Pre_LinkPropertyType_"></a> GetLinkPropertiesAndValues\(object, LinkPropertyType\)

Get all properties and their values which have LinkAttribute custome attribute for given object.

```csharp
public static IEnumerable<(PropertyInfo property, object value)> GetLinkPropertiesAndValues(this object obj, LinkPropertyType propertyType = LinkPropertyType.All)
```

#### Parameters

`obj` object

The object whiche want to find properties.

`propertyType` [LinkPropertyType](VM.Models.Pre.LinkPropertyType.md)

The <xref href="VM.Models.Pre.LinkPropertyType" data-throw-if-not-resolved="false"></xref> to search.

#### Returns

 IEnumerable<\(PropertyInfo property, object value\)\>

Found <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> of <xref href="System.Reflection.PropertyInfo" data-throw-if-not-resolved="false"></xref> and its value.

### <a id="VM_Models_Pre_Cache_LinkPropertyItemCache_GetLinkedObjects__1_System_Object_VM_Models_Pre_LinkPropertyType_"></a> GetLinkedObjects<T\>\(object, LinkPropertyType\)

Get all propertiy values which have LinkAttribute custome attribute for given object.

```csharp
public static IEnumerable<T> GetLinkedObjects<T>(this object obj, LinkPropertyType propertyType = LinkPropertyType.All)
```

#### Parameters

`obj` object

The object whiche want to find properties.

`propertyType` [LinkPropertyType](VM.Models.Pre.LinkPropertyType.md)

The <xref href="VM.Models.Pre.LinkPropertyType" data-throw-if-not-resolved="false"></xref> to search.

#### Returns

 IEnumerable<T\>

Found <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> of property values.

#### Type Parameters

`T` 

The type of property value

