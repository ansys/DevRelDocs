#  Class BuilderBase<T\>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public abstract class BuilderBase<T> : IBuilder where T : ObjectBase, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuilderBase<T\>](VM.Managed.DAFUL.Builder.BuilderBase\-1.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1__ctor"></a> BuilderBase\(\)

```csharp
protected BuilderBase()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_m_bSuccess"></a> m\_bSuccess

```csharp
protected bool m_bSuccess
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_AddToDoc"></a> AddToDoc

```csharp
protected virtual bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_BuildDocument"></a> BuildDocument

```csharp
protected Document BuildDocument { get; }
```

#### Property Value

 Document

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_BuildObject"></a> BuildObject

```csharp
public virtual ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_ErrorMessage"></a> ErrorMessage

```csharp
protected string ErrorMessage { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_Parameters"></a> Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)\[\]

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_SetPointKey"></a> SetPointKey

```csharp
protected List<SetPoint> SetPointKey { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SetPoint\>

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_UseChangedObject"></a> UseChangedObject

```csharp
protected virtual bool UseChangedObject { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_UseInterface"></a> UseInterface

```csharp
protected bool UseInterface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_Build_VM_Managed_Document_"></a> Build\(Document\)

```csharp
public virtual void Build(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_Build_VM_Managed_Document_System_Collections_Generic_List_System_String__"></a> Build\(Document, List<string\>\)

```csharp
public virtual void Build(Document docToAdd, List<string> lstSetPointKeys)
```

#### Parameters

`docToAdd` Document

`lstSetPointKeys` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_OnFinalBuild_System_String_VM_Managed_Document_"></a> OnFinalBuild\(string, Document\)

```csharp
protected virtual ObjectBase OnFinalBuild(string strObjName, Document doc)
```

#### Parameters

`strObjName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` Document

#### Returns

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_OnObjectChangeBuild_System_String_VM_Managed_Document_"></a> OnObjectChangeBuild\(string, Document\)

```csharp
protected virtual ObjectBase OnObjectChangeBuild(string strObjName, Document doc)
```

#### Parameters

`strObjName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` Document

#### Returns

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected virtual void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected virtual bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_BuilderBase_1_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public virtual bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

