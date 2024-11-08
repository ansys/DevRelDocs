#  Class ExtendedMemberInfo<T\>

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TAttribute` 

### <a id="VM_ExtendedMemberInfo_1_TryGetAttributeInstance__1___0__"></a> TryGetAttributeInstance<TAttribute\>\(out TAttribute\)

```csharp
public bool TryGetAttributeInstance<TAttribute>(out TAttribute attribute) where TAttribute : Attribute
```

#### Parameters

`attribute` TAttribute

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TAttribute` 

