# Class ImportMesh
<a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh"></a>

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class ImportMesh : ImportBase<HousingNodalBody>, IBuilder
```

#### Inheritance

object ← 
[BuilderBase<HousingNodalBody\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderSymmetric<HousingNodalBody\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[ImportBase<HousingNodalBody\>](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md) ← 
[ImportMesh](VM.Managed.DAFUL.Builder.GearTrain.ImportMesh.md)

#### Implements

IBuilder

#### Inherited Members

[ImportBase<HousingNodalBody\>.m\_objExtraParam](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_m\_objExtraParam), 
[ImportBase<HousingNodalBody\>.m\_meshDoc](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_m\_meshDoc), 
[ImportBase<HousingNodalBody\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[ImportBase<HousingNodalBody\>.CreateAssemble\(InstanceContainer, Document\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_CreateAssemble\_VM\_Managed\_InstanceContainer\_VM\_Managed\_Document\_), 
[ImportBase<HousingNodalBody\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[ImportBase<HousingNodalBody\>.CreateAssembleCore\(Document\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_CreateAssembleCore\_VM\_Managed\_Document\_), 
[ImportBase<HousingNodalBody\>.AddNewReference\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_AddNewReference\_VM\_Managed\_ObjectBase\_), 
[ImportBase<HousingNodalBody\>.AddToDoc](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_AddToDoc), 
[ImportBase<HousingNodalBody\>.DocumentName](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_DocumentName), 
[ImportBase<HousingNodalBody\>.ExtensionName](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_ExtensionName), 
[ImportBase<HousingNodalBody\>.AssemblyFileName](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_AssemblyFileName), 
[ImportBase<HousingNodalBody\>.CreatedFilePath](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_CreatedFilePath), 
[ImportBase<HousingNodalBody\>.OnAddEntityFromMeshDoc](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_ImportBase\_1\_OnAddEntityFromMeshDoc), 
[BuilderSymmetric<HousingNodalBody\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<HousingNodalBody\>.Symmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<HousingNodalBody\>.CurrentSymmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.m\_bSuccess](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.Build\(Document, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.Validate\(IList<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.Success\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.OnFinalBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.OnObjectChangeBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.Parameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.UseChangedObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.SetPointKey](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.BuildDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.UseInterface](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<HousingNodalBody\>.ErrorMessage](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh__ctor"></a> ImportMesh\(\)

```csharp
public ImportMesh()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_AssemblyFileName"></a> AssemblyFileName

```csharp
protected override string AssemblyFileName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_DocumentName"></a> DocumentName

```csharp
protected override string DocumentName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_ExtensionName"></a> ExtensionName

```csharp
protected override string ExtensionName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_FileName"></a> FileName

```csharp
public string[] FileName { get; set; }
```

#### Property Value

 string\[\]

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 string\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_CreateAssembleCore_VM_Managed_Document_"></a> CreateAssembleCore\(Document\)

```csharp
protected override void CreateAssembleCore(Document meshDoc)
```

#### Parameters

`meshDoc` Document

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` IList<string\>

#### Returns

 bool

