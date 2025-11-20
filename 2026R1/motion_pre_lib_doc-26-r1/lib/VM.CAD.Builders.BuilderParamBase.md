# Class BuilderParamBase
<a id="VM_CAD_Builders_BuilderParamBase"></a>

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

This class represents abstracts of bulider parameters

```csharp
public abstract class BuilderParamBase
```

#### Inheritance

object ← 
[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md)

#### Derived

[BuilderParamColorGeom](VM.CAD.Builders.BuilderParamColorGeom.md), 
[BuilderParamCopy](VM.CAD.Builders.BuilderParamCopy.md), 
[BuilderParamSheetThicken](VM.CAD.Builders.BuilderParamSheetThicken.md), 
[BuilderParamUserDefined](VM.CAD.Builders.BuilderParamUserDefined.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Builders_BuilderParamBase__ctor"></a> BuilderParamBase\(\)

Initializes a new instance of the <xref href="VM.CAD.Builders.BuilderParamBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected BuilderParamBase()
```

## Properties

### <a id="VM_CAD_Builders_BuilderParamBase_Key"></a> Key

Gets or sets the key.

```csharp
public KeyInfo Key { get; set; }
```

#### Property Value

 [KeyInfo](VM.CAD.Builders.KeyInfo.md)

### <a id="VM_CAD_Builders_BuilderParamBase_Transparency"></a> Transparency

Gets or sets the transparency information.

```csharp
public TransparencyInfo Transparency { get; set; }
```

#### Property Value

 [TransparencyInfo](VM.CAD.Builders.TransparencyInfo.md)

### <a id="VM_CAD_Builders_BuilderParamBase_TypeName"></a> TypeName

Gets or sets the type name.

```csharp
public string TypeName { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_CAD_Builders_BuilderParamBase_FinalizeParameter"></a> FinalizeParameter\(\)

Finalize additional parameter setup.

```csharp
public virtual void FinalizeParameter()
```

### <a id="VM_CAD_Builders_BuilderParamBase_SetTypeName"></a> SetTypeName\(\)

Set type name based on type of builder parameter.

```csharp
protected void SetTypeName()
```

### <a id="VM_CAD_Builders_BuilderParamBase_ToXmlString"></a> ToXmlString\(\)

Generates xml string of the builder parameter.

```csharp
public virtual string ToXmlString()
```

#### Returns

 string

The builder parameter xml string.

