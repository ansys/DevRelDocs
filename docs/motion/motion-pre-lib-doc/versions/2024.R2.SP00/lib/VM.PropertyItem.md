# Class PropertyItem

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
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

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### PropertyItem\(PropertyDescriptor\)

```csharp
public PropertyItem(PropertyDescriptor propertyDescriptor)
```

#### Parameters

`propertyDescriptor` [PropertyDescriptor](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertydescriptor)

## Properties

### DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsBrowsable

```csharp
public bool IsBrowsable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReadOnly

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PropertyDescriptor

```csharp
public PropertyDescriptor PropertyDescriptor { get; }
```

#### Property Value

 [PropertyDescriptor](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertydescriptor)

### PropertyType

```csharp
public Type PropertyType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### TypeConverter

```csharp
public TypeConverter TypeConverter { get; }
```

#### Property Value

 [TypeConverter](https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter)

## Methods

### Is\(Type\)

```csharp
public bool Is(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


