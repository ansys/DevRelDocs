# SplineFile.ReadXml Method 
 

Generates an object from its XML representation.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDSB (in VMDSB.dll) Version: 24.1.0.0

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
<a href="df51da34-3420-5fad-a3b6-df271a39b4c8">SplineFile Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />