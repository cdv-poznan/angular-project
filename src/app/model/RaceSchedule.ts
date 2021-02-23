export interface RaceSchedule {
    MRData:{
            StandingsTable:{
                    StandingsLists:[{
                        ConstructorStandings:[{
                            Constructor:{
                                name:string;
                                nationality:string
                            },
                            points:string,
                            position:string
                            }]
                    }]
            }

    }
}