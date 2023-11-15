# BuilderTireSimple.ReadXml Method 
 

Generates an object from its XML representation.

**Namespace:**&nbsp;<a href="3b337ec7-5327-91f4-4100-cfcb1b2c2aaa">VM.Managed.CAD.Tire</a><br />**Assembly:**&nbsp;VMDTire (in VMDTire.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public override void ReadXml(
	XmlReader reader
)
```

**VB**<br />
``` VB
Public Overrides Sub ReadXml ( 
	reader As XmlReader
)
```

**C++**<br />
``` C++
public:
virtual void ReadXml(
	XmlReader^ reader
) override
```

**F#**<br />
``` F#
abstract ReadXml : 
        reader : XmlReader -> unit 
override ReadXml : 
        reader : XmlReader -> unit 
```


#### Parameters
&nbsp;<dl><dt>reader</dt><dd>Type: System.Xml.XmlReader<br />The XmlReader stream from which the object is deserialized.</dd></dl>

#### Implements
IXmlSerializable.ReadXml(XmlReader)<br />

## See Also


#### Reference
<a href="fe68166d-6194-71ae-3ca2-a70b37f4dcc4">BuilderTireSimple Class</a><br /><a href="3b337ec7-5327-91f4-4100-cfcb1b2c2aaa">VM.Managed.CAD.Tire Namespace</a><br />