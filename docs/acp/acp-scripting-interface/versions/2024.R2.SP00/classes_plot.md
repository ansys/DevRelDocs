# Plot classes

<a id="plotcontainer-classes"></a>

## `PlotContainer` classes

<a id="plotdatadict-class"></a>

### `PlotDataDict` Class

<a id="compolyx.plot_data.PlotDataDict"></a>

### *class* compolyx.plot_data.PlotDataDict(name, label=None, obj=None, list=[], item_type=<class 'object'>, parent=None, key_attr='name')

<a id="compolyx.plot_data.PlotDataDict.copy_plot"></a>

#### copy_plot(source)

Copy a plot object.

* **Parameters:**
  - source: Plot object to be copied.
* **Returns:**
  Object of the plot duplicate.

**Example:**
  Make a copy of the thickness plot “My_Thickness_Plot”:
  <br/>
  ```default
  >>> plot_copy = db.active_model.layup_plots.copy_plot( db.active_model.layup_plots['My_Thickness_Plot'] )
  ```

<a id="layupplotdict-class"></a>

### `LayupPlotDict` Class

<a id="compolyx.plot_data.LayupPlotDict"></a>

### *class* compolyx.plot_data.LayupPlotDict(name, label=None, obj=None, list=[], item_type=<class 'object'>, parent=None, key_attr='name')

Container for Layup Plots.

<a id="compolyx.plot_data.LayupPlotDict.create_angle_plot"></a>

#### create_angle_plot(name=None, id=None, scope_entire_model=True, data_scope=[], show_on_solids=False, show_on_section_cuts=True, show_ply_offsets=False, ply_offset_scale_factor=1.0, component=None, add_to_active_set=True, locked=False)

Create a Angle Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned.
   
    Applicable options: Element Set, Oriented Selection Set, Modeling Ply, and Sampling Point.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_on_section_cuts: Whether to show the results on the surface section cuts as well. Default is True.
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
* **Returns:**
  The plot object.

**Example:**
  Create an angle plot with Data Scope set to Element Set “All_Elements”:
  <br/>
  ```default
  >>> angle_plot = db.active_model.layup_plots.create_angle_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'])
  ```

<a id="compolyx.plot_data.LayupPlotDict.create_draping_plot"></a>

#### create_draping_plot(name=None, id=None, show_flatwrap=True, show_draping_mesh=True, add_to_active_set=True, locked=False)

Create a Draping Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
* **Returns:**
  The plot object.

**Example:**
  Create a draping plot with Data Scope set to Element Set “All_Elements”:
  <br/>
  ```default
  >>> draping_plot = db.active_model.layup_plots.create_draping_plot(self, name="MyPlot")
  ```

<a id="compolyx.plot_data.LayupPlotDict.create_field_definition_plot"></a>

#### create_field_definition_plot(name=None, id=None, scope_entire_model=True, data_scope=[], field_variable_name=None, show_on_solids=False, add_to_active_set=True, locked=False)

Create a FieldDefinition Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
* **Returns:**
  The plot object.

**Example:**
  Create a field definition plot for field degradation with Data Scope set to Element Set “All_Elements” in ply_wise mode:
  <br/>
  ```default
  >>> field_plot = db.active_model.layup_plots.create_field_definition_plot(self, name="MyPlot", field_variable_name="degradation", data_scope=db.active_model.element_sets['All_Elements'], ply_wise = True)
  ```

<a id="compolyx.plot_data.LayupPlotDict.create_layup_mapping_plot"></a>

#### create_layup_mapping_plot(name=None, id=None, data_scope=[], ply_wise=True, add_to_active_set=True, locked=False, component=None, show_on_solids=True, active=True)

Create a Layup Mapping Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Imported Solid Model.
  - ply_wise: True or False (default). Decides whether to return the thickness of the individual plies or of the whole stack of plies present at an element.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - component: Specifies the active component
  - show_on_solids: Whether to show the values of the solid element or not.
  - active: Whether the plot is active or not.
* **Returns:**
  The plot object.

**Example:**
  Create a thickness plot with Data Scope set to Element Set “All_Elements” in ply_wise mode:
  <br/>
  ```default
  >>> thick_plot = db.active_model.layup_plots.create_layup_mapping_plot(self, name="MyPlot", data_scope=[db.active_model.solid_models['ImportedSolidModel'], ply_wise = True)
  ```

<a id="compolyx.plot_data.LayupPlotDict.create_material_plot"></a>

#### create_material_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False, component='E1', use_all_available_fields=True, field_variable_names=[], shear_angle_enabled=False, temperature_enabled=False)

Create a Material Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
  - component: Specifies the component.
  - use_all_available_fields: True (default) or False. Whether to enable all available field variables in the evaluation or not.
* **Returns:**
  The plot object.

**Example:**
  Create a material plot with Data Scope set to Element Set “All_Elements” showing the Young Modulus E2:
  <br/>
  ```default
  >>> E2_plot = db.active_model.layup_plots.create_material_plot(name="E2_Plot", data_scope=[db.active_model.element_sets['All_Elements']], component = 'E2')
  ```

<a id="compolyx.plot_data.LayupPlotDict.create_scalar_field_plot"></a>

#### create_scalar_field_plot(name=None, id=None, scope_entire_model=True, data_scope=[], scalar_field=None, show_supporting_points=False, show_supporting_point_labels=False, supporting_point_scale_factor=1.0, show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False)

Create a Field Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - ply_wise: True or False (default). Decides whether to return the field values of the individual plies or of the whole stack of plies present at an element.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets=True.
* **Returns:**
  The plot object.

<a id="compolyx.plot_data.LayupPlotDict.create_thickness_plot"></a>

#### create_thickness_plot(name=None, id=None, scope_entire_model=True, data_scope=[], ply_wise=False, show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False, component='thickness')

Create a Thickness Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - ply_wise: True or False (default). Decides whether to return the thickness of the individual plies or of the whole stack of plies present at an element.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
  - component: Specifies the component.
* **Returns:**
  The plot object.

**Example:**
  Create a thickness plot with Data Scope set to Element Set “All_Elements” in ply_wise mode:
  <br/>
  ```default
  >>> thick_plot = db.active_model.layup_plots.create_thickness_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'], ply_wise = True)
  ```

<a id="compolyx.plot_data.LayupPlotDict.create_user_defined_plot"></a>

#### create_user_defined_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], user_data=[], user_text=[], user_script=None, user_script_enabled=False, show_on_solids=False, show_user_text=False, text_threshold=0.0, text_threshold_type='show_all', show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False)

Create a user-defined plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - user_data: Retrieve or provide the user data, which must obey the order of the user_element_indices or user_element_labels, respectively.
  - user_text: Access to the user-defined text of the plot. Empty strings can be inserted when no labels are to be shown for certain elements.
  - user_script: The body of the script to be executed on update if user_script_enabled = ``True``.
  - user_script_enabled: Boolean that controls if a custom script is run on update.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_user_text: True or False (default). Whether to show the text, which the user provided.
  - text_threshold_type: “show_all” (default), “show_only_values_above_threshold”, “show_only_values_below_threshold. Threshold can be set using the text_threshold property
  - text_threshold: Threshold used for showing text if text_threshold_type is not “show_all”
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
* **Returns:**
  The plot object.

**Example:**
  Create a user-defined plot with Data Scope set to Element Set “All_Elements”:
  <br/>
  ```default
  >>> u_plot = db.active_model.layup_plots.create_user_defined_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'])
  ```

<a id="postprocessingplotdict-class"></a>

### `PostProcessingPlotDict` Class

<a id="compolyx.plot_data.PostProcessingPlotDict"></a>

### *class* compolyx.plot_data.PostProcessingPlotDict(name, label=None, obj=None, list=[], item_type=<class 'object'>, parent=None, key_attr='name')

Container for Postprocessing Plots.

<a id="compolyx.plot_data.PostProcessingPlotDict.create_deformation_contour_plot"></a>

#### create_deformation_contour_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], component=None, spot=None, ply_wise=False, show_on_solids=False, solution_set=-1)

Create a Deformation Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - component: ‘x’, ‘y’, ‘z’, ‘rotx’, ‘roty’, ‘rotz’, ‘usum’.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - solution_set: Selection of the Solution Set.
* **Returns:**
  The plot object.

**Example:**
  Create a deformation plot with Data Scope set to Element Set “All_Elements” for ‘rotx’:
  <br/>
  ```default
  >>> defo_plot = db.active_model.solutions['Solution.1'].plots.create_deformation_contour_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'], component = 'rotx')
  ```

<a id="compolyx.plot_data.PostProcessingPlotDict.create_failure_plot"></a>

#### create_failure_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], component=None, spot=None, ply_wise=False, show_on_solids=False, show_critical_failure_mode=True, show_critical_layer=False, show_critical_load_case=False, text_threshold=0.0, text_threshold_auto=True, failure_criteria_definition=None, show_ply_offsets=False, ply_offset_scale_factor=1.0, solution_set=-1)

Create a Failure Criterion Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - component: ‘irf’, ‘mos’, or ‘rf’, which are Inverse Reserve Factor, Margin of Safety, and Reserve Factor.
  - ply_wise: True or False (default). Decides whether to evaluate for individual plies or pick the most critical ply per element.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_critical_failure_mode: True (default) or False. Whether to show the text, which indicates the mode of failure.
  - show_critical_layer: Ture or False (default). Whether to show the text, which indicates the number of the failing ply (only if ply_wise = ``False``).
  - show_critical_load_case: Ture or False (default). Whether to show the text, which indicates the load case for which failure is predicted (only for Envelope Solutions).
  - text_threshold: Threshold value above/below which text for an element is hidden. This helps to declutter the text plot.
  - text_threshold_auto: True (default) or False. If True, suggested text_thersold values are used.
  - failure_criteria_definition: Object of the failure criterion definition to be used for this plot.
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
  - solution_set: Selection of the Solution Set.
* **Returns:**
  The plot object.

**Example:**
  Create a failure criterion plot with Data Scope set to Element Set “All_Elements”, showing the inverse reserve factor with the most critical layer per element for failure criterion “MyFC”, and not showing any text.
  <br/>
  ```default
  >>> fc_plot = db.active_model.solutions['Solution.1'].plots.create_failure_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'], component = 'irf', ply_wise = False, show_critical_failure_mode = False, failure_criteria_definition = db.active_model.definitions['MyFC'])
  ```

<a id="compolyx.plot_data.PostProcessingPlotDict.create_material_plot"></a>

#### create_material_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False, component='E1', use_all_available_fields=True, field_variable_names=[], shear_angle_enabled=False, temperature_enabled=False, solution_set=-1)

Create a Material Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
  - component: Specifies the component.
  - use_all_available_fields: True (default) or False. Whether to enable all available field variables in the evaluation or not.
  - solution_set: Selection of the Solution Set.
* **Returns:**.
  The plot object.

<a id="compolyx.plot_data.PostProcessingPlotDict.create_progressive_damage_plot"></a>

#### create_progressive_damage_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], component=None, spot=None, ply_wise=False, show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, solution_set=-1)

Create a Progressive Damage Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - component: ‘state’, ‘fc’, ‘ft’, ‘mc’, ‘mt’, ‘s’ which are damage status, fiber compressive/tension damage, matrix compressive/tension damage and shear damage.
  - spot: ‘bot’, ‘top’, ‘mid’ (only if ply_wise = ``True``)
  - ply_wise: True (default) or False. Decides whether to evaluate for individual plies or return the result of the finite element.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
  - solution_set: Selection of the Solution Set.
* **Returns:**
  The plot object.

**Example:**
  Create a progressive damage plot with Data Scope set to Element Set “All_Elements” for ‘e1’ at ‘mid’ in ply_wise mode:
  <br/>
  ```default
  >>> pd_plot = db.active_model.solutions['Solution.1'].plots.create_progressive_damage_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'], component = 'state', spot = 'bot', ply_wise = Flase)
  ```

<a id="compolyx.plot_data.PostProcessingPlotDict.create_strain_plot"></a>

#### create_strain_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], component=None, spot=None, ply_wise=True, show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, solution_set=-1)

Create a Strain Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - component: ‘e1’, ‘e2’, ‘e3’, ‘e12’, ‘e23’, ‘e13’, ‘eI’, ‘eII’, ‘eIII’.
  - spot: ‘bot’, ‘top’, ‘mid’ (only if ply_wise = ``True``).
  - ply_wise: True (default) or False. Decides whether to evaluate for individual plies or return the result of the finite element.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
  - solution_set: Selection of the Solution Set.
* **Returns:**
  The plot object.

**Example:**
  Create a strain plot with Data Scope set to Element Set “All_Elements” for ‘e1’ at ‘mid’ in ply_wise mode:
  <br/>
  ```default
  >>> strain_plot = db.active_model.solutions['Solution.1'].plots.create_strain_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'], component = 's1', spot = 'mid', ply_wise = True)
  ```

<a id="compolyx.plot_data.PostProcessingPlotDict.create_stress_plot"></a>

#### create_stress_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], component=None, spot=None, ply_wise=True, show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, interlaminar_normal_stresses=False, solution_set=-1)

Create a Stress Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - component: ‘s1’, ‘s2’, ‘s3’, ‘s12’, ‘s23’, ‘s13’, ‘sI’, ‘sII’, ‘sIII’.
  - spot: ‘bot’, ‘top’, ‘mid’ (only if ply_wise = ``True``).
  - ply_wise: True (default) or False. Decides whether to evaluate for individual plies or return the result of the finite element.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
  - solution_set: Selection of the Solution Set.
* **Returns:**
  The plot object.

**Example:**
  Create a stress plot with Data Scope set to Element Set “All_Elements” for ‘s1’ at ‘mid’ in ply_wise mode:
  <br/>
  ```default
  >>> stress_plot = db.active_model.solutions['Solution.1'].plots.create_stress_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'], component = 's1', spot = 'mid', ply_wise = True)
  ```

<a id="compolyx.plot_data.PostProcessingPlotDict.create_temperature_plot"></a>

#### create_temperature_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], component=None, spot=None, ply_wise=False, show_on_solids=True, solution_set=-1)

Create a Temperature Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point
  - spot: ‘bot’, ‘top’, ‘mid’ (only if ply_wise = ``True``)
  - ply_wise: True (default) or False. Decides whether to evaluate for individual plies or return the result of the finite element.
  - solution_set: Selection of the Solution Set.
* **Returns:**
  The plot object.

**Example:**
  Create a temperature plot with Data Scope set to Element Set “All_Elements” with spot set to ‘mid’ in ply_wise mode:
  <br/>
  ```default
  >>> temp_plot = db.active_model.solutions['Solution.1'].plots.create_temperature_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'], spot = 'mid', ply_wise = True)
  ```

<a id="compolyx.plot_data.PostProcessingPlotDict.create_user_defined_plot"></a>

#### create_user_defined_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], user_data=[], user_text=[], user_script=None, user_script_enabled=False, show_on_solids=False, show_user_text=False, text_threshold=0.0, text_threshold_type='show_all', show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False, solution_set=-1)

Create a user-defined plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active or not.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - user_data: Retrieve or provide the user data, which must obey the order of the user_element_indices or user_element_labels, respectively.
  - user_text: Access to the user-defined text of the plot. Empty strings can be inserted when no labels are to be shown for certain elements.
  - user_script: The body of the script to be executed on update if user_script_enabled = ``True``.
  - user_script_enabled: Boolean that controls if a custom script is run on update.
  - show_on_solids: True or False (default). Whether to show the results on the shell or solid model (if present).
  - show_user_text: True or False (default). Whether to show the text, which the user provided.
  - text_threshold_type: “show_all” (default), “show_only_values_above_threshold”, “show_only_values_below_threshold. Threshold can be set using the text_threshold property.
  - text_threshold: Threshold used for showing text if text_threshold_type is not “show_all”
  - show_ply_offsets: True or False (default). Whether to display ply-wise visualizations with ply offsets or not.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets = ``True``.
  - solution_set: Selection of the Solution Set.
* **Returns:**
  The plot object.

**Example:**
  Create a user-defined plot with Data Scope set to Element Set “All_Elements”:
  <br/>
  ```default
  >>> u_plot = db.active_model.layup_plots.create_user_defined_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'])
  ```

<a id="plotdata-classes"></a>

## `PlotData` classes

<a id="plotdata"></a>

### `PlotData`

<a id="compolyx.plot_data.PlotData"></a>

### *class* compolyx.plot_data.PlotData(graph, obj, parent=None)

<a id="compolyx.plot_data.PlotData.active"></a>

#### *property* active

Whether the plot is active or not; an inactive plot is not updated and it does not contain data.

<a id="compolyx.plot_data.PlotData.active_display_data"></a>

#### *property* active_display_data

Returns a dictionary containing display data for this plot owned by the active scene.

<a id="compolyx.plot_data.PlotData.add_data_scope_entity"></a>

#### add_data_scope_entity(entity)

Add one entity to the Data Scope of a plot.

* **Parameters:**
  - entity: Entity to be added. Applicable are Element Set, Oriented Selection Set, Modeling Ply, Production Ply, Analysis Ply, and Sampling Point.

**Example:**
  Add the Element Set “My_ESet” to a my_plot:
  <br/>
  ```default
  >>> my_plot.add_data_scope_entity(entity = db.active_model.element_sets['My_ESet'])
  ```

<a id="compolyx.plot_data.PlotData.all_display_data"></a>

#### *property* all_display_data

Returns a list of all display data classes in existence for this object.

<a id="compolyx.plot_data.PlotData.changed"></a>

#### *property* changed

Status boolean. Set to true if the underlying data has been changed. Write only property.

<a id="compolyx.plot_data.PlotData.clear_data_scope"></a>

#### clear_data_scope()

Clears the complete data scope of a plot (i.e. all scope entities are removed at once).

<a id="compolyx.plot_data.PlotData.component"></a>

#### *property* component

The requested result component for a specific plot, e.g. s1 for the stress in the 1-direction.

<a id="compolyx.plot_data.PlotData.components"></a>

#### *property* components

Return the possible component set on this plot type.

<a id="compolyx.plot_data.PlotData.data_scope"></a>

#### *property* data_scope

Data scope of the plot where results will be evaluated.

<a id="compolyx.plot_data.PlotData.description_changed"></a>

#### *property* description_changed

Status boolean. Set to true if the object’s description has been changed. Write only property.

<a id="compolyx.plot_data.PlotData.display_data_create"></a>

#### display_data_create(parent=None)

Function for internal use, not meant for scripting.

<a id="compolyx.plot_data.PlotData.enabled"></a>

#### *property* enabled

Whether this object is currently enabled or not. Mainly defined through the current application mode pre or post.

<a id="compolyx.plot_data.PlotData.eval_position"></a>

#### *property* eval_position

The finite element position at which the results are given, e.g. centroid or nodal.

<a id="compolyx.plot_data.PlotData.get_data"></a>

#### get_data(visible=None, selected=None)

Get data of plot.

* **Parameters:**
  - visible: Object(s) defining visible scope.
  - selected: Selected object(s) for ply-wise evaluations.
* **Returns:**
  Resulting n-dimensional array with plot data for each selected object.
  The scope of the data is evaluated identically as for get_element_xx functions as the intersection of:
  - data_scope of plot.
  - visible_scope defined by visible.
  - selection_scope defined by selected.

Data is returned independent of update status of plot, but only if results for the current plot configuration are available, else an empty array is returned.

**Examples:**

Get data for current ply-wise plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:
  <br/>
  ```default
  >>> data = my_plot.get_data(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2])
  ```

Get data for current element-wise plot with visible scope equal to all objects visible in current scene:
  <br/>
  ```default
  >>> data = my_plot.get_data(visible=db.active_model.active_scene.active_set.entities)
  ```

<a id="compolyx.plot_data.PlotData.get_deformations"></a>

#### get_deformations(visible=None, selected=None)

Function used internally to query matching nodal deformations for a given plot.
To query deformations in a script it is recommended to create a separate deformations plot and query its data using
normal get_data(…) method.

<a id="compolyx.plot_data.PlotData.get_element_indices"></a>

#### get_element_indices(visible=None, selected=None)

Get element indices (ACP internal element numbers starting from 0) of plot.

* **Parameters:**
  - visible: Object(s) defining visible scope.
  - selected: Selected object(s) for ply-wise evaluations.
* **Returns:**
  Resulting array with element indices from the intersection of:
  - data_scope of plot.
  - visible_scope defined by visible.
  - selection_scope defined by selected.

Indices are returned independent of update status of plot, but only if results for the current plot configuration are available, else an empty array is returned.

**Examples:**
  Get element indices for current plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:
  <br/>
  ```default
  >>> eis = my_plot.get_element_indices(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2])
  ```
  Get element indices for current plot with visible scope equal to all objects visible in current scene:
  <br/>
  ```default
  >>> eis = my_plot.get_element_indices(visible=db.active_model.active_scene.active_set.entities)
  ```

<a id="compolyx.plot_data.PlotData.get_element_labels"></a>

#### get_element_labels(visible=None, selected=None)

Get element labels (element numbers as read from / written to mesh files)  of plot.

* **Parameters:**
  - visible: Object(s) defining visible scope.
  - selected: Selected object(s) for ply-wise evaluations.
* **Returns:**
  Resulting array with element labels from the intersection of:
  - data_scope of plot.
  - visible_scope defined by visible.
  - selection_scope defined by selected.

Labels are returned independent of update status of plot, but only if results for the current plot configuration are available, else an empty array is returned.

**Examples:**
Get element labels for current plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:
  <br/>
  ```default
  >>> eis = my_plot.get_element_labels(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2])
  ```
  <br/>
 Get element labels for current plot with visible scope equal to all objects visible in current scene:

  ```pycon
  >>> eis = my_plot.get_element_labels(visible=db.active_model.active_scene.active_set.entities)
  ```

<a id="compolyx.plot_data.PlotData.get_full_description"></a>

#### get_full_description()

This function returns information displayed together with the legend.
Internal use only, not meant for scripting.

<a id="compolyx.plot_data.PlotData.has_element_wise"></a>

#### *property* has_element_wise

Whether the plot offers element-wise data.

<a id="compolyx.plot_data.PlotData.has_ply_wise"></a>

#### *property* has_ply_wise

Whether the plot offers ply-wise data.

<a id="compolyx.plot_data.PlotData.locked"></a>

#### *property* locked

Returns the locked status of the plot.

<a id="compolyx.plot_data.PlotData.name"></a>

#### *property* name

Name of object.

<a id="compolyx.plot_data.PlotData.ply_wise"></a>

#### *property* ply_wise

Whether to plot ply-wise or element-wise.

<a id="compolyx.plot_data.PlotData.remove_data_scope_entity"></a>

#### remove_data_scope_entity(entity)

Remove one entity to the Data Scope of a plot.

* **Parameters:**
  - entity: Entity to be removed. Valid options: Element Set, Oriented Selection Set, Modeling Ply, Production Ply, Analysis Ply, and Sampling Point.

**Example:**
  Remove the Element Set “My_ESet” from my_plot:
  <br/>
  ```default
  >>> my_plot.remove_data_scope_entity(entity = db.active_model.element_sets['My_ESet'])
  ```

<a id="compolyx.plot_data.PlotData.scope_entire_model"></a>

#### *property* scope_entire_model

Whether the plot scope is the entire model or a subset defined by the data_scope.

<a id="compolyx.plot_data.PlotData.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.plot_data.PlotData.serialize_properties"></a>

#### serialize_properties()

Serialize to Python string.

<a id="compolyx.plot_data.PlotData.show_on_solids"></a>

#### *property* show_on_solids

Whether to plot results on solid or shell elements.

<a id="compolyx.plot_data.PlotData.solution"></a>

#### *property* solution

Solution underlying the plot.

<a id="compolyx.plot_data.PlotData.solution_set"></a>

#### *property* solution_set

Solution Set selection.

<a id="compolyx.plot_data.PlotData.spot"></a>

#### *property* spot

Whether to plot data at bot, mid or top of the layer or laminate.

<a id="compolyx.plot_data.PlotData.spots"></a>

#### *property* spots

Return the possible spot set on this plot type.

<a id="compolyx.plot_data.PlotData.updated"></a>

#### *property* updated

Status boolean. Set to true if the underlying data has been changed. Write only property.

<a id="compolyx.plot_data.PlotData.uptodate"></a>

#### *property* uptodate

Whether the plot is uptodate.

<a id="contourdata"></a>

### `ContourData`

<a id="compolyx.plot_data.ContourData"></a>

### *class* compolyx.plot_data.ContourData(graph, obj, parent=None, display_data=None)

Bases: [`PlotData`](#compolyx.plot_data.PlotData)

<a id="compolyx.plot_data.ContourData.get_ply_offsets"></a>

#### get_ply_offsets(visible=None, selected=None)

Get the offset between plies and reference surface.

* **Parameters:**
  - visible: Object(s) defining visible scope.
  - selected: Selected object(s) for ply-wise evaluations.
* **Returns:**
  Resulting n-dimensional array of arrays with the ply-offset vectors for each node within the object/ply-selection:
  [
  [array(float, float, float), array(float, float, float), …]
  …
  ]

  The scope of the data is evaluated as the intersection of:
   - data_scope of plot.
   - visible_scope defined by visible.
   - selection_scope defined by selected.

**Example:**
  Get the ply-offsets for the current ply-wise plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:
  <br/>
  ```default
  >>> p_offs = my_contour_plot.get_ply_offsets(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2])
  ```

<a id="compolyx.plot_data.ContourData.minmax"></a>

#### *property* minmax

Min and max value of current data.

<a id="compolyx.plot_data.ContourData.minmax_last_query"></a>

#### *property* minmax_last_query

Min and max value of data of last query.

<a id="compolyx.plot_data.ContourData.ply_offset_scale_factor"></a>

#### *property* ply_offset_scale_factor

Offset scale factor.

<a id="compolyx.plot_data.ContourData.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="angledata"></a>

### `AngleData`

<a id="compolyx.plot_data.AngleData"></a>

### *class* compolyx.plot_data.AngleData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="compolyx.plot_data.AngleData.spot"></a>

#### *property* spot

Not applicable to an angle plot.

<a id="thicknessdata"></a>

### `ThicknessData`

<a id="compolyx.plot_data.ThicknessData"></a>

### *class* compolyx.plot_data.ThicknessData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="compolyx.plot_data.ThicknessData.spot"></a>

#### *property* spot

Not applicable to a thickness plot.

<a id="scalarfielddata"></a>

### `ScalarFieldData`

<a id="compolyx.plot_data.ScalarFieldData"></a>

### *class* compolyx.plot_data.ScalarFieldData(graph, obj, parent=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="compolyx.plot_data.ScalarFieldData.get_support_point_coordinates"></a>

#### get_support_point_coordinates()

Get the coordinates of the supporting points.

* **Returns:**
  Resulting n-dimensional array with the coordinates for each supporting point.

Data is returned independent of update status of plot.

**Example:**
  Get coordinates for supporting points defining look-up table plot:
  <br/>
  ```default
  >>> coords = my_plot._get_support_point_coordinates()
  ```

<a id="compolyx.plot_data.ScalarFieldData.get_support_point_labels"></a>

#### get_support_point_labels()

Get the identifiers for the supporting points.

* **Returns:**
  Resulting n-dimensional array with the supporting point labels.

Labels are returned independent of update status of plot.

**Example:**
  Get labels for supporting points defining look-up table plot:
  <br/>
  ```default
  >>> coords = my_plot._get_support_point_labels()
  ```

<a id="compolyx.plot_data.ScalarFieldData.get_support_point_values"></a>

#### get_support_point_values()

Get the scalar values defined at the supporting points.

* **Returns:**
  Resulting n-dimensional array with the scalar values as defined at the supporting points.

Values are returned independent of update status of plot.

**Example:**
  Get scalar values for supporting points defining look-up table plot:
  <br/>
  ```default
  >>> coords = my_plot._get_support_point_values()
  ```

<a id="compolyx.plot_data.ScalarFieldData.scalar_field"></a>

#### *property* scalar_field

The underlying scalar field.

<a id="compolyx.plot_data.ScalarFieldData.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.plot_data.ScalarFieldData.show_supporting_point_labels"></a>

#### *property* show_supporting_point_labels

Whether to plot the labels of the supporting points.

<a id="compolyx.plot_data.ScalarFieldData.show_supporting_points"></a>

#### *property* show_supporting_points

Whether to the plot supporting points.

<a id="compolyx.plot_data.ScalarFieldData.spot"></a>

#### *property* spot

Not applicable to a scalar field plot.

<a id="compolyx.plot_data.ScalarFieldData.supporting_point_scale_factor"></a>

#### *property* supporting_point_scale_factor

Relative scale factor for the supporting points.

<a id="drapingdata"></a>

### `DrapingData`

<a id="compolyx.plot_data.DrapingData"></a>

### *class* compolyx.plot_data.DrapingData(graph, obj, parent=None)

Bases: [`PlotData`](#compolyx.plot_data.PlotData)

<a id="compolyx.plot_data.DrapingData.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.plot_data.DrapingData.serialize_properties"></a>

#### serialize_properties()

Serialize to Python string.

<a id="compolyx.plot_data.DrapingData.show_draping_mesh"></a>

#### *property* show_draping_mesh

Whether to plot the draping mesh.

<a id="compolyx.plot_data.DrapingData.show_flatwrap"></a>

#### *property* show_flatwrap

Whether to plot the flatwrap.

<a id="fielddefinitiondata"></a>

### `FieldDefinitionData`

<a id="compolyx.plot_data.FieldDefinitionData"></a>

### *class* compolyx.plot_data.FieldDefinitionData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="compolyx.plot_data.FieldDefinitionData.field_variable_name"></a>

#### *property* field_variable_name

The underlying field variable name.

<a id="compolyx.plot_data.FieldDefinitionData.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.plot_data.FieldDefinitionData.spot"></a>

#### *property* spot

Not applicable to a field definition plot.

<a id="layupmappingdata"></a>

### `LayupMappingData`

<a id="compolyx.plot_data.LayupMappingData"></a>

### *class* compolyx.plot_data.LayupMappingData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="compolyx.plot_data.LayupMappingData.spot"></a>

#### *property* spot

Not applicable to a layup mapping plot.

<a id="userdefineddata"></a>

### `UserDefinedData`

<a id="compolyx.plot_data.UserDefinedData"></a>

### *class* compolyx.plot_data.UserDefinedData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="compolyx.plot_data.UserDefinedData.serialize_properties"></a>

#### serialize_properties()

Serialize to Python string.

<a id="compolyx.plot_data.UserDefinedData.show_user_text"></a>

#### *property* show_user_text

Whether to show the user-defined text labels or not.

<a id="compolyx.plot_data.UserDefinedData.spot"></a>

#### *property* spot

Not applicable to a user-defined plot.

<a id="compolyx.plot_data.UserDefinedData.text_threshold"></a>

#### *property* text_threshold

Threshold above/below which user text is hidden.

<a id="compolyx.plot_data.UserDefinedData.text_threshold_type"></a>

#### *property* text_threshold_type

“show_all” (default), “show_only_values_above_threshold”, “show_only_values_below_threshold. The threshold can be set using the text_threshold property.

<a id="compolyx.plot_data.UserDefinedData.user_data"></a>

#### *property* user_data

Access to the user-defined data of the plot.

<a id="compolyx.plot_data.UserDefinedData.user_element_centroids"></a>

#### *property* user_element_centroids

Retrieve the centroids of the elements consistent with the current user element indices/labels.

<a id="compolyx.plot_data.UserDefinedData.user_element_indices"></a>

#### *property* user_element_indices

Access the indices for the given data-scope.

<a id="compolyx.plot_data.UserDefinedData.user_element_labels"></a>

#### *property* user_element_labels

Access the labels for the given data-scope.

<a id="compolyx.plot_data.UserDefinedData.user_script"></a>

#### *property* user_script

Body of the script to be executed is user_script_enabled is set to True.

<a id="compolyx.plot_data.UserDefinedData.user_script_enabled"></a>

#### *property* user_script_enabled

Whether to run a custom script on update.

<a id="compolyx.plot_data.UserDefinedData.user_text"></a>

#### *property* user_text

Access to the user-defined text of the plot. 

Note: the get method returns the filtered data which takes the threshold into account.

<a id="deformationcontourdata"></a>

### `DeformationContourData`

<a id="compolyx.plot_data.DeformationContourData"></a>

### *class* compolyx.plot_data.DeformationContourData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="straindata"></a>

### `StrainData`

<a id="compolyx.plot_data.StrainData"></a>

### *class* compolyx.plot_data.StrainData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="stressdata"></a>

### `StressData`

<a id="compolyx.plot_data.StressData"></a>

### *class* compolyx.plot_data.StressData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="compolyx.plot_data.StressData.interlaminar_normal_stresses"></a>

#### *property* interlaminar_normal_stresses

Whether to evaluate normal stresses.

<a id="failuredata"></a>

### `FailureData`

<a id="compolyx.plot_data.FailureData"></a>

### *class* compolyx.plot_data.FailureData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="compolyx.plot_data.FailureData.get_text"></a>

#### get_text(visible=None, selected=None, str_results=True)

Get text data of failure plot.

* **Parameters:**
  - visible: Object(s) defining visible scope.
  - selected: Selected object(s) for ply-wise evaluations.
  - str_results: Whether to return failure modes as strings or enums. (default is str)
* **Returns:**
  Resulting n-dimensional array with a dict with data for each selected object/ply:
  
  [
  dict( “fm” : array(int/str),  “li” : array(int), “lc” : array(int) ),
  dict( “fm” : array(int/str),  “li” : array(int), “lc” : array(int) ),
  …
  ]

  Possible keys:
  - fm: Failure Mode (enum).
  - li:  Layer index.
  - lc: Load case (for envelope solutions only).

  The scope of the data is evaluated identically as for get_element_xxx functions as the intersection of:
  - data_scope of plot.
  - visible_scope defined by visible.
  - selection_scope defined by selected.

Text data is returned independent of update status of plot, but only if results for the current plot configuration are available, else an empty array is returned.

**Examples:**

Get text data for current ply-wise plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:

```default
>>> text = my_plot.get_text(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2]).
```

Get textdata for current element-wise plot with visible scope equal to all objects visible in current scene:

```default
>>> text = my_plot.get_text(visible=db.active_model.active_scene.active_set.entities)
```

<a id="compolyx.plot_data.FailureData.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.plot_data.FailureData.show_critical_failure_mode"></a>

#### *property* show_critical_failure_mode

Whether to evaluate and show the critical failure mode.

<a id="compolyx.plot_data.FailureData.show_critical_layer"></a>

#### *property* show_critical_layer

Whether to evaluate and show the critical layer.

<a id="compolyx.plot_data.FailureData.show_critical_load_case"></a>

#### *property* show_critical_load_case

Whether to evaluate and show the critical laod case; available only for Envelope Solutions.

<a id="compolyx.plot_data.FailureData.spot"></a>

#### *property* spot

Not applicable to a failure plot.

<a id="compolyx.plot_data.FailureData.text_threshold"></a>

#### *property* text_threshold

Threshold value below which or above which the error mode text is displayed or not. Hidden text becomes ‘ns’ if you query the results by scripting.

<a id="compolyx.plot_data.FailureData.text_threshold_auto"></a>

#### *property* text_threshold_auto

Whether the threshold for visualization of failure text is set automatically or not. Hidden text becomes ‘ns’ if you query the results by scripting.

<a id="temperaturedata"></a>

### `TemperatureData`

<a id="compolyx.plot_data.TemperatureData"></a>

### *class* compolyx.plot_data.TemperatureData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="progressivedamagedata"></a>

### `ProgressiveDamageData`

<a id="compolyx.plot_data.ProgressiveDamageData"></a>

### *class* compolyx.plot_data.ProgressiveDamageData(graph, obj, parent=None, display_data=None)

Bases: [`ContourData`](#compolyx.plot_data.ContourData)

<a id="compolyx.plot_data.ProgressiveDamageData.spot"></a>

#### *property* spot

Not applicable to a progressive damage plot.
