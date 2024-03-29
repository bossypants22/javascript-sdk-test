/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSwitchSettingsModel
 */
class UpdateNetworkSwitchSettingsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.useCombinedPower = this.constructor.getValue(obj.useCombinedPower);
        this.powerExceptions = this.constructor.getValue(obj.powerExceptions);
        this.vlan = this.constructor.getValue(obj.vlan);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'useCombinedPower', realName: 'useCombinedPower' },
            {
                name: 'powerExceptions',
                realName: 'powerExceptions',
                array: true,
                type: 'PowerExceptionModel',
            },
            { name: 'vlan', realName: 'vlan' },
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

module.exports = UpdateNetworkSwitchSettingsModel;
