# RateLimiter {#discontinuous_ratelimiter .sone-topic}

Limits the rate of change of the signal passing through to the specified limit.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|numeric|Input signal|
|minrate|I|numeric|Minimum rate of change \(in Unit/sec\)|
|maxrate|I|numeric|Maximum rate of change \(Unit/sec\)|
|dt|I|numeric|Time step \(in seconds\)|
|y|O|numeric|Output signal|

