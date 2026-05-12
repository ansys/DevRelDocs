#  Class ImportMesh

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class ImportMesh : ImportBase<HousingNodalBody>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<HousingNodalBody\> ← 
BuilderSymmetric<HousingNodalBody\> ← 
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
BuilderSymmetric<HousingNodalBody\>.Build\(Document\), 
BuilderSymmetric<HousingNodalBody\>.Symmetric, 
BuilderSymmetric<HousingNodalBody\>.CurrentSymmetric, 
BuilderBase<HousingNodalBody\>.m\_bSuccess, 
BuilderBase<HousingNodalBody\>.Build\(Document\), 
BuilderBase<HousingNodalBody\>.Build\(Document, List<string\>\), 
BuilderBase<HousingNodalBody\>.Validate\(IList<string\>\), 
BuilderBase<HousingNodalBody\>.Success\(\), 
BuilderBase<HousingNodalBody\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<HousingNodalBody\>.OnFinalBuild\(string, Document\), 
BuilderBase<HousingNodalBody\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<HousingNodalBody\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<HousingNodalBody\>.Parameters, 
BuilderBase<HousingNodalBody\>.AddToDoc, 
BuilderBase<HousingNodalBody\>.UseChangedObject, 
BuilderBase<HousingNodalBody\>.SetPointKey, 
BuilderBase<HousingNodalBody\>.BuildObject, 
BuilderBase<HousingNodalBody\>.BuildDocument, 
BuilderBase<HousingNodalBody\>.UseInterface, 
BuilderBase<HousingNodalBody\>.ErrorMessage

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

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_DocumentName"></a> DocumentName

```csharp
protected override string DocumentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_ExtensionName"></a> ExtensionName

```csharp
protected override string ExtensionName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_FileName"></a> FileName

```csharp
public string[] FileName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportMesh_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

