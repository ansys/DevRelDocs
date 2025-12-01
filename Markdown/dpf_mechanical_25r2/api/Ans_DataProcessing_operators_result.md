---
uid: Ans.DataProcessing.operators.result
---

# Ans.DataProcessing.operators.result Namespace

## Classes

| Class | Description |
|-------|-------------|
| [acceleration](Ans_DataProcessing_operators_result_acceleration.md) | acceleration() |
| [acceleration_X](Ans_DataProcessing_operators_result_acceleration_X.md) | acceleration_X() |
| [acceleration_Y](Ans_DataProcessing_operators_result_acceleration_Y.md) | acceleration_Y() |
| [acceleration_Z](Ans_DataProcessing_operators_result_acceleration_Z.md) | acceleration_Z() |
| [accu_eqv_creep_strain](Ans_DataProcessing_operators_result_accu_eqv_creep_strain.md) | accu_eqv_creep_strain() |
| [accu_eqv_plastic_strain](Ans_DataProcessing_operators_result_accu_eqv_plastic_strain.md) | accu_eqv_plastic_strain() |
| [add_rigid_body_motion](Ans_DataProcessing_operators_result_add_rigid_body_motion.md) | Adds a given rigid translation, center and rotation from a displacement field. The rotation is given in terms of rotations angles. Note that the displacement field has to be in the global coordinate system   ///available inputs: displacement_field (Field), translation_field (Field), rotation_field (Field), center_field (Field), mesh (MeshedRegion) (optional) |
| [add_rigid_body_motion_fc](Ans_DataProcessing_operators_result_add_rigid_body_motion_fc.md) | Adds a given rigid translation, center and rotation from a displacement field. The rotation is given in terms of rotations angles. Note that the displacement field has to be in the global coordinate system   ///available inputs: fields_container (FieldsContainer), translation_field (Field), rotation_field (Field), center_field (Field), mesh (MeshedRegion) (optional) |
| [artificial_hourglass_energy](Ans_DataProcessing_operators_result_artificial_hourglass_energy.md) | artificial_hourglass_energy() |
| [beam_axial_force](Ans_DataProcessing_operators_result_beam_axial_force.md) | beam_axial_force() |
| [beam_axial_plastic_strain](Ans_DataProcessing_operators_result_beam_axial_plastic_strain.md) | beam_axial_plastic_strain() |
| [beam_axial_stress](Ans_DataProcessing_operators_result_beam_axial_stress.md) | beam_axial_stress() |
| [beam_axial_total_strain](Ans_DataProcessing_operators_result_beam_axial_total_strain.md) | beam_axial_total_strain() |
| [beam_rs_shear_stress](Ans_DataProcessing_operators_result_beam_rs_shear_stress.md) | beam_rs_shear_stress() |
| [beam_s_bending_moment](Ans_DataProcessing_operators_result_beam_s_bending_moment.md) | beam_s_bending_moment() |
| [beam_s_shear_force](Ans_DataProcessing_operators_result_beam_s_shear_force.md) | beam_s_shear_force() |
| [beam_t_bending_moment](Ans_DataProcessing_operators_result_beam_t_bending_moment.md) | beam_t_bending_moment() |
| [beam_t_shear_force](Ans_DataProcessing_operators_result_beam_t_shear_force.md) | beam_t_shear_force() |
| [beam_torsional_moment](Ans_DataProcessing_operators_result_beam_torsional_moment.md) | beam_torsional_moment() |
| [beam_tr_shear_stress](Ans_DataProcessing_operators_result_beam_tr_shear_stress.md) | beam_tr_shear_stress() |
| [cms_dst_table_provider](Ans_DataProcessing_operators_result_cms_dst_table_provider.md) | Read CST table from a subfile.   ///available inputs: data_sources (DataSources) |
| [cms_matrices_provider](Ans_DataProcessing_operators_result_cms_matrices_provider.md) | Read reduced matrices for cms elements. Extract stiffness, damping, mass matrices and load vector from a subfile.   ///available inputs: data_sources (DataSources), matrix_form (bool) |
| [cms_subfile_info_provider](Ans_DataProcessing_operators_result_cms_subfile_info_provider.md) | Read required information from a subfile.   ///available inputs: data_sources (DataSources), cms_subfile_data (bool), output_maxdof_on_masternodes (bool) (optional) |
| [co_energy](Ans_DataProcessing_operators_result_co_energy.md) | co_energy() |
| [compute_invariant_terms_motion](Ans_DataProcessing_operators_result_compute_invariant_terms_motion.md) | compute_invariant_terms_motion() |
| [compute_invariant_terms_rbd](Ans_DataProcessing_operators_result_compute_invariant_terms_rbd.md) | compute_invariant_terms_rbd() |
| [contact_fluid_penetration_pressure](Ans_DataProcessing_operators_result_contact_fluid_penetration_pressure.md) | contact_fluid_penetration_pressure() |
| [contact_friction_stress](Ans_DataProcessing_operators_result_contact_friction_stress.md) | contact_friction_stress() |
| [contact_gap_distance](Ans_DataProcessing_operators_result_contact_gap_distance.md) | contact_gap_distance() |
| [contact_penetration](Ans_DataProcessing_operators_result_contact_penetration.md) | contact_penetration() |
| [contact_pressure](Ans_DataProcessing_operators_result_contact_pressure.md) | contact_pressure() |
| [contact_sliding_distance](Ans_DataProcessing_operators_result_contact_sliding_distance.md) | contact_sliding_distance() |
| [contact_status](Ans_DataProcessing_operators_result_contact_status.md) | contact_status() |
| [contact_surface_heat_flux](Ans_DataProcessing_operators_result_contact_surface_heat_flux.md) | contact_surface_heat_flux() |
| [contact_total_stress](Ans_DataProcessing_operators_result_contact_total_stress.md) | contact_total_stress() |
| [coordinate_system](Ans_DataProcessing_operators_result_coordinate_system.md) | Extracts the Rotation Matrix and Origin of a specific coordinate system.   ///available inputs: cs_id (Int32), streams_container (StreamsContainer) (optional), data_sources (DataSources) |
| [coordinates](Ans_DataProcessing_operators_result_coordinates.md) | coordinates() |
| [creep_strain_energy_density](Ans_DataProcessing_operators_result_creep_strain_energy_density.md) | creep_strain_energy_density() |
| [current_density](Ans_DataProcessing_operators_result_current_density.md) | current_density() |
| [cyclic_analytic_seqv_max](Ans_DataProcessing_operators_result_cyclic_analytic_seqv_max.md) | Compute the maximum of the Von Mises equivalent stress that can be expected on 360 degrees   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (ScopingsContainer, Scoping, IList int, System.Collections.IEnumerable) (optional), fields_container (FieldsContainer), bool_rotate_to_global (bool) (optional), cyclic_support (CyclicSupport) |
| [cyclic_analytic_usum_max](Ans_DataProcessing_operators_result_cyclic_analytic_usum_max.md) | Compute the maximum of the total deformation that can be expected on 360 degrees   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (ScopingsContainer, Scoping, IList int, System.Collections.IEnumerable) (optional), fields_container (FieldsContainer), bool_rotate_to_global (bool) (optional), cyclic_support (CyclicSupport) |
| [cyclic_expansion](Ans_DataProcessing_operators_result_cyclic_expansion.md) | Expand cyclic results from a fieldsContainer for given sets, sectors and scoping (optionals).   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (ScopingsContainer, Scoping, IList int, System.Collections.IEnumerable) (optional), fields_container (FieldsContainer), harmonic_index (Int32) (optional), bool_rotate_to_global (bool) (optional), map_size_scoping_out () (optional), normalization_factor (double) (optional), merge_stages (bool) (optional), cyclic_support (CyclicSupport), sectors_to_expand (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional), phi (double) (optional) |
| [density](Ans_DataProcessing_operators_result_density.md) | density() |
| [displacement](Ans_DataProcessing_operators_result_displacement.md) | displacement() |
| [displacement_X](Ans_DataProcessing_operators_result_displacement_X.md) | displacement_X() |
| [displacement_Y](Ans_DataProcessing_operators_result_displacement_Y.md) | displacement_Y() |
| [displacement_Z](Ans_DataProcessing_operators_result_displacement_Z.md) | displacement_Z() |
| [div_lighthill_tensor](Ans_DataProcessing_operators_result_div_lighthill_tensor.md) | div_lighthill_tensor() |
| [dynamic_viscosity](Ans_DataProcessing_operators_result_dynamic_viscosity.md) | dynamic_viscosity() |
| [elastic_strain](Ans_DataProcessing_operators_result_elastic_strain.md) | elastic_strain() |
| [elastic_strain_X](Ans_DataProcessing_operators_result_elastic_strain_X.md) | elastic_strain_X() |
| [elastic_strain_XY](Ans_DataProcessing_operators_result_elastic_strain_XY.md) | elastic_strain_XY() |
| [elastic_strain_XZ](Ans_DataProcessing_operators_result_elastic_strain_XZ.md) | elastic_strain_XZ() |
| [elastic_strain_Y](Ans_DataProcessing_operators_result_elastic_strain_Y.md) | elastic_strain_Y() |
| [elastic_strain_YZ](Ans_DataProcessing_operators_result_elastic_strain_YZ.md) | elastic_strain_YZ() |
| [elastic_strain_Z](Ans_DataProcessing_operators_result_elastic_strain_Z.md) | elastic_strain_Z() |
| [elastic_strain_energy_density](Ans_DataProcessing_operators_result_elastic_strain_energy_density.md) | elastic_strain_energy_density() |
| [elastic_strain_eqv](Ans_DataProcessing_operators_result_elastic_strain_eqv.md) | elastic_strain_eqv() |
| [elastic_strain_intensity](Ans_DataProcessing_operators_result_elastic_strain_intensity.md) | elastic_strain_intensity() |
| [elastic_strain_max_shear](Ans_DataProcessing_operators_result_elastic_strain_max_shear.md) | elastic_strain_max_shear() |
| [elastic_strain_principal_1](Ans_DataProcessing_operators_result_elastic_strain_principal_1.md) | elastic_strain_principal_1() |
| [elastic_strain_principal_2](Ans_DataProcessing_operators_result_elastic_strain_principal_2.md) | elastic_strain_principal_2() |
| [elastic_strain_principal_3](Ans_DataProcessing_operators_result_elastic_strain_principal_3.md) | elastic_strain_principal_3() |
| [elastic_strain_rotation_by_euler_nodes](Ans_DataProcessing_operators_result_elastic_strain_rotation_by_euler_nodes.md) | read Euler angles on elements from the result file and rotate the fields in the fieldsContainer.   ///available inputs: fields_container (FieldsContainer) (optional), streams_container (StreamsContainer, Stream) (optional), data_sources (DataSources) |
| [electric_field](Ans_DataProcessing_operators_result_electric_field.md) | electric_field() |
| [electric_field_X](Ans_DataProcessing_operators_result_electric_field_X.md) | electric_field_X() |
| [electric_field_Y](Ans_DataProcessing_operators_result_electric_field_Y.md) | electric_field_Y() |
| [electric_field_Z](Ans_DataProcessing_operators_result_electric_field_Z.md) | electric_field_Z() |
| [electric_flux_density](Ans_DataProcessing_operators_result_electric_flux_density.md) | electric_flux_density() |
| [electric_flux_density_X](Ans_DataProcessing_operators_result_electric_flux_density_X.md) | electric_flux_density_X() |
| [electric_flux_density_Y](Ans_DataProcessing_operators_result_electric_flux_density_Y.md) | electric_flux_density_Y() |
| [electric_flux_density_Z](Ans_DataProcessing_operators_result_electric_flux_density_Z.md) | electric_flux_density_Z() |
| [electric_potential](Ans_DataProcessing_operators_result_electric_potential.md) | electric_potential() |
| [element_centroids](Ans_DataProcessing_operators_result_element_centroids.md) | element_centroids() |
| [element_nodal_forces](Ans_DataProcessing_operators_result_element_nodal_forces.md) | element_nodal_forces() |
| [element_orientations](Ans_DataProcessing_operators_result_element_orientations.md) | element_orientations() |
| [element_orientations_X](Ans_DataProcessing_operators_result_element_orientations_X.md) | element_orientations_X() |
| [element_orientations_Y](Ans_DataProcessing_operators_result_element_orientations_Y.md) | element_orientations_Y() |
| [element_orientations_Z](Ans_DataProcessing_operators_result_element_orientations_Z.md) | element_orientations_Z() |
| [elemental_heat_generation](Ans_DataProcessing_operators_result_elemental_heat_generation.md) | elemental_heat_generation() |
| [elemental_mass](Ans_DataProcessing_operators_result_elemental_mass.md) | elemental_mass() |
| [elemental_volume](Ans_DataProcessing_operators_result_elemental_volume.md) | elemental_volume() |
| [enf_rotation_by_euler_nodes](Ans_DataProcessing_operators_result_enf_rotation_by_euler_nodes.md) | read Euler angles on elements from the result file and rotate the fields in the fieldsContainer.   ///available inputs: fields_container (FieldsContainer) (optional), streams_container (StreamsContainer, Stream) (optional), data_sources (DataSources) |
| [enthalpy](Ans_DataProcessing_operators_result_enthalpy.md) | enthalpy() |
| [entropy](Ans_DataProcessing_operators_result_entropy.md) | entropy() |
| [epsilon](Ans_DataProcessing_operators_result_epsilon.md) | epsilon() |
| [equivalent_mass](Ans_DataProcessing_operators_result_equivalent_mass.md) | equivalent_mass() |
| [equivalent_radiated_power](Ans_DataProcessing_operators_result_equivalent_radiated_power.md) | Compute the Equivalent Radiated Power (ERP)   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer), time_scoping (Int32, IList int, Scoping, System.Collections.IEnumerable), mass_density (double), speed_of_sound (double), erp_type (Int32), boolean (bool), factor (double) |
| [eqv_stress_parameter](Ans_DataProcessing_operators_result_eqv_stress_parameter.md) | eqv_stress_parameter() |
| [erp_radiation_efficiency](Ans_DataProcessing_operators_result_erp_radiation_efficiency.md) | Compute the radiation efficiency (enhanced erp divided by classical erp)   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer), time_scoping (Int32, IList int, Scoping, System.Collections.IEnumerable), mass_density (double), speed_of_sound (double) |
| [euler_load_buckling](Ans_DataProcessing_operators_result_euler_load_buckling.md) | Computing Euler's Critical Load. Formula: Ncr = n*E*I*pi*pi /(L*L)    ///available inputs: field_beam_end_condition (DataSources, Field), field_beam_moment_inertia (Field), field_beam_young_modulus (Field), field_beam_length (Field) |
| [euler_nodes](Ans_DataProcessing_operators_result_euler_nodes.md) | Reads a field made of 3 coordinates and 3 Euler angles (6 dofs) by node from the result file.   ///available inputs: streams_container (StreamsContainer, Stream) (optional), data_sources (DataSources), filter_zeros (bool), coord_and_euler (bool), mesh (MeshedRegion) (optional) |
| [gasket_deformation](Ans_DataProcessing_operators_result_gasket_deformation.md) | gasket_deformation() |
| [gasket_deformation_X](Ans_DataProcessing_operators_result_gasket_deformation_X.md) | gasket_deformation_X() |
| [gasket_deformation_XY](Ans_DataProcessing_operators_result_gasket_deformation_XY.md) | gasket_deformation_XY() |
| [gasket_deformation_XZ](Ans_DataProcessing_operators_result_gasket_deformation_XZ.md) | gasket_deformation_XZ() |
| [gasket_inelastic_closure](Ans_DataProcessing_operators_result_gasket_inelastic_closure.md) | gasket_inelastic_closure() |
| [gasket_inelastic_closure_X](Ans_DataProcessing_operators_result_gasket_inelastic_closure_X.md) | gasket_inelastic_closure_X() |
| [gasket_inelastic_closure_XY](Ans_DataProcessing_operators_result_gasket_inelastic_closure_XY.md) | gasket_inelastic_closure_XY() |
| [gasket_inelastic_closure_XZ](Ans_DataProcessing_operators_result_gasket_inelastic_closure_XZ.md) | gasket_inelastic_closure_XZ() |
| [gasket_stress](Ans_DataProcessing_operators_result_gasket_stress.md) | gasket_stress() |
| [gasket_stress_X](Ans_DataProcessing_operators_result_gasket_stress_X.md) | gasket_stress_X() |
| [gasket_stress_XY](Ans_DataProcessing_operators_result_gasket_stress_XY.md) | gasket_stress_XY() |
| [gasket_stress_XZ](Ans_DataProcessing_operators_result_gasket_stress_XZ.md) | gasket_stress_XZ() |
| [gasket_thermal_closure](Ans_DataProcessing_operators_result_gasket_thermal_closure.md) | gasket_thermal_closure() |
| [gasket_thermal_closure_X](Ans_DataProcessing_operators_result_gasket_thermal_closure_X.md) | gasket_thermal_closure_X() |
| [gasket_thermal_closure_XY](Ans_DataProcessing_operators_result_gasket_thermal_closure_XY.md) | gasket_thermal_closure_XY() |
| [gasket_thermal_closure_XZ](Ans_DataProcessing_operators_result_gasket_thermal_closure_XZ.md) | gasket_thermal_closure_XZ() |
| [global_added_mass](Ans_DataProcessing_operators_result_global_added_mass.md) | Read Global Added Mass (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_added_mass_pct](Ans_DataProcessing_operators_result_global_added_mass_pct.md) | Read Global Added Mass (percentage) (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_center_mass](Ans_DataProcessing_operators_result_global_center_mass.md) | Read Global Center of Mass (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_energy_ratio](Ans_DataProcessing_operators_result_global_energy_ratio.md) | Read Global Energy Ratio (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_energy_ratio_wo_eroded](Ans_DataProcessing_operators_result_global_energy_ratio_wo_eroded.md) | Read Global Energy ratio without Eroded Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_eroded_hourglass_energy](Ans_DataProcessing_operators_result_global_eroded_hourglass_energy.md) | Read Global Eroded Hourglass Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_eroded_internal_energy](Ans_DataProcessing_operators_result_global_eroded_internal_energy.md) | Read Global Eroded Internal Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_eroded_kinetic_energy](Ans_DataProcessing_operators_result_global_eroded_kinetic_energy.md) | Read Global Eroded Kinetic Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_external_work](Ans_DataProcessing_operators_result_global_external_work.md) | Read Global External Work (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_hourglass_energy](Ans_DataProcessing_operators_result_global_hourglass_energy.md) | Read Global Hourglass Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_internal_energy](Ans_DataProcessing_operators_result_global_internal_energy.md) | Read Global Internal Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_joint_internal_energy](Ans_DataProcessing_operators_result_global_joint_internal_energy.md) | Read Global Joint Internal Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_kinetic_energy](Ans_DataProcessing_operators_result_global_kinetic_energy.md) | Read Global Kinetic Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_rigid_body_stopper_energy](Ans_DataProcessing_operators_result_global_rigid_body_stopper_energy.md) | Read Global Rigid Body Stopper Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_sliding_interface_energy](Ans_DataProcessing_operators_result_global_sliding_interface_energy.md) | Read Global Sliding Interface Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_spring_damper_energy](Ans_DataProcessing_operators_result_global_spring_damper_energy.md) | Read Global Spring and Damper Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_system_damping_energy](Ans_DataProcessing_operators_result_global_system_damping_energy.md) | Read Global System Damping Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_time_step](Ans_DataProcessing_operators_result_global_time_step.md) | Read Global Time Step (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_total_energy](Ans_DataProcessing_operators_result_global_total_energy.md) | Read Global Total Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_total_mass](Ans_DataProcessing_operators_result_global_total_mass.md) | Read Global Total Mass (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [global_velocity](Ans_DataProcessing_operators_result_global_velocity.md) | Read Global Velocity (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional) |
| [heat_flux](Ans_DataProcessing_operators_result_heat_flux.md) | heat_flux() |
| [heat_flux_X](Ans_DataProcessing_operators_result_heat_flux_X.md) | heat_flux_X() |
| [heat_flux_Y](Ans_DataProcessing_operators_result_heat_flux_Y.md) | heat_flux_Y() |
| [heat_flux_Z](Ans_DataProcessing_operators_result_heat_flux_Z.md) | heat_flux_Z() |
| [hydrostatic_pressure](Ans_DataProcessing_operators_result_hydrostatic_pressure.md) | hydrostatic_pressure() |
| [incremental_energy](Ans_DataProcessing_operators_result_incremental_energy.md) | incremental_energy() |
| [initial_coordinates](Ans_DataProcessing_operators_result_initial_coordinates.md) | initial_coordinates() |
| [interface_contact_area](Ans_DataProcessing_operators_result_interface_contact_area.md) | Read Interface Contact Area (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [interface_contact_force](Ans_DataProcessing_operators_result_interface_contact_force.md) | Read Interface Contact Force (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [interface_contact_mass](Ans_DataProcessing_operators_result_interface_contact_mass.md) | Read Interface Contact Mass (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [interface_contact_moment](Ans_DataProcessing_operators_result_interface_contact_moment.md) | Read Interface Contact Moment (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [interface_resultant_contact_force](Ans_DataProcessing_operators_result_interface_resultant_contact_force.md) | Read Interface Resultant Contact Force (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [joint_force_reaction](Ans_DataProcessing_operators_result_joint_force_reaction.md) | joint_force_reaction() |
| [joint_moment_reaction](Ans_DataProcessing_operators_result_joint_moment_reaction.md) | joint_moment_reaction() |
| [joint_relative_acceleration](Ans_DataProcessing_operators_result_joint_relative_acceleration.md) | joint_relative_acceleration() |
| [joint_relative_angular_acceleration](Ans_DataProcessing_operators_result_joint_relative_angular_acceleration.md) | joint_relative_angular_acceleration() |
| [joint_relative_angular_velocity](Ans_DataProcessing_operators_result_joint_relative_angular_velocity.md) | joint_relative_angular_velocity() |
| [joint_relative_displacement](Ans_DataProcessing_operators_result_joint_relative_displacement.md) | joint_relative_displacement() |
| [joint_relative_rotation](Ans_DataProcessing_operators_result_joint_relative_rotation.md) | joint_relative_rotation() |
| [joint_relative_velocity](Ans_DataProcessing_operators_result_joint_relative_velocity.md) | joint_relative_velocity() |
| [kinetic_energy](Ans_DataProcessing_operators_result_kinetic_energy.md) | kinetic_energy() |
| [mach_number](Ans_DataProcessing_operators_result_mach_number.md) | mach_number() |
| [magnetic_field](Ans_DataProcessing_operators_result_magnetic_field.md) | magnetic_field() |
| [magnetic_field_X](Ans_DataProcessing_operators_result_magnetic_field_X.md) | magnetic_field_X() |
| [magnetic_field_Y](Ans_DataProcessing_operators_result_magnetic_field_Y.md) | magnetic_field_Y() |
| [magnetic_field_Z](Ans_DataProcessing_operators_result_magnetic_field_Z.md) | magnetic_field_Z() |
| [magnetic_flux_density](Ans_DataProcessing_operators_result_magnetic_flux_density.md) | magnetic_flux_density() |
| [magnetic_flux_density_X](Ans_DataProcessing_operators_result_magnetic_flux_density_X.md) | magnetic_flux_density_X() |
| [magnetic_flux_density_Y](Ans_DataProcessing_operators_result_magnetic_flux_density_Y.md) | magnetic_flux_density_Y() |
| [magnetic_flux_density_Z](Ans_DataProcessing_operators_result_magnetic_flux_density_Z.md) | magnetic_flux_density_Z() |
| [magnetic_scalar_potential](Ans_DataProcessing_operators_result_magnetic_scalar_potential.md) | magnetic_scalar_potential() |
| [magnetic_vector_potential](Ans_DataProcessing_operators_result_magnetic_vector_potential.md) | magnetic_vector_potential() |
| [mapdl_material_properties](Ans_DataProcessing_operators_result_mapdl_material_properties.md) | Read the values of the properties of a material for a given materials property field (property field that contains materials information for each element of a mesh).It returns a fields container containing a field for each material property, with only one value per material. The following keys can be used: Young's modulus (keys: EX, EY, EZ), Poisson's ratio (keys: NUXY, NUYZ, NUXZ), Shear Modulus (keys: GXY, GYZ, GXZ), Coefficient of Thermal Expansion (keys: ALPX, ALPY, ALPZ), Volumic Mass (key: DENS), second Lame's coefficient (key: MU), Damping coefficient (key: DAMP), thermal Conductivity (keys: KXX, KYY, KZZ), Resistivity (keys: RSVX, RSVY, RSVZ), Specific heat in constant volume (key: C), Film coefficient (key: HF), Viscosity (key: VISC), Emissivity (key: EMIS).    ///available inputs: properties_name (string), materials (PropertyField), streams_container (StreamsContainer), data_sources (DataSources) |
| [mapdl_section](Ans_DataProcessing_operators_result_mapdl_section.md) | Read the values of the section properties for a given section property field (property field that contains section information for each element of a mesh). The following keys can be used: Thickness, NumLayers. For layered elements, the following keys can be used: Thickness, MatID, Orientation, NumIntPoints.   ///available inputs: properties_name (string), section (PropertyField) (optional), streams_container (StreamsContainer), data_sources (DataSources), layer_property (bool) (optional), layers_requested (IList int, System.Collections.IEnumerable) (optional) |
| [mapdl_split_on_facet_indices](Ans_DataProcessing_operators_result_mapdl_split_on_facet_indices.md) | Splits each Field in a FieldsContainer defined on the skin elements of a mesh according to the local facets indices of its corresponding solid element. The output FieldsContainer retains the original labels and adds a 'facet' label, which indicates at which facet of the solid mesh was the original skin element located. The facet ids are according to MAPDL convention. The scoping of the output Fields reflects the element indices in the solid mesh.   ///available inputs: fields_container (FieldsContainer), property_field_new_elements_to_old (PropertyField), facet_indices (PropertyField), volume_mesh (MeshedRegion), degenerated_tets (Scoping) (optional), non_degenerated_tets (Scoping) (optional) |
| [mapdl_split_to_acmo_facet_indices](Ans_DataProcessing_operators_result_mapdl_split_to_acmo_facet_indices.md) | This will retain the already existing labels from the input FC and will change the facet label to now mean ACMO facet indices.Each Field in the input will be split/merged into several Fields, redistributing the data to the appropriate entity.   ///available inputs: fields_container (FieldsContainer), property_fields_container_element_types (PropertyFieldsContainer) |
| [mass_flow_rate](Ans_DataProcessing_operators_result_mass_flow_rate.md) | mass_flow_rate() |
| [mass_fraction](Ans_DataProcessing_operators_result_mass_fraction.md) | mass_fraction() |
| [material_property_of_element](Ans_DataProcessing_operators_result_material_property_of_element.md) | Loads the appropriate operator based on the data sources and retrieves material properties.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources) |
| [mean_static_pressure](Ans_DataProcessing_operators_result_mean_static_pressure.md) | mean_static_pressure() |
| [mean_temperature](Ans_DataProcessing_operators_result_mean_temperature.md) | mean_temperature() |
| [mean_velocity](Ans_DataProcessing_operators_result_mean_velocity.md) | mean_velocity() |
| [members_in_bending_not_certified](Ans_DataProcessing_operators_result_members_in_bending_not_certified.md) | This operator is a non-certified example of buckling resistance verification for the bending members. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator. HATS Beam and irregular beams (unequal I-Beam, not-square Channel-Beam, not-square Angle L-beam, unequal hollow rectangular beam) not supported.   ///available inputs: time_scoping (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), field_yield_strength (Field), class_cross_section (bool), streams (StreamsContainer) (optional), data_sources (DataSources) (optional), partial_factor (double), mesh (MeshedRegion), bending_moment_y (FieldsContainer), bending_moment_z (FieldsContainer) |
| [members_in_compression_not_certified](Ans_DataProcessing_operators_result_members_in_compression_not_certified.md) | This operator is a non-certified example of buckling resistance verification for the compression members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.   ///available inputs: time_scoping (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), field_yield_strength (DataSources, Field), field_end_condition (DataSources, Field), streams (StreamsContainer) (optional), data_sources (DataSources) (optional), manufacture (bool), partial_factor (double), mesh (MeshedRegion), axial_force (FieldsContainer), fabrication_type (bool) |
| [members_in_linear_compression_bending_not_certified](Ans_DataProcessing_operators_result_members_in_linear_compression_bending_not_certified.md) | This operator is a non-certified example of buckling resistance verification for the compression and bending members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. This norm is linear summation of the utilization ratios of compression members and bending members. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.   ///available inputs: time_scoping (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), field_yield_strength (Field), field_end_condition (DataSources, Field) (optional), streams (StreamsContainer) (optional), data_sources (DataSources) (optional), manufacture (bool) (optional), partial_factor (double) (optional), mesh (MeshedRegion), bending_moment_y (FieldsContainer), bending_moment_z (FieldsContainer), axial_force (FieldsContainer), class_cross_section (bool), fabrication_type (bool) (optional) |
| [migrate_to_h5dpf](Ans_DataProcessing_operators_result_migrate_to_h5dpf.md) | Read mesh properties from the results files contained in the streams or data sources and make those properties available through a mesh selection manager in output.User can input a GenericDataContainer that will map an item to a result name. Example of Map: {{ default: wf1}, {EUL: wf2}, {ENG_SE: wf3}}.   ///available inputs: dataset_size_compression_threshold (Int32, GenericDataContainer) (optional), h5_native_compression (Int32, DataTree, GenericDataContainer) (optional), export_floats (bool, GenericDataContainer) (optional), filename (string), comma_separated_list_of_results (string) (optional), all_time_sets (bool) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources) (optional), compression_workflow (Workflow, GenericDataContainer) (optional), filtering_workflow (Workflow, GenericDataContainer) (optional) |
| [modal_basis](Ans_DataProcessing_operators_result_modal_basis.md) | modal_basis() |
| [nmisc](Ans_DataProcessing_operators_result_nmisc.md) | nmisc() |
| [nodal_force](Ans_DataProcessing_operators_result_nodal_force.md) | nodal_force() |
| [nodal_moment](Ans_DataProcessing_operators_result_nodal_moment.md) | nodal_moment() |
| [nodal_to_global](Ans_DataProcessing_operators_result_nodal_to_global.md) | Rotates nodal elemental results to global coordinate system   ///available inputs: fieldA (Field), fieldB (Field) |
| [normal_contact_force](Ans_DataProcessing_operators_result_normal_contact_force.md) | normal_contact_force() |
| [normal_contact_moment](Ans_DataProcessing_operators_result_normal_contact_moment.md) | normal_contact_moment() |
| [num_surface_status_changes](Ans_DataProcessing_operators_result_num_surface_status_changes.md) | num_surface_status_changes() |
| [omega](Ans_DataProcessing_operators_result_omega.md) | omega() |
| [part_added_mass](Ans_DataProcessing_operators_result_part_added_mass.md) | Read Part Added Mass (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [part_eroded_internal_energy](Ans_DataProcessing_operators_result_part_eroded_internal_energy.md) | Read Part Eroded Internal Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [part_eroded_kinetic_energy](Ans_DataProcessing_operators_result_part_eroded_kinetic_energy.md) | Read Part Eroded Kinetic Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [part_hourglass_energy](Ans_DataProcessing_operators_result_part_hourglass_energy.md) | Read Part Hourglass Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [part_internal_energy](Ans_DataProcessing_operators_result_part_internal_energy.md) | Read Part Internal Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [part_kinetic_energy](Ans_DataProcessing_operators_result_part_kinetic_energy.md) | Read Part Kinetic Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [part_momentum](Ans_DataProcessing_operators_result_part_momentum.md) | Read Part Momentum (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [part_rigid_body_velocity](Ans_DataProcessing_operators_result_part_rigid_body_velocity.md) | Read Part Rigid Body Velocity (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional) |
| [plastic_state_variable](Ans_DataProcessing_operators_result_plastic_state_variable.md) | plastic_state_variable() |
| [plastic_strain](Ans_DataProcessing_operators_result_plastic_strain.md) | plastic_strain() |
| [plastic_strain_X](Ans_DataProcessing_operators_result_plastic_strain_X.md) | plastic_strain_X() |
| [plastic_strain_XY](Ans_DataProcessing_operators_result_plastic_strain_XY.md) | plastic_strain_XY() |
| [plastic_strain_XZ](Ans_DataProcessing_operators_result_plastic_strain_XZ.md) | plastic_strain_XZ() |
| [plastic_strain_Y](Ans_DataProcessing_operators_result_plastic_strain_Y.md) | plastic_strain_Y() |
| [plastic_strain_YZ](Ans_DataProcessing_operators_result_plastic_strain_YZ.md) | plastic_strain_YZ() |
| [plastic_strain_Z](Ans_DataProcessing_operators_result_plastic_strain_Z.md) | plastic_strain_Z() |
| [plastic_strain_energy_density](Ans_DataProcessing_operators_result_plastic_strain_energy_density.md) | plastic_strain_energy_density() |
| [plastic_strain_eqv](Ans_DataProcessing_operators_result_plastic_strain_eqv.md) | plastic_strain_eqv() |
| [plastic_strain_intensity](Ans_DataProcessing_operators_result_plastic_strain_intensity.md) | plastic_strain_intensity() |
| [plastic_strain_max_shear](Ans_DataProcessing_operators_result_plastic_strain_max_shear.md) | plastic_strain_max_shear() |
| [plastic_strain_principal_1](Ans_DataProcessing_operators_result_plastic_strain_principal_1.md) | plastic_strain_principal_1() |
| [plastic_strain_principal_2](Ans_DataProcessing_operators_result_plastic_strain_principal_2.md) | plastic_strain_principal_2() |
| [plastic_strain_principal_3](Ans_DataProcessing_operators_result_plastic_strain_principal_3.md) | plastic_strain_principal_3() |
| [plastic_strain_rotation_by_euler_nodes](Ans_DataProcessing_operators_result_plastic_strain_rotation_by_euler_nodes.md) | read Euler angles on elements from the result file and rotate the fields in the fieldsContainer.   ///available inputs: fields_container (FieldsContainer) (optional), streams_container (StreamsContainer, Stream) (optional), data_sources (DataSources) |
| [poynting_vector](Ans_DataProcessing_operators_result_poynting_vector.md) | Compute the Poynting Vector   ///available inputs: fields_containerA (FieldsContainer), fields_containerB (FieldsContainer), fields_containerC (FieldsContainer), fields_containerD (FieldsContainer), meshed_region (MeshedRegion) (optional), int32 (Int32) (optional) |
| [poynting_vector_surface](Ans_DataProcessing_operators_result_poynting_vector_surface.md) | Compute the Poynting Vector surface integral   ///available inputs: fields_containerA (FieldsContainer), fields_containerB (FieldsContainer), fields_containerC (FieldsContainer), fields_containerD (FieldsContainer), meshed_region (MeshedRegion) (optional), int32 (Int32) (optional) |
| [pressure](Ans_DataProcessing_operators_result_pressure.md) | pressure() |
| [pretension](Ans_DataProcessing_operators_result_pretension.md) | Reads the pretension adjustment and tension force. Rotation is not allowed for these results.   ///available inputs: time_scoping (ScopingsContainer, Scoping) (optional), mesh_scoping (ScopingsContainer, Scoping) (optional), fields_container (FieldsContainer) (optional), streams_container (StreamsContainer, Stream), data_sources (DataSources), mesh (MeshedRegion, MeshesContainer) (optional), read_cyclic (Int32) (optional), expanded_meshed_region (MeshedRegion, MeshesContainer) (optional), sectors_to_expand (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional), phi (double) (optional) |
| [raw_displacement](Ans_DataProcessing_operators_result_raw_displacement.md) | raw_displacement() |
| [raw_reaction_force](Ans_DataProcessing_operators_result_raw_reaction_force.md) | raw_reaction_force() |
| [reaction_force](Ans_DataProcessing_operators_result_reaction_force.md) | reaction_force() |
| [reaction_force_X](Ans_DataProcessing_operators_result_reaction_force_X.md) | reaction_force_X() |
| [reaction_force_Y](Ans_DataProcessing_operators_result_reaction_force_Y.md) | reaction_force_Y() |
| [reaction_force_Z](Ans_DataProcessing_operators_result_reaction_force_Z.md) | reaction_force_Z() |
| [read_cms_rbd_file](Ans_DataProcessing_operators_result_read_cms_rbd_file.md) | read_cms_rbd_file() |
| [recombine_harmonic_indeces_cyclic](Ans_DataProcessing_operators_result_recombine_harmonic_indeces_cyclic.md) | Add the fields corresponding to different load steps with the same frequencies to compute the response.   ///available inputs: fields_container (FieldsContainer) |
| [remove_rigid_body_motion](Ans_DataProcessing_operators_result_remove_rigid_body_motion.md) | Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.   ///available inputs: field (Field, FieldsContainer), reference_node_id (Int32) (optional), mesh (MeshedRegion) (optional) |
| [remove_rigid_body_motion_fc](Ans_DataProcessing_operators_result_remove_rigid_body_motion_fc.md) | Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.   ///available inputs: fields_container (FieldsContainer), reference_node_id (Int32) (optional), mesh (MeshedRegion) (optional) |
| [result_provider](Ans_DataProcessing_operators_result_result_provider.md) | result_provider() |
| [rigid_transformation](Ans_DataProcessing_operators_result_rigid_transformation.md) | Extracts rigid body motions from a displacement in input.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources) |
| [rigid_transformation_provider](Ans_DataProcessing_operators_result_rigid_transformation_provider.md) | Extracts rigid body transformation from dsub file.   ///available inputs: streams (Stream) (optional), data_sources (DataSources) |
| [rms_static_pressure](Ans_DataProcessing_operators_result_rms_static_pressure.md) | rms_static_pressure() |
| [rms_temperature](Ans_DataProcessing_operators_result_rms_temperature.md) | rms_temperature() |
| [rms_velocity](Ans_DataProcessing_operators_result_rms_velocity.md) | rms_velocity() |
| [rom_data_provider](Ans_DataProcessing_operators_result_rom_data_provider.md) | Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)   ///available inputs: rom_type (bool), reduced_stiff_matrix (FieldsContainer), reduced_damping_matrix (FieldsContainer), reduced_mass_matrix (FieldsContainer), data_sources (DataSources), reduced_rhs_vector (FieldsContainer), lumped_mass_matrix (FieldsContainer), mode_shapes (FieldsContainer) |
| [smisc](Ans_DataProcessing_operators_result_smisc.md) | smisc() |
| [specific_heat](Ans_DataProcessing_operators_result_specific_heat.md) | specific_heat() |
| [spectrum_data](Ans_DataProcessing_operators_result_spectrum_data.md) | Read spectral data from the result files contained in the streams or data sources.   ///available inputs: streams (StreamsContainer) (optional), data_sources (DataSources) |
| [state_variable](Ans_DataProcessing_operators_result_state_variable.md) | state_variable() |
| [static_pressure](Ans_DataProcessing_operators_result_static_pressure.md) | static_pressure() |
| [stiffness_matrix_energy](Ans_DataProcessing_operators_result_stiffness_matrix_energy.md) | stiffness_matrix_energy() |
| [strain_eqv_as_mechanical](Ans_DataProcessing_operators_result_strain_eqv_as_mechanical.md) | Computes the equivalent (Von Mises) elastic strains and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), mesh (MeshedRegion, MeshesContainer) (optional), requested_location (string) (optional), poisson_ratio (Int32, double) (optional), read_cyclic (bool) (optional), average_across_bodies (bool) (optional) |
| [strain_eqv_as_mechanical_workflow](Ans_DataProcessing_operators_result_strain_eqv_as_mechanical_workflow.md) | Generates a workflow that computes the equivalent (Von Mises) elastic strains and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), mesh (MeshedRegion, MeshesContainer) (optional), requested_location (string) (optional), read_cyclic (bool) (optional), average_across_bodies (bool) (optional) |
| [stress](Ans_DataProcessing_operators_result_stress.md) | stress() |
| [stress_X](Ans_DataProcessing_operators_result_stress_X.md) | stress_X() |
| [stress_XY](Ans_DataProcessing_operators_result_stress_XY.md) | stress_XY() |
| [stress_XZ](Ans_DataProcessing_operators_result_stress_XZ.md) | stress_XZ() |
| [stress_Y](Ans_DataProcessing_operators_result_stress_Y.md) | stress_Y() |
| [stress_YZ](Ans_DataProcessing_operators_result_stress_YZ.md) | stress_YZ() |
| [stress_Z](Ans_DataProcessing_operators_result_stress_Z.md) | stress_Z() |
| [stress_eqv_as_mechanical](Ans_DataProcessing_operators_result_stress_eqv_as_mechanical.md) | Computes the equivalent (Von Mises) stresses and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), mesh (MeshedRegion, MeshesContainer) (optional), requested_location (string) (optional), read_cyclic (bool) (optional), average_across_bodies (bool) (optional) |
| [stress_eqv_as_mechanical_workflow](Ans_DataProcessing_operators_result_stress_eqv_as_mechanical_workflow.md) | Generates a workflow that computes the equivalent (Von Mises) stresses and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), mesh (MeshedRegion, MeshesContainer) (optional), requested_location (string) (optional), read_cyclic (bool) (optional), average_across_bodies (bool) (optional) |
| [stress_intensity](Ans_DataProcessing_operators_result_stress_intensity.md) | stress_intensity() |
| [stress_max_shear](Ans_DataProcessing_operators_result_stress_max_shear.md) | stress_max_shear() |
| [stress_principal_1](Ans_DataProcessing_operators_result_stress_principal_1.md) | stress_principal_1() |
| [stress_principal_2](Ans_DataProcessing_operators_result_stress_principal_2.md) | stress_principal_2() |
| [stress_principal_3](Ans_DataProcessing_operators_result_stress_principal_3.md) | stress_principal_3() |
| [stress_ratio](Ans_DataProcessing_operators_result_stress_ratio.md) | stress_ratio() |
| [stress_rotation_by_euler_nodes](Ans_DataProcessing_operators_result_stress_rotation_by_euler_nodes.md) | read Euler angles on elements from the result file and rotate the fields in the fieldsContainer.   ///available inputs: fields_container (FieldsContainer) (optional), streams_container (StreamsContainer, Stream) (optional), data_sources (DataSources) |
| [stress_von_mises](Ans_DataProcessing_operators_result_stress_von_mises.md) | stress_von_mises() |
| [structural_temperature](Ans_DataProcessing_operators_result_structural_temperature.md) | structural_temperature() |
| [superficial_velocity](Ans_DataProcessing_operators_result_superficial_velocity.md) | superficial_velocity() |
| [surface_heat_rate](Ans_DataProcessing_operators_result_surface_heat_rate.md) | surface_heat_rate() |
| [swelling_strains](Ans_DataProcessing_operators_result_swelling_strains.md) | swelling_strains() |
| [tangential_contact_force](Ans_DataProcessing_operators_result_tangential_contact_force.md) | tangential_contact_force() |
| [tangential_contact_moment](Ans_DataProcessing_operators_result_tangential_contact_moment.md) | tangential_contact_moment() |
| [temperature](Ans_DataProcessing_operators_result_temperature.md) | temperature() |
| [temperature_grad](Ans_DataProcessing_operators_result_temperature_grad.md) | temperature_grad() |
| [temperature_grad_X](Ans_DataProcessing_operators_result_temperature_grad_X.md) | temperature_grad_X() |
| [temperature_grad_Y](Ans_DataProcessing_operators_result_temperature_grad_Y.md) | temperature_grad_Y() |
| [temperature_grad_Z](Ans_DataProcessing_operators_result_temperature_grad_Z.md) | temperature_grad_Z() |
| [thermal_conductivity](Ans_DataProcessing_operators_result_thermal_conductivity.md) | thermal_conductivity() |
| [thermal_dissipation_energy](Ans_DataProcessing_operators_result_thermal_dissipation_energy.md) | thermal_dissipation_energy() |
| [thermal_strain](Ans_DataProcessing_operators_result_thermal_strain.md) | thermal_strain() |
| [thermal_strain_X](Ans_DataProcessing_operators_result_thermal_strain_X.md) | thermal_strain_X() |
| [thermal_strain_XY](Ans_DataProcessing_operators_result_thermal_strain_XY.md) | thermal_strain_XY() |
| [thermal_strain_XZ](Ans_DataProcessing_operators_result_thermal_strain_XZ.md) | thermal_strain_XZ() |
| [thermal_strain_Y](Ans_DataProcessing_operators_result_thermal_strain_Y.md) | thermal_strain_Y() |
| [thermal_strain_YZ](Ans_DataProcessing_operators_result_thermal_strain_YZ.md) | thermal_strain_YZ() |
| [thermal_strain_Z](Ans_DataProcessing_operators_result_thermal_strain_Z.md) | thermal_strain_Z() |
| [thermal_strain_principal_1](Ans_DataProcessing_operators_result_thermal_strain_principal_1.md) | thermal_strain_principal_1() |
| [thermal_strain_principal_2](Ans_DataProcessing_operators_result_thermal_strain_principal_2.md) | thermal_strain_principal_2() |
| [thermal_strain_principal_3](Ans_DataProcessing_operators_result_thermal_strain_principal_3.md) | thermal_strain_principal_3() |
| [thermal_strains_eqv](Ans_DataProcessing_operators_result_thermal_strains_eqv.md) | thermal_strains_eqv() |
| [thickness](Ans_DataProcessing_operators_result_thickness.md) | thickness() |
| [torque](Ans_DataProcessing_operators_result_torque.md) | Compute torque of a force based on a 3D point.   ///available inputs: fields_container (FieldsContainer), field (Field) |
| [total_contact_force](Ans_DataProcessing_operators_result_total_contact_force.md) | total_contact_force() |
| [total_contact_moment](Ans_DataProcessing_operators_result_total_contact_moment.md) | total_contact_moment() |
| [total_mass](Ans_DataProcessing_operators_result_total_mass.md) | Reads total mass from mode file.   ///available inputs: data_sources (DataSources) |
| [total_pressure](Ans_DataProcessing_operators_result_total_pressure.md) | total_pressure() |
| [total_strain](Ans_DataProcessing_operators_result_total_strain.md) | total_strain() |
| [total_temperature](Ans_DataProcessing_operators_result_total_temperature.md) | total_temperature() |
| [transform_invariant_terms_rbd](Ans_DataProcessing_operators_result_transform_invariant_terms_rbd.md) | transform_invariant_terms_rbd() |
| [transient_rayleigh_integration](Ans_DataProcessing_operators_result_transient_rayleigh_integration.md) | Computes the transient Rayleigh integral   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer), time_scoping (Int32, IList int, Scoping, System.Collections.IEnumerable), field (Field), observation_mesh (MeshedRegion), mass_density (double), speed_of_sound (double) |
| [turbulent_kinetic_energy](Ans_DataProcessing_operators_result_turbulent_kinetic_energy.md) | turbulent_kinetic_energy() |
| [turbulent_viscosity](Ans_DataProcessing_operators_result_turbulent_viscosity.md) | turbulent_viscosity() |
| [velocity](Ans_DataProcessing_operators_result_velocity.md) | velocity() |
| [velocity_X](Ans_DataProcessing_operators_result_velocity_X.md) | velocity_X() |
| [velocity_Y](Ans_DataProcessing_operators_result_velocity_Y.md) | velocity_Y() |
| [velocity_Z](Ans_DataProcessing_operators_result_velocity_Z.md) | velocity_Z() |
| [volume_fraction](Ans_DataProcessing_operators_result_volume_fraction.md) | volume_fraction() |
| [wall_shear_stress](Ans_DataProcessing_operators_result_wall_shear_stress.md) | wall_shear_stress() |
| [workflow_energy_per_component](Ans_DataProcessing_operators_result_workflow_energy_per_component.md) | Calculates the cumulated energy per component (Named Selection). For cyclic and multistage models, the expansion will be automatically done.   ///available inputs: time_scoping (Scoping) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional), energy_type (Int32) (optional), data_sources (DataSources), named_selection1 (string) (optional), named_selection2 (string) (optional) |
| [workflow_energy_per_harmonic](Ans_DataProcessing_operators_result_workflow_energy_per_harmonic.md) | Calculates the cumulated energy per harmonic in a multistage multiharmonic model.   ///available inputs: time_scoping (Scoping) (optional), mesh_scoping (Scoping) (optional), energy_type (Int32) (optional), data_sources (DataSources) |
| [write_cms_rbd_file](Ans_DataProcessing_operators_result_write_cms_rbd_file.md) | write_cms_rbd_file() |
| [write_motion_dfmf_file](Ans_DataProcessing_operators_result_write_motion_dfmf_file.md) | write_motion_dfmf_file() |
| [y_plus](Ans_DataProcessing_operators_result_y_plus.md) | y_plus() |
