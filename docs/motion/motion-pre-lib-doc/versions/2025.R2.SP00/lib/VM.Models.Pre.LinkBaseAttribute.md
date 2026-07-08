#  Class LinkBaseAttribute

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.Aspects.dll  

```csharp
public abstract class LinkBaseAttribute : Attribute
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
[LinkBaseAttribute](VM.Models.Pre.LinkBaseAttribute.md)

#### Derived

[LinkAttribute](VM.Models.Pre.LinkAttribute.md), 
[LinkUpdateAttribute](VM.Models.Pre.LinkUpdateAttribute.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_LinkBaseAttribute__ctor"></a> LinkBaseAttribute\(\)

```csharp
protected LinkBaseAttribute()
```

## Properties

### <a id="VM_Models_Pre_LinkBaseAttribute_CacheItems"></a> CacheItems

```csharp
public IEnumerable CacheItems { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

### <a id="VM_Models_Pre_LinkBaseAttribute_IsCacheEmpty"></a> IsCacheEmpty

```csharp
public bool IsCacheEmpty { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Pre_LinkBaseAttribute_AddCache_System_String_System_IDisposable_"></a> AddCache\(string, IDisposable\)

```csharp
protected void AddCache(string propertyName, IDisposable subscriber)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`subscriber` [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

### <a id="VM_Models_Pre_LinkBaseAttribute_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_Models_Pre_LinkBaseAttribute_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected virtual void DisposeManagedResources()
```

### <a id="VM_Models_Pre_LinkBaseAttribute_Initialize_System_Object_"></a> Initialize\(object\)

```csharp
public void Initialize(object owner)
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Models_Pre_LinkBaseAttribute_InitializeProperty_System_Object_System_Collections_Generic_IEnumerable_System_Reflection_PropertyInfo__"></a> InitializeProperty\(object, IEnumerable<PropertyInfo\>\)

```csharp
protected abstract void InitializeProperty(object owner, IEnumerable<PropertyInfo> propertyInfos)
```

#### Parameters

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

`propertyInfos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo)\>

### <a id="VM_Models_Pre_LinkBaseAttribute_Unsubscribe_System_String_"></a> Unsubscribe\(string\)

```csharp
protected void Unsubscribe(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

