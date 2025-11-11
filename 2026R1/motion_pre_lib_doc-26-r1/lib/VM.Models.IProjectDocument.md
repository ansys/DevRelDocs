# Interface IProjectDocument
<a id="VM_Models_IProjectDocument"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public interface IProjectDocument : IProjectObject, IHasID, IHasName, IDisposableObject
```

#### Implements

[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_IProjectDocument_Items"></a> Items

```csharp
IEnumerable<IScenario> Items { get; }
```

#### Property Value

 IEnumerable<[IScenario](VM.Models.IScenario.md)\>

### <a id="VM_Models_IProjectDocument_RootPath"></a> RootPath

```csharp
string RootPath { get; }
```

#### Property Value

 string

### <a id="VM_Models_IProjectDocument_ScenarioCount"></a> ScenarioCount

```csharp
int ScenarioCount { get; }
```

#### Property Value

 int

### <a id="VM_Models_IProjectDocument_Item_VM_Identifier_"></a> this\[Identifier\]

```csharp
IScenario this[Identifier identifier] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

### <a id="VM_Models_IProjectDocument_Item_System_Int32_"></a> this\[int\]

```csharp
IScenario this[int index] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

## Methods

### <a id="VM_Models_IProjectDocument_Add_VM_Models_IScenario_"></a> Add\(IScenario\)

```csharp
void Add(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### <a id="VM_Models_IProjectDocument_CanRegisterID_VM_Identifier_"></a> CanRegisterID\(Identifier\)

```csharp
bool CanRegisterID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 bool

### <a id="VM_Models_IProjectDocument_CanRegisterName_System_String_"></a> CanRegisterName\(string\)

```csharp
bool CanRegisterName(string name)
```

#### Parameters

`name` string

#### Returns

 bool

### <a id="VM_Models_IProjectDocument_Contains_VM_Models_IScenario_"></a> Contains\(IScenario\)

```csharp
bool Contains(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

#### Returns

 bool

### <a id="VM_Models_IProjectDocument_ContainsID_VM_Identifier_"></a> ContainsID\(Identifier\)

```csharp
bool ContainsID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 bool

### <a id="VM_Models_IProjectDocument_ContainsName_VM_Models_IProjectObject_"></a> ContainsName\(IProjectObject\)

```csharp
bool ContainsName(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

#### Returns

 bool

### <a id="VM_Models_IProjectDocument_RegisterID_VM_Models_IProjectObject_"></a> RegisterID\(IProjectObject\)

```csharp
void RegisterID(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

### <a id="VM_Models_IProjectDocument_RegisterName_VM_Models_IScenario_"></a> RegisterName\(IScenario\)

```csharp
void RegisterName(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### <a id="VM_Models_IProjectDocument_Remove_VM_Models_IScenario_"></a> Remove\(IScenario\)

```csharp
void Remove(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### <a id="VM_Models_IProjectDocument_Save"></a> Save\(\)

```csharp
void Save()
```

### <a id="VM_Models_IProjectDocument_TryGetValue_VM_Identifier_VM_Models_IScenario__"></a> TryGetValue\(Identifier, out IScenario\)

```csharp
bool TryGetValue(Identifier identifier, out IScenario scenario)
```

#### Parameters

`identifier` Identifier

`scenario` [IScenario](VM.Models.IScenario.md)

#### Returns

 bool

### <a id="VM_Models_IProjectDocument_TryGetValue_System_String_VM_Models_IScenario__"></a> TryGetValue\(string, out IScenario\)

```csharp
bool TryGetValue(string name, out IScenario scenario)
```

#### Parameters

`name` string

`scenario` [IScenario](VM.Models.IScenario.md)

#### Returns

 bool

### <a id="VM_Models_IProjectDocument_UnregisterID_VM_Models_IProjectObject_"></a> UnregisterID\(IProjectObject\)

```csharp
void UnregisterID(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

### <a id="VM_Models_IProjectDocument_UnregisterName_VM_Models_IProjectObject_"></a> UnregisterName\(IProjectObject\)

```csharp
void UnregisterName(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

