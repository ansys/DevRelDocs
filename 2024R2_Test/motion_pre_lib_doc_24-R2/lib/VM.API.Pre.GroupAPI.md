# Class GroupAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for Group.

```csharp
public static class GroupAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GroupAPI](VM.API.Pre.GroupAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### ApplyGroup\(Obj, IEnumerable<Obj\>\)

Apply a <xref href="VM.Managed.DAFUL.Group" data-throw-if-not-resolved="false"></xref> update.

```csharp
[NotNull(new string[] { "group" })]
public static void ApplyGroup(this Obj group, IEnumerable<Obj> objs)
```

#### Parameters

`group` [Obj](VM.API.Pre.Obj.md)

The target <xref href="VM.Managed.DAFUL.Group" data-throw-if-not-resolved="false"></xref> to apply update.

`objs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The collection of objects.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'group' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'group' is not <xref href="VM.Managed.IGroup" data-throw-if-not-resolved="false"></xref>.

### CreateGroup\(SubSystemDocument, IEnumerable<Obj\>\)

Create <xref href="VM.Managed.DAFUL.Group" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument", "objs" })]
public static Obj CreateGroup(this SubSystemDocument subSystemDocument, IEnumerable<Obj> objs)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a group.

`objs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The bodies of a group.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Group" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'objs' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'objs' is not <xref href="VM.Managed.IGroup" data-throw-if-not-resolved="false"></xref>.


