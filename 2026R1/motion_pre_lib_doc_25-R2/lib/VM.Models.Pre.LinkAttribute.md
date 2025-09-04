#  Class LinkAttribute

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.Aspects.dll  

```csharp
[Aspect(Scope.PerInstance)]
[AttributeUsage(AttributeTargets.Property, AllowMultiple = false, Inherited = true)]
[Injection(typeof(LinkAttribute))]
[Mixin(typeof(ILinkOwner))]
public class LinkAttribute : LinkBaseAttribute, ILinkOwner, ILinkAttribute
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
[LinkBaseAttribute](VM.Models.Pre.LinkBaseAttribute.md) ← 
[LinkAttribute](VM.Models.Pre.LinkAttribute.md)

#### Implements

ILinkOwner, 
ILinkAttribute

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

### <a id="VM_Models_Pre_LinkAttribute__ctor"></a> LinkAttribute\(\)

```csharp
public LinkAttribute()
```

### <a id="VM_Models_Pre_LinkAttribute__ctor_System_Boolean_"></a> LinkAttribute\(bool\)

```csharp
public LinkAttribute(bool isChild = false)
```

#### Parameters

`isChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Fields

### <a id="VM_Models_Pre_LinkAttribute___a__instance"></a> \_\_a$\_instance

```csharp
public static readonly LinkAttribute __a$_instance
```

#### Field Value

 [LinkAttribute](VM.Models.Pre.LinkAttribute.md)

## Properties

### <a id="VM_Models_Pre_LinkAttribute_IsChild"></a> IsChild

Indicates this property is child or not.

```csharp
public bool? IsChild { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

## Methods

### <a id="VM_Models_Pre_LinkAttribute_AfterSetter_System_Object_System_Type_System_String_System_Object___System_Attribute___"></a> AfterSetter\(object, Type, string, object\[\], Attribute\[\]\)

```csharp
[Advice(Kind.After, Targets = Target.AnyAccess|Target.Setter)]
public virtual void AfterSetter(object owner, Type declaringType, string propertyName, object[] values, Attribute[] triggers)
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`declaringType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`values` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

`triggers` [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)\[\]

### <a id="VM_Models_Pre_LinkAttribute_BeforeSetter_System_Object_System_Type_System_String_System_Attribute___"></a> BeforeSetter\(object, Type, string, Attribute\[\]\)

```csharp
[Advice(Kind.Before, Targets = Target.AnyAccess|Target.Setter)]
public virtual void BeforeSetter(object owner, Type declaringType, string propertyName, Attribute[] triggers)
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`declaringType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`triggers` [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)\[\]

### <a id="VM_Models_Pre_LinkAttribute_InitializeProperty_System_Object_System_Collections_Generic_IEnumerable_System_Reflection_PropertyInfo__"></a> InitializeProperty\(object, IEnumerable<PropertyInfo\>\)

```csharp
protected override void InitializeProperty(object owner, IEnumerable<PropertyInfo> propertyInfos)
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyInfos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo)\>

