# Class StepItemMetadataAttribute
<a id="VM_Models_StepItemMetadataAttribute"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
[MetadataAttribute]
[AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
public class StepItemMetadataAttribute : ExportAttribute, IStepItemMetadata
```

#### Inheritance

object ← 
Attribute ← 
ExportAttribute ← 
[StepItemMetadataAttribute](VM.Models.StepItemMetadataAttribute.md)

#### Implements

[IStepItemMetadata](VM.Models.IStepItemMetadata.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_StepItemMetadataAttribute__ctor_System_Type_"></a> StepItemMetadataAttribute\(Type\)

```csharp
public StepItemMetadataAttribute(Type stepType)
```

#### Parameters

`stepType` Type

## Properties

### <a id="VM_Models_StepItemMetadataAttribute_StepType"></a> StepType

```csharp
public Type StepType { get; }
```

#### Property Value

 Type

