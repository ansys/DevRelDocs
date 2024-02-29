# <a id="VM_Models_Post_SeaLevel_AnimationData"></a> Class SeaLevel.AnimationData

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public class SeaLevel.AnimationData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SeaLevel.AnimationData](VM.Models.Post.SeaLevel.AnimationData.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_SeaLevel_AnimationData__ctor"></a> AnimationData\(\)

```csharp
public AnimationData()
```

## Properties

### <a id="VM_Models_Post_SeaLevel_AnimationData_Count"></a> Count

```csharp
public int Count { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_SeaLevel_AnimationData_CurrentsPostion"></a> CurrentsPostion

```csharp
public List<double[]> CurrentsPostion { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_SeaLevel_AnimationData_CurrentsVector"></a> CurrentsVector

```csharp
public List<double[]> CurrentsVector { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_SeaLevel_AnimationData_Heights"></a> Heights

```csharp
public List<double[]> Heights { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_SeaLevel_AnimationData_IsLoaded"></a> IsLoaded

```csharp
public bool IsLoaded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SeaLevel_AnimationData_IsLoadedCurrent"></a> IsLoadedCurrent

```csharp
public bool IsLoadedCurrent { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SeaLevel_AnimationData_Longitudinal"></a> Longitudinal

```csharp
public List<double> Longitudinal { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_SeaLevel_AnimationData_Velocitys"></a> Velocitys

```csharp
public List<double[]> Velocitys { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

## Methods

### <a id="VM_Models_Post_SeaLevel_AnimationData_SetAnimationData_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_Double____System_Collections_Generic_List_System_Double____"></a> SetAnimationData\(List<double\>, List<double\[\]\>, List<double\[\]\>\)

```csharp
public void SetAnimationData(List<double> longitudinal, List<double[]> heights, List<double[]> velocitys)
```

#### Parameters

`longitudinal` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`heights` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

`velocitys` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_SeaLevel_AnimationData_SetCurrentData_System_Collections_Generic_List_System_Double____System_Collections_Generic_List_System_Double____"></a> SetCurrentData\(List<double\[\]\>, List<double\[\]\>\)

```csharp
public void SetCurrentData(List<double[]> currentsVector, List<double[]> currentsPostion)
```

#### Parameters

`currentsVector` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

`currentsPostion` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

