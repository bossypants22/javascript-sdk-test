/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule7Model
 */
class Rule7Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.lanIp = this.constructor.getValue(obj.lanIp);
        this.uplink = this.constructor.getValue(obj.uplink);
        this.publicPort = this.constructor.getValue(obj.publicPort);
        this.localPort = this.constructor.getValue(obj.localPort);
        this.allowedIps = this.constructor.getValue(obj.allowedIps);
        this.protocol = this.constructor.getValue(obj.protocol);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'lanIp', realName: 'lanIp' },
            { name: 'uplink', realName: 'uplink' },
            { name: 'publicPort', realName: 'publicPort' },
            { name: 'localPort', realName: 'localPort' },
            { name: 'allowedIps', realName: 'allowedIps', array: true },
            { name: 'protocol', realName: 'protocol' },
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

module.exports = Rule7Model;
