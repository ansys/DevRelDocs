# Class ExtendedMemberInfo<T\>
<a id="VM_ExtendedMemberInfo_1"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public abstract class ExtendedMemberInfo<T> where T : MemberInfo
```

#### Type Parameters

`T` 

#### Inheritance

object ← 
[ExtendedMemberInfo<T\>](VM.ExtendedMemberInfo\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_ExtendedMemberInfo_1__ctor__0_"></a> ExtendedMemberInfo\(T\)

```csharp
public ExtendedMemberInfo(T info)
```

#### Parameters

`info` T

## Properties

### <a id="VM_ExtendedMemberInfo_1_Info"></a> Info

```csharp
protected T Info { get; }
```

#### Property Value

 T

## Methods

### <a id="VM_ExtendedMemberInfo_1_HasAttribute__1"></a> HasAttribute<TAttribute\>\(\)

```csharp
public bool HasAttribute<TAttribute>() where TAttribute : Attribute
```

#### Returns

 bool

#### Type Parameters

`TAttribute` 

### <a id="VM_ExtendedMemberInfo_1_TryGetAttributeInstance__1___0__"></a> TryGetAttributeInstance<TAttribute\>\(out TAttribute\)

```csharp
public bool TryGetAttributeInstance<TAttribute>(out TAttribute attribute) where TAttribute : Attribute
```

#### Parameters

`attribute` TAttribute

#### Returns

 bool

#### Type Parameters

`TAttribute` 

