# Class CADReplace
<a id="VM_Managed_DAFUL_Builder_CADReplace"></a>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public class CADReplace : CADImport, IBuilder
```

#### Inheritance

object ← 
[CADImport](VM.Managed.DAFUL.Builder.CADImport.md) ← 
[CADReplace](VM.Managed.DAFUL.Builder.CADReplace.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Inherited Members

[CADImport.m\_bSuccess](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_m\_bSuccess), 
[CADImport.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[CADImport.Build\(Document\)](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_Build\_VM\_Managed\_Document\_), 
[CADImport.BuildImpl\(Document\)](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_BuildImpl\_VM\_Managed\_Document\_), 
[CADImport.Build\(Document, List<string\>\)](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_Build\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[CADImport.Success\(\)](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_Success), 
[CADImport.InputArray](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_InputArray), 
[CADImport.PropertyFilePath](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_PropertyFilePath), 
[CADImport.ResultType](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_ResultType), 
[CADImport.Healing](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_Healing), 
[CADImport.UnitType](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_UnitType), 
[CADImport.BuildObject](VM.Managed.DAFUL.Builder.CADImport.md\#VM\_Managed\_DAFUL\_Builder\_CADImport\_BuildObject)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_CADReplace__ctor"></a> CADReplace\(\)

```csharp
public CADReplace()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_CADReplace_Attribute"></a> Attribute

```csharp
public CADReplace.AttributeInfo Attribute { get; set; }
```

#### Property Value

 [CADReplace](VM.Managed.DAFUL.Builder.CADReplace.md).[AttributeInfo](VM.Managed.DAFUL.Builder.CADReplace.AttributeInfo.md)

## Methods

### <a id="VM_Managed_DAFUL_Builder_CADReplace_BuildImpl_VM_Managed_Document_"></a> BuildImpl\(Document\)

```csharp
public override void BuildImpl(Document docToAdd)
```

#### Parameters

`docToAdd` Document

