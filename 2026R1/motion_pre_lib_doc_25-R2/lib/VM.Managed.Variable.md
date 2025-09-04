#  Class Variable

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the variable( Variable data ).
Getting the value(double type) through Value property.

```csharp
public class Variable : Expression, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IExpression, IVariable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[Expression](VM.Managed.Expression.md) ← 
[Variable](VM.Managed.Variable.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
IExpression, 
IVariable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider

#### Inherited Members

[Expression.g\_bSkipUpdate](VM.Managed.Expression.md\#VM\_Managed\_Expression\_g\_bSkipUpdate), 
[Expression.m\_pExpressionHandler](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_pExpressionHandler), 
[Expression.m\_strValue](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_strValue), 
[Expression.m\_dicReferenceObject](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_dicReferenceObject), 
[Expression.m\_lstReferenceObject](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_lstReferenceObject), 
[Expression.m\_linkCollectionReferenceObject](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_linkCollectionReferenceObject), 
[Expression.Initialize\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_Initialize), 
[Expression.UpdateByReferenceObject\(object, LinkEventArgs\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_UpdateByReferenceObject\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Expression.AddReferenceObject\(UIntPtr\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_AddReferenceObject\_System\_UIntPtr\_), 
[Expression.CheckReferenceObject\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_CheckReferenceObject), 
[Expression.SetDefaultString\(ref string\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_SetDefaultString\_System\_String\_\_), 
[Expression.ConvertToValue\(string\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_ConvertToValue\_System\_String\_), 
[Expression.ParseToValue\(char\*\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_ParseToValue\_System\_Char\_\_), 
[Expression.GetNumericValue\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_GetNumericValue), 
[Expression.OnDeserialization\(object\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_OnDeserialization\_System\_Object\_), 
[Expression.Uninitialize\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_Uninitialize), 
[Expression.String](VM.Managed.Expression.md\#VM\_Managed\_Expression\_String), 
[LinkContainer.SetModified\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetModified), 
[LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnAdded\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnRemoved\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.GetTargetListForUpdate\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetTargetListForUpdate), 
[LinkContainer.SkipUpdateObjectImpl\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SkipUpdateObjectImpl), 
[LinkContainer.Initialize\(Unit.ConvertFactor\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[LinkContainer.SetFlagWhenXMLFile\(string, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetFlagWhenXMLFile\_System\_String\_System\_Boolean\_), 
[LinkContainer.IsSerializableEvent\(Delegate\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsSerializableEvent\_System\_Delegate\_), 
[LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetSerializedData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkAddedToDocument\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRemovedFromDocument\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.OnLinkReserved\(ILink, object, EventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnLinkReserved\_VM\_Managed\_ILink\_System\_Object\_System\_EventArgs\_), 
[LinkContainer.CanBeDestroy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CanBeDestroy\_System\_Object\_), 
[LinkContainer.DisposeManagedResources\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_DisposeManagedResources), 
[LinkContainer.SetContainer\(IOwned, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[LinkContainer.OnChildUpdated\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnChildUpdated\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnContainerDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnContainerDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnDeserialization\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDeserialization\_System\_Object\_), 
[LinkContainer.Verify\(VerifiedResult\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Verify\_VM\_Managed\_VerifiedResult\_), 
[LinkContainer.GetCopy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetCopy\_System\_Object\_), 
[LinkContainer.Dispose\(bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Dispose\_System\_Boolean\_), 
[LinkContainer.ClearChildInfoBeforeDeserialize](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ClearChildInfoBeforeDeserialize), 
[LinkContainer.Container](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Container), 
[LinkContainer.Owner](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Owner), 
[LinkContainer.Document](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Document), 
[LinkContainer.ID](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ID), 
[LinkContainer.IsChildExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsChildExternable), 
[LinkContainer.IsExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsExternable), 
[LinkContainer.OnRemoved](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnRemoved), 
[LinkContainer.OnAdded](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnAdded), 
[LinkContainer.OnDestroy](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroy), 
[LinkContainer.OnDestroying](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroying), 
[LinkContainer.OnUpdate](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdate), 
[LinkContainer.OnUpdating](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdating), 
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

### <a id="VM_Managed_Variable__ctor_System_Double_System_Boolean_"></a> Variable\(double, bool\)

Initializes a new instance of the <xref href="VM.Managed.Variable" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Variable(double dValue, bool bRoundUp)
```

#### Parameters

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of Variable(double type).

`bRoundUp` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Determines whether is value without limiting the precision.

### <a id="VM_Managed_Variable__ctor_System_Double_"></a> Variable\(double\)

Initializes a new instance of the <xref href="VM.Managed.Variable" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Variable(double dValue)
```

#### Parameters

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of Variable(double type). This value will be rounded.

### <a id="VM_Managed_Variable__ctor_System_String_"></a> Variable\(string\)

Initializes a new instance of the <xref href="VM.Managed.Variable" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Variable(string strValue)
```

#### Parameters

`strValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value of Variable(string type).

### <a id="VM_Managed_Variable__ctor"></a> Variable\(\)

Initializes a new instance of the <xref href="VM.Managed.Variable" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Variable()
```

## Properties

### <a id="VM_Managed_Variable_DontUpdateByReferenceObject"></a> DontUpdateByReferenceObject

```csharp
public bool DontUpdateByReferenceObject { set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Variable_IsSimpleValue"></a> IsSimpleValue

Gets the simple value.

```csharp
public virtual bool IsSimpleValue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Variable_PreciseValue"></a> PreciseValue

Sets the value without limiting the precision.

```csharp
public double PreciseValue { set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_Variable_Value"></a> Value

Gets or sets the value

```csharp
public virtual double Value { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_Variable_Clone"></a> Clone\(\)

```csharp
public virtual object Clone()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Managed_Variable_ConvertToValue_System_String_"></a> ConvertToValue\(string\)

Convert to value.

```csharp
protected override bool ConvertToValue(string strValue)
```

#### Parameters

`strValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Variable_GetFullName"></a> GetFullName\(\)

```csharp
public virtual string GetFullName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Variable_GetNumericValue"></a> GetNumericValue\(\)

Get numeric value.

```csharp
protected override double GetNumericValue()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_Variable_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, 
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) 
from this method, and instead, if specifying a custom schema is required, 
apply the XmlSchemaProviderAttribute to the class.

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### <a id="VM_Managed_Variable_GetValue_System_String_"></a> GetValue\(string\)

```csharp
public static double GetValue(string strValue)
```

#### Parameters

`strValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_Variable_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
protected override void LinkRequestDestroying(object obNotifier, LinkEventArgs arg)
```

#### Parameters

`obNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The destroy event information.

### <a id="VM_Managed_Variable_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### <a id="VM_Managed_Variable_ParseToValue_System_Char__"></a> ParseToValue\(char\*\)

Parse to value.

```csharp
protected override void ParseToValue(char* wstrValue)
```

#### Parameters

`wstrValue` [char](https://learn.microsoft.com/dotnet/api/system.char)\*

The string.

### <a id="VM_Managed_Variable_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_Variable_SetDefaultString_System_String__"></a> SetDefaultString\(ref string\)

Set default string.

```csharp
protected override void SetDefaultString(ref string strValue)
```

#### Parameters

`strValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value holds default string.

### <a id="VM_Managed_Variable_SetExpression_System_String_"></a> SetExpression\(string\)

Sets the value.

```csharp
public virtual void SetExpression(string strValue)
```

#### Parameters

`strValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value.

### <a id="VM_Managed_Variable_UpdateByReferenceObject_System_Object_VM_Managed_LinkEventArgs_"></a> UpdateByReferenceObject\(object, LinkEventArgs\)

The update event occured from the reference object.

```csharp
public override void UpdateByReferenceObject(object obj, LinkEventArgs arg)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The reference object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### <a id="VM_Managed_Variable_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

## Operators

### <a id="VM_Managed_Variable_op_Implicit_VM_Managed_Variable__VM_Models_Pre_ExpressionValueVariable"></a> implicit operator ExpressionValueVariable\(Variable\)

Cast operator.

```csharp
public static implicit operator ExpressionValueVariable(Variable variable)
```

#### Parameters

`variable` [Variable](VM.Managed.Variable.md)

The Variable.

#### Returns

 ExpressionValueVariable

### <a id="VM_Managed_Variable_op_Implicit_VM_Models_Pre_ExpressionValueVariable__VM_Managed_Variable"></a> implicit operator Variable\(ExpressionValueVariable\)

Cast operator.

```csharp
public static implicit operator Variable(ExpressionValueVariable expressionValue)
```

#### Parameters

`expressionValue` ExpressionValueVariable

The ExpressionValue.

#### Returns

 [Variable](VM.Managed.Variable.md)

