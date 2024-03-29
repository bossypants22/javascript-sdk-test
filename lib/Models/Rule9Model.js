/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule9Model
 */
class Rule9Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.definitions = this.constructor.getValue(obj.definitions);
        this.perClientBandwidthLimits = this.constructor.getValue(obj.perClientBandwidthLimits);
        this.dscpTagValue = this.constructor.getValue(obj.dscpTagValue);
        this.pcpTagValue = this.constructor.getValue(obj.pcpTagValue);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'definitions', realName: 'definitions', array: true, type: 'DefinitionModel' },
            {
                name: 'perClientBandwidthLimits',
                realName: 'perClientBandwidthLimits',
                type: 'PerClientBandwidthLimitsModel',
            },
            { name: 'dscpTagValue', realName: 'dscpTagValue' },
            { name: 'pcpTagValue', realName: 'pcpTagValue' },
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

module.exports = Rule9Model;
