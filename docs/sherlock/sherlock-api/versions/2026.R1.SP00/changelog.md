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
- `import_thermal_signal()`: Imports a Thermal Signal Profile.
- `save_harmonic_profile()`: Saves a Harmonic Vibration Profile.
- `save_random_vibe_profile()`: Saves a Random Vibration profile.
- `save_shock_pulse_profile()`: Saves a Shock Pulse Profile.
- `save_thermal_profile()`: Saves a Thermal Profile.
- `delete_event()`: Deletes a Life Cycle Event.
- `delete_phase()`: Deletes a Life Cycle Phase.
- `import_parts_to_avl()`: Imports parts into the Approved Vendor List (AVL).
- `import_parts_to_avl()`: Imports parts into the Approved Vendor List (AVL).
- `update_life_cycle()`: Updates the Life Cycle of a project. It also enables you to save unsaved results files as the GUI does. It overwrites existing results files with the same name.
- `update_life_phase()`: Makes changes to a specific Life Phase. It also enables you to save unsaved results files if an archive file name is included. 

### Modified APIs

- `import_thermal_signal()`: Updated rainflow cycle binning to use separate binning parameters for range, mean, and dwell.
- `export_FEA_model()`: Added `pcb_material_elasticity` option.
- `update_mount_points()`: Added validation for the side property. If you input an invalid side, the request fails now.
- `add_CCA()`: The  API no longer waits thirty seconds to return. It now returns once the CCA has been successfully added.

### Deprecated APIs
- Stackup Service: `List_laminate_thickness_units()`
- Lifecycle Service: `List_freq_units()`, `List_temp-units()`, `list_ampl_units()`, `List_shock_load_units()`

### Removed APIs

- `get_part_location()`: Removed deprecated API from Sherlock Parts Service.
- `get_solders()`: Removed deprecated API from Sherlock Common Service. 
 


### API bug fixes

- `load_random_vibe_profile()`: Fixed issue preventing CSV files from loading into life cycle profiles.
- `load_thermal_profile()`: Fixed issue preventing CSV files from loading into life cycle profiles.
- `load_harmonic_profile()`: Fixed issue preventing CSV files from loading into life cycle profiles.
- `load_shock_profile_dataset()`: Fixed issue preventing CSV files from loading into life cycle profiles.
- `load_shock_profile_pulses()`: Fixed issue preventing CSV files from loading into life cycle profiles.