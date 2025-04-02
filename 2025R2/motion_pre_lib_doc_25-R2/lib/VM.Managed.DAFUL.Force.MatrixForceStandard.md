#  Class MatrixForceStandard

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFP.dll  

This class is to represent the matrix force charactoristic properties of standard type.

```csharp
public sealed class MatrixForceStandard : MatrixForceFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[MatrixForceFunction](VM.Managed.DAFUL.Force.MatrixForceFunction.md) ← 
[MatrixForceStandard](VM.Managed.DAFUL.Force.MatrixForceStandard.md)

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

[MatrixForceFunction.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Force.MatrixForceFunction.md\#VM\_Managed\_DAFUL\_Force\_MatrixForceFunction\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[MatrixForceFunction.WriteTemplate\(XmlWriter\)](VM.Managed.DAFUL.Force.MatrixForceFunction.md\#VM\_Managed\_DAFUL\_Force\_MatrixForceFunction\_WriteTemplate\_System\_Xml\_XmlWriter\_), 
[MatrixForceFunction.ReadTemplate\(XmlReader\)](VM.Managed.DAFUL.Force.MatrixForceFunction.md\#VM\_Managed\_DAFUL\_Force\_MatrixForceFunction\_ReadTemplate\_System\_Xml\_XmlReader\_), 
[MatrixForceFunction.RefLength](VM.Managed.DAFUL.Force.MatrixForceFunction.md\#VM\_Managed\_DAFUL\_Force\_MatrixForceFunction\_RefLength), 
[MatrixForceFunction.RefAngle](VM.Managed.DAFUL.Force.MatrixForceFunction.md\#VM\_Managed\_DAFUL\_Force\_MatrixForceFunction\_RefAngle), 
[MatrixForceFunction.IsUseSynchro](VM.Managed.DAFUL.Force.MatrixForceFunction.md\#VM\_Managed\_DAFUL\_Force\_MatrixForceFunction\_IsUseSynchro), 
[MatrixForceFunction.Type](VM.Managed.DAFUL.Force.MatrixForceFunction.md\#VM\_Managed\_DAFUL\_Force\_MatrixForceFunction\_Type), 
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
LinkContainer.SetContainer\(IOwned, bool\), 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard__ctor"></a> MatrixForceStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.MatrixForceStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MatrixForceStandard()
```

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard__ctor_VM_Managed_DAFUL_Force_PropertyMatrix_"></a> MatrixForceStandard\(PropertyMatrix\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.MatrixForceStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MatrixForceStandard(PropertyMatrix owner)
```

#### Parameters

`owner` [PropertyMatrix](VM.Managed.DAFUL.Force.PropertyMatrix.md)

The owner matrix force property.

## Properties

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_DampingType"></a> DampingType

Gets or sets the type of the viscous damping.

```csharp
public MatrixForceStandard.ViscousDampingType DampingType { get; set; }
```

#### Property Value

 [MatrixForceStandard](VM.Managed.DAFUL.Force.MatrixForceStandard.md).[ViscousDampingType](VM.Managed.DAFUL.Force.MatrixForceStandard.ViscousDampingType.md)

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_MatCRR"></a> MatCRR

Gets or sets the right-bottom 3*3 matrix of damping matrix.

```csharp
public double[] MatCRR { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_MatCRT"></a> MatCRT

Gets or sets the left-bottom 3*3 matrix of damping matrix.

```csharp
public double[] MatCRT { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_MatCTR"></a> MatCTR

Gets or sets the right-top 3*3 matrix of damping matrix.

```csharp
public double[] MatCTR { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_MatCTT"></a> MatCTT

Gets or sets the the left-top 3*3 matrix of damping matrix.

```csharp
public double[] MatCTT { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_MatKRR"></a> MatKRR

Gets or sets the right-bottom 3*3 matrix of stiffness matrix.

```csharp
public double[] MatKRR { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_MatKRT"></a> MatKRT

Gets or sets the left-bottom 3*3 matrix of stiffness matrix.

```csharp
public double[] MatKRT { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_MatKTR"></a> MatKTR

Gets or sets the right-top 3*3 matrix of stiffness matrix.

```csharp
public double[] MatKTR { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_MatKTT"></a> MatKTT

Gets or sets the left-top 3*3 matrix of stiffness matrix.

```csharp
public double[] MatKTT { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_PreLoad"></a> PreLoad

Gets or sets the pre load.

```csharp
public double[] PreLoad { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_PreTorque"></a> PreTorque

Gets or sets the pre torque.

```csharp
public double[] PreTorque { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_Ratio"></a> Ratio

Gets or sets the ratio.

```csharp
public ExpressionValueVariable Ratio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_Type"></a> Type

Gets the function type.

```csharp
public override MatrixForceFunction.FunctionType Type { get; }
```

#### Property Value

 [MatrixForceFunction](VM.Managed.DAFUL.Force.MatrixForceFunction.md).[FunctionType](VM.Managed.DAFUL.Force.MatrixForceFunction.FunctionType.md)

## Methods

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Force_MatrixForceStandard_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

