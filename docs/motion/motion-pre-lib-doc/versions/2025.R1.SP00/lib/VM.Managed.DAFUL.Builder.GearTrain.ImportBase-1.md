#  Class ImportBase<T\>

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public abstract class ImportBase<T> : BuilderSymmetric<T>, IBuilder where T : ObjectBase, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<T\> ← 
BuilderSymmetric<T\> ← 
[ImportBase<T\>](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md)

#### Implements

IBuilder

#### Inherited Members

BuilderSymmetric<T\>.Build\(Document\), 
BuilderSymmetric<T\>.Symmetric, 
BuilderSymmetric<T\>.CurrentSymmetric, 
BuilderBase<T\>.m\_bSuccess, 
BuilderBase<T\>.Build\(Document\), 
BuilderBase<T\>.Build\(Document, List<string\>\), 
BuilderBase<T\>.Validate\(IList<string\>\), 
BuilderBase<T\>.Success\(\), 
BuilderBase<T\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<T\>.OnFinalBuild\(string, Document\), 
BuilderBase<T\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<T\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<T\>.Parameters, 
BuilderBase<T\>.AddToDoc, 
BuilderBase<T\>.UseChangedObject, 
BuilderBase<T\>.SetPointKey, 
BuilderBase<T\>.BuildObject, 
BuilderBase<T\>.BuildDocument, 
BuilderBase<T\>.UseInterface, 
BuilderBase<T\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1__ctor"></a> ImportBase\(\)

```csharp
protected ImportBase()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_m_meshDoc"></a> m\_meshDoc

```csharp
protected Document m_meshDoc
```

#### Field Value

 Document

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_m_objExtraParam"></a> m\_objExtraParam

```csharp
public object m_objExtraParam
```

#### Field Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_AssemblyFileName"></a> AssemblyFileName

```csharp
protected virtual string AssemblyFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_CreatedFilePath"></a> CreatedFilePath

```csharp
public string CreatedFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_DocumentName"></a> DocumentName

```csharp
protected virtual string DocumentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_ExtensionName"></a> ExtensionName

```csharp
protected virtual string ExtensionName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_AddNewReference_VM_Managed_ObjectBase_"></a> AddNewReference\(ObjectBase\)

```csharp
protected void AddNewReference(ObjectBase objectBase)
```

#### Parameters

`objectBase` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_CreateAssemble_VM_Managed_InstanceContainer_VM_Managed_Document_"></a> CreateAssemble\(InstanceContainer, Document\)

```csharp
protected void CreateAssemble(InstanceContainer instCon, Document doc)
```

#### Parameters

`instCon` InstanceContainer

`doc` Document

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_CreateAssembleCore_VM_Managed_Document_"></a> CreateAssembleCore\(Document\)

```csharp
protected virtual void CreateAssembleCore(Document housingDesigner)
```

#### Parameters

`housingDesigner` Document

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ImportBase_1_OnAddEntityFromMeshDoc"></a> OnAddEntityFromMeshDoc

```csharp
public event ImportBase<T>.AddEntityFromMeshDoc OnAddEntityFromMeshDoc
```

#### Event Type

 [ImportBase](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.md)<T\>.[AddEntityFromMeshDoc](VM.Managed.DAFUL.Builder.GearTrain.ImportBase\-1.AddEntityFromMeshDoc.md)

