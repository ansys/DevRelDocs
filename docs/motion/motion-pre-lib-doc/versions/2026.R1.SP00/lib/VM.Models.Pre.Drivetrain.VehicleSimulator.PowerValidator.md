# Class PowerValidator
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_PowerValidator"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class PowerValidator : AbstractValidator<Power>, IValidator<Power>, IValidator
```

#### Inheritance

object ← 
AbstractValidator<Power\> ← 
[PowerValidator](VM.Models.Pre.Drivetrain.VehicleSimulator.PowerValidator.md)

#### Implements

IValidator<Power\>, 
IValidator

#### Inherited Members

AbstractValidator<Power\>.Validate\(Power\), 
AbstractValidator<Power\>.ValidateAsync\(Power, CancellationToken\), 
AbstractValidator<Power\>.Validate\(ValidationContext<Power\>\), 
AbstractValidator<Power\>.ValidateAsync\(ValidationContext<Power\>, CancellationToken\), 
AbstractValidator<Power\>.CreateDescriptor\(\), 
AbstractValidator<Power\>.RuleFor<TProperty\>\(Expression<Func<Power, TProperty\>\>\), 
AbstractValidator<Power\>.Transform<TProperty, TTransformed\>\(Expression<Func<Power, TProperty\>\>, Func<TProperty, TTransformed\>\), 
AbstractValidator<Power\>.Transform<TProperty, TTransformed\>\(Expression<Func<Power, TProperty\>\>, Func<Power, TProperty, TTransformed\>\), 
AbstractValidator<Power\>.RuleForEach<TElement\>\(Expression<Func<Power, IEnumerable<TElement\>\>\>\), 
AbstractValidator<Power\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Power, IEnumerable<TElement\>\>\>, Func<TElement, TTransformed\>\), 
AbstractValidator<Power\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Power, IEnumerable<TElement\>\>\>, Func<Power, TElement, TTransformed\>\), 
AbstractValidator<Power\>.RuleSet\(string, Action\), 
AbstractValidator<Power\>.When\(Func<Power, bool\>, Action\), 
AbstractValidator<Power\>.When\(Func<Power, ValidationContext<Power\>, bool\>, Action\), 
AbstractValidator<Power\>.Unless\(Func<Power, bool\>, Action\), 
AbstractValidator<Power\>.Unless\(Func<Power, ValidationContext<Power\>, bool\>, Action\), 
AbstractValidator<Power\>.WhenAsync\(Func<Power, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Power\>.WhenAsync\(Func<Power, ValidationContext<Power\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Power\>.UnlessAsync\(Func<Power, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Power\>.UnlessAsync\(Func<Power, ValidationContext<Power\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Power\>.Include\(IValidator<Power\>\), 
AbstractValidator<Power\>.Include<TValidator\>\(Func<Power, TValidator\>\), 
AbstractValidator<Power\>.GetEnumerator\(\), 
AbstractValidator<Power\>.EnsureInstanceNotNull\(object\), 
AbstractValidator<Power\>.PreValidate\(ValidationContext<Power\>, ValidationResult\), 
AbstractValidator<Power\>.RaiseValidationException\(ValidationContext<Power\>, ValidationResult\), 
AbstractValidator<Power\>.OnRuleAdded\(IValidationRule<Power\>\), 
AbstractValidator<Power\>.CascadeMode, 
AbstractValidator<Power\>.ClassLevelCascadeMode, 
AbstractValidator<Power\>.RuleLevelCascadeMode

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_PowerValidator__ctor"></a> PowerValidator\(\)

```csharp
public PowerValidator()
```

