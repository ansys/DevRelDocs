# ConfigurationExtraCollection.GetSchema Method 
 

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the XmlSchemaProviderAttribute to the class.

**Namespace:**&nbsp;<a href="1c5a1fc2-0c5b-dd04-9702-e89ce745554d">VM.Managed.Simulation</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

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
<a href="48a1f335-adb0-ebc8-ebab-733cb7e39af4">ConfigurationExtraCollection Class</a><br /><a href="1c5a1fc2-0c5b-dd04-9702-e89ce745554d">VM.Managed.Simulation Namespace</a><br />