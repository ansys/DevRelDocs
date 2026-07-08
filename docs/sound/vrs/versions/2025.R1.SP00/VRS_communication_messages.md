# Messages Format

Messages are sent as strings, using OSC protocol. They are composed of a keyword and numerical values separated by a space: KEY\_WORD VALUE1 VALUE2 ...

Each value can be a string, and int or a float. Messages end with the line feed character \(ASCII code 10\). On the audio PC, messages are received on ports 5555, 5556, 5557, 5558, 5559, 5560, 5561, 5562, 5563, and 5564. Messages can be received on any of these ports for both UDP and TCP/IP.

The sending rate of the messages must not exceed 60 Hz.
