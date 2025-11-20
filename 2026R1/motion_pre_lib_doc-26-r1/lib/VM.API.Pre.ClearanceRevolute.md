# Class ClearanceRevolute
<a id="VM_API_Pre_ClearanceRevolute"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the revolute clearance

```csharp
public class ClearanceRevolute : Clearance
```

#### Inheritance

object ← 
[Clearance](VM.API.Pre.Clearance.md) ← 
[ClearanceRevolute](VM.API.Pre.ClearanceRevolute.md)

#### Inherited Members

[Clearance.StiffnessCoefficient](VM.API.Pre.Clearance.md\#VM\_API\_Pre\_Clearance\_StiffnessCoefficient), 
[Clearance.ExponentOfPenetration](VM.API.Pre.Clearance.md\#VM\_API\_Pre\_Clearance\_ExponentOfPenetration), 
[Clearance.MaxDampingCoefficient](VM.API.Pre.Clearance.md\#VM\_API\_Pre\_Clearance\_MaxDampingCoefficient), 
[Clearance.UseDampingEffectInVoid](VM.API.Pre.Clearance.md\#VM\_API\_Pre\_Clearance\_UseDampingEffectInVoid)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_API_Pre_ClearanceRevolute__ctor"></a> ClearanceRevolute\(\)

Default constructor

```csharp
public ClearanceRevolute()
```

### <a id="VM_API_Pre_ClearanceRevolute__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_Boolean_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> ClearanceRevolute\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, bool, ExpressionValueVariable, ExpressionValueVariable\)

Initializes a new instance of the <xref href="VM.API.Pre.ClearanceRevolute" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ClearanceRevolute(ExpressionValueVariable stiffnessCoefficient, ExpressionValueVariable exponentOfPenetration, ExpressionValueVariable maxDampingCoefficient, bool useDampingEffectInVoid, ExpressionValueVariable radialClearance, ExpressionValueVariable axialClearance)
```

#### Parameters

`stiffnessCoefficient` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The stiffness coefficient.

`exponentOfPenetration` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The exponent of penetration.

`maxDampingCoefficient` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The max damping coefficient.

`useDampingEffectInVoid` bool

The use damping effect in void.

`radialClearance` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The radial clearance.

`axialClearance` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The axial clearance.

## Properties

### <a id="VM_API_Pre_ClearanceRevolute_AxialClearance"></a> AxialClearance

The value for the axial clearance. The default value is 0.1.

```csharp
public ExpressionValueVariable AxialClearance { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_ClearanceRevolute_RadialClearance"></a> RadialClearance

The value for the radial clearance. The default value is 0.1.

```csharp
public ExpressionValueVariable RadialClearance { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

