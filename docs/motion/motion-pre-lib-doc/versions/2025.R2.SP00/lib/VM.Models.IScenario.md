#  Interface IScenario

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public interface IScenario : IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IProjectDocument>
```

#### Implements

[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject, 
ISelected, 
IHasParent<IProjectDocument\>

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_IScenario_CategoryName"></a> CategoryName

```csharp
string CategoryName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_IScenario_Items"></a> Items

```csharp
IEnumerable<IStep> Items { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStep](VM.Models.IStep.md)\>

### <a id="VM_Models_IScenario_Left"></a> Left

```csharp
double Left { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_IScenario_Top"></a> Top

```csharp
double Top { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_IScenario_Item_VM_Identifier_"></a> this\[Identifier\]

```csharp
IStep this[Identifier identifier] { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### <a id="VM_Models_IScenario_Item_System_Int32_"></a> this\[int\]

```csharp
IStep this[int index] { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

## Methods

### <a id="VM_Models_IScenario_Add_VM_Models_IStep_"></a> Add\(IStep\)

```csharp
void Add(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### <a id="VM_Models_IScenario_Clear"></a> Clear\(\)

```csharp
void Clear()
```

### <a id="VM_Models_IScenario_Remove_VM_Models_IStep_"></a> Remove\(IStep\)

```csharp
void Remove(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### <a id="VM_Models_IScenario_TryGetItem_VM_Identifier_VM_Models_IStep__"></a> TryGetItem\(Identifier, out IStep\)

```csharp
bool TryGetItem(Identifier identifier, out IStep item)
```

#### Parameters

`identifier` Identifier

`item` [IStep](VM.Models.IStep.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

