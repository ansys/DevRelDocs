# Class SignalValidator
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SignalValidator"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class SignalValidator : AbstractValidator<Signal>, IValidator<Signal>, IValidator
```

#### Inheritance

object ← 
AbstractValidator<Signal\> ← 
[SignalValidator](VM.Models.Pre.Drivetrain.VehicleSimulator.SignalValidator.md)

#### Implements

IValidator<Signal\>, 
IValidator

#### Inherited Members

AbstractValidator<Signal\>.Validate\(Signal\), 
AbstractValidator<Signal\>.ValidateAsync\(Signal, CancellationToken\), 
AbstractValidator<Signal\>.Validate\(ValidationContext<Signal\>\), 
AbstractValidator<Signal\>.ValidateAsync\(ValidationContext<Signal\>, CancellationToken\), 
AbstractValidator<Signal\>.CreateDescriptor\(\), 
AbstractValidator<Signal\>.RuleFor<TProperty\>\(Expression<Func<Signal, TProperty\>\>\), 
AbstractValidator<Signal\>.Transform<TProperty, TTransformed\>\(Expression<Func<Signal, TProperty\>\>, Func<TProperty, TTransformed\>\), 
AbstractValidator<Signal\>.Transform<TProperty, TTransformed\>\(Expression<Func<Signal, TProperty\>\>, Func<Signal, TProperty, TTransformed\>\), 
AbstractValidator<Signal\>.RuleForEach<TElement\>\(Expression<Func<Signal, IEnumerable<TElement\>\>\>\), 
AbstractValidator<Signal\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Signal, IEnumerable<TElement\>\>\>, Func<TElement, TTransformed\>\), 
AbstractValidator<Signal\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Signal, IEnumerable<TElement\>\>\>, Func<Signal, TElement, TTransformed\>\), 
AbstractValidator<Signal\>.RuleSet\(string, Action\), 
AbstractValidator<Signal\>.When\(Func<Signal, bool\>, Action\), 
AbstractValidator<Signal\>.When\(Func<Signal, ValidationContext<Signal\>, bool\>, Action\), 
AbstractValidator<Signal\>.Unless\(Func<Signal, bool\>, Action\), 
AbstractValidator<Signal\>.Unless\(Func<Signal, ValidationContext<Signal\>, bool\>, Action\), 
AbstractValidator<Signal\>.WhenAsync\(Func<Signal, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Signal\>.WhenAsync\(Func<Signal, ValidationContext<Signal\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Signal\>.UnlessAsync\(Func<Signal, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Signal\>.UnlessAsync\(Func<Signal, ValidationContext<Signal\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Signal\>.Include\(IValidator<Signal\>\), 
AbstractValidator<Signal\>.Include<TValidator\>\(Func<Signal, TValidator\>\), 
AbstractValidator<Signal\>.GetEnumerator\(\), 
AbstractValidator<Signal\>.EnsureInstanceNotNull\(object\), 
AbstractValidator<Signal\>.PreValidate\(ValidationContext<Signal\>, ValidationResult\), 
AbstractValidator<Signal\>.RaiseValidationException\(ValidationContext<Signal\>, ValidationResult\), 
AbstractValidator<Signal\>.OnRuleAdded\(IValidationRule<Signal\>\), 
AbstractValidator<Signal\>.CascadeMode, 
AbstractValidator<Signal\>.ClassLevelCascadeMode, 
AbstractValidator<Signal\>.RuleLevelCascadeMode

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SignalValidator__ctor"></a> SignalValidator\(\)

```csharp
public SignalValidator()
```

