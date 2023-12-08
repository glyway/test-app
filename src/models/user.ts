export default interface User {
    id: string;
    results: {
        testName: string;
        result: number;
    }[]
}