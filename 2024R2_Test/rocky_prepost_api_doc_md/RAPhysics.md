# RAPhysics

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAPhysics

Rocky API wrapper to manipulate physics properties.

This class represents the “Physics” item on the project data tree. To get the [`RAPhysics`](#generated.RAPhysics)
from a [`RAStudy`](RAStudy.md#generated.RAStudy), use:

```python
physics = study.GetPhysics()
```

**Methods:**

| [`GetAdhesionModel`](#generated.RAPhysics.GetAdhesionModel)()                                           | Get "Adhesion Model" as a string.                                   |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`GetClosePackingVolumeFraction`](#generated.RAPhysics.GetClosePackingVolumeFraction)()                 | Get the value of "Close Packing Volume Fraction".                   |
| [`GetEnableCoarseGrainModeling`](#generated.RAPhysics.GetEnableCoarseGrainModeling)()                   | Get the value of "Enable Coarse Grain Modeling".                    |
| [`GetEnableThermalModel`](#generated.RAPhysics.GetEnableThermalModel)()                                 | Get the value of "Enable Thermal Model".                            |
| [`GetExponentLimit`](#generated.RAPhysics.GetExponentLimit)()                                           | Get the value of "Exponent Limit".                                  |
| [`GetGravityStartTime`](#generated.RAPhysics.GetGravityStartTime)([unit])                               | Get the value of "Gravity Start Time".                              |
| [`GetGravityStopTime`](#generated.RAPhysics.GetGravityStopTime)([unit])                                 | Get the value of "Gravity Stop Time".                               |
| [`GetGravityXDirection`](#generated.RAPhysics.GetGravityXDirection)([unit])                             | Get the value of "Gravity X Direction".                             |
| [`GetGravityYDirection`](#generated.RAPhysics.GetGravityYDirection)([unit])                             | Get the value of "Gravity Y Direction".                             |
| [`GetGravityZDirection`](#generated.RAPhysics.GetGravityZDirection)([unit])                             | Get the value of "Gravity Z Direction".                             |
| [`GetImpactEnergyModel`](#generated.RAPhysics.GetImpactEnergyModel)()                                   | Get "Impact Energy Model" as a string.                              |
| [`GetNormalForceModel`](#generated.RAPhysics.GetNormalForceModel)()                                     | Get "Normal Force Model" as a string.                               |
| [`GetNumericalSofteningFactor`](#generated.RAPhysics.GetNumericalSofteningFactor)()                     | Get the value of "Numerical Softening Factor".                      |
| [`GetRestitutionModel`](#generated.RAPhysics.GetRestitutionModel)()                                     | Get "Restitution Model" as a string.                                |
| [`GetRollingResistanceModel`](#generated.RAPhysics.GetRollingResistanceModel)()                         | Get "Rolling Resistance Model" as a string.                         |
| [`GetSearchDistanceMultiplier`](#generated.RAPhysics.GetSearchDistanceMultiplier)()                     | Get the value of "Search Distance Multiplier".                      |
| [`GetSphThermalTransferModel`](#generated.RAPhysics.GetSphThermalTransferModel)()                       | Get "Sph Thermal Transfer Model" as a string.                       |
| [`GetTangentialForceModel`](#generated.RAPhysics.GetTangentialForceModel)()                             | Get "Tangential Force Model" as a string.                           |
| [`GetThermalCorrectionModel`](#generated.RAPhysics.GetThermalCorrectionModel)()                         | Get "Thermal Correction Model" as a string.                         |
| [`GetUpdateDistanceMultiplier`](#generated.RAPhysics.GetUpdateDistanceMultiplier)()                     | Get the value of "Update Distance Multiplier".                      |
| [`GetUseRadlEtAl`](#generated.RAPhysics.GetUseRadlEtAl)()                                               | Get the value of "Use Radl Et Al".                                  |
| [`GetValidAdhesionModelValues`](#generated.RAPhysics.GetValidAdhesionModelValues)()                     | Get a list of all possible values for "Adhesion Model".             |
| [`GetValidImpactEnergyModelValues`](#generated.RAPhysics.GetValidImpactEnergyModelValues)()             | Get a list of all possible values for "Impact Energy Model".        |
| [`GetValidNormalForceModelValues`](#generated.RAPhysics.GetValidNormalForceModelValues)()               | Get a list of all possible values for "Normal Force Model".         |
| [`GetValidRestitutionModelValues`](#generated.RAPhysics.GetValidRestitutionModelValues)()               | Get a list of all possible values for "Restitution Model".          |
| [`GetValidRollingResistanceModelValues`](#generated.RAPhysics.GetValidRollingResistanceModelValues)()   | Get a list of all possible values for "Rolling Resistance Model".   |
| [`GetValidSphThermalTransferModelValues`](#generated.RAPhysics.GetValidSphThermalTransferModelValues)() | Get a list of all possible values for "Sph Thermal Transfer Model". |
| [`GetValidTangentialForceModelValues`](#generated.RAPhysics.GetValidTangentialForceModelValues)()       | Get a list of all possible values for "Tangential Force Model".     |
| [`GetValidThermalCorrectionModelValues`](#generated.RAPhysics.GetValidThermalCorrectionModelValues)()   | Get a list of all possible values for "Thermal Correction Model".   |
| [`GetVolumeFractionLimit`](#generated.RAPhysics.GetVolumeFractionLimit)()                               | Get the value of "Volume Fraction Limit".                           |
| [`SetAdhesionModel`](#generated.RAPhysics.SetAdhesionModel)(value)                                      | Set the value of "Adhesion Model".                                  |
| [`SetClosePackingVolumeFraction`](#generated.RAPhysics.SetClosePackingVolumeFraction)(value)            | Set the value of "Close Packing Volume Fraction".                   |
| [`SetEnableCoarseGrainModeling`](#generated.RAPhysics.SetEnableCoarseGrainModeling)(value)              | Set the value of "Enable Coarse Grain Modeling".                    |
| [`SetEnableThermalModel`](#generated.RAPhysics.SetEnableThermalModel)(value)                            | Set the value of "Enable Thermal Model".                            |
| [`SetExponentLimit`](#generated.RAPhysics.SetExponentLimit)(value)                                      | Set the value of "Exponent Limit".                                  |
| [`SetGravityStartTime`](#generated.RAPhysics.SetGravityStartTime)(value[, unit])                        | Set the value of "Gravity Start Time".                              |
| [`SetGravityStopTime`](#generated.RAPhysics.SetGravityStopTime)(value[, unit])                          | Set the value of "Gravity Stop Time".                               |
| [`SetGravityXDirection`](#generated.RAPhysics.SetGravityXDirection)(value[, unit])                      | Set the value of "Gravity X Direction".                             |
| [`SetGravityYDirection`](#generated.RAPhysics.SetGravityYDirection)(value[, unit])                      | Set the value of "Gravity Y Direction".                             |
| [`SetGravityZDirection`](#generated.RAPhysics.SetGravityZDirection)(value[, unit])                      | Set the value of "Gravity Z Direction".                             |
| [`SetImpactEnergyModel`](#generated.RAPhysics.SetImpactEnergyModel)(value)                              | Set the value of "Impact Energy Model".                             |
| [`SetNormalForceModel`](#generated.RAPhysics.SetNormalForceModel)(value)                                | Set the value of "Normal Force Model".                              |
| [`SetNumericalSofteningFactor`](#generated.RAPhysics.SetNumericalSofteningFactor)(value)                | Set the value of "Numerical Softening Factor".                      |
| [`SetRestitutionModel`](#generated.RAPhysics.SetRestitutionModel)(value)                                | Set the value of "Restitution Model".                               |
| [`SetRollingResistanceModel`](#generated.RAPhysics.SetRollingResistanceModel)(value)                    | Set the value of "Rolling Resistance Model".                        |
| [`SetSearchDistanceMultiplier`](#generated.RAPhysics.SetSearchDistanceMultiplier)(value)                | Set the value of "Search Distance Multiplier".                      |
| [`SetSphThermalTransferModel`](#generated.RAPhysics.SetSphThermalTransferModel)(value)                  | Set the value of "Sph Thermal Transfer Model".                      |
| [`SetTangentialForceModel`](#generated.RAPhysics.SetTangentialForceModel)(value)                        | Set the value of "Tangential Force Model".                          |
| [`SetThermalCorrectionModel`](#generated.RAPhysics.SetThermalCorrectionModel)(value)                    | Set the value of "Thermal Correction Model".                        |
| [`SetUpdateDistanceMultiplier`](#generated.RAPhysics.SetUpdateDistanceMultiplier)(value)                | Set the value of "Update Distance Multiplier".                      |
| [`SetUseRadlEtAl`](#generated.RAPhysics.SetUseRadlEtAl)(value)                                          | Set the value of "Use Radl Et Al".                                  |
| [`SetVolumeFractionLimit`](#generated.RAPhysics.SetVolumeFractionLimit)(value)                          | Set the value of "Volume Fraction Limit".                           |

#### GetAdhesionModel()

Get “Adhesion Model” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘constant’, ‘linear’, ‘JKR’, ‘custom’].

#### GetClosePackingVolumeFraction()

Get the value of “Close Packing Volume Fraction”.

#### GetEnableCoarseGrainModeling()

Get the value of “Enable Coarse Grain Modeling”.

#### GetEnableThermalModel()

Get the value of “Enable Thermal Model”.

#### GetExponentLimit()

Get the value of “Exponent Limit”.

#### GetGravityStartTime(unit: Optional[str] = None)

Get the value of “Gravity Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetGravityStopTime(unit: Optional[str] = None)

Get the value of “Gravity Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetGravityXDirection(unit: Optional[str] = None)

Get the value of “Gravity X Direction”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s2”.

#### GetGravityYDirection(unit: Optional[str] = None)

Get the value of “Gravity Y Direction”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s2”.

#### GetGravityZDirection(unit: Optional[str] = None)

Get the value of “Gravity Z Direction”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s2”.

#### GetImpactEnergyModel()

Get “Impact Energy Model” as a string.

* **Returns:**
  The returned value will be one of [‘default’, ‘custom’].

#### GetNormalForceModel()

Get “Normal Force Model” as a string.

* **Returns:**
  The returned value will be one of [‘linear_hysteresis’, ‘linear_elastic_viscous’, ‘damped_hertzian’, ‘custom’].

#### GetNumericalSofteningFactor()

Get the value of “Numerical Softening Factor”.

#### GetRestitutionModel()

Get “Restitution Model” as a string.

* **Returns:**
  The returned value will be one of [‘constant’, ‘velocity_dependent’].

#### GetRollingResistanceModel()

Get “Rolling Resistance Model” as a string.

* **Returns:**
  The returned value will be one of [‘type_1’, ‘type_3’, ‘none’, ‘custom’].

#### GetSearchDistanceMultiplier()

Get the value of “Search Distance Multiplier”.

#### GetSphThermalTransferModel()

Get “Sph Thermal Transfer Model” as a string.

* **Returns:**
  The returned value will be one of [‘cleary’, ‘custom’].

#### GetTangentialForceModel()

Get “Tangential Force Model” as a string.

* **Returns:**
  The returned value will be one of [‘elastic_coulomb’, ‘coulomb_limit’, ‘mindlin_deresiewicz’, ‘custom’].

#### GetThermalCorrectionModel()

Get “Thermal Correction Model” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘morris_et_al_area’, ‘morris_et_al_area_time’].

#### GetUpdateDistanceMultiplier()

Get the value of “Update Distance Multiplier”.

#### GetUseRadlEtAl()

Get the value of “Use Radl Et Al”.

#### GetValidAdhesionModelValues()

Get a list of all possible values for “Adhesion Model”.

* **Returns:**
  The returned list is [‘none’, ‘constant’, ‘linear’, ‘JKR’, ‘custom’].

#### GetValidImpactEnergyModelValues()

Get a list of all possible values for “Impact Energy Model”.

* **Returns:**
  The returned list is [‘default’, ‘custom’].

#### GetValidNormalForceModelValues()

Get a list of all possible values for “Normal Force Model”.

* **Returns:**
  The returned list is [‘linear_hysteresis’, ‘linear_elastic_viscous’, ‘damped_hertzian’, ‘custom’].

#### GetValidRestitutionModelValues()

Get a list of all possible values for “Restitution Model”.

* **Returns:**
  The returned list is [‘constant’, ‘velocity_dependent’].

#### GetValidRollingResistanceModelValues()

Get a list of all possible values for “Rolling Resistance Model”.

* **Returns:**
  The returned list is [‘type_1’, ‘type_3’, ‘none’, ‘custom’].

#### GetValidSphThermalTransferModelValues()

Get a list of all possible values for “Sph Thermal Transfer Model”.

* **Returns:**
  The returned list is [‘cleary’, ‘custom’].

#### GetValidTangentialForceModelValues()

Get a list of all possible values for “Tangential Force Model”.

* **Returns:**
  The returned list is [‘elastic_coulomb’, ‘coulomb_limit’, ‘mindlin_deresiewicz’, ‘custom’].

#### GetValidThermalCorrectionModelValues()

Get a list of all possible values for “Thermal Correction Model”.

* **Returns:**
  The returned list is [‘none’, ‘morris_et_al_area’, ‘morris_et_al_area_time’].

#### GetVolumeFractionLimit()

Get the value of “Volume Fraction Limit”.

#### SetAdhesionModel(value: str)

Set the value of “Adhesion Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘constant’, ‘linear’, ‘JKR’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Adhesion Model” option.

#### SetClosePackingVolumeFraction(value: Union[str, float])

Set the value of “Close Packing Volume Fraction”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetEnableCoarseGrainModeling(value: bool)

Set the value of “Enable Coarse Grain Modeling”.

* **Parameters:**
  **value** – The value to set.

#### SetEnableThermalModel(value: bool)

Set the value of “Enable Thermal Model”.

* **Parameters:**
  **value** – The value to set.

#### SetExponentLimit(value: Union[str, float])

Set the value of “Exponent Limit”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetGravityStartTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Gravity Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetGravityStopTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Gravity Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetGravityXDirection(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Gravity X Direction”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s2”.

#### SetGravityYDirection(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Gravity Y Direction”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s2”.

#### SetGravityZDirection(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Gravity Z Direction”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s2”.

#### SetImpactEnergyModel(value: str)

Set the value of “Impact Energy Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘default’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Impact Energy Model” option.

#### SetNormalForceModel(value: str)

Set the value of “Normal Force Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘linear_hysteresis’, ‘linear_elastic_viscous’, ‘damped_hertzian’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Normal Force Model” option.

#### SetNumericalSofteningFactor(value: Union[str, float])

Set the value of “Numerical Softening Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetRestitutionModel(value: str)

Set the value of “Restitution Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘constant’, ‘velocity_dependent’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Restitution Model” option.

#### SetRollingResistanceModel(value: str)

Set the value of “Rolling Resistance Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘type_1’, ‘type_3’, ‘none’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Rolling Resistance Model” option.

#### SetSearchDistanceMultiplier(value: Union[str, float])

Set the value of “Search Distance Multiplier”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetSphThermalTransferModel(value: str)

Set the value of “Sph Thermal Transfer Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘cleary’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Sph Thermal Transfer Model” option.

#### SetTangentialForceModel(value: str)

Set the value of “Tangential Force Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘elastic_coulomb’, ‘coulomb_limit’, ‘mindlin_deresiewicz’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Tangential Force Model” option.

#### SetThermalCorrectionModel(value: str)

Set the value of “Thermal Correction Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘morris_et_al_area’, ‘morris_et_al_area_time’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Thermal Correction Model” option.

#### SetUpdateDistanceMultiplier(value: Union[str, float])

Set the value of “Update Distance Multiplier”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetUseRadlEtAl(value: bool)

Set the value of “Use Radl Et Al”.

* **Parameters:**
  **value** – The value to set.

#### SetVolumeFractionLimit(value: Union[str, float])

Set the value of “Volume Fraction Limit”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.
