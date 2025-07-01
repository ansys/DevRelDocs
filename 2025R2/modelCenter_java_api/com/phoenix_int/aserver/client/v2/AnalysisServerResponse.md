# Class: AnalysisServerResponse

**Package:** `com.phoenix_int.aserver.client.v2`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.client.v2.AnalysisServerResponse
```
------

**Declaration**

```java
public class AnalysisServerResponse
extends java.lang.Object
```

Implementation of `PHXResponse` along lines of `PHXResponse` in C++ code.


## Constructor Summary

| Constructor and Description |
| ------------ |
| `AnalysisServerResponse()` |


## Method Summary

| Modifier and Type | Method and Description |
| --------------- | --------------- |
| `com.phoenix_int.aserver.client.v2.ChunkDescriptor` | `asChunkDescriptor()`<br>Parse the response as a chunk descriptor. |
| `PHXComponentDescription` | `asComponentDescription(boolean asXml)`<br>Parse a component description. |
| `java.util.Map<java.lang.String,AnalysisVariableValue>` | `asHierarchy()`<br>Parse the response as a variable hierarchy. |
| `java.util.List<java.lang.String>` | `asList()`<br>Convert the string data to a list of properties. |
| `java.util.List<PHXMethodDescriptor>` | `asMethodDescriptors()`<br>Convert the string data to a list of method descriptors. |
| `java.util.List<PHXPropertyDescriptor>` | `asPropertyDescriptors()`<br>Parse this response as a sequence of property descriptors. |
| `java.util.List<PHXPropertyDescriptor>` | `asPropertyDescriptors(java.lang.String baseObjectName)`<br>Parse this response as a sequence of property descriptors. |
| `java.util.List<PHXPropertyValue>` | `asValueDescriptors()`<br>Parse the response as a list of value descriptors. |
| `AnalysisServerVersion` | `asVersion()`<br>Get the response as a server version. |
| `PHXComponentBranch` | `asVersionHistory()`<br>Parse the response as a version history. |
| `byte[]` | `getBinaryData()`<br>Get the binary data; only valid if format is Extended or Icon. |
| `java.lang.String` | `getErrorMessage()`<br>Get the server error; only valid if response type is ServerError or ConnectionError. |
| `java.lang.String` | `getHost()`<br>Get the host which sent the message. |
| `java.lang.String` | `getID()`<br>Get the unique identifier of the message. |
| `AnalysisServerResponseType` | `getResponseType()`<br>Get the type of response. |
| `java.lang.String` | `getStringData()`<br>Get the string data; only valid if format is Normal or Extended. |
| `boolean` | `hasText()`<br>Does this response have actual string data (i.e. string data is not empty)? |
| `boolean` | `isBinary()`<br>Is this a response with binary data? |
| `boolean` | `isError()`<br>Does the response represent an error? |
| `boolean` | `isSuccess()`<br>Is the response a successful response? |
| `boolean` | `isText()`<br>Does the response have text content? |

### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


## Constructor Detail


**Constructor:** AnalysisServerResponse

```java
public AnalysisServerResponse()
```


## Method Detail


### getID

```java
public java.lang.String getID()
```
Get the unique identifier of the message.


### getHost

```java
public java.lang.String getHost()
```
Get the host which sent the message.


### getResponseType

```java
public AnalysisServerResponseType getResponseType()
```
Get the type of response.


### getStringData

```java
public java.lang.String getStringData()
```
Get the string data; only valid if format is `Normal` or `Extended`.


### getErrorMessage

```java
public java.lang.String getErrorMessage()
```
Get the server error; only valid if response type is `ServerError` or `ConnectionError`.


### getBinaryData

```java
public byte[] getBinaryData()
```
Get the binary data; only valid if format is `Extended` or `Icon`.


### isText

```java
public boolean isText()
```
Does the response have text content?


### hasText

```java
public boolean hasText()
```
Does this response have actual string data (i.e. string data is not empty)?


### isBinary

```java
public boolean isBinary()
```
Is this a response with binary data?


### isSuccess

```java
public boolean isSuccess()
```
Is the response a successful response?


### isError

```java
public boolean isError()
```
Does the response represent an error?


### asVersion

```java
public AnalysisServerVersion asVersion()
                                throws java.lang.IllegalStateException,
                                       AnalysisServerException
```
Get the response as a server version.

**Throws:**
- `java.lang.IllegalStateException` - if this is not a text response
- `AnalysisServerException` - if the data is not valid


### asComponentDescription

```java
public PHXComponentDescription asComponentDescription(boolean asXml)
                                               throws java.lang.IllegalStateException,
                                                      AnalysisServerException
```
Parse a component description.

**Parameters:**
- `asXml` - whether to interpret the result as XML

**Returns:**
- the description

**Throws:**
- `java.lang.IllegalStateException` - if this is not a text response
- `AnalysisServerException` - if the data is not valid


### asList

```java
public java.util.List<java.lang.String> asList()
                                        throws java.lang.IllegalStateException
```
Convert the string data to a list of properties.

**Returns:**
- the list of items

**Throws:**
- `java.lang.IllegalStateException` - if the data is not text


### asMethodDescriptors

```java
public java.util.List<PHXMethodDescriptor> asMethodDescriptors()
                                                        throws java.lang.IllegalStateException
```
Convert the string data to a list of method descriptors.

**Returns:**
- the list

**Throws:**
- `java.lang.IllegalStateException` - if the data is not text


### asPropertyDescriptors

```java
public java.util.List<PHXPropertyDescriptor> asPropertyDescriptors()
                                                            throws java.lang.IllegalStateException,
                                                                   AnalysisServerException
```
Parse this response as a sequence of property descriptors.

**Returns:**
- a set of property descriptors, which may be empty

**Throws:**
- `java.lang.IllegalStateException` - if this is not a text response
- `AnalysisServerException` - if the data is not valid


### asPropertyDescriptors

```java
public java.util.List<PHXPropertyDescriptor> asPropertyDescriptors(java.lang.String baseObjectName)
                                                            throws java.lang.IllegalStateException,
                                                                   AnalysisServerException
```
Parse this response as a sequence of property descriptors.

**Parameters:**
- `baseObjectName` - the object to retrieve information for; null for none

**Returns:**
- a set of property descriptors, which may be empty

**Throws:**
- `java.lang.IllegalStateException` - if this is not a text response
- `AnalysisServerException` - if the data is not valid


### asChunkDescriptor

```java
public com.phoenix_int.aserver.client.v2.ChunkDescriptor asChunkDescriptor()
                                                                    throws java.lang.IllegalStateException, 
                                                                           AnalysisServerException
```
Parse the response as a chunk descriptor.

**Returns:**
- the chunk descriptor

**Throws:**
- `java.lang.IllegalStateException` - if this is not a text response
- `AnalysisServerException` - if the data is not valid


### asValueDescriptors

```java
public java.util.List<PHXPropertyValue> asValueDescriptors()
                                                    throws java.lang.IllegalStateException,
                                                           AnalysisServerException
```
Parse the response as a list of value descriptors.

**Returns:**
- the list, which may be empty

**Throws:**
- `java.lang.IllegalStateException` - if this is not a text response
- `AnalysisServerException` - if the data is not valid


### asVersionHistory

```java
public PHXComponentBranch asVersionHistory()
                                    throws java.lang.IllegalStateException,
                                           AnalysisServerException
```
Parse the response as a version history.

**Returns:**
- the version history

**Throws:**
- `java.lang.IllegalStateException` - if this is not a text response
- `AnalysisServerException` - if the data is not valid


### asHierarchy

```java
public java.util.Map<java.lang.String,AnalysisVariableValue> asHierarchy()
                                                                  throws java.lang.IllegalStateException,
                                                                         AnalysisServerException
```
Parse the response as a variable hierarchy.

**Returns:**
- the map from variable paths to values

**Throws:**
- `java.lang.IllegalStateException` - if this is not a text response
- `AnalysisServerException` - if the data is not valid

