# PointOnNode.ReadXml Method 
 

Generates an object from its XML representation.

**Namespace:**&nbsp;<a href="4185d9bf-f8be-353d-9677-02b24c2871aa">VM.Managed.DAFUL.FE</a><br />**Assembly:**&nbsp;VMFE (in VMFE.dll) Version: 24.1.23299.31577

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
<a href="19df983f-1f0b-0f58-8a26-244e77bdc4bf">PointOnNode Class</a><br /><a href="4185d9bf-f8be-353d-9677-02b24c2871aa">VM.Managed.DAFUL.FE Namespace</a><br />