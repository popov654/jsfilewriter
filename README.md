### FileWriter API implementation

Text charset conversion is based on https://github.com/inexorabletash/text-encoding/

## Usage

`let fw = new FileWriter()`

then

`fw.write(TypedArray|Blob|File data, String? filename, String? mimeType)`

`fw.writeText(String text, String? filename, String? charset)`

or

`FileWriter.write(TypedArray|Blob|File data, String? filename, String? mimeType)`

`FileWriter.writeText(String text, String? filename, String? charset)`
