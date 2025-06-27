# Class: PHXAnalysisClient

**Package:** `com.phoenix_int.aserver.client`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.client.PHXAnalysisClient
```

**Declaration**
```java
@Deprecated
public class PHXAnalysisClient
    extends java.lang.Object
```

This class automates communications with the ModelCenter Remote Execution. Communication can be performed asynchronously or synchronously. Synchronous communication is performed by calling any of the direct access functions, e.g. `start()` or `listProperties()`. Asynchronous communication is performed by calling a `sendXXXRequest()` function and then calling the matching `getXXXResponse()` when the response is ready. Listener methods are provided for notification of responses.

Sample Usage:

```java
 // this code connects to the ModelCenter Remote Execution and performs serveral
 // functions
 String host = "phoenix-int.com";
 try
 {
    PHXAnalysisClient client = new PHXAnalysisClient( host );

    // list all the classes
    String classes[] = client.listClasses( null );
    System.out.println( classes.length + " classes found:" );
    for ( int i = 0; i < classes.length; i++ )
    {
       System.out.println( "   Class: " + classes[i] );

       PHXComponentDescription d = client.describe( classes[i] );

       System.out.println( "     Author: " + d.getAuthor() );
       System.out.println( "     Version: " + d.getVersion() );
       System.out.println( "     HasIcon: " + d.getHasIcon() );
       System.out.println( "     Description: " + d.getDescription() );
    }

    // start up the block analysis
    String msg = client.start( "Block", "b" );

    // query for it's props
    PHXPropertyDescriptor props[] = client.listProperties( "b" );
    System.out.println( props.length + " properties found:" );
    for ( int i = 0; i < props.length; i++ )
    {
       System.out.println( "   Prop: " + props[i].getName() );
       System.out.println( "     type: " + props[i].getType() );
       System.out.println( "     canGet: " + props[i].getCanGet() );
       System.out.println( "     canSet: " + props[i].getCanSet() );
    }

    // perform a bunch of operations
    client.set( "b.height", Double.toString( 3.141593 ) );
    for ( int i = 0; i < 10; i++ )
    {
       msg = client.set( "b.width", Integer.toString( i ) );
       msg = client.execute( "b" );

       System.out.println( "when width = " + client.get( "b.width" ) +
                           ", area = " + client.get( "b.area" ) );
    }

    // end the analysis
    client.end( "b" );

    client.close();
 }
 catch ( Exception e )
 {
    System.out.println( e );
 }
 
```

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static int` | `ADD_PROXY_CLIENTS_REQUEST`<br>Deprecated. |
| `static int` | `ARBITRARY_REQUEST`<br>Deprecated. |
| `static int` | `DELETE_RUN_SHARE_REQUEST`<br>Deprecated. |
| `static int` | `DESCRIBE_REQUEST`<br>Deprecated. |
| `static int` | `END_REQUEST`<br>Deprecated. |
| `static int` | `EXECUTE_REQUEST`<br>Deprecated. |
| `static int` | `GET_BY_URL_REQUEST`<br>Deprecated. |
| `static int` | `GET_HIERARCHY_REQUEST`<br>Deprecated. |
| `static int` | `GET_ICON_REQUEST`<br>Deprecated. |
| `static int` | `GET_REQUEST`<br>Deprecated. |
| `static int` | `HISTORY_REQUEST`<br>Deprecated. |
| `static int` | `INVOKE_REQUEST`<br>Deprecated. |
| `static int` | `LIST_ARRAY_VALUES_REQUEST`<br>Deprecated. |
| `static int` | `LIST_CATEGORIES_REQUEST`<br>Deprecated. |
| `static int` | `LIST_CLASSES_REQUEST`<br>Deprecated. |
| `static int` | `LIST_METHODS_REQUEST`<br>Deprecated. |
| `static int` | `LIST_PROPERTIES_REQUEST`<br>Deprecated. |
| `static int` | `LIST_REQUEST`<br>Deprecated. |
| `static int` | `LIST_VALUES_REQUEST`<br>Deprecated. |
| `static int` | `LIST_VALUES_URL_REQUEST`<br>Deprecated. |
| `static int` | `SET_BY_URL_REQUEST`<br>Deprecated. |
| `static int` | `SET_DICTIONARY_REQUEST`<br>Deprecated. |
| `static int` | `SET_HIERARCHY_REQUEST`<br>Deprecated. |
| `static int` | `SET_REQUEST`<br>Deprecated. |
| `static int` | `START_REQUEST`<br>Deprecated. |

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXAnalysisClient()`<br>Deprecated. |
| `PHXAnalysisClient(java.lang.String host)`<br>Deprecated. Creates a client to the ModelCenter Remote Execution and connects it to the specified host. |
| `PHXAnalysisClient(java.lang.String host, int port)`<br>Deprecated. Creates a client to the MCRE and connects it to the specified host. |
| `PHXAnalysisClient(java.lang.String host, int port, int timeout)`<br>Deprecated. Creates a client to the MCRE and connects it to the specified host. |
| `PHXAnalysisClient(java.lang.String host, int timeout, java.lang.String username, java.lang.String password)`<br>Deprecated. Creates a client to the MCRE and connects it to the specified host. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addListener(IPHXAnalysisClientListener l)`<br>Deprecated. Adds a listener. |
| `java.lang.String` | `addProxyClients(java.lang.String clients)`<br>Deprecated. Tells the server to add other hosts as part of the proxy chain. |
| `void` | `close()`<br>Deprecated. Closes the connection to the server. |
| `void` | `connect(java.lang.String host)`<br>Deprecated. Connects to the MCRE on the specified host. |
| `void` | `connect(java.lang.String host, int port)`<br>Deprecated. Connects to the MCRE on the specified host. |
| `void` | `connect(java.lang.String host, int port, boolean useSSL)`<br>Deprecated. Connects to the MCRE on the specified host. |
| `void` | `connect(java.lang.String host, int port, boolean useSSL, int timeout)`<br>Deprecated. Connects to the MCRE on the specified host. |
| `void` | `connect(java.lang.String host, int port, boolean useSSL, int timeout, java.lang.String username, java.lang.String password)`<br>Deprecated. Connects to the MCRE on the specified host. |
| `void` | `connectExternal(java.lang.String host, int timeout, java.lang.String username, java.lang.String password)`<br>Deprecated. Connects to the MCRE via external tool. |
| `void` | `connectLocal(java.lang.String userName, java.lang.String password)`<br>Deprecated. Makes a virtual connection to the ModelCenter Remote Execution inside of this process. |
| `void` | `connectLocal(java.lang.String userName, java.lang.String password, java.util.Map<java.lang.String,java.lang.Object> initialProps)`<br>Deprecated. Makes a virtual connection to the MCRE inside of this process. |
| `void` | `connectProcess(java.lang.String userName, java.lang.String password, java.lang.String asRoot, java.lang.String asConfig)`<br>Deprecated. Makes a virtual connection to the MCRE by calling a new java process. |
| `void` | `connectURL(java.lang.String url)`<br>Deprecated. Connects to the MCRE using the specified URL, such as mcre://hostname. |
| `void` | `connectURL(java.lang.String url, int timeout, java.lang.String user, java.lang.String password)`<br>Deprecated. Connects to the ModelCenter Remote Execution using the specified URL, such as mcre://hostname. |
| `java.lang.String` | `deleteRunShare(java.lang.Long key)`<br>Deprecated. Handle cleaning up a runShare in a local client. |
| `PHXComponentDescription` | `describe(java.lang.String analysis)`<br>Deprecated. Describes an analysis. |
| `java.lang.String` | `end(java.lang.String analysis)`<br>Deprecated. Ends an analysis. |
| `java.lang.String` | `execute(java.lang.String analysis)`<br>Deprecated. Executes an analysis. |
| `protected void` | `finalize()`<br>Deprecated. |
| `java.lang.String` | `get(java.lang.String property)`<br>Deprecated. Get the value of a property. |
| `PHXStringBuffer` | `get2(java.lang.String property)`<br>Deprecated. Get the value of a property. |
| `java.lang.String` | `getAddProxyClientsResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXStringBuffer` | `getByUrl(java.lang.String propertyName, java.lang.String url)`<br>Deprecated. Get the value of a property. |
| `PHXComponentBranch` | `getComponentHistory(java.lang.String analysis)`<br>Deprecated. Gets the component history for a particular component. |
| `java.lang.String` | `getDeleteRunShareResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXComponentDescription` | `getDescribeResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String` | `getEndResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String` | `getExecuteResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXStringBuffer` | `getGetByUrlResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXComponentBranch` | `getGetComponentHistoryResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXStringBuffer` | `getGetHierarchyResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXIcon` | `getGetIconResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String` | `getGetResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXStringBuffer` | `getGetResponse2(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXStringBuffer` | `getHierarchy(java.lang.String analysis)`<br>Deprecated. Retrieve the hierarchy for the component. |
| `java.lang.String` | `getHostName()`<br>Deprecated. Retrieves the host name of the server. |
| `PHXIcon` | `getIcon(java.lang.String analysis)`<br>Deprecated. Retrieves an icon for an analysis. |
| `java.lang.String` | `getInvokeResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String[]` | `getListArrayValuesResponse(java.lang.String id, boolean wait)`<br>Deprecated. |
| `java.lang.String[]` | `getListCategoriesResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String[]` | `getListClassesResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXMethodDescriptor[]` | `getListMethodsResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXPropertyDescriptor[]` | `getListPropertiesResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String[]` | `getListResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `PHXPropertyValue[]` | `getListValuesResponse(java.lang.String id, boolean wait)`<br>Deprecated. |
| `PHXStringBuffer` | `getResponseAsPHXStringBuffer(java.lang.String id, int type, boolean wait)`<br>Deprecated. Retrieves a low-level response from the server in String format. |
| `java.lang.String` | `getResponseAsText(java.lang.String id, int type, boolean wait)`<br>Deprecated. Retrieves a low-level response from the server in String format. |
| `PHXStringBuffer` | `getSetByUrlResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String` | `getSetDictionaryResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String` | `getSetHierarchyResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String` | `getSetResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `java.lang.String` | `getStartResponse(java.lang.String id, boolean wait)`<br>Deprecated. Retrieves a response from the server. |
| `static void` | `handleLogin(java.io.InputStream in, java.io.OutputStream out, java.lang.String username, java.lang.String password)`<br>Deprecated. |
| `java.lang.String` | `invoke(java.lang.String method)`<br>Deprecated. Invokes a method. |
| `boolean` | `isConnected()`<br>Deprecated. Determines if the client is currently connected to a server. |
| `boolean` | `isResponseReady(java.lang.String id)`<br>Deprecated. Indicates whether a response is ready. |
| `java.lang.String[]` | `list()`<br>Deprecated. Lists the running objects. |
| `java.lang.String[]` | `listArrayValues(java.lang.String analysis)`<br>Deprecated. |
| `java.lang.String[]` | `listCategories(java.lang.String category)`<br>Deprecated. Lists the categories within a category. |
| `java.lang.String[]` | `listClasses(java.lang.String category)`<br>Deprecated. Lists the classes within a category. |
| `PHXMethodDescriptor[]` | `listMethods(java.lang.String analysis)`<br>Deprecated. Lists the methods of an analysis. |
| `PHXPropertyDescriptor[]` | `listProperties(java.lang.String analysis)`<br>Deprecated. Lists the properties of an analysis. |
| `PHXPropertyValue[]` | `listValues(java.lang.String analysis)`<br>Deprecated. |
| `static void` | `main(java.lang.String[] args)`<br>Deprecated. |
| `void` | `removeListener(IPHXAnalysisClientListener l)`<br>Deprecated. Removes a listener. |
| `java.lang.String` | `sendAddProxyClientsRequest(java.lang.String clients)`<br>Deprecated. Tells the server to add other hosts as part of the proxy chain. |
| `java.lang.String` | `sendArbitraryRequest(PHXStringBuffer request)`<br>Deprecated. Sends an arbitrary request to the server. |
| `java.lang.String` | `sendArbitraryRequest(java.lang.String request)`<br>Deprecated. Sends an arbitrary request to the server. |
| `java.lang.String` | `sendDeleteRunShareRequest(java.lang.Long key)`<br>Deprecated. Sends a request to delete a runShare. |
| `java.lang.String` | `sendDescribeRequest(java.lang.String analysis)`<br>Deprecated. Sends a request to describe an analysis. |
| `java.lang.String` | `sendEndRequest(java.lang.String analysis)`<br>Deprecated. Sends a request to end an analysis. |
| `java.lang.String` | `sendExecuteRequest(java.lang.String analysis)`<br>Deprecated. Sends a request to execute an analysis. |
| `java.lang.String` | `sendGetByUrlRequest(java.lang.String propertyName, java.lang.String url)`<br>Deprecated. Sends a request to get the value of a property. |
| `java.lang.String` | `sendGetComponentHistoryRequest(java.lang.String analysis)`<br>Deprecated. Sends a request to get the version history of a component. |
| `java.lang.String` | `sendGetHierarchyRequest(java.lang.String analysis)`<br>Deprecated. Sends a request to retrieve a hierarchy for a component. |
| `java.lang.String` | `sendGetHierarchyRequest(java.lang.String analysis, com.phoenix_int.aserver.client.PHXHierarchyFileMode fileMode)`<br>Deprecated. Sends a request to retrieve a hierarchy for a component. |
| `java.lang.String` | `sendGetIconRequest(java.lang.String analysis)`<br>Deprecated. Sends a request to retrieve an icon. |
| `java.lang.String` | `sendGetRequest(java.lang.String property)`<br>Deprecated. Sends a request to get the value of a property. |
| `java.lang.String` | `sendInvokeRequest(java.lang.String method)`<br>Deprecated. Sends a request to invoke a method. |
| `java.lang.String` | `sendListArrayValuesRequest(java.lang.String analysis)`<br>Deprecated. |
| `java.lang.String` | `sendListCategoriesRequest(java.lang.String category)`<br>Deprecated. Sends a request to list the categories. |
| `java.lang.String` | `sendListClassesRequest(java.lang.String category)`<br>Deprecated. Sends a request to list the classes. |
| `java.lang.String` | `sendListMethodsRequest(java.lang.String analysis)`<br>Deprecated. Sends a request to list the methods of an analysis. |
| `java.lang.String` | `sendListPropertiesRequest(java.lang.String analysis)`<br>Deprecated. Sends a request to list the properties of an analysis. |
| `java.lang.String` | `sendListRequest()`<br>Deprecated. Sends a request to list the running objects. |
| `java.lang.String` | `sendListValuesRequest(java.lang.String analysis)`<br>Deprecated. |
| `java.lang.String` | `sendListValuesURLRequest(java.lang.String analysis)`<br>Deprecated. |
| `java.lang.String` | `sendSetByUrlRequest(java.lang.String varName, java.lang.String url)`<br>Deprecated. Sends a request to get the value of a property. |
| `java.lang.String` | `sendSetDictionaryRequest(java.lang.String dictionary)`<br>Deprecated. Sends a request to set a dictionary. |
| `java.lang.String` | `sendSetHierarchyRequest(java.lang.String analysis, PHXStringBuffer xml)`<br>Deprecated. Sends a request to set a hierarchy for a component. |
| `java.lang.String` | `sendSetRequest(java.lang.String property, java.lang.Object value)`<br>Deprecated. Sends a request to set the value of a property. |
| `java.lang.String` | `sendStartRequest(java.lang.String analysis, java.lang.String instanceName)`<br>Deprecated. Sends a request to start an analysis. |
| `java.lang.String` | `set(java.lang.String property, java.lang.Object value)`<br>Deprecated. Set the value of a property. |
| `void` | `setByUrl(java.lang.String varName, java.lang.String url)`<br>Deprecated. Set the value of a variable. |
| `void` | `setDeleteDFT(boolean delete)`<br>Deprecated. Set whether the analysis client should auto-delete Direct File Transfer run shares or not. |
| `java.lang.String` | `setDictionary(java.lang.String dictionary)`<br>Deprecated. Tries to set the dictionary by sending a set dictionary request. |
| `java.lang.String` | `setHierarchy(java.lang.String analysis, PHXStringBuffer xml)`<br>Deprecated. Sends a request to set a hierarchy for a component. |
| `java.lang.String` | `start(java.lang.String analysis, java.lang.String instanceName)`<br>Deprecated. Starts an analysis. |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### START_REQUEST
```
public static final int START_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### END_REQUEST
```
public static final int END_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### GET_REQUEST
```
public static final int GET_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### SET_REQUEST
```
public static final int SET_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### LIST_REQUEST
```
public static final int LIST_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### LIST_CLASSES_REQUEST
```
public static final int LIST_CLASSES_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### LIST_PROPERTIES_REQUEST
```
public static final int LIST_PROPERTIES_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### LIST_CATEGORIES_REQUEST
```
public static final int LIST_CATEGORIES_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### EXECUTE_REQUEST
```
public static final int EXECUTE_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### DESCRIBE_REQUEST
```
public static final int DESCRIBE_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### GET_ICON_REQUEST
```
public static final int GET_ICON_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### LIST_VALUES_REQUEST
```
public static final int LIST_VALUES_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### LIST_ARRAY_VALUES_REQUEST
```
public static final int LIST_ARRAY_VALUES_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### LIST_METHODS_REQUEST
```
public static final int LIST_METHODS_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### INVOKE_REQUEST
```
public static final int INVOKE_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### ADD_PROXY_CLIENTS_REQUEST
```
public static final int ADD_PROXY_CLIENTS_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### HISTORY_REQUEST
```
public static final int HISTORY_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### GET_BY_URL_REQUEST
```
public static final int GET_BY_URL_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### GET_HIERARCHY_REQUEST
```
public static final int GET_HIERARCHY_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### SET_HIERARCHY_REQUEST
```
public static final int SET_HIERARCHY_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### DELETE_RUN_SHARE_REQUEST
```
public static final int DELETE_RUN_SHARE_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### SET_DICTIONARY_REQUEST
```
public static final int SET_DICTIONARY_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### SET_BY_URL_REQUEST
```
public static final int SET_BY_URL_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### ARBITRARY_REQUEST
```
public static final int ARBITRARY_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

### LIST_VALUES_URL_REQUEST
```
public static final int LIST_VALUES_URL_REQUEST
```
Deprecated. 

**See Also:**
- Constant Field Values

## Constructor Detail

### PHXAnalysisClient
```
public PHXAnalysisClient()
```
Deprecated.

### PHXAnalysisClient
```
public PHXAnalysisClient(java.lang.String host)
                  throws java.io.IOException, 
                         java.net.UnknownHostException
```
Deprecated.

**Parameters:**
- host - the MCRE host to connect to, or the full URL style host specification (`mcre://hostname:port`)

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

### PHXAnalysisClient
```
public PHXAnalysisClient(java.lang.String host, 
                         int port)
                  throws java.io.IOException, 
                         java.net.UnknownHostException
```
Deprecated.

**Parameters:**
- host - the MCRE host to connect to
- port - the port to use for the MCRE (default is 1835)

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

### PHXAnalysisClient
```
public PHXAnalysisClient(java.lang.String host, 
                         int port, 
                         int timeout)
                  throws java.io.IOException, 
                         java.net.UnknownHostException
```
Deprecated.

**Parameters:**
- host - the MCRE host to connect to
- port - the port to use for the MCRE (default is 1835)
- timeout - the number of seconds to wait during the connect

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

### PHXAnalysisClient
```
public PHXAnalysisClient(java.lang.String host, 
                         int timeout, 
                         java.lang.String username, 
                         java.lang.String password)
                  throws java.io.IOException, 
                         java.net.UnknownHostException
```
Deprecated.

**Parameters:**
- host - the MCRE host to connect to
- timeout - the number of seconds to wait during the connect
- username
- password

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

## Method Detail

### connect
```
public void connect(java.lang.String host)
             throws java.io.IOException, 
                    java.net.UnknownHostException
```
Deprecated.

connects to MCRE on the specified host

**Parameters:**
- host - MCRE host to connect to, or the full URL style host specification (`mcre://hostname:port`)

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

### connectURL
```
public void connectURL(java.lang.String url)
                throws java.io.IOException, 
                       java.net.UnknownHostException, 
                       java.net.URISyntaxException
```
Deprecated.

connects to MCRE using the specified URL, such as `mcre://hostname`.

**Parameters:**
- url - MCRE URL style host specification (`mcre://hostname:port`). May include path part, which will be ignored.

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host
- `java.net.URISyntaxException`

### connectURL
```
public void connectURL(java.lang.String url, 
                       int timeout, 
                       java.lang.String user, 
                       java.lang.String password)
                throws java.io.IOException, 
                       java.net.UnknownHostException, 
                       java.net.URISyntaxException
```
Deprecated.

connects to ModelCenter Remote Execution using the specified URL, such as `mcre://hostname`. Note that if you are using mcre+local style connections, you must have previously instantiated MCRE Engine as described in `connectLocal()`.

**Parameters:**
- url - MCRE URL style host specification (`mcre://hostname:port`). May include path part, which will be ignored.

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host
- `java.net.URISyntaxException`

### connectLocal
```
public void connectLocal(java.lang.String userName, 
                         java.lang.String password)
                  throws java.io.IOException
```
Deprecated.

Makes a virtual connection to ModelCenter Remote Execution inside of this process. MCRE must have been previously instantiated using this method:
```
  PHXAnalysisServer.doInitialization(
    new String[] {"-aee", "-noSManager",
                  "-base", "c:\\users\\nsharp\\vers\\MCAS\\ASERVER\\install"});
```
**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established

### connectLocal
```
public void connectLocal(java.lang.String userName, 
                         java.lang.String password, 
                         java.util.Map<java.lang.String,
                         java.lang.Object> initialProps)
                  throws java.io.IOException
```
Deprecated.

Makes a virtual connection to MCRE inside of this process. MCRE must have been previously instantiated using this method:
```
  PHXAnalysisServer.doInitialization(
    new String[] {"-aee", "-noSManager",
                  "-base", "c:\\users\\nsharp\\vers\\MCAS\\ASERVER\\install"});
```
**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established

### connectProcess
```
public void connectProcess(java.lang.String userName, 
                           java.lang.String password, 
                           java.lang.String asRoot, 
                           java.lang.String asConfig)
                    throws java.io.IOException
```
Deprecated.

Makes a virtual connection to MCRE by calling a new java process. MCRE must have been previously instantiated using this method:
```
  PHXAnalysisServer.doInitialization(
    new String[] {"-aee", "-noSManager",
                  "-base", "c:\\users\\nsharp\\vers\\MCAS\\ASERVER\\install"});
```
**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established

### connect
```
public void connect(java.lang.String host, 
                    int port)
             throws java.io.IOException, 
                    java.net.UnknownHostException
```
Deprecated.

connects to MCRE on the specified host

**Parameters:**
- host - MCRE host to connect to
- port - the port to use for MCRE (default is 1835)

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

### connect
```
public void connect(java.lang.String host, 
                    int port, 
                    boolean useSSL)
             throws java.io.IOException, java.net.UnknownHostException
```
Deprecated.

connects to MCRE on the specified host

**Parameters:**
- host - MCRE host to connect to
- port - the port to use for MCRE (default is 1835)
- useSSL - Whether to connect using SSL

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

### connectExternal
```
public void connectExternal(java.lang.String host, 
                            int timeout, 
                            java.lang.String username, 
                            java.lang.String password)
                     throws java.io.IOException
```
Deprecated.

connects to MCRE via external tool

**Parameters:**
- host - MCRE host to connect to
- timeout - the number of seconds to wait during the connect
- username - the username to use in the external tool
- password - the password to use in the external tool

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

### connect
```
public void connect(java.lang.String host, 
                    int port, 
                    boolean useSSL, 
                    int timeout)
             throws java.io.IOException, 
                    java.net.UnknownHostException
```
Deprecated.

connects to MCRE on the specified host

**Parameters:**
- host - MCRE host to connect to
- port - the port to use for MCRE (default is 1835)
- useSSL - Whether to connect using SSL
- timeout - the number of seconds to wait during the connect

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

### connect
```
public void connect(java.lang.String host, 
                    int port, 
                    boolean useSSL, 
                    int timeout, 
                    java.lang.String username, 
                    java.lang.String password)
             throws java.io.IOException, 
                    java.net.UnknownHostException
```
Deprecated.

connects to MCRE on the specified host

**Parameters:**
- host - MCRE host to connect to
- port - the port to use for MCRE (default is 1835)
- useSSL - Whether to connect using SSL
- timeout - the number of seconds to wait during the connect
- username - the username for authentication
- password - the password for authentication

**Throws:**
- `java.io.IOException` - thrown if a connection cannot be established
- `java.net.UnknownHostException` - thrown if the host does not match a valid host

### handleLogin
```
public static void handleLogin(java.io.InputStream in, 
                               java.io.OutputStream out, 
                               java.lang.String username, 
                               java.lang.String password)
                        throws java.io.IOException
```
Deprecated.

**Throws:**
- `java.io.IOException`

### isConnected
```
public boolean isConnected()
```
Deprecated.

determines if the client is currently connected to a server

**Returns:**
- true if currently connected

### setDeleteDFT
```
public void setDeleteDFT(boolean delete)
```
Deprecated.

Set whether the analysis client should auto-delete Direct File Transfer run shares or not

### getHostName
```
public java.lang.String getHostName()
```
Deprecated.

retrieves the host name of the server

**Returns:**
- the host name, or "not connected" if not currently connected to the server

### close
```
public void close()
```
Deprecated.

closes the connection to the server

### finalize
```
protected void finalize()
                 throws java.lang.Throwable
```
Deprecated.

Overrides:
- finalize in class `java.lang.Object`

**Throws:**
- `java.lang.Throwable`

### addListener
```
public void addListener(IPHXAnalysisClientListener l)
```
Deprecated.

adds a listener

**Parameters:**
- l - the listener

### removeListener
```
public void removeListener(IPHXAnalysisClientListener l)
```
Deprecated.

removes a listener

**Parameters:**
- l - the listener

### isResponseReady
```
public boolean isResponseReady(java.lang.String id)
```
Deprecated.

indicates whether a response is ready

**Parameters:**
- id - the id of the response

**Returns:**
- true if the response is ready

### sendStartRequest
```
public java.lang.String sendStartRequest(java.lang.String analysis, 
                                         java.lang.String instanceName)
```
Deprecated.

sends a request to start an analysis

**Parameters:**
- analysis - the analysis to start
- instanceName - the name for the analysis

**Returns:**
- the id for the response

### getStartResponse
```
public java.lang.String getStartResponse(java.lang.String id, 
                                         boolean wait)
                            throws PHXResponseTypeMismatchException, 
                                   PHXNoSuchResponseException, 
                                   PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the response from the server

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### start
```
public java.lang.String start(java.lang.String analysis, 
                              java.lang.String instanceName)
                       throws PHXServerSideException
```
Deprecated.

starts an analysis

**Parameters:**
- analysis - the snalyais to start
- instanceName - the name for the analysis

**Returns:**
- the response from the server

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendEndRequest
```
public java.lang.String sendEndRequest(java.lang.String analysis)
```
Deprecated.

sends a request to end an analysis

**Parameters:**
- analysis - the analysis to start

**Returns:**
- the id for the response

### getEndResponse
```
public java.lang.String getEndResponse(java.lang.String id, 
                                       boolean wait)
                            throws PHXResponseTypeMismatchException, 
                                   PHXNoSuchResponseException, 
                                   PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the response from the server

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### end
```
public java.lang.String end(java.lang.String analysis)
                     throws PHXServerSideException
```
Deprecated.

ends an analysis

**Parameters:**
- analysis - the snalyais to end

**Returns:**
- the response from the server

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendListClassesRequest
```
public java.lang.String sendListClassesRequest(java.lang.String category)
```
Deprecated.

sends a request to list the classes

**Parameters:**
- category - the category to search. If null, then the root category is searched

**Returns:**
- the id for the response

### getListClassesResponse
```
public java.lang.String[] getListClassesResponse(java.lang.String id, 
                                                 boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- an array of classes

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### listClasses
```
public java.lang.String[] listClasses(java.lang.String category)
                               throws PHXServerSideException
```
Deprecated.

lists the classes within a category

**Parameters:**
- category - the category to search. If null, then the root category is searched

**Returns:**
- an array of classes

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendExecuteRequest
```
public java.lang.String sendExecuteRequest(java.lang.String analysis)
```
Deprecated.

sends a request to execute an analysis

**Parameters:**
- analysis - the analysis to execute

**Returns:**
- the id for the response

### getExecuteResponse
```
public java.lang.String getExecuteResponse(java.lang.String id, 
                                           boolean wait)
                                    throws PHXResponseTypeMismatchException, 
                                           PHXNoSuchResponseException, 
                                           PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the response from the server

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### execute
```
public java.lang.String execute(java.lang.String analysis)
                         throws PHXServerSideException
```
Deprecated.

exectutes an analysis

**Parameters:**
- analysis - the analyais to start

**Returns:**
- the response from the server

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendAddProxyClientsRequest
```
public java.lang.String sendAddProxyClientsRequest(java.lang.String clients)
```
Deprecated.

Tells the server to add other hosts as part of the proxy chain

**Parameters:**
- clients - The comma separated list of hosts

**Returns:**
- the id for the response

### getAddProxyClientsResponse
```
public java.lang.String getAddProxyClientsResponse(java.lang.String id, 
                                                   boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the response from the server

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### addProxyClients
```
public java.lang.String addProxyClients(java.lang.String clients)
                                 throws PHXServerSideException
```
Deprecated.

Tells the server to add other hosts as part of the proxy chain

**Parameters:**
- clients - The comma separated list of hosts

**Returns:**
- the response from the server

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendGetRequest
```
public java.lang.String sendGetRequest(java.lang.String property)
```
Deprecated.

sends a request to get the value of a property

**Parameters:**
- property - the property to retrieve a value for

**Returns:**
- the id for the response

### getGetResponse
```
public java.lang.String getGetResponse(java.lang.String id, 
                                       boolean wait)
                                throws PHXResponseTypeMismatchException, 
                                       PHXNoSuchResponseException, 
                                       PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the value of the property

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### getGetResponse2
```
public PHXStringBuffer getGetResponse2(java.lang.String id, 
                                       boolean wait)
                                throws PHXResponseTypeMismatchException, 
                                       PHXNoSuchResponseException, 
                                       PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the value of the property

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### get
```
public java.lang.String get(java.lang.String property)
                     throws PHXServerSideException
```
Deprecated.

get the value of a property

**Parameters:**
- property - the property to retrieve a value for

**Returns:**
- the value of the property

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server
- `PHXServerSideException` - thrown if the the server returned an error

### get2
```
public PHXStringBuffer get2(java.lang.String property)
                     throws PHXServerSideException
```
Deprecated.

get the value of a property

**Parameters:**
- property - the property to retrieve a value for

**Returns:**
- the value of the property

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server
- `PHXServerSideException` - thrown if the the server returned an error

### sendGetByUrlRequest
```
public java.lang.String sendGetByUrlRequest(java.lang.String propertyName, 
                                            java.lang.String url)
```
Deprecated.

sends a request to get the value of a property

**Parameters:**
- url - The url requested

**Returns:**
- the id for the response

### getGetByUrlResponse
```
public PHXStringBuffer getGetByUrlResponse(java.lang.String id, 
                                           boolean wait)
                                    throws PHXResponseTypeMismatchException, 
                                           PHXNoSuchResponseException, 
                                           PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the value of the property

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### getByUrl
```
public PHXStringBuffer getByUrl(java.lang.String propertyName, 
                                java.lang.String url)
                         throws PHXServerSideException
```
Deprecated.

get the value of a property

**Parameters:**
- url - the url to get the file contents of

**Returns:**
- the contents of the file

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server
- `PHXServerSideException` - thrown if the the server returned an error

### sendSetByUrlRequest
```
public java.lang.String sendSetByUrlRequest(java.lang.String varName, 
                                            java.lang.String url)
```
Deprecated.

sends a request to get the value of a property

**Parameters:**
- url - The url requested

**Returns:**
- the id for the response

### getSetByUrlResponse
```
public PHXStringBuffer getSetByUrlResponse(java.lang.String id, 
                                           boolean wait)
                                    throws PHXResponseTypeMismatchException, 
                                           PHXNoSuchResponseException, 
                                           PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the value of the property

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### setByUrl
```
public void setByUrl(java.lang.String varName, 
                     java.lang.String url)
              throws PHXServerSideException
```
Deprecated.

set the value of a variable

**Parameters:**
- varName - the variable to set
- url - the url to set the variable at

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendSetRequest
```
public java.lang.String sendSetRequest(java.lang.String property, 
                                       java.lang.Object value)
```
Deprecated.

sends a request to set the value of a property

**Parameters:**
- property - the property to retrieve a value for

**Returns:**
- the id for the response

### getSetResponse
```
public java.lang.String getSetResponse(java.lang.String id, 
                                       boolean wait)
                                throws PHXResponseTypeMismatchException, 
                                       PHXNoSuchResponseException, 
                                       PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the response from the server

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### set
```
public java.lang.String set(java.lang.String property, 
                            java.lang.Object value)
                     throws PHXServerSideException
```
Deprecated.

set the value of a property

**Parameters:**
- property - the property to retrieve a value for
- value - the value of the property

**Returns:**
- the response from the server

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server
- `PHXServerSideException` - thrown if the the server returned an error

### sendGetComponentHistoryRequest
```
public java.lang.String sendGetComponentHistoryRequest(java.lang.String analysis)
```
Deprecated.

sends a request to get the version history of a component

**Parameters:**
- analysis - the analysis to query

**Returns:**
- the id for the response

### getGetComponentHistoryResponse
```
public PHXComponentBranch getGetComponentHistoryResponse(java.lang.String id, 
                                                         boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- a description object for the analysis

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### getComponentHistory
```
public PHXComponentBranch getComponentHistory(java.lang.String analysis)
                                       throws PHXServerSideException
```
Deprecated.

Gets the component history for a particular component.

**Parameters:**
- analysis - The full path to the component

**Returns:**
- The top level branch object which represents the main development branch.

**Throws:**
- `PHXServerSideException` - thrown if the server reports any problems.

### sendDescribeRequest
```
public java.lang.String sendDescribeRequest(java.lang.String analysis)
```
Deprecated.

sends a request to describe an analysis

**Parameters:**
- analysis - the analysis to start

**Returns:**
- the id for the response

### getDescribeResponse
```
public PHXComponentDescription getDescribeResponse(java.lang.String id, 
                                                   boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- a description object for the analysis

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### describe
```
public PHXComponentDescription describe(java.lang.String analysis)
                                 throws PHXServerSideException
```
Deprecated.

describes an analysis

**Parameters:**
- analysis - the full path to the component

**Returns:**
- a description object

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendListPropertiesRequest
```
public java.lang.String sendListPropertiesRequest(java.lang.String analysis)
```
Deprecated.

sends a request to list the properties of an analysis

**Parameters:**
- analysis - the analysis to query

**Returns:**
- the id for the response

### getListPropertiesResponse
```
public PHXPropertyDescriptor[] getListPropertiesResponse(java.lang.String id, 
                                                         boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- a property descriptor object for the analysis

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### listProperties
```
public PHXPropertyDescriptor[] listProperties(java.lang.String analysis)
                                       throws PHXServerSideException
```
Deprecated.

lists the properties of an analysis

**Parameters:**
- analysis - the analyais to list properties for

**Returns:**
- a property descriptor for the object

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendListMethodsRequest
```
public java.lang.String sendListMethodsRequest(java.lang.String analysis)
```
Deprecated.

sends a request to list the methods of an analysis

**Parameters:**
- analysis - the analysis to query

**Returns:**
- the id for the response

### getListMethodsResponse
```
public PHXMethodDescriptor[] getListMethodsResponse(java.lang.String id, 
                                                    boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- a property descriptor object for the analysis

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### listMethods
```
public PHXMethodDescriptor[] listMethods(java.lang.String analysis)
                                  throws PHXServerSideException
```
Deprecated.

lists the methods of an analysis

**Parameters:**
- analysis - the analyais to list methods for

**Returns:**
- an array of method descriptors for the object

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendInvokeRequest
```
public java.lang.String sendInvokeRequest(java.lang.String method)
```
Deprecated.

sends a request to invoke a method

**Parameters:**
- method - the method to invoke

**Returns:**
- the id for the response

### getInvokeResponse
```
public java.lang.String getInvokeResponse(java.lang.String id, 
                                          boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the value of the property

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### invoke
```
public java.lang.String invoke(java.lang.String method)
                        throws PHXServerSideException
```
Deprecated.

invokes a method

**Parameters:**
- method - the method to invoke

**Returns:**
- the results of the invocation

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendListValuesRequest
```
public java.lang.String sendListValuesRequest(java.lang.String analysis)
```
Deprecated.

### sendListValuesURLRequest
```
public java.lang.String sendListValuesURLRequest(java.lang.String analysis)
```
Deprecated.

### getListValuesResponse
```
public PHXPropertyValue[] getListValuesResponse(java.lang.String id, 
                                                boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException, 
                                          java.io.IOException, 
                                          java.lang.NumberFormatException
```
Deprecated.

**Throws:**
- `PHXResponseTypeMismatchException`
- `PHXNoSuchResponseException`
- `PHXServerSideException`
- `java.io.IOException`
- `java.lang.NumberFormatException`

### listValues
```
public PHXPropertyValue[] listValues(java.lang.String analysis)
                              throws PHXServerSideException, 
                                     java.io.IOException
```
Deprecated.

**Throws:**
- `PHXServerSideException`
- `java.io.IOException`

### sendListArrayValuesRequest
```
public java.lang.String sendListArrayValuesRequest(java.lang.String analysis)
```
Deprecated.

### getListArrayValuesResponse
```
public java.lang.String[] getListArrayValuesResponse(java.lang.String id, boolean wait)
    throws PHXResponseTypeMismatchException, PHXNoSuchResponseException
```
Deprecated.

**Throws:**
- `PHXResponseTypeMismatchException`
- `PHXNoSuchResponseException`

### listArrayValues
```
public java.lang.String[] listArrayValues(java.lang.String analysis)
                                   throws PHXServerSideException, 
                                          java.io.IOException
```
Deprecated.

**Throws:**
- PHXServerSideException
- `java.io.IOException`

### sendListCategoriesRequest
```
public java.lang.String sendListCategoriesRequest(java.lang.String category)
```
Deprecated.

sends a request to list the categories

**Parameters:**
- category - the category to search. If null, then the root category is searched

**Returns:**
- the id for the response

### getListCategoriesResponse
```
public java.lang.String[] getListCategoriesResponse(java.lang.String id, 
                                                    boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- an array of categories

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### listCategories
```
public java.lang.String[] listCategories(java.lang.String category)
    throws PHXServerSideException
```
Deprecated.

lists the categories within a category

**Parameters:**
- category - the category to search. If null, then the root category is searched

**Returns:**
- an array of categories

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendListRequest
```
public java.lang.String sendListRequest()
```
Deprecated.

sends a request to list the running objects

**Returns:**
- the id for the response

### getListResponse
```
public java.lang.String[] getListResponse(java.lang.String id, 
                                          boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- an array of objects

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### list
```
public java.lang.String[] list()
                        throws PHXServerSideException
```
Deprecated.

lists the running objects

**Returns:**
- an array of objects

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendGetHierarchyRequest
```
public java.lang.String sendGetHierarchyRequest(java.lang.String analysis)
```
Deprecated.

sends a request to retrieve a hierarchy for a component

**Parameters:**
- analysis - the analysis class to retrieve the icon for

**Returns:**
- the id for the response

### sendGetHierarchyRequest
```
public java.lang.String sendGetHierarchyRequest(java.lang.String analysis, 
                                                com.phoenix_int.aserver.client.PHXHierarchyFileMode fileMode)
```
Deprecated.

sends a request to retrieve a hierarchy for a component

**Parameters:**
- analysis - the analysis class to retrieve the icon for
- fileMode - how to retrieve files

**Returns:**
- the id for the response

### getGetHierarchyResponse
```
public PHXStringBuffer getGetHierarchyResponse(java.lang.String id, boolean wait)
    throws PHXResponseTypeMismatchException, PHXNoSuchResponseException, PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- an icon Image

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### getHierarchy
```
public PHXStringBuffer getHierarchy(java.lang.String analysis)
                            throws PHXServerSideException
```
Deprecated.

retrievethe hierarchy for the component

**Parameters:**
- analysis - the analysis class to retrieve the icon for

**Returns:**
- the string buffer containing the hierarchy

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendSetHierarchyRequest
```
public java.lang.String sendSetHierarchyRequest(java.lang.String analysis, 
                                                PHXStringBuffer xml)
```
Deprecated.

Sends a request to set a hierarchy for a component

**Parameters:**
- analysis - the analysis object or parameter name to set data into
- xml - The XML data structure containing the data to be set.

**Returns:**
- the id for the response

### getSetHierarchyResponse
```
public java.lang.String getSetHierarchyResponse(java.lang.String id, 
                                                boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the result from the server

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### setHierarchy
```
public java.lang.String setHierarchy(java.lang.String analysis, 
                                     PHXStringBuffer xml)
                              throws PHXServerSideException
```
Deprecated.

Sends a request to set a hierarchy for a component

**Parameters:**
- analysis - the analysis object or parameter name to set data into
- xml - The XML data structure containing the data to be set.

**Returns:**
- the result from the server

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendDeleteRunShareRequest
```
public java.lang.String sendDeleteRunShareRequest(java.lang.Long key)
```
Deprecated.

Sends a request to delete a runShare

**Parameters:**
- key - the key for the runShare to delete

**Returns:**
- the id for the response

### getDeleteRunShareResponse
```
public java.lang.String getDeleteRunShareResponse(java.lang.String id, 
                                                 boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- the result from the server

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### deleteRunShare
```
public java.lang.String deleteRunShare(java.lang.Long key)
                                throws PHXServerSideException
```
Deprecated.

Handle cleaning up a runShare in a local client

**Throws:**
- PHXServerSideException

### sendGetIconRequest
```
public java.lang.String sendGetIconRequest(java.lang.String analysis)
```
Deprecated.

sends a request to retrieve an icon

**Parameters:**
- analysis - the analysis class to retrieve the icon for

**Returns:**
- the id for the response

### getGetIconResponse
```
public PHXIcon getGetIconResponse(java.lang.String id, 
                                  boolean wait)
                           throws PHXResponseTypeMismatchException, 
                                  PHXNoSuchResponseException, 
                                  PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- an icon Image

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### getIcon
```
public PHXIcon getIcon(java.lang.String analysis)
                throws PHXServerSideException
```
Deprecated.

retrieves an icon for an analysis

**Parameters:**
- analysis - the analysis class to retrieve the icon for

**Returns:**
- an icon Image

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendSetDictionaryRequest
```
public java.lang.String sendSetDictionaryRequest(java.lang.String dictionary)
```
Deprecated.

sends a request to set a dictionary

**Parameters:**
- dictionary - the desired dictionary

**Returns:**
- the id for the response

### getSetDictionaryResponse
```
public java.lang.String getSetDictionaryResponse(java.lang.String id, 
                                                 boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a response from the server

**Parameters:**
- id - the id for the response
- wait - if true, the function blocks until the response is ready

**Returns:**
- an icon Image

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### setDictionary
```
public java.lang.String setDictionary(java.lang.String dictionary)
                               throws PHXServerSideException
```
Deprecated.

Tries to set the dictionary by sending a set dictionary request.

**Parameters:**
- dictionary - the desired dictionary

**Returns:**
- the response from the server, or a blank string for invalid responses

**Throws:**
- `PHXServerSideException` - thrown if something goes wrong. The exception message will contain the response from the server

### sendArbitraryRequest
```
public java.lang.String sendArbitraryRequest(java.lang.String request)
```
Deprecated.

sends an arbitrary request to the server

**Parameters:**
- request - MCRE api command to send

**Returns:**
- the id for the response

### sendArbitraryRequest
```
public java.lang.String sendArbitraryRequest(PHXStringBuffer request)
```
Deprecated.

sends an arbitrary request to the server

**Parameters:**
- request - MCRE api command to send

**Returns:**
- the id for the response

### getResponseAsText
```
public java.lang.String getResponseAsText(java.lang.String id, 
                                          int type, 
                                          boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a low-level response from the server in String format.

**Parameters:**
- id - the id for the response
- type - the type of response to expect.
- wait - if true, the function blocks until the response is ready

**Returns:**
- the value of the property

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### getResponseAsPHXStringBuffer
```
public PHXStringBuffer getResponseAsPHXStringBuffer(java.lang.String id, 
                                                    int type, 
                                                    boolean wait)
                                   throws PHXResponseTypeMismatchException, 
                                          PHXNoSuchResponseException, 
                                          PHXServerSideException
```
Deprecated.

retrieves a low-level response from the server in String format.

**Parameters:**
- id - the id for the response
- type - the type of response to expect.
- wait - if true, the function blocks until the response is ready

**Returns:**
- the value of the property

**Throws:**
- `PHXResponseTypeMismatchException` - thrown if the response type is not what was expected for this function.
- `PHXNoSuchResponseException` - thrown if the response does not exist (may not have been returned from server yet).
- `PHXServerSideException` - thrown if the the server returned an error

### main
```
public static void main(java.lang.String[] args)
```
Deprecated.