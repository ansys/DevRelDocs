# TopologyColorInfo.GetSchema Method 
 

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the XmlSchemaProviderAttribute to the class.

**Namespace:**&nbsp;<a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public virtual XmlSchema GetSchema()
```

**VB**<br />
``` VB
Public Overridable Function GetSchema As XmlSchema
```

**C++**<br />
``` C++
public:
virtual XmlSchema^ GetSchema()
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
<a href="7dabda58-56e8-55a3-171d-51324235e2fe">TopologyColorInfo Class</a><br /><a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD Namespace</a><br />