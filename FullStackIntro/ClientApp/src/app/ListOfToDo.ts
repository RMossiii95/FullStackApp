export interface ListOfToDo {
    id?: number;
    nameOfTeamMemver?: string;
    
    shortDescription: string;
    dueDate?: string;
    completed?: boolean;
}


export class Convert {
    public static toToDoItem(json: string): ListOfToDo[] {
        return JSON.parse(json);
    }

    public static toDoItemToJson(value: any[]): string {
        return JSON.stringify(value);
    }
}