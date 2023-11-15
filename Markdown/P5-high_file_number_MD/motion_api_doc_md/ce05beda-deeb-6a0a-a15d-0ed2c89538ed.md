# NamedObjectDictionary(*T*).WriteXml Method 
 

Converts an object into its XML representation.

**Namespace:**&nbsp;<a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections</a><br />**Assembly:**&nbsp;VMObjBase (in VMObjBase.dll) Version: 24.1.0.0

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
<a href="6dd3b861-7487-0764-03f5-2be635eae096">NamedObjectDictionary(T) Class</a><br /><a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections Namespace</a><br />