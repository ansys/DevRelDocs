# HeatFlow.GetModelNavigatorInformationImpl Method 
 

Gets the object information for model navigator [implementation].

**Namespace:**&nbsp;<a href="b54825a8-84ad-1a83-835b-546afd934ede">VM.Managed.DAFUL.Thermal</a><br />**Assembly:**&nbsp;VMDThermal (in VMDThermal.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected override bool GetModelNavigatorInformationImpl(
	XmlDocument xmlDom,
	XmlElement xmlEle,
	bool bHasChild
)
```

**VB**<br />
``` VB
Protected Overrides Function GetModelNavigatorInformationImpl ( 
	xmlDom As XmlDocument,
	xmlEle As XmlElement,
	bHasChild As Boolean
) As Boolean
```

**C++**<br />
``` C++
protected:
virtual bool GetModelNavigatorInformationImpl(
	XmlDocument^ xmlDom, 
	XmlElement^ xmlEle, 
	bool bHasChild
) override
```

**F#**<br />
``` F#
abstract GetModelNavigatorInformationImpl : 
        xmlDom : XmlDocument * 
        xmlEle : XmlElement * 
        bHasChild : bool -> bool 
override GetModelNavigatorInformationImpl : 
        xmlDom : XmlDocument * 
        xmlEle : XmlElement * 
        bHasChild : bool -> bool 
```


#### Parameters
&nbsp;<dl><dt>xmlDom</dt><dd>Type: System.Xml.XmlDocument<br />The XmlDocument for object.</dd><dt>xmlEle</dt><dd>Type: System.Xml.XmlElement<br />The XmlDocument for object.</dd><dt>bHasChild</dt><dd>Type: System.Boolean<br />if set to `true` [has child].</dd></dl>

#### Return Value
Type: Boolean<br />`true` if success; otherwise, `false`.

## See Also


#### Reference
<a href="38d2b656-1a8e-786b-4862-9a3ca096a2a1">HeatFlow Class</a><br /><a href="b54825a8-84ad-1a83-835b-546afd934ede">VM.Managed.DAFUL.Thermal Namespace</a><br />