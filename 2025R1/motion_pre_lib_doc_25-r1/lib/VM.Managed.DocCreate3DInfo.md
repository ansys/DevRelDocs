#  Class DocCreate3DInfo

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the 3D document information in document create information.

```csharp
public class DocCreate3DInfo : DocCreateInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DocCreateInfo](VM.Managed.DocCreateInfo.md) ← 
[DocCreate3DInfo](VM.Managed.DocCreate3DInfo.md)

#### Inherited Members

[DocCreateInfo.ModeChangeOperation](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_ModeChangeOperation), 
[DocCreateInfo.ActiveMode](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_ActiveMode), 
[DocCreateInfo.KernelLengthUnit](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_KernelLengthUnit), 
[DocCreateInfo.Unit](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_Unit), 
[DocCreateInfo.DocumentName](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_DocumentName)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DocCreate3DInfo__ctor"></a> DocCreate3DInfo\(\)

```csharp
public DocCreate3DInfo()
```

## Properties

### <a id="VM_Managed_DocCreate3DInfo_IconSize"></a> IconSize

Gets or sets the icon size.

```csharp
public virtual double IconSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DocCreate3DInfo_IsAdvancedMode"></a> IsAdvancedMode

Gets or sets a value indicating whether this instance is advanced mode.

```csharp
public bool IsAdvancedMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DocCreate3DInfo_SymmetricPlane"></a> SymmetricPlane

Gets or sets the symmetric plane.

```csharp
public Plane SymmetricPlane { get; set; }
```

#### Property Value

 Plane

### <a id="VM_Managed_DocCreate3DInfo_UseSymmetric"></a> UseSymmetric

Gets or sets a value indicating whether use symmetric option.

```csharp
public bool UseSymmetric { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

