# Class BuilderParamUserDefined

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

User-defined builder paramter

```csharp
public class BuilderParamUserDefined : BuilderParamBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md) ← 
[BuilderParamUserDefined](VM.CAD.Builders.BuilderParamUserDefined.md)

#### Inherited Members

[BuilderParamBase.ToXmlString\(\)](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_ToXmlString), 
[BuilderParamBase.FinalizeParameter\(\)](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_FinalizeParameter), 
[BuilderParamBase.SetTypeName\(\)](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_SetTypeName), 
[BuilderParamBase.Key](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_Key), 
[BuilderParamBase.TypeName](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_TypeName), 
[BuilderParamBase.Transparency](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_Transparency)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### BuilderParamUserDefined\(\)

```csharp
public BuilderParamUserDefined()
```

## Properties

### BuildXml

The xml-description of the bulder

```csharp
public string BuildXml { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### ToXmlString\(\)

Generates xml string of the builder parameter.

```csharp
public override string ToXmlString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The builder parameter xml string.


