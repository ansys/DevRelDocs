# Serialized Form

## Package com.phoenix_int.aserver

### Class com.phoenix_int.aserver.PHXCannotSetRunDirectoryException extends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.PHXDFTExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.PHXInvalidNameExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.PHXLockException extends java.io.IOException implements Serializable
### Class com.phoenix_int.aserver.PHXNameAlreadyInUseExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.PHXNoSuchObjectExceptionextends java.lang.Exception implements Serializable
#### Serialized Fields
#####  _invalidObject
```java
java.lang.String _invalidObject
```
### Class com.phoenix_int.aserver.PHXNoSuchWriteableObjectExceptionextendsPHXNoSuchObjectExceptionimplements Serializable
### Class com.phoenix_int.aserver.ProcessHaltedExceptionextends java.io.IOException implements Serializable
## Package com.phoenix_int.aserver.client

### Class com.phoenix_int.aserver.client.PHXAnalysisClientEventextends java.util.EventObject implements Serializable

#### Serialized Fields

##### _response

```java
com.phoenix_int.aserver.client.PHXResponse _response
```
### Class com.phoenix_int.aserver.client.PHXAnalysisClientExceptionEventextends java.util.EventObject implements Serializable

#### Serialized Fields

##### _exception

```java
java.lang.Exception _exception
```
### Class com.phoenix_int.aserver.client.PHXNoSuchResponseExceptionextends java.lang.Exception implements Serializable

#### Serialized Fields

##### _invalidID

```java
java.lang.String _invalidID
```
### Class com.phoenix_int.aserver.client.PHXResponseTypeMismatchExceptionextends java.lang.RuntimeException implements Serializable

#### Serialized Fields

##### _invalidID

```java
java.lang.String _invalidID
```
### Class com.phoenix_int.aserver.client.PHXServerSideExceptionextends java.lang.Exception implements Serializable
## Package com.phoenix_int.aserver.client.v2

### Class com.phoenix_int.aserver.client.v2.AnalysisServerExceptionextends java.lang.Exception implements Serializable

## Package com.phoenix_int.aserver.library

### Class com.phoenix_int.aserver.library.PHXNoSuchAssociationExceptionextends java.lang.Exception implements Serializable

#### Serialized Fields

##### _invalidAssociation

```java
java.lang.String _invalidAssociation
```
### Class com.phoenix_int.aserver.library.PHXNoSuchCategoryExceptionextends java.lang.Exception implements Serializable

#### Serialized Fields

##### _invalidCategory

```java
java.lang.String _invalidCategory
```
### Class com.phoenix_int.aserver.library.PHXNoSuchIconExceptionextends java.lang.Exception implements Serializable

#### Serialized Fields

##### _invalidIcon

```java
java.lang.String _invalidIcon
```
## Package com.phoenix_int.aserver.monitors

### Class com.phoenix_int.aserver.monitors.PHXFileMonitor.FileMonitorChangeExceptionextends java.io.IOException implements Serializable
## Package com.phoenix_int.aserver.types

### Class com.phoenix_int.aserver.types.PHXInvalidTypeExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.types.PHXNumberFormatExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.types.PHXTypeMismatchExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.types.VariableValueInvalidException extends java.lang.Exception implements Serializable
## Package com.phoenix_int.aserver.util

### Class com.phoenix_int.aserver.util.PHXClassNotFoundExceptionextends java.lang.ClassNotFoundException implements Serializable

#### Serialized Fields

##### innerException

```java
java.util.ArrayList<E> innerException
```
### Class com.phoenix_int.aserver.util.PHXExecutableKeywords extends java.util.Properties implements Serializable
### Class com.phoenix_int.aserver.util.PHXFileFormatException extends java.io.IOException implements Serializable

#### Serialized Fields

##### _line

```java
java.lang.String _line
```
##### _lineNum

```java
int _lineNum
```
##### _filename

```java
java.lang.String _filename
```
##### _wrapped

```java
java.lang.Exception _wrapped
```
### Class com.phoenix_int.aserver.util.PHXFrame extends java.awt.Frame implements Serializable
### Class com.phoenix_int.aserver.util.PHXGetByUrlExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.util.PHXInternalException extends java.lang.RuntimeException implements Serializable

#### Serialized Fields

##### _location

```java
java.lang.String _location
```
### Class com.phoenix_int.aserver.util.PHXInvalidFormatException extends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.util.PHXMessageBox extends java.awt.Dialog implements Serializable
### Class com.phoenix_int.aserver.util.PHXNoSuchBookmarkException extends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.util.PHXNoSuchReplacementExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.util.PHXNoSuchTokenExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.util.PHXNumberExpectedException extends com.phoenix_int.aserver.util.PHXFileFormatException implements Serializable
### Class com.phoenix_int.aserver.util.PHXPrompt extends com.phoenix_int.aserver.util.PHXFrame implements Serializable

#### Serialized Fields

##### _loop

```java
boolean _loop
```
### Class com.phoenix_int.aserver.util.PHXStringBufferextends java.lang.Object implements Serializable

#### Serialized Fields

##### _data

```java
com.phoenix_int.aserver.util.IPHXStringBufferContainer _data
```
##### _cha

```java
char[] _cha
```
### Class com.phoenix_int.aserver.util.PHXSyntaxErrorException extends com.phoenix_int.aserver.util.PHXFileFormatException implements Serializable
### Class com.phoenix_int.aserver.util.PHXTimeoutException extends java.util.concurrent.TimeoutException implements Serializable
### Class com.phoenix_int.aserver.util.PHXValueMissingException extends com.phoenix_int.aserver.util.PHXFileFormatException implements Serializable
## Package com.phoenix_int.aserver.util.scriptwrapper.api

### Class com.phoenix_int.aserver.util.scriptwrapper.api.PHXBookmarkNotFoundExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException extendsPHXNoSuchTokenExceptionimplements Serializable
### Class com.phoenix_int.aserver.util.scriptwrapper.api.PHXScriptWrapperAPIExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.util.scriptwrapper.api.PHXSectionNotFoundExceptionextends java.lang.Exception implements Serializable
### Class com.phoenix_int.aserver.util.scriptwrapper.api.PHXVersionExceptionextends java.lang.Exception implements Serializable
## Package com.phoenix_int.pacz.api

### Class com.phoenix_int.pacz.api.Environmentextends java.util.HashMap<java.lang.String,java.lang.String> implements Serializable
## Package com.phoenix_int.pacz.api.v2

### Class com.phoenix_int.pacz.api.v2.Environmentextends java.util.HashMap<java.lang.String,java.lang.String> implements Serializable
## Package com.phoenix_int.util

### Class com.phoenix_int.util.ConnectTimeoutException extends java.net.ConnectException implements Serializable
### Class com.phoenix_int.util.PHXAlarmEvent extends java.util.EventObject implements Serializable

#### Serialized Fields

##### _eventTime

```java
double _eventTime
```
##### _actualTime

```java
double _actualTime
```
### Class com.phoenix_int.util.PHXDate extends java.lang.Object implements Serializable

#### Serialized Fields

##### _cal

```java
java.util.GregorianCalendar _cal
```
### Class com.phoenix_int.util.PHXException extends java.lang.Exception implements Serializable

#### Serialized Fields

##### _originalException

```java
java.lang.Throwable _originalException
```
### Class com.phoenix_int.util.PHXNull extends java.lang.Object implements Serializable
### Class com.phoenix_int.util.PHXReaderEvent extends java.util.EventObject implements Serializable

#### Serialized Fields

##### _line

```java
java.lang.String _line
```
##### _exception

```java
java.io.IOException _exception
```
### Class com.phoenix_int.util.PHXStringEncrypter.PHXEncryptionException extends java.lang.Exception implements Serializable
### Class com.phoenix_int.util.PHXThreadFinishEvent extends java.util.EventObject implements Serializable

**serialVersionUID:**
: -991727830103190432L

### Serialization Methods

##### readObject

```java
private void readObject(java.io.ObjectInputStream in)
                 throws java.io.IOException,
                        java.lang.ClassNotFoundException
```

**Throws:**
: `java.io.IOException`
: `java.lang.ClassNotFoundException`
##### writeObject

```java
private void writeObject(java.io.ObjectOutputStream out)
                  throws java.io.IOException
```

**Throws:**
: `java.io.IOException`
#### Serialized Fields

##### _success

```java
boolean _success
```
##### _results

```java
java.lang.Object _results
```
##### _exception

```java
java.lang.Exception _exception
```
### Class com.phoenix_int.util.PHXXMLException extends java.lang.Exception implements Serializable
### Class com.phoenix_int.util.TimeException extends java.lang.Exception implements Serializable