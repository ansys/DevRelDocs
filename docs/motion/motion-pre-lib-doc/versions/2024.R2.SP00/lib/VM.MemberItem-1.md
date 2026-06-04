# Class MemberItem<TDescriptor\>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public abstract class MemberItem<TDescriptor> where TDescriptor : MemberDescriptor
```

#### Type Parameters

`TDescriptor` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MemberItem<TDescriptor\>](VM.MemberItem\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### MemberItem\(TDescriptor\)

```csharp
protected MemberItem(TDescriptor memberDescriptor)
```

#### Parameters

`memberDescriptor` TDescriptor

## Properties

### Attributes

```csharp
public IEnumerable<Attribute> Attributes { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)\>

### MemberDescriptor

```csharp
protected TDescriptor MemberDescriptor { get; }
```

#### Property Value

 TDescriptor

## Methods

### HasAttribute<T\>\(\)

```csharp
public bool HasAttribute<T>() where T : Attribute
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### TryGetAttributeInstance<T\>\(out T\)

```csharp
public bool TryGetAttributeInstance<T>(out T attribute) where T : Attribute
```

#### Parameters

`attribute` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


