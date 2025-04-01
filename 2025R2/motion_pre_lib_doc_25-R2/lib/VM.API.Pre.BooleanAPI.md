# Class BooleanAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for boolean.

```csharp
public static class BooleanAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BooleanAPI](VM.API.Pre.BooleanAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CheckClashOperation\(Document3D, Body, Body\)

Check a clash of bodies.

```csharp
public static bool CheckClashOperation(Document3D document, Body target, Body tool)
```

#### Parameters

`document` Document3D

The <xref href="VM.Managed.Document3D" data-throw-if-not-resolved="false"></xref> to check a clash of bodies.

`target` Body

The target of a body.

`tool` Body

The tool of a body.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

the object seleted by this API.

### IntersectBody\(IDocument, Obj, IEnumerable<Obj\>, bool\)

```csharp
[NotNull(new string[] { "document", "toolBodies" })]
[NotNullObj(new string[] { "targetBody" })]
public static void IntersectBody(this IDocument document, Obj targetBody, IEnumerable<Obj> toolBodies, bool reserveToolBody = false)
```

#### Parameters

`document` IDocument

`targetBody` [Obj](VM.API.Pre.Obj.md)

`toolBodies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`reserveToolBody` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SubtractBody\(IDocument, Obj, Obj, bool\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "targetBody", "toolBody" })]
public static void SubtractBody(this IDocument document, Obj targetBody, Obj toolBody, bool reserveToolBody = false)
```

#### Parameters

`document` IDocument

`targetBody` [Obj](VM.API.Pre.Obj.md)

`toolBody` [Obj](VM.API.Pre.Obj.md)

`reserveToolBody` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UniteBody\(IDocument, Obj, IEnumerable<Obj\>, bool\)

```csharp
[NotNull(new string[] { "document", "toolBodies" })]
[NotNullObj(new string[] { "targetBody" })]
public static void UniteBody(this IDocument document, Obj targetBody, IEnumerable<Obj> toolBodies, bool reserveToolBody = false)
```

#### Parameters

`document` IDocument

`targetBody` [Obj](VM.API.Pre.Obj.md)

`toolBodies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`reserveToolBody` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


