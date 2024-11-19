

# RACFDPerParticleParameters

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RACFDPerParticleParameters"></a>

### *class* RACFDPerParticleParameters

Rocky PrePost Scripting wrapper representing the set of CFD parameters for a specific Particle.

Access individual sets of parameters via a `RABaseCFDCoupling`’s parameters list:

```python
parameters_list = coupling_process.GetCFDParametersList()
parameters = parameters_list.GetParametersFor('Particle <01>')
```

**Methods:**

| [`GetConvectiveHeatTransferLaw`](#generated.RACFDPerParticleParameters.GetConvectiveHeatTransferLaw)()                       | Get "Convective Heat Transfer Law" as a string.                       |
|------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`GetDragLaw`](#generated.RACFDPerParticleParameters.GetDragLaw)()                                                           | Get "Drag Law" as a string.                                           |
| [`GetLiftLaw`](#generated.RACFDPerParticleParameters.GetLiftLaw)()                                                           | Get "Lift Law" as a string.                                           |
| [`GetMorsiAndAlexanderK1`](#generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK1)()                                   | Get the value of "Morsi And Alexander K1".                            |
| [`GetMorsiAndAlexanderK2`](#generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK2)()                                   | Get the value of "Morsi And Alexander K2".                            |
| [`GetMorsiAndAlexanderK3`](#generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK3)()                                   | Get the value of "Morsi And Alexander K3".                            |
| [`GetSyamlalObrienC1`](#generated.RACFDPerParticleParameters.GetSyamlalObrienC1)()                                           | Get the value of "Syamlal Obrien C1".                                 |
| [`GetSyamlalObrienD1`](#generated.RACFDPerParticleParameters.GetSyamlalObrienD1)()                                           | Get the value of "Syamlal Obrien D1".                                 |
| [`GetTorqueLaw`](#generated.RACFDPerParticleParameters.GetTorqueLaw)()                                                       | Get "Torque Law" as a string.                                         |
| [`GetUseUserDefinedConstants`](#generated.RACFDPerParticleParameters.GetUseUserDefinedConstants)()                           | Get the value of "Use User Defined Constants".                        |
| [`GetValidConvectiveHeatTransferLawValues`](#generated.RACFDPerParticleParameters.GetValidConvectiveHeatTransferLawValues)() | Get a list of all possible values for "Convective Heat Transfer Law". |
| [`GetValidDragLawValues`](#generated.RACFDPerParticleParameters.GetValidDragLawValues)()                                     | Get a list of all possible values for "Drag Law".                     |
| [`GetValidLiftLawValues`](#generated.RACFDPerParticleParameters.GetValidLiftLawValues)()                                     | Get a list of all possible values for "Lift Law".                     |
| [`GetValidTorqueLawValues`](#generated.RACFDPerParticleParameters.GetValidTorqueLawValues)()                                 | Get a list of all possible values for "Torque Law".                   |
| [`GetValidVirtualMassLawValues`](#generated.RACFDPerParticleParameters.GetValidVirtualMassLawValues)()                       | Get a list of all possible values for "Virtual Mass Law".             |
| [`GetVirtualMassLaw`](#generated.RACFDPerParticleParameters.GetVirtualMassLaw)()                                             | Get "Virtual Mass Law" as a string.                                   |
| [`SetConvectiveHeatTransferLaw`](#generated.RACFDPerParticleParameters.SetConvectiveHeatTransferLaw)(value)                  | Set the value of "Convective Heat Transfer Law".                      |
| [`SetDragLaw`](#generated.RACFDPerParticleParameters.SetDragLaw)(value)                                                      | Set the value of "Drag Law".                                          |
| [`SetLiftLaw`](#generated.RACFDPerParticleParameters.SetLiftLaw)(value)                                                      | Set the value of "Lift Law".                                          |
| [`SetMorsiAndAlexanderK1`](#generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK1)(value)                              | Set the value of "Morsi And Alexander K1".                            |
| [`SetMorsiAndAlexanderK2`](#generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK2)(value)                              | Set the value of "Morsi And Alexander K2".                            |
| [`SetMorsiAndAlexanderK3`](#generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK3)(value)                              | Set the value of "Morsi And Alexander K3".                            |
| [`SetSyamlalObrienC1`](#generated.RACFDPerParticleParameters.SetSyamlalObrienC1)(value)                                      | Set the value of "Syamlal Obrien C1".                                 |
| [`SetSyamlalObrienD1`](#generated.RACFDPerParticleParameters.SetSyamlalObrienD1)(value)                                      | Set the value of "Syamlal Obrien D1".                                 |
| [`SetTorqueLaw`](#generated.RACFDPerParticleParameters.SetTorqueLaw)(value)                                                  | Set the value of "Torque Law".                                        |
| [`SetUseUserDefinedConstants`](#generated.RACFDPerParticleParameters.SetUseUserDefinedConstants)(value)                      | Set the value of "Use User Defined Constants".                        |
| [`SetVirtualMassLaw`](#generated.RACFDPerParticleParameters.SetVirtualMassLaw)(value)                                        | Set the value of "Virtual Mass Law".                                  |

<a id="generated.RACFDPerParticleParameters.GetConvectiveHeatTransferLaw"></a>

#### GetConvectiveHeatTransferLaw()

Get “Convective Heat Transfer Law” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘RanzMarshall1952’, ‘Whitaker1972’, ‘Gunn1978’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.GetDragLaw"></a>

#### GetDragLaw()

Get “Drag Law” as a string.

* **Returns:**
  The returned value will be one of [‘WenYu1966’, ‘SchillerNaumann1933’, ‘HaiderLevenspiel1989’, ‘Ganser1993’, ‘Ergun1958’, ‘GidaspowBezburuahDing1992’, ‘HuilinGidaspow2003’, ‘DiFelice1994’, ‘Dallavalle1948’, ‘MarheinekeWegener2011’, ‘SyamlalOBrien1987’, ‘MorsiAlexander1972’, ‘HillKochLadd2001’, ‘HillKoch2001’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.GetLiftLaw"></a>

#### GetLiftLaw()

Get “Lift Law” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘Saffman1968’, ‘Mei1992’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK1"></a>

#### GetMorsiAndAlexanderK1()

Get the value of “Morsi And Alexander K1”.

<a id="generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK2"></a>

#### GetMorsiAndAlexanderK2()

Get the value of “Morsi And Alexander K2”.

<a id="generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK3"></a>

#### GetMorsiAndAlexanderK3()

Get the value of “Morsi And Alexander K3”.

<a id="generated.RACFDPerParticleParameters.GetSyamlalObrienC1"></a>

#### GetSyamlalObrienC1()

Get the value of “Syamlal Obrien C1”.

<a id="generated.RACFDPerParticleParameters.GetSyamlalObrienD1"></a>

#### GetSyamlalObrienD1()

Get the value of “Syamlal Obrien D1”.

<a id="generated.RACFDPerParticleParameters.GetTorqueLaw"></a>

#### GetTorqueLaw()

Get “Torque Law” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘DennisSinghIngham1980’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.GetUseUserDefinedConstants"></a>

#### GetUseUserDefinedConstants()

Get the value of “Use User Defined Constants”.

<a id="generated.RACFDPerParticleParameters.GetValidConvectiveHeatTransferLawValues"></a>

#### GetValidConvectiveHeatTransferLawValues()

Get a list of all possible values for “Convective Heat Transfer Law”.

* **Returns:**
  The returned list is [‘none’, ‘RanzMarshall1952’, ‘Whitaker1972’, ‘Gunn1978’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.GetValidDragLawValues"></a>

#### GetValidDragLawValues()

Get a list of all possible values for “Drag Law”.

* **Returns:**
  The returned list is [‘WenYu1966’, ‘SchillerNaumann1933’, ‘HaiderLevenspiel1989’, ‘Ganser1993’, ‘Ergun1958’, ‘GidaspowBezburuahDing1992’, ‘HuilinGidaspow2003’, ‘DiFelice1994’, ‘Dallavalle1948’, ‘MarheinekeWegener2011’, ‘SyamlalOBrien1987’, ‘MorsiAlexander1972’, ‘HillKochLadd2001’, ‘HillKoch2001’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.GetValidLiftLawValues"></a>

#### GetValidLiftLawValues()

Get a list of all possible values for “Lift Law”.

* **Returns:**
  The returned list is [‘none’, ‘Saffman1968’, ‘Mei1992’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.GetValidTorqueLawValues"></a>

#### GetValidTorqueLawValues()

Get a list of all possible values for “Torque Law”.

* **Returns:**
  The returned list is [‘none’, ‘DennisSinghIngham1980’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.GetValidVirtualMassLawValues"></a>

#### GetValidVirtualMassLawValues()

Get a list of all possible values for “Virtual Mass Law”.

* **Returns:**
  The returned list is [‘none’, ‘constant’, ‘Paladino2005’, ‘IshiiMishima1984’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.GetVirtualMassLaw"></a>

#### GetVirtualMassLaw()

Get “Virtual Mass Law” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘constant’, ‘Paladino2005’, ‘IshiiMishima1984’, ‘custom’].

<a id="generated.RACFDPerParticleParameters.SetConvectiveHeatTransferLaw"></a>

#### SetConvectiveHeatTransferLaw(value: str)

Set the value of “Convective Heat Transfer Law”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘RanzMarshall1952’, ‘Whitaker1972’, ‘Gunn1978’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Convective Heat Transfer Law” option.

<a id="generated.RACFDPerParticleParameters.SetDragLaw"></a>

#### SetDragLaw(value: str)

Set the value of “Drag Law”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘WenYu1966’, ‘SchillerNaumann1933’, ‘HaiderLevenspiel1989’, ‘Ganser1993’, ‘Ergun1958’, ‘GidaspowBezburuahDing1992’, ‘HuilinGidaspow2003’, ‘DiFelice1994’, ‘Dallavalle1948’, ‘MarheinekeWegener2011’, ‘SyamlalOBrien1987’, ‘MorsiAlexander1972’, ‘HillKochLadd2001’, ‘HillKoch2001’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Drag Law” option.

<a id="generated.RACFDPerParticleParameters.SetLiftLaw"></a>

#### SetLiftLaw(value: str)

Set the value of “Lift Law”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘Saffman1968’, ‘Mei1992’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Lift Law” option.

<a id="generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK1"></a>

#### SetMorsiAndAlexanderK1(value: Union[str, float])

Set the value of “Morsi And Alexander K1”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK2"></a>

#### SetMorsiAndAlexanderK2(value: Union[str, float])

Set the value of “Morsi And Alexander K2”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK3"></a>

#### SetMorsiAndAlexanderK3(value: Union[str, float])

Set the value of “Morsi And Alexander K3”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RACFDPerParticleParameters.SetSyamlalObrienC1"></a>

#### SetSyamlalObrienC1(value: Union[str, float])

Set the value of “Syamlal Obrien C1”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RACFDPerParticleParameters.SetSyamlalObrienD1"></a>

#### SetSyamlalObrienD1(value: Union[str, float])

Set the value of “Syamlal Obrien D1”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RACFDPerParticleParameters.SetTorqueLaw"></a>

#### SetTorqueLaw(value: str)

Set the value of “Torque Law”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘DennisSinghIngham1980’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Torque Law” option.

<a id="generated.RACFDPerParticleParameters.SetUseUserDefinedConstants"></a>

#### SetUseUserDefinedConstants(value: bool)

Set the value of “Use User Defined Constants”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RACFDPerParticleParameters.SetVirtualMassLaw"></a>

#### SetVirtualMassLaw(value: str)

Set the value of “Virtual Mass Law”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘constant’, ‘Paladino2005’, ‘IshiiMishima1984’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Virtual Mass Law” option.
