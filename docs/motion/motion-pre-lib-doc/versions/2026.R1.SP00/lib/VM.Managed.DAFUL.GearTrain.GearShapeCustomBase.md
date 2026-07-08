# Class GearShapeCustomBase
<a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The gear shape base for custom

```csharp
public abstract class GearShapeCustomBase : GearShapeBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md) ← 
[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md)

#### Derived

[GearShapeCustomHelical](VM.Managed.DAFUL.GearTrain.GearShapeCustomHelical.md), 
[GearShapeCustomSpur](VM.Managed.DAFUL.GearTrain.GearShapeCustomSpur.md), 
[GearShapeCycloidPin](VM.Managed.DAFUL.GearTrain.GearShapeCycloidPin.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

[GearShapeBase.GetLengthAndHeight\(ref double, ref double\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_GetLengthAndHeight\_System\_Double\_\_System\_Double\_\_), 
[GearShapeBase.SetResultSpec\(XmlNode\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_SetResultSpec\_System\_Xml\_XmlNode\_), 
[GearShapeBase.SetResultSpec\(KissSoftInterface.GearData, uint, uint, uint, double, double, double\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_SetResultSpec\_VM\_Managed\_DAFUL\_GearTrain\_KissSoftInterface\_GearData\_System\_UInt32\_System\_UInt32\_System\_UInt32\_System\_Double\_System\_Double\_System\_Double\_), 
[GearShapeBase.SetResultSummary\(XmlNode\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_SetResultSummary\_System\_Xml\_XmlNode\_), 
[GearShapeBase.SetResultSummary\(KissSoftInterface.GearData, double, double, double\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_SetResultSummary\_VM\_Managed\_DAFUL\_GearTrain\_KissSoftInterface\_GearData\_System\_Double\_System\_Double\_System\_Double\_), 
[GearShapeBase.SetInvolutePoints\(List<XmlNode\[\]\>, bool\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_SetInvolutePoints\_System\_Collections\_Generic\_List\_System\_Xml\_XmlNode\_\_\_\_System\_Boolean\_), 
[GearShapeBase.SetInvolutePoints\(Vector\[\], Vector\[\], uint, uint\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_SetInvolutePoints\_VM\_Managed\_Vector\_\_\_VM\_Managed\_Vector\_\_\_System\_UInt32\_System\_UInt32\_), 
[GearShapeBase.SetNodesetPoints\(List<XmlNode\>\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_SetNodesetPoints\_System\_Collections\_Generic\_List\_System\_Xml\_XmlNode\_\_), 
[GearShapeBase.Show2D\(Canvas\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_Show2D\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[GearShapeBase.Show2DCore\(Canvas, OMatrix\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_Show2DCore\_VM\_CAD\_Kernel\_Render\_Canvas\_VM\_Managed\_OMatrix\_), 
[GearShapeBase.GetInvolutePointFor2D\(\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_GetInvolutePointFor2D), 
[GearShapeBase.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_OnDeserialization\_System\_Object\_), 
[GearShapeBase.GetPropertyOfGearSet\(\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_GetPropertyOfGearSet), 
[GearShapeBase.GetFactorForLength\(\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_GetFactorForLength), 
[GearShapeBase.FillSpline\(IEnumerable<Vector\>, List<Vector\>, double, double\)](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_FillSpline\_System\_Collections\_Generic\_IEnumerable\_VM\_Managed\_Vector\_\_System\_Collections\_Generic\_List\_VM\_Vector\_\_System\_Double\_System\_Double\_), 
[GearShapeBase.IsHidePCD](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_IsHidePCD), 
[GearShapeBase.IsHideBCD](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_IsHideBCD), 
[GearShapeBase.IsHideRCD](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_IsHideRCD), 
[GearShapeBase.IsHideTCD](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_IsHideTCD), 
[GearShapeBase.InvolutePointList](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_InvolutePointList), 
[GearShapeBase.GraphicInvolutePointList](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_GraphicInvolutePointList), 
[GearShapeBase.NodesetPointList](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_NodesetPointList), 
[GearShapeBase.ResultSpecification](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_ResultSpecification), 
[GearShapeBase.ToleranceList](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_ToleranceList), 
[GearShapeBase.SummaryOfResult](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_SummaryOfResult), 
[GearShapeBase.MBCDList](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_MBCDList), 
[GearShapeBase.ModificationGraphSplineValues](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_ModificationGraphSplineValues), 
[GearShapeBase.GearDepth](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_GearDepth), 
[GearShapeBase.ExtraRotateAngle](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_ExtraRotateAngle), 
[GearShapeBase.AddToShaft](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_AddToShaft), 
[GearShapeBase.AddToProperty](VM.Managed.DAFUL.GearTrain.GearShapeBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_AddToProperty), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase__ctor"></a> GearShapeCustomBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearShapeCustomBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearShapeCustomBase()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_BaseProfile"></a> BaseProfile

The base profile

```csharp
public GearShapeCustomBase.Profile BaseProfile { get; set; }
```

#### Property Value

 [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_ExtraProfileList"></a> ExtraProfileList

The extra profile list

```csharp
public List<GearShapeCustomBase.Profile> ExtraProfileList { get; set; }
```

#### Property Value

 List<[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)\>

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_ProfileCount"></a> ProfileCount

The number of profile

```csharp
public int ProfileCount { get; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_SliceCount"></a> SliceCount

The number of slice count

```csharp
public ExpressionValueVariable SliceCount { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_UseExtraProfile"></a> UseExtraProfile

The flag of using extra profile

```csharp
public bool UseExtraProfile { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_GetOrientation"></a> GetOrientation\(\)

Gets orientation

```csharp
protected virtual OMatrix GetOrientation()
```

#### Returns

 OMatrix

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_ImportProfileFromFile_System_String_"></a> ImportProfileFromFile\(string\)

Import profile from file

```csharp
public static List<GearShapeCustomBase.Point2D> ImportProfileFromFile(string strFileName)
```

#### Parameters

`strFileName` string

The file name

#### Returns

 List<[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)\>

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_IsNumeric_System_String___"></a> IsNumeric\(string\[\]\)

Is numeric

```csharp
public static bool IsNumeric(string[] numStr)
```

#### Parameters

`numStr` string\[\]

The string array

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_IsNumeric_System_String_"></a> IsNumeric\(string\)

Is numeric

```csharp
public static bool IsNumeric(string numStr)
```

#### Parameters

`numStr` string

The string

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_LoadProfileData_System_String_System_String_"></a> LoadProfileData\(string, string\)

Load profile data

```csharp
public static List<string[]> LoadProfileData(string loadStr, string extStr)
```

#### Parameters

`loadStr` string

The file path

`extStr` string

The extension

#### Returns

 List<string\[\]\>

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_SetBaseProfile_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_"></a> SetBaseProfile\(Profile\)

Set base profile.

```csharp
public void SetBaseProfile(GearShapeCustomBase.Profile profile)
```

#### Parameters

`profile` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

The profile.

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_SetExtraProfileList_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile__"></a> SetExtraProfileList\(List<Profile\>\)

Set the extra profiles.

```csharp
public void SetExtraProfileList(List<GearShapeCustomBase.Profile> profiles)
```

#### Parameters

`profiles` List<[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)\>

The profiles.

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_SetUseExtraProfile_System_Boolean_"></a> SetUseExtraProfile\(bool\)

Set the flag of use extra profile.

```csharp
public void SetUseExtraProfile(bool bUseExtaProfile)
```

#### Parameters

`bUseExtaProfile` bool

The flag of use extra profile.

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Show2D_VM_CAD_Kernel_Render_Canvas_"></a> Show2D\(Canvas\)

Show2D.

```csharp
public override void Show2D(Canvas canvas)
```

#### Parameters

`canvas` [Canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Kernel/Render/Canvas.cs)

The canvas.

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_UpdateResultSpecification"></a> UpdateResultSpecification\(\)

Update the result specification

```csharp
public void UpdateResultSpecification()
```

