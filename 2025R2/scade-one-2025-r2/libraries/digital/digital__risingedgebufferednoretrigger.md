# RisingEdgeBufferedNoRetrigger {#risingedgebufferednoretrigger .sone-topic}

Detects a rising edge \(false to true transition\) and buffers output during specified number of cycles. If a rising edge occurs while the output is buffered, it is ignored.

Output value at first cycle is false.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|in|I|bool|Observed flow|
|cycles|I|integer|Number of cycles to keep output buffered

Range: \>0

|
|out|O|bool|Detection flag|

**Parent topic:**[Digital](../../libraries/digital/digital.md)

