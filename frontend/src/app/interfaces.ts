export interface IFormStructure {
    column1: IColumn;
    column2: IColumn;
}

export interface IColumn {
    inputs: IInput[];
}

export interface IInput {
    id: string;
    inputType: 'Int' | 'String' | 'Boolean';
    text: string;
}

export interface IFormData {
    data: IInputData[];
}

export interface IInputData {
    id: string;
    value: string;
}