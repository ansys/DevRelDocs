#  Class FileGroup<TGroup, TItem\>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent file group.

```csharp
public class FileGroup<TGroup, TItem> : Group<TGroup, TItem>, IFileGroup
```

#### Type Parameters

`TGroup` 

The type of the group.

`TItem` 

The type of the item.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Group<TGroup, TItem\>](VM.Managed.DAFUL.Pre.Group\-2.md) ← 
[FileGroup<TGroup, TItem\>](VM.Managed.DAFUL.Pre.FileGroup\-2.md)

#### Implements

[IFileGroup](VM.Managed.DAFUL.Pre.IFileGroup.md)

#### Inherited Members

[Group<TGroup, TItem\>.Initialize\(\)](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Initialize), 
[Group<TGroup, TItem\>.Name](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Name), 
[Group<TGroup, TItem\>.SubGroups](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubGroups), 
[Group<TGroup, TItem\>.SubItems](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubItems)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_FileGroup_2__ctor"></a> FileGroup\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.FileGroup%602" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FileGroup()
```

### <a id="VM_Managed_DAFUL_Pre_FileGroup_2__ctor_System_String_"></a> FileGroup\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.FileGroup%602" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FileGroup(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

## Properties

### <a id="VM_Managed_DAFUL_Pre_FileGroup_2_Path"></a> Path

Gets or sets the path.

```csharp
public string Path { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

