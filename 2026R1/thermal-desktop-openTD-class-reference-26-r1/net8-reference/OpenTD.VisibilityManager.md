# <a id="OpenTD_VisibilityManager"></a> Class VisibilityManager

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

```csharp
public class VisibilityManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VisibilityManager](OpenTD.VisibilityManager.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="OpenTD_VisibilityManager_DisplayAll"></a> DisplayAll\(\)

Turn visibility on for all objects. Does not affect layers or global type controls.

```csharp
public void DisplayAll()
```

### <a id="OpenTD_VisibilityManager_DisplayOnly_System_Collections_Generic_IEnumerable_System_String__"></a> DisplayOnly\(IEnumerable<string\>\)

Turn visibility on for objects identified by handles. Turn off visibility for all other others. Does not affect layers or global type controls.

```csharp
public void DisplayOnly(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_VisibilityManager_DisplayOnly_System_String_"></a> DisplayOnly\(string\)

Turn visibility one for object identified by handle. Turn off visibility for all other others. Does not affect layers or global type controls.

```csharp
public void DisplayOnly(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_VisibilityManager_GetIdVisibility_System_Collections_Generic_IEnumerable_System_String__"></a> GetIdVisibility\(IEnumerable<string\>\)

Get list of bools for whether IDs for objects selected by handles are visible. Does not account for layers or global type controls. 
Objects that cannot have IDs displayed will always return false.

```csharp
public List<bool> GetIdVisibility(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="OpenTD_VisibilityManager_GetIdVisibility_System_String_"></a> GetIdVisibility\(string\)

Get bool for whether ID single object selected by handle is visible. Does not account for layers or global type controls. 
Objects that cannot have IDs displayed will always return false.

```csharp
public bool GetIdVisibility(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_VisibilityManager_GetVisibility_System_Collections_Generic_IEnumerable_System_String__"></a> GetVisibility\(IEnumerable<string\>\)

Get list of bools for whether objects selected by handles are set to visible. Does not account for layers or global type controls.

```csharp
public List<bool> GetVisibility(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="OpenTD_VisibilityManager_GetVisibility_System_String_"></a> GetVisibility\(string\)

Get bool for single object selected by handle is set to visible. Does not account for layers or global type controls.

```csharp
public bool GetVisibility(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_VisibilityManager_SetIdsOff_System_Collections_Generic_IEnumerable_System_String__"></a> SetIdsOff\(IEnumerable<string\>\)

Turn off ID for objects identified by handles. Not all object types can display tags. Does not affect layers or global type controls.

```csharp
public void SetIdsOff(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_VisibilityManager_SetIdsOff_System_String_"></a> SetIdsOff\(string\)

Turn off ID for one object identified by handle. Not all object types can display tags. Does not affect layers or global type controls.

```csharp
public void SetIdsOff(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_VisibilityManager_SetIdsOn_System_Collections_Generic_IEnumerable_System_String__"></a> SetIdsOn\(IEnumerable<string\>\)

Turn on ID for objects identified by handles. Not all object types can display tags. Does not affect layers or global type controls.

```csharp
public void SetIdsOn(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_VisibilityManager_SetIdsOn_System_String_"></a> SetIdsOn\(string\)

Turn on ID for one object identified by handle. Not all object types can display tags. Does not affect layers or global type controls.

```csharp
public void SetIdsOn(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_VisibilityManager_SetVisibilityOff_System_Collections_Generic_IEnumerable_System_String__"></a> SetVisibilityOff\(IEnumerable<string\>\)

Turn off visibility for objects identified by handles. Does not affect layers or global type controls.

```csharp
public void SetVisibilityOff(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_VisibilityManager_SetVisibilityOff_System_String_"></a> SetVisibilityOff\(string\)

Turn off visibility for one object identified by handle. Does not affect layers or global type controls.

```csharp
public void SetVisibilityOff(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_VisibilityManager_SetVisibilityOn_System_Collections_Generic_IEnumerable_System_String__"></a> SetVisibilityOn\(IEnumerable<string\>\)

Turn on visibility for objects identified by handles. Does not affect layers or global type controls.

```csharp
public void SetVisibilityOn(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_VisibilityManager_SetVisibilityOn_System_String_"></a> SetVisibilityOn\(string\)

Turn on visibility for one object identified by handle. Does not affect layers or global type controls.

```csharp
public void SetVisibilityOn(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

