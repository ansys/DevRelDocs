# import_model

<a id="compolyx.DB.import_model"></a>

## DB.import_model(name, path, format, ignored_entities=None, convert_section_data=None, unit_system_type=None, reference_surface_input_unit_system_type=None)

Create a model from file.

### Parameters
  - name: Custom name of the model.
  - path: Path to the data file.
  - format: File format string. Available options: ‘abaqus:inp’,’ansys:cdb’, ‘ansys:dat’, ‘nastran:bdf’, and ‘ansys:h5’.
  - ignored_entities: Entities to ignore. Can be a subset of the following list: [‘mesh’, ‘element_sets’, ‘materials’, ‘coordinate_systems’, ‘shell_sections’].
  - convert_section_data: Whether to import and convert the shell section data into ACP composite definitions. Default is ‘False’.
  - unit_system_type: Set the unit system of the model to this type. Ignored if a unit system was already defined in the data file.
  - reference_surface_input_unit_system_type: Set the unit system of the reference surface if the unit system cannot be read from the input.
