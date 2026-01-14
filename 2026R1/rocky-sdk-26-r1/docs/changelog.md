# Changelog

### Release notes for 2025 R2

#### Added
- `ROCKY_PLUGIN_MOLECULAR_VISCOSITY_ON_SPH_ELEMENTS` hook.
- `ROCKY_PLUGIN_HEAT_TRANSFER_COEFFICIENT_CORRELATION_ON_TRIANGLES` hook.
- `IRockySPHElement::get_temperature()` method.
- `IRockySPHElement::get_molecular_viscosity()` method.
- `IRockySPHElement::set_molecular_viscosity()` method.
- `IRockyModel::get_viscosity_factor()` method.
- `IRockyFluidScalarsModel::find_species_scalar()` method.
- `IRockyFluidScalarsModel::get_scalar_name()` method.
- `IRockyFluidScalarsModel::get_scalar_unit()` method.
- `IRockyCFDModel::is_single_phase()` method.
- `IRockyCFDModel::has_species()` method.
- `IRockyCFDModel::get_phase_names()` method.
- `IRockyCFDModel::get_species_names()` method.
- `IRockyCFDModel::get_primary_phase_name()` method.
- `IRockyParticleHost::get_particle_group_index()` method.
- `IRockySPHModel::set_htc_distance_factor()` method.
- `IRockySPHModel::has_variable_molecular_viscosity()` method.
- `IRockyModel::get_power_factor()` method.
- `IRockyGeometryTriangle::get_triangle_center_velocity()` method.

#### Deprecated
- `IRockySPHDeviceModel::get_fluid_viscosity()` method.
- `IRockySPHTriangleInteraction::get_wall_turbulent_thermal_conductance()` method.

#### Removed
- `ROCKY_PLUGIN_FORCE_ON_SPH_ELEMENT_INTERACTIONS` and `ROCKY_PLUGIN_FORCE_ON_SPH_TRIANGLE_INTERACTIONS` hooks were removed. Consider using `ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_ELEMENT_INTERACTIONS` or `ROCKY_PLUGIN_VISCOUS_ACCELERATIONS_ON_SPH_ELEMENT_INTERACTIONS` for model specific implementations or pre/post force interactions hooks.


### Release notes for 2025 R1

#### Added
- `IRockySPHElementScalarsModel::enable_velocity_gradient()` method.
- `IRockySPHElement::get_strain_rate_tensor()` method.
- `IRockySPHElementScalars::get_velocity_gradient_x()` method.
- `IRockySPHElementScalars::get_velocity_gradient_y()` method.
- `IRockySPHElementScalars::get_velocity_gradient_z()` method.

#### Deprecated
- `ROCKY_PLUGIN_COMPUTE_ADHESIVE_DISTANCES` hook was deprecated. Adhesive distances can be set on `ROCKY_PLUGIN_INITIALIZE` or `ROCKY_PLUGIN_BEGIN_ITERATION`.
- `ROCKY_PLUGIN_FORCE_ON_SPH_ELEMENT_INTERACTIONS` hook was deprecated. Consider using `ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_ELEMENT_INTERACTIONS` or `ROCKY_PLUGIN_VISCOUS_ACCELERATIONS_ON_SPH_ELEMENT_INTERACTIONS` for model specific implementations.
- `ROCKY_PLUGIN_FORCE_ON_SPH_TRIANGLE_INTERACTIONS` hook was deprecated. Consider using `ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_TRIANGLE_INTERACTIONS` or `ROCKY_PLUGIN_VISCOUS_ACCELERATIONS_ON_SPH_TRIANGLE_INTERACTIONS` specific implementations.
