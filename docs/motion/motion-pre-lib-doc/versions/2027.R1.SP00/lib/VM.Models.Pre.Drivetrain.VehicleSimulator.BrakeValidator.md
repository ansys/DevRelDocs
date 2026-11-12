# Class BrakeValidator
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_BrakeValidator"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class BrakeValidator : AbstractValidator<Brake>, IValidator<Brake>, IValidator
```

#### Inheritance

object ← 
AbstractValidator<Brake\> ← 
[BrakeValidator](VM.Models.Pre.Drivetrain.VehicleSimulator.BrakeValidator.md)

#### Implements

IValidator<Brake\>, 
IValidator

#### Inherited Members

AbstractValidator<Brake\>.Validate\(Brake\), 
AbstractValidator<Brake\>.ValidateAsync\(Brake, CancellationToken\), 
AbstractValidator<Brake\>.Validate\(ValidationContext<Brake\>\), 
AbstractValidator<Brake\>.ValidateAsync\(ValidationContext<Brake\>, CancellationToken\), 
AbstractValidator<Brake\>.CreateDescriptor\(\), 
AbstractValidator<Brake\>.RuleFor<TProperty\>\(Expression<Func<Brake, TProperty\>\>\), 
AbstractValidator<Brake\>.Transform<TProperty, TTransformed\>\(Expression<Func<Brake, TProperty\>\>, Func<TProperty, TTransformed\>\), 
AbstractValidator<Brake\>.Transform<TProperty, TTransformed\>\(Expression<Func<Brake, TProperty\>\>, Func<Brake, TProperty, TTransformed\>\), 
AbstractValidator<Brake\>.RuleForEach<TElement\>\(Expression<Func<Brake, IEnumerable<TElement\>\>\>\), 
AbstractValidator<Brake\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Brake, IEnumerable<TElement\>\>\>, Func<TElement, TTransformed\>\), 
AbstractValidator<Brake\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Brake, IEnumerable<TElement\>\>\>, Func<Brake, TElement, TTransformed\>\), 
AbstractValidator<Brake\>.RuleSet\(string, Action\), 
AbstractValidator<Brake\>.When\(Func<Brake, bool\>, Action\), 
AbstractValidator<Brake\>.When\(Func<Brake, ValidationContext<Brake\>, bool\>, Action\), 
AbstractValidator<Brake\>.Unless\(Func<Brake, bool\>, Action\), 
AbstractValidator<Brake\>.Unless\(Func<Brake, ValidationContext<Brake\>, bool\>, Action\), 
AbstractValidator<Brake\>.WhenAsync\(Func<Brake, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Brake\>.WhenAsync\(Func<Brake, ValidationContext<Brake\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Brake\>.UnlessAsync\(Func<Brake, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Brake\>.UnlessAsync\(Func<Brake, ValidationContext<Brake\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Brake\>.Include\(IValidator<Brake\>\), 
AbstractValidator<Brake\>.Include<TValidator\>\(Func<Brake, TValidator\>\), 
AbstractValidator<Brake\>.GetEnumerator\(\), 
AbstractValidator<Brake\>.EnsureInstanceNotNull\(object\), 
AbstractValidator<Brake\>.PreValidate\(ValidationContext<Brake\>, ValidationResult\), 
AbstractValidator<Brake\>.RaiseValidationException\(ValidationContext<Brake\>, ValidationResult\), 
AbstractValidator<Brake\>.OnRuleAdded\(IValidationRule<Brake\>\), 
AbstractValidator<Brake\>.CascadeMode, 
AbstractValidator<Brake\>.ClassLevelCascadeMode, 
AbstractValidator<Brake\>.RuleLevelCascadeMode

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_BrakeValidator__ctor"></a> BrakeValidator\(\)

```csharp
public BrakeValidator()
```

