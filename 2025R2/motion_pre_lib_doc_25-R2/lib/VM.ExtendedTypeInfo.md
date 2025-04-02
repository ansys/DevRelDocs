#  Class ExtendedTypeInfo

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public class ExtendedTypeInfo : ExtendedMemberInfo<TypeInfo>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExtendedMemberInfo<TypeInfo\>](VM.ExtendedMemberInfo\-1.md) ← 
[ExtendedTypeInfo](VM.ExtendedTypeInfo.md)

#### Inherited Members

[ExtendedMemberInfo<TypeInfo\>.HasAttribute<TAttribute\>\(\)](VM.ExtendedMemberInfo\-1.md\#VM\_ExtendedMemberInfo\_1\_HasAttribute\_\_1), 
[ExtendedMemberInfo<TypeInfo\>.TryGetAttributeInstance<TAttribute\>\(out TAttribute\)](VM.ExtendedMemberInfo\-1.md\#VM\_ExtendedMemberInfo\_1\_TryGetAttributeInstance\_\_1\_\_\_0\_\_), 
[ExtendedMemberInfo<TypeInfo\>.Info](VM.ExtendedMemberInfo\-1.md\#VM\_ExtendedMemberInfo\_1\_Info)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_ExtendedTypeInfo__ctor_System_Reflection_TypeInfo_"></a> ExtendedTypeInfo\(TypeInfo\)

```csharp
public ExtendedTypeInfo(TypeInfo type)
```

#### Parameters

`type` [TypeInfo](https://learn.microsoft.com/dotnet/api/system.reflection.typeinfo)

## Properties

### <a id="VM_ExtendedTypeInfo_Type"></a> Type

```csharp
public Type Type { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_ExtendedTypeInfo_TypeInfo"></a> TypeInfo

```csharp
public TypeInfo TypeInfo { get; }
```

#### Property Value

 [TypeInfo](https://learn.microsoft.com/dotnet/api/system.reflection.typeinfo)

## Methods

### <a id="VM_ExtendedTypeInfo_AddOnChangedMethod_System_String_System_Action_System_Object__"></a> AddOnChangedMethod\(string, Action<object\>\)

```csharp
public void AddOnChangedMethod(string propertyName, Action<object> onChanged)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`onChanged` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="VM_ExtendedTypeInfo_TryGetOnChangedMethod_System_String_System_Action_System_Object___"></a> TryGetOnChangedMethod\(string, out Action<object\>\)

```csharp
public bool TryGetOnChangedMethod(string propertyName, out Action<object> onChanged)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`onChanged` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

