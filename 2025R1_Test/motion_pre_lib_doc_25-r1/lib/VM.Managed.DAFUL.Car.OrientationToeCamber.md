#  Class OrientationToeCamber

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The toe-camber orientation class

```csharp
public class OrientationToeCamber : OrientationBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IExpression, IOrientationBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
Expression ← 
OrientationBase ← 
[OrientationToeCamber](VM.Managed.DAFUL.Car.OrientationToeCamber.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IExpression, 
IOrientationBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider

#### Inherited Members

OrientationBase.IsParametric\(\), 
OrientationBase.IsParametric\(string\), 
OrientationBase.ReadXml\(XmlReader\), 
OrientationBase.WriteXml\(XmlWriter\), 
OrientationBase.GetSchema\(\), 
OrientationBase.WriteRotationAnglesToXml\(XmlWriter\), 
OrientationBase.UseExpression, 
OrientationBase.RotationAngles, 
OrientationBase.RotationAxis, 
OrientationBase.AngleType, 
OrientationBase.RotationType, 
OrientationBase.IsParameterized, 
OrientationBase.ValueImpl, 
OrientationBase.Value, 
Expression.g\_bSkipUpdate, 
Expression.m\_pExpressionHandler, 
Expression.m\_strValue, 
Expression.m\_dicReferenceObject, 
Expression.m\_lstReferenceObject, 
Expression.m\_linkCollectionReferenceObject, 
Expression.Initialize\(\), 
Expression.UpdateByReferenceObject\(object, LinkEventArgs\), 
Expression.AddReferenceObject\(UIntPtr\), 
Expression.CheckReferenceObject\(\), 
Expression.SetDefaultString\(ref string\), 
Expression.ConvertToValue\(string\), 
Expression.ParseToValue\(char\*\), 
Expression.GetNumericValue\(\), 
Expression.OnDeserialization\(object\), 
Expression.Uninitialize\(\), 
Expression.String, 
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

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber__ctor"></a> OrientationToeCamber\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.OrientationToeCamber" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OrientationToeCamber()
```

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber__ctor_System_Double_System_Double_VM_AngleTypes_VM_Managed_SymmetricType_"></a> OrientationToeCamber\(double, double, AngleTypes, SymmetricType\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.OrientationToeCamber" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OrientationToeCamber(double dToe, double dCamber, AngleTypes angleType, SymmetricType symType)
```

#### Parameters

`dToe` [double](https://learn.microsoft.com/dotnet/api/system.double)

The toe angle.

`dCamber` [double](https://learn.microsoft.com/dotnet/api/system.double)

The camber angle.

`angleType` AngleTypes

Type of the angle.

`symType` SymmetricType

The symmetric type.

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber__ctor_System_String_System_String_VM_AngleTypes_VM_Managed_SymmetricType_"></a> OrientationToeCamber\(string, string, AngleTypes, SymmetricType\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.OrientationToeCamber" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OrientationToeCamber(string strToe, string strCamber, AngleTypes angleType, SymmetricType symType)
```

#### Parameters

`strToe` [string](https://learn.microsoft.com/dotnet/api/system.string)

The toe angle.

`strCamber` [string](https://learn.microsoft.com/dotnet/api/system.string)

The camber angle.

`angleType` AngleTypes

Type of the angle.

`symType` SymmetricType

The symmetric type.

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_AngleTypes_VM_Managed_SymmetricType_"></a> OrientationToeCamber\(Variable, Variable, AngleTypes, SymmetricType\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.OrientationToeCamber" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OrientationToeCamber(Variable varToe, Variable varCamber, AngleTypes angleType, SymmetricType symType)
```

#### Parameters

`varToe` Variable

The toe angle.

`varCamber` Variable

The camber angle.

`angleType` AngleTypes

Type of the angle.

`symType` SymmetricType

The symmetric type.

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber__ctor_VM_Managed_DesignVariable_VM_Managed_DesignVariable_VM_AngleTypes_VM_Managed_SymmetricType_"></a> OrientationToeCamber\(DesignVariable, DesignVariable, AngleTypes, SymmetricType\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.OrientationToeCamber" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OrientationToeCamber(DesignVariable dvToe, DesignVariable dvCamber, AngleTypes angleType, SymmetricType symType)
```

#### Parameters

`dvToe` DesignVariable

The toe angle.

`dvCamber` DesignVariable

The camber angle.

`angleType` AngleTypes

Type of the angle.

`symType` SymmetricType

The symmetric type.

## Properties

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_Camber"></a> Camber

Gets or sets the camber angle.

```csharp
public ExpressionValueVariable Camber { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_IsParameterized"></a> IsParameterized

Gets the parametric.

```csharp
public override bool IsParameterized { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_SymmetricType"></a> SymmetricType

Gets or sets the symmetric type.

```csharp
public SymmetricType SymmetricType { get; set; }
```

#### Property Value

 SymmetricType

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_Toe"></a> Toe

Gets or sets the toe angle.

```csharp
public ExpressionValueVariable Toe { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_ToeCamberAngle"></a> ToeCamberAngle

Gets or sets the type of the toe camber angle.

```csharp
public AngleTypes ToeCamberAngle { get; set; }
```

#### Property Value

 AngleTypes

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_Value"></a> Value

Gets the information of orientation(OMatrix type).

```csharp
public override OMatrix Value { get; }
```

#### Property Value

 OMatrix

## Methods

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, 
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) 
from this method, and instead, if specifying a custom schema is required, 
apply the XmlSchemaProviderAttribute to the class.

```csharp
public override XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The update event information.

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_DAFUL_Car_OrientationToeCamber_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

