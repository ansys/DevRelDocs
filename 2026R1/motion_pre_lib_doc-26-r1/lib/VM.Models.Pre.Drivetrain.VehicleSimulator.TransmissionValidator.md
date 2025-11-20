# Class TransmissionValidator
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TransmissionValidator"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class TransmissionValidator : AbstractValidator<Transmission>, IValidator<Transmission>, IValidator
```

#### Inheritance

object ← 
AbstractValidator<Transmission\> ← 
[TransmissionValidator](VM.Models.Pre.Drivetrain.VehicleSimulator.TransmissionValidator.md)

#### Implements

IValidator<Transmission\>, 
IValidator

#### Inherited Members

AbstractValidator<Transmission\>.Validate\(Transmission\), 
AbstractValidator<Transmission\>.ValidateAsync\(Transmission, CancellationToken\), 
AbstractValidator<Transmission\>.Validate\(ValidationContext<Transmission\>\), 
AbstractValidator<Transmission\>.ValidateAsync\(ValidationContext<Transmission\>, CancellationToken\), 
AbstractValidator<Transmission\>.CreateDescriptor\(\), 
AbstractValidator<Transmission\>.RuleFor<TProperty\>\(Expression<Func<Transmission, TProperty\>\>\), 
AbstractValidator<Transmission\>.Transform<TProperty, TTransformed\>\(Expression<Func<Transmission, TProperty\>\>, Func<TProperty, TTransformed\>\), 
AbstractValidator<Transmission\>.Transform<TProperty, TTransformed\>\(Expression<Func<Transmission, TProperty\>\>, Func<Transmission, TProperty, TTransformed\>\), 
AbstractValidator<Transmission\>.RuleForEach<TElement\>\(Expression<Func<Transmission, IEnumerable<TElement\>\>\>\), 
AbstractValidator<Transmission\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Transmission, IEnumerable<TElement\>\>\>, Func<TElement, TTransformed\>\), 
AbstractValidator<Transmission\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Transmission, IEnumerable<TElement\>\>\>, Func<Transmission, TElement, TTransformed\>\), 
AbstractValidator<Transmission\>.RuleSet\(string, Action\), 
AbstractValidator<Transmission\>.When\(Func<Transmission, bool\>, Action\), 
AbstractValidator<Transmission\>.When\(Func<Transmission, ValidationContext<Transmission\>, bool\>, Action\), 
AbstractValidator<Transmission\>.Unless\(Func<Transmission, bool\>, Action\), 
AbstractValidator<Transmission\>.Unless\(Func<Transmission, ValidationContext<Transmission\>, bool\>, Action\), 
AbstractValidator<Transmission\>.WhenAsync\(Func<Transmission, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Transmission\>.WhenAsync\(Func<Transmission, ValidationContext<Transmission\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Transmission\>.UnlessAsync\(Func<Transmission, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Transmission\>.UnlessAsync\(Func<Transmission, ValidationContext<Transmission\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Transmission\>.Include\(IValidator<Transmission\>\), 
AbstractValidator<Transmission\>.Include<TValidator\>\(Func<Transmission, TValidator\>\), 
AbstractValidator<Transmission\>.GetEnumerator\(\), 
AbstractValidator<Transmission\>.EnsureInstanceNotNull\(object\), 
AbstractValidator<Transmission\>.PreValidate\(ValidationContext<Transmission\>, ValidationResult\), 
AbstractValidator<Transmission\>.RaiseValidationException\(ValidationContext<Transmission\>, ValidationResult\), 
AbstractValidator<Transmission\>.OnRuleAdded\(IValidationRule<Transmission\>\), 
AbstractValidator<Transmission\>.CascadeMode, 
AbstractValidator<Transmission\>.ClassLevelCascadeMode, 
AbstractValidator<Transmission\>.RuleLevelCascadeMode

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TransmissionValidator__ctor"></a> TransmissionValidator\(\)

```csharp
public TransmissionValidator()
```

