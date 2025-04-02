#  Class BearingJournalBBPD

Namespace: [VM.Managed.DAFUL.Builder.Bearing](VM.Managed.DAFUL.Builder.Bearing.md)  
Assembly: VMBldBearing.dll  

```csharp
public class BearingJournalBBPD : Connector<BearingJournal, PropertyBearingJournal, OnePointPosition, OneDirection, NoneOrientation>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BearingJournal\> ← 
BuilderSymmetric<BearingJournal\> ← 
BuilderNamed<BearingJournal\> ← 
Connector<BearingJournal, PropertyBearingJournal, OnePointPosition, OneDirection, NoneOrientation\> ← 
[BearingJournalBBPD](VM.Managed.DAFUL.Builder.Bearing.BearingJournalBBPD.md)

#### Implements

IBuilder

#### Inherited Members

Connector<BearingJournal, PropertyBearingJournal, OnePointPosition, OneDirection, NoneOrientation\>.HookBeforeReplace\(Property\), 
Connector<BearingJournal, PropertyBearingJournal, OnePointPosition, OneDirection, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\), 
Connector<BearingJournal, PropertyBearingJournal, OnePointPosition, OneDirection, NoneOrientation\>.OnPostAddDoc\(ObjectBase\), 
Connector<BearingJournal, PropertyBearingJournal, OnePointPosition, OneDirection, NoneOrientation\>.BaseConnectable, 
Connector<BearingJournal, PropertyBearingJournal, OnePointPosition, OneDirection, NoneOrientation\>.ActionConnectable, 
Connector<BearingJournal, PropertyBearingJournal, OnePointPosition, OneDirection, NoneOrientation\>.AddToDoc, 
Connector<BearingJournal, PropertyBearingJournal, OnePointPosition, OneDirection, NoneOrientation\>.BuildObject, 
BuilderNamed<BearingJournal\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<BearingJournal\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<BearingJournal\>.Name, 
BuilderSymmetric<BearingJournal\>.Build\(Document\), 
BuilderSymmetric<BearingJournal\>.Symmetric, 
BuilderSymmetric<BearingJournal\>.CurrentSymmetric, 
BuilderBase<BearingJournal\>.m\_bSuccess, 
BuilderBase<BearingJournal\>.Build\(Document\), 
BuilderBase<BearingJournal\>.Build\(Document, List<string\>\), 
BuilderBase<BearingJournal\>.Validate\(IList<string\>\), 
BuilderBase<BearingJournal\>.Success\(\), 
BuilderBase<BearingJournal\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BearingJournal\>.OnFinalBuild\(string, Document\), 
BuilderBase<BearingJournal\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BearingJournal\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BearingJournal\>.Parameters, 
BuilderBase<BearingJournal\>.AddToDoc, 
BuilderBase<BearingJournal\>.UseChangedObject, 
BuilderBase<BearingJournal\>.SetPointKey, 
BuilderBase<BearingJournal\>.BuildObject, 
BuilderBase<BearingJournal\>.BuildDocument, 
BuilderBase<BearingJournal\>.UseInterface, 
BuilderBase<BearingJournal\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Bearing_BearingJournalBBPD__ctor"></a> BearingJournalBBPD\(\)

```csharp
public BearingJournalBBPD()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Bearing_BearingJournalBBPD_BearingRadius"></a> BearingRadius

```csharp
public Variable BearingRadius { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Bearing_BearingJournalBBPD_BearingWidth"></a> BearingWidth

```csharp
public Variable BearingWidth { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Bearing_BearingJournalBBPD_ShaftRadius"></a> ShaftRadius

```csharp
public Variable ShaftRadius { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_Bearing_BearingJournalBBPD_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

