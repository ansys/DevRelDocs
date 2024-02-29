# <a id="VM_Models_Post_IEigenvalueUnstructGridModel"></a> Interface IEigenvalueUnstructGridModel

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IEigenvalueUnstructGridModel : IContourUnstructGridModel, IUnstructGridModel, IModel
```

#### Implements

[IContourUnstructGridModel](VM.Models.Post.IContourUnstructGridModel.md), 
[IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md), 
[IModel](VM.Models.Post.IModel.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IEigenvalueUnstructGridModel_TargetSamplingTime"></a> TargetSamplingTime

```csharp
double TargetSamplingTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Models_Post_IEigenvalueUnstructGridModel_Build_VM_Models_Post_MetaInfo_VM_Models_Post_MetaInfo_System_Boolean_"></a> Build\(MetaInfo, MetaInfo, bool\)

```csharp
void Build(MetaInfo primaryMetaInfo, MetaInfo metaInfo = null, bool isUpdate = false)
```

#### Parameters

`primaryMetaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`isUpdate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

