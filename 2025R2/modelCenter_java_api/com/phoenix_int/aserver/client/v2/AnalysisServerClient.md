# Class: AnalysisServerClient

**Package:** `com.phoenix_int.aserver.client.v2`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.client.v2.AnalysisServerClient
```

**Implemented Interfaces**

- `java.lang.AutoCloseable`

**Declaration**

```java
public class AnalysisServerClient 
extends java.lang.Object 
implements java.lang.AutoCloseable
```

ModelCenter Remote Execution client object.

## Constructor Summary

| Constructor and Description |
|---|
| `AnalysisServerClient()` |

## Method Summary

| Modifier and Type | Method and Description |
|---|---|
| `void` | `addProxyClients(java.lang.Iterable<java.lang.String> clientHosts)` Add a list of allowed proxy client hosts. |
| `void` | `addProxyClientsAsync(java.lang.Iterable<java.lang.String> clientHosts, IAnalysisServerCallback callback)` Add a list of allowed proxy client hosts. |
| `void` | `close()` Close the connection to the server. |
| `void` | `connect(java.net.URI uri)` Connect to ModelCenter Remote Execution at a specified URI with no timeout. |
| `void` | `connect(java.net.URI uri, int timeout)` Connect to ModelCenter Remote Execution at a specified URI. |
| `void` | `connect(java.net.URI uri, java.lang.String username, java.lang.String password)` Connect to ModelCenter Remote Execution with optional authentication and no timeout. |
| `void` | `connect(java.net.URI uri, java.lang.String username, java.lang.String password, int timeout)` Connect to ModelCenter Remote Execution with optional authentication. |
| `void` | `connectEmbedded()` Connect to the in-process (embedded) ModelCenter Remote Execution instance. |
| `void` | `connectEmbedded(java.util.Map<java.lang.String,java.lang.Object> initialProperties)` Connect to the in-process (embedded) ModelCenter Remote Execution instance. |
| `void` | `connectEmbedded(java.util.Map<java.lang.String,java.lang.Object> initialProperties, java.lang.String username, java.lang.String password)` Connect to the in-process (embedded) ModelCenter Remote Execution instance. |
| `void` | `connectEmbedded(java.lang.String username, java.lang.String password)` Connect to the in-process (embedded) ModelCenter Remote Execution instance. |
| `void` | `connectSsh(java.lang.String host, java.io.InputStream inputStream, java.io.OutputStream outputStream, java.io.InputStream errorStream)` Connect to ModelCenter Remote Execution via arbitrary input and output streams. |
| `void` | `deleteRunShare(java.lang.String key)` Delete a run share. |
| `void` | `deleteRunShareAsync(java.lang.String key, IAnalysisServerCallback callback)` Delete a run share. |
| `PHXComponentDescription` | `describe(java.lang.String analysis)` Get the description of an analysis. |
| `void` | `describeAsync(java.lang.String analysis, IAnalysisServerCallback callback)` Get the description history of an analysis. |
| `void` | `end(java.lang.String instanceName)` End an analysis. |
| `void` | `endAsync(java.lang.String instanceName, IAnalysisServerCallback callback)` End an analysis. |
| `void` | `execute(java.lang.String instanceName, boolean background)` Execute an analysis. |
| `void` | `executeAsync(java.lang.String instanceName, boolean background, IAnalysisServerCallback callback)` Execute an analysis. |
| `protected void` | `finalize()` Clean up during finalization. |
| `java.lang.String` | `get(java.lang.String fullPropertyName)` Request the value of a property. |
| `void` | `getAsync(java.lang.String fullPropertyName, IAnalysisServerCallback callback)` Request the value of a property. |
| `void` | `getByUrl(java.io.File destFile, java.lang.String url, boolean isBinaryFile)` Convenience overload of getByUrl(File, String, String, boolean). |
| `void` | `getByUrl(java.io.File destFile, java.lang.String fullPropertyName, java.lang.String url, boolean isBinaryFile)` Get a file by URL. |
| `void` | `getByUrlAsync(java.io.File destFile, java.lang.String fullPropertyName, java.lang.String url, boolean isBinaryFile, IAnalysisServerCallback callback)` Fetch the contents of a file by URL. |
| `int[]` | `getDimensions(java.lang.String fullPropertyName)` Set the dimensions of an array. |
| `void` | `getDimensionsAsync(java.lang.String fullPropertyName, IAnalysisServerCallback callback)` Set the dimensions of an array. |
| `void` | `getFile(java.io.File destFile, java.lang.String fullPropertyName, boolean isBinaryFile)` Get a file by property name. |
| `void` | `getFileAsync(java.io.File destFile, java.lang.String fullPropertyName, boolean isBinaryFile, IAnalysisServerCallback callback)` Fetch the contents of a file by property name. |
| `java.util.Map<java.lang.String,AnalysisVariableValue>` | `getHierarchy(java.lang.String instanceName, com.phoenix_int.aserver.client.PHXHierarchyFileMode fileMode)` Get the variable hierarchy of a running instance. |
| `void` | `getHierarchyAsync(java.lang.String instanceName, com.phoenix_int.aserver.client.PHXHierarchyFileMode fileMode, IAnalysisServerCallback callback)` Get the variable hierarchy of a running instance. |
| `java.lang.String` | `getHostname()` Returns the currently-connected host, or null if none. |
| `PHXIcon` | `getIcon(java.lang.String analysis)` Retrieve an icon. |
| `void` | `getIconAsync(java.lang.String analysis, IAnalysisServerCallback callback)` Retrieve an icon. |
| `java.lang.String` | `getScratchDirectory()` Request for the server's scratch directory. |
| `void` | `getScratchDirectoryAsync(IAnalysisServerCallback callback)` Request for the server's scratch directory. |
| `java.lang.String` | `getSystemProperty(java.lang.String key)` Request for the server's system property. |
| `void` | `getSystemPropertyAsync(java.lang.String key, IAnalysisServerCallback callback)` Request for the server's system property. |
| `java.net.URI` | `getUri()` Get the currently-connected URI, or null if none. |
| `AnalysisServerVersion` | `getVersion()` Get the MCRE version. |
| `PHXComponentBranch` | `getVersionHistory(java.lang.String analysis)` Get the version history of an analysis. |
| `void` | `getVersionHistoryAsync(java.lang.String analysis, IAnalysisServerCallback callback)` Get the version history of an analysis. |
| `java.lang.String` | `invoke(java.lang.String instanceName, java.lang.String methodName)` Invoke a method on a component instance. |
| `void` | `invokeAsync(java.lang.String instanceName, java.lang.String methodName, IAnalysisServerCallback callback)` Invoke a method on a component instance. |
| `boolean` | `isConnected()` Is the server connected? |
| `java.util.List<java.lang.String>` | `listAnalyses(java.lang.String folderPath)` List the analyses on the server. |
| `void` | `listAnalysesAsync(java.lang.String folderPath, IAnalysisServerCallback callback)` List the analyses on the server. |
| `java.util.List<java.lang.String>` | `listFolders(java.lang.String folderPath)` List the sub-folders of a folder on the server. |
| `void` | `listFoldersAsync(java.lang.String folderPath, IAnalysisServerCallback callback)` List the sub-folders of a folder on the server. |
| `java.util.List<java.lang.String>` | `listInstances()` List running instances on the server. |
| `void` | `listInstancesAsync(IAnalysisServerCallback callback)` List running instances on the server. |
| `java.util.List<PHXMethodDescriptor>` | `listMethods(java.lang.String analysis)` List the methods of an analysis. |
| `void` | `listMethodsAsync(java.lang.String analysis, IAnalysisServerCallback callback)` List the methods of an analysis. |
| `java.util.List<PHXPropertyDescriptor>` | `listProperties(java.lang.String analysis)` List the properties of an analysis. |
| `void` | `listPropertiesAsync(java.lang.String analysis, IAnalysisServerCallback callback)` List the properties of an analysis. |
| `java.util.List<PHXPropertyValue>` | `listValues(java.lang.String analysis)` List the values of an analysis. |
| `void` | `listValuesAsync(java.lang.String analysis, IAnalysisServerCallback callback)` List the values of an analysis. |
| `void` | `quit(boolean background)` Force quit current analysis, and shut down ModelCenter Remote Execution. |
| `void` | `set(java.lang.String fullPropertyName, java.io.File contents)` Set a file variable on the server. |
| `void` | `set(java.lang.String fullPropertyName, java.io.File contents, java.lang.String encoding)` Set a file variable on the server. |
| `void` | `set(java.lang.String fullPropertyName, java.lang.Object value)` Set the value of a property. |
| `void` | `setAsync(java.lang.String fullPropertyName, java.io.File contents, IAnalysisServerCallback callback)` Set a file variable on the server. |
| `void` | `setAsync(java.lang.String fullPropertyName, java.io.File contents, java.lang.String encoding, IAnalysisServerCallback callback)` Set a file variable on the server. |
| `void` | `setAsync(java.lang.String fullPropertyName, java.lang.Object value, IAnalysisServerCallback callback)` Set the value of a property. |
| `void` | `setByUrl(java.lang.String fullPropertyName, java.lang.String url)` Set the URL of a file property. |
| `void` | `setByUrlAsync(java.lang.String fullPropertyName, java.lang.String url, IAnalysisServerCallback callback)` Set the URL associated with a property |
| `void` | `setDictionary(java.lang.String xml)` Set dictionary on Server. |
| `void` | `setDictionaryAsync(java.lang.String xml, IAnalysisServerCallback callback)` Set dictionary on Server. |
| `void` | `setDimensions(java.lang.String fullPropertyName, int[] dimensions)` Set the dimensions of an array. |
| `void` | `setDimensionsAsync(java.lang.String fullPropertyName, int[] dimensions, IAnalysisServerCallback callback)` Set the dimensions of an array. |
| `void` | `setHierarchy(java.lang.String instanceName, java.io.File xmlData, java.lang.String xmlEncoding, boolean gzipped)` Set the variable hierarchy of a running instance. |
| `void` | `setHierarchy(java.lang.String instanceName, java.lang.Iterable<AnalysisVariableValue> variables)` Set the variable hierarchy of a running instance. |
| `void` | `setHierarchyAsync(java.lang.String instanceName, java.io.File xmlData, java.lang.String xmlEncoding, boolean gzipped, IAnalysisServerCallback callback)` Set the variable hierarchy of a running instance. |
| `void` | `setHierarchyAsync(java.lang.String instanceName, java.lang.Iterable<AnalysisVariableValue> variables, IAnalysisServerCallback callback)` Set the variable hierarchy of a running instance. |
| `void` | `setServerProperties(java.util.Map<java.lang.String,?> propertyMap)` Set server properties. |
| `void` | `setServerPropertiesAsync(java.util.Map<java.lang.String,?> propertyMap, IAnalysisServerCallback callback)` Set server properties. |
| `void` | `start(java.lang.String analysis, java.lang.String instanceName)` Start an analysis. |
| `void` | `startAsync(java.lang.String analysis, java.lang.String instanceName, IAnalysisServerCallback callback)` Start an analysis. |
| `boolean` | `supportsBinaryTransfer()` Does this server support binary transfer? |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### AnalysisServerClient

```java
public AnalysisServerClient()
```
## Method Detail

### isConnected

```java
public boolean isConnected()
```
Is the server connected?

### getUri

```java
public java.net.URI getUri()
```
Get the currently-connected URI, or null if none.

### getHostname

```java
public java.lang.String getHostname()
```
Returns the currently-connected host, or null if none.

### supportsBinaryTransfer

```java
public boolean supportsBinaryTransfer() 
                               throws java.lang.IllegalStateException
```
Does this server support binary transfer?

**Throws:**
- `java.lang.IllegalStateException` – if the client is not connected

### connect

```java
public void connect(java.net.URI uri) 
             throws javax.security.auth.login.FailedLoginException, 
                    java.io.IOException, 
                    java.lang.NullPointerException
```
Connect to ModelCenter Remote Execution at a specified URI with no timeout. The server must not require authentication.

**Parameters:**
- `uri` – the URI

**Throws:**
- `javax.security.auth.login.FailedLoginException` – if the server requires credentials
- `java.io.IOException` – if the server cannot be connected
- `java.lang.NullPointerException` – if uri is null

### connect

```java
public void connect(java.net.URI uri, 
                    int timeout) 
             throws javax.security.auth.login.FailedLoginException, 
                    java.io.IOException, java.lang.NullPointerException
```
Connect to ModelCenter Remote Execution at a specified URI. The server must not require authentication.

**Parameters:**
- `uri` – the URI
- `timeout` – the timeout to use, or 0 for none

**Throws:**
- `javax.security.auth.login.FailedLoginException` – if the server requires credentials
- `java.io.IOException` – if the server cannot be connected
- `java.lang.NullPointerException` – if uri is null

### connect

```java
public void connect(java.net.URI uri, 
                    java.lang.String username, 
                    java.lang.String password) 
             throws javax.security.auth.login.FailedLoginException, 
                    java.io.IOException, 
                    java.lang.NullPointerException
```
Connect to ModelCenter Remote Execution with optional authentication and no timeout.

**Parameters:**
- `uri` – the URI to connect to
- `username` – the username to use (null for none)
- `password` – the password to use (null for none)

**Throws:**
- `javax.security.auth.login.FailedLoginException` – if the credentials are invalid
- `java.io.IOException` – if the server cannot be connected
- `java.lang.NullPointerException` – if uri is null

### connect

```java
public void connect(java.net.URI uri, 
                    java.lang.String username, 
                    java.lang.String password, 
                    int timeout) 
             throws javax.security.auth.login.FailedLoginException, 
                    java.io.IOException, 
                    java.lang.UnsupportedOperationException, 
                    java.lang.NullPointerException
```
Connect to ModelCenter Remote Execution with optional authentication.

**Parameters:**
- `uri` – the URI to connect to
- `username` – the username to use (null for none)
- `password` – the password to use (null for none)
- `timeout` – the timeout, or 0 for none

**Throws:**
- `javax.security.auth.login.FailedLoginException` – if the credentials are invalid
- `java.io.IOException` – if the server cannot be connected
- `java.lang.UnsupportedOperationException` – if the URI is not a recognized type
- `java.lang.NullPointerException` – if uri is null

### connectEmbedded

```java
public void connectEmbedded() 
                     throws javax.security.auth.login.FailedLoginException, 
                            java.io.IOException
```
Connect to the in-process (embedded) ModelCenter Remote Execution instance.

**Throws:**
- `javax.security.auth.login.FailedLoginException` – if the server requires authentication
- `java.io.IOException` – on connection error

### connectEmbedded

```java
public void connectEmbedded(java.lang.String username, 
                            java.lang.String password) 
                     throws javax.security.auth.login.FailedLoginException, 
                            java.io.IOException
```
Connect to the in-process (embedded) ModelCenter Remote Execution instance.

**Parameters:**
- `username` – the username to use (null for none)
- `password` – the password to use (null for none)

**Throws:**
- `javax.security.auth.login.FailedLoginException` – if the credentials are invalid
- `java.io.IOException` – on connection error

### connectEmbedded

```java
public void connectEmbedded(java.util.Map<java.lang.String,java.lang.Object> initialProperties) 
                     throws javax.security.auth.login.FailedLoginException, java.io.IOException
```
Connect to the in-process (embedded) ModelCenter Remote Execution instance.

**Parameters:**
- `initialProperties` – the initial properties to set (may be null)

**Throws:**
- `javax.security.auth.login.FailedLoginException` – if the server requires authentication
- `java.io.IOException` – on connection error

### connectEmbedded

```java
public void connectEmbedded(java.util.Map<java.lang.String,java.lang.Object> initialProperties, 
                            java.lang.String username, 
                            java.lang.String password) 
                     throws javax.security.auth.login.FailedLoginException, 
                            java.io.IOException
```
Connect to the in-process (embedded) ModelCenter Remote Execution instance.

**Parameters:**
- `initialProperties` – the initial properties to set (may be null)
- `username` – the username to use (null for none)
- `password` – the password to use (null for none)

**Throws:**
- `javax.security.auth.login.FailedLoginException` – if the credentials are invalid
- `java.io.IOException` – on connection error

### connectSsh

```java
public void connectSsh(java.lang.String host, 
                       java.io.InputStream inputStream, 
                       java.io.OutputStream outputStream, 
                       java.io.InputStream errorStream) 
                throws javax.security.auth.login.FailedLoginException, 
                       java.io.IOException, 
                       java.net.URISyntaxException
```
Connect to ModelCenter Remote Execution via arbitrary input and output streams. This function is misnamed because it doesn't really care if the streams come from ssh or not, only that the other end of the streams are hooked up to ModelCenter Remote Execution.

**Parameters:**
- `host` – the machine at which the streams are connected
- `inputStream` – the stream where the SSH server writes its output
- `outputStream` – the stream where the SSH server reads further input
- `errorStream` – The stream where the SSH server writes its error output, which may be null; this is used to include additional information if a connection error occurs

**Throws:**
- `javax.security.auth.login.FailedLoginException`
- `java.io.IOException`
- `java.net.URISyntaxException`

### close

```java
public void close()
```
Close the connection to the server.

**Specified by:**
- `close` in interface `java.lang.AutoCloseable`

### quit

```java
public void quit(boolean background) 
          throws java.lang.IllegalStateException, 
                 java.io.IOException, 
                 AnalysisServerException, 
                 java.lang.InterruptedException
```
Force quit current analysis, and shut down ModelCenter Remote Execution.

**Parameters:**
- `background` – whether to background execution

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### finalize

```java
protected void finalize() 
                 throws java.lang.Throwable
```
Clean up during finalization.

**Overrides:**
- `finalize` in class `java.lang.Object`

**Throws:**
- `java.lang.Throwable`

### getVersion

```java
public AnalysisServerVersion getVersion() 
                                 throws java.lang.IllegalStateException, 
                                        java.io.IOException, 
                                        AnalysisServerException, 
                                        java.lang.InterruptedException
```
Get the MCRE version.

**Returns:**
- the version

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### startAsync

```java
public void startAsync(java.lang.String analysis, 
                       java.lang.String instanceName, 
                       IAnalysisServerCallback callback) 
                throws java.io.IOException, 
                       java.lang.IllegalStateException
```
Start an analysis.

**Parameters:**
- `analysis` – the analysis
- `instanceName` – the name for this instance
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### start

```java
public void start(java.lang.String analysis, 
                  java.lang.String instanceName) 
           throws java.lang.IllegalStateException, 
                  java.io.IOException, 
                  AnalysisServerException, 
                  java.lang.InterruptedException
```
Start an analysis.

**Parameters:**
- `analysis` – the analysis
- `instanceName` – the name for this instance

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### endAsync

```java
public void endAsync(java.lang.String instanceName, 
                     IAnalysisServerCallback callback) 
              throws java.io.IOException, 
                     java.lang.IllegalStateException
```
End an analysis.

**Parameters:**
- `instanceName` – the name of the instance
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### end

```java
public void end(java.lang.String instanceName) 
         throws java.lang.IllegalStateException, 
                java.io.IOException, 
                AnalysisServerException, 
                java.lang.InterruptedException
```
End an analysis.

**Parameters:**
- `instanceName` – the name of the instance

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### listAnalysesAsync

```java
public void listAnalysesAsync(java.lang.String folderPath, 
                              IAnalysisServerCallback callback) 
                       throws java.io.IOException, 
                              java.lang.IllegalStateException
```
List the analyses on the server.

**Parameters:**
- `folderPath` – the path to the folder (may be null)
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### listAnalyses

```java
public java.util.List<java.lang.String> listAnalyses(java.lang.String folderPath) 
                                   throws java.lang.IllegalStateException, 
                                          java.io.IOException, 
                                          AnalysisServerException, 
                                          java.lang.InterruptedException
```
List the analyses on the server.

**Parameters:**
- `folderPath` – the path to the folder (may be null)

**Returns:**
- the list of classes

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### executeAsync

```java
public void executeAsync(java.lang.String instanceName, 
                         boolean background, 
                         IAnalysisServerCallback callback) 
                  throws java.io.IOException, 
                         java.lang.IllegalStateException
```
Execute an analysis.

**Parameters:**
- `instanceName` – the name of the instance
- `background` – whether to background execution
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### execute

```java
public void execute(java.lang.String instanceName, 
                    boolean background) 
             throws java.lang.IllegalStateException, 
                    java.io.IOException, 
                    AnalysisServerException, 
                    java.lang.InterruptedException
```
Execute an analysis.

**Parameters:**
- `instanceName` – the name of the instance
- `background` – whether to background execution

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### addProxyClientsAsync

```java
public void addProxyClientsAsync(java.lang.Iterable<java.lang.String> clientHosts, 
                                 IAnalysisServerCallback callback) 
                          throws java.io.IOException, 
                                 java.lang.IllegalStateException
```
Add a list of allowed proxy client hosts.

**Parameters:**
- `clientHosts` – the collection of hosts
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### addProxyClients

```java
public void addProxyClients(java.lang.Iterable<java.lang.String> clientHosts) 
                     throws java.lang.IllegalStateException, 
                            java.io.IOException, 
                            AnalysisServerException, 
                            java.lang.InterruptedException
```
Add a list of allowed proxy client hosts.

**Parameters:**
- `clientHosts` – the collection of hosts

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### getAsync

```java
public void getAsync(java.lang.String fullPropertyName, 
                     IAnalysisServerCallback callback) 
              throws java.io.IOException, 
                     java.lang.IllegalStateException
```
Request the value of a property.

**Parameters:**
- `fullPropertyName` – the full property name
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### get

```java
public java.lang.String get(java.lang.String fullPropertyName) 
                     throws java.lang.IllegalStateException, 
                            java.io.IOException, 
                            AnalysisServerException, 
                            java.lang.InterruptedException
```
Request the value of a property.

**Parameters:**
- `fullPropertyName` – the full property name

**Returns:**
- the property value

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### getFileAsync

```java
public void getFileAsync(java.io.File destFile, 
                         java.lang.String fullPropertyName, 
                         boolean isBinaryFile, 
                         IAnalysisServerCallback callback) 
                  throws java.io.IOException, java.lang.IllegalStateException
```
Fetch the contents of a file by property name.

**Parameters:**
- `destFile` – the file to write to
- `fullPropertyName` – the full property name
- `isBinaryFile` – whether or not this is a binary file (will only be used if the server must transfer the file as text, so we know how to decode it!)
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### getFile

```java
public void getFile(java.io.File destFile, 
                    java.lang.String fullPropertyName, 
                    boolean isBinaryFile) 
             throws java.lang.IllegalStateException, 
                    java.io.IOException, 
                    AnalysisServerException, 
                    java.lang.InterruptedException
```
Get a file by property name.

**Parameters:**
- `fullPropertyName` – the full property name
- `destFile` – the file to write with the results
- `isBinaryFile` – whether or not this is a binary file (will only be used if the server must transfer the file as text, so we know how to decode it!)

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### getByUrlAsync

```java
public void getByUrlAsync(java.io.File destFile, 
                          java.lang.String fullPropertyName, 
                          java.lang.String url, 
                          boolean isBinaryFile, 
                          IAnalysisServerCallback callback) 
                   throws java.io.IOException, 
                          java.lang.IllegalStateException
```
Fetch the contents of a file by URL.

**Parameters:**
- `destFile` – the file to write to
- `fullPropertyName` – the full property name
- `url` – the URL to retrieve
- `isBinaryFile` – whether or not this is a binary file (will only be used if the server must transfer the file as text, so we know how to decode it!)
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### getByUrl

```java
public void getByUrl(java.io.File destFile, 
                     java.lang.String fullPropertyName, 
                     java.lang.String url, 
                     boolean isBinaryFile) 
              throws java.lang.IllegalStateException, 
                     java.io.IOException, 
                     AnalysisServerException, 
                     java.lang.InterruptedException
```
Get a file by URL.

**Parameters:**
- `fullPropertyName` – the full property name
- `destFile` – the file to write with the results
- `url` – the URL to retrieve
- `isBinaryFile` – whether or not this is a binary file (will only be used if the server must transfer the file as text, so we know how to decode it!)

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### getByUrl

```java
public void getByUrl(java.io.File destFile, 
                     java.lang.String url, 
                     boolean isBinaryFile) 
              throws java.lang.IllegalStateException, 
                     java.io.IOException, 
                     AnalysisServerException, 
                     java.lang.InterruptedException
```
Convenience overload of `getByUrl(File, String, String, boolean)`. Calls that `getByUrl` with a blank `fullPropertyName` parameter. Get a file by URL.

**Parameters:**
- `destFile` – the file to write with the results
- `url` – the URL to retrieve
- `isBinaryFile` – whether or not this is a binary file (will only be used if the server must transfer the file as text, so we know how to decode it!)

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### getDimensionsAsync

```java
public void getDimensionsAsync(java.lang.String fullPropertyName, 
                               IAnalysisServerCallback callback) 
                        throws java.io.IOException, 
                               java.lang.IllegalStateException
```
Set the dimensions of an array.

**Parameters:**
- `fullPropertyName` – the full property name
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### getDimensions

```java
public int[] getDimensions(java.lang.String fullPropertyName) 
                    throws java.lang.IllegalStateException, 
                           java.io.IOException, 
                           AnalysisServerException, 
                           java.lang.InterruptedException
```
Set the dimensions of an array.

**Parameters:**
- `fullPropertyName` – the full property name

**Returns:**
- the dimensions

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### setDimensionsAsync

```java
public void setDimensionsAsync(java.lang.String fullPropertyName, 
                               int[] dimensions, 
                               IAnalysisServerCallback callback) 
                        throws java.io.IOException, 
                               java.lang.IllegalStateException, 
                               java.lang.NullPointerException, 
                               java.lang.IllegalArgumentException
```
Set the dimensions of an array.

**Parameters:**
- `fullPropertyName` – the full property name
- `dimensions` – the dimensions
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error
- `java.lang.NullPointerException` – if dimensions is null
- `java.lang.IllegalArgumentException` – if any of the dimensions are invalid

### setDimensions

```java
public void setDimensions(java.lang.String fullPropertyName, 
                          int[] dimensions) 
                   throws java.lang.IllegalStateException, 
                          java.io.IOException, 
                          AnalysisServerException, 
                          java.lang.InterruptedException, 
                          java.lang.NullPointerException, 
                          java.lang.IllegalArgumentException
```
Set the dimensions of an array.

**Parameters:**
- `fullPropertyName` – the full property name
- `dimensions` – the dimensions

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response
- `java.lang.NullPointerException` – if dimensions is null
- `java.lang.IllegalArgumentException` – if any of the dimensions are invalid

### setByUrlAsync

```java
public void setByUrlAsync(java.lang.String fullPropertyName, 
                          java.lang.String url, 
                          IAnalysisServerCallback callback) 
                   throws java.io.IOException, 
                          java.lang.IllegalStateException
```
Set the URL associated with a property

**Parameters:**
- `fullPropertyName` – the full property name
- `url` – the URL to set
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### setByUrl

```java
public void setByUrl(java.lang.String fullPropertyName, 
                     java.lang.String url) 
              throws java.lang.IllegalStateException, 
                     java.io.IOException, 
                     AnalysisServerException, 
                     java.lang.InterruptedException
```
Set the URL of a file property.

**Parameters:**
- `fullPropertyName` – the full property name
- `url` – the URL to set

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### setDictionary

```java
public void setDictionary(java.lang.String xml) 
                   throws java.lang.IllegalStateException, 
                          java.io.IOException,
                          AnalysisServerException, 
                          java.lang.InterruptedException
```
Set dictionary on Server.

**Parameters:**
- `xml` – context information in form of a xml string

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### setDictionaryAsync

```java
public void setDictionaryAsync(java.lang.String xml, 
                               IAnalysisServerCallback callback) 
                        throws java.lang.IllegalStateException, 
                               java.io.IOException
```
Set dictionary on Server.

**Parameters:**
- `xml` – context information in form of a xml string
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error
- `java.lang.NullPointerException` – if xml is null

### setAsync

```java
public void setAsync(java.lang.String fullPropertyName, 
                     java.lang.Object value, 
                     IAnalysisServerCallback callback) 
              throws java.io.IOException, 
                     java.lang.IllegalStateException
```
Set the value of a property.

**Parameters:**
- `fullPropertyName` – the full property name
- `value` – the value to set
- `callback` – the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – on communications error

### set

```java
public void set(java.lang.String fullPropertyName, 
                java.lang.Object value) 
         throws java.lang.IllegalStateException, 
                java.io.IOException, 
                AnalysisServerException, 
                java.lang.InterruptedException
```
Set the value of a property.

**Parameters:**
- `fullPropertyName` – the full property name
- `value` – the value to set (if this is a`File`or (`@link PHXTempFile`), set(java.lang.String, java.io.File) will be called automatically)

**Throws:**
- `java.lang.IllegalStateException` – if the server is not connected
- `java.io.IOException` – if there is an error talking to the server
- `AnalysisServerException` – if the request fails
- `java.lang.InterruptedException` – if the current thread is interrupted waiting for the response

### setAsync

```java
public void setAsync(java.lang.String fullPropertyName,
                     java.io.File contents,
                     IAnalysisServerCallback callback)
              throws java.io.IOException,
                     java.lang.IllegalStateException,
                     java.lang.UnsupportedOperationException
```
Set a file variable on the server.

**Parameters:**
- `fullPropertyName` - the full property name to set
- `contents` - the contents to set
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server or reading from the file
- `java.lang.UnsupportedOperationException` - if the server does not support file transfer
### setAsync

```java
public void setAsync(java.lang.String fullPropertyName,
                     java.io.File contents,
                     java.lang.String encoding,
                     IAnalysisServerCallback callback)
              throws java.io.IOException,
                     java.lang.IllegalStateException,
                     java.lang.UnsupportedOperationException
```
Set a file variable on the server.

**Parameters:**
- `fullPropertyName` - the full property name to set
- `contents` - the contents to set
- `encoding` - the text encoding to use for non-file variables, null for file variables
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server or reading from the file
- `java.lang.UnsupportedOperationException` - if the server does not support file transfer
### set

```java
public void set(java.lang.String fullPropertyName,
                java.io.File contents)
         throws java.lang.IllegalStateException,
                java.io.IOException,
                AnalysisServerException,
                java.lang.InterruptedException,
                java.lang.UnsupportedOperationException
```
Set a file variable on the server.

**Parameters:**
- `fullPropertyName` - the full property name to set
- `contents` - the contents to set

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server or reading from the file
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
- `java.lang.UnsupportedOperationException` - if the server does not support binary transfer
### set

```java
public void set(java.lang.String fullPropertyName,
                java.io.File contents,
                java.lang.String encoding)
         throws java.lang.IllegalStateException,
                java.io.IOException,
                AnalysisServerException,
                java.lang.InterruptedException,
                java.lang.UnsupportedOperationException
```
Set a file variable on the server.

**Parameters:**
- `fullPropertyName` - the full property name to set
- `contents` - the contents to set
- `encoding` - the text encoding to use for non-file variables, null for file variables

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server or reading from the file
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
- `java.lang.UnsupportedOperationException` - if the server does not support binary transfer
### getVersionHistoryAsync

```java
public void getVersionHistoryAsync(java.lang.String analysis,
                                   IAnalysisServerCallback callback)
                            throws java.io.IOException,
                                   java.lang.IllegalStateException
```
Get the version history of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### getVersionHistory

```java
public PHXComponentBranch getVersionHistory(java.lang.String analysis)
                                     throws java.lang.IllegalStateException,
                                            java.io.IOException,
                                            AnalysisServerException,
                                            java.lang.InterruptedException
```
Get the version history of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for

**Returns:**
- the version history information

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### describeAsync

```java
public void describeAsync(java.lang.String analysis,
                          IAnalysisServerCallback callback)
                   throws java.io.IOException,
                          java.lang.IllegalStateException
```
Get the description history of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### describe

```java
public PHXComponentDescription describe(java.lang.String analysis)
                                 throws java.lang.IllegalStateException,
                                        java.io.IOException,
                                        AnalysisServerException,
                                        java.lang.InterruptedException
```
Get the description of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for

**Returns:**
- the version history information

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### listPropertiesAsync

```java
public void listPropertiesAsync(java.lang.String analysis,
                                IAnalysisServerCallback callback)
                         throws java.io.IOException,
                                java.lang.IllegalStateException
```
List the properties of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### listProperties

```java
public java.util.List<PHXPropertyDescriptor> listProperties(java.lang.String analysis)
                                                throws java.lang.IllegalStateException,
                                                       java.io.IOException,
                                                       AnalysisServerException,
                                                       java.lang.InterruptedException
```
List the properties of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for

**Returns:**
- the property list

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### listMethodsAsync

```java
public void listMethodsAsync(java.lang.String analysis,
                             IAnalysisServerCallback callback)
                      throws java.io.IOException,
                             java.lang.IllegalStateException
```
List the methods of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### listMethods

```java
public java.util.List<PHXMethodDescriptor> listMethods(java.lang.String analysis)
                                                throws java.lang.IllegalStateException,
                                                       java.io.IOException,
                                                       AnalysisServerException,
                                                       java.lang.InterruptedException
```
List the methods of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for

**Returns:**
- the method list

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### invokeAsync

```java
public void invokeAsync(java.lang.String instanceName,
                        java.lang.String methodName,
                        IAnalysisServerCallback callback)
                 throws java.io.IOException,
                        java.lang.IllegalStateException
```
Invoke a method on a component instance.

**Parameters:**
- `instanceName` - the name of the instance to invoke the method for
- `methodName` - the method name to invoke
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### invoke

```java
public java.lang.String invoke(java.lang.String instanceName,
                               java.lang.String methodName)
                        throws java.lang.IllegalStateException,
                               java.io.IOException,
                               AnalysisServerException,
                               java.lang.InterruptedException
```
Invoke a method on a component instance.

**Parameters:**
- `instanceName` - the name of the instance to invoke the method for
- `methodName` - the method name to invoke

**Returns:**
- whatever the method returned

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### listValuesAsync

```java
public void listValuesAsync(java.lang.String analysis,
                            IAnalysisServerCallback callback)
                     throws java.io.IOException,
                            java.lang.IllegalStateException
```
List the values of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### listValues

```java
public java.util.List<PHXPropertyValue> listValues(java.lang.String analysis)
                                            throws java.lang.IllegalStateException,
                                                   java.io.IOException,
                                                   AnalysisServerException,
                                                   java.lang.InterruptedException
```
List the values of an analysis.

**Parameters:**
- `analysis` - the analysis to retrieve info for

**Returns:**
- the value list

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### listFoldersAsync

```java
public void listFoldersAsync(java.lang.String folderPath,
                             IAnalysisServerCallback callback)
                      throws java.io.IOException,
                             java.lang.IllegalStateException
```
List the sub-folders of a folder on the server.

**Parameters:**
- `folderPath` - the folder path; may be null
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### listFolders

```java
public java.util.List<java.lang.String> listFolders(java.lang.String folderPath)
                                             throws java.lang.IllegalStateException,
                                                    java.io.IOException,
                                                    AnalysisServerException,
                                                    java.lang.InterruptedException
```
List the sub-folders of a folder on the server.

**Parameters:**
- `folderPath` - the folder path; may be null

**Returns:**
- the list of folders

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### listInstancesAsync

```java
public void listInstancesAsync(IAnalysisServerCallback callback)
                        throws java.io.IOException,
                               java.lang.IllegalStateException
```
List running instances on the server.

**Parameters:**
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### listInstances

```java
public java.util.List<java.lang.String> listInstances()
                                               throws java.lang.IllegalStateException,
                                                      java.io.IOException,
                                                      AnalysisServerException,
                                                      java.lang.InterruptedException
```
List running instances on the server.

**Returns:**
- the list of folders

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### getHierarchyAsync

```java
public void getHierarchyAsync(java.lang.String instanceName,
                              com.phoenix_int.aserver.client.PHXHierarchyFileMode fileMode,
                              IAnalysisServerCallback callback)
                       throws java.io.IOException,
                              java.lang.IllegalStateException
```
Get the variable hierarchy of a running instance.

**Parameters:**
- `instanceName` - the name of the instance to retrieve variables for
- `fileMode` - the way to return files
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### getHierarchy

```java
public java.util.Map<java.lang.String,AnalysisVariableValue> getHierarchy(java.lang.String instanceName,
                                                                          com.phoenix_int.aserver.client.PHXHierarchyFileMode fileMode)
                                                                   throws java.lang.IllegalStateException,
                                                                          java.io.IOException,
                                                                          AnalysisServerException,
                                                                          java.lang.InterruptedException
```
Get the variable hierarchy of a running instance.

**Parameters:**
- `instanceName` - the name of the instance to retrieve variables for
- `fileMode` - the way to return files

**Returns:**
- the hierarchy (a map from variable paths to values)

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### setHierarchyAsync

```java
public void setHierarchyAsync(java.lang.String instanceName,
                              java.lang.Iterable<AnalysisVariableValue> variables,
                              IAnalysisServerCallback callback)
                       throws java.io.IOException,
                              java.lang.IllegalStateException
```
Set the variable hierarchy of a running instance.

**Parameters:**
- `instanceName` - the name of the instance to retrieve variables for
- `variables` - the variables and values to set

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### setHierarchy

```java
public void setHierarchy(java.lang.String instanceName,
                         java.lang.Iterable<AnalysisVariableValue> variables)
                  throws java.lang.IllegalStateException,
                         java.io.IOException,
                         AnalysisServerException,
                         java.lang.InterruptedException
```
Set the variable hierarchy of a running instance.

**Parameters:**
- `instanceName` - the name of the instance to retrieve variables for
- `variables` - the variables and values to set

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### setHierarchyAsync

```java
public void setHierarchyAsync(java.lang.String instanceName,
                              java.io.File xmlData,
                              java.lang.String xmlEncoding,
                              boolean gzipped,
                              IAnalysisServerCallback callback)
                       throws java.io.IOException,
                              java.lang.IllegalStateException
```
Set the variable hierarchy of a running instance.

**Parameters:**
- `instanceName` - the name of the instance to retrieve variables for
- `xmlData` - the file containing XML data to set
- `xmlEncoding` - the encoding of the data; null or empty for default (UTF-8)
- `gzipped` - whether the file on disk has been gzipped

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### setHierarchy

```java
public void setHierarchy(java.lang.String instanceName,
                         java.io.File xmlData,
                         java.lang.String xmlEncoding,
                         boolean gzipped)
                  throws java.lang.IllegalStateException,
                         java.io.IOException,
                         AnalysisServerException,
                         java.lang.InterruptedException
```
Set the variable hierarchy of a running instance.

**Parameters:**
- `instanceName` - the name of the instance to retrieve variables for
- `xmlData` - the file containing XML data to set
- `xmlEncoding` - the encoding of the data; null or empty for default (UTF-8)
- `gzipped` - whether the file on disk has been gzipped

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### deleteRunShareAsync

```java
public void deleteRunShareAsync(java.lang.String key,
                                IAnalysisServerCallback callback)
                         throws java.io.IOException,
                                java.lang.IllegalStateException
```
Delete a run share.

**Parameters:**
- `key` - the unique key for the share

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### deleteRunShare

```java
public void deleteRunShare(java.lang.String key)
                    throws java.lang.IllegalStateException,
                           java.io.IOException,
                           AnalysisServerException,
                           java.lang.InterruptedException
```
Delete a run share.

**Parameters:**
- `key` - the unique key for the share

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### getIconAsync

```java
public void getIconAsync(java.lang.String analysis,
                         IAnalysisServerCallback callback)
                  throws java.io.IOException,
                         java.lang.IllegalStateException
```
Retrieve an icon.

**Parameters:**
- `analysis` - the analysis to get the icon for

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### getIcon

```java
public PHXIcon getIcon(java.lang.String analysis)
                throws java.lang.IllegalStateException,
                       java.io.IOException,
                       AnalysisServerException,
                       java.lang.InterruptedException
```
Retrieve an icon.

**Parameters:**
- `analysis` - the analysis to get the icon for

**Returns:**
- the icon

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### setServerPropertiesAsync

```java
public void setServerPropertiesAsync(java.util.Map<java.lang.String,?> propertyMap,
                                     IAnalysisServerCallback callback)
                              throws java.io.IOException,
                                     java.lang.IllegalStateException
```
Set server properties.

**Parameters:**
- `propertyMap` - a map of keys to values

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### setServerProperties

```java
public void setServerProperties(java.util.Map<java.lang.String,?> propertyMap)
                         throws java.lang.IllegalStateException,
                                java.io.IOException,
                                AnalysisServerException,
                                java.lang.InterruptedException
```
Set server properties.

**Parameters:**
- `propertyMap` - a map of keys to values

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### getSystemPropertyAsync

```java
public void getSystemPropertyAsync(java.lang.String key,
                                   IAnalysisServerCallback callback)
                            throws java.io.IOException,
                                   java.lang.IllegalStateException
```
Request for the server's system property.

**Parameters:**
- `key` - the name of the system property
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error
### getSystemProperty

```java
public java.lang.String getSystemProperty(java.lang.String key)
                                   throws java.lang.IllegalStateException,
                                          java.io.IOException,
                                          AnalysisServerException,
                                          java.lang.InterruptedException
```
Request for the server's system property.

**Parameters:**
- `key` - the name of the system property

**Returns:**
- the property value

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response
### getScratchDirectoryAsync

```java
public void getScratchDirectoryAsync(IAnalysisServerCallback callback)
                              throws java.io.IOException,
                                     java.lang.IllegalStateException
```
Request for the server's scratch directory.

**Parameters:**
- `callback` - the callback for when the response is received

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - on communications error

### getScratchDirectory

```java
public java.lang.String getScratchDirectory()
                                     throws java.lang.IllegalStateException,
                                            java.io.IOException,
                                            AnalysisServerException,
                                            java.lang.InterruptedException
```
Request for the server's scratch directory.

**Returns:**
- the scratch directory of the connected MCRE

**Throws:**
- `java.lang.IllegalStateException` - if the server is not connected
- `java.io.IOException` - if there is an error talking to the server
- `AnalysisServerException` - if the request fails
- `java.lang.InterruptedException` - if the current thread is interrupted waiting for the response

