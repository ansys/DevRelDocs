# create_script

<a id="compolyx.Model.create_script"></a>

## Model.create_script(name, source=None, active=True, uptodate=False, update_mode=ScriptUpdateMode.ON_TRIGGERS)

Creates a script object, which allows executing custom Python code.

### Parameters
  - name: The name of the script.
  - source: The code to be executed, as a string.
  - active: If False, the script will not be executed.
  - uptodate: Whether the script currently needs to be executed.
  - update_mode: Defines which changes cause the script to become.
    : out-of-date. Valid options: ‘manual’ (run only when manually
      triggered), ‘on_triggers’ (run when a parameter or the script
      itself changes), and ‘always’ (run with every update).
### Returns
  The created script object.
