# Class GroupItem

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent group item.

```csharp
public class GroupItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### GroupItem\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.GroupItem" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GroupItem()
```

## Properties

### Extension

Gets the extension.

```csharp
public string Extension { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

Gets the name.

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RelativePath

Gets or sets the relative path.

```csharp
public string RelativePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### GetFullPath\(string\)

Gets the full path.

```csharp
public string GetFullPath(string strRefDir)
```

#### Parameters

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The full path.


