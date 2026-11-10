# Speos Core command lines

## Description

The Speos Core command lines for Speos allow you to create scripts to automate multiple simulation launches without using the Speos Core interface.

## Command Lines

|Command Line|Description|
|------------|-----------|
|FILENAME|Speos Core system file to open|
|-C|Command line mode \(no GUI\)|
|-G|Launch Speos GPU Solver|
|-S \(SSS\)|Launch simulation number SSS on FILENAME|
|-t \(ttt\)|Specified simulation thread number|
|-p \(ppp\)|Specify process priority (ppp)<br>0 - 5 <ul><li>0: idle</li><li>2: normal</li><li>5: realtime</li></ul>|
|-r \(rrr\)|Specifies simulation ray or pass number \(rrr\)|
|-D \(DDD\)|Specifies simulation duration in minutes \(DDD\)|
|-J \(JJJ\)|Specifies HPC job name \(JJJ\)|
|-N \(NNN, default = 1\)|Specifies HPC job node number \(NNN\)|
|-W \(WWW\)|Specifies HPC job wall clock in hours \(WWW\)|
|-?|show the help|
