# Class Owned

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the owned.

```csharp
public class Owned
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Owned](VM.Managed.Owned.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Owned\(\)

```csharp
public Owned()
```

## Methods

### GetOwner\(IOwned\)

Gets the owner.

```csharp
public static ObjectBase GetOwner(IOwned owned)
```

#### Parameters

`owned` IOwned

IOwned interface.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

An object that matches a specified owned.


