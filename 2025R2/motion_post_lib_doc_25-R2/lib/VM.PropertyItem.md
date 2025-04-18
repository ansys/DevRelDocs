#  Class PropertyItem

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public class PropertyItem : MemberItem<PropertyDescriptor>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MemberItem<PropertyDescriptor\>](VM.MemberItem\-1.md) ← 
[PropertyItem](VM.PropertyItem.md)

#### Inherited Members

[MemberItem<PropertyDescriptor\>.HasAttribute<T\>\(\)](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_HasAttribute\_\_1), 
[MemberItem<PropertyDescriptor\>.TryGetAttributeInstance<T\>\(out T\)](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_TryGetAttributeInstance\_\_1\_\_\_0\_\_), 
[MemberItem<PropertyDescriptor\>.Attributes](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_Attributes), 
[MemberItem<PropertyDescriptor\>.MemberDescriptor](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_MemberDescriptor)

## Constructors

### <a id="VM_PropertyItem__ctor_System_ComponentModel_PropertyDescriptor_"></a> PropertyItem\(PropertyDescriptor\)

```python
public PropertyItem(PropertyDescriptor propertyDescriptor)
```

#### Parameters

`propertyDescriptor` [PropertyDescriptor](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertydescriptor)

## Properties

### <a id="VM_PropertyItem_DisplayName"></a> DisplayName

```python
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_PropertyItem_IsBrowsable"></a> IsBrowsable

```python
public bool IsBrowsable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_PropertyItem_IsReadOnly"></a> IsReadOnly

```python
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_PropertyItem_Name"></a> Name

```python
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_PropertyItem_PropertyDescriptor"></a> PropertyDescriptor

```python
public PropertyDescriptor PropertyDescriptor { get; }
```

#### Property Value

 [PropertyDescriptor](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertydescriptor)

### <a id="VM_PropertyItem_PropertyType"></a> PropertyType

```python
public Type PropertyType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_PropertyItem_TypeConverter"></a> TypeConverter

```python
public TypeConverter TypeConverter { get; }
```

#### Property Value

 [TypeConverter](https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter)

## Methods

### <a id="VM_PropertyItem_Is_System_Type_"></a> Is\(Type\)

```python
public bool Is(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_PropertyItem_ToString"></a> ToString\(\)

```python
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


