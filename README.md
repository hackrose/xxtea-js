# XXTEA for HTML5

   For  bower(http://bower.io), a package manager for the web.

## Introduction

XXTEA is a fast and secure encryption algorithm. This is a XXTEA library for HTML5.

It is different from the original XXTEA encryption algorithm. It encrypts and decrypts Uint8Array instead of uint32[], and the key is also Uint8Array. If you want to encrypt String, you can use xxtea.toBytes(str) to convert String to Uint8Array, when you decrypt Uint8Array, you can use xxtea.toString(bytes) to convert the result to String. Conversion between string and Uint8Array is using UTF8 encoding.

## Usage

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>XXTEA test</title>
    </head>
    <body>
        <script src="/dist/js/xxtea.min.js" type="text/javascript"></script>
        <script type="text/javascript">
            var str = "Hello World! 你好，中国！";
            var key = "1234567890";
            var encrypt_data = xxtea.encrypt(xxtea.toBytes(str), xxtea.toBytes(key));
            console.log((btoa(String.fromCharCode.apply(String, encrypt_data))));
            var decrypt_data = xxtea.toString(xxtea.decrypt(encrypt_data, xxtea.toBytes(key)));
            console.assert(str === decrypt_data);
        </script>
    </body>
</html>
```
