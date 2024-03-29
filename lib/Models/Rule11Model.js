/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule11Model
 */
class Rule11Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.comment = this.constructor.getValue(obj.comment);
        this.policy = this.constructor.getValue(obj.policy);
        this.protocol = this.constructor.getValue(obj.protocol);
        this.srcPort = this.constructor.getValue(obj.srcPort);
        this.srcCidr = this.constructor.getValue(obj.srcCidr);
        this.destPort = this.constructor.getValue(obj.destPort);
        this.destCidr = this.constructor.getValue(obj.destCidr);
        this.syslogEnabled = this.constructor.getValue(obj.syslogEnabled);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'comment', realName: 'comment' },
            { name: 'policy', realName: 'policy' },
            { name: 'protocol', realName: 'protocol' },
            { name: 'srcPort', realName: 'srcPort' },
            { name: 'srcCidr', realName: 'srcCidr' },
            { name: 'destPort', realName: 'destPort' },
            { name: 'destCidr', realName: 'destCidr' },
            { name: 'syslogEnabled', realName: 'syslogEnabled' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Rule11Model;
