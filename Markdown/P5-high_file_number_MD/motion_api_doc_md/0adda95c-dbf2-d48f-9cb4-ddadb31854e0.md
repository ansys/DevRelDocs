# PropertyTSpringDamper Class
 

This class is to represent the spring damper force properties.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="0f03e2d9-3f38-2cc4-2948-f69c90eb4094">PropertyEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="0f03e2d9-3f38-2cc4-2948-f69c90eb4094">PropertyEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="ca5ca8f9-9e64-2928-b254-5da53733d0b0">VM.Managed.Property</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="eed41709-f08a-290f-c660-afc501b94861">VM.Managed.DAFUL.Force.PropertyForce</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Force.PropertyTSpringDamper<br />
**Namespace:**&nbsp;<a href="dffdd925-1fae-3344-2d62-28ef99dd387b">VM.Managed.DAFUL.Force</a><br />**Assembly:**&nbsp;VMDFB (in VMDFB.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class PropertyTSpringDamper : PropertyForce
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class PropertyTSpringDamper
	Inherits PropertyForce
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class PropertyTSpringDamper : public PropertyForce
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type PropertyTSpringDamper =  
    class
        inherit PropertyForce
    end
```

The PropertyTSpringDamper type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="27171b48-dfd6-c5e5-274b-50d6eba7baa9">PropertyTSpringDamper</a></td><td>
Initializes a new instance of the PropertyTSpringDamper class.</td></tr></table>&nbsp;
<a href="#propertytspringdamper-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="e41732f8-d84c-2d57-6fbe-cbc6535d8284">ArgumentType</a></td><td> (Overrides <a href="de5812fd-cc13-bcdc-2f05-9c0efad7576f">PropertyForce.ArgumentType</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="0dec40c6-fbf9-4d95-c308-c806afea2a68">DampingCoef</a></td><td>
Gets or sets the damping coefficient.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="4f4fe401-8703-0f27-13de-82289429c9d1">DampingSpline</a></td><td>
Gets or sets the damping spline.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="e5c6e8c5-8c97-64f5-0c14-02a9f857b08d">DampingType</a></td><td>
Gets the input type of the damping.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="ba2c557a-47ff-1c3d-2171-098995bd3efe">IsUseSynchro</a></td><td>
Gets or sets a value indicating whether this instance use synchronize.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="c00a33dd-e975-715e-870a-df55ea6a6f7e">PreLoad</a></td><td>
Gets or sets the pre load.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="a8263776-184a-54ee-6bf2-15abf3adc376">ReferenceType</a></td><td> (Overrides <a href="a8a667b3-1ba5-28fe-a4c6-34fc2b0f3ba2">PropertyForce.ReferenceType</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="348a752d-9393-3905-7c2d-65ff3f733e2a">SpringCoef</a></td><td>
Gets or sets the spring stiffness coefficient.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="df3f924e-c778-2e0f-0232-ca0c576d19f2">SpringSpline</a></td><td>
Gets or sets the spring stiffness spline.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="8edae4cd-efe7-c31a-07ee-a513c521b083">SpringType</a></td><td>
Gets the input type of the spring stiffness.</td></tr></table>&nbsp;
<a href="#propertytspringdamper-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="dd18b769-46ce-33df-ab45-3d0f8c88dcc8">Initialize</a></td><td>
Initializes member through unit convert factor.</td></tr></table>&nbsp;
<a href="#propertytspringdamper-class">Back to Top</a>

## See Also


#### Reference
<a href="dffdd925-1fae-3344-2d62-28ef99dd387b">VM.Managed.DAFUL.Force Namespace</a><br />