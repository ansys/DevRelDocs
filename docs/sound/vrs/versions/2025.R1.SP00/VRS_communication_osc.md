# OSC Protocol

Open Sound Control \(OSC\) is a protocol for communication among computers, sound synthesizers, and other multimedia devices that is optimized for modern networking technology and has been used in <a target="_blank" href="https://cnmat.berkeley.edu/search/node/OSC">many application areas</a>.

OSC was defined and is supported by **CNMAT** of <a target="_blank" href="http://cnmat.berkeley.edu/">Berkeley University</a>.

\(from the CNMAT OSC documentation\):

>The unit of transmission of OSC is an OSC Packet. Any application that sends OSC Packets is an OSC Client. Any application that receives OSC Packets is an OSC Server.

An OSC packet consists of its contents, a contiguous block of binary data, and its size, the number of 8-bit bytes that comprise the contents. The size of an OSC packet is always a multiple of 4.

The contents of an OSC packet must be either an OSC Message or an OSC Bundle. The first byte of the packet's contents unambiguously distinguishes between these two alternatives.

Note : VR Sound communication uses only the "OSC MESSAGE".

"OSC STRING" is a sequence of non-null ASCII characters followed by a null, followed by 0-3 additional null characters to make the total number of bits a multiple of 32.

Example\_1: the string ‘OSC' is coded as follows

```
[O]+[S]+[C]+[\0]
```

Example\_2: the string ‘DATA' is coded as follows

```
[D]+[A]+[T]+[A]+[\0]+[\0]+[\0]+[\0]
```

Example\_3: the string ‘SPEED' is coded 

```
[S]+[P]+[E]+[E]+[D]+[\0]+[\0]+[\0]
```

An « OSC MESSAGE » contains the following:

```
{ADDRESS_PATTERN}{TYPE_TAG_STRING}[binary data]
```

1. A block such as « ADDRESS PATTERN »: \{\[‘/'\]KEYWORD\} is an OSC STRING that starts with the slash character « / ». Following the slash character one use a KEYWORD explaining the type of audio processing applied on the data passed in argument.

Warning : for VR Sound, the slash \(« / »\) character must NOT appear !

2. A block such as « TYPE\_TAG\_STRING » : \{‘,'\[TYPE\_TAG\]\} is an OSC STRING beginning with a comma and followed by as many « type tags » as the count of following data.

A TYPE TAG is a set of letters coding the binary data type following. These types used by VR Sound are: \{‘i','f','s'\}

- « **i** » integer 32 bits
- « **f** » for single precision floating point values \(32 bits\)
- « **s** » OSC String

![OSC Communication](images/img29.jpg)

For more information, see the original <a target="_blank" href="http://cnmat.org/OpenSoundControl/OSC-spec.html">CNMAT</a>.
