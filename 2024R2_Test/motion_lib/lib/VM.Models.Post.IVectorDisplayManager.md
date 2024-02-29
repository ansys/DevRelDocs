# <a id="VM_Models_Post_IVectorDisplayManager"></a> Interface IVectorDisplayManager

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IVectorDisplayManager : ISecondPassModel, IAnimationManager, IManager
```

#### Implements

[ISecondPassModel](VM.Models.Post.ISecondPassModel.md), 
[IAnimationManager](VM.Models.Post.IAnimationManager.md), 
[IManager](VM.Models.Post.IManager.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_IVectorDisplayManager_Add_System_String_VM_Models_Post_IVectorDisplayAnimationBase_VM_Models_OutputReader_IVectorDisplayAnimationData_"></a> Add\(string, IVectorDisplayAnimationBase, IVectorDisplayAnimationData\)

```csharp
void Add(string key, IVectorDisplayAnimationBase vectorDisplayBase, IVectorDisplayAnimationData vectorDisplayAnimatinoData)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`vectorDisplayBase` [IVectorDisplayAnimationBase](VM.Models.Post.IVectorDisplayAnimationBase.md)

`vectorDisplayAnimatinoData` IVectorDisplayAnimationData

### <a id="VM_Models_Post_IVectorDisplayManager_Remove_VM_Models_Post_IVectorDisplayAnimationBase_"></a> Remove\(IVectorDisplayAnimationBase\)

```csharp
void Remove(IVectorDisplayAnimationBase vectorDisplay)
```

#### Parameters

`vectorDisplay` [IVectorDisplayAnimationBase](VM.Models.Post.IVectorDisplayAnimationBase.md)

### <a id="VM_Models_Post_IVectorDisplayManager_SetFirstFrameLargeExt_System_Double_"></a> SetFirstFrameLargeExt\(double\)

```csharp
void SetFirstFrameLargeExt(double lenght)
```

#### Parameters

`lenght` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IVectorDisplayManager_TryGetAnimationData_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData__"></a> TryGetAnimationData\(string, out IVectorDisplayAnimationData\)

```csharp
bool TryGetAnimationData(string key, out IVectorDisplayAnimationData vectorDisplayAnimatinoData)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`vectorDisplayAnimatinoData` IVectorDisplayAnimationData

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IVectorDisplayManager_Update_System_String_VM_Models_Post_IVectorDisplayAnimationBase_VM_Models_OutputReader_IVectorDisplayAnimationData_"></a> Update\(string, IVectorDisplayAnimationBase, IVectorDisplayAnimationData\)

```csharp
void Update(string key, IVectorDisplayAnimationBase vectorDisplay, IVectorDisplayAnimationData vectorDisplayAnimatinoData)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`vectorDisplay` [IVectorDisplayAnimationBase](VM.Models.Post.IVectorDisplayAnimationBase.md)

`vectorDisplayAnimatinoData` IVectorDisplayAnimationData

