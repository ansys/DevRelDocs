# PropertyGearSetCrossHelical Class
 

Property of cross helical gear set


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="0f03e2d9-3f38-2cc4-2948-f69c90eb4094">PropertyEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="0f03e2d9-3f38-2cc4-2948-f69c90eb4094">PropertyEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="ca5ca8f9-9e64-2928-b254-5da53733d0b0">VM.Managed.Property</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="9ae01eaa-e074-8246-5d57-25fc4f8af724">VM.Managed.DAFUL.GearTrain.PropertyGearSetBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.GearTrain.PropertyGearSetCrossHelical<br />
**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class PropertyGearSetCrossHelical : PropertyGearSetBase
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class PropertyGearSetCrossHelical
	Inherits PropertyGearSetBase
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class PropertyGearSetCrossHelical : public PropertyGearSetBase
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type PropertyGearSetCrossHelical =  
    class
        inherit PropertyGearSetBase
    end
```

The PropertyGearSetCrossHelical type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5720a613-eb9e-b8a2-b7a2-250dd5bf8b8c">PropertyGearSetCrossHelical</a></td><td>
Initializes a new instance of the PropertyGearSetCrossHelical class.</td></tr></table>&nbsp;
<a href="#propertygearsetcrosshelical-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="bef94050-c264-782d-d62f-779e760aa108">CrossAxisAngle</a></td><td>
Gets or sets the cross axis angle.</td></tr></table>&nbsp;
<a href="#propertygearsetcrosshelical-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="8212e419-ba7d-8b2e-afcb-dcad9bd17de7">PostBuildGear</a></td><td>
post builder gear.
 (Overrides <a href="1eb20b3b-67aa-cb5b-0dfd-83f19f86afa4">PropertyGearSetBase.PostBuildGear()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="1c5780d2-636d-8d35-d52e-29568b5bf74d">ReadResultCore</a></td><td>
Reads the result core.
 (Overrides <a href="d15e179a-6652-bc17-17cf-f76b8484efa1">PropertyGearSetBase.ReadResultCore(XmlDocument)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="aaa9807d-5882-8b93-284b-a98817488469">ReadResultWithKissSoftInterface</a></td><td>
Read result with KissSoft interface
 (Overrides <a href="d1bf603d-c72e-61e0-5208-f63580c4e945">PropertyGearSetBase.ReadResultWithKissSoftInterface(UInt32, UInt32, UInt32, Double, Double, Double[], Double, KissSoftInterface.GearData[])</a>.)</td></tr></table>&nbsp;
<a href="#propertygearsetcrosshelical-class">Back to Top</a>

## See Also


#### Reference
<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />