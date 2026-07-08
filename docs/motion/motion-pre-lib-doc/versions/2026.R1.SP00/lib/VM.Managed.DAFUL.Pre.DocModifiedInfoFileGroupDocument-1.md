# Class DocModifiedInfoFileGroupDocument<T\>
<a id="VM_Managed_DAFUL_Pre_DocModifiedInfoFileGroupDocument_1"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent document modified information for file group document.

```csharp
public abstract class DocModifiedInfoFileGroupDocument<T> : DocModifiedInfo where T : IFileGroup
```

#### Type Parameters

`T` 

#### Inheritance

object ← 
[DocModifiedInfo](VM.Managed.DAFUL.Pre.DocModifiedInfo.md) ← 
[DocModifiedInfoFileGroupDocument<T\>](VM.Managed.DAFUL.Pre.DocModifiedInfoFileGroupDocument\-1.md)

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

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoFileGroupDocument_1__ctor__0_"></a> DocModifiedInfoFileGroupDocument\(T\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.DocModifiedInfoFileGroupDocument%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected DocModifiedInfoFileGroupDocument(T grp)
```

#### Parameters

`grp` T

The group.

## Properties

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoFileGroupDocument_1_FilePath"></a> FilePath

Gets the file path.

```csharp
public override sealed string FilePath { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfoFileGroupDocument_1_Group"></a> Group

Gets or sets the group.

```csharp
protected T Group { get; set; }
```

#### Property Value

 T

