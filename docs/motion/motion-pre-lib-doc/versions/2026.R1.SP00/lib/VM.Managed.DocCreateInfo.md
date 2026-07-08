# Class DocCreateInfo
<a id="VM_Managed_DocCreateInfo"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This base class is to represent the document create information.

```csharp
public abstract class DocCreateInfo
```

#### Inheritance

object ← 
[DocCreateInfo](VM.Managed.DocCreateInfo.md)

#### Derived

[ControlDocCreateInfo](VM.Managed.ControlDocCreateInfo.md), 
[DocCreate3DInfo](VM.Managed.DocCreate3DInfo.md), 
[DocFromTemplateInfo](VM.Managed.DocFromTemplateInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DocCreateInfo__ctor"></a> DocCreateInfo\(\)

```csharp
public DocCreateInfo()
```

## Properties

### <a id="VM_Managed_DocCreateInfo_ActiveMode"></a> ActiveMode

Gets or sets the active mode.

```csharp
public string ActiveMode { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DocCreateInfo_DocumentName"></a> DocumentName

Gets or sets the document name.

```csharp
public virtual string DocumentName { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DocCreateInfo_KernelLengthUnit"></a> KernelLengthUnit

Gets or sets the kernel length unit.

```csharp
public string KernelLengthUnit { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DocCreateInfo_ModeChangeOperation"></a> ModeChangeOperation

Gets or sets the operation type name for mode changing.

```csharp
public string ModeChangeOperation { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DocCreateInfo_Unit"></a> Unit

Gets or sets the document unit.

```csharp
public Unit Unit { get; set; }
```

#### Property Value

 Unit

