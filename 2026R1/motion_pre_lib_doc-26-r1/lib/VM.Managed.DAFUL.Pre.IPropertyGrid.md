# Interface IPropertyGrid
<a id="VM_Managed_DAFUL_Pre_IPropertyGrid"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the property grid.

```csharp
public interface IPropertyGrid
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_Initialize_System_String_System_String_System_Boolean_System_Type_"></a> Initialize\(string, string, bool, Type\)

Initializes the specified property grid XML.

```csharp
string[] Initialize(string strPropertyGridXML, string strBuilderXml, bool bStart, Type typeOp)
```

#### Parameters

`strPropertyGridXML` string

The property grid XML.

`strBuilderXml` string

The builder XML.

`bStart` bool

if set to <code>true</code> [create operation start].

`typeOp` Type

The opeartion type.

#### Returns

 string\[\]

The result informations.

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_IsDoingOperation_System_Boolean_"></a> IsDoingOperation\(bool\)

Determines whether [is doing operation] [the specified doing operation].

```csharp
void IsDoingOperation(bool bDoingOp)
```

#### Parameters

`bDoingOp` bool

if set to <code>true</code> [doing operation].

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_IsPGEnableWindow_System_Boolean_System_Int32_"></a> IsPGEnableWindow\(bool, int\)

Determines whether [is PG enable window] [the specified b_ enable].

```csharp
void IsPGEnableWindow(bool b_Enable, int PickBreakPosition)
```

#### Parameters

`b_Enable` bool

if set to <code>true</code> [b_ enable].

`PickBreakPosition` int

The pick break position.

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_PropertyApply_System_Boolean_"></a> PropertyApply\(bool\)

Properties the apply.

```csharp
bool PropertyApply(bool bRestart)
```

#### Parameters

`bRestart` bool

if set to <code>true</code> [b restart].

#### Returns

 bool

The sucess state.

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_SetBuilderData_System_String_"></a> SetBuilderData\(string\)

Sets the builder data.

```csharp
void SetBuilderData(string strBuilder)
```

#### Parameters

`strBuilder` string

The builder.

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_SetGridData_System_String_"></a> SetGridData\(string\)

Sets the Grid data.

```csharp
void SetGridData(string strBuilder)
```

#### Parameters

`strBuilder` string

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_SetValue_System_String___"></a> SetValue\(string\[\]\)

Sets the value.

```csharp
void SetValue(string[] strArResult)
```

#### Parameters

`strArResult` string\[\]

The result.

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_SetValue_System_String_System_String_"></a> SetValue\(string, string\)

Sets the Value.

```csharp
void SetValue(string strPropName, string strValue)
```

#### Parameters

`strPropName` string

Name of the prop.

`strValue` string

The value.

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_SetValue_System_String_System_String_System_String_"></a> SetValue\(string, string, string\)

Sets the value.

```csharp
void SetValue(string strPropName, string strContent, string strResult)
```

#### Parameters

`strPropName` string

Name of the prop.

`strContent` string

Content of the prop.

`strResult` string

The result.

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_UpdateDocumentGridInfo"></a> UpdateDocumentGridInfo\(\)

Uddates the document grid information.

```csharp
void UpdateDocumentGridInfo()
```

### <a id="VM_Managed_DAFUL_Pre_IPropertyGrid_UpdateDocumentInfo_System_String_"></a> UpdateDocumentInfo\(string\)

Updates the document information.

```csharp
void UpdateDocumentInfo(string strXml)
```

#### Parameters

`strXml` string

The XML.

