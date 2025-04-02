#  Struct Linker<T\>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the linker.

```csharp
public struct Linker<T>
```

#### Type Parameters

`T` 

## Constructors

### <a id="VM_Managed_Linker_1__ctor__0_"></a> Linker\(T\)

Initializes a new instance of the <xref href="VM.Managed.Linker%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Linker(T t)
```

#### Parameters

`t` T

### <a id="VM_Managed_Linker_1__ctor_VM_Managed_ITypedLink__0__"></a> Linker\(ITypedLink<T\>\)

```csharp
public Linker(ITypedLink<T> link)
```

#### Parameters

`link` [ITypedLink](VM.Managed.ITypedLink\-1.md)<T\>

## Properties

### <a id="VM_Managed_Linker_1_IsReference"></a> IsReference

Gets a value indicating whether linked object is the reference.

```csharp
public bool IsReference { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Linker_1_Key"></a> Key

Gets or sets the linked object's key.

```csharp
public UIntPtr Key { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_Managed_Linker_1_Object"></a> Object

Gets or sets the linked object.

```csharp
public T Object { get; set; }
```

#### Property Value

 T

### <a id="VM_Managed_Linker_1_Prototype"></a> Prototype

Gets the linked object's prototype.

```csharp
public T Prototype { get; }
```

#### Property Value

 T

## Methods

### <a id="VM_Managed_Linker_1_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface,
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic)
from this method, and instead, if specifying a custom schema is required,
apply the XmlSchemaProviderAttribute to the class.

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### <a id="VM_Managed_Linker_1_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_Linker_1_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

## Operators

### <a id="VM_Managed_Linker_1_op_Implicit__0__VM_Managed_Linker__0_"></a> implicit operator Linker<T\>\(T\)

```csharp
public static implicit operator Linker<T>(T t)
```

#### Parameters

`t` T

#### Returns

 [Linker](VM.Managed.Linker\-1.md)<T\>

### <a id="VM_Managed_Linker_1_op_Implicit_VM_Managed_Linker__0____0"></a> implicit operator T\(Linker<T\>\)

```csharp
public static implicit operator T(Linker<T> linker)
```

#### Parameters

`linker` [Linker](VM.Managed.Linker\-1.md)<T\>

#### Returns

 T

