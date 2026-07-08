#  Class ExtractFaceSetMF

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class ExtractFaceSetMF : ExtractFaceSetBase, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExtractFaceSetBase](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md) ← 
[ExtractFaceSetMF](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetMF.md)

#### Implements

IBuilder

#### Inherited Members

[ExtractFaceSetBase.Success\(\)](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_Success), 
[ExtractFaceSetBase.CreateFaceSet\(string, SolidBody, Face\[\], Document3D\)](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_CreateFaceSet\_System\_String\_VM\_Managed\_DAFUL\_SolidBody\_VM\_Managed\_CAD\_Face\_\_\_VM\_Managed\_Document3D\_), 
[ExtractFaceSetBase.CreateFaceSet\(string, Body, Face\[\], Document3D\)](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_CreateFaceSet\_System\_String\_VM\_Managed\_CAD\_Body\_VM\_Managed\_CAD\_Face\_\_\_VM\_Managed\_Document3D\_), 
[ExtractFaceSetBase.Parameters](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_Parameters), 
[ExtractFaceSetBase.InputArray](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_InputArray), 
[ExtractFaceSetBase.UseTolerance](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_UseTolerance), 
[ExtractFaceSetBase.Tolerance](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_Tolerance), 
[ExtractFaceSetBase.FirstFaceSetName](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_FirstFaceSetName), 
[ExtractFaceSetBase.SecondFaceSetName](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_SecondFaceSetName), 
[ExtractFaceSetBase.SplitFirstBody](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_SplitFirstBody), 
[ExtractFaceSetBase.SplitSecondBody](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_SplitSecondBody), 
[ExtractFaceSetBase.FirstConnectable](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_FirstConnectable), 
[ExtractFaceSetBase.SecondConnectable](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_SecondConnectable), 
[ExtractFaceSetBase.TargetFaces](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ExtractFaceSetBase\_TargetFaces)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetMF__ctor"></a> ExtractFaceSetMF\(\)

```csharp
public ExtractFaceSetMF()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetMF_FirstConnectable"></a> FirstConnectable

```csharp
protected override Body FirstConnectable { get; }
```

#### Property Value

 Body

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetMF_ObjectKey"></a> ObjectKey

```csharp
public string[] ObjectKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetMF_SecondConnectable"></a> SecondConnectable

```csharp
protected override Body SecondConnectable { get; }
```

#### Property Value

 Body

### <a id="VM_Managed_DAFUL_Builder_Contact_ExtractFaceSetMF_TargetFaces"></a> TargetFaces

```csharp
protected override Face[] TargetFaces { get; }
```

#### Property Value

 Face\[\]

