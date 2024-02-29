# <a id="VM_Models_Post_ISeries"></a> Interface ISeries

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface ISeries : IObject, IHasName
```

#### Implements

[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_ISeries_Expression"></a> Expression

```csharp
string Expression { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ISeries_ID"></a> ID

```csharp
string ID { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ISeries_LineSeriesType"></a> LineSeriesType

```csharp
LineSeriesType LineSeriesType { get; }
```

#### Property Value

 [LineSeriesType](VM.Models.Post.LineSeriesType.md)

### <a id="VM_Models_Post_ISeries_NeedSavePoints"></a> NeedSavePoints

```csharp
bool NeedSavePoints { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ISeries_ParentID"></a> ParentID

```csharp
int ParentID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ISeries_RelatedSeries"></a> RelatedSeries

```csharp
IEnumerable<ISeries> RelatedSeries { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ISeries](VM.Models.Post.ISeries.md)\>

### <a id="VM_Models_Post_ISeries_ResultDocumentFilePath"></a> ResultDocumentFilePath

```csharp
string ResultDocumentFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ISeries_Unit"></a> Unit

```csharp
ExtendedUnit Unit { get; }
```

#### Property Value

 [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

### <a id="VM_Models_Post_ISeries_XAxisID"></a> XAxisID

```csharp
string XAxisID { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ISeries_YAxisID"></a> YAxisID

```csharp
string YAxisID { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_ISeries_ChangeParent_System_Int32_"></a> ChangeParent\(int\)

```csharp
void ChangeParent(int parentID)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

