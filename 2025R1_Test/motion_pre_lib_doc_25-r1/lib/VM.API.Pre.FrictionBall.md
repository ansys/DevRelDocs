#  Class FrictionBall

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class represents the friction ball

```csharp
public class FrictionBall : FrictionRevolute
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Friction](VM.API.Pre.Friction.md) ← 
[FrictionRevolute](VM.API.Pre.FrictionRevolute.md) ← 
[FrictionBall](VM.API.Pre.FrictionBall.md)

#### Inherited Members

[FrictionRevolute.FrictionArm](VM.API.Pre.FrictionRevolute.md\#VM\_API\_Pre\_FrictionRevolute\_FrictionArm), 
[FrictionRevolute.BendingReactionArm](VM.API.Pre.FrictionRevolute.md\#VM\_API\_Pre\_FrictionRevolute\_BendingReactionArm), 
[FrictionRevolute.PinRadius](VM.API.Pre.FrictionRevolute.md\#VM\_API\_Pre\_FrictionRevolute\_PinRadius), 
[FrictionRevolute.PreTorque](VM.API.Pre.FrictionRevolute.md\#VM\_API\_Pre\_FrictionRevolute\_PreTorque), 
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

### <a id="VM_API_Pre_FrictionBall__ctor"></a> FrictionBall\(\)

Default constructor

```csharp
public FrictionBall()
```

### <a id="VM_API_Pre_FrictionBall__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Managed_DAFUL_Constraints_Friction_EffectType_System_Boolean_System_Boolean_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> FrictionBall\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, EffectType, bool, bool, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Default constructor

```csharp
public FrictionBall(ExpressionValueVariable frictionCoefficient, ExpressionValueVariable staticFrictionCoefficient, ExpressionValueVariable dynamicsThreshold, ExpressionValueVariable stictionVelocity, ExpressionValueVariable maxStictionDeformation, Friction.EffectType frictionEffect, bool reactionForce, bool bendingMoment, ExpressionValueVariable frictionArm, ExpressionValueVariable bendingReactionArm, ExpressionValueVariable ballRadius, ExpressionValueVariable preTorque)
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

`ballRadius` ExpressionValueVariable

The ball Radius.

`preTorque` ExpressionValueVariable

The preTorque.

