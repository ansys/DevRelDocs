# Interface IDlgManager
<a id="VM_NX_Dialog_IDlgManager"></a>

Namespace: [VM.NX.Dialog](VM.NX.Dialog.md)  
Assembly: VMDIDef.dll  

```csharp
public interface IDlgManager
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_NX_Dialog_IDlgManager_CloseAllDialog_System_Object_"></a> CloseAllDialog\(object\)

```csharp
void CloseAllDialog(object doc)
```

#### Parameters

`doc` object

### <a id="VM_NX_Dialog_IDlgManager_CloseDialog_System_Object_System_Int32_"></a> CloseDialog\(object, int\)

```csharp
void CloseDialog(object doc, int nIDDialog)
```

#### Parameters

`doc` object

`nIDDialog` int

### <a id="VM_NX_Dialog_IDlgManager_CloseDocumentPropertyDialog_System_Object_System_Int32_"></a> CloseDocumentPropertyDialog\(object, int\)

```csharp
void CloseDocumentPropertyDialog(object doc, int nIDDialog)
```

#### Parameters

`doc` object

`nIDDialog` int

### <a id="VM_NX_Dialog_IDlgManager_CloseMultiDialog_System_Object_System_Int32_"></a> CloseMultiDialog\(object, int\)

```csharp
void CloseMultiDialog(object doc, int nIDDialog)
```

#### Parameters

`doc` object

`nIDDialog` int

### <a id="VM_NX_Dialog_IDlgManager_GetCountOpendDialog_System_Object_"></a> GetCountOpendDialog\(object\)

```csharp
int GetCountOpendDialog(object doc)
```

#### Parameters

`doc` object

#### Returns

 int

### <a id="VM_NX_Dialog_IDlgManager_GetForm_System_String_"></a> GetForm\(string\)

```csharp
Form GetForm(string strFullName)
```

#### Parameters

`strFullName` string

#### Returns

 Form

### <a id="VM_NX_Dialog_IDlgManager_GetXmlData_System_Object_"></a> GetXmlData\(object\)

```csharp
string GetXmlData(object doc)
```

#### Parameters

`doc` object

#### Returns

 string

### <a id="VM_NX_Dialog_IDlgManager_IsOpenDocumentPropertyDialog_System_Object_"></a> IsOpenDocumentPropertyDialog\(object\)

```csharp
bool IsOpenDocumentPropertyDialog(object doc)
```

#### Parameters

`doc` object

#### Returns

 bool

### <a id="VM_NX_Dialog_IDlgManager_IsOpenPropertyDialog_System_Object_System_UIntPtr_"></a> IsOpenPropertyDialog\(object, UIntPtr\)

```csharp
bool IsOpenPropertyDialog(object doc, UIntPtr obj)
```

#### Parameters

`doc` object

`obj` UIntPtr

#### Returns

 bool

### <a id="VM_NX_Dialog_IDlgManager_IsUsePropertyDialog_System_UIntPtr_"></a> IsUsePropertyDialog\(UIntPtr\)

```csharp
bool IsUsePropertyDialog(UIntPtr obj)
```

#### Parameters

`obj` UIntPtr

#### Returns

 bool

### <a id="VM_NX_Dialog_IDlgManager_OpenDocumentPropertyDialog_System_Object_"></a> OpenDocumentPropertyDialog\(object\)

```csharp
int OpenDocumentPropertyDialog(object doc)
```

#### Parameters

`doc` object

#### Returns

 int

### <a id="VM_NX_Dialog_IDlgManager_OpenMarkerInformation_System_UIntPtr_"></a> OpenMarkerInformation\(UIntPtr\)

```csharp
void OpenMarkerInformation(UIntPtr KeyObject)
```

#### Parameters

`KeyObject` UIntPtr

### <a id="VM_NX_Dialog_IDlgManager_OpenModelessDialog_System_Object_System_String_System_String_"></a> OpenModelessDialog\(object, string, string\)

```csharp
Form OpenModelessDialog(object doc, string strType, string strInitInfo)
```

#### Parameters

`doc` object

`strType` string

`strInitInfo` string

#### Returns

 Form

### <a id="VM_NX_Dialog_IDlgManager_OpenModelessDialog_System_Object_System_Type_System_String_"></a> OpenModelessDialog\(object, Type, string\)

```csharp
Form OpenModelessDialog(object doc, Type type, string strInitInfo)
```

#### Parameters

`doc` object

`type` Type

`strInitInfo` string

#### Returns

 Form

### <a id="VM_NX_Dialog_IDlgManager_OpenModelessDialog_System_Object_System_String_System_Object___System_String_"></a> OpenModelessDialog\(object, string, object\[\], string\)

```csharp
Form OpenModelessDialog(object doc, string strType, object[] arParam, string strInitInfo)
```

#### Parameters

`doc` object

`strType` string

`arParam` object\[\]

`strInitInfo` string

#### Returns

 Form

### <a id="VM_NX_Dialog_IDlgManager_OpenPropertyDialog_System_Object_System_UIntPtr_"></a> OpenPropertyDialog\(object, UIntPtr\)

```csharp
int OpenPropertyDialog(object doc, UIntPtr obj)
```

#### Parameters

`doc` object

`obj` UIntPtr

#### Returns

 int

### <a id="VM_NX_Dialog_IDlgManager_OpenPropertyDialog_System_Object_System_UIntPtr_System_Boolean_"></a> OpenPropertyDialog\(object, UIntPtr, bool\)

```csharp
int OpenPropertyDialog(object doc, UIntPtr obj, bool bCreate)
```

#### Parameters

`doc` object

`obj` UIntPtr

`bCreate` bool

#### Returns

 int

### <a id="VM_NX_Dialog_IDlgManager_OpenPropertyDialog_System_Object_System_UIntPtr_System_Windows_Forms_Form_"></a> OpenPropertyDialog\(object, UIntPtr, Form\)

```csharp
int OpenPropertyDialog(object doc, UIntPtr obj, Form ownerForm)
```

#### Parameters

`doc` object

`obj` UIntPtr

`ownerForm` Form

#### Returns

 int

### <a id="VM_NX_Dialog_IDlgManager_OpenPropertyMultiDialog_System_Object_System_Collections_Generic_List_System_UIntPtr__"></a> OpenPropertyMultiDialog\(object, List<UIntPtr\>\)

```csharp
void OpenPropertyMultiDialog(object doc, List<UIntPtr> lstObj)
```

#### Parameters

`doc` object

`lstObj` List<UIntPtr\>

### <a id="VM_NX_Dialog_IDlgManager_Redraw_System_Object_"></a> Redraw\(object\)

```csharp
void Redraw(object doc)
```

#### Parameters

`doc` object

### <a id="VM_NX_Dialog_IDlgManager_SetXmlData_System_Object_System_String_"></a> SetXmlData\(object, string\)

```csharp
void SetXmlData(object doc, string strXml)
```

#### Parameters

`doc` object

`strXml` string

### <a id="VM_NX_Dialog_IDlgManager_ShowModelessDialog_System_Windows_Forms_Form_"></a> ShowModelessDialog\(Form\)

```csharp
void ShowModelessDialog(Form form)
```

#### Parameters

`form` Form

### <a id="VM_NX_Dialog_IDlgManager_VisibleDialog_System_Object_System_Boolean_"></a> VisibleDialog\(object, bool\)

```csharp
void VisibleDialog(object doc, bool bShow)
```

#### Parameters

`doc` object

`bShow` bool

