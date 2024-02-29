(function (GLOBAL) {
    var JSUnzip = function (fileContents, progressBar) {
        this.fileContents = new JSUnzip.BigEndianBinaryStream(fileContents);
        this.progressBar = progressBar;
    };
    GLOBAL.JSUnzip = JSUnzip;
    JSUnzip.MAGIC_NUMBER = 0x04034b50;

    JSUnzip.prototype = {
        readEntries: function (callBack) {
            if (!this.isZipFile()) {
                throw new Error("File is not a Zip file.");
            }

            var totalFileBytes;
            if (this.progressBar) {
                totalFileBytes = this.fileContents.stream.byteLength;
                this.progressBar.Start(totalFileBytes * 1.25); // assume reading of zip file takes 80% if time to load
            }
            this.entries = {};
            this.entries.totalZipFileBytes = totalFileBytes;
            function BuildEntries() {
                var e;
                try {
                    e = new JSUnzip.ZipEntry(this.fileContents);
                } catch (err) {
                    alert(err);
                    this.entries = {};
                    return;
                }
                if (this.progressBar)
                    this.progressBar.Update(this.fileContents.currentByteIndex);
                if (e.data) {
                    this.entries[e.fileName] = e.data;
                    setTimeout(BuildEntries.bind(this), 0);
                } else {
                    if (this.progressBar)
                        this.progressBar.Update(totalFileBytes);
                    this.fileContents = null; // GC
                    //this.progressBar.Stop(); <-- leave it open, will close it later
                    callBack();
                }
            }
            setTimeout(BuildEntries.bind(this), 0);
        },

        isZipFile: function () {
            return this.fileContents.getByteRangeAsNumber(0, 4) === JSUnzip.MAGIC_NUMBER;
        }
    };

    JSUnzip.ZipEntry = function (binaryStream) {
        this.signature = binaryStream.getNextBytesAsNumber(4);
        if (this.signature !== JSUnzip.MAGIC_NUMBER) {
            return;
        }

        this.versionNeeded = binaryStream.getNextBytesAsNumber(2);
        this.bitFlag = binaryStream.getNextBytesAsNumber(2);
        this.compressionMethod = binaryStream.getNextBytesAsNumber(2);
        this.timeBlob = binaryStream.getNextBytesAsNumber(4);

        if (this.isEncrypted()) {
            throw "File contains encrypted entry. Not supported.";
        }

        if (this.isUsingUtf8()) {
            throw "File is using UTF8. Not supported.";
        }

        this.crc32 = binaryStream.getNextBytesAsNumber(4);
        this.compressedSize = binaryStream.getNextBytesAsNumber(4);
        this.uncompressedSize = binaryStream.getNextBytesAsNumber(4);

        if (this.isUsingZip64()) {
            throw "File is using Zip64 (4gb+ file size). Not supported";
        }

        this.fileNameLength = binaryStream.getNextBytesAsNumber(2);
        this.extraFieldLength = binaryStream.getNextBytesAsNumber(2);

        this.fileName = binaryStream.getNextBytesAsString(this.fileNameLength);
        binaryStream.SkipOver(this.extraFieldLength);

        if (this.isUsingBit3TrailingDataDescriptor()) {
            if (!this.ReadTrailingDataDescriptor(binaryStream))
                throw "File is using bit 3 trailing data descriptor. Not supported.";
        }

        if (this.fileName == "SpaceClaim/Graphics/facets.xaml")
            throw "This version is not supported";
        else if (this.fileName == "SpaceClaim/Graphics/facets.bin")
            this.data = binaryStream.getNextBytesAsBinary(this.compressedSize);
        else if (this.fileName == "SpaceClaim/Graphics/renderlist.xml" ||
                   this.fileName == "SpaceClaim/document.xml" ||
                   this.fileName.indexOf('.glsl') != -1 ||
                   this.fileName.indexOf('.json') != -1 ||
                   this.fileName.indexOf('.mup') != -1 ||
                   this.fileName.indexOf('.view') != -1 ||
                   this.fileName.indexOf('.gltf') != -1) {
            var inData = binaryStream.getNextBytesAsBinary(this.compressedSize);
            if (this.compressionMethod === 8) {
                // compressed
                this.data = new Uint8Array(this.uncompressedSize);
                JSInflate.inflate(inData, this.data);
            } else
                this.data = inData;
            this.data = binaryStream.ConvertToString(this.data);
        } else if (this.fileName.indexOf('.png') != -1 ||
                   this.fileName.indexOf('.bin') != -1 ||
                   this.fileName.indexOf('.txt') != -1 ||
                   this.fileName.indexOf('.pb') != -1 ||
                   this.fileName.indexOf('.avz') != -1) {
            var inData = binaryStream.getNextBytesAsBinary(this.compressedSize);
            this.data = new ArrayBuffer(this.uncompressedSize);
            var outData = new Uint8Array(this.data);
            if (this.compressionMethod === 8) {
                // compressed
                JSInflate.inflate(inData, outData);
            } else {
                // uncompressed
                for (var i = 0; i < this.compressedSize; ++i)
                    outData[i] = inData[i];
            }
        } else {
            this.data = "Dummy";
            binaryStream.SkipOver(this.compressedSize);
        }

        if (this.isUsingBit3TrailingDataDescriptor())
            binaryStream.SkipOver(16); // length of trailing header
    };

    JSUnzip.ZipEntry.prototype = {
        isEncrypted: function () {
            return (this.bitFlag & 0x01) === 0x01;
        },

        isUsingUtf8: function () {
            return false;
            // RJF Removed for compatibility with mechanical .avz files that have this bit set incorrectly
            // return (this.bitFlag & 0x0800) === 0x0800;
        },

        isUsingBit3TrailingDataDescriptor: function () {
            return (this.bitFlag & 0x0008) === 0x0008;
        },

        isUsingZip64: function () {
            return this.compressedSize === parseInt("0xFFFFFFFF", 16) ||
                   this.uncompressedSize === parseInt("0xFFFFFFFF", 16);
        },

        ReadTrailingDataDescriptor: function (binaryStream) {
            // remember current location
            var startLocation = binaryStream.currentByteIndex;

            var crc = 0;
            var compressedSize = 0;
            var uncompressSize = 0;
            for (var loc = binaryStream.currentByteIndex; loc < binaryStream.stream.byteLength; ++loc) {
                if (binaryStream.stream[loc] === 0x50 && binaryStream.stream[loc + 1] === 0x4b && binaryStream.stream[loc + 2] === 0x07 && binaryStream.stream[loc + 3] === 0x08) {
                    binaryStream.currentByteIndex = loc + 4;
                    this.crc32 = binaryStream.getNextBytesAsNumber(4);
                    this.compressedSize = binaryStream.getNextBytesAsNumber(4);
                    if (this.compressedSize === loc - startLocation) {
                        this.uncompressedSize = binaryStream.getNextBytesAsNumber(4);
                        binaryStream.currentByteIndex = startLocation;
                        return true;
                    }
                }
            }

            // reset current location
            binaryStream.currentByteIndex = startLocation;
            return false;
        }
    };

    JSUnzip.BigEndianBinaryStream = function (stream) {
        this.stream = new Uint8Array(stream);
        this.resetByteIndex();
    };

    JSUnzip.BigEndianBinaryStream.prototype = {
        // The index of the current byte, used when we step through the byte
        // with getNextBytesAs*.
        resetByteIndex: function () {
            this.currentByteIndex = 0;
        },
        ConvertToString: function (a8Arr) {
            var b1 = a8Arr[0];
            var b2 = a8Arr[1];
            var b3 = a8Arr[2];

            if (b1 === 0xFF && b2 === 0xFE) {
                // 16-bit Unicode (little-endian)
                var str = "";
                var j = 0;
                for (var i = 2; i < a8Arr.length; i += 2) {
                    str += String.fromCharCode((a8Arr[i + 1] << 8) + a8Arr[i]);
                }

                return str;
            }

            // convert a8Arr to str
            var i = (b1 === 0xEF && b2 === 0xBB && b3 === 0xBF) ? 3 : 0;
            var str = "";
            for (; i < a8Arr.length; ++i) {
                str += String.fromCharCode(a8Arr[i]);
            }

            //if (b1 === 0xEF && b2 === 0xBB && b3 === 0xBF) {
                // UTF-8
                return decodeURIComponent(escape(str));
            //}

            // ASCII or unknown
            return str;
        },

        SkipOver: function (steps) {
            this.currentByteIndex += steps;
        },

        getByteAt: function (index) {
            return this.stream[index];
        },

        getNextBytesAsNumber: function (steps) {
            var res = this.getByteRangeAsNumber(this.currentByteIndex, steps);
            this.currentByteIndex += steps;
            return res;
        },

        getNextBytesAsString: function (steps) {
            var res = this.getByteRangeAsString(this.currentByteIndex, steps);
            this.currentByteIndex += steps;
            return res;
        },

        getNextBytesAsBinary: function (steps) {
            var res = this.getByteRangeAsBinary(this.currentByteIndex, steps);
            this.currentByteIndex += steps;
            return res;
        },

        // Big endian, so we're going backwards.
        getByteRangeAsNumber: function (index, steps) {
            var result = 0;
            var i = index + steps - 1;
            while (i >= index) {
                result = (result << 8) + this.getByteAt(i);
                i--;
            }
            return result;
        },

        getByteRangeAsString: function (index, steps) {
            var buf = new Uint8Array(this.stream.buffer, index, steps);
            return String.fromCharCode.apply(String, buf);
        },

        getByteRangeAsBinary: function (index, steps) {
            return new Uint8Array(this.stream.buffer, index, steps);
        }
    };
} (this));
