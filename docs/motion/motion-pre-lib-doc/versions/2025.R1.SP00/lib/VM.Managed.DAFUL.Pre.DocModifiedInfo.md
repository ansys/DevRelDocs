#  Class DocModifiedInfo

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the document modified information.

```csharp
public abstract class DocModifiedInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DocModifiedInfo](VM.Managed.DAFUL.Pre.DocModifiedInfo.md)

#### Derived

[DocModifiedInfoFileGroupDocument<T\>](VM.Managed.DAFUL.Pre.DocModifiedInfoFileGroupDocument\-1.md), 
[DocModifiedInfoVMDocument](VM.Managed.DAFUL.Pre.DocModifiedInfoVMDocument.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfo__ctor"></a> DocModifiedInfo\(\)

```csharp
protected DocModifiedInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfo_FilePath"></a> FilePath

Gets the file path.

```csharp
public abstract string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfo_Status"></a> Status

Gets the status.

```csharp
public DocModifiedInfo.FileStatus Status { get; }
```

#### Property Value

 [DocModifiedInfo](VM.Managed.DAFUL.Pre.DocModifiedInfo.md).[FileStatus](VM.Managed.DAFUL.Pre.DocModifiedInfo.FileStatus.md)

## Methods

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfo_Cleanup"></a> Cleanup\(\)

Cleanups this instance.

```csharp
public virtual void Cleanup()
```

### <a id="VM_Managed_DAFUL_Pre_DocModifiedInfo_DocumentSaved"></a> DocumentSaved\(\)

Documents the saved.

```csharp
public void DocumentSaved()
```

