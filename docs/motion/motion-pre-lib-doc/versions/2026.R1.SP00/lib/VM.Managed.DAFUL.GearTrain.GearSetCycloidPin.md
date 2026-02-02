# Class GearSetCycloidPin
<a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Gear set for cycloid pin

```csharp
public class GearSetCycloidPin : GearSetBase<PropertyGearSetCycloidPin>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IOpenDesignerForGearTrain, IOpenDesigner, IReferencable, IGearSet, IHasGeometryInfo, ITransparentable, IHasBuilder, IReportable, IMassProp
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
[EntityBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[Entity<PropertyGearSetCycloidPin\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[OpenDesignerBase<PropertyGearSetCycloidPin\>](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md) ← 
[GearSetBase<PropertyGearSetCycloidPin\>](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md) ← 
[GearSetCycloidPin](VM.Managed.DAFUL.GearTrain.GearSetCycloidPin.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IContainer, 
IEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
IVisible, 
IDocumentOwner, 
INamed, 
INavigatorItem, 
IVisible, 
IMultiChangable, 
IHasProperty, 
IGroup, 
[IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md), 
IOpenDesigner, 
IReferencable, 
[IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md), 
[IHasGeometryInfo](VM.Managed.DAFUL.GearTrain.IHasGeometryInfo.md), 
ITransparentable, 
IHasBuilder, 
IReportable, 
IMassProp

#### Inherited Members

[GearSetBase<PropertyGearSetCycloidPin\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.Find\(string\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Find\_System\_String\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetUnnamedObjectName\_System\_Object\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.GetBuilder\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetBuilder), 
[GearSetBase<PropertyGearSetCycloidPin\>.AddBuilder\(Builder\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddBuilder\_VM\_Managed\_CAD\_Builder\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.RemoveBuilder\(Builder\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_RemoveBuilder\_VM\_Managed\_CAD\_Builder\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.AddPairInfo\(Body, Body\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddPairInfo\_VM\_Managed\_CAD\_Body\_VM\_Managed\_CAD\_Body\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.CheckPowerFlow\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CheckPowerFlow\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.AppendExtraRotateAngle\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AppendExtraRotateAngle\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.Meshing\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Meshing\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.MeshingCore\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_MeshingCore\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.ExternalMeshing\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_ExternalMeshing\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.InternalMeshing\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_InternalMeshing\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.GetPositionsForMeshing\(List<IGearBuilder\>, int, ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetPositionsForMeshing\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_System\_Int32\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.OnDeserializationForAttribute\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnDeserializationForAttribute), 
[GearSetBase<PropertyGearSetCycloidPin\>.GetBodyFromGeometryInfo\(GeometryInfoBase\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetBodyFromGeometryInfo\_VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.FillGearData\(Document, bool, bool, string, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_FillGearData\_VM\_Managed\_Document\_System\_Boolean\_System\_Boolean\_System\_String\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.FillGearData\(Document, int, string, string\[\], string\[\], string\[\], string\[\], bool, bool, string, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_FillGearData\_VM\_Managed\_Document\_System\_Int32\_System\_String\_System\_String\_\_\_System\_String\_\_\_System\_String\_\_\_System\_String\_\_\_System\_Boolean\_System\_Boolean\_System\_String\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.CalculateWebMass\(PropertyGearSetBase, int\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CalculateWebMass\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_System\_Int32\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.OnPreBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnPreBuildSpecial\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_VM\_Managed\_Document\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.OnPostBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnPostBuildSpecial\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_VM\_Managed\_Document\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.CreateGearGeometry\(string, int, GearShapeBase\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CreateGearGeometry\_System\_String\_System\_Int32\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnDeserialization\_System\_Object\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.GeometryInfoBasesImpl\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GeometryInfoBasesImpl), 
[GearSetBase<PropertyGearSetCycloidPin\>.GetMassPropImpl\(ref double, VectorBase, OMatrix, double\[\], bool\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetMassPropImpl\_System\_Double\_\_VM\_Managed\_VectorBase\_VM\_Managed\_OMatrix\_System\_Double\_\_\_System\_Boolean\_), 
[GearSetBase<PropertyGearSetCycloidPin\>.Extension](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Extension), 
[GearSetBase<PropertyGearSetCycloidPin\>.TargetBody](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_TargetBody), 
[GearSetBase<PropertyGearSetCycloidPin\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_TypeOfParent), 
[GearSetBase<PropertyGearSetCycloidPin\>.Layer](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Layer), 
[GearSetBase<PropertyGearSetCycloidPin\>.GearBodies](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearBodies), 
[GearSetBase<PropertyGearSetCycloidPin\>.GearBodiesExceptWeb](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearBodiesExceptWeb), 
[GearSetBase<PropertyGearSetCycloidPin\>.GearWebBodies](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearWebBodies), 
[GearSetBase<PropertyGearSetCycloidPin\>.PairInfos](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_PairInfos), 
[GearSetBase<PropertyGearSetCycloidPin\>.AddToShaft](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddToShaft), 
[GearSetBase<PropertyGearSetCycloidPin\>.UseMeshing](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_UseMeshing), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.CheckLicense\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_CheckLicense), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.FindBody\(ObjectBase\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_FindBody\_VM\_Managed\_ObjectBase\_), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.SetCustomFilterEvent\(object\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetCustomFilterEvent\_System\_Object\_), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.GetFilePath\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_GetFilePath), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.PostOpenDocument\(Document\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_PostOpenDocument\_VM\_Managed\_Document\_), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.ResetViewOptions\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_ResetViewOptions), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.Instantiate\(Reference, Canvas\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Instantiate\_VM\_Managed\_Reference\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.MakeReference\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReference\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.TypeFileName](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeFileName), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.TargetBody](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TargetBody), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeOfParent), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.Extension](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Extension), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.HasLayerExplicitly](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_HasLayerExplicitly), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.Referencable](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Referencable), 
[OpenDesignerBase<PropertyGearSetCycloidPin\>.Visible](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Visible), 
[Entity<PropertyGearSetCycloidPin\>.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyGearSetCycloidPin\>.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyGearSetCycloidPin\>.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyGearSetCycloidPin\>.Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserializationForAttribute\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkRequestDestroying\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.WriteTemplateImpl\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.ReadTemplateImpl\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.HasLayerExplicitly](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.UntypedProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsFileProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Layer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsVisible](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
ContainerObject<EntityEventCore\>.Find\(string\), 
ContainerObject<EntityEventCore\>.FindLocal\(string\), 
ContainerObject<EntityEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<EntityEventCore\>.GetKey\(\), 
Object<EntityEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<EntityEventCore\>.SetIconColor\(Canvas\), 
Object<EntityEventCore\>.OnDeserialization\(object\), 
Object<EntityEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<EntityEventCore\>.RollbackEvent\(\), 
Object<EntityEventCore\>.OnDeserializedCore\(object\), 
Object<EntityEventCore\>.Key, 
Object<EntityEventCore\>.UntypedEventCore, 
Object<EntityEventCore\>.EventCore, 
Object<EntityEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
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

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin__ctor"></a> GearSetCycloidPin\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSetCycloidPin" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSetCycloidPin()
```

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin__ctor_System_String_"></a> GearSetCycloidPin\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSetCycloidPin" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSetCycloidPin(string strName)
```

#### Parameters

`strName` string

Name of the string.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_Extension"></a> Extension

Gets the extension.

```csharp
protected override string Extension { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_TypeFileName"></a> TypeFileName

Gets the name of the type file.

```csharp
public override string TypeFileName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_UseMeshing"></a> UseMeshing

Gets the flag whether this instance is meshing or not.

```csharp
public override bool UseMeshing { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_CreateGearGeometry_System_String_System_Int32_VM_Managed_DAFUL_GearTrain_GearShapeBase___"></a> CreateGearGeometry\(string, int, GearShapeBase\[\]\)

Create Gear Geometry.

```csharp
protected override void CreateGearGeometry(string strGearType, int nNGear, GearShapeBase[] arGeom)
```

#### Parameters

`strGearType` string

THe gear type

`nNGear` int

The No. of gear

`arGeom` [GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md)\[\]

The gear shape geometry

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_GetMassPropImpl_System_Double__VM_Managed_VectorBase_VM_Managed_OMatrix_System_Double___System_Boolean_"></a> GetMassPropImpl\(ref double, VectorBase, OMatrix, double\[\], bool\)

```csharp
protected override void GetMassPropImpl(ref double dMass, VectorBase vecCenterPosition, OMatrix vecOrientation, double[] arTensor, bool bGlobal)
```

#### Parameters

`dMass` double

`vecCenterPosition` VectorBase

`vecOrientation` OMatrix

`arTensor` double\[\]

`bGlobal` bool

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Links the request destroying.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected override void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` LinkedList<Reference\>

The container.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_MeshingAndMakePin_VM_Managed_IHasBuilder_VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_VM_Managed_VectorBase_VM_Managed_VectorBase_VM_Managed_VectorBase_System_Boolean_"></a> MeshingAndMakePin\(IHasBuilder, CycloidPinInfoForAssembly, VectorBase, VectorBase, VectorBase, bool\)

Meshing and make pin

```csharp
public bool MeshingAndMakePin(IHasBuilder housing, CycloidPinInfoForAssembly gearAssembly, VectorBase vecDir, VectorBase vecShaftAxis, VectorBase vecCenterOfPin, bool bMakePin)
```

#### Parameters

`housing` IHasBuilder

The housing

`gearAssembly` [CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)

The gear assembly

`vecDir` VectorBase

The direction

`vecShaftAxis` VectorBase

The shaft axis

`vecCenterOfPin` VectorBase

The center of pin

`bMakePin` bool

The pin making flag

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_MeshingCore_System_Int32_System_Double_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder___"></a> MeshingCore\(int, double, ref List<IGearBuilder\>\)

Meshing

```csharp
protected override void MeshingCore(int nRes, double dInitialAngle, ref List<IGearBuilder> lstOrder)
```

#### Parameters

`nRes` int

The result count

`dInitialAngle` double

The initial angle

`lstOrder` List<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The builder list

### <a id="VM_Managed_DAFUL_GearTrain_GearSetCycloidPin_OnPostBuildSpecial_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_VM_Managed_Document_System_String___"></a> OnPostBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)

Post build in Special

```csharp
protected override void OnPostBuildSpecial(PropertyGearSetBase propGearSet, Document doc, string[] InputArray)
```

#### Parameters

`propGearSet` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

The gearset property

`doc` Document

The document

`InputArray` string\[\]

The input array

