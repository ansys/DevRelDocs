# Class LinkUpdateAttribute

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.Aspects.dll  

```csharp
[Aspect(Scope.PerInstance)]
[AttributeUsage(AttributeTargets.Property, AllowMultiple = true, Inherited = true)]
[Injection(typeof(LinkUpdateAttribute))]
[Mixin(typeof(ILinkUpdateOwner))]
public class LinkUpdateAttribute : LinkBaseAttribute, ILinkUpdateOwner
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
[LinkBaseAttribute](VM.Models.Pre.LinkBaseAttribute.md) ← 
[LinkUpdateAttribute](VM.Models.Pre.LinkUpdateAttribute.md)

#### Derived

[LinkDestroyAttribute](VM.Models.Pre.LinkDestroyAttribute.md)

#### Implements

ILinkUpdateOwner

#### Inherited Members

[LinkBaseAttribute.Dispose\(\)](VM.Models.Pre.LinkBaseAttribute.md\#VM\_Models\_Pre\_LinkBaseAttribute\_Dispose), 
[LinkBaseAttribute.Initialize\(object\)](VM.Models.Pre.LinkBaseAttribute.md\#VM\_Models\_Pre\_LinkBaseAttribute\_Initialize\_System\_Object\_), 
[LinkBaseAttribute.AddCache\(string, IDisposable\)](VM.Models.Pre.LinkBaseAttribute.md\#VM\_Models\_Pre\_LinkBaseAttribute\_AddCache\_System\_String\_System\_IDisposable\_), 
[LinkBaseAttribute.DisposeManagedResources\(\)](VM.Models.Pre.LinkBaseAttribute.md\#VM\_Models\_Pre\_LinkBaseAttribute\_DisposeManagedResources), 
[LinkBaseAttribute.InitializeProperty\(object, IEnumerable<PropertyInfo\>\)](VM.Models.Pre.LinkBaseAttribute.md\#VM\_Models\_Pre\_LinkBaseAttribute\_InitializeProperty\_System\_Object\_System\_Collections\_Generic\_IEnumerable\_System\_Reflection\_PropertyInfo\_\_), 
[LinkBaseAttribute.Unsubscribe\(string\)](VM.Models.Pre.LinkBaseAttribute.md\#VM\_Models\_Pre\_LinkBaseAttribute\_Unsubscribe\_System\_String\_), 
[LinkBaseAttribute.CacheItems](VM.Models.Pre.LinkBaseAttribute.md\#VM\_Models\_Pre\_LinkBaseAttribute\_CacheItems), 
[LinkBaseAttribute.IsCacheEmpty](VM.Models.Pre.LinkBaseAttribute.md\#VM\_Models\_Pre\_LinkBaseAttribute\_IsCacheEmpty)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### LinkUpdateAttribute\(\)

```csharp
public LinkUpdateAttribute()
```

### LinkUpdateAttribute\(Type\)

```csharp
public LinkUpdateAttribute(Type behaviorType)
```

#### Parameters

`behaviorType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

### LinkUpdateAttribute\(LinkBehaviorType, params string\[\]\)

```csharp
public LinkUpdateAttribute(LinkBehaviorType linkBehaviorType, params string[] behaviorNames)
```

#### Parameters

`linkBehaviorType` LinkBehaviorType

`behaviorNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Fields

### \_\_a$\_instance

```csharp
public static readonly LinkUpdateAttribute __a$_instance
```

#### Field Value

 [LinkUpdateAttribute](VM.Models.Pre.LinkUpdateAttribute.md)

## Properties

### AfterEventName

```csharp
protected virtual string AfterEventName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BeforeEventName

```csharp
protected virtual string BeforeEventName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TypeId

```csharp
public override object TypeId { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### AfterSetter\(object, string, object\[\], Attribute\[\]\)

```csharp
[Advice(Kind.After, Targets = Target.AnyAccess|Target.Setter)]
public virtual void AfterSetter(object owner, string propertyName, object[] values, Attribute[] triggers)
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`values` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

`triggers` [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)\[\]

### BeforeSetter\(string\)

```csharp
[Advice(Kind.Before, Targets = Target.AnyAccess|Target.Setter)]
public virtual void BeforeSetter(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetAfterBehavior<TAttribute\>\(object, string, object, EventPattern<LinkEventArgs\>, TAttribute, bool\)

```csharp
protected Action GetAfterBehavior<TAttribute>(object owner, string propertyName, object link, EventPattern<LinkEventArgs> eventPattern, TAttribute attribute, bool isSwap) where TAttribute : LinkUpdateAttribute
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`link` [object](https://learn.microsoft.com/dotnet/api/system.object)

`eventPattern` EventPattern<LinkEventArgs\>

`attribute` TAttribute

`isSwap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Type Parameters

`TAttribute` 

### GetAfterSubscriber<TAttribute\>\(object, string, object, TAttribute, bool\)

```csharp
protected IDisposable GetAfterSubscriber<TAttribute>(object owner, string propertyName, object link, TAttribute linkAttribute, bool isSwap) where TAttribute : LinkUpdateAttribute
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`link` [object](https://learn.microsoft.com/dotnet/api/system.object)

`linkAttribute` TAttribute

`isSwap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Type Parameters

`TAttribute` 

### GetBeforeBehavior<TAttribute\>\(object, string, object, EventPattern<LinkEventArgs\>, TAttribute, bool\)

```csharp
protected Action GetBeforeBehavior<TAttribute>(object owner, string propertyName, object link, EventPattern<LinkEventArgs> eventPattern, TAttribute attribute, bool isSwap) where TAttribute : LinkUpdateAttribute
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`link` [object](https://learn.microsoft.com/dotnet/api/system.object)

`eventPattern` EventPattern<LinkEventArgs\>

`attribute` TAttribute

`isSwap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Type Parameters

`TAttribute` 

### GetBeforeSubscriber<TAttribute\>\(object, string, object, TAttribute, bool\)

```csharp
protected IDisposable GetBeforeSubscriber<TAttribute>(object owner, string propertyName, object link, TAttribute linkAttribute, bool isSwap) where TAttribute : LinkUpdateAttribute
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`link` [object](https://learn.microsoft.com/dotnet/api/system.object)

`linkAttribute` TAttribute

`isSwap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Type Parameters

`TAttribute` 

### GetBehavior<TAttribute\>\(object, object, string, object, TAttribute, bool\)

```csharp
protected static Action GetBehavior<TAttribute>(object caller, object owner, string propertyName, object link, TAttribute attribute, bool isSwap) where TAttribute : LinkUpdateAttribute
```

#### Parameters

`caller` [object](https://learn.microsoft.com/dotnet/api/system.object)

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`link` [object](https://learn.microsoft.com/dotnet/api/system.object)

`attribute` TAttribute

`isSwap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Type Parameters

`TAttribute` 

### GetDefaultAfterBehavior\(object, EventPattern<LinkEventArgs\>\)

```csharp
protected virtual Action GetDefaultAfterBehavior(object source, EventPattern<LinkEventArgs> eventPattern)
```

#### Parameters

`source` [object](https://learn.microsoft.com/dotnet/api/system.object)

`eventPattern` EventPattern<LinkEventArgs\>

#### Returns

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### GetDefaultBeforeBehavior\(object, EventPattern<LinkEventArgs\>\)

```csharp
protected virtual Action GetDefaultBeforeBehavior(object source, EventPattern<LinkEventArgs> eventPattern)
```

#### Parameters

`source` [object](https://learn.microsoft.com/dotnet/api/system.object)

`eventPattern` EventPattern<LinkEventArgs\>

#### Returns

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### InitializeProperty\(object, IEnumerable<PropertyInfo\>\)

```csharp
protected override void InitializeProperty(object owner, IEnumerable<PropertyInfo> propertyInfos)
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyInfos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo)\>

### InitializeProperty<TAttribute\>\(object, IEnumerable<PropertyInfo\>, bool\)

```csharp
protected void InitializeProperty<TAttribute>(object owner, IEnumerable<PropertyInfo> propertyInfos, bool isSwap = false) where TAttribute : LinkUpdateAttribute
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyInfos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo)\>

`isSwap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TAttribute` 

### Subscribe<TAttribute\>\(object, string, object, IEnumerable<Attribute\>, bool\)

```csharp
protected void Subscribe<TAttribute>(object owner, string propertyName, object link, IEnumerable<Attribute> attributes, bool isSwap = false) where TAttribute : LinkUpdateAttribute
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`link` [object](https://learn.microsoft.com/dotnet/api/system.object)

`attributes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)\>

`isSwap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TAttribute` 


