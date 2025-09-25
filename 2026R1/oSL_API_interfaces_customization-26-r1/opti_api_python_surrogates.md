# Surrogates
optiSLang allows you to extend the surrogates by using common script interfaces.

To use custom script surrogates, the scripts must fulfill the naming conventions `*_surr.py` or `*_surrogate.py` and must be placed in one of the following locations:

- `[installation path]/scripting/algorithmns`
- Directories specified by `SC_AlternativeCADirectories` configuration settings.
- Directories specified by the environment variable `OSL_ALT_CA_SEARCH_DIRS`, separated by the native environment separator (`;` on Windows platforms or `:` on Linux platforms).

Custom script surrogates found in any of these locations are loaded when the application starts and are then selectable in the MOP node as external models on the **Advanced Settings** tab (under **Models > External**).

Optionally, the following file types with the same filename and in the same directory can be used as:

- Documentation page in the help system (`.html`)
- [Configuration](opti_api_python_nodes_config_files.md) (`.cfg`)
- [Surrogate settings user interface declaration file](opti_api_python_qml.md) (`.qml`)

The following functions are required in the Python script:

- `DefaultCustomSettings(args)`
- `GetCustomSettings(args)`
- `CheckSettings(args)`
- `InitializeSurrogate(args)`
- `BuildOptimal(args)`
- `BuildOptimalBoxCox(args)`
- `Build(args)`
- `CheckBeforeBuild(args)`
- `CheckAfterBuild(args)`
- `InitializeApproximate(args)`
- `Approximate(args)`
- `ApproximateCrossValidation(args)`