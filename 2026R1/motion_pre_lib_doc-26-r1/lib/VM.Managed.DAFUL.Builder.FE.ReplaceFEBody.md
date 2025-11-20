# Class ReplaceFEBody
<a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody"></a>

Namespace: [VM.Managed.DAFUL.Builder.FE](VM.Managed.DAFUL.Builder.FE.md)  
Assembly: VMBldFE.dll  

```csharp
public class ReplaceFEBody : IBuilder
```

#### Inheritance

object ← 
[ReplaceFEBody](VM.Managed.DAFUL.Builder.FE.ReplaceFEBody.md)

#### Implements

IBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody__ctor"></a> ReplaceFEBody\(\)

```csharp
public ReplaceFEBody()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_m_bSuccess"></a> m\_bSuccess

```csharp
protected bool m_bSuccess
```

#### Field Value

 bool

## Properties

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_AllowMulti"></a> AllowMulti

```csharp
public bool AllowMulti { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_BuildObject"></a> BuildObject

```csharp
public ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_FEBody"></a> FEBody

```csharp
public NodalBody FEBody { get; }
```

#### Property Value

 NodalBody

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_HideRemoveMessage"></a> HideRemoveMessage

```csharp
public bool HideRemoveMessage { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_Parameters"></a> Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 [PickedResult](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/PickedResult.cs)\[\]

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_PropertyFilePath"></a> PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_Build_VM_Managed_Document_"></a> Build\(Document\)

```csharp
public void Build(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_Build_VM_Managed_Document_System_Collections_Generic_List_System_String__"></a> Build\(Document, List<string\>\)

```csharp
public void Build(Document docToAdd, List<string> lstSetPointKeys)
```

#### Parameters

`docToAdd` Document

`lstSetPointKeys` List<string\>

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_BuildImpl_VM_Managed_Document_"></a> BuildImpl\(Document\)

```csharp
public virtual void BuildImpl(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_FE_ReplaceFEBody_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` IList<string\>

#### Returns

 bool

