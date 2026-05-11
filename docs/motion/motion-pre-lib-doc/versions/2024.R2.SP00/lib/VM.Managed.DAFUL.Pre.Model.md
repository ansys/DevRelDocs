# Class Model

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent model.

```csharp
public class Model : FileGroup<Model.ModelItemGroup, GroupItem>, IFileGroup
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

### Model\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Model" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Model()
```

## Properties

### DefaultDirectory

Gets the default directory.

```csharp
public static string DefaultDirectory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Toolkit

Gets or sets the toolkit.

```csharp
public string Toolkit { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AddGroupItem\(GroupItem\)

Adds the group item.

```csharp
public bool AddGroupItem(GroupItem item)
```

#### Parameters

`item` [GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

The item.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### AddInsertedFile\(string\)

Adds the inserted file.

```csharp
public static void AddInsertedFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

### ClearInsertedFiles\(\)

Clears the inserted files.

```csharp
public static void ClearInsertedFiles()
```

### FindGroup\(GroupItem, List<ModelItemGroup\>\)

Finds the group.

```csharp
public Model.ModelItemGroup FindGroup(GroupItem item, List<Model.ModelItemGroup> groups)
```

#### Parameters

`item` [GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

The item.

`groups` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Model](VM.Managed.DAFUL.Pre.Model.md).[ModelItemGroup](VM.Managed.DAFUL.Pre.Model.ModelItemGroup.md)\>

The groups.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md).[ModelItemGroup](VM.Managed.DAFUL.Pre.Model.ModelItemGroup.md)

### GetALLFilterList\(\)

Gets the all the filter list.

```csharp
public List<string> GetALLFilterList()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The filters.

### GetDefaultLocation\(bool, bool\)

Gets the recent directory.

```csharp
public static string GetDefaultLocation(bool bModel, bool bNew)
```

#### Parameters

`bModel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [model].

`bNew` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [new].

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

<code>The name of recent directory</code> if success; otherwise, <code>null</code>.

### GetFilterName\(string\)

Gets the name of the filter.

```csharp
public string GetFilterName(string filter)
```

#### Parameters

`filter` [string](https://learn.microsoft.com/dotnet/api/system.string)

The filter.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The filter name.

### GetFullPath\(string\)

Gets the full path through relative path.

```csharp
public string GetFullPath(string strRefDir)
```

#### Parameters

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The full path.

### GetGroupItemList\(\)

Gets the group item list.

```csharp
public List<GroupItem> GetGroupItemList()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)\>

The group items.

### GetGroupItemList\(string\)

Gets the group item list.

```csharp
public List<GroupItem> GetGroupItemList(string filter)
```

#### Parameters

`filter` [string](https://learn.microsoft.com/dotnet/api/system.string)

The filter.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)\>

The group items.

### GetInsertedFile\(\)

Gets the inserted file.

```csharp
public static List<string> GetInsertedFile()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### IsExistingItem\(GroupItem\)

Determines whether is existing item.

```csharp
public bool IsExistingItem(GroupItem groupItem)
```

#### Parameters

`groupItem` [GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

The group item.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is existing item; otherwise, <code>false</code>.

### IsExistingItem\(string, string\)

Determines whether is existing item.

```csharp
public bool IsExistingItem(string strRefDir, string strAbsolutePath)
```

#### Parameters

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

`strAbsolutePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The absolute path.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is existing item; otherwise, <code>false</code>.

### IsExistingItemFromDirectory\(string, string\)

Determines whether [is existing item from directory] [the specified STR ref dir].

```csharp
public bool IsExistingItemFromDirectory(string strRefDir, string strAbsoluteDirectory)
```

#### Parameters

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR ref dir.

`strAbsoluteDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR absolute directory.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [is existing item from directory] [the specified STR ref dir]; otherwise, <code>false</code>.

### IsExistingName\(string\)

Determines whether is existing name.

```csharp
public bool IsExistingName(string ItemName)
```

#### Parameters

`ItemName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the item.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is existing name; otherwise, <code>false</code>.

### SetDefaultLocation\(string, bool, bool\)

Sets the recent directory in registry.

```csharp
public static bool SetDefaultLocation(string strPath, bool bModel, bool bNew)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of current work.

`bModel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [model].

`bNew` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [new].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.


