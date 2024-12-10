#  Class FrictionContact

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class represents the friction contact

```csharp
public class FrictionContact : Friction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Friction](VM.API.Pre.Friction.md) ← 
[FrictionContact](VM.API.Pre.FrictionContact.md)

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

### <a id="VM_API_Pre_FrictionContact__ctor"></a> FrictionContact\(\)

Default constructor

```csharp
public FrictionContact()
```

### <a id="VM_API_Pre_FrictionContact__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Managed_DAFUL_Constraints_Friction_EffectType_"></a> FrictionContact\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, EffectType\)

Initializes a new instance of the <xref href="VM.API.Pre.FrictionContact" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FrictionContact(ExpressionValueVariable frictionCoefficient, ExpressionValueVariable staticFrictionCoefficient, ExpressionValueVariable dynamicsThreshold, ExpressionValueVariable stictionVelocity, ExpressionValueVariable maxStictionDeformation, Friction.EffectType frictionEffect)
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

