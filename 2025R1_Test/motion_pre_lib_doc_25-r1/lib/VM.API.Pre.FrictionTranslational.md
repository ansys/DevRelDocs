# <a id="VM_API_Pre_FrictionTranslational"></a> Class FrictionTranslational

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class represents the friction translational

```csharp
public class FrictionTranslational : Friction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Friction](VM.API.Pre.Friction.md) ← 
[FrictionTranslational](VM.API.Pre.FrictionTranslational.md)

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

### <a id="VM_API_Pre_FrictionTranslational__ctor"></a> FrictionTranslational\(\)

Default constructor

```csharp
public FrictionTranslational()
```

### <a id="VM_API_Pre_FrictionTranslational__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Managed_DAFUL_Constraints_Friction_EffectType_System_Boolean_System_Boolean_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Managed_DAFUL_Constraints_OverlapDeltaType_System_Boolean_"></a> FrictionTranslational\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, EffectType, bool, bool, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, OverlapDeltaType, bool\)

Initializes a new instance of the <xref href="VM.API.Pre.FrictionTranslational" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FrictionTranslational(ExpressionValueVariable frictionCoefficient, ExpressionValueVariable staticFrictionCoefficient, ExpressionValueVariable dynamicsThreshold, ExpressionValueVariable stictionVelocity, ExpressionValueVariable maxStictionDeformation, Friction.EffectType frictionEffect, bool reactionForce, bool bendingMoment, ExpressionValueVariable reactionArm, ExpressionValueVariable preForce, ExpressionValueVariable initialOverlap, OverlapDeltaType overlapOption, bool torsionalMoment)
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

`reactionArm` ExpressionValueVariable

The reaction arm.

`preForce` ExpressionValueVariable

The pre force.

`initialOverlap` ExpressionValueVariable

The initial overlap.

`overlapOption` OverlapDeltaType

The overlap option.

`torsionalMoment` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The torsional moment.

## Properties

### <a id="VM_API_Pre_FrictionTranslational_InitialOverlap"></a> InitialOverlap

The value for the initial overlap. The default value is 1.

```csharp
public ExpressionValueVariable InitialOverlap { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FrictionTranslational_OverlapOption"></a> OverlapOption

The value for the overlap option. The default value is <xref href="VM.Managed.DAFUL.Constraints.OverlapDeltaType.Constant" data-throw-if-not-resolved="false"></xref>.

```csharp
public OverlapDeltaType OverlapOption { get; set; }
```

#### Property Value

 OverlapDeltaType

### <a id="VM_API_Pre_FrictionTranslational_PreForce"></a> PreForce

The value for the preForce. The default value is 0.

```csharp
public ExpressionValueVariable PreForce { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FrictionTranslational_ReactionArm"></a> ReactionArm

The value for the reaction arm. The default value is 1.

```csharp
public ExpressionValueVariable ReactionArm { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FrictionTranslational_TorsionalMoment"></a> TorsionalMoment

The value for the torsional moment. The default value is 'true'.

```csharp
public bool TorsionalMoment { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

