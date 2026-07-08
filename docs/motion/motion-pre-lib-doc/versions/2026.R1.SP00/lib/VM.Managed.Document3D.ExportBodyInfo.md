# Class Document3D.ExportBodyInfo
<a id="VM_Managed_Document3D_ExportBodyInfo"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the information about export body.

```csharp
public class Document3D.ExportBodyInfo
```

#### Inheritance

object ← 
[Document3D.ExportBodyInfo](VM.Managed.Document3D.ExportBodyInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Document3D_ExportBodyInfo__ctor_VM_Managed_CAD_Body_VM_Managed_TMatrix_System_Double_System_String_"></a> ExportBodyInfo\(Body, TMatrix, double, string\)

Initializes a new instance of the <xref href="VM.Managed.Document3D.ExportBodyInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ExportBodyInfo(Body body, TMatrix transform, double dLengthFactor, string strName)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

The body.

`transform` [TMatrix](VM.Managed.TMatrix.md)

The transform.

`dLengthFactor` double

The length factor.

`strName` string

The name.

### <a id="VM_Managed_Document3D_ExportBodyInfo__ctor_VM_Managed_CAD_Body_VM_Managed_TMatrix_System_Double_"></a> ExportBodyInfo\(Body, TMatrix, double\)

Initializes a new instance of the <xref href="VM.Managed.Document3D.ExportBodyInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ExportBodyInfo(Body body, TMatrix transform, double dLengthFactor)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

The body.

`transform` [TMatrix](VM.Managed.TMatrix.md)

The transform.

`dLengthFactor` double

The length factor.

### <a id="VM_Managed_Document3D_ExportBodyInfo__ctor_VM_Managed_CAD_Body_VM_Managed_TMatrix_"></a> ExportBodyInfo\(Body, TMatrix\)

Initializes a new instance of the <xref href="VM.Managed.Document3D.ExportBodyInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ExportBodyInfo(Body body, TMatrix transform)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

The body.

`transform` [TMatrix](VM.Managed.TMatrix.md)

The transform.

## Properties

### <a id="VM_Managed_Document3D_ExportBodyInfo_Body"></a> Body

Gets or sets the CAD Body.

```csharp
public Body Body { get; set; }
```

#### Property Value

 [Body](VM.Managed.CAD.Body.md)

### <a id="VM_Managed_Document3D_ExportBodyInfo_LengthFactor"></a> LengthFactor

```csharp
public double LengthFactor { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_Document3D_ExportBodyInfo_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_Document3D_ExportBodyInfo_Transform"></a> Transform

Gets or sets the transform matrix.

```csharp
public TMatrix Transform { get; set; }
```

#### Property Value

 [TMatrix](VM.Managed.TMatrix.md)

