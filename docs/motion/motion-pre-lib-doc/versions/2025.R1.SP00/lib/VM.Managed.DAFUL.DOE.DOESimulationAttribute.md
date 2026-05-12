#  Class DOESimulationAttribute

Namespace: [VM.Managed.DAFUL.DOE](VM.Managed.DAFUL.DOE.md)  
Assembly: VMDDOE.dll  

```csharp
public class DOESimulationAttribute : AttributeBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
AttributeBase ← 
[DOESimulationAttribute](VM.Managed.DAFUL.DOE.DOESimulationAttribute.md)

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

AttributeBase.OnDeserializationAttribute\(\), 
AttributeBase.LinkRequestUpdate\(object, LinkEventArgs\), 
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

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute__ctor"></a> DOESimulationAttribute\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.DOE.DOESimulationAttribute" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DOESimulationAttribute()
```

## Properties

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_DesignParameters"></a> DesignParameters

```csharp
public DesignParameterInfo[] DesignParameters { get; set; }
```

#### Property Value

 [DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md)\[\]

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_PerformanceIndexs"></a> PerformanceIndexs

```csharp
public PerformanceIndexInfo[] PerformanceIndexs { get; set; }
```

#### Property Value

 [PerformanceIndexInfo](VM.Managed.DAFUL.DOE.PerformanceIndexInfo.md)\[\]

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_RunIndexs"></a> RunIndexs

```csharp
public int[] RunIndexs { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_TypeOfDOE"></a> TypeOfDOE

```csharp
public DOEType TypeOfDOE { get; set; }
```

#### Property Value

 [DOEType](VM.Managed.DAFUL.DOE.DOEType.md)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_UseAppendDateAndTime"></a> UseAppendDateAndTime

```csharp
public bool UseAppendDateAndTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_UseCreateGraphicFile"></a> UseCreateGraphicFile

```csharp
public bool UseCreateGraphicFile { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_UseCreateModel"></a> UseCreateModel

```csharp
public bool UseCreateModel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_UseSimResultPath"></a> UseSimResultPath

```csharp
public bool UseSimResultPath { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute__Level"></a> \_Level

```csharp
public uint _Level { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute__ResultPath"></a> \_ResultPath

```csharp
public string _ResultPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute__Run"></a> \_Run

```csharp
public double _Run { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_FindDP_VM_Managed_ObjectBase_VM_Managed_DAFUL_DOE_DesignParameterInfo_ValueType_"></a> FindDP\(ObjectBase, ValueType\)

```csharp
public DesignParameterInfo FindDP(ObjectBase target, DesignParameterInfo.ValueType type)
```

#### Parameters

`target` ObjectBase

`type` [DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md).[ValueType](VM.Managed.DAFUL.DOE.DesignParameterInfo.ValueType.md)

#### Returns

 [DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_FindPI_VM_Managed_ObjectBase_"></a> FindPI\(ObjectBase\)

```csharp
public PerformanceIndexInfo FindPI(ObjectBase target)
```

#### Parameters

`target` ObjectBase

#### Returns

 [PerformanceIndexInfo](VM.Managed.DAFUL.DOE.PerformanceIndexInfo.md)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_GetAbsoluteResultPath_VM_Managed_Document_"></a> GetAbsoluteResultPath\(Document\)

```csharp
public string GetAbsoluteResultPath(Document document)
```

#### Parameters

`document` Document

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_GetAllFiles"></a> GetAllFiles\(\)

```csharp
public List<string> GetAllFiles()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_GetCaseCount"></a> GetCaseCount\(\)

```csharp
public int GetCaseCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_DOE_DOESimulationAttribute_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

