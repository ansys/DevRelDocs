# Class VariableMatrix

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent VariableMatrix.

```csharp
public class VariableMatrix : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[VariableMatrix](VM.Managed.VariableMatrix.md)

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

### VariableMatrix\(\)

Initializes a new instance of the <xref href="VM.Managed.VariableMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public VariableMatrix()
```

### VariableMatrix\(int, int\)

Initializes a new instance of the <xref href="VM.Managed.VariableMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public VariableMatrix(int nRow, int nColumn)
```

#### Parameters

`nRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n row.

`nColumn` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n column.

## Properties

### ColumnCount

```csharp
public int ColumnCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Matrix

Gets or sets the matrix.

```csharp
public Variable[] Matrix { get; set; }
```

#### Property Value

 Variable\[\]

### RowCount

```csharp
public int RowCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### GetAllValue\(\)

Gets all value.

```csharp
public string GetAllValue()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetArray\(\)

Gets the array.

```csharp
public ExpressionValueVariable[,] GetArray()
```

#### Returns

 ExpressionValueVariable\[,\]

### GetValueArray\(\)

Gets the value array.

```csharp
public double[,] GetValueArray()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[,\]

### GetVariable\(int, int\)

Gets the variable.

```csharp
public Variable GetVariable(int nRow, int nColumn)
```

#### Parameters

`nRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n row.

`nColumn` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n column.

#### Returns

 Variable

### SetData\(Variable, int, int\)

Sets the data.

```csharp
public void SetData(Variable value, int nRow, int nColumn)
```

#### Parameters

`value` Variable

The value.

`nRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n row.

`nColumn` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n column.

### SetValueArray\(double\[,\]\)

Sets the value array.

```csharp
public void SetValueArray(double[,] ardValue)
```

#### Parameters

`ardValue` [double](https://learn.microsoft.com/dotnet/api/system.double)\[,\]

The values.


