# Class FEFilm
<a id="VM_Managed_DAFUL_FEFilm"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFEFilm.dll  

```csharp
public class FEFilm : Entity<PropertyFEFilm>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IFEFilm, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
[EntityBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[Entity<PropertyFEFilm\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[FEFilm](VM.Managed.DAFUL.FEFilm.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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

[Entity<PropertyFEFilm\>.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyFEFilm\>.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyFEFilm\>.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<PropertyFEFilm\>.Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserializationForAttribute\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkRequestDestroying\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.WriteTemplateImpl\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.ReadTemplateImpl\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.HasLayerExplicitly](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.UntypedProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsFileProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Layer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsVisible](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

`strName` string

## Properties

### <a id="VM_Managed_DAFUL_FEFilm_EndAngle"></a> EndAngle

```csharp
public ExpressionValueVariable EndAngle { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

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

 bool

### <a id="VM_Managed_DAFUL_FEFilm_Length"></a> Length

```csharp
public ExpressionValueVariable Length { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_FEFilm_MaxLengthPerElement"></a> MaxLengthPerElement

```csharp
public ExpressionValueVariable MaxLengthPerElement { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfElement"></a> NumberOfElement

```csharp
public int NumberOfElement { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfElementLongitudinal"></a> NumberOfElementLongitudinal

```csharp
[Obsolete]
public int NumberOfElementLongitudinal { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfElementWidth"></a> NumberOfElementWidth

```csharp
[Obsolete]
public int NumberOfElementWidth { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfElementsLateral"></a> NumberOfElementsLateral

```csharp
public int NumberOfElementsLateral { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfEndRevolution"></a> NumberOfEndRevolution

```csharp
public int NumberOfEndRevolution { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfNode"></a> NumberOfNode

```csharp
public int NumberOfNode { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_FEFilm_NumberOfStartRevolution"></a> NumberOfStartRevolution

```csharp
public int NumberOfStartRevolution { get; set; }
```

#### Property Value

 int

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

 string

### <a id="VM_Managed_DAFUL_FEFilm_StartAngle"></a> StartAngle

```csharp
public ExpressionValueVariable StartAngle { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

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

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_FEFilm_UseNumberOfEndRevolution"></a> UseNumberOfEndRevolution

```csharp
public bool UseNumberOfEndRevolution { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_FEFilm_UseNumberOfStartRevolution"></a> UseNumberOfStartRevolution

```csharp
public bool UseNumberOfStartRevolution { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_FEFilm_UseTabShape"></a> UseTabShape

```csharp
public bool UseTabShape { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_FEFilm_Width"></a> Width

```csharp
public ExpressionValueVariable Width { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

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

`radius` double

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

`width` double

`thickness` double

### <a id="VM_Managed_DAFUL_FEFilm_ClearFE_Path"></a> ClearFE\_Path\(\)

```csharp
public void ClearFE_Path()
```

### <a id="VM_Managed_DAFUL_FEFilm_Clear_ElementsProperty"></a> Clear\_ElementsProperty\(\)

```csharp
public void Clear_ElementsProperty()
```

### <a id="VM_Managed_DAFUL_FEFilm_CollectionHowToMakeFEProperty_System_Int32_System_Collections_Generic_List_System_Double__System_Int32__System_Collections_Generic_List_System_Int32___System_Collections_Generic_Dictionary_System_Double_System_Int32___"></a> CollectionHowToMakeFEProperty\(int, List<double\>, ref int, ref List<int\>, ref Dictionary<double, int\>\)

```csharp
public static void CollectionHowToMakeFEProperty(int type, List<double> lstThickness, ref int noOfProperty, ref List<int> lstPropertyID, ref Dictionary<double, int> mapThickness)
```

#### Parameters

`type` int

`lstThickness` List<double\>

`noOfProperty` int

`lstPropertyID` List<int\>

`mapThickness` Dictionary<double, int\>

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

`sender` object

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

`width` string

`length` string

`noofnodes` int

`noofelements` int

### <a id="VM_Managed_DAFUL_FEFilm_UpdateVariablesForTabShape_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Int32_System_Int32_System_Int32_System_Int32_"></a> UpdateVariablesForTabShape\(string, string, string, string, string, string, string, string, int, int, int, int\)

```csharp
public void UpdateVariablesForTabShape(string tablocation, string width, string length, string chamfer_w, string chamfer_L, string interval, string thickness, string maxwidth, int noofnodes, int noofelements, int noofnodesperpole, int noofelementsperpole)
```

#### Parameters

`tablocation` string

`width` string

`length` string

`chamfer_w` string

`chamfer_L` string

`interval` string

`thickness` string

`maxwidth` string

`noofnodes` int

`noofelements` int

`noofnodesperpole` int

`noofelementsperpole` int

### <a id="VM_Managed_DAFUL_FEFilm_WriteFEFilmFile_System_String_System_Int32_System_ValueTuple_System_Double_System_Double_System_Double__System_ValueTuple_System_Int32_System_Double_System_Int32_System_Int32__System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_ValueTuple_System_Double_System_Double_System_Int32___System_ValueTuple_System_Int32_System_Double_System_Int32_System_Int32_System_Double_System_Int32__System_ValueTuple_System_Int32_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double__System_Collections_Generic_List_System_ValueTuple_System_String_System_Int32_System_Int32_System_Int32_System_Double_VM_Vector_VM_OMatrix___System_Int32_System_ValueTuple_System_Int32_System_Int32_System_Int32_System_Double_System_Double_System_Double_System_Double_System_ValueTuple_System_Double_System_ValueTuple_System_Double_System_Double_System_Double_System_Double__System_ValueTuple_System_Double_System_Double_System_Double_System_Double____"></a> WriteFEFilmFile\(string, int, \(double, double, double\), \(int, double, int, int\), List<double\>, List<\(double, double, int\)\>, \(int, double, int, int, double, int\), \(int, double, double, double, double, double, double\), List<\(string, int, int, int, double, Vector, OMatrix\)\>, int, \(int, int, int, double, double, double, double, double, \(double, double, double, double\), \(double, double, double, double\)\)\)

```csharp
public static bool WriteFEFilmFile(string inputPath, int analysisType, (double, double, double) scale, (int, double, int, int) geometryInfo, List<double> thickness, List<(double, double, int)> layer, (int, double, int, int, double, int) windingConfig, (int, double, double, double, double, double, double) refInfo, List<(string, int, int, int, double, Vector, OMatrix)> paths, int usePole, (int, int, int, double, double, double, double, double, (double, double, double, double), (double, double, double, double)) poleInfo)
```

#### Parameters

`inputPath` string

`analysisType` int

`scale` \(double, double, double\)

`geometryInfo` \(int, double, int, int\)

`thickness` List<double\>

`layer` List<\(double, double, int\)\>

`windingConfig` \(int, double, int, int, double, int\)

`refInfo` \(int, double, double, double, double, double, double\)

`paths` List<\(string, int, int, int, double, Vector, OMatrix\)\>

`usePole` int

`poleInfo` \(int, int, int, double, double, double, double, double, \(double, double, double, double\), \(double, double, double, double\)\)

#### Returns

 bool

### <a id="VM_Managed_DAFUL_FEFilm_WriteFEFilmFile_System_String_VM_Managed_DAFUL_FEFilm_"></a> WriteFEFilmFile\(string, FEFilm\)

```csharp
public static bool WriteFEFilmFile(string inputPath, FEFilm feFilm)
```

#### Parameters

`inputPath` string

`feFilm` [FEFilm](VM.Managed.DAFUL.FEFilm.md)

#### Returns

 bool

### <a id="VM_Managed_DAFUL_FEFilm_WriteNGons_System_Int32_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> WriteNGons\(int, double, double, double, double, double, double, double\)

```csharp
public static (int, int) WriteNGons(int locationTabShape, double lengthPole, double chamferOfLength, double widthPole, double chamferOfWidth, double chamferOfLengthBottom, double widthPoleBottom, double chamferOfWidthBottom)
```

#### Parameters

`locationTabShape` int

`lengthPole` double

`chamferOfLength` double

`widthPole` double

`chamferOfWidth` double

`chamferOfLengthBottom` double

`widthPoleBottom` double

`chamferOfWidthBottom` double

#### Returns

 \(int, int\)

### <a id="VM_Managed_DAFUL_FEFilm_WritePath_VM_Managed_ObjectBase_"></a> WritePath\(ObjectBase\)

```csharp
public static (int, Vector, OMatrix) WritePath(ObjectBase path)
```

#### Parameters

`path` ObjectBase

#### Returns

 \(int, Vector, OMatrix\)

### <a id="VM_Managed_DAFUL_FEFilm_WriteReferenceFrame_System_String_VM_OMatrix_"></a> WriteReferenceFrame\(string, OMatrix\)

```csharp
public static (Vector, Vector) WriteReferenceFrame(string strAxis, OMatrix oMatrix)
```

#### Parameters

`strAxis` string

`oMatrix` OMatrix

#### Returns

 \(Vector, Vector\)

