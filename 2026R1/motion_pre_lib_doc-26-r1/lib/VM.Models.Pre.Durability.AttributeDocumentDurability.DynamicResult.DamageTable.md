#  Class AttributeDocumentDurability.DynamicResult.DamageTable

Namespace: [VM.Models.Pre.Durability](VM.Models.Pre.Durability.md)  
Assembly: VM.Models.Pre.Durability.dll  

Damage Table

```csharp
public class AttributeDocumentDurability.DynamicResult.DamageTable : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[AttributeDocumentDurability.DynamicResult.DamageTable](VM.Models.Pre.Durability.AttributeDocumentDurability.DynamicResult.DamageTable.md)

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

### <a id="VM_Models_Pre_Durability_AttributeDocumentDurability_DynamicResult_DamageTable__ctor"></a> DamageTable\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Durability.AttributeDocumentDurability.DynamicResult.DamageTable" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DamageTable()
```

### <a id="VM_Models_Pre_Durability_AttributeDocumentDurability_DynamicResult_DamageTable__ctor_System_String_System_Double_System_Int32_"></a> DamageTable\(string, double, int\)

Initializes a new instance of the <xref href="VM.Models.Pre.Durability.AttributeDocumentDurability.DynamicResult.DamageTable" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DamageTable(string strResultRelativeFilePath, double dTimeScale, int nNumberOfPattern)
```

#### Parameters

`strResultRelativeFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The result relative file path.

`dTimeScale` [double](https://learn.microsoft.com/dotnet/api/system.double)

The time scale.

`nNumberOfPattern` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of pattern.

## Properties

### <a id="VM_Models_Pre_Durability_AttributeDocumentDurability_DynamicResult_DamageTable_NumberOfPattern"></a> NumberOfPattern

Gets or sets the number of pattern.

```csharp
public ExpressionValueVariable NumberOfPattern { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Durability_AttributeDocumentDurability_DynamicResult_DamageTable_ResultRelativeFilePath"></a> ResultRelativeFilePath

Gets or sets the result relative file path.

```csharp
public string ResultRelativeFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Durability_AttributeDocumentDurability_DynamicResult_DamageTable_TimeScale"></a> TimeScale

Gets or sets the time scale.

```csharp
public ExpressionValueVariable TimeScale { get; set; }
```

#### Property Value

 ExpressionValueVariable

