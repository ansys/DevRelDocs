# Interface IOpenDesigner
<a id="VM_Managed_IOpenDesigner"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the open designer.

```csharp
public interface IOpenDesigner
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IOpenDesigner_FilePath"></a> FilePath

Gets the file path.

```csharp
string FilePath { get; }
```

#### Property Value

 string

### <a id="VM_Managed_IOpenDesigner_TargetBody"></a> TargetBody

Gets the target body.

```csharp
ObjectBase[] TargetBody { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### <a id="VM_Managed_IOpenDesigner_TemplateFilePath"></a> TemplateFilePath

Gets the template file path.

```csharp
string TemplateFilePath { get; }
```

#### Property Value

 string

### <a id="VM_Managed_IOpenDesigner_TypeFileName"></a> TypeFileName

Gets the name of the type file.

```csharp
string TypeFileName { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_IOpenDesigner_FindBody_VM_Managed_ObjectBase_"></a> FindBody\(ObjectBase\)

Finds the body form CAD body.

```csharp
ObjectBase FindBody(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The CAD body.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The body such as solid body, assembled body.

### <a id="VM_Managed_IOpenDesigner_PostOpenDoc_VM_Managed_Document_"></a> PostOpenDoc\(Document\)

Post open document.

```csharp
void PostOpenDoc(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The hidden document.

### <a id="VM_Managed_IOpenDesigner_SetCustomFilterEvent_System_Object_"></a> SetCustomFilterEvent\(object\)

Set Custom Filtering Event.

```csharp
void SetCustomFilterEvent(object picker)
```

#### Parameters

`picker` object

The picker.

### <a id="VM_Managed_IOpenDesigner_SetDataToDesignDoc_System_Boolean_"></a> SetDataToDesignDoc\(bool\)

Sets the data to design document.

```csharp
Document SetDataToDesignDoc(bool bRecord)
```

#### Parameters

`bRecord` bool

Is recording for journal.

#### Returns

 [Document](VM.Managed.Document.md)

The Hidden Document

