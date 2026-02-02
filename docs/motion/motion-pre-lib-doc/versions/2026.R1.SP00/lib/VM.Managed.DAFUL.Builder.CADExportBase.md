# Class CADExportBase
<a id="VM_Managed_DAFUL_Builder_CADExportBase"></a>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public class CADExportBase : IBuilder
```

#### Inheritance

object ← 
[CADExportBase](VM.Managed.DAFUL.Builder.CADExportBase.md)

#### Derived

[CADExportBody](VM.Managed.DAFUL.Builder.CADExportBody.md), 
[CADExportFile](VM.Managed.DAFUL.Builder.CADExportFile.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_CADExportBase__ctor"></a> CADExportBase\(\)

```csharp
public CADExportBase()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_CADExportBase_m_bSuccess"></a> m\_bSuccess

```csharp
protected bool m_bSuccess
```

#### Field Value

 bool

## Properties

### <a id="VM_Managed_DAFUL_Builder_CADExportBase_BuildObject"></a> BuildObject

```csharp
public ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_CADExportBase_PropertyFilePath"></a> PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Builder_CADExportBase_Build_VM_Managed_Document_"></a> Build\(Document\)

```csharp
public void Build(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### <a id="VM_Managed_DAFUL_Builder_CADExportBase_Build_VM_Managed_Document_System_Collections_Generic_List_System_String__"></a> Build\(Document, List<string\>\)

```csharp
public void Build(Document docToAdd, List<string> lstSetPointKeys)
```

#### Parameters

`docToAdd` Document

`lstSetPointKeys` List<string\>

### <a id="VM_Managed_DAFUL_Builder_CADExportBase_BuildImpl_VM_Managed_Document_"></a> BuildImpl\(Document\)

```csharp
public virtual void BuildImpl(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### <a id="VM_Managed_DAFUL_Builder_CADExportBase_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_CADExportBase_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` IList<string\>

#### Returns

 bool

