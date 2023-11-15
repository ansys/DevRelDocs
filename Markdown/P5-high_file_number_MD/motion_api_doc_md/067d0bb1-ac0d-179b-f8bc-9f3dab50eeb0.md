# PulleyStiffness Class
 

This class is to represent the attribute for pulley stiffness.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="04ffb150-96bb-10f6-e607-f71d62a829da">VM.Managed.DAFUL.CPlacingConnector.ComponentStiffness</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.CPlacingConnector.PulleyStiffness<br />
**Namespace:**&nbsp;<a href="ae993523-95c7-eee5-198a-46a262d2769a">VM.Managed.DAFUL.CPlacingConnector</a><br />**Assembly:**&nbsp;VMDCPlacingConnector (in VMDCPlacingConnector.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class PulleyStiffness : ComponentStiffness
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class PulleyStiffness
	Inherits ComponentStiffness
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class PulleyStiffness : public ComponentStiffness
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type PulleyStiffness =  
    class
        inherit ComponentStiffness
    end
```

The PulleyStiffness type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d63cf617-6fa1-6f96-51f9-dc17f6dcd1f0">PulleyStiffness()</a></td><td>
Initializes a new instance of the PulleyStiffness class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="aa52a6d6-7d37-1f05-d7a9-1d97931404b0">PulleyStiffness(String)</a></td><td>
Initializes a new instance of the PulleyStiffness class. The name.</td></tr></table>&nbsp;
<a href="#pulleystiffness-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="aee9e6c0-3277-d476-14e7-f4efc18e5a18">RadialDeformationRatio</a></td><td>
Gets or sets the radial deformation ratio.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="09dc427f-35c7-70d5-a498-7a90aec484f2">Stiffness</a></td><td>
Gets or sets the stiffness.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="278dac63-dbdb-5765-3ecd-e5d36d99eb6a">TangentialDeformationRatio</a></td><td>
Gets or sets the tangential deformation ratio.</td></tr></table>&nbsp;
<a href="#pulleystiffness-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="10d39169-c6c6-d68d-40d8-30634ff54498">GetPulley</a></td><td>
Gets pulley</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c7c2aae4-78c2-8780-88a2-ff88d6ecb281">Initialize</a></td><td>
Initializes the specified factor.
 (Overrides <a href="4e64b5af-f37f-f8ae-85c2-a945358c3c42">ComponentStiffness.Initialize(ConvertFactor)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="09b4ac9d-f32e-19f2-be8e-95a9043a6299">TangentialStiffnessText</a></td><td>
Gets the tangential stiffness text</td></tr></table>&nbsp;
<a href="#pulleystiffness-class">Back to Top</a>

## See Also


#### Reference
<a href="ae993523-95c7-eee5-198a-46a262d2769a">VM.Managed.DAFUL.CPlacingConnector Namespace</a><br />