# Interface IFEFilm

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IFEFilm : IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment
```

#### Implements

[IEntityBase](VM.Models.Pre.IEntityBase.md), 
[IObjectBase](VM.Models.Pre.IObjectBase.md), 
[IObject](VM.Models.Pre.IObject.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IEventProvider](VM.Models.Pre.IEventProvider.md), 
[IHasKeyObject](VM.Models.Pre.IHasKeyObject.md), 
IHasName, 
IEnabled, 
IHasComment

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### EndAngle

```csharp
ExpressionValueVariable EndAngle { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### FEBody

```csharp
INodalBody FEBody { get; set; }
```

#### Property Value

 [INodalBody](VM.Models.Pre.INodalBody.md)

### FEFilmPaths

```csharp
IFEFilm_Paths[] FEFilmPaths { get; set; }
```

#### Property Value

 [IFEFilm\_Paths](VM.Models.Pre.IFEFilm\_Paths.md)\[\]

### FEFilm\_Elements

```csharp
IFEFilm_ElementProperty[] FEFilm_Elements { get; set; }
```

#### Property Value

 [IFEFilm\_ElementProperty](VM.Models.Pre.IFEFilm\_ElementProperty.md)\[\]

### FEPropertycreationType

```csharp
FEPropertyCreationType FEPropertycreationType { get; set; }
```

#### Property Value

 [FEPropertyCreationType](VM.Models.Pre.FEPropertyCreationType.md)

### Length

```csharp
ExpressionValueVariable Length { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### MaxLengthPerElement

```csharp
ExpressionValueVariable MaxLengthPerElement { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### NumberOfElement

```csharp
int NumberOfElement { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfElementsLateral

```csharp
int NumberOfElementsLateral { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfEndRevolution

```csharp
int NumberOfEndRevolution { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfNode

```csharp
int NumberOfNode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfStartRevolution

```csharp
int NumberOfStartRevolution { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RotationAxis

```csharp
string RotationAxis { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StartAngle

```csharp
ExpressionValueVariable StartAngle { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### TabshapeHexagon

```csharp
IFEFilm_TabshapeHexagon TabshapeHexagon { get; set; }
```

#### Property Value

 [IFEFilm\_TabshapeHexagon](VM.Models.Pre.IFEFilm\_TabshapeHexagon.md)

### Thickness

```csharp
ExpressionValueVariable Thickness { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### UseNumberOfEndRevolution

```csharp
bool UseNumberOfEndRevolution { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseNumberOfStartRevolution

```csharp
bool UseNumberOfStartRevolution { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseTabShape

```csharp
bool UseTabShape { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Width

```csharp
ExpressionValueVariable Width { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)


