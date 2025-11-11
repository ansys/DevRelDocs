# Class DOEFile
<a id="VM_Managed_DAFUL_DOE_Result_DOEFile"></a>

Namespace: [VM.Managed.DAFUL.DOE.Result](VM.Managed.DAFUL.DOE.Result.md)  
Assembly: VMDDOEResult.dll  

```csharp
public class DOEFile
```

#### Inheritance

object ← 
[DOEFile](VM.Managed.DAFUL.DOE.Result.DOEFile.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile__ctor_VM_Managed_DAFUL_DOE_Result_enProc_"></a> DOEFile\(enProc\)

```csharp
public DOEFile(enProc proc)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile__ctor_VM_Managed_DAFUL_DOE_Result_enProc_System_String_"></a> DOEFile\(enProc, string\)

```csharp
public DOEFile(enProc proc, string strPath)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

`strPath` string

## Methods

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_CanWrite"></a> CanWrite\(\)

```csharp
public bool CanWrite()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_CanWrite_System_String_"></a> CanWrite\(string\)

```csharp
public static bool CanWrite(string strPath)
```

#### Parameters

`strPath` string

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_ClosePost"></a> ClosePost\(\)

```csharp
public bool ClosePost()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_CloseSolver"></a> CloseSolver\(\)

```csharp
public bool CloseSolver()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_ConverMemToObjet_System_IO_MemoryStream_System_Type_"></a> ConverMemToObjet\(MemoryStream, Type\)

```csharp
public static object ConverMemToObjet(MemoryStream stream, Type type)
```

#### Parameters

`stream` MemoryStream

`type` Type

#### Returns

 object

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_Create_System_String_"></a> Create\(string\)

```csharp
public bool Create(string strPath)
```

#### Parameters

`strPath` string

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_Finalize"></a> \~DOEFile\(\)

```csharp
protected ~DOEFile()
```

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_GetCurrentCase"></a> GetCurrentCase\(\)

```csharp
public int GetCurrentCase()
```

#### Returns

 int

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_GetDefaultInnerFileName_VM_Managed_DAFUL_DOE_Result_enProc_"></a> GetDefaultInnerFileName\(enProc\)

```csharp
public string GetDefaultInnerFileName(enProc proc)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

#### Returns

 string

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_GetDefaultInnerFileName_VM_Managed_DAFUL_DOE_Result_enProc_System_Int32_"></a> GetDefaultInnerFileName\(enProc, int\)

```csharp
public string GetDefaultInnerFileName(enProc proc, int nCaseIdx)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

`nCaseIdx` int

#### Returns

 string

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_GetResult_VM_Managed_DAFUL_DOE_Result_DOEFile_VM_Managed_DAFUL_DOE_Result_enProc_"></a> GetResult\(DOEFile, enProc\)

```csharp
public static object GetResult(DOEFile doe_file, enProc proc)
```

#### Parameters

`doe_file` [DOEFile](VM.Managed.DAFUL.DOE.Result.DOEFile.md)

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

#### Returns

 object

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_GetResult_VM_Managed_DAFUL_DOE_Result_DOEFile_VM_Managed_DAFUL_DOE_Result_enProc_System_Int32_"></a> GetResult\(DOEFile, enProc, int\)

```csharp
public static object GetResult(DOEFile doe_file, enProc proc, int nIdx)
```

#### Parameters

`doe_file` [DOEFile](VM.Managed.DAFUL.DOE.Result.DOEFile.md)

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

`nIdx` int

#### Returns

 object

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_IsExists"></a> IsExists\(\)

```csharp
public bool IsExists()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_IsExists_VM_Managed_DAFUL_DOE_Result_enProc_"></a> IsExists\(enProc\)

```csharp
public bool IsExists(enProc proc)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_Load_VM_Managed_DAFUL_DOE_Result_enProc_System_IO_MemoryStream__"></a> Load\(enProc, ref MemoryStream\)

```csharp
public bool Load(enProc proc, ref MemoryStream stream)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

`stream` MemoryStream

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_LoadCase_System_Int32_System_IO_MemoryStream__"></a> LoadCase\(int, ref MemoryStream\)

```csharp
public bool LoadCase(int nCaseIdx, ref MemoryStream stream)
```

#### Parameters

`nCaseIdx` int

`stream` MemoryStream

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_Save_System_IO_MemoryStream_"></a> Save\(MemoryStream\)

```csharp
public bool Save(MemoryStream stream)
```

#### Parameters

`stream` MemoryStream

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_SaveAs_System_String_System_IO_MemoryStream_"></a> SaveAs\(string, MemoryStream\)

```csharp
public bool SaveAs(string strNewPath, MemoryStream stream)
```

#### Parameters

`strNewPath` string

`stream` MemoryStream

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_Result_DOEFile_SaveCase_System_Int32_System_IO_MemoryStream_"></a> SaveCase\(int, MemoryStream\)

```csharp
public bool SaveCase(int nCaseIdx, MemoryStream stream)
```

#### Parameters

`nCaseIdx` int

`stream` MemoryStream

#### Returns

 bool

