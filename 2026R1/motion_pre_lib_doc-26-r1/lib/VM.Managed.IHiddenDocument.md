# Interface IHiddenDocument
<a id="VM_Managed_IHiddenDocument"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the hidden document.

```csharp
public interface IHiddenDocument
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IHiddenDocument_TargetDesign"></a> TargetDesign

Gets the target design entity.

```csharp
IOpenDesigner TargetDesign { get; }
```

#### Property Value

 [IOpenDesigner](VM.Managed.IOpenDesigner.md)

### <a id="VM_Managed_IHiddenDocument_TargetDocument"></a> TargetDocument

Gets the document of target.

```csharp
Document TargetDocument { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

## Methods

### <a id="VM_Managed_IHiddenDocument_Close"></a> Close\(\)

Close document.

```csharp
void Close()
```

