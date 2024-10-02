#  Class Friction

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class represents the friction

```csharp
public class Friction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Friction](VM.API.Pre.Friction.md)

#### Derived

[FrictionContact](VM.API.Pre.FrictionContact.md), 
[FrictionRevolute](VM.API.Pre.FrictionRevolute.md), 
[FrictionTranslational](VM.API.Pre.FrictionTranslational.md), 
[FrictionUniversal](VM.API.Pre.FrictionUniversal.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_API_Pre_Friction__ctor"></a> Friction\(\)

Default constructor

```csharp
public Friction()
```

### <a id="VM_API_Pre_Friction__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Managed_DAFUL_Constraints_Friction_EffectType_"></a> Friction\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, EffectType\)

Initializes a new instance of the <xref href="VM.API.Pre.Friction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Friction(ExpressionValueVariable frictionCoefficient, ExpressionValueVariable staticFrictionCoefficient, ExpressionValueVariable dynamicsThreshold, ExpressionValueVariable stictionVelocity, ExpressionValueVariable maxStictionDeformation, Friction.EffectType frictionEffect)
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

### <a id="VM_API_Pre_Friction__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Managed_DAFUL_Constraints_Friction_EffectType_System_Boolean_System_Boolean_"></a> Friction\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, EffectType, bool, bool\)

Initializes a new instance of the <xref href="VM.API.Pre.Friction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Friction(ExpressionValueVariable frictionCoefficient, ExpressionValueVariable staticFrictionCoefficient, ExpressionValueVariable dynamicsThreshold, ExpressionValueVariable stictionVelocity, ExpressionValueVariable maxStictionDeformation, Friction.EffectType frictionEffect, bool reactionForce, bool bendingMoment)
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

## Properties

### <a id="VM_API_Pre_Friction_BendingMoment"></a> BendingMoment

The value for the bending moment. The default value is 'true'.

```csharp
public bool BendingMoment { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_Friction_DynamicsThreshold"></a> DynamicsThreshold

The value for the dynamics threshold. The default value is 0.15.

```csharp
public ExpressionValueVariable DynamicsThreshold { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_Friction_FrictionCoefficient"></a> FrictionCoefficient

The value for the friction coefficient. The default value is 0.3.

```csharp
public ExpressionValueVariable FrictionCoefficient { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_Friction_FrictionEffect"></a> FrictionEffect

The value for the friction effect. The default value is <xref href="VM.Managed.DAFUL.Constraints.Friction.EffectType.SlidingAndStiction" data-throw-if-not-resolved="false"></xref>.

```csharp
public Friction.EffectType FrictionEffect { get; set; }
```

#### Property Value

 Friction.EffectType

### <a id="VM_API_Pre_Friction_MaxStictionDeformation"></a> MaxStictionDeformation

The value for the max stiction deformation. The default value is 0.01.

```csharp
public ExpressionValueVariable MaxStictionDeformation { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_Friction_ReactionForce"></a> ReactionForce

The value for the reaction force. The default value is 'true'.

```csharp
public bool ReactionForce { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_Friction_StaticFrictionCoefficient"></a> StaticFrictionCoefficient

The value for the static friction coefficient. The default value is 0.5.

```csharp
public ExpressionValueVariable StaticFrictionCoefficient { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_Friction_StictionVelocity"></a> StictionVelocity

The value for the stiction velocity. The default value is 0.1.

```csharp
public ExpressionValueVariable StictionVelocity { get; set; }
```

#### Property Value

 ExpressionValueVariable

