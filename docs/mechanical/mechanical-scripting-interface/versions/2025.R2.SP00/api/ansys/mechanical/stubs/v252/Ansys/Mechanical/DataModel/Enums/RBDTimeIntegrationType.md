# `RBDTimeIntegrationType`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

Create a collection of name/value pairs.

Example enumeration:

```pycon
>>> class Color(Enum):
...     RED = 1
...     BLUE = 2
...     GREEN = 3
```

Access them by:

- attribute access:
  ```pycon
  >>> Color.RED
  <Color.RED: 1>
  ```
- value lookup:
  ```pycon
  >>> Color(1)
  <Color.RED: 1>
  ```
- name lookup:
  ```pycon
  >>> Color['RED']
  <Color.RED: 1>
  ```

Enumerations can be iterated over, and know how many members they have:

```pycon
>>> len(Color)
3
```

```pycon
>>> list(Color)
[<Color.RED: 1>, <Color.BLUE: 2>, <Color.GREEN: 3>]
```

Methods can be added to enumerations, and members can have their own
attributes – see the documentation for details.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| ------------------------------------------------------------------------------------ |
| [`GeneralizedAlpha`](#RBDTimeIntegrationType.GeneralizedAlpha) |
| [`HalfExplicitMethod5`](#RBDTimeIntegrationType.HalfExplicitMethod5) |
| [`HybridIntegration`](#RBDTimeIntegrationType.HybridIntegration) |
| [`NonSmoothGeneralizedAlpha`](#RBDTimeIntegrationType.NonSmoothGeneralizedAlpha) |
| [`PredictEvaluateCorrect`](#RBDTimeIntegrationType.PredictEvaluateCorrect) |
| [`ProgramControlled`](#RBDTimeIntegrationType.ProgramControlled) |
| [`RungeKutta4`](#RBDTimeIntegrationType.RungeKutta4) |
| [`RungeKutta5`](#RBDTimeIntegrationType.RungeKutta5) |
| [`RungeKuttaBogackiShampine3`](#RBDTimeIntegrationType.RungeKuttaBogackiShampine3) |
| [`RungeKuttaDormandPrince5`](#RBDTimeIntegrationType.RungeKuttaDormandPrince5) |
| [`RungeKuttaHeunEuler2`](#RBDTimeIntegrationType.RungeKuttaHeunEuler2) |
| [`StabilizedGeneralizedAlpha`](#RBDTimeIntegrationType.StabilizedGeneralizedAlpha) |
| [`TimeSteppingNSCD`](#RBDTimeIntegrationType.TimeSteppingNSCD) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="RBDTimeIntegrationType.GeneralizedAlpha"></a>

### RBDTimeIntegrationType.GeneralizedAlpha *= 6*

<a id="RBDTimeIntegrationType.HalfExplicitMethod5"></a>

### RBDTimeIntegrationType.HalfExplicitMethod5 *= 2*

<a id="RBDTimeIntegrationType.HybridIntegration"></a>

### RBDTimeIntegrationType.HybridIntegration *= 8*

<a id="RBDTimeIntegrationType.NonSmoothGeneralizedAlpha"></a>

### RBDTimeIntegrationType.NonSmoothGeneralizedAlpha *= 12*

<a id="RBDTimeIntegrationType.PredictEvaluateCorrect"></a>

### RBDTimeIntegrationType.PredictEvaluateCorrect *= 11*

<a id="RBDTimeIntegrationType.ProgramControlled"></a>

### RBDTimeIntegrationType.ProgramControlled *= 9*

<a id="RBDTimeIntegrationType.RungeKutta4"></a>

### RBDTimeIntegrationType.RungeKutta4 *= 0*

<a id="RBDTimeIntegrationType.RungeKutta5"></a>

### RBDTimeIntegrationType.RungeKutta5 *= 1*

<a id="RBDTimeIntegrationType.RungeKuttaBogackiShampine3"></a>

### RBDTimeIntegrationType.RungeKuttaBogackiShampine3 *= 5*

<a id="RBDTimeIntegrationType.RungeKuttaDormandPrince5"></a>

### RBDTimeIntegrationType.RungeKuttaDormandPrince5 *= 3*

<a id="RBDTimeIntegrationType.RungeKuttaHeunEuler2"></a>

### RBDTimeIntegrationType.RungeKuttaHeunEuler2 *= 4*

<a id="RBDTimeIntegrationType.StabilizedGeneralizedAlpha"></a>

### RBDTimeIntegrationType.StabilizedGeneralizedAlpha *= 10*

<a id="RBDTimeIntegrationType.TimeSteppingNSCD"></a>

### RBDTimeIntegrationType.TimeSteppingNSCD *= 7*


