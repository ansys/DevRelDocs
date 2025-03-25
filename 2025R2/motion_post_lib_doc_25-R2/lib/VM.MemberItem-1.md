# Class MemberItem<TDescriptor\>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public abstract class MemberItem<TDescriptor> where TDescriptor : MemberDescriptor
```

#### Type Parameters

`TDescriptor` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[MemberItem<TDescriptor\>](VM.MemberItem\-1.md)

## Constructors

### MemberItem\(TDescriptor\)

```python
protected MemberItem(TDescriptor memberDescriptor)
```

#### Parameters

`memberDescriptor` TDescriptor

## Properties

### Attributes

```python
public IEnumerable<Attribute> Attributes { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)\>

### MemberDescriptor

```python
protected TDescriptor MemberDescriptor { get; }
```

#### Property Value

 TDescriptor

## Methods

### HasAttribute<T\>\(\)

```python
public bool HasAttribute<T>() where T : Attribute
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### TryGetAttributeInstance<T\>\(out T\)

```python
public bool TryGetAttributeInstance<T>(out T attribute) where T : Attribute
```

#### Parameters

`attribute` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


