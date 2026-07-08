#  Class LoadCaseBase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The car load case base class

```csharp
public abstract class LoadCaseBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LoadCaseBase](VM.Managed.DAFUL.Car.LoadCaseBase.md)

#### Derived

[FullCarLoadCase](VM.Managed.DAFUL.Car.Force.FullCarLoadCase.md), 
[SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_LoadCaseBase__ctor"></a> LoadCaseBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.LoadCaseBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LoadCaseBase()
```

### <a id="VM_Managed_DAFUL_Car_LoadCaseBase__ctor_VM_Unit_"></a> LoadCaseBase\(Unit\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.LoadCaseBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LoadCaseBase(Unit unit)
```

#### Parameters

`unit` Unit

The unit.

## Properties

### <a id="VM_Managed_DAFUL_Car_LoadCaseBase_Units"></a> Units

Gets or sets the units.

```csharp
public Unit Units { get; set; }
```

#### Property Value

 Unit

