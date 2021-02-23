export interface Drivers {
    MRData:{
            RaceTable:{
                    Races:[{
                        raceName:string,
                       Results:[{
                            position:string,
                            points:string,
                                Constructor:{
                                        name:string,
                                        nationality:string
                                },
                                FastestLap:{
                                    AverageSpeed:{
                                        units: string,
                                        speed: string
                                    }
                                },
                       }]
                    }]
            }

    }
}