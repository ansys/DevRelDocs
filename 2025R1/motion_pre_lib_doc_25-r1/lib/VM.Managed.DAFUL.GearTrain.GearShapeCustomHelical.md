#  Class GearShapeCustomHelical

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The helical gear shape for custom

```csharp
public class GearShapeCustomHelical : GearShapeCustomBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md) ← 
[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md) ← 
[GearShapeCustomHelical](VM.Managed.DAFUL.GearTrain.GearShapeCustomHelical.md)

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

[GearShapeCustomBase.Show2D\(Canvas\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_Show2D\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[GearShapeCustomBase.GetOrientation\(\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_GetOrientation), 
[GearShapeCustomBase.SetBaseProfile\(GearShapeCustomBase.Profile\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_SetBaseProfile\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_Profile\_), 
[GearShapeCustomBase.SetUseExtraProfile\(bool\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_SetUseExtraProfile\_System\_Boolean\_), 
[GearShapeCustomBase.SetExtraProfileList\(List<GearShapeCustomBase.Profile\>\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_SetExtraProfileList\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_Profile\_\_), 
[GearShapeCustomBase.UpdateResultSpecification\(\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_UpdateResultSpecification), 
[GearShapeCustomBase.ImportProfileFromFile\(string\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_ImportProfileFromFile\_System\_String\_), 
[GearShapeCustomBase.LoadProfileData\(string, string\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_LoadProfileData\_System\_String\_System\_String\_), 
[GearShapeCustomBase.IsNumeric\(string\[\]\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_IsNumeric\_System\_String\_\_\_), 
[GearShapeCustomBase.IsNumeric\(string\)](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_IsNumeric\_System\_String\_), 
[GearShapeCustomBase.BaseProfile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_BaseProfile), 
[GearShapeCustomBase.UseExtraProfile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_UseExtraProfile), 
[GearShapeCustomBase.SliceCount](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_SliceCount), 
[GearShapeCustomBase.ExtraProfileList](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_ExtraProfileList), 
[GearShapeCustomBase.ProfileCount](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearShapeCustomBase\_ProfileCount), 
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
LinkableBase.OnDeserialization\(object\), 
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

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomHelical__ctor"></a> GearShapeCustomHelical\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearShapeCustomHelical" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearShapeCustomHelical()
```

