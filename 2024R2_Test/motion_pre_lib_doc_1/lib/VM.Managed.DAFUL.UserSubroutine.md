# Class UserSubroutine

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSP.dll  

This class is to represent the user subroutine.

```csharp
public class UserSubroutine : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IInterface, ITemplateObject, IArgument, IRepairable, IHasReportOnly, IReferencable, IReportable, IHasResult, IDuplicate
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[UserSubroutine](VM.Managed.DAFUL.UserSubroutine.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
ISubEntity, 
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
IHasComment, 
INamed, 
INavigatorItem, 
IInterface, 
ITemplateObject, 
IArgument, 
IRepairable, 
IHasReportOnly, 
IReferencable, 
IReportable, 
[IHasResult](VM.Managed.DAFUL.IHasResult.md), 
IDuplicate

#### Inherited Members

SubEntity.Initialize\(Unit.ConvertFactor\), 
SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SubEntity.FixUp\(ObjectBase\), 
SubEntity.WriteTemplateImpl\(XmlWriter\), 
SubEntity.ReadTemplateImpl\(XmlReader\), 
SubEntity.Name, 
SubEntity.FullName, 
SubEntity.NonSymmetricName, 
SubEntity.DisplayName, 
SubEntity.IsEnabled, 
SubEntity.Comment, 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
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

### UserSubroutine\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UserSubroutine()
```

### UserSubroutine\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UserSubroutine(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the user subroutine.

## Fields

### DefaultResultName

A default name of Result.

```csharp
public const string DefaultResultName = "parameter#"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### ArgumentList

Gets or sets the argument list.

```csharp
public ArgumentListGeneral ArgumentList { get; set; }
```

#### Property Value

 ArgumentListGeneral

### ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### CommentOfArgument

Gets or sets the comment of argument.

```csharp
public string[] CommentOfArgument { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### DllName

Gets or sets the name of the DLL.

```csharp
public string DllName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Expression

Gets or sets the expression.

```csharp
public string Expression { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FunctionName

Gets or sets the name of the function.

```csharp
public string FunctionName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsInterface

Gets or sets a value indicating whether this instance is interface.

```csharp
public bool IsInterface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReportOnly

Gets or sets a value indicating whether this instance is report only.

```csharp
public bool IsReportOnly { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumOfReturnValue

Gets or sets the number of return value.

```csharp
public int NumOfReturnValue { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ReferenceType

Gets the type of the array for argument.

```csharp
public string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ResultName

Gets or sets the name of the result.

```csharp
[Obsolete]
public string[] ResultName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### Results

Gets or sets the result.

```csharp
public UserSubroutine.Result[] Results { get; set; }
```

#### Property Value

 [UserSubroutine](VM.Managed.DAFUL.UserSubroutine.md).[Result](VM.Managed.DAFUL.UserSubroutine.Result.md)\[\]

### UserDefinedDisplaySet

Gets or sets the user defined display.

```csharp
public UserSubroutine.UserDefinedDisplay[] UserDefinedDisplaySet { get; set; }
```

#### Property Value

 [UserSubroutine](VM.Managed.DAFUL.UserSubroutine.md).[UserDefinedDisplay](VM.Managed.DAFUL.UserSubroutine.UserDefinedDisplay.md)\[\]

## Methods

### AddResult\(Result\)

Add Result information.

```csharp
public void AddResult(UserSubroutine.Result result)
```

#### Parameters

`result` [UserSubroutine](VM.Managed.DAFUL.UserSubroutine.md).[Result](VM.Managed.DAFUL.UserSubroutine.Result.md)

The result.

### AddResult\(\)

Add result information.

```csharp
public void AddResult()
```

### ContainsReservedArgument\(\)

Determines whether [contains] [the reserved arg].

```csharp
public bool ContainsReservedArgument()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [contains] [the reserved arg]; otherwise, <code>false</code>.

### GetDefaultResultName\(\)

Get default result name.

```csharp
public string GetDefaultResultName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IndexOfResult\(Result\)

Gets the index of result

```csharp
public int IndexOfResult(UserSubroutine.Result result)
```

#### Parameters

`result` [UserSubroutine](VM.Managed.DAFUL.UserSubroutine.md).[Result](VM.Managed.DAFUL.UserSubroutine.Result.md)

The result

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### IsContainResultName\(string\)

Is contain result name.

```csharp
public bool IsContainResultName(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ModifyArgumentListWithExpression\(string\)

Modify argumentList with expression

```csharp
public void ModifyArgumentListWithExpression(string strExpression)
```

#### Parameters

`strExpression` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ModifyResultsCount\(int\)

Modify Result information.

```csharp
public void ModifyResultsCount(int resultsCount)
```

#### Parameters

`resultsCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The result count.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.


