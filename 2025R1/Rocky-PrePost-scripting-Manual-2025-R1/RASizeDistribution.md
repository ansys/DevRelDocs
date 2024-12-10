# RASizeDistribution

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RASizeDistribution"></a>

### *class* RASizeDistribution

Rocky PrePost Scripting wrapper for a single entry in a single Particle’s size distribution list.

Access this wrapper from a given [`RAParticle`](RAParticle.md#generated.RAParticle) with:

```python
size_distribution_list = particle.GetSizeDistributionList()
distribution_1 = size_distribution_list.New()
distribution_1.SetSize(1.0, 'm')
distribution_1.SetCumulativePercentage(100)
```

**Methods:**

| [`GetCumulativePercentage`](#generated.RASizeDistribution.GetCumulativePercentage)()      | Get the value of "Cumulative Percentage".   |
|-------------------------------------------------------------------------------------------|---------------------------------------------|
| [`GetScaleFactor`](#generated.RASizeDistribution.GetScaleFactor)([unit])                  | Get the value of "Scale Factor".            |
| [`GetSize`](#generated.RASizeDistribution.GetSize)([unit])                                | Get the value of "Size".                    |
| [`SetCumulativePercentage`](#generated.RASizeDistribution.SetCumulativePercentage)(value) | Set the value of "Cumulative Percentage".   |
| [`SetScaleFactor`](#generated.RASizeDistribution.SetScaleFactor)(value[, unit])           | Set the value of "Scale Factor".            |
| [`SetSize`](#generated.RASizeDistribution.SetSize)(value[, unit])                         | Set the value of "Size".                    |

<a id="generated.RASizeDistribution.GetCumulativePercentage"></a>

#### GetCumulativePercentage()

Get the value of “Cumulative Percentage”.

<a id="generated.RASizeDistribution.GetScaleFactor"></a>

#### GetScaleFactor(unit: Optional[str] = None)

Get the value of “Scale Factor”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RASizeDistribution.GetSize"></a>

#### GetSize(unit: Optional[str] = None)

Get the value of “Size”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RASizeDistribution.SetCumulativePercentage"></a>

#### SetCumulativePercentage(value: Union[str, float])

Set the value of “Cumulative Percentage”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASizeDistribution.SetScaleFactor"></a>

#### SetScaleFactor(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Scale Factor”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RASizeDistribution.SetSize"></a>

#### SetSize(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Size”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.
