export default class TestResult {
    public userId: string;
    public name: string;
    public result: number;

    constructor(userId: string, name: string, result: number){
        this.userId = userId;
        this.name = name;
        this.result = result;
    }
}