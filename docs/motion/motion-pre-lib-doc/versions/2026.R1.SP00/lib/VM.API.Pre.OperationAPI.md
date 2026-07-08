# Class OperationAPI
<a id="VM_API_Pre_OperationAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for operation class.

```csharp
public static class OperationAPI
```

#### Inheritance

object ← 
[OperationAPI](VM.API.Pre.OperationAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_OperationAPI_ChangeEnableState_VM_API_Pre_Obj_System_Boolean_"></a> ChangeEnableState\(Obj, bool\)

```csharp
[NotNullObj(new string[] { "enableObj" })]
public static void ChangeEnableState(this Obj enableObj, bool isEnable = true)
```

#### Parameters

`enableObj` [Obj](VM.API.Pre.Obj.md)

`isEnable` bool

### <a id="VM_API_Pre_OperationAPI_ChangeEnableState_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Boolean_"></a> ChangeEnableState\(IEnumerable<Obj\>, bool\)

```csharp
[NotNull(new string[] { "enableObjs" })]
public static void ChangeEnableState(this IEnumerable<Obj> enableObjs, bool isEnable = true)
```

#### Parameters

`enableObjs` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

`isEnable` bool

### <a id="VM_API_Pre_OperationAPI_ChangeInterface_VM_API_Pre_Obj_System_Boolean_"></a> ChangeInterface\(Obj, bool\)

```csharp
[NotNullObj(new string[] { "interfaceObj" })]
public static void ChangeInterface(this Obj interfaceObj, bool isInterface = false)
```

#### Parameters

`interfaceObj` [Obj](VM.API.Pre.Obj.md)

`isInterface` bool

### <a id="VM_API_Pre_OperationAPI_ChangeVisibleState_VM_API_Pre_Obj_System_Boolean_"></a> ChangeVisibleState\(Obj, bool\)

```csharp
[NotNullObj(new string[] { "visibleObj" })]
public static void ChangeVisibleState(this Obj visibleObj, bool isVisible = true)
```

#### Parameters

`visibleObj` [Obj](VM.API.Pre.Obj.md)

`isVisible` bool

### <a id="VM_API_Pre_OperationAPI_ChangeVisibleState_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Boolean_"></a> ChangeVisibleState\(IEnumerable<Obj\>, bool\)

```csharp
[NotNull(new string[] { "visibleObjs" })]
public static void ChangeVisibleState(this IEnumerable<Obj> visibleObjs, bool isVisible = true)
```

#### Parameters

`visibleObjs` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

`isVisible` bool

### <a id="VM_API_Pre_OperationAPI_Delete_VM_API_Pre_Obj_"></a> Delete\(Obj\)

Delete the entity.

```csharp
[NotNullObj(new string[] { "entity" })]
public static void Delete(this Obj entity)
```

#### Parameters

`entity` [Obj](VM.API.Pre.Obj.md)

The entity to be deleted.

#### Exceptions

 ArgumentNullException

Will be thrown if 'entity' arguments are empty.

 ArgumentNullException

Will be thrown if document of 'entity' arguments are empty.

### <a id="VM_API_Pre_OperationAPI_Duplicate_VM_API_Pre_Obj_"></a> Duplicate\(Obj\)

```csharp
[NotNullObj(new string[] { "entity" })]
public static void Duplicate(this Obj entity)
```

#### Parameters

`entity` [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_OperationAPI_Duplicate_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__"></a> Duplicate\(IEnumerable<Obj\>\)

```csharp
[NotNull(new string[] { "entities" })]
public static void Duplicate(this IEnumerable<Obj> entities)
```

#### Parameters

`entities` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

### <a id="VM_API_Pre_OperationAPI_Flip_VM_API_Pre_Obj_"></a> Flip\(Obj\)

```csharp
[NotNullObj(new string[] { "entity" })]
public static void Flip(this Obj entity)
```

#### Parameters

`entity` [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_OperationAPI_Flip_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__"></a> Flip\(IEnumerable<Obj\>\)

```csharp
[NotNull(new string[] { "entities" })]
public static void Flip(this IEnumerable<Obj> entities)
```

#### Parameters

`entities` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

### <a id="VM_API_Pre_OperationAPI_SetTransparency_VM_API_Pre_Obj_VM_Models_Pre_ExpressionValueVariable_"></a> SetTransparency\(Obj, ExpressionValueVariable\)

```csharp
[NotNullObj(new string[] { "body" })]
public static void SetTransparency(this Obj body, ExpressionValueVariable transparency)
```

#### Parameters

`body` [Obj](VM.API.Pre.Obj.md)

`transparency` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_OperationAPI_UpdateCADName_VM_API_Pre_Obj_System_String_"></a> UpdateCADName\(Obj, string\)

```csharp
[NotNull(new string[] { "cadBody" })]
[NotNullOrEmpty(new string[] { "strName" })]
public static void UpdateCADName(this Obj cadBody, string strName)
```

#### Parameters

`cadBody` [Obj](VM.API.Pre.Obj.md)

`strName` string

### <a id="VM_API_Pre_OperationAPI_UpdateName_VM_API_Pre_Obj_System_String_"></a> UpdateName\(Obj, string\)

```csharp
[NotNull(new string[] { "nameObj" })]
[NotNullOrEmpty(new string[] { "strName" })]
public static void UpdateName(this Obj nameObj, string strName)
```

#### Parameters

`nameObj` [Obj](VM.API.Pre.Obj.md)

`strName` string

### <a id="VM_API_Pre_OperationAPI_UpdateSymmetric_VM_API_Pre_Obj_System_Boolean_"></a> UpdateSymmetric\(Obj, bool\)

```csharp
[NotNullObj(new string[] { "symMgr" })]
public static void UpdateSymmetric(this Obj symMgr, bool symmetric = true)
```

#### Parameters

`symMgr` [Obj](VM.API.Pre.Obj.md)

`symmetric` bool

