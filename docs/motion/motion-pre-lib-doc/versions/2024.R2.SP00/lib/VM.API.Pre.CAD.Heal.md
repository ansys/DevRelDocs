# Class Heal

Namespace: [VM.API.Pre.CAD](VM.API.Pre.CAD.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for heal.

```csharp
public static class Heal
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Heal](VM.API.Pre.CAD.Heal.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### HasDefect\(Body, Action<string\>, bool\)

Check if the body has defect.

```csharp
public static int HasDefect(this Body body, Action<string> actOutMessage = null, bool bShowDetailedInformation = false)
```

#### Parameters

`body` Body

The target body to check the defect.

`actOutMessage` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The action delegate for output message.

`bShowDetailedInformation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag whether showing the detailed information.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The error type.

### HasDefect\(IGeometryContainer, Action<string\>, bool\)

Check if the geometry container has defect.

```csharp
public static int HasDefect(this IGeometryContainer geometryContainer, Action<string> actOutMessage = null, bool bShowDetailedInformation = false)
```

#### Parameters

`geometryContainer` IGeometryContainer

The geometry container to check the defect.

`actOutMessage` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The action delegate for output message.

`bShowDetailedInformation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag whether showing the detailed information.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The error type.

### HasDefect\(Obj, Action<string\>, bool\)

```csharp
[NotNullObj(new string[] { "entity" })]
public static int HasDefect(Obj entity, Action<string> actOutMessage = null, bool bShowDetailedInformation = false)
```

#### Parameters

`entity` [Obj](VM.API.Pre.Obj.md)

`actOutMessage` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`bShowDetailedInformation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Repair\(Body, Action<string\>\)

Repair the body.

```csharp
public static int Repair(this Body body, Action<string> actOutMessage = null)
```

#### Parameters

`body` Body

The target body to repair.

`actOutMessage` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The action delegate for output message.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The error type.

### Repair\(IGeometryContainer, Action<string\>\)

Repair the geometry container.

```csharp
public static int Repair(this IGeometryContainer geometryContainer, Action<string> actOutMessage = null)
```

#### Parameters

`geometryContainer` IGeometryContainer

The target geometry container to repair.

`actOutMessage` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The action delegate for output message.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The error type.

### Repair\(Obj, Action<string\>\)

```csharp
[NotNullObj(new string[] { "entity" })]
public static int Repair(Obj entity, Action<string> actOutMessage = null)
```

#### Parameters

`entity` [Obj](VM.API.Pre.Obj.md)

`actOutMessage` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


