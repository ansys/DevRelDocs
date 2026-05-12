#  Class LinkPropertyItemCache

Namespace: [VM.Models.Pre.Cache](VM.Models.Pre.Cache.md)  
Assembly: VM.Models.Pre.dll  

This class serve cache for Link/Child type properties of given object or type

```csharp
public static class LinkPropertyItemCache
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The <xref href="System.Type" data-throw-if-not-resolved="false"></xref> whiche want to find properties.

`propertyType` [LinkPropertyType](VM.Models.Pre.LinkPropertyType.md)

The <xref href="VM.Models.Pre.LinkPropertyType" data-throw-if-not-resolved="false"></xref> to search.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo)\>

Found <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> of <xref href="System.Reflection.PropertyInfo" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_Models_Pre_Cache_LinkPropertyItemCache_GetLinkProperties_System_Object_VM_Models_Pre_LinkPropertyType_"></a> GetLinkProperties\(object, LinkPropertyType\)

Get all properties which have LinkAttribute custome attribute for given object.

```csharp
public static IEnumerable<PropertyInfo> GetLinkProperties(this object obj, LinkPropertyType propertyType = LinkPropertyType.All)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object whiche want to find properties.

`propertyType` [LinkPropertyType](VM.Models.Pre.LinkPropertyType.md)

The <xref href="VM.Models.Pre.LinkPropertyType" data-throw-if-not-resolved="false"></xref> to search.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo)\>

Found <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> of <xref href="System.Reflection.PropertyInfo" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_Models_Pre_Cache_LinkPropertyItemCache_GetLinkPropertiesAndValues_System_Object_VM_Models_Pre_LinkPropertyType_"></a> GetLinkPropertiesAndValues\(object, LinkPropertyType\)

Get all properties and their values which have LinkAttribute custome attribute for given object.

```csharp
public static IEnumerable<(PropertyInfo property, object value)> GetLinkPropertiesAndValues(this object obj, LinkPropertyType propertyType = LinkPropertyType.All)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object whiche want to find properties.

`propertyType` [LinkPropertyType](VM.Models.Pre.LinkPropertyType.md)

The <xref href="VM.Models.Pre.LinkPropertyType" data-throw-if-not-resolved="false"></xref> to search.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<\([PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo) [property](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.reflection.propertyinfo,system.object\-.property), [object](https://learn.microsoft.com/dotnet/api/system.object) [value](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.reflection.propertyinfo,system.object\-.value)\)\>

Found <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> of <xref href="System.Reflection.PropertyInfo" data-throw-if-not-resolved="false"></xref> and its value.

### <a id="VM_Models_Pre_Cache_LinkPropertyItemCache_GetLinkedObjects__1_System_Object_VM_Models_Pre_LinkPropertyType_"></a> GetLinkedObjects<T\>\(object, LinkPropertyType\)

Get all propertiy values which have LinkAttribute custome attribute for given object.

```csharp
public static IEnumerable<T> GetLinkedObjects<T>(this object obj, LinkPropertyType propertyType = LinkPropertyType.All)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object whiche want to find properties.

`propertyType` [LinkPropertyType](VM.Models.Pre.LinkPropertyType.md)

The <xref href="VM.Models.Pre.LinkPropertyType" data-throw-if-not-resolved="false"></xref> to search.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

Found <xref href="System.Collections.Generic.IEnumerable%601" data-throw-if-not-resolved="false"></xref> of property values.

#### Type Parameters

`T` 

The type of property value

