

### *class* py_monitoring_gui.ApproximatingCOPMatrixIndicesType

**Enumeration**


#### Interactions *= py_monitoring_gui.ApproximatingCOPMatrixIndicesType.Interactions*


#### MainEffects *= py_monitoring_gui.ApproximatingCOPMatrixIndicesType.MainEffects*


#### TotalEffects *= py_monitoring_gui.ApproximatingCOPMatrixIndicesType.TotalEffects*


### *class* py_monitoring_gui.ApproximationHistoryMode

**Enumeration**


#### Criteria *= py_monitoring_gui.ApproximationHistoryMode.Criteria*


#### Responses *= py_monitoring_gui.ApproximationHistoryMode.Responses*


### *class* py_monitoring_gui.CoIVisualPolynomBasisTypes

**Enumeration**


#### Automatic *= py_monitoring_gui.CoIVisualPolynomBasisTypes.Automatic*


#### Linear *= py_monitoring_gui.CoIVisualPolynomBasisTypes.Linear*


#### LinearMixed *= py_monitoring_gui.CoIVisualPolynomBasisTypes.LinearMixed*


#### Quadratic *= py_monitoring_gui.CoIVisualPolynomBasisTypes.Quadratic*


#### QuadraticMixed *= py_monitoring_gui.CoIVisualPolynomBasisTypes.QuadraticMixed*


### *class* py_monitoring_gui.CoPMatrixClassicIndicesType

**Enumeration**


#### Interactions *= py_monitoring_gui.CoPMatrixClassicIndicesType.Interactions*


#### MainEffects *= py_monitoring_gui.CoPMatrixClassicIndicesType.MainEffects*


#### TotalEffects *= py_monitoring_gui.CoPMatrixClassicIndicesType.TotalEffects*


### *class* py_monitoring_gui.CoPMatrixClassicObjectTextOrientation

**Enumeration**


#### Automatic *= py_monitoring_gui.CoPMatrixClassicObjectTextOrientation.Automatic*


#### Horizontal *= py_monitoring_gui.CoPMatrixClassicObjectTextOrientation.Horizontal*


#### Vertical *= py_monitoring_gui.CoPMatrixClassicObjectTextOrientation.Vertical*


### *class* py_monitoring_gui.CoPMatrixIndicesType

**Enumeration**


#### Interactions *= py_monitoring_gui.CoPMatrixIndicesType.Interactions*


#### MainEffects *= py_monitoring_gui.CoPMatrixIndicesType.MainEffects*


#### TotalEffects *= py_monitoring_gui.CoPMatrixIndicesType.TotalEffects*


### *class* py_monitoring_gui.CoPMatrixObjectTextOrientation

**Enumeration**


#### Automatic *= py_monitoring_gui.CoPMatrixObjectTextOrientation.Automatic*


#### Horizontal *= py_monitoring_gui.CoPMatrixObjectTextOrientation.Horizontal*


#### Vertical *= py_monitoring_gui.CoPMatrixObjectTextOrientation.Vertical*


### *class* py_monitoring_gui.ConvenienceGUI


#### \_\_init_\_()


#### *static* create_anthill_visuals(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: str, arg4: str)


#### *static* create_response_surface_2d_visuals(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: str, arg4: str)


#### *static* create_response_surface_3d_visuals(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: str, arg4: str, arg5: str)


#### *static* create_response_surface_topview_visuals(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: str, arg4: str, arg5: str)


### *class* py_monitoring_gui.ExtendedCorrelationMatrixViewTypes

**Enumeration**


#### All_Anthills *= py_monitoring_gui.ExtendedCorrelationMatrixViewTypes.All_Anthills*


#### All_Correlations *= py_monitoring_gui.ExtendedCorrelationMatrixViewTypes.All_Correlations*


#### Anthills_vs_Correlations *= py_monitoring_gui.ExtendedCorrelationMatrixViewTypes.Anthills_vs_Correlations*


#### Correlations_vs_Anthills *= py_monitoring_gui.ExtendedCorrelationMatrixViewTypes.Correlations_vs_Anthills*


### *class* py_monitoring_gui.MainWindow

The main window holding monitoring visuals.


#### ShowParameterSettings(arg2: bool)

Show/Hide parameter settings widget.


#### ShowPreferences(arg2: bool)

Show/Hide preferences widget.


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### build_mop()

Build an MOP with current settings


#### build_mop_save_as(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Build an MOP with current settings and write it to a new database


#### close(, arg2: int])


#### flush()

Process any pending events and flush main window to screen. 
: Use this functionality when changing data or setting to make shure, the changes are actually on-screen. 
  Particularily usefull when exporting pictures or animating visuals.


#### init_from_text_import_settings(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), arg3: [TextImportSettings](py_os_design.md#py_os_design.TextImportSettings))

Initialize monitoring from given text file and text import settings.


#### init_from_text_import_settings_file(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), arg3: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Initialize monitoring from given text file and text import settings file.


#### maximize()

Maximize mainwindow.


#### save(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), arg3: bool, arg4: bool, arg5: bool) → bool

Create and Save an OMDB file with the current monitoring data


#### show_parameter_settings(arg2: bool)

Show/Hide parameter settings widget.


#### show_preferences(arg2: bool)

Show/Hide preferences widget.


#### tile_subwindows()

Arrange subwindows in a tile pattern.


### *class* py_monitoring_gui.OSLMVisual

A visual displaying monitoring data in a certain way.


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### export(file_path: Path)

#### export(file_path: Path, width: int, height: int)

[0] Export the visual as picture, with given relative scale to file position given as path. 
: If scale is left empty, 1.0 is used. 
  Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100]. Set Watermark to True to export picture with watermark.

[1] Export the visual as picture, with given absolute sizes to file position given as path.
: Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100]. Set Watermark to True to export picture with watermark.


#### export_data(file_path: Path)

Export the visual as ascii with given format_string to file position given as path. 
: If format_string is left empty, “%g” is used.


#### set_font_size(arg2: int)

Set the font size at the visual.


### *class* py_monitoring_gui.PathBasedVisualTypes

**Enumeration**


#### Files *= py_monitoring_gui.PathBasedVisualTypes.Files*


#### Processes *= py_monitoring_gui.PathBasedVisualTypes.Processes*


### *class* py_monitoring_gui.RegressionType

**Enumeration**


#### LinearRegression *= py_monitoring_gui.RegressionType.LinearRegression*


#### NoRegression *= py_monitoring_gui.RegressionType.NoRegression*


#### QuadraticRegression *= py_monitoring_gui.RegressionType.QuadraticRegression*


### *class* py_monitoring_gui.ResponseSurfacePaletteData

**Enumeration**


#### AbsError *= py_monitoring_gui.ResponseSurfacePaletteData.AbsError*


#### CoP *= py_monitoring_gui.ResponseSurfacePaletteData.CoP*


#### Error *= py_monitoring_gui.ResponseSurfacePaletteData.Error*


#### RMSE *= py_monitoring_gui.ResponseSurfacePaletteData.RMSE*


#### SPDensity *= py_monitoring_gui.ResponseSurfacePaletteData.SPDensity*


#### Values *= py_monitoring_gui.ResponseSurfacePaletteData.Values*


### *class* py_monitoring_gui.StatisticAnalysisBoxType

**Enumeration**


#### MeanStddev *= py_monitoring_gui.StatisticAnalysisBoxType.MeanStddev*


#### None *= py_monitoring_gui.StatisticAnalysisBoxType.None*


#### Probability *= py_monitoring_gui.StatisticAnalysisBoxType.Probability*


### *class* py_monitoring_gui.StatisticAnalysisLimitsType

**Enumeration**


#### Lines *= py_monitoring_gui.StatisticAnalysisLimitsType.Lines*


#### None *= py_monitoring_gui.StatisticAnalysisLimitsType.None*


#### StackedBar *= py_monitoring_gui.StatisticAnalysisLimitsType.StackedBar*


### *class* py_monitoring_gui.StatisticAnalysisScalingType

**Enumeration**


#### MeanStddev *= py_monitoring_gui.StatisticAnalysisScalingType.MeanStddev*


#### MinMax *= py_monitoring_gui.StatisticAnalysisScalingType.MinMax*


#### None *= py_monitoring_gui.StatisticAnalysisScalingType.None*


### *class* py_monitoring_gui.StatisticAnalysisWhiskerType

**Enumeration**


#### MeanStddev *= py_monitoring_gui.StatisticAnalysisWhiskerType.MeanStddev*


#### None *= py_monitoring_gui.StatisticAnalysisWhiskerType.None*


#### Probability *= py_monitoring_gui.StatisticAnalysisWhiskerType.Probability*


### *class* py_monitoring_gui.Visual


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


### *class* py_monitoring_gui.Visuals


#### *class* Anthill


#### SetAbscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetDimensionForColor(color: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the additional dimension to be shown as color.


#### SetDimensionForSize(size: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the additional dimension to be shown as symbol_size.


#### SetDimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### SetOrdinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### UnsetDimensionForColor()

Unset the color dimension.


#### UnsetDimensionForSize()

Unset the color dimension.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimensions() → [DimensionVector](py_monitoring_kernel.md#py_monitoring_kernel.DimensionVector)

Return the actual visible dimensions as vector.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_regression_coefficients() → list

Return the coefficients of a chosen Regression as list. 
: Dependent to chosen Regression type linear or quadratic, the list is 2 or 3 entries long. 
  For a + b\*x you get [a,b], for a + b\*x + c\*x\*x yout get [a,b,c]. 
  In case of non valid regression you get an empty list.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_dimension_for_color(color: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the additional dimension to be shown as color.


#### set_dimension_for_size(size: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the additional dimension to be shown as symbol_size.


#### set_dimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ordinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_regression(arg2: [RegressionType](#py_monitoring_gui.RegressionType))

Set regression


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### unset_dimension_for_color()

Unset the color dimension.


#### unset_dimension_for_size()

Unset the color dimension.


#### update_plot()

Trigger an additional update on visual.


#### *class* ApproxDesignTable


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### *class* ApproxModelInfo


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### export(file_path: Path)

Export the visual as picture to file position given as path. 
: Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100].


#### export_data(file_path: Path)

Export the visual as ascii with given format_string to file position given as path. 
: If format_string is left empty, “%g” is used.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### set_font_size(arg2: int)

Set the font size at the visual.


#### *class* ApproximationHistory


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_mode(arg2: [ApproximationHistoryMode](#py_monitoring_gui.ApproximationHistoryMode))

Toggle the view between responses and criteria


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_show_all_results(arg2: bool)

Set true to show all results


#### set_show_minimal_local_cop_values(arg2: bool)

Set true to additionally show minimum local cop values


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### Bars *= py_monitoring_gui.CustomData_Type.Bars*


#### Box *= py_monitoring_gui.CustomData_Type.Box*


#### *class* BoxWhisker


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_box_probability_content(box_probability_content: float)

Set the probability content for the box. Box goes from median-content\*0.5 to median+content\*0.5.


#### set_caption(caption: str)

Set the caption.


#### set_group(group_name: str)

Set the group to be shown


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_scale(scale: bool)

Scale to min/max.


#### set_show_box(show: bool)

Show box.


#### set_show_limits(show: bool)

Show limits.


#### set_show_samples(show_samples: bool)

Show sample points.


#### set_show_whisker(show: bool)

Show whisker.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_whisker_probability_content(whisker_probability_content: float)

Set the probability content for the whisker. Whisker goes from median-content\*0.5 to median+content\*0.5.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* Cloud


#### SetAbscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetDimensionForColor(color: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the additional dimension to be shown as color.


#### SetDimensionForSize(size: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the additional dimension to be shown as symbol_size.


#### SetDimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), z_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### SetOrdinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### SetZAxis(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(2, … ) instead.


#### UnsetDimensionForColor()

Unset the color dimension.


#### UnsetDimensionForSize()

Unset the color dimension.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimensions() → [DimensionVector](py_monitoring_kernel.md#py_monitoring_kernel.DimensionVector)

Return the actual visible dimensions as vector.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### get_z_axis_label() → str

Get the z axis label.


#### has_legend() → bool


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_alpha(alpha_angle: float)

Set the first angle for an rotation based on Euler angles z-x’-z’’.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_beta(beta_angle: float)

Set the second angle for an rotation based on Euler angles z-x’-z’’.


#### set_caption(caption: str)

Set the caption.


#### set_dimension_for_color(color: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the additional dimension to be shown as color.


#### set_dimension_for_size(size: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the additional dimension to be shown as symbol_size.


#### set_dimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), z_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### set_gamma(gamma_angle: float)

Set the third angle for an rotation based on Euler angles z-x’-z’’.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_lighting_enabled(enabled: bool)

Set lighting enabled state to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_lines_enabled(enabled: bool)

Set lines enabled state to True or False.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_log_z_axis(enabled: bool)

Set the z-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ordinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_regression(arg2: [RegressionType](#py_monitoring_gui.RegressionType))

Set regression


#### set_surfaces_enabled(enabled: bool)

Set surfaces enabled state to True or False.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### set_z_axis(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(2, … ) instead.


#### set_z_axis_format(z_axis_format: str)

Set the axis format for z axis. Will be ignored if log axis is been chosen for z-axis.


#### set_z_axis_label(label_z: str)

Set the z axis label.


#### unset_dimension_for_color()

Unset the color dimension.


#### unset_dimension_for_size()

Unset the color dimension.


#### update_plot()

Trigger an additional update on visual.


#### *class* CoI


#### ListenToDimensionIndex(arg2: int)

deprecated - use set_dimension_id_at_index(0, … ) instead.


#### SetAdjusted(adjust: bool)

Toggle the view to show adjusted values.


#### SetDimension(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetInverted(invert: bool)

Toggle the view to show ( value ) or ( CoD - value ).


#### SetType(coi_type: [CoIVisualPolynomBasisTypes](#py_monitoring_gui.CoIVisualPolynomBasisTypes))

Set the type of coi calculation, where CoIVisualPolynomBasisTypes. 
: Automatic means that the best found model is used for calculation.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimension() → [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension)

Return the actual visible dimension.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_adjusted(adjust: bool)

Toggle the view to show adjusted values.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_inverted(invert: bool)

Toggle the view to show ( value ) or ( CoD - value ).


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_type(coi_type: [CoIVisualPolynomBasisTypes](#py_monitoring_gui.CoIVisualPolynomBasisTypes))

Set the type of coi calculation, where CoIVisualPolynomBasisTypes. 
: Automatic means that the best found model is used for calculation.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* CoP


#### ListenToDimensionIndex(arg2: int)

deprecated - use set_dimension_id_at_index(0, … ) instead.


#### SetDimension(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetFiltered(arg2: bool)


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimension() → [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension)

Return the actual visible dimension.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_filter_limit(filter_value: float[%])

Set the limit below which the single CoP values are filtered in percent.


#### set_filtered(arg2: bool)


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_show_interactions(show: bool)

Toggle view to see “Main effect” and “Interaction “ values additional to “Total effect” values.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* CoPMatrix


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_approximation_line_width_scale(line_width_scale: float)

Set line width scale with which the approximation line is shown.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_axes_rotation_enabled(enable: bool)

Set axes rotation enabled.


#### set_axes_rotation_orthogonal(enable: bool)

Set rotation angles to 0 degree if enough space for text exist, else to 90.


#### set_axes_rotation_x_angle(angle: float)

Set the rotation angle for x-axis.


#### set_axes_rotation_y_angle(angle: float)

Set the rotation angle for x-axis.


#### set_caption(caption: str)

Set the caption.


#### set_filter_limit(filter_limit: float[%])

Set the limit below which the values are filtered in percent.


#### set_filter_total_limit(total_filter_value: float[%])

Set the limit below which the total CoP values ( ModelCoP’s ) are filtered in percent.


#### set_indices_type(indices_type: [CoPMatrixIndicesType](#py_monitoring_gui.CoPMatrixIndicesType))

Toggle the view to see “Total effects”, “Main effects” or “Interactions” in matrix.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_object_text_orientation(orientation: [CoPMatrixObjectTextOrientation](#py_monitoring_gui.CoPMatrixObjectTextOrientation))

Toggle to change orientation of object text on tiles 
Automatic : horizontal if enough space, else vertical is tested 
Horizontal : ever show text horizontal
Vertical : ever show text vertical.


#### set_palette_limits(minimum: float, maximum: float)

#### set_palette_limits(minimum: float, maximum: float)

[0] Set the minimum and maximum values of palette.

[1] Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_resolution(resolution: int)

Set resolution of approximation line..


#### set_show_additional_points(show: bool)

Show additional points in tiles.


#### set_show_approximated_points(show: bool)

Show approximated points in tiles.


#### set_show_approximation(show: bool)

Show approximation line in tiles.


#### set_show_background_cop(show: bool)

Show background color in tiles.


#### set_show_calculated_response_value(show: bool)

Show calculated response value in last column.


#### set_show_cop(show: bool)

Show cop value in tiles.


#### set_show_deactivated_support_points(show: bool)

Show deactivated supports points in tiles.


#### set_show_extended(show: bool)

Show matrix in extended mode with response surface 2d plots in tiles.


#### set_show_filtered(show: bool)

Show all cop values including these filtered by mop.


#### set_show_grid(show: bool)

Show grid in tiles.


#### set_show_parameter_line(show: bool)

Show parameter line in tiles.


#### set_show_round_corners(show: bool)

Show tile with round corners or as squares.


#### set_show_selection(show: bool)

Show selection lines in grid plot.


#### set_show_support_points(show: bool)

Show support points in tiles.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* CoPMatrixClassic


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_axes_rotation_enabled(enable: bool)

Set axes rotation enabled.


#### set_axes_rotation_orthogonal(enable: bool)

Set rotation angles to 0 degree if enough space for text exist, else to 90.


#### set_axes_rotation_x_angle(angle: float)

Set the rotation angle for x-axis.


#### set_axes_rotation_y_angle(angle: float)

Set the rotation angle for x-axis.


#### set_caption(caption: str)

Set the caption.


#### set_filter_limit(filter_limit: float[%])

Set the limit below which the values are filtered in percent.


#### set_filter_total_limit(total_filter_value: float[%])

Set the limit below which the total CoP values ( ModelCoP’s ) are filtered in percent.


#### set_indices_type(indices_type: [CoPMatrixClassicIndicesType](#py_monitoring_gui.CoPMatrixClassicIndicesType))

Toggle the view to see “Total effects”, “Main effects” or “Interactions” in matrix.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_object_text_orientation(orientation: [CoPMatrixClassicObjectTextOrientation](#py_monitoring_gui.CoPMatrixClassicObjectTextOrientation))

Toggle to change orientation of object text on tiles 
Automatic : horizontal if enough space, else vertical is tested 
Horizontal : ever show text horizontal
Vertical : ever show text vertical.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* CorrelationCoefficient


#### ListenToDimensionIndex(arg2: int)

deprecated - use set_dimension_id_at_index(0, … ) instead.


#### SetDimension(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* CriteriaValues


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### Custom *= py_monitoring_gui.CustomData_Type.Custom*


#### *class* CustomData


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### add_data(layer_name: str, data: PyOSDesignEntry, style_vector: StyleList, channel_names: WStrList, Vizualisation_type: CustomData_Type) → bool

Add data as new layer to the Visual.


#### add_eval_mesh(layer_name: str, x: doubleVec vector, y: doubleVec vector, color: doubleVec values) → bool

Add data as new eval mesh layer to the Visual.


#### add_grid(layer_name: str, data: PyOSDesignEntry) → bool

Add data as new grid layer to the Visual.


#### add_mesh(layer_name: str, x: doubleVec vector, y: doubleVec vector, style_vector: StyleList) → bool

Add data as new mesh layer to the Visual. 
: If single_triangles=True, length of vectors has to be multiple size of 3 and equal. Produces single triangles. 
  If single_triangles=False, then a colored stripe is been produced. Sizes has to be equal or greater equal than 3.


#### clear_data()

Remove all layers.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_alt_axis(axis: int, \_labels: WStrList, ticks: doubleVec)

Set an alternate axis to index (0 == x, 1== y, 2==z).
: With labels as string_list, axes_ticks as vector, and an optional rotation_angle


#### set_axes_enabled(arg2: bool)


#### set_background_color(arg2: float, arg3: float, arg4: float, arg5: float)

Change the background color.


#### set_bar_width(layer_name: str, bar_width: float)

Set the width for StackedBar and Box (others will be ignored). 
: Senseful ranges between 1.0 (no space between bars) and 0.0 (bar is only a thin line). 
  When the value is greater than 1.0 bars overlap.


#### set_box_show_mean_and_median(layer_name: str, show_mean: bool)

Toggle visibility of ‘Mean’ point additional to ‘Median’ line, if enough data_points are given.


#### set_box_show_whisker(layer_name: str, show_whisker: bool)

Toggle visibility of BoxPlot’s outer lines (whisker).


#### set_caption(caption: str)

Set the caption.


#### set_iso_line_heights(layer_name: str, iso_lines_string: str)

#### set_iso_line_heights(layer_name: str, iso_lines: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))

[0] Set the iso_lines given as string with delimiters space and ‘,’ and ‘;’ . Does only have effect when showing eval_mesh in this layer.

[1] Set the iso lines as vector for given layer. Does only have effect when showing eval_mesh in this layer.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(arg2: float)


#### set_lines_enabled(arg2: bool)


#### set_log_x_axis(arg2: bool)


#### set_log_y_axis(arg2: bool)


#### set_object_text(arg2: str, arg3: [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList), arg4: int, arg5: int)

Set the object text (e.g. on bars), from given list, spread to matrix when column is greater than 1 (e.g. multibar).


#### set_palette_caption(layer_name: str, caption: str)

Set the caption to the palette for given layer.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(arg2: bool)


#### set_ranges_x(arg2: float, arg3: float)


#### set_ranges_y(arg2: float, arg3: float)


#### set_selection_color(arg2: str, arg3: int, arg4: int, arg5: int, arg6: int)

Set the selection color.


#### set_selection_text(arg2: str, arg3: [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList))

Set the selection text (e.g. on points, shown when selected), from given list.


#### set_surfaces_enabled(arg2: bool)


#### set_symbol_size(arg2: float)


#### set_x_axis_format(arg2: str)


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(arg2: str)


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### unset_alt_axis(arg2: int)

Unset the alternate axis at index (0 == x, 1== y, 2==z) to default float axis


#### unset_background_color()

Reset background color to default [0.9,0.9,0.9,1.0].


#### unset_object_text(arg2: str)

Unset the object text.


#### update_plot()

Trigger an additional update on visual.


#### *class* CustomData_Type

**Enumeration**


#### Bars *= py_monitoring_gui.CustomData_Type.Bars*


#### Box *= py_monitoring_gui.CustomData_Type.Box*


#### Custom *= py_monitoring_gui.CustomData_Type.Custom*


#### Grid *= py_monitoring_gui.CustomData_Type.Grid*


#### HorizontalBars *= py_monitoring_gui.CustomData_Type.HorizontalBars*


#### HorizontalBox *= py_monitoring_gui.CustomData_Type.HorizontalBox*


#### Lines *= py_monitoring_gui.CustomData_Type.Lines*


#### Points *= py_monitoring_gui.CustomData_Type.Points*


#### StackedBars *= py_monitoring_gui.CustomData_Type.StackedBars*


#### StackedHorizontalBars *= py_monitoring_gui.CustomData_Type.StackedHorizontalBars*


#### *class* DesignTable


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### *class* DimensionId


#### \_\_init_\_()


#### get_dimension_from_index(ax_index: int) → [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension)

Return the dimension set at ax_index, if exist, else return dimension().


#### get_dimension_id_from_index(ax_index: int) → int

Return the dimension_id set at ax_index, if exist, else return -1.


#### has_dimension_at_index(ax_index: int) → bool

Return True when a dimension is set at ax-index of plot.


#### has_dimension_id_at_index(ax_index: int) → bool

Return True when the plot has a dimension_combo_box id set at ax_index.


#### has_dimension_set_at_index(ax_index: int) → bool

Return True when a dimension is set at ax-index of plot.


#### listen_to_dimension_index(arg2: int)

deprecated - use set_dimension_id_at_index(0, … ) instead.


#### reset_user_defined_variable_selection()

Reset the previously made changes on dimension id to the predefined values, been saved at the visual on creation.


#### set_dimension(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_dimension_at_index(ax_index: int, dimension_at_x_i: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set a dimension at given ax_index to plot.


#### set_dimension_id_at_index(ax_index: int, combo_box_id: int)

Set a combo_box_id at ax_index. 
: Plot now shows content of belonging combo_box at ax_index. 
  e.g. SetDimensionToId(1,2) means that the plot now shows the chosen dimension from 3rd combo_box at y-axis.


#### unset_dimension_at_index(ax_index: int)

Unset the dimension at given ax_index. 
: Plot now shows the predefined behavior.


#### unset_dimension_id_at_index(ax_index: int)

Unset the dimension_id at given ax_index. 
: Plot now shows the predefined behavior.


#### *class* ExtendedCoPMatrix


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### export(file_path: Path)

#### export(file_path: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), width: int, height: int)

[0] Export the visual as picture, with given relative scale to file position given as path. 
: If scale is left empty, 1.0 is used.

[1] Export the visual as picture, with given absolute sizes to file position given as path.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### set_auto_rotate_axis_labels_enabled(enable: bool)

Enable/disable axis label auto rotation.


#### set_fix_projection_to_design(show: bool)

Enables/disables fix projection to designs.


#### set_indices_type(indices_type: [ApproximatingCOPMatrixIndicesType](#py_monitoring_gui.ApproximatingCOPMatrixIndicesType))

Toggle the view to see “Total effects”, “Main effects” or “Interactions” in matrix.


#### set_limit_axis_label_size(enable: bool)

Limit axis label size.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_show_approximation(show: bool)

Show/hide approximation line.


#### set_show_background_cop(show: bool)

Show/hide background COP.


#### set_show_cop(show: bool)

Show/hide COP.


#### set_show_filtered(show: bool)

Show/hide filtered parameters/responses.


#### set_show_grid(show: bool)

Show/hide grid.


#### set_show_parameter_line(show: bool)

Show/hide parameter line.


#### set_show_support_points(show: bool)

Show/hide support points.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_use_rectangular_view(show: bool)

Enables/disables rectangular view.


#### *class* ExtendedCorrelationMatrix


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### export_with_given_tile_sizes(arg2: Path, arg3: int, file_path: int)

Export the visual as picture, with given absolute tile sizes to file position given as path.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. 
: Be aware that much memory can be allocated, in case of many dimensions.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_sizes_with_given_tile_sizes(tile_width: float, tile_height: float) → list

Return list with size of plot when tiles have to be sized with x_tile_size and y_tile_size. Index 0 : width. index 1 : height.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_axes_rotation_enabled(enable: bool)

Set axes rotation enabled.


#### set_axes_rotation_orthogonal(enable: bool)

Set rotation angles to 0 degree if possible, else to 90.


#### set_axes_rotation_x_angle(angle: float)

Set the rotation angle for x-axis.


#### set_axes_rotation_y_angle(angle: float)

Set the rotation angle for y-axis.


#### set_caption(caption: str)

Set the caption.


#### set_histogram_classes(classes: int)

Set the number of histogram classes.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_view_type(view_type: [ExtendedCorrelationMatrixViewTypes](#py_monitoring_gui.ExtendedCorrelationMatrixViewTypes))

Change the view of the visual to show the entils as
: ExtendedCorrelationMatrixViewTypes.All_Correlations - correlation values in all entils 
  ExtendedCorrelationMatrixViewTypes.Correlations_vs_Anthills - correlation values in upper left part, histograms on main diagonal and anthills in lower right part. 
  ExtendedCorrelationMatrixViewTypes.Anthills_vs_Correlations - anthills in upper left part, histograms on main diagonal and correlation values in lower right part. 
  ExtendedCorrelationMatrixViewTypes.All_Anthills - histograms on main diagonal, elsewhere anthills.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### Grid *= py_monitoring_gui.CustomData_Type.Grid*


#### *class* Histogram


#### ListenToDimensionIndex(arg2: int)

deprecated - use set_dimension_id_at_index(0, … ) instead.


#### SetAlpha(alpha_value: float)

Adjust the result wenn automatic fit is been chosen (actual when rv_types size is greater 1).


#### SetChi2(chi_flag: bool)

Adjust the result wenn automatic fit is been chosen (actual when rv_types size is greater 1).


#### SetDimension(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimension() → [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension)

Return the actual visible dimension.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_statistical_data() → list

Get statistical data as list of lists.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_alpha(alpha_value: float)

Adjust the result wenn automatic fit is been chosen (actual when rv_types size is greater 1).


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_chi_2(chi_flag: bool)

Adjust the result wenn automatic fit is been chosen (actual when rv_types size is greater 1).


#### set_fit_type(fit_type: [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType))

Set a random variable type for the fit.


#### set_fit_type_to_automatic()

Set fit to automatic.


#### set_fit_type_to_none()

Set fit to none.


#### set_fit_types_for_automatic(rv_type: [RandomVariableTypeVec](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableTypeVec))

Set a vector of random variable types to be used for automatic fit.


#### set_histogram_classes(classes: int)

Set the number of histogram classes.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_lines_enabled(enabled: bool)

Set lines enabled state to True or False.


#### set_probability_value(probability_value: float)

Set probability value.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_sigma_level(sigma_level: float)

Set sigma level for pdf.


#### set_surfaces_enabled(enabled: bool)

Set surfaces enabled state to True or False.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### show_as_cdf(show_as_cdf: bool)

Show histogram bars, defined pdf and fitted pdf as cdf.


#### show_defined_pdf(show_defined_pdf: bool)

Show defined pdf.


#### show_limits(sigma_level: bool)

Show limits.


#### show_probability(show_probability: bool)

Show probability.


#### show_process_capability(show_process_capability: bool)

Show process capability.


#### unset_fit_types_for_automatic()

Unset the vector of random variable types to standard.


#### update_plot()

Trigger an additional update on visual.


#### *class* History


#### SetAbscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimension() → [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension)

Return the actual visible dimension.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### HorizontalBars *= py_monitoring_gui.CustomData_Type.HorizontalBars*


#### HorizontalBox *= py_monitoring_gui.CustomData_Type.HorizontalBox*


#### Lines *= py_monitoring_gui.CustomData_Type.Lines*


#### *class* New_ParallelCoordinatesPlot


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### export(file_path: Path)

#### export(file_path: Path, width: int, height: int)

[0] Export the visual as picture, with given relative scale to file position given as path. 
: If scale is left empty, 1.0 is used. 
  Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100].

[1] Export the visual as picture, with given absolute sizes to file position given as path.
: Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100].


#### get_caption() → str

Get the caption.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### set_caption(caption: str)

Set the caption.


#### set_font_size(arg2: int)

Set the font size at the visual.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### *class* OptimizationHistory


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_active_layer_names() → list

Get actual active layer names.


#### get_available_layer_names() → list

Get all possible layer names.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_all_layers_active_state(arg2: bool)

Set active state of all layers.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_layer_active_state(arg2: str, arg3: bool)

Set active state of layer with given layer name.


#### set_layers_active_state(arg2: list, arg3: bool)

Set active state of layers with given layer names.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* PCAData


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* ParallelCoordinatesPlot


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### export(file_path: Path)

#### export(file_path: Path, width: int, height: int)

[0] Export the visual as picture, with given relative scale to file position given as path. 
: If scale is left empty, 1.0 is used. 
  Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100].

[1] Export the visual as picture, with given absolute sizes to file position given as path.
: Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100].


#### get_caption() → str

Get the caption.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### set_caption(caption: str)

Set the caption.


#### set_font_size(arg2: int)

Set the font size at the visual.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### *class* ParameterValues


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* Parametrization


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### *class* Pareto2D


#### SetAbscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetDimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### SetOrdinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimensions() → [DimensionVector](py_monitoring_kernel.md#py_monitoring_kernel.DimensionVector)

Return the actual visible dimensions as vector.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_dimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ordinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* Pareto3D


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimensions() → [DimensionVector](py_monitoring_kernel.md#py_monitoring_kernel.DimensionVector)

Return the actual visible dimensions as vector.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### get_z_axis_label() → str

Get the z axis label.


#### has_legend() → bool


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_alpha(alpha_angle: float)

Set the first angle for an rotation based on Euler angles z-x’-z’’.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_beta(beta_angle: float)

Set the second angle for an rotation based on Euler angles z-x’-z’’.


#### set_caption(caption: str)

Set the caption.


#### set_dimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), z_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### set_gamma(gamma_angle: float)

Set the third angle for an rotation based on Euler angles z-x’-z’’.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_lighting_enabled(enabled: bool)

Set lighting enabled state to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_lines_enabled(enabled: bool)

Set lines enabled state to True or False.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_log_z_axis(enabled: bool)

Set the z-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ordinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### set_surfaces_enabled(enabled: bool)

Set surfaces enabled state to True or False.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### set_z_axis(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(2, … ) instead.


#### set_z_axis_format(z_axis_format: str)

Set the axis format for z axis. Will be ignored if log axis is been chosen for z-axis.


#### set_z_axis_label(label_z: str)

Set the z axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* PathBase


#### SetPath(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Set the path to the image/process executable.


#### SetPathFixed(arg2: bool)

Set the path to the image/process executable. Contained placeholders will not be resolved.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [PathBasedVisualTypes](#py_monitoring_gui.PathBasedVisualTypes), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [PathBasedVisualTypes](#py_monitoring_gui.PathBasedVisualTypes), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg4: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### set_arguments(arg2: str)

Set the argument string, used by a process.


#### set_auto_insert_placeholders(arg2: bool)

If placeholders (e.g. $DESIGN_DIR) should be inserted automatically.


#### set_path(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Set the path to the image/process executable.


#### set_path_fixed(arg2: bool)

Set the path to the image/process executable. Contained placeholders will not be resolved.


#### Points *= py_monitoring_gui.CustomData_Type.Points*


#### *class* Probability


#### ListenToDimensionIndex(arg2: int)

deprecated - use set_dimension_id_at_index(0, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* ReliAlgoInfo


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### export(file_path: Path)

Export the visual as picture to file position given as path. 
: Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100].


#### export_data(file_path: Path)

Export the visual as ascii with given format_string to file position given as path. 
: If format_string is left empty, “%g” is used.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### set_font_size(arg2: int)

Set the font size at the visual.


#### *class* ReliAnthill


#### SetAbscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetDimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### SetOrdinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimensions() → [DimensionVector](py_monitoring_kernel.md#py_monitoring_kernel.DimensionVector)

Return the actual visible dimensions as vector.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_dimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ordinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### show_designs_in_standard_gauss(arg2: bool)

Toggle view of designs to standard gauss. 
: Does not have an effect when original distribution is already standard gauss.


#### update_plot()

Trigger an additional update on visual.


#### *class* ReliCloud


#### SetAbscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetDimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), z_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### SetOrdinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### SetZAxis(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(2, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimensions() → [DimensionVector](py_monitoring_kernel.md#py_monitoring_kernel.DimensionVector)

Return the actual visible dimensions as vector.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### get_z_axis_label() → str

Get the z axis label.


#### has_legend() → bool


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_alpha(alpha_angle: float)

Set the first angle for an rotation based on Euler angles z-x’-z’’.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_beta(beta_angle: float)

Set the second angle for an rotation based on Euler angles z-x’-z’’.


#### set_caption(caption: str)

Set the caption.


#### set_dimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), z_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### set_gamma(gamma_angle: float)

Set the third angle for an rotation based on Euler angles z-x’-z’’.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_lighting_enabled(enabled: bool)

Set lighting enabled state to True or False.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_log_z_axis(enabled: bool)

Set the z-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ordinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### set_z_axis(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(2, … ) instead.


#### set_z_axis_format(z_axis_format: str)

Set the axis format for z axis. Will be ignored if log axis is been chosen for z-axis.


#### set_z_axis_label(label_z: str)

Set the z axis label.


#### show_designs_in_standard_gauss(arg2: bool)

Toggle view of designs to standard gauss. 
: Does not have an effect when original distribution is already standard gauss.


#### update_plot()

Trigger an additional update on visual.


#### *class* ReliFailureHistory


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_active_layer_names() → list

Get actual active layer names.


#### get_available_layer_names() → list

Get all possible layer names.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_all_layers_active_state(arg2: bool)

Set active state of all layers.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_layer_active_state(arg2: str, arg3: bool)

Set active state of layer with given layer name.


#### set_layers_active_state(arg2: list, arg3: bool)

Set active state of layers with given layer names.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* ReliInputImportance


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* Residual


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimension() → [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension)

Return the actual visible dimension.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_statistical_data() → list

Get statistical data as list of lists.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_error_relative(error_relative: bool)

When show_errors or show_absolute_errors is set, toggle view to show errors relative to range.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_sigma_level(sigma: float)

Set the sigma level, which determines the distance the red sigma_lines have, to the black diagonal. 
: Distance is equal sigma_value times sigma_level.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### show_absolute_errors()

Show values in visual as absolute error of dimension_cv_value vs dimension_value over dimension_value.


#### show_errors()

Show values in visual as error of dimension_cv vs dimension_value over dimension_value.


#### show_maximum_error(arg2: bool)

Show an arrow pointing to the maximum error. 
: Only visible when show_errors or show_absolute_errors is set.


#### show_sample_cops()

Show values in visual as SampleCoPs over dimension_value.


#### show_values()

Show values in visual as dimension_cv_value over dimension_value.


#### update_plot()

Trigger an additional update on visual.


#### *class* ResponseSurface2D


#### SetAbscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetDimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### SetOrdinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimensions() → [DimensionVector](py_monitoring_kernel.md#py_monitoring_kernel.DimensionVector)

Return the actual visible dimensions as vector.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_dimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ordinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_resolution(resolution: int)

Sets the resolution with which the response surface line is been plotted.


#### set_show_additional_points(show_additional_data: bool)

Show additional data points or not.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* ResponseSurface3D


#### SetAbscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetDimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), z_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### SetOrdinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### SetZAxis(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(2, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimensions() → [DimensionVector](py_monitoring_kernel.md#py_monitoring_kernel.DimensionVector)

Return the actual visible dimensions as vector.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### get_z_axis_label() → str

Get the z axis label.


#### has_legend() → bool


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_alpha(alpha_angle: float)

Set the first angle for an rotation based on Euler angles z-x’-z’’.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_beta(beta_angle: float)

Set the second angle for an rotation based on Euler angles z-x’-z’’.


#### set_caption(caption: str)

Set the caption.


#### set_dimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), z_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### set_gamma(gamma_angle: float)

Set the third angle for an rotation based on Euler angles z-x’-z’’.


#### set_iso_line_heights(iso_lines_string: str)

#### set_iso_line_heights(iso_lines: list)

[0] Set the iso_lines given as string with delimiters space and ‘,’ and ‘;’ .

[1] Set the iso_lines given as python list.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_lighting_enabled(enabled: bool)

Set lighting enabled state to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_lines_enabled(enabled: bool)

Set lines enabled state to True or False.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_log_z_axis(enabled: bool)

Set the z-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ordinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### set_palette_data(palette_data: [ResponseSurfacePaletteData](#py_monitoring_gui.ResponseSurfacePaletteData))

Set the palette_data so that response surface show certain specific values.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_resolution(resolution: int)

Set the resolution with which the response surface is been plotted.


#### set_show_additional_points(show_additional_data: bool)

Show additional data points or not.


#### set_surfaces_enabled(enabled: bool)

Set surfaces enabled state to True or False.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### set_z_axis(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(2, … ) instead.


#### set_z_axis_format(z_axis_format: str)

Set the axis format for z axis. Will be ignored if log axis is been chosen for z-axis.


#### set_z_axis_label(label_z: str)

Set the z axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* ResponseSurfaceTV


#### SetAbscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### SetDimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), z_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### SetOrdinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### SetZAxis(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(2, … ) instead.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_actual_dimensions() → [DimensionVector](py_monitoring_kernel.md#py_monitoring_kernel.DimensionVector)

Return the actual visible dimensions as vector.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_abscissa(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(0, … ) instead.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_dimensions(x_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), y_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), z_axis_dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the dimensions to be shown in visual.


#### set_iso_line_heights(iso_lines_string: str)

#### set_iso_line_heights(iso_lines: list)

[0] Set the iso_lines given as string with delimiters space and ‘,’ and ‘;’ .

[1] Set the iso_lines given as python list.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_lines_enabled(enabled: bool)

Set lines enabled state to True or False.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ordinate(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(1, … ) instead.


#### set_palette_data(palette_data: [ResponseSurfacePaletteData](#py_monitoring_gui.ResponseSurfacePaletteData))

Set the palette_data so that response surface show certain specific values.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_resolution(resolution: int)

Set the resolution with which the response surface is been plotted.


#### set_show_additional_points(show_additional_data: bool)

Show additional data points or not.


#### set_surfaces_enabled(enabled: bool)

Set surfaces enabled state to True or False.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### set_z_axis(arg2: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

deprecated - use set_dimension_at_index(2, … ) instead.


#### update_plot()

Trigger an additional update on visual.


#### *class* ResponseValues


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* SignalDesignList


#### IdExportList() → [SignalDesignList](#py_monitoring_gui.Visuals.SignalDesignList)


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### id_export_list() → [SignalDesignList](#py_monitoring_gui.Visuals.SignalDesignList)


#### push_back(arg2: [HID](id.md#id.HID))


#### size() → int


#### *class* SignalLayer


#### SetChannel(channel: int)

Set the channel index.


#### SetIds(ids: [SignalDesignList](#py_monitoring_gui.Visuals.SignalDesignList))

Set the ids.


#### SetLayer(layer_name: str)

Set the layer name.


#### SetSignal(signal: str)

Set the signal dimension.


#### SetStyle(style: [Style](py_monitoring_kernel.md#py_monitoring_kernel.Style))

Set the style.


#### \_\_init_\_()


#### set_channel(channel: int)

Set the channel index.


#### set_channel_name(channel_name: str)

Set the channel name (sig_info).


#### set_data_name(data_name: str)

Set the data name (sig_info).


#### set_ids(ids: [SignalDesignList](#py_monitoring_gui.Visuals.SignalDesignList))

Set the ids.


#### set_layer(layer_name: str)

Set the layer name.


#### set_number_of_data(number_of_data: int)

Set the number of lines to be shown (sig_info).


#### set_signal(signal: str)

Set the signal dimension.


#### set_style(style: [Style](py_monitoring_kernel.md#py_monitoring_kernel.Style))

Set the style.


#### set_take_all_ids(take_all_ids: bool)

Take all possible design ids when True. Overrides set_ids.


#### *class* SignalPlot


#### AddLayer(signal_layer: [SignalLayer](#py_monitoring_gui.Visuals.SignalLayer))

Add a layer of type SignalLayer.
: In this layer one can set the signal-channel combination he wants, showing the designs wished with a certain style. 
  Style is been applied to all designs, if wished otherwise more than one layer has to be added. 
  Design style set in e.g. DesignTable is NOT applied to this layer.


#### RemoveAllLayers()

Remove all layers, now showing “no valid data”. Every previous signal/reference setting is been resetted, to make a clean start possible.


#### SetChannel(channel_index: int)

Set the channel index for signal.


#### SetReference(reference: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the reference signal.


#### SetReferenceChannel(reference_channel_index: int)

Set the reference channel index for signal.


#### SetReferenceDesign(reference_design_id: [HID](id.md#id.HID))

Set the reference design id. For reference signal only one design is shown.


#### SetSignal(signal: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the signal.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### add_layer(signal_layer: [SignalLayer](#py_monitoring_gui.Visuals.SignalLayer))

Add a layer of type SignalLayer.
: In this layer one can set the signal-channel combination he wants, showing the designs wished with a certain style. 
  Style is been applied to all designs, if wished otherwise more than one layer has to be added. 
  Design style set in e.g. DesignTable is NOT applied to this layer.


#### adjust_resolution(arg2: bool)

Modify signals to be shown with given resolution.


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### is_reference_of_type_signal_info() → bool

Get info about reference be signal info type.


#### is_signal_of_type_signal_info() → bool

Get info about signal be signal info type.


#### remove_all_layers()

Remove all layers, now showing “no valid data”. Every previous signal/reference setting is been resetted, to make a clean start possible.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_channel(channel_index: int)

Set the channel index for signal.


#### set_channel_name(channel_name: str)

Set the channel name for signal.


#### set_data_name(data_name: str)

Set the data name for signal.


#### set_interpolation_type(arg2: int)

Set the interpolation type, for changed resolution to 1 = LINEAR, 2 = QUADRATIC, other values will be ignored.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_lines_enabled(enabled: bool)

Set lines enabled state to True or False.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_number_of_classes(arg2: int)

Set the number of classes (parts in y direction) with which the contour plot is been shown.


#### set_number_of_data(number_of_data: int)

Set the maximum number of lines for signal_info view.


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_reference(reference: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the reference signal.


#### set_reference_channel(reference_channel_index: int)

Set the reference channel index for signal.


#### set_reference_channel_name(channel_name: str)

Set the channel name for reference.


#### set_reference_data_name(data_name: str)

Set the data name for reference.


#### set_reference_design(reference_design_id: [HID](id.md#id.HID))

Set the reference design id. For reference signal only one design is shown.


#### set_reference_number_of_data(number_of_data: int)

Set the maximum number of lines for reference signal_info view.


#### set_resolution(arg2: int)

Set the resolution with which the signals are shown, when adjust_resolution is set to True. Minimum 2.


#### set_sigma_factor(arg2: float)

Set the factor with which standard deviation is shown. Change plot only when statistical data is shown.


#### set_signal(signal: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension))

Set the signal.


#### set_surfaces_enabled(enabled: bool)

Set surfaces enabled state to True or False.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_format(x_axis_format: str)

Set the axis format for x axis. Will be ignored if log axis is been chosen for x-axis.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### show_as_contour_plot(arg2: bool)

Show signal data as contour plot with given number of classes.


#### show_statistical_values(arg2: bool)

Show additional to signal, mean and standard deviation for signals with more than one line.


#### update_plot()

Trigger an additional update on visual.


#### use_textures(toggle_texture_usage: bool)

Modify the plot to show textures or not. 
: Does only afllict plots with many points. 
  Setting is to be meant as possibility to deactivate texture usage on certain (graphic) systems, where showing as texture leads to graphical problems. 
  Not showing as texture means in most cases a reduce in performance.


#### *class* SpiderPlot


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### export(file_path: Path)

#### export(file_path: Path, width: int, height: int)

[0] Export the visual as picture, with given relative scale to file position given as path. 
: If scale is left empty, 1.0 is used. 
  Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100].

[1] Export the visual as picture, with given absolute sizes to file position given as path.
: Transparency produces plot with transparent background which is available when having picture types supporting this, like png. 
  Quality is available for jpg, determining the quality of the output in percent [0:100].


#### get_caption() → str

Get the caption.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### set_caption(caption: str)

Set the caption.


#### set_font_size(arg2: int)

Set the font size at the visual.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### StackedBars *= py_monitoring_gui.CustomData_Type.StackedBars*


#### StackedHorizontalBars *= py_monitoring_gui.CustomData_Type.StackedHorizontalBars*


#### *class* StatisticAnalysis


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_box_probability_content(box_probability_content: float)

Set the probability content for the box. Box goes from median-content\*0.5 to median+content\*0.5.


#### set_box_sigma_factor(box_sigma_factor: float)

Set the sigma factor for the box. Box goes from mean-factor to mean+factor.


#### set_box_type(box_type: [StatisticAnalysisBoxType](#py_monitoring_gui.StatisticAnalysisBoxType))

Set the box type.


#### set_caption(caption: str)

Set the caption.


#### set_group(group_name: str)

Set the group to be shown


#### set_limit_type(limit_type: [StatisticAnalysisLimitsType](#py_monitoring_gui.StatisticAnalysisLimitsType))

Set the limit type.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_scaling_type(scaling_type: [StatisticAnalysisScalingType](#py_monitoring_gui.StatisticAnalysisScalingType))

Set the scaling type.


#### set_separate_box_and_whisker(separate: bool)

Show Box and Whisker on two layers.


#### set_show_samples(show_samples: bool)

Show sample points.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_whisker_probability_content(whisker_probability_content: float)

Set the probability content for the whisker. Whisker goes from median-content\*0.5 to median+content\*0.5.


#### set_whisker_sigma_factor(whisker_sigma_factor: float)

Set the sigma factor for the whisker. Whisker goes from mean-factor to mean+factor.


#### set_whisker_type(whisker_type: [StatisticAnalysisWhiskerType](#py_monitoring_gui.StatisticAnalysisWhiskerType))

Set the whisker type.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* StatisticValues


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### *class* TrafficLightPlot


#### HideResponses(dimension_list: [DimensionList](py_monitoring_kernel.md#py_monitoring_kernel.DimensionList))

Hide given dimensions.


#### SetResponseVisible(dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), visible: bool)

Toggle the visibility of one single dimension.


#### SetSigmaFactor(sigma: float)

Change the sigma value used for statistical_values and for whole plot when values_sigma_based is chosen.


#### ShowAllResponses()

Show all dimensions.


#### ShowResponses(dimension_list: [DimensionList](py_monitoring_kernel.md#py_monitoring_kernel.DimensionList))

Show given dimensions.


#### ShowStatisticValues(visible: bool)

Toggle visibility of statistical values, shown as additional box_plot on top of the bars.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### has_legend() → bool


#### hide_responses(dimension_list: [DimensionList](py_monitoring_kernel.md#py_monitoring_kernel.DimensionList))

Hide given dimensions.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_axes_rotation_enabled(enable: bool)

Set axes rotation enabled.


#### set_axes_rotation_orthogonal(enable: bool)

Set rotation angles to 0 degree if enough space for text exist, else to 90.


#### set_axes_rotation_x_angle(angle: float)

Set the rotation angle for x-axis.


#### set_caption(caption: str)

Set the caption.


#### set_legend_font_size(font_size: int)

Set the font_size used in legend.


#### set_legend_position(x_position: float, y_position: float)

Set the position of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_size(width: float, height: float)

Set the size of the legend, using absolute or relative coordinates. 
: (Internally stored as relative.)


#### set_legend_visible(enabled: bool)

Set legend visibilty to True or False.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_response_visible(dimension: [Dimension](py_monitoring_kernel.md#py_monitoring_kernel.Dimension), visible: bool)

Toggle the visibility of one single dimension.


#### set_sigma_factor(sigma: float)

Change the sigma value used for statistical_values and for whole plot when values_sigma_based is chosen.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_format(y_axis_format: str)

Set the axis format for y axis. Will be ignored if log axis is been chosen for y-axis.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### show_all_responses()

Show all dimensions.


#### show_responses(dimension_list: [DimensionList](py_monitoring_kernel.md#py_monitoring_kernel.DimensionList))

Show given dimensions.


#### show_statistical_values(visible: bool)

Toggle visibility of statistical values, shown as additional box_plot on top of the bars.


#### show_values_sigma_based(toggle: bool)

Toggle the values view, base on mean and sigma vs. original values.


#### update_plot()

Trigger an additional update on visual.


#### *class* VectorElements


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### *class* WebViewer


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### set_source(path: str)

#### set_source(path: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

[0] Set path to html file to be viewed

[1] Set path to html file to be viewed


#### set_source_data(content: str)

Set content of html to be viewed


#### *class* WeightedPCValues


#### \_\_init_\_()

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))

#### \_\_init_\_(arg2: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id), arg3: [py_monitoring_kernel.Id](py_monitoring_kernel.md#py_monitoring_kernel.Id))


#### get_caption() → str

Get the caption.


#### get_data(layer_name: str) → list

Get data from DataTable of layer layer_name as list of lists. When force_as_text is True then data returns as text.


#### *static* get_display_name() → str

Get a descriptive title for this visual type.


#### *static* get_group_name() → str

Get the name of the containing group.


#### get_header_data(layer_name: str, horizontal: bool) → list

Get header data from DataTable of layer layer_name as list. horizontal = True - get horizontal header, horizontal = False - get vertical header.


#### get_palette_preset_names() → list

Get a list of available palette preset names.


#### get_x_axis_label() → str

Get the x axis label.


#### get_y_axis_label() → str

Get the y axis label.


#### reset_palette_limits()

ReSet the minimum and maximum values of palette to default.


#### reset_palette_maximum()

Reset the maximum value of palette.


#### reset_palette_minimum()

Reset the minimum value of palette.


#### set_axes_enabled(enabled: bool)

Set axes enabled state to True or False.


#### set_caption(caption: str)

Set the caption.


#### set_line_width(line_width: float)

Set the line width at the visual.


#### set_lines_enabled(enabled: bool)

Set lines enabled state to True or False.


#### set_log_x_axis(enabled: bool)

Set the x-axis to show values logarithmic. Will be ignored if data range contains values <=0.


#### set_log_y_axis(enabled: bool)

Set the y-axis to show values logarithmic. Will be ignored if data range contains values <=0


#### set_palette_limits(minimum: float, maximum: float)

Set the minimum and maximum values of palette.


#### set_palette_maximum(maximum: float)

Set the maximum value of palette.


#### set_palette_minimum(minimum: float)

Set the minimum value of palette.


#### set_palette_position(x_position: float, y_position: float)

Set the position of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_preset(name: str)

Set palette preset with given name.


#### set_palette_size(x_position: float, y_position: float)

Set the size of the palette, using absolute or relative[%] coordinates. 
: (Internally stored as relative[%].)


#### set_palette_visible(enabled: bool)

Set palette visibility to True or False.


#### set_ranges_x(minimum: float, maximum: float)

Set the ranges to x-axis, Two inputs : minimum and maximum.


#### set_ranges_y(minimum: float, maximum: float)

Set the ranges to y-axis, Two inputs : minimum and maximum.


#### set_surfaces_enabled(enabled: bool)

Set surfaces enabled state to True or False.


#### set_symbol_size(symbol_size: float)

Set the symbol size at the visual.


#### set_x_axis_label(label_x: str)

Set the x axis label.


#### set_y_axis_label(label_y: str)

Set the y axis label.


#### update_plot()

Trigger an additional update on visual.


#### \_\_init_\_()
