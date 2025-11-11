# Class ImportPart
<a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart"></a>

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class ImportPart : ImportBase<AssembledBody>, IBuilder
```

#### Inheritance

object ← 
[BuilderBase<AssembledBody\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderSymmetric<AssembledBody\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[ImportBase<AssembledBody\>](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md) ← 
[ImportPart](VM.Managed.DAFUL.Builder.GearTrain.ImportPart.md)

#### Implements

IBuilder

#### Inherited Members

[ImportBase<AssembledBody\>.m\_objExtraParam](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_m\_objExtraParam), 
[ImportBase<AssembledBody\>.m\_meshDoc](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_m\_meshDoc), 
[ImportBase<AssembledBody\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[ImportBase<AssembledBody\>.CreateAssemble\(InstanceContainer, Document\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_CreateAssemble\_VM\_Managed\_InstanceContainer\_VM\_Managed\_Document\_), 
[ImportBase<AssembledBody\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[ImportBase<AssembledBody\>.CreateAssembleCore\(Document\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_CreateAssembleCore\_VM\_Managed\_Document\_), 
[ImportBase<AssembledBody\>.AddNewReference\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_AddNewReference\_VM\_Managed\_ObjectBase\_), 
[ImportBase<AssembledBody\>.AddToDoc](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_AddToDoc), 
[ImportBase<AssembledBody\>.DocumentName](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_DocumentName), 
[ImportBase<AssembledBody\>.ExtensionName](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_ExtensionName), 
[ImportBase<AssembledBody\>.AssemblyFileName](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_AssemblyFileName), 
[ImportBase<AssembledBody\>.CreatedFilePath](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_CreatedFilePath), 
[ImportBase<AssembledBody\>.OnAddEntityFromMeshDoc](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_OnAddEntityFromMeshDoc), 
[BuilderSymmetric<AssembledBody\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<AssembledBody\>.Symmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<AssembledBody\>.CurrentSymmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.m\_bSuccess](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.Build\(Document, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.Validate\(IList<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.Success\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.OnFinalBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.OnObjectChangeBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.Parameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.UseChangedObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.SetPointKey](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.BuildDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.UseInterface](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<AssembledBody\>.ErrorMessage](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart__ctor"></a> ImportPart\(\)

```csharp
public ImportPart()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_AssemblyFileName"></a> AssemblyFileName

```csharp
protected override string AssemblyFileName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_DocumentName"></a> DocumentName

```csharp
protected override string DocumentName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_ExtensionName"></a> ExtensionName

```csharp
protected override string ExtensionName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_FileName"></a> FileName

```csharp
public string[] FileName { get; set; }
```

#### Property Value

 string\[\]

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_Healing"></a> Healing

```csharp
public bool Healing { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 string\[\]

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_PropertyFilePath"></a> PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_ResultType"></a> ResultType

```csharp
public string ResultType { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_UnitType"></a> UnitType

```csharp
public Document3D.CadImportUnitType UnitType { get; set; }
```

#### Property Value

 Document3D.CadImportUnitType

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_CreateAssembleCore_VM_Managed_Document_"></a> CreateAssembleCore\(Document\)

```csharp
protected override void CreateAssembleCore(Document meshDoc)
```

#### Parameters

`meshDoc` Document

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_ImportCAD_VM_Managed_DAFUL_PartDocument_"></a> ImportCAD\(PartDocument\)

```csharp
public void ImportCAD(PartDocument docToAdd)
```

#### Parameters

`docToAdd` [PartDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartDocument.cs)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportPart_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 bool

