# Interface IFEFilm
<a id="VM_Models_Pre_IFEFilm"></a>

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

### <a id="VM_Models_Pre_IFEFilm_EndAngle"></a> EndAngle

```csharp
ExpressionValueVariable EndAngle { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### <a id="VM_Models_Pre_IFEFilm_FEBody"></a> FEBody

```csharp
INodalBody FEBody { get; set; }
```

#### Property Value

 [INodalBody](VM.Models.Pre.INodalBody.md)

### <a id="VM_Models_Pre_IFEFilm_FEFilmPaths"></a> FEFilmPaths

```csharp
IFEFilm_Paths[] FEFilmPaths { get; set; }
```

#### Property Value

 [IFEFilm\_Paths](VM.Models.Pre.IFEFilm\_Paths.md)\[\]

### <a id="VM_Models_Pre_IFEFilm_FEFilm_Elements"></a> FEFilm\_Elements

```csharp
IFEFilm_ElementProperty[] FEFilm_Elements { get; set; }
```

#### Property Value

 [IFEFilm\_ElementProperty](VM.Models.Pre.IFEFilm\_ElementProperty.md)\[\]

### <a id="VM_Models_Pre_IFEFilm_FEPropertycreationType"></a> FEPropertycreationType

```csharp
FEPropertyCreationType FEPropertycreationType { get; set; }
```

#### Property Value

 [FEPropertyCreationType](VM.Models.Pre.FEPropertyCreationType.md)

### <a id="VM_Models_Pre_IFEFilm_Length"></a> Length

```csharp
ExpressionValueVariable Length { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### <a id="VM_Models_Pre_IFEFilm_MaxLengthPerElement"></a> MaxLengthPerElement

```csharp
ExpressionValueVariable MaxLengthPerElement { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### <a id="VM_Models_Pre_IFEFilm_NumberOfElement"></a> NumberOfElement

```csharp
int NumberOfElement { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Pre_IFEFilm_NumberOfElementsLateral"></a> NumberOfElementsLateral

```csharp
int NumberOfElementsLateral { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Pre_IFEFilm_NumberOfEndRevolution"></a> NumberOfEndRevolution

```csharp
int NumberOfEndRevolution { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Pre_IFEFilm_NumberOfNode"></a> NumberOfNode

```csharp
int NumberOfNode { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Pre_IFEFilm_NumberOfStartRevolution"></a> NumberOfStartRevolution

```csharp
int NumberOfStartRevolution { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Pre_IFEFilm_RotationAxis"></a> RotationAxis

```csharp
string RotationAxis { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_IFEFilm_StartAngle"></a> StartAngle

```csharp
ExpressionValueVariable StartAngle { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### <a id="VM_Models_Pre_IFEFilm_TabshapeHexagon"></a> TabshapeHexagon

```csharp
IFEFilm_TabshapeHexagon TabshapeHexagon { get; set; }
```

#### Property Value

 [IFEFilm\_TabshapeHexagon](VM.Models.Pre.IFEFilm\_TabshapeHexagon.md)

### <a id="VM_Models_Pre_IFEFilm_Thickness"></a> Thickness

```csharp
ExpressionValueVariable Thickness { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### <a id="VM_Models_Pre_IFEFilm_UseNumberOfEndRevolution"></a> UseNumberOfEndRevolution

```csharp
bool UseNumberOfEndRevolution { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_IFEFilm_UseNumberOfStartRevolution"></a> UseNumberOfStartRevolution

```csharp
bool UseNumberOfStartRevolution { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_IFEFilm_UseTabShape"></a> UseTabShape

```csharp
bool UseTabShape { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_IFEFilm_Width"></a> Width

```csharp
ExpressionValueVariable Width { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

