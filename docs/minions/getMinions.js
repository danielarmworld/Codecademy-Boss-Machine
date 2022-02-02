module.exports = {
    get:{
        tags:['Boss Machine API Options'],
        description: "Get an array of all minions",
        operationId: "getMinions",
        responses:{
            '200':{
                description:"Array of minions is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Minion"
                        }
                    }
                }
            },
            '404':{
                description: "Array of minions is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"We can't find the minions",
                                internal_code:"Empty minions array"
                            }
                        }
                    }
                }
            }
        }
    }
}