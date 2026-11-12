# Class PropertyItem
<a id="VM_PropertyItem"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public class PropertyItem : MemberItem<PropertyDescriptor>
```

#### Inheritance

object ← 
[MemberItem<PropertyDescriptor\>](VM.MemberItem\-1.md) ← 
[PropertyItem](VM.PropertyItem.md)

#### Inherited Members

[MemberItem<PropertyDescriptor\>.HasAttribute<T\>\(\)](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_HasAttribute\_\_1), 
[MemberItem<PropertyDescriptor\>.TryGetAttributeInstance<T\>\(out T\)](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_TryGetAttributeInstance\_\_1\_\_\_0\_\_), 
[MemberItem<PropertyDescriptor\>.Attributes](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_Attributes), 
[MemberItem<PropertyDescriptor\>.MemberDescriptor](VM.MemberItem\-1.md\#VM\_MemberItem\_1\_MemberDescriptor)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_PropertyItem__ctor_System_ComponentModel_PropertyDescriptor_"></a> PropertyItem\(PropertyDescriptor\)

```csharp
public PropertyItem(PropertyDescriptor propertyDescriptor)
```

#### Parameters

`propertyDescriptor` PropertyDescriptor

## Properties

### <a id="VM_PropertyItem_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 string

### <a id="VM_PropertyItem_IsBrowsable"></a> IsBrowsable

```csharp
public bool IsBrowsable { get; }
```

#### Property Value

 bool

### <a id="VM_PropertyItem_IsReadOnly"></a> IsReadOnly

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 bool

### <a id="VM_PropertyItem_Name"></a> Name

```csharp
public string Name { get; }
```

#### Property Value

 string

### <a id="VM_PropertyItem_PropertyDescriptor"></a> PropertyDescriptor

```csharp
public PropertyDescriptor PropertyDescriptor { get; }
```

#### Property Value

 PropertyDescriptor

### <a id="VM_PropertyItem_PropertyType"></a> PropertyType

```csharp
public Type PropertyType { get; }
```

#### Property Value

 Type

### <a id="VM_PropertyItem_TypeConverter"></a> TypeConverter

```csharp
public TypeConverter TypeConverter { get; }
```

#### Property Value

 TypeConverter

## Methods

### <a id="VM_PropertyItem_Is_System_Type_"></a> Is\(Type\)

```csharp
public bool Is(Type type)
```

#### Parameters

`type` Type

#### Returns

 bool

### <a id="VM_PropertyItem_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 string

