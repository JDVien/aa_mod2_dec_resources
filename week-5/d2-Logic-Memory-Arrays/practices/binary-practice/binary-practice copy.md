# Binary, number base practice

In this exercise, translate the following values into the appropriate number base


## Binary to base 10
ex. 2^0 = 1
    2^1 = 2
            1 + 2 = 3

1. 0b1010 = 10
2. 0b0011 = 3

## Binary to hexadecimal

1. 0b1010 = 0xA
2. 0b0011 = 0x3

## Hexadecimal to base 10

ex. 16^0 = 1
    16^1 = 16 etc etc

1. 0xa1 = 161
2. 0xff = 255

## Hexadecimal to binary

1. 0xa1 = 161 / 2 = 80r1 = 80r0/2 = 40 = 40r0/2 = 20r0/2 = 10r0/2 = 5/2 = 2r1 = 2/2 = 1/2 = 0 r1

----> 0b10100001
2. 0xff = 0b11111111
    (each f is 1111)
## Base 10 to binary
// divide by the base
// 8/2 = 4r0 -> 4/2 = 2r0 -> 2/2 = 1r0 = 1/2 = 0r1 ---> 0b1000
1. 8 = 0b1000
2. 24 = 0b011000
3. 255 = 0b11111111

## Base 10 to hexadecimal

1. 8 = 0x8
2. 24 --> 24/16 = 1r8 etc etc
3. 255

## Base 10 to ASCII

1. 65 = String.fromCharCode(65) = 'A' // run this in node
2. 66
3. 97
4. 98

## Hexadecimal to ASCII

1. 0x41 = String.fromCharCode(0x41) = 'A'
2. 0x42 = String.fromCharCode(parseInt(0x42)) = 'B'
3. 0x61 = 'C'
4. 0x62 = 'D'

## Binary to ASCII

1. 0b01000001 = String.fromCharCode(0b01000001) = 'A'
2. 0b01000010
3. 0b01100001
4. 0b01100010

parseInt(01100010) = 294920
parseInt('01100010', 2) = 98
the second argument is the base
