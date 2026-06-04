#  Class ClearanceTranslational

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the translational clearance

```csharp
public class ClearanceTranslational : Clearance
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Clearance](VM.API.Pre.Clearance.md) ← 
[ClearanceTranslational](VM.API.Pre.ClearanceTranslational.md)

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

### <a id="VM_API_Pre_ClearanceTranslational__ctor"></a> ClearanceTranslational\(\)

Default constructor

```csharp
public ClearanceTranslational()
```

### <a id="VM_API_Pre_ClearanceTranslational__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_Boolean_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> ClearanceTranslational\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, bool, ExpressionValueVariable, ExpressionValueVariable\)

Initializes a new instance of the <xref href="VM.API.Pre.ClearanceTranslational" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ClearanceTranslational(ExpressionValueVariable stiffnessCoefficient, ExpressionValueVariable exponentOfPenetration, ExpressionValueVariable maxDampingCoefficient, bool useDampingEffectInVoid, ExpressionValueVariable xClearance, ExpressionValueVariable yClearance)
```

#### Parameters

`stiffnessCoefficient` ExpressionValueVariable

The stiffness coefficient.

`exponentOfPenetration` ExpressionValueVariable

The exponent of penetration.

`maxDampingCoefficient` ExpressionValueVariable

The max damping coefficient.

`useDampingEffectInVoid` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The use damping effect in void.

`xClearance` ExpressionValueVariable

The x clearance.

`yClearance` ExpressionValueVariable

The y clearance.

## Properties

### <a id="VM_API_Pre_ClearanceTranslational_XClearance"></a> XClearance

The value for the x clearance. The default value is 0.1.

```csharp
public ExpressionValueVariable XClearance { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_ClearanceTranslational_YClearance"></a> YClearance

The value for the y clearance. The default value is 0.1.

```csharp
public ExpressionValueVariable YClearance { get; set; }
```

#### Property Value

 ExpressionValueVariable

