#  Class DocModifiedInfoVMDocument

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the document modified information for VM document.

```csharp
public class DocModifiedInfoVMDocument : DocModifiedInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DocModifiedInfo](VM.Managed.DAFUL.Pre.DocModifiedInfo.md) ← 
[DocModifiedInfoVMDocument](VM.Managed.DAFUL.Pre.DocModifiedInfoVMDocument.md)

#### Inherited Members

[DocModifiedInfo.DocumentSaved\(\)](VM.Managed.DAFUL.Pre.DocModifiedInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocModifiedInfo\_DocumentSaved), 
[DocModifiedInfo.Cleanup\(\)](VM.Managed.DAFUL.Pre.DocModifiedInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocModifiedInfo\_Cleanup), 
[DocModifiedInfo.FilePath](VM.Managed.DAFUL.Pre.DocModifiedInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocModifiedInfo\_FilePath), 
[DocModifiedInfo.Status](VM.Managed.DAFUL.Pre.DocModifiedInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocModifiedInfo\_Status)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoVMDocument__ctor_VM_Managed_Document_"></a> DocModifiedInfoVMDocument\(Document\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.DocModifiedInfoVMDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DocModifiedInfoVMDocument(Document doc)
```

#### Parameters

`doc` Document

The document.

## Properties

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoVMDocument_DependentDocuments"></a> DependentDocuments

Gets or sets the dependent documents.

```csharp
public List<Document> DependentDocuments { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Document\>

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoVMDocument_Document"></a> Document

Gets or sets the document.

```csharp
public Document Document { get; set; }
```

#### Property Value

 Document

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoVMDocument_FilePath"></a> FilePath

Gets the file path.

```csharp
public override string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoVMDocument_Cleanup"></a> Cleanup\(\)

Cleanups this instance.

```csharp
public override void Cleanup()
```

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoVMDocument_OnDependentAdded_System_Object_VM_Managed_DependentDocEventArgs_"></a> OnDependentAdded\(object, DependentDocEventArgs\)

Called when [dependent added].

```csharp
public void OnDependentAdded(object o, DependentDocEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`args` DependentDocEventArgs

The <xref href="VM.Managed.DependentDocEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoVMDocument_OnDependentRemoved_System_Object_VM_Managed_DependentDocEventArgs_"></a> OnDependentRemoved\(object, DependentDocEventArgs\)

Called when [dependent removed].

```csharp
public void OnDependentRemoved(object o, DependentDocEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`args` DependentDocEventArgs

The <xref href="VM.Managed.DependentDocEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

