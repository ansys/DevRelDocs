# LinkerFE(*T*).GetSchema Method 
 

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the XmlSchemaProviderAttribute to the class.

**Namespace:**&nbsp;<a href="4185d9bf-f8be-353d-9677-02b24c2871aa">VM.Managed.DAFUL.FE</a><br />**Assembly:**&nbsp;VMFE (in VMFE.dll) Version: 24.1.23299.31577

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
Type: XmlSchema

#### Implements
IXmlSerializable.GetSchema()<br />

## See Also


#### Reference
<a href="537aad4c-d3a9-b55e-49bc-a7abc24912f3">LinkerFE(T) Structure</a><br /><a href="4185d9bf-f8be-353d-9677-02b24c2871aa">VM.Managed.DAFUL.FE Namespace</a><br />