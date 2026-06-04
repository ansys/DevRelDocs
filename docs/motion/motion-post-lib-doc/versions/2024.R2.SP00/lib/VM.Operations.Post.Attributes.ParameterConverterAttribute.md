# Class ParameterConverterAttribute

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

## Constructors

### ParameterConverterAttribute\(Type, string\)

```csharp
public ParameterConverterAttribute(Type type, string method)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### Converter

```csharp
public ParameterConverter Converter { get; set; }
```

#### Property Value

 [ParameterConverter](VM.Operations.Post.Attributes.ParameterConverter.md)

## Methods

### Convert\(object\)

```csharp
public object Convert(object val)
```

#### Parameters

`val` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)


