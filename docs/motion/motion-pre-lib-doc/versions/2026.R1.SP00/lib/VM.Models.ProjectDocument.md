# Class ProjectDocument
<a id="VM_Models_ProjectDocument"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public sealed class ProjectDocument : ProjectObjectBase, IObservableObject, IProjectDocument, IProjectObject, IHasID, IHasName, IDisposableObject
```

#### Inheritance

object ← 
ObservableObject ← 
[ProjectObjectBase](VM.Models.ProjectObjectBase.md) ← 
[ProjectDocument](VM.Models.ProjectDocument.md)

#### Implements

IObservableObject, 
[IProjectDocument](VM.Models.IProjectDocument.md), 
[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject

#### Inherited Members

[ProjectObjectBase.OnDeserialization\(object\)](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_OnDeserialization\_System\_Object\_), 
[ProjectObjectBase.DisplayName](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_DisplayName), 
[ProjectObjectBase.ID](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_ID), 
[ProjectObjectBase.Name](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_Name), 
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

### <a id="VM_Models_ProjectDocument__ctor_System_String_"></a> ProjectDocument\(string\)

```csharp
public ProjectDocument(string name)
```

#### Parameters

`name` string

## Properties

### <a id="VM_Models_ProjectDocument_ID"></a> ID

```csharp
public override Identifier ID { get; }
```

#### Property Value

 Identifier

### <a id="VM_Models_ProjectDocument_Items"></a> Items

```csharp
public IEnumerable<IScenario> Items { get; }
```

#### Property Value

 IEnumerable<[IScenario](VM.Models.IScenario.md)\>

### <a id="VM_Models_ProjectDocument_RootPath"></a> RootPath

```csharp
[Browsable(false)]
public string RootPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_ProjectDocument_ScenarioCount"></a> ScenarioCount

```csharp
[Browsable(false)]
public int ScenarioCount { get; }
```

#### Property Value

 int

### <a id="VM_Models_ProjectDocument_Item_VM_Identifier_"></a> this\[Identifier\]

```csharp
public IScenario this[Identifier identifier] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

### <a id="VM_Models_ProjectDocument_Item_System_Int32_"></a> this\[int\]

```csharp
public IScenario this[int index] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

### <a id="VM_Models_ProjectDocument_Item_System_String_"></a> this\[string\]

```csharp
public IScenario this[string name] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

## Methods

### <a id="VM_Models_ProjectDocument_Add_VM_Models_IScenario_"></a> Add\(IScenario\)

```csharp
public void Add(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### <a id="VM_Models_ProjectDocument_CanRegisterID_VM_Identifier_"></a> CanRegisterID\(Identifier\)

```csharp
public bool CanRegisterID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 bool

### <a id="VM_Models_ProjectDocument_CanRegisterName_System_String_"></a> CanRegisterName\(string\)

```csharp
public bool CanRegisterName(string name)
```

#### Parameters

`name` string

#### Returns

 bool

### <a id="VM_Models_ProjectDocument_Contains_VM_Models_IScenario_"></a> Contains\(IScenario\)

```csharp
public bool Contains(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

#### Returns

 bool

### <a id="VM_Models_ProjectDocument_ContainsID_VM_Identifier_"></a> ContainsID\(Identifier\)

```csharp
public bool ContainsID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 bool

### <a id="VM_Models_ProjectDocument_ContainsName_VM_Models_IProjectObject_"></a> ContainsName\(IProjectObject\)

```csharp
public bool ContainsName(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

#### Returns

 bool

### <a id="VM_Models_ProjectDocument_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_ProjectDocument_Open_System_String_"></a> Open\(string\)

```csharp
public static ProjectDocument Open(string path)
```

#### Parameters

`path` string

#### Returns

 [ProjectDocument](VM.Models.ProjectDocument.md)

### <a id="VM_Models_ProjectDocument_Remove_VM_Models_IScenario_"></a> Remove\(IScenario\)

```csharp
public void Remove(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### <a id="VM_Models_ProjectDocument_Save"></a> Save\(\)

```csharp
public void Save()
```

### <a id="VM_Models_ProjectDocument_TryGetValue_VM_Identifier_VM_Models_IScenario__"></a> TryGetValue\(Identifier, out IScenario\)

```csharp
public bool TryGetValue(Identifier identifier, out IScenario scenario)
```

#### Parameters

`identifier` Identifier

`scenario` [IScenario](VM.Models.IScenario.md)

#### Returns

 bool

### <a id="VM_Models_ProjectDocument_TryGetValue_System_String_VM_Models_IScenario__"></a> TryGetValue\(string, out IScenario\)

```csharp
public bool TryGetValue(string name, out IScenario scenario)
```

#### Parameters

`name` string

`scenario` [IScenario](VM.Models.IScenario.md)

#### Returns

 bool

### <a id="VM_Models_ProjectDocument_UnregisterID_VM_Models_IProjectObject_"></a> UnregisterID\(IProjectObject\)

```csharp
public void UnregisterID(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

### <a id="VM_Models_ProjectDocument_UnregisterName_VM_Models_IProjectObject_"></a> UnregisterName\(IProjectObject\)

```csharp
public void UnregisterName(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

