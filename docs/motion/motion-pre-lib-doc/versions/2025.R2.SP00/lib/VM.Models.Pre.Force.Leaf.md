#  Class Leaf

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

This class is to represent the Leaf.

```csharp
public class Leaf : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Leaf](VM.Models.Pre.Force.Leaf.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
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

### <a id="VM_Models_Pre_Force_Leaf__ctor"></a> Leaf\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Leaf" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Leaf()
```

## Properties

### <a id="VM_Models_Pre_Force_Leaf_ContactStiffness"></a> ContactStiffness

Gets or sets the contact stiffness.

```csharp
public ExpressionValueVariable ContactStiffness { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Leaf_ContactStiffnessScale"></a> ContactStiffnessScale

Gets or sets the contact stiffness scale.

```csharp
public ExpressionValueVariable ContactStiffnessScale { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Leaf_DampingCoefficient"></a> DampingCoefficient

Gets or sets the damping coefficient.

```csharp
public ExpressionValueVariable DampingCoefficient { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Leaf_FrontContactPointCount"></a> FrontContactPointCount

Gets or sets the front contact point count.

```csharp
public int FrontContactPointCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Force_Leaf_FrontElementCount"></a> FrontElementCount

Gets or sets the front element count.

```csharp
public int FrontElementCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Force_Leaf_FrontLength"></a> FrontLength

Gets or sets the front length.

```csharp
public double FrontLength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_Force_Leaf_LinkMaterial"></a> LinkMaterial

Gets or sets the material.

```csharp
public Linker<IMaterial> LinkMaterial { get; set; }
```

#### Property Value

 Linker<IMaterial\>

### <a id="VM_Models_Pre_Force_Leaf_Material"></a> Material

Gets or sets the material.

```csharp
public IMaterial Material { get; set; }
```

#### Property Value

 IMaterial

### <a id="VM_Models_Pre_Force_Leaf_MaterialName"></a> MaterialName

Gets the material name.

```csharp
public string MaterialName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_Leaf_OffsetZ"></a> OffsetZ

Gets or sets the offset Z.

```csharp
public ExpressionValueVariable OffsetZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Leaf_Profiles"></a> Profiles

Gets or sets the profiles.

```csharp
public LeafSpringProfile[] Profiles { get; set; }
```

#### Property Value

 [LeafSpringProfile](VM.Models.Pre.Force.LeafSpringProfile.md)\[\]

### <a id="VM_Models_Pre_Force_Leaf_RearContactPointCount"></a> RearContactPointCount

Gets or sets the rear contact point count.

```csharp
public int RearContactPointCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Force_Leaf_RearElementCount"></a> RearElementCount

Gets or sets the rear element count.

```csharp
public int RearElementCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Force_Leaf_RearLength"></a> RearLength

Gets or sets the rear length.

```csharp
public double RearLength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_Force_Leaf_Width"></a> Width

Gets or sets the width.

```csharp
public ExpressionValueVariable Width { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Models_Pre_Force_Leaf_GetLeafInfo"></a> GetLeafInfo\(\)

Convert to <xref href="VM.Models.Pre.Force.LeafInfo" data-throw-if-not-resolved="false"></xref> from current <xref href="VM.Models.Pre.Force.Leaf" data-throw-if-not-resolved="false"></xref>.

```csharp
public LeafInfo GetLeafInfo()
```

#### Returns

 LeafInfo

The LeafInfo instance.

### <a id="VM_Models_Pre_Force_Leaf_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Models_Pre_Force_Leaf_RaisePropertyChanged_System_String_"></a> RaisePropertyChanged\(string\)

```csharp
public override void RaisePropertyChanged(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

