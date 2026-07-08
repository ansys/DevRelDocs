# Class MatrixForceUserSubroutine
<a id="VM_Managed_DAFUL_Force_MatrixForceUserSubroutine"></a>

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFP.dll  

This class is to represent the matrix force charactoristic properties of user-subroutine type.

```csharp
public sealed class MatrixForceUserSubroutine : MatrixForceFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[MatrixForceFunction](VM.Managed.DAFUL.Force.MatrixForceFunction.md) ← 
[MatrixForceUserSubroutine](VM.Managed.DAFUL.Force.MatrixForceUserSubroutine.md)

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
IVerifiable, 
IReservable

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

### <a id="VM_Managed_DAFUL_Force_MatrixForceUserSubroutine__ctor"></a> MatrixForceUserSubroutine\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.MatrixForceUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MatrixForceUserSubroutine()
```

### <a id="VM_Managed_DAFUL_Force_MatrixForceUserSubroutine__ctor_VM_Managed_DAFUL_Force_PropertyMatrix_"></a> MatrixForceUserSubroutine\(PropertyMatrix\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.MatrixForceUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MatrixForceUserSubroutine(PropertyMatrix owner)
```

#### Parameters

`owner` [PropertyMatrix](VM.Managed.DAFUL.Force.PropertyMatrix.md)

The owner matrix force property.

## Properties

### <a id="VM_Managed_DAFUL_Force_MatrixForceUserSubroutine_Type"></a> Type

Gets the function type.

```csharp
public override MatrixForceFunction.FunctionType Type { get; }
```

#### Property Value

 [MatrixForceFunction](VM.Managed.DAFUL.Force.MatrixForceFunction.md).[FunctionType](VM.Managed.DAFUL.Force.MatrixForceFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Force_MatrixForceUserSubroutine_UserSubroutine"></a> UserSubroutine

Gets or sets the user subroutine.

```csharp
public UserSubroutine UserSubroutine { get; set; }
```

#### Property Value

 [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

## Methods

### <a id="VM_Managed_DAFUL_Force_MatrixForceUserSubroutine_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Force_MatrixForceUserSubroutine_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The reader.

### <a id="VM_Managed_DAFUL_Force_MatrixForceUserSubroutine_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

