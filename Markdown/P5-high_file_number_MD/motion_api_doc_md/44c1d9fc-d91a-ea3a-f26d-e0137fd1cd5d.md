# ActuatorRotatingMass Class
 

This class is to represent to property of rotating mass actuator.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="aeaf9d38-7c25-8cd9-c83a-920b7c91fda1">VM.Managed.EntityBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2ea4aac-7430-3c78-7c9d-956eda731718">VM.Managed.Entity</a>(<a href="2b835f79-a6c6-7730-a415-f720886ee892">PropertyActuatorRotatingMass</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="d3ac7d8c-cfd0-e02d-4a1a-0c36dfda70e4">VM.Managed.DAFUL.Linear.Actuator</a>(<a href="2b835f79-a6c6-7730-a415-f720886ee892">PropertyActuatorRotatingMass</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Linear.ActuatorRotatingMass<br />
**Namespace:**&nbsp;<a href="8bb17b3f-227a-e03f-916a-5e670373e845">VM.Managed.DAFUL.Linear</a><br />**Assembly:**&nbsp;VMDLinear (in VMDLinear.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class ActuatorRotatingMass : Actuator<PropertyActuatorRotatingMass>
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class ActuatorRotatingMass
	Inherits Actuator(Of PropertyActuatorRotatingMass)
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class ActuatorRotatingMass : public Actuator<PropertyActuatorRotatingMass^>
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type ActuatorRotatingMass =  
    class
        inherit Actuator<PropertyActuatorRotatingMass>
    end
```

The ActuatorRotatingMass type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d7feb91c-d2c1-2880-bb07-cef47e915bb9">ActuatorRotatingMass()</a></td><td>
Initializes a new instance of the ActuatorRotatingMass class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5b9b26c8-bc8c-a388-3b43-d4c99f82df62">ActuatorRotatingMass(String)</a></td><td>
Initializes a new instance of the ActuatorRotatingMass class.</td></tr></table>&nbsp;
<a href="#actuatorrotatingmass-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="62d9a4ff-4cf5-f7e7-39e1-66d7307319e0">TypeOfActuator</a></td><td>
Gets the type of actuator.
 (Overrides <a href="eaf40649-d653-aace-6bab-fee419a055b6">Actuator(TProperty).TypeOfActuator</a>.)</td></tr></table>&nbsp;
<a href="#actuatorrotatingmass-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="a29282a5-2802-7a75-6ee8-c31cd9548a7e">Initialize</a></td><td>
Initializes member through unit convert factor.
 (Overrides <a href="16b31765-8388-df02-60d7-63216fe71597">Actuator(TProperty).Initialize(ConvertFactor)</a>.)</td></tr></table>&nbsp;
<a href="#actuatorrotatingmass-class">Back to Top</a>

## See Also


#### Reference
<a href="8bb17b3f-227a-e03f-916a-5e670373e845">VM.Managed.DAFUL.Linear Namespace</a><br />