#  Class FrictionRevolute

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class represents the friction revolute

```csharp
public class FrictionRevolute : Friction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Friction](VM.API.Pre.Friction.md) ← 
[FrictionRevolute](VM.API.Pre.FrictionRevolute.md)

#### Derived

[FrictionBall](VM.API.Pre.FrictionBall.md)

#### Inherited Members

[Friction.FrictionCoefficient](VM.API.Pre.Friction.md\#VM\_API\_Pre\_Friction\_FrictionCoefficient), 
[Friction.StaticFrictionCoefficient](VM.API.Pre.Friction.md\#VM\_API\_Pre\_Friction\_StaticFrictionCoefficient), 
[Friction.DynamicsThreshold](VM.API.Pre.Friction.md\#VM\_API\_Pre\_Friction\_DynamicsThreshold), 
[Friction.StictionVelocity](VM.API.Pre.Friction.md\#VM\_API\_Pre\_Friction\_StictionVelocity), 
[Friction.MaxStictionDeformation](VM.API.Pre.Friction.md\#VM\_API\_Pre\_Friction\_MaxStictionDeformation), 
[Friction.FrictionEffect](VM.API.Pre.Friction.md\#VM\_API\_Pre\_Friction\_FrictionEffect), 
[Friction.ReactionForce](VM.API.Pre.Friction.md\#VM\_API\_Pre\_Friction\_ReactionForce), 
[Friction.BendingMoment](VM.API.Pre.Friction.md\#VM\_API\_Pre\_Friction\_BendingMoment)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_API_Pre_FrictionRevolute__ctor"></a> FrictionRevolute\(\)

Default constructor

```csharp
public FrictionRevolute()
```

### <a id="VM_API_Pre_FrictionRevolute__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Managed_DAFUL_Constraints_Friction_EffectType_System_Boolean_System_Boolean_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> FrictionRevolute\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, EffectType, bool, bool, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Initializes a new instance of the <xref href="VM.API.Pre.FrictionRevolute" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FrictionRevolute(ExpressionValueVariable frictionCoefficient, ExpressionValueVariable staticFrictionCoefficient, ExpressionValueVariable dynamicsThreshold, ExpressionValueVariable stictionVelocity, ExpressionValueVariable maxStictionDeformation, Friction.EffectType frictionEffect, bool reactionForce, bool bendingMoment, ExpressionValueVariable frictionArm, ExpressionValueVariable bendingReactionArm, ExpressionValueVariable pinRadius, ExpressionValueVariable preTorque)
```

#### Parameters

`frictionCoefficient` ExpressionValueVariable

The friction coefficient.

`staticFrictionCoefficient` ExpressionValueVariable

The static friction coefficient.

`dynamicsThreshold` ExpressionValueVariable

The dynamics threshold.

`stictionVelocity` ExpressionValueVariable

The stiction velocity.

`maxStictionDeformation` ExpressionValueVariable

The max stiction deformation.

`frictionEffect` Friction.EffectType

The friction effect.

`reactionForce` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The reaction force.

`bendingMoment` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The bending moment.

`frictionArm` ExpressionValueVariable

The friction arm.

`bendingReactionArm` ExpressionValueVariable

The bending reaction arm.

`pinRadius` ExpressionValueVariable

The pin Radius.

`preTorque` ExpressionValueVariable

The preTorque.

## Properties

### <a id="VM_API_Pre_FrictionRevolute_BendingReactionArm"></a> BendingReactionArm

The value for the bending reaction arm. The default value is 1.

```csharp
public ExpressionValueVariable BendingReactionArm { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FrictionRevolute_FrictionArm"></a> FrictionArm

The value for the friction arm. The default value is 1.

```csharp
public ExpressionValueVariable FrictionArm { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FrictionRevolute_PinRadius"></a> PinRadius

The value for the pin Radius. The default value is 1.

```csharp
public ExpressionValueVariable PinRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FrictionRevolute_PreTorque"></a> PreTorque

The value for the preTorque. The default value is 0.

```csharp
public ExpressionValueVariable PreTorque { get; set; }
```

#### Property Value

 ExpressionValueVariable

