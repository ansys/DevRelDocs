# Postprocessing python scripting

## Postprocessing generation

 When you open a postprocessing database file (`*.omdb`, `*.bin`), a suitable default generation script is deduced using the type of result data and is then called to generate and configure the postprocessing. 

The default generation scripts are located in the postprocessing scripting directory within the optiSLang installation directory (`[install_dir]/optiSLang/scripting/postprocessing/command_scripts`).

You can also define custom script directories. The following scripts are available: 
- `post-processing_default_init.py`: Performs default initialization of the underlying dataset, like deactivating unnecessary parameters. Is called by the specific postprocessing mode scripts.
- `post-processing_default_plots.py`: Generates general plots available in all postprocessing modes. Is called by the specific postprocessing mode scripts.
- `statistics_monitoring_default.py`: Generates general and statistics specific plots.
- `approximation_monitoring_default.py`: Generates general and approximation specific plots.
- `optimization_monitoring_default.py`: Generates general and optimization specific plots.
- `reliability_monitoring_default.py`: Generates general and reliability specific plots.

The default generation scripts can be edited to customize the postprocessing. You can also create user-defined generation scripts that can be used either from the **Postprocessing** window or the [Postprocessing]( https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_postprocessing.html ) node.

To open a custom script in the *Postprocessing* window, from the menu bar, select **File** > **Reload as** > **Use custom script**.

To use the custom script in the optiSLang workflow:
- On the *Scenery* pane, right-click the **Postprocessing** node and select
**Edit** from the context menu. 
- In the *Postprocessing mode* section, select **Custom script**.
- To the right of the **Custom script** button, click the file icon.
- Browse to the script file, select it, and click **Open**.
- To save the changes and close the dialog, click **OK**.

A generated script generally consists of at least three parts. First, create the postprocessing visuals by creating the corresponding visual object, providing a name and the data that is displayed by the visual. 

```
anthill = Visuals.Anthill(Id("Anthill plot"), data_id)
```

The term `data_id` refers to the currently loaded postprocessing database. Visuals created that way by default inherit the global settings. They, for example, display the parameters and/or responses that are set in the global dimension selection controls.

The second step is to configure the visual if the default settings are not suitable.

```
anthill.SetAbscissa ("parameter_1")
```
        
This example call tells the anthill visual to display the values of `parameter_1` at the abscissa, regardless of a potential differing global setting. 

The third step is to add the created visual to the postprocessing.

```
control_container.add_control (
    anthill, 
    True, 
    RELATIVE_POSITIONING, 
    1/2., 0, 1/2., 1/2.
)
```

This example call adds the anthill visual to the postprocessing, using the specified position and size relative to the size of the postprocessing main window and sets the visibility to *true*.

## Python console

You can access the Python console by selecting **View** > **Dock Widgets** > **Python console**. It is used to execute Python commands that access and configure global attributes like design selection or styling, as well as attributes of individual postprocessing visuals like visibility and positioning. Python commands can be executed by either typing or pasting Python code into the text field and pressing **Enter** or selecting **Execute** or **Execute script file** from the multi-selection button. You can also create shortcuts in the monitoring toolbar for your custom Python scripts.

The following functionality can be customized using Python scripting: 

- Add/remove plots
- Absolute and relative positioning of plots within the main window
- Hide/Show plots
- Customize plot settings (fixed dimensions, limits, axis labels)
- Export plots to several image formats
- Select/Deselect designs
- Activate/Deactivate designs
- Style designs (color, symbol,)
- Set parameter values (used for approximation)
- Set selected dimensions
- Animate surrogate model approximations
- Access to monitoring data (designs, parameters, surrogate models)

## Custom script directories

You can define custom directories for your Python scripts. Scripts inside either your custom or the default scripting directories are displayed as shortcuts in the toolbar and as an entry in the menu of the script type. Currently, there are two different types of scripts:

Postprocessing generation scripts:

- Default directory: `[install_dir]/optiSLang/scripting/postprocessing/command_scripts`
- Default custom directory (Windows): `[install_dir]\optiSLang\scripting\postprocessing\custom_command_scripts`
- Default custom directory (Linux): `[install_dir]/optiSLang/scripting/postprocessing/custom_command_scripts`

Monitoring Python scripts:

- Default directory: `[install_dir]/optiSLang/scripting/postprocessing/execute_scripts`
- Default custom directory (Windows): `[install_dir]\optiSLang\scripting\postprocessing\custom_execute_scripts`
- Default custom directory (Linux): `[install_dir]/optiSLang/scripting/postprocessing/custom_execute_scripts`

You can find an example script in the default directory (`quick_optimization.py`). By placing a script in the directory it is recognized and displayed as described previously. You can define an icon for the script inside the toolbar by placing an image with the same name as the script in the same directory. You can change the custom directory path by setting the path as the value of the following environment variables:

- `OSL_CUSTOM_COMMAND_SCRIPT_DIR` for the custom postprocessing generation script directory
- `OSL_CUSTOM_EXECUTE_SCRIPT_DIR` for the custom monitoring Python script directory

Alternatively, you can define them using the following command line arguments:

```
custom-command-script-directory
custom-execute-script-directory
```

## Custom python script configuration

The monitoring Python scripts are displayed in a drop-down list in the toolbar and in a sub-menu of the **File** menu by default. You can define a configuration file in JSON format to change its displayed name and to create a separate button in the toolbar for it. 

The different configuration parameters are: 

- `display_name`: Allows you to define a name for your script that is displayed in the optiSLang monitoring. If empty (""), the script name is shown.
- `show_as_button`: If true, an additional button for this script is added to the toolbar. The button uses the specified script icon (for example, `my_custom_script.png`) if available.

An example of how to configure a script named `my_custom_script.py`:

```
{
    "display_name": "My custom script",
    "show_as_button": true
}
```

## Python scripting for text import

Running the following Python code in the Python console adds a **Postprocessing** node to the **Scenery** pane with the *Settings file* and *Non interactive mode* settings configured.

```
pp_node = actors.PostprocessingActor("Postproceessing")

pp_node.mdb_path = "D:\\develop\\oscillator_robustness.csv"

pp_node.text_import_settings_file = "D:\\develop\\oscillator_robustness.json"
pp_node.text_import_non_interactive = true

add_actor( pp_node )
```

|Setting|Description|
| ------------ | ----------- |
|`mdb_path`|Sets the file path to the text file.|
|`text_import_settings_file`|Sets the file path to the [Design Point Import wizard](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_text_import_wizard.html?q=design%20point%20import%20wizard) settings file.|
|`text_import_non_interactive`|When `true`, the Design Point Import wizard will not activate and the import using the settings file is done automatically.|
