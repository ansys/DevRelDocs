# Class ExtendedMemberInfo<T\>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public abstract class ExtendedMemberInfo<T> where T : MemberInfo
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExtendedMemberInfo<T\>](VM.ExtendedMemberInfo\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ExtendedMemberInfo\(T\)

```csharp
public ExtendedMemberInfo(T info)
```

#### Parameters

`info` T

## Properties

### Info

```csharp
protected T Info { get; }
```

#### Property Value

 T

## Methods

### HasAttribute<TAttribute\>\(\)

```csharp
public bool HasAttribute<TAttribute>() where TAttribute : Attribute
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TAttribute` 

### TryGetAttributeInstance<TAttribute\>\(out TAttribute\)

```csharp
public bool TryGetAttributeInstance<TAttribute>(out TAttribute attribute) where TAttribute : Attribute
```

#### Parameters

`attribute` TAttribute

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TAttribute` 


