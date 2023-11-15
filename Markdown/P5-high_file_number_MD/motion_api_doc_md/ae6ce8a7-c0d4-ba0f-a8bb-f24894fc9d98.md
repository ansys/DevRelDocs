# PropertyGearSetPlanetaryDP Class
 

Property of double-pinion planetary gear set


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="0f03e2d9-3f38-2cc4-2948-f69c90eb4094">PropertyEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="0f03e2d9-3f38-2cc4-2948-f69c90eb4094">PropertyEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="ca5ca8f9-9e64-2928-b254-5da53733d0b0">VM.Managed.Property</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="9ae01eaa-e074-8246-5d57-25fc4f8af724">VM.Managed.DAFUL.GearTrain.PropertyGearSetBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.GearTrain.PropertyGearSetPlanetaryDP<br />
**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class PropertyGearSetPlanetaryDP : PropertyGearSetBase
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class PropertyGearSetPlanetaryDP
	Inherits PropertyGearSetBase
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class PropertyGearSetPlanetaryDP : public PropertyGearSetBase
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type PropertyGearSetPlanetaryDP =  
    class
        inherit PropertyGearSetBase
    end
```

The PropertyGearSetPlanetaryDP type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="982e22cb-55cd-027c-33ac-80d2b59594e9">PropertyGearSetPlanetaryDP</a></td><td>
Initializes a new instance of the PropertyGearSetPlanetaryDP class.</td></tr></table>&nbsp;
<a href="#propertygearsetplanetarydp-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="299edec7-feee-99e2-956d-f36d0f99872b">Input</a></td><td>
Gets or sets the input type of the contact analysis. Use SetInput() when this instance sets for undo/redo</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="0ae82ad8-afaf-6447-69af-54208b324795">InputTypeOfDogLegDirection</a></td><td>
Gets or sets the type of dog leg direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="b44039a2-6c44-2630-3689-df4dc1ecf7e5">NumberOfPinion</a></td><td>
Gets or sets the number of pinion. Use SetNumberOfPinion() when this instance sets for undo/redo</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="9c8bf095-ea12-f2e0-e037-5fa35141e9ee">Output</a></td><td>
Gets or sets the output type of the contact analysis. Use SetOutput() when this instance sets for undo/redo</td></tr></table>&nbsp;
<a href="#propertygearsetplanetarydp-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="96823f8a-a802-8afa-f94d-c37fedd1c749">GetGRFAndTRFOrientation</a></td><td>
Get GRF and TRF orientation</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5fb40765-53ed-86e2-a273-c55b853108ea">GetSelectedGearInfo</a></td><td>
Gets the selected gear Information
 (Overrides <a href="fbfd3d17-6027-a7d5-f1a5-44dbcd5b28d2">PropertyGearSetBase.GetSelectedGearInfo(String, GearGeometryInfo[])</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="d8efcf0d-b646-4279-8f37-1bacb2fa2dd1">PostBuildGear</a></td><td>
post builder gear.
 (Overrides <a href="1eb20b3b-67aa-cb5b-0dfd-83f19f86afa4">PropertyGearSetBase.PostBuildGear()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="8ff4d6cd-b63f-92d2-b4c6-7772a469d57c">ReadResultCore</a></td><td>
Reads the result core.
 (Overrides <a href="d15e179a-6652-bc17-17cf-f76b8484efa1">PropertyGearSetBase.ReadResultCore(XmlDocument)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="757002ed-0809-3b85-8a16-cccffe5a59c5">SetInput</a></td><td>
Set input.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="a4c3de92-5075-ca4c-9613-6b4443f002fe">SetNumberOfPinion</a></td><td>
Set number of pinion.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f6877fa4-a661-9ac4-23de-ac856f145ccb">SetOutput</a></td><td>
Set output.</td></tr></table>&nbsp;
<a href="#propertygearsetplanetarydp-class">Back to Top</a>

## See Also


#### Reference
<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />