#  Class LinkOwnerDestroyAttribute

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.Aspects.dll  

```csharp
[Aspect(Scope.PerInstance)]
[AttributeUsage(AttributeTargets.Property, AllowMultiple = true, Inherited = true)]
[Injection(typeof(LinkOwnerDestroyAttribute))]
[Mixin(typeof(ILinkOwnerDestroyOwner))]
public class LinkOwnerDestroyAttribute : LinkDestroyAttribute, ILinkUpdateOwner, ILinkDestroyOwner, ILinkOwnerDestroyOwner
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
[LinkBaseAttribute](VM.Models.Pre.LinkBaseAttribute.md) ← 
[LinkUpdateAttribute](VM.Models.Pre.LinkUpdateAttribute.md) ← 
[LinkDestroyAttribute](VM.Models.Pre.LinkDestroyAttribute.md) ← 
[LinkOwnerDestroyAttribute](VM.Models.Pre.LinkOwnerDestroyAttribute.md)

#### Implements

ILinkUpdateOwner, 
ILinkDestroyOwner, 
ILinkOwnerDestroyOwner

#### Inherited Members

[LinkDestroyAttribute.\_\_a$\_instance](VM.Models.Pre.LinkDestroyAttribute.md\#VM\_Models\_Pre\_LinkDestroyAttribute\_\_\_a\_\_instance), 
[LinkDestroyAttribute.AfterSetter\(object, string, object\[\], Attribute\[\]\)](VM.Models.Pre.LinkDestroyAttribute.md\#VM\_Models\_Pre\_LinkDestroyAttribute\_AfterSetter\_System\_Object\_System\_String\_System\_Object\_\_\_System\_Attribute\_\_\_), 
[LinkDestroyAttribute.BeforeSetter\(string\)](VM.Models.Pre.LinkDestroyAttribute.md\#VM\_Models\_Pre\_LinkDestroyAttribute\_BeforeSetter\_System\_String\_), 
[LinkDestroyAttribute.GetDefaultAfterBehavior\(object, EventPattern<LinkEventArgs\>\)](VM.Models.Pre.LinkDestroyAttribute.md\#VM\_Models\_Pre\_LinkDestroyAttribute\_GetDefaultAfterBehavior\_System\_Object\_System\_Reactive\_EventPattern\_VM\_Managed\_LinkEventArgs\_\_), 
[LinkDestroyAttribute.GetDefaultBeforeBehavior\(object, EventPattern<LinkEventArgs\>\)](VM.Models.Pre.LinkDestroyAttribute.md\#VM\_Models\_Pre\_LinkDestroyAttribute\_GetDefaultBeforeBehavior\_System\_Object\_System\_Reactive\_EventPattern\_VM\_Managed\_LinkEventArgs\_\_), 
[LinkDestroyAttribute.InitializeProperty\(object, IEnumerable<PropertyInfo\>\)](VM.Models.Pre.LinkDestroyAttribute.md\#VM\_Models\_Pre\_LinkDestroyAttribute\_InitializeProperty\_System\_Object\_System\_Collections\_Generic\_IEnumerable\_System\_Reflection\_PropertyInfo\_\_), 
[LinkDestroyAttribute.AfterEventName](VM.Models.Pre.LinkDestroyAttribute.md\#VM\_Models\_Pre\_LinkDestroyAttribute\_AfterEventName), 
[LinkDestroyAttribute.BeforeEventName](VM.Models.Pre.LinkDestroyAttribute.md\#VM\_Models\_Pre\_LinkDestroyAttribute\_BeforeEventName), 
[LinkUpdateAttribute.\_\_a$\_instance](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_\_\_a\_\_instance), 
[LinkUpdateAttribute.AfterSetter\(object, string, object\[\], Attribute\[\]\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_AfterSetter\_System\_Object\_System\_String\_System\_Object\_\_\_System\_Attribute\_\_\_), 
[LinkUpdateAttribute.BeforeSetter\(string\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_BeforeSetter\_System\_String\_), 
[LinkUpdateAttribute.GetBehavior<TAttribute\>\(object, object, string, object, TAttribute, bool\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_GetBehavior\_\_1\_System\_Object\_System\_Object\_System\_String\_System\_Object\_\_\_0\_System\_Boolean\_), 
[LinkUpdateAttribute.GetAfterBehavior<TAttribute\>\(object, string, object, EventPattern<LinkEventArgs\>, TAttribute, bool\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_GetAfterBehavior\_\_1\_System\_Object\_System\_String\_System\_Object\_System\_Reactive\_EventPattern\_VM\_Managed\_LinkEventArgs\_\_\_\_0\_System\_Boolean\_), 
[LinkUpdateAttribute.GetAfterSubscriber<TAttribute\>\(object, string, object, TAttribute, bool\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_GetAfterSubscriber\_\_1\_System\_Object\_System\_String\_System\_Object\_\_\_0\_System\_Boolean\_), 
[LinkUpdateAttribute.GetBeforeBehavior<TAttribute\>\(object, string, object, EventPattern<LinkEventArgs\>, TAttribute, bool\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_GetBeforeBehavior\_\_1\_System\_Object\_System\_String\_System\_Object\_System\_Reactive\_EventPattern\_VM\_Managed\_LinkEventArgs\_\_\_\_0\_System\_Boolean\_), 
[LinkUpdateAttribute.GetBeforeSubscriber<TAttribute\>\(object, string, object, TAttribute, bool\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_GetBeforeSubscriber\_\_1\_System\_Object\_System\_String\_System\_Object\_\_\_0\_System\_Boolean\_), 
[LinkUpdateAttribute.GetDefaultAfterBehavior\(object, EventPattern<LinkEventArgs\>\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_GetDefaultAfterBehavior\_System\_Object\_System\_Reactive\_EventPattern\_VM\_Managed\_LinkEventArgs\_\_), 
[LinkUpdateAttribute.GetDefaultBeforeBehavior\(object, EventPattern<LinkEventArgs\>\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_GetDefaultBeforeBehavior\_System\_Object\_System\_Reactive\_EventPattern\_VM\_Managed\_LinkEventArgs\_\_), 
[LinkUpdateAttribute.InitializeProperty\(object, IEnumerable<PropertyInfo\>\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_InitializeProperty\_System\_Object\_System\_Collections\_Generic\_IEnumerable\_System\_Reflection\_PropertyInfo\_\_), 
[LinkUpdateAttribute.InitializeProperty<TAttribute\>\(object, IEnumerable<PropertyInfo\>, bool\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_InitializeProperty\_\_1\_System\_Object\_System\_Collections\_Generic\_IEnumerable\_System\_Reflection\_PropertyInfo\_\_System\_Boolean\_), 
[LinkUpdateAttribute.Subscribe<TAttribute\>\(object, string, object, IEnumerable<Attribute\>, bool\)](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_Subscribe\_\_1\_System\_Object\_System\_String\_System\_Object\_System\_Collections\_Generic\_IEnumerable\_System\_Attribute\_\_System\_Boolean\_), 
[LinkUpdateAttribute.TypeId](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_TypeId), 
[LinkUpdateAttribute.AfterEventName](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_AfterEventName), 
[LinkUpdateAttribute.BeforeEventName](VM.Models.Pre.LinkUpdateAttribute.md\#VM\_Models\_Pre\_LinkUpdateAttribute\_BeforeEventName), 
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

### <a id="VM_Models_Pre_LinkOwnerDestroyAttribute__ctor"></a> LinkOwnerDestroyAttribute\(\)

```csharp
public LinkOwnerDestroyAttribute()
```

### <a id="VM_Models_Pre_LinkOwnerDestroyAttribute__ctor_System_Type_"></a> LinkOwnerDestroyAttribute\(Type\)

```csharp
public LinkOwnerDestroyAttribute(Type behaviorType)
```

#### Parameters

`behaviorType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_Models_Pre_LinkOwnerDestroyAttribute__ctor_VM_Models_Pre_LinkBehaviorType_System_String___"></a> LinkOwnerDestroyAttribute\(LinkBehaviorType, params string\[\]\)

```csharp
public LinkOwnerDestroyAttribute(LinkBehaviorType linkBehaviorType, params string[] behaviorNames)
```

#### Parameters

`linkBehaviorType` LinkBehaviorType

`behaviorNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Fields

### <a id="VM_Models_Pre_LinkOwnerDestroyAttribute___a__instance"></a> \_\_a$\_instance

```csharp
public static readonly LinkOwnerDestroyAttribute __a$_instance
```

#### Field Value

 [LinkOwnerDestroyAttribute](VM.Models.Pre.LinkOwnerDestroyAttribute.md)

## Methods

### <a id="VM_Models_Pre_LinkOwnerDestroyAttribute_AfterSetter_System_Object_System_String_System_Object___System_Attribute___"></a> AfterSetter\(object, string, object\[\], Attribute\[\]\)

```csharp
[Advice(Kind.After, Targets = Target.AnyAccess|Target.Setter)]
public override void AfterSetter(object owner, string propertyName, object[] values, Attribute[] triggers)
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`values` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

`triggers` [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)\[\]

### <a id="VM_Models_Pre_LinkOwnerDestroyAttribute_BeforeSetter_System_String_"></a> BeforeSetter\(string\)

```csharp
[Advice(Kind.Before, Targets = Target.AnyAccess|Target.Setter)]
public override void BeforeSetter(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_LinkOwnerDestroyAttribute_InitializeProperty_System_Object_System_Collections_Generic_IEnumerable_System_Reflection_PropertyInfo__"></a> InitializeProperty\(object, IEnumerable<PropertyInfo\>\)

```csharp
protected override void InitializeProperty(object owner, IEnumerable<PropertyInfo> propertyInfos)
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyInfos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo)\>

