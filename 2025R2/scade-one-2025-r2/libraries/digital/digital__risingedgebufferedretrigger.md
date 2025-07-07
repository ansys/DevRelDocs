# RisingEdgeBufferedRetrigger {#risingedgebufferedretrigger .sone-topic}

Detects a rising edge \(false to true transition\) and buffers the output during a specified number of cycles. If a rising edge occurs while the output is buffered, it is detected, and buffer is extended by number of cycles.

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

