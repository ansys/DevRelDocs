# ArgumentString.GetSchema Method 
 

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the XmlSchemaProviderAttribute to the class.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDSB (in VMDSB.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public XmlSchema GetSchema()
```

**VB**<br />
``` VB
Public Function GetSchema As XmlSchema
```

**C++**<br />
``` C++
public:
virtual XmlSchema^ GetSchema() sealed
```

**F#**<br />
``` F#
abstract GetSchema : unit -> XmlSchema 
override GetSchema : unit -> XmlSchema 
```


#### Return Value
Type: XmlSchema<br />An XmlSchema that describes the XML representation of the object that is produced by the WriteXml(XmlWriter) method and consumed by the ReadXml(XmlReader) method.

#### Implements
IXmlSerializable.GetSchema()<br />

## See Also


#### Reference
<a href="f0b162ac-05c7-8b72-ad42-46e79cdbb19d">ArgumentString Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />