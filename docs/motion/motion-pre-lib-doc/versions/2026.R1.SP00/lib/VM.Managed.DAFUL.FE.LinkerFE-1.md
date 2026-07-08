# Struct LinkerFE<T\>
<a id="VM_Managed_DAFUL_FE_LinkerFE_1"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This interface is to represent fe linker.

```csharp
public struct LinkerFE<T>
```

#### Type Parameters

`T` 

## Constructors

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1__ctor__0_"></a> LinkerFE\(T\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.LinkerFE%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkerFE(T t)
```

#### Parameters

`t` T

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1__ctor_VM_Managed_ILink_"></a> LinkerFE\(ILink\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.LinkerFE%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkerFE(ILink link)
```

#### Parameters

`link` ILink

The link.

## Properties

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1_IsReference"></a> IsReference

Gets a value indicating whether linked object is the reference.

```csharp
public bool IsReference { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1_Key"></a> Key

Gets or sets the linked object's key.

```csharp
public UIntPtr Key { get; }
```

#### Property Value

 UIntPtr

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1_Object"></a> Object

Gets or sets the linked object.

```csharp
public T Object { get; set; }
```

#### Property Value

 T

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1_Prototype"></a> Prototype

Gets the linked object's prototype.

```csharp
public T Prototype { get; }
```

#### Property Value

 T

## Methods

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface,
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic)
from this method, and instead, if specifying a custom schema is required,
apply the XmlSchemaProviderAttribute to the class.

```csharp
public XmlSchema GetSchema()
```

#### Returns

 XmlSchema

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The XmlWriter stream to which the object is serialized.

## Operators

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1_op_Implicit__0__VM_Managed_DAFUL_FE_LinkerFE__0_"></a> implicit operator LinkerFE<T\>\(T\)

```csharp
public static implicit operator LinkerFE<T>(T t)
```

#### Parameters

`t` T

#### Returns

 [LinkerFE](VM.Managed.DAFUL.FE.LinkerFE\-1.md)<T\>

### <a id="VM_Managed_DAFUL_FE_LinkerFE_1_op_Implicit_VM_Managed_DAFUL_FE_LinkerFE__0____0"></a> implicit operator T\(LinkerFE<T\>\)

```csharp
public static implicit operator T(LinkerFE<T> linker)
```

#### Parameters

`linker` [LinkerFE](VM.Managed.DAFUL.FE.LinkerFE\-1.md)<T\>

#### Returns

 T

