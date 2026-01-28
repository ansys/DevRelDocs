# Class TorqueMapValidator
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMapValidator"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class TorqueMapValidator : AbstractValidator<TorqueMap>, IValidator<TorqueMap>, IValidator
```

#### Inheritance

object ← 
AbstractValidator<TorqueMap\> ← 
[TorqueMapValidator](VM.Models.Pre.Drivetrain.VehicleSimulator.TorqueMapValidator.md)

#### Implements

IValidator<TorqueMap\>, 
IValidator

#### Inherited Members

AbstractValidator<TorqueMap\>.Validate\(TorqueMap\), 
AbstractValidator<TorqueMap\>.ValidateAsync\(TorqueMap, CancellationToken\), 
AbstractValidator<TorqueMap\>.Validate\(ValidationContext<TorqueMap\>\), 
AbstractValidator<TorqueMap\>.ValidateAsync\(ValidationContext<TorqueMap\>, CancellationToken\), 
AbstractValidator<TorqueMap\>.CreateDescriptor\(\), 
AbstractValidator<TorqueMap\>.RuleFor<TProperty\>\(Expression<Func<TorqueMap, TProperty\>\>\), 
AbstractValidator<TorqueMap\>.Transform<TProperty, TTransformed\>\(Expression<Func<TorqueMap, TProperty\>\>, Func<TProperty, TTransformed\>\), 
AbstractValidator<TorqueMap\>.Transform<TProperty, TTransformed\>\(Expression<Func<TorqueMap, TProperty\>\>, Func<TorqueMap, TProperty, TTransformed\>\), 
AbstractValidator<TorqueMap\>.RuleForEach<TElement\>\(Expression<Func<TorqueMap, IEnumerable<TElement\>\>\>\), 
AbstractValidator<TorqueMap\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<TorqueMap, IEnumerable<TElement\>\>\>, Func<TElement, TTransformed\>\), 
AbstractValidator<TorqueMap\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<TorqueMap, IEnumerable<TElement\>\>\>, Func<TorqueMap, TElement, TTransformed\>\), 
AbstractValidator<TorqueMap\>.RuleSet\(string, Action\), 
AbstractValidator<TorqueMap\>.When\(Func<TorqueMap, bool\>, Action\), 
AbstractValidator<TorqueMap\>.When\(Func<TorqueMap, ValidationContext<TorqueMap\>, bool\>, Action\), 
AbstractValidator<TorqueMap\>.Unless\(Func<TorqueMap, bool\>, Action\), 
AbstractValidator<TorqueMap\>.Unless\(Func<TorqueMap, ValidationContext<TorqueMap\>, bool\>, Action\), 
AbstractValidator<TorqueMap\>.WhenAsync\(Func<TorqueMap, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<TorqueMap\>.WhenAsync\(Func<TorqueMap, ValidationContext<TorqueMap\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<TorqueMap\>.UnlessAsync\(Func<TorqueMap, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<TorqueMap\>.UnlessAsync\(Func<TorqueMap, ValidationContext<TorqueMap\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<TorqueMap\>.Include\(IValidator<TorqueMap\>\), 
AbstractValidator<TorqueMap\>.Include<TValidator\>\(Func<TorqueMap, TValidator\>\), 
AbstractValidator<TorqueMap\>.GetEnumerator\(\), 
AbstractValidator<TorqueMap\>.EnsureInstanceNotNull\(object\), 
AbstractValidator<TorqueMap\>.PreValidate\(ValidationContext<TorqueMap\>, ValidationResult\), 
AbstractValidator<TorqueMap\>.RaiseValidationException\(ValidationContext<TorqueMap\>, ValidationResult\), 
AbstractValidator<TorqueMap\>.OnRuleAdded\(IValidationRule<TorqueMap\>\), 
AbstractValidator<TorqueMap\>.CascadeMode, 
AbstractValidator<TorqueMap\>.ClassLevelCascadeMode, 
AbstractValidator<TorqueMap\>.RuleLevelCascadeMode

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMapValidator__ctor"></a> TorqueMapValidator\(\)

```csharp
public TorqueMapValidator()
```

