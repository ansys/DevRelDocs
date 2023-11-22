gRPC Scalar Value Types

gRPC Scalar Value Types

[Prev](ch01s10.xhtml) 

 

 

* * *

gRPC Scalar Value Types
-----------------------

For C++, Java, Python, and Go, refer to the table immediately below, [Table 1.218, “gRPC Scalar Value Types (A)”](ch01s11.xhtml#sherlock_ug_table_gRPC_scalar_C_plus_java "Table 1.218. gRPC Scalar Value Types (A)")

For C#, PHP, and Ruby, refer to the table which follows, [Table 1.219, “gRPC Scalar Value Types (B)”](ch01s11.xhtml#sherlock_ug_table_gRPC_scalar_Types_B "Table 1.219. gRPC Scalar Value Types (B)")

**Table 1.218. gRPC Scalar Value Types (A)**

**.proto Type**

**Notes**

**C++**

**Java**

**Python**

**Go**

double

 

double

double

float

float64

float

 

float

float

float

float32

int32

Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead.

int32

int

int

int32

int64

Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead.

int64

long

int/long

int64

uint32

Uses variable-length encoding.

uint32

int

int/long

uint32

uint64

Uses variable-length encoding.

uint64

long

int/long

uint64

sint32

Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.

int32

int

int

int32

sint64

Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.

int64

long

int/long

int64

fixed32

Always four bytes. More efficient than uint32 if values are often greater than 2^28.

uint32

int

int

uint32

fixed64

Always eight bytes. More efficient than uint64 if values are often greater than 2^56.

uint64

long

int/long

uint64

sfixed32

Always four bytes.

int32

int

int

int32

sfixed64

Always eight bytes.

int64

long

int/long

int64

bool

 

bool

boolean

boolean

bool

string

A string must always contain UTF-8 encoded or 7-bit ASCII text.

string

string

str/ unicode

string

bytes

May contain any arbitrary sequence of bytes.

string

ByteString

str

\[\]byte

  

**Table 1.219. gRPC Scalar Value Types (B)**

**.proto Type**

**Notes**

**C#**

**PHP**

**Ruby**

double

 

double

float

Float

float

 

float

float

Float

int32

Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead.

int

integer

Bignum or Fixnum (as required)

int64

Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead.

long

integer/ string

Bignum

uint32

Uses variable-length encoding.

uint

integer

Bignum or Fixnum (as required)

uint64

Uses variable-length encoding.

ulong

integer/ string

Bignum or Fixnum (as required)

sint32

Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.

int

integer

Bignum or Fixnum (as required)

sint64

Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.

long

integer/ string

Bignum

fixed32

Always four bytes. More efficient than uint32 if values are often greater than 2^28.

uint

integer

Bignum or Fixnum (as required)

fixed64

Always eight bytes. More efficient than uint64 if values are often greater than 2^56.

ulong

integer/ string

Bignum

sfixed32

Always four bytes.

int

integer

Bignum or Fixnum (as required)

sfixed64

Always eight bytes.

long

integer/ string

Bignum

bool

 

bool

boolean

TrueClass/ FalseClass

string

A string must always contain UTF-8 encoded or 7-bit ASCII text.

string

string

String (UTF-8)

bytes

May contain any arbitrary sequence of bytes.

ByteString

string

String (ASCII-8BIT)

  

[Click here to return to the main index to Sherlock's APIs.](ch01s02.xhtml "Index to the Sherlock APIs")

* * *

[Prev](ch01s10.xhtml) 

 

 

Sherlock Stackup Service- SherlockStackupService.proto 

[Home](index.xhtml)