/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule8Model
 */
class Rule8Model extends BaseModel {
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
        this.destPort = this.constructor.getValue(obj.destPort);
        this.destCidr = this.constructor.getValue(obj.destCidr);
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
            { name: 'destPort', realName: 'destPort' },
            { name: 'destCidr', realName: 'destCidr' },
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

module.exports = Rule8Model;
