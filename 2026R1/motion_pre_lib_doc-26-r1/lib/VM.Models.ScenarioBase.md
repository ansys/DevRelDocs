# Class ScenarioBase
<a id="VM_Models_ScenarioBase"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public abstract class ScenarioBase : ProjectObjectBase, IObservableObject, IScenario, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IProjectDocument>
```

#### Inheritance

object ← 
ObservableObject ← 
[ProjectObjectBase](VM.Models.ProjectObjectBase.md) ← 
[ScenarioBase](VM.Models.ScenarioBase.md)

#### Implements

IObservableObject, 
[IScenario](VM.Models.IScenario.md), 
[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject, 
ISelected, 
IHasParent<IProjectDocument\>

#### Inherited Members

[ProjectObjectBase.OnDeserialization\(object\)](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_OnDeserialization\_System\_Object\_), 
[ProjectObjectBase.DisposeManagedResources\(\)](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_DisposeManagedResources), 
[ProjectObjectBase.DisplayName](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_DisplayName), 
[ProjectObjectBase.ID](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_ID), 
[ProjectObjectBase.Name](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_Name), 
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

### <a id="VM_Models_ScenarioBase__ctor_VM_Models_IProjectDocument_System_String_"></a> ScenarioBase\(IProjectDocument, string\)

```csharp
public ScenarioBase(IProjectDocument parent, string name)
```

#### Parameters

`parent` [IProjectDocument](VM.Models.IProjectDocument.md)

`name` string

## Properties

### <a id="VM_Models_ScenarioBase_CategoryName"></a> CategoryName

```csharp
[Browsable(false)]
public abstract string CategoryName { get; }
```

#### Property Value

 string

### <a id="VM_Models_ScenarioBase_IsSelected"></a> IsSelected

```csharp
[Browsable(false)]
public bool IsSelected { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_ScenarioBase_Items"></a> Items

```csharp
public IEnumerable<IStep> Items { get; }
```

#### Property Value

 IEnumerable<[IStep](VM.Models.IStep.md)\>

### <a id="VM_Models_ScenarioBase_Left"></a> Left

```csharp
[Browsable(false)]
public double Left { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_ScenarioBase_Name"></a> Name

```csharp
public override string Name { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_ScenarioBase_Parent"></a> Parent

```csharp
[Browsable(false)]
public IProjectDocument Parent { get; }
```

#### Property Value

 [IProjectDocument](VM.Models.IProjectDocument.md)

### <a id="VM_Models_ScenarioBase_ParentDocument"></a> ParentDocument

```csharp
[Browsable(false)]
public IProjectDocument ParentDocument { get; }
```

#### Property Value

 [IProjectDocument](VM.Models.IProjectDocument.md)

### <a id="VM_Models_ScenarioBase_Top"></a> Top

```csharp
[Browsable(false)]
public double Top { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_ScenarioBase_Item_VM_Identifier_"></a> this\[Identifier\]

```csharp
public IStep this[Identifier identifier] { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### <a id="VM_Models_ScenarioBase_Item_System_Int32_"></a> this\[int\]

```csharp
public IStep this[int index] { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

## Methods

### <a id="VM_Models_ScenarioBase_Add_VM_Models_IStep_"></a> Add\(IStep\)

```csharp
public void Add(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### <a id="VM_Models_ScenarioBase_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="VM_Models_ScenarioBase_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_ScenarioBase_Remove_VM_Models_IStep_"></a> Remove\(IStep\)

```csharp
public void Remove(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### <a id="VM_Models_ScenarioBase_TryGetItem_VM_Identifier_VM_Models_IStep__"></a> TryGetItem\(Identifier, out IStep\)

```csharp
public bool TryGetItem(Identifier identifier, out IStep item)
```

#### Parameters

`identifier` Identifier

`item` [IStep](VM.Models.IStep.md)

#### Returns

 bool

