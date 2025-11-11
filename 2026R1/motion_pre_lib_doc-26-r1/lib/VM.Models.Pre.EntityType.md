# Class EntityType
<a id="VM_Models_Pre_EntityType"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public class EntityType
```

#### Inheritance

object ← 
[EntityType](VM.Models.Pre.EntityType.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_EntityType__ctor_System_String_System_String_VM_Models_Pre_MainTypes_VM_Models_Pre_SubTypes_System_String_System_String_"></a> EntityType\(string, string, MainTypes, SubTypes, string, string\)

```csharp
[JsonConstructor]
public EntityType(string typeName, string displayName, MainTypes mainType, SubTypes subType, string mainTypeAbbreviation, string subTypeAbbreviation)
```

#### Parameters

`typeName` string

`displayName` string

`mainType` [MainTypes](VM.Models.Pre.MainTypes.md)

`subType` [SubTypes](VM.Models.Pre.SubTypes.md)

`mainTypeAbbreviation` string

`subTypeAbbreviation` string

## Properties

### <a id="VM_Models_Pre_EntityType_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_EntityType_MainType"></a> MainType

```csharp
[JsonConverter(typeof(StringEnumConverter))]
public MainTypes MainType { get; }
```

#### Property Value

 [MainTypes](VM.Models.Pre.MainTypes.md)

### <a id="VM_Models_Pre_EntityType_MainTypeAbbreviation"></a> MainTypeAbbreviation

```csharp
public string MainTypeAbbreviation { get; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_EntityType_SubType"></a> SubType

```csharp
[JsonConverter(typeof(StringEnumConverter))]
public SubTypes SubType { get; }
```

#### Property Value

 [SubTypes](VM.Models.Pre.SubTypes.md)

### <a id="VM_Models_Pre_EntityType_SubTypeAbbreviation"></a> SubTypeAbbreviation

```csharp
public string SubTypeAbbreviation { get; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_EntityType_TypeName"></a> TypeName

```csharp
public string TypeName { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Models_Pre_EntityType_TryGetEntityType_System_String_VM_Models_Pre_EntityType__"></a> TryGetEntityType\(string, out EntityType\)

```csharp
public static bool TryGetEntityType(string typeName, out EntityType entityType)
```

#### Parameters

`typeName` string

`entityType` [EntityType](VM.Models.Pre.EntityType.md)

#### Returns

 bool

