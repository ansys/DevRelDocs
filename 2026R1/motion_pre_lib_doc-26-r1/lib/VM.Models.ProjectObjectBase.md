# Class ProjectObjectBase
<a id="VM_Models_ProjectObjectBase"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public abstract class ProjectObjectBase : ObservableObject, IObservableObject, IProjectObject, IHasID, IHasName, IDisposableObject
```

#### Inheritance

object ← 
ObservableObject ← 
[ProjectObjectBase](VM.Models.ProjectObjectBase.md)

#### Derived

[ProjectDocument](VM.Models.ProjectDocument.md), 
[ScenarioBase](VM.Models.ScenarioBase.md), 
[StepBase](VM.Models.StepBase.md)

#### Implements

IObservableObject, 
[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject

#### Inherited Members

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

### <a id="VM_Models_ProjectObjectBase__ctor"></a> ProjectObjectBase\(\)

```csharp
protected ProjectObjectBase()
```

## Properties

### <a id="VM_Models_ProjectObjectBase_DisplayName"></a> DisplayName

```csharp
[Browsable(false)]
public virtual string DisplayName { get; }
```

#### Property Value

 string

### <a id="VM_Models_ProjectObjectBase_ID"></a> ID

```csharp
[Browsable(false)]
public virtual Identifier ID { get; }
```

#### Property Value

 Identifier

### <a id="VM_Models_ProjectObjectBase_Name"></a> Name

```csharp
public virtual string Name { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Models_ProjectObjectBase_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_ProjectObjectBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

```csharp
public virtual void OnDeserialization(object sender)
```

#### Parameters

`sender` object

