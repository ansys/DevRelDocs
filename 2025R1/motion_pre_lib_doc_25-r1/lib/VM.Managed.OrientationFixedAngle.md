#  Class OrientationFixedAngle

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the information of orientation through data(eulerangle type, angle type, alpha, beta, gamma) of fixed angle.

```csharp
public class OrientationFixedAngle : OrientationEulerAngle, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IExpression, IOrientationBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[Expression](VM.Managed.Expression.md) ← 
[OrientationBase](VM.Managed.OrientationBase.md) ← 
[OrientationEulerAngle](VM.Managed.OrientationEulerAngle.md) ← 
[OrientationFixedAngle](VM.Managed.OrientationFixedAngle.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
IExpression, 
IOrientationBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider

#### Inherited Members

[OrientationEulerAngle.get\_AngleType\(\)](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_get\_AngleType), 
[OrientationEulerAngle.set\_AngleType\(AngleTypes\)](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_set\_AngleType\_VM\_AngleTypes\_), 
[OrientationEulerAngle.get\_RotationAxis\(\)](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_get\_RotationAxis), 
[OrientationEulerAngle.set\_RotationAxis\(RotationAxes\)](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_set\_RotationAxis\_VM\_RotationAxes\_), 
[OrientationEulerAngle.ReadXml\(XmlReader\)](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_ReadXml\_System\_Xml\_XmlReader\_), 
[OrientationEulerAngle.WriteXml\(XmlWriter\)](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_WriteXml\_System\_Xml\_XmlWriter\_), 
[OrientationEulerAngle.GetSchema\(\)](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_GetSchema), 
[OrientationEulerAngle.RotationAngles](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_RotationAngles), 
[OrientationEulerAngle.RotationAxis](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_RotationAxis), 
[OrientationEulerAngle.AngleType](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_AngleType), 
[OrientationEulerAngle.Gamma](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_Gamma), 
[OrientationEulerAngle.Beta](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_Beta), 
[OrientationEulerAngle.Alpha](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_Alpha), 
[OrientationEulerAngle.IsParameterized](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_IsParameterized), 
[OrientationEulerAngle.Value](VM.Managed.OrientationEulerAngle.md\#VM\_Managed\_OrientationEulerAngle\_Value), 
[OrientationBase.IsParametric\(\)](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_IsParametric), 
[OrientationBase.IsParametric\(string\)](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_IsParametric\_System\_String\_), 
[OrientationBase.ReadXml\(XmlReader\)](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_ReadXml\_System\_Xml\_XmlReader\_), 
[OrientationBase.WriteXml\(XmlWriter\)](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_WriteXml\_System\_Xml\_XmlWriter\_), 
[OrientationBase.GetSchema\(\)](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_GetSchema), 
[OrientationBase.WriteRotationAnglesToXml\(XmlWriter\)](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_WriteRotationAnglesToXml\_System\_Xml\_XmlWriter\_), 
[OrientationBase.UseExpression](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_UseExpression), 
[OrientationBase.RotationAngles](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_RotationAngles), 
[OrientationBase.RotationAxis](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_RotationAxis), 
[OrientationBase.AngleType](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_AngleType), 
[OrientationBase.RotationType](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_RotationType), 
[OrientationBase.IsParameterized](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_IsParameterized), 
[OrientationBase.ValueImpl](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_ValueImpl), 
[OrientationBase.Value](VM.Managed.OrientationBase.md\#VM\_Managed\_OrientationBase\_Value), 
[Expression.g\_bSkipUpdate](VM.Managed.Expression.md\#VM\_Managed\_Expression\_g\_bSkipUpdate), 
[Expression.m\_pExpressionHandler](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_pExpressionHandler), 
[Expression.m\_strValue](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_strValue), 
[Expression.m\_dicReferenceObject](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_dicReferenceObject), 
[Expression.m\_lstReferenceObject](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_lstReferenceObject), 
[Expression.m\_linkCollectionReferenceObject](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_linkCollectionReferenceObject), 
[Expression.Initialize\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_Initialize), 
[Expression.UpdateByReferenceObject\(object, LinkEventArgs\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_UpdateByReferenceObject\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Expression.AddReferenceObject\(UIntPtr\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_AddReferenceObject\_System\_UIntPtr\_), 
[Expression.CheckReferenceObject\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_CheckReferenceObject), 
[Expression.SetDefaultString\(ref string\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_SetDefaultString\_System\_String\_\_), 
[Expression.ConvertToValue\(string\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_ConvertToValue\_System\_String\_), 
[Expression.ParseToValue\(char\*\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_ParseToValue\_System\_Char\_\_), 
[Expression.GetNumericValue\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_GetNumericValue), 
[Expression.OnDeserialization\(object\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_OnDeserialization\_System\_Object\_), 
[Expression.Uninitialize\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_Uninitialize), 
[Expression.String](VM.Managed.Expression.md\#VM\_Managed\_Expression\_String), 
[LinkContainer.SetModified\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetModified), 
[LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnAdded\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnRemoved\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.GetTargetListForUpdate\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetTargetListForUpdate), 
[LinkContainer.SkipUpdateObjectImpl\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SkipUpdateObjectImpl), 
[LinkContainer.Initialize\(Unit.ConvertFactor\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[LinkContainer.SetFlagWhenXMLFile\(string, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetFlagWhenXMLFile\_System\_String\_System\_Boolean\_), 
[LinkContainer.IsSerializableEvent\(Delegate\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsSerializableEvent\_System\_Delegate\_), 
[LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetSerializedData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkAddedToDocument\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRemovedFromDocument\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.OnLinkReserved\(ILink, object, EventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnLinkReserved\_VM\_Managed\_ILink\_System\_Object\_System\_EventArgs\_), 
[LinkContainer.CanBeDestroy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CanBeDestroy\_System\_Object\_), 
[LinkContainer.DisposeManagedResources\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_DisposeManagedResources), 
[LinkContainer.SetContainer\(IOwned, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[LinkContainer.OnChildUpdated\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnChildUpdated\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnContainerDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnContainerDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnDeserialization\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDeserialization\_System\_Object\_), 
[LinkContainer.Verify\(VerifiedResult\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Verify\_VM\_Managed\_VerifiedResult\_), 
[LinkContainer.GetCopy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetCopy\_System\_Object\_), 
[LinkContainer.Dispose\(bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Dispose\_System\_Boolean\_), 
[LinkContainer.ClearChildInfoBeforeDeserialize](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ClearChildInfoBeforeDeserialize), 
[LinkContainer.Container](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Container), 
[LinkContainer.Owner](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Owner), 
[LinkContainer.Document](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Document), 
[LinkContainer.ID](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ID), 
[LinkContainer.IsChildExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsChildExternable), 
[LinkContainer.IsExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsExternable), 
[LinkContainer.OnRemoved](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnRemoved), 
[LinkContainer.OnAdded](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnAdded), 
[LinkContainer.OnDestroy](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroy), 
[LinkContainer.OnDestroying](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroying), 
[LinkContainer.OnUpdate](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdate), 
[LinkContainer.OnUpdating](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdating), 
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

### <a id="VM_Managed_OrientationFixedAngle__ctor_VM_RotationAxes_VM_AngleTypes_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_"></a> OrientationFixedAngle\(RotationAxes, AngleTypes, Variable, Variable, Variable\)

Initializes a new instance of the <xref href="VM.Managed.OrientationFixedAngle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OrientationFixedAngle(RotationAxes eAxes, AngleTypes enAngleType, Variable varAlpha, Variable varBeta, Variable varGamma)
```

#### Parameters

`eAxes` RotationAxes

The euler angle type.

`enAngleType` AngleTypes

The angle type.

`varAlpha` [Variable](VM.Managed.Variable.md)

The value of alpha.

`varBeta` [Variable](VM.Managed.Variable.md)

The value of beta.

`varGamma` [Variable](VM.Managed.Variable.md)

The value of gamma.

### <a id="VM_Managed_OrientationFixedAngle__ctor"></a> OrientationFixedAngle\(\)

Initializes a new instance of the <xref href="VM.Managed.OrientationFixedAngle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OrientationFixedAngle()
```

## Properties

### <a id="VM_Managed_OrientationFixedAngle_RotationType"></a> RotationType

Gets the specifies rotation type.

```csharp
public override RotationTypes RotationType { get; }
```

#### Property Value

 RotationTypes

### <a id="VM_Managed_OrientationFixedAngle_Value"></a> Value

Gets the information of orientation(OMatrix type).

```csharp
public override OMatrix Value { get; set; }
```

#### Property Value

 [OMatrix](VM.Managed.OMatrix.md)

