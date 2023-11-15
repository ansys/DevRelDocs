# AnalysisBrakingInTurn Class
 

The braking-in-turn analysis class


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;<a href="a2c8dedc-8906-af2c-604b-ccf613ec8fb7">VM.Managed.DAFUL.Car.AnalysisBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="de86b471-c3e7-15aa-f2ad-3e939e45c0cb">VM.Managed.DAFUL.Car.FullCarAnalysisBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="a29cc894-aacb-2a3a-4976-60c802251b86">VM.Managed.DAFUL.Car.CorneringBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Car.AnalysisBrakingInTurn<br />
**Namespace:**&nbsp;<a href="08e6b2d8-bba2-0a01-1fdc-133a5d5f82b4">VM.Managed.DAFUL.Car</a><br />**Assembly:**&nbsp;VMDCar (in VMDCar.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class AnalysisBrakingInTurn : CorneringBase, 
	IHasLengthUnitType
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class AnalysisBrakingInTurn
	Inherits CorneringBase
	Implements IHasLengthUnitType
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class AnalysisBrakingInTurn : public CorneringBase, 
	IHasLengthUnitType
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type AnalysisBrakingInTurn =  
    class
        inherit CorneringBase
        interface IHasLengthUnitType
    end
```

The AnalysisBrakingInTurn type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="fbc22618-4a55-ac99-550e-deaeb1a123b2">AnalysisBrakingInTurn()</a></td><td>
Initializes a new instance of the AnalysisBrakingInTurn class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="30fba26b-e16b-246f-bca1-680ea71ff99f">AnalysisBrakingInTurn(ILinkContainer)</a></td><td>
Initializes a new instance of the AnalysisBrakingInTurn class.</td></tr></table>&nbsp;
<a href="#analysisbrakinginturn-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="11bbbaa3-2835-ca9f-03b6-aa7b9dbf2525">BrakeDeceler</a></td><td>
Gets or sets the brake deceleration.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="1c872531-3120-d650-b77c-d77494c906f7">InitialVelocityCornering</a></td><td>
Gets or sets the initial velocity.
 (Overrides <a href="77ef8169-e969-5e5e-97a1-e66bfc217e23">CorneringBase.InitialVelocityCornering</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="0bb09d87-4103-86c9-fc49-13f175e43658">LateralAcc</a></td><td>
Gets or sets the lateral acceleration.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="96eef157-7dd7-0d1c-84b6-9b096c5a55d0">MaxBrakeDuration</a></td><td>
Gets or sets the maximum duration of the brake.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="f8204df2-4baa-4ef9-e314-3c2304251b70">SteeringInputType</a></td><td>
Gets or sets the steering input.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="d37fbc48-1a10-d546-b74a-452c20f3877a">TireRadiusPosition</a></td><td>
Gets the tire radius position.
 (Overrides <a href="02c9d109-06e6-33c5-323c-092445dcd96f">FullCarAnalysisBase.TireRadiusPosition</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="067b6a38-68c0-c46b-d843-0896e3e8bb92">TurnRadius</a></td><td>
Gets or sets the turn radius.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="e9ae7ad9-fd16-3bbc-bc9a-6a105df86728">UnitOfLength</a></td><td>
Gets or sets the length unit.</td></tr></table>&nbsp;
<a href="#analysisbrakinginturn-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c7231ebb-7581-11ff-25ef-c3f149406beb">GetTestRigMotionUSUBArgument</a></td><td>
Gets the test-rig motion USUB argument.
 (Overrides <a href="20c085a2-564e-e940-5223-f36528cf248f">CorneringBase.GetTestRigMotionUSUBArgument(String[])</a>.)</td></tr></table>&nbsp;
<a href="#analysisbrakinginturn-class">Back to Top</a>

## See Also


#### Reference
<a href="08e6b2d8-bba2-0a01-1fdc-133a5d5f82b4">VM.Managed.DAFUL.Car Namespace</a><br />