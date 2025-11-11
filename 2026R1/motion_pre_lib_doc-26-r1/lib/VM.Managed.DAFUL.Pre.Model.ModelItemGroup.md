# Class Model.ModelItemGroup
<a id="VM_Managed_DAFUL_Pre_Model_ModelItemGroup"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to Item group of model.

```csharp
public class Model.ModelItemGroup : Group<Model.ModelItemGroup, GroupItem>
```

#### Inheritance

object ← 
[Group<Model.ModelItemGroup, GroupItem\>](VM.Managed.DAFUL.Pre.Group\-2.md) ← 
[Model.ModelItemGroup](VM.Managed.DAFUL.Pre.Model.ModelItemGroup.md)

#### Inherited Members

[Group<Model.ModelItemGroup, GroupItem\>.Initialize\(\)](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Initialize), 
[Group<Model.ModelItemGroup, GroupItem\>.Name](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Name), 
[Group<Model.ModelItemGroup, GroupItem\>.SubGroups](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubGroups), 
[Group<Model.ModelItemGroup, GroupItem\>.SubItems](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubItems)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_Model_ModelItemGroup__ctor"></a> ModelItemGroup\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Model.ModelItemGroup" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModelItemGroup()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_Model_ModelItemGroup_Filter"></a> Filter

Gets or sets the filter.

```csharp
public string Filter { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Pre_Model_ModelItemGroup_GetFilterList"></a> GetFilterList\(\)

Gets the filter list.

```csharp
public List<string> GetFilterList()
```

#### Returns

 List<string\>

The filters.

