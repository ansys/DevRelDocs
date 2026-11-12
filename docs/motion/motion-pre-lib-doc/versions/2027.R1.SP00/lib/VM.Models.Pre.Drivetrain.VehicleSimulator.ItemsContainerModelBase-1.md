# Class ItemsContainerModelBase<TObject\>
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public abstract class ItemsContainerModelBase<TObject> : ValidatableBase, IObservableObject, IDisposableObject, IValidatable where TObject : class, IHasGuid, IDisposable
```

#### Type Parameters

`TObject` 

#### Inheritance

object ← 
ObservableObject ← 
ValidatableBase ← 
[ItemsContainerModelBase<TObject\>](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IValidatable

#### Inherited Members

ValidatableBase.RaisePropertyChanged\(string\), 
ValidatableBase.SuspendValidate\(\), 
ValidatableBase.Validate\(\), 
ValidatableBase.Validate\(ValidationContext\), 
ValidatableBase.DisposeManagedResources\(\), 
ValidatableBase.CanValidate, 
ValidatableBase.Errors, 
ValidatableBase.HasValidationAttribute, 
ValidatableBase.HasValidator, 
ValidatableBase.IsValid, 
ValidatableBase.ValidateTrigger, 
ValidatableBase.ErrorsChanged, 
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

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1__ctor"></a> ItemsContainerModelBase\(\)

```csharp
[JsonConstructor]
public ItemsContainerModelBase()
```

## Fields

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_cleanUpTarget"></a> cleanUpTarget

```csharp
protected readonly CompositeDisposable cleanUpTarget
```

#### Field Value

 CompositeDisposable

## Properties

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_All"></a> All

```csharp
[JsonIgnore]
public IConnectableObservable<IChangeSet<TObject, Guid>> All { get; }
```

#### Property Value

 IConnectableObservable<IChangeSet<TObject, Guid\>\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_Items"></a> Items

```csharp
[JsonIgnore]
protected IObservableCollection<TObject> Items { get; }
```

#### Property Value

 IObservableCollection<TObject\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_ItemsCount"></a> ItemsCount

```csharp
[JsonIgnore]
public int ItemsCount { get; }
```

#### Property Value

 int

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_ObservableItems"></a> ObservableItems

```csharp
[JsonIgnore]
public IObservable<IChangeSet<TObject, Guid>> ObservableItems { get; }
```

#### Property Value

 IObservable<IChangeSet<TObject, Guid\>\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_Item_System_Int32_"></a> this\[int\]

```csharp
public TObject this[int index] { get; }
```

#### Property Value

 TObject

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_AddItem__0_"></a> AddItem\(TObject\)

```csharp
public virtual void AddItem(TObject item)
```

#### Parameters

`item` TObject

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_Contains_System_Guid_"></a> Contains\(Guid\)

```csharp
public bool Contains(Guid key)
```

#### Parameters

`key` Guid

#### Returns

 bool

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_Contains__0_"></a> Contains\(TObject\)

```csharp
public bool Contains(TObject item)
```

#### Parameters

`item` TObject

#### Returns

 bool

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_RemoveItem_System_Guid_"></a> RemoveItem\(Guid\)

```csharp
public void RemoveItem(Guid key)
```

#### Parameters

`key` Guid

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ItemsContainerModelBase_1_TryGetItem_System_Guid__0__"></a> TryGetItem\(Guid, out TObject\)

```csharp
public bool TryGetItem(Guid key, out TObject item)
```

#### Parameters

`key` Guid

`item` TObject

#### Returns

 bool

