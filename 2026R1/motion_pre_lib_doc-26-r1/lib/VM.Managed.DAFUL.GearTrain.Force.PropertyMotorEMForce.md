# Class PropertyMotorEMForce
<a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Force](VM.Managed.DAFUL.GearTrain.Force.md)  
Assembly: VMDGearTrain.dll  

Property of Motor EM Force

```csharp
public class PropertyMotorEMForce : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
[Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs) ← 
[PropertyMotorEMForce](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.md)

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
IHasID

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce__ctor"></a> PropertyMotorEMForce\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyMotorEMForce()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_Depth"></a> Depth

Gets or sets the depth.

```csharp
public ExpressionValueVariable Depth { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

Depth is null.

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_FileFormat"></a> FileFormat

Gets or sets the file format.

```csharp
public PropertyMotorEMForce.FileFormatType FileFormat { get; set; }
```

#### Property Value

 [PropertyMotorEMForce](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.md).[FileFormatType](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.FileFormatType.md)

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_ForceUNVFiles"></a> ForceUNVFiles

Gets or sets the force unv files.

```csharp
public PropertyMotorEMForce.UNVFileWithRPM[] ForceUNVFiles { get; set; }
```

#### Property Value

 [PropertyMotorEMForce](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.md).[UNVFileWithRPM](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFileWithRPM.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_GeometryUNVFile"></a> GeometryUNVFile

Gets or sets the geometry unv file.

```csharp
public PropertyMotorEMForce.UNVFile GeometryUNVFile { get; set; }
```

#### Property Value

 [PropertyMotorEMForce](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.md).[UNVFile](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile.md)

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_InitialPositionAngle"></a> InitialPositionAngle

Gets or sets the initial position angle.

```csharp
public ExpressionValueVariable InitialPositionAngle { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

Initial position angle is null.

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_MaxwellForceFile"></a> MaxwellForceFile

Gets or sets the Maxwell force file.

```csharp
public string MaxwellForceFile { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_MaxwellGeometryFile"></a> MaxwellGeometryFile

Gets or sets the Maxwell geometry file.

```csharp
public string MaxwellGeometryFile { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_NumberOfLayer"></a> NumberOfLayer

Gets or sets the number of layer.

```csharp
public ExpressionValueVariable NumberOfLayer { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

Number of layer is null.

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_ReferenceFrame"></a> ReferenceFrame

Gets or sets the reference frame.

```csharp
public TransformBase ReferenceFrame { get; set; }
```

#### Property Value

 TransformBase

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_ReferenceOfRotational"></a> ReferenceOfRotational

Gets or sets the reference Of rotational.

```csharp
public ObjectBase ReferenceOfRotational { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_ResultFile"></a> ResultFile

Gets or sets the result file.

```csharp
public string ResultFile { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_Scale"></a> Scale

Gets or sets the scale.

```csharp
public Scale Scale { get; set; }
```

#### Property Value

 [Scale](VM.Managed.DAFUL.GearTrain.Force.MoterEM.Scale.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_CheckAMGeometryAndForceFile_VM_Managed_Document_System_String_System_String_VM_Managed_TMatrix_"></a> CheckAMGeometryAndForceFile\(Document, string, string, TMatrix\)

```csharp
public static void CheckAMGeometryAndForceFile(Document doc, string strGeometryAMFilePath, string strForceAMFilePath, TMatrix transform)
```

#### Parameters

`doc` Document

`strGeometryAMFilePath` string

`strForceAMFilePath` string

`transform` TMatrix

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_CheckResultAMFile_System_String_"></a> CheckResultAMFile\(string\)

Check result AM file

```csharp
public static bool CheckResultAMFile(string strResultAMFilePath)
```

#### Parameters

`strResultAMFilePath` string

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_CheckUNVFiles_VM_Managed_Document_System_Collections_Generic_IEnumerable_System_String__VM_Managed_TMatrix_"></a> CheckUNVFiles\(Document, IEnumerable<string\>, TMatrix\)

Check UNV files

```csharp
public static void CheckUNVFiles(Document document, IEnumerable<string> filesPath, TMatrix transform)
```

#### Parameters

`document` Document

The document.

`filesPath` IEnumerable<string\>

The force UNV files.

`transform` TMatrix

The transform.

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_CheckUNVFiles_VM_Managed_Document_System_String_System_String___VM_Managed_TMatrix_"></a> CheckUNVFiles\(Document, string, string\[\], TMatrix\)

Check UNV files

```csharp
public static void CheckUNVFiles(Document doc, string strGeometryUNVFilePath, string[] arForceUNVFilePath, TMatrix transform)
```

#### Parameters

`doc` Document

The document.

`strGeometryUNVFilePath` string

The geometry UNV file.

`arForceUNVFilePath` string\[\]

The force UNV files.

`transform` TMatrix

The transform.

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_GetGlobalPosition_VM_Vector_VM_TMatrix_"></a> GetGlobalPosition\(Vector, TMatrix\)

Gets global position

```csharp
public static Vector GetGlobalPosition(Vector vecLocal, TMatrix matT)
```

#### Parameters

`vecLocal` Vector

The local position

`matT` TMatrix

The Reference matrix

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_GetNodeCountFromAMFile_VM_Managed_Document_System_String_System_String_VM_Managed_TMatrix_"></a> GetNodeCountFromAMFile\(Document, string, string, TMatrix\)

```csharp
public static Tuple<int, int> GetNodeCountFromAMFile(Document doc, string strGeometryAMFilePath, string strForceAMFilePath, TMatrix transform)
```

#### Parameters

`doc` Document

`strGeometryAMFilePath` string

`strForceAMFilePath` string

`transform` TMatrix

#### Returns

 Tuple<int, int\>

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_GetNodeCountFromUNVFile_VM_Managed_Document_System_String_VM_Managed_TMatrix_"></a> GetNodeCountFromUNVFile\(Document, string, TMatrix\)

Get node count from UNV file.

```csharp
public static int GetNodeCountFromUNVFile(Document document, string forceUNVFilePath, TMatrix transform)
```

#### Parameters

`document` Document

The document.

`forceUNVFilePath` string

The force UNV file.

`transform` TMatrix

The transform.

#### Returns

 int

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_GetNodeCountFromUNVFile_VM_Managed_Document_System_String_System_String_VM_Managed_TMatrix_"></a> GetNodeCountFromUNVFile\(Document, string, string, TMatrix\)

Get node count from UNV file.

```csharp
public static int GetNodeCountFromUNVFile(Document doc, string strGeometryUNVFilePath, string strForceUNVFilePath, TMatrix transform)
```

#### Parameters

`doc` Document

The document.

`strGeometryUNVFilePath` string

The geometry UNV file.

`strForceUNVFilePath` string

The force UNV file.

`transform` TMatrix

The transform.

#### Returns

 int

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_GetRotorPosition_VM_Managed_Document_System_String_System_Int32_System_Int32_"></a> GetRotorPosition\(Document, string, int, int\)

Gets rotor position

```csharp
public Vector GetRotorPosition(Document doc, string strResultFile, int nIndexRotor, int nTotalRotor)
```

#### Parameters

`doc` Document

The document

`strResultFile` string

The result file

`nIndexRotor` int

The rotor index

`nTotalRotor` int

The total rotor number

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_GetRotorPosition_VM_Managed_Document_System_String_VM_TMatrix_System_Int32_System_Int32_"></a> GetRotorPosition\(Document, string, TMatrix, int, int\)

Gets rotor position

```csharp
public static Vector GetRotorPosition(Document doc, string strResultFile, TMatrix matRef, int nIndexRotor, int nTotalRotor)
```

#### Parameters

`doc` Document

The document

`strResultFile` string

The result file

`matRef` TMatrix

The reference matrix

`nIndexRotor` int

The rotor index

`nTotalRotor` int

The total rotor number

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_ReadAMGeometryAndForceFile_VM_Managed_Document_System_String_System_String_VM_Managed_TMatrix_System_Collections_Generic_Dictionary_VM_Managed_VectorBase_VM_Managed_VectorBase___System_Collections_Generic_Dictionary_VM_Managed_VectorBase_VM_Managed_VectorBase___"></a> ReadAMGeometryAndForceFile\(Document, string, string, TMatrix, out Dictionary<VectorBase, VectorBase\>, out Dictionary<VectorBase, VectorBase\>\)

Read AM geometry and force file

```csharp
public static void ReadAMGeometryAndForceFile(Document doc, string strGeometryAMFilePath, string strForceAMFilePath, TMatrix transform, out Dictionary<VectorBase, VectorBase> startToEndPointStator, out Dictionary<VectorBase, VectorBase> startToEndPointRotor)
```

#### Parameters

`doc` Document

The document.

`strGeometryAMFilePath` string

The AM geometry file path

`strForceAMFilePath` string

The AM force file path

`transform` TMatrix

The transform

`startToEndPointStator` Dictionary<VectorBase, VectorBase\>

The stator start and end point container.

`startToEndPointRotor` Dictionary<VectorBase, VectorBase\>

The rotor start and end point container.

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_ReadResultAMFile_VM_Managed_Document_System_String_VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_MaxwellResultInformation__"></a> ReadResultAMFile\(Document, string, out MaxwellResultInformation\)

Read result AM file

```csharp
public static void ReadResultAMFile(Document doc, string strResultAMFilePath, out PropertyMotorEMForce.MaxwellResultInformation maxwellResultInformation)
```

#### Parameters

`doc` Document

The document.

`strResultAMFilePath` string

The force file path.

`maxwellResultInformation` [PropertyMotorEMForce](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.md).[MaxwellResultInformation](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.MaxwellResultInformation.md)

The maxwell result information.

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_ReadUNVFile_VM_Managed_Document_System_Collections_Generic_IEnumerable_System_String__VM_Managed_TMatrix_"></a> ReadUNVFile\(Document, IEnumerable<string\>, TMatrix\)

Read UNV files

```csharp
public static IEnumerable<Dictionary<VectorBase, VectorBase>> ReadUNVFile(Document document, IEnumerable<string> filesPath, TMatrix transform)
```

#### Parameters

`document` Document

The document.

`filesPath` IEnumerable<string\>

The force UNV files.

`transform` TMatrix

The transform.

#### Returns

 IEnumerable<Dictionary<VectorBase, VectorBase\>\>

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_ReadUNVFile_VM_Managed_Document_System_String_System_String___VM_Managed_TMatrix_System_Collections_Generic_Dictionary_VM_Managed_VectorBase_VM_Managed_VectorBase_____"></a> ReadUNVFile\(Document, string, string\[\], TMatrix, out Dictionary<VectorBase, VectorBase\>\[\]\)

Read UNV files

```csharp
public static void ReadUNVFile(Document doc, string strGeometryUNVFilePath, string[] arForceUNVFilePath, TMatrix transform, out Dictionary<VectorBase, VectorBase>[] startToEndPoint)
```

#### Parameters

`doc` Document

The document.

`strGeometryUNVFilePath` string

The geometry UNV file.

`arForceUNVFilePath` string\[\]

The force UNV files.

`transform` TMatrix

The transform.

`startToEndPoint` Dictionary<VectorBase, VectorBase\>\[\]

The start and end point container.

