# Using VScode to create/edit scripts

For more complex PrePost Scripting scripts, we suggest you to use a Python IDE, so you get features like
syntax highlight and code completion. You can use any IDE, but Visual Studio Code (a.k.a. VSCode) has good Python
support, it’s lightweight and free.

Rocky provides Python interface files (.pyi) that can be used by the IDE to enable code completion
for PrePost Scripting classes. For windows, these files are located usually in `"C:/Program Files/ANSYS Inc/v242/Rocky/bin"`.
In Linux, the “bin” folder is in the same folder where the Rocky .tbz2 installation package was extracted.

To configure auto-completion for PrePost scripts in VSCode proceed as following:

1. Open the PrePost scripts folder in VSCode (usually at `"%HOME%\Documents\Rocky\Scripts"`);
   > :bulb: **Tip:** In Rocky, open the PrePost Scripting in Tools and click on the folder icon at the bottom of the scripts window, the script folder will open.
2. Open this folder in VSCode like a workspace;
3. Press F1 key in VSCode and type “Preferences: Open Workspace Settings (JSON)”;
4. Set extra paths in “settings.json” with the path of PrePost Scripting files, like the example below:

```json
{
    "python.autoComplete.extraPaths": [
        "C:/Program Files/ANSYS Inc/v242/Rocky/bin/prepost_scripting_stubs",
    ],

    "python.analysis.extraPaths": [
        "C:/Program Files/ANSYS Inc/v242/Rocky/bin/prepost_scripting_stubs",
    ]
}
```

Now the autocomplete is available. Create a new python file like “script_A.py” and follow the example below to get
start writing your scripts:

```python3
from rocky30.plugins.api.rocky_api_application import RockyApiApplication as app
from rocky30.plugins.api.ra_project import RAProject

project: RAProject = app.CreateProject()

study = project.GetStudy()
```
