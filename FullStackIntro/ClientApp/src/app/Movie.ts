//so what is a typescript interface vs class?
//a classe may declare methods and properties, fills the same role as a c#
//a ts interface operates differently than a c# one,
//a ts interface exist purely to contain properties, an all of those properties have the option of being uninitialized
//not every API's json data will return consistently in the same format

//in a js/ts class you MUST initialize all properties
export interface Movie {
    id: number;
    title: string;
    genre: string;
    runTime: number;
    year: number;
}
export class Convert {
    public static toMovie(json: string): Movie {
        return JSON.parse(json);
    }
    public static movieToJson(value: Movie): string {
        return JSON.stringify(value);
    }
}
