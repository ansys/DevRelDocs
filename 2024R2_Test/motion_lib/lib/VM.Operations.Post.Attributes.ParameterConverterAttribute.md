# <a id="VM_Operations_Post_Attributes_ParameterConverterAttribute"></a> Class ParameterConverterAttribute

Namespace: [VM.Operations.Post.Attributes](VM.Operations.Post.Attributes.md)  
Assembly: VM.Operations.Post.dll  

```csharp
[AttributeUsage(AttributeTargets.Property)]
public class ParameterConverterAttribute : Attribute
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
[ParameterConverterAttribute](VM.Operations.Post.Attributes.ParameterConverterAttribute.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Operations_Post_Attributes_ParameterConverterAttribute__ctor_System_Type_System_String_"></a> ParameterConverterAttribute\(Type, string\)

```csharp
public ParameterConverterAttribute(Type type, string method)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Operations_Post_Attributes_ParameterConverterAttribute_Converter"></a> Converter

```csharp
public ParameterConverter Converter { get; set; }
```

#### Property Value

 [ParameterConverter](VM.Operations.Post.Attributes.ParameterConverter.md)

## Methods

### <a id="VM_Operations_Post_Attributes_ParameterConverterAttribute_Convert_System_Object_"></a> Convert\(object\)

```csharp
public object Convert(object val)
```

#### Parameters

`val` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

