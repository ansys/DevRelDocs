# Class GroupActionBase

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the group action base.

```csharp
public abstract class GroupActionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GroupActionBase](VM.Managed.DAFUL.GroupActionBase.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### GroupActionBase\(\)

```csharp
protected GroupActionBase()
```

## Properties

### Name

Gets the name.

```csharp
public abstract string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Action\(ObjectBase\[\], bool\)

Actions the specified obs.

```csharp
public abstract void Action(ObjectBase[] obs, bool bOnOff)
```

#### Parameters

`obs` ObjectBase\[\]

The obs.

`bOnOff` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b on off].

### State\(ObjectBase\[\]\)

States the specified obs.

```csharp
public abstract bool State(ObjectBase[] obs)
```

#### Parameters

`obs` ObjectBase\[\]

The obs.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


