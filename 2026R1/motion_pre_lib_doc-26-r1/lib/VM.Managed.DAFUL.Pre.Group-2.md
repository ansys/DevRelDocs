#  Class Group<TGroup, TItem\>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

The class is to represent the Group of Work.

```csharp
public class Group<TGroup, TItem>
```

#### Type Parameters

`TGroup` 

The type of the group.

`TItem` 

The type of the item.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Group<TGroup, TItem\>](VM.Managed.DAFUL.Pre.Group\-2.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_Group_2__ctor"></a> Group\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Group%602" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Group()
```

### <a id="VM_Managed_DAFUL_Pre_Group_2__ctor_System_String_"></a> Group\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Group%602" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Group(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of group.

## Properties

### <a id="VM_Managed_DAFUL_Pre_Group_2_Name"></a> Name

Gets or sets the name.

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Group_2_SubGroups"></a> SubGroups

Gets or sets the sub groups.

```csharp
public List<TGroup> SubGroups { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TGroup\>

### <a id="VM_Managed_DAFUL_Pre_Group_2_SubItems"></a> SubItems

Gets or sets the sub items.

```csharp
public List<TItem> SubItems { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TItem\>

## Methods

### <a id="VM_Managed_DAFUL_Pre_Group_2_Initialize"></a> Initialize\(\)

Initializes this instance.

```csharp
public virtual void Initialize()
```

