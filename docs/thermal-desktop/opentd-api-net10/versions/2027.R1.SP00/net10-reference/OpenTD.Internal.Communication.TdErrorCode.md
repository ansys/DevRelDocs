# Enum TdErrorCode

Namespace: [OpenTD.Internal.Communication](OpenTD.Internal.Communication.md)  
Assembly: OpenTD.dll  

Transport-level outcome of a request, carried on <xref href="OpenTD.Internal.Communication.TdResponse" data-throw-if-not-resolved="false"></xref>.

<p>
This is distinct from <xref href="OpenTD.Internal.Communication.StatusData" data-throw-if-not-resolved="false"></xref>. <xref href="OpenTD.Internal.Communication.StatusData" data-throw-if-not-resolved="false"></xref> reports the
outcome of an operation that <em>ran</em>; a non-success <xref href="OpenTD.Internal.Communication.TdErrorCode" data-throw-if-not-resolved="false"></xref> means
the operation did <em>not</em> run.
</p>
<p>
FORWARD COMPATIBILITY CONTRACT: this list may grow in future releases. A receiver that
encounters a value it does not recognize MUST treat it as a generic failure and MUST NOT
treat it as success. Never renumber or reuse existing values.
</p>

```csharp
public enum TdErrorCode
```

## Fields

`DeserializationFailed = 2` 

The request payload could not be decoded into the expected parameter types.



`HandshakeRequired = 7` 

The peer must complete a handshake on the current connection before this request can be
serviced.

<p>
The protocol is strictly client-initiated, so the server cannot ask for a handshake; it
can only refuse to proceed without one. A client receiving this should handshake and
retry the original request exactly once.
</p>
<p>
Typically raised after the server re-arms its pipe between requests, which the client
has no way to observe.
</p>



`MalformedRequest = 4` 

The request was malformed or structurally invalid.



`ProtocolMismatch = 5` 

The peer is speaking a protocol revision this server cannot service.



`SerializationFailed = 6` 

The server's response could not be encoded for return to the client.



`ServerException = 3` 

The method was invoked but threw. Details are in the server log.



`Success = 0` 

The request was dispatched normally. Inspect the payload for the result.



`UnknownMethod = 1` 

The server has no method by the requested name. Typically means a newer client called
an API that did not exist in this server's release.




