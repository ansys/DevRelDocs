#  Class FEFilm

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFEFilm.dll  

```csharp
public class FEFilm : Entity<PropertyFEFilm>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IFEFilm, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyFEFilm\> ← 
[FEFilm](VM.Managed.DAFUL.FEFilm.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
IEntity, 
IVisible, 
IDocumentOwner, 
INamed, 
INavigatorItem, 
IVisible, 
IMultiChangable, 
IHasProperty, 
IGroup, 
IFEFilm, 
IEntityBase, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment

#### Inherited Members

Entity<PropertyFEFilm\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyFEFilm\>.GetUnnamedObjectName\(object\), 
Entity<PropertyFEFilm\>.FindLocal\(string\), 
Entity<PropertyFEFilm\>.Property, 
EntityBase.Initialize\(Unit.ConvertFactor\), 
EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\), 
EntityBase.OnDeserializationForAttribute\(\), 
EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
EntityBase.LinkRequestDestroying\(object, LinkEventArgs\), 
EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
EntityBase.FixUp\(ObjectBase\), 
EntityBase.FindLocal\(string\), 
EntityBase.WriteTemplateImpl\(XmlWriter\), 
EntityBase.ReadTemplateImpl\(XmlReader\), 
EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
EntityBase.OnDeserialization\(object\), 
EntityBase.Name, 
EntityBase.FullName, 
EntityBase.NonSymmetricName, 
EntityBase.DisplayName, 
EntityBase.IsEnabled, 
EntityBase.Comment, 
EntityBase.HasLayerExplicitly, 
EntityBase.UntypedProperty, 
EntityBase.IsFileProperty, 
EntityBase.Layer, 
EntityBase.IsVisible, 
ContainerObject<EntityEventCore\>.Find\(string\), 
ContainerObject<EntityEventCore\>.FindLocal\(string\), 
ContainerObject<EntityEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<EntityEventCore\>.GetKey\(\), 
Object<EntityEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<EntityEventCore\>.SetIconColor\(Canvas\), 
Object<EntityEventCore\>.OnDeserialization\(object\), 
Object<EntityEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<EntityEventCore\>.RollbackEvent\(\), 
Object<EntityEventCore\>.OnDeserializedCore\(object\), 
Object<EntityEventCore\>.Key, 
Object<EntityEventCore\>.UntypedEventCore, 
Object<EntityEventCore\>.EventCore, 
Object<EntityEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
LinkableBase.OnDeserialization\(object\), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
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

### <a id="VM_Managed_DAFUL_FEFilm__ctor"></a> FEFilm\(\)

```csharp
public FEFilm()
```

### <a id="VM_Managed_DAFUL_FEFilm__ctor_System_String_"></a> FEFilm\(string\)

```csharp
public FEFilm(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Managed_DAFUL_FEFilm_EndAngle"></a> EndAngle

```csharp
public ExpressionValueVariable EndAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_FEBody"></a> FEBody

```csharp
public NodalBody FEBody { get; set; }
```

#### Property Value

 NodalBody

### <a id="VM_Managed_DAFUL_FEFilm_FEFilmPaths"></a> FEFilmPaths

```csharp
public FEFilm_Paths[] FEFilmPaths { get; set; }
```

#### Property Value

 [FEFilm\_Paths](VM.Managed.DAFUL.FEFilm\_Paths.md)\[\]

### <a id="VM_Managed_DAFUL_FEFilm_FEFilm_Elements"></a> FEFilm\_Elements

```csharp
public FEFilm_Multi_Lateral[] FEFilm_Elements { get; set; }
```

#### Property Value

 [FEFilm\_Multi\_Lateral](VM.Managed.DAFUL.FEFilm\_Multi\_Lateral.md)\[\]

### <a id="VM_Managed_DAFUL_FEFilm_FEPropertycreationType"></a> FEPropertycreationType

```csharp
public FEPropertyCreationType FEPropertycreationType { get; set; }
```

#### Property Value

 FEPropertyCreationType

### <a id="VM_Managed_DAFUL_FEFilm_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FEFilm_Length"></a> Length

```csharp
public ExpressionValueVariable Length { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_MaxLengthPerElement"></a> MaxLengthPerElement

```csharp
public ExpressionValueVariable MaxLengthPerElement { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfElement"></a> NumberOfElement

```csharp
public int NumberOfElement { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfElementLongitudinal"></a> NumberOfElementLongitudinal

```csharp
[Obsolete]
public int NumberOfElementLongitudinal { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfElementWidth"></a> NumberOfElementWidth

```csharp
[Obsolete]
public int NumberOfElementWidth { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfElementsLateral"></a> NumberOfElementsLateral

```csharp
public int NumberOfElementsLateral { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfEndRevolution"></a> NumberOfEndRevolution

```csharp
public int NumberOfEndRevolution { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfNode"></a> NumberOfNode

```csharp
public int NumberOfNode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfStartRevolution"></a> NumberOfStartRevolution

```csharp
public int NumberOfStartRevolution { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_ReferenceFrame"></a> ReferenceFrame

```csharp
public IDesignFrame ReferenceFrame { get; set; }
```

#### Property Value

 IDesignFrame

### <a id="VM_Managed_DAFUL_FEFilm_RotationAxis"></a> RotationAxis

```csharp
public string RotationAxis { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FEFilm_StartAngle"></a> StartAngle

```csharp
public ExpressionValueVariable StartAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_TabShape"></a> TabShape

```csharp
public FEFilm_Pole TabShape { get; set; }
```

#### Property Value

 [FEFilm\_Pole](VM.Managed.DAFUL.FEFilm\_Pole.md)

### <a id="VM_Managed_DAFUL_FEFilm_Thickness"></a> Thickness

```csharp
public ExpressionValueVariable Thickness { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_UseNumberOfEndRevolution"></a> UseNumberOfEndRevolution

```csharp
public bool UseNumberOfEndRevolution { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FEFilm_UseNumberOfStartRevolution"></a> UseNumberOfStartRevolution

```csharp
public bool UseNumberOfStartRevolution { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FEFilm_UseTabShape"></a> UseTabShape

```csharp
public bool UseTabShape { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FEFilm_Width"></a> Width

```csharp
public ExpressionValueVariable Width { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm__ReferenceFrame"></a> \_ReferenceFrame

```csharp
public Linker<IDesignFrame> _ReferenceFrame { get; set; }
```

#### Property Value

 Linker<IDesignFrame\>

## Methods

### <a id="VM_Managed_DAFUL_FEFilm_AddFE_Path_VM_Managed_ObjectBase_VM_Models_Pre_WindingDirection_System_Double_"></a> AddFE\_Path\(ObjectBase, WindingDirection, double\)

```csharp
public void AddFE_Path(ObjectBase designSubEntity, WindingDirection windingDirection, double radius = 0)
```

#### Parameters

`designSubEntity` ObjectBase

`windingDirection` WindingDirection

`radius` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_FEFilm_AddFE_Path_VM_Managed_ObjectBase_"></a> AddFE\_Path\(ObjectBase\)

```csharp
public void AddFE_Path(ObjectBase designSubEntity)
```

#### Parameters

`designSubEntity` ObjectBase

### <a id="VM_Managed_DAFUL_FEFilm_Add_ElementsProperty_System_Double_System_Double_"></a> Add\_ElementsProperty\(double, double\)

```csharp
public void Add_ElementsProperty(double width, double thickness)
```

#### Parameters

`width` [double](https://learn.microsoft.com/dotnet/api/system.double)

`thickness` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_FEFilm_ClearFE_Path"></a> ClearFE\_Path\(\)

```csharp
public void ClearFE_Path()
```

### <a id="VM_Managed_DAFUL_FEFilm_Clear_ElementsProperty"></a> Clear\_ElementsProperty\(\)

```csharp
public void Clear_ElementsProperty()
```

### <a id="VM_Managed_DAFUL_FEFilm_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_FEFilm_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_FEFilm_PostAddToDocument"></a> PostAddToDocument\(\)

```csharp
public override void PostAddToDocument()
```

### <a id="VM_Managed_DAFUL_FEFilm_UpdateVariablesFilmBody_System_String_System_String_System_Int32_System_Int32_"></a> UpdateVariablesFilmBody\(string, string, int, int\)

```csharp
public void UpdateVariablesFilmBody(string width, string length, int noofnodes, int noofelements)
```

#### Parameters

`width` [string](https://learn.microsoft.com/dotnet/api/system.string)

`length` [string](https://learn.microsoft.com/dotnet/api/system.string)

`noofnodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`noofelements` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_UpdateVariablesForTabShape_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Int32_System_Int32_System_Int32_System_Int32_"></a> UpdateVariablesForTabShape\(string, string, string, string, string, string, string, string, int, int, int, int\)

```csharp
public void UpdateVariablesForTabShape(string tablocation, string width, string length, string chamfer_w, string chamfer_L, string interval, string thickness, string maxwidth, int noofnodes, int noofelements, int noofnodesperpole, int noofelementsperpole)
```

#### Parameters

`tablocation` [string](https://learn.microsoft.com/dotnet/api/system.string)

`width` [string](https://learn.microsoft.com/dotnet/api/system.string)

`length` [string](https://learn.microsoft.com/dotnet/api/system.string)

`chamfer_w` [string](https://learn.microsoft.com/dotnet/api/system.string)

`chamfer_L` [string](https://learn.microsoft.com/dotnet/api/system.string)

`interval` [string](https://learn.microsoft.com/dotnet/api/system.string)

`thickness` [string](https://learn.microsoft.com/dotnet/api/system.string)

`maxwidth` [string](https://learn.microsoft.com/dotnet/api/system.string)

`noofnodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`noofelements` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`noofnodesperpole` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`noofelementsperpole` [int](https://learn.microsoft.com/dotnet/api/system.int32)

