# <a id="VM_Models_Post_IObject"></a> Interface IObject

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IObject : IHasName
```

#### Implements

IHasName

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IObject_AnalysisResult"></a> AnalysisResult

```csharp
AnalysisResult AnalysisResult { get; }
```

#### Property Value

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_IObject_AnalysisResultID"></a> AnalysisResultID

```csharp
Identifier AnalysisResultID { get; }
```

#### Property Value

 Identifier

### <a id="VM_Models_Post_IObject_AnalysisResultType"></a> AnalysisResultType

```csharp
AnalysisResultType AnalysisResultType { get; }
```

#### Property Value

 AnalysisResultType

### <a id="VM_Models_Post_IObject_ParentDocument"></a> ParentDocument

```csharp
ResultDocument ParentDocument { get; }
```

#### Property Value

 [ResultDocument](VM.Models.Post.ResultDocument.md)

## Methods

### <a id="VM_Models_Post_IObject_GetUnstructGridModel"></a> GetUnstructGridModel\(\)

```csharp
IUnstructGridModel GetUnstructGridModel()
```

#### Returns

 [IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md)

### <a id="VM_Models_Post_IObject_SetName_System_String_"></a> SetName\(string\)

```csharp
void SetName(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

