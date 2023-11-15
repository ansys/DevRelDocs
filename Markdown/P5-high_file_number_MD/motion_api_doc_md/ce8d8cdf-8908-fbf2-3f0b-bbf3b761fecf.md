# Variable.WriteXml Method 
 

Converts an object into its XML representation.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public virtual void WriteXml(
	XmlWriter writer
)
```

**VB**<br />
``` VB
Public Overridable Sub WriteXml ( 
	writer As XmlWriter
)
```

**C++**<br />
``` C++
public:
virtual void WriteXml(
	XmlWriter^ writer
)
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
<a href="59e4bf1e-caf6-a97f-eb24-a86f32f38d65">Variable Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />