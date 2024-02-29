# <a id="VM_Models_Post_IVectorDisplayAnimationBase"></a> Interface IVectorDisplayAnimationBase

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IVectorDisplayAnimationBase
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IVectorDisplayAnimationBase_IsLabelVisible"></a> IsLabelVisible

```csharp
bool IsLabelVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IVectorDisplayAnimationBase_IsVisible"></a> IsVisible

```csharp
bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IVectorDisplayAnimationBase_LabelBackgroundColor"></a> LabelBackgroundColor

```csharp
Color LabelBackgroundColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_IVectorDisplayAnimationBase_LabelTextColor"></a> LabelTextColor

```csharp
Color LabelTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_IVectorDisplayAnimationBase_LargeExtentOfBoundingBox"></a> LargeExtentOfBoundingBox

```csharp
double LargeExtentOfBoundingBox { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IVectorDisplayAnimationBase_Name"></a> Name

```csharp
string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IVectorDisplayAnimationBase_StateID"></a> StateID

```csharp
int StateID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IVectorDisplayAnimationBase_Type"></a> Type

```csharp
VectorDisplayType Type { get; set; }
```

#### Property Value

 [VectorDisplayType](VM.Models.Post.VectorDisplayType.md)

## Methods

### <a id="VM_Models_Post_IVectorDisplayAnimationBase_UpdateState_System_Int32_"></a> UpdateState\(int\)

```csharp
void UpdateState(int stateID)
```

#### Parameters

`stateID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

