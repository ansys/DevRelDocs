# Class Model
<a id="VM_Managed_DAFUL_Pre_Model"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent model.

```csharp
public class Model : FileGroup<Model.ModelItemGroup, GroupItem>, IFileGroup
```

#### Inheritance

object ← 
[Group<Model.ModelItemGroup, GroupItem\>](VM.Managed.DAFUL.Pre.Group\-2.md) ← 
[FileGroup<Model.ModelItemGroup, GroupItem\>](VM.Managed.DAFUL.Pre.FileGroup\-2.md) ← 
[Model](VM.Managed.DAFUL.Pre.Model.md)

#### Implements

[IFileGroup](VM.Managed.DAFUL.Pre.IFileGroup.md)

#### Inherited Members

[FileGroup<Model.ModelItemGroup, GroupItem\>.Path](VM.Managed.DAFUL.Pre.FileGroup\-2.md\#VM\_Managed\_DAFUL\_Pre\_FileGroup\_2\_Path), 
[Group<Model.ModelItemGroup, GroupItem\>.Initialize\(\)](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Initialize), 
[Group<Model.ModelItemGroup, GroupItem\>.Name](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Name), 
[Group<Model.ModelItemGroup, GroupItem\>.SubGroups](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubGroups), 
[Group<Model.ModelItemGroup, GroupItem\>.SubItems](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubItems)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_Model__ctor"></a> Model\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Model" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Model()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_Model_DefaultDirectory"></a> DefaultDirectory

Gets the default directory.

```csharp
public static string DefaultDirectory { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_Model_Toolkit"></a> Toolkit

Gets or sets the toolkit.

```csharp
public string Toolkit { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Pre_Model_AddGroupItem_VM_Managed_DAFUL_Pre_GroupItem_"></a> AddGroupItem\(GroupItem\)

Adds the group item.

```csharp
public bool AddGroupItem(GroupItem item)
```

#### Parameters

`item` [GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

The item.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Model_AddInsertedFile_System_String_"></a> AddInsertedFile\(string\)

Adds the inserted file.

```csharp
public static void AddInsertedFile(string strFileName)
```

#### Parameters

`strFileName` string

Name of the STR file.

### <a id="VM_Managed_DAFUL_Pre_Model_ClearInsertedFiles"></a> ClearInsertedFiles\(\)

Clears the inserted files.

```csharp
public static void ClearInsertedFiles()
```

### <a id="VM_Managed_DAFUL_Pre_Model_FindGroup_VM_Managed_DAFUL_Pre_GroupItem_System_Collections_Generic_List_VM_Managed_DAFUL_Pre_Model_ModelItemGroup__"></a> FindGroup\(GroupItem, List<ModelItemGroup\>\)

Finds the group.

```csharp
public Model.ModelItemGroup FindGroup(GroupItem item, List<Model.ModelItemGroup> groups)
```

#### Parameters

`item` [GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

The item.

`groups` List<[Model](VM.Managed.DAFUL.Pre.Model.md).[ModelItemGroup](VM.Managed.DAFUL.Pre.Model.ModelItemGroup.md)\>

The groups.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md).[ModelItemGroup](VM.Managed.DAFUL.Pre.Model.ModelItemGroup.md)

### <a id="VM_Managed_DAFUL_Pre_Model_GetALLFilterList"></a> GetALLFilterList\(\)

Gets the all the filter list.

```csharp
public List<string> GetALLFilterList()
```

#### Returns

 List<string\>

The filters.

### <a id="VM_Managed_DAFUL_Pre_Model_GetDefaultLocation_System_Boolean_System_Boolean_"></a> GetDefaultLocation\(bool, bool\)

Gets the recent directory.

```csharp
public static string GetDefaultLocation(bool bModel, bool bNew)
```

#### Parameters

`bModel` bool

if set to <code>true</code> [model].

`bNew` bool

if set to <code>true</code> [new].

#### Returns

 string

<code>The name of recent directory</code> if success; otherwise, <code>null</code>.

### <a id="VM_Managed_DAFUL_Pre_Model_GetFilterName_System_String_"></a> GetFilterName\(string\)

Gets the name of the filter.

```csharp
public string GetFilterName(string filter)
```

#### Parameters

`filter` string

The filter.

#### Returns

 string

The filter name.

### <a id="VM_Managed_DAFUL_Pre_Model_GetFullPath_System_String_"></a> GetFullPath\(string\)

Gets the full path through relative path.

```csharp
public string GetFullPath(string strRefDir)
```

#### Parameters

`strRefDir` string

The reference directory.

#### Returns

 string

The full path.

### <a id="VM_Managed_DAFUL_Pre_Model_GetGroupItemList"></a> GetGroupItemList\(\)

Gets the group item list.

```csharp
public List<GroupItem> GetGroupItemList()
```

#### Returns

 List<[GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)\>

The group items.

### <a id="VM_Managed_DAFUL_Pre_Model_GetGroupItemList_System_String_"></a> GetGroupItemList\(string\)

Gets the group item list.

```csharp
public List<GroupItem> GetGroupItemList(string filter)
```

#### Parameters

`filter` string

The filter.

#### Returns

 List<[GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)\>

The group items.

### <a id="VM_Managed_DAFUL_Pre_Model_GetInsertedFile"></a> GetInsertedFile\(\)

Gets the inserted file.

```csharp
public static List<string> GetInsertedFile()
```

#### Returns

 List<string\>

### <a id="VM_Managed_DAFUL_Pre_Model_IsExistingItem_VM_Managed_DAFUL_Pre_GroupItem_"></a> IsExistingItem\(GroupItem\)

Determines whether is existing item.

```csharp
public bool IsExistingItem(GroupItem groupItem)
```

#### Parameters

`groupItem` [GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

The group item.

#### Returns

 bool

<code>true</code> if is existing item; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Model_IsExistingItem_System_String_System_String_"></a> IsExistingItem\(string, string\)

Determines whether is existing item.

```csharp
public bool IsExistingItem(string strRefDir, string strAbsolutePath)
```

#### Parameters

`strRefDir` string

The reference directory.

`strAbsolutePath` string

The absolute path.

#### Returns

 bool

<code>true</code> if is existing item; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Model_IsExistingItemFromDirectory_System_String_System_String_"></a> IsExistingItemFromDirectory\(string, string\)

Determines whether [is existing item from directory] [the specified STR ref dir].

```csharp
public bool IsExistingItemFromDirectory(string strRefDir, string strAbsoluteDirectory)
```

#### Parameters

`strRefDir` string

The STR ref dir.

`strAbsoluteDirectory` string

The STR absolute directory.

#### Returns

 bool

<code>true</code> if [is existing item from directory] [the specified STR ref dir]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Model_IsExistingName_System_String_"></a> IsExistingName\(string\)

Determines whether is existing name.

```csharp
public bool IsExistingName(string ItemName)
```

#### Parameters

`ItemName` string

Name of the item.

#### Returns

 bool

<code>true</code> if is existing name; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Model_SetDefaultLocation_System_String_System_Boolean_System_Boolean_"></a> SetDefaultLocation\(string, bool, bool\)

Sets the recent directory in registry.

```csharp
public static bool SetDefaultLocation(string strPath, bool bModel, bool bNew)
```

#### Parameters

`strPath` string

The path of current work.

`bModel` bool

if set to <code>true</code> [model].

`bNew` bool

if set to <code>true</code> [new].

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

