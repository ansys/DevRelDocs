# SetPatch.WriteXml Method 
 

Converts an object into its XML representation.

**Namespace:**&nbsp;<a href="4185d9bf-f8be-353d-9677-02b24c2871aa">VM.Managed.DAFUL.FE</a><br />**Assembly:**&nbsp;VMFE (in VMFE.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public override void WriteXml(
	XmlWriter writer
)
```

**VB**<br />
``` VB
Public Overrides Sub WriteXml ( 
	writer As XmlWriter
)
```

**C++**<br />
``` C++
public:
virtual void WriteXml(
	XmlWriter^ writer
) override
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
<a href="e14ae047-7030-cfd0-7e0d-6b8eb8a91db5">SetPatch Class</a><br /><a href="4185d9bf-f8be-353d-9677-02b24c2871aa">VM.Managed.DAFUL.FE Namespace</a><br />