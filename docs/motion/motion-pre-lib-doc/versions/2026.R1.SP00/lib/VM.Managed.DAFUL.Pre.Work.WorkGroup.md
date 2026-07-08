# Class Work.WorkGroup
<a id="VM_Managed_DAFUL_Pre_Work_WorkGroup"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the WorkGroup.

```csharp
public class Work.WorkGroup : Group<Work.WorkGroup, GroupItem>, IWorkGroup
```

#### Inheritance

object ← 
[Group<Work.WorkGroup, GroupItem\>](VM.Managed.DAFUL.Pre.Group\-2.md) ← 
[Work.WorkGroup](VM.Managed.DAFUL.Pre.Work.WorkGroup.md)

#### Implements

[IWorkGroup](VM.Managed.DAFUL.Pre.IWorkGroup.md)

#### Inherited Members

[Group<Work.WorkGroup, GroupItem\>.Initialize\(\)](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Initialize), 
[Group<Work.WorkGroup, GroupItem\>.Name](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Name), 
[Group<Work.WorkGroup, GroupItem\>.SubGroups](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubGroups), 
[Group<Work.WorkGroup, GroupItem\>.SubItems](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubItems)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_Work_WorkGroup__ctor"></a> WorkGroup\(\)

```csharp
public WorkGroup()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_Work_WorkGroup_SubModels"></a> SubModels

Gets or sets the sub models.

```csharp
public List<Model> SubModels { get; set; }
```

#### Property Value

 List<[Model](VM.Managed.DAFUL.Pre.Model.md)\>

