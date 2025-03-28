# Class PropertyItem

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public class PropertyItem : MemberItem<PropertyDescriptor>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[MemberItem<PropertyDescriptor\>](VM.MemberItem\-1.md) ??
[PropertyItem](VM.PropertyItem.md)

#### Inherited Members

[MemberItem<PropertyDescriptor\>.HasAttribute<T\>\(\)](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_HasAttribute\_\_1), 
[MemberItem<PropertyDescriptor\>.TryGetAttributeInstance<T\>\(out T\)](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_TryGetAttributeInstance\_\_1\_\_\_0\_\_), 
[MemberItem<PropertyDescriptor\>.Attributes](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_Attributes), 
[MemberItem<PropertyDescriptor\>.MemberDescriptor](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_MemberDescriptor)

## Constructors

### PropertyItem\(PropertyDescriptor\)

```python
public PropertyItem(PropertyDescriptor propertyDescriptor)
```

#### Parameters

`propertyDescriptor` [PropertyDescriptor](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertydescriptor)

## Properties

### DisplayName

```python
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsBrowsable

```python
public bool IsBrowsable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReadOnly

```python
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

```python
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PropertyDescriptor

```python
public PropertyDescriptor PropertyDescriptor { get; }
```

#### Property Value

 [PropertyDescriptor](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertydescriptor)

### PropertyType

```python
public Type PropertyType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### TypeConverter

```python
public TypeConverter TypeConverter { get; }
```

#### Property Value

 [TypeConverter](https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter)

## Methods

### Is\(Type\)

```python
public bool Is(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ToString\(\)

```python
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


