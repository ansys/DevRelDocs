# Interface: IComponentConfig

**Package:** `com.phoenix_int.pacz.api`

---
**Deprecated:** see `com.phoenix_int.pacz.api.v2.IComponentConfig`

```java
@Deprecated
public interface IComponentConfig
```

Configuration for PACZ file

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.Object` | `getAdditionalConfigValue(java.lang.String valueName)`<br>**Deprecated.** Get additional configuration value based on specified value name. |
| `java.util.Map<java.lang.String,java.lang.Object>` | `getAdditionalConfigValues()`<br>**Deprecated.** Get additional configuration values as key-value pair map |
| `java.lang.String` | `getASComponent()`<br>**Deprecated.** Get ModelCenter Remote Execution component name |
| `java.util.List<java.lang.String>` | `getCommandLineArguments()`<br>**Deprecated.** Get command line arguments to be passed to component executable |
| `java.lang.String` | `getDescription()`<br>**Deprecated.** Get component description |
| `Environment` | `getEnvironment()`<br>**Deprecated.** Get component environment |
| `java.lang.String` | `getExecutable()`<br>**Deprecated.** Get name of component executable |
| `java.net.URI` | `getHelpUri()`<br>**Deprecated.** Get URI of help to use for component |
| `java.net.URI` | `getIconUri()`<br>**Deprecated.** Get URI of icon to use for component |
| `java.util.List<IRuntimeVariable>` | `getInputs()`<br>**Deprecated.** Get component inputs |
| `java.util.List<IInstanceFile>` | `getInstanceFiles()`<br>**Deprecated.** Get component instance files |
| `java.util.List<IRuntimeVariable>` | `getOutputs()`<br>**Deprecated.** Get component outputs |
| `java.util.Map<java.lang.String,java.lang.String>` | `getProperties()`<br>**Deprecated.** Get additional component properties |
| `java.util.List<java.lang.String>` | `getRequiredFeatures()`<br>**Deprecated.** Get list of features required for component to execute |
| `RunFolderPreference` | `getRunFolderPreference()`<br>**Deprecated.** Get run folder preference for component |
| `java.lang.String` | `getVersion()`<br>**Deprecated.** Get component version |
| `void` | `setAdditionalConfigValue(java.lang.String valueName, java.lang.Object value)`<br>**Deprecated.** Set additional configuration value key-value pair in map. |
| `void` | `setDescription(java.lang.String description)`<br>**Deprecated.** Set component description |
| `void` | `setRequiredFeatures(java.util.List<java.lang.String> requiredFeatures)`<br>**Deprecated.** Set list features required for component to execute |
| `void` | `setVersion(java.lang.String version)`<br>**Deprecated.** Set component version |

## Method Detail

### getEnvironment

```java
Environment getEnvironment()
```
**Deprecated.** Get component environment

**Returns:**
- component environment

**See Also:**
- [Environment](../../../../com/phoenix_int/pacz/api/Environment.html)

### getRunFolderPreference

```java
RunFolderPreference getRunFolderPreference()
```
**Deprecated.** Get run folder preference for component

**Returns:**
- component run folder preference

**See Also:**
- [RunFolderPreference](../../../../com/phoenix_int/pacz/api/RunFolderPreference.html)

### getVersion

```java
java.lang.String getVersion()
```
**Deprecated.** Get component version

**Returns:**
- component version

### setVersion

```java
void setVersion(java.lang.String version)
```
**Deprecated.** Set component version

**Parameters:**
- `version` - component version to use; if null, an empty version will be used

### getDescription

```java
java.lang.String getDescription()
```
**Deprecated.** Get component description

**Returns:**
- component description

### setDescription

```java
void setDescription(java.lang.String description)
```
**Deprecated.** Set component description

**Parameters:**
- `description` - component description to use; if null, an empty description will be used

### getRequiredFeatures

```java
java.util.List<java.lang.String> getRequiredFeatures()
```
**Deprecated.** Get list of features required for component to execute

**Returns:**
- list of required features

### setRequiredFeatures

```java
void setRequiredFeatures(java.util.List<java.lang.String> requiredFeatures)
```
**Deprecated.** Set list features required for component to execute

**Parameters:**
- `requiredFeatures` - list of features required for component to execute; if null, an empty list will be used

### getExecutable

```java
java.lang.String getExecutable()
```
**Deprecated.** Get name of component executable

**Returns:**
- component executable name

### getCommandLineArguments

```java
java.util.List<java.lang.String> getCommandLineArguments()
```
**Deprecated.** Get command line arguments to be passed to component executable

**Returns:**
- list of command line arguments

### getInputs

```java
java.util.List<IRuntimeVariable> getInputs()
```
**Deprecated.** Get component inputs

**Returns:**
- list of component inputs

**See Also:**
- [IRuntimeVariable](../../../../com/phoenix_int/pacz/api/IRuntimeVariable.html)

### getOutputs

```java
java.util.List<IRuntimeVariable> getOutputs()
```
**Deprecated.** Get component outputs

**Returns:**
- list of component outputs

**See Also:**
- [IRuntimeVariable](../../../../com/phoenix_int/pacz/api/IRuntimeVariable.html)

### getInstanceFiles

```java
java.util.List<IInstanceFile> getInstanceFiles()
```
**Deprecated.** Get component instance files

**Returns:**
- list of component instance files

**See Also:**
- [IInstanceFile](../../../../com/phoenix_int/pacz/api/IInstanceFile.html)

### getProperties

```java
java.util.Map<java.lang.String,java.lang.String> getProperties()
```
**Deprecated.** Get additional component properties

**Returns:**
- key-value pair of component properties

### getASComponent

```java
java.lang.String getASComponent()
```
**Deprecated.** Get ModelCenter Remote Execution component name

**Returns:**
- ModelCenter Remote Execution component name

### getHelpUri

```java
java.net.URI getHelpUri()
```
**Deprecated.** Get URI of help to use for component

**Returns:**
- component help URI; null if no help

### getIconUri

```java
java.net.URI getIconUri()
```
**Deprecated.** Get URI of icon to use for component

**Returns:**
- component icon URI; null if no icon

### setAdditionalConfigValue

```java
void setAdditionalConfigValue(java.lang.String valueName, 
                              java.lang.Object value)
```
**Deprecated.** Set additional configuration value key-value pair in map. If key exists, the existing value will be overwritten with the new value. If key does not exist, the new key-value pair will be inserted into the map.

**Parameters:**
- `valueName` - name of value to set in additional values map
- `value` - value to set for value name

### getAdditionalConfigValues

```java
java.util.Map<java.lang.String,java.lang.Object> getAdditionalConfigValues()
```
**Deprecated.** Get additional configuration values as key-value pair map

**Returns:**
- additional configuration value map

### getAdditionalConfigValue

```java
java.lang.Object getAdditionalConfigValue(java.lang.String valueName)
```
**Deprecated.** Get additional configuration value based on specified value name.

**Parameters:**
- `valueName` - name of value to get

**Returns:**
- value for specified value name, or null if name does not exist in map