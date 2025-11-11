# Class PropertyGeneral
<a id="VM_Models_Pre_Connections_PropertyGeneral"></a>

Namespace: [VM.Models.Pre.Connections](VM.Models.Pre.Connections.md)  
Assembly: VM.Models.Pre.Connections.dll  

<p>This class is to represent the general connections properties.</p>
<p>
Symmetric Modeling : Yes
Reference : No
Reference Type : N/A
삭제시 Reservable한 Link 변수 : N/A
Generic Collection에 담겨있는 Link 변수 : N/A
</p>

```csharp
public class PropertyGeneral : PropertyConstraint, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, IArgument, IHasProperty
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
[Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs) ← 
[PropertyConstraint](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Constraint.cs) ← 
[PropertyGeneral](VM.Models.Pre.Connections.PropertyGeneral.md)

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
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IArgument, 
IHasProperty

#### Inherited Members

[PropertyConstraint.ReferenceType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Constraint.cs), 
[PropertyConstraint.ArgumentType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Constraint.cs), 
[Property.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.Draw\(Canvas, TMatrix, TMatrix, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
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

### <a id="VM_Models_Pre_Connections_PropertyGeneral__ctor"></a> PropertyGeneral\(\)

<p>Initializes a new instance of the <xref href="VM.Models.Pre.Connections.PropertyGeneral" data-throw-if-not-resolved="false"></xref> class.</p>

```csharp
public PropertyGeneral()
```

## Properties

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public override ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Models_Pre_Connections_PropertyGeneral_BallProperty"></a> BallProperty

<p>ball joint property</p>

```csharp
public PropertyBall BallProperty { get; set; }
```

#### Property Value

 [PropertyBall](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Ball.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_BushProperty"></a> BushProperty

<p>bush joint property</p>

```csharp
public PropertyBush BushProperty { get; set; }
```

#### Property Value

 [PropertyBush](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFB/Bush.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ConnectorFullType"></a> ConnectorFullType

Gets or sets the connector full type

```csharp
public string ConnectorFullType { get; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ConnectorProperty"></a> ConnectorProperty

<p>Gets the property of connector</p>
<p>
Type : VM.Managed.Property
LinkRequestUpdate 시 처리 : N/A
LinkRequestDestroy 시 처리 :
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Damping Ratio
Control Type : N/A
ToolTip : N/A
Error Message : N/A
Category : N/A
Category Index : N/A
변경 시 DFS 재생성 여부 : No
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public Property ConnectorProperty { get; set; }
```

#### Property Value

 [Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ConvelProperty"></a> ConvelProperty

<p>convel joint property</p>

```csharp
public PropertyConvel ConvelProperty { get; set; }
```

#### Property Value

 [PropertyConvel](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Convel.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_CylindricalProperty"></a> CylindricalProperty

<p>cylindrical joint property</p>

```csharp
public PropertyCylindrical CylindricalProperty { get; set; }
```

#### Property Value

 [PropertyCylindrical](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Cylindrical.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_DistanceProperty"></a> DistanceProperty

<p>distance joint property</p>

```csharp
public PropertyDistance DistanceProperty { get; set; }
```

#### Property Value

 [PropertyDistance](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Distance.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_FixedProperty"></a> FixedProperty

<p>fixed joint property</p>

```csharp
public PropertyFixed FixedProperty { get; set; }
```

#### Property Value

 [PropertyFixed](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Fixed.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_InlineProperty"></a> InlineProperty

<p>inline joint property</p>

```csharp
public PropertyInline InlineProperty { get; set; }
```

#### Property Value

 [PropertyInline](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Inline.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_InplaneProperty"></a> InplaneProperty

<p>inplane joint property</p>

```csharp
public PropertyInplane InplaneProperty { get; set; }
```

#### Property Value

 [PropertyInplane](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Inplane.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_MatrixProperty"></a> MatrixProperty

<p>matrix joint property</p>

```csharp
public PropertyMatrix MatrixProperty { get; set; }
```

#### Property Value

 [PropertyMatrix](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/Matrix.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_OrientationProperty"></a> OrientationProperty

<p>orientation joint property</p>

```csharp
public PropertyOrientation OrientationProperty { get; set; }
```

#### Property Value

 [PropertyOrientation](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Orientation.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ParallelProperty"></a> ParallelProperty

<p>parallel joint property</p>

```csharp
public PropertyParallel ParallelProperty { get; set; }
```

#### Property Value

 [PropertyParallel](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Parallel.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_PerpendicularProperty"></a> PerpendicularProperty

<p>perpendicular joint property</p>

```csharp
public PropertyPerpendicular PerpendicularProperty { get; set; }
```

#### Property Value

 [PropertyPerpendicular](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Perpendicular.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_PlanarProperty"></a> PlanarProperty

<p>planar joint property</p>

```csharp
public PropertyPlanar PlanarProperty { get; set; }
```

#### Property Value

 [PropertyPlanar](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Planar.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ReferenceType"></a> ReferenceType

Gets the type of the reference.

```csharp
public override string ReferenceType { get; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Connections_PropertyGeneral_RevoluteProperty"></a> RevoluteProperty

<p>revolute joint property</p>

```csharp
public PropertyRevolute RevoluteProperty { get; set; }
```

#### Property Value

 [PropertyRevolute](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Revolute.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ScrewProperty"></a> ScrewProperty

<p>screw joint property</p>

```csharp
public PropertyScrew ScrewProperty { get; set; }
```

#### Property Value

 [PropertyScrew](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Screw.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_SixMotionProperty"></a> SixMotionProperty

<p>six motion joint property</p>

```csharp
public PropertySixMotion SixMotionProperty { get; set; }
```

#### Property Value

 [PropertySixMotion](VM.Models.Pre.Connections.PropertySixMotion.md)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_TranslationalProperty"></a> TranslationalProperty

<p>translational joint property</p>

```csharp
public PropertyTranslational TranslationalProperty { get; set; }
```

#### Property Value

 [PropertyTranslational](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Translational.cs)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_TypeOfConnector"></a> TypeOfConnector

<p>Gets the type of connector.</p>
<p>
Type : VM.Models.Pre.Connections.PropertyGeneral.ConnectorType
LinkRequestUpdate 시 처리 : N/A
LinkRequestDestroy 시 처리 :
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Damping Ratio
Control Type : ComboBox
ToolTip : N/A
Error Message : N/A
Category : N/A
Category Index : 1
변경 시 DFS 재생성 여부 : No
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public PropertyGeneral.ConnectorType TypeOfConnector { get; set; }
```

#### Property Value

 [PropertyGeneral](VM.Models.Pre.Connections.PropertyGeneral.md).[ConnectorType](VM.Models.Pre.Connections.PropertyGeneral.ConnectorType.md)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_UniversalProperty"></a> UniversalProperty

<p>universal joint property</p>

```csharp
public PropertyUniversal UniversalProperty { get; set; }
```

#### Property Value

 [PropertyUniversal](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Universal.cs)

## Methods

### <a id="VM_Models_Pre_Connections_PropertyGeneral_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Models_Pre_Connections_PropertyGeneral_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` object

The unnamed object.

#### Returns

 string

The unnamed object name.

### <a id="VM_Models_Pre_Connections_PropertyGeneral_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes property.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>initialization factor</p>

