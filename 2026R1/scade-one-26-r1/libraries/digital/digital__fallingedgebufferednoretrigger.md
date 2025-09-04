# FallingEdgeBufferedNoRetrigger

Detects a falling edge \(true to false transition\) and buffers the output during a specified number of cycles. If a falling edge occurs while the output is buffered, it is ignored.

Output value at first cycle is false.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|in|I|bool|Observed flow|
|cycles|I|integer|Number of cycles to keep output buffered<br>Range: \>0|
|out|O|bool|Detection flag|

**Parent topic:**[Digital](./digital.md)

