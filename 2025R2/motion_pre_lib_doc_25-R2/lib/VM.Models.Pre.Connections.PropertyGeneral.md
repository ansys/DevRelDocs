# <a id="VM_Models_Pre_Connections_PropertyGeneral"></a> Class PropertyGeneral

Namespace: [VM.Models.Pre.Connections](VM.Models.Pre.Connections.md)  
Assembly: VM.Models.Pre.Connections.dll  

This class is to represent the general connections properties.

```csharp
public class PropertyGeneral : PropertyConstraint, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, IArgument, IHasProperty
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
PropertyConstraint ← 
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
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IArgument, 
IHasProperty

#### Inherited Members

PropertyConstraint.ReferenceType, 
PropertyConstraint.ArgumentType, 
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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Connections_PropertyGeneral__ctor"></a> PropertyGeneral\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Connections.PropertyGeneral" data-throw-if-not-resolved="false"></xref> class.

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

ball joint property

```csharp
public PropertyBall BallProperty { get; set; }
```

#### Property Value

 PropertyBall

### <a id="VM_Models_Pre_Connections_PropertyGeneral_BushProperty"></a> BushProperty

bush joint property

```csharp
public PropertyBush BushProperty { get; set; }
```

#### Property Value

 PropertyBush

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ConnectorFullType"></a> ConnectorFullType

Gets or sets the connector full type

```csharp
public string ConnectorFullType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ConnectorProperty"></a> ConnectorProperty

Gets the property of connector

```csharp
public Property ConnectorProperty { get; set; }
```

#### Property Value

 Property

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ConvelProperty"></a> ConvelProperty

convel joint property

```csharp
public PropertyConvel ConvelProperty { get; set; }
```

#### Property Value

 PropertyConvel

### <a id="VM_Models_Pre_Connections_PropertyGeneral_CylindricalProperty"></a> CylindricalProperty

cylindrical joint property

```csharp
public PropertyCylindrical CylindricalProperty { get; set; }
```

#### Property Value

 PropertyCylindrical

### <a id="VM_Models_Pre_Connections_PropertyGeneral_DistanceProperty"></a> DistanceProperty

distance joint property

```csharp
public PropertyDistance DistanceProperty { get; set; }
```

#### Property Value

 PropertyDistance

### <a id="VM_Models_Pre_Connections_PropertyGeneral_FixedProperty"></a> FixedProperty

fixed joint property

```csharp
public PropertyFixed FixedProperty { get; set; }
```

#### Property Value

 PropertyFixed

### <a id="VM_Models_Pre_Connections_PropertyGeneral_InlineProperty"></a> InlineProperty

inline joint property

```csharp
public PropertyInline InlineProperty { get; set; }
```

#### Property Value

 PropertyInline

### <a id="VM_Models_Pre_Connections_PropertyGeneral_InplaneProperty"></a> InplaneProperty

inplane joint property

```csharp
public PropertyInplane InplaneProperty { get; set; }
```

#### Property Value

 PropertyInplane

### <a id="VM_Models_Pre_Connections_PropertyGeneral_MatrixProperty"></a> MatrixProperty

matrix joint property

```csharp
public PropertyMatrix MatrixProperty { get; set; }
```

#### Property Value

 PropertyMatrix

### <a id="VM_Models_Pre_Connections_PropertyGeneral_OrientationProperty"></a> OrientationProperty

orientation joint property

```csharp
public PropertyOrientation OrientationProperty { get; set; }
```

#### Property Value

 PropertyOrientation

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ParallelProperty"></a> ParallelProperty

parallel joint property

```csharp
public PropertyParallel ParallelProperty { get; set; }
```

#### Property Value

 PropertyParallel

### <a id="VM_Models_Pre_Connections_PropertyGeneral_PerpendicularProperty"></a> PerpendicularProperty

perpendicular joint property

```csharp
public PropertyPerpendicular PerpendicularProperty { get; set; }
```

#### Property Value

 PropertyPerpendicular

### <a id="VM_Models_Pre_Connections_PropertyGeneral_PlanarProperty"></a> PlanarProperty

planar joint property

```csharp
public PropertyPlanar PlanarProperty { get; set; }
```

#### Property Value

 PropertyPlanar

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ReferenceType"></a> ReferenceType

Gets the type of the reference.

```csharp
public override string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_RevoluteProperty"></a> RevoluteProperty

revolute joint property

```csharp
public PropertyRevolute RevoluteProperty { get; set; }
```

#### Property Value

 PropertyRevolute

### <a id="VM_Models_Pre_Connections_PropertyGeneral_ScrewProperty"></a> ScrewProperty

screw joint property

```csharp
public PropertyScrew ScrewProperty { get; set; }
```

#### Property Value

 PropertyScrew

### <a id="VM_Models_Pre_Connections_PropertyGeneral_SixMotionProperty"></a> SixMotionProperty

six motion joint property

```csharp
public PropertySixMotion SixMotionProperty { get; set; }
```

#### Property Value

 [PropertySixMotion](VM.Models.Pre.Connections.PropertySixMotion.md)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_TranslationalProperty"></a> TranslationalProperty

translational joint property

```csharp
public PropertyTranslational TranslationalProperty { get; set; }
```

#### Property Value

 PropertyTranslational

### <a id="VM_Models_Pre_Connections_PropertyGeneral_TypeOfConnector"></a> TypeOfConnector

Gets the type of connector.

```csharp
public PropertyGeneral.ConnectorType TypeOfConnector { get; set; }
```

#### Property Value

 [PropertyGeneral](VM.Models.Pre.Connections.PropertyGeneral.md).[ConnectorType](VM.Models.Pre.Connections.PropertyGeneral.ConnectorType.md)

### <a id="VM_Models_Pre_Connections_PropertyGeneral_UniversalProperty"></a> UniversalProperty

universal joint property

```csharp
public PropertyUniversal UniversalProperty { get; set; }
```

#### Property Value

 PropertyUniversal

## Methods

### <a id="VM_Models_Pre_Connections_PropertyGeneral_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

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

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The unnamed object.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The unnamed object name.

### <a id="VM_Models_Pre_Connections_PropertyGeneral_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes property.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

initialization factor

