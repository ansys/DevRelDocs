# Changelog

## Version 2026 R1

### New APIs

- `get_test_point_props()`: Retrieves test point properties.
- `get_ict_fixtures_props()`: Retrieves ICT fixture properties.
- `update_test_points()`: Updates test point properties.
- `update_ict_fixtures()`: Updates ICT fixture properties.
- `get_mount_point_props()`: Retrieves mount point properties.
- `update_mount_points()`: Updates mount point properties.
- `import_copper_files()`: Imports copper files into the project.
- `import_thermal_signal()`: Imports a thermal signal profile.
- `save_harmonic_profile()`: Saves a harmonic vibration profile.
- `save_random_vibe_profile()`: Saves a random vibration profile.
- `save_shock_pulse_profile()`: Saves a shock pulse profile.
- `save_thermal_profile()`: Saves a thermal profile.
- `delete_event()`: Deletes a lifecycle event.
- `delete_phase()`: Deletes a lifecycle phase.
- `import_parts_to_avl()`: Imports parts into the Approved Vendor List (AVL).

### Modified APIs

- `import_thermal_signal()`: Updated rainflow cycle binning to use separate binning parameters for range, mean, and dwell.
- `export_FEA_model()`: Added `pcb_material_elasticity` option.
- `get_stackup_props()`: Response now includes `improveStackupModelEnabled`.

### Removed APIs

- `get_part_location()`: Removed deprecated API from `SherlockPartsService`.

### API bug fixes

- `load_random_vibe_profile()`: Fixed issue preventing CSV files from loading into life cycle profiles.
- `load_thermal_profile()`: Fixed issue preventing CSV files from loading into life cycle profiles.
- `load_harmonic_profile()`: Fixed issue preventing CSV files from loading into life cycle profiles.
- `load_shock_profile_dataset()`: Fixed issue preventing CSV files from loading into life cycle profiles.
- `load_shock_profile_pulses()`: Fixed issue preventing CSV files from loading into life cycle profiles.