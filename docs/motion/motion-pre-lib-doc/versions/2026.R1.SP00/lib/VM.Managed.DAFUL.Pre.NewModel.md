# Class NewModel
<a id="VM_Managed_DAFUL_Pre_NewModel"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the model create.

```csharp
public class NewModel
```

#### Inheritance

object ← 
[NewModel](VM.Managed.DAFUL.Pre.NewModel.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_NewModel__ctor"></a> NewModel\(\)

```csharp
public NewModel()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_NewModel_ModelNew"></a> ModelNew

Gets or sets the model create type.

```csharp
public ModelTemplate ModelNew { get; set; }
```

#### Property Value

 [ModelTemplate](VM.Managed.DAFUL.Pre.ModelTemplate.md)

### <a id="VM_Managed_DAFUL_Pre_NewModel_ModelPath"></a> ModelPath

Gets or sets the model path.

```csharp
public string ModelPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_NewModel_WorkCreate"></a> WorkCreate

Gets or sets the work create type.

```csharp
public NewModel.WorkCreateType WorkCreate { get; set; }
```

#### Property Value

 [NewModel](VM.Managed.DAFUL.Pre.NewModel.md).[WorkCreateType](VM.Managed.DAFUL.Pre.NewModel.WorkCreateType.md)

### <a id="VM_Managed_DAFUL_Pre_NewModel_WorkPath"></a> WorkPath

Gets or sets the work path.

```csharp
public string WorkPath { get; set; }
```

#### Property Value

 string

