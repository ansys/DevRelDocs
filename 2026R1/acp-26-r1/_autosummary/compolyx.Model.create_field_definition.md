# create_field_definition

<a id="compolyx.Model.create_field_definition"></a>

#### Model.create_field_definition(name, id=None, field_variable_name=None, scope_entities=None, scalar_field=None, full_mapping=False, active=True, locked=False)

Create a new field definition.

### Parameters:
  - name: The name of the field definition.
  - id: The ID of the field definition.
  - field_variable: String identifier of the field.
  - scope_entities: A list of scope entities defining the region of definition.
  - scalar_field: Tabular scalar column defining the field.
  - full_mapping: Boolean for whether offsets are to be included during the interpolation process.
### Returns:
  The created field definition.
