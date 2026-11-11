# Namespace OpenTD.Internal.Communication

### Classes

 [AdditionalUnitsSettings](OpenTD.Internal.Communication.AdditionalUnitsSettings.md)

 [OpenTDPipeServer](OpenTD.Internal.Communication.OpenTDPipeServer.md)

 [PipeService](OpenTD.Internal.Communication.PipeService.md)

 [StatusData](OpenTD.Internal.Communication.StatusData.md)

 [TdData](OpenTD.Internal.Communication.TdData.md)

 [TdProtocol](OpenTD.Internal.Communication.TdProtocol.md)

Constants defining the OpenTD wire protocol, shared by both endpoints.

 [TdRequest](OpenTD.Internal.Communication.TdRequest.md)

 [TdRequestEncoder](OpenTD.Internal.Communication.TdRequestEncoder.md)

 [TdResponse](OpenTD.Internal.Communication.TdResponse.md)

 [TdResponseEncoder](OpenTD.Internal.Communication.TdResponseEncoder.md)

### Enums

 [OpenTDPipeServer.States](OpenTD.Internal.Communication.OpenTDPipeServer.States.md)

 [TdErrorCode](OpenTD.Internal.Communication.TdErrorCode.md)

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


