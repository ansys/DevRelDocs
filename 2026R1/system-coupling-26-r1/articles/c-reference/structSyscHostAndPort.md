# Structure SyscHostAndPort

![][C]
![][public]

**Definition**: `syscComm.h` (line 25)

Provide a structure for host and port for remote connections.

**Parameters**:

* **host**: remote server host name
* **port**: remote server port number

## Members

* [host](structSyscHostAndPort.md#structSyscHostAndPort_1a3e3c89fa6eb9d46d4584f8116c7125b1)
* [port](structSyscHostAndPort.md#structSyscHostAndPort_1a82ba5870d40686431caeb7271ab65e9b)

## Public attributes

<a id="structSyscHostAndPort_1a3e3c89fa6eb9d46d4584f8116c7125b1"></a>
### Variable host

![][public]

**Definition**: `syscComm.h` (line 26)


```
char SyscHostAndPort::host[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```








**Type**: char

<a id="structSyscHostAndPort_1a82ba5870d40686431caeb7271ab65e9b"></a>
### Variable port

![][public]

**Definition**: `syscComm.h` (line 27)


```
unsigned short SyscHostAndPort::port
```








**Type**: unsigned short

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)