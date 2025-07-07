# Times {#times .sone-topic}

Counts down the repeated occurrence if the condition input is true before rising a flag.

This flag is only active in the cycle in which this number of times was counted. False otherwise.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|in|I|bool|Observed flow|
|limit|I|integer|Occurrence limit|
|out|O|bool|Detection flag|

**Parent topic:**[Flows](../../libraries/flows/flows.md)

