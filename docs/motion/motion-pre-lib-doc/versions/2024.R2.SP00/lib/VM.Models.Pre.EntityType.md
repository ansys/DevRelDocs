# Class EntityType

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public class EntityType
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityType](VM.Models.Pre.EntityType.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### EntityType\(string, string, MainTypes, SubTypes, string, string\)

```csharp
[JsonConstructor]
public EntityType(string typeName, string displayName, MainTypes mainType, SubTypes subType, string mainTypeAbbreviation, string subTypeAbbreviation)
```

#### Parameters

`typeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`mainType` [MainTypes](VM.Models.Pre.MainTypes.md)

`subType` [SubTypes](VM.Models.Pre.SubTypes.md)

`mainTypeAbbreviation` [string](https://learn.microsoft.com/dotnet/api/system.string)

`subTypeAbbreviation` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MainType

```csharp
[JsonConverter(typeof(StringEnumConverter))]
public MainTypes MainType { get; }
```

#### Property Value

 [MainTypes](VM.Models.Pre.MainTypes.md)

### MainTypeAbbreviation

```csharp
public string MainTypeAbbreviation { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SubType

```csharp
[JsonConverter(typeof(StringEnumConverter))]
public SubTypes SubType { get; }
```

#### Property Value

 [SubTypes](VM.Models.Pre.SubTypes.md)

### SubTypeAbbreviation

```csharp
public string SubTypeAbbreviation { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TypeName

```csharp
public string TypeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### TryGetEntityType\(string, out EntityType\)

```csharp
public static bool TryGetEntityType(string typeName, out EntityType entityType)
```

#### Parameters

`typeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`entityType` [EntityType](VM.Models.Pre.EntityType.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


