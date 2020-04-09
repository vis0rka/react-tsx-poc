class FilterType {
    type: string;
    isShown: boolean;
    subtypes: Array<any>;

    constructor(type: string, isShown: boolean, subtypes: Array<any>) {
        this.type = type;
        this.isShown = isShown;
        this.subtypes = subtypes;
    }
}
export default FilterType;
