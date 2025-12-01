# Class SectionGeometryBase
<a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The Section GeometryBase

```csharp
public abstract class SectionGeometryBase : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[SectionGeometryBase](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md)

#### Derived

[RackSectionGeometry](VM.Managed.DAFUL.GearTrain.CAD.RackSectionGeometry.md), 
[SectionGeometryCircular](VM.Managed.DAFUL.GearTrain.SectionGeometryCircular.md), 
[SectionGeometryHollowCircular](VM.Managed.DAFUL.GearTrain.SectionGeometryHollowCircular.md), 
[SectionGeometryHollowTapered](VM.Managed.DAFUL.GearTrain.SectionGeometryHollowTapered.md), 
[SectionGeometryTapered](VM.Managed.DAFUL.GearTrain.SectionGeometryTapered.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase__ctor"></a> SectionGeometryBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.SectionGeometryBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SectionGeometryBase()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_Eccentricity"></a> Eccentricity

Gets or sets the eccentricity.

```csharp
public virtual Variable Eccentricity { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_Length"></a> Length

Gets or sets the length.

```csharp
public virtual Variable Length { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_TypeOfGeometry"></a> TypeOfGeometry

Gets the type of geometry.

```csharp
public abstract SectionGeometryBase.GeometryType TypeOfGeometry { get; }
```

#### Property Value

 [SectionGeometryBase](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md).[GeometryType](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.GeometryType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetBottomAndTopPosition_VM_Managed_VectorBase_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetBottomAndTopPosition\(VectorBase, ref VectorBase, ref VectorBase\)

Gets the bottom and top position.

```csharp
public void GetBottomAndTopPosition(VectorBase vecOffsetDirection, ref VectorBase vecTop, ref VectorBase vecBottom)
```

#### Parameters

`vecOffsetDirection` VectorBase

The offset direction.

`vecTop` VectorBase

The vec top.

`vecBottom` VectorBase

The vec bottom.

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetBuilder_VM_Managed_CAD_BuilderColor_VM_Managed_VectorBase_"></a> GetBuilder\(BuilderColor, VectorBase\)

Gets the builder.

```csharp
public abstract Builder GetBuilder(BuilderColor color, VectorBase vecOffsetDirection)
```

#### Parameters

`color` BuilderColor

The color.

`vecOffsetDirection` VectorBase

The offset direction.

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetFactorForLength"></a> GetFactorForLength\(\)

```csharp
protected double GetFactorForLength()
```

#### Returns

 double

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetGeomInfo"></a> GetGeomInfo\(\)

Gets the geom information.

```csharp
public abstract double[] GetGeomInfo()
```

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetLengthAndHeight_System_Double__System_Double__"></a> GetLengthAndHeight\(ref double, ref double\)

Gets the start and end point.

```csharp
public virtual void GetLengthAndHeight(ref double dLength, ref double dHeight)
```

#### Parameters

`dLength` double

Length of the d.

`dHeight` double

Height of the d.

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetNewStartPointWithEccentricity_VM_Managed_PointBase_VM_Managed_VectorBase_"></a> GetNewStartPointWithEccentricity\(PointBase, VectorBase\)

Get new start point with eccentricity

```csharp
public PointBase GetNewStartPointWithEccentricity(PointBase ptStartPoint, VectorBase vecEccentricDirection)
```

#### Parameters

`ptStartPoint` PointBase

The old start point

`vecEccentricDirection` VectorBase

The eccentric direction

#### Returns

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetNewStartPointWithEccentricity_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> GetNewStartPointWithEccentricity\(VectorBase, VectorBase\)

Get new start point with eccentricity

```csharp
public VectorBase GetNewStartPointWithEccentricity(VectorBase vecStartPoint, VectorBase vecEccentricDirection)
```

#### Parameters

`vecStartPoint` VectorBase

The old start point

`vecEccentricDirection` VectorBase

The eccentric direction

#### Returns

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetSectionBuilder_System_Double_System_Collections_Generic_List_VM_Managed_Vector__"></a> GetSectionBuilder\(double, List<Vector\>\)

Gets the section builder.

```csharp
public virtual Builder[] GetSectionBuilder(double dSegLen, List<Vector> lstGearSection)
```

#### Parameters

`dSegLen` double

Length of the d seg.

`lstGearSection` List<Vector\>

The LST gear section.

#### Returns

 Builder\[\]

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetSectionBuilderCore_System_Double_System_Collections_Generic_List_VM_Managed_Vector__"></a> GetSectionBuilderCore\(double, List<Vector\>\)

Gets the section builder core.

```csharp
protected List<Vector> GetSectionBuilderCore(double dSegLen, List<Vector> lstSection)
```

#### Parameters

`dSegLen` double

Length of the d seg.

`lstSection` List<Vector\>

The LST section.

#### Returns

 List<Vector\>

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetSectionName_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_System_Int32_"></a> GetSectionName\(HiddenShaftSetDocument, string, int\)

Gets the name of the section.

```csharp
protected string[] GetSectionName(HiddenShaftSetDocument hiddenDoc, string strName, int nNum)
```

#### Parameters

`hiddenDoc` [HiddenShaftSetDocument](VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument.md)

The hidden document.

`strName` string

Name of the string.

`nNum` int

The n number.

#### Returns

 string\[\]

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_GetSectionPoint_System_Double_System_Collections_Generic_List_VM_Managed_Vector__System_Collections_Generic_List_VM_Managed_Vector__"></a> GetSectionPoint\(double, List<Vector\>, List<Vector\>\)

Gets the section point.

```csharp
public Vector[] GetSectionPoint(double dSegLen, List<Vector> lstDoubleSection, List<Vector> lstSingleSection)
```

#### Parameters

`dSegLen` double

Length of the d seg.

`lstDoubleSection` List<Vector\>

The LST double section.

`lstSingleSection` List<Vector\>

The LST single section.

#### Returns

 Vector\[\]

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_InitChild"></a> InitChild\(\)

Initializes the child.

```csharp
public virtual void InitChild()
```

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_InnerCreateParameter"></a> InnerCreateParameter\(\)

```csharp
protected abstract BuilderParamBase InnerCreateParameter()
```

#### Returns

 [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_InnerFillParameter_VM_CAD_Builders_BuilderParamBase_VM_Managed_CAD_BuilderColor_VM_Managed_VectorBase_"></a> InnerFillParameter\(BuilderParamBase, BuilderColor, VectorBase\)

```csharp
protected abstract void InnerFillParameter(BuilderParamBase parameter, BuilderColor color, VectorBase vecOffsetDirection)
```

#### Parameters

`parameter` [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

`color` BuilderColor

`vecOffsetDirection` VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_SamePositionVector_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> SamePositionVector\(VectorBase, VectorBase\)

Whether vectors is same

```csharp
public static bool SamePositionVector(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` VectorBase

first vector.

`vec2` VectorBase

second vector.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_SectionGeometryBase_SplitSectionInfo_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_System_Int32_"></a> SplitSectionInfo\(HiddenShaftSetDocument, string, int\)

Splits the section information.

```csharp
public abstract SectionInfo[] SplitSectionInfo(HiddenShaftSetDocument hiddenDoc, string strName, int nNumber)
```

#### Parameters

`hiddenDoc` [HiddenShaftSetDocument](VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument.md)

The hidden document.

`strName` string

Name of the string.

`nNumber` int

The n number.

#### Returns

 [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)\[\]

