# AddedRacewayBuilderForRBEInFE Class
 

The added raceway builder for rbe in fe


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="bc9c2fe1-a752-bc29-651e-38f354ac77a9">VM.Managed.CAD.Builder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="7243749e-8f99-4473-cee9-c30191ef099d">VM.Managed.CAD.BuilderTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="01e4ecdc-b897-5c0b-d1a7-dbbd45ac5c24">VM.Managed.CAD.BuilderColorGeom</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="d6a5fed2-7a90-0f4d-8a72-edb84eb4cc50">VM.Managed.CAD.BuilderBoolean</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="64617ab7-5d0c-c406-56e0-2f8ce37b5b09">VM.Managed.CAD.BuilderMulti</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="dc353d47-1360-2640-88ff-1df057508392">VM.Managed.CAD.BuilderMultiSubtract</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="387545d6-c74e-cfe2-03d9-0b50649fe1ce">VM.Managed.CAD.BuilderMultiSubtractSimple</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="57efed20-98ff-db5b-5bc0-ac8aaa05529f">VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="0de306ac-9ee9-b0ea-a320-081066ee67b9">VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.GearTrain.CAD.AddedRacewayBuilderForRBEInFE<br />
**Namespace:**&nbsp;<a href="d9db19a5-2df6-b933-3d4e-2c38d80febf4">VM.Managed.DAFUL.GearTrain.CAD</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class AddedRacewayBuilderForRBEInFE : RacewayBuilderForRBEInFE, 
	IAddedBuilderForBearing, IAddedBuilder
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class AddedRacewayBuilderForRBEInFE
	Inherits RacewayBuilderForRBEInFE
	Implements IAddedBuilderForBearing, IAddedBuilder
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class AddedRacewayBuilderForRBEInFE : public RacewayBuilderForRBEInFE, 
	IAddedBuilderForBearing, IAddedBuilder
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type AddedRacewayBuilderForRBEInFE =  
    class
        inherit RacewayBuilderForRBEInFE
        interface IAddedBuilderForBearing
        interface IAddedBuilder
    end
```

The AddedRacewayBuilderForRBEInFE type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="eee2fa43-617c-ecef-4d1c-be45a786074c">AddedRacewayBuilderForRBEInFE()</a></td><td>
Initializes a new instance of the AddedRacewayBuilderForRBEInFE class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="6aadcd18-476a-6dba-19fa-8797d2cb036c">AddedRacewayBuilderForRBEInFE(RacewayGeometryForRBEInFE)</a></td><td>
Initializes a new instance of the AddedRacewayBuilderForRBEInFE class.</td></tr></table>&nbsp;
<a href="#addedracewaybuilderforrbeinfe-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="535dd17b-ca97-4b6f-a0a4-3256b115df42">GetTransform</a></td><td>
Gets the transform the added raceway in FE designer.
 (Overrides <a href="7c8c757f-0611-406b-270d-900e97b476ae">RacewayBuilderForRBEInFE.GetTransform()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="3a224928-f663-043e-9c7f-6feff3d91298">LinkRequestDestroying</a></td><td>
Links the request destroying.
 (Overrides <a href="a642739b-5214-735c-2708-1872d65483aa">RacewayBuilderForRBEInFE.LinkRequestDestroying(Object, LinkEventArgs)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9b4a957c-0ff5-6101-08da-7ca2a50a2980">UpdateGeometry</a></td><td>
Sets the shaft radius.
 (Overrides <a href="3cfdc36f-686f-6d20-077a-478eeba9f53f">RacewayBuilderForRBEInFE.UpdateGeometry()</a>.)</td></tr></table>&nbsp;
<a href="#addedracewaybuilderforrbeinfe-class">Back to Top</a>

## See Also


#### Reference
<a href="d9db19a5-2df6-b933-3d4e-2c38d80febf4">VM.Managed.DAFUL.GearTrain.CAD Namespace</a><br />