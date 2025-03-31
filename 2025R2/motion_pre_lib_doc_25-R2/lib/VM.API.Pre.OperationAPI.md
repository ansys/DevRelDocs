# Class OperationAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for operation class.

```csharp
public static class OperationAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OperationAPI](VM.API.Pre.OperationAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### ChangeEnableState\(Obj, bool\)

```csharp
[NotNullObj(new string[] { "enableObj" })]
public static void ChangeEnableState(this Obj enableObj, bool isEnable = true)
```

#### Parameters

`enableObj` [Obj](VM.API.Pre.Obj.md)

`isEnable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChangeEnableState\(IEnumerable<Obj\>, bool\)

```csharp
[NotNull(new string[] { "enableObjs" })]
public static void ChangeEnableState(this IEnumerable<Obj> enableObjs, bool isEnable = true)
```

#### Parameters

`enableObjs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`isEnable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChangeInterface\(Obj, bool\)

```csharp
[NotNullObj(new string[] { "interfaceObj" })]
public static void ChangeInterface(this Obj interfaceObj, bool isInterface = false)
```

#### Parameters

`interfaceObj` [Obj](VM.API.Pre.Obj.md)

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChangeVisibleState\(Obj, bool\)

```csharp
[NotNullObj(new string[] { "visibleObj" })]
public static void ChangeVisibleState(this Obj visibleObj, bool isVisible = true)
```

#### Parameters

`visibleObj` [Obj](VM.API.Pre.Obj.md)

`isVisible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChangeVisibleState\(IEnumerable<Obj\>, bool\)

```csharp
[NotNull(new string[] { "visibleObjs" })]
public static void ChangeVisibleState(this IEnumerable<Obj> visibleObjs, bool isVisible = true)
```

#### Parameters

`visibleObjs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`isVisible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Delete\(Obj\)

Delete the entity.

```csharp
[NotNullObj(new string[] { "entity" })]
public static void Delete(this Obj entity)
```

#### Parameters

`entity` [Obj](VM.API.Pre.Obj.md)

The entity to be deleted.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'entity' arguments are empty.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if document of 'entity' arguments are empty.

### Duplicate\(Obj\)

```csharp
[NotNullObj(new string[] { "entity" })]
public static void Duplicate(this Obj entity)
```

#### Parameters

`entity` [Obj](VM.API.Pre.Obj.md)

### Duplicate\(IEnumerable<Obj\>\)

```csharp
[NotNull(new string[] { "entities" })]
public static void Duplicate(this IEnumerable<Obj> entities)
```

#### Parameters

`entities` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

### Flip\(Obj\)

```csharp
[NotNullObj(new string[] { "entity" })]
public static void Flip(this Obj entity)
```

#### Parameters

`entity` [Obj](VM.API.Pre.Obj.md)

### Flip\(IEnumerable<Obj\>\)

```csharp
[NotNull(new string[] { "entities" })]
public static void Flip(this IEnumerable<Obj> entities)
```

#### Parameters

`entities` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

### SetTransparency\(Obj, ExpressionValueVariable\)

```csharp
[NotNullObj(new string[] { "body" })]
public static void SetTransparency(this Obj body, ExpressionValueVariable transparency)
```

#### Parameters

`body` [Obj](VM.API.Pre.Obj.md)

`transparency` ExpressionValueVariable

### UpdateCADName\(Obj, string\)

```csharp
[NotNull(new string[] { "cadBody" })]
[NotNullOrEmpty(new string[] { "strName" })]
public static void UpdateCADName(this Obj cadBody, string strName)
```

#### Parameters

`cadBody` [Obj](VM.API.Pre.Obj.md)

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### UpdateName\(Obj, string\)

```csharp
[NotNull(new string[] { "nameObj" })]
[NotNullOrEmpty(new string[] { "strName" })]
public static void UpdateName(this Obj nameObj, string strName)
```

#### Parameters

`nameObj` [Obj](VM.API.Pre.Obj.md)

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### UpdateSymmetric\(Obj, bool\)

```csharp
[NotNullObj(new string[] { "symMgr" })]
public static void UpdateSymmetric(this Obj symMgr, bool symmetric = true)
```

#### Parameters

`symMgr` [Obj](VM.API.Pre.Obj.md)

`symmetric` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


