# Exceptions

<a id="exceptions"></a>

<a id="introduction"></a>

## Introduction

This page describes the different types of exceptions which may be encountered when working with MI Scripting Toolkit. The sources
of exceptions can be grouped into four categories:

* Client errors: Exceptions raised as a result of an unexpected state in the script execution. These may be raised by
  Python itself, or by the Streamlined or Foundation layers to indicate incorrect use of the library.
* Server response errors: Exceptions raised as a result of a fault response returned by the Granta MI application
  server.
* Server connection errors.
* Timeout errors.

These four different sources of exceptions are described separately in this page.

<a id="client-errors"></a>

## Client errors

Python client exceptions are generally not caused by the Granta MI application server, but instead by the inability of
the client to correctly handle an encountered state.

Client exceptions fall into the following groups:

* Built-in Python exceptions: Python has a number of built-in exceptions documented
  [here](https://docs.python.org/3/library/exceptions.html).
* Streamlined layer exceptions: Custom exceptions related to Granta MI-specific errors, for example
  [`UnsupportedLinkGroupError`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.UnsupportedLinkGroupError). These are documented in the [Exceptions](../streamlined_api/exceptions.md) section of the
  Streamlined API reference.
* [`GRANTA_Exception`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_Exception): Raised when failing to instantiate or modify a foundation layer object. The message
  includes details of the name and expected type of the attribute or property which caused the failure.

Whenever a client error is encountered, first determine where the exception originated. To help with this, Python
displays a traceback which shows the source of the error and the state of the stack when the error occurred.

* If the exception was raised by your code, the error is likely the result of a programming error.
* If the exception was raised by an MI Scripting Toolkit module, first check that any inputs provided to methods and functions are
  valid according to the [Streamlined API reference](../streamlined_api/index.md). If you are unable to determine the cause of the issue, check
  the [Ansys developer forum](https://discuss.ansys.com/categories/materials) or contact your ACE representative.

#### NOTE
Client errors may still be dependent on a certain Granta MI server state. For example, a script that divides Young’s
modulus by density will raise a [`ZeroDivisionError`](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError) if the density is 0. Whilst the Granta MI server must be
in a specific state to cause this failure, the problem still lies with the client.

<a id="server-response-errors"></a>

## Server response errors

Exceptions which originate on the Granta MI server are always raised as [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError). This
exception class includes a message of the form:

```text
<Operation> failed with code <Status code> and message: <Message>
```

* `<Operation>`: The SOAP operation during which the exception occurred, for example DataImport_SetRecordAttributes
* `<Status code>`: The numeric HTTP status code returned by the Granta MI server.
* `<Message>`: If available, a message from the server describing the fault. If not provided, then the name of the
  numeric status code is provided instead.

[`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError) exceptions are raised when any Granta MI response is processed with a non-2xx status
code.

<a id="internal-server-error"></a>

### 500 Internal Server Error

Most [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError) exceptions are raised as a result of a 500 response from the Granta MI
application server. For example, if a script attempts to create a record in a location which already contains a record
with the same name, the following exception is raised by MI Scripting Toolkit:

```text
DataImport_SetRecordAttributes failed with code 500 and message: Commit failed: A record with this name cannot be
added here.
```

The message and the traceback should provide enough information to determine the cause of the error, but it is the
responsibility of the developer to define the appropriate solution. For example, in this case the developer should
decide if:

* The error results in an unhandled condition, and should either be left to halt the execution of the script or should
  be caught in a try/except block and reporting the error via some other means.
* The script can continue, for example by catching the exception in a try/except block and deleting the existing record.
* The script should be extended to first check for the existence of a conflicting record before attempting the import.

If an unexpected error occurs on the server, the exception is instead raised with the message:

```text
<Operation> failed with code 500 and message: Internal Server Error.
```

In this case, an unexpected condition was encountered on the server for which a more specific error message does not
exist. Some possible steps to determine the cause of the failure are as follows:

* Check the logs on the application server around the time of the failure. It may be required to temporarily set the log
  level to DEBUG if there are no relevant entries at INFO level.
* Check the raw request and response SOAP messages, available in the [`GRANTA_ServiceLayerError.request_xml`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError.request_xml) and
  [`GRANTA_ServiceLayerError.response_xml`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError.response_xml) properties on the exception object.

It may be necessary to contact your ACE representative for assistance in diagnosing the fault.

<a id="other-status-codes"></a>

### Other status codes

3xx response codes indicate a redirection of the request. In the case of MI Scripting Toolkit, this typically results from an
unsupported proxy configuration.

4xx response codes indicate a client error. Since the foundation layer imposes very strict rules on messages that can be
sent to the server, a [`GRANTA_Exception`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_Exception) will often be raised before an invalid request is sent to the server.
If a [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError) is raised with a 4xx status code, check all inputs to the streamlined or
foundation API are valid, and check that they have been translated correctly into the
[`GRANTA_ServiceLayerError.request_xml`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError.request_xml).

5xx response codes indicate a failure somewhere on one of the servers responsible for handling the request. In the use
of MI Scripting Toolkit, a 5xx response code other than 500 generally indicates a failure with server infrastructure other than the
Granta MI application itself.

<a id="server-connection-errors"></a>

## Server connection errors

If the client is unable to communicate with the Granta MI server, a [`GRANTA_Exception`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_Exception) is raised with the
message of the form:

```text
Connection test failed: <status message>
```

The status message is either the text form of an HTTP status code, or a statement that a response was not received:

* Connection test failed: Unauthorized: The server did not accept the provided authentication information. Check
  that the credentials provided to [`SessionBuilder.with_credentials()`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder.with_credentials) are valid and consistent with the Granta MI
  server configuration.
* Connection test failed: Unknown error (eg, no response from GRANTA MI Service Layer at all): The server did not
  respond to the connection request. Check that the URL is correct, and that the host machine can contact the server
  via an alternative method, for example via a web browser or `curl`.

<a id="timeout-errors"></a>

<a id="id1"></a>

## Timeout errors

If the client does not receive a response from a request within the defined receive timeout, a
[`GRANTA_Exception`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_Exception) is raised with the message:

```text
No response from server after 1 attempt.
```

Or if [`SessionConfiguration`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionConfiguration) was used to specify `max_retries` greater than 0:

```text
No response from server after <n> attempts.
```

Where `<n>` is the total number of failed attempts. Since no response was received within the time allowed, there is
no response code or message.

Timeout errors are often encountered when using bulk operations, because the time taken for a bulk operation to complete
can be difficult to predict. In general, the time taken is dependent on:

* The complexity of an individual element of the batch
* The number of operations included within the batch
* The number of parallel requests submitted to the server
* The performance of the server

The default batch size and parallelization is chosen to attempt to ensure that all bulk operations will complete within
the default timeout, but due to the reasons described above, this cannot be guaranteed. For example, the
[`Session.bulk_delete_or_withdraw_records()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.bulk_delete_or_withdraw_records) method is used to delete all provided records and all the data
contained with them. If the records contain a large amount of complex data, the overall operation may take longer than
allowed by the default timeout.

To resolve a timeout failure, either reduce the complexity of the request (for example by reducing the batch size), or
extend the timeout specified when creating the session.

#### WARNING
Even though a [`GRANTA_Exception`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_Exception) is raised, the request may still be running on the server. In general, the
operation will continue until it has finished.

Before resubmitting a request which has previously timed out, you should check that the operation has completed
before retrying, either by checking the state of the database in a web browser, via MI Scripting Toolkit, or by consulting the
application logs.
