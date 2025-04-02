#  Class TrackPlacing

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public class TrackPlacing : BuilderNamed<TrackPlacing>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<TrackPlacing\> ← 
BuilderSymmetric<TrackPlacing\> ← 
BuilderNamed<TrackPlacing\> ← 
[TrackPlacing](VM.Managed.DAFUL.Builder.Track.TrackPlacing.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<TrackPlacing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<TrackPlacing\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<TrackPlacing\>.Name, 
BuilderSymmetric<TrackPlacing\>.Build\(Document\), 
BuilderSymmetric<TrackPlacing\>.Symmetric, 
BuilderSymmetric<TrackPlacing\>.CurrentSymmetric, 
BuilderBase<TrackPlacing\>.m\_bSuccess, 
BuilderBase<TrackPlacing\>.Build\(Document\), 
BuilderBase<TrackPlacing\>.Build\(Document, List<string\>\), 
BuilderBase<TrackPlacing\>.Validate\(IList<string\>\), 
BuilderBase<TrackPlacing\>.Success\(\), 
BuilderBase<TrackPlacing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<TrackPlacing\>.OnFinalBuild\(string, Document\), 
BuilderBase<TrackPlacing\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<TrackPlacing\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<TrackPlacing\>.Parameters, 
BuilderBase<TrackPlacing\>.AddToDoc, 
BuilderBase<TrackPlacing\>.UseChangedObject, 
BuilderBase<TrackPlacing\>.SetPointKey, 
BuilderBase<TrackPlacing\>.BuildObject, 
BuilderBase<TrackPlacing\>.BuildDocument, 
BuilderBase<TrackPlacing\>.UseInterface, 
BuilderBase<TrackPlacing\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Track_TrackPlacing__ctor"></a> TrackPlacing\(\)

```csharp
public TrackPlacing()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_Track_TrackPlacing_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

