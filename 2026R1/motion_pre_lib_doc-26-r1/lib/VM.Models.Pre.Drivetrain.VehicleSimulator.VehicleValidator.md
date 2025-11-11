# Class VehicleValidator
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_VehicleValidator"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class VehicleValidator : AbstractValidator<Vehicle>, IValidator<Vehicle>, IValidator
```

#### Inheritance

object ← 
AbstractValidator<Vehicle\> ← 
[VehicleValidator](VM.Models.Pre.Drivetrain.VehicleSimulator.VehicleValidator.md)

#### Implements

IValidator<Vehicle\>, 
IValidator

#### Inherited Members

AbstractValidator<Vehicle\>.Validate\(Vehicle\), 
AbstractValidator<Vehicle\>.ValidateAsync\(Vehicle, CancellationToken\), 
AbstractValidator<Vehicle\>.Validate\(ValidationContext<Vehicle\>\), 
AbstractValidator<Vehicle\>.ValidateAsync\(ValidationContext<Vehicle\>, CancellationToken\), 
AbstractValidator<Vehicle\>.CreateDescriptor\(\), 
AbstractValidator<Vehicle\>.RuleFor<TProperty\>\(Expression<Func<Vehicle, TProperty\>\>\), 
AbstractValidator<Vehicle\>.Transform<TProperty, TTransformed\>\(Expression<Func<Vehicle, TProperty\>\>, Func<TProperty, TTransformed\>\), 
AbstractValidator<Vehicle\>.Transform<TProperty, TTransformed\>\(Expression<Func<Vehicle, TProperty\>\>, Func<Vehicle, TProperty, TTransformed\>\), 
AbstractValidator<Vehicle\>.RuleForEach<TElement\>\(Expression<Func<Vehicle, IEnumerable<TElement\>\>\>\), 
AbstractValidator<Vehicle\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Vehicle, IEnumerable<TElement\>\>\>, Func<TElement, TTransformed\>\), 
AbstractValidator<Vehicle\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Vehicle, IEnumerable<TElement\>\>\>, Func<Vehicle, TElement, TTransformed\>\), 
AbstractValidator<Vehicle\>.RuleSet\(string, Action\), 
AbstractValidator<Vehicle\>.When\(Func<Vehicle, bool\>, Action\), 
AbstractValidator<Vehicle\>.When\(Func<Vehicle, ValidationContext<Vehicle\>, bool\>, Action\), 
AbstractValidator<Vehicle\>.Unless\(Func<Vehicle, bool\>, Action\), 
AbstractValidator<Vehicle\>.Unless\(Func<Vehicle, ValidationContext<Vehicle\>, bool\>, Action\), 
AbstractValidator<Vehicle\>.WhenAsync\(Func<Vehicle, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Vehicle\>.WhenAsync\(Func<Vehicle, ValidationContext<Vehicle\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Vehicle\>.UnlessAsync\(Func<Vehicle, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Vehicle\>.UnlessAsync\(Func<Vehicle, ValidationContext<Vehicle\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Vehicle\>.Include\(IValidator<Vehicle\>\), 
AbstractValidator<Vehicle\>.Include<TValidator\>\(Func<Vehicle, TValidator\>\), 
AbstractValidator<Vehicle\>.GetEnumerator\(\), 
AbstractValidator<Vehicle\>.EnsureInstanceNotNull\(object\), 
AbstractValidator<Vehicle\>.PreValidate\(ValidationContext<Vehicle\>, ValidationResult\), 
AbstractValidator<Vehicle\>.RaiseValidationException\(ValidationContext<Vehicle\>, ValidationResult\), 
AbstractValidator<Vehicle\>.OnRuleAdded\(IValidationRule<Vehicle\>\), 
AbstractValidator<Vehicle\>.CascadeMode, 
AbstractValidator<Vehicle\>.ClassLevelCascadeMode, 
AbstractValidator<Vehicle\>.RuleLevelCascadeMode

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_VehicleValidator__ctor"></a> VehicleValidator\(\)

```csharp
public VehicleValidator()
```

