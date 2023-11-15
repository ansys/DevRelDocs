# Actuator(*TProperty*) Class
 

This base class is to represent to actuator.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="aeaf9d38-7c25-8cd9-c83a-920b7c91fda1">VM.Managed.EntityBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2ea4aac-7430-3c78-7c9d-956eda731718">VM.Managed.Entity</a>(*TProperty*)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Linear.Actuator(TProperty)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="148ea241-ea57-45b8-68bb-e1f966b02954">VM.Managed.DAFUL.Linear.ActuatorPSD</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="44c1d9fc-d91a-ea3a-f26d-e0137fd1cd5d">VM.Managed.DAFUL.Linear.ActuatorRotatingMass</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="4c0e0284-ee37-eb6c-3383-3e591d4d9410">VM.Managed.DAFUL.Linear.ActuatorSweptSine</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b178dc7b-a797-7b48-55d5-45a1d2059322">VM.Managed.DAFUL.Linear.ActuatorUser</a><br />
**Namespace:**&nbsp;<a href="8bb17b3f-227a-e03f-916a-5e670373e845">VM.Managed.DAFUL.Linear</a><br />**Assembly:**&nbsp;VMDLinear (in VMDLinear.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public abstract class Actuator<TProperty> : Entity<TProperty>
where TProperty : new(), PropertyActuator

```

**VB**<br />
``` VB
<SerializableAttribute>
Public MustInherit Class Actuator(Of TProperty As {New, PropertyActuator})
	Inherits Entity(Of TProperty)
```

**C++**<br />
``` C++
[SerializableAttribute]
generic<typename TProperty>
where TProperty : gcnew(), PropertyActuator
public ref class Actuator abstract : public Entity<TProperty>
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
[<SerializableAttribute>]
type Actuator<'TProperty when 'TProperty : new() and PropertyActuator> =  
    class
        inherit Entity<'TProperty>
    end
```


#### Type Parameters
&nbsp;<dl><dt>TProperty</dt><dd>The type of the property.</dd></dl>&nbsp;
The Actuator(TProperty) type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="a14a7442-7071-e100-3338-32df2d2f6ec7">Actuator(TProperty)()</a></td><td>
Initializes a new instance of the Actuator(TProperty) class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5a264a0c-6baa-57ba-9276-6b93ca0c00de">Actuator(TProperty)(String)</a></td><td>
Initializes a new instance of the Actuator(TProperty) class.</td></tr></table>&nbsp;
<a href="#actuator(*tproperty*)-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="143898ae-e6d6-673e-e2c4-4f3881fc6c40">HasLayerExplicitly</a></td><td>
Gets a value indicating whether object has a layer explicitly.
 (Overrides <a href="26164d8d-3d61-3776-a6ea-e0e483bc542f">EntityBase.HasLayerExplicitly</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="eaf40649-d653-aace-6bab-fee419a055b6">TypeOfActuator</a></td><td>
Gets the type of actuator.</td></tr></table>&nbsp;
<a href="#actuator(*tproperty*)-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="16b31765-8388-df02-60d7-63216fe71597">Initialize</a></td><td>
Initializes member through unit convert factor.</td></tr></table>&nbsp;
<a href="#actuator(*tproperty*)-class">Back to Top</a>

## See Also


#### Reference
<a href="8bb17b3f-227a-e03f-916a-5e670373e845">VM.Managed.DAFUL.Linear Namespace</a><br />