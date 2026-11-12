# Class FlowValidator
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_FlowValidator"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class FlowValidator : AbstractValidator<Flow>, IValidator<Flow>, IValidator
```

#### Inheritance

object ← 
AbstractValidator<Flow\> ← 
[FlowValidator](VM.Models.Pre.Drivetrain.VehicleSimulator.FlowValidator.md)

#### Implements

IValidator<Flow\>, 
IValidator

#### Inherited Members

AbstractValidator<Flow\>.Validate\(Flow\), 
AbstractValidator<Flow\>.ValidateAsync\(Flow, CancellationToken\), 
AbstractValidator<Flow\>.Validate\(ValidationContext<Flow\>\), 
AbstractValidator<Flow\>.ValidateAsync\(ValidationContext<Flow\>, CancellationToken\), 
AbstractValidator<Flow\>.CreateDescriptor\(\), 
AbstractValidator<Flow\>.RuleFor<TProperty\>\(Expression<Func<Flow, TProperty\>\>\), 
AbstractValidator<Flow\>.Transform<TProperty, TTransformed\>\(Expression<Func<Flow, TProperty\>\>, Func<TProperty, TTransformed\>\), 
AbstractValidator<Flow\>.Transform<TProperty, TTransformed\>\(Expression<Func<Flow, TProperty\>\>, Func<Flow, TProperty, TTransformed\>\), 
AbstractValidator<Flow\>.RuleForEach<TElement\>\(Expression<Func<Flow, IEnumerable<TElement\>\>\>\), 
AbstractValidator<Flow\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Flow, IEnumerable<TElement\>\>\>, Func<TElement, TTransformed\>\), 
AbstractValidator<Flow\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<Flow, IEnumerable<TElement\>\>\>, Func<Flow, TElement, TTransformed\>\), 
AbstractValidator<Flow\>.RuleSet\(string, Action\), 
AbstractValidator<Flow\>.When\(Func<Flow, bool\>, Action\), 
AbstractValidator<Flow\>.When\(Func<Flow, ValidationContext<Flow\>, bool\>, Action\), 
AbstractValidator<Flow\>.Unless\(Func<Flow, bool\>, Action\), 
AbstractValidator<Flow\>.Unless\(Func<Flow, ValidationContext<Flow\>, bool\>, Action\), 
AbstractValidator<Flow\>.WhenAsync\(Func<Flow, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Flow\>.WhenAsync\(Func<Flow, ValidationContext<Flow\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Flow\>.UnlessAsync\(Func<Flow, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Flow\>.UnlessAsync\(Func<Flow, ValidationContext<Flow\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<Flow\>.Include\(IValidator<Flow\>\), 
AbstractValidator<Flow\>.Include<TValidator\>\(Func<Flow, TValidator\>\), 
AbstractValidator<Flow\>.GetEnumerator\(\), 
AbstractValidator<Flow\>.EnsureInstanceNotNull\(object\), 
AbstractValidator<Flow\>.PreValidate\(ValidationContext<Flow\>, ValidationResult\), 
AbstractValidator<Flow\>.RaiseValidationException\(ValidationContext<Flow\>, ValidationResult\), 
AbstractValidator<Flow\>.OnRuleAdded\(IValidationRule<Flow\>\), 
AbstractValidator<Flow\>.CascadeMode, 
AbstractValidator<Flow\>.ClassLevelCascadeMode, 
AbstractValidator<Flow\>.RuleLevelCascadeMode

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_FlowValidator__ctor"></a> FlowValidator\(\)

```csharp
public FlowValidator()
```

