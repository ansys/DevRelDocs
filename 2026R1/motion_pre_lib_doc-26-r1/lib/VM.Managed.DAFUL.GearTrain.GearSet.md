# Class GearSet
<a id="VM_Managed_DAFUL_GearTrain_GearSet"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Gear set for external

```csharp
public class GearSet : GearSetBase<PropertyGearSet>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IOpenDesignerForGearTrain, IOpenDesigner, IReferencable, IGearSet, IHasGeometryInfo, ITransparentable, IHasBuilder, IReportable, IMassProp
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
[EntityBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[Entity<PropertyGearSet\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[OpenDesignerBase<PropertyGearSet\>](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md) ← 
[GearSetBase<PropertyGearSet\>](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md) ← 
[GearSet](VM.Managed.DAFUL.GearTrain.GearSet.md)

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

[GearSetBase<PropertyGearSet\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[GearSetBase<PropertyGearSet\>.Find\(string\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Find\_System\_String\_), 
[GearSetBase<PropertyGearSet\>.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetUnnamedObjectName\_System\_Object\_), 
[GearSetBase<PropertyGearSet\>.GetBuilder\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetBuilder), 
[GearSetBase<PropertyGearSet\>.AddBuilder\(Builder\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddBuilder\_VM\_Managed\_CAD\_Builder\_), 
[GearSetBase<PropertyGearSet\>.RemoveBuilder\(Builder\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_RemoveBuilder\_VM\_Managed\_CAD\_Builder\_), 
[GearSetBase<PropertyGearSet\>.AddPairInfo\(Body, Body\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddPairInfo\_VM\_Managed\_CAD\_Body\_VM\_Managed\_CAD\_Body\_), 
[GearSetBase<PropertyGearSet\>.CheckPowerFlow\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CheckPowerFlow\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSet\>.AppendExtraRotateAngle\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AppendExtraRotateAngle\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSet\>.Meshing\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Meshing\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSet\>.MeshingCore\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_MeshingCore\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSet\>.ExternalMeshing\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_ExternalMeshing\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSet\>.InternalMeshing\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_InternalMeshing\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSet\>.GetPositionsForMeshing\(List<IGearBuilder\>, int, ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetPositionsForMeshing\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_System\_Int32\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[GearSetBase<PropertyGearSet\>.OnDeserializationForAttribute\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnDeserializationForAttribute), 
[GearSetBase<PropertyGearSet\>.GetBodyFromGeometryInfo\(GeometryInfoBase\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetBodyFromGeometryInfo\_VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_), 
[GearSetBase<PropertyGearSet\>.FillGearData\(Document, bool, bool, string, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_FillGearData\_VM\_Managed\_Document\_System\_Boolean\_System\_Boolean\_System\_String\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSet\>.FillGearData\(Document, int, string, string\[\], string\[\], string\[\], string\[\], bool, bool, string, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_FillGearData\_VM\_Managed\_Document\_System\_Int32\_System\_String\_System\_String\_\_\_System\_String\_\_\_System\_String\_\_\_System\_String\_\_\_System\_Boolean\_System\_Boolean\_System\_String\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSet\>.CalculateWebMass\(PropertyGearSetBase, int\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CalculateWebMass\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_System\_Int32\_), 
[GearSetBase<PropertyGearSet\>.OnPreBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnPreBuildSpecial\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_VM\_Managed\_Document\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSet\>.OnPostBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnPostBuildSpecial\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_VM\_Managed\_Document\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSet\>.CreateGearGeometry\(string, int, GearShapeBase\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CreateGearGeometry\_System\_String\_System\_Int32\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_\_\_), 
[GearSetBase<PropertyGearSet\>.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnDeserialization\_System\_Object\_), 
[GearSetBase<PropertyGearSet\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[GearSetBase<PropertyGearSet\>.GeometryInfoBasesImpl\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GeometryInfoBasesImpl), 
[GearSetBase<PropertyGearSet\>.GetMassPropImpl\(ref double, VectorBase, OMatrix, double\[\], bool\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetMassPropImpl\_System\_Double\_\_VM\_Managed\_VectorBase\_VM\_Managed\_OMatrix\_System\_Double\_\_\_System\_Boolean\_), 
[GearSetBase<PropertyGearSet\>.Extension](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Extension), 
[GearSetBase<PropertyGearSet\>.TargetBody](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_TargetBody), 
[GearSetBase<PropertyGearSet\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_TypeOfParent), 
[GearSetBase<PropertyGearSet\>.Layer](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Layer), 
[GearSetBase<PropertyGearSet\>.GearBodies](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearBodies), 
[GearSetBase<PropertyGearSet\>.GearBodiesExceptWeb](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearBodiesExceptWeb), 
[GearSetBase<PropertyGearSet\>.GearWebBodies](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearWebBodies), 
[GearSetBase<PropertyGearSet\>.PairInfos](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_PairInfos), 
[GearSetBase<PropertyGearSet\>.AddToShaft](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddToShaft), 
[GearSetBase<PropertyGearSet\>.UseMeshing](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_UseMeshing), 
[OpenDesignerBase<PropertyGearSet\>.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[OpenDesignerBase<PropertyGearSet\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[OpenDesignerBase<PropertyGearSet\>.CheckLicense\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_CheckLicense), 
[OpenDesignerBase<PropertyGearSet\>.FindBody\(ObjectBase\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_FindBody\_VM\_Managed\_ObjectBase\_), 
[OpenDesignerBase<PropertyGearSet\>.SetCustomFilterEvent\(object\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetCustomFilterEvent\_System\_Object\_), 
[OpenDesignerBase<PropertyGearSet\>.GetFilePath\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_GetFilePath), 
[OpenDesignerBase<PropertyGearSet\>.PostOpenDocument\(Document\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_PostOpenDocument\_VM\_Managed\_Document\_), 
[OpenDesignerBase<PropertyGearSet\>.ResetViewOptions\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_ResetViewOptions), 
[OpenDesignerBase<PropertyGearSet\>.Instantiate\(Reference, Canvas\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Instantiate\_VM\_Managed\_Reference\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[OpenDesignerBase<PropertyGearSet\>.MakeReference\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReference\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyGearSet\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyGearSet\>.TypeFileName](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeFileName), 
[OpenDesignerBase<PropertyGearSet\>.TargetBody](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TargetBody), 
[OpenDesignerBase<PropertyGearSet\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeOfParent), 
[OpenDesignerBase<PropertyGearSet\>.Extension](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Extension), 
[OpenDesignerBase<PropertyGearSet\>.HasLayerExplicitly](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_HasLayerExplicitly), 
[OpenDesignerBase<PropertyGearSet\>.Referencable](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Referencable), 
[OpenDesignerBase<PropertyGearSet\>.Visible](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Visible), 
[Entity<PropertyGearSet\>.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyGearSet\>.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyGearSet\>.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyGearSet\>.Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_GearSet__ctor"></a> GearSet\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSet()
```

### <a id="VM_Managed_DAFUL_GearTrain_GearSet__ctor_System_String_"></a> GearSet\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSet(string strName)
```

#### Parameters

`strName` string

Name of the string.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GearSet_TypeFileName"></a> TypeFileName

Gets the name of the type file.

```csharp
public override string TypeFileName { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_GearSet_MeshingCore_System_Int32_System_Double_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder___"></a> MeshingCore\(int, double, ref List<IGearBuilder\>\)

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

### <a id="VM_Managed_DAFUL_GearTrain_GearSet_OnPreBuildSpecial_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_VM_Managed_Document_System_String___"></a> OnPreBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)

Pre build in Special

```csharp
protected override void OnPreBuildSpecial(PropertyGearSetBase propGearSet, Document doc, string[] InputArray)
```

#### Parameters

`propGearSet` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

The gearset property

`doc` Document

The document

`InputArray` string\[\]

The input array

