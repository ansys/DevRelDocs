# TopologyList(*T*).WriteXml Method 
 

Converts an object into its XML representation.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public void WriteXml(
	XmlWriter writer
)
```

**VB**<br />
``` VB
Public Sub WriteXml ( 
	writer As XmlWriter
)
```

**C++**<br />
``` C++
public:
virtual void WriteXml(
	XmlWriter^ writer
) sealed
```

**F#**<br />
``` F#
abstract WriteXml : 
        writer : XmlWriter -> unit 
override WriteXml : 
        writer : XmlWriter -> unit 
```


#### Parameters
&nbsp;<dl><dt>writer</dt><dd>Type: System.Xml.XmlWriter<br />The XmlWriter stream to which the object is serialized.</dd></dl>

#### Implements
IXmlSerializable.WriteXml(XmlWriter)<br />

## See Also


#### Reference
<a href="98d0b7fc-512f-d865-bd4d-b2e1093259b1">TopologyList(T) Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />