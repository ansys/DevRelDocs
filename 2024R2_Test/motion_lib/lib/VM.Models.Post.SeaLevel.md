# <a id="VM_Models_Post_SeaLevel"></a> Class SeaLevel

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class SeaLevel : BodyBase, IObservableObject, IDisposableObject, IBody, IBodyBase, IPlottable, IVectorDisplayable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
BodyBase ← 
[SeaLevel](VM.Models.Post.SeaLevel.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IBody, 
IBodyBase, 
IPlottable, 
IVectorDisplayable, 
IEntity, 
IObject, 
IHasName, 
IHasIndex, 
IHasID

#### Inherited Members

BodyBase.ContainsMarker\(int\), 
BodyBase.ContainsPartIndex\(int\), 
BodyBase.AssociatedParts, 
BodyBase.BodyType, 
BodyBase.Color, 
BodyBase.CoordinateSystem, 
BodyBase.DataParts, 
BodyBase.DisplacementVisible, 
BodyBase.DisplayName, 
BodyBase.EntityType, 
BodyBase.FringeVisible, 
BodyBase.IsVisible, 
BodyBase.PlottableType, 
BodyBase.PointSize, 
BodyBase.RenderType, 
BodyBase.SmoothShading, 
BodyBase.TextureImage, 
BodyBase.Transparency, 
EntityBase.IsSupported\(EntityFilterMode\), 
EntityBase.CategoryType, 
EntityBase.EntityType, 
EntityBase.HasGeometry, 
EntityBase.ID, 
EntityBase.Index, 
EntityBase.InitialValues, 
EntityBase.IsDummy, 
EntityBase.IsPlottable, 
ObjectBase.GetUnstructGridModel\(\), 
ObjectBase.SetName\(string\), 
ObjectBase.UpdateAnimation\(UpdateActionType\), 
ObjectBase.AnalysisResult, 
ObjectBase.AnalysisResultID, 
ObjectBase.AnalysisResultType, 
ObjectBase.DisplayName, 
ObjectBase.FullName, 
ObjectBase.Name, 
ObjectBase.ParentDocument, 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_SeaLevel__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_System_String_System_String_System_Double___System_Double___System_Collections_Generic_IList_VM_Models_Post_ElementType__System_Collections_Generic_IList_System_UInt32____"></a> SeaLevel\(ResultDocument, Identifier, string, string, string, double\[\], double\[\], IList<ElementType\>, IList<uint\[\]\>\)

```csharp
public SeaLevel(ResultDocument parentDocument, Identifier analysisResultID, string fullName, string pathDFWAVE, string pathDFCRNT, double[] reference, double[] nodes, IList<ElementType> patchTypes, IList<uint[]> connectivities)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pathDFWAVE` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pathDFCRNT` [string](https://learn.microsoft.com/dotnet/api/system.string)

`reference` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`nodes` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`patchTypes` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ElementType\>

`connectivities` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>

## Properties

### <a id="VM_Models_Post_SeaLevel_BodyType"></a> BodyType

```csharp
public override BodyType BodyType { get; }
```

#### Property Value

 BodyType

### <a id="VM_Models_Post_SeaLevel_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_SeaLevel_Characteristics"></a> Characteristics

```csharp
public IList<VectorDisplayCharacteristicInfo> Characteristics { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<VectorDisplayCharacteristicInfo\>

### <a id="VM_Models_Post_SeaLevel_Connectivities"></a> Connectivities

```csharp
public IList<uint[]> Connectivities { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>

### <a id="VM_Models_Post_SeaLevel_CurrentString"></a> CurrentString

```csharp
public static string CurrentString { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_SeaLevel_DFCRNTpath"></a> DFCRNTpath

```csharp
public string DFCRNTpath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_SeaLevel_DFWAVEpath"></a> DFWAVEpath

```csharp
public string DFWAVEpath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_SeaLevel_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_SeaLevel_Nodes"></a> Nodes

```csharp
public double[] Nodes { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_SeaLevel_PatchTypes"></a> PatchTypes

```csharp
public IList<ElementType> PatchTypes { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ElementType\>

### <a id="VM_Models_Post_SeaLevel_PlottableType"></a> PlottableType

```csharp
public override PlottableType PlottableType { get; }
```

#### Property Value

 PlottableType

### <a id="VM_Models_Post_SeaLevel_Reference"></a> Reference

```csharp
public double[] Reference { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_SeaLevel_SeaLeveAnimationData"></a> SeaLeveAnimationData

```csharp
public SeaLevel.AnimationData SeaLeveAnimationData { get; }
```

#### Property Value

 [SeaLevel](VM.Models.Post.SeaLevel.md).[AnimationData](VM.Models.Post.SeaLevel.AnimationData.md)

## Methods

### <a id="VM_Models_Post_SeaLevel_CreateSeaLelvelCurrentVetor_System_Int32_System_Int32_System_Double___System_Double___"></a> CreateSeaLelvelCurrentVetor\(int, int, double\[\], double\[\]\)

```csharp
public void CreateSeaLelvelCurrentVetor(int xtype, int ytype, double[] xcurrentData, double[] ycurrentData)
```

#### Parameters

`xtype` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`ytype` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`xcurrentData` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`ycurrentData` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

