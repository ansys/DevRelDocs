#  Class MemberItem<TDescriptor\>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public abstract class MemberItem<TDescriptor> where TDescriptor : MemberDescriptor
```

#### Type Parameters

`TDescriptor` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MemberItem<TDescriptor\>](VM.MemberItem\-1.md)

## Constructors

### <a id="VM_MemberItem_1__ctor__0_"></a> MemberItem\(TDescriptor\)

```python
protected MemberItem(TDescriptor memberDescriptor)
```

#### Parameters

`memberDescriptor` TDescriptor

## Properties

### <a id="VM_MemberItem_1_Attributes"></a> Attributes

```python
public IEnumerable<Attribute> Attributes { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)\>

### <a id="VM_MemberItem_1_MemberDescriptor"></a> MemberDescriptor

```python
protected TDescriptor MemberDescriptor { get; }
```

#### Property Value

 TDescriptor

## Methods

### <a id="VM_MemberItem_1_HasAttribute__1"></a> HasAttribute<T\>\(\)

```python
public bool HasAttribute<T>() where T : Attribute
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="VM_MemberItem_1_TryGetAttributeInstance__1___0__"></a> TryGetAttributeInstance<T\>\(out T\)

```python
public bool TryGetAttributeInstance<T>(out T attribute) where T : Attribute
```

#### Parameters

`attribute` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


