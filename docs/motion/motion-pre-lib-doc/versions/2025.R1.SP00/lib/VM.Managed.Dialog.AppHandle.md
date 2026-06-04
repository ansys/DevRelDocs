#  Class AppHandle

Namespace: [VM.Managed.Dialog](VM.Managed.Dialog.md)  
Assembly: VMAppCore.dll  

This class is to represent the application handler.

```csharp
public class AppHandle : IAppHandle
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AppHandle](VM.Managed.Dialog.AppHandle.md)

#### Implements

IAppHandle

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Dialog_AppHandle__ctor"></a> AppHandle\(\)

Initializes a new instance of the <xref href="VM.Managed.Dialog.AppHandle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AppHandle()
```

## Methods

### <a id="VM_Managed_Dialog_AppHandle_Activate_System_Collections_Generic_List_System_UIntPtr__System_Boolean_"></a> Activate\(List<UIntPtr\>, bool\)

```csharp
public virtual void Activate(List<UIntPtr> lstObj, bool isActive)
```

#### Parameters

`lstObj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\>

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Dialog_AppHandle_Activate_System_UIntPtr_System_Boolean_"></a> Activate\(UIntPtr, bool\)

Activate.Usually, highlight.

```csharp
public virtual void Activate(UIntPtr obj, bool isActive)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The tag of activate

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The Activate flag

### <a id="VM_Managed_Dialog_AppHandle_ActivateFromExtern_System_UIntPtr_System_Boolean_"></a> ActivateFromExtern\(UIntPtr, bool\)

Activate.Usually, highlight.

```csharp
public virtual void ActivateFromExtern(UIntPtr obj, bool isActive)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The tag of activate.

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The Activate flag.

### <a id="VM_Managed_Dialog_AppHandle_ActivateFromExternWithoutReset_System_UIntPtr_System_Boolean_"></a> ActivateFromExternWithoutReset\(UIntPtr, bool\)

Activate.Usually, highlight.

```csharp
public virtual void ActivateFromExternWithoutReset(UIntPtr obj, bool isActive)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The tag of activate.

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The Activate flag.

### <a id="VM_Managed_Dialog_AppHandle_ActivateWithoutReset_System_Collections_Generic_List_System_UIntPtr__System_Boolean_"></a> ActivateWithoutReset\(List<UIntPtr\>, bool\)

```csharp
public virtual void ActivateWithoutReset(List<UIntPtr> lstObj, bool isActive)
```

#### Parameters

`lstObj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\>

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Dialog_AppHandle_ActivateWithoutReset_System_UIntPtr_System_Boolean_"></a> ActivateWithoutReset\(UIntPtr, bool\)

Activate.Usually, highlight.

```csharp
public virtual void ActivateWithoutReset(UIntPtr obj, bool isActive)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The tag of activate

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The Activate flag

### <a id="VM_Managed_Dialog_AppHandle_CalcCoordSys_System_String_System_Xml_XmlNode_System_Xml_XmlNode_"></a> CalcCoordSys\(string, XmlNode, XmlNode\)

Coordinate system is calculation to selected object.

```csharp
public virtual bool CalcCoordSys(string strPickResult, XmlNode nodeBaseCoordSys, XmlNode nodeActionCoordSys)
```

#### Parameters

`strPickResult` [string](https://learn.microsoft.com/dotnet/api/system.string)

The result of picking.

`nodeBaseCoordSys` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The base coordinate system.

`nodeActionCoordSys` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The action coordinate system.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Dialog_AppHandle_DeleteObject_System_UIntPtr_System_Boolean_"></a> DeleteObject\(UIntPtr, bool\)

Object is delete.

```csharp
public virtual bool DeleteObject(UIntPtr obj, bool isFirst)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The deleted object.

`isFirst` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if deleted object is first object; otherwise, <code>false</code>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Dialog_AppHandle_DistanceBetween2Points_System_UIntPtr_System_UIntPtr_"></a> DistanceBetween2Points\(UIntPtr, UIntPtr\)

Gets the distance about two objects. Usually, distance of start point.

```csharp
public virtual double DistanceBetween2Points(UIntPtr tagFrom, UIntPtr tagTo)
```

#### Parameters

`tagFrom` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Based on tag of object.

`tagTo` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Another tag of object.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The distance about two objects.

### <a id="VM_Managed_Dialog_AppHandle_FindInActiveModel_System_String_"></a> FindInActiveModel\(string\)

Gets tag in activate model.

```csharp
public virtual UIntPtr FindInActiveModel(string strObjName)
```

#### Parameters

`strObjName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Find name of object.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

<code>tag</code> if success; otherwise, <code>zero</code>.

### <a id="VM_Managed_Dialog_AppHandle_GetDefaultName_System_String_"></a> GetDefaultName\(string\)

Gets default name

```csharp
public virtual string GetDefaultName(string strHead)
```

#### Parameters

`strHead` [string](https://learn.microsoft.com/dotnet/api/system.string)

prefix of name

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

### <a id="VM_Managed_Dialog_AppHandle_IsValidName_System_String_System_UIntPtr_System_UIntPtr_"></a> IsValidName\(string, UIntPtr, UIntPtr\)

Duplicated Name Check for object int specific container

```csharp
public virtual bool IsValidName(string strName, UIntPtr tagContainer, UIntPtr tagObject)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name for Checking

`tagContainer` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Tag of the container which contains tagObject
if IntPtr.Zero, Current working model will be used.

`tagObject` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Tag of the object which wnats to set names.
if IntPtr.Zero, strName must unique.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if Duplicated then return false

### <a id="VM_Managed_Dialog_AppHandle_RegisterStrDialogResult_System_Int32_System_Xml_XmlDocument_"></a> RegisterStrDialogResult\(int, XmlDocument\)

Data of dialog

```csharp
public virtual void RegisterStrDialogResult(int nIDDialog, XmlDocument domResult)
```

#### Parameters

`nIDDialog` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The ID of dialog.

`domResult` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The data of dialog.

### <a id="VM_Managed_Dialog_AppHandle_SetMultiDeleteObject_System_Boolean_"></a> SetMultiDeleteObject\(bool\)

Sets the multi delete object.

```csharp
public virtual void SetMultiDeleteObject(bool bMulti)
```

#### Parameters

`bMulti` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if multi delete object; otherwise, <code>false</code>.

### <a id="VM_Managed_Dialog_AppHandle_StartOperation_System_String_System_UIntPtr_System_String_"></a> StartOperation\(string, UIntPtr, string\)

Execute operation.

```csharp
public virtual void StartOperation(string strOpName, UIntPtr doc, string strOpInfo)
```

#### Parameters

`strOpName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of operation.

`doc` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Document point.

`strOpInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

Additional information.

### <a id="VM_Managed_Dialog_AppHandle_StartOperation_System_String_System_String_System_Boolean_"></a> StartOperation\(string, string, bool\)

Execute operation.

```csharp
public virtual void StartOperation(string strOpName, string strOpInfo, bool bHistoryMerge)
```

#### Parameters

`strOpName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of operation.

`strOpInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

Additional information.

`bHistoryMerge` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

History merge flag.

### <a id="VM_Managed_Dialog_AppHandle_StartOperation_System_String_System_String_"></a> StartOperation\(string, string\)

Execute operation.

```csharp
public virtual void StartOperation(string strOpName, string strOpInfo)
```

#### Parameters

`strOpName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of operation.

`strOpInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

Additional information.

### <a id="VM_Managed_Dialog_AppHandle_StartOperation_System_String_"></a> StartOperation\(string\)

Execute operation.

```csharp
public virtual void StartOperation(string strOpName)
```

#### Parameters

`strOpName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of operation.

### <a id="VM_Managed_Dialog_AppHandle_UpdateDisplay"></a> UpdateDisplay\(\)

Update display.

```csharp
public virtual void UpdateDisplay()
```

