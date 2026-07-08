# Interface: IComponentConfig

**Package:** `com.phoenix_int.pacz.api.v2`

--- 
**Declaration**

```java
public interface IComponentConfig
```

Configuration for PACZ file

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.Object` | `getAdditionalConfigValue(java.lang.String valueName)`<br>Get additional configuration value based on specified value name. |
| `java.util.Map<java.lang.String,java.lang.Object>` | `getAdditionalConfigValues()`<br>Get additional configuration values as key-value pair map |
| `java.lang.String` | `getASComponent()`<br>Get ModelCenter Remote Execution component name |
| `java.lang.String` | `getAuthor()`<br>Get the author of this component. |
| `java.util.List<java.lang.String>` | `getCommandLineArguments()`<br>Get command line arguments to be passed to component executable |
| `java.lang.String` | `getComment()`<br>Get the comment associated with this component. |
| `java.lang.String` | `getDescription()`<br>Get component description |
| `Environment` | `getEnvironment()`<br>Get component environment |
| `java.lang.String` | `getExecutable()`<br>Get name of component executable |
| `java.net.URI` | `getHelpUri()`<br>Get URI of help to use for component |
| `java.net.URI` | `getIconUri()`<br>Get URI of icon to use for component |
| `java.util.List<IRuntimeVariable>` | `getInputs()`<br>Get component inputs |
| `java.util.List<IInstanceFile>` | `getInstanceFiles()`<br>Get component instance files |
| `java.util.List<IRuntimeVariable>` | `getOutputs()`<br>Get component outputs |
| `java.util.Map<java.lang.String,java.lang.String>` | `getProperties()`<br>Get additional component properties |
| `java.util.List<java.lang.String>` | `getRequiredFeatures()`<br>Get list of features required for component to execute |
| `RunFolderPreference` | `getRunFolderPreference()`<br>Get run folder preference for component |
| `java.lang.String` | `getVersion()`<br>Get component version |
| `void` | `setAdditionalConfigValue(java.lang.String valueName, java.lang.Object value)`<br>Set additional configuration value key-value pair in map. |
| `void` | `setAuthor(java.lang.String author)`<br>Set the author of this component. |
| `void` | `setComment(java.lang.String comment)`<br>Set a comment to be associated with this component. |
| `void` | `setDescription(java.lang.String description)`<br>Set component description |
| `void` | `setIconUri(java.net.URI iconUri)`<br>Set component icon URI |
| `void` | `setInputs(java.util.List<IRuntimeVariable> inputs)`<br>Set component inputs |
| `void` | `setInstanceFiles(java.util.List<IInstanceFile> instanceFiles)`<br>Set component instance files |
| `void` | `setOutputs(java.util.List<IRuntimeVariable> outputs)`<br>Set component outputs |
| `void` | `setRequiredFeatures(java.util.List<java.lang.String> requiredFeatures)`<br>Set list features required for component to execute |
| `void` | `setVersion(java.lang.String version)`<br>Set component version |

## Method Detail

### getEnvironment

```java
Environment getEnvironment()
```

Get component environment

**Returns:**
- component environment

**See Also:**
- [Environment](Environment.md)

### getRunFolderPreference

```java
RunFolderPreference getRunFolderPreference()
```

Get run folder preference for component

**Returns:**
- component run folder preference

**See Also:**
- [RunFolderPreference](RunFolderPreference.md)

### getVersion

```java
java.lang.String getVersion()
```

Get component version

**Returns:**
- component version

### setVersion

```java
void setVersion(java.lang.String version)
```

Set component version

**Parameters:**
- `version` - component version to use; if null, an empty version will be used

### getDescription

```java
java.lang.String getDescription()
```

Get component description

**Returns:**
- component description

### setDescription

```java
void setDescription(java.lang.String description)
```

Set component description

**Parameters:**
- `description` - component description to use; if null, an empty description will be used

### getRequiredFeatures

```java
java.util.List<java.lang.String> getRequiredFeatures()
```

Get list of features required for component to execute

**Returns:**
- list of required features

### setRequiredFeatures

```java
void setRequiredFeatures(java.util.List<java.lang.String> requiredFeatures)
```

Set list features required for component to execute

**Parameters:**
- `requiredFeatures` - list of features required for component to execute; if null, an empty list will be used

### getExecutable

```java
java.lang.String getExecutable()
```

Get name of component executable

**Returns:**
- component executable name

### getCommandLineArguments

```java
java.util.List<java.lang.String> getCommandLineArguments()
```

Get command line arguments to be passed to component executable

**Returns:**
- list of command line arguments

### getInputs

```java
java.util.List<IRuntimeVariable> getInputs()
```

Get component inputs

**Returns:**
- list of component inputs

**See Also:**
- [IRuntimeVariable](IRuntimeVariable.md)

### setInputs

```java
void setInputs(java.util.List<IRuntimeVariable> inputs)
```

Set component inputs

**Parameters:**
- `inputs` - list of component inputs to use

**See Also:**
- [IRuntimeVariable](IRuntimeVariable.md)

### getOutputs

```java
java.util.List<IRuntimeVariable> getOutputs()
```

Get component outputs

**Returns:**
- list of component outputs

**See Also:**
- [IRuntimeVariable](IRuntimeVariable.md)

### setOutputs

```java
void setOutputs(java.util.List<IRuntimeVariable> outputs)
```

Set component outputs

**Parameters:**
- `outputs` - list of component outputs to use

**See Also:**
- [IRuntimeVariable](IRuntimeVariable.md)

### getInstanceFiles

```java
java.util.List<IInstanceFile> getInstanceFiles()
```

Get component instance files

**Returns:**
- list of component instance files

**See Also:**
- [IInstanceFile](IInstanceFile.md)

### setInstanceFiles

```java
void setInstanceFiles(java.util.List<IInstanceFile> instanceFiles)
```

Set component instance files

**Parameters:**
- `instanceFiles` - list of component instance files to use

**See Also:**
- [IInstanceFile](IInstanceFile.md)

### getProperties

```java
java.util.Map<java.lang.String,java.lang.String> getProperties()
```

Get additional component properties

**Returns:**
- key-value pair of component properties

### getASComponent

```java
java.lang.String getASComponent()
```

Get ModelCenter Remote Execution component name

**Returns:**
- ModelCenter Remote Execution component name

### getHelpUri

```java
java.net.URI getHelpUri()
```

Get URI of help to use for component

**Returns:**
- component help URI; null if no help

### getIconUri

```java
java.net.URI getIconUri()
```

Get URI of icon to use for component

**Returns:**
- component icon URI; null if no icon

### setIconUri

```java
void setIconUri(java.net.URI iconUri)
```

Set component icon URI

**Parameters:**
- `iconUri` - icon URI to use; if null, component will have no icon

### setAdditionalConfigValue

```java
void setAdditionalConfigValue(java.lang.String valueName, 
                              java.lang.Object value)
```

Set additional configuration value key-value pair in map. If key exists, the existing value will be overwritten with the new value. If key does not exist, the new key-value pair will be inserted into the map.

**Parameters:**
- `valueName` - name of value to set in additional values map
- `value` - value to set for value name

### getAdditionalConfigValues

```java
java.util.Map<java.lang.String,java.lang.Object> getAdditionalConfigValues()
```

Get additional configuration values as key-value pair map

**Returns:**
- additional configuration value map

### getAdditionalConfigValue

```java
java.lang.Object getAdditionalConfigValue(java.lang.String valueName)
```

Get additional configuration value based on specified value name.

**Parameters:**
- `valueName` - name of value to get

**Returns:**
- value for specified value name, or null if name does not exist in map

### getAuthor

```java
java.lang.String getAuthor()
```

Get the author of this component.

**Returns:**
- The author of this component.

### setAuthor

```java
void setAuthor(java.lang.String author)
```

Set the author of this component.

**Parameters:**
- `author` - The author to set to this component.

### getComment

```java
java.lang.String getComment()
```

Get the comment associated with this component.

**Returns:**
- The comment associated with this component.

### setComment

```java
void setComment(java.lang.String comment)
```

Set a comment to be associated with this component.

**Parameters:**
- `comment` - The comment to associate with this component.