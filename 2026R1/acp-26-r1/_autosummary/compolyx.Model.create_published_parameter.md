# create_published_parameter

<a id="compolyx.Model.create_published_parameter"></a>

#### Model.create_published_parameter(name, source_object=None, source_property='', user_script='', category='input', acp_type=None, description='', lower_limit=None, upper_limit=None, cyclic=False, float_list=[], string_list=[], unbound_value=None)

Create a published parameter.

### Parameters:
  - name: Name of the parameter.
  - source_object: Name of the object the parameter is linked to.
  - source_property: Property of the linked object the parameter controls.
  - user_script: Script to be executed for determining the parameter value. Only used when category==”expression_output”.
  - category: Controls the behavior of the parameter. Valid options: input, unbound_input, output, and expression_output.
  - acp_type: Type of the parameter, as used within ACP.
  - description: String description of the parameter.
  - lower_limit: The lower limit for numeric values.
  - upper_limit: The upper limit for numeric values.
  - cyclic: Whether a float value is cyclic.
  - float_list: A list of possible values for a float.
  - string_list: A list of possible values. List of objects if the property type is object, else list of strings.
  - unbound_value: The value of the parameter, if category==”unbound_input”. In this case, the parameter is not linked to an existing object.
### Returns:
  The created PublishedParameter.
