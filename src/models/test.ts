import TestQuestion from "./question";

export default interface Test {
    name: string;
    questions: TestQuestion[];
}