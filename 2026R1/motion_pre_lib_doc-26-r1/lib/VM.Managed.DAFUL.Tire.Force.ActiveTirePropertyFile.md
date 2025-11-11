# Class ActiveTirePropertyFile
<a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile"></a>

Namespace: [VM.Managed.DAFUL.Tire.Force](VM.Managed.DAFUL.Tire.Force.md)  
Assembly: VMDTire.dll  

This class is to represent the tire property file for activation.

```csharp
public class ActiveTirePropertyFile : Object<ObjectEventCore>, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[ActiveTirePropertyFile](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.md)

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
IAttributeContainer

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile__ctor"></a> ActiveTirePropertyFile\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ActiveTirePropertyFile()
```

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile__ctor_System_String_"></a> ActiveTirePropertyFile\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ActiveTirePropertyFile(string strFilePath)
```

#### Parameters

`strFilePath` string

The file path.

## Properties

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_FilePath"></a> FilePath

Gets or sets the file path.
Use SetFilePath() when this instance sets for undo/redo

```csharp
public string FilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_LastModifyTime"></a> LastModifyTime

Gets or sets the last modify time.

```csharp
public DateTime LastModifyTime { get; set; }
```

#### Property Value

 DateTime

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_TireType"></a> TireType

Gets the tire type.
Use SetTireType() when this instance sets for undo/redo

```csharp
public ActiveTirePropertyFile.TirePropertyType TireType { get; set; }
```

#### Property Value

 [ActiveTirePropertyFile](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.md).[TirePropertyType](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.TirePropertyType.md)

## Methods

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_ConvertXmlAfterReadTIRFile_VM_Managed_Document_"></a> ConvertXmlAfterReadTIRFile\(Document\)

Converts the XML after read TIR file.

```csharp
public string ConvertXmlAfterReadTIRFile(Document doc)
```

#### Parameters

`doc` Document

The doc.

#### Returns

 string

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_ConvertXmlAfterReadTIRFile"></a> ConvertXmlAfterReadTIRFile\(\)

Converts the XML after read TIR file.

```csharp
public string ConvertXmlAfterReadTIRFile()
```

#### Returns

 string

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_GetTireType_System_String_"></a> GetTireType\(string\)

Gets the type of the tire.

```csharp
public ActiveTirePropertyFile.TirePropertyType GetTireType(string strTireFile)
```

#### Parameters

`strTireFile` string

The STR tire file.

#### Returns

 [ActiveTirePropertyFile](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.md).[TirePropertyType](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.TirePropertyType.md)

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_GetTireType_System_String_VM_Managed_Document_"></a> GetTireType\(string, Document\)

Gets the type of the tire.

```csharp
public ActiveTirePropertyFile.TirePropertyType GetTireType(string strTireFile, Document doc)
```

#### Parameters

`strTireFile` string

The STR tire file.

`doc` Document

The Document.

#### Returns

 [ActiveTirePropertyFile](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.md).[TirePropertyType](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.TirePropertyType.md)

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_GetTypeFromFile_VM_Managed_Document_"></a> GetTypeFromFile\(Document\)

Gets the type from file.

```csharp
public ActiveTirePropertyFile.TirePropertyType GetTypeFromFile(Document doc)
```

#### Parameters

`doc` Document

The doc.

#### Returns

 [ActiveTirePropertyFile](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.md).[TirePropertyType](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.TirePropertyType.md)

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_SetFilePath_System_String_"></a> SetFilePath\(string\)

Set file path.

```csharp
public void SetFilePath(string strFile)
```

#### Parameters

`strFile` string

The file path.

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_SetLastModifyTime_System_DateTime_"></a> SetLastModifyTime\(DateTime\)

Set last modified time.

```csharp
public void SetLastModifyTime(DateTime dt)
```

#### Parameters

`dt` DateTime

The time.

### <a id="VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_SetTireType_VM_Managed_DAFUL_Tire_Force_ActiveTirePropertyFile_TirePropertyType_"></a> SetTireType\(TirePropertyType\)

Set tire type.

```csharp
public void SetTireType(ActiveTirePropertyFile.TirePropertyType type)
```

#### Parameters

`type` [ActiveTirePropertyFile](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.md).[TirePropertyType](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.TirePropertyType.md)

The tire type.

