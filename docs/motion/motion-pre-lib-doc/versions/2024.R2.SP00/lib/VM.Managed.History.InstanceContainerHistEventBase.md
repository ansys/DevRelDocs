# Class InstanceContainerHistEventBase

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class InstanceContainerHistEventBase : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[InstanceContainerHistEventBase](VM.Managed.History.InstanceContainerHistEventBase.md)

#### Derived

[ClosedInstanceContainerHistEvent](VM.Managed.History.ClosedInstanceContainerHistEvent.md), 
[CreatedInstanceContainerHistEvent](VM.Managed.History.CreatedInstanceContainerHistEvent.md), 
[RemovedInstanceContainerHistEvent](VM.Managed.History.RemovedInstanceContainerHistEvent.md)

#### Inherited Members

HistoryEvent.ClearEvent\(bool\), 
HistoryEvent.Undo\(HistoryEventArgs\), 
HistoryEvent.Redo\(HistoryEventArgs\), 
HistoryEvent.Clear\(bool\), 
HistoryEvent.BeforeUndo\(HistoryEventArgs\), 
HistoryEvent.AfterUndo\(HistoryEventArgs\), 
HistoryEvent.BeforeRedo\(HistoryEventArgs\), 
HistoryEvent.AfterRedo\(HistoryEventArgs\), 
HistoryEvent.BeforeAdded\(AddToHistoryManagerEventArgs\), 
HistoryEvent.AfterAdded\(HistoryEventArgs\), 
HistoryEvent.IsValid

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### InstanceContainerHistEventBase\(string\)

```csharp
public InstanceContainerHistEventBase(string strPathName)
```

#### Parameters

`strPathName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### InstanceContainerHistEventBase\(\)

```csharp
public InstanceContainerHistEventBase()
```

## Fields

### m\_strPathName

```csharp
protected string m_strPathName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AddEventCore\(Document, InstanceContainerHistEventBase\)

```csharp
public static void AddEventCore(Document doc, InstanceContainerHistEventBase eventHist)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`eventHist` [InstanceContainerHistEventBase](VM.Managed.History.InstanceContainerHistEventBase.md)

### AfterAdded\(HistoryEventArgs\)

```csharp
protected override void AfterAdded(HistoryEventArgs A_0)
```

#### Parameters

`A_0` HistoryEventArgs

### Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsAvailableEvent\(Document\)

```csharp
protected static bool IsAvailableEvent(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs A_0)
```

#### Parameters

`A_0` HistoryEventArgs

### Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs A_0)
```

#### Parameters

`A_0` HistoryEventArgs


