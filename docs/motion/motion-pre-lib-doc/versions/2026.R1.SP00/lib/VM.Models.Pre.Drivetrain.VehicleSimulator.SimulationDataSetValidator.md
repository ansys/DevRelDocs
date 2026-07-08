# Class SimulationDataSetValidator
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSetValidator"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class SimulationDataSetValidator : AbstractValidator<SimulationDataSet>, IValidator<SimulationDataSet>, IValidator
```

#### Inheritance

object ← 
AbstractValidator<SimulationDataSet\> ← 
[SimulationDataSetValidator](VM.Models.Pre.Drivetrain.VehicleSimulator.SimulationDataSetValidator.md)

#### Implements

IValidator<SimulationDataSet\>, 
IValidator

#### Inherited Members

AbstractValidator<SimulationDataSet\>.Validate\(SimulationDataSet\), 
AbstractValidator<SimulationDataSet\>.ValidateAsync\(SimulationDataSet, CancellationToken\), 
AbstractValidator<SimulationDataSet\>.Validate\(ValidationContext<SimulationDataSet\>\), 
AbstractValidator<SimulationDataSet\>.ValidateAsync\(ValidationContext<SimulationDataSet\>, CancellationToken\), 
AbstractValidator<SimulationDataSet\>.CreateDescriptor\(\), 
AbstractValidator<SimulationDataSet\>.RuleFor<TProperty\>\(Expression<Func<SimulationDataSet, TProperty\>\>\), 
AbstractValidator<SimulationDataSet\>.Transform<TProperty, TTransformed\>\(Expression<Func<SimulationDataSet, TProperty\>\>, Func<TProperty, TTransformed\>\), 
AbstractValidator<SimulationDataSet\>.Transform<TProperty, TTransformed\>\(Expression<Func<SimulationDataSet, TProperty\>\>, Func<SimulationDataSet, TProperty, TTransformed\>\), 
AbstractValidator<SimulationDataSet\>.RuleForEach<TElement\>\(Expression<Func<SimulationDataSet, IEnumerable<TElement\>\>\>\), 
AbstractValidator<SimulationDataSet\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<SimulationDataSet, IEnumerable<TElement\>\>\>, Func<TElement, TTransformed\>\), 
AbstractValidator<SimulationDataSet\>.TransformForEach<TElement, TTransformed\>\(Expression<Func<SimulationDataSet, IEnumerable<TElement\>\>\>, Func<SimulationDataSet, TElement, TTransformed\>\), 
AbstractValidator<SimulationDataSet\>.RuleSet\(string, Action\), 
AbstractValidator<SimulationDataSet\>.When\(Func<SimulationDataSet, bool\>, Action\), 
AbstractValidator<SimulationDataSet\>.When\(Func<SimulationDataSet, ValidationContext<SimulationDataSet\>, bool\>, Action\), 
AbstractValidator<SimulationDataSet\>.Unless\(Func<SimulationDataSet, bool\>, Action\), 
AbstractValidator<SimulationDataSet\>.Unless\(Func<SimulationDataSet, ValidationContext<SimulationDataSet\>, bool\>, Action\), 
AbstractValidator<SimulationDataSet\>.WhenAsync\(Func<SimulationDataSet, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<SimulationDataSet\>.WhenAsync\(Func<SimulationDataSet, ValidationContext<SimulationDataSet\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<SimulationDataSet\>.UnlessAsync\(Func<SimulationDataSet, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<SimulationDataSet\>.UnlessAsync\(Func<SimulationDataSet, ValidationContext<SimulationDataSet\>, CancellationToken, Task<bool\>\>, Action\), 
AbstractValidator<SimulationDataSet\>.Include\(IValidator<SimulationDataSet\>\), 
AbstractValidator<SimulationDataSet\>.Include<TValidator\>\(Func<SimulationDataSet, TValidator\>\), 
AbstractValidator<SimulationDataSet\>.GetEnumerator\(\), 
AbstractValidator<SimulationDataSet\>.EnsureInstanceNotNull\(object\), 
AbstractValidator<SimulationDataSet\>.PreValidate\(ValidationContext<SimulationDataSet\>, ValidationResult\), 
AbstractValidator<SimulationDataSet\>.RaiseValidationException\(ValidationContext<SimulationDataSet\>, ValidationResult\), 
AbstractValidator<SimulationDataSet\>.OnRuleAdded\(IValidationRule<SimulationDataSet\>\), 
AbstractValidator<SimulationDataSet\>.CascadeMode, 
AbstractValidator<SimulationDataSet\>.ClassLevelCascadeMode, 
AbstractValidator<SimulationDataSet\>.RuleLevelCascadeMode

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSetValidator__ctor"></a> SimulationDataSetValidator\(\)

```csharp
public SimulationDataSetValidator()
```

