# Class ExtractFaceSetBase
<a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase"></a>

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class ExtractFaceSetBase : IBuilder
```

#### Inheritance

object ← 
[ExtractFaceSetBase](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md)

#### Derived

[ExtractFaceSet](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSet.md), 
[ExtractFaceSetMF](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetMF.md)

#### Implements

IBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase__ctor"></a> ExtractFaceSetBase\(\)

```csharp
public ExtractFaceSetBase()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_FirstConnectable"></a> FirstConnectable

```csharp
protected virtual Body FirstConnectable { get; }
```

#### Property Value

 Body

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_FirstFaceSetName"></a> FirstFaceSetName

```csharp
public string FirstFaceSetName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 string\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_Parameters"></a> Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 [PickedResult](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/PickedResult.cs)\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_SecondConnectable"></a> SecondConnectable

```csharp
protected virtual Body SecondConnectable { get; }
```

#### Property Value

 Body

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_SecondFaceSetName"></a> SecondFaceSetName

```csharp
public string SecondFaceSetName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_SplitFirstBody"></a> SplitFirstBody

```csharp
public bool SplitFirstBody { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_SplitSecondBody"></a> SplitSecondBody

```csharp
public bool SplitSecondBody { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_TargetFaces"></a> TargetFaces

```csharp
protected virtual Face[] TargetFaces { get; }
```

#### Property Value

 Face\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_Tolerance"></a> Tolerance

```csharp
public double Tolerance { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_UseTolerance"></a> UseTolerance

```csharp
public bool UseTolerance { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_CreateFaceSet_System_String_VM_Managed_DAFUL_SolidBody_VM_Managed_CAD_Face___VM_Managed_Document3D_"></a> CreateFaceSet\(string, SolidBody, Face\[\], Document3D\)

```csharp
protected virtual void CreateFaceSet(string strName, SolidBody sbParent, Face[] arFace, Document3D doc3D)
```

#### Parameters

`strName` string

`sbParent` [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

`arFace` Face\[\]

`doc3D` Document3D

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_CreateFaceSet_System_String_VM_Managed_CAD_Body_VM_Managed_CAD_Face___VM_Managed_Document3D_"></a> CreateFaceSet\(string, Body, Face\[\], Document3D\)

```csharp
protected virtual void CreateFaceSet(string strName, Body sbParent, Face[] arFace, Document3D doc3D)
```

#### Parameters

`strName` string

`sbParent` Body

`arFace` Face\[\]

`doc3D` Document3D

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetBase_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 bool

