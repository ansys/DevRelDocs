# Surrogates
To provide a QML user interface for custom algorithms, create a `_ca.qml` file and place it in the same location as the `_surr.py` file. For file location details, see Surrogates. optiSLang automatically loads the QML and embeds the user interface into the custom algorithm dialog widget.

- [Setting Custom Surrogate Settings From the QML User Interface](#setting-custom-surrogate-settings-from-the-qml-user-interface)
- [Calling Custom Python Functionality](#calling-custom-python-functionality)
- [Sending Log Messages](#sending-log-messages)

## Setting Custom Surrogate Settings From the QML User Interface
optiSLang provides a context object to the QML scope named `backend` and resides in the QML root scope. It can be used to access custom algorithim settings.

Settings can be read from and written to the `backend.settings` property. The settings value is a string containing the JSON representation of the current custom settings type (`dynardo::design_point_type`).

The `JSON.parse` and `JSON.stringify` Javascript functions can be used for conversion.

The `backend.onSettingsChanged` and `backend.onCommitSettingsRequested` signals can be used to react to external settings changes (from optiSLang scope, for example, when the settings user interface is shown for the first time) and when the settings are requested to be commited.

Class QMLBackEnd synopsis:
```
	class QMLBackEnd : public QObject
	{
		const QString & settings() const;
		void setSettings(const QString &_settings);
		void requestCommitSettings();
	
		QString executeCustom ( const QString & _execute_arg );
		void executeCustom ( const QString & _execute_arg, const QJSValue & _execute_callback );
		
		void emitInfoLogMessage ( const QString & _message );
		void emitWarningLogMessage ( const QString & _message );
		void emitErrorLogMessage ( const QString & _message );

	signals:
		void settingsChanged();
		void commitSettingsRequested();
	};
```

The `backend.onSettingsChanged` and `backend.onCommitSettingsRequested` signals can, for example, be used in a QML connections declaration:
```
Connections {
	    target: backend // sender
	    onSettingsChanged: {
	        var settings_json = JSON.parse(backend.settings);
	        // update controls
	    }
	    onCommitSettingsRequested: {
	        var settings_json = JSON.parse(backend.settings);
	        // update settings_json from controls
	        backend.settings = JSON.stringify(settings_json);
	    }
	}
```

## Calling Custom Python Functionality
You may need to execute custom Python functionality from within the QML scope. To do this:

1. Add the `def ExecuteCustom(args)` function to the `_surr.py` module file.
2. From QML call either:
    - `QString executeCustom ( const QString & _execute_arg )`
    - `void executeCustom ( const QString & _execute_arg, const QJSValue & _execute_callback )`

The first option blocks the main thread and returns results after execution. The second option calls functionality in a separate thread. Results are available using `_execute_callback` after execution finalizes The `_execute_arg` argument is a JSON arbitrary JSON value passed to the Python functionality. The result is also an arbitrary JSON value returned by the Python functionality.

Example Python code:
```
def ExecuteCustom(args):
		""" 
		Args:
			args[0]: settings
			args[1]: string; Json formated execute args
		Returns:
			string; Json formated execute results
		"""    
		ret = {'success': True, 'args': args[1]}
	    return json.dumps (ret)
```

Example QML code:
```
Button {
		id: button1
		text: "Execute custom functionality in a separate thread"
		onClicked: {
			var args = { string_arg: "foobar", bool_arg: false };
	        backend.executeCustom ( JSON.stringify(args), function(result) 
			{
	            console.log(result);
	        })
	    }
	}
```

## Sending Log Messages
Use the following functions to send log messages:

- Info message: `backend.emitInfoLogMessage(message)`
- Warning message: `backend.emitWarningLogMessage(message)`
- Error message: `backend.emitErrorLogMessage(message)`