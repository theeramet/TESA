// let myString = "";

// let decodedstring = Buffer.from(myString,'hex');
// console.log(decodedstring);

// Module import
var Parser = require("binary-parser").Parser;
 
// Build an IP packet header Parser
var ipHeader = new Parser()
  .endianess("big")
  .bit4("version")
  .bit4("headerLength")
  .uint8("tos")
  .uint16("packetLength")
  .uint16("id")
  .bit3("offset")
  .bit13("fragOffset")
  .uint8("ttl")
  .uint8("protocol")
  .uint16("checksum")
  .array("src", {
    type: "uint8",
    length: 4
  })
  .array("dst", {
    type: "uint8",
    length: 4
  });
 
// Prepare buffer to parse.
var buf = Buffer.from("0073258e0167010f02687f88090d03ab000a03000401050064060100", "hex");
 
// Parse buffer and show result
console.log(ipHeader.parse(buf));