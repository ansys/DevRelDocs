#  Class PropertyConcentratedLoadBase

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

This class is to represent the concentrated load properties.

```csharp
public abstract class PropertyConcentratedLoadBase : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, IFlexibleFunctionOwner
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyConcentratedLoadBase](VM.Managed.DAFUL.Flexible.Force.PropertyConcentratedLoadBase.md)

#### Derived

[PropertyConcentratedLoad](VM.Managed.DAFUL.Flexible.Force.PropertyConcentratedLoad.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
[IFlexibleFunctionOwner](VM.Managed.DAFUL.Flexible.Force.IFlexibleFunctionOwner.md)

#### Inherited Members

Property.Initialize\(Unit.ConvertFactor\), 
Property.PropertyRequestUpdate\(object, LinkEventArgs\), 
Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
Property.GetUnnamedObjectName\(object\), 
Property.FindLocal\(string\), 
Property.Draw\(Canvas, TMatrix, TMatrix, bool\), 
ContainerObject<PropertyEventCore\>.Find\(string\), 
ContainerObject<PropertyEventCore\>.FindLocal\(string\), 
ContainerObject<PropertyEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<PropertyEventCore\>.GetKey\(\), 
Object<PropertyEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<PropertyEventCore\>.SetIconColor\(Canvas\), 
Object<PropertyEventCore\>.OnDeserialization\(object\), 
Object<PropertyEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<PropertyEventCore\>.RollbackEvent\(\), 
Object<PropertyEventCore\>.OnDeserializedCore\(object\), 
Object<PropertyEventCore\>.Key, 
Object<PropertyEventCore\>.UntypedEventCore, 
Object<PropertyEventCore\>.EventCore, 
Object<PropertyEventCore\>.Attributes, 
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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[FlexibleBaseHelper.SetGeomRefinementForIcon\(IAttributeContainer, Face\)](VM.Managed.DAFUL.Flexible.FlexibleBaseHelper.md\#VM\_Managed\_DAFUL\_Flexible\_FlexibleBaseHelper\_SetGeomRefinementForIcon\_VM\_Managed\_IAttributeContainer\_VM\_Managed\_CAD\_Face\_), 
[FlexibleBaseHelper.SetGeomRefinementForIcon\(IAttributeContainer, ICollection<Face\>\)](VM.Managed.DAFUL.Flexible.FlexibleBaseHelper.md\#VM\_Managed\_DAFUL\_Flexible\_FlexibleBaseHelper\_SetGeomRefinementForIcon\_VM\_Managed\_IAttributeContainer\_System\_Collections\_Generic\_ICollection\_VM\_Managed\_CAD\_Face\_\_)

## Constructors

### <a id="VM_Managed_DAFUL_Flexible_Force_PropertyConcentratedLoadBase__ctor"></a> PropertyConcentratedLoadBase\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.PropertyConcentratedLoadBase" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.Force.PropertyConcentratedLoadBase" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public PropertyConcentratedLoadBase()
```

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_PropertyConcentratedLoadBase_Function"></a> Function

<p>Gets or sets the function of concentrated load.</p>
<p>집중하중의 함수를 가져오거나 넣어줍니다.</p>
<p>
        Type : ConcentratedLoadFunction
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : false
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public ConcentratedLoadFunction Function { get; set; }
```

#### Property Value

 [ConcentratedLoadFunction](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_PropertyConcentratedLoadBase_FunctionDirectionType"></a> FunctionDirectionType

<p>Gets or sets the type of the direction.</p>
<p>방향의 타입을 가져오거나 넣어줍니다.</p>
<p>
        Type : DirectionType
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Direction Type
        Control Type : N/A
        ToolTip : N/A
        Error Message : N/A
        Category : Load
        Category Index : 1
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public PropertyConcentratedLoadBase.DirectionType FunctionDirectionType { get; set; }
```

#### Property Value

 [PropertyConcentratedLoadBase](VM.Managed.DAFUL.Flexible.Force.PropertyConcentratedLoadBase.md).[DirectionType](VM.Managed.DAFUL.Flexible.Force.PropertyConcentratedLoadBase.DirectionType.md)

## Methods

### <a id="VM_Managed_DAFUL_Flexible_Force_PropertyConcentratedLoadBase_FindLocal_System_String_"></a> FindLocal\(string\)

<p>Finds the local.</p>
<p>특정한 오브젝트로부터 이름을 가지고 원하는 오브젝트를 가져오는 함수입니다.</p>

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

<p>The Name that want to find.</p>
<p>찾고 싶은 엔티티의 이름입니다.</p>

#### Returns

 IObjectBase

### <a id="VM_Managed_DAFUL_Flexible_Force_PropertyConcentratedLoadBase_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

<p>Gets the name of the unnamed object.</p>
<p>이름이 없는 오브젝트에 정의된 이름을 가져오는 함수입니다.</p>

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

<p>The object that find to specialize name.</p>
<p>특정한 이름을 찾고자 하는 오브젝트.</p>

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Flexible_Force_PropertyConcentratedLoadBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>
<p>단위 변화 팩터를 이용하여 필드를 초기화 해줍니다.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>
<p>단위 변환 팩터.</p>

