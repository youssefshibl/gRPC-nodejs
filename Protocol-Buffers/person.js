/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.example = (function() {

    /**
     * Namespace example.
     * @exports example
     * @namespace
     */
    var example = {};

    example.Person = (function() {

        /**
         * Properties of a Person.
         * @memberof example
         * @interface IPerson
         * @property {string|null} [name] Person name
         * @property {number|null} [age] Person age
         * @property {Array.<string>|null} [hobbies] Person hobbies
         */

        /**
         * Constructs a new Person.
         * @memberof example
         * @classdesc Represents a Person.
         * @implements IPerson
         * @constructor
         * @param {example.IPerson=} [properties] Properties to set
         */
        function Person(properties) {
            this.hobbies = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Person name.
         * @member {string} name
         * @memberof example.Person
         * @instance
         */
        Person.prototype.name = "";

        /**
         * Person age.
         * @member {number} age
         * @memberof example.Person
         * @instance
         */
        Person.prototype.age = 0;

        /**
         * Person hobbies.
         * @member {Array.<string>} hobbies
         * @memberof example.Person
         * @instance
         */
        Person.prototype.hobbies = $util.emptyArray;

        /**
         * Creates a new Person instance using the specified properties.
         * @function create
         * @memberof example.Person
         * @static
         * @param {example.IPerson=} [properties] Properties to set
         * @returns {example.Person} Person instance
         */
        Person.create = function create(properties) {
            return new Person(properties);
        };

        /**
         * Encodes the specified Person message. Does not implicitly {@link example.Person.verify|verify} messages.
         * @function encode
         * @memberof example.Person
         * @static
         * @param {example.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.age);
            if (message.hobbies != null && message.hobbies.length)
                for (var i = 0; i < message.hobbies.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.hobbies[i]);
            return writer;
        };

        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link example.Person.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.Person
         * @static
         * @param {example.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Person message from the specified reader or buffer.
         * @function decode
         * @memberof example.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.Person();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.age = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.hobbies && message.hobbies.length))
                            message.hobbies = [];
                        message.hobbies.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof example.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Person message.
         * @function verify
         * @memberof example.Person
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Person.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.hobbies != null && message.hasOwnProperty("hobbies")) {
                if (!Array.isArray(message.hobbies))
                    return "hobbies: array expected";
                for (var i = 0; i < message.hobbies.length; ++i)
                    if (!$util.isString(message.hobbies[i]))
                        return "hobbies: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Person message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.Person
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.Person} Person
         */
        Person.fromObject = function fromObject(object) {
            if (object instanceof $root.example.Person)
                return object;
            var message = new $root.example.Person();
            if (object.name != null)
                message.name = String(object.name);
            if (object.age != null)
                message.age = object.age | 0;
            if (object.hobbies) {
                if (!Array.isArray(object.hobbies))
                    throw TypeError(".example.Person.hobbies: array expected");
                message.hobbies = [];
                for (var i = 0; i < object.hobbies.length; ++i)
                    message.hobbies[i] = String(object.hobbies[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Person message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.Person
         * @static
         * @param {example.Person} message Person
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Person.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.hobbies = [];
            if (options.defaults) {
                object.name = "";
                object.age = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.hobbies && message.hobbies.length) {
                object.hobbies = [];
                for (var j = 0; j < message.hobbies.length; ++j)
                    object.hobbies[j] = message.hobbies[j];
            }
            return object;
        };

        /**
         * Converts this Person to JSON.
         * @function toJSON
         * @memberof example.Person
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Person.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Person
         * @function getTypeUrl
         * @memberof example.Person
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Person.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/example.Person";
        };

        return Person;
    })();

    return example;
})();

module.exports = $root;
