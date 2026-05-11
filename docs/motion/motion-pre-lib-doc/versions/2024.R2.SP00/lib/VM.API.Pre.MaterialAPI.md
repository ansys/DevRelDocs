# Class MaterialAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for material class.

```csharp
public static class MaterialAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MaterialAPI](VM.API.Pre.MaterialAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreateArrudaBoyce\(IDocument, string, ExpressionValueVariable, ExpressionValueVariable, bool, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Create <xref href="VM.Managed.Material.ArrudaBoyce" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateArrudaBoyce(this IDocument document, string name, ExpressionValueVariable density, ExpressionValueVariable dampingRatio, bool disableHScaleFactor, ExpressionValueVariable mu, ExpressionValueVariable lambda, ExpressionValueVariable d)
```

#### Parameters

`document` IDocument

The document to create the arruda-boyce material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the arruda-boyce material.

`density` ExpressionValueVariable

The density of the arruda-boyce material.

`dampingRatio` ExpressionValueVariable

The stiffness proportional damping ratio for the nodal flexible and EasyFlex bodies.

`disableHScaleFactor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether to disable H Scale factor or not.

`mu` ExpressionValueVariable

The mu to set the elastic constant which is corresponding to the shear modulus in the linear material.

`lambda` ExpressionValueVariable

The lambda to set the locking stretch.

`d` ExpressionValueVariable

The d to set the incompressibility parameter to determine a penalty of the volume constraint.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.ArrudaBoyce" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'density', 'dampingRatio' values less than 0.

### CreateArrudaBoyce\(IDocument, string\)

Create <xref href="VM.Managed.Material.ArrudaBoyce" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateArrudaBoyce(this IDocument document, string name)
```

#### Parameters

`document` IDocument

The document to create the arruda-boyce material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the arruda-boyce material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.ArrudaBoyce" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreateFoam\(IDocument, string, ExpressionValueVariable, ExpressionValueVariable, bool, ExpressionValueVariable, Obj?\)

Create <xref href="VM.Managed.Material.Foam" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateFoam(this IDocument document, string name, ExpressionValueVariable density, ExpressionValueVariable dampingRatio, bool disableHScaleFactor, ExpressionValueVariable youngsModulus, Obj? spline = null)
```

#### Parameters

`document` IDocument

The document to create the foam material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the foam material.

`density` ExpressionValueVariable

The density of the foam material.

`dampingRatio` ExpressionValueVariable

The stiffness proportional damping ratio for the nodal flexible and EasyFlex bodies.

`disableHScaleFactor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether to disable H Scale factor or not.

`youngsModulus` ExpressionValueVariable

The Young's modulus of the foam material.

`spline` [Obj](VM.API.Pre.Obj.md)?

The spline to set the norminal strain-stress curve by using the spline picker.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.Foam" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'density', 'dampingRatio', 'youngsModulus' values less than 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'spline' is not <xref href="VM.Managed.DAFUL.Spline" data-throw-if-not-resolved="false"></xref>.

### CreateFoam\(IDocument, string\)

Create <xref href="VM.Managed.Material.Foam" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateFoam(this IDocument document, string name)
```

#### Parameters

`document` IDocument

The document to create the foam material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the foam material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.Foam" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreateISO\(IDocument, string, ExpressionValueVariable, ExpressionValueVariable, bool, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Create <xref href="VM.Managed.Material.ISO" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanOrEqualToZero(new string[] { "youngsModulus", "thermalConductivity", "specificHeat" })]
[GreaterThanZero(new string[] { "shearModulus" })]
public static Obj CreateISO(this IDocument document, string name, ExpressionValueVariable density, ExpressionValueVariable dampingRatio, bool disableHScaleFactor, ExpressionValueVariable youngsModulus, ExpressionValueVariable shearModulus, ExpressionValueVariable poissonRatio, ExpressionValueVariable thermalExpansionCoefficient, ExpressionValueVariable thermalConductivity, ExpressionValueVariable specificHeat, ExpressionValueVariable referenceTemperature)
```

#### Parameters

`document` IDocument

The document to create the iso material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the iso material.

`density` ExpressionValueVariable

The density of the iso material.

`dampingRatio` ExpressionValueVariable

The stiffness proportional damping ratio for the nodal flexible and EasyFlex bodies.

`disableHScaleFactor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether to disable H Scale factor or not.

`youngsModulus` ExpressionValueVariable

The Young's modulus of the iso material.

`shearModulus` ExpressionValueVariable

The shear modulus of the iso material.

`poissonRatio` ExpressionValueVariable

The Poisson's ratio of the iso material.

`thermalExpansionCoefficient` ExpressionValueVariable

The thermal expansion coefficient of the iso material.

`thermalConductivity` ExpressionValueVariable

The thermal conductivity of the iso material.

`specificHeat` ExpressionValueVariable

The specific heat of the iso material.

`referenceTemperature` ExpressionValueVariable

The initial temperature of the iso material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.ISO" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'density', 'dampingRatio', 'youngsModulus', 'shearModulus', 'poissonRatio' values less than 0.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'poissonRatio' value is less than 0 or equal to 0.5 or more than 0.5.

### CreateISO\(IDocument, string\)

Create <xref href="VM.Managed.Material.ISO" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateISO(this IDocument document, string name)
```

#### Parameters

`document` IDocument

The document to create the iso material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the iso material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.ISO" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreateISONonlinearThermal\(IDocument, string, ExpressionValueVariable, ExpressionValueVariable, bool, Obj, ExpressionValueVariable, Obj, Obj, Obj, ExpressionValueVariable\)

Create <xref href="VM.Managed.Material.ISONonlinearThermal" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "youngsModulusSpline", "thermalExpansionCoefficientSpline", "thermalConductivitySpline", "specificHeatSpline" })]
[MatchTypeObj(new object[] { "youngsModulusSpline", typeof(ISpline), "thermalExpansionCoefficientSpline", typeof(ISpline), "thermalConductivitySpline", typeof(ISpline), "specificHeatSpline", typeof(ISpline) })]
public static Obj CreateISONonlinearThermal(this IDocument document, string name, ExpressionValueVariable density, ExpressionValueVariable dampingRatio, bool disableHScaleFactor, Obj youngsModulusSpline, ExpressionValueVariable poissonRatio, Obj thermalExpansionCoefficientSpline, Obj thermalConductivitySpline, Obj specificHeatSpline, ExpressionValueVariable referenceTemperature)
```

#### Parameters

`document` IDocument

The document to create the iso nonlinear thermal material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the iso nonlinear thermal material.

`density` ExpressionValueVariable

The density of the iso nonlinear thermal material.

`dampingRatio` ExpressionValueVariable

The stiffness proportional damping ratio for the nodal flexible and EasyFlex bodies.

`disableHScaleFactor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether to disable H Scale factor or not.

`youngsModulusSpline` [Obj](VM.API.Pre.Obj.md)

The Young's modulus spline of the iso nonlinear thermal material.

`poissonRatio` ExpressionValueVariable

The Poisson's ratio of the iso nonlinear thermal material.

`thermalExpansionCoefficientSpline` [Obj](VM.API.Pre.Obj.md)

The thermal expansion coefficient spline of the iso nonlinear thermal material.

`thermalConductivitySpline` [Obj](VM.API.Pre.Obj.md)

The thermal conductivity spline of the iso nonlinear thermal material.

`specificHeatSpline` [Obj](VM.API.Pre.Obj.md)

The specific heat spline of the iso nonlinear thermal material.

`referenceTemperature` ExpressionValueVariable

The initial temperature of the iso nonlinear thermal material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.ISONonlinearThermal" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'density', 'dampingRatio', 'poissonRatio' values less than 0.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'poissonRatio' value is less than 0 or equal to 0.5 or more than 0.5.

### CreateISONonlinearThermal\(IDocument, string, Obj, Obj, Obj, Obj\)

Create <xref href="VM.Managed.Material.ISONonlinearThermal" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateISONonlinearThermal(this IDocument document, string name, Obj youngsModulusSpline, Obj thermalExpansionCoefficientSpline, Obj thermalConductivitySpline, Obj specificHeatSpline)
```

#### Parameters

`document` IDocument

The document to create the iso nonlinear thermal material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the iso nonlinear thermal material.

`youngsModulusSpline` [Obj](VM.API.Pre.Obj.md)

The Young's modulus spline of the iso nonlinear thermal material.

`thermalExpansionCoefficientSpline` [Obj](VM.API.Pre.Obj.md)

The thermal expansion coefficient spline of the iso nonlinear thermal material.

`thermalConductivitySpline` [Obj](VM.API.Pre.Obj.md)

The thermal conductivity spline of the iso nonlinear thermal material.

`specificHeatSpline` [Obj](VM.API.Pre.Obj.md)

The specific heat spline of the iso nonlinear thermal material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.ISONonlinearThermal" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreateMooneyRivlin\(IDocument, string, ExpressionValueVariable, ExpressionValueVariable, bool, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Create <xref href="VM.Managed.Material.MooneyRivlin" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateMooneyRivlin(this IDocument document, string name, ExpressionValueVariable density, ExpressionValueVariable dampingRatio, bool disableHScaleFactor, ExpressionValueVariable c10, ExpressionValueVariable c01, ExpressionValueVariable d)
```

#### Parameters

`document` IDocument

The document to create the mooney-rivlin material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the mooney-rivlin material.

`density` ExpressionValueVariable

The density of the mooney-rivlin material.

`dampingRatio` ExpressionValueVariable

The stiffness proportional damping ratio for the nodal flexible and EasyFlex bodies.

`disableHScaleFactor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether to disable H Scale factor or not.

`c10` ExpressionValueVariable

The c10 to set the elastic constant which is corresponding to the Young’s modulus in the linear material.

`c01` ExpressionValueVariable

The c01 to set the 2nd elastic constant which is corresponding to the Young’s modulus in the linear material.

`d` ExpressionValueVariable

The d to set the incompressibility parameter to determine a penalty of the volume constraint.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.MooneyRivlin" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'density', 'dampingRatio', 'c10' 'c01' values less than 0.
            Will be thrown if 'd' value equal to or less than 0.
            Will be thrown if 'd' value greater than 1.

### CreateMooneyRivlin\(IDocument, string\)

Create <xref href="VM.Managed.Material.MooneyRivlin" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateMooneyRivlin(this IDocument document, string name)
```

#### Parameters

`document` IDocument

The document to create the mooney-rivlin material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the mooney-rivlin material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.MooneyRivlin" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreateNeoHookean\(IDocument, string, ExpressionValueVariable, ExpressionValueVariable, bool, ExpressionValueVariable, ExpressionValueVariable\)

Create <xref href="VM.Managed.Material.NeoHookean" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateNeoHookean(this IDocument document, string name, ExpressionValueVariable density, ExpressionValueVariable dampingRatio, bool disableHScaleFactor, ExpressionValueVariable c10, ExpressionValueVariable d)
```

#### Parameters

`document` IDocument

The document to create the neo-hookean material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the neo-hookean material.

`density` ExpressionValueVariable

The density of the neo-hookean material.

`dampingRatio` ExpressionValueVariable

The stiffness proportional damping ratio for the nodal flexible and EasyFlex bodies.

`disableHScaleFactor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether to disable H Scale factor or not.

`c10` ExpressionValueVariable

The c10 to set the elastic constant which is corresponding to the Young’s modulus in the linear material.

`d` ExpressionValueVariable

The d to set the incompressibility parameter to determine a penalty of the volume constraint.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.NeoHookean" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'density', 'dampingRatio', 'c10' values less than 0.

### CreateNeoHookean\(IDocument, string\)

Create <xref href="VM.Managed.Material.NeoHookean" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateNeoHookean(this IDocument document, string name)
```

#### Parameters

`document` IDocument

The document to create the neo-hookean material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the neo-hookean material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.NeoHookean" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreateORTHO\(IDocument, string, ExpressionValueVariable, ExpressionValueVariable, bool, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Create <xref href="VM.Managed.Material.Ortho" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanOrEqualToZero(new string[] { "youngsModulusX", "youngsModulusY", "youngsModulusZ" })]
[GreaterThanZero(new string[] { "shearModulusXY", "shearModulusYZ", "shearModulusXZ" })]
public static Obj CreateORTHO(this IDocument document, string name, ExpressionValueVariable density, ExpressionValueVariable dampingRatio, bool disableHScaleFactor, ExpressionValueVariable youngsModulusX, ExpressionValueVariable youngsModulusY, ExpressionValueVariable youngsModulusZ, ExpressionValueVariable poissonRatioXY, ExpressionValueVariable poissonRatioYZ, ExpressionValueVariable poissonRatioXZ, ExpressionValueVariable shearModulusXY, ExpressionValueVariable shearModulusYZ, ExpressionValueVariable shearModulusXZ)
```

#### Parameters

`document` IDocument

The document to create the orthotropic material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the orthotropic material.

`density` ExpressionValueVariable

The density of the orthotropic material.

`dampingRatio` ExpressionValueVariable

The stiffness proportional damping ratio for the nodal flexible and EasyFlex bodies.

`disableHScaleFactor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether to disable H Scale factor or not.

`youngsModulusX` ExpressionValueVariable

The Young's modulus of x-direction of the orthotropic material.

`youngsModulusY` ExpressionValueVariable

The Young's modulus of y-direction of the orthotropic material.

`youngsModulusZ` ExpressionValueVariable

The Young's modulus of z-direction of the orthotropic material.

`poissonRatioXY` ExpressionValueVariable

The xy-Poisson’s ratio of the orthotropic material.

`poissonRatioYZ` ExpressionValueVariable

The yz-Poisson’s ratio of the orthotropic material.

`poissonRatioXZ` ExpressionValueVariable

The xz-Poisson’s ratio of the orthotropic material.

`shearModulusXY` ExpressionValueVariable

The xy-Shear modulus of the orthotropic material.

`shearModulusYZ` ExpressionValueVariable

The yz-Shear modulus of the orthotropic material.

`shearModulusXZ` ExpressionValueVariable

The xz-Shear modulus of the orthotropic material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.Ortho" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'density', 'dampingRatio', 'youngsModulusX', 'youngsModulusY', 'youngsModulusZ',
            'poissonRatioXY', 'poissonRatioYZ', 'poissonRatioXZ', 'shearModulusXY', 'shearModulusYZ', 'shearModulusXZ' values less than 0.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'poissonRatioXY', 'poissonRatioYZ', 'poissonRatioXZ' value is less than 0 or equal to 0.5 or more than 0.5.

### CreateORTHO\(IDocument, string\)

Create <xref href="VM.Managed.Material.Ortho" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateORTHO(this IDocument document, string name)
```

#### Parameters

`document` IDocument

The document to create the orthotropic material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the orthotropic material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.Ortho" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreateOgden\(IDocument, string, ExpressionValueVariable, ExpressionValueVariable, bool, IEnumerable<OgdenContents\>\)

Create <xref href="VM.Managed.Material.Ogden" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateOgden(this IDocument document, string name, ExpressionValueVariable density, ExpressionValueVariable dampingRatio, bool disableHScaleFactor, IEnumerable<OgdenContents> ogdenContents = null)
```

#### Parameters

`document` IDocument

The document to create the ogden material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the ogden material.

`density` ExpressionValueVariable

The density of the ogden material.

`dampingRatio` ExpressionValueVariable

The stiffness proportional damping ratio for the nodal flexible and EasyFlex bodies.

`disableHScaleFactor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether to disable H Scale factor or not.

`ogdenContents` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[OgdenContents](VM.API.Pre.OgdenContents.md)\>

The ogden contents array.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.Ogden" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'density', 'dampingRatio' values less than 0.

### CreateOgden\(IDocument, string\)

Create <xref href="VM.Managed.Material.Ogden" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateOgden(this IDocument document, string name)
```

#### Parameters

`document` IDocument

The document to create the ogden material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the ogden material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.Ogden" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreatePlasticBilinear\(IDocument, string, Obj, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Create <xref href="VM.Managed.Material.PlasticBilinear" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "linearMaterial" })]
[MatchTypeObj(new object[] { "linearMaterial", typeof(ISO) })]
public static Obj CreatePlasticBilinear(this IDocument document, string name, Obj linearMaterial, ExpressionValueVariable et, ExpressionValueVariable initialYieldingStress, ExpressionValueVariable linearKinematicHardening)
```

#### Parameters

`document` IDocument

The document to create the plastic bi-linear material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the plastic bi-linear material.

`linearMaterial` [Obj](VM.API.Pre.Obj.md)

The linear elastic material.

`et` ExpressionValueVariable

The plastic hardening modulus.

`initialYieldingStress` ExpressionValueVariable

The initial yielding stress.

`linearKinematicHardening` ExpressionValueVariable

The hardening type.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.PlasticBilinear" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'plasticHardeningModulus', 'initialYieldingStress', 'hardeningParameter' values less than 0.

### CreatePlasticBilinear\(IDocument, string, Obj\)

Create <xref href="VM.Managed.Material.PlasticBilinear" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreatePlasticBilinear(this IDocument document, string name, Obj linearMaterial)
```

#### Parameters

`document` IDocument

The document to create the plastic bi-linear material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the plastic bi-linear material.

`linearMaterial` [Obj](VM.API.Pre.Obj.md)

The linear elastic material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.PlasticBilinear" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreatePlasticMultilinear\(IDocument, string, Obj, ExpressionValueVariable, ExpressionValueVariable, Obj?\)

Create <xref href="VM.Managed.Material.PlasticMultilinear" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "linearMaterial" })]
[MatchTypeObj(new object[] { "linearMaterial", typeof(ISO) })]
public static Obj CreatePlasticMultilinear(this IDocument document, string name, Obj linearMaterial, ExpressionValueVariable initialYieldingStress, ExpressionValueVariable linearKinematicHardening, Obj? spline = null)
```

#### Parameters

`document` IDocument

The document to create the plastic multi-linear material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the plastic multi-linear material.

`linearMaterial` [Obj](VM.API.Pre.Obj.md)

The linear elastic material.

`initialYieldingStress` ExpressionValueVariable

The initial yielding stress.

`linearKinematicHardening` ExpressionValueVariable

The hardening type.

`spline` [Obj](VM.API.Pre.Obj.md)?

.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.PlasticMultilinear" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'plasticHardeningModulus', 'initialYieldingStress', 'hardeningParameter' values less than 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'spline' is not <xref href="VM.Managed.DAFUL.Spline" data-throw-if-not-resolved="false"></xref>.

### CreatePlasticMultilinear\(IDocument, string, Obj\)

Create <xref href="VM.Managed.Material.PlasticMultilinear" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreatePlasticMultilinear(this IDocument document, string name, Obj linearMaterial)
```

#### Parameters

`document` IDocument

The document to create the plastic multi-linear material.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the plastic multi-linear material.

`linearMaterial` [Obj](VM.API.Pre.Obj.md)

The linear elastic material.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Material.PlasticMultilinear" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### CreateSplineForMaterial\(Obj, IEnumerable<Point\>\)

Create spline for material.

```csharp
[NotNullObj(new string[] { "material" })]
public static Obj CreateSplineForMaterial(this Obj material, IEnumerable<SplineData.Point> data)
```

#### Parameters

`material` [Obj](VM.API.Pre.Obj.md)

The material to be updated.

`data` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<SplineData.Point\>

The data of spline X, Y.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.API.Pre.Obj" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'material' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'material' argument is not empty and type of 'body' is not SolidBody or Body.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'material' is not <xref href="VM.Managed.Material.PlasticMultilinear" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.Material.Foam" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the document type of 'material' is not <xref href="VM.Managed.Document3D" data-throw-if-not-resolved="false"></xref>.


