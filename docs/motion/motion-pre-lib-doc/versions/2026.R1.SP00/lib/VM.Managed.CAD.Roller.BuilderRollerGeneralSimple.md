# Class BuilderRollerGeneralSimple
<a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple"></a>

Namespace: [VM.Managed.CAD.Roller](VM.Managed.CAD.Roller.md)  
Assembly: VMDRoller.dll  

The general roller builder class.

```csharp
public class BuilderRollerGeneralSimple : BuilderRollerBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IHasReplaceableEntity
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Builder ← 
BuilderTransform ← 
BuilderColorGeom ← 
BuilderHasTransform ← 
[BuilderRollerBase](VM.Managed.CAD.Roller.BuilderRollerBase.md) ← 
[BuilderRollerGeneralSimple](VM.Managed.CAD.Roller.BuilderRollerGeneralSimple.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IHasReplaceableEntity

#### Inherited Members

[BuilderRollerBase.m\_enRollerType](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_m\_enRollerType), 
[BuilderRollerBase.m\_LinkEventReason](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_m\_LinkEventReason), 
[BuilderRollerBase.SetApplyToFileProperty\(bool\)](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_SetApplyToFileProperty\_System\_Boolean\_), 
[BuilderRollerBase.SetTransform\(TMatrix\)](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_SetTransform\_VM\_Managed\_TMatrix\_), 
[BuilderRollerBase.CreateParameter\(\)](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_CreateParameter), 
[BuilderRollerBase.FillParameter\(BuilderParamBase\)](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_FillParameter\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[BuilderRollerBase.Transform](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_Transform), 
[BuilderRollerBase.ApplyToFileProperty](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_ApplyToFileProperty), 
[BuilderRollerBase.Uneditable](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_Uneditable), 
BuilderHasTransform.TransformationMatrix, 
BuilderHasTransform.Transform, 
BuilderHasTransform.IsParameterized, 
BuilderColorGeom.m\_color, 
BuilderColorGeom.CheckValidationAboutBuild\(\), 
BuilderColorGeom.OnDeserialization\(object\), 
BuilderColorGeom.FillParameter\(BuilderParamBase\), 
BuilderColorGeom.Color, 
BuilderColorGeom.DrawingColor, 
BuilderTransform.SetTransform\(TMatrix\), 
BuilderTransform.IsParameterized, 
Builder.CheckValidationAboutBuild\(\), 
Builder.CheckCircularReference\(ObjectBase\), 
Builder.ChangeDataForCircularReference\(\), 
Builder.GetUnnamedObjectName\(object\), 
Builder.FindLocal\(string\), 
Builder.CopyFilePathWhenImportBuilder\(Builder\), 
Builder.Contains\(Type\), 
Builder.GetBodyType\(\), 
Builder.ReplaceData\(string, object\), 
Builder.GetNameAttribute\(string, ref List<string\>\), 
Builder.AddUneditableAttribute\(\), 
Builder.GetParentBody\(\), 
Builder.Clone\(\), 
Builder.Initialize\(Unit.ConvertFactor\), 
Builder.OnDeserialization\(object\), 
Builder.CreateParameter\(\), 
Builder.FillParameter\(BuilderParamBase\), 
Builder.LinkRequestUpdate\(object, LinkEventArgs\), 
Builder.PostWorkWhenFailedToGetXmlString\(\), 
Builder.GetFilledParameter\(\), 
Builder.GetXmlString\(\), 
Builder.HasReplaceableEntity\(IObjectBase\), 
Builder.ReplaceEntity\(IObjectBase, IObjectBase\), 
Builder.GetFactorForLength\(\), 
Builder.CheckCircularReferenceForPoint\(PointBase, ObjectBase\), 
Builder.CheckCircularReferenceForDirection\(DirectionBase, ObjectBase\), 
Builder.CheckCircularReferenceForOrientation\(OrientationBase, ObjectBase\), 
Builder.CheckCircularReferenceForTransform\(TransformBase, ObjectBase\), 
Builder.GetUnitScale\(\), 
Builder.InitialKernelLengthUnit, 
Builder.IsExternable, 
Builder.Uneditable, 
Builder.TypeOfBuilder, 
Builder.Transparency, 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
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

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple__ctor"></a> BuilderRollerGeneralSimple\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Roller.BuilderRollerGeneralSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderRollerGeneralSimple()
```

## Fields

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_lstBottom"></a> lstBottom

The list of cylinder bottom position.

```csharp
protected List<VectorBase> lstBottom
```

#### Field Value

 List<VectorBase\>

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_lstRadius"></a> lstRadius

The list of cylinder radius.

```csharp
protected List<double> lstRadius
```

#### Field Value

 List<double\>

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_lstTop"></a> lstTop

The list of cylinder top position.

```csharp
protected List<VectorBase> lstTop
```

#### Field Value

 List<VectorBase\>

## Properties

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_RollerType"></a> RollerType

Gets roller type.

```csharp
public RollerType RollerType { get; set; }
```

#### Property Value

 [RollerType](VM.Managed.CAD.Roller.RollerType.md)

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_Rollers"></a> Rollers

```csharp
public List<BuilderRollerGeneralSimple.RollerWidthDiameter> Rollers { get; set; }
```

#### Property Value

 List<[BuilderRollerGeneralSimple](VM.Managed.CAD.Roller.BuilderRollerGeneralSimple.md).[RollerWidthDiameter](VM.Managed.CAD.Roller.BuilderRollerGeneralSimple.RollerWidthDiameter.md)\>

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_TypeOfBuilder"></a> TypeOfBuilder

```csharp
public override string TypeOfBuilder { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_CheckValidationAboutBuild"></a> CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public override void CheckValidationAboutBuild()
```

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_FillParameter_VM_CAD_Builders_BuilderParamBase_"></a> FillParameter\(BuilderParamBase\)

```csharp
protected override void FillParameter(BuilderParamBase parameter)
```

#### Parameters

`parameter` [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_GetGeneralRollerInfo_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_Double__"></a> GetGeneralRollerInfo\(List<double\>, List<double\>\)

```csharp
public void GetGeneralRollerInfo(List<double> lstWidth, List<double> lstDiameter)
```

#### Parameters

`lstWidth` List<double\>

`lstDiameter` List<double\>

### <a id="VM_Managed_CAD_Roller_BuilderRollerGeneralSimple_SetGeneralRollerInfo_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_Double__"></a> SetGeneralRollerInfo\(List<double\>, List<double\>\)

```csharp
public void SetGeneralRollerInfo(List<double> lstWidth, List<double> lstDiameter)
```

#### Parameters

`lstWidth` List<double\>

`lstDiameter` List<double\>

