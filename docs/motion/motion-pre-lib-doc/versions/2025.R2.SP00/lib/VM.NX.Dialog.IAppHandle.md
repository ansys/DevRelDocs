#  Interface IAppHandle

Namespace: [VM.NX.Dialog](VM.NX.Dialog.md)  
Assembly: VMDIDef.dll  

```csharp
public interface IAppHandle
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_NX_Dialog_IAppHandle_Activate_System_UIntPtr_System_Boolean_"></a> Activate\(UIntPtr, bool\)

```csharp
void Activate(UIntPtr obj, bool isActive)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_Activate_System_Collections_Generic_List_System_UIntPtr__System_Boolean_"></a> Activate\(List<UIntPtr\>, bool\)

```csharp
void Activate(List<UIntPtr> lstObj, bool isActive)
```

#### Parameters

`lstObj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\>

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_ActivateFromExtern_System_UIntPtr_System_Boolean_"></a> ActivateFromExtern\(UIntPtr, bool\)

```csharp
void ActivateFromExtern(UIntPtr obj, bool isActive)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_ActivateFromExternWithoutReset_System_UIntPtr_System_Boolean_"></a> ActivateFromExternWithoutReset\(UIntPtr, bool\)

```csharp
void ActivateFromExternWithoutReset(UIntPtr obj, bool isActive)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_ActivateWithoutReset_System_UIntPtr_System_Boolean_"></a> ActivateWithoutReset\(UIntPtr, bool\)

```csharp
void ActivateWithoutReset(UIntPtr obj, bool isActive)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_ActivateWithoutReset_System_Collections_Generic_List_System_UIntPtr__System_Boolean_"></a> ActivateWithoutReset\(List<UIntPtr\>, bool\)

```csharp
void ActivateWithoutReset(List<UIntPtr> lstObj, bool isActive)
```

#### Parameters

`lstObj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\>

`isActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_CalcCoordSys_System_String_System_Xml_XmlNode_System_Xml_XmlNode_"></a> CalcCoordSys\(string, XmlNode, XmlNode\)

```csharp
bool CalcCoordSys(string strPickResult, XmlNode nodeBaseCoordSys, XmlNode nodeActionCoordSys)
```

#### Parameters

`strPickResult` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nodeBaseCoordSys` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

`nodeActionCoordSys` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_DeleteObject_System_UIntPtr_System_Boolean_"></a> DeleteObject\(UIntPtr, bool\)

```csharp
bool DeleteObject(UIntPtr obj, bool isFirst)
```

#### Parameters

`obj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`isFirst` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_DistanceBetween2Points_System_UIntPtr_System_UIntPtr_"></a> DistanceBetween2Points\(UIntPtr, UIntPtr\)

```csharp
double DistanceBetween2Points(UIntPtr tagFrom, UIntPtr tagTo)
```

#### Parameters

`tagFrom` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`tagTo` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_NX_Dialog_IAppHandle_FindInActiveModel_System_String_"></a> FindInActiveModel\(string\)

```csharp
UIntPtr FindInActiveModel(string strObjName)
```

#### Parameters

`strObjName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_NX_Dialog_IAppHandle_GetDefaultName_System_String_"></a> GetDefaultName\(string\)

```csharp
string GetDefaultName(string strHead)
```

#### Parameters

`strHead` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_NX_Dialog_IAppHandle_IsValidName_System_String_System_UIntPtr_System_UIntPtr_"></a> IsValidName\(string, UIntPtr, UIntPtr\)

```csharp
bool IsValidName(string strName, UIntPtr tagContainer, UIntPtr tagObject)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`tagContainer` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`tagObject` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_RegisterStrDialogResult_System_Int32_System_Xml_XmlDocument_"></a> RegisterStrDialogResult\(int, XmlDocument\)

```csharp
void RegisterStrDialogResult(int nIDDialog, XmlDocument domResult)
```

#### Parameters

`nIDDialog` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`domResult` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

### <a id="VM_NX_Dialog_IAppHandle_SetMultiDeleteObject_System_Boolean_"></a> SetMultiDeleteObject\(bool\)

```csharp
void SetMultiDeleteObject(bool bMulti)
```

#### Parameters

`bMulti` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_StartOperation_System_String_"></a> StartOperation\(string\)

```csharp
void StartOperation(string strOpName)
```

#### Parameters

`strOpName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_NX_Dialog_IAppHandle_StartOperation_System_String_System_String_"></a> StartOperation\(string, string\)

```csharp
void StartOperation(string strOpName, string strOpInfo)
```

#### Parameters

`strOpName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strOpInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_NX_Dialog_IAppHandle_StartOperation_System_String_System_String_System_Boolean_"></a> StartOperation\(string, string, bool\)

```csharp
void StartOperation(string strOpName, string strOpInfo, bool bHistoryMerge)
```

#### Parameters

`strOpName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strOpInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bHistoryMerge` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IAppHandle_StartOperation_System_String_System_UIntPtr_System_String_"></a> StartOperation\(string, UIntPtr, string\)

```csharp
void StartOperation(string strOpName, UIntPtr ptrDoc, string strOpInfo)
```

#### Parameters

`strOpName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ptrDoc` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`strOpInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_NX_Dialog_IAppHandle_UpdateDisplay"></a> UpdateDisplay\(\)

```csharp
void UpdateDisplay()
```

