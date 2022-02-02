module.exports = {
    get:{
        tags:['Boss Machine API Options'],
        description: "Get data on a minion",
        operationId: "getMinion",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "Id of minion's required",
            }
        ],
        responses:{
            '200':{
                description:"Single instance of minion is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Minion"
                        }
                    }
                }
            },
            '404':{
                description: "No minion is not found",
                content:{
                    'application/json':{
                        schema:{
                            example:{
                                message:"Minion not found",
                            }
                        }
                    }
                }
            }
        }
    }
}