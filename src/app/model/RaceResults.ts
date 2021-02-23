export interface RaceResults {
    MRData:{
            StandingsTable:{
                    StandingsLists:[{
                            DriverStandings:[{
                                    Driver:{
                                            familyName: string
                                            givenName: string
                                            nationality: string
                                    },
                                    points:string,
                                    position:string
                            }]
                    }]
            }
    }
}