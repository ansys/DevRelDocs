# Class CADExportBody
<a id="VM_Managed_DAFUL_Builder_CADExportBody"></a>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public class CADExportBody : CADExportBase, IBuilder
```

#### Inheritance

object ← 
[CADExportBase](VM.Managed.DAFUL.Builder.CADExportBase.md) ← 
[CADExportBody](VM.Managed.DAFUL.Builder.CADExportBody.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Inherited Members

[CADExportBase.m\_bSuccess](VM.Managed.DAFUL.Builder.CADExportBase.md\#VM\_Managed\_DAFUL\_Builder\_CADExportBase\_m\_bSuccess), 
[CADExportBase.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.CADExportBase.md\#VM\_Managed\_DAFUL\_Builder\_CADExportBase\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[CADExportBase.Build\(Document\)](VM.Managed.DAFUL.Builder.CADExportBase.md\#VM\_Managed\_DAFUL\_Builder\_CADExportBase\_Build\_VM\_Managed\_Document\_), 
[CADExportBase.BuildImpl\(Document\)](VM.Managed.DAFUL.Builder.CADExportBase.md\#VM\_Managed\_DAFUL\_Builder\_CADExportBase\_BuildImpl\_VM\_Managed\_Document\_), 
[CADExportBase.Build\(Document, List<string\>\)](VM.Managed.DAFUL.Builder.CADExportBase.md\#VM\_Managed\_DAFUL\_Builder\_CADExportBase\_Build\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[CADExportBase.Success\(\)](VM.Managed.DAFUL.Builder.CADExportBase.md\#VM\_Managed\_DAFUL\_Builder\_CADExportBase\_Success), 
[CADExportBase.PropertyFilePath](VM.Managed.DAFUL.Builder.CADExportBase.md\#VM\_Managed\_DAFUL\_Builder\_CADExportBase\_PropertyFilePath), 
[CADExportBase.BuildObject](VM.Managed.DAFUL.Builder.CADExportBase.md\#VM\_Managed\_DAFUL\_Builder\_CADExportBase\_BuildObject)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_CADExportBody__ctor"></a> CADExportBody\(\)

```csharp
public CADExportBody()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_CADExportBody_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 string\[\]

### <a id="VM_Managed_DAFUL_Builder_CADExportBody_ObjectNames"></a> ObjectNames

```csharp
public string[] ObjectNames { get; set; }
```

#### Property Value

 string\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_CADExportBody_BuildImpl_VM_Managed_Document_"></a> BuildImpl\(Document\)

```csharp
public override void BuildImpl(Document docToAdd)
```

#### Parameters

`docToAdd` Document

